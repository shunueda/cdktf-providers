// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttackProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#id AttackProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * breached_password_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#breached_password_detection AttackProtection#breached_password_detection}
  */
  readonly breachedPasswordDetection?: AttackProtectionBreachedPasswordDetection;
  /**
  * brute_force_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#brute_force_protection AttackProtection#brute_force_protection}
  */
  readonly bruteForceProtection?: AttackProtectionBruteForceProtection;
  /**
  * suspicious_ip_throttling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#suspicious_ip_throttling AttackProtection#suspicious_ip_throttling}
  */
  readonly suspiciousIpThrottling?: AttackProtectionSuspiciousIpThrottling;
}
export interface AttackProtectionBreachedPasswordDetectionPreChangePassword {
  /**
  * Action to take when a breached password is detected before the password is changed. Possible values: `block` (block compromised credentials for new accounts), `admin_notification` (send an email notification with a summary of compromised credentials in new accounts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#shields AttackProtection#shields}
  */
  readonly shields?: string[];
}

export function attackProtectionBreachedPasswordDetectionPreChangePasswordToTerraform(struct?: AttackProtectionBreachedPasswordDetectionPreChangePasswordOutputReference | AttackProtectionBreachedPasswordDetectionPreChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shields),
  }
}


export function attackProtectionBreachedPasswordDetectionPreChangePasswordToHclTerraform(struct?: AttackProtectionBreachedPasswordDetectionPreChangePasswordOutputReference | AttackProtectionBreachedPasswordDetectionPreChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionBreachedPasswordDetectionPreChangePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionBreachedPasswordDetectionPreChangePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shields !== undefined) {
      hasAnyValues = true;
      internalValueResult.shields = this._shields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionBreachedPasswordDetectionPreChangePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shields = value.shields;
    }
  }

  // shields - computed: true, optional: true, required: false
  private _shields?: string[]; 
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
  public set shields(value: string[]) {
    this._shields = value;
  }
  public resetShields() {
    this._shields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldsInput() {
    return this._shields;
  }
}
export interface AttackProtectionBreachedPasswordDetectionPreUserRegistration {
  /**
  * Action to take when a breached password is detected during a signup. Possible values: `block` (block compromised credentials for new accounts), `admin_notification` (send an email notification with a summary of compromised credentials in new accounts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#shields AttackProtection#shields}
  */
  readonly shields?: string[];
}

export function attackProtectionBreachedPasswordDetectionPreUserRegistrationToTerraform(struct?: AttackProtectionBreachedPasswordDetectionPreUserRegistrationOutputReference | AttackProtectionBreachedPasswordDetectionPreUserRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shields),
  }
}


export function attackProtectionBreachedPasswordDetectionPreUserRegistrationToHclTerraform(struct?: AttackProtectionBreachedPasswordDetectionPreUserRegistrationOutputReference | AttackProtectionBreachedPasswordDetectionPreUserRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionBreachedPasswordDetectionPreUserRegistrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionBreachedPasswordDetectionPreUserRegistration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shields !== undefined) {
      hasAnyValues = true;
      internalValueResult.shields = this._shields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionBreachedPasswordDetectionPreUserRegistration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shields = value.shields;
    }
  }

  // shields - computed: true, optional: true, required: false
  private _shields?: string[]; 
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
  public set shields(value: string[]) {
    this._shields = value;
  }
  public resetShields() {
    this._shields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldsInput() {
    return this._shields;
  }
}
export interface AttackProtectionBreachedPasswordDetection {
  /**
  * When `admin_notification` is enabled within the `shields` property, determines how often email notifications are sent. Possible values: `immediately`, `daily`, `weekly`, `monthly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#admin_notification_frequency AttackProtection#admin_notification_frequency}
  */
  readonly adminNotificationFrequency?: string[];
  /**
  * Whether breached password detection is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#enabled AttackProtection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The subscription level for breached password detection methods. Use "enhanced" to enable Credential Guard. Possible values: `standard`, `enhanced`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#method AttackProtection#method}
  */
  readonly method?: string;
  /**
  * Action to take when a breached password is detected. Options include: `block` (block compromised user accounts), `user_notification` (send an email to user when we detect that they are using compromised credentials) and `admin_notification` (send an email with a summary of the number of accounts logging in with compromised credentials).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#shields AttackProtection#shields}
  */
  readonly shields?: string[];
  /**
  * pre_change_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#pre_change_password AttackProtection#pre_change_password}
  */
  readonly preChangePassword?: AttackProtectionBreachedPasswordDetectionPreChangePassword;
  /**
  * pre_user_registration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#pre_user_registration AttackProtection#pre_user_registration}
  */
  readonly preUserRegistration?: AttackProtectionBreachedPasswordDetectionPreUserRegistration;
}

export function attackProtectionBreachedPasswordDetectionToTerraform(struct?: AttackProtectionBreachedPasswordDetectionOutputReference | AttackProtectionBreachedPasswordDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_notification_frequency: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminNotificationFrequency),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    method: cdktf.stringToTerraform(struct!.method),
    shields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shields),
    pre_change_password: attackProtectionBreachedPasswordDetectionPreChangePasswordToTerraform(struct!.preChangePassword),
    pre_user_registration: attackProtectionBreachedPasswordDetectionPreUserRegistrationToTerraform(struct!.preUserRegistration),
  }
}


export function attackProtectionBreachedPasswordDetectionToHclTerraform(struct?: AttackProtectionBreachedPasswordDetectionOutputReference | AttackProtectionBreachedPasswordDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_notification_frequency: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminNotificationFrequency),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pre_change_password: {
      value: attackProtectionBreachedPasswordDetectionPreChangePasswordToHclTerraform(struct!.preChangePassword),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionBreachedPasswordDetectionPreChangePasswordList",
    },
    pre_user_registration: {
      value: attackProtectionBreachedPasswordDetectionPreUserRegistrationToHclTerraform(struct!.preUserRegistration),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionBreachedPasswordDetectionPreUserRegistrationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionBreachedPasswordDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionBreachedPasswordDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminNotificationFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminNotificationFrequency = this._adminNotificationFrequency;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._shields !== undefined) {
      hasAnyValues = true;
      internalValueResult.shields = this._shields;
    }
    if (this._preChangePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preChangePassword = this._preChangePassword?.internalValue;
    }
    if (this._preUserRegistration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preUserRegistration = this._preUserRegistration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionBreachedPasswordDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminNotificationFrequency = undefined;
      this._enabled = undefined;
      this._method = undefined;
      this._shields = undefined;
      this._preChangePassword.internalValue = undefined;
      this._preUserRegistration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminNotificationFrequency = value.adminNotificationFrequency;
      this._enabled = value.enabled;
      this._method = value.method;
      this._shields = value.shields;
      this._preChangePassword.internalValue = value.preChangePassword;
      this._preUserRegistration.internalValue = value.preUserRegistration;
    }
  }

  // admin_notification_frequency - computed: true, optional: true, required: false
  private _adminNotificationFrequency?: string[]; 
  public get adminNotificationFrequency() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_notification_frequency'));
  }
  public set adminNotificationFrequency(value: string[]) {
    this._adminNotificationFrequency = value;
  }
  public resetAdminNotificationFrequency() {
    this._adminNotificationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNotificationFrequencyInput() {
    return this._adminNotificationFrequency;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // shields - computed: true, optional: true, required: false
  private _shields?: string[]; 
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
  public set shields(value: string[]) {
    this._shields = value;
  }
  public resetShields() {
    this._shields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldsInput() {
    return this._shields;
  }

  // pre_change_password - computed: false, optional: true, required: false
  private _preChangePassword = new AttackProtectionBreachedPasswordDetectionPreChangePasswordOutputReference(this, "pre_change_password");
  public get preChangePassword() {
    return this._preChangePassword;
  }
  public putPreChangePassword(value: AttackProtectionBreachedPasswordDetectionPreChangePassword) {
    this._preChangePassword.internalValue = value;
  }
  public resetPreChangePassword() {
    this._preChangePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preChangePasswordInput() {
    return this._preChangePassword.internalValue;
  }

  // pre_user_registration - computed: false, optional: true, required: false
  private _preUserRegistration = new AttackProtectionBreachedPasswordDetectionPreUserRegistrationOutputReference(this, "pre_user_registration");
  public get preUserRegistration() {
    return this._preUserRegistration;
  }
  public putPreUserRegistration(value: AttackProtectionBreachedPasswordDetectionPreUserRegistration) {
    this._preUserRegistration.internalValue = value;
  }
  public resetPreUserRegistration() {
    this._preUserRegistration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preUserRegistrationInput() {
    return this._preUserRegistration.internalValue;
  }
}
export interface AttackProtectionBruteForceProtection {
  /**
  * List of trusted IP addresses that will not have attack protection enforced against them. This field allows you to specify multiple IP addresses, or ranges. You can use IPv4 or IPv6 addresses and CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#allowlist AttackProtection#allowlist}
  */
  readonly allowlist?: string[];
  /**
  * Whether brute force attack protections are active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#enabled AttackProtection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Maximum number of consecutive failed login attempts from a single user before blocking is triggered. Only available on public tenants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#max_attempts AttackProtection#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Determines whether the IP address is used when counting failed attempts. Possible values: `count_per_identifier_and_ip` (lockout an account from a given IP Address) or `count_per_identifier` (lockout an account regardless of IP Address).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#mode AttackProtection#mode}
  */
  readonly mode?: string;
  /**
  * Action to take when a brute force protection threshold is violated. Possible values: `block` (block login attempts for a flagged user account), `user_notification` (send an email to user when their account has been blocked).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#shields AttackProtection#shields}
  */
  readonly shields?: string[];
}

export function attackProtectionBruteForceProtectionToTerraform(struct?: AttackProtectionBruteForceProtectionOutputReference | AttackProtectionBruteForceProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlist),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    mode: cdktf.stringToTerraform(struct!.mode),
    shields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shields),
  }
}


export function attackProtectionBruteForceProtectionToHclTerraform(struct?: AttackProtectionBruteForceProtectionOutputReference | AttackProtectionBruteForceProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionBruteForceProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionBruteForceProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlist = this._allowlist;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._shields !== undefined) {
      hasAnyValues = true;
      internalValueResult.shields = this._shields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionBruteForceProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowlist = undefined;
      this._enabled = undefined;
      this._maxAttempts = undefined;
      this._mode = undefined;
      this._shields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowlist = value.allowlist;
      this._enabled = value.enabled;
      this._maxAttempts = value.maxAttempts;
      this._mode = value.mode;
      this._shields = value.shields;
    }
  }

  // allowlist - computed: true, optional: true, required: false
  private _allowlist?: string[]; 
  public get allowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlist'));
  }
  public set allowlist(value: string[]) {
    this._allowlist = value;
  }
  public resetAllowlist() {
    this._allowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_attempts - computed: true, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // shields - computed: true, optional: true, required: false
  private _shields?: string[]; 
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
  public set shields(value: string[]) {
    this._shields = value;
  }
  public resetShields() {
    this._shields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldsInput() {
    return this._shields;
  }
}
export interface AttackProtectionSuspiciousIpThrottlingPreLogin {
  /**
  * The maximum number of failed login attempts allowed from a single IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#max_attempts AttackProtection#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Interval of time, given in milliseconds at which new login tokens will become available after they have been used by an IP address. Each login attempt will be added on the defined throttling rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#rate AttackProtection#rate}
  */
  readonly rate?: number;
}

export function attackProtectionSuspiciousIpThrottlingPreLoginToTerraform(struct?: AttackProtectionSuspiciousIpThrottlingPreLoginOutputReference | AttackProtectionSuspiciousIpThrottlingPreLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function attackProtectionSuspiciousIpThrottlingPreLoginToHclTerraform(struct?: AttackProtectionSuspiciousIpThrottlingPreLoginOutputReference | AttackProtectionSuspiciousIpThrottlingPreLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionSuspiciousIpThrottlingPreLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionSuspiciousIpThrottlingPreLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionSuspiciousIpThrottlingPreLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._rate = value.rate;
    }
  }

  // max_attempts - computed: true, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // rate - computed: true, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface AttackProtectionSuspiciousIpThrottlingPreUserRegistration {
  /**
  * The maximum number of sign up attempts allowed from a single IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#max_attempts AttackProtection#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Interval of time, given in milliseconds at which new sign up tokens will become available after they have been used by an IP address. Each sign up attempt will be added on the defined throttling rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#rate AttackProtection#rate}
  */
  readonly rate?: number;
}

export function attackProtectionSuspiciousIpThrottlingPreUserRegistrationToTerraform(struct?: AttackProtectionSuspiciousIpThrottlingPreUserRegistrationOutputReference | AttackProtectionSuspiciousIpThrottlingPreUserRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function attackProtectionSuspiciousIpThrottlingPreUserRegistrationToHclTerraform(struct?: AttackProtectionSuspiciousIpThrottlingPreUserRegistrationOutputReference | AttackProtectionSuspiciousIpThrottlingPreUserRegistration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionSuspiciousIpThrottlingPreUserRegistrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionSuspiciousIpThrottlingPreUserRegistration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionSuspiciousIpThrottlingPreUserRegistration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._rate = value.rate;
    }
  }

  // max_attempts - computed: true, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // rate - computed: true, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface AttackProtectionSuspiciousIpThrottling {
  /**
  * List of trusted IP addresses that will not have attack protection enforced against them. This field allows you to specify multiple IP addresses, or ranges. You can use IPv4 or IPv6 addresses and CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#allowlist AttackProtection#allowlist}
  */
  readonly allowlist?: string[];
  /**
  * Whether suspicious IP throttling attack protections are active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#enabled AttackProtection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Action to take when a suspicious IP throttling threshold is violated. Possible values: `block` (throttle traffic from an IP address when there is a high number of login attempts targeting too many different accounts), `admin_notification` (send an email notification when traffic is throttled on one or more IP addresses due to high-velocity traffic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#shields AttackProtection#shields}
  */
  readonly shields?: string[];
  /**
  * pre_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#pre_login AttackProtection#pre_login}
  */
  readonly preLogin?: AttackProtectionSuspiciousIpThrottlingPreLogin;
  /**
  * pre_user_registration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#pre_user_registration AttackProtection#pre_user_registration}
  */
  readonly preUserRegistration?: AttackProtectionSuspiciousIpThrottlingPreUserRegistration;
}

export function attackProtectionSuspiciousIpThrottlingToTerraform(struct?: AttackProtectionSuspiciousIpThrottlingOutputReference | AttackProtectionSuspiciousIpThrottling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlist),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    shields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shields),
    pre_login: attackProtectionSuspiciousIpThrottlingPreLoginToTerraform(struct!.preLogin),
    pre_user_registration: attackProtectionSuspiciousIpThrottlingPreUserRegistrationToTerraform(struct!.preUserRegistration),
  }
}


export function attackProtectionSuspiciousIpThrottlingToHclTerraform(struct?: AttackProtectionSuspiciousIpThrottlingOutputReference | AttackProtectionSuspiciousIpThrottling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pre_login: {
      value: attackProtectionSuspiciousIpThrottlingPreLoginToHclTerraform(struct!.preLogin),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionSuspiciousIpThrottlingPreLoginList",
    },
    pre_user_registration: {
      value: attackProtectionSuspiciousIpThrottlingPreUserRegistrationToHclTerraform(struct!.preUserRegistration),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionSuspiciousIpThrottlingPreUserRegistrationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionSuspiciousIpThrottlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionSuspiciousIpThrottling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlist = this._allowlist;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._shields !== undefined) {
      hasAnyValues = true;
      internalValueResult.shields = this._shields;
    }
    if (this._preLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preLogin = this._preLogin?.internalValue;
    }
    if (this._preUserRegistration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preUserRegistration = this._preUserRegistration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionSuspiciousIpThrottling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowlist = undefined;
      this._enabled = undefined;
      this._shields = undefined;
      this._preLogin.internalValue = undefined;
      this._preUserRegistration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowlist = value.allowlist;
      this._enabled = value.enabled;
      this._shields = value.shields;
      this._preLogin.internalValue = value.preLogin;
      this._preUserRegistration.internalValue = value.preUserRegistration;
    }
  }

  // allowlist - computed: true, optional: true, required: false
  private _allowlist?: string[]; 
  public get allowlist() {
    return cdktf.Fn.tolist(this.getListAttribute('allowlist'));
  }
  public set allowlist(value: string[]) {
    this._allowlist = value;
  }
  public resetAllowlist() {
    this._allowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // shields - computed: true, optional: true, required: false
  private _shields?: string[]; 
  public get shields() {
    return cdktf.Fn.tolist(this.getListAttribute('shields'));
  }
  public set shields(value: string[]) {
    this._shields = value;
  }
  public resetShields() {
    this._shields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldsInput() {
    return this._shields;
  }

  // pre_login - computed: false, optional: true, required: false
  private _preLogin = new AttackProtectionSuspiciousIpThrottlingPreLoginOutputReference(this, "pre_login");
  public get preLogin() {
    return this._preLogin;
  }
  public putPreLogin(value: AttackProtectionSuspiciousIpThrottlingPreLogin) {
    this._preLogin.internalValue = value;
  }
  public resetPreLogin() {
    this._preLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLoginInput() {
    return this._preLogin.internalValue;
  }

  // pre_user_registration - computed: false, optional: true, required: false
  private _preUserRegistration = new AttackProtectionSuspiciousIpThrottlingPreUserRegistrationOutputReference(this, "pre_user_registration");
  public get preUserRegistration() {
    return this._preUserRegistration;
  }
  public putPreUserRegistration(value: AttackProtectionSuspiciousIpThrottlingPreUserRegistration) {
    this._preUserRegistration.internalValue = value;
  }
  public resetPreUserRegistration() {
    this._preUserRegistration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preUserRegistrationInput() {
    return this._preUserRegistration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection auth0_attack_protection}
*/
export class AttackProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_attack_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AttackProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AttackProtection to import
  * @param importFromId The id of the existing AttackProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttackProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_attack_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/attack_protection auth0_attack_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttackProtectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AttackProtectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_attack_protection',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
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
    this._breachedPasswordDetection.internalValue = config.breachedPasswordDetection;
    this._bruteForceProtection.internalValue = config.bruteForceProtection;
    this._suspiciousIpThrottling.internalValue = config.suspiciousIpThrottling;
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

  // breached_password_detection - computed: false, optional: true, required: false
  private _breachedPasswordDetection = new AttackProtectionBreachedPasswordDetectionOutputReference(this, "breached_password_detection");
  public get breachedPasswordDetection() {
    return this._breachedPasswordDetection;
  }
  public putBreachedPasswordDetection(value: AttackProtectionBreachedPasswordDetection) {
    this._breachedPasswordDetection.internalValue = value;
  }
  public resetBreachedPasswordDetection() {
    this._breachedPasswordDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breachedPasswordDetectionInput() {
    return this._breachedPasswordDetection.internalValue;
  }

  // brute_force_protection - computed: false, optional: true, required: false
  private _bruteForceProtection = new AttackProtectionBruteForceProtectionOutputReference(this, "brute_force_protection");
  public get bruteForceProtection() {
    return this._bruteForceProtection;
  }
  public putBruteForceProtection(value: AttackProtectionBruteForceProtection) {
    this._bruteForceProtection.internalValue = value;
  }
  public resetBruteForceProtection() {
    this._bruteForceProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceProtectionInput() {
    return this._bruteForceProtection.internalValue;
  }

  // suspicious_ip_throttling - computed: false, optional: true, required: false
  private _suspiciousIpThrottling = new AttackProtectionSuspiciousIpThrottlingOutputReference(this, "suspicious_ip_throttling");
  public get suspiciousIpThrottling() {
    return this._suspiciousIpThrottling;
  }
  public putSuspiciousIpThrottling(value: AttackProtectionSuspiciousIpThrottling) {
    this._suspiciousIpThrottling.internalValue = value;
  }
  public resetSuspiciousIpThrottling() {
    this._suspiciousIpThrottling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousIpThrottlingInput() {
    return this._suspiciousIpThrottling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      breached_password_detection: attackProtectionBreachedPasswordDetectionToTerraform(this._breachedPasswordDetection.internalValue),
      brute_force_protection: attackProtectionBruteForceProtectionToTerraform(this._bruteForceProtection.internalValue),
      suspicious_ip_throttling: attackProtectionSuspiciousIpThrottlingToTerraform(this._suspiciousIpThrottling.internalValue),
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
      breached_password_detection: {
        value: attackProtectionBreachedPasswordDetectionToHclTerraform(this._breachedPasswordDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackProtectionBreachedPasswordDetectionList",
      },
      brute_force_protection: {
        value: attackProtectionBruteForceProtectionToHclTerraform(this._bruteForceProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackProtectionBruteForceProtectionList",
      },
      suspicious_ip_throttling: {
        value: attackProtectionSuspiciousIpThrottlingToHclTerraform(this._suspiciousIpThrottling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackProtectionSuspiciousIpThrottlingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
