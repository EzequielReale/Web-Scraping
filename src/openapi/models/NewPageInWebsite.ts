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
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Page, 'id'>, 'websiteId'>, schemaOptions: { title: 'NewPageInWebsite', exclude: [ 'id' ], optional: [ 'websiteId' ] })
 * @export
 * @interface NewPageInWebsite
 */
export interface NewPageInWebsite {
    /**
     * 
     * @type {object}
     * @memberof NewPageInWebsite
     */
    doc: object;
    /**
     * 
     * @type {string}
     * @memberof NewPageInWebsite
     */
    websiteId?: string;
}

/**
 * Check if a given object implements the NewPageInWebsite interface.
 */
export function instanceOfNewPageInWebsite(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "doc" in value;

    return isInstance;
}

export function NewPageInWebsiteFromJSON(json: any): NewPageInWebsite {
    return NewPageInWebsiteFromJSONTyped(json, false);
}

export function NewPageInWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewPageInWebsite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'doc': json['doc'],
        'websiteId': !exists(json, 'websiteId') ? undefined : json['websiteId'],
    };
}

export function NewPageInWebsiteToJSON(value?: NewPageInWebsite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'doc': value.doc,
        'websiteId': value.websiteId,
    };
}

