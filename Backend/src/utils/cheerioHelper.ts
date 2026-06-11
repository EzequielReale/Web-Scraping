import * as cheerio from 'cheerio';
import { Page, Website, WebsiteError } from "../models";
import { PageRepository, WebsiteErrorRepository, WebsiteRepository } from '../repositories';

const fetch = require('node-fetch');

const MAX_PAGES_LIMIT = 200;

function getDomainName(link: string): string {
  try {
    const url = new URL(link);
    return url.hostname.toLowerCase().replace(/^www\./, '');
  } catch (error) {
    console.error('Error getting domain name:', error);
    return '';
  }
}

export async function createError(website: Website, error: Error, websiteErrorRepository: WebsiteErrorRepository) {
  const err = new WebsiteError({
    log: `Razón: ${error.message}`,
    websiteId: website.id,
  });
  await websiteErrorRepository.create(err);
}

export async function processWebsite(
  website: Website,
  websiteRepository: WebsiteRepository,
  pageRepository: PageRepository,
  websiteErrorRepository: WebsiteErrorRepository
) {
  const visitedUrls = new Set<string>();
  const pagesToCreate: object[] = [];
  const errorsToCreate: string[] = [];

  const originalDomain = getDomainName(website.url);
  if (!originalDomain) {
    await createError(website, new Error(`URL base inválida: ${website.url}`), websiteErrorRepository);
    return;
  }

  // Queue of URLs to crawl
  const queue: { url: string; depth: number }[] = [{ url: website.url, depth: 1 }];
  visitedUrls.add(website.url);

  const maxConcurrency = 3;
  let activeCount = 0;

  const crawlUrl = async (url: string, depth: number) => {
    try {
      const response = await fetch(url, {
        timeout: 15000, // 15 seconds timeout
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }

      const body = await response.text();
      const $ = cheerio.load(body);

      // Evaluate snippet safely
      let result: Record<string, unknown> | undefined;
      try {
        const fn = eval(website.snippet);
        result = fn($);
      } catch (evalErr) {
        const msg = evalErr instanceof Error ? evalErr.message : String(evalErr);
        throw new Error(`Error en evaluación de snippet: ${msg}`);
      }

      // If snippet extracts data, save it
      if (result && typeof result === 'object') {
        pagesToCreate.push({
          ...result,
          url: url
        });
        console.log(`Added page ${url} to queue`);
      }

      // If we haven't reached the maximum depth, extract and queue links
      if (depth < website.pageLevels) {
        $('a').each((_, element) => {
          const link = $(element).attr('href');
          if (!link) return;

          try {
            // Resolve relative URLs using current page's URL as base
            const resolvedUrl = new URL(link, url);
            resolvedUrl.hash = ''; // Remove hash fragments
            const cleanLink = resolvedUrl.href;

            if (cleanLink.startsWith('http')) {
              const linkDomain = getDomainName(cleanLink);
              // Make sure we only crawl the same domain
              if (linkDomain === originalDomain && !visitedUrls.has(cleanLink)) {
                visitedUrls.add(cleanLink);
                queue.push({ url: cleanLink, depth: depth + 1 });
              }
            }
          } catch {
            // Ignore malformed links
          }
        });
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      errorsToCreate.push(`Error en URL ${url} (nivel ${depth}): ${msg}`);
    }
  };

  // Process the queue with limited concurrency
  while (queue.length > 0 || activeCount > 0) {
    if (pagesToCreate.length >= MAX_PAGES_LIMIT && queue.length > 0) {
      console.log(`Se alcanzó el límite de páginas (${MAX_PAGES_LIMIT}) para ${website.name}. Deteniendo el scraping.`);
      queue.length = 0;
    }

    if (queue.length > 0 && activeCount < maxConcurrency) {
      const nextItem = queue.shift()!;
      activeCount++;
      crawlUrl(nextItem.url, nextItem.depth)
        .finally(() => {
          activeCount--;
        })
        .catch(() => {
          // Errors are already handled inside crawlUrl
        });
    } else {
      // Yield to the event loop
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }

  // Update Database: Clean and Bulk Insert
  try {
    await websiteRepository.pages(website.id).delete();
    await websiteRepository.websiteErrors(website.id).delete();

    if (pagesToCreate.length > 0) {
      const pages = pagesToCreate.map(doc => new Page({
        doc: doc,
        websiteId: website.id
      }));
      await pageRepository.createAll(pages);
    }

    if (errorsToCreate.length > 0) {
      const errors = errorsToCreate.map(log => new WebsiteError({
        log: log,
        websiteId: website.id
      }));
      await websiteErrorRepository.createAll(errors);
    }
  } catch (dbError) {
    const msg = dbError instanceof Error ? dbError.message : String(dbError);
    console.error(`Error de base de datos para ${website.name}:`, msg);
    try {
      await websiteErrorRepository.create(new WebsiteError({
        log: `Error al guardar resultados en la base de datos: ${msg}`,
        websiteId: website.id
      }));
    } catch (err) {
      // Ignore database errors during backup logging
    }
  }
}