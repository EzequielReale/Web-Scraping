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
  Frequency,
  FrequencyFilter,
  FrequencyFilter1,
  FrequencyPartial,
  FrequencyWithRelations,
  LoopbackCount,
  NewFrequency,
} from '../models/index';
import {
    FrequencyFromJSON,
    FrequencyToJSON,
    FrequencyFilterFromJSON,
    FrequencyFilterToJSON,
    FrequencyFilter1FromJSON,
    FrequencyFilter1ToJSON,
    FrequencyPartialFromJSON,
    FrequencyPartialToJSON,
    FrequencyWithRelationsFromJSON,
    FrequencyWithRelationsToJSON,
    LoopbackCountFromJSON,
    LoopbackCountToJSON,
    NewFrequencyFromJSON,
    NewFrequencyToJSON,
} from '../models/index';

export interface FrequencyControllerCountRequest {
    where?: { [key: string]: any; };
}

export interface FrequencyControllerCreateRequest {
    newFrequency?: NewFrequency;
}

export interface FrequencyControllerDeleteByIdRequest {
    id: string;
}

export interface FrequencyControllerFindRequest {
    filter?: FrequencyFilter1;
}

export interface FrequencyControllerFindByIdRequest {
    id: string;
    filter?: FrequencyFilter;
}

export interface FrequencyControllerReplaceByIdRequest {
    id: string;
    frequency?: Frequency;
}

export interface FrequencyControllerUpdateAllRequest {
    where?: { [key: string]: any; };
    frequencyPartial?: FrequencyPartial;
}

export interface FrequencyControllerUpdateByIdRequest {
    id: string;
    frequencyPartial?: FrequencyPartial;
}

/**
 * 
 */
export class FrequencyControllerApi extends runtime.BaseAPI {

    /**
     */
    async frequencyControllerCountRaw(requestParameters: FrequencyControllerCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoopbackCount>> {
        const queryParameters: any = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/frequencies/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoopbackCountFromJSON(jsonValue));
    }

    /**
     */
    async frequencyControllerCount(requestParameters: FrequencyControllerCountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoopbackCount> {
        const response = await this.frequencyControllerCountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async frequencyControllerCreateRaw(requestParameters: FrequencyControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Frequency>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/frequencies`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewFrequencyToJSON(requestParameters.newFrequency),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FrequencyFromJSON(jsonValue));
    }

    /**
     */
    async frequencyControllerCreate(requestParameters: FrequencyControllerCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Frequency> {
        const response = await this.frequencyControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async frequencyControllerDeleteByIdRaw(requestParameters: FrequencyControllerDeleteByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling frequencyControllerDeleteById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/frequencies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async frequencyControllerDeleteById(requestParameters: FrequencyControllerDeleteByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.frequencyControllerDeleteByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async frequencyControllerFindRaw(requestParameters: FrequencyControllerFindRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FrequencyWithRelations>>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/frequencies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FrequencyWithRelationsFromJSON));
    }

    /**
     */
    async frequencyControllerFind(requestParameters: FrequencyControllerFindRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FrequencyWithRelations>> {
        const response = await this.frequencyControllerFindRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async frequencyControllerFindByIdRaw(requestParameters: FrequencyControllerFindByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FrequencyWithRelations>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling frequencyControllerFindById.');
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/frequencies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FrequencyWithRelationsFromJSON(jsonValue));
    }

    /**
     */
    async frequencyControllerFindById(requestParameters: FrequencyControllerFindByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FrequencyWithRelations> {
        const response = await this.frequencyControllerFindByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async frequencyControllerReplaceByIdRaw(requestParameters: FrequencyControllerReplaceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling frequencyControllerReplaceById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/frequencies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FrequencyToJSON(requestParameters.frequency),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async frequencyControllerReplaceById(requestParameters: FrequencyControllerReplaceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.frequencyControllerReplaceByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async frequencyControllerUpdateAllRaw(requestParameters: FrequencyControllerUpdateAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoopbackCount>> {
        const queryParameters: any = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/frequencies`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: FrequencyPartialToJSON(requestParameters.frequencyPartial),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoopbackCountFromJSON(jsonValue));
    }

    /**
     */
    async frequencyControllerUpdateAll(requestParameters: FrequencyControllerUpdateAllRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoopbackCount> {
        const response = await this.frequencyControllerUpdateAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async frequencyControllerUpdateByIdRaw(requestParameters: FrequencyControllerUpdateByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling frequencyControllerUpdateById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/frequencies/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: FrequencyPartialToJSON(requestParameters.frequencyPartial),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async frequencyControllerUpdateById(requestParameters: FrequencyControllerUpdateByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.frequencyControllerUpdateByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
