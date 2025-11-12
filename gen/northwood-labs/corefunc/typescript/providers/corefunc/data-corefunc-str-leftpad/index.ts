// https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_leftpad
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncStrLeftpadConfig extends cdktf.TerraformMetaArguments {
  /**
  * The padding character to use. Only supports a single byte. If more than one byte is provided, only the first byte will be used. The default value is a space character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_leftpad#pad_char DataCorefuncStrLeftpad#pad_char}
  */
  readonly padChar?: string;
  /**
  * The max number of padding characters to pad the string with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_leftpad#pad_width DataCorefuncStrLeftpad#pad_width}
  */
  readonly padWidth: number;
  /**
  * The string to pad with padding characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_leftpad#string DataCorefuncStrLeftpad#string}
  */
  readonly string: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_leftpad corefunc_str_leftpad}
*/
export class DataCorefuncStrLeftpad extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_str_leftpad";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncStrLeftpad resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncStrLeftpad to import
  * @param importFromId The id of the existing DataCorefuncStrLeftpad that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_leftpad#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncStrLeftpad to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_str_leftpad", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_leftpad corefunc_str_leftpad} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncStrLeftpadConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncStrLeftpadConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_str_leftpad',
      terraformGeneratorMetadata: {
        providerName: 'corefunc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._padChar = config.padChar;
    this._padWidth = config.padWidth;
    this._string = config.string;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // pad_char - computed: false, optional: true, required: false
  private _padChar?: string; 
  public get padChar() {
    return this.getStringAttribute('pad_char');
  }
  public set padChar(value: string) {
    this._padChar = value;
  }
  public resetPadChar() {
    this._padChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get padCharInput() {
    return this._padChar;
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
      pad_char: cdktf.stringToTerraform(this._padChar),
      pad_width: cdktf.numberToTerraform(this._padWidth),
      string: cdktf.stringToTerraform(this._string),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pad_char: {
        value: cdktf.stringToHclTerraform(this._padChar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pad_width: {
        value: cdktf.numberToHclTerraform(this._padWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
