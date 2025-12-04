// https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/toml_to_json
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncTomlToJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * The TOML string to convert to JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/toml_to_json#toml DataCorefuncTomlToJson#toml}
  */
  readonly toml: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/toml_to_json corefunc_toml_to_json}
*/
export class DataCorefuncTomlToJson extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_toml_to_json";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncTomlToJson resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncTomlToJson to import
  * @param importFromId The id of the existing DataCorefuncTomlToJson that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/toml_to_json#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncTomlToJson to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_toml_to_json", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/toml_to_json corefunc_toml_to_json} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncTomlToJsonConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncTomlToJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_toml_to_json',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.2.1',
        providerVersionConstraint: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._toml = config.toml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // toml - computed: false, optional: false, required: true
  private _toml?: string; 
  public get toml() {
    return this.getStringAttribute('toml');
  }
  public set toml(value: string) {
    this._toml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tomlInput() {
    return this._toml;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      toml: cdktf.stringToTerraform(this._toml),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      toml: {
        value: cdktf.stringToHclTerraform(this._toml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
