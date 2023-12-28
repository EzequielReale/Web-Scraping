import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        /**
         * loopback.Count
         */
        export interface LoopbackCount {
            count?: number;
        }
        /**
         * NewPage
         * (tsType: Omit<Page, 'id'>, schemaOptions: { title: 'NewPage', exclude: [ 'id' ] })
         */
        export interface NewPage {
            doc: {
                [key: string]: any;
            };
            websiteId?: string;
        }
        /**
         * NewPageInWebsite
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Page, 'id'>, 'websiteId'>, schemaOptions: { title: 'NewPageInWebsite', exclude: [ 'id' ], optional: [ 'websiteId' ] })
         */
        export interface NewPageInWebsite {
            doc: {
                [key: string]: any;
            };
            websiteId?: string;
        }
        /**
         * NewWebsite
         * (tsType: Omit<Website, 'id'>, schemaOptions: { title: 'NewWebsite', exclude: [ 'id' ] })
         */
        export interface NewWebsite {
            name: string;
            url: string;
            pageLevels: number;
            snippet: string;
            frequency?: number;
            userId?: string;
        }
        /**
         * NewWebsiteError
         * (tsType: Omit<WebsiteError, 'id'>, schemaOptions: { title: 'NewWebsiteError', exclude: [ 'id' ] })
         */
        export interface NewWebsiteError {
            log: string;
            websiteId?: string;
        }
        /**
         * NewWebsiteErrorInWebsite
         * (tsType: @loopback/repository-json-schema#Optional<Omit<WebsiteError, 'id'>, 'websiteId'>, schemaOptions: { title: 'NewWebsiteErrorInWebsite', exclude: [ 'id' ], optional: [ 'websiteId' ] })
         */
        export interface NewWebsiteErrorInWebsite {
            log: string;
            websiteId?: string;
        }
        /**
         * Page
         */
        export interface Page {
            doc: {
                [key: string]: any;
            };
            id?: string;
            websiteId?: string;
        }
        /**
         * Page.Filter
         */
        export interface PageFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Page.Fields
             */
            fields?: /* Page.Fields */ {
                doc?: boolean;
                id?: boolean;
                websiteId?: boolean;
            } | ("doc" | "id" | "websiteId")[];
        }
        /**
         * Page.Filter
         */
        export interface PageFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Page.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Page.Fields
             */
            fields?: /* Page.Fields */ {
                doc?: boolean;
                id?: boolean;
                websiteId?: boolean;
            } | ("doc" | "id" | "websiteId")[];
        }
        /**
         * PagePartial
         * (tsType: Partial<Page>, schemaOptions: { partial: true })
         */
        export interface PagePartial {
            doc?: {
                [key: string]: any;
            };
            id?: string;
            websiteId?: string;
        }
        /**
         * PageWithRelations
         * (tsType: PageWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface PageWithRelations {
            doc: {
                [key: string]: any;
            };
            id?: string;
            websiteId?: string;
        }
        /**
         * PingResponse
         */
        export interface PingResponse {
            greeting?: string;
            date?: string;
            url?: string;
            headers?: {
                [name: string]: any;
                "Content-Type"?: string;
            };
        }
        /**
         * Website
         */
        export interface Website {
            id?: string;
            name: string;
            url: string;
            pageLevels: number;
            snippet: string;
            frequency?: number;
            userId?: string;
        }
        /**
         * WebsiteError
         */
        export interface WebsiteError {
            id?: string;
            log: string;
            websiteId?: string;
        }
        /**
         * WebsiteError.Filter
         */
        export interface WebsiteErrorFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * WebsiteError.Fields
             */
            fields?: /* WebsiteError.Fields */ {
                id?: boolean;
                log?: boolean;
                websiteId?: boolean;
            } | ("id" | "log" | "websiteId")[];
        }
        /**
         * WebsiteError.Filter
         */
        export interface WebsiteErrorFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * WebsiteError.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * WebsiteError.Fields
             */
            fields?: /* WebsiteError.Fields */ {
                id?: boolean;
                log?: boolean;
                websiteId?: boolean;
            } | ("id" | "log" | "websiteId")[];
        }
        /**
         * WebsiteErrorPartial
         * (tsType: Partial<WebsiteError>, schemaOptions: { partial: true })
         */
        export interface WebsiteErrorPartial {
            id?: string;
            log?: string;
            websiteId?: string;
        }
        /**
         * WebsiteErrorWithRelations
         * (tsType: WebsiteErrorWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface WebsiteErrorWithRelations {
            id?: string;
            log: string;
            websiteId?: string;
        }
        /**
         * Website.Filter
         */
        export interface WebsiteFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Website.Fields
             */
            fields?: /* Website.Fields */ {
                id?: boolean;
                name?: boolean;
                url?: boolean;
                pageLevels?: boolean;
                snippet?: boolean;
                frequency?: boolean;
                userId?: boolean;
            } | ("id" | "name" | "url" | "pageLevels" | "snippet" | "frequency" | "userId")[];
            /**
             * Website.IncludeFilter
             */
            include?: (/* Website.IncludeFilter.Items */ WebsiteIncludeFilterItems | string)[];
        }
        /**
         * Website.Filter
         */
        export interface WebsiteFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Website.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Website.Fields
             */
            fields?: /* Website.Fields */ {
                id?: boolean;
                name?: boolean;
                url?: boolean;
                pageLevels?: boolean;
                snippet?: boolean;
                frequency?: boolean;
                userId?: boolean;
            } | ("id" | "name" | "url" | "pageLevels" | "snippet" | "frequency" | "userId")[];
            /**
             * Website.IncludeFilter
             */
            include?: (/* Website.IncludeFilter.Items */ WebsiteIncludeFilterItems | string)[];
        }
        /**
         * Website.IncludeFilter.Items
         */
        export interface WebsiteIncludeFilterItems {
            relation?: "pages" | "websiteErrors";
            scope?: /* Website.ScopeFilter */ WebsiteScopeFilter;
        }
        /**
         * WebsitePartial
         * (tsType: Partial<Website>, schemaOptions: { partial: true })
         */
        export interface WebsitePartial {
            id?: string;
            name?: string;
            url?: string;
            pageLevels?: number;
            snippet?: string;
            frequency?: number;
            userId?: string;
        }
        /**
         * Website.ScopeFilter
         */
        export interface WebsiteScopeFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            where?: {
                [name: string]: any;
            };
            fields?: {
                [name: string]: any;
            } | string[];
            include?: {
                [name: string]: any;
            }[];
        }
        /**
         * WebsiteWithRelations
         * (tsType: WebsiteWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface WebsiteWithRelations {
            id?: string;
            name: string;
            url: string;
            pageLevels: number;
            snippet: string;
            frequency?: number;
            userId?: string;
            pages?: /**
             * PageWithRelations
             * (tsType: PageWithRelations, schemaOptions: { includeRelations: true })
             */
            PageWithRelations[];
            websiteErrors?: /**
             * WebsiteErrorWithRelations
             * (tsType: WebsiteErrorWithRelations, schemaOptions: { includeRelations: true })
             */
            WebsiteErrorWithRelations[];
        }
    }
}
declare namespace Paths {
    namespace PageControllerCount {
        namespace Parameters {
            /**
             * Page.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Page.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace PageControllerCreate {
        export type RequestBody = /**
         * NewPage
         * (tsType: Omit<Page, 'id'>, schemaOptions: { title: 'NewPage', exclude: [ 'id' ] })
         */
        Components.Schemas.NewPage;
        namespace Responses {
            export type $200 = /* Page */ Components.Schemas.Page;
        }
    }
    namespace PageControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Page DELETE success
             */
            export type $204 = any;
        }
    }
    namespace PageControllerFind {
        namespace Parameters {
            export type Filter = /* Page.Filter */ Components.Schemas.PageFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * PageWithRelations
             * (tsType: PageWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.PageWithRelations[];
        }
    }
    namespace PageControllerFindById {
        namespace Parameters {
            export type Filter = /* Page.Filter */ Components.Schemas.PageFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * PageWithRelations
             * (tsType: PageWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.PageWithRelations;
        }
    }
    namespace PageControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Page */ Components.Schemas.Page;
        namespace Responses {
            /**
             * Page PUT success
             */
            export type $204 = any;
        }
    }
    namespace PageControllerUpdateAll {
        namespace Parameters {
            /**
             * Page.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Page.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * PagePartial
         * (tsType: Partial<Page>, schemaOptions: { partial: true })
         */
        Components.Schemas.PagePartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace PageControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * PagePartial
         * (tsType: Partial<Page>, schemaOptions: { partial: true })
         */
        Components.Schemas.PagePartial;
        namespace Responses {
            /**
             * Page PATCH success
             */
            export type $204 = any;
        }
    }
    namespace PingControllerFib {
        namespace Parameters {
            export type Num = number;
        }
        export interface QueryParameters {
            num?: Parameters.Num;
        }
        namespace Responses {
            export type $200 = number;
        }
    }
    namespace PingControllerGreet {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace PingControllerPing {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace PingControllerSleep {
        namespace Parameters {
            export type Ms = number;
        }
        export interface QueryParameters {
            ms?: Parameters.Ms;
        }
        namespace Responses {
            export type $200 = string;
        }
    }
    namespace WebsiteControllerCount {
        namespace Parameters {
            /**
             * Website.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Website.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace WebsiteControllerCreate {
        export type RequestBody = /**
         * NewWebsite
         * (tsType: Omit<Website, 'id'>, schemaOptions: { title: 'NewWebsite', exclude: [ 'id' ] })
         */
        Components.Schemas.NewWebsite;
        namespace Responses {
            export type $200 = /* Website */ Components.Schemas.Website;
        }
    }
    namespace WebsiteControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Website DELETE success
             */
            export type $204 = any;
        }
    }
    namespace WebsiteControllerFind {
        namespace Parameters {
            export type Filter = /* Website.Filter */ Components.Schemas.WebsiteFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * WebsiteWithRelations
             * (tsType: WebsiteWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.WebsiteWithRelations[];
        }
    }
    namespace WebsiteControllerFindById {
        namespace Parameters {
            export type Filter = /* Website.Filter */ Components.Schemas.WebsiteFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * WebsiteWithRelations
             * (tsType: WebsiteWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.WebsiteWithRelations;
        }
    }
    namespace WebsiteControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Website */ Components.Schemas.Website;
        namespace Responses {
            /**
             * Website PUT success
             */
            export type $204 = any;
        }
    }
    namespace WebsiteControllerUpdateAll {
        namespace Parameters {
            /**
             * Website.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Website.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * WebsitePartial
         * (tsType: Partial<Website>, schemaOptions: { partial: true })
         */
        Components.Schemas.WebsitePartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace WebsiteControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * WebsitePartial
         * (tsType: Partial<Website>, schemaOptions: { partial: true })
         */
        Components.Schemas.WebsitePartial;
        namespace Responses {
            /**
             * Website PATCH success
             */
            export type $204 = any;
        }
    }
    namespace WebsiteErrorControllerCount {
        namespace Parameters {
            /**
             * WebsiteError.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* WebsiteError.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace WebsiteErrorControllerCreate {
        export type RequestBody = /**
         * NewWebsiteError
         * (tsType: Omit<WebsiteError, 'id'>, schemaOptions: { title: 'NewWebsiteError', exclude: [ 'id' ] })
         */
        Components.Schemas.NewWebsiteError;
        namespace Responses {
            export type $200 = /* WebsiteError */ Components.Schemas.WebsiteError;
        }
    }
    namespace WebsiteErrorControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * WebsiteError DELETE success
             */
            export type $204 = any;
        }
    }
    namespace WebsiteErrorControllerFind {
        namespace Parameters {
            export type Filter = /* WebsiteError.Filter */ Components.Schemas.WebsiteErrorFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * WebsiteErrorWithRelations
             * (tsType: WebsiteErrorWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.WebsiteErrorWithRelations[];
        }
    }
    namespace WebsiteErrorControllerFindById {
        namespace Parameters {
            export type Filter = /* WebsiteError.Filter */ Components.Schemas.WebsiteErrorFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * WebsiteErrorWithRelations
             * (tsType: WebsiteErrorWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.WebsiteErrorWithRelations;
        }
    }
    namespace WebsiteErrorControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* WebsiteError */ Components.Schemas.WebsiteError;
        namespace Responses {
            /**
             * WebsiteError PUT success
             */
            export type $204 = any;
        }
    }
    namespace WebsiteErrorControllerUpdateAll {
        namespace Parameters {
            /**
             * WebsiteError.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* WebsiteError.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * WebsiteErrorPartial
         * (tsType: Partial<WebsiteError>, schemaOptions: { partial: true })
         */
        Components.Schemas.WebsiteErrorPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace WebsiteErrorControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * WebsiteErrorPartial
         * (tsType: Partial<WebsiteError>, schemaOptions: { partial: true })
         */
        Components.Schemas.WebsiteErrorPartial;
        namespace Responses {
            /**
             * WebsiteError PATCH success
             */
            export type $204 = any;
        }
    }
    namespace WebsitePageControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewPageInWebsite
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Page, 'id'>, 'websiteId'>, schemaOptions: { title: 'NewPageInWebsite', exclude: [ 'id' ], optional: [ 'websiteId' ] })
         */
        Components.Schemas.NewPageInWebsite;
        namespace Responses {
            export type $200 = /* Page */ Components.Schemas.Page;
        }
    }
    namespace WebsitePageControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Page.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Page.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace WebsitePageControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Page */ Components.Schemas.Page[];
        }
    }
    namespace WebsitePageControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Page.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Page.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * PagePartial
         * (tsType: Partial<Page>, schemaOptions: { partial: true })
         */
        Components.Schemas.PagePartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace WebsiteWebsiteErrorControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewWebsiteErrorInWebsite
         * (tsType: @loopback/repository-json-schema#Optional<Omit<WebsiteError, 'id'>, 'websiteId'>, schemaOptions: { title: 'NewWebsiteErrorInWebsite', exclude: [ 'id' ], optional: [ 'websiteId' ] })
         */
        Components.Schemas.NewWebsiteErrorInWebsite;
        namespace Responses {
            export type $200 = /* WebsiteError */ Components.Schemas.WebsiteError;
        }
    }
    namespace WebsiteWebsiteErrorControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * WebsiteError.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* WebsiteError.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace WebsiteWebsiteErrorControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* WebsiteError */ Components.Schemas.WebsiteError[];
        }
    }
    namespace WebsiteWebsiteErrorControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * WebsiteError.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* WebsiteError.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * WebsiteErrorPartial
         * (tsType: Partial<WebsiteError>, schemaOptions: { partial: true })
         */
        Components.Schemas.WebsiteErrorPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
}

export interface OperationMethods {
  /**
   * PingController.fib
   */
  'PingController.fib'(
    parameters?: Parameters<Paths.PingControllerFib.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerFib.Responses.$200>
  /**
   * PingController.greet
   */
  'PingController.greet'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  /**
   * PageController.count
   */
  'PageController.count'(
    parameters?: Parameters<Paths.PageControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PageControllerCount.Responses.$200>
  /**
   * PageController.findById
   */
  'PageController.findById'(
    parameters?: Parameters<Paths.PageControllerFindById.PathParameters & Paths.PageControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PageControllerFindById.Responses.$200>
  /**
   * PageController.replaceById
   */
  'PageController.replaceById'(
    parameters?: Parameters<Paths.PageControllerReplaceById.PathParameters> | null,
    data?: Paths.PageControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PageControllerReplaceById.Responses.$204>
  /**
   * PageController.updateById
   */
  'PageController.updateById'(
    parameters?: Parameters<Paths.PageControllerUpdateById.PathParameters> | null,
    data?: Paths.PageControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PageControllerUpdateById.Responses.$204>
  /**
   * PageController.deleteById
   */
  'PageController.deleteById'(
    parameters?: Parameters<Paths.PageControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PageControllerDeleteById.Responses.$204>
  /**
   * PageController.find
   */
  'PageController.find'(
    parameters?: Parameters<Paths.PageControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PageControllerFind.Responses.$200>
  /**
   * PageController.create
   */
  'PageController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PageControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PageControllerCreate.Responses.$200>
  /**
   * PageController.updateAll
   */
  'PageController.updateAll'(
    parameters?: Parameters<Paths.PageControllerUpdateAll.QueryParameters> | null,
    data?: Paths.PageControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PageControllerUpdateAll.Responses.$200>
  /**
   * PingController.ping
   */
  'PingController.ping'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  /**
   * PingController.sleep
   */
  'PingController.sleep'(
    parameters?: Parameters<Paths.PingControllerSleep.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerSleep.Responses.$200>
  /**
   * WebsiteErrorController.count
   */
  'WebsiteErrorController.count'(
    parameters?: Parameters<Paths.WebsiteErrorControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteErrorControllerCount.Responses.$200>
  /**
   * WebsiteErrorController.findById
   */
  'WebsiteErrorController.findById'(
    parameters?: Parameters<Paths.WebsiteErrorControllerFindById.PathParameters & Paths.WebsiteErrorControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteErrorControllerFindById.Responses.$200>
  /**
   * WebsiteErrorController.replaceById
   */
  'WebsiteErrorController.replaceById'(
    parameters?: Parameters<Paths.WebsiteErrorControllerReplaceById.PathParameters> | null,
    data?: Paths.WebsiteErrorControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteErrorControllerReplaceById.Responses.$204>
  /**
   * WebsiteErrorController.updateById
   */
  'WebsiteErrorController.updateById'(
    parameters?: Parameters<Paths.WebsiteErrorControllerUpdateById.PathParameters> | null,
    data?: Paths.WebsiteErrorControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteErrorControllerUpdateById.Responses.$204>
  /**
   * WebsiteErrorController.deleteById
   */
  'WebsiteErrorController.deleteById'(
    parameters?: Parameters<Paths.WebsiteErrorControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteErrorControllerDeleteById.Responses.$204>
  /**
   * WebsiteErrorController.find
   */
  'WebsiteErrorController.find'(
    parameters?: Parameters<Paths.WebsiteErrorControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteErrorControllerFind.Responses.$200>
  /**
   * WebsiteErrorController.create
   */
  'WebsiteErrorController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.WebsiteErrorControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteErrorControllerCreate.Responses.$200>
  /**
   * WebsiteErrorController.updateAll
   */
  'WebsiteErrorController.updateAll'(
    parameters?: Parameters<Paths.WebsiteErrorControllerUpdateAll.QueryParameters> | null,
    data?: Paths.WebsiteErrorControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteErrorControllerUpdateAll.Responses.$200>
  /**
   * WebsiteController.count
   */
  'WebsiteController.count'(
    parameters?: Parameters<Paths.WebsiteControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerCount.Responses.$200>
  /**
   * WebsitePageController.find
   */
  'WebsitePageController.find'(
    parameters?: Parameters<Paths.WebsitePageControllerFind.PathParameters & Paths.WebsitePageControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsitePageControllerFind.Responses.$200>
  /**
   * WebsitePageController.create
   */
  'WebsitePageController.create'(
    parameters?: Parameters<Paths.WebsitePageControllerCreate.PathParameters> | null,
    data?: Paths.WebsitePageControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsitePageControllerCreate.Responses.$200>
  /**
   * WebsitePageController.patch
   */
  'WebsitePageController.patch'(
    parameters?: Parameters<Paths.WebsitePageControllerPatch.PathParameters & Paths.WebsitePageControllerPatch.QueryParameters> | null,
    data?: Paths.WebsitePageControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsitePageControllerPatch.Responses.$200>
  /**
   * WebsitePageController.delete
   */
  'WebsitePageController.delete'(
    parameters?: Parameters<Paths.WebsitePageControllerDelete.PathParameters & Paths.WebsitePageControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsitePageControllerDelete.Responses.$200>
  /**
   * WebsiteWebsiteErrorController.find
   */
  'WebsiteWebsiteErrorController.find'(
    parameters?: Parameters<Paths.WebsiteWebsiteErrorControllerFind.PathParameters & Paths.WebsiteWebsiteErrorControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteWebsiteErrorControllerFind.Responses.$200>
  /**
   * WebsiteWebsiteErrorController.create
   */
  'WebsiteWebsiteErrorController.create'(
    parameters?: Parameters<Paths.WebsiteWebsiteErrorControllerCreate.PathParameters> | null,
    data?: Paths.WebsiteWebsiteErrorControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteWebsiteErrorControllerCreate.Responses.$200>
  /**
   * WebsiteWebsiteErrorController.patch
   */
  'WebsiteWebsiteErrorController.patch'(
    parameters?: Parameters<Paths.WebsiteWebsiteErrorControllerPatch.PathParameters & Paths.WebsiteWebsiteErrorControllerPatch.QueryParameters> | null,
    data?: Paths.WebsiteWebsiteErrorControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteWebsiteErrorControllerPatch.Responses.$200>
  /**
   * WebsiteWebsiteErrorController.delete
   */
  'WebsiteWebsiteErrorController.delete'(
    parameters?: Parameters<Paths.WebsiteWebsiteErrorControllerDelete.PathParameters & Paths.WebsiteWebsiteErrorControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteWebsiteErrorControllerDelete.Responses.$200>
  /**
   * WebsiteController.findById
   */
  'WebsiteController.findById'(
    parameters?: Parameters<Paths.WebsiteControllerFindById.PathParameters & Paths.WebsiteControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerFindById.Responses.$200>
  /**
   * WebsiteController.replaceById
   */
  'WebsiteController.replaceById'(
    parameters?: Parameters<Paths.WebsiteControllerReplaceById.PathParameters> | null,
    data?: Paths.WebsiteControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerReplaceById.Responses.$204>
  /**
   * WebsiteController.updateById
   */
  'WebsiteController.updateById'(
    parameters?: Parameters<Paths.WebsiteControllerUpdateById.PathParameters> | null,
    data?: Paths.WebsiteControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerUpdateById.Responses.$204>
  /**
   * WebsiteController.deleteById
   */
  'WebsiteController.deleteById'(
    parameters?: Parameters<Paths.WebsiteControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerDeleteById.Responses.$204>
  /**
   * WebsiteController.find
   */
  'WebsiteController.find'(
    parameters?: Parameters<Paths.WebsiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerFind.Responses.$200>
  /**
   * WebsiteController.create
   */
  'WebsiteController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.WebsiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerCreate.Responses.$200>
  /**
   * WebsiteController.updateAll
   */
  'WebsiteController.updateAll'(
    parameters?: Parameters<Paths.WebsiteControllerUpdateAll.QueryParameters> | null,
    data?: Paths.WebsiteControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerUpdateAll.Responses.$200>
}

export interface PathsDictionary {
  ['/fib']: {
    /**
     * PingController.fib
     */
    'get'(
      parameters?: Parameters<Paths.PingControllerFib.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerFib.Responses.$200>
  }
  ['/greet']: {
    /**
     * PingController.greet
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  }
  ['/pages/count']: {
    /**
     * PageController.count
     */
    'get'(
      parameters?: Parameters<Paths.PageControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PageControllerCount.Responses.$200>
  }
  ['/pages/{id}']: {
    /**
     * PageController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.PageControllerReplaceById.PathParameters> | null,
      data?: Paths.PageControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PageControllerReplaceById.Responses.$204>
    /**
     * PageController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.PageControllerUpdateById.PathParameters> | null,
      data?: Paths.PageControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PageControllerUpdateById.Responses.$204>
    /**
     * PageController.findById
     */
    'get'(
      parameters?: Parameters<Paths.PageControllerFindById.PathParameters & Paths.PageControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PageControllerFindById.Responses.$200>
    /**
     * PageController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.PageControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PageControllerDeleteById.Responses.$204>
  }
  ['/pages']: {
    /**
     * PageController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PageControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PageControllerCreate.Responses.$200>
    /**
     * PageController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.PageControllerUpdateAll.QueryParameters> | null,
      data?: Paths.PageControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PageControllerUpdateAll.Responses.$200>
    /**
     * PageController.find
     */
    'get'(
      parameters?: Parameters<Paths.PageControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PageControllerFind.Responses.$200>
  }
  ['/ping']: {
    /**
     * PingController.ping
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  }
  ['/sleep']: {
    /**
     * PingController.sleep
     */
    'get'(
      parameters?: Parameters<Paths.PingControllerSleep.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerSleep.Responses.$200>
  }
  ['/website-errors/count']: {
    /**
     * WebsiteErrorController.count
     */
    'get'(
      parameters?: Parameters<Paths.WebsiteErrorControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteErrorControllerCount.Responses.$200>
  }
  ['/website-errors/{id}']: {
    /**
     * WebsiteErrorController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.WebsiteErrorControllerReplaceById.PathParameters> | null,
      data?: Paths.WebsiteErrorControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteErrorControllerReplaceById.Responses.$204>
    /**
     * WebsiteErrorController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.WebsiteErrorControllerUpdateById.PathParameters> | null,
      data?: Paths.WebsiteErrorControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteErrorControllerUpdateById.Responses.$204>
    /**
     * WebsiteErrorController.findById
     */
    'get'(
      parameters?: Parameters<Paths.WebsiteErrorControllerFindById.PathParameters & Paths.WebsiteErrorControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteErrorControllerFindById.Responses.$200>
    /**
     * WebsiteErrorController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.WebsiteErrorControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteErrorControllerDeleteById.Responses.$204>
  }
  ['/website-errors']: {
    /**
     * WebsiteErrorController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.WebsiteErrorControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteErrorControllerCreate.Responses.$200>
    /**
     * WebsiteErrorController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.WebsiteErrorControllerUpdateAll.QueryParameters> | null,
      data?: Paths.WebsiteErrorControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteErrorControllerUpdateAll.Responses.$200>
    /**
     * WebsiteErrorController.find
     */
    'get'(
      parameters?: Parameters<Paths.WebsiteErrorControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteErrorControllerFind.Responses.$200>
  }
  ['/websites/count']: {
    /**
     * WebsiteController.count
     */
    'get'(
      parameters?: Parameters<Paths.WebsiteControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteControllerCount.Responses.$200>
  }
  ['/websites/{id}/pages']: {
    /**
     * WebsitePageController.create
     */
    'post'(
      parameters?: Parameters<Paths.WebsitePageControllerCreate.PathParameters> | null,
      data?: Paths.WebsitePageControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsitePageControllerCreate.Responses.$200>
    /**
     * WebsitePageController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.WebsitePageControllerPatch.PathParameters & Paths.WebsitePageControllerPatch.QueryParameters> | null,
      data?: Paths.WebsitePageControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsitePageControllerPatch.Responses.$200>
    /**
     * WebsitePageController.find
     */
    'get'(
      parameters?: Parameters<Paths.WebsitePageControllerFind.PathParameters & Paths.WebsitePageControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsitePageControllerFind.Responses.$200>
    /**
     * WebsitePageController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.WebsitePageControllerDelete.PathParameters & Paths.WebsitePageControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsitePageControllerDelete.Responses.$200>
  }
  ['/websites/{id}/website-errors']: {
    /**
     * WebsiteWebsiteErrorController.create
     */
    'post'(
      parameters?: Parameters<Paths.WebsiteWebsiteErrorControllerCreate.PathParameters> | null,
      data?: Paths.WebsiteWebsiteErrorControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteWebsiteErrorControllerCreate.Responses.$200>
    /**
     * WebsiteWebsiteErrorController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.WebsiteWebsiteErrorControllerPatch.PathParameters & Paths.WebsiteWebsiteErrorControllerPatch.QueryParameters> | null,
      data?: Paths.WebsiteWebsiteErrorControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteWebsiteErrorControllerPatch.Responses.$200>
    /**
     * WebsiteWebsiteErrorController.find
     */
    'get'(
      parameters?: Parameters<Paths.WebsiteWebsiteErrorControllerFind.PathParameters & Paths.WebsiteWebsiteErrorControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteWebsiteErrorControllerFind.Responses.$200>
    /**
     * WebsiteWebsiteErrorController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.WebsiteWebsiteErrorControllerDelete.PathParameters & Paths.WebsiteWebsiteErrorControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteWebsiteErrorControllerDelete.Responses.$200>
  }
  ['/websites/{id}']: {
    /**
     * WebsiteController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.WebsiteControllerReplaceById.PathParameters> | null,
      data?: Paths.WebsiteControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteControllerReplaceById.Responses.$204>
    /**
     * WebsiteController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.WebsiteControllerUpdateById.PathParameters> | null,
      data?: Paths.WebsiteControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteControllerUpdateById.Responses.$204>
    /**
     * WebsiteController.findById
     */
    'get'(
      parameters?: Parameters<Paths.WebsiteControllerFindById.PathParameters & Paths.WebsiteControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteControllerFindById.Responses.$200>
    /**
     * WebsiteController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.WebsiteControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteControllerDeleteById.Responses.$204>
  }
  ['/websites']: {
    /**
     * WebsiteController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.WebsiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteControllerCreate.Responses.$200>
    /**
     * WebsiteController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.WebsiteControllerUpdateAll.QueryParameters> | null,
      data?: Paths.WebsiteControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteControllerUpdateAll.Responses.$200>
    /**
     * WebsiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.WebsiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WebsiteControllerFind.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
