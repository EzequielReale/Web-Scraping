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
         * Frequency
         */
        export interface Frequency {
            name: string;
            id?: string;
        }
        /**
         * Frequency.Filter
         */
        export interface FrequencyFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Frequency.Fields
             */
            fields?: /* Frequency.Fields */ {
                name?: boolean;
                id?: boolean;
            } | ("name" | "id")[];
            /**
             * Frequency.IncludeFilter
             */
            include?: (/* Frequency.IncludeFilter.Items */ FrequencyIncludeFilterItems | string)[];
        }
        /**
         * Frequency.Filter
         */
        export interface FrequencyFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Frequency.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Frequency.Fields
             */
            fields?: /* Frequency.Fields */ {
                name?: boolean;
                id?: boolean;
            } | ("name" | "id")[];
            /**
             * Frequency.IncludeFilter
             */
            include?: (/* Frequency.IncludeFilter.Items */ FrequencyIncludeFilterItems | string)[];
        }
        /**
         * Frequency.IncludeFilter.Items
         */
        export interface FrequencyIncludeFilterItems {
            relation?: "websites";
            scope?: /* Frequency.ScopeFilter */ FrequencyScopeFilter;
        }
        /**
         * FrequencyPartial
         * (tsType: Partial<Frequency>, schemaOptions: { partial: true })
         */
        export interface FrequencyPartial {
            name?: string;
            id?: string;
        }
        /**
         * Frequency.ScopeFilter
         */
        export interface FrequencyScopeFilter {
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
         * FrequencyWithRelations
         * (tsType: FrequencyWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface FrequencyWithRelations {
            name: string;
            id?: string;
            websites?: /**
             * WebsiteWithRelations
             * (tsType: WebsiteWithRelations, schemaOptions: { includeRelations: true })
             */
            WebsiteWithRelations[];
        }
        /**
         * loopback.Count
         */
        export interface LoopbackCount {
            count?: number;
        }
        /**
         * NewFrequency
         * (tsType: Omit<Frequency, 'id'>, schemaOptions: { title: 'NewFrequency', exclude: [ 'id' ] })
         */
        export interface NewFrequency {
            name: string;
        }
        /**
         * NewUser
         * (tsType: Omit<User, 'id'>, schemaOptions: { title: 'NewUser', exclude: [ 'id' ] })
         */
        export interface NewUser {
            name: string;
            email: string;
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
            userId?: string;
            frequencyId?: string;
        }
        /**
         * NewWebsiteInFrequency
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Website, 'id'>, 'frequencyId'>, schemaOptions: { title: 'NewWebsiteInFrequency', exclude: [ 'id' ], optional: [ 'frequencyId' ] })
         */
        export interface NewWebsiteInFrequency {
            name: string;
            url: string;
            pageLevels: number;
            snippet: string;
            userId?: string;
            frequencyId?: string;
        }
        /**
         * NewWebsiteInUser
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Website, 'id'>, 'userId'>, schemaOptions: { title: 'NewWebsiteInUser', exclude: [ 'id' ], optional: [ 'userId' ] })
         */
        export interface NewWebsiteInUser {
            name: string;
            url: string;
            pageLevels: number;
            snippet: string;
            userId?: string;
            frequencyId?: string;
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
         * User
         */
        export interface User {
            id?: string;
            name: string;
            email: string;
        }
        /**
         * User.Filter
         */
        export interface UserFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * User.Fields
             */
            fields?: /* User.Fields */ {
                id?: boolean;
                name?: boolean;
                email?: boolean;
            } | ("id" | "name" | "email")[];
            /**
             * User.IncludeFilter
             */
            include?: (/* User.IncludeFilter.Items */ UserIncludeFilterItems | string)[];
        }
        /**
         * User.Filter
         */
        export interface UserFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * User.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * User.Fields
             */
            fields?: /* User.Fields */ {
                id?: boolean;
                name?: boolean;
                email?: boolean;
            } | ("id" | "name" | "email")[];
            /**
             * User.IncludeFilter
             */
            include?: (/* User.IncludeFilter.Items */ UserIncludeFilterItems | string)[];
        }
        /**
         * User.IncludeFilter.Items
         */
        export interface UserIncludeFilterItems {
            relation?: "websites";
            scope?: /* User.ScopeFilter */ UserScopeFilter;
        }
        /**
         * UserPartial
         * (tsType: Partial<User>, schemaOptions: { partial: true })
         */
        export interface UserPartial {
            id?: string;
            name?: string;
            email?: string;
        }
        /**
         * User.ScopeFilter
         */
        export interface UserScopeFilter {
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
         * UserWithRelations
         * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface UserWithRelations {
            id?: string;
            name: string;
            email: string;
            websites?: /**
             * WebsiteWithRelations
             * (tsType: WebsiteWithRelations, schemaOptions: { includeRelations: true })
             */
            WebsiteWithRelations[];
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
            userId?: string;
            frequencyId?: string;
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
                userId?: boolean;
                frequencyId?: boolean;
            } | ("id" | "name" | "url" | "pageLevels" | "snippet" | "userId" | "frequencyId")[];
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
                userId?: boolean;
                frequencyId?: boolean;
            } | ("id" | "name" | "url" | "pageLevels" | "snippet" | "userId" | "frequencyId")[];
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
            userId?: string;
            frequencyId?: string;
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
            userId?: string;
            frequencyId?: string;
        }
    }
}
declare namespace Paths {
    namespace FrequencyControllerCount {
        namespace Parameters {
            /**
             * Frequency.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Frequency.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace FrequencyControllerCreate {
        export type RequestBody = /**
         * NewFrequency
         * (tsType: Omit<Frequency, 'id'>, schemaOptions: { title: 'NewFrequency', exclude: [ 'id' ] })
         */
        Components.Schemas.NewFrequency;
        namespace Responses {
            export type $200 = /* Frequency */ Components.Schemas.Frequency;
        }
    }
    namespace FrequencyControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Frequency DELETE success
             */
            export type $204 = any;
        }
    }
    namespace FrequencyControllerFind {
        namespace Parameters {
            export type Filter = /* Frequency.Filter */ Components.Schemas.FrequencyFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * FrequencyWithRelations
             * (tsType: FrequencyWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.FrequencyWithRelations[];
        }
    }
    namespace FrequencyControllerFindById {
        namespace Parameters {
            export type Filter = /* Frequency.Filter */ Components.Schemas.FrequencyFilter;
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
             * FrequencyWithRelations
             * (tsType: FrequencyWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.FrequencyWithRelations;
        }
    }
    namespace FrequencyControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Frequency */ Components.Schemas.Frequency;
        namespace Responses {
            /**
             * Frequency PUT success
             */
            export type $204 = any;
        }
    }
    namespace FrequencyControllerUpdateAll {
        namespace Parameters {
            /**
             * Frequency.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Frequency.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * FrequencyPartial
         * (tsType: Partial<Frequency>, schemaOptions: { partial: true })
         */
        Components.Schemas.FrequencyPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace FrequencyControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * FrequencyPartial
         * (tsType: Partial<Frequency>, schemaOptions: { partial: true })
         */
        Components.Schemas.FrequencyPartial;
        namespace Responses {
            /**
             * Frequency PATCH success
             */
            export type $204 = any;
        }
    }
    namespace FrequencyWebsiteControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewWebsiteInFrequency
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Website, 'id'>, 'frequencyId'>, schemaOptions: { title: 'NewWebsiteInFrequency', exclude: [ 'id' ], optional: [ 'frequencyId' ] })
         */
        Components.Schemas.NewWebsiteInFrequency;
        namespace Responses {
            export type $200 = /* Website */ Components.Schemas.Website;
        }
    }
    namespace FrequencyWebsiteControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Website.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Website.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace FrequencyWebsiteControllerFind {
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
            export type $200 = /* Website */ Components.Schemas.Website[];
        }
    }
    namespace FrequencyWebsiteControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Website.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
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
    namespace UserControllerCount {
        namespace Parameters {
            /**
             * User.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* User.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UserControllerCreate {
        export type RequestBody = /**
         * NewUser
         * (tsType: Omit<User, 'id'>, schemaOptions: { title: 'NewUser', exclude: [ 'id' ] })
         */
        Components.Schemas.NewUser;
        namespace Responses {
            export type $200 = /* User */ Components.Schemas.User;
        }
    }
    namespace UserControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * User DELETE success
             */
            export type $204 = any;
        }
    }
    namespace UserControllerFind {
        namespace Parameters {
            export type Filter = /* User.Filter */ Components.Schemas.UserFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * UserWithRelations
             * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.UserWithRelations[];
        }
    }
    namespace UserControllerFindById {
        namespace Parameters {
            export type Filter = /* User.Filter */ Components.Schemas.UserFilter;
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
             * UserWithRelations
             * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.UserWithRelations;
        }
    }
    namespace UserControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* User */ Components.Schemas.User;
        namespace Responses {
            /**
             * User PUT success
             */
            export type $204 = any;
        }
    }
    namespace UserControllerUpdateAll {
        namespace Parameters {
            /**
             * User.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* User.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * UserPartial
         * (tsType: Partial<User>, schemaOptions: { partial: true })
         */
        Components.Schemas.UserPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UserControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * UserPartial
         * (tsType: Partial<User>, schemaOptions: { partial: true })
         */
        Components.Schemas.UserPartial;
        namespace Responses {
            /**
             * User PATCH success
             */
            export type $204 = any;
        }
    }
    namespace UserWebsiteControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewWebsiteInUser
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Website, 'id'>, 'userId'>, schemaOptions: { title: 'NewWebsiteInUser', exclude: [ 'id' ], optional: [ 'userId' ] })
         */
        Components.Schemas.NewWebsiteInUser;
        namespace Responses {
            export type $200 = /* Website */ Components.Schemas.Website;
        }
    }
    namespace UserWebsiteControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Website.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Website.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UserWebsiteControllerFind {
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
            export type $200 = /* Website */ Components.Schemas.Website[];
        }
    }
    namespace UserWebsiteControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Website.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
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
   * FrequencyController.count
   */
  'FrequencyController.count'(
    parameters?: Parameters<Paths.FrequencyControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyControllerCount.Responses.$200>
  /**
   * FrequencyWebsiteController.find
   */
  'FrequencyWebsiteController.find'(
    parameters?: Parameters<Paths.FrequencyWebsiteControllerFind.PathParameters & Paths.FrequencyWebsiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyWebsiteControllerFind.Responses.$200>
  /**
   * FrequencyWebsiteController.create
   */
  'FrequencyWebsiteController.create'(
    parameters?: Parameters<Paths.FrequencyWebsiteControllerCreate.PathParameters> | null,
    data?: Paths.FrequencyWebsiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyWebsiteControllerCreate.Responses.$200>
  /**
   * FrequencyWebsiteController.patch
   */
  'FrequencyWebsiteController.patch'(
    parameters?: Parameters<Paths.FrequencyWebsiteControllerPatch.PathParameters & Paths.FrequencyWebsiteControllerPatch.QueryParameters> | null,
    data?: Paths.FrequencyWebsiteControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyWebsiteControllerPatch.Responses.$200>
  /**
   * FrequencyWebsiteController.delete
   */
  'FrequencyWebsiteController.delete'(
    parameters?: Parameters<Paths.FrequencyWebsiteControllerDelete.PathParameters & Paths.FrequencyWebsiteControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyWebsiteControllerDelete.Responses.$200>
  /**
   * FrequencyController.findById
   */
  'FrequencyController.findById'(
    parameters?: Parameters<Paths.FrequencyControllerFindById.PathParameters & Paths.FrequencyControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyControllerFindById.Responses.$200>
  /**
   * FrequencyController.replaceById
   */
  'FrequencyController.replaceById'(
    parameters?: Parameters<Paths.FrequencyControllerReplaceById.PathParameters> | null,
    data?: Paths.FrequencyControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyControllerReplaceById.Responses.$204>
  /**
   * FrequencyController.updateById
   */
  'FrequencyController.updateById'(
    parameters?: Parameters<Paths.FrequencyControllerUpdateById.PathParameters> | null,
    data?: Paths.FrequencyControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyControllerUpdateById.Responses.$204>
  /**
   * FrequencyController.deleteById
   */
  'FrequencyController.deleteById'(
    parameters?: Parameters<Paths.FrequencyControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyControllerDeleteById.Responses.$204>
  /**
   * FrequencyController.find
   */
  'FrequencyController.find'(
    parameters?: Parameters<Paths.FrequencyControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyControllerFind.Responses.$200>
  /**
   * FrequencyController.create
   */
  'FrequencyController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.FrequencyControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyControllerCreate.Responses.$200>
  /**
   * FrequencyController.updateAll
   */
  'FrequencyController.updateAll'(
    parameters?: Parameters<Paths.FrequencyControllerUpdateAll.QueryParameters> | null,
    data?: Paths.FrequencyControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.FrequencyControllerUpdateAll.Responses.$200>
  /**
   * PingController.greet
   */
  'PingController.greet'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
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
   * UserController.count
   */
  'UserController.count'(
    parameters?: Parameters<Paths.UserControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerCount.Responses.$200>
  /**
   * UserWebsiteController.find
   */
  'UserWebsiteController.find'(
    parameters?: Parameters<Paths.UserWebsiteControllerFind.PathParameters & Paths.UserWebsiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserWebsiteControllerFind.Responses.$200>
  /**
   * UserWebsiteController.create
   */
  'UserWebsiteController.create'(
    parameters?: Parameters<Paths.UserWebsiteControllerCreate.PathParameters> | null,
    data?: Paths.UserWebsiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserWebsiteControllerCreate.Responses.$200>
  /**
   * UserWebsiteController.patch
   */
  'UserWebsiteController.patch'(
    parameters?: Parameters<Paths.UserWebsiteControllerPatch.PathParameters & Paths.UserWebsiteControllerPatch.QueryParameters> | null,
    data?: Paths.UserWebsiteControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserWebsiteControllerPatch.Responses.$200>
  /**
   * UserWebsiteController.delete
   */
  'UserWebsiteController.delete'(
    parameters?: Parameters<Paths.UserWebsiteControllerDelete.PathParameters & Paths.UserWebsiteControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserWebsiteControllerDelete.Responses.$200>
  /**
   * UserController.findById
   */
  'UserController.findById'(
    parameters?: Parameters<Paths.UserControllerFindById.PathParameters & Paths.UserControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerFindById.Responses.$200>
  /**
   * UserController.replaceById
   */
  'UserController.replaceById'(
    parameters?: Parameters<Paths.UserControllerReplaceById.PathParameters> | null,
    data?: Paths.UserControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerReplaceById.Responses.$204>
  /**
   * UserController.updateById
   */
  'UserController.updateById'(
    parameters?: Parameters<Paths.UserControllerUpdateById.PathParameters> | null,
    data?: Paths.UserControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerUpdateById.Responses.$204>
  /**
   * UserController.deleteById
   */
  'UserController.deleteById'(
    parameters?: Parameters<Paths.UserControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerDeleteById.Responses.$204>
  /**
   * UserController.find
   */
  'UserController.find'(
    parameters?: Parameters<Paths.UserControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerFind.Responses.$200>
  /**
   * UserController.create
   */
  'UserController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UserControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerCreate.Responses.$200>
  /**
   * UserController.updateAll
   */
  'UserController.updateAll'(
    parameters?: Parameters<Paths.UserControllerUpdateAll.QueryParameters> | null,
    data?: Paths.UserControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserControllerUpdateAll.Responses.$200>
  /**
   * WebsiteController.count
   */
  'WebsiteController.count'(
    parameters?: Parameters<Paths.WebsiteControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WebsiteControllerCount.Responses.$200>
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
  ['/frequencies/count']: {
    /**
     * FrequencyController.count
     */
    'get'(
      parameters?: Parameters<Paths.FrequencyControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyControllerCount.Responses.$200>
  }
  ['/frequencies/{id}/websites']: {
    /**
     * FrequencyWebsiteController.create
     */
    'post'(
      parameters?: Parameters<Paths.FrequencyWebsiteControllerCreate.PathParameters> | null,
      data?: Paths.FrequencyWebsiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyWebsiteControllerCreate.Responses.$200>
    /**
     * FrequencyWebsiteController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.FrequencyWebsiteControllerPatch.PathParameters & Paths.FrequencyWebsiteControllerPatch.QueryParameters> | null,
      data?: Paths.FrequencyWebsiteControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyWebsiteControllerPatch.Responses.$200>
    /**
     * FrequencyWebsiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.FrequencyWebsiteControllerFind.PathParameters & Paths.FrequencyWebsiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyWebsiteControllerFind.Responses.$200>
    /**
     * FrequencyWebsiteController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.FrequencyWebsiteControllerDelete.PathParameters & Paths.FrequencyWebsiteControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyWebsiteControllerDelete.Responses.$200>
  }
  ['/frequencies/{id}']: {
    /**
     * FrequencyController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.FrequencyControllerReplaceById.PathParameters> | null,
      data?: Paths.FrequencyControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyControllerReplaceById.Responses.$204>
    /**
     * FrequencyController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.FrequencyControllerUpdateById.PathParameters> | null,
      data?: Paths.FrequencyControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyControllerUpdateById.Responses.$204>
    /**
     * FrequencyController.findById
     */
    'get'(
      parameters?: Parameters<Paths.FrequencyControllerFindById.PathParameters & Paths.FrequencyControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyControllerFindById.Responses.$200>
    /**
     * FrequencyController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.FrequencyControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyControllerDeleteById.Responses.$204>
  }
  ['/frequencies']: {
    /**
     * FrequencyController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.FrequencyControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyControllerCreate.Responses.$200>
    /**
     * FrequencyController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.FrequencyControllerUpdateAll.QueryParameters> | null,
      data?: Paths.FrequencyControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyControllerUpdateAll.Responses.$200>
    /**
     * FrequencyController.find
     */
    'get'(
      parameters?: Parameters<Paths.FrequencyControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.FrequencyControllerFind.Responses.$200>
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
  ['/users/count']: {
    /**
     * UserController.count
     */
    'get'(
      parameters?: Parameters<Paths.UserControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerCount.Responses.$200>
  }
  ['/users/{id}/websites']: {
    /**
     * UserWebsiteController.create
     */
    'post'(
      parameters?: Parameters<Paths.UserWebsiteControllerCreate.PathParameters> | null,
      data?: Paths.UserWebsiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserWebsiteControllerCreate.Responses.$200>
    /**
     * UserWebsiteController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.UserWebsiteControllerPatch.PathParameters & Paths.UserWebsiteControllerPatch.QueryParameters> | null,
      data?: Paths.UserWebsiteControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserWebsiteControllerPatch.Responses.$200>
    /**
     * UserWebsiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.UserWebsiteControllerFind.PathParameters & Paths.UserWebsiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserWebsiteControllerFind.Responses.$200>
    /**
     * UserWebsiteController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.UserWebsiteControllerDelete.PathParameters & Paths.UserWebsiteControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserWebsiteControllerDelete.Responses.$200>
  }
  ['/users/{id}']: {
    /**
     * UserController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.UserControllerReplaceById.PathParameters> | null,
      data?: Paths.UserControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerReplaceById.Responses.$204>
    /**
     * UserController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.UserControllerUpdateById.PathParameters> | null,
      data?: Paths.UserControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerUpdateById.Responses.$204>
    /**
     * UserController.findById
     */
    'get'(
      parameters?: Parameters<Paths.UserControllerFindById.PathParameters & Paths.UserControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerFindById.Responses.$200>
    /**
     * UserController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.UserControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerDeleteById.Responses.$204>
  }
  ['/users']: {
    /**
     * UserController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UserControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerCreate.Responses.$200>
    /**
     * UserController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.UserControllerUpdateAll.QueryParameters> | null,
      data?: Paths.UserControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerUpdateAll.Responses.$200>
    /**
     * UserController.find
     */
    'get'(
      parameters?: Parameters<Paths.UserControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserControllerFind.Responses.$200>
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
