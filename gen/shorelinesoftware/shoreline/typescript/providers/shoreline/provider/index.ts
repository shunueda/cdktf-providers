// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShorelineProviderConfig {
  /**
  * Debug logging to `/tmp/tf-shoreline.log`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs#debug ShorelineProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Minimum version required on the Shoreline backend (API server).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs#min_version ShorelineProvider#min_version}
  */
  readonly minVersion?: string;
  /**
  * Number of retries for API calls, in case of e.g. transient network failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs#retries ShorelineProvider#retries}
  */
  readonly retries?: number;
  /**
  * Customer/user-specific authorization token for the Shoreline API server. May be provided via `SHORELINE_TOKEN` env variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs#token ShorelineProvider#token}
  */
  readonly token?: string;
  /**
  * Customer-specific URL for the Shoreline API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs#url ShorelineProvider#url}
  */
  readonly url: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs#alias ShorelineProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs shoreline}
*/
export class ShorelineProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShorelineProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShorelineProvider to import
  * @param importFromId The id of the existing ShorelineProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShorelineProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs shoreline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShorelineProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ShorelineProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38'
      },
      terraformProviderSource: 'shorelinesoftware/shoreline'
    });
    this._debug = config.debug;
    this._minVersion = config.minVersion;
    this._retries = config.retries;
    this._token = config.token;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this._minVersion;
  }
  public set minVersion(value: string | undefined) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      debug: cdktf.booleanToTerraform(this._debug),
      min_version: cdktf.stringToTerraform(this._minVersion),
      retries: cdktf.numberToTerraform(this._retries),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_version: {
        value: cdktf.stringToHclTerraform(this._minVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
