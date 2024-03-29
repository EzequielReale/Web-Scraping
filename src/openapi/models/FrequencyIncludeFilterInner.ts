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
import type { FrequencyIncludeFilterItems } from './FrequencyIncludeFilterItems';
import {
    FrequencyIncludeFilterItemsFromJSON,
    FrequencyIncludeFilterItemsFromJSONTyped,
    FrequencyIncludeFilterItemsToJSON,
} from './FrequencyIncludeFilterItems';
import type { FrequencyScopeFilter } from './FrequencyScopeFilter';
import {
    FrequencyScopeFilterFromJSON,
    FrequencyScopeFilterFromJSONTyped,
    FrequencyScopeFilterToJSON,
} from './FrequencyScopeFilter';

/**
 * 
 * @export
 * @interface FrequencyIncludeFilterInner
 */
export interface FrequencyIncludeFilterInner {
    /**
     * 
     * @type {string}
     * @memberof FrequencyIncludeFilterInner
     */
    relation?: FrequencyIncludeFilterInnerRelationEnum;
    /**
     * 
     * @type {FrequencyScopeFilter}
     * @memberof FrequencyIncludeFilterInner
     */
    scope?: FrequencyScopeFilter;
}


/**
 * @export
 */
export const FrequencyIncludeFilterInnerRelationEnum = {
    Websites: 'websites'
} as const;
export type FrequencyIncludeFilterInnerRelationEnum = typeof FrequencyIncludeFilterInnerRelationEnum[keyof typeof FrequencyIncludeFilterInnerRelationEnum];


/**
 * Check if a given object implements the FrequencyIncludeFilterInner interface.
 */
export function instanceOfFrequencyIncludeFilterInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FrequencyIncludeFilterInnerFromJSON(json: any): FrequencyIncludeFilterInner {
    return FrequencyIncludeFilterInnerFromJSONTyped(json, false);
}

export function FrequencyIncludeFilterInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrequencyIncludeFilterInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relation': !exists(json, 'relation') ? undefined : json['relation'],
        'scope': !exists(json, 'scope') ? undefined : FrequencyScopeFilterFromJSON(json['scope']),
    };
}

export function FrequencyIncludeFilterInnerToJSON(value?: FrequencyIncludeFilterInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'relation': value.relation,
        'scope': FrequencyScopeFilterToJSON(value.scope),
    };
}

