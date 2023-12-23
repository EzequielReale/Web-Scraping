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
/**
 * 
 * @export
 * @interface WebsiteErrorFieldsOneOf
 */
export interface WebsiteErrorFieldsOneOf {
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteErrorFieldsOneOf
     */
    id?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteErrorFieldsOneOf
     */
    log?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteErrorFieldsOneOf
     */
    websiteId?: boolean;
}

/**
 * Check if a given object implements the WebsiteErrorFieldsOneOf interface.
 */
export function instanceOfWebsiteErrorFieldsOneOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebsiteErrorFieldsOneOfFromJSON(json: any): WebsiteErrorFieldsOneOf {
    return WebsiteErrorFieldsOneOfFromJSONTyped(json, false);
}

export function WebsiteErrorFieldsOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteErrorFieldsOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'log': !exists(json, 'log') ? undefined : json['log'],
        'websiteId': !exists(json, 'websiteId') ? undefined : json['websiteId'],
    };
}

export function WebsiteErrorFieldsOneOfToJSON(value?: WebsiteErrorFieldsOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'log': value.log,
        'websiteId': value.websiteId,
    };
}

