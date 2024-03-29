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
/**
 * (tsType: Partial<Frequency>, schemaOptions: { partial: true })
 * @export
 * @interface FrequencyPartial
 */
export interface FrequencyPartial {
    /**
     * 
     * @type {string}
     * @memberof FrequencyPartial
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FrequencyPartial
     */
    id?: string;
}

/**
 * Check if a given object implements the FrequencyPartial interface.
 */
export function instanceOfFrequencyPartial(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FrequencyPartialFromJSON(json: any): FrequencyPartial {
    return FrequencyPartialFromJSONTyped(json, false);
}

export function FrequencyPartialFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrequencyPartial {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function FrequencyPartialToJSON(value?: FrequencyPartial | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'id': value.id,
    };
}

