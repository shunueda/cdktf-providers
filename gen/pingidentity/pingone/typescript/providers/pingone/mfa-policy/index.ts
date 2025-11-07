// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that defines the device selection method. Options are `DEFAULT_TO_FIRST` (this is the default setting for new environments), `PROMPT_TO_SELECT` and `ALWAYS_DISPLAY_DEVICES`. Defaults to `DEFAULT_TO_FIRST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#device_selection MfaPolicy#device_selection}
  */
  readonly deviceSelection?: string;
  /**
  * The ID of the environment to create the MFA device policy in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#environment_id MfaPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#id MfaPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A string that specifies the MFA policy's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#name MfaPolicy#name}
  */
  readonly name: string;
  /**
  * A string that defines whether a user should be notified if a new authentication method has been added to their account. Options are `NONE` (the default), `EMAIL_THEN_SMS` and `SMS_THEN_EMAIL`. Defaults to `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#new_device_notification MfaPolicy#new_device_notification}
  */
  readonly newDeviceNotification?: string;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#email MfaPolicy#email}
  */
  readonly email: MfaPolicyEmail;
  /**
  * fido2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#fido2 MfaPolicy#fido2}
  */
  readonly fido2?: MfaPolicyFido2;
  /**
  * mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#mobile MfaPolicy#mobile}
  */
  readonly mobile: MfaPolicyMobile;
  /**
  * platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#platform MfaPolicy#platform}
  */
  readonly platform?: MfaPolicyPlatform;
  /**
  * security_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#security_key MfaPolicy#security_key}
  */
  readonly securityKey?: MfaPolicySecurityKey;
  /**
  * sms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#sms MfaPolicy#sms}
  */
  readonly sms: MfaPolicySms;
  /**
  * totp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#totp MfaPolicy#totp}
  */
  readonly totp: MfaPolicyTotp;
  /**
  * voice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#voice MfaPolicy#voice}
  */
  readonly voice: MfaPolicyVoice;
}
export interface MfaPolicyEmail {
  /**
  * Enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#enabled MfaPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures. Note that when using the "onetime authentication" feature, the user is not blocked after the maximum number of failures even if you specified a block duration. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_duration MfaPolicy#otp_failure_cooldown_duration}
  */
  readonly otpFailureCooldownDuration?: number;
  /**
  * The type of time unit for `otp_failure_cooldown_duration`.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_timeunit MfaPolicy#otp_failure_cooldown_timeunit}
  */
  readonly otpFailureCooldownTimeunit?: string;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_count MfaPolicy#otp_failure_count}
  */
  readonly otpFailureCount?: number;
  /**
  * An integer that defines turation (number of time units) that the passcode is valid before it expires. Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_lifetime_duration MfaPolicy#otp_lifetime_duration}
  */
  readonly otpLifetimeDuration?: number;
  /**
  * The type of time unit for `otp_lifetime_duration`.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_lifetime_timeunit MfaPolicy#otp_lifetime_timeunit}
  */
  readonly otpLifetimeTimeunit?: string;
  /**
  * You can set this parameter to `true` to prevent users from pairing new devices with the relevant method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_disabled MfaPolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
}

export function mfaPolicyEmailToTerraform(struct?: MfaPolicyEmailOutputReference | MfaPolicyEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp_failure_cooldown_duration: cdktf.numberToTerraform(struct!.otpFailureCooldownDuration),
    otp_failure_cooldown_timeunit: cdktf.stringToTerraform(struct!.otpFailureCooldownTimeunit),
    otp_failure_count: cdktf.numberToTerraform(struct!.otpFailureCount),
    otp_lifetime_duration: cdktf.numberToTerraform(struct!.otpLifetimeDuration),
    otp_lifetime_timeunit: cdktf.stringToTerraform(struct!.otpLifetimeTimeunit),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
  }
}


export function mfaPolicyEmailToHclTerraform(struct?: MfaPolicyEmailOutputReference | MfaPolicyEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    otp_failure_cooldown_duration: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCooldownDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_failure_cooldown_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.otpFailureCooldownTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_failure_count: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_lifetime_duration: {
      value: cdktf.numberToHclTerraform(struct!.otpLifetimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_lifetime_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.otpLifetimeTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicyEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaPolicyEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otpFailureCooldownDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownDuration = this._otpFailureCooldownDuration;
    }
    if (this._otpFailureCooldownTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownTimeunit = this._otpFailureCooldownTimeunit;
    }
    if (this._otpFailureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCount = this._otpFailureCount;
    }
    if (this._otpLifetimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLifetimeDuration = this._otpLifetimeDuration;
    }
    if (this._otpLifetimeTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLifetimeTimeunit = this._otpLifetimeTimeunit;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicyEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._otpFailureCooldownDuration = undefined;
      this._otpFailureCooldownTimeunit = undefined;
      this._otpFailureCount = undefined;
      this._otpLifetimeDuration = undefined;
      this._otpLifetimeTimeunit = undefined;
      this._pairingDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._otpFailureCooldownDuration = value.otpFailureCooldownDuration;
      this._otpFailureCooldownTimeunit = value.otpFailureCooldownTimeunit;
      this._otpFailureCount = value.otpFailureCount;
      this._otpLifetimeDuration = value.otpLifetimeDuration;
      this._otpLifetimeTimeunit = value.otpLifetimeTimeunit;
      this._pairingDisabled = value.pairingDisabled;
    }
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

  // otp_failure_cooldown_duration - computed: false, optional: true, required: false
  private _otpFailureCooldownDuration?: number; 
  public get otpFailureCooldownDuration() {
    return this.getNumberAttribute('otp_failure_cooldown_duration');
  }
  public set otpFailureCooldownDuration(value: number) {
    this._otpFailureCooldownDuration = value;
  }
  public resetOtpFailureCooldownDuration() {
    this._otpFailureCooldownDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownDurationInput() {
    return this._otpFailureCooldownDuration;
  }

  // otp_failure_cooldown_timeunit - computed: false, optional: true, required: false
  private _otpFailureCooldownTimeunit?: string; 
  public get otpFailureCooldownTimeunit() {
    return this.getStringAttribute('otp_failure_cooldown_timeunit');
  }
  public set otpFailureCooldownTimeunit(value: string) {
    this._otpFailureCooldownTimeunit = value;
  }
  public resetOtpFailureCooldownTimeunit() {
    this._otpFailureCooldownTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownTimeunitInput() {
    return this._otpFailureCooldownTimeunit;
  }

  // otp_failure_count - computed: false, optional: true, required: false
  private _otpFailureCount?: number; 
  public get otpFailureCount() {
    return this.getNumberAttribute('otp_failure_count');
  }
  public set otpFailureCount(value: number) {
    this._otpFailureCount = value;
  }
  public resetOtpFailureCount() {
    this._otpFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCountInput() {
    return this._otpFailureCount;
  }

  // otp_lifetime_duration - computed: false, optional: true, required: false
  private _otpLifetimeDuration?: number; 
  public get otpLifetimeDuration() {
    return this.getNumberAttribute('otp_lifetime_duration');
  }
  public set otpLifetimeDuration(value: number) {
    this._otpLifetimeDuration = value;
  }
  public resetOtpLifetimeDuration() {
    this._otpLifetimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLifetimeDurationInput() {
    return this._otpLifetimeDuration;
  }

  // otp_lifetime_timeunit - computed: false, optional: true, required: false
  private _otpLifetimeTimeunit?: string; 
  public get otpLifetimeTimeunit() {
    return this.getStringAttribute('otp_lifetime_timeunit');
  }
  public set otpLifetimeTimeunit(value: string) {
    this._otpLifetimeTimeunit = value;
  }
  public resetOtpLifetimeTimeunit() {
    this._otpLifetimeTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLifetimeTimeunitInput() {
    return this._otpLifetimeTimeunit;
  }

  // pairing_disabled - computed: false, optional: true, required: false
  private _pairingDisabled?: boolean | cdktf.IResolvable; 
  public get pairingDisabled() {
    return this.getBooleanAttribute('pairing_disabled');
  }
  public set pairingDisabled(value: boolean | cdktf.IResolvable) {
    this._pairingDisabled = value;
  }
  public resetPairingDisabled() {
    this._pairingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingDisabledInput() {
    return this._pairingDisabled;
  }
}
export interface MfaPolicyFido2 {
  /**
  * Enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#enabled MfaPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the UUID that represents the FIDO2 policy in PingOne. This property can be null. When null, the environment's default FIDO2 Policy is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#fido2_policy_id MfaPolicy#fido2_policy_id}
  */
  readonly fido2PolicyId?: string;
  /**
  * You can set this parameter to `true` to prevent users from pairing new devices with the relevant method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_disabled MfaPolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
}

export function mfaPolicyFido2ToTerraform(struct?: MfaPolicyFido2OutputReference | MfaPolicyFido2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fido2_policy_id: cdktf.stringToTerraform(struct!.fido2PolicyId),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
  }
}


export function mfaPolicyFido2ToHclTerraform(struct?: MfaPolicyFido2OutputReference | MfaPolicyFido2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fido2_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.fido2PolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicyFido2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaPolicyFido2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fido2PolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fido2PolicyId = this._fido2PolicyId;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicyFido2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._fido2PolicyId = undefined;
      this._pairingDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._fido2PolicyId = value.fido2PolicyId;
      this._pairingDisabled = value.pairingDisabled;
    }
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

  // fido2_policy_id - computed: false, optional: true, required: false
  private _fido2PolicyId?: string; 
  public get fido2PolicyId() {
    return this.getStringAttribute('fido2_policy_id');
  }
  public set fido2PolicyId(value: string) {
    this._fido2PolicyId = value;
  }
  public resetFido2PolicyId() {
    this._fido2PolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fido2PolicyIdInput() {
    return this._fido2PolicyId;
  }

  // pairing_disabled - computed: false, optional: true, required: false
  private _pairingDisabled?: boolean | cdktf.IResolvable; 
  public get pairingDisabled() {
    return this.getBooleanAttribute('pairing_disabled');
  }
  public set pairingDisabled(value: boolean | cdktf.IResolvable) {
    this._pairingDisabled = value;
  }
  public resetPairingDisabled() {
    this._pairingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingDisabledInput() {
    return this._pairingDisabled;
  }
}
export interface MfaPolicyMobileApplication {
  /**
  * Set to `true` if you want the application to allow Auto Enrollment. Auto Enrollment means that the user can authenticate for the first time from an unpaired device, and the successful authentication will result in the pairing of the device for MFA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#auto_enrollment_enabled MfaPolicy#auto_enrollment_enabled}
  */
  readonly autoEnrollmentEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the enabled or disabled state of automatic MFA for native devices paired with the user, for the specified application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#device_authorization_enabled MfaPolicy#device_authorization_enabled}
  */
  readonly deviceAuthorizationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the level of further verification when `device_authorization_enabled` is true. The PingOne platform performs an extra verification check by sending a "silent" push notification to the customer native application, and receives a confirmation in return.  Extra verification can be one of the following levels: `permissive`: The PingOne platform performs the extra verification check. Upon timeout or failure to get a response from the native app, the MFA step is treated as successfully completed.  `restrictive`: The PingOne platform performs the extra verification check.The PingOne platform performs the extra verification check. Upon timeout or failure to get a response from the native app, the MFA step is treated as failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#device_authorization_extra_verification MfaPolicy#device_authorization_extra_verification}
  */
  readonly deviceAuthorizationExtraVerification?: string;
  /**
  * The mobile application's ID.  Mobile applications are configured with the `pingone_application` resource, as an OIDC `NATIVE` type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#id MfaPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Controls how authentication or registration attempts should proceed if a device integrity check does not receive a response. Set the value to `permissive` if you want to allow the process to continue. Set the value to `restrictive` if you want to block the user in such situations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#integrity_detection MfaPolicy#integrity_detection}
  */
  readonly integrityDetection?: string;
  /**
  * Specifies whether OTP authentication is enabled or disabled for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_enabled MfaPolicy#otp_enabled}
  */
  readonly otpEnabled: boolean | cdktf.IResolvable;
  /**
  * You can set this parameter to `true` to prevent users from pairing new devices with the relevant method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_disabled MfaPolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
  /**
  * The amount of time an issued pairing key can be used until it expires. Minimum is 1 minute and maximum is 48 hours. If this parameter is not provided, the duration is set to 10 minutes. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_key_lifetime_duration MfaPolicy#pairing_key_lifetime_duration}
  */
  readonly pairingKeyLifetimeDuration?: number;
  /**
  * The time unit for the `pairing_key_lifetime_duration` parameter.  Options are `HOURS` or `MINUTES`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_key_lifetime_timeunit MfaPolicy#pairing_key_lifetime_timeunit}
  */
  readonly pairingKeyLifetimeTimeunit?: string;
  /**
  * Specifies whether push notification is enabled or disabled for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#push_enabled MfaPolicy#push_enabled}
  */
  readonly pushEnabled: boolean | cdktf.IResolvable;
  /**
  * The number of consecutive push notifications that can be ignored or rejected by a user within a defined period before push notifications are blocked for the application. The minimum value is 1 and the maximum value is 50. If this parameter is not provided, the default value is 5. Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#push_limit_count MfaPolicy#push_limit_count}
  */
  readonly pushLimitCount?: number;
  /**
  * The length of time that push notifications should be blocked for the application if the defined limit has been reached. The minimum value is 1 minute and the maximum value is 120 minutes. If this parameter is not provided, the default value is 30 minutes. Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#push_limit_lock_duration MfaPolicy#push_limit_lock_duration}
  */
  readonly pushLimitLockDuration?: number;
  /**
  * The time unit for the `push_limit_lock_duration` parameter.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#push_limit_lock_duration_timeunit MfaPolicy#push_limit_lock_duration_timeunit}
  */
  readonly pushLimitLockDurationTimeunit?: string;
  /**
  * The time period in which the push notifications are counted towards the defined limit. The minimum value is 1 minute and the maximum value is 120 minutes. If this parameter is not provided, the default value is 10 minutes. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#push_limit_time_period_duration MfaPolicy#push_limit_time_period_duration}
  */
  readonly pushLimitTimePeriodDuration?: number;
  /**
  * The time unit for the `push_limit_time_period_duration` parameter.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#push_limit_time_period_timeunit MfaPolicy#push_limit_time_period_timeunit}
  */
  readonly pushLimitTimePeriodTimeunit?: string;
  /**
  * An integer that defines the amount of time (in seconds) a user has to respond to a push notification before it expires. Minimum is 40 seconds and maximum is 150 seconds. If this parameter is not provided, the duration is set to 40 seconds. Defaults to `40`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#push_timeout_duration MfaPolicy#push_timeout_duration}
  */
  readonly pushTimeoutDuration?: number;
}

export function mfaPolicyMobileApplicationToTerraform(struct?: MfaPolicyMobileApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_enrollment_enabled: cdktf.booleanToTerraform(struct!.autoEnrollmentEnabled),
    device_authorization_enabled: cdktf.booleanToTerraform(struct!.deviceAuthorizationEnabled),
    device_authorization_extra_verification: cdktf.stringToTerraform(struct!.deviceAuthorizationExtraVerification),
    id: cdktf.stringToTerraform(struct!.id),
    integrity_detection: cdktf.stringToTerraform(struct!.integrityDetection),
    otp_enabled: cdktf.booleanToTerraform(struct!.otpEnabled),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
    pairing_key_lifetime_duration: cdktf.numberToTerraform(struct!.pairingKeyLifetimeDuration),
    pairing_key_lifetime_timeunit: cdktf.stringToTerraform(struct!.pairingKeyLifetimeTimeunit),
    push_enabled: cdktf.booleanToTerraform(struct!.pushEnabled),
    push_limit_count: cdktf.numberToTerraform(struct!.pushLimitCount),
    push_limit_lock_duration: cdktf.numberToTerraform(struct!.pushLimitLockDuration),
    push_limit_lock_duration_timeunit: cdktf.stringToTerraform(struct!.pushLimitLockDurationTimeunit),
    push_limit_time_period_duration: cdktf.numberToTerraform(struct!.pushLimitTimePeriodDuration),
    push_limit_time_period_timeunit: cdktf.stringToTerraform(struct!.pushLimitTimePeriodTimeunit),
    push_timeout_duration: cdktf.numberToTerraform(struct!.pushTimeoutDuration),
  }
}


export function mfaPolicyMobileApplicationToHclTerraform(struct?: MfaPolicyMobileApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_enrollment_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoEnrollmentEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_authorization_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.deviceAuthorizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_authorization_extra_verification: {
      value: cdktf.stringToHclTerraform(struct!.deviceAuthorizationExtraVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integrity_detection: {
      value: cdktf.stringToHclTerraform(struct!.integrityDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.otpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pairing_key_lifetime_duration: {
      value: cdktf.numberToHclTerraform(struct!.pairingKeyLifetimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pairing_key_lifetime_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.pairingKeyLifetimeTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pushEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    push_limit_count: {
      value: cdktf.numberToHclTerraform(struct!.pushLimitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    push_limit_lock_duration: {
      value: cdktf.numberToHclTerraform(struct!.pushLimitLockDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    push_limit_lock_duration_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.pushLimitLockDurationTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_limit_time_period_duration: {
      value: cdktf.numberToHclTerraform(struct!.pushLimitTimePeriodDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    push_limit_time_period_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.pushLimitTimePeriodTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    push_timeout_duration: {
      value: cdktf.numberToHclTerraform(struct!.pushTimeoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicyMobileApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MfaPolicyMobileApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnrollmentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnrollmentEnabled = this._autoEnrollmentEnabled;
    }
    if (this._deviceAuthorizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceAuthorizationEnabled = this._deviceAuthorizationEnabled;
    }
    if (this._deviceAuthorizationExtraVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceAuthorizationExtraVerification = this._deviceAuthorizationExtraVerification;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._integrityDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrityDetection = this._integrityDetection;
    }
    if (this._otpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpEnabled = this._otpEnabled;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    if (this._pairingKeyLifetimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKeyLifetimeDuration = this._pairingKeyLifetimeDuration;
    }
    if (this._pairingKeyLifetimeTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKeyLifetimeTimeunit = this._pairingKeyLifetimeTimeunit;
    }
    if (this._pushEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushEnabled = this._pushEnabled;
    }
    if (this._pushLimitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushLimitCount = this._pushLimitCount;
    }
    if (this._pushLimitLockDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushLimitLockDuration = this._pushLimitLockDuration;
    }
    if (this._pushLimitLockDurationTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushLimitLockDurationTimeunit = this._pushLimitLockDurationTimeunit;
    }
    if (this._pushLimitTimePeriodDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushLimitTimePeriodDuration = this._pushLimitTimePeriodDuration;
    }
    if (this._pushLimitTimePeriodTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushLimitTimePeriodTimeunit = this._pushLimitTimePeriodTimeunit;
    }
    if (this._pushTimeoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushTimeoutDuration = this._pushTimeoutDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicyMobileApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoEnrollmentEnabled = undefined;
      this._deviceAuthorizationEnabled = undefined;
      this._deviceAuthorizationExtraVerification = undefined;
      this._id = undefined;
      this._integrityDetection = undefined;
      this._otpEnabled = undefined;
      this._pairingDisabled = undefined;
      this._pairingKeyLifetimeDuration = undefined;
      this._pairingKeyLifetimeTimeunit = undefined;
      this._pushEnabled = undefined;
      this._pushLimitCount = undefined;
      this._pushLimitLockDuration = undefined;
      this._pushLimitLockDurationTimeunit = undefined;
      this._pushLimitTimePeriodDuration = undefined;
      this._pushLimitTimePeriodTimeunit = undefined;
      this._pushTimeoutDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoEnrollmentEnabled = value.autoEnrollmentEnabled;
      this._deviceAuthorizationEnabled = value.deviceAuthorizationEnabled;
      this._deviceAuthorizationExtraVerification = value.deviceAuthorizationExtraVerification;
      this._id = value.id;
      this._integrityDetection = value.integrityDetection;
      this._otpEnabled = value.otpEnabled;
      this._pairingDisabled = value.pairingDisabled;
      this._pairingKeyLifetimeDuration = value.pairingKeyLifetimeDuration;
      this._pairingKeyLifetimeTimeunit = value.pairingKeyLifetimeTimeunit;
      this._pushEnabled = value.pushEnabled;
      this._pushLimitCount = value.pushLimitCount;
      this._pushLimitLockDuration = value.pushLimitLockDuration;
      this._pushLimitLockDurationTimeunit = value.pushLimitLockDurationTimeunit;
      this._pushLimitTimePeriodDuration = value.pushLimitTimePeriodDuration;
      this._pushLimitTimePeriodTimeunit = value.pushLimitTimePeriodTimeunit;
      this._pushTimeoutDuration = value.pushTimeoutDuration;
    }
  }

  // auto_enrollment_enabled - computed: false, optional: true, required: false
  private _autoEnrollmentEnabled?: boolean | cdktf.IResolvable; 
  public get autoEnrollmentEnabled() {
    return this.getBooleanAttribute('auto_enrollment_enabled');
  }
  public set autoEnrollmentEnabled(value: boolean | cdktf.IResolvable) {
    this._autoEnrollmentEnabled = value;
  }
  public resetAutoEnrollmentEnabled() {
    this._autoEnrollmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnrollmentEnabledInput() {
    return this._autoEnrollmentEnabled;
  }

  // device_authorization_enabled - computed: false, optional: true, required: false
  private _deviceAuthorizationEnabled?: boolean | cdktf.IResolvable; 
  public get deviceAuthorizationEnabled() {
    return this.getBooleanAttribute('device_authorization_enabled');
  }
  public set deviceAuthorizationEnabled(value: boolean | cdktf.IResolvable) {
    this._deviceAuthorizationEnabled = value;
  }
  public resetDeviceAuthorizationEnabled() {
    this._deviceAuthorizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAuthorizationEnabledInput() {
    return this._deviceAuthorizationEnabled;
  }

  // device_authorization_extra_verification - computed: false, optional: true, required: false
  private _deviceAuthorizationExtraVerification?: string; 
  public get deviceAuthorizationExtraVerification() {
    return this.getStringAttribute('device_authorization_extra_verification');
  }
  public set deviceAuthorizationExtraVerification(value: string) {
    this._deviceAuthorizationExtraVerification = value;
  }
  public resetDeviceAuthorizationExtraVerification() {
    this._deviceAuthorizationExtraVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAuthorizationExtraVerificationInput() {
    return this._deviceAuthorizationExtraVerification;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integrity_detection - computed: false, optional: true, required: false
  private _integrityDetection?: string; 
  public get integrityDetection() {
    return this.getStringAttribute('integrity_detection');
  }
  public set integrityDetection(value: string) {
    this._integrityDetection = value;
  }
  public resetIntegrityDetection() {
    this._integrityDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityDetectionInput() {
    return this._integrityDetection;
  }

  // otp_enabled - computed: false, optional: false, required: true
  private _otpEnabled?: boolean | cdktf.IResolvable; 
  public get otpEnabled() {
    return this.getBooleanAttribute('otp_enabled');
  }
  public set otpEnabled(value: boolean | cdktf.IResolvable) {
    this._otpEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get otpEnabledInput() {
    return this._otpEnabled;
  }

  // pairing_disabled - computed: false, optional: true, required: false
  private _pairingDisabled?: boolean | cdktf.IResolvable; 
  public get pairingDisabled() {
    return this.getBooleanAttribute('pairing_disabled');
  }
  public set pairingDisabled(value: boolean | cdktf.IResolvable) {
    this._pairingDisabled = value;
  }
  public resetPairingDisabled() {
    this._pairingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingDisabledInput() {
    return this._pairingDisabled;
  }

  // pairing_key_lifetime_duration - computed: false, optional: true, required: false
  private _pairingKeyLifetimeDuration?: number; 
  public get pairingKeyLifetimeDuration() {
    return this.getNumberAttribute('pairing_key_lifetime_duration');
  }
  public set pairingKeyLifetimeDuration(value: number) {
    this._pairingKeyLifetimeDuration = value;
  }
  public resetPairingKeyLifetimeDuration() {
    this._pairingKeyLifetimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyLifetimeDurationInput() {
    return this._pairingKeyLifetimeDuration;
  }

  // pairing_key_lifetime_timeunit - computed: false, optional: true, required: false
  private _pairingKeyLifetimeTimeunit?: string; 
  public get pairingKeyLifetimeTimeunit() {
    return this.getStringAttribute('pairing_key_lifetime_timeunit');
  }
  public set pairingKeyLifetimeTimeunit(value: string) {
    this._pairingKeyLifetimeTimeunit = value;
  }
  public resetPairingKeyLifetimeTimeunit() {
    this._pairingKeyLifetimeTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyLifetimeTimeunitInput() {
    return this._pairingKeyLifetimeTimeunit;
  }

  // push_enabled - computed: false, optional: false, required: true
  private _pushEnabled?: boolean | cdktf.IResolvable; 
  public get pushEnabled() {
    return this.getBooleanAttribute('push_enabled');
  }
  public set pushEnabled(value: boolean | cdktf.IResolvable) {
    this._pushEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEnabledInput() {
    return this._pushEnabled;
  }

  // push_limit_count - computed: false, optional: true, required: false
  private _pushLimitCount?: number; 
  public get pushLimitCount() {
    return this.getNumberAttribute('push_limit_count');
  }
  public set pushLimitCount(value: number) {
    this._pushLimitCount = value;
  }
  public resetPushLimitCount() {
    this._pushLimitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushLimitCountInput() {
    return this._pushLimitCount;
  }

  // push_limit_lock_duration - computed: false, optional: true, required: false
  private _pushLimitLockDuration?: number; 
  public get pushLimitLockDuration() {
    return this.getNumberAttribute('push_limit_lock_duration');
  }
  public set pushLimitLockDuration(value: number) {
    this._pushLimitLockDuration = value;
  }
  public resetPushLimitLockDuration() {
    this._pushLimitLockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushLimitLockDurationInput() {
    return this._pushLimitLockDuration;
  }

  // push_limit_lock_duration_timeunit - computed: false, optional: true, required: false
  private _pushLimitLockDurationTimeunit?: string; 
  public get pushLimitLockDurationTimeunit() {
    return this.getStringAttribute('push_limit_lock_duration_timeunit');
  }
  public set pushLimitLockDurationTimeunit(value: string) {
    this._pushLimitLockDurationTimeunit = value;
  }
  public resetPushLimitLockDurationTimeunit() {
    this._pushLimitLockDurationTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushLimitLockDurationTimeunitInput() {
    return this._pushLimitLockDurationTimeunit;
  }

  // push_limit_time_period_duration - computed: false, optional: true, required: false
  private _pushLimitTimePeriodDuration?: number; 
  public get pushLimitTimePeriodDuration() {
    return this.getNumberAttribute('push_limit_time_period_duration');
  }
  public set pushLimitTimePeriodDuration(value: number) {
    this._pushLimitTimePeriodDuration = value;
  }
  public resetPushLimitTimePeriodDuration() {
    this._pushLimitTimePeriodDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushLimitTimePeriodDurationInput() {
    return this._pushLimitTimePeriodDuration;
  }

  // push_limit_time_period_timeunit - computed: false, optional: true, required: false
  private _pushLimitTimePeriodTimeunit?: string; 
  public get pushLimitTimePeriodTimeunit() {
    return this.getStringAttribute('push_limit_time_period_timeunit');
  }
  public set pushLimitTimePeriodTimeunit(value: string) {
    this._pushLimitTimePeriodTimeunit = value;
  }
  public resetPushLimitTimePeriodTimeunit() {
    this._pushLimitTimePeriodTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushLimitTimePeriodTimeunitInput() {
    return this._pushLimitTimePeriodTimeunit;
  }

  // push_timeout_duration - computed: false, optional: true, required: false
  private _pushTimeoutDuration?: number; 
  public get pushTimeoutDuration() {
    return this.getNumberAttribute('push_timeout_duration');
  }
  public set pushTimeoutDuration(value: number) {
    this._pushTimeoutDuration = value;
  }
  public resetPushTimeoutDuration() {
    this._pushTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushTimeoutDurationInput() {
    return this._pushTimeoutDuration;
  }

  // push_timeout_timeunit - computed: true, optional: false, required: false
  public get pushTimeoutTimeunit() {
    return this.getStringAttribute('push_timeout_timeunit');
  }
}

export class MfaPolicyMobileApplicationList extends cdktf.ComplexList {
  public internalValue? : MfaPolicyMobileApplication[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MfaPolicyMobileApplicationOutputReference {
    return new MfaPolicyMobileApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MfaPolicyMobile {
  /**
  * Enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#enabled MfaPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures. Defaults to `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_duration MfaPolicy#otp_failure_cooldown_duration}
  */
  readonly otpFailureCooldownDuration?: number;
  /**
  * The type of time unit for `otp_failure_cooldown_duration`.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_timeunit MfaPolicy#otp_failure_cooldown_timeunit}
  */
  readonly otpFailureCooldownTimeunit?: string;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_count MfaPolicy#otp_failure_count}
  */
  readonly otpFailureCount?: number;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#application MfaPolicy#application}
  */
  readonly application?: MfaPolicyMobileApplication[] | cdktf.IResolvable;
}

export function mfaPolicyMobileToTerraform(struct?: MfaPolicyMobileOutputReference | MfaPolicyMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp_failure_cooldown_duration: cdktf.numberToTerraform(struct!.otpFailureCooldownDuration),
    otp_failure_cooldown_timeunit: cdktf.stringToTerraform(struct!.otpFailureCooldownTimeunit),
    otp_failure_count: cdktf.numberToTerraform(struct!.otpFailureCount),
    application: cdktf.listMapper(mfaPolicyMobileApplicationToTerraform, true)(struct!.application),
  }
}


export function mfaPolicyMobileToHclTerraform(struct?: MfaPolicyMobileOutputReference | MfaPolicyMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    otp_failure_cooldown_duration: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCooldownDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_failure_cooldown_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.otpFailureCooldownTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_failure_count: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application: {
      value: cdktf.listMapperHcl(mfaPolicyMobileApplicationToHclTerraform, true)(struct!.application),
      isBlock: true,
      type: "set",
      storageClassType: "MfaPolicyMobileApplicationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicyMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaPolicyMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otpFailureCooldownDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownDuration = this._otpFailureCooldownDuration;
    }
    if (this._otpFailureCooldownTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownTimeunit = this._otpFailureCooldownTimeunit;
    }
    if (this._otpFailureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCount = this._otpFailureCount;
    }
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicyMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._otpFailureCooldownDuration = undefined;
      this._otpFailureCooldownTimeunit = undefined;
      this._otpFailureCount = undefined;
      this._application.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._otpFailureCooldownDuration = value.otpFailureCooldownDuration;
      this._otpFailureCooldownTimeunit = value.otpFailureCooldownTimeunit;
      this._otpFailureCount = value.otpFailureCount;
      this._application.internalValue = value.application;
    }
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

  // otp_failure_cooldown_duration - computed: false, optional: true, required: false
  private _otpFailureCooldownDuration?: number; 
  public get otpFailureCooldownDuration() {
    return this.getNumberAttribute('otp_failure_cooldown_duration');
  }
  public set otpFailureCooldownDuration(value: number) {
    this._otpFailureCooldownDuration = value;
  }
  public resetOtpFailureCooldownDuration() {
    this._otpFailureCooldownDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownDurationInput() {
    return this._otpFailureCooldownDuration;
  }

  // otp_failure_cooldown_timeunit - computed: false, optional: true, required: false
  private _otpFailureCooldownTimeunit?: string; 
  public get otpFailureCooldownTimeunit() {
    return this.getStringAttribute('otp_failure_cooldown_timeunit');
  }
  public set otpFailureCooldownTimeunit(value: string) {
    this._otpFailureCooldownTimeunit = value;
  }
  public resetOtpFailureCooldownTimeunit() {
    this._otpFailureCooldownTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownTimeunitInput() {
    return this._otpFailureCooldownTimeunit;
  }

  // otp_failure_count - computed: false, optional: true, required: false
  private _otpFailureCount?: number; 
  public get otpFailureCount() {
    return this.getNumberAttribute('otp_failure_count');
  }
  public set otpFailureCount(value: number) {
    this._otpFailureCount = value;
  }
  public resetOtpFailureCount() {
    this._otpFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCountInput() {
    return this._otpFailureCount;
  }

  // application - computed: false, optional: true, required: false
  private _application = new MfaPolicyMobileApplicationList(this, "application", true);
  public get application() {
    return this._application;
  }
  public putApplication(value: MfaPolicyMobileApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }
}
export interface MfaPolicyPlatform {
  /**
  * Enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#enabled MfaPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the FIDO policy ID. This property can be null. When null, the environment's default FIDO Policy is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#fido_policy_id MfaPolicy#fido_policy_id}
  */
  readonly fidoPolicyId?: string;
  /**
  * You can set this parameter to `true` to prevent users from pairing new devices with the relevant method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_disabled MfaPolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
}

export function mfaPolicyPlatformToTerraform(struct?: MfaPolicyPlatformOutputReference | MfaPolicyPlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fido_policy_id: cdktf.stringToTerraform(struct!.fidoPolicyId),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
  }
}


export function mfaPolicyPlatformToHclTerraform(struct?: MfaPolicyPlatformOutputReference | MfaPolicyPlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fido_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.fidoPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicyPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaPolicyPlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fidoPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fidoPolicyId = this._fidoPolicyId;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicyPlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._fidoPolicyId = undefined;
      this._pairingDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._fidoPolicyId = value.fidoPolicyId;
      this._pairingDisabled = value.pairingDisabled;
    }
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

  // fido_policy_id - computed: false, optional: true, required: false
  private _fidoPolicyId?: string; 
  public get fidoPolicyId() {
    return this.getStringAttribute('fido_policy_id');
  }
  public set fidoPolicyId(value: string) {
    this._fidoPolicyId = value;
  }
  public resetFidoPolicyId() {
    this._fidoPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fidoPolicyIdInput() {
    return this._fidoPolicyId;
  }

  // pairing_disabled - computed: false, optional: true, required: false
  private _pairingDisabled?: boolean | cdktf.IResolvable; 
  public get pairingDisabled() {
    return this.getBooleanAttribute('pairing_disabled');
  }
  public set pairingDisabled(value: boolean | cdktf.IResolvable) {
    this._pairingDisabled = value;
  }
  public resetPairingDisabled() {
    this._pairingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingDisabledInput() {
    return this._pairingDisabled;
  }
}
export interface MfaPolicySecurityKey {
  /**
  * Enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#enabled MfaPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the FIDO policy ID. This property can be null. When null, the environment's default FIDO Policy is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#fido_policy_id MfaPolicy#fido_policy_id}
  */
  readonly fidoPolicyId?: string;
  /**
  * You can set this parameter to `true` to prevent users from pairing new devices with the relevant method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_disabled MfaPolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
}

export function mfaPolicySecurityKeyToTerraform(struct?: MfaPolicySecurityKeyOutputReference | MfaPolicySecurityKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fido_policy_id: cdktf.stringToTerraform(struct!.fidoPolicyId),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
  }
}


export function mfaPolicySecurityKeyToHclTerraform(struct?: MfaPolicySecurityKeyOutputReference | MfaPolicySecurityKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fido_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.fidoPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicySecurityKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaPolicySecurityKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fidoPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fidoPolicyId = this._fidoPolicyId;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicySecurityKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._fidoPolicyId = undefined;
      this._pairingDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._fidoPolicyId = value.fidoPolicyId;
      this._pairingDisabled = value.pairingDisabled;
    }
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

  // fido_policy_id - computed: false, optional: true, required: false
  private _fidoPolicyId?: string; 
  public get fidoPolicyId() {
    return this.getStringAttribute('fido_policy_id');
  }
  public set fidoPolicyId(value: string) {
    this._fidoPolicyId = value;
  }
  public resetFidoPolicyId() {
    this._fidoPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fidoPolicyIdInput() {
    return this._fidoPolicyId;
  }

  // pairing_disabled - computed: false, optional: true, required: false
  private _pairingDisabled?: boolean | cdktf.IResolvable; 
  public get pairingDisabled() {
    return this.getBooleanAttribute('pairing_disabled');
  }
  public set pairingDisabled(value: boolean | cdktf.IResolvable) {
    this._pairingDisabled = value;
  }
  public resetPairingDisabled() {
    this._pairingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingDisabledInput() {
    return this._pairingDisabled;
  }
}
export interface MfaPolicySms {
  /**
  * Enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#enabled MfaPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures. Note that when using the "onetime authentication" feature, the user is not blocked after the maximum number of failures even if you specified a block duration. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_duration MfaPolicy#otp_failure_cooldown_duration}
  */
  readonly otpFailureCooldownDuration?: number;
  /**
  * The type of time unit for `otp_failure_cooldown_duration`.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_timeunit MfaPolicy#otp_failure_cooldown_timeunit}
  */
  readonly otpFailureCooldownTimeunit?: string;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_count MfaPolicy#otp_failure_count}
  */
  readonly otpFailureCount?: number;
  /**
  * An integer that defines turation (number of time units) that the passcode is valid before it expires. Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_lifetime_duration MfaPolicy#otp_lifetime_duration}
  */
  readonly otpLifetimeDuration?: number;
  /**
  * The type of time unit for `otp_lifetime_duration`.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_lifetime_timeunit MfaPolicy#otp_lifetime_timeunit}
  */
  readonly otpLifetimeTimeunit?: string;
  /**
  * You can set this parameter to `true` to prevent users from pairing new devices with the relevant method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_disabled MfaPolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
}

export function mfaPolicySmsToTerraform(struct?: MfaPolicySmsOutputReference | MfaPolicySms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp_failure_cooldown_duration: cdktf.numberToTerraform(struct!.otpFailureCooldownDuration),
    otp_failure_cooldown_timeunit: cdktf.stringToTerraform(struct!.otpFailureCooldownTimeunit),
    otp_failure_count: cdktf.numberToTerraform(struct!.otpFailureCount),
    otp_lifetime_duration: cdktf.numberToTerraform(struct!.otpLifetimeDuration),
    otp_lifetime_timeunit: cdktf.stringToTerraform(struct!.otpLifetimeTimeunit),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
  }
}


export function mfaPolicySmsToHclTerraform(struct?: MfaPolicySmsOutputReference | MfaPolicySms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    otp_failure_cooldown_duration: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCooldownDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_failure_cooldown_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.otpFailureCooldownTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_failure_count: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_lifetime_duration: {
      value: cdktf.numberToHclTerraform(struct!.otpLifetimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_lifetime_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.otpLifetimeTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicySmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaPolicySms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otpFailureCooldownDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownDuration = this._otpFailureCooldownDuration;
    }
    if (this._otpFailureCooldownTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownTimeunit = this._otpFailureCooldownTimeunit;
    }
    if (this._otpFailureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCount = this._otpFailureCount;
    }
    if (this._otpLifetimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLifetimeDuration = this._otpLifetimeDuration;
    }
    if (this._otpLifetimeTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLifetimeTimeunit = this._otpLifetimeTimeunit;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicySms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._otpFailureCooldownDuration = undefined;
      this._otpFailureCooldownTimeunit = undefined;
      this._otpFailureCount = undefined;
      this._otpLifetimeDuration = undefined;
      this._otpLifetimeTimeunit = undefined;
      this._pairingDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._otpFailureCooldownDuration = value.otpFailureCooldownDuration;
      this._otpFailureCooldownTimeunit = value.otpFailureCooldownTimeunit;
      this._otpFailureCount = value.otpFailureCount;
      this._otpLifetimeDuration = value.otpLifetimeDuration;
      this._otpLifetimeTimeunit = value.otpLifetimeTimeunit;
      this._pairingDisabled = value.pairingDisabled;
    }
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

  // otp_failure_cooldown_duration - computed: false, optional: true, required: false
  private _otpFailureCooldownDuration?: number; 
  public get otpFailureCooldownDuration() {
    return this.getNumberAttribute('otp_failure_cooldown_duration');
  }
  public set otpFailureCooldownDuration(value: number) {
    this._otpFailureCooldownDuration = value;
  }
  public resetOtpFailureCooldownDuration() {
    this._otpFailureCooldownDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownDurationInput() {
    return this._otpFailureCooldownDuration;
  }

  // otp_failure_cooldown_timeunit - computed: false, optional: true, required: false
  private _otpFailureCooldownTimeunit?: string; 
  public get otpFailureCooldownTimeunit() {
    return this.getStringAttribute('otp_failure_cooldown_timeunit');
  }
  public set otpFailureCooldownTimeunit(value: string) {
    this._otpFailureCooldownTimeunit = value;
  }
  public resetOtpFailureCooldownTimeunit() {
    this._otpFailureCooldownTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownTimeunitInput() {
    return this._otpFailureCooldownTimeunit;
  }

  // otp_failure_count - computed: false, optional: true, required: false
  private _otpFailureCount?: number; 
  public get otpFailureCount() {
    return this.getNumberAttribute('otp_failure_count');
  }
  public set otpFailureCount(value: number) {
    this._otpFailureCount = value;
  }
  public resetOtpFailureCount() {
    this._otpFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCountInput() {
    return this._otpFailureCount;
  }

  // otp_lifetime_duration - computed: false, optional: true, required: false
  private _otpLifetimeDuration?: number; 
  public get otpLifetimeDuration() {
    return this.getNumberAttribute('otp_lifetime_duration');
  }
  public set otpLifetimeDuration(value: number) {
    this._otpLifetimeDuration = value;
  }
  public resetOtpLifetimeDuration() {
    this._otpLifetimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLifetimeDurationInput() {
    return this._otpLifetimeDuration;
  }

  // otp_lifetime_timeunit - computed: false, optional: true, required: false
  private _otpLifetimeTimeunit?: string; 
  public get otpLifetimeTimeunit() {
    return this.getStringAttribute('otp_lifetime_timeunit');
  }
  public set otpLifetimeTimeunit(value: string) {
    this._otpLifetimeTimeunit = value;
  }
  public resetOtpLifetimeTimeunit() {
    this._otpLifetimeTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLifetimeTimeunitInput() {
    return this._otpLifetimeTimeunit;
  }

  // pairing_disabled - computed: false, optional: true, required: false
  private _pairingDisabled?: boolean | cdktf.IResolvable; 
  public get pairingDisabled() {
    return this.getBooleanAttribute('pairing_disabled');
  }
  public set pairingDisabled(value: boolean | cdktf.IResolvable) {
    this._pairingDisabled = value;
  }
  public resetPairingDisabled() {
    this._pairingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingDisabledInput() {
    return this._pairingDisabled;
  }
}
export interface MfaPolicyTotp {
  /**
  * Enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#enabled MfaPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures. Defaults to `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_duration MfaPolicy#otp_failure_cooldown_duration}
  */
  readonly otpFailureCooldownDuration?: number;
  /**
  * The type of time unit for `otp_failure_cooldown_duration`.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_timeunit MfaPolicy#otp_failure_cooldown_timeunit}
  */
  readonly otpFailureCooldownTimeunit?: string;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_count MfaPolicy#otp_failure_count}
  */
  readonly otpFailureCount?: number;
  /**
  * You can set this parameter to `true` to prevent users from pairing new devices with the relevant method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_disabled MfaPolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
}

export function mfaPolicyTotpToTerraform(struct?: MfaPolicyTotpOutputReference | MfaPolicyTotp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp_failure_cooldown_duration: cdktf.numberToTerraform(struct!.otpFailureCooldownDuration),
    otp_failure_cooldown_timeunit: cdktf.stringToTerraform(struct!.otpFailureCooldownTimeunit),
    otp_failure_count: cdktf.numberToTerraform(struct!.otpFailureCount),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
  }
}


export function mfaPolicyTotpToHclTerraform(struct?: MfaPolicyTotpOutputReference | MfaPolicyTotp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    otp_failure_cooldown_duration: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCooldownDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_failure_cooldown_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.otpFailureCooldownTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_failure_count: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicyTotpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaPolicyTotp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otpFailureCooldownDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownDuration = this._otpFailureCooldownDuration;
    }
    if (this._otpFailureCooldownTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownTimeunit = this._otpFailureCooldownTimeunit;
    }
    if (this._otpFailureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCount = this._otpFailureCount;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicyTotp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._otpFailureCooldownDuration = undefined;
      this._otpFailureCooldownTimeunit = undefined;
      this._otpFailureCount = undefined;
      this._pairingDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._otpFailureCooldownDuration = value.otpFailureCooldownDuration;
      this._otpFailureCooldownTimeunit = value.otpFailureCooldownTimeunit;
      this._otpFailureCount = value.otpFailureCount;
      this._pairingDisabled = value.pairingDisabled;
    }
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

  // otp_failure_cooldown_duration - computed: false, optional: true, required: false
  private _otpFailureCooldownDuration?: number; 
  public get otpFailureCooldownDuration() {
    return this.getNumberAttribute('otp_failure_cooldown_duration');
  }
  public set otpFailureCooldownDuration(value: number) {
    this._otpFailureCooldownDuration = value;
  }
  public resetOtpFailureCooldownDuration() {
    this._otpFailureCooldownDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownDurationInput() {
    return this._otpFailureCooldownDuration;
  }

  // otp_failure_cooldown_timeunit - computed: false, optional: true, required: false
  private _otpFailureCooldownTimeunit?: string; 
  public get otpFailureCooldownTimeunit() {
    return this.getStringAttribute('otp_failure_cooldown_timeunit');
  }
  public set otpFailureCooldownTimeunit(value: string) {
    this._otpFailureCooldownTimeunit = value;
  }
  public resetOtpFailureCooldownTimeunit() {
    this._otpFailureCooldownTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownTimeunitInput() {
    return this._otpFailureCooldownTimeunit;
  }

  // otp_failure_count - computed: false, optional: true, required: false
  private _otpFailureCount?: number; 
  public get otpFailureCount() {
    return this.getNumberAttribute('otp_failure_count');
  }
  public set otpFailureCount(value: number) {
    this._otpFailureCount = value;
  }
  public resetOtpFailureCount() {
    this._otpFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCountInput() {
    return this._otpFailureCount;
  }

  // pairing_disabled - computed: false, optional: true, required: false
  private _pairingDisabled?: boolean | cdktf.IResolvable; 
  public get pairingDisabled() {
    return this.getBooleanAttribute('pairing_disabled');
  }
  public set pairingDisabled(value: boolean | cdktf.IResolvable) {
    this._pairingDisabled = value;
  }
  public resetPairingDisabled() {
    this._pairingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingDisabledInput() {
    return this._pairingDisabled;
  }
}
export interface MfaPolicyVoice {
  /**
  * Enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#enabled MfaPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures. Note that when using the "onetime authentication" feature, the user is not blocked after the maximum number of failures even if you specified a block duration. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_duration MfaPolicy#otp_failure_cooldown_duration}
  */
  readonly otpFailureCooldownDuration?: number;
  /**
  * The type of time unit for `otp_failure_cooldown_duration`.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_cooldown_timeunit MfaPolicy#otp_failure_cooldown_timeunit}
  */
  readonly otpFailureCooldownTimeunit?: string;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_failure_count MfaPolicy#otp_failure_count}
  */
  readonly otpFailureCount?: number;
  /**
  * An integer that defines turation (number of time units) that the passcode is valid before it expires. Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_lifetime_duration MfaPolicy#otp_lifetime_duration}
  */
  readonly otpLifetimeDuration?: number;
  /**
  * The type of time unit for `otp_lifetime_duration`.  Options are `MINUTES` or `SECONDS`. Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#otp_lifetime_timeunit MfaPolicy#otp_lifetime_timeunit}
  */
  readonly otpLifetimeTimeunit?: string;
  /**
  * You can set this parameter to `true` to prevent users from pairing new devices with the relevant method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#pairing_disabled MfaPolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
}

export function mfaPolicyVoiceToTerraform(struct?: MfaPolicyVoiceOutputReference | MfaPolicyVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp_failure_cooldown_duration: cdktf.numberToTerraform(struct!.otpFailureCooldownDuration),
    otp_failure_cooldown_timeunit: cdktf.stringToTerraform(struct!.otpFailureCooldownTimeunit),
    otp_failure_count: cdktf.numberToTerraform(struct!.otpFailureCount),
    otp_lifetime_duration: cdktf.numberToTerraform(struct!.otpLifetimeDuration),
    otp_lifetime_timeunit: cdktf.stringToTerraform(struct!.otpLifetimeTimeunit),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
  }
}


export function mfaPolicyVoiceToHclTerraform(struct?: MfaPolicyVoiceOutputReference | MfaPolicyVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    otp_failure_cooldown_duration: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCooldownDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_failure_cooldown_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.otpFailureCooldownTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_failure_count: {
      value: cdktf.numberToHclTerraform(struct!.otpFailureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_lifetime_duration: {
      value: cdktf.numberToHclTerraform(struct!.otpLifetimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    otp_lifetime_timeunit: {
      value: cdktf.stringToHclTerraform(struct!.otpLifetimeTimeunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaPolicyVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MfaPolicyVoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otpFailureCooldownDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownDuration = this._otpFailureCooldownDuration;
    }
    if (this._otpFailureCooldownTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCooldownTimeunit = this._otpFailureCooldownTimeunit;
    }
    if (this._otpFailureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpFailureCount = this._otpFailureCount;
    }
    if (this._otpLifetimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLifetimeDuration = this._otpLifetimeDuration;
    }
    if (this._otpLifetimeTimeunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLifetimeTimeunit = this._otpLifetimeTimeunit;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaPolicyVoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._otpFailureCooldownDuration = undefined;
      this._otpFailureCooldownTimeunit = undefined;
      this._otpFailureCount = undefined;
      this._otpLifetimeDuration = undefined;
      this._otpLifetimeTimeunit = undefined;
      this._pairingDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._otpFailureCooldownDuration = value.otpFailureCooldownDuration;
      this._otpFailureCooldownTimeunit = value.otpFailureCooldownTimeunit;
      this._otpFailureCount = value.otpFailureCount;
      this._otpLifetimeDuration = value.otpLifetimeDuration;
      this._otpLifetimeTimeunit = value.otpLifetimeTimeunit;
      this._pairingDisabled = value.pairingDisabled;
    }
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

  // otp_failure_cooldown_duration - computed: false, optional: true, required: false
  private _otpFailureCooldownDuration?: number; 
  public get otpFailureCooldownDuration() {
    return this.getNumberAttribute('otp_failure_cooldown_duration');
  }
  public set otpFailureCooldownDuration(value: number) {
    this._otpFailureCooldownDuration = value;
  }
  public resetOtpFailureCooldownDuration() {
    this._otpFailureCooldownDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownDurationInput() {
    return this._otpFailureCooldownDuration;
  }

  // otp_failure_cooldown_timeunit - computed: false, optional: true, required: false
  private _otpFailureCooldownTimeunit?: string; 
  public get otpFailureCooldownTimeunit() {
    return this.getStringAttribute('otp_failure_cooldown_timeunit');
  }
  public set otpFailureCooldownTimeunit(value: string) {
    this._otpFailureCooldownTimeunit = value;
  }
  public resetOtpFailureCooldownTimeunit() {
    this._otpFailureCooldownTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCooldownTimeunitInput() {
    return this._otpFailureCooldownTimeunit;
  }

  // otp_failure_count - computed: false, optional: true, required: false
  private _otpFailureCount?: number; 
  public get otpFailureCount() {
    return this.getNumberAttribute('otp_failure_count');
  }
  public set otpFailureCount(value: number) {
    this._otpFailureCount = value;
  }
  public resetOtpFailureCount() {
    this._otpFailureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpFailureCountInput() {
    return this._otpFailureCount;
  }

  // otp_lifetime_duration - computed: false, optional: true, required: false
  private _otpLifetimeDuration?: number; 
  public get otpLifetimeDuration() {
    return this.getNumberAttribute('otp_lifetime_duration');
  }
  public set otpLifetimeDuration(value: number) {
    this._otpLifetimeDuration = value;
  }
  public resetOtpLifetimeDuration() {
    this._otpLifetimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLifetimeDurationInput() {
    return this._otpLifetimeDuration;
  }

  // otp_lifetime_timeunit - computed: false, optional: true, required: false
  private _otpLifetimeTimeunit?: string; 
  public get otpLifetimeTimeunit() {
    return this.getStringAttribute('otp_lifetime_timeunit');
  }
  public set otpLifetimeTimeunit(value: string) {
    this._otpLifetimeTimeunit = value;
  }
  public resetOtpLifetimeTimeunit() {
    this._otpLifetimeTimeunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLifetimeTimeunitInput() {
    return this._otpLifetimeTimeunit;
  }

  // pairing_disabled - computed: false, optional: true, required: false
  private _pairingDisabled?: boolean | cdktf.IResolvable; 
  public get pairingDisabled() {
    return this.getBooleanAttribute('pairing_disabled');
  }
  public set pairingDisabled(value: boolean | cdktf.IResolvable) {
    this._pairingDisabled = value;
  }
  public resetPairingDisabled() {
    this._pairingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingDisabledInput() {
    return this._pairingDisabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy pingone_mfa_policy}
*/
export class MfaPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_mfa_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MfaPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MfaPolicy to import
  * @param importFromId The id of the existing MfaPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MfaPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_mfa_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_policy pingone_mfa_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MfaPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_mfa_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
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
    this._deviceSelection = config.deviceSelection;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._name = config.name;
    this._newDeviceNotification = config.newDeviceNotification;
    this._email.internalValue = config.email;
    this._fido2.internalValue = config.fido2;
    this._mobile.internalValue = config.mobile;
    this._platform.internalValue = config.platform;
    this._securityKey.internalValue = config.securityKey;
    this._sms.internalValue = config.sms;
    this._totp.internalValue = config.totp;
    this._voice.internalValue = config.voice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_selection - computed: false, optional: true, required: false
  private _deviceSelection?: string; 
  public get deviceSelection() {
    return this.getStringAttribute('device_selection');
  }
  public set deviceSelection(value: string) {
    this._deviceSelection = value;
  }
  public resetDeviceSelection() {
    this._deviceSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSelectionInput() {
    return this._deviceSelection;
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

  // new_device_notification - computed: false, optional: true, required: false
  private _newDeviceNotification?: string; 
  public get newDeviceNotification() {
    return this.getStringAttribute('new_device_notification');
  }
  public set newDeviceNotification(value: string) {
    this._newDeviceNotification = value;
  }
  public resetNewDeviceNotification() {
    this._newDeviceNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newDeviceNotificationInput() {
    return this._newDeviceNotification;
  }

  // email - computed: false, optional: false, required: true
  private _email = new MfaPolicyEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: MfaPolicyEmail) {
    this._email.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // fido2 - computed: false, optional: true, required: false
  private _fido2 = new MfaPolicyFido2OutputReference(this, "fido2");
  public get fido2() {
    return this._fido2;
  }
  public putFido2(value: MfaPolicyFido2) {
    this._fido2.internalValue = value;
  }
  public resetFido2() {
    this._fido2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fido2Input() {
    return this._fido2.internalValue;
  }

  // mobile - computed: false, optional: false, required: true
  private _mobile = new MfaPolicyMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }
  public putMobile(value: MfaPolicyMobile) {
    this._mobile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile.internalValue;
  }

  // platform - computed: false, optional: true, required: false
  private _platform = new MfaPolicyPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: MfaPolicyPlatform) {
    this._platform.internalValue = value;
  }
  public resetPlatform() {
    this._platform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // security_key - computed: false, optional: true, required: false
  private _securityKey = new MfaPolicySecurityKeyOutputReference(this, "security_key");
  public get securityKey() {
    return this._securityKey;
  }
  public putSecurityKey(value: MfaPolicySecurityKey) {
    this._securityKey.internalValue = value;
  }
  public resetSecurityKey() {
    this._securityKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityKeyInput() {
    return this._securityKey.internalValue;
  }

  // sms - computed: false, optional: false, required: true
  private _sms = new MfaPolicySmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: MfaPolicySms) {
    this._sms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // totp - computed: false, optional: false, required: true
  private _totp = new MfaPolicyTotpOutputReference(this, "totp");
  public get totp() {
    return this._totp;
  }
  public putTotp(value: MfaPolicyTotp) {
    this._totp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totpInput() {
    return this._totp.internalValue;
  }

  // voice - computed: false, optional: false, required: true
  private _voice = new MfaPolicyVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: MfaPolicyVoice) {
    this._voice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_selection: cdktf.stringToTerraform(this._deviceSelection),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      new_device_notification: cdktf.stringToTerraform(this._newDeviceNotification),
      email: mfaPolicyEmailToTerraform(this._email.internalValue),
      fido2: mfaPolicyFido2ToTerraform(this._fido2.internalValue),
      mobile: mfaPolicyMobileToTerraform(this._mobile.internalValue),
      platform: mfaPolicyPlatformToTerraform(this._platform.internalValue),
      security_key: mfaPolicySecurityKeyToTerraform(this._securityKey.internalValue),
      sms: mfaPolicySmsToTerraform(this._sms.internalValue),
      totp: mfaPolicyTotpToTerraform(this._totp.internalValue),
      voice: mfaPolicyVoiceToTerraform(this._voice.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_selection: {
        value: cdktf.stringToHclTerraform(this._deviceSelection),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_device_notification: {
        value: cdktf.stringToHclTerraform(this._newDeviceNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: mfaPolicyEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MfaPolicyEmailList",
      },
      fido2: {
        value: mfaPolicyFido2ToHclTerraform(this._fido2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MfaPolicyFido2List",
      },
      mobile: {
        value: mfaPolicyMobileToHclTerraform(this._mobile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MfaPolicyMobileList",
      },
      platform: {
        value: mfaPolicyPlatformToHclTerraform(this._platform.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MfaPolicyPlatformList",
      },
      security_key: {
        value: mfaPolicySecurityKeyToHclTerraform(this._securityKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MfaPolicySecurityKeyList",
      },
      sms: {
        value: mfaPolicySmsToHclTerraform(this._sms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MfaPolicySmsList",
      },
      totp: {
        value: mfaPolicyTotpToHclTerraform(this._totp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MfaPolicyTotpList",
      },
      voice: {
        value: mfaPolicyVoiceToHclTerraform(this._voice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MfaPolicyVoiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
