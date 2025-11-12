// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultPasswordComplexityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * defines if the password MUST contain a lower case letter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy#has_lowercase DefaultPasswordComplexityPolicy#has_lowercase}
  */
  readonly hasLowercase: boolean | cdktf.IResolvable;
  /**
  * defines if the password MUST contain a number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy#has_number DefaultPasswordComplexityPolicy#has_number}
  */
  readonly hasNumber: boolean | cdktf.IResolvable;
  /**
  * defines if the password MUST contain a symbol. E.g. "$"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy#has_symbol DefaultPasswordComplexityPolicy#has_symbol}
  */
  readonly hasSymbol: boolean | cdktf.IResolvable;
  /**
  * defines if the password MUST contain an upper case letter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy#has_uppercase DefaultPasswordComplexityPolicy#has_uppercase}
  */
  readonly hasUppercase: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy#id DefaultPasswordComplexityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Minimal length for the password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy#min_length DefaultPasswordComplexityPolicy#min_length}
  */
  readonly minLength: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy zitadel_default_password_complexity_policy}
*/
export class DefaultPasswordComplexityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_default_password_complexity_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultPasswordComplexityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultPasswordComplexityPolicy to import
  * @param importFromId The id of the existing DefaultPasswordComplexityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultPasswordComplexityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_default_password_complexity_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_password_complexity_policy zitadel_default_password_complexity_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultPasswordComplexityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultPasswordComplexityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_default_password_complexity_policy',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hasLowercase = config.hasLowercase;
    this._hasNumber = config.hasNumber;
    this._hasSymbol = config.hasSymbol;
    this._hasUppercase = config.hasUppercase;
    this._id = config.id;
    this._minLength = config.minLength;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // has_lowercase - computed: false, optional: false, required: true
  private _hasLowercase?: boolean | cdktf.IResolvable; 
  public get hasLowercase() {
    return this.getBooleanAttribute('has_lowercase');
  }
  public set hasLowercase(value: boolean | cdktf.IResolvable) {
    this._hasLowercase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasLowercaseInput() {
    return this._hasLowercase;
  }

  // has_number - computed: false, optional: false, required: true
  private _hasNumber?: boolean | cdktf.IResolvable; 
  public get hasNumber() {
    return this.getBooleanAttribute('has_number');
  }
  public set hasNumber(value: boolean | cdktf.IResolvable) {
    this._hasNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasNumberInput() {
    return this._hasNumber;
  }

  // has_symbol - computed: false, optional: false, required: true
  private _hasSymbol?: boolean | cdktf.IResolvable; 
  public get hasSymbol() {
    return this.getBooleanAttribute('has_symbol');
  }
  public set hasSymbol(value: boolean | cdktf.IResolvable) {
    this._hasSymbol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasSymbolInput() {
    return this._hasSymbol;
  }

  // has_uppercase - computed: false, optional: false, required: true
  private _hasUppercase?: boolean | cdktf.IResolvable; 
  public get hasUppercase() {
    return this.getBooleanAttribute('has_uppercase');
  }
  public set hasUppercase(value: boolean | cdktf.IResolvable) {
    this._hasUppercase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasUppercaseInput() {
    return this._hasUppercase;
  }

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

  // min_length - computed: false, optional: false, required: true
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      has_lowercase: cdktf.booleanToTerraform(this._hasLowercase),
      has_number: cdktf.booleanToTerraform(this._hasNumber),
      has_symbol: cdktf.booleanToTerraform(this._hasSymbol),
      has_uppercase: cdktf.booleanToTerraform(this._hasUppercase),
      id: cdktf.stringToTerraform(this._id),
      min_length: cdktf.numberToTerraform(this._minLength),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      has_lowercase: {
        value: cdktf.booleanToHclTerraform(this._hasLowercase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_number: {
        value: cdktf.booleanToHclTerraform(this._hasNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_symbol: {
        value: cdktf.booleanToHclTerraform(this._hasSymbol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_uppercase: {
        value: cdktf.booleanToHclTerraform(this._hasUppercase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_length: {
        value: cdktf.numberToHclTerraform(this._minLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
