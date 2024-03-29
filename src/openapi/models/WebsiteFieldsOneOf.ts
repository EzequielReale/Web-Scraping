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
 * @interface WebsiteFieldsOneOf
 */
export interface WebsiteFieldsOneOf {
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteFieldsOneOf
     */
    id?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteFieldsOneOf
     */
    name?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteFieldsOneOf
     */
    url?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteFieldsOneOf
     */
    pageLevels?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteFieldsOneOf
     */
    snippet?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteFieldsOneOf
     */
    frequency?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WebsiteFieldsOneOf
     */
    userId?: boolean;
}

/**
 * Check if a given object implements the WebsiteFieldsOneOf interface.
 */
export function instanceOfWebsiteFieldsOneOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebsiteFieldsOneOfFromJSON(json: any): WebsiteFieldsOneOf {
    return WebsiteFieldsOneOfFromJSONTyped(json, false);
}

export function WebsiteFieldsOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteFieldsOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'pageLevels': !exists(json, 'pageLevels') ? undefined : json['pageLevels'],
        'snippet': !exists(json, 'snippet') ? undefined : json['snippet'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function WebsiteFieldsOneOfToJSON(value?: WebsiteFieldsOneOf | null): any {
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
    };
}

