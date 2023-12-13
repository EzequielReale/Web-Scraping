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
  PingResponse,
} from '../models/index';
import {
    PingResponseFromJSON,
    PingResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class PingControllerApi extends runtime.BaseAPI {

    /**
     */
    async pingControllerPingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PingResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ping`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PingResponseFromJSON(jsonValue));
    }

    /**
     */
    async pingControllerPing(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PingResponse> {
        const response = await this.pingControllerPingRaw(initOverrides);
        return await response.value();
    }

}