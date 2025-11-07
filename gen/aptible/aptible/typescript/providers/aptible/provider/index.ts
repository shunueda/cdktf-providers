// https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AptibleProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs#alias AptibleProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs aptible}
*/
export class AptibleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aptible";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AptibleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AptibleProvider to import
  * @param importFromId The id of the existing AptibleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AptibleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aptible", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs aptible} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AptibleProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AptibleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aptible',
      terraformGeneratorMetadata: {
        providerName: 'aptible',
        providerVersion: '0.9.18'
      },
      terraformProviderSource: 'aptible/aptible'
    });
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
