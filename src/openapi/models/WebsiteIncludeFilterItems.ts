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
import type { WebsiteScopeFilter } from './WebsiteScopeFilter';
import {
    WebsiteScopeFilterFromJSON,
    WebsiteScopeFilterFromJSONTyped,
    WebsiteScopeFilterToJSON,
} from './WebsiteScopeFilter';

/**
 * 
 * @export
 * @interface WebsiteIncludeFilterItems
 */
export interface WebsiteIncludeFilterItems {
    /**
     * 
     * @type {string}
     * @memberof WebsiteIncludeFilterItems
     */
    relation?: WebsiteIncludeFilterItemsRelationEnum;
    /**
     * 
     * @type {WebsiteScopeFilter}
     * @memberof WebsiteIncludeFilterItems
     */
    scope?: WebsiteScopeFilter;
}


/**
 * @export
 */
export const WebsiteIncludeFilterItemsRelationEnum = {
    Pages: 'pages',
    WebsiteErrors: 'websiteErrors'
} as const;
export type WebsiteIncludeFilterItemsRelationEnum = typeof WebsiteIncludeFilterItemsRelationEnum[keyof typeof WebsiteIncludeFilterItemsRelationEnum];


/**
 * Check if a given object implements the WebsiteIncludeFilterItems interface.
 */
export function instanceOfWebsiteIncludeFilterItems(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebsiteIncludeFilterItemsFromJSON(json: any): WebsiteIncludeFilterItems {
    return WebsiteIncludeFilterItemsFromJSONTyped(json, false);
}

export function WebsiteIncludeFilterItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteIncludeFilterItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relation': !exists(json, 'relation') ? undefined : json['relation'],
        'scope': !exists(json, 'scope') ? undefined : WebsiteScopeFilterFromJSON(json['scope']),
    };
}

export function WebsiteIncludeFilterItemsToJSON(value?: WebsiteIncludeFilterItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'relation': value.relation,
        'scope': WebsiteScopeFilterToJSON(value.scope),
    };
}

