// https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#account_lockout_duration_in_mins PasswordPolicy#account_lockout_duration_in_mins}
  */
  readonly accountLockoutDurationInMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#account_lockout_threshold PasswordPolicy#account_lockout_threshold}
  */
  readonly accountLockoutThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#failed_login_reset_duration_in_mins PasswordPolicy#failed_login_reset_duration_in_mins}
  */
  readonly failedLoginResetDurationInMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#id PasswordPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#max_length PasswordPolicy#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#max_password_age_in_days PasswordPolicy#max_password_age_in_days}
  */
  readonly maxPasswordAgeInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#min_length PasswordPolicy#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#min_unique_passwords PasswordPolicy#min_unique_passwords}
  */
  readonly minUniquePasswords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#must_contain_digits PasswordPolicy#must_contain_digits}
  */
  readonly mustContainDigits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#must_contain_lowercase PasswordPolicy#must_contain_lowercase}
  */
  readonly mustContainLowercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#must_contain_special_chars PasswordPolicy#must_contain_special_chars}
  */
  readonly mustContainSpecialChars?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#must_contain_uppercase PasswordPolicy#must_contain_uppercase}
  */
  readonly mustContainUppercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#remember_mfa PasswordPolicy#remember_mfa}
  */
  readonly rememberMfa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#require_mfa PasswordPolicy#require_mfa}
  */
  readonly requireMfa?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy sumologic_password_policy}
*/
export class PasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordPolicy to import
  * @param importFromId The id of the existing PasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/password_policy sumologic_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PasswordPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sumologic_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.8',
        providerVersionConstraint: '3.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountLockoutDurationInMins = config.accountLockoutDurationInMins;
    this._accountLockoutThreshold = config.accountLockoutThreshold;
    this._failedLoginResetDurationInMins = config.failedLoginResetDurationInMins;
    this._id = config.id;
    this._maxLength = config.maxLength;
    this._maxPasswordAgeInDays = config.maxPasswordAgeInDays;
    this._minLength = config.minLength;
    this._minUniquePasswords = config.minUniquePasswords;
    this._mustContainDigits = config.mustContainDigits;
    this._mustContainLowercase = config.mustContainLowercase;
    this._mustContainSpecialChars = config.mustContainSpecialChars;
    this._mustContainUppercase = config.mustContainUppercase;
    this._rememberMfa = config.rememberMfa;
    this._requireMfa = config.requireMfa;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_lockout_duration_in_mins - computed: false, optional: true, required: false
  private _accountLockoutDurationInMins?: number; 
  public get accountLockoutDurationInMins() {
    return this.getNumberAttribute('account_lockout_duration_in_mins');
  }
  public set accountLockoutDurationInMins(value: number) {
    this._accountLockoutDurationInMins = value;
  }
  public resetAccountLockoutDurationInMins() {
    this._accountLockoutDurationInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLockoutDurationInMinsInput() {
    return this._accountLockoutDurationInMins;
  }

  // account_lockout_threshold - computed: false, optional: true, required: false
  private _accountLockoutThreshold?: number; 
  public get accountLockoutThreshold() {
    return this.getNumberAttribute('account_lockout_threshold');
  }
  public set accountLockoutThreshold(value: number) {
    this._accountLockoutThreshold = value;
  }
  public resetAccountLockoutThreshold() {
    this._accountLockoutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLockoutThresholdInput() {
    return this._accountLockoutThreshold;
  }

  // failed_login_reset_duration_in_mins - computed: false, optional: true, required: false
  private _failedLoginResetDurationInMins?: number; 
  public get failedLoginResetDurationInMins() {
    return this.getNumberAttribute('failed_login_reset_duration_in_mins');
  }
  public set failedLoginResetDurationInMins(value: number) {
    this._failedLoginResetDurationInMins = value;
  }
  public resetFailedLoginResetDurationInMins() {
    this._failedLoginResetDurationInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLoginResetDurationInMinsInput() {
    return this._failedLoginResetDurationInMins;
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

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_password_age_in_days - computed: false, optional: true, required: false
  private _maxPasswordAgeInDays?: number; 
  public get maxPasswordAgeInDays() {
    return this.getNumberAttribute('max_password_age_in_days');
  }
  public set maxPasswordAgeInDays(value: number) {
    this._maxPasswordAgeInDays = value;
  }
  public resetMaxPasswordAgeInDays() {
    this._maxPasswordAgeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordAgeInDaysInput() {
    return this._maxPasswordAgeInDays;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_unique_passwords - computed: false, optional: true, required: false
  private _minUniquePasswords?: number; 
  public get minUniquePasswords() {
    return this.getNumberAttribute('min_unique_passwords');
  }
  public set minUniquePasswords(value: number) {
    this._minUniquePasswords = value;
  }
  public resetMinUniquePasswords() {
    this._minUniquePasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUniquePasswordsInput() {
    return this._minUniquePasswords;
  }

  // must_contain_digits - computed: false, optional: true, required: false
  private _mustContainDigits?: boolean | cdktf.IResolvable; 
  public get mustContainDigits() {
    return this.getBooleanAttribute('must_contain_digits');
  }
  public set mustContainDigits(value: boolean | cdktf.IResolvable) {
    this._mustContainDigits = value;
  }
  public resetMustContainDigits() {
    this._mustContainDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustContainDigitsInput() {
    return this._mustContainDigits;
  }

  // must_contain_lowercase - computed: false, optional: true, required: false
  private _mustContainLowercase?: boolean | cdktf.IResolvable; 
  public get mustContainLowercase() {
    return this.getBooleanAttribute('must_contain_lowercase');
  }
  public set mustContainLowercase(value: boolean | cdktf.IResolvable) {
    this._mustContainLowercase = value;
  }
  public resetMustContainLowercase() {
    this._mustContainLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustContainLowercaseInput() {
    return this._mustContainLowercase;
  }

  // must_contain_special_chars - computed: false, optional: true, required: false
  private _mustContainSpecialChars?: boolean | cdktf.IResolvable; 
  public get mustContainSpecialChars() {
    return this.getBooleanAttribute('must_contain_special_chars');
  }
  public set mustContainSpecialChars(value: boolean | cdktf.IResolvable) {
    this._mustContainSpecialChars = value;
  }
  public resetMustContainSpecialChars() {
    this._mustContainSpecialChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustContainSpecialCharsInput() {
    return this._mustContainSpecialChars;
  }

  // must_contain_uppercase - computed: false, optional: true, required: false
  private _mustContainUppercase?: boolean | cdktf.IResolvable; 
  public get mustContainUppercase() {
    return this.getBooleanAttribute('must_contain_uppercase');
  }
  public set mustContainUppercase(value: boolean | cdktf.IResolvable) {
    this._mustContainUppercase = value;
  }
  public resetMustContainUppercase() {
    this._mustContainUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustContainUppercaseInput() {
    return this._mustContainUppercase;
  }

  // remember_mfa - computed: false, optional: true, required: false
  private _rememberMfa?: boolean | cdktf.IResolvable; 
  public get rememberMfa() {
    return this.getBooleanAttribute('remember_mfa');
  }
  public set rememberMfa(value: boolean | cdktf.IResolvable) {
    this._rememberMfa = value;
  }
  public resetRememberMfa() {
    this._rememberMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberMfaInput() {
    return this._rememberMfa;
  }

  // require_mfa - computed: false, optional: true, required: false
  private _requireMfa?: boolean | cdktf.IResolvable; 
  public get requireMfa() {
    return this.getBooleanAttribute('require_mfa');
  }
  public set requireMfa(value: boolean | cdktf.IResolvable) {
    this._requireMfa = value;
  }
  public resetRequireMfa() {
    this._requireMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaInput() {
    return this._requireMfa;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_lockout_duration_in_mins: cdktf.numberToTerraform(this._accountLockoutDurationInMins),
      account_lockout_threshold: cdktf.numberToTerraform(this._accountLockoutThreshold),
      failed_login_reset_duration_in_mins: cdktf.numberToTerraform(this._failedLoginResetDurationInMins),
      id: cdktf.stringToTerraform(this._id),
      max_length: cdktf.numberToTerraform(this._maxLength),
      max_password_age_in_days: cdktf.numberToTerraform(this._maxPasswordAgeInDays),
      min_length: cdktf.numberToTerraform(this._minLength),
      min_unique_passwords: cdktf.numberToTerraform(this._minUniquePasswords),
      must_contain_digits: cdktf.booleanToTerraform(this._mustContainDigits),
      must_contain_lowercase: cdktf.booleanToTerraform(this._mustContainLowercase),
      must_contain_special_chars: cdktf.booleanToTerraform(this._mustContainSpecialChars),
      must_contain_uppercase: cdktf.booleanToTerraform(this._mustContainUppercase),
      remember_mfa: cdktf.booleanToTerraform(this._rememberMfa),
      require_mfa: cdktf.booleanToTerraform(this._requireMfa),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_lockout_duration_in_mins: {
        value: cdktf.numberToHclTerraform(this._accountLockoutDurationInMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      account_lockout_threshold: {
        value: cdktf.numberToHclTerraform(this._accountLockoutThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failed_login_reset_duration_in_mins: {
        value: cdktf.numberToHclTerraform(this._failedLoginResetDurationInMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_length: {
        value: cdktf.numberToHclTerraform(this._maxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_password_age_in_days: {
        value: cdktf.numberToHclTerraform(this._maxPasswordAgeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_length: {
        value: cdktf.numberToHclTerraform(this._minLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_unique_passwords: {
        value: cdktf.numberToHclTerraform(this._minUniquePasswords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      must_contain_digits: {
        value: cdktf.booleanToHclTerraform(this._mustContainDigits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      must_contain_lowercase: {
        value: cdktf.booleanToHclTerraform(this._mustContainLowercase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      must_contain_special_chars: {
        value: cdktf.booleanToHclTerraform(this._mustContainSpecialChars),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      must_contain_uppercase: {
        value: cdktf.booleanToHclTerraform(this._mustContainUppercase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remember_mfa: {
        value: cdktf.booleanToHclTerraform(this._rememberMfa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_mfa: {
        value: cdktf.booleanToHclTerraform(this._requireMfa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
