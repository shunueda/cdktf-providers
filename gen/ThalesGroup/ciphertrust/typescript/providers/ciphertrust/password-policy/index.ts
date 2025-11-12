// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of lockout durations in minutes for failed login attempts. For example, with input of [0, 5, 30], the first failed login attempt with duration of zero will not lockout the user account, the second failed login attempt will lockout the account for 5 minutes, the third and subsequent failed login attempts will lockout for 30 minutes. Set an empty array '[]' to disable the user account lockout.List of lockout durations in minutes for failed login attempts. For example, with input of [0, 5, 30], the first failed login attempt with duration of zero will not lockout the user account, the second failed login attempt will lockout the account for 5 minutes, the third and subsequent failed login attempts will lockout for 30 minutes. Set an empty array '[]' to disable the user account lockout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#failed_logins_lockout_thresholds PasswordPolicy#failed_logins_lockout_thresholds}
  */
  readonly failedLoginsLockoutThresholds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#id PasswordPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum length of the password. Value 0 is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#inclusive_max_total_length PasswordPolicy#inclusive_max_total_length}
  */
  readonly inclusiveMaxTotalLength?: number;
  /**
  * The minimum number of digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#inclusive_min_digits PasswordPolicy#inclusive_min_digits}
  */
  readonly inclusiveMinDigits?: number;
  /**
  * The minimum number of lower cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#inclusive_min_lower_case PasswordPolicy#inclusive_min_lower_case}
  */
  readonly inclusiveMinLowerCase?: number;
  /**
  * The minimum number of other characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#inclusive_min_other PasswordPolicy#inclusive_min_other}
  */
  readonly inclusiveMinOther?: number;
  /**
  * The minimum length of the password. Value 0 is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#inclusive_min_total_length PasswordPolicy#inclusive_min_total_length}
  */
  readonly inclusiveMinTotalLength?: number;
  /**
  * The minimum number of upper cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#inclusive_min_upper_case PasswordPolicy#inclusive_min_upper_case}
  */
  readonly inclusiveMinUpperCase?: number;
  /**
  * The minimum period in days between password changes. Value 0 is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#password_change_min_days PasswordPolicy#password_change_min_days}
  */
  readonly passwordChangeMinDays?: number;
  /**
  * Determines the number of past passwords a user cannot reuse. Even with value 0, the user will not be able to change their password to the same password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#password_history_threshold PasswordPolicy#password_history_threshold}
  */
  readonly passwordHistoryThreshold?: number;
  /**
  * The maximum lifetime of the password in days. Value 0 is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#password_lifetime PasswordPolicy#password_lifetime}
  */
  readonly passwordLifetime?: number;
  /**
  * The name for the custom password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#policy_name PasswordPolicy#policy_name}
  */
  readonly policyName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy ciphertrust_password_policy}
*/
export class PasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordPolicy to import
  * @param importFromId The id of the existing PasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/password_policy ciphertrust_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PasswordPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failedLoginsLockoutThresholds = config.failedLoginsLockoutThresholds;
    this._id = config.id;
    this._inclusiveMaxTotalLength = config.inclusiveMaxTotalLength;
    this._inclusiveMinDigits = config.inclusiveMinDigits;
    this._inclusiveMinLowerCase = config.inclusiveMinLowerCase;
    this._inclusiveMinOther = config.inclusiveMinOther;
    this._inclusiveMinTotalLength = config.inclusiveMinTotalLength;
    this._inclusiveMinUpperCase = config.inclusiveMinUpperCase;
    this._passwordChangeMinDays = config.passwordChangeMinDays;
    this._passwordHistoryThreshold = config.passwordHistoryThreshold;
    this._passwordLifetime = config.passwordLifetime;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failed_logins_lockout_thresholds - computed: false, optional: true, required: false
  private _failedLoginsLockoutThresholds?: number[]; 
  public get failedLoginsLockoutThresholds() {
    return this.getNumberListAttribute('failed_logins_lockout_thresholds');
  }
  public set failedLoginsLockoutThresholds(value: number[]) {
    this._failedLoginsLockoutThresholds = value;
  }
  public resetFailedLoginsLockoutThresholds() {
    this._failedLoginsLockoutThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLoginsLockoutThresholdsInput() {
    return this._failedLoginsLockoutThresholds;
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

  // inclusive_max_total_length - computed: false, optional: true, required: false
  private _inclusiveMaxTotalLength?: number; 
  public get inclusiveMaxTotalLength() {
    return this.getNumberAttribute('inclusive_max_total_length');
  }
  public set inclusiveMaxTotalLength(value: number) {
    this._inclusiveMaxTotalLength = value;
  }
  public resetInclusiveMaxTotalLength() {
    this._inclusiveMaxTotalLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveMaxTotalLengthInput() {
    return this._inclusiveMaxTotalLength;
  }

  // inclusive_min_digits - computed: false, optional: true, required: false
  private _inclusiveMinDigits?: number; 
  public get inclusiveMinDigits() {
    return this.getNumberAttribute('inclusive_min_digits');
  }
  public set inclusiveMinDigits(value: number) {
    this._inclusiveMinDigits = value;
  }
  public resetInclusiveMinDigits() {
    this._inclusiveMinDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveMinDigitsInput() {
    return this._inclusiveMinDigits;
  }

  // inclusive_min_lower_case - computed: false, optional: true, required: false
  private _inclusiveMinLowerCase?: number; 
  public get inclusiveMinLowerCase() {
    return this.getNumberAttribute('inclusive_min_lower_case');
  }
  public set inclusiveMinLowerCase(value: number) {
    this._inclusiveMinLowerCase = value;
  }
  public resetInclusiveMinLowerCase() {
    this._inclusiveMinLowerCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveMinLowerCaseInput() {
    return this._inclusiveMinLowerCase;
  }

  // inclusive_min_other - computed: false, optional: true, required: false
  private _inclusiveMinOther?: number; 
  public get inclusiveMinOther() {
    return this.getNumberAttribute('inclusive_min_other');
  }
  public set inclusiveMinOther(value: number) {
    this._inclusiveMinOther = value;
  }
  public resetInclusiveMinOther() {
    this._inclusiveMinOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveMinOtherInput() {
    return this._inclusiveMinOther;
  }

  // inclusive_min_total_length - computed: false, optional: true, required: false
  private _inclusiveMinTotalLength?: number; 
  public get inclusiveMinTotalLength() {
    return this.getNumberAttribute('inclusive_min_total_length');
  }
  public set inclusiveMinTotalLength(value: number) {
    this._inclusiveMinTotalLength = value;
  }
  public resetInclusiveMinTotalLength() {
    this._inclusiveMinTotalLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveMinTotalLengthInput() {
    return this._inclusiveMinTotalLength;
  }

  // inclusive_min_upper_case - computed: false, optional: true, required: false
  private _inclusiveMinUpperCase?: number; 
  public get inclusiveMinUpperCase() {
    return this.getNumberAttribute('inclusive_min_upper_case');
  }
  public set inclusiveMinUpperCase(value: number) {
    this._inclusiveMinUpperCase = value;
  }
  public resetInclusiveMinUpperCase() {
    this._inclusiveMinUpperCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveMinUpperCaseInput() {
    return this._inclusiveMinUpperCase;
  }

  // password_change_min_days - computed: false, optional: true, required: false
  private _passwordChangeMinDays?: number; 
  public get passwordChangeMinDays() {
    return this.getNumberAttribute('password_change_min_days');
  }
  public set passwordChangeMinDays(value: number) {
    this._passwordChangeMinDays = value;
  }
  public resetPasswordChangeMinDays() {
    this._passwordChangeMinDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeMinDaysInput() {
    return this._passwordChangeMinDays;
  }

  // password_history_threshold - computed: false, optional: true, required: false
  private _passwordHistoryThreshold?: number; 
  public get passwordHistoryThreshold() {
    return this.getNumberAttribute('password_history_threshold');
  }
  public set passwordHistoryThreshold(value: number) {
    this._passwordHistoryThreshold = value;
  }
  public resetPasswordHistoryThreshold() {
    this._passwordHistoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistoryThresholdInput() {
    return this._passwordHistoryThreshold;
  }

  // password_lifetime - computed: false, optional: true, required: false
  private _passwordLifetime?: number; 
  public get passwordLifetime() {
    return this.getNumberAttribute('password_lifetime');
  }
  public set passwordLifetime(value: number) {
    this._passwordLifetime = value;
  }
  public resetPasswordLifetime() {
    this._passwordLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLifetimeInput() {
    return this._passwordLifetime;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      failed_logins_lockout_thresholds: cdktf.listMapper(cdktf.numberToTerraform, false)(this._failedLoginsLockoutThresholds),
      id: cdktf.stringToTerraform(this._id),
      inclusive_max_total_length: cdktf.numberToTerraform(this._inclusiveMaxTotalLength),
      inclusive_min_digits: cdktf.numberToTerraform(this._inclusiveMinDigits),
      inclusive_min_lower_case: cdktf.numberToTerraform(this._inclusiveMinLowerCase),
      inclusive_min_other: cdktf.numberToTerraform(this._inclusiveMinOther),
      inclusive_min_total_length: cdktf.numberToTerraform(this._inclusiveMinTotalLength),
      inclusive_min_upper_case: cdktf.numberToTerraform(this._inclusiveMinUpperCase),
      password_change_min_days: cdktf.numberToTerraform(this._passwordChangeMinDays),
      password_history_threshold: cdktf.numberToTerraform(this._passwordHistoryThreshold),
      password_lifetime: cdktf.numberToTerraform(this._passwordLifetime),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      failed_logins_lockout_thresholds: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._failedLoginsLockoutThresholds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inclusive_max_total_length: {
        value: cdktf.numberToHclTerraform(this._inclusiveMaxTotalLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inclusive_min_digits: {
        value: cdktf.numberToHclTerraform(this._inclusiveMinDigits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inclusive_min_lower_case: {
        value: cdktf.numberToHclTerraform(this._inclusiveMinLowerCase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inclusive_min_other: {
        value: cdktf.numberToHclTerraform(this._inclusiveMinOther),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inclusive_min_total_length: {
        value: cdktf.numberToHclTerraform(this._inclusiveMinTotalLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inclusive_min_upper_case: {
        value: cdktf.numberToHclTerraform(this._inclusiveMinUpperCase),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_change_min_days: {
        value: cdktf.numberToHclTerraform(this._passwordChangeMinDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_history_threshold: {
        value: cdktf.numberToHclTerraform(this._passwordHistoryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_lifetime: {
        value: cdktf.numberToHclTerraform(this._passwordLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
