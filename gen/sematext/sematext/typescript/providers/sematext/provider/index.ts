// https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SematextProviderConfig {
  /**
  * Your Sematext API key, if not set using environment variable SEMATEXT_API_KEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs#sematext_api_key SematextProvider#sematext_api_key}
  */
  readonly sematextApiKey?: string;
  /**
  * The Sematext region, either US or EU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs#sematext_region SematextProvider#sematext_region}
  */
  readonly sematextRegion?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs#alias SematextProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs sematext}
*/
export class SematextProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sematext";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SematextProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SematextProvider to import
  * @param importFromId The id of the existing SematextProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SematextProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sematext", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sematext/sematext/0.6.3/docs sematext} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SematextProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SematextProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sematext',
      terraformGeneratorMetadata: {
        providerName: 'sematext',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      terraformProviderSource: 'sematext/sematext'
    });
    this._sematextApiKey = config.sematextApiKey;
    this._sematextRegion = config.sematextRegion;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // sematext_api_key - computed: false, optional: true, required: false
  private _sematextApiKey?: string; 
  public get sematextApiKey() {
    return this._sematextApiKey;
  }
  public set sematextApiKey(value: string | undefined) {
    this._sematextApiKey = value;
  }
  public resetSematextApiKey() {
    this._sematextApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sematextApiKeyInput() {
    return this._sematextApiKey;
  }

  // sematext_region - computed: false, optional: true, required: false
  private _sematextRegion?: string; 
  public get sematextRegion() {
    return this._sematextRegion;
  }
  public set sematextRegion(value: string | undefined) {
    this._sematextRegion = value;
  }
  public resetSematextRegion() {
    this._sematextRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sematextRegionInput() {
    return this._sematextRegion;
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
      sematext_api_key: cdktf.stringToTerraform(this._sematextApiKey),
      sematext_region: cdktf.stringToTerraform(this._sematextRegion),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      sematext_api_key: {
        value: cdktf.stringToHclTerraform(this._sematextApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sematext_region: {
        value: cdktf.stringToHclTerraform(this._sematextRegion),
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
