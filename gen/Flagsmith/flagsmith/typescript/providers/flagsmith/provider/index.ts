// https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlagsmithProviderConfig {
  /**
  * Used by api client to connect to flagsmith instance. NOTE: update this if you are running a self hosted version. e.g: https://your.flagsmith.com/api/v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs#base_api_url FlagsmithProvider#base_api_url}
  */
  readonly baseApiUrl?: string;
  /**
  * Master API key used by flagsmith api client. Can also be set using the environment variable `FLAGSMITH_MASTER_API_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs#master_api_key FlagsmithProvider#master_api_key}
  */
  readonly masterApiKey?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs#alias FlagsmithProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs flagsmith}
*/
export class FlagsmithProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flagsmith";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlagsmithProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlagsmithProvider to import
  * @param importFromId The id of the existing FlagsmithProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlagsmithProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flagsmith", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs flagsmith} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlagsmithProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FlagsmithProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'flagsmith',
      terraformGeneratorMetadata: {
        providerName: 'flagsmith',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      terraformProviderSource: 'Flagsmith/flagsmith'
    });
    this._baseApiUrl = config.baseApiUrl;
    this._masterApiKey = config.masterApiKey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_api_url - computed: false, optional: true, required: false
  private _baseApiUrl?: string; 
  public get baseApiUrl() {
    return this._baseApiUrl;
  }
  public set baseApiUrl(value: string | undefined) {
    this._baseApiUrl = value;
  }
  public resetBaseApiUrl() {
    this._baseApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseApiUrlInput() {
    return this._baseApiUrl;
  }

  // master_api_key - computed: false, optional: true, required: false
  private _masterApiKey?: string; 
  public get masterApiKey() {
    return this._masterApiKey;
  }
  public set masterApiKey(value: string | undefined) {
    this._masterApiKey = value;
  }
  public resetMasterApiKey() {
    this._masterApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterApiKeyInput() {
    return this._masterApiKey;
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
      base_api_url: cdktf.stringToTerraform(this._baseApiUrl),
      master_api_key: cdktf.stringToTerraform(this._masterApiKey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_api_url: {
        value: cdktf.stringToHclTerraform(this._baseApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_api_key: {
        value: cdktf.stringToHclTerraform(this._masterApiKey),
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
