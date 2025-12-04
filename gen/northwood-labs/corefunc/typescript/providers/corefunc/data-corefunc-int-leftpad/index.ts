// https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/int_leftpad
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncIntLeftpadConfig extends cdktf.TerraformMetaArguments {
  /**
  * The integer to pad with zeroes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/int_leftpad#num DataCorefuncIntLeftpad#num}
  */
  readonly num: number;
  /**
  * The max number of zeroes to pad the integer with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/int_leftpad#pad_width DataCorefuncIntLeftpad#pad_width}
  */
  readonly padWidth: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/int_leftpad corefunc_int_leftpad}
*/
export class DataCorefuncIntLeftpad extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_int_leftpad";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncIntLeftpad resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncIntLeftpad to import
  * @param importFromId The id of the existing DataCorefuncIntLeftpad that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/int_leftpad#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncIntLeftpad to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_int_leftpad", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/int_leftpad corefunc_int_leftpad} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncIntLeftpadConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncIntLeftpadConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_int_leftpad',
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
    this._num = config.num;
    this._padWidth = config.padWidth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // num - computed: false, optional: false, required: true
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // pad_width - computed: false, optional: false, required: true
  private _padWidth?: number; 
  public get padWidth() {
    return this.getNumberAttribute('pad_width');
  }
  public set padWidth(value: number) {
    this._padWidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get padWidthInput() {
    return this._padWidth;
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
      num: cdktf.numberToTerraform(this._num),
      pad_width: cdktf.numberToTerraform(this._padWidth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      num: {
        value: cdktf.numberToHclTerraform(this._num),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pad_width: {
        value: cdktf.numberToHclTerraform(this._padWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
