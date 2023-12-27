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
import type { PageFilterOrder } from './PageFilterOrder';
import {
    PageFilterOrderFromJSON,
    PageFilterOrderFromJSONTyped,
    PageFilterOrderToJSON,
} from './PageFilterOrder';
import type { WebsiteErrorFields } from './WebsiteErrorFields';
import {
    WebsiteErrorFieldsFromJSON,
    WebsiteErrorFieldsFromJSONTyped,
    WebsiteErrorFieldsToJSON,
} from './WebsiteErrorFields';

/**
 * 
 * @export
 * @interface WebsiteErrorFilter
 */
export interface WebsiteErrorFilter {
    /**
     * 
     * @type {number}
     * @memberof WebsiteErrorFilter
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof WebsiteErrorFilter
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof WebsiteErrorFilter
     */
    skip?: number;
    /**
     * 
     * @type {PageFilterOrder}
     * @memberof WebsiteErrorFilter
     */
    order?: PageFilterOrder;
    /**
     * 
     * @type {WebsiteErrorFields}
     * @memberof WebsiteErrorFilter
     */
    fields?: WebsiteErrorFields;
}

/**
 * Check if a given object implements the WebsiteErrorFilter interface.
 */
export function instanceOfWebsiteErrorFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebsiteErrorFilterFromJSON(json: any): WebsiteErrorFilter {
    return WebsiteErrorFilterFromJSONTyped(json, false);
}

export function WebsiteErrorFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteErrorFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
        'order': !exists(json, 'order') ? undefined : PageFilterOrderFromJSON(json['order']),
        'fields': !exists(json, 'fields') ? undefined : WebsiteErrorFieldsFromJSON(json['fields']),
    };
}

export function WebsiteErrorFilterToJSON(value?: WebsiteErrorFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offset': value.offset,
        'limit': value.limit,
        'skip': value.skip,
        'order': PageFilterOrderToJSON(value.order),
        'fields': WebsiteErrorFieldsToJSON(value.fields),
    };
}
