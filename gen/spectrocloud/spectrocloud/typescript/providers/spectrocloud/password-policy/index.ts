// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of days before the password expiry to send the first reminder to the user. Default is `5` days before expiry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#first_reminder_days PasswordPolicy#first_reminder_days}
  */
  readonly firstReminderDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#id PasswordPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The minimum number of numeric digits (0-9) required in the password. Ensures that passwords contain numerical characters. Minimum length of digit should be `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#min_digits PasswordPolicy#min_digits}
  */
  readonly minDigits?: number;
  /**
  * The minimum number of lowercase letters (a-z) required in the password. Ensures that lowercase characters are included for password complexity. Minimum length of lower case should be `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#min_lowercase_letters PasswordPolicy#min_lowercase_letters}
  */
  readonly minLowercaseLetters?: number;
  /**
  * The minimum length required for the password. Enforces a stronger password policy by ensuring a minimum number of characters.  Default minimum length is `6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#min_password_length PasswordPolicy#min_password_length}
  */
  readonly minPasswordLength?: number;
  /**
  * The minimum number of special characters (e.g., !, @, #, $, %) required in the password. This increases the password's security level by including symbols. Minimum special characters should be `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#min_special_characters PasswordPolicy#min_special_characters}
  */
  readonly minSpecialCharacters?: number;
  /**
  * The minimum number of uppercase letters (A-Z) required in the password. Helps ensure password complexity with a mix of case-sensitive characters. Minimum length of upper case should be `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#min_uppercase_letters PasswordPolicy#min_uppercase_letters}
  */
  readonly minUppercaseLetters?: number;
  /**
  * The number of days before the password expires. Must be between 1 and 1000 days. Defines how often passwords must be changed.  Default is `999` days for expiry. Conflicts with `min_password_length`, `min_uppercase_letters`, `min_digits`, `min_lowercase_letters`, `min_special_characters`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#password_expiry_days PasswordPolicy#password_expiry_days}
  */
  readonly passwordExpiryDays?: number;
  /**
  * A regular expression (regex) to define custom password patterns, such as enforcing specific characters or sequences in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#password_regex PasswordPolicy#password_regex}
  */
  readonly passwordRegex?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#timeouts PasswordPolicy#timeouts}
  */
  readonly timeouts?: PasswordPolicyTimeouts;
}
export interface PasswordPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#create PasswordPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#delete PasswordPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#update PasswordPolicy#update}
  */
  readonly update?: string;
}

export function passwordPolicyTimeoutsToTerraform(struct?: PasswordPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function passwordPolicyTimeoutsToHclTerraform(struct?: PasswordPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PasswordPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PasswordPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy spectrocloud_password_policy}
*/
export class PasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordPolicy to import
  * @param importFromId The id of the existing PasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/password_policy spectrocloud_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PasswordPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.1',
        providerVersionConstraint: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firstReminderDays = config.firstReminderDays;
    this._id = config.id;
    this._minDigits = config.minDigits;
    this._minLowercaseLetters = config.minLowercaseLetters;
    this._minPasswordLength = config.minPasswordLength;
    this._minSpecialCharacters = config.minSpecialCharacters;
    this._minUppercaseLetters = config.minUppercaseLetters;
    this._passwordExpiryDays = config.passwordExpiryDays;
    this._passwordRegex = config.passwordRegex;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // first_reminder_days - computed: false, optional: true, required: false
  private _firstReminderDays?: number; 
  public get firstReminderDays() {
    return this.getNumberAttribute('first_reminder_days');
  }
  public set firstReminderDays(value: number) {
    this._firstReminderDays = value;
  }
  public resetFirstReminderDays() {
    this._firstReminderDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstReminderDaysInput() {
    return this._firstReminderDays;
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

  // min_digits - computed: false, optional: true, required: false
  private _minDigits?: number; 
  public get minDigits() {
    return this.getNumberAttribute('min_digits');
  }
  public set minDigits(value: number) {
    this._minDigits = value;
  }
  public resetMinDigits() {
    this._minDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDigitsInput() {
    return this._minDigits;
  }

  // min_lowercase_letters - computed: false, optional: true, required: false
  private _minLowercaseLetters?: number; 
  public get minLowercaseLetters() {
    return this.getNumberAttribute('min_lowercase_letters');
  }
  public set minLowercaseLetters(value: number) {
    this._minLowercaseLetters = value;
  }
  public resetMinLowercaseLetters() {
    this._minLowercaseLetters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowercaseLettersInput() {
    return this._minLowercaseLetters;
  }

  // min_password_length - computed: false, optional: true, required: false
  private _minPasswordLength?: number; 
  public get minPasswordLength() {
    return this.getNumberAttribute('min_password_length');
  }
  public set minPasswordLength(value: number) {
    this._minPasswordLength = value;
  }
  public resetMinPasswordLength() {
    this._minPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordLengthInput() {
    return this._minPasswordLength;
  }

  // min_special_characters - computed: false, optional: true, required: false
  private _minSpecialCharacters?: number; 
  public get minSpecialCharacters() {
    return this.getNumberAttribute('min_special_characters');
  }
  public set minSpecialCharacters(value: number) {
    this._minSpecialCharacters = value;
  }
  public resetMinSpecialCharacters() {
    this._minSpecialCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSpecialCharactersInput() {
    return this._minSpecialCharacters;
  }

  // min_uppercase_letters - computed: false, optional: true, required: false
  private _minUppercaseLetters?: number; 
  public get minUppercaseLetters() {
    return this.getNumberAttribute('min_uppercase_letters');
  }
  public set minUppercaseLetters(value: number) {
    this._minUppercaseLetters = value;
  }
  public resetMinUppercaseLetters() {
    this._minUppercaseLetters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUppercaseLettersInput() {
    return this._minUppercaseLetters;
  }

  // password_expiry_days - computed: false, optional: true, required: false
  private _passwordExpiryDays?: number; 
  public get passwordExpiryDays() {
    return this.getNumberAttribute('password_expiry_days');
  }
  public set passwordExpiryDays(value: number) {
    this._passwordExpiryDays = value;
  }
  public resetPasswordExpiryDays() {
    this._passwordExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiryDaysInput() {
    return this._passwordExpiryDays;
  }

  // password_regex - computed: false, optional: true, required: false
  private _passwordRegex?: string; 
  public get passwordRegex() {
    return this.getStringAttribute('password_regex');
  }
  public set passwordRegex(value: string) {
    this._passwordRegex = value;
  }
  public resetPasswordRegex() {
    this._passwordRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRegexInput() {
    return this._passwordRegex;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PasswordPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PasswordPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      first_reminder_days: cdktf.numberToTerraform(this._firstReminderDays),
      id: cdktf.stringToTerraform(this._id),
      min_digits: cdktf.numberToTerraform(this._minDigits),
      min_lowercase_letters: cdktf.numberToTerraform(this._minLowercaseLetters),
      min_password_length: cdktf.numberToTerraform(this._minPasswordLength),
      min_special_characters: cdktf.numberToTerraform(this._minSpecialCharacters),
      min_uppercase_letters: cdktf.numberToTerraform(this._minUppercaseLetters),
      password_expiry_days: cdktf.numberToTerraform(this._passwordExpiryDays),
      password_regex: cdktf.stringToTerraform(this._passwordRegex),
      timeouts: passwordPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      first_reminder_days: {
        value: cdktf.numberToHclTerraform(this._firstReminderDays),
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
      min_digits: {
        value: cdktf.numberToHclTerraform(this._minDigits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_lowercase_letters: {
        value: cdktf.numberToHclTerraform(this._minLowercaseLetters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_password_length: {
        value: cdktf.numberToHclTerraform(this._minPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_special_characters: {
        value: cdktf.numberToHclTerraform(this._minSpecialCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_uppercase_letters: {
        value: cdktf.numberToHclTerraform(this._minUppercaseLetters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_expiry_days: {
        value: cdktf.numberToHclTerraform(this._passwordExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_regex: {
        value: cdktf.stringToHclTerraform(this._passwordRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: passwordPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PasswordPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
