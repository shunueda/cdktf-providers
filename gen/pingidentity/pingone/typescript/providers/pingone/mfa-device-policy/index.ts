// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaDevicePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object that allows configuration of authentication settings in the device policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#authentication MfaDevicePolicy#authentication}
  */
  readonly authentication?: MfaDevicePolicyAuthentication;
  /**
  * A single object that allows configuration of email OTP device authentication policy settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#email MfaDevicePolicy#email}
  */
  readonly email: MfaDevicePolicyEmail;
  /**
  * The ID of the environment that contains the MFA device policy to manage.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#environment_id MfaDevicePolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single object that allows configuration of FIDO2 device authentication policy settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#fido2 MfaDevicePolicy#fido2}
  */
  readonly fido2?: MfaDevicePolicyFido2;
  /**
  * A single object that allows configuration of mobile push/OTP device authentication policy settings.  This factor requires embedding the PingOne MFA SDK into a customer facing mobile application, and configuring as a Native application using the `pingone_application` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#mobile MfaDevicePolicy#mobile}
  */
  readonly mobile: MfaDevicePolicyMobile;
  /**
  * A string that specifies the MFA policy's unique name within the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#name MfaDevicePolicy#name}
  */
  readonly name: string;
  /**
  * A string that defines whether a user should be notified if a new authentication method has been added to their account.  Options are `EMAIL_THEN_SMS`, `NONE`, `SMS_THEN_EMAIL`.  Defaults to `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#new_device_notification MfaDevicePolicy#new_device_notification}
  */
  readonly newDeviceNotification?: string;
  /**
  * A single object that allows configuration of SMS OTP device authentication policy settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#sms MfaDevicePolicy#sms}
  */
  readonly sms: MfaDevicePolicySms;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#totp MfaDevicePolicy#totp}
  */
  readonly totp: MfaDevicePolicyTotp;
  /**
  * A single object that allows configuration of voice OTP device authentication policy settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#voice MfaDevicePolicy#voice}
  */
  readonly voice: MfaDevicePolicyVoice;
}
export interface MfaDevicePolicyAuthentication {
  /**
  * A string that defines the device selection method.  Options are `ALWAYS_DISPLAY_DEVICES`, `DEFAULT_TO_FIRST`, `PROMPT_TO_SELECT`.  Defaults to `DEFAULT_TO_FIRST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#device_selection MfaDevicePolicy#device_selection}
  */
  readonly deviceSelection?: string;
}

export function mfaDevicePolicyAuthenticationToTerraform(struct?: MfaDevicePolicyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_selection: cdktf.stringToTerraform(struct!.deviceSelection),
  }
}


export function mfaDevicePolicyAuthenticationToHclTerraform(struct?: MfaDevicePolicyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_selection: {
      value: cdktf.stringToHclTerraform(struct!.deviceSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSelection = this._deviceSelection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceSelection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceSelection = value.deviceSelection;
    }
  }

  // device_selection - computed: true, optional: true, required: false
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
}
export interface MfaDevicePolicyEmailOtpFailureCoolDown {
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyEmailOtpFailureCoolDownToTerraform(struct?: MfaDevicePolicyEmailOtpFailureCoolDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyEmailOtpFailureCoolDownToHclTerraform(struct?: MfaDevicePolicyEmailOtpFailureCoolDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyEmailOtpFailureCoolDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyEmailOtpFailureCoolDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyEmailOtpFailureCoolDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyEmailOtpFailure {
  /**
  * A single object that allows configuration of email OTP failure cool down settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#cool_down MfaDevicePolicy#cool_down}
  */
  readonly coolDown: MfaDevicePolicyEmailOtpFailureCoolDown;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#count MfaDevicePolicy#count}
  */
  readonly count: number;
}

export function mfaDevicePolicyEmailOtpFailureToTerraform(struct?: MfaDevicePolicyEmailOtpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down: mfaDevicePolicyEmailOtpFailureCoolDownToTerraform(struct!.coolDown),
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function mfaDevicePolicyEmailOtpFailureToHclTerraform(struct?: MfaDevicePolicyEmailOtpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cool_down: {
      value: mfaDevicePolicyEmailOtpFailureCoolDownToHclTerraform(struct!.coolDown),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyEmailOtpFailureCoolDown",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyEmailOtpFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyEmailOtpFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDown = this._coolDown?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyEmailOtpFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coolDown.internalValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coolDown.internalValue = value.coolDown;
      this._count = value.count;
    }
  }

  // cool_down - computed: true, optional: false, required: true
  private _coolDown = new MfaDevicePolicyEmailOtpFailureCoolDownOutputReference(this, "cool_down");
  public get coolDown() {
    return this._coolDown;
  }
  public putCoolDown(value: MfaDevicePolicyEmailOtpFailureCoolDown) {
    this._coolDown.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownInput() {
    return this._coolDown.internalValue;
  }

  // count - computed: true, optional: false, required: true
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
}
export interface MfaDevicePolicyEmailOtpLifetime {
  /**
  * An integer that defines the duration (number of time units) that the passcode is valid before it expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyEmailOtpLifetimeToTerraform(struct?: MfaDevicePolicyEmailOtpLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyEmailOtpLifetimeToHclTerraform(struct?: MfaDevicePolicyEmailOtpLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyEmailOtpLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyEmailOtpLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyEmailOtpLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyEmailOtp {
  /**
  * A single object that allows configuration of email OTP failure settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#failure MfaDevicePolicy#failure}
  */
  readonly failure?: MfaDevicePolicyEmailOtpFailure;
  /**
  * A single object that allows configuration of email OTP lifetime settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#lifetime MfaDevicePolicy#lifetime}
  */
  readonly lifetime?: MfaDevicePolicyEmailOtpLifetime;
  /**
  * An integer that specifies the length of the OTP that is shown to users.  Minimum length is `6` digits and maximum is `10` digits.  Defaults to `6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp_length MfaDevicePolicy#otp_length}
  */
  readonly otpLength?: number;
}

export function mfaDevicePolicyEmailOtpToTerraform(struct?: MfaDevicePolicyEmailOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure: mfaDevicePolicyEmailOtpFailureToTerraform(struct!.failure),
    lifetime: mfaDevicePolicyEmailOtpLifetimeToTerraform(struct!.lifetime),
    otp_length: cdktf.numberToTerraform(struct!.otpLength),
  }
}


export function mfaDevicePolicyEmailOtpToHclTerraform(struct?: MfaDevicePolicyEmailOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure: {
      value: mfaDevicePolicyEmailOtpFailureToHclTerraform(struct!.failure),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyEmailOtpFailure",
    },
    lifetime: {
      value: mfaDevicePolicyEmailOtpLifetimeToHclTerraform(struct!.lifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyEmailOtpLifetime",
    },
    otp_length: {
      value: cdktf.numberToHclTerraform(struct!.otpLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyEmailOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyEmailOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure?.internalValue;
    }
    if (this._lifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime?.internalValue;
    }
    if (this._otpLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLength = this._otpLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyEmailOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failure.internalValue = undefined;
      this._lifetime.internalValue = undefined;
      this._otpLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failure.internalValue = value.failure;
      this._lifetime.internalValue = value.lifetime;
      this._otpLength = value.otpLength;
    }
  }

  // failure - computed: true, optional: true, required: false
  private _failure = new MfaDevicePolicyEmailOtpFailureOutputReference(this, "failure");
  public get failure() {
    return this._failure;
  }
  public putFailure(value: MfaDevicePolicyEmailOtpFailure) {
    this._failure.internalValue = value;
  }
  public resetFailure() {
    this._failure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure.internalValue;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime = new MfaDevicePolicyEmailOtpLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }
  public putLifetime(value: MfaDevicePolicyEmailOtpLifetime) {
    this._lifetime.internalValue = value;
  }
  public resetLifetime() {
    this._lifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime.internalValue;
  }

  // otp_length - computed: true, optional: true, required: false
  private _otpLength?: number; 
  public get otpLength() {
    return this.getNumberAttribute('otp_length');
  }
  public set otpLength(value: number) {
    this._otpLength = value;
  }
  public resetOtpLength() {
    this._otpLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLengthInput() {
    return this._otpLength;
  }
}
export interface MfaDevicePolicyEmail {
  /**
  * A boolean that specifies whether the email OTP method is enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A single object that allows configuration of email OTP settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp MfaDevicePolicy#otp}
  */
  readonly otp?: MfaDevicePolicyEmailOtp;
  /**
  * A boolean that, when set to `true`, prevents users from pairing new devices with the email OTP method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#pairing_disabled MfaDevicePolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
  /**
  * A boolean that, when set to `true`, prompts users to provide nicknames for devices during pairing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#prompt_for_nickname_on_pairing MfaDevicePolicy#prompt_for_nickname_on_pairing}
  */
  readonly promptForNicknameOnPairing?: boolean | cdktf.IResolvable;
}

export function mfaDevicePolicyEmailToTerraform(struct?: MfaDevicePolicyEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp: mfaDevicePolicyEmailOtpToTerraform(struct!.otp),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
    prompt_for_nickname_on_pairing: cdktf.booleanToTerraform(struct!.promptForNicknameOnPairing),
  }
}


export function mfaDevicePolicyEmailToHclTerraform(struct?: MfaDevicePolicyEmail | cdktf.IResolvable): any {
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
    otp: {
      value: mfaDevicePolicyEmailOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyEmailOtp",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt_for_nickname_on_pairing: {
      value: cdktf.booleanToHclTerraform(struct!.promptForNicknameOnPairing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp?.internalValue;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    if (this._promptForNicknameOnPairing !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptForNicknameOnPairing = this._promptForNicknameOnPairing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._otp.internalValue = undefined;
      this._pairingDisabled = undefined;
      this._promptForNicknameOnPairing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._otp.internalValue = value.otp;
      this._pairingDisabled = value.pairingDisabled;
      this._promptForNicknameOnPairing = value.promptForNicknameOnPairing;
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

  // otp - computed: true, optional: true, required: false
  private _otp = new MfaDevicePolicyEmailOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: MfaDevicePolicyEmailOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }

  // pairing_disabled - computed: true, optional: true, required: false
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

  // prompt_for_nickname_on_pairing - computed: false, optional: true, required: false
  private _promptForNicknameOnPairing?: boolean | cdktf.IResolvable; 
  public get promptForNicknameOnPairing() {
    return this.getBooleanAttribute('prompt_for_nickname_on_pairing');
  }
  public set promptForNicknameOnPairing(value: boolean | cdktf.IResolvable) {
    this._promptForNicknameOnPairing = value;
  }
  public resetPromptForNicknameOnPairing() {
    this._promptForNicknameOnPairing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptForNicknameOnPairingInput() {
    return this._promptForNicknameOnPairing;
  }
}
export interface MfaDevicePolicyFido2 {
  /**
  * A boolean that specifies whether the FIDO2 method is enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the resource UUID that represents the FIDO2 policy in PingOne. This property can be null / left undefined. When null, the environment's default FIDO2 Policy is used.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#fido2_policy_id MfaDevicePolicy#fido2_policy_id}
  */
  readonly fido2PolicyId?: string;
  /**
  * A boolean that, when set to `true`, prevents users from pairing new devices with the FIDO2 method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#pairing_disabled MfaDevicePolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
  /**
  * A boolean that, when set to `true`, prompts users to provide nicknames for devices during pairing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#prompt_for_nickname_on_pairing MfaDevicePolicy#prompt_for_nickname_on_pairing}
  */
  readonly promptForNicknameOnPairing?: boolean | cdktf.IResolvable;
}

export function mfaDevicePolicyFido2ToTerraform(struct?: MfaDevicePolicyFido2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fido2_policy_id: cdktf.stringToTerraform(struct!.fido2PolicyId),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
    prompt_for_nickname_on_pairing: cdktf.booleanToTerraform(struct!.promptForNicknameOnPairing),
  }
}


export function mfaDevicePolicyFido2ToHclTerraform(struct?: MfaDevicePolicyFido2 | cdktf.IResolvable): any {
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
    prompt_for_nickname_on_pairing: {
      value: cdktf.booleanToHclTerraform(struct!.promptForNicknameOnPairing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyFido2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyFido2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._promptForNicknameOnPairing !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptForNicknameOnPairing = this._promptForNicknameOnPairing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyFido2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._fido2PolicyId = undefined;
      this._pairingDisabled = undefined;
      this._promptForNicknameOnPairing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._fido2PolicyId = value.fido2PolicyId;
      this._pairingDisabled = value.pairingDisabled;
      this._promptForNicknameOnPairing = value.promptForNicknameOnPairing;
    }
  }

  // enabled - computed: true, optional: false, required: true
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

  // fido2_policy_id - computed: true, optional: true, required: false
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

  // pairing_disabled - computed: true, optional: true, required: false
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

  // prompt_for_nickname_on_pairing - computed: true, optional: true, required: false
  private _promptForNicknameOnPairing?: boolean | cdktf.IResolvable; 
  public get promptForNicknameOnPairing() {
    return this.getBooleanAttribute('prompt_for_nickname_on_pairing');
  }
  public set promptForNicknameOnPairing(value: boolean | cdktf.IResolvable) {
    this._promptForNicknameOnPairing = value;
  }
  public resetPromptForNicknameOnPairing() {
    this._promptForNicknameOnPairing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptForNicknameOnPairingInput() {
    return this._promptForNicknameOnPairing;
  }
}
export interface MfaDevicePolicyMobileApplicationsAutoEnrollment {
  /**
  * A boolean that, when set to `true` if you want the application to allow Auto Enrollment. Auto Enrollment means that the user can authenticate for the first time from an unpaired device, and the successful authentication will result in the pairing of the device for MFA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function mfaDevicePolicyMobileApplicationsAutoEnrollmentToTerraform(struct?: MfaDevicePolicyMobileApplicationsAutoEnrollment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function mfaDevicePolicyMobileApplicationsAutoEnrollmentToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsAutoEnrollment | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsAutoEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsAutoEnrollment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsAutoEnrollment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface MfaDevicePolicyMobileApplicationsDeviceAuthorization {
  /**
  * Specifies the enabled or disabled state of automatic MFA for native devices paired with the user, for the specified application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the level of further verification when device authorization is enabled. The PingOne platform performs an extra verification check by sending a "silent" push notification to the customer native application, and receives a confirmation in return.  By default, the PingOne platform does not perform the extra verification check.  Options are `permissive` (the PingOne platform performs the extra verification check. Upon timeout or failure to get a response from the native app, the MFA step is treated as successfully completed), `restrictive` (the PingOne platform performs the extra verification check. Upon timeout or failure to get a response from the native app, the MFA step is treated as failed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#extra_verification MfaDevicePolicy#extra_verification}
  */
  readonly extraVerification?: string;
}

export function mfaDevicePolicyMobileApplicationsDeviceAuthorizationToTerraform(struct?: MfaDevicePolicyMobileApplicationsDeviceAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    extra_verification: cdktf.stringToTerraform(struct!.extraVerification),
  }
}


export function mfaDevicePolicyMobileApplicationsDeviceAuthorizationToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsDeviceAuthorization | cdktf.IResolvable): any {
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
    extra_verification: {
      value: cdktf.stringToHclTerraform(struct!.extraVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsDeviceAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsDeviceAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extraVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraVerification = this._extraVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsDeviceAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._extraVerification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._extraVerification = value.extraVerification;
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

  // extra_verification - computed: false, optional: true, required: false
  private _extraVerification?: string; 
  public get extraVerification() {
    return this.getStringAttribute('extra_verification');
  }
  public set extraVerification(value: string) {
    this._extraVerification = value;
  }
  public resetExtraVerification() {
    this._extraVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVerificationInput() {
    return this._extraVerification;
  }
}
export interface MfaDevicePolicyMobileApplicationsOtp {
  /**
  * A boolean that specifies whether OTP authentication is enabled or disabled for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function mfaDevicePolicyMobileApplicationsOtpToTerraform(struct?: MfaDevicePolicyMobileApplicationsOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function mfaDevicePolicyMobileApplicationsOtpToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsOtp | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface MfaDevicePolicyMobileApplicationsPairingKeyLifetime {
  /**
  * An integer that defines the amount of time an issued pairing key can be used until it expires. Minimum is 1 minute and maximum is 48 hours. If this parameter is not provided, the duration is set to 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `HOURS`, `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyMobileApplicationsPairingKeyLifetimeToTerraform(struct?: MfaDevicePolicyMobileApplicationsPairingKeyLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyMobileApplicationsPairingKeyLifetimeToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsPairingKeyLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsPairingKeyLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsPairingKeyLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsPairingKeyLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyMobileApplicationsPush {
  /**
  * A boolean that specifies whether push notification is enabled or disabled for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function mfaDevicePolicyMobileApplicationsPushToTerraform(struct?: MfaDevicePolicyMobileApplicationsPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function mfaDevicePolicyMobileApplicationsPushToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsPush | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsPush | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsPush | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface MfaDevicePolicyMobileApplicationsPushLimitLockDuration {
  /**
  * An integer that defines the length of time that push notifications should be blocked for the application if the defined limit has been reached. The minimum value is `1` minute and the maximum value is `120` minutes. If this parameter is not provided, the default value is `30` minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyMobileApplicationsPushLimitLockDurationToTerraform(struct?: MfaDevicePolicyMobileApplicationsPushLimitLockDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyMobileApplicationsPushLimitLockDurationToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsPushLimitLockDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsPushLimitLockDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsPushLimitLockDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsPushLimitLockDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyMobileApplicationsPushLimitTimePeriod {
  /**
  * An integer that defines the length of time that push notifications should be blocked for the application if the defined limit has been reached. The minimum value is `1` minute and the maximum value is `120` minutes. If this parameter is not provided, the default value is `30` minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyMobileApplicationsPushLimitTimePeriodToTerraform(struct?: MfaDevicePolicyMobileApplicationsPushLimitTimePeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyMobileApplicationsPushLimitTimePeriodToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsPushLimitTimePeriod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsPushLimitTimePeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsPushLimitTimePeriod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsPushLimitTimePeriod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyMobileApplicationsPushLimit {
  /**
  * An integer that specifies the number of consecutive push notifications that can be ignored or rejected by a user within a defined period before push notifications are blocked for the application. The minimum value is "1" and the maximum value is "50". If this parameter is not provided, the default value is "5".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#count MfaDevicePolicy#count}
  */
  readonly count?: number;
  /**
  * A single object that specifies push limit lock duration settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#lock_duration MfaDevicePolicy#lock_duration}
  */
  readonly lockDuration?: MfaDevicePolicyMobileApplicationsPushLimitLockDuration;
  /**
  * A single object that specifies push limit time period settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_period MfaDevicePolicy#time_period}
  */
  readonly timePeriod?: MfaDevicePolicyMobileApplicationsPushLimitTimePeriod;
}

export function mfaDevicePolicyMobileApplicationsPushLimitToTerraform(struct?: MfaDevicePolicyMobileApplicationsPushLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    lock_duration: mfaDevicePolicyMobileApplicationsPushLimitLockDurationToTerraform(struct!.lockDuration),
    time_period: mfaDevicePolicyMobileApplicationsPushLimitTimePeriodToTerraform(struct!.timePeriod),
  }
}


export function mfaDevicePolicyMobileApplicationsPushLimitToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsPushLimit | cdktf.IResolvable): any {
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
    lock_duration: {
      value: mfaDevicePolicyMobileApplicationsPushLimitLockDurationToHclTerraform(struct!.lockDuration),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsPushLimitLockDuration",
    },
    time_period: {
      value: mfaDevicePolicyMobileApplicationsPushLimitTimePeriodToHclTerraform(struct!.timePeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsPushLimitTimePeriod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsPushLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsPushLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._lockDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockDuration = this._lockDuration?.internalValue;
    }
    if (this._timePeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriod = this._timePeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsPushLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._lockDuration.internalValue = undefined;
      this._timePeriod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._lockDuration.internalValue = value.lockDuration;
      this._timePeriod.internalValue = value.timePeriod;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // lock_duration - computed: true, optional: true, required: false
  private _lockDuration = new MfaDevicePolicyMobileApplicationsPushLimitLockDurationOutputReference(this, "lock_duration");
  public get lockDuration() {
    return this._lockDuration;
  }
  public putLockDuration(value: MfaDevicePolicyMobileApplicationsPushLimitLockDuration) {
    this._lockDuration.internalValue = value;
  }
  public resetLockDuration() {
    this._lockDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDurationInput() {
    return this._lockDuration.internalValue;
  }

  // time_period - computed: true, optional: true, required: false
  private _timePeriod = new MfaDevicePolicyMobileApplicationsPushLimitTimePeriodOutputReference(this, "time_period");
  public get timePeriod() {
    return this._timePeriod;
  }
  public putTimePeriod(value: MfaDevicePolicyMobileApplicationsPushLimitTimePeriod) {
    this._timePeriod.internalValue = value;
  }
  public resetTimePeriod() {
    this._timePeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod.internalValue;
  }
}
export interface MfaDevicePolicyMobileApplicationsPushTimeout {
  /**
  * An integer that defines the length of time that push notifications should be blocked for the application if the defined limit has been reached. The minimum value is `1` minute and the maximum value is `120` minutes. If this parameter is not provided, the default value is `30` minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`. Currently, the only permitted value is `SECONDS`.  Defaults to `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit?: string;
}

export function mfaDevicePolicyMobileApplicationsPushTimeoutToTerraform(struct?: MfaDevicePolicyMobileApplicationsPushTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyMobileApplicationsPushTimeoutToHclTerraform(struct?: MfaDevicePolicyMobileApplicationsPushTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsPushTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileApplicationsPushTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplicationsPushTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyMobileApplications {
  /**
  * A single object that specifies auto enrollment settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#auto_enrollment MfaDevicePolicy#auto_enrollment}
  */
  readonly autoEnrollment?: MfaDevicePolicyMobileApplicationsAutoEnrollment;
  /**
  * A single object that specifies device authorization settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#device_authorization MfaDevicePolicy#device_authorization}
  */
  readonly deviceAuthorization?: MfaDevicePolicyMobileApplicationsDeviceAuthorization;
  /**
  * Controls how authentication or registration attempts should proceed if a device integrity check does not receive a response.  Options are `permissive` (if you want to allow the process to continue if a device integrity check does not receive a response), `restrictive` (if you want to block the user if a device integrity check does not receive a response).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#integrity_detection MfaDevicePolicy#integrity_detection}
  */
  readonly integrityDetection?: string;
  /**
  * A single object that specifies OTP settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp MfaDevicePolicy#otp}
  */
  readonly otp?: MfaDevicePolicyMobileApplicationsOtp;
  /**
  * A boolean that, when set to `true`, prevents users from pairing new devices with the relevant application. You can use this option if you want to phase out an existing mobile application but want to allow users to continue using the application for authentication for existing devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#pairing_disabled MfaDevicePolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
  /**
  * A single object that specifies pairing key lifetime settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#pairing_key_lifetime MfaDevicePolicy#pairing_key_lifetime}
  */
  readonly pairingKeyLifetime?: MfaDevicePolicyMobileApplicationsPairingKeyLifetime;
  /**
  * A single object that specifies push settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#push MfaDevicePolicy#push}
  */
  readonly push?: MfaDevicePolicyMobileApplicationsPush;
  /**
  * A single object that specifies push limit settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#push_limit MfaDevicePolicy#push_limit}
  */
  readonly pushLimit?: MfaDevicePolicyMobileApplicationsPushLimit;
  /**
  * A single object that specifies push timeout settings for the application in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#push_timeout MfaDevicePolicy#push_timeout}
  */
  readonly pushTimeout?: MfaDevicePolicyMobileApplicationsPushTimeout;
}

export function mfaDevicePolicyMobileApplicationsToTerraform(struct?: MfaDevicePolicyMobileApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_enrollment: mfaDevicePolicyMobileApplicationsAutoEnrollmentToTerraform(struct!.autoEnrollment),
    device_authorization: mfaDevicePolicyMobileApplicationsDeviceAuthorizationToTerraform(struct!.deviceAuthorization),
    integrity_detection: cdktf.stringToTerraform(struct!.integrityDetection),
    otp: mfaDevicePolicyMobileApplicationsOtpToTerraform(struct!.otp),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
    pairing_key_lifetime: mfaDevicePolicyMobileApplicationsPairingKeyLifetimeToTerraform(struct!.pairingKeyLifetime),
    push: mfaDevicePolicyMobileApplicationsPushToTerraform(struct!.push),
    push_limit: mfaDevicePolicyMobileApplicationsPushLimitToTerraform(struct!.pushLimit),
    push_timeout: mfaDevicePolicyMobileApplicationsPushTimeoutToTerraform(struct!.pushTimeout),
  }
}


export function mfaDevicePolicyMobileApplicationsToHclTerraform(struct?: MfaDevicePolicyMobileApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_enrollment: {
      value: mfaDevicePolicyMobileApplicationsAutoEnrollmentToHclTerraform(struct!.autoEnrollment),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsAutoEnrollment",
    },
    device_authorization: {
      value: mfaDevicePolicyMobileApplicationsDeviceAuthorizationToHclTerraform(struct!.deviceAuthorization),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsDeviceAuthorization",
    },
    integrity_detection: {
      value: cdktf.stringToHclTerraform(struct!.integrityDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp: {
      value: mfaDevicePolicyMobileApplicationsOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsOtp",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pairing_key_lifetime: {
      value: mfaDevicePolicyMobileApplicationsPairingKeyLifetimeToHclTerraform(struct!.pairingKeyLifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsPairingKeyLifetime",
    },
    push: {
      value: mfaDevicePolicyMobileApplicationsPushToHclTerraform(struct!.push),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsPush",
    },
    push_limit: {
      value: mfaDevicePolicyMobileApplicationsPushLimitToHclTerraform(struct!.pushLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsPushLimit",
    },
    push_timeout: {
      value: mfaDevicePolicyMobileApplicationsPushTimeoutToHclTerraform(struct!.pushTimeout),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileApplicationsPushTimeout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): MfaDevicePolicyMobileApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnrollment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnrollment = this._autoEnrollment?.internalValue;
    }
    if (this._deviceAuthorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceAuthorization = this._deviceAuthorization?.internalValue;
    }
    if (this._integrityDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrityDetection = this._integrityDetection;
    }
    if (this._otp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp?.internalValue;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    if (this._pairingKeyLifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKeyLifetime = this._pairingKeyLifetime?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    if (this._pushLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushLimit = this._pushLimit?.internalValue;
    }
    if (this._pushTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushTimeout = this._pushTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoEnrollment.internalValue = undefined;
      this._deviceAuthorization.internalValue = undefined;
      this._integrityDetection = undefined;
      this._otp.internalValue = undefined;
      this._pairingDisabled = undefined;
      this._pairingKeyLifetime.internalValue = undefined;
      this._push.internalValue = undefined;
      this._pushLimit.internalValue = undefined;
      this._pushTimeout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoEnrollment.internalValue = value.autoEnrollment;
      this._deviceAuthorization.internalValue = value.deviceAuthorization;
      this._integrityDetection = value.integrityDetection;
      this._otp.internalValue = value.otp;
      this._pairingDisabled = value.pairingDisabled;
      this._pairingKeyLifetime.internalValue = value.pairingKeyLifetime;
      this._push.internalValue = value.push;
      this._pushLimit.internalValue = value.pushLimit;
      this._pushTimeout.internalValue = value.pushTimeout;
    }
  }

  // auto_enrollment - computed: false, optional: true, required: false
  private _autoEnrollment = new MfaDevicePolicyMobileApplicationsAutoEnrollmentOutputReference(this, "auto_enrollment");
  public get autoEnrollment() {
    return this._autoEnrollment;
  }
  public putAutoEnrollment(value: MfaDevicePolicyMobileApplicationsAutoEnrollment) {
    this._autoEnrollment.internalValue = value;
  }
  public resetAutoEnrollment() {
    this._autoEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnrollmentInput() {
    return this._autoEnrollment.internalValue;
  }

  // device_authorization - computed: false, optional: true, required: false
  private _deviceAuthorization = new MfaDevicePolicyMobileApplicationsDeviceAuthorizationOutputReference(this, "device_authorization");
  public get deviceAuthorization() {
    return this._deviceAuthorization;
  }
  public putDeviceAuthorization(value: MfaDevicePolicyMobileApplicationsDeviceAuthorization) {
    this._deviceAuthorization.internalValue = value;
  }
  public resetDeviceAuthorization() {
    this._deviceAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAuthorizationInput() {
    return this._deviceAuthorization.internalValue;
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

  // otp - computed: false, optional: true, required: false
  private _otp = new MfaDevicePolicyMobileApplicationsOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: MfaDevicePolicyMobileApplicationsOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }

  // pairing_disabled - computed: true, optional: true, required: false
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

  // pairing_key_lifetime - computed: false, optional: true, required: false
  private _pairingKeyLifetime = new MfaDevicePolicyMobileApplicationsPairingKeyLifetimeOutputReference(this, "pairing_key_lifetime");
  public get pairingKeyLifetime() {
    return this._pairingKeyLifetime;
  }
  public putPairingKeyLifetime(value: MfaDevicePolicyMobileApplicationsPairingKeyLifetime) {
    this._pairingKeyLifetime.internalValue = value;
  }
  public resetPairingKeyLifetime() {
    this._pairingKeyLifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyLifetimeInput() {
    return this._pairingKeyLifetime.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new MfaDevicePolicyMobileApplicationsPushOutputReference(this, "push");
  public get push() {
    return this._push;
  }
  public putPush(value: MfaDevicePolicyMobileApplicationsPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }

  // push_limit - computed: true, optional: true, required: false
  private _pushLimit = new MfaDevicePolicyMobileApplicationsPushLimitOutputReference(this, "push_limit");
  public get pushLimit() {
    return this._pushLimit;
  }
  public putPushLimit(value: MfaDevicePolicyMobileApplicationsPushLimit) {
    this._pushLimit.internalValue = value;
  }
  public resetPushLimit() {
    this._pushLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushLimitInput() {
    return this._pushLimit.internalValue;
  }

  // push_timeout - computed: false, optional: true, required: false
  private _pushTimeout = new MfaDevicePolicyMobileApplicationsPushTimeoutOutputReference(this, "push_timeout");
  public get pushTimeout() {
    return this._pushTimeout;
  }
  public putPushTimeout(value: MfaDevicePolicyMobileApplicationsPushTimeout) {
    this._pushTimeout.internalValue = value;
  }
  public resetPushTimeout() {
    this._pushTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushTimeoutInput() {
    return this._pushTimeout.internalValue;
  }
}

export class MfaDevicePolicyMobileApplicationsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: MfaDevicePolicyMobileApplications } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): MfaDevicePolicyMobileApplicationsOutputReference {
    return new MfaDevicePolicyMobileApplicationsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface MfaDevicePolicyMobileOtpFailureCoolDown {
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures. The minimum value is `2`, maximum is `30`, and the default is `2`. Note that when using the "onetime authentication" feature, the user is not blocked after the maximum number of failures even if you specified a block duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyMobileOtpFailureCoolDownToTerraform(struct?: MfaDevicePolicyMobileOtpFailureCoolDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyMobileOtpFailureCoolDownToHclTerraform(struct?: MfaDevicePolicyMobileOtpFailureCoolDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileOtpFailureCoolDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileOtpFailureCoolDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileOtpFailureCoolDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyMobileOtpFailure {
  /**
  * A single object that specifies OTP failure cool down settings for mobile applications in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#cool_down MfaDevicePolicy#cool_down}
  */
  readonly coolDown: MfaDevicePolicyMobileOtpFailureCoolDown;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked. The minimum value is `1`, maximum is `7`, and the default is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#count MfaDevicePolicy#count}
  */
  readonly count?: number;
}

export function mfaDevicePolicyMobileOtpFailureToTerraform(struct?: MfaDevicePolicyMobileOtpFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down: mfaDevicePolicyMobileOtpFailureCoolDownToTerraform(struct!.coolDown),
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function mfaDevicePolicyMobileOtpFailureToHclTerraform(struct?: MfaDevicePolicyMobileOtpFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cool_down: {
      value: mfaDevicePolicyMobileOtpFailureCoolDownToHclTerraform(struct!.coolDown),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileOtpFailureCoolDown",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileOtpFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileOtpFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDown = this._coolDown?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileOtpFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolDown.internalValue = undefined;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolDown.internalValue = value.coolDown;
      this._count = value.count;
    }
  }

  // cool_down - computed: true, optional: false, required: true
  private _coolDown = new MfaDevicePolicyMobileOtpFailureCoolDownOutputReference(this, "cool_down");
  public get coolDown() {
    return this._coolDown;
  }
  public putCoolDown(value: MfaDevicePolicyMobileOtpFailureCoolDown) {
    this._coolDown.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownInput() {
    return this._coolDown.internalValue;
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface MfaDevicePolicyMobileOtp {
  /**
  * A single object that specifies OTP failure settings for mobile applications in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#failure MfaDevicePolicy#failure}
  */
  readonly failure: MfaDevicePolicyMobileOtpFailure;
}

export function mfaDevicePolicyMobileOtpToTerraform(struct?: MfaDevicePolicyMobileOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure: mfaDevicePolicyMobileOtpFailureToTerraform(struct!.failure),
  }
}


export function mfaDevicePolicyMobileOtpToHclTerraform(struct?: MfaDevicePolicyMobileOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure: {
      value: mfaDevicePolicyMobileOtpFailureToHclTerraform(struct!.failure),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileOtpFailure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobileOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobileOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failure.internalValue = value.failure;
    }
  }

  // failure - computed: true, optional: false, required: true
  private _failure = new MfaDevicePolicyMobileOtpFailureOutputReference(this, "failure");
  public get failure() {
    return this._failure;
  }
  public putFailure(value: MfaDevicePolicyMobileOtpFailure) {
    this._failure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure.internalValue;
  }
}
export interface MfaDevicePolicyMobile {
  /**
  * A map of objects that specifies settings for a configured Mobile Application.  The ID of the application should be configured as the map key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#applications MfaDevicePolicy#applications}
  */
  readonly applications?: { [key: string]: MfaDevicePolicyMobileApplications } | cdktf.IResolvable;
  /**
  * A boolean that specifies whether the mobile device method is enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A single object that specifies OTP settings for mobile applications in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp MfaDevicePolicy#otp}
  */
  readonly otp?: MfaDevicePolicyMobileOtp;
  /**
  * A boolean that, when set to `true`, prompts users to provide nicknames for devices during pairing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#prompt_for_nickname_on_pairing MfaDevicePolicy#prompt_for_nickname_on_pairing}
  */
  readonly promptForNicknameOnPairing?: boolean | cdktf.IResolvable;
}

export function mfaDevicePolicyMobileToTerraform(struct?: MfaDevicePolicyMobile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.hashMapper(mfaDevicePolicyMobileApplicationsToTerraform)(struct!.applications),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp: mfaDevicePolicyMobileOtpToTerraform(struct!.otp),
    prompt_for_nickname_on_pairing: cdktf.booleanToTerraform(struct!.promptForNicknameOnPairing),
  }
}


export function mfaDevicePolicyMobileToHclTerraform(struct?: MfaDevicePolicyMobile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.hashMapperHcl(mfaDevicePolicyMobileApplicationsToHclTerraform)(struct!.applications),
      isBlock: true,
      type: "map",
      storageClassType: "MfaDevicePolicyMobileApplicationsMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    otp: {
      value: mfaDevicePolicyMobileOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyMobileOtp",
    },
    prompt_for_nickname_on_pairing: {
      value: cdktf.booleanToHclTerraform(struct!.promptForNicknameOnPairing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyMobile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp?.internalValue;
    }
    if (this._promptForNicknameOnPairing !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptForNicknameOnPairing = this._promptForNicknameOnPairing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyMobile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications.internalValue = undefined;
      this._enabled = undefined;
      this._otp.internalValue = undefined;
      this._promptForNicknameOnPairing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications.internalValue = value.applications;
      this._enabled = value.enabled;
      this._otp.internalValue = value.otp;
      this._promptForNicknameOnPairing = value.promptForNicknameOnPairing;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new MfaDevicePolicyMobileApplicationsMap(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: { [key: string]: MfaDevicePolicyMobileApplications } | cdktf.IResolvable) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
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

  // otp - computed: true, optional: true, required: false
  private _otp = new MfaDevicePolicyMobileOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: MfaDevicePolicyMobileOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }

  // prompt_for_nickname_on_pairing - computed: false, optional: true, required: false
  private _promptForNicknameOnPairing?: boolean | cdktf.IResolvable; 
  public get promptForNicknameOnPairing() {
    return this.getBooleanAttribute('prompt_for_nickname_on_pairing');
  }
  public set promptForNicknameOnPairing(value: boolean | cdktf.IResolvable) {
    this._promptForNicknameOnPairing = value;
  }
  public resetPromptForNicknameOnPairing() {
    this._promptForNicknameOnPairing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptForNicknameOnPairingInput() {
    return this._promptForNicknameOnPairing;
  }
}
export interface MfaDevicePolicySmsOtpFailureCoolDown {
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicySmsOtpFailureCoolDownToTerraform(struct?: MfaDevicePolicySmsOtpFailureCoolDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicySmsOtpFailureCoolDownToHclTerraform(struct?: MfaDevicePolicySmsOtpFailureCoolDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicySmsOtpFailureCoolDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicySmsOtpFailureCoolDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicySmsOtpFailureCoolDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicySmsOtpFailure {
  /**
  * A single object that allows configuration of SMS OTP failure cool down settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#cool_down MfaDevicePolicy#cool_down}
  */
  readonly coolDown: MfaDevicePolicySmsOtpFailureCoolDown;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#count MfaDevicePolicy#count}
  */
  readonly count: number;
}

export function mfaDevicePolicySmsOtpFailureToTerraform(struct?: MfaDevicePolicySmsOtpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down: mfaDevicePolicySmsOtpFailureCoolDownToTerraform(struct!.coolDown),
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function mfaDevicePolicySmsOtpFailureToHclTerraform(struct?: MfaDevicePolicySmsOtpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cool_down: {
      value: mfaDevicePolicySmsOtpFailureCoolDownToHclTerraform(struct!.coolDown),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicySmsOtpFailureCoolDown",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicySmsOtpFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicySmsOtpFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDown = this._coolDown?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicySmsOtpFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coolDown.internalValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coolDown.internalValue = value.coolDown;
      this._count = value.count;
    }
  }

  // cool_down - computed: true, optional: false, required: true
  private _coolDown = new MfaDevicePolicySmsOtpFailureCoolDownOutputReference(this, "cool_down");
  public get coolDown() {
    return this._coolDown;
  }
  public putCoolDown(value: MfaDevicePolicySmsOtpFailureCoolDown) {
    this._coolDown.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownInput() {
    return this._coolDown.internalValue;
  }

  // count - computed: true, optional: false, required: true
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
}
export interface MfaDevicePolicySmsOtpLifetime {
  /**
  * An integer that defines the duration (number of time units) that the passcode is valid before it expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicySmsOtpLifetimeToTerraform(struct?: MfaDevicePolicySmsOtpLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicySmsOtpLifetimeToHclTerraform(struct?: MfaDevicePolicySmsOtpLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicySmsOtpLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicySmsOtpLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicySmsOtpLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicySmsOtp {
  /**
  * A single object that allows configuration of SMS OTP failure settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#failure MfaDevicePolicy#failure}
  */
  readonly failure?: MfaDevicePolicySmsOtpFailure;
  /**
  * A single object that allows configuration of SMS OTP lifetime settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#lifetime MfaDevicePolicy#lifetime}
  */
  readonly lifetime?: MfaDevicePolicySmsOtpLifetime;
  /**
  * An integer that specifies the length of the OTP that is shown to users.  Minimum length is `6` digits and maximum is `10` digits.  Defaults to `6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp_length MfaDevicePolicy#otp_length}
  */
  readonly otpLength?: number;
}

export function mfaDevicePolicySmsOtpToTerraform(struct?: MfaDevicePolicySmsOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure: mfaDevicePolicySmsOtpFailureToTerraform(struct!.failure),
    lifetime: mfaDevicePolicySmsOtpLifetimeToTerraform(struct!.lifetime),
    otp_length: cdktf.numberToTerraform(struct!.otpLength),
  }
}


export function mfaDevicePolicySmsOtpToHclTerraform(struct?: MfaDevicePolicySmsOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure: {
      value: mfaDevicePolicySmsOtpFailureToHclTerraform(struct!.failure),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicySmsOtpFailure",
    },
    lifetime: {
      value: mfaDevicePolicySmsOtpLifetimeToHclTerraform(struct!.lifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicySmsOtpLifetime",
    },
    otp_length: {
      value: cdktf.numberToHclTerraform(struct!.otpLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicySmsOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicySmsOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure?.internalValue;
    }
    if (this._lifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime?.internalValue;
    }
    if (this._otpLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLength = this._otpLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicySmsOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failure.internalValue = undefined;
      this._lifetime.internalValue = undefined;
      this._otpLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failure.internalValue = value.failure;
      this._lifetime.internalValue = value.lifetime;
      this._otpLength = value.otpLength;
    }
  }

  // failure - computed: true, optional: true, required: false
  private _failure = new MfaDevicePolicySmsOtpFailureOutputReference(this, "failure");
  public get failure() {
    return this._failure;
  }
  public putFailure(value: MfaDevicePolicySmsOtpFailure) {
    this._failure.internalValue = value;
  }
  public resetFailure() {
    this._failure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure.internalValue;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime = new MfaDevicePolicySmsOtpLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }
  public putLifetime(value: MfaDevicePolicySmsOtpLifetime) {
    this._lifetime.internalValue = value;
  }
  public resetLifetime() {
    this._lifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime.internalValue;
  }

  // otp_length - computed: true, optional: true, required: false
  private _otpLength?: number; 
  public get otpLength() {
    return this.getNumberAttribute('otp_length');
  }
  public set otpLength(value: number) {
    this._otpLength = value;
  }
  public resetOtpLength() {
    this._otpLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLengthInput() {
    return this._otpLength;
  }
}
export interface MfaDevicePolicySms {
  /**
  * A boolean that specifies whether the SMS OTP method is enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A single object that allows configuration of SMS OTP settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp MfaDevicePolicy#otp}
  */
  readonly otp?: MfaDevicePolicySmsOtp;
  /**
  * A boolean that, when set to `true`, prevents users from pairing new devices with the SMS OTP method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#pairing_disabled MfaDevicePolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
  /**
  * A boolean that, when set to `true`, prompts users to provide nicknames for devices during pairing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#prompt_for_nickname_on_pairing MfaDevicePolicy#prompt_for_nickname_on_pairing}
  */
  readonly promptForNicknameOnPairing?: boolean | cdktf.IResolvable;
}

export function mfaDevicePolicySmsToTerraform(struct?: MfaDevicePolicySms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp: mfaDevicePolicySmsOtpToTerraform(struct!.otp),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
    prompt_for_nickname_on_pairing: cdktf.booleanToTerraform(struct!.promptForNicknameOnPairing),
  }
}


export function mfaDevicePolicySmsToHclTerraform(struct?: MfaDevicePolicySms | cdktf.IResolvable): any {
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
    otp: {
      value: mfaDevicePolicySmsOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicySmsOtp",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt_for_nickname_on_pairing: {
      value: cdktf.booleanToHclTerraform(struct!.promptForNicknameOnPairing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicySmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicySms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp?.internalValue;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    if (this._promptForNicknameOnPairing !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptForNicknameOnPairing = this._promptForNicknameOnPairing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicySms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._otp.internalValue = undefined;
      this._pairingDisabled = undefined;
      this._promptForNicknameOnPairing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._otp.internalValue = value.otp;
      this._pairingDisabled = value.pairingDisabled;
      this._promptForNicknameOnPairing = value.promptForNicknameOnPairing;
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

  // otp - computed: true, optional: true, required: false
  private _otp = new MfaDevicePolicySmsOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: MfaDevicePolicySmsOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }

  // pairing_disabled - computed: true, optional: true, required: false
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

  // prompt_for_nickname_on_pairing - computed: false, optional: true, required: false
  private _promptForNicknameOnPairing?: boolean | cdktf.IResolvable; 
  public get promptForNicknameOnPairing() {
    return this.getBooleanAttribute('prompt_for_nickname_on_pairing');
  }
  public set promptForNicknameOnPairing(value: boolean | cdktf.IResolvable) {
    this._promptForNicknameOnPairing = value;
  }
  public resetPromptForNicknameOnPairing() {
    this._promptForNicknameOnPairing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptForNicknameOnPairingInput() {
    return this._promptForNicknameOnPairing;
  }
}
export interface MfaDevicePolicyTotpOtpFailureCoolDown {
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyTotpOtpFailureCoolDownToTerraform(struct?: MfaDevicePolicyTotpOtpFailureCoolDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyTotpOtpFailureCoolDownToHclTerraform(struct?: MfaDevicePolicyTotpOtpFailureCoolDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyTotpOtpFailureCoolDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyTotpOtpFailureCoolDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyTotpOtpFailureCoolDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyTotpOtpFailure {
  /**
  * A single object that allows configuration of TOTP OTP failure cool down settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#cool_down MfaDevicePolicy#cool_down}
  */
  readonly coolDown?: MfaDevicePolicyTotpOtpFailureCoolDown;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#count MfaDevicePolicy#count}
  */
  readonly count: number;
}

export function mfaDevicePolicyTotpOtpFailureToTerraform(struct?: MfaDevicePolicyTotpOtpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down: mfaDevicePolicyTotpOtpFailureCoolDownToTerraform(struct!.coolDown),
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function mfaDevicePolicyTotpOtpFailureToHclTerraform(struct?: MfaDevicePolicyTotpOtpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cool_down: {
      value: mfaDevicePolicyTotpOtpFailureCoolDownToHclTerraform(struct!.coolDown),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyTotpOtpFailureCoolDown",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyTotpOtpFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyTotpOtpFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDown = this._coolDown?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyTotpOtpFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coolDown.internalValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coolDown.internalValue = value.coolDown;
      this._count = value.count;
    }
  }

  // cool_down - computed: true, optional: true, required: false
  private _coolDown = new MfaDevicePolicyTotpOtpFailureCoolDownOutputReference(this, "cool_down");
  public get coolDown() {
    return this._coolDown;
  }
  public putCoolDown(value: MfaDevicePolicyTotpOtpFailureCoolDown) {
    this._coolDown.internalValue = value;
  }
  public resetCoolDown() {
    this._coolDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownInput() {
    return this._coolDown.internalValue;
  }

  // count - computed: true, optional: false, required: true
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
}
export interface MfaDevicePolicyTotpOtp {
  /**
  * A single object that allows configuration of TOTP OTP failure settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#failure MfaDevicePolicy#failure}
  */
  readonly failure?: MfaDevicePolicyTotpOtpFailure;
}

export function mfaDevicePolicyTotpOtpToTerraform(struct?: MfaDevicePolicyTotpOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure: mfaDevicePolicyTotpOtpFailureToTerraform(struct!.failure),
  }
}


export function mfaDevicePolicyTotpOtpToHclTerraform(struct?: MfaDevicePolicyTotpOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure: {
      value: mfaDevicePolicyTotpOtpFailureToHclTerraform(struct!.failure),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyTotpOtpFailure",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyTotpOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyTotpOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyTotpOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failure.internalValue = value.failure;
    }
  }

  // failure - computed: true, optional: true, required: false
  private _failure = new MfaDevicePolicyTotpOtpFailureOutputReference(this, "failure");
  public get failure() {
    return this._failure;
  }
  public putFailure(value: MfaDevicePolicyTotpOtpFailure) {
    this._failure.internalValue = value;
  }
  public resetFailure() {
    this._failure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure.internalValue;
  }
}
export interface MfaDevicePolicyTotp {
  /**
  * A boolean that specifies whether the TOTP method is enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A single object that allows configuration of TOTP OTP settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp MfaDevicePolicy#otp}
  */
  readonly otp?: MfaDevicePolicyTotpOtp;
  /**
  * A boolean that, when set to `true`, prevents users from pairing new devices with the TOTP method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#pairing_disabled MfaDevicePolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
  /**
  * A boolean that, when set to `true`, prompts users to provide nicknames for devices during pairing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#prompt_for_nickname_on_pairing MfaDevicePolicy#prompt_for_nickname_on_pairing}
  */
  readonly promptForNicknameOnPairing?: boolean | cdktf.IResolvable;
  /**
  * A map of string key:value pairs that specifies `otpauth` URI parameters. For example, if you provide a value for the `issuer` parameter, then authenticators that support that parameter will display the text you specify together with the OTP (in addition to the username). This can help users recognize which application the OTP is for. If you intend on using the same MFA policy for multiple applications, choose a name that reflects the group of applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#uri_parameters MfaDevicePolicy#uri_parameters}
  */
  readonly uriParameters?: { [key: string]: string };
}

export function mfaDevicePolicyTotpToTerraform(struct?: MfaDevicePolicyTotp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp: mfaDevicePolicyTotpOtpToTerraform(struct!.otp),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
    prompt_for_nickname_on_pairing: cdktf.booleanToTerraform(struct!.promptForNicknameOnPairing),
    uri_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.uriParameters),
  }
}


export function mfaDevicePolicyTotpToHclTerraform(struct?: MfaDevicePolicyTotp | cdktf.IResolvable): any {
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
    otp: {
      value: mfaDevicePolicyTotpOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyTotpOtp",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt_for_nickname_on_pairing: {
      value: cdktf.booleanToHclTerraform(struct!.promptForNicknameOnPairing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.uriParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyTotpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyTotp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp?.internalValue;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    if (this._promptForNicknameOnPairing !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptForNicknameOnPairing = this._promptForNicknameOnPairing;
    }
    if (this._uriParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriParameters = this._uriParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyTotp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._otp.internalValue = undefined;
      this._pairingDisabled = undefined;
      this._promptForNicknameOnPairing = undefined;
      this._uriParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._otp.internalValue = value.otp;
      this._pairingDisabled = value.pairingDisabled;
      this._promptForNicknameOnPairing = value.promptForNicknameOnPairing;
      this._uriParameters = value.uriParameters;
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

  // otp - computed: true, optional: true, required: false
  private _otp = new MfaDevicePolicyTotpOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: MfaDevicePolicyTotpOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }

  // pairing_disabled - computed: true, optional: true, required: false
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

  // prompt_for_nickname_on_pairing - computed: false, optional: true, required: false
  private _promptForNicknameOnPairing?: boolean | cdktf.IResolvable; 
  public get promptForNicknameOnPairing() {
    return this.getBooleanAttribute('prompt_for_nickname_on_pairing');
  }
  public set promptForNicknameOnPairing(value: boolean | cdktf.IResolvable) {
    this._promptForNicknameOnPairing = value;
  }
  public resetPromptForNicknameOnPairing() {
    this._promptForNicknameOnPairing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptForNicknameOnPairingInput() {
    return this._promptForNicknameOnPairing;
  }

  // uri_parameters - computed: false, optional: true, required: false
  private _uriParameters?: { [key: string]: string }; 
  public get uriParameters() {
    return this.getStringMapAttribute('uri_parameters');
  }
  public set uriParameters(value: { [key: string]: string }) {
    this._uriParameters = value;
  }
  public resetUriParameters() {
    this._uriParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriParametersInput() {
    return this._uriParameters;
  }
}
export interface MfaDevicePolicyVoiceOtpFailureCoolDown {
  /**
  * An integer that defines the duration (number of time units) the user is blocked after reaching the maximum number of passcode failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyVoiceOtpFailureCoolDownToTerraform(struct?: MfaDevicePolicyVoiceOtpFailureCoolDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyVoiceOtpFailureCoolDownToHclTerraform(struct?: MfaDevicePolicyVoiceOtpFailureCoolDown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyVoiceOtpFailureCoolDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyVoiceOtpFailureCoolDown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyVoiceOtpFailureCoolDown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyVoiceOtpFailure {
  /**
  * A single object that allows configuration of voice OTP failure cool down settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#cool_down MfaDevicePolicy#cool_down}
  */
  readonly coolDown: MfaDevicePolicyVoiceOtpFailureCoolDown;
  /**
  * An integer that defines the maximum number of times that the OTP entry can fail for a user, before they are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#count MfaDevicePolicy#count}
  */
  readonly count: number;
}

export function mfaDevicePolicyVoiceOtpFailureToTerraform(struct?: MfaDevicePolicyVoiceOtpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down: mfaDevicePolicyVoiceOtpFailureCoolDownToTerraform(struct!.coolDown),
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function mfaDevicePolicyVoiceOtpFailureToHclTerraform(struct?: MfaDevicePolicyVoiceOtpFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cool_down: {
      value: mfaDevicePolicyVoiceOtpFailureCoolDownToHclTerraform(struct!.coolDown),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyVoiceOtpFailureCoolDown",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyVoiceOtpFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyVoiceOtpFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDown = this._coolDown?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyVoiceOtpFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coolDown.internalValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coolDown.internalValue = value.coolDown;
      this._count = value.count;
    }
  }

  // cool_down - computed: true, optional: false, required: true
  private _coolDown = new MfaDevicePolicyVoiceOtpFailureCoolDownOutputReference(this, "cool_down");
  public get coolDown() {
    return this._coolDown;
  }
  public putCoolDown(value: MfaDevicePolicyVoiceOtpFailureCoolDown) {
    this._coolDown.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownInput() {
    return this._coolDown.internalValue;
  }

  // count - computed: true, optional: false, required: true
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
}
export interface MfaDevicePolicyVoiceOtpLifetime {
  /**
  * An integer that defines the duration (number of time units) that the passcode is valid before it expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#duration MfaDevicePolicy#duration}
  */
  readonly duration: number;
  /**
  * A string that specifies the type of time unit for `duration`.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#time_unit MfaDevicePolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function mfaDevicePolicyVoiceOtpLifetimeToTerraform(struct?: MfaDevicePolicyVoiceOtpLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function mfaDevicePolicyVoiceOtpLifetimeToHclTerraform(struct?: MfaDevicePolicyVoiceOtpLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyVoiceOtpLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyVoiceOtpLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyVoiceOtpLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._timeUnit = value.timeUnit;
    }
  }

  // duration - computed: true, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // time_unit - computed: true, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface MfaDevicePolicyVoiceOtp {
  /**
  * A single object that allows configuration of voice OTP failure settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#failure MfaDevicePolicy#failure}
  */
  readonly failure?: MfaDevicePolicyVoiceOtpFailure;
  /**
  * A single object that allows configuration of voice OTP lifetime settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#lifetime MfaDevicePolicy#lifetime}
  */
  readonly lifetime?: MfaDevicePolicyVoiceOtpLifetime;
  /**
  * An integer that specifies the length of the OTP that is shown to users.  Minimum length is `6` digits and maximum is `10` digits.  Defaults to `6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp_length MfaDevicePolicy#otp_length}
  */
  readonly otpLength?: number;
}

export function mfaDevicePolicyVoiceOtpToTerraform(struct?: MfaDevicePolicyVoiceOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure: mfaDevicePolicyVoiceOtpFailureToTerraform(struct!.failure),
    lifetime: mfaDevicePolicyVoiceOtpLifetimeToTerraform(struct!.lifetime),
    otp_length: cdktf.numberToTerraform(struct!.otpLength),
  }
}


export function mfaDevicePolicyVoiceOtpToHclTerraform(struct?: MfaDevicePolicyVoiceOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure: {
      value: mfaDevicePolicyVoiceOtpFailureToHclTerraform(struct!.failure),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyVoiceOtpFailure",
    },
    lifetime: {
      value: mfaDevicePolicyVoiceOtpLifetimeToHclTerraform(struct!.lifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyVoiceOtpLifetime",
    },
    otp_length: {
      value: cdktf.numberToHclTerraform(struct!.otpLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyVoiceOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyVoiceOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure?.internalValue;
    }
    if (this._lifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime?.internalValue;
    }
    if (this._otpLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpLength = this._otpLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyVoiceOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failure.internalValue = undefined;
      this._lifetime.internalValue = undefined;
      this._otpLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failure.internalValue = value.failure;
      this._lifetime.internalValue = value.lifetime;
      this._otpLength = value.otpLength;
    }
  }

  // failure - computed: true, optional: true, required: false
  private _failure = new MfaDevicePolicyVoiceOtpFailureOutputReference(this, "failure");
  public get failure() {
    return this._failure;
  }
  public putFailure(value: MfaDevicePolicyVoiceOtpFailure) {
    this._failure.internalValue = value;
  }
  public resetFailure() {
    this._failure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure.internalValue;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime = new MfaDevicePolicyVoiceOtpLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }
  public putLifetime(value: MfaDevicePolicyVoiceOtpLifetime) {
    this._lifetime.internalValue = value;
  }
  public resetLifetime() {
    this._lifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime.internalValue;
  }

  // otp_length - computed: true, optional: true, required: false
  private _otpLength?: number; 
  public get otpLength() {
    return this.getNumberAttribute('otp_length');
  }
  public set otpLength(value: number) {
    this._otpLength = value;
  }
  public resetOtpLength() {
    this._otpLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpLengthInput() {
    return this._otpLength;
  }
}
export interface MfaDevicePolicyVoice {
  /**
  * A boolean that specifies whether the voice OTP method is enabled or disabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#enabled MfaDevicePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A single object that allows configuration of voice OTP settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#otp MfaDevicePolicy#otp}
  */
  readonly otp?: MfaDevicePolicyVoiceOtp;
  /**
  * A boolean that, when set to `true`, prevents users from pairing new devices with the voice OTP method, though keeping it active in the policy for existing users. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#pairing_disabled MfaDevicePolicy#pairing_disabled}
  */
  readonly pairingDisabled?: boolean | cdktf.IResolvable;
  /**
  * A boolean that, when set to `true`, prompts users to provide nicknames for devices during pairing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#prompt_for_nickname_on_pairing MfaDevicePolicy#prompt_for_nickname_on_pairing}
  */
  readonly promptForNicknameOnPairing?: boolean | cdktf.IResolvable;
}

export function mfaDevicePolicyVoiceToTerraform(struct?: MfaDevicePolicyVoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp: mfaDevicePolicyVoiceOtpToTerraform(struct!.otp),
    pairing_disabled: cdktf.booleanToTerraform(struct!.pairingDisabled),
    prompt_for_nickname_on_pairing: cdktf.booleanToTerraform(struct!.promptForNicknameOnPairing),
  }
}


export function mfaDevicePolicyVoiceToHclTerraform(struct?: MfaDevicePolicyVoice | cdktf.IResolvable): any {
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
    otp: {
      value: mfaDevicePolicyVoiceOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "MfaDevicePolicyVoiceOtp",
    },
    pairing_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.pairingDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt_for_nickname_on_pairing: {
      value: cdktf.booleanToHclTerraform(struct!.promptForNicknameOnPairing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaDevicePolicyVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaDevicePolicyVoice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._otp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp?.internalValue;
    }
    if (this._pairingDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingDisabled = this._pairingDisabled;
    }
    if (this._promptForNicknameOnPairing !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptForNicknameOnPairing = this._promptForNicknameOnPairing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaDevicePolicyVoice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._otp.internalValue = undefined;
      this._pairingDisabled = undefined;
      this._promptForNicknameOnPairing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._otp.internalValue = value.otp;
      this._pairingDisabled = value.pairingDisabled;
      this._promptForNicknameOnPairing = value.promptForNicknameOnPairing;
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

  // otp - computed: true, optional: true, required: false
  private _otp = new MfaDevicePolicyVoiceOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: MfaDevicePolicyVoiceOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }

  // pairing_disabled - computed: true, optional: true, required: false
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

  // prompt_for_nickname_on_pairing - computed: false, optional: true, required: false
  private _promptForNicknameOnPairing?: boolean | cdktf.IResolvable; 
  public get promptForNicknameOnPairing() {
    return this.getBooleanAttribute('prompt_for_nickname_on_pairing');
  }
  public set promptForNicknameOnPairing(value: boolean | cdktf.IResolvable) {
    this._promptForNicknameOnPairing = value;
  }
  public resetPromptForNicknameOnPairing() {
    this._promptForNicknameOnPairing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptForNicknameOnPairingInput() {
    return this._promptForNicknameOnPairing;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy pingone_mfa_device_policy}
*/
export class MfaDevicePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_mfa_device_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MfaDevicePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MfaDevicePolicy to import
  * @param importFromId The id of the existing MfaDevicePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MfaDevicePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_mfa_device_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_device_policy pingone_mfa_device_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaDevicePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MfaDevicePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_mfa_device_policy',
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
    this._authentication.internalValue = config.authentication;
    this._email.internalValue = config.email;
    this._environmentId = config.environmentId;
    this._fido2.internalValue = config.fido2;
    this._mobile.internalValue = config.mobile;
    this._name = config.name;
    this._newDeviceNotification = config.newDeviceNotification;
    this._sms.internalValue = config.sms;
    this._totp.internalValue = config.totp;
    this._voice.internalValue = config.voice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: true, required: false
  private _authentication = new MfaDevicePolicyAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: MfaDevicePolicyAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // email - computed: false, optional: false, required: true
  private _email = new MfaDevicePolicyEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: MfaDevicePolicyEmail) {
    this._email.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
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

  // fido2 - computed: true, optional: true, required: false
  private _fido2 = new MfaDevicePolicyFido2OutputReference(this, "fido2");
  public get fido2() {
    return this._fido2;
  }
  public putFido2(value: MfaDevicePolicyFido2) {
    this._fido2.internalValue = value;
  }
  public resetFido2() {
    this._fido2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fido2Input() {
    return this._fido2.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mobile - computed: false, optional: false, required: true
  private _mobile = new MfaDevicePolicyMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }
  public putMobile(value: MfaDevicePolicyMobile) {
    this._mobile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile.internalValue;
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

  // new_device_notification - computed: true, optional: true, required: false
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

  // sms - computed: false, optional: false, required: true
  private _sms = new MfaDevicePolicySmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: MfaDevicePolicySms) {
    this._sms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // totp - computed: false, optional: false, required: true
  private _totp = new MfaDevicePolicyTotpOutputReference(this, "totp");
  public get totp() {
    return this._totp;
  }
  public putTotp(value: MfaDevicePolicyTotp) {
    this._totp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totpInput() {
    return this._totp.internalValue;
  }

  // voice - computed: false, optional: false, required: true
  private _voice = new MfaDevicePolicyVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: MfaDevicePolicyVoice) {
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
      authentication: mfaDevicePolicyAuthenticationToTerraform(this._authentication.internalValue),
      email: mfaDevicePolicyEmailToTerraform(this._email.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      fido2: mfaDevicePolicyFido2ToTerraform(this._fido2.internalValue),
      mobile: mfaDevicePolicyMobileToTerraform(this._mobile.internalValue),
      name: cdktf.stringToTerraform(this._name),
      new_device_notification: cdktf.stringToTerraform(this._newDeviceNotification),
      sms: mfaDevicePolicySmsToTerraform(this._sms.internalValue),
      totp: mfaDevicePolicyTotpToTerraform(this._totp.internalValue),
      voice: mfaDevicePolicyVoiceToTerraform(this._voice.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: mfaDevicePolicyAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaDevicePolicyAuthentication",
      },
      email: {
        value: mfaDevicePolicyEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaDevicePolicyEmail",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fido2: {
        value: mfaDevicePolicyFido2ToHclTerraform(this._fido2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaDevicePolicyFido2",
      },
      mobile: {
        value: mfaDevicePolicyMobileToHclTerraform(this._mobile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaDevicePolicyMobile",
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
      sms: {
        value: mfaDevicePolicySmsToHclTerraform(this._sms.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaDevicePolicySms",
      },
      totp: {
        value: mfaDevicePolicyTotpToHclTerraform(this._totp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaDevicePolicyTotp",
      },
      voice: {
        value: mfaDevicePolicyVoiceToHclTerraform(this._voice.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaDevicePolicyVoice",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
