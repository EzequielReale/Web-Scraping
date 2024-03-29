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
 * @interface WebsiteErrorFilter1
 */
export interface WebsiteErrorFilter1 {
    /**
     * 
     * @type {number}
     * @memberof WebsiteErrorFilter1
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof WebsiteErrorFilter1
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof WebsiteErrorFilter1
     */
    skip?: number;
    /**
     * 
     * @type {PageFilterOrder}
     * @memberof WebsiteErrorFilter1
     */
    order?: PageFilterOrder;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof WebsiteErrorFilter1
     */
    where?: { [key: string]: any; };
    /**
     * 
     * @type {WebsiteErrorFields}
     * @memberof WebsiteErrorFilter1
     */
    fields?: WebsiteErrorFields;
}

/**
 * Check if a given object implements the WebsiteErrorFilter1 interface.
 */
export function instanceOfWebsiteErrorFilter1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebsiteErrorFilter1FromJSON(json: any): WebsiteErrorFilter1 {
    return WebsiteErrorFilter1FromJSONTyped(json, false);
}

export function WebsiteErrorFilter1FromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteErrorFilter1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
        'order': !exists(json, 'order') ? undefined : PageFilterOrderFromJSON(json['order']),
        'where': !exists(json, 'where') ? undefined : json['where'],
        'fields': !exists(json, 'fields') ? undefined : WebsiteErrorFieldsFromJSON(json['fields']),
    };
}

export function WebsiteErrorFilter1ToJSON(value?: WebsiteErrorFilter1 | null): any {
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
        'where': value.where,
        'fields': WebsiteErrorFieldsToJSON(value.fields),
    };
}

