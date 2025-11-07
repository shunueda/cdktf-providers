// https://registry.terraform.io/providers/isobit/util/0.0.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UtilProviderConfig {
  /**
  * Globally bypasses destruction protection on util_indestructible resource that allow it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs#bypass_indestructible UtilProvider#bypass_indestructible}
  */
  readonly bypassIndestructible?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs#alias UtilProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs util}
*/
export class UtilProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "util";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UtilProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UtilProvider to import
  * @param importFromId The id of the existing UtilProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UtilProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "util", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs util} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UtilProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UtilProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'util',
      terraformGeneratorMetadata: {
        providerName: 'util',
        providerVersion: '0.0.4'
      },
      terraformProviderSource: 'isobit/util'
    });
    this._bypassIndestructible = config.bypassIndestructible;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_indestructible - computed: false, optional: true, required: false
  private _bypassIndestructible?: boolean | cdktf.IResolvable; 
  public get bypassIndestructible() {
    return this._bypassIndestructible;
  }
  public set bypassIndestructible(value: boolean | cdktf.IResolvable | undefined) {
    this._bypassIndestructible = value;
  }
  public resetBypassIndestructible() {
    this._bypassIndestructible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassIndestructibleInput() {
    return this._bypassIndestructible;
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
      bypass_indestructible: cdktf.booleanToTerraform(this._bypassIndestructible),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_indestructible: {
        value: cdktf.booleanToHclTerraform(this._bypassIndestructible),
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
