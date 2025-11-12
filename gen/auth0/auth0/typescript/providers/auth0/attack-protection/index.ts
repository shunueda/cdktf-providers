// https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttackProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#id AttackProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * bot_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#bot_detection AttackProtection#bot_detection}
  */
  readonly botDetection?: AttackProtectionBotDetection;
  /**
  * breached_password_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#breached_password_detection AttackProtection#breached_password_detection}
  */
  readonly breachedPasswordDetection?: AttackProtectionBreachedPasswordDetection;
  /**
  * brute_force_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#brute_force_protection AttackProtection#brute_force_protection}
  */
  readonly bruteForceProtection?: AttackProtectionBruteForceProtection;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#captcha AttackProtection#captcha}
  */
  readonly captcha?: AttackProtectionCaptcha;
  /**
  * suspicious_ip_throttling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#suspicious_ip_throttling AttackProtection#suspicious_ip_throttling}
  */
  readonly suspiciousIpThrottling?: AttackProtectionSuspiciousIpThrottling;
}
export interface AttackProtectionBotDetection {
  /**
  * List of IP addresses or ranges that will not trigger bot detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#allowlist AttackProtection#allowlist}
  */
  readonly allowlist?: string[];
  /**
  * Bot detection level. Possible values: `low`, `medium`, `high`. Set to empty string to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#bot_detection_level AttackProtection#bot_detection_level}
  */
  readonly botDetectionLevel?: string;
  /**
  * Challenge policy for password flow. Possible values: `never`, `when_risky`, `always`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#challenge_password_policy AttackProtection#challenge_password_policy}
  */
  readonly challengePasswordPolicy?: string;
  /**
  * Challenge policy for password reset flow. Possible values: `never`, `when_risky`, `always`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#challenge_password_reset_policy AttackProtection#challenge_password_reset_policy}
  */
  readonly challengePasswordResetPolicy?: string;
  /**
  * Challenge policy for passwordless flow. Possible values: `never`, `when_risky`, `always`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#challenge_passwordless_policy AttackProtection#challenge_passwordless_policy}
  */
  readonly challengePasswordlessPolicy?: string;
  /**
  * Whether monitoring mode is enabled for bot detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#monitoring_mode_enabled AttackProtection#monitoring_mode_enabled}
  */
  readonly monitoringModeEnabled?: boolean | cdktf.IResolvable;
}

export function attackProtectionBotDetectionToTerraform(struct?: AttackProtectionBotDetectionOutputReference | AttackProtectionBotDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlist),
    bot_detection_level: cdktf.stringToTerraform(struct!.botDetectionLevel),
    challenge_password_policy: cdktf.stringToTerraform(struct!.challengePasswordPolicy),
    challenge_password_reset_policy: cdktf.stringToTerraform(struct!.challengePasswordResetPolicy),
    challenge_passwordless_policy: cdktf.stringToTerraform(struct!.challengePasswordlessPolicy),
    monitoring_mode_enabled: cdktf.booleanToTerraform(struct!.monitoringModeEnabled),
  }
}


export function attackProtectionBotDetectionToHclTerraform(struct?: AttackProtectionBotDetectionOutputReference | AttackProtectionBotDetection): any {
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
    bot_detection_level: {
      value: cdktf.stringToHclTerraform(struct!.botDetectionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_password_policy: {
      value: cdktf.stringToHclTerraform(struct!.challengePasswordPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_password_reset_policy: {
      value: cdktf.stringToHclTerraform(struct!.challengePasswordResetPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_passwordless_policy: {
      value: cdktf.stringToHclTerraform(struct!.challengePasswordlessPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitoringModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionBotDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionBotDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlist = this._allowlist;
    }
    if (this._botDetectionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.botDetectionLevel = this._botDetectionLevel;
    }
    if (this._challengePasswordPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePasswordPolicy = this._challengePasswordPolicy;
    }
    if (this._challengePasswordResetPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePasswordResetPolicy = this._challengePasswordResetPolicy;
    }
    if (this._challengePasswordlessPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePasswordlessPolicy = this._challengePasswordlessPolicy;
    }
    if (this._monitoringModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringModeEnabled = this._monitoringModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionBotDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowlist = undefined;
      this._botDetectionLevel = undefined;
      this._challengePasswordPolicy = undefined;
      this._challengePasswordResetPolicy = undefined;
      this._challengePasswordlessPolicy = undefined;
      this._monitoringModeEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowlist = value.allowlist;
      this._botDetectionLevel = value.botDetectionLevel;
      this._challengePasswordPolicy = value.challengePasswordPolicy;
      this._challengePasswordResetPolicy = value.challengePasswordResetPolicy;
      this._challengePasswordlessPolicy = value.challengePasswordlessPolicy;
      this._monitoringModeEnabled = value.monitoringModeEnabled;
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

  // bot_detection_level - computed: true, optional: true, required: false
  private _botDetectionLevel?: string; 
  public get botDetectionLevel() {
    return this.getStringAttribute('bot_detection_level');
  }
  public set botDetectionLevel(value: string) {
    this._botDetectionLevel = value;
  }
  public resetBotDetectionLevel() {
    this._botDetectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionLevelInput() {
    return this._botDetectionLevel;
  }

  // challenge_password_policy - computed: true, optional: true, required: false
  private _challengePasswordPolicy?: string; 
  public get challengePasswordPolicy() {
    return this.getStringAttribute('challenge_password_policy');
  }
  public set challengePasswordPolicy(value: string) {
    this._challengePasswordPolicy = value;
  }
  public resetChallengePasswordPolicy() {
    this._challengePasswordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePasswordPolicyInput() {
    return this._challengePasswordPolicy;
  }

  // challenge_password_reset_policy - computed: true, optional: true, required: false
  private _challengePasswordResetPolicy?: string; 
  public get challengePasswordResetPolicy() {
    return this.getStringAttribute('challenge_password_reset_policy');
  }
  public set challengePasswordResetPolicy(value: string) {
    this._challengePasswordResetPolicy = value;
  }
  public resetChallengePasswordResetPolicy() {
    this._challengePasswordResetPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePasswordResetPolicyInput() {
    return this._challengePasswordResetPolicy;
  }

  // challenge_passwordless_policy - computed: true, optional: true, required: false
  private _challengePasswordlessPolicy?: string; 
  public get challengePasswordlessPolicy() {
    return this.getStringAttribute('challenge_passwordless_policy');
  }
  public set challengePasswordlessPolicy(value: string) {
    this._challengePasswordlessPolicy = value;
  }
  public resetChallengePasswordlessPolicy() {
    this._challengePasswordlessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePasswordlessPolicyInput() {
    return this._challengePasswordlessPolicy;
  }

  // monitoring_mode_enabled - computed: true, optional: true, required: false
  private _monitoringModeEnabled?: boolean | cdktf.IResolvable; 
  public get monitoringModeEnabled() {
    return this.getBooleanAttribute('monitoring_mode_enabled');
  }
  public set monitoringModeEnabled(value: boolean | cdktf.IResolvable) {
    this._monitoringModeEnabled = value;
  }
  public resetMonitoringModeEnabled() {
    this._monitoringModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringModeEnabledInput() {
    return this._monitoringModeEnabled;
  }
}
export interface AttackProtectionBreachedPasswordDetectionPreChangePassword {
  /**
  * Action to take when a breached password is detected before the password is changed. Possible values: `block` (block compromised credentials for new accounts), `admin_notification` (send an email notification with a summary of compromised credentials in new accounts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#shields AttackProtection#shields}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#shields AttackProtection#shields}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#admin_notification_frequency AttackProtection#admin_notification_frequency}
  */
  readonly adminNotificationFrequency?: string[];
  /**
  * Whether breached password detection is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#enabled AttackProtection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The subscription level for breached password detection methods. Use "enhanced" to enable Credential Guard. Possible values: `standard`, `enhanced`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#method AttackProtection#method}
  */
  readonly method?: string;
  /**
  * Action to take when a breached password is detected. Options include: `block` (block compromised user accounts), `user_notification` (send an email to user when we detect that they are using compromised credentials) and `admin_notification` (send an email with a summary of the number of accounts logging in with compromised credentials).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#shields AttackProtection#shields}
  */
  readonly shields?: string[];
  /**
  * pre_change_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#pre_change_password AttackProtection#pre_change_password}
  */
  readonly preChangePassword?: AttackProtectionBreachedPasswordDetectionPreChangePassword;
  /**
  * pre_user_registration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#pre_user_registration AttackProtection#pre_user_registration}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#allowlist AttackProtection#allowlist}
  */
  readonly allowlist?: string[];
  /**
  * Whether brute force attack protections are active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#enabled AttackProtection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Maximum number of consecutive failed login attempts from a single user before blocking is triggered. Only available on public tenants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#max_attempts AttackProtection#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Determines whether the IP address is used when counting failed attempts. Possible values: `count_per_identifier_and_ip` (lockout an account from a given IP Address) or `count_per_identifier` (lockout an account regardless of IP Address).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#mode AttackProtection#mode}
  */
  readonly mode?: string;
  /**
  * Action to take when a brute force protection threshold is violated. Possible values: `block` (block login attempts for a flagged user account), `user_notification` (send an email to user when their account has been blocked).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#shields AttackProtection#shields}
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
export interface AttackProtectionCaptchaArkose {
  /**
  * Client subdomain for Arkose Labs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#client_subdomain AttackProtection#client_subdomain}
  */
  readonly clientSubdomain?: string;
  /**
  * Whether the captcha should fail open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#fail_open AttackProtection#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * Secret for Arkose Labs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#secret AttackProtection#secret}
  */
  readonly secret: string;
  /**
  * Site key for Arkose Labs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#site_key AttackProtection#site_key}
  */
  readonly siteKey: string;
  /**
  * Verify subdomain for Arkose Labs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#verify_subdomain AttackProtection#verify_subdomain}
  */
  readonly verifySubdomain?: string;
}

export function attackProtectionCaptchaArkoseToTerraform(struct?: AttackProtectionCaptchaArkoseOutputReference | AttackProtectionCaptchaArkose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_subdomain: cdktf.stringToTerraform(struct!.clientSubdomain),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    secret: cdktf.stringToTerraform(struct!.secret),
    site_key: cdktf.stringToTerraform(struct!.siteKey),
    verify_subdomain: cdktf.stringToTerraform(struct!.verifySubdomain),
  }
}


export function attackProtectionCaptchaArkoseToHclTerraform(struct?: AttackProtectionCaptchaArkoseOutputReference | AttackProtectionCaptchaArkose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_subdomain: {
      value: cdktf.stringToHclTerraform(struct!.clientSubdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_key: {
      value: cdktf.stringToHclTerraform(struct!.siteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_subdomain: {
      value: cdktf.stringToHclTerraform(struct!.verifySubdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionCaptchaArkoseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionCaptchaArkose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubdomain = this._clientSubdomain;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._siteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKey = this._siteKey;
    }
    if (this._verifySubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySubdomain = this._verifySubdomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionCaptchaArkose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSubdomain = undefined;
      this._failOpen = undefined;
      this._secret = undefined;
      this._siteKey = undefined;
      this._verifySubdomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSubdomain = value.clientSubdomain;
      this._failOpen = value.failOpen;
      this._secret = value.secret;
      this._siteKey = value.siteKey;
      this._verifySubdomain = value.verifySubdomain;
    }
  }

  // client_subdomain - computed: true, optional: true, required: false
  private _clientSubdomain?: string; 
  public get clientSubdomain() {
    return this.getStringAttribute('client_subdomain');
  }
  public set clientSubdomain(value: string) {
    this._clientSubdomain = value;
  }
  public resetClientSubdomain() {
    this._clientSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubdomainInput() {
    return this._clientSubdomain;
  }

  // fail_open - computed: true, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }

  // verify_subdomain - computed: true, optional: true, required: false
  private _verifySubdomain?: string; 
  public get verifySubdomain() {
    return this.getStringAttribute('verify_subdomain');
  }
  public set verifySubdomain(value: string) {
    this._verifySubdomain = value;
  }
  public resetVerifySubdomain() {
    this._verifySubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySubdomainInput() {
    return this._verifySubdomain;
  }
}
export interface AttackProtectionCaptchaAuthChallenge {
  /**
  * Whether the auth challenge should fail open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#fail_open AttackProtection#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
}

export function attackProtectionCaptchaAuthChallengeToTerraform(struct?: AttackProtectionCaptchaAuthChallengeOutputReference | AttackProtectionCaptchaAuthChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
  }
}


export function attackProtectionCaptchaAuthChallengeToHclTerraform(struct?: AttackProtectionCaptchaAuthChallengeOutputReference | AttackProtectionCaptchaAuthChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionCaptchaAuthChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionCaptchaAuthChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionCaptchaAuthChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failOpen = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failOpen = value.failOpen;
    }
  }

  // fail_open - computed: true, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }
}
export interface AttackProtectionCaptchaFriendlyCaptcha {
  /**
  * Secret for Friendly Captcha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#secret AttackProtection#secret}
  */
  readonly secret: string;
  /**
  * Site key for Friendly Captcha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#site_key AttackProtection#site_key}
  */
  readonly siteKey: string;
}

export function attackProtectionCaptchaFriendlyCaptchaToTerraform(struct?: AttackProtectionCaptchaFriendlyCaptchaOutputReference | AttackProtectionCaptchaFriendlyCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    site_key: cdktf.stringToTerraform(struct!.siteKey),
  }
}


export function attackProtectionCaptchaFriendlyCaptchaToHclTerraform(struct?: AttackProtectionCaptchaFriendlyCaptchaOutputReference | AttackProtectionCaptchaFriendlyCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_key: {
      value: cdktf.stringToHclTerraform(struct!.siteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionCaptchaFriendlyCaptchaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionCaptchaFriendlyCaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._siteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKey = this._siteKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionCaptchaFriendlyCaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._siteKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._siteKey = value.siteKey;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }
}
export interface AttackProtectionCaptchaHcaptcha {
  /**
  * Secret for hCaptcha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#secret AttackProtection#secret}
  */
  readonly secret: string;
  /**
  * Site key for hCaptcha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#site_key AttackProtection#site_key}
  */
  readonly siteKey: string;
}

export function attackProtectionCaptchaHcaptchaToTerraform(struct?: AttackProtectionCaptchaHcaptchaOutputReference | AttackProtectionCaptchaHcaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    site_key: cdktf.stringToTerraform(struct!.siteKey),
  }
}


export function attackProtectionCaptchaHcaptchaToHclTerraform(struct?: AttackProtectionCaptchaHcaptchaOutputReference | AttackProtectionCaptchaHcaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_key: {
      value: cdktf.stringToHclTerraform(struct!.siteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionCaptchaHcaptchaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionCaptchaHcaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._siteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKey = this._siteKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionCaptchaHcaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._siteKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._siteKey = value.siteKey;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }
}
export interface AttackProtectionCaptchaRecaptchaEnterprise {
  /**
  * API key for reCAPTCHA Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#api_key AttackProtection#api_key}
  */
  readonly apiKey: string;
  /**
  * Project ID for reCAPTCHA Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#project_id AttackProtection#project_id}
  */
  readonly projectId: string;
  /**
  * Site key for reCAPTCHA Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#site_key AttackProtection#site_key}
  */
  readonly siteKey: string;
}

export function attackProtectionCaptchaRecaptchaEnterpriseToTerraform(struct?: AttackProtectionCaptchaRecaptchaEnterpriseOutputReference | AttackProtectionCaptchaRecaptchaEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    site_key: cdktf.stringToTerraform(struct!.siteKey),
  }
}


export function attackProtectionCaptchaRecaptchaEnterpriseToHclTerraform(struct?: AttackProtectionCaptchaRecaptchaEnterpriseOutputReference | AttackProtectionCaptchaRecaptchaEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_key: {
      value: cdktf.stringToHclTerraform(struct!.siteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionCaptchaRecaptchaEnterpriseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionCaptchaRecaptchaEnterprise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._siteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKey = this._siteKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionCaptchaRecaptchaEnterprise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._projectId = undefined;
      this._siteKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._projectId = value.projectId;
      this._siteKey = value.siteKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }
}
export interface AttackProtectionCaptchaRecaptchaV2 {
  /**
  * Secret for reCAPTCHA v2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#secret AttackProtection#secret}
  */
  readonly secret: string;
  /**
  * Site key for reCAPTCHA v2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#site_key AttackProtection#site_key}
  */
  readonly siteKey: string;
}

export function attackProtectionCaptchaRecaptchaV2ToTerraform(struct?: AttackProtectionCaptchaRecaptchaV2OutputReference | AttackProtectionCaptchaRecaptchaV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    site_key: cdktf.stringToTerraform(struct!.siteKey),
  }
}


export function attackProtectionCaptchaRecaptchaV2ToHclTerraform(struct?: AttackProtectionCaptchaRecaptchaV2OutputReference | AttackProtectionCaptchaRecaptchaV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_key: {
      value: cdktf.stringToHclTerraform(struct!.siteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionCaptchaRecaptchaV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionCaptchaRecaptchaV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._siteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKey = this._siteKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionCaptchaRecaptchaV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._siteKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._siteKey = value.siteKey;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }
}
export interface AttackProtectionCaptcha {
  /**
  * Active CAPTCHA provider ID. Set to empty string to disable CAPTCHA. Possible values: `recaptcha_v2`, `recaptcha_enterprise`, `hcaptcha`, `friendly_captcha`, `arkose`, `auth_challenge`, `simple_captcha`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#active_provider_id AttackProtection#active_provider_id}
  */
  readonly activeProviderId?: string;
  /**
  * arkose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#arkose AttackProtection#arkose}
  */
  readonly arkose?: AttackProtectionCaptchaArkose;
  /**
  * auth_challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#auth_challenge AttackProtection#auth_challenge}
  */
  readonly authChallenge?: AttackProtectionCaptchaAuthChallenge;
  /**
  * friendly_captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#friendly_captcha AttackProtection#friendly_captcha}
  */
  readonly friendlyCaptcha?: AttackProtectionCaptchaFriendlyCaptcha;
  /**
  * hcaptcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#hcaptcha AttackProtection#hcaptcha}
  */
  readonly hcaptcha?: AttackProtectionCaptchaHcaptcha;
  /**
  * recaptcha_enterprise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#recaptcha_enterprise AttackProtection#recaptcha_enterprise}
  */
  readonly recaptchaEnterprise?: AttackProtectionCaptchaRecaptchaEnterprise;
  /**
  * recaptcha_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#recaptcha_v2 AttackProtection#recaptcha_v2}
  */
  readonly recaptchaV2?: AttackProtectionCaptchaRecaptchaV2;
}

export function attackProtectionCaptchaToTerraform(struct?: AttackProtectionCaptchaOutputReference | AttackProtectionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_provider_id: cdktf.stringToTerraform(struct!.activeProviderId),
    arkose: attackProtectionCaptchaArkoseToTerraform(struct!.arkose),
    auth_challenge: attackProtectionCaptchaAuthChallengeToTerraform(struct!.authChallenge),
    friendly_captcha: attackProtectionCaptchaFriendlyCaptchaToTerraform(struct!.friendlyCaptcha),
    hcaptcha: attackProtectionCaptchaHcaptchaToTerraform(struct!.hcaptcha),
    recaptcha_enterprise: attackProtectionCaptchaRecaptchaEnterpriseToTerraform(struct!.recaptchaEnterprise),
    recaptcha_v2: attackProtectionCaptchaRecaptchaV2ToTerraform(struct!.recaptchaV2),
  }
}


export function attackProtectionCaptchaToHclTerraform(struct?: AttackProtectionCaptchaOutputReference | AttackProtectionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.activeProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arkose: {
      value: attackProtectionCaptchaArkoseToHclTerraform(struct!.arkose),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionCaptchaArkoseList",
    },
    auth_challenge: {
      value: attackProtectionCaptchaAuthChallengeToHclTerraform(struct!.authChallenge),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionCaptchaAuthChallengeList",
    },
    friendly_captcha: {
      value: attackProtectionCaptchaFriendlyCaptchaToHclTerraform(struct!.friendlyCaptcha),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionCaptchaFriendlyCaptchaList",
    },
    hcaptcha: {
      value: attackProtectionCaptchaHcaptchaToHclTerraform(struct!.hcaptcha),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionCaptchaHcaptchaList",
    },
    recaptcha_enterprise: {
      value: attackProtectionCaptchaRecaptchaEnterpriseToHclTerraform(struct!.recaptchaEnterprise),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionCaptchaRecaptchaEnterpriseList",
    },
    recaptcha_v2: {
      value: attackProtectionCaptchaRecaptchaV2ToHclTerraform(struct!.recaptchaV2),
      isBlock: true,
      type: "list",
      storageClassType: "AttackProtectionCaptchaRecaptchaV2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackProtectionCaptchaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackProtectionCaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeProviderId = this._activeProviderId;
    }
    if (this._arkose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arkose = this._arkose?.internalValue;
    }
    if (this._authChallenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authChallenge = this._authChallenge?.internalValue;
    }
    if (this._friendlyCaptcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyCaptcha = this._friendlyCaptcha?.internalValue;
    }
    if (this._hcaptcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hcaptcha = this._hcaptcha?.internalValue;
    }
    if (this._recaptchaEnterprise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaEnterprise = this._recaptchaEnterprise?.internalValue;
    }
    if (this._recaptchaV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaV2 = this._recaptchaV2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackProtectionCaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeProviderId = undefined;
      this._arkose.internalValue = undefined;
      this._authChallenge.internalValue = undefined;
      this._friendlyCaptcha.internalValue = undefined;
      this._hcaptcha.internalValue = undefined;
      this._recaptchaEnterprise.internalValue = undefined;
      this._recaptchaV2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeProviderId = value.activeProviderId;
      this._arkose.internalValue = value.arkose;
      this._authChallenge.internalValue = value.authChallenge;
      this._friendlyCaptcha.internalValue = value.friendlyCaptcha;
      this._hcaptcha.internalValue = value.hcaptcha;
      this._recaptchaEnterprise.internalValue = value.recaptchaEnterprise;
      this._recaptchaV2.internalValue = value.recaptchaV2;
    }
  }

  // active_provider_id - computed: true, optional: true, required: false
  private _activeProviderId?: string; 
  public get activeProviderId() {
    return this.getStringAttribute('active_provider_id');
  }
  public set activeProviderId(value: string) {
    this._activeProviderId = value;
  }
  public resetActiveProviderId() {
    this._activeProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeProviderIdInput() {
    return this._activeProviderId;
  }

  // arkose - computed: false, optional: true, required: false
  private _arkose = new AttackProtectionCaptchaArkoseOutputReference(this, "arkose");
  public get arkose() {
    return this._arkose;
  }
  public putArkose(value: AttackProtectionCaptchaArkose) {
    this._arkose.internalValue = value;
  }
  public resetArkose() {
    this._arkose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arkoseInput() {
    return this._arkose.internalValue;
  }

  // auth_challenge - computed: false, optional: true, required: false
  private _authChallenge = new AttackProtectionCaptchaAuthChallengeOutputReference(this, "auth_challenge");
  public get authChallenge() {
    return this._authChallenge;
  }
  public putAuthChallenge(value: AttackProtectionCaptchaAuthChallenge) {
    this._authChallenge.internalValue = value;
  }
  public resetAuthChallenge() {
    this._authChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authChallengeInput() {
    return this._authChallenge.internalValue;
  }

  // friendly_captcha - computed: false, optional: true, required: false
  private _friendlyCaptcha = new AttackProtectionCaptchaFriendlyCaptchaOutputReference(this, "friendly_captcha");
  public get friendlyCaptcha() {
    return this._friendlyCaptcha;
  }
  public putFriendlyCaptcha(value: AttackProtectionCaptchaFriendlyCaptcha) {
    this._friendlyCaptcha.internalValue = value;
  }
  public resetFriendlyCaptcha() {
    this._friendlyCaptcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyCaptchaInput() {
    return this._friendlyCaptcha.internalValue;
  }

  // hcaptcha - computed: false, optional: true, required: false
  private _hcaptcha = new AttackProtectionCaptchaHcaptchaOutputReference(this, "hcaptcha");
  public get hcaptcha() {
    return this._hcaptcha;
  }
  public putHcaptcha(value: AttackProtectionCaptchaHcaptcha) {
    this._hcaptcha.internalValue = value;
  }
  public resetHcaptcha() {
    this._hcaptcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcaptchaInput() {
    return this._hcaptcha.internalValue;
  }

  // recaptcha_enterprise - computed: false, optional: true, required: false
  private _recaptchaEnterprise = new AttackProtectionCaptchaRecaptchaEnterpriseOutputReference(this, "recaptcha_enterprise");
  public get recaptchaEnterprise() {
    return this._recaptchaEnterprise;
  }
  public putRecaptchaEnterprise(value: AttackProtectionCaptchaRecaptchaEnterprise) {
    this._recaptchaEnterprise.internalValue = value;
  }
  public resetRecaptchaEnterprise() {
    this._recaptchaEnterprise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaEnterpriseInput() {
    return this._recaptchaEnterprise.internalValue;
  }

  // recaptcha_v2 - computed: false, optional: true, required: false
  private _recaptchaV2 = new AttackProtectionCaptchaRecaptchaV2OutputReference(this, "recaptcha_v2");
  public get recaptchaV2() {
    return this._recaptchaV2;
  }
  public putRecaptchaV2(value: AttackProtectionCaptchaRecaptchaV2) {
    this._recaptchaV2.internalValue = value;
  }
  public resetRecaptchaV2() {
    this._recaptchaV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaV2Input() {
    return this._recaptchaV2.internalValue;
  }
}
export interface AttackProtectionSuspiciousIpThrottlingPreLogin {
  /**
  * The maximum number of failed login attempts allowed from a single IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#max_attempts AttackProtection#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Interval of time, given in milliseconds at which new login tokens will become available after they have been used by an IP address. Each login attempt will be added on the defined throttling rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#rate AttackProtection#rate}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#max_attempts AttackProtection#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Interval of time, given in milliseconds at which new sign up tokens will become available after they have been used by an IP address. Each sign up attempt will be added on the defined throttling rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#rate AttackProtection#rate}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#allowlist AttackProtection#allowlist}
  */
  readonly allowlist?: string[];
  /**
  * Whether suspicious IP throttling attack protections are active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#enabled AttackProtection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Action to take when a suspicious IP throttling threshold is violated. Possible values: `block` (throttle traffic from an IP address when there is a high number of login attempts targeting too many different accounts), `admin_notification` (send an email notification when traffic is throttled on one or more IP addresses due to high-velocity traffic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#shields AttackProtection#shields}
  */
  readonly shields?: string[];
  /**
  * pre_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#pre_login AttackProtection#pre_login}
  */
  readonly preLogin?: AttackProtectionSuspiciousIpThrottlingPreLogin;
  /**
  * pre_user_registration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#pre_user_registration AttackProtection#pre_user_registration}
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
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection auth0_attack_protection}
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
  * @param importFromId The id of the existing AttackProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttackProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_attack_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/resources/attack_protection auth0_attack_protection} Resource
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
        providerVersion: '1.34.0',
        providerVersionConstraint: '1.34.0'
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
    this._botDetection.internalValue = config.botDetection;
    this._breachedPasswordDetection.internalValue = config.breachedPasswordDetection;
    this._bruteForceProtection.internalValue = config.bruteForceProtection;
    this._captcha.internalValue = config.captcha;
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

  // bot_detection - computed: false, optional: true, required: false
  private _botDetection = new AttackProtectionBotDetectionOutputReference(this, "bot_detection");
  public get botDetection() {
    return this._botDetection;
  }
  public putBotDetection(value: AttackProtectionBotDetection) {
    this._botDetection.internalValue = value;
  }
  public resetBotDetection() {
    this._botDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionInput() {
    return this._botDetection.internalValue;
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

  // captcha - computed: false, optional: true, required: false
  private _captcha = new AttackProtectionCaptchaOutputReference(this, "captcha");
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: AttackProtectionCaptcha) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
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
      bot_detection: attackProtectionBotDetectionToTerraform(this._botDetection.internalValue),
      breached_password_detection: attackProtectionBreachedPasswordDetectionToTerraform(this._breachedPasswordDetection.internalValue),
      brute_force_protection: attackProtectionBruteForceProtectionToTerraform(this._bruteForceProtection.internalValue),
      captcha: attackProtectionCaptchaToTerraform(this._captcha.internalValue),
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
      bot_detection: {
        value: attackProtectionBotDetectionToHclTerraform(this._botDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackProtectionBotDetectionList",
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
      captcha: {
        value: attackProtectionCaptchaToHclTerraform(this._captcha.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackProtectionCaptchaList",
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
