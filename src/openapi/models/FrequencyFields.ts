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

import type { FrequencyFieldsOneOf } from './FrequencyFieldsOneOf';
import {
    instanceOfFrequencyFieldsOneOf,
    FrequencyFieldsOneOfFromJSON,
    FrequencyFieldsOneOfFromJSONTyped,
    FrequencyFieldsOneOfToJSON,
} from './FrequencyFieldsOneOf';
import type { Set<string> } from './Set&lt;string&gt;';
import {
    instanceOfSet<string>,
    Set<string>FromJSON,
    Set<string>FromJSONTyped,
    Set<string>ToJSON,
} from './Set&lt;string&gt;';

/**
 * @type FrequencyFields
 * 
 * @export
 */
export type FrequencyFields = FrequencyFieldsOneOf | Set<string>;

export function FrequencyFieldsFromJSON(json: any): FrequencyFields {
    return FrequencyFieldsFromJSONTyped(json, false);
}

export function FrequencyFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrequencyFields {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...FrequencyFieldsOneOfFromJSONTyped(json, true), ...Set<string>FromJSONTyped(json, true) };
}

export function FrequencyFieldsToJSON(value?: FrequencyFields | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfFrequencyFieldsOneOf(value)) {
        return FrequencyFieldsOneOfToJSON(value as FrequencyFieldsOneOf);
    }
    if (instanceOfSet<string>(value)) {
        return Set<string>ToJSON(value as Set<string>);
    }

    return {};
}

