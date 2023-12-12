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


import * as runtime from '../runtime';
import type {
  LoopbackCount,
  NewWebsiteInUser,
  Website,
  WebsitePartial,
} from '../models/index';
import {
    LoopbackCountFromJSON,
    LoopbackCountToJSON,
    NewWebsiteInUserFromJSON,
    NewWebsiteInUserToJSON,
    WebsiteFromJSON,
    WebsiteToJSON,
    WebsitePartialFromJSON,
    WebsitePartialToJSON,
} from '../models/index';

export interface UserWebsiteControllerCreateRequest {
    id: string;
    newWebsiteInUser?: NewWebsiteInUser;
}

export interface UserWebsiteControllerDeleteRequest {
    id: string;
    where?: { [key: string]: any; };
}

export interface UserWebsiteControllerFindRequest {
    id: string;
    filter?: { [key: string]: any; };
}

export interface UserWebsiteControllerPatchRequest {
    id: string;
    where?: { [key: string]: any; };
    websitePartial?: WebsitePartial;
}

/**
 * 
 */
export class UserWebsiteControllerApi extends runtime.BaseAPI {

    /**
     */
    async userWebsiteControllerCreateRaw(requestParameters: UserWebsiteControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Website>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userWebsiteControllerCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}/websites`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewWebsiteInUserToJSON(requestParameters.newWebsiteInUser),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebsiteFromJSON(jsonValue));
    }

    /**
     */
    async userWebsiteControllerCreate(requestParameters: UserWebsiteControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Website> {
        const response = await this.userWebsiteControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userWebsiteControllerDeleteRaw(requestParameters: UserWebsiteControllerDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoopbackCount>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userWebsiteControllerDelete.');
        }

        const queryParameters: any = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/websites`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoopbackCountFromJSON(jsonValue));
    }

    /**
     */
    async userWebsiteControllerDelete(requestParameters: UserWebsiteControllerDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoopbackCount> {
        const response = await this.userWebsiteControllerDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userWebsiteControllerFindRaw(requestParameters: UserWebsiteControllerFindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Website>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userWebsiteControllerFind.');
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{id}/websites`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WebsiteFromJSON));
    }

    /**
     */
    async userWebsiteControllerFind(requestParameters: UserWebsiteControllerFindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Website>> {
        const response = await this.userWebsiteControllerFindRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userWebsiteControllerPatchRaw(requestParameters: UserWebsiteControllerPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoopbackCount>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userWebsiteControllerPatch.');
        }

        const queryParameters: any = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/{id}/websites`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WebsitePartialToJSON(requestParameters.websitePartial),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoopbackCountFromJSON(jsonValue));
    }

    /**
     */
    async userWebsiteControllerPatch(requestParameters: UserWebsiteControllerPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoopbackCount> {
        const response = await this.userWebsiteControllerPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
