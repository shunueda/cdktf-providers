// https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcoreProviderConfig {
  /**
  * A single API endpoint for all products. Will be used when specific product API url is not defined. Can also be set with the GCORE_API_ENDPOINT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#api_endpoint GcoreProvider#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * Region API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_api GcoreProvider#gcore_api}
  */
  readonly gcoreApi?: string;
  /**
  * CDN API (define only if you want to override CDN API endpoint). Can also be set with the GCORE_CDN_API environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_cdn_api GcoreProvider#gcore_cdn_api}
  */
  readonly gcoreCdnApi?: string;
  /**
  * Client ID. Can also be set with the GCORE_CLIENT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_client_id GcoreProvider#gcore_client_id}
  */
  readonly gcoreClientId?: string;
  /**
  * Region API (define only if you want to override Region API endpoint). Can also be set with the GCORE_CLOUD_API environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_cloud_api GcoreProvider#gcore_cloud_api}
  */
  readonly gcoreCloudApi?: string;
  /**
  * DNS API (define only if you want to override DNS API endpoint). Can also be set with the GCORE_DNS_API environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_dns_api GcoreProvider#gcore_dns_api}
  */
  readonly gcoreDnsApi?: string;
  /**
  * FastEdge API (define only if you want to override FastEdge API endpoint). Can also be set with the GCORE_FASTEDGE_API environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_fastedge_api GcoreProvider#gcore_fastedge_api}
  */
  readonly gcoreFastedgeApi?: string;
  /**
  * Platform URL is used for generate JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_platform GcoreProvider#gcore_platform}
  */
  readonly gcorePlatform?: string;
  /**
  * Platform URL is used for generate JWT (define only if you want to override Platform API endpoint). Can also be set with the GCORE_PLATFORM_API environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_platform_api GcoreProvider#gcore_platform_api}
  */
  readonly gcorePlatformApi?: string;
  /**
  * Storage API (define only if you want to override Storage API endpoint). Can also be set with the GCORE_STORAGE_API environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_storage_api GcoreProvider#gcore_storage_api}
  */
  readonly gcoreStorageApi?: string;
  /**
  * WAAP API (define only if you want to override WAAP API endpoint). Can also be set with the GCORE_WAAP_API environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#gcore_waap_api GcoreProvider#gcore_waap_api}
  */
  readonly gcoreWaapApi?: string;
  /**
  * Should be set to true when you are gonna to use storage resource with permanent API-token only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#ignore_creds_auth_error GcoreProvider#ignore_creds_auth_error}
  */
  readonly ignoreCredsAuthError?: boolean | cdktf.IResolvable;
  /**
  * Gcore account password. Can also be set with the GCORE_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#password GcoreProvider#password}
  */
  readonly password?: string;
  /**
  * A permanent [API-token](https://gcore.com/docs/account-settings/create-use-or-delete-a-permanent-api-token). Can also be set with the GCORE_PERMANENT_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#permanent_api_token GcoreProvider#permanent_api_token}
  */
  readonly permanentApiToken?: string;
  /**
  * Gcore account username. Can also be set with the GCORE_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#user_name GcoreProvider#user_name}
  */
  readonly userName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#alias GcoreProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs gcore}
*/
export class GcoreProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcoreProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcoreProvider to import
  * @param importFromId The id of the existing GcoreProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcoreProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs gcore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcoreProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GcoreProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gcore',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.4',
        providerVersionConstraint: '0.31.4'
      },
      terraformProviderSource: 'G-Core/gcore'
    });
    this._apiEndpoint = config.apiEndpoint;
    this._gcoreApi = config.gcoreApi;
    this._gcoreCdnApi = config.gcoreCdnApi;
    this._gcoreClientId = config.gcoreClientId;
    this._gcoreCloudApi = config.gcoreCloudApi;
    this._gcoreDnsApi = config.gcoreDnsApi;
    this._gcoreFastedgeApi = config.gcoreFastedgeApi;
    this._gcorePlatform = config.gcorePlatform;
    this._gcorePlatformApi = config.gcorePlatformApi;
    this._gcoreStorageApi = config.gcoreStorageApi;
    this._gcoreWaapApi = config.gcoreWaapApi;
    this._ignoreCredsAuthError = config.ignoreCredsAuthError;
    this._password = config.password;
    this._permanentApiToken = config.permanentApiToken;
    this._userName = config.userName;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public set apiEndpoint(value: string | undefined) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
  }

  // gcore_api - computed: false, optional: true, required: false
  private _gcoreApi?: string; 
  public get gcoreApi() {
    return this._gcoreApi;
  }
  public set gcoreApi(value: string | undefined) {
    this._gcoreApi = value;
  }
  public resetGcoreApi() {
    this._gcoreApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcoreApiInput() {
    return this._gcoreApi;
  }

  // gcore_cdn_api - computed: false, optional: true, required: false
  private _gcoreCdnApi?: string; 
  public get gcoreCdnApi() {
    return this._gcoreCdnApi;
  }
  public set gcoreCdnApi(value: string | undefined) {
    this._gcoreCdnApi = value;
  }
  public resetGcoreCdnApi() {
    this._gcoreCdnApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcoreCdnApiInput() {
    return this._gcoreCdnApi;
  }

  // gcore_client_id - computed: false, optional: true, required: false
  private _gcoreClientId?: string; 
  public get gcoreClientId() {
    return this._gcoreClientId;
  }
  public set gcoreClientId(value: string | undefined) {
    this._gcoreClientId = value;
  }
  public resetGcoreClientId() {
    this._gcoreClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcoreClientIdInput() {
    return this._gcoreClientId;
  }

  // gcore_cloud_api - computed: false, optional: true, required: false
  private _gcoreCloudApi?: string; 
  public get gcoreCloudApi() {
    return this._gcoreCloudApi;
  }
  public set gcoreCloudApi(value: string | undefined) {
    this._gcoreCloudApi = value;
  }
  public resetGcoreCloudApi() {
    this._gcoreCloudApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcoreCloudApiInput() {
    return this._gcoreCloudApi;
  }

  // gcore_dns_api - computed: false, optional: true, required: false
  private _gcoreDnsApi?: string; 
  public get gcoreDnsApi() {
    return this._gcoreDnsApi;
  }
  public set gcoreDnsApi(value: string | undefined) {
    this._gcoreDnsApi = value;
  }
  public resetGcoreDnsApi() {
    this._gcoreDnsApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcoreDnsApiInput() {
    return this._gcoreDnsApi;
  }

  // gcore_fastedge_api - computed: false, optional: true, required: false
  private _gcoreFastedgeApi?: string; 
  public get gcoreFastedgeApi() {
    return this._gcoreFastedgeApi;
  }
  public set gcoreFastedgeApi(value: string | undefined) {
    this._gcoreFastedgeApi = value;
  }
  public resetGcoreFastedgeApi() {
    this._gcoreFastedgeApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcoreFastedgeApiInput() {
    return this._gcoreFastedgeApi;
  }

  // gcore_platform - computed: false, optional: true, required: false
  private _gcorePlatform?: string; 
  public get gcorePlatform() {
    return this._gcorePlatform;
  }
  public set gcorePlatform(value: string | undefined) {
    this._gcorePlatform = value;
  }
  public resetGcorePlatform() {
    this._gcorePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcorePlatformInput() {
    return this._gcorePlatform;
  }

  // gcore_platform_api - computed: false, optional: true, required: false
  private _gcorePlatformApi?: string; 
  public get gcorePlatformApi() {
    return this._gcorePlatformApi;
  }
  public set gcorePlatformApi(value: string | undefined) {
    this._gcorePlatformApi = value;
  }
  public resetGcorePlatformApi() {
    this._gcorePlatformApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcorePlatformApiInput() {
    return this._gcorePlatformApi;
  }

  // gcore_storage_api - computed: false, optional: true, required: false
  private _gcoreStorageApi?: string; 
  public get gcoreStorageApi() {
    return this._gcoreStorageApi;
  }
  public set gcoreStorageApi(value: string | undefined) {
    this._gcoreStorageApi = value;
  }
  public resetGcoreStorageApi() {
    this._gcoreStorageApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcoreStorageApiInput() {
    return this._gcoreStorageApi;
  }

  // gcore_waap_api - computed: false, optional: true, required: false
  private _gcoreWaapApi?: string; 
  public get gcoreWaapApi() {
    return this._gcoreWaapApi;
  }
  public set gcoreWaapApi(value: string | undefined) {
    this._gcoreWaapApi = value;
  }
  public resetGcoreWaapApi() {
    this._gcoreWaapApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcoreWaapApiInput() {
    return this._gcoreWaapApi;
  }

  // ignore_creds_auth_error - computed: false, optional: true, required: false
  private _ignoreCredsAuthError?: boolean | cdktf.IResolvable; 
  public get ignoreCredsAuthError() {
    return this._ignoreCredsAuthError;
  }
  public set ignoreCredsAuthError(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreCredsAuthError = value;
  }
  public resetIgnoreCredsAuthError() {
    this._ignoreCredsAuthError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCredsAuthErrorInput() {
    return this._ignoreCredsAuthError;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // permanent_api_token - computed: false, optional: true, required: false
  private _permanentApiToken?: string; 
  public get permanentApiToken() {
    return this._permanentApiToken;
  }
  public set permanentApiToken(value: string | undefined) {
    this._permanentApiToken = value;
  }
  public resetPermanentApiToken() {
    this._permanentApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentApiTokenInput() {
    return this._permanentApiToken;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_endpoint: cdktf.stringToTerraform(this._apiEndpoint),
      gcore_api: cdktf.stringToTerraform(this._gcoreApi),
      gcore_cdn_api: cdktf.stringToTerraform(this._gcoreCdnApi),
      gcore_client_id: cdktf.stringToTerraform(this._gcoreClientId),
      gcore_cloud_api: cdktf.stringToTerraform(this._gcoreCloudApi),
      gcore_dns_api: cdktf.stringToTerraform(this._gcoreDnsApi),
      gcore_fastedge_api: cdktf.stringToTerraform(this._gcoreFastedgeApi),
      gcore_platform: cdktf.stringToTerraform(this._gcorePlatform),
      gcore_platform_api: cdktf.stringToTerraform(this._gcorePlatformApi),
      gcore_storage_api: cdktf.stringToTerraform(this._gcoreStorageApi),
      gcore_waap_api: cdktf.stringToTerraform(this._gcoreWaapApi),
      ignore_creds_auth_error: cdktf.booleanToTerraform(this._ignoreCredsAuthError),
      password: cdktf.stringToTerraform(this._password),
      permanent_api_token: cdktf.stringToTerraform(this._permanentApiToken),
      user_name: cdktf.stringToTerraform(this._userName),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_endpoint: {
        value: cdktf.stringToHclTerraform(this._apiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_api: {
        value: cdktf.stringToHclTerraform(this._gcoreApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_cdn_api: {
        value: cdktf.stringToHclTerraform(this._gcoreCdnApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_client_id: {
        value: cdktf.stringToHclTerraform(this._gcoreClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_cloud_api: {
        value: cdktf.stringToHclTerraform(this._gcoreCloudApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_dns_api: {
        value: cdktf.stringToHclTerraform(this._gcoreDnsApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_fastedge_api: {
        value: cdktf.stringToHclTerraform(this._gcoreFastedgeApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_platform: {
        value: cdktf.stringToHclTerraform(this._gcorePlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_platform_api: {
        value: cdktf.stringToHclTerraform(this._gcorePlatformApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_storage_api: {
        value: cdktf.stringToHclTerraform(this._gcoreStorageApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcore_waap_api: {
        value: cdktf.stringToHclTerraform(this._gcoreWaapApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_creds_auth_error: {
        value: cdktf.booleanToHclTerraform(this._ignoreCredsAuthError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanent_api_token: {
        value: cdktf.stringToHclTerraform(this._permanentApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
