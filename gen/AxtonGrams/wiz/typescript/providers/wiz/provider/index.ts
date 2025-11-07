// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WizProviderConfig {
  /**
  * Base64 encoded PEM of the CA chain used when communicating with Wiz. If a proxy performs TLS interception/inspection, this will be the CA chain for the certificate used by the proxy. The default includes the CAs known to be used by Wiz: `C=IE, O=Baltimore, OU=CyberTrust, CN=Baltimore CyberTrust Root`, `C=US, O=Cloudflare, Inc., CN=Cloudflare Inc ECC CA-3`, `C=US, ST=Arizona, L=Scottsdale, O=Starfield Technologies, Inc., CN=Starfield Services Root Certificate Authority - G2`, `C=US, O=Amazon, CN=Amazon Root CA 1`, `C=US, O=Amazon, OU=Server CA 1B, CN=Amazon`. (environment variable: CA_CHAIN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#ca_chain WizProvider#ca_chain}
  */
  readonly caChain?: string;
  /**
  * Maximum retry attempts.
  *     - Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_max WizProvider#http_client_retry_max}
  */
  readonly httpClientRetryMax?: number;
  /**
  * Maximum time to wait before retrying, in seconds.
  *     - Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_wait_max WizProvider#http_client_retry_wait_max}
  */
  readonly httpClientRetryWaitMax?: number;
  /**
  * Minimum time to wait before retrying, in seconds.
  *     - Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#http_client_retry_wait_min WizProvider#http_client_retry_wait_min}
  */
  readonly httpClientRetryWaitMin?: number;
  /**
  * Use an http proxy server? (default: false, environment variable: PROXY)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#proxy WizProvider#proxy}
  */
  readonly proxy?: boolean | cdktf.IResolvable;
  /**
  * Proxy server address.  Syntax: http[s]://[host]:[port]. (default: none, environment variable: PROXY_SERVER)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#proxy_server WizProvider#proxy_server}
  */
  readonly proxyServer?: string;
  /**
  * Set this to 'beyond-api' if using auth0 and 'wiz-api' if using Cognito. (default: wiz-api, environment variable: WIZ_AUTH_AUDIENCE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_audience WizProvider#wiz_auth_audience}
  */
  readonly wizAuthAudience?: string;
  /**
  * Your application's Client ID. You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_client_id WizProvider#wiz_auth_client_id}
  */
  readonly wizAuthClientId: string;
  /**
  * Your application's Client Secret. You can find this value on the Settings > Service Accounts page. (default: none, environment variable: WIZ_AUTH_CLIENT_SECRET)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_client_secret WizProvider#wiz_auth_client_secret}
  */
  readonly wizAuthClientSecret: string;
  /**
  * Set this to 'client_credentials'. (default: client_credentials, environment variable: WIZ_AUTH_GRANT_TYPE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_grant_type WizProvider#wiz_auth_grant_type}
  */
  readonly wizAuthGrantType?: string;
  /**
  * The authentication endpoint. (default: https://auth.app.wiz.io/oauth/token, environment variable: WIZ_AUTH_URL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_auth_url WizProvider#wiz_auth_url}
  */
  readonly wizAuthUrl?: string;
  /**
  * Wiz api endpoint.  This varies for each Wiz deployment.  See https://docs.wiz.io/wiz-docs/docs/using-the-wiz-api#the-graphql-endpoint. (default: none, environment variable: WIZ_URL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#wiz_url WizProvider#wiz_url}
  */
  readonly wizUrl: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#alias WizProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs wiz}
*/
export class WizProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WizProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WizProvider to import
  * @param importFromId The id of the existing WizProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WizProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs wiz} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WizProviderConfig
  */
  public constructor(scope: Construct, id: string, config: WizProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
      },
      terraformProviderSource: 'AxtonGrams/wiz'
    });
    this._caChain = config.caChain;
    this._httpClientRetryMax = config.httpClientRetryMax;
    this._httpClientRetryWaitMax = config.httpClientRetryWaitMax;
    this._httpClientRetryWaitMin = config.httpClientRetryWaitMin;
    this._proxy = config.proxy;
    this._proxyServer = config.proxyServer;
    this._wizAuthAudience = config.wizAuthAudience;
    this._wizAuthClientId = config.wizAuthClientId;
    this._wizAuthClientSecret = config.wizAuthClientSecret;
    this._wizAuthGrantType = config.wizAuthGrantType;
    this._wizAuthUrl = config.wizAuthUrl;
    this._wizUrl = config.wizUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_chain - computed: false, optional: true, required: false
  private _caChain?: string; 
  public get caChain() {
    return this._caChain;
  }
  public set caChain(value: string | undefined) {
    this._caChain = value;
  }
  public resetCaChain() {
    this._caChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caChainInput() {
    return this._caChain;
  }

  // http_client_retry_max - computed: false, optional: true, required: false
  private _httpClientRetryMax?: number; 
  public get httpClientRetryMax() {
    return this._httpClientRetryMax;
  }
  public set httpClientRetryMax(value: number | undefined) {
    this._httpClientRetryMax = value;
  }
  public resetHttpClientRetryMax() {
    this._httpClientRetryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryMaxInput() {
    return this._httpClientRetryMax;
  }

  // http_client_retry_wait_max - computed: false, optional: true, required: false
  private _httpClientRetryWaitMax?: number; 
  public get httpClientRetryWaitMax() {
    return this._httpClientRetryWaitMax;
  }
  public set httpClientRetryWaitMax(value: number | undefined) {
    this._httpClientRetryWaitMax = value;
  }
  public resetHttpClientRetryWaitMax() {
    this._httpClientRetryWaitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryWaitMaxInput() {
    return this._httpClientRetryWaitMax;
  }

  // http_client_retry_wait_min - computed: false, optional: true, required: false
  private _httpClientRetryWaitMin?: number; 
  public get httpClientRetryWaitMin() {
    return this._httpClientRetryWaitMin;
  }
  public set httpClientRetryWaitMin(value: number | undefined) {
    this._httpClientRetryWaitMin = value;
  }
  public resetHttpClientRetryWaitMin() {
    this._httpClientRetryWaitMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryWaitMinInput() {
    return this._httpClientRetryWaitMin;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: boolean | cdktf.IResolvable; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: boolean | cdktf.IResolvable | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // proxy_server - computed: false, optional: true, required: false
  private _proxyServer?: string; 
  public get proxyServer() {
    return this._proxyServer;
  }
  public set proxyServer(value: string | undefined) {
    this._proxyServer = value;
  }
  public resetProxyServer() {
    this._proxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerInput() {
    return this._proxyServer;
  }

  // wiz_auth_audience - computed: false, optional: true, required: false
  private _wizAuthAudience?: string; 
  public get wizAuthAudience() {
    return this._wizAuthAudience;
  }
  public set wizAuthAudience(value: string | undefined) {
    this._wizAuthAudience = value;
  }
  public resetWizAuthAudience() {
    this._wizAuthAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wizAuthAudienceInput() {
    return this._wizAuthAudience;
  }

  // wiz_auth_client_id - computed: false, optional: false, required: true
  private _wizAuthClientId?: string; 
  public get wizAuthClientId() {
    return this._wizAuthClientId;
  }
  public set wizAuthClientId(value: string | undefined) {
    this._wizAuthClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wizAuthClientIdInput() {
    return this._wizAuthClientId;
  }

  // wiz_auth_client_secret - computed: false, optional: false, required: true
  private _wizAuthClientSecret?: string; 
  public get wizAuthClientSecret() {
    return this._wizAuthClientSecret;
  }
  public set wizAuthClientSecret(value: string | undefined) {
    this._wizAuthClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wizAuthClientSecretInput() {
    return this._wizAuthClientSecret;
  }

  // wiz_auth_grant_type - computed: false, optional: true, required: false
  private _wizAuthGrantType?: string; 
  public get wizAuthGrantType() {
    return this._wizAuthGrantType;
  }
  public set wizAuthGrantType(value: string | undefined) {
    this._wizAuthGrantType = value;
  }
  public resetWizAuthGrantType() {
    this._wizAuthGrantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wizAuthGrantTypeInput() {
    return this._wizAuthGrantType;
  }

  // wiz_auth_url - computed: false, optional: true, required: false
  private _wizAuthUrl?: string; 
  public get wizAuthUrl() {
    return this._wizAuthUrl;
  }
  public set wizAuthUrl(value: string | undefined) {
    this._wizAuthUrl = value;
  }
  public resetWizAuthUrl() {
    this._wizAuthUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wizAuthUrlInput() {
    return this._wizAuthUrl;
  }

  // wiz_url - computed: false, optional: false, required: true
  private _wizUrl?: string; 
  public get wizUrl() {
    return this._wizUrl;
  }
  public set wizUrl(value: string | undefined) {
    this._wizUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wizUrlInput() {
    return this._wizUrl;
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
      ca_chain: cdktf.stringToTerraform(this._caChain),
      http_client_retry_max: cdktf.numberToTerraform(this._httpClientRetryMax),
      http_client_retry_wait_max: cdktf.numberToTerraform(this._httpClientRetryWaitMax),
      http_client_retry_wait_min: cdktf.numberToTerraform(this._httpClientRetryWaitMin),
      proxy: cdktf.booleanToTerraform(this._proxy),
      proxy_server: cdktf.stringToTerraform(this._proxyServer),
      wiz_auth_audience: cdktf.stringToTerraform(this._wizAuthAudience),
      wiz_auth_client_id: cdktf.stringToTerraform(this._wizAuthClientId),
      wiz_auth_client_secret: cdktf.stringToTerraform(this._wizAuthClientSecret),
      wiz_auth_grant_type: cdktf.stringToTerraform(this._wizAuthGrantType),
      wiz_auth_url: cdktf.stringToTerraform(this._wizAuthUrl),
      wiz_url: cdktf.stringToTerraform(this._wizUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_chain: {
        value: cdktf.stringToHclTerraform(this._caChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_client_retry_max: {
        value: cdktf.numberToHclTerraform(this._httpClientRetryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_client_retry_wait_max: {
        value: cdktf.numberToHclTerraform(this._httpClientRetryWaitMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_client_retry_wait_min: {
        value: cdktf.numberToHclTerraform(this._httpClientRetryWaitMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy: {
        value: cdktf.booleanToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy_server: {
        value: cdktf.stringToHclTerraform(this._proxyServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiz_auth_audience: {
        value: cdktf.stringToHclTerraform(this._wizAuthAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiz_auth_client_id: {
        value: cdktf.stringToHclTerraform(this._wizAuthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiz_auth_client_secret: {
        value: cdktf.stringToHclTerraform(this._wizAuthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiz_auth_grant_type: {
        value: cdktf.stringToHclTerraform(this._wizAuthGrantType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiz_auth_url: {
        value: cdktf.stringToHclTerraform(this._wizAuthUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiz_url: {
        value: cdktf.stringToHclTerraform(this._wizUrl),
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
