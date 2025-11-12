// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgecenterProviderConfig {
  /**
  * A single API endpoint for all products. Will be used when specific product API url is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#api_endpoint EdgecenterProvider#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * Region API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#edgecenter_api EdgecenterProvider#edgecenter_api}
  */
  readonly edgecenterApi?: string;
  /**
  * CDN API (define only if you want to override CDN API endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#edgecenter_cdn_api EdgecenterProvider#edgecenter_cdn_api}
  */
  readonly edgecenterCdnApi?: string;
  /**
  * Region API (define only if you want to override Region API endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#edgecenter_cloud_api EdgecenterProvider#edgecenter_cloud_api}
  */
  readonly edgecenterCloudApi?: string;
  /**
  * DNS API (define only if you want to override DNS API endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#edgecenter_dns_api EdgecenterProvider#edgecenter_dns_api}
  */
  readonly edgecenterDnsApi?: string;
  /**
  * Platform URL is used for generate JWT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#edgecenter_platform EdgecenterProvider#edgecenter_platform}
  */
  readonly edgecenterPlatform?: string;
  /**
  * Platform URL is used for generate JWT (define only if you want to override Platform API endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#edgecenter_platform_api EdgecenterProvider#edgecenter_platform_api}
  */
  readonly edgecenterPlatformApi?: string;
  /**
  * Protection API (define only if you want to override Protection API endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#edgecenter_protection_api EdgecenterProvider#edgecenter_protection_api}
  */
  readonly edgecenterProtectionApi?: string;
  /**
  * Storage API (define only if you want to override Storage API endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#edgecenter_storage_api EdgecenterProvider#edgecenter_storage_api}
  */
  readonly edgecenterStorageApi?: string;
  /**
  * Should be set to true when you are gonna to use storage resource with permanent API-token only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#ignore_creds_auth_error EdgecenterProvider#ignore_creds_auth_error}
  */
  readonly ignoreCredsAuthError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#password EdgecenterProvider#password}
  */
  readonly password?: string;
  /**
  * A permanent [API-token](https://support.edgecenter.ru/knowledge_base/item/257788)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#permanent_api_token EdgecenterProvider#permanent_api_token}
  */
  readonly permanentApiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#user_name EdgecenterProvider#user_name}
  */
  readonly userName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#alias EdgecenterProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs edgecenter}
*/
export class EdgecenterProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgecenterProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgecenterProvider to import
  * @param importFromId The id of the existing EdgecenterProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgecenterProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs edgecenter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgecenterProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EdgecenterProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'edgecenter',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.4',
        providerVersionConstraint: '0.10.4'
      },
      terraformProviderSource: 'Edge-Center/edgecenter'
    });
    this._apiEndpoint = config.apiEndpoint;
    this._edgecenterApi = config.edgecenterApi;
    this._edgecenterCdnApi = config.edgecenterCdnApi;
    this._edgecenterCloudApi = config.edgecenterCloudApi;
    this._edgecenterDnsApi = config.edgecenterDnsApi;
    this._edgecenterPlatform = config.edgecenterPlatform;
    this._edgecenterPlatformApi = config.edgecenterPlatformApi;
    this._edgecenterProtectionApi = config.edgecenterProtectionApi;
    this._edgecenterStorageApi = config.edgecenterStorageApi;
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

  // edgecenter_api - computed: false, optional: true, required: false
  private _edgecenterApi?: string; 
  public get edgecenterApi() {
    return this._edgecenterApi;
  }
  public set edgecenterApi(value: string | undefined) {
    this._edgecenterApi = value;
  }
  public resetEdgecenterApi() {
    this._edgecenterApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecenterApiInput() {
    return this._edgecenterApi;
  }

  // edgecenter_cdn_api - computed: false, optional: true, required: false
  private _edgecenterCdnApi?: string; 
  public get edgecenterCdnApi() {
    return this._edgecenterCdnApi;
  }
  public set edgecenterCdnApi(value: string | undefined) {
    this._edgecenterCdnApi = value;
  }
  public resetEdgecenterCdnApi() {
    this._edgecenterCdnApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecenterCdnApiInput() {
    return this._edgecenterCdnApi;
  }

  // edgecenter_cloud_api - computed: false, optional: true, required: false
  private _edgecenterCloudApi?: string; 
  public get edgecenterCloudApi() {
    return this._edgecenterCloudApi;
  }
  public set edgecenterCloudApi(value: string | undefined) {
    this._edgecenterCloudApi = value;
  }
  public resetEdgecenterCloudApi() {
    this._edgecenterCloudApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecenterCloudApiInput() {
    return this._edgecenterCloudApi;
  }

  // edgecenter_dns_api - computed: false, optional: true, required: false
  private _edgecenterDnsApi?: string; 
  public get edgecenterDnsApi() {
    return this._edgecenterDnsApi;
  }
  public set edgecenterDnsApi(value: string | undefined) {
    this._edgecenterDnsApi = value;
  }
  public resetEdgecenterDnsApi() {
    this._edgecenterDnsApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecenterDnsApiInput() {
    return this._edgecenterDnsApi;
  }

  // edgecenter_platform - computed: false, optional: true, required: false
  private _edgecenterPlatform?: string; 
  public get edgecenterPlatform() {
    return this._edgecenterPlatform;
  }
  public set edgecenterPlatform(value: string | undefined) {
    this._edgecenterPlatform = value;
  }
  public resetEdgecenterPlatform() {
    this._edgecenterPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecenterPlatformInput() {
    return this._edgecenterPlatform;
  }

  // edgecenter_platform_api - computed: false, optional: true, required: false
  private _edgecenterPlatformApi?: string; 
  public get edgecenterPlatformApi() {
    return this._edgecenterPlatformApi;
  }
  public set edgecenterPlatformApi(value: string | undefined) {
    this._edgecenterPlatformApi = value;
  }
  public resetEdgecenterPlatformApi() {
    this._edgecenterPlatformApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecenterPlatformApiInput() {
    return this._edgecenterPlatformApi;
  }

  // edgecenter_protection_api - computed: false, optional: true, required: false
  private _edgecenterProtectionApi?: string; 
  public get edgecenterProtectionApi() {
    return this._edgecenterProtectionApi;
  }
  public set edgecenterProtectionApi(value: string | undefined) {
    this._edgecenterProtectionApi = value;
  }
  public resetEdgecenterProtectionApi() {
    this._edgecenterProtectionApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecenterProtectionApiInput() {
    return this._edgecenterProtectionApi;
  }

  // edgecenter_storage_api - computed: false, optional: true, required: false
  private _edgecenterStorageApi?: string; 
  public get edgecenterStorageApi() {
    return this._edgecenterStorageApi;
  }
  public set edgecenterStorageApi(value: string | undefined) {
    this._edgecenterStorageApi = value;
  }
  public resetEdgecenterStorageApi() {
    this._edgecenterStorageApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgecenterStorageApiInput() {
    return this._edgecenterStorageApi;
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
      edgecenter_api: cdktf.stringToTerraform(this._edgecenterApi),
      edgecenter_cdn_api: cdktf.stringToTerraform(this._edgecenterCdnApi),
      edgecenter_cloud_api: cdktf.stringToTerraform(this._edgecenterCloudApi),
      edgecenter_dns_api: cdktf.stringToTerraform(this._edgecenterDnsApi),
      edgecenter_platform: cdktf.stringToTerraform(this._edgecenterPlatform),
      edgecenter_platform_api: cdktf.stringToTerraform(this._edgecenterPlatformApi),
      edgecenter_protection_api: cdktf.stringToTerraform(this._edgecenterProtectionApi),
      edgecenter_storage_api: cdktf.stringToTerraform(this._edgecenterStorageApi),
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
      edgecenter_api: {
        value: cdktf.stringToHclTerraform(this._edgecenterApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgecenter_cdn_api: {
        value: cdktf.stringToHclTerraform(this._edgecenterCdnApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgecenter_cloud_api: {
        value: cdktf.stringToHclTerraform(this._edgecenterCloudApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgecenter_dns_api: {
        value: cdktf.stringToHclTerraform(this._edgecenterDnsApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgecenter_platform: {
        value: cdktf.stringToHclTerraform(this._edgecenterPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgecenter_platform_api: {
        value: cdktf.stringToHclTerraform(this._edgecenterPlatformApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgecenter_protection_api: {
        value: cdktf.stringToHclTerraform(this._edgecenterProtectionApi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgecenter_storage_api: {
        value: cdktf.stringToHclTerraform(this._edgecenterStorageApi),
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
