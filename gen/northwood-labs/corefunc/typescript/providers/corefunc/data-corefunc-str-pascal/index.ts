// https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_pascal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCorefuncStrPascalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to keep acronyms as uppercase. A value of `true` means that acronyms will be converted to uppercase. A value of `false` means that acronyms will using typical casing. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_pascal#acronym_caps DataCorefuncStrPascal#acronym_caps}
  */
  readonly acronymCaps?: boolean | cdktf.IResolvable;
  /**
  * The string to convert to `PascalCase`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_pascal#string DataCorefuncStrPascal#string}
  */
  readonly string: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_pascal corefunc_str_pascal}
*/
export class DataCorefuncStrPascal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "corefunc_str_pascal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCorefuncStrPascal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCorefuncStrPascal to import
  * @param importFromId The id of the existing DataCorefuncStrPascal that should be imported. Refer to the {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_pascal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCorefuncStrPascal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "corefunc_str_pascal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/northwood-labs/corefunc/2.1.0/docs/data-sources/str_pascal corefunc_str_pascal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCorefuncStrPascalConfig
  */
  public constructor(scope: Construct, id: string, config: DataCorefuncStrPascalConfig) {
    super(scope, id, {
      terraformResourceType: 'corefunc_str_pascal',
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
    this._acronymCaps = config.acronymCaps;
    this._string = config.string;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acronym_caps - computed: false, optional: true, required: false
  private _acronymCaps?: boolean | cdktf.IResolvable; 
  public get acronymCaps() {
    return this.getBooleanAttribute('acronym_caps');
  }
  public set acronymCaps(value: boolean | cdktf.IResolvable) {
    this._acronymCaps = value;
  }
  public resetAcronymCaps() {
    this._acronymCaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acronymCapsInput() {
    return this._acronymCaps;
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
      acronym_caps: cdktf.booleanToTerraform(this._acronymCaps),
      string: cdktf.stringToTerraform(this._string),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acronym_caps: {
        value: cdktf.booleanToHclTerraform(this._acronymCaps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
