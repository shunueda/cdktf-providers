// https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaapmProviderConfig {
  /**
  * path of waapm executable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs#waapm_path WaapmProvider#waapm_path}
  */
  readonly waapmPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs#alias WaapmProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs waapm}
*/
export class WaapmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "waapm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaapmProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaapmProvider to import
  * @param importFromId The id of the existing WaapmProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaapmProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "waapm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wallix/waapm/2.0.4/docs waapm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaapmProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WaapmProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'waapm',
      terraformGeneratorMetadata: {
        providerName: 'waapm',
        providerVersion: '2.0.4'
      },
      terraformProviderSource: 'wallix/waapm'
    });
    this._waapmPath = config.waapmPath;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // waapm_path - computed: false, optional: true, required: false
  private _waapmPath?: string; 
  public get waapmPath() {
    return this._waapmPath;
  }
  public set waapmPath(value: string | undefined) {
    this._waapmPath = value;
  }
  public resetWaapmPath() {
    this._waapmPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waapmPathInput() {
    return this._waapmPath;
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
      waapm_path: cdktf.stringToTerraform(this._waapmPath),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      waapm_path: {
        value: cdktf.stringToHclTerraform(this._waapmPath),
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
