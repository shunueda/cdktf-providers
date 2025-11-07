// https://registry.terraform.io/providers/plukevdh/dmsnitch/0.1.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsnitchProviderConfig {
  /**
  * Dead Man's Snitch API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/plukevdh/dmsnitch/0.1.5/docs#api_key DmsnitchProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/plukevdh/dmsnitch/0.1.5/docs#alias DmsnitchProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/plukevdh/dmsnitch/0.1.5/docs dmsnitch}
*/
export class DmsnitchProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dmsnitch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsnitchProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsnitchProvider to import
  * @param importFromId The id of the existing DmsnitchProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/plukevdh/dmsnitch/0.1.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsnitchProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dmsnitch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/plukevdh/dmsnitch/0.1.5/docs dmsnitch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsnitchProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DmsnitchProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'dmsnitch',
      terraformGeneratorMetadata: {
        providerName: 'dmsnitch',
        providerVersion: '0.1.5'
      },
      terraformProviderSource: 'plukevdh/dmsnitch'
    });
    this._apiKey = config.apiKey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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
