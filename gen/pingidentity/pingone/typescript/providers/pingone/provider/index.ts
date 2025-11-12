// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PingoneProviderConfig {
  /**
  * The access token used for provider resource management against the PingOne management API.  Default value can be set with the `PINGONE_API_ACCESS_TOKEN` environment variable.  Must provide only one of `api_access_token` (when obtaining the worker token outside of the provider) and `client_id` (when the provider should fetch the worker token during operations).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#api_access_token PingoneProvider#api_access_token}
  */
  readonly apiAccessToken?: string;
  /**
  * A custom string value to append to the end of the `User-Agent` header when making API requests to the PingOne service. Default value can be set with the `PINGONE_TF_APPEND_USER_AGENT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#append_user_agent PingoneProvider#append_user_agent}
  */
  readonly appendUserAgent?: string;
  /**
  * Client ID for the worker app client.  Default value can be set with the `PINGONE_CLIENT_ID` environment variable.  Must provide only one of `api_access_token` (when obtaining the worker token outside of the provider) and `client_id` (when the provider should fetch the worker token during operations).  Must be configured with `client_secret` and `environment_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#client_id PingoneProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret for the worker app client.  Default value can be set with the `PINGONE_CLIENT_SECRET` environment variable.  Must be configured with `client_id` and `environment_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#client_secret PingoneProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Environment ID for the worker app client.  Default value can be set with the `PINGONE_ENVIRONMENT_ID` environment variable.  Must be configured with `client_id` and `client_secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#environment_id PingoneProvider#environment_id}
  */
  readonly environmentId?: string;
  /**
  * Full URL for the http/https proxy service, for example `http://127.0.0.1:8090`.  Default value can be set with the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#http_proxy PingoneProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The PingOne region to use, which selects the appropriate service endpoints.  Options are `AP` (for Asia-Pacific `.asia` tenants), `AU` (for Asia-Pacific `.com.au` tenants), `CA` (for Canada `.ca` tenants), `EU` (for Europe `.eu` tenants), `NA` (for North America `.com` tenants) and `SG` (for Singapore `.sg` tenants).  Default value can be set with the `PINGONE_REGION_CODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#region_code PingoneProvider#region_code}
  */
  readonly regionCode?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#alias PingoneProvider#alias}
  */
  readonly alias?: string;
  /**
  * global_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#global_options PingoneProvider#global_options}
  */
  readonly globalOptions?: PingoneProviderGlobalOptions[] | cdktf.IResolvable;
  /**
  * service_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#service_endpoints PingoneProvider#service_endpoints}
  */
  readonly serviceEndpoints?: PingoneProviderServiceEndpoints[] | cdktf.IResolvable;
}
export interface PingoneProviderGlobalOptionsPopulation {
  /**
  * Choose whether to force-delete populations that contain users not managed by Terraform. Useful for development and testing use cases, and only applies if the environment that contains the population is of type `SANDBOX`. The platform default is that populations cannot be removed if they contain user data. By default this parameter is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#contains_users_force_delete PingoneProvider#contains_users_force_delete}
  */
  readonly containsUsersForceDelete?: boolean | cdktf.IResolvable;
}

export function pingoneProviderGlobalOptionsPopulationToTerraform(struct?: PingoneProviderGlobalOptionsPopulation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains_users_force_delete: cdktf.booleanToTerraform(struct!.containsUsersForceDelete),
  }
}


export function pingoneProviderGlobalOptionsPopulationToHclTerraform(struct?: PingoneProviderGlobalOptionsPopulation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains_users_force_delete: {
      value: cdktf.booleanToHclTerraform(struct!.containsUsersForceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface PingoneProviderGlobalOptions {
  /**
  * population block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#population PingoneProvider#population}
  */
  readonly population?: PingoneProviderGlobalOptionsPopulation[] | cdktf.IResolvable;
}

export function pingoneProviderGlobalOptionsToTerraform(struct?: PingoneProviderGlobalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    population: cdktf.listMapper(pingoneProviderGlobalOptionsPopulationToTerraform, true)(struct!.population),
  }
}


export function pingoneProviderGlobalOptionsToHclTerraform(struct?: PingoneProviderGlobalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    population: {
      value: cdktf.listMapperHcl(pingoneProviderGlobalOptionsPopulationToHclTerraform, true)(struct!.population),
      isBlock: true,
      type: "list",
      storageClassType: "PingoneProviderGlobalOptionsPopulationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface PingoneProviderServiceEndpoints {
  /**
  * Hostname for the PingOne management service API.  Default value can be set with the `PINGONE_API_SERVICE_HOSTNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#api_hostname PingoneProvider#api_hostname}
  */
  readonly apiHostname: string;
  /**
  * Hostname for the PingOne authentication service API.  Default value can be set with the `PINGONE_AUTH_SERVICE_HOSTNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#auth_hostname PingoneProvider#auth_hostname}
  */
  readonly authHostname: string;
}

export function pingoneProviderServiceEndpointsToTerraform(struct?: PingoneProviderServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_hostname: cdktf.stringToTerraform(struct!.apiHostname),
    auth_hostname: cdktf.stringToTerraform(struct!.authHostname),
  }
}


export function pingoneProviderServiceEndpointsToHclTerraform(struct?: PingoneProviderServiceEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_hostname: {
      value: cdktf.stringToHclTerraform(struct!.apiHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_hostname: {
      value: cdktf.stringToHclTerraform(struct!.authHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs pingone}
*/
export class PingoneProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PingoneProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PingoneProvider to import
  * @param importFromId The id of the existing PingoneProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PingoneProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs pingone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PingoneProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PingoneProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingone',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      terraformProviderSource: 'pingidentity/pingone'
    });
    this._apiAccessToken = config.apiAccessToken;
    this._appendUserAgent = config.appendUserAgent;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._environmentId = config.environmentId;
    this._httpProxy = config.httpProxy;
    this._regionCode = config.regionCode;
    this._alias = config.alias;
    this._globalOptions = config.globalOptions;
    this._serviceEndpoints = config.serviceEndpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_access_token - computed: false, optional: true, required: false
  private _apiAccessToken?: string; 
  public get apiAccessToken() {
    return this._apiAccessToken;
  }
  public set apiAccessToken(value: string | undefined) {
    this._apiAccessToken = value;
  }
  public resetApiAccessToken() {
    this._apiAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAccessTokenInput() {
    return this._apiAccessToken;
  }

  // append_user_agent - computed: false, optional: true, required: false
  private _appendUserAgent?: string; 
  public get appendUserAgent() {
    return this._appendUserAgent;
  }
  public set appendUserAgent(value: string | undefined) {
    this._appendUserAgent = value;
  }
  public resetAppendUserAgent() {
    this._appendUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendUserAgentInput() {
    return this._appendUserAgent;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this._environmentId;
  }
  public set environmentId(value: string | undefined) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // region_code - computed: false, optional: true, required: false
  private _regionCode?: string; 
  public get regionCode() {
    return this._regionCode;
  }
  public set regionCode(value: string | undefined) {
    this._regionCode = value;
  }
  public resetRegionCode() {
    this._regionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodeInput() {
    return this._regionCode;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // global_options - computed: false, optional: true, required: false
  private _globalOptions?: PingoneProviderGlobalOptions[] | cdktf.IResolvable; 
  public get globalOptions() {
    return this._globalOptions;
  }
  public set globalOptions(value: PingoneProviderGlobalOptions[] | cdktf.IResolvable | undefined) {
    this._globalOptions = value;
  }
  public resetGlobalOptions() {
    this._globalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOptionsInput() {
    return this._globalOptions;
  }

  // service_endpoints - computed: false, optional: true, required: false
  private _serviceEndpoints?: PingoneProviderServiceEndpoints[] | cdktf.IResolvable; 
  public get serviceEndpoints() {
    return this._serviceEndpoints;
  }
  public set serviceEndpoints(value: PingoneProviderServiceEndpoints[] | cdktf.IResolvable | undefined) {
    this._serviceEndpoints = value;
  }
  public resetServiceEndpoints() {
    this._serviceEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointsInput() {
    return this._serviceEndpoints;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_access_token: cdktf.stringToTerraform(this._apiAccessToken),
      append_user_agent: cdktf.stringToTerraform(this._appendUserAgent),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      region_code: cdktf.stringToTerraform(this._regionCode),
      alias: cdktf.stringToTerraform(this._alias),
      global_options: cdktf.listMapper(pingoneProviderGlobalOptionsToTerraform, true)(this._globalOptions),
      service_endpoints: cdktf.listMapper(pingoneProviderServiceEndpointsToTerraform, true)(this._serviceEndpoints),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_access_token: {
        value: cdktf.stringToHclTerraform(this._apiAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      append_user_agent: {
        value: cdktf.stringToHclTerraform(this._appendUserAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_code: {
        value: cdktf.stringToHclTerraform(this._regionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_options: {
        value: cdktf.listMapperHcl(pingoneProviderGlobalOptionsToHclTerraform, true)(this._globalOptions),
        isBlock: true,
        type: "list",
        storageClassType: "PingoneProviderGlobalOptionsList",
      },
      service_endpoints: {
        value: cdktf.listMapperHcl(pingoneProviderServiceEndpointsToHclTerraform, true)(this._serviceEndpoints),
        isBlock: true,
        type: "list",
        storageClassType: "PingoneProviderServiceEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
