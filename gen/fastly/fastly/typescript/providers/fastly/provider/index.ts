// https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FastlyProviderConfig {
  /**
  * Fastly API Key from https://app.fastly.com/#account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs#api_key FastlyProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Fastly API URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs#base_url FastlyProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Set this to `true` to disable HTTP/1.x fallback mechanism that the underlying Go library will attempt upon connection to `api.fastly.com:443` by default. This may slightly improve the provider's performance and reduce unnecessary TLS handshakes. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs#force_http2 FastlyProvider#force_http2}
  */
  readonly forceHttp2?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` if your configuration only consumes data sources that do not require authentication, such as `fastly_ip_ranges`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs#no_auth FastlyProvider#no_auth}
  */
  readonly noAuth?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs#alias FastlyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs fastly}
*/
export class FastlyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FastlyProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FastlyProvider to import
  * @param importFromId The id of the existing FastlyProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FastlyProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.5.0/docs fastly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FastlyProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FastlyProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fastly',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.5.0',
        providerVersionConstraint: '8.5.0'
      },
      terraformProviderSource: 'fastly/fastly'
    });
    this._apiKey = config.apiKey;
    this._baseUrl = config.baseUrl;
    this._forceHttp2 = config.forceHttp2;
    this._noAuth = config.noAuth;
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

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // force_http2 - computed: false, optional: true, required: false
  private _forceHttp2?: boolean | cdktf.IResolvable; 
  public get forceHttp2() {
    return this._forceHttp2;
  }
  public set forceHttp2(value: boolean | cdktf.IResolvable | undefined) {
    this._forceHttp2 = value;
  }
  public resetForceHttp2() {
    this._forceHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceHttp2Input() {
    return this._forceHttp2;
  }

  // no_auth - computed: false, optional: true, required: false
  private _noAuth?: boolean | cdktf.IResolvable; 
  public get noAuth() {
    return this._noAuth;
  }
  public set noAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._noAuth = value;
  }
  public resetNoAuth() {
    this._noAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthInput() {
    return this._noAuth;
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
      base_url: cdktf.stringToTerraform(this._baseUrl),
      force_http2: cdktf.booleanToTerraform(this._forceHttp2),
      no_auth: cdktf.booleanToTerraform(this._noAuth),
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
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_http2: {
        value: cdktf.booleanToHclTerraform(this._forceHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_auth: {
        value: cdktf.booleanToHclTerraform(this._noAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
