// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PasswordPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean that specifies whether this password policy is enforced as the default within the environment. When set to `true`, all other password policies are set to `false`.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#default PasswordPolicy#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the description to apply to the password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#description PasswordPolicy#description}
  */
  readonly description?: string;
  /**
  * The ID of the environment to manage the password policy in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#environment_id PasswordPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * A boolean that specifies whether to ensure the password is not one of the commonly used passwords.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#excludes_commonly_used_passwords PasswordPolicy#excludes_commonly_used_passwords}
  */
  readonly excludesCommonlyUsedPasswords?: boolean | cdktf.IResolvable;
  /**
  * A boolean that specifies whether to ensure the password is not an exact match for the value of any attribute in the user's profile, such as name, phone number, or address.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#excludes_profile_data PasswordPolicy#excludes_profile_data}
  */
  readonly excludesProfileData?: boolean | cdktf.IResolvable;
  /**
  * A single object that specifies settings to control the user's password history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#history PasswordPolicy#history}
  */
  readonly history?: PasswordPolicyHistory;
  /**
  * A single object that specifies settings to control the user's password length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#length PasswordPolicy#length}
  */
  readonly length?: PasswordPolicyLength;
  /**
  * A single object that specifies settings to control the user's lockout on unsuccessful authentication attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#lockout PasswordPolicy#lockout}
  */
  readonly lockout?: PasswordPolicyLockout;
  /**
  * An integer that specifies the maximum number of repeated characters allowed. This property is not enforced when not present.  Fixed value of `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#max_repeated_characters PasswordPolicy#max_repeated_characters}
  */
  readonly maxRepeatedCharacters?: number;
  /**
  * A single object that specifies sets of characters that can be included, and the value is the minimum number of times one of the characters must appear in the user's password. The only allowed key values are `ABCDEFGHIJKLMNOPQRSTUVWXYZ`, `abcdefghijklmnopqrstuvwxyz`, `0123456789`, and `~!@#$%^&*()-_=+[]{}\|;:,.<>/?`. This property is not enforced when not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#min_characters PasswordPolicy#min_characters}
  */
  readonly minCharacters?: PasswordPolicyMinCharacters;
  /**
  * An integer that specifies the minimum complexity of the password based on the concept of password haystacks. The value is the number of days required to exhaust the entire search space during a brute force attack. This property is not enforced when not present.  Fixed value of `7`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#min_complexity PasswordPolicy#min_complexity}
  */
  readonly minComplexity?: number;
  /**
  * An integer that specifies the minimum number of unique characters required. This property is not enforced when not present.  Fixed value of `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#min_unique_characters PasswordPolicy#min_unique_characters}
  */
  readonly minUniqueCharacters?: number;
  /**
  * A string that specifies the name of the password policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#name PasswordPolicy#name}
  */
  readonly name: string;
  /**
  * A boolean that, when set to `true`, ensures that the proposed password is not too similar to the user's current password based on the Levenshtein distance algorithm. The value of this parameter is evaluated only for password change actions in which the user enters both the current and the new password. By design, PingOne does not know the user's current password.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#not_similar_to_current PasswordPolicy#not_similar_to_current}
  */
  readonly notSimilarToCurrent?: boolean | cdktf.IResolvable;
  /**
  * An integer that specifies the maximum number of days the same password can be used before it must be changed. The value must be a positive, non-zero integer.  The value must be greater than the sum of `min` (if set) + 21 (the expiration warning interval for passwords).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#password_age_max PasswordPolicy#password_age_max}
  */
  readonly passwordAgeMax?: number;
  /**
  * An integer that specifies the minimum number of days a password must be used before changing. The value must be a positive, non-zero integer. This property is not enforced when not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#password_age_min PasswordPolicy#password_age_min}
  */
  readonly passwordAgeMin?: number;
}
export interface PasswordPolicyHistory {
  /**
  * An integer that specifies the number of prior passwords to keep for prevention of password re-use. The value must be a positive, non-zero integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#count PasswordPolicy#count}
  */
  readonly count: number;
  /**
  * An integer that specifies the length of time to keep recent passwords for prevention of password re-use. The value must be a positive, non-zero integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#retention_days PasswordPolicy#retention_days}
  */
  readonly retentionDays: number;
}

export function passwordPolicyHistoryToTerraform(struct?: PasswordPolicyHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function passwordPolicyHistoryToHclTerraform(struct?: PasswordPolicyHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PasswordPolicyHistoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PasswordPolicyHistory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyHistory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._retentionDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._retentionDays = value.retentionDays;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // retention_days - computed: false, optional: false, required: true
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface PasswordPolicyLength {
  /**
  * An integer that specifies the maximum number of characters allowed for the password. This property is not enforced when not present.  Defaults to `255`.  Fixed value of `255`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#max PasswordPolicy#max}
  */
  readonly max?: number;
  /**
  * An integer that specifies the minimum number of characters required for the password. This can be from `8` to `32` (inclusive). This property is not enforced when not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#min PasswordPolicy#min}
  */
  readonly min: number;
}

export function passwordPolicyLengthToTerraform(struct?: PasswordPolicyLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function passwordPolicyLengthToHclTerraform(struct?: PasswordPolicyLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PasswordPolicyLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PasswordPolicyLength | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyLength | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface PasswordPolicyLockout {
  /**
  * An integer that specifies the length of time before a password is automatically moved out of the lock out state. The value must be a positive, non-zero integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#duration_seconds PasswordPolicy#duration_seconds}
  */
  readonly durationSeconds: number;
  /**
  * An integer that specifies the number of tries before a password is placed in the lockout state. The value must be a positive, non-zero integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#failure_count PasswordPolicy#failure_count}
  */
  readonly failureCount: number;
}

export function passwordPolicyLockoutToTerraform(struct?: PasswordPolicyLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    failure_count: cdktf.numberToTerraform(struct!.failureCount),
  }
}


export function passwordPolicyLockoutToHclTerraform(struct?: PasswordPolicyLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_count: {
      value: cdktf.numberToHclTerraform(struct!.failureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PasswordPolicyLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PasswordPolicyLockout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._failureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCount = this._failureCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyLockout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationSeconds = undefined;
      this._failureCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationSeconds = value.durationSeconds;
      this._failureCount = value.failureCount;
    }
  }

  // duration_seconds - computed: false, optional: false, required: true
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // failure_count - computed: false, optional: false, required: true
  private _failureCount?: number; 
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }
  public set failureCount(value: number) {
    this._failureCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountInput() {
    return this._failureCount;
  }
}
export interface PasswordPolicyMinCharacters {
  /**
  * An integer that specifies the count of alphabetical uppercase characters (`abcdefghijklmnopqrstuvwxyz`) that should feature in the user's password. Setting to `0` will remove the requirement. The default of `1` will be removed in the next major release.  Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#alphabetical_lowercase PasswordPolicy#alphabetical_lowercase}
  */
  readonly alphabeticalLowercase?: number;
  /**
  * An integer that specifies the count of alphabetical uppercase characters (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`) that should feature in the user's password. Setting to `0` will remove the requirement. The default of `1` will be removed in the next major release.  Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#alphabetical_uppercase PasswordPolicy#alphabetical_uppercase}
  */
  readonly alphabeticalUppercase?: number;
  /**
  * An integer that specifies the count of numeric characters (`0123456789`) that should feature in the user's password. Setting to `0` will remove the requirement. The default of `1` will be removed in the next major release.  Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#numeric PasswordPolicy#numeric}
  */
  readonly numeric?: number;
  /**
  * An integer that specifies the count of special characters (`~!@#$%^&*()-_=+[]{}\|;:,.<>/?`) that should feature in the user's password. Setting to `0` will remove the requirement. The default of `1` will be removed in the next major release.  Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#special_characters PasswordPolicy#special_characters}
  */
  readonly specialCharacters?: number;
}

export function passwordPolicyMinCharactersToTerraform(struct?: PasswordPolicyMinCharacters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alphabetical_lowercase: cdktf.numberToTerraform(struct!.alphabeticalLowercase),
    alphabetical_uppercase: cdktf.numberToTerraform(struct!.alphabeticalUppercase),
    numeric: cdktf.numberToTerraform(struct!.numeric),
    special_characters: cdktf.numberToTerraform(struct!.specialCharacters),
  }
}


export function passwordPolicyMinCharactersToHclTerraform(struct?: PasswordPolicyMinCharacters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alphabetical_lowercase: {
      value: cdktf.numberToHclTerraform(struct!.alphabeticalLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alphabetical_uppercase: {
      value: cdktf.numberToHclTerraform(struct!.alphabeticalUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    numeric: {
      value: cdktf.numberToHclTerraform(struct!.numeric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    special_characters: {
      value: cdktf.numberToHclTerraform(struct!.specialCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PasswordPolicyMinCharactersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PasswordPolicyMinCharacters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alphabeticalLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.alphabeticalLowercase = this._alphabeticalLowercase;
    }
    if (this._alphabeticalUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.alphabeticalUppercase = this._alphabeticalUppercase;
    }
    if (this._numeric !== undefined) {
      hasAnyValues = true;
      internalValueResult.numeric = this._numeric;
    }
    if (this._specialCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialCharacters = this._specialCharacters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PasswordPolicyMinCharacters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alphabeticalLowercase = undefined;
      this._alphabeticalUppercase = undefined;
      this._numeric = undefined;
      this._specialCharacters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alphabeticalLowercase = value.alphabeticalLowercase;
      this._alphabeticalUppercase = value.alphabeticalUppercase;
      this._numeric = value.numeric;
      this._specialCharacters = value.specialCharacters;
    }
  }

  // alphabetical_lowercase - computed: true, optional: true, required: false
  private _alphabeticalLowercase?: number; 
  public get alphabeticalLowercase() {
    return this.getNumberAttribute('alphabetical_lowercase');
  }
  public set alphabeticalLowercase(value: number) {
    this._alphabeticalLowercase = value;
  }
  public resetAlphabeticalLowercase() {
    this._alphabeticalLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alphabeticalLowercaseInput() {
    return this._alphabeticalLowercase;
  }

  // alphabetical_uppercase - computed: true, optional: true, required: false
  private _alphabeticalUppercase?: number; 
  public get alphabeticalUppercase() {
    return this.getNumberAttribute('alphabetical_uppercase');
  }
  public set alphabeticalUppercase(value: number) {
    this._alphabeticalUppercase = value;
  }
  public resetAlphabeticalUppercase() {
    this._alphabeticalUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alphabeticalUppercaseInput() {
    return this._alphabeticalUppercase;
  }

  // numeric - computed: true, optional: true, required: false
  private _numeric?: number; 
  public get numeric() {
    return this.getNumberAttribute('numeric');
  }
  public set numeric(value: number) {
    this._numeric = value;
  }
  public resetNumeric() {
    this._numeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericInput() {
    return this._numeric;
  }

  // special_characters - computed: true, optional: true, required: false
  private _specialCharacters?: number; 
  public get specialCharacters() {
    return this.getNumberAttribute('special_characters');
  }
  public set specialCharacters(value: number) {
    this._specialCharacters = value;
  }
  public resetSpecialCharacters() {
    this._specialCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialCharactersInput() {
    return this._specialCharacters;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy pingone_password_policy}
*/
export class PasswordPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PasswordPolicy to import
  * @param importFromId The id of the existing PasswordPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PasswordPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/password_policy pingone_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PasswordPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PasswordPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_password_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._excludesCommonlyUsedPasswords = config.excludesCommonlyUsedPasswords;
    this._excludesProfileData = config.excludesProfileData;
    this._history.internalValue = config.history;
    this._length.internalValue = config.length;
    this._lockout.internalValue = config.lockout;
    this._maxRepeatedCharacters = config.maxRepeatedCharacters;
    this._minCharacters.internalValue = config.minCharacters;
    this._minComplexity = config.minComplexity;
    this._minUniqueCharacters = config.minUniqueCharacters;
    this._name = config.name;
    this._notSimilarToCurrent = config.notSimilarToCurrent;
    this._passwordAgeMax = config.passwordAgeMax;
    this._passwordAgeMin = config.passwordAgeMin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // excludes_commonly_used_passwords - computed: true, optional: true, required: false
  private _excludesCommonlyUsedPasswords?: boolean | cdktf.IResolvable; 
  public get excludesCommonlyUsedPasswords() {
    return this.getBooleanAttribute('excludes_commonly_used_passwords');
  }
  public set excludesCommonlyUsedPasswords(value: boolean | cdktf.IResolvable) {
    this._excludesCommonlyUsedPasswords = value;
  }
  public resetExcludesCommonlyUsedPasswords() {
    this._excludesCommonlyUsedPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesCommonlyUsedPasswordsInput() {
    return this._excludesCommonlyUsedPasswords;
  }

  // excludes_profile_data - computed: true, optional: true, required: false
  private _excludesProfileData?: boolean | cdktf.IResolvable; 
  public get excludesProfileData() {
    return this.getBooleanAttribute('excludes_profile_data');
  }
  public set excludesProfileData(value: boolean | cdktf.IResolvable) {
    this._excludesProfileData = value;
  }
  public resetExcludesProfileData() {
    this._excludesProfileData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesProfileDataInput() {
    return this._excludesProfileData;
  }

  // history - computed: false, optional: true, required: false
  private _history = new PasswordPolicyHistoryOutputReference(this, "history");
  public get history() {
    return this._history;
  }
  public putHistory(value: PasswordPolicyHistory) {
    this._history.internalValue = value;
  }
  public resetHistory() {
    this._history.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // length - computed: false, optional: true, required: false
  private _length = new PasswordPolicyLengthOutputReference(this, "length");
  public get length() {
    return this._length;
  }
  public putLength(value: PasswordPolicyLength) {
    this._length.internalValue = value;
  }
  public resetLength() {
    this._length.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length.internalValue;
  }

  // lockout - computed: false, optional: true, required: false
  private _lockout = new PasswordPolicyLockoutOutputReference(this, "lockout");
  public get lockout() {
    return this._lockout;
  }
  public putLockout(value: PasswordPolicyLockout) {
    this._lockout.internalValue = value;
  }
  public resetLockout() {
    this._lockout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout.internalValue;
  }

  // max_repeated_characters - computed: false, optional: true, required: false
  private _maxRepeatedCharacters?: number; 
  public get maxRepeatedCharacters() {
    return this.getNumberAttribute('max_repeated_characters');
  }
  public set maxRepeatedCharacters(value: number) {
    this._maxRepeatedCharacters = value;
  }
  public resetMaxRepeatedCharacters() {
    this._maxRepeatedCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRepeatedCharactersInput() {
    return this._maxRepeatedCharacters;
  }

  // min_characters - computed: false, optional: true, required: false
  private _minCharacters = new PasswordPolicyMinCharactersOutputReference(this, "min_characters");
  public get minCharacters() {
    return this._minCharacters;
  }
  public putMinCharacters(value: PasswordPolicyMinCharacters) {
    this._minCharacters.internalValue = value;
  }
  public resetMinCharacters() {
    this._minCharacters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCharactersInput() {
    return this._minCharacters.internalValue;
  }

  // min_complexity - computed: false, optional: true, required: false
  private _minComplexity?: number; 
  public get minComplexity() {
    return this.getNumberAttribute('min_complexity');
  }
  public set minComplexity(value: number) {
    this._minComplexity = value;
  }
  public resetMinComplexity() {
    this._minComplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minComplexityInput() {
    return this._minComplexity;
  }

  // min_unique_characters - computed: false, optional: true, required: false
  private _minUniqueCharacters?: number; 
  public get minUniqueCharacters() {
    return this.getNumberAttribute('min_unique_characters');
  }
  public set minUniqueCharacters(value: number) {
    this._minUniqueCharacters = value;
  }
  public resetMinUniqueCharacters() {
    this._minUniqueCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUniqueCharactersInput() {
    return this._minUniqueCharacters;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // not_similar_to_current - computed: true, optional: true, required: false
  private _notSimilarToCurrent?: boolean | cdktf.IResolvable; 
  public get notSimilarToCurrent() {
    return this.getBooleanAttribute('not_similar_to_current');
  }
  public set notSimilarToCurrent(value: boolean | cdktf.IResolvable) {
    this._notSimilarToCurrent = value;
  }
  public resetNotSimilarToCurrent() {
    this._notSimilarToCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSimilarToCurrentInput() {
    return this._notSimilarToCurrent;
  }

  // password_age_max - computed: false, optional: true, required: false
  private _passwordAgeMax?: number; 
  public get passwordAgeMax() {
    return this.getNumberAttribute('password_age_max');
  }
  public set passwordAgeMax(value: number) {
    this._passwordAgeMax = value;
  }
  public resetPasswordAgeMax() {
    this._passwordAgeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAgeMaxInput() {
    return this._passwordAgeMax;
  }

  // password_age_min - computed: false, optional: true, required: false
  private _passwordAgeMin?: number; 
  public get passwordAgeMin() {
    return this.getNumberAttribute('password_age_min');
  }
  public set passwordAgeMin(value: number) {
    this._passwordAgeMin = value;
  }
  public resetPasswordAgeMin() {
    this._passwordAgeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAgeMinInput() {
    return this._passwordAgeMin;
  }

  // population_count - computed: true, optional: false, required: false
  public get populationCount() {
    return this.getNumberAttribute('population_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      excludes_commonly_used_passwords: cdktf.booleanToTerraform(this._excludesCommonlyUsedPasswords),
      excludes_profile_data: cdktf.booleanToTerraform(this._excludesProfileData),
      history: passwordPolicyHistoryToTerraform(this._history.internalValue),
      length: passwordPolicyLengthToTerraform(this._length.internalValue),
      lockout: passwordPolicyLockoutToTerraform(this._lockout.internalValue),
      max_repeated_characters: cdktf.numberToTerraform(this._maxRepeatedCharacters),
      min_characters: passwordPolicyMinCharactersToTerraform(this._minCharacters.internalValue),
      min_complexity: cdktf.numberToTerraform(this._minComplexity),
      min_unique_characters: cdktf.numberToTerraform(this._minUniqueCharacters),
      name: cdktf.stringToTerraform(this._name),
      not_similar_to_current: cdktf.booleanToTerraform(this._notSimilarToCurrent),
      password_age_max: cdktf.numberToTerraform(this._passwordAgeMax),
      password_age_min: cdktf.numberToTerraform(this._passwordAgeMin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excludes_commonly_used_passwords: {
        value: cdktf.booleanToHclTerraform(this._excludesCommonlyUsedPasswords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excludes_profile_data: {
        value: cdktf.booleanToHclTerraform(this._excludesProfileData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      history: {
        value: passwordPolicyHistoryToHclTerraform(this._history.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PasswordPolicyHistory",
      },
      length: {
        value: passwordPolicyLengthToHclTerraform(this._length.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PasswordPolicyLength",
      },
      lockout: {
        value: passwordPolicyLockoutToHclTerraform(this._lockout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PasswordPolicyLockout",
      },
      max_repeated_characters: {
        value: cdktf.numberToHclTerraform(this._maxRepeatedCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_characters: {
        value: passwordPolicyMinCharactersToHclTerraform(this._minCharacters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PasswordPolicyMinCharacters",
      },
      min_complexity: {
        value: cdktf.numberToHclTerraform(this._minComplexity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_unique_characters: {
        value: cdktf.numberToHclTerraform(this._minUniqueCharacters),
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
      not_similar_to_current: {
        value: cdktf.booleanToHclTerraform(this._notSimilarToCurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_age_max: {
        value: cdktf.numberToHclTerraform(this._passwordAgeMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_age_min: {
        value: cdktf.numberToHclTerraform(this._passwordAgeMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
