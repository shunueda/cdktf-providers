// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPasswordpolicyguestadminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#apply_to SystemPasswordpolicyguestadmin#apply_to}
  */
  readonly applyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#change_4_characters SystemPasswordpolicyguestadmin#change_4_characters}
  */
  readonly change4Characters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#expire_day SystemPasswordpolicyguestadmin#expire_day}
  */
  readonly expireDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#expire_status SystemPasswordpolicyguestadmin#expire_status}
  */
  readonly expireStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#id SystemPasswordpolicyguestadmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#min_change_characters SystemPasswordpolicyguestadmin#min_change_characters}
  */
  readonly minChangeCharacters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#min_lower_case_letter SystemPasswordpolicyguestadmin#min_lower_case_letter}
  */
  readonly minLowerCaseLetter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#min_non_alphanumeric SystemPasswordpolicyguestadmin#min_non_alphanumeric}
  */
  readonly minNonAlphanumeric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#min_number SystemPasswordpolicyguestadmin#min_number}
  */
  readonly minNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#min_upper_case_letter SystemPasswordpolicyguestadmin#min_upper_case_letter}
  */
  readonly minUpperCaseLetter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#minimum_length SystemPasswordpolicyguestadmin#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#reuse_password SystemPasswordpolicyguestadmin#reuse_password}
  */
  readonly reusePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#reuse_password_limit SystemPasswordpolicyguestadmin#reuse_password_limit}
  */
  readonly reusePasswordLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#status SystemPasswordpolicyguestadmin#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#vdomparam SystemPasswordpolicyguestadmin#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin fortios_system_passwordpolicyguestadmin}
*/
export class SystemPasswordpolicyguestadmin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_passwordpolicyguestadmin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPasswordpolicyguestadmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPasswordpolicyguestadmin to import
  * @param importFromId The id of the existing SystemPasswordpolicyguestadmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPasswordpolicyguestadmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_passwordpolicyguestadmin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_passwordpolicyguestadmin fortios_system_passwordpolicyguestadmin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPasswordpolicyguestadminConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPasswordpolicyguestadminConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_passwordpolicyguestadmin',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyTo = config.applyTo;
    this._change4Characters = config.change4Characters;
    this._expireDay = config.expireDay;
    this._expireStatus = config.expireStatus;
    this._id = config.id;
    this._minChangeCharacters = config.minChangeCharacters;
    this._minLowerCaseLetter = config.minLowerCaseLetter;
    this._minNonAlphanumeric = config.minNonAlphanumeric;
    this._minNumber = config.minNumber;
    this._minUpperCaseLetter = config.minUpperCaseLetter;
    this._minimumLength = config.minimumLength;
    this._reusePassword = config.reusePassword;
    this._reusePasswordLimit = config.reusePasswordLimit;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_to - computed: true, optional: true, required: false
  private _applyTo?: string; 
  public get applyTo() {
    return this.getStringAttribute('apply_to');
  }
  public set applyTo(value: string) {
    this._applyTo = value;
  }
  public resetApplyTo() {
    this._applyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToInput() {
    return this._applyTo;
  }

  // change_4_characters - computed: true, optional: true, required: false
  private _change4Characters?: string; 
  public get change4Characters() {
    return this.getStringAttribute('change_4_characters');
  }
  public set change4Characters(value: string) {
    this._change4Characters = value;
  }
  public resetChange4Characters() {
    this._change4Characters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get change4CharactersInput() {
    return this._change4Characters;
  }

  // expire_day - computed: true, optional: true, required: false
  private _expireDay?: number; 
  public get expireDay() {
    return this.getNumberAttribute('expire_day');
  }
  public set expireDay(value: number) {
    this._expireDay = value;
  }
  public resetExpireDay() {
    this._expireDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDayInput() {
    return this._expireDay;
  }

  // expire_status - computed: true, optional: true, required: false
  private _expireStatus?: string; 
  public get expireStatus() {
    return this.getStringAttribute('expire_status');
  }
  public set expireStatus(value: string) {
    this._expireStatus = value;
  }
  public resetExpireStatus() {
    this._expireStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireStatusInput() {
    return this._expireStatus;
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

  // min_change_characters - computed: false, optional: true, required: false
  private _minChangeCharacters?: number; 
  public get minChangeCharacters() {
    return this.getNumberAttribute('min_change_characters');
  }
  public set minChangeCharacters(value: number) {
    this._minChangeCharacters = value;
  }
  public resetMinChangeCharacters() {
    this._minChangeCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minChangeCharactersInput() {
    return this._minChangeCharacters;
  }

  // min_lower_case_letter - computed: false, optional: true, required: false
  private _minLowerCaseLetter?: number; 
  public get minLowerCaseLetter() {
    return this.getNumberAttribute('min_lower_case_letter');
  }
  public set minLowerCaseLetter(value: number) {
    this._minLowerCaseLetter = value;
  }
  public resetMinLowerCaseLetter() {
    this._minLowerCaseLetter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowerCaseLetterInput() {
    return this._minLowerCaseLetter;
  }

  // min_non_alphanumeric - computed: false, optional: true, required: false
  private _minNonAlphanumeric?: number; 
  public get minNonAlphanumeric() {
    return this.getNumberAttribute('min_non_alphanumeric');
  }
  public set minNonAlphanumeric(value: number) {
    this._minNonAlphanumeric = value;
  }
  public resetMinNonAlphanumeric() {
    this._minNonAlphanumeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNonAlphanumericInput() {
    return this._minNonAlphanumeric;
  }

  // min_number - computed: false, optional: true, required: false
  private _minNumber?: number; 
  public get minNumber() {
    return this.getNumberAttribute('min_number');
  }
  public set minNumber(value: number) {
    this._minNumber = value;
  }
  public resetMinNumber() {
    this._minNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumberInput() {
    return this._minNumber;
  }

  // min_upper_case_letter - computed: false, optional: true, required: false
  private _minUpperCaseLetter?: number; 
  public get minUpperCaseLetter() {
    return this.getNumberAttribute('min_upper_case_letter');
  }
  public set minUpperCaseLetter(value: number) {
    this._minUpperCaseLetter = value;
  }
  public resetMinUpperCaseLetter() {
    this._minUpperCaseLetter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpperCaseLetterInput() {
    return this._minUpperCaseLetter;
  }

  // minimum_length - computed: true, optional: true, required: false
  private _minimumLength?: number; 
  public get minimumLength() {
    return this.getNumberAttribute('minimum_length');
  }
  public set minimumLength(value: number) {
    this._minimumLength = value;
  }
  public resetMinimumLength() {
    this._minimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLengthInput() {
    return this._minimumLength;
  }

  // reuse_password - computed: true, optional: true, required: false
  private _reusePassword?: string; 
  public get reusePassword() {
    return this.getStringAttribute('reuse_password');
  }
  public set reusePassword(value: string) {
    this._reusePassword = value;
  }
  public resetReusePassword() {
    this._reusePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reusePasswordInput() {
    return this._reusePassword;
  }

  // reuse_password_limit - computed: false, optional: true, required: false
  private _reusePasswordLimit?: number; 
  public get reusePasswordLimit() {
    return this.getNumberAttribute('reuse_password_limit');
  }
  public set reusePasswordLimit(value: number) {
    this._reusePasswordLimit = value;
  }
  public resetReusePasswordLimit() {
    this._reusePasswordLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reusePasswordLimitInput() {
    return this._reusePasswordLimit;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_to: cdktf.stringToTerraform(this._applyTo),
      change_4_characters: cdktf.stringToTerraform(this._change4Characters),
      expire_day: cdktf.numberToTerraform(this._expireDay),
      expire_status: cdktf.stringToTerraform(this._expireStatus),
      id: cdktf.stringToTerraform(this._id),
      min_change_characters: cdktf.numberToTerraform(this._minChangeCharacters),
      min_lower_case_letter: cdktf.numberToTerraform(this._minLowerCaseLetter),
      min_non_alphanumeric: cdktf.numberToTerraform(this._minNonAlphanumeric),
      min_number: cdktf.numberToTerraform(this._minNumber),
      min_upper_case_letter: cdktf.numberToTerraform(this._minUpperCaseLetter),
      minimum_length: cdktf.numberToTerraform(this._minimumLength),
      reuse_password: cdktf.stringToTerraform(this._reusePassword),
      reuse_password_limit: cdktf.numberToTerraform(this._reusePasswordLimit),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_to: {
        value: cdktf.stringToHclTerraform(this._applyTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_4_characters: {
        value: cdktf.stringToHclTerraform(this._change4Characters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_day: {
        value: cdktf.numberToHclTerraform(this._expireDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expire_status: {
        value: cdktf.stringToHclTerraform(this._expireStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_change_characters: {
        value: cdktf.numberToHclTerraform(this._minChangeCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_lower_case_letter: {
        value: cdktf.numberToHclTerraform(this._minLowerCaseLetter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_non_alphanumeric: {
        value: cdktf.numberToHclTerraform(this._minNonAlphanumeric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_number: {
        value: cdktf.numberToHclTerraform(this._minNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_upper_case_letter: {
        value: cdktf.numberToHclTerraform(this._minUpperCaseLetter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_length: {
        value: cdktf.numberToHclTerraform(this._minimumLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reuse_password: {
        value: cdktf.stringToHclTerraform(this._reusePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse_password_limit: {
        value: cdktf.numberToHclTerraform(this._reusePasswordLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
