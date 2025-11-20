// https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpnsenseProviderConfig {
  /**
  * Allow insecure TLS connections. Alternatively, can be configured using the `OPNSENSE_ALLOW_INSECURE` environment variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#allow_insecure OpnsenseProvider#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * The API key for a user. Alternatively, can be configured using the `OPNSENSE_API_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#api_key OpnsenseProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API secret for a user. Alternatively, can be configured using the `OPNSENSE_API_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#api_secret OpnsenseProvider#api_secret}
  */
  readonly apiSecret?: string;
  /**
  * Maximum backoff period in seconds after failed API calls. Alternatively, can be configured using the `OPNSENSE_MAX_BACKOFF` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#max_backoff OpnsenseProvider#max_backoff}
  */
  readonly maxBackoff?: number;
  /**
  * Minimum backoff period in seconds after failed API calls. Alternatively, can be configured using the `OPNSENSE_MIN_BACKOFF` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#min_backoff OpnsenseProvider#min_backoff}
  */
  readonly minBackoff?: number;
  /**
  * Maximum number of retries to perform when an API request fails. Alternatively, can be configured using the `OPNSENSE_RETRIES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#retries OpnsenseProvider#retries}
  */
  readonly retries?: number;
  /**
  * The URI to an OPNsense host. Alternatively, can be configured using the `OPNSENSE_URI` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#uri OpnsenseProvider#uri}
  */
  readonly uri?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#alias OpnsenseProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs opnsense}
*/
export class OpnsenseProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpnsenseProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpnsenseProvider to import
  * @param importFromId The id of the existing OpnsenseProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpnsenseProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.1/docs opnsense} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpnsenseProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpnsenseProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opnsense',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      terraformProviderSource: 'browningluke/opnsense'
    });
    this._allowInsecure = config.allowInsecure;
    this._apiKey = config.apiKey;
    this._apiSecret = config.apiSecret;
    this._maxBackoff = config.maxBackoff;
    this._minBackoff = config.minBackoff;
    this._retries = config.retries;
    this._uri = config.uri;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this._allowInsecure;
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

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

  // api_secret - computed: false, optional: true, required: false
  private _apiSecret?: string; 
  public get apiSecret() {
    return this._apiSecret;
  }
  public set apiSecret(value: string | undefined) {
    this._apiSecret = value;
  }
  public resetApiSecret() {
    this._apiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // max_backoff - computed: false, optional: true, required: false
  private _maxBackoff?: number; 
  public get maxBackoff() {
    return this._maxBackoff;
  }
  public set maxBackoff(value: number | undefined) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff;
  }

  // min_backoff - computed: false, optional: true, required: false
  private _minBackoff?: number; 
  public get minBackoff() {
    return this._minBackoff;
  }
  public set minBackoff(value: number | undefined) {
    this._minBackoff = value;
  }
  public resetMinBackoff() {
    this._minBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffInput() {
    return this._minBackoff;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this._uri;
  }
  public set uri(value: string | undefined) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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
      allow_insecure: cdktf.booleanToTerraform(this._allowInsecure),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_secret: cdktf.stringToTerraform(this._apiSecret),
      max_backoff: cdktf.numberToTerraform(this._maxBackoff),
      min_backoff: cdktf.numberToTerraform(this._minBackoff),
      retries: cdktf.numberToTerraform(this._retries),
      uri: cdktf.stringToTerraform(this._uri),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_insecure: {
        value: cdktf.booleanToHclTerraform(this._allowInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_secret: {
        value: cdktf.stringToHclTerraform(this._apiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_backoff: {
        value: cdktf.numberToHclTerraform(this._maxBackoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_backoff: {
        value: cdktf.numberToHclTerraform(this._minBackoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
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
