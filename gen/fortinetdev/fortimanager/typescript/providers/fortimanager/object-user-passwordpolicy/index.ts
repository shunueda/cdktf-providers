// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserPasswordpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#adom ObjectUserPasswordpolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#expire_days ObjectUserPasswordpolicy#expire_days}
  */
  readonly expireDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#expire_status ObjectUserPasswordpolicy#expire_status}
  */
  readonly expireStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#expired_password_renewal ObjectUserPasswordpolicy#expired_password_renewal}
  */
  readonly expiredPasswordRenewal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#id ObjectUserPasswordpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#min_change_characters ObjectUserPasswordpolicy#min_change_characters}
  */
  readonly minChangeCharacters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#min_lower_case_letter ObjectUserPasswordpolicy#min_lower_case_letter}
  */
  readonly minLowerCaseLetter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#min_non_alphanumeric ObjectUserPasswordpolicy#min_non_alphanumeric}
  */
  readonly minNonAlphanumeric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#min_number ObjectUserPasswordpolicy#min_number}
  */
  readonly minNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#min_upper_case_letter ObjectUserPasswordpolicy#min_upper_case_letter}
  */
  readonly minUpperCaseLetter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#minimum_length ObjectUserPasswordpolicy#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#name ObjectUserPasswordpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#reuse_password ObjectUserPasswordpolicy#reuse_password}
  */
  readonly reusePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#reuse_password_limit ObjectUserPasswordpolicy#reuse_password_limit}
  */
  readonly reusePasswordLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#scopetype ObjectUserPasswordpolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#warn_days ObjectUserPasswordpolicy#warn_days}
  */
  readonly warnDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy fortimanager_object_user_passwordpolicy}
*/
export class ObjectUserPasswordpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_passwordpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserPasswordpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserPasswordpolicy to import
  * @param importFromId The id of the existing ObjectUserPasswordpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserPasswordpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_passwordpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_passwordpolicy fortimanager_object_user_passwordpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserPasswordpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectUserPasswordpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_passwordpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._expireDays = config.expireDays;
    this._expireStatus = config.expireStatus;
    this._expiredPasswordRenewal = config.expiredPasswordRenewal;
    this._id = config.id;
    this._minChangeCharacters = config.minChangeCharacters;
    this._minLowerCaseLetter = config.minLowerCaseLetter;
    this._minNonAlphanumeric = config.minNonAlphanumeric;
    this._minNumber = config.minNumber;
    this._minUpperCaseLetter = config.minUpperCaseLetter;
    this._minimumLength = config.minimumLength;
    this._name = config.name;
    this._reusePassword = config.reusePassword;
    this._reusePasswordLimit = config.reusePasswordLimit;
    this._scopetype = config.scopetype;
    this._warnDays = config.warnDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // expire_days - computed: true, optional: true, required: false
  private _expireDays?: number; 
  public get expireDays() {
    return this.getNumberAttribute('expire_days');
  }
  public set expireDays(value: number) {
    this._expireDays = value;
  }
  public resetExpireDays() {
    this._expireDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDaysInput() {
    return this._expireDays;
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

  // expired_password_renewal - computed: true, optional: true, required: false
  private _expiredPasswordRenewal?: string; 
  public get expiredPasswordRenewal() {
    return this.getStringAttribute('expired_password_renewal');
  }
  public set expiredPasswordRenewal(value: string) {
    this._expiredPasswordRenewal = value;
  }
  public resetExpiredPasswordRenewal() {
    this._expiredPasswordRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredPasswordRenewalInput() {
    return this._expiredPasswordRenewal;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // warn_days - computed: true, optional: true, required: false
  private _warnDays?: number; 
  public get warnDays() {
    return this.getNumberAttribute('warn_days');
  }
  public set warnDays(value: number) {
    this._warnDays = value;
  }
  public resetWarnDays() {
    this._warnDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnDaysInput() {
    return this._warnDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      expire_days: cdktf.numberToTerraform(this._expireDays),
      expire_status: cdktf.stringToTerraform(this._expireStatus),
      expired_password_renewal: cdktf.stringToTerraform(this._expiredPasswordRenewal),
      id: cdktf.stringToTerraform(this._id),
      min_change_characters: cdktf.numberToTerraform(this._minChangeCharacters),
      min_lower_case_letter: cdktf.numberToTerraform(this._minLowerCaseLetter),
      min_non_alphanumeric: cdktf.numberToTerraform(this._minNonAlphanumeric),
      min_number: cdktf.numberToTerraform(this._minNumber),
      min_upper_case_letter: cdktf.numberToTerraform(this._minUpperCaseLetter),
      minimum_length: cdktf.numberToTerraform(this._minimumLength),
      name: cdktf.stringToTerraform(this._name),
      reuse_password: cdktf.stringToTerraform(this._reusePassword),
      reuse_password_limit: cdktf.numberToTerraform(this._reusePasswordLimit),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      warn_days: cdktf.numberToTerraform(this._warnDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_days: {
        value: cdktf.numberToHclTerraform(this._expireDays),
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
      expired_password_renewal: {
        value: cdktf.stringToHclTerraform(this._expiredPasswordRenewal),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warn_days: {
        value: cdktf.numberToHclTerraform(this._warnDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
