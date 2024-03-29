/* tslint:disable */
/* eslint-disable */
/**
 * searchservice
 * Website crawling
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FrequencyScopeFilterFields } from './FrequencyScopeFilterFields';
import {
    FrequencyScopeFilterFieldsFromJSON,
    FrequencyScopeFilterFieldsFromJSONTyped,
    FrequencyScopeFilterFieldsToJSON,
} from './FrequencyScopeFilterFields';
import type { FrequencyScopeFilterOrder } from './FrequencyScopeFilterOrder';
import {
    FrequencyScopeFilterOrderFromJSON,
    FrequencyScopeFilterOrderFromJSONTyped,
    FrequencyScopeFilterOrderToJSON,
} from './FrequencyScopeFilterOrder';

/**
 * 
 * @export
 * @interface FrequencyScopeFilter
 */
export interface FrequencyScopeFilter {
    /**
     * 
     * @type {number}
     * @memberof FrequencyScopeFilter
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FrequencyScopeFilter
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FrequencyScopeFilter
     */
    skip?: number;
    /**
     * 
     * @type {FrequencyScopeFilterOrder}
     * @memberof FrequencyScopeFilter
     */
    order?: FrequencyScopeFilterOrder;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FrequencyScopeFilter
     */
    where?: { [key: string]: any; };
    /**
     * 
     * @type {FrequencyScopeFilterFields}
     * @memberof FrequencyScopeFilter
     */
    fields?: FrequencyScopeFilterFields;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof FrequencyScopeFilter
     */
    include?: Array<{ [key: string]: any; }>;
}

/**
 * Check if a given object implements the FrequencyScopeFilter interface.
 */
export function instanceOfFrequencyScopeFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FrequencyScopeFilterFromJSON(json: any): FrequencyScopeFilter {
    return FrequencyScopeFilterFromJSONTyped(json, false);
}

export function FrequencyScopeFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrequencyScopeFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
        'order': !exists(json, 'order') ? undefined : FrequencyScopeFilterOrderFromJSON(json['order']),
        'where': !exists(json, 'where') ? undefined : json['where'],
        'fields': !exists(json, 'fields') ? undefined : FrequencyScopeFilterFieldsFromJSON(json['fields']),
        'include': !exists(json, 'include') ? undefined : json['include'],
    };
}

export function FrequencyScopeFilterToJSON(value?: FrequencyScopeFilter | null): any {
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
        'order': FrequencyScopeFilterOrderToJSON(value.order),
        'where': value.where,
        'fields': FrequencyScopeFilterFieldsToJSON(value.fields),
        'include': value.include,
    };
}

