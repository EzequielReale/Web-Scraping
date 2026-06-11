import { CronJob, cronJob } from '@loopback/cron';
import { repository } from '@loopback/repository';
import { Website } from '../models';
import { WebsiteRepository, PageRepository, WebsiteErrorRepository } from '../repositories';
import { processWebsite } from './cheerioHelper';

@cronJob()
export class MyCronJob extends CronJob {
  private websiteJobs: { [websiteId: string]: CronJob } = {};
  private websiteConfigs: { [websiteId: string]: { frequency: number; url: string } } = {};
  private currentlyProcessing = new Set<string>();

  constructor(
    @repository(WebsiteRepository) public websiteRepository: WebsiteRepository,
    @repository(PageRepository) public pageRepository: PageRepository,
    @repository(WebsiteErrorRepository) public websiteErrorRepository: WebsiteErrorRepository,
  ) {
    super({
      name: 'job-sync-websites',
      onTick: () => {
        this.syncWebsites().catch(err => {
          console.error('Error syncing website jobs:', err);
        });
      },
      cronTime: '*/10 * * * * *', // Run sync every 10 seconds
      start: true,
    });
  }

  private async syncWebsites() {
    const websites: Website[] = await this.websiteRepository.find();
    const activeIds = new Set(websites.map(w => w.id));

    // 1. Clean up jobs for websites that have been deleted
    for (const websiteId of Object.keys(this.websiteJobs)) {
      if (!activeIds.has(websiteId)) {
        console.log(`Stopping job for deleted website ID: ${websiteId}`);
        this.websiteJobs[websiteId].stop();
        delete this.websiteJobs[websiteId];
        delete this.websiteConfigs[websiteId];
        
        // Clean up data for deleted website
        this.websiteRepository.pages(websiteId).delete().catch(err => {
          console.error(`Error cleaning up pages for deleted website ${websiteId}:`, err);
        });
        this.websiteRepository.websiteErrors(websiteId).delete().catch(err => {
          console.error(`Error cleaning up errors for deleted website ${websiteId}:`, err);
        });
      }
    }

    // 2. Add or update jobs for existing websites
    for (const website of websites) {
      const existingConfig = this.websiteConfigs[website.id];
      const needsUpdate = existingConfig && (
        existingConfig.frequency !== website.frequency ||
        existingConfig.url !== website.url
      );

      if (!existingConfig || needsUpdate) {
        if (needsUpdate) {
          console.log(`Config changed for website ${website.name}. Restarting job...`);
          this.websiteJobs[website.id].stop();
        } else {
          console.log(`Starting new job for website ${website.name}`);
        }

        const cronTime = secondsToCron(website.frequency);
        
        const websiteJob = new CronJob({
          cronTime: cronTime,
          onTick: () => {
            // Prevent overlapping execution
            if (this.currentlyProcessing.has(website.id)) {
              console.log(`Scraping already in progress for ${website.name}. Skipping this execution.`);
              return;
            }

            this.currentlyProcessing.add(website.id);
            
            // Execute crawler in background
            (async () => {
              try {
                console.log(`Starting crawl for ${website.name} (${website.url})`);
                await processWebsite(
                  website,
                  this.websiteRepository,
                  this.pageRepository,
                  this.websiteErrorRepository
                );
                console.log(`Finished crawl for ${website.name}`);
              } catch (error) {
                console.error(`Unhandled error scraping website ${website.name}:`, error);
              } finally {
                this.currentlyProcessing.delete(website.id);
              }
            })().catch(err => {
              console.error(`Error executing crawl job for ${website.name}:`, err);
            });
          },
          start: true,
        });

        this.websiteJobs[website.id] = websiteJob;
        this.websiteConfigs[website.id] = {
          frequency: website.frequency,
          url: website.url,
        };
      }
    }
  }
}

function secondsToCron(seconds: number): string {
  if (seconds < 60) {
    return `*/${seconds} * * * * *`;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `0 */${minutes} * * * *`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `0 0 */${hours} * * *`;
  }
  const days = Math.floor(hours / 24);
  return `0 0 0 */${days} * *`;
}
