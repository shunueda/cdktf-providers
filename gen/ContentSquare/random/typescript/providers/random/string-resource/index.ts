// https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StringResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#id StringResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#keepers StringResource#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * The length of the string desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#length StringResource#length}
  */
  readonly length: number;
  /**
  * Include lowercase alphabet characters in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#lower StringResource#lower}
  */
  readonly lower?: boolean | cdktf.IResolvable;
  /**
  * Minimum number of lowercase alphabet characters in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#min_lower StringResource#min_lower}
  */
  readonly minLower?: number;
  /**
  * Minimum number of numeric characters in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#min_numeric StringResource#min_numeric}
  */
  readonly minNumeric?: number;
  /**
  * Minimum number of special characters in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#min_special StringResource#min_special}
  */
  readonly minSpecial?: number;
  /**
  * Minimum number of uppercase alphabet characters in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#min_upper StringResource#min_upper}
  */
  readonly minUpper?: number;
  /**
  * Include numeric characters in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#number StringResource#number}
  */
  readonly number?: boolean | cdktf.IResolvable;
  /**
  * Supply your own list of special characters to use for string generation.  This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#override_special StringResource#override_special}
  */
  readonly overrideSpecial?: string;
  /**
  * Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#special StringResource#special}
  */
  readonly special?: boolean | cdktf.IResolvable;
  /**
  * Include uppercase alphabet characters in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#upper StringResource#upper}
  */
  readonly upper?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string random_string}
*/
export class StringResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "random_string";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StringResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StringResource to import
  * @param importFromId The id of the existing StringResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StringResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "random_string", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/contentsquare/random/3.1.0/docs/resources/string random_string} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StringResourceConfig
  */
  public constructor(scope: Construct, id: string, config: StringResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'random_string',
      terraformGeneratorMetadata: {
        providerName: 'random',
        providerVersion: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._keepers = config.keepers;
    this._length = config.length;
    this._lower = config.lower;
    this._minLower = config.minLower;
    this._minNumeric = config.minNumeric;
    this._minSpecial = config.minSpecial;
    this._minUpper = config.minUpper;
    this._number = config.number;
    this._overrideSpecial = config.overrideSpecial;
    this._special = config.special;
    this._upper = config.upper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // keepers - computed: false, optional: true, required: false
  private _keepers?: { [key: string]: string }; 
  public get keepers() {
    return this.getStringMapAttribute('keepers');
  }
  public set keepers(value: { [key: string]: string }) {
    this._keepers = value;
  }
  public resetKeepers() {
    this._keepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers;
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // lower - computed: false, optional: true, required: false
  private _lower?: boolean | cdktf.IResolvable; 
  public get lower() {
    return this.getBooleanAttribute('lower');
  }
  public set lower(value: boolean | cdktf.IResolvable) {
    this._lower = value;
  }
  public resetLower() {
    this._lower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInput() {
    return this._lower;
  }

  // min_lower - computed: false, optional: true, required: false
  private _minLower?: number; 
  public get minLower() {
    return this.getNumberAttribute('min_lower');
  }
  public set minLower(value: number) {
    this._minLower = value;
  }
  public resetMinLower() {
    this._minLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowerInput() {
    return this._minLower;
  }

  // min_numeric - computed: false, optional: true, required: false
  private _minNumeric?: number; 
  public get minNumeric() {
    return this.getNumberAttribute('min_numeric');
  }
  public set minNumeric(value: number) {
    this._minNumeric = value;
  }
  public resetMinNumeric() {
    this._minNumeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumericInput() {
    return this._minNumeric;
  }

  // min_special - computed: false, optional: true, required: false
  private _minSpecial?: number; 
  public get minSpecial() {
    return this.getNumberAttribute('min_special');
  }
  public set minSpecial(value: number) {
    this._minSpecial = value;
  }
  public resetMinSpecial() {
    this._minSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSpecialInput() {
    return this._minSpecial;
  }

  // min_upper - computed: false, optional: true, required: false
  private _minUpper?: number; 
  public get minUpper() {
    return this.getNumberAttribute('min_upper');
  }
  public set minUpper(value: number) {
    this._minUpper = value;
  }
  public resetMinUpper() {
    this._minUpper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpperInput() {
    return this._minUpper;
  }

  // number - computed: false, optional: true, required: false
  private _number?: boolean | cdktf.IResolvable; 
  public get number() {
    return this.getBooleanAttribute('number');
  }
  public set number(value: boolean | cdktf.IResolvable) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // override_special - computed: false, optional: true, required: false
  private _overrideSpecial?: string; 
  public get overrideSpecial() {
    return this.getStringAttribute('override_special');
  }
  public set overrideSpecial(value: string) {
    this._overrideSpecial = value;
  }
  public resetOverrideSpecial() {
    this._overrideSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSpecialInput() {
    return this._overrideSpecial;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // special - computed: false, optional: true, required: false
  private _special?: boolean | cdktf.IResolvable; 
  public get special() {
    return this.getBooleanAttribute('special');
  }
  public set special(value: boolean | cdktf.IResolvable) {
    this._special = value;
  }
  public resetSpecial() {
    this._special = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialInput() {
    return this._special;
  }

  // upper - computed: false, optional: true, required: false
  private _upper?: boolean | cdktf.IResolvable; 
  public get upper() {
    return this.getBooleanAttribute('upper');
  }
  public set upper(value: boolean | cdktf.IResolvable) {
    this._upper = value;
  }
  public resetUpper() {
    this._upper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInput() {
    return this._upper;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._keepers),
      length: cdktf.numberToTerraform(this._length),
      lower: cdktf.booleanToTerraform(this._lower),
      min_lower: cdktf.numberToTerraform(this._minLower),
      min_numeric: cdktf.numberToTerraform(this._minNumeric),
      min_special: cdktf.numberToTerraform(this._minSpecial),
      min_upper: cdktf.numberToTerraform(this._minUpper),
      number: cdktf.booleanToTerraform(this._number),
      override_special: cdktf.stringToTerraform(this._overrideSpecial),
      special: cdktf.booleanToTerraform(this._special),
      upper: cdktf.booleanToTerraform(this._upper),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lower: {
        value: cdktf.booleanToHclTerraform(this._lower),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_lower: {
        value: cdktf.numberToHclTerraform(this._minLower),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_numeric: {
        value: cdktf.numberToHclTerraform(this._minNumeric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_special: {
        value: cdktf.numberToHclTerraform(this._minSpecial),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_upper: {
        value: cdktf.numberToHclTerraform(this._minUpper),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number: {
        value: cdktf.booleanToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_special: {
        value: cdktf.stringToHclTerraform(this._overrideSpecial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      special: {
        value: cdktf.booleanToHclTerraform(this._special),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upper: {
        value: cdktf.booleanToHclTerraform(this._upper),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
