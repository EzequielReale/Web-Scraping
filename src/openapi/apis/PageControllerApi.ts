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


import * as runtime from '../runtime';
import type {
  LoopbackCount,
  NewPage,
  Page,
  PageFilter,
  PageFilter1,
  PagePartial,
  PageWithRelations,
} from '../models/index';
import {
    LoopbackCountFromJSON,
    LoopbackCountToJSON,
    NewPageFromJSON,
    NewPageToJSON,
    PageFromJSON,
    PageToJSON,
    PageFilterFromJSON,
    PageFilterToJSON,
    PageFilter1FromJSON,
    PageFilter1ToJSON,
    PagePartialFromJSON,
    PagePartialToJSON,
    PageWithRelationsFromJSON,
    PageWithRelationsToJSON,
} from '../models/index';

export interface PageControllerCountRequest {
    where?: { [key: string]: any; };
}

export interface PageControllerCreateRequest {
    newPage?: NewPage;
}

export interface PageControllerDeleteByIdRequest {
    id: string;
}

export interface PageControllerFindRequest {
    filter?: PageFilter1;
}

export interface PageControllerFindByIdRequest {
    id: string;
    filter?: PageFilter;
}

export interface PageControllerReplaceByIdRequest {
    id: string;
    page?: Page;
}

export interface PageControllerUpdateAllRequest {
    where?: { [key: string]: any; };
    pagePartial?: PagePartial;
}

export interface PageControllerUpdateByIdRequest {
    id: string;
    pagePartial?: PagePartial;
}

/**
 * 
 */
export class PageControllerApi extends runtime.BaseAPI {

    /**
     */
    async pageControllerCountRaw(requestParameters: PageControllerCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoopbackCount>> {
        const queryParameters: any = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/pages/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoopbackCountFromJSON(jsonValue));
    }

    /**
     */
    async pageControllerCount(requestParameters: PageControllerCountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoopbackCount> {
        const response = await this.pageControllerCountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async pageControllerCreateRaw(requestParameters: PageControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Page>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/pages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewPageToJSON(requestParameters.newPage),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     */
    async pageControllerCreate(requestParameters: PageControllerCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Page> {
        const response = await this.pageControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async pageControllerDeleteByIdRaw(requestParameters: PageControllerDeleteByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling pageControllerDeleteById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async pageControllerDeleteById(requestParameters: PageControllerDeleteByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.pageControllerDeleteByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async pageControllerFindRaw(requestParameters: PageControllerFindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PageWithRelations>>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/pages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PageWithRelationsFromJSON));
    }

    /**
     */
    async pageControllerFind(requestParameters: PageControllerFindRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PageWithRelations>> {
        const response = await this.pageControllerFindRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async pageControllerFindByIdRaw(requestParameters: PageControllerFindByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageWithRelations>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling pageControllerFindById.');
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageWithRelationsFromJSON(jsonValue));
    }

    /**
     */
    async pageControllerFindById(requestParameters: PageControllerFindByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageWithRelations> {
        const response = await this.pageControllerFindByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async pageControllerReplaceByIdRaw(requestParameters: PageControllerReplaceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling pageControllerReplaceById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PageToJSON(requestParameters.page),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async pageControllerReplaceById(requestParameters: PageControllerReplaceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.pageControllerReplaceByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async pageControllerUpdateAllRaw(requestParameters: PageControllerUpdateAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoopbackCount>> {
        const queryParameters: any = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/pages`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PagePartialToJSON(requestParameters.pagePartial),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoopbackCountFromJSON(jsonValue));
    }

    /**
     */
    async pageControllerUpdateAll(requestParameters: PageControllerUpdateAllRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoopbackCount> {
        const response = await this.pageControllerUpdateAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async pageControllerUpdateByIdRaw(requestParameters: PageControllerUpdateByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling pageControllerUpdateById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PagePartialToJSON(requestParameters.pagePartial),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async pageControllerUpdateById(requestParameters: PageControllerUpdateByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.pageControllerUpdateByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
