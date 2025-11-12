// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Site24X7ProviderConfig {
  /**
  * Access token expiry in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#access_token_expiry Site24X7Provider#access_token_expiry}
  */
  readonly accessTokenExpiry?: string;
  /**
  * Site24x7 data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#data_center Site24X7Provider#data_center}
  */
  readonly dataCenter: string;
  /**
  * Maximum number of retries for Site24x7 API errors until giving up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#max_retries Site24X7Provider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * OAuth2 Access Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#oauth2_access_token Site24X7Provider#oauth2_access_token}
  */
  readonly oauth2AccessToken?: string;
  /**
  * OAuth2 Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#oauth2_client_id Site24X7Provider#oauth2_client_id}
  */
  readonly oauth2ClientId: string;
  /**
  * OAuth2 Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#oauth2_client_secret Site24X7Provider#oauth2_client_secret}
  */
  readonly oauth2ClientSecret: string;
  /**
  * OAuth2 Refresh Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#oauth2_refresh_token Site24X7Provider#oauth2_refresh_token}
  */
  readonly oauth2RefreshToken: string;
  /**
  * Maximum wait time in seconds before retrying failed API requests (exponential backoff).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#retry_max_wait Site24X7Provider#retry_max_wait}
  */
  readonly retryMaxWait?: number;
  /**
  * Minimum wait time in seconds before retrying failed API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#retry_min_wait Site24X7Provider#retry_min_wait}
  */
  readonly retryMinWait?: number;
  /**
  * MSP customer zaaid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#zaaid Site24X7Provider#zaaid}
  */
  readonly zaaid?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#alias Site24X7Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs site24x7}
*/
export class Site24X7Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site24X7Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site24X7Provider to import
  * @param importFromId The id of the existing Site24X7Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site24X7Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs site24x7} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Site24X7ProviderConfig
  */
  public constructor(scope: Construct, id: string, config: Site24X7ProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3',
        providerVersionConstraint: '2.0.3'
      },
      terraformProviderSource: 'site24x7/site24x7'
    });
    this._accessTokenExpiry = config.accessTokenExpiry;
    this._dataCenter = config.dataCenter;
    this._maxRetries = config.maxRetries;
    this._oauth2AccessToken = config.oauth2AccessToken;
    this._oauth2ClientId = config.oauth2ClientId;
    this._oauth2ClientSecret = config.oauth2ClientSecret;
    this._oauth2RefreshToken = config.oauth2RefreshToken;
    this._retryMaxWait = config.retryMaxWait;
    this._retryMinWait = config.retryMinWait;
    this._zaaid = config.zaaid;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_expiry - computed: false, optional: true, required: false
  private _accessTokenExpiry?: string; 
  public get accessTokenExpiry() {
    return this._accessTokenExpiry;
  }
  public set accessTokenExpiry(value: string | undefined) {
    this._accessTokenExpiry = value;
  }
  public resetAccessTokenExpiry() {
    this._accessTokenExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenExpiryInput() {
    return this._accessTokenExpiry;
  }

  // data_center - computed: false, optional: false, required: true
  private _dataCenter?: string; 
  public get dataCenter() {
    return this._dataCenter;
  }
  public set dataCenter(value: string | undefined) {
    this._dataCenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter;
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

  // oauth2_access_token - computed: false, optional: true, required: false
  private _oauth2AccessToken?: string; 
  public get oauth2AccessToken() {
    return this._oauth2AccessToken;
  }
  public set oauth2AccessToken(value: string | undefined) {
    this._oauth2AccessToken = value;
  }
  public resetOauth2AccessToken() {
    this._oauth2AccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AccessTokenInput() {
    return this._oauth2AccessToken;
  }

  // oauth2_client_id - computed: false, optional: false, required: true
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this._oauth2ClientId;
  }
  public set oauth2ClientId(value: string | undefined) {
    this._oauth2ClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: false, required: true
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this._oauth2ClientSecret;
  }
  public set oauth2ClientSecret(value: string | undefined) {
    this._oauth2ClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }

  // oauth2_refresh_token - computed: false, optional: false, required: true
  private _oauth2RefreshToken?: string; 
  public get oauth2RefreshToken() {
    return this._oauth2RefreshToken;
  }
  public set oauth2RefreshToken(value: string | undefined) {
    this._oauth2RefreshToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2RefreshTokenInput() {
    return this._oauth2RefreshToken;
  }

  // retry_max_wait - computed: false, optional: true, required: false
  private _retryMaxWait?: number; 
  public get retryMaxWait() {
    return this._retryMaxWait;
  }
  public set retryMaxWait(value: number | undefined) {
    this._retryMaxWait = value;
  }
  public resetRetryMaxWait() {
    this._retryMaxWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxWaitInput() {
    return this._retryMaxWait;
  }

  // retry_min_wait - computed: false, optional: true, required: false
  private _retryMinWait?: number; 
  public get retryMinWait() {
    return this._retryMinWait;
  }
  public set retryMinWait(value: number | undefined) {
    this._retryMinWait = value;
  }
  public resetRetryMinWait() {
    this._retryMinWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMinWaitInput() {
    return this._retryMinWait;
  }

  // zaaid - computed: false, optional: true, required: false
  private _zaaid?: string; 
  public get zaaid() {
    return this._zaaid;
  }
  public set zaaid(value: string | undefined) {
    this._zaaid = value;
  }
  public resetZaaid() {
    this._zaaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zaaidInput() {
    return this._zaaid;
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
      access_token_expiry: cdktf.stringToTerraform(this._accessTokenExpiry),
      data_center: cdktf.stringToTerraform(this._dataCenter),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      oauth2_access_token: cdktf.stringToTerraform(this._oauth2AccessToken),
      oauth2_client_id: cdktf.stringToTerraform(this._oauth2ClientId),
      oauth2_client_secret: cdktf.stringToTerraform(this._oauth2ClientSecret),
      oauth2_refresh_token: cdktf.stringToTerraform(this._oauth2RefreshToken),
      retry_max_wait: cdktf.numberToTerraform(this._retryMaxWait),
      retry_min_wait: cdktf.numberToTerraform(this._retryMinWait),
      zaaid: cdktf.stringToTerraform(this._zaaid),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_expiry: {
        value: cdktf.stringToHclTerraform(this._accessTokenExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_center: {
        value: cdktf.stringToHclTerraform(this._dataCenter),
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
      oauth2_access_token: {
        value: cdktf.stringToHclTerraform(this._oauth2AccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_id: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauth2ClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_refresh_token: {
        value: cdktf.stringToHclTerraform(this._oauth2RefreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_max_wait: {
        value: cdktf.numberToHclTerraform(this._retryMaxWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_min_wait: {
        value: cdktf.numberToHclTerraform(this._retryMinWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zaaid: {
        value: cdktf.stringToHclTerraform(this._zaaid),
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
