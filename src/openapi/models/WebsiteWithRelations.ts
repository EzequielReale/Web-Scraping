/* tslint:disable */
/* eslint-disable */
/**
 * package or prject name
 * Website crawling
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PageWithRelations } from './PageWithRelations';
import {
    PageWithRelationsFromJSON,
    PageWithRelationsFromJSONTyped,
    PageWithRelationsToJSON,
} from './PageWithRelations';
import type { WebsiteErrorWithRelations } from './WebsiteErrorWithRelations';
import {
    WebsiteErrorWithRelationsFromJSON,
    WebsiteErrorWithRelationsFromJSONTyped,
    WebsiteErrorWithRelationsToJSON,
} from './WebsiteErrorWithRelations';

/**
 * (tsType: WebsiteWithRelations, schemaOptions: { includeRelations: true })
 * @export
 * @interface WebsiteWithRelations
 */
export interface WebsiteWithRelations {
    /**
     * 
     * @type {string}
     * @memberof WebsiteWithRelations
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof WebsiteWithRelations
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WebsiteWithRelations
     */
    url: string;
    /**
     * 
     * @type {number}
     * @memberof WebsiteWithRelations
     */
    pageLevels: number;
    /**
     * 
     * @type {string}
     * @memberof WebsiteWithRelations
     */
    snippet: string;
    /**
     * 
     * @type {number}
     * @memberof WebsiteWithRelations
     */
    frequency?: number;
    /**
     * 
     * @type {string}
     * @memberof WebsiteWithRelations
     */
    userId?: string;
    /**
     * 
     * @type {Array<PageWithRelations>}
     * @memberof WebsiteWithRelations
     */
    pages?: Array<PageWithRelations>;
    /**
     * 
     * @type {Array<WebsiteErrorWithRelations>}
     * @memberof WebsiteWithRelations
     */
    websiteErrors?: Array<WebsiteErrorWithRelations>;
}

/**
 * Check if a given object implements the WebsiteWithRelations interface.
 */
export function instanceOfWebsiteWithRelations(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "pageLevels" in value;
    isInstance = isInstance && "snippet" in value;

    return isInstance;
}

export function WebsiteWithRelationsFromJSON(json: any): WebsiteWithRelations {
    return WebsiteWithRelationsFromJSONTyped(json, false);
}

export function WebsiteWithRelationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteWithRelations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'url': json['url'],
        'pageLevels': json['pageLevels'],
        'snippet': json['snippet'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'pages': !exists(json, 'pages') ? undefined : ((json['pages'] as Array<any>).map(PageWithRelationsFromJSON)),
        'websiteErrors': !exists(json, 'websiteErrors') ? undefined : ((json['websiteErrors'] as Array<any>).map(WebsiteErrorWithRelationsFromJSON)),
    };
}

export function WebsiteWithRelationsToJSON(value?: WebsiteWithRelations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'url': value.url,
        'pageLevels': value.pageLevels,
        'snippet': value.snippet,
        'frequency': value.frequency,
        'userId': value.userId,
        'pages': value.pages === undefined ? undefined : ((value.pages as Array<any>).map(PageWithRelationsToJSON)),
        'websiteErrors': value.websiteErrors === undefined ? undefined : ((value.websiteErrors as Array<any>).map(WebsiteErrorWithRelationsToJSON)),
    };
}

