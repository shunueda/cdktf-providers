// https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/time_compare
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncTimeCompareConfig extends cdktf.TerraformMetaArguments {
  /**
  * The first timestamp value to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/time_compare#timestamp_a DataCorefuncTimeCompare#timestamp_a}
  */
  readonly timestampA: string;
  /**
  * The second timestamp value to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/time_compare#timestamp_b DataCorefuncTimeCompare#timestamp_b}
  */
  readonly timestampB: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/time_compare corefunc_time_compare}
*/
export class DataCorefuncTimeCompare extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_time_compare";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncTimeCompare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncTimeCompare to import
  * @param importFromId The id of the existing DataCorefuncTimeCompare that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/time_compare#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncTimeCompare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_time_compare", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/time_compare corefunc_time_compare} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncTimeCompareConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncTimeCompareConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_time_compare',
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
    this._timestampA = config.timestampA;
    this._timestampB = config.timestampB;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // timestamp_a - computed: false, optional: false, required: true
  private _timestampA?: string; 
  public get timestampA() {
    return this.getStringAttribute('timestamp_a');
  }
  public set timestampA(value: string) {
    this._timestampA = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampAInput() {
    return this._timestampA;
  }

  // timestamp_b - computed: false, optional: false, required: true
  private _timestampB?: string; 
  public get timestampB() {
    return this.getStringAttribute('timestamp_b');
  }
  public set timestampB(value: string) {
    this._timestampB = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampBInput() {
    return this._timestampB;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timestamp_a: cdktf.stringToTerraform(this._timestampA),
      timestamp_b: cdktf.stringToTerraform(this._timestampB),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timestamp_a: {
        value: cdktf.stringToHclTerraform(this._timestampA),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_b: {
        value: cdktf.stringToHclTerraform(this._timestampB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
