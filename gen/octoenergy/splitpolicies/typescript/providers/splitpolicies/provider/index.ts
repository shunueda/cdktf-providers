// https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SplitpoliciesProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs#alias SplitpoliciesProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs splitpolicies}
*/
export class SplitpoliciesProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splitpolicies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SplitpoliciesProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SplitpoliciesProvider to import
  * @param importFromId The id of the existing SplitpoliciesProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SplitpoliciesProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splitpolicies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octoenergy/splitpolicies/0.1.5/docs splitpolicies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SplitpoliciesProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SplitpoliciesProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'splitpolicies',
      terraformGeneratorMetadata: {
        providerName: 'splitpolicies',
        providerVersion: '0.1.5'
      },
      terraformProviderSource: 'octoenergy/splitpolicies'
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
