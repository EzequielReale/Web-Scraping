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

/**
 * @type UserScopeFilterFields
 * 
 * @export
 */
export type UserScopeFilterFields = Set<string> | { [key: string]: any; };

export function UserScopeFilterFieldsFromJSON(json: any): UserScopeFilterFields {
    return UserScopeFilterFieldsFromJSONTyped(json, false);
}

export function UserScopeFilterFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserScopeFilterFields {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...Set<string>FromJSONTyped(json, true), ...{ [key: string]: any; }FromJSONTyped(json, true) };
}

export function UserScopeFilterFieldsToJSON(value?: UserScopeFilterFields | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfSet<string>(value)) {
        return Set<string>ToJSON(value as Set<string>);
    }
    if (instanceOf{ [key: string]: any; }(value)) {
        return { [key: string]: any; }ToJSON(value as { [key: string]: any; });
    }

    return {};
}

