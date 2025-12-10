// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZiaProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#api_key ZiaProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * zpa client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#client_id ZiaProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * zpa client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#client_secret ZiaProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#http_proxy ZiaProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * maximum number of retries to attempt before erroring out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#max_retries ZiaProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://help.zscaler.com/oneapi/understanding-rate-limiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#parallelism ZiaProvider#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#password ZiaProvider#password}
  */
  readonly password?: string;
  /**
  * zpa private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#private_key ZiaProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Timeout for single request (in seconds) which is made to Zscaler, the default is `0` (means no limit is set). The maximum value can be `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#request_timeout ZiaProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Zscaler Sandbox Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#sandbox_cloud ZiaProvider#sandbox_cloud}
  */
  readonly sandboxCloud?: string;
  /**
  * Zscaler Sandbox Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#sandbox_token ZiaProvider#sandbox_token}
  */
  readonly sandboxToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#use_legacy_client ZiaProvider#use_legacy_client}
  */
  readonly useLegacyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#username ZiaProvider#username}
  */
  readonly username?: string;
  /**
  * Zscaler Vanity Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#vanity_domain ZiaProvider#vanity_domain}
  */
  readonly vanityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#zia_cloud ZiaProvider#zia_cloud}
  */
  readonly ziaCloud?: string;
  /**
  * Zscaler Cloud Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#zscaler_cloud ZiaProvider#zscaler_cloud}
  */
  readonly zscalerCloud?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#alias ZiaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs zia}
*/
export class ZiaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZiaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZiaProvider to import
  * @param importFromId The id of the existing ZiaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZiaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs zia} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZiaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZiaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
      },
      terraformProviderSource: 'zscaler/zia'
    });
    this._apiKey = config.apiKey;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._httpProxy = config.httpProxy;
    this._maxRetries = config.maxRetries;
    this._parallelism = config.parallelism;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._requestTimeout = config.requestTimeout;
    this._sandboxCloud = config.sandboxCloud;
    this._sandboxToken = config.sandboxToken;
    this._useLegacyClient = config.useLegacyClient;
    this._username = config.username;
    this._vanityDomain = config.vanityDomain;
    this._ziaCloud = config.ziaCloud;
    this._zscalerCloud = config.zscalerCloud;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this._parallelism;
  }
  public set parallelism(value: number | undefined) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: number | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // sandbox_cloud - computed: false, optional: true, required: false
  private _sandboxCloud?: string; 
  public get sandboxCloud() {
    return this._sandboxCloud;
  }
  public set sandboxCloud(value: string | undefined) {
    this._sandboxCloud = value;
  }
  public resetSandboxCloud() {
    this._sandboxCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxCloudInput() {
    return this._sandboxCloud;
  }

  // sandbox_token - computed: false, optional: true, required: false
  private _sandboxToken?: string; 
  public get sandboxToken() {
    return this._sandboxToken;
  }
  public set sandboxToken(value: string | undefined) {
    this._sandboxToken = value;
  }
  public resetSandboxToken() {
    this._sandboxToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxTokenInput() {
    return this._sandboxToken;
  }

  // use_legacy_client - computed: false, optional: true, required: false
  private _useLegacyClient?: boolean | cdktf.IResolvable; 
  public get useLegacyClient() {
    return this._useLegacyClient;
  }
  public set useLegacyClient(value: boolean | cdktf.IResolvable | undefined) {
    this._useLegacyClient = value;
  }
  public resetUseLegacyClient() {
    this._useLegacyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacyClientInput() {
    return this._useLegacyClient;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vanity_domain - computed: false, optional: true, required: false
  private _vanityDomain?: string; 
  public get vanityDomain() {
    return this._vanityDomain;
  }
  public set vanityDomain(value: string | undefined) {
    this._vanityDomain = value;
  }
  public resetVanityDomain() {
    this._vanityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vanityDomainInput() {
    return this._vanityDomain;
  }

  // zia_cloud - computed: false, optional: true, required: false
  private _ziaCloud?: string; 
  public get ziaCloud() {
    return this._ziaCloud;
  }
  public set ziaCloud(value: string | undefined) {
    this._ziaCloud = value;
  }
  public resetZiaCloud() {
    this._ziaCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ziaCloudInput() {
    return this._ziaCloud;
  }

  // zscaler_cloud - computed: false, optional: true, required: false
  private _zscalerCloud?: string; 
  public get zscalerCloud() {
    return this._zscalerCloud;
  }
  public set zscalerCloud(value: string | undefined) {
    this._zscalerCloud = value;
  }
  public resetZscalerCloud() {
    this._zscalerCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerCloudInput() {
    return this._zscalerCloud;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      parallelism: cdktf.numberToTerraform(this._parallelism),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      sandbox_cloud: cdktf.stringToTerraform(this._sandboxCloud),
      sandbox_token: cdktf.stringToTerraform(this._sandboxToken),
      use_legacy_client: cdktf.booleanToTerraform(this._useLegacyClient),
      username: cdktf.stringToTerraform(this._username),
      vanity_domain: cdktf.stringToTerraform(this._vanityDomain),
      zia_cloud: cdktf.stringToTerraform(this._ziaCloud),
      zscaler_cloud: cdktf.stringToTerraform(this._zscalerCloud),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
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
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parallelism: {
        value: cdktf.numberToHclTerraform(this._parallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sandbox_cloud: {
        value: cdktf.stringToHclTerraform(this._sandboxCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sandbox_token: {
        value: cdktf.stringToHclTerraform(this._sandboxToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_legacy_client: {
        value: cdktf.booleanToHclTerraform(this._useLegacyClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vanity_domain: {
        value: cdktf.stringToHclTerraform(this._vanityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zia_cloud: {
        value: cdktf.stringToHclTerraform(this._ziaCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zscaler_cloud: {
        value: cdktf.stringToHclTerraform(this._zscalerCloud),
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
