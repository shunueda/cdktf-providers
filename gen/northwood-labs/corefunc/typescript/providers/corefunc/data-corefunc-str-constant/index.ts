// https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_constant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncStrConstantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The string to convert to `CONSTANT_CASE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_constant#string DataCorefuncStrConstant#string}
  */
  readonly string: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_constant corefunc_str_constant}
*/
export class DataCorefuncStrConstant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_str_constant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncStrConstant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncStrConstant to import
  * @param importFromId The id of the existing DataCorefuncStrConstant that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_constant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncStrConstant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_str_constant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_constant corefunc_str_constant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncStrConstantConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncStrConstantConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_str_constant',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._string = config.string;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // string - computed: false, optional: false, required: true
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      string: cdktf.stringToTerraform(this._string),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      string: {
        value: cdktf.stringToHclTerraform(this._string),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
