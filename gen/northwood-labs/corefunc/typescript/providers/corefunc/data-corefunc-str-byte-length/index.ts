// https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_byte_length
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncStrByteLengthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The input string to count bytes for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_byte_length#string DataCorefuncStrByteLength#string}
  */
  readonly string: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_byte_length corefunc_str_byte_length}
*/
export class DataCorefuncStrByteLength extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_str_byte_length";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncStrByteLength resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncStrByteLength to import
  * @param importFromId The id of the existing DataCorefuncStrByteLength that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_byte_length#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncStrByteLength to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_str_byte_length", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.2.1/docs/data-sources/str_byte_length corefunc_str_byte_length} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncStrByteLengthConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncStrByteLengthConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_str_byte_length',
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
    return this.getNumberAttribute('value');
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
