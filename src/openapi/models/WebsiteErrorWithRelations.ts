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
 * (tsType: WebsiteErrorWithRelations, schemaOptions: { includeRelations: true })
 * @export
 * @interface WebsiteErrorWithRelations
 */
export interface WebsiteErrorWithRelations {
    /**
     * 
     * @type {string}
     * @memberof WebsiteErrorWithRelations
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof WebsiteErrorWithRelations
     */
    log: string;
    /**
     * 
     * @type {string}
     * @memberof WebsiteErrorWithRelations
     */
    websiteId?: string;
}

/**
 * Check if a given object implements the WebsiteErrorWithRelations interface.
 */
export function instanceOfWebsiteErrorWithRelations(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "log" in value;

    return isInstance;
}

export function WebsiteErrorWithRelationsFromJSON(json: any): WebsiteErrorWithRelations {
    return WebsiteErrorWithRelationsFromJSONTyped(json, false);
}

export function WebsiteErrorWithRelationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteErrorWithRelations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'log': json['log'],
        'websiteId': !exists(json, 'websiteId') ? undefined : json['websiteId'],
    };
}

export function WebsiteErrorWithRelationsToJSON(value?: WebsiteErrorWithRelations | null): any {
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

