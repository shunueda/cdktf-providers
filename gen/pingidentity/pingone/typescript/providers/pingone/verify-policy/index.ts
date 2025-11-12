// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the verification policy displayed in PingOne Admin UI, 1-1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#description VerifyPolicy#description}
  */
  readonly description?: string;
  /**
  * Defines the verification requirements to validate an email address using a one-time password (OTP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#email VerifyPolicy#email}
  */
  readonly email?: VerifyPolicyEmail;
  /**
  * PingOne environment identifier (UUID) in which the verify policy exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#environment_id VerifyPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * Defines the verification requirements to compare a mobile phone self-image to a reference photograph, such as on a government ID or previously verified photograph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#facial_comparison VerifyPolicy#facial_comparison}
  */
  readonly facialComparison?: VerifyPolicyFacialComparison;
  /**
  * Defines the verification requirements for a government-issued identity document, which includes a photograph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#government_id VerifyPolicy#government_id}
  */
  readonly governmentId?: VerifyPolicyGovernmentId;
  /**
  * Defines the verification requirements for identity record matching. If `government_id.verify` is `DISABLED`, then identity record matching is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#identity_record_matching VerifyPolicy#identity_record_matching}
  */
  readonly identityRecordMatching?: VerifyPolicyIdentityRecordMatching;
  /**
  * Defines the verification requirements to inspect a mobile phone self-image for evidence that the subject is alive and not a representation, such as a photograph or mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#liveness VerifyPolicy#liveness}
  */
  readonly liveness?: VerifyPolicyLiveness;
  /**
  * Name of the verification policy displayed in PingOne Admin UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#name VerifyPolicy#name}
  */
  readonly name: string;
  /**
  * Defines the verification requirements to validate a mobile phone number using a one-time password (OTP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#phone VerifyPolicy#phone}
  */
  readonly phone?: VerifyPolicyPhone;
  /**
  * Defines the requirements for transactions invoked by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#transaction VerifyPolicy#transaction}
  */
  readonly transaction?: VerifyPolicyTransaction;
  /**
  * **[Deprecation notice: This field is deprecated and will be removed in a future release. Please use alternative verification methods.]** Defines the requirements for comparing a voice recording against a reference voice recording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#voice VerifyPolicy#voice}
  */
  readonly voice?: VerifyPolicyVoice;
}
export interface VerifyPolicyEmailOtpAttempts {
  /**
  * Allowed maximum number of OTP failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#count VerifyPolicy#count}
  */
  readonly count: number;
}

export function verifyPolicyEmailOtpAttemptsToTerraform(struct?: VerifyPolicyEmailOtpAttempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function verifyPolicyEmailOtpAttemptsToHclTerraform(struct?: VerifyPolicyEmailOtpAttempts): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyEmailOtpAttemptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyEmailOtpAttempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyEmailOtpAttempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
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
export interface VerifyPolicyEmailOtpDeliveriesCooldown {
  /**
  * Cooldown duration.
  *     - If `cooldown.time_unit` is `MINUTES`, the allowed range is `0 - 30`.
  *     - If `cooldown.time_unit` is `SECONDS`, the allowed range is `0 - 1800`.
  *     - Defaults to `30 SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#duration VerifyPolicy#duration}
  */
  readonly duration: number;
  /**
  * Time unit of the cooldown duration configuration.  Options are `MINUTES`, `SECONDS`.  Defaults to `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#time_unit VerifyPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function verifyPolicyEmailOtpDeliveriesCooldownToTerraform(struct?: VerifyPolicyEmailOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function verifyPolicyEmailOtpDeliveriesCooldownToHclTerraform(struct?: VerifyPolicyEmailOtpDeliveriesCooldown): any {
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

export class VerifyPolicyEmailOtpDeliveriesCooldownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyEmailOtpDeliveriesCooldown | undefined {
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

  public set internalValue(value: VerifyPolicyEmailOtpDeliveriesCooldown | undefined) {
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
export interface VerifyPolicyEmailOtpDeliveries {
  /**
  * Cooldown (waiting period between OTP attempts) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#cooldown VerifyPolicy#cooldown}
  */
  readonly cooldown: VerifyPolicyEmailOtpDeliveriesCooldown;
  /**
  * Allowed maximum number of OTP deliveries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#count VerifyPolicy#count}
  */
  readonly count: number;
}

export function verifyPolicyEmailOtpDeliveriesToTerraform(struct?: VerifyPolicyEmailOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown: verifyPolicyEmailOtpDeliveriesCooldownToTerraform(struct!.cooldown),
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function verifyPolicyEmailOtpDeliveriesToHclTerraform(struct?: VerifyPolicyEmailOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown: {
      value: verifyPolicyEmailOtpDeliveriesCooldownToHclTerraform(struct!.cooldown),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyEmailOtpDeliveriesCooldown",
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

export class VerifyPolicyEmailOtpDeliveriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyEmailOtpDeliveries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyEmailOtpDeliveries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cooldown.internalValue = undefined;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cooldown.internalValue = value.cooldown;
      this._count = value.count;
    }
  }

  // cooldown - computed: true, optional: false, required: true
  private _cooldown = new VerifyPolicyEmailOtpDeliveriesCooldownOutputReference(this, "cooldown");
  public get cooldown() {
    return this._cooldown;
  }
  public putCooldown(value: VerifyPolicyEmailOtpDeliveriesCooldown) {
    this._cooldown.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown.internalValue;
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
export interface VerifyPolicyEmailOtpLifetime {
  /**
  * Lifetime of the OTP delivered via email.
  *     - If `lifetime.time_unit` is `MINUTES`, the allowed range is `1 - 30`.
  *     - If `lifetime.time_unit` is `SECONDS`, the allowed range is `60 - 1800`.
  *     - Defaults to `10 MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#duration VerifyPolicy#duration}
  */
  readonly duration: number;
  /**
  * Time unit of the OTP (Email) duration lifetime.  Options are `MINUTES`, `SECONDS`.  Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#time_unit VerifyPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function verifyPolicyEmailOtpLifetimeToTerraform(struct?: VerifyPolicyEmailOtpLifetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function verifyPolicyEmailOtpLifetimeToHclTerraform(struct?: VerifyPolicyEmailOtpLifetime): any {
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

export class VerifyPolicyEmailOtpLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyEmailOtpLifetime | undefined {
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

  public set internalValue(value: VerifyPolicyEmailOtpLifetime | undefined) {
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
export interface VerifyPolicyEmailOtpNotification {
  /**
  * Name of the template variant to use to pass a one-time passcode (OTP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#variant_name VerifyPolicy#variant_name}
  */
  readonly variantName?: string;
}

export function verifyPolicyEmailOtpNotificationToTerraform(struct?: VerifyPolicyEmailOtpNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variant_name: cdktf.stringToTerraform(struct!.variantName),
  }
}


export function verifyPolicyEmailOtpNotificationToHclTerraform(struct?: VerifyPolicyEmailOtpNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variant_name: {
      value: cdktf.stringToHclTerraform(struct!.variantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyEmailOtpNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyEmailOtpNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyEmailOtpNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variantName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variantName = value.variantName;
    }
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }
}
export interface VerifyPolicyEmailOtp {
  /**
  * OTP attempts configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#attempts VerifyPolicy#attempts}
  */
  readonly attempts: VerifyPolicyEmailOtpAttempts;
  /**
  * OTP delivery configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#deliveries VerifyPolicy#deliveries}
  */
  readonly deliveries: VerifyPolicyEmailOtpDeliveries;
  /**
  * The length of time for which the OTP is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#lifetime VerifyPolicy#lifetime}
  */
  readonly lifetime: VerifyPolicyEmailOtpLifetime;
  /**
  * OTP notification template configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#notification VerifyPolicy#notification}
  */
  readonly notification?: VerifyPolicyEmailOtpNotification;
}

export function verifyPolicyEmailOtpToTerraform(struct?: VerifyPolicyEmailOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: verifyPolicyEmailOtpAttemptsToTerraform(struct!.attempts),
    deliveries: verifyPolicyEmailOtpDeliveriesToTerraform(struct!.deliveries),
    lifetime: verifyPolicyEmailOtpLifetimeToTerraform(struct!.lifetime),
    notification: verifyPolicyEmailOtpNotificationToTerraform(struct!.notification),
  }
}


export function verifyPolicyEmailOtpToHclTerraform(struct?: VerifyPolicyEmailOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: verifyPolicyEmailOtpAttemptsToHclTerraform(struct!.attempts),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyEmailOtpAttempts",
    },
    deliveries: {
      value: verifyPolicyEmailOtpDeliveriesToHclTerraform(struct!.deliveries),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyEmailOtpDeliveries",
    },
    lifetime: {
      value: verifyPolicyEmailOtpLifetimeToHclTerraform(struct!.lifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyEmailOtpLifetime",
    },
    notification: {
      value: verifyPolicyEmailOtpNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyEmailOtpNotification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyEmailOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyEmailOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts?.internalValue;
    }
    if (this._deliveries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveries = this._deliveries?.internalValue;
    }
    if (this._lifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime?.internalValue;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyEmailOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts.internalValue = undefined;
      this._deliveries.internalValue = undefined;
      this._lifetime.internalValue = undefined;
      this._notification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts.internalValue = value.attempts;
      this._deliveries.internalValue = value.deliveries;
      this._lifetime.internalValue = value.lifetime;
      this._notification.internalValue = value.notification;
    }
  }

  // attempts - computed: true, optional: false, required: true
  private _attempts = new VerifyPolicyEmailOtpAttemptsOutputReference(this, "attempts");
  public get attempts() {
    return this._attempts;
  }
  public putAttempts(value: VerifyPolicyEmailOtpAttempts) {
    this._attempts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts.internalValue;
  }

  // deliveries - computed: true, optional: false, required: true
  private _deliveries = new VerifyPolicyEmailOtpDeliveriesOutputReference(this, "deliveries");
  public get deliveries() {
    return this._deliveries;
  }
  public putDeliveries(value: VerifyPolicyEmailOtpDeliveries) {
    this._deliveries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveriesInput() {
    return this._deliveries.internalValue;
  }

  // lifetime - computed: true, optional: false, required: true
  private _lifetime = new VerifyPolicyEmailOtpLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }
  public putLifetime(value: VerifyPolicyEmailOtpLifetime) {
    this._lifetime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime.internalValue;
  }

  // notification - computed: true, optional: true, required: false
  private _notification = new VerifyPolicyEmailOtpNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: VerifyPolicyEmailOtpNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }
}
export interface VerifyPolicyEmail {
  /**
  * When enabled, PingOne Verify registers the email address with PingOne MFA as a verified MFA device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#create_mfa_device VerifyPolicy#create_mfa_device}
  */
  readonly createMfaDevice?: boolean | cdktf.IResolvable;
  /**
  * SMS/Voice/Email one-time password (OTP) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#otp VerifyPolicy#otp}
  */
  readonly otp?: VerifyPolicyEmailOtp;
  /**
  * Controls the verification requirements for an Email or Phone verification.  Options are `DISABLED`, `OPTIONAL`, `REQUIRED`.  Defaults to `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#verify VerifyPolicy#verify}
  */
  readonly verify: string;
}

export function verifyPolicyEmailToTerraform(struct?: VerifyPolicyEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_mfa_device: cdktf.booleanToTerraform(struct!.createMfaDevice),
    otp: verifyPolicyEmailOtpToTerraform(struct!.otp),
    verify: cdktf.stringToTerraform(struct!.verify),
  }
}


export function verifyPolicyEmailToHclTerraform(struct?: VerifyPolicyEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_mfa_device: {
      value: cdktf.booleanToHclTerraform(struct!.createMfaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    otp: {
      value: verifyPolicyEmailOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyEmailOtp",
    },
    verify: {
      value: cdktf.stringToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createMfaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMfaDevice = this._createMfaDevice;
    }
    if (this._otp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp?.internalValue;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createMfaDevice = undefined;
      this._otp.internalValue = undefined;
      this._verify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createMfaDevice = value.createMfaDevice;
      this._otp.internalValue = value.otp;
      this._verify = value.verify;
    }
  }

  // create_mfa_device - computed: true, optional: true, required: false
  private _createMfaDevice?: boolean | cdktf.IResolvable; 
  public get createMfaDevice() {
    return this.getBooleanAttribute('create_mfa_device');
  }
  public set createMfaDevice(value: boolean | cdktf.IResolvable) {
    this._createMfaDevice = value;
  }
  public resetCreateMfaDevice() {
    this._createMfaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMfaDeviceInput() {
    return this._createMfaDevice;
  }

  // otp - computed: true, optional: true, required: false
  private _otp = new VerifyPolicyEmailOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: VerifyPolicyEmailOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }

  // verify - computed: true, optional: false, required: true
  private _verify?: string; 
  public get verify() {
    return this.getStringAttribute('verify');
  }
  public set verify(value: string) {
    this._verify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }
}
export interface VerifyPolicyFacialComparison {
  /**
  * Facial Comparison threshold requirements.  Options are `HIGH`, `LOW`, `MEDIUM`.  Defaults to `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#threshold VerifyPolicy#threshold}
  */
  readonly threshold: string;
  /**
  * Controls Facial Comparison verification requirements.  Options are `DISABLED`, `OPTIONAL`, `REQUIRED`.  Defaults to `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#verify VerifyPolicy#verify}
  */
  readonly verify: string;
}

export function verifyPolicyFacialComparisonToTerraform(struct?: VerifyPolicyFacialComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.stringToTerraform(struct!.threshold),
    verify: cdktf.stringToTerraform(struct!.verify),
  }
}


export function verifyPolicyFacialComparisonToHclTerraform(struct?: VerifyPolicyFacialComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify: {
      value: cdktf.stringToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyFacialComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyFacialComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyFacialComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
      this._verify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
      this._verify = value.verify;
    }
  }

  // threshold - computed: true, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // verify - computed: true, optional: false, required: true
  private _verify?: string; 
  public get verify() {
    return this.getStringAttribute('verify');
  }
  public set verify(value: string) {
    this._verify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }
}
export interface VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown {
  /**
  * Cooldown duration for Aadhaar OTP deliveries.
  *     - If `cooldown.time_unit` is `MINUTES`, the allowed range is `1 - 30`.
  *     - If `cooldown.time_unit` is `SECONDS`, the allowed range is `60 - 1800`.
  *     - Defaults to `60 SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#duration VerifyPolicy#duration}
  */
  readonly duration: number;
  /**
  * Time unit of the Aadhaar OTP cooldown duration.  Options are `MINUTES`, `SECONDS`.  Defaults to `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#time_unit VerifyPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function verifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownToTerraform(struct?: VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function verifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownToHclTerraform(struct?: VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown): any {
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

export class VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown | undefined {
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

  public set internalValue(value: VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown | undefined) {
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
export interface VerifyPolicyGovernmentIdAadhaarOtpDeliveries {
  /**
  * Cooldown (waiting period between OTP deliveries) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#cooldown VerifyPolicy#cooldown}
  */
  readonly cooldown: VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown;
  /**
  * Number of OTP deliveries permitted. The allowed range is `1 - 3`.  Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#count VerifyPolicy#count}
  */
  readonly count?: number;
}

export function verifyPolicyGovernmentIdAadhaarOtpDeliveriesToTerraform(struct?: VerifyPolicyGovernmentIdAadhaarOtpDeliveries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown: verifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownToTerraform(struct!.cooldown),
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function verifyPolicyGovernmentIdAadhaarOtpDeliveriesToHclTerraform(struct?: VerifyPolicyGovernmentIdAadhaarOtpDeliveries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown: {
      value: verifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownToHclTerraform(struct!.cooldown),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown",
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

export class VerifyPolicyGovernmentIdAadhaarOtpDeliveriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyGovernmentIdAadhaarOtpDeliveries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyGovernmentIdAadhaarOtpDeliveries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cooldown.internalValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cooldown.internalValue = value.cooldown;
      this._count = value.count;
    }
  }

  // cooldown - computed: true, optional: false, required: true
  private _cooldown = new VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownOutputReference(this, "cooldown");
  public get cooldown() {
    return this._cooldown;
  }
  public putCooldown(value: VerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown) {
    this._cooldown.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown.internalValue;
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
export interface VerifyPolicyGovernmentIdAadhaarOtp {
  /**
  * OTP delivery configuration. If omitted, defaults to 3 deliveries with a cooldown of 60 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#deliveries VerifyPolicy#deliveries}
  */
  readonly deliveries?: VerifyPolicyGovernmentIdAadhaarOtpDeliveries;
}

export function verifyPolicyGovernmentIdAadhaarOtpToTerraform(struct?: VerifyPolicyGovernmentIdAadhaarOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deliveries: verifyPolicyGovernmentIdAadhaarOtpDeliveriesToTerraform(struct!.deliveries),
  }
}


export function verifyPolicyGovernmentIdAadhaarOtpToHclTerraform(struct?: VerifyPolicyGovernmentIdAadhaarOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deliveries: {
      value: verifyPolicyGovernmentIdAadhaarOtpDeliveriesToHclTerraform(struct!.deliveries),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyGovernmentIdAadhaarOtpDeliveries",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyGovernmentIdAadhaarOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyGovernmentIdAadhaarOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveries = this._deliveries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyGovernmentIdAadhaarOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveries.internalValue = value.deliveries;
    }
  }

  // deliveries - computed: true, optional: true, required: false
  private _deliveries = new VerifyPolicyGovernmentIdAadhaarOtpDeliveriesOutputReference(this, "deliveries");
  public get deliveries() {
    return this._deliveries;
  }
  public putDeliveries(value: VerifyPolicyGovernmentIdAadhaarOtpDeliveries) {
    this._deliveries.internalValue = value;
  }
  public resetDeliveries() {
    this._deliveries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveriesInput() {
    return this._deliveries.internalValue;
  }
}
export interface VerifyPolicyGovernmentIdAadhaar {
  /**
  * Whether Aadhaar verification is enabled.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#enabled VerifyPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Aadhaar one-time password (OTP) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#otp VerifyPolicy#otp}
  */
  readonly otp?: VerifyPolicyGovernmentIdAadhaarOtp;
}

export function verifyPolicyGovernmentIdAadhaarToTerraform(struct?: VerifyPolicyGovernmentIdAadhaar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    otp: verifyPolicyGovernmentIdAadhaarOtpToTerraform(struct!.otp),
  }
}


export function verifyPolicyGovernmentIdAadhaarToHclTerraform(struct?: VerifyPolicyGovernmentIdAadhaar | cdktf.IResolvable): any {
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
      value: verifyPolicyGovernmentIdAadhaarOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyGovernmentIdAadhaarOtp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyGovernmentIdAadhaarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyGovernmentIdAadhaar | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyGovernmentIdAadhaar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._otp.internalValue = undefined;
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
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // otp - computed: true, optional: true, required: false
  private _otp = new VerifyPolicyGovernmentIdAadhaarOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: VerifyPolicyGovernmentIdAadhaarOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }
}
export interface VerifyPolicyGovernmentId {
  /**
  * Aadhaar configuration for India-based government Aadhaar documents;`facial_comparison.verify` must be `REQUIRED` to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#aadhaar VerifyPolicy#aadhaar}
  */
  readonly aadhaar?: VerifyPolicyGovernmentIdAadhaar;
  /**
  * When enabled, Government ID verification fails if the document is expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#fail_expired_id VerifyPolicy#fail_expired_id}
  */
  readonly failExpiredId?: boolean | cdktf.IResolvable;
  /**
  * Determine whether document authentication is automated, manual, or possibly both.  Options are `AUTOMATIC`, `MANUAL`, `STEP_UP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#inspection_type VerifyPolicy#inspection_type}
  */
  readonly inspectionType?: string;
  /**
  * Provider to use for the automatic verification service.  Options are `MITEK`, `VERIFF`.  Defaults to `MITEK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#provider_auto VerifyPolicy#provider_auto}
  */
  readonly providerAuto?: string;
  /**
  * Provider to use for the manual verification service.  Options are `MITEK`.  Defaults to `MITEK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#provider_manual VerifyPolicy#provider_manual}
  */
  readonly providerManual?: string;
  /**
  * Number of retries permitted when submitting images.  The allowed range is `0 - 3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#retry_attempts VerifyPolicy#retry_attempts}
  */
  readonly retryAttempts?: number;
  /**
  * Controls Government ID verification requirements.  Options are `DISABLED`, `OPTIONAL`, `REQUIRED`.  Defaults to `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#verify VerifyPolicy#verify}
  */
  readonly verify: string;
  /**
  * When enabled, the AAMVA DLDV system is used to validate identity documents issued by participating states. If license allows, defaults to `true` when `government_id.inspection_type` is `REQUIRED` or `OPTIONAL`; otherwise disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#verify_aamva VerifyPolicy#verify_aamva}
  */
  readonly verifyAamva?: boolean | cdktf.IResolvable;
}

export function verifyPolicyGovernmentIdToTerraform(struct?: VerifyPolicyGovernmentId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aadhaar: verifyPolicyGovernmentIdAadhaarToTerraform(struct!.aadhaar),
    fail_expired_id: cdktf.booleanToTerraform(struct!.failExpiredId),
    inspection_type: cdktf.stringToTerraform(struct!.inspectionType),
    provider_auto: cdktf.stringToTerraform(struct!.providerAuto),
    provider_manual: cdktf.stringToTerraform(struct!.providerManual),
    retry_attempts: cdktf.numberToTerraform(struct!.retryAttempts),
    verify: cdktf.stringToTerraform(struct!.verify),
    verify_aamva: cdktf.booleanToTerraform(struct!.verifyAamva),
  }
}


export function verifyPolicyGovernmentIdToHclTerraform(struct?: VerifyPolicyGovernmentId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aadhaar: {
      value: verifyPolicyGovernmentIdAadhaarToHclTerraform(struct!.aadhaar),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyGovernmentIdAadhaar",
    },
    fail_expired_id: {
      value: cdktf.booleanToHclTerraform(struct!.failExpiredId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inspection_type: {
      value: cdktf.stringToHclTerraform(struct!.inspectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_auto: {
      value: cdktf.stringToHclTerraform(struct!.providerAuto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_manual: {
      value: cdktf.stringToHclTerraform(struct!.providerManual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.retryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify: {
      value: cdktf.stringToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_aamva: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAamva),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyGovernmentIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyGovernmentId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aadhaar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadhaar = this._aadhaar?.internalValue;
    }
    if (this._failExpiredId !== undefined) {
      hasAnyValues = true;
      internalValueResult.failExpiredId = this._failExpiredId;
    }
    if (this._inspectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionType = this._inspectionType;
    }
    if (this._providerAuto !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAuto = this._providerAuto;
    }
    if (this._providerManual !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerManual = this._providerManual;
    }
    if (this._retryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAttempts = this._retryAttempts;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    if (this._verifyAamva !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAamva = this._verifyAamva;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyGovernmentId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aadhaar.internalValue = undefined;
      this._failExpiredId = undefined;
      this._inspectionType = undefined;
      this._providerAuto = undefined;
      this._providerManual = undefined;
      this._retryAttempts = undefined;
      this._verify = undefined;
      this._verifyAamva = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aadhaar.internalValue = value.aadhaar;
      this._failExpiredId = value.failExpiredId;
      this._inspectionType = value.inspectionType;
      this._providerAuto = value.providerAuto;
      this._providerManual = value.providerManual;
      this._retryAttempts = value.retryAttempts;
      this._verify = value.verify;
      this._verifyAamva = value.verifyAamva;
    }
  }

  // aadhaar - computed: true, optional: true, required: false
  private _aadhaar = new VerifyPolicyGovernmentIdAadhaarOutputReference(this, "aadhaar");
  public get aadhaar() {
    return this._aadhaar;
  }
  public putAadhaar(value: VerifyPolicyGovernmentIdAadhaar) {
    this._aadhaar.internalValue = value;
  }
  public resetAadhaar() {
    this._aadhaar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadhaarInput() {
    return this._aadhaar.internalValue;
  }

  // fail_expired_id - computed: true, optional: true, required: false
  private _failExpiredId?: boolean | cdktf.IResolvable; 
  public get failExpiredId() {
    return this.getBooleanAttribute('fail_expired_id');
  }
  public set failExpiredId(value: boolean | cdktf.IResolvable) {
    this._failExpiredId = value;
  }
  public resetFailExpiredId() {
    this._failExpiredId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failExpiredIdInput() {
    return this._failExpiredId;
  }

  // inspection_type - computed: true, optional: true, required: false
  private _inspectionType?: string; 
  public get inspectionType() {
    return this.getStringAttribute('inspection_type');
  }
  public set inspectionType(value: string) {
    this._inspectionType = value;
  }
  public resetInspectionType() {
    this._inspectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionTypeInput() {
    return this._inspectionType;
  }

  // provider_auto - computed: true, optional: true, required: false
  private _providerAuto?: string; 
  public get providerAuto() {
    return this.getStringAttribute('provider_auto');
  }
  public set providerAuto(value: string) {
    this._providerAuto = value;
  }
  public resetProviderAuto() {
    this._providerAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAutoInput() {
    return this._providerAuto;
  }

  // provider_manual - computed: true, optional: true, required: false
  private _providerManual?: string; 
  public get providerManual() {
    return this.getStringAttribute('provider_manual');
  }
  public set providerManual(value: string) {
    this._providerManual = value;
  }
  public resetProviderManual() {
    this._providerManual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerManualInput() {
    return this._providerManual;
  }

  // retry_attempts - computed: true, optional: true, required: false
  private _retryAttempts?: number; 
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }
  public set retryAttempts(value: number) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // verify - computed: true, optional: false, required: true
  private _verify?: string; 
  public get verify() {
    return this.getStringAttribute('verify');
  }
  public set verify(value: string) {
    this._verify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // verify_aamva - computed: true, optional: true, required: false
  private _verifyAamva?: boolean | cdktf.IResolvable; 
  public get verifyAamva() {
    return this.getBooleanAttribute('verify_aamva');
  }
  public set verifyAamva(value: boolean | cdktf.IResolvable) {
    this._verifyAamva = value;
  }
  public resetVerifyAamva() {
    this._verifyAamva = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAamvaInput() {
    return this._verifyAamva;
  }
}
export interface VerifyPolicyIdentityRecordMatchingAddress {
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#field_required VerifyPolicy#field_required}
  */
  readonly fieldRequired?: boolean | cdktf.IResolvable;
  /**
  * Threshold for successful comparison.  Options are `HIGH`, `LOW`, `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#threshold VerifyPolicy#threshold}
  */
  readonly threshold: string;
}

export function verifyPolicyIdentityRecordMatchingAddressToTerraform(struct?: VerifyPolicyIdentityRecordMatchingAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_required: cdktf.booleanToTerraform(struct!.fieldRequired),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function verifyPolicyIdentityRecordMatchingAddressToHclTerraform(struct?: VerifyPolicyIdentityRecordMatchingAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_required: {
      value: cdktf.booleanToHclTerraform(struct!.fieldRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyIdentityRecordMatchingAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyIdentityRecordMatchingAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRequired = this._fieldRequired;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyIdentityRecordMatchingAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRequired = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRequired = value.fieldRequired;
      this._threshold = value.threshold;
    }
  }

  // field_required - computed: true, optional: true, required: false
  private _fieldRequired?: boolean | cdktf.IResolvable; 
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }
  public set fieldRequired(value: boolean | cdktf.IResolvable) {
    this._fieldRequired = value;
  }
  public resetFieldRequired() {
    this._fieldRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRequiredInput() {
    return this._fieldRequired;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface VerifyPolicyIdentityRecordMatchingBirthDate {
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#field_required VerifyPolicy#field_required}
  */
  readonly fieldRequired?: boolean | cdktf.IResolvable;
  /**
  * Threshold for successful comparison.  Options are `HIGH`, `LOW`, `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#threshold VerifyPolicy#threshold}
  */
  readonly threshold: string;
}

export function verifyPolicyIdentityRecordMatchingBirthDateToTerraform(struct?: VerifyPolicyIdentityRecordMatchingBirthDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_required: cdktf.booleanToTerraform(struct!.fieldRequired),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function verifyPolicyIdentityRecordMatchingBirthDateToHclTerraform(struct?: VerifyPolicyIdentityRecordMatchingBirthDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_required: {
      value: cdktf.booleanToHclTerraform(struct!.fieldRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyIdentityRecordMatchingBirthDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyIdentityRecordMatchingBirthDate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRequired = this._fieldRequired;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyIdentityRecordMatchingBirthDate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRequired = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRequired = value.fieldRequired;
      this._threshold = value.threshold;
    }
  }

  // field_required - computed: true, optional: true, required: false
  private _fieldRequired?: boolean | cdktf.IResolvable; 
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }
  public set fieldRequired(value: boolean | cdktf.IResolvable) {
    this._fieldRequired = value;
  }
  public resetFieldRequired() {
    this._fieldRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRequiredInput() {
    return this._fieldRequired;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface VerifyPolicyIdentityRecordMatchingFamilyName {
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#field_required VerifyPolicy#field_required}
  */
  readonly fieldRequired?: boolean | cdktf.IResolvable;
  /**
  * Threshold for successful comparison.  Options are `HIGH`, `LOW`, `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#threshold VerifyPolicy#threshold}
  */
  readonly threshold: string;
}

export function verifyPolicyIdentityRecordMatchingFamilyNameToTerraform(struct?: VerifyPolicyIdentityRecordMatchingFamilyName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_required: cdktf.booleanToTerraform(struct!.fieldRequired),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function verifyPolicyIdentityRecordMatchingFamilyNameToHclTerraform(struct?: VerifyPolicyIdentityRecordMatchingFamilyName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_required: {
      value: cdktf.booleanToHclTerraform(struct!.fieldRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyIdentityRecordMatchingFamilyNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyIdentityRecordMatchingFamilyName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRequired = this._fieldRequired;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyIdentityRecordMatchingFamilyName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRequired = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRequired = value.fieldRequired;
      this._threshold = value.threshold;
    }
  }

  // field_required - computed: true, optional: true, required: false
  private _fieldRequired?: boolean | cdktf.IResolvable; 
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }
  public set fieldRequired(value: boolean | cdktf.IResolvable) {
    this._fieldRequired = value;
  }
  public resetFieldRequired() {
    this._fieldRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRequiredInput() {
    return this._fieldRequired;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface VerifyPolicyIdentityRecordMatchingGivenName {
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#field_required VerifyPolicy#field_required}
  */
  readonly fieldRequired?: boolean | cdktf.IResolvable;
  /**
  * Threshold for successful comparison.  Options are `HIGH`, `LOW`, `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#threshold VerifyPolicy#threshold}
  */
  readonly threshold: string;
}

export function verifyPolicyIdentityRecordMatchingGivenNameToTerraform(struct?: VerifyPolicyIdentityRecordMatchingGivenName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_required: cdktf.booleanToTerraform(struct!.fieldRequired),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function verifyPolicyIdentityRecordMatchingGivenNameToHclTerraform(struct?: VerifyPolicyIdentityRecordMatchingGivenName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_required: {
      value: cdktf.booleanToHclTerraform(struct!.fieldRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyIdentityRecordMatchingGivenNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyIdentityRecordMatchingGivenName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRequired = this._fieldRequired;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyIdentityRecordMatchingGivenName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRequired = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRequired = value.fieldRequired;
      this._threshold = value.threshold;
    }
  }

  // field_required - computed: true, optional: true, required: false
  private _fieldRequired?: boolean | cdktf.IResolvable; 
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }
  public set fieldRequired(value: boolean | cdktf.IResolvable) {
    this._fieldRequired = value;
  }
  public resetFieldRequired() {
    this._fieldRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRequiredInput() {
    return this._fieldRequired;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface VerifyPolicyIdentityRecordMatchingName {
  /**
  * Whether the field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#field_required VerifyPolicy#field_required}
  */
  readonly fieldRequired?: boolean | cdktf.IResolvable;
  /**
  * Threshold for successful comparison.  Options are `HIGH`, `LOW`, `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#threshold VerifyPolicy#threshold}
  */
  readonly threshold: string;
}

export function verifyPolicyIdentityRecordMatchingNameToTerraform(struct?: VerifyPolicyIdentityRecordMatchingName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_required: cdktf.booleanToTerraform(struct!.fieldRequired),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function verifyPolicyIdentityRecordMatchingNameToHclTerraform(struct?: VerifyPolicyIdentityRecordMatchingName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_required: {
      value: cdktf.booleanToHclTerraform(struct!.fieldRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyIdentityRecordMatchingNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyIdentityRecordMatchingName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRequired = this._fieldRequired;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyIdentityRecordMatchingName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRequired = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRequired = value.fieldRequired;
      this._threshold = value.threshold;
    }
  }

  // field_required - computed: true, optional: true, required: false
  private _fieldRequired?: boolean | cdktf.IResolvable; 
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }
  public set fieldRequired(value: boolean | cdktf.IResolvable) {
    this._fieldRequired = value;
  }
  public resetFieldRequired() {
    this._fieldRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRequiredInput() {
    return this._fieldRequired;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface VerifyPolicyIdentityRecordMatching {
  /**
  * Configuration for address verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#address VerifyPolicy#address}
  */
  readonly address?: VerifyPolicyIdentityRecordMatchingAddress;
  /**
  * Configuration for birth date verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#birth_date VerifyPolicy#birth_date}
  */
  readonly birthDate?: VerifyPolicyIdentityRecordMatchingBirthDate;
  /**
  * Configuration for family name verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#family_name VerifyPolicy#family_name}
  */
  readonly familyName?: VerifyPolicyIdentityRecordMatchingFamilyName;
  /**
  * Configuration for given name verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#given_name VerifyPolicy#given_name}
  */
  readonly givenName?: VerifyPolicyIdentityRecordMatchingGivenName;
  /**
  * Configuration for full name verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#name VerifyPolicy#name}
  */
  readonly name?: VerifyPolicyIdentityRecordMatchingName;
}

export function verifyPolicyIdentityRecordMatchingToTerraform(struct?: VerifyPolicyIdentityRecordMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: verifyPolicyIdentityRecordMatchingAddressToTerraform(struct!.address),
    birth_date: verifyPolicyIdentityRecordMatchingBirthDateToTerraform(struct!.birthDate),
    family_name: verifyPolicyIdentityRecordMatchingFamilyNameToTerraform(struct!.familyName),
    given_name: verifyPolicyIdentityRecordMatchingGivenNameToTerraform(struct!.givenName),
    name: verifyPolicyIdentityRecordMatchingNameToTerraform(struct!.name),
  }
}


export function verifyPolicyIdentityRecordMatchingToHclTerraform(struct?: VerifyPolicyIdentityRecordMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: verifyPolicyIdentityRecordMatchingAddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyIdentityRecordMatchingAddress",
    },
    birth_date: {
      value: verifyPolicyIdentityRecordMatchingBirthDateToHclTerraform(struct!.birthDate),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyIdentityRecordMatchingBirthDate",
    },
    family_name: {
      value: verifyPolicyIdentityRecordMatchingFamilyNameToHclTerraform(struct!.familyName),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyIdentityRecordMatchingFamilyName",
    },
    given_name: {
      value: verifyPolicyIdentityRecordMatchingGivenNameToHclTerraform(struct!.givenName),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyIdentityRecordMatchingGivenName",
    },
    name: {
      value: verifyPolicyIdentityRecordMatchingNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyIdentityRecordMatchingName",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyIdentityRecordMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyIdentityRecordMatching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._birthDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.birthDate = this._birthDate?.internalValue;
    }
    if (this._familyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyName = this._familyName?.internalValue;
    }
    if (this._givenName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyIdentityRecordMatching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._birthDate.internalValue = undefined;
      this._familyName.internalValue = undefined;
      this._givenName.internalValue = undefined;
      this._name.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._birthDate.internalValue = value.birthDate;
      this._familyName.internalValue = value.familyName;
      this._givenName.internalValue = value.givenName;
      this._name.internalValue = value.name;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new VerifyPolicyIdentityRecordMatchingAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: VerifyPolicyIdentityRecordMatchingAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // birth_date - computed: false, optional: true, required: false
  private _birthDate = new VerifyPolicyIdentityRecordMatchingBirthDateOutputReference(this, "birth_date");
  public get birthDate() {
    return this._birthDate;
  }
  public putBirthDate(value: VerifyPolicyIdentityRecordMatchingBirthDate) {
    this._birthDate.internalValue = value;
  }
  public resetBirthDate() {
    this._birthDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get birthDateInput() {
    return this._birthDate.internalValue;
  }

  // family_name - computed: false, optional: true, required: false
  private _familyName = new VerifyPolicyIdentityRecordMatchingFamilyNameOutputReference(this, "family_name");
  public get familyName() {
    return this._familyName;
  }
  public putFamilyName(value: VerifyPolicyIdentityRecordMatchingFamilyName) {
    this._familyName.internalValue = value;
  }
  public resetFamilyName() {
    this._familyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName.internalValue;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName = new VerifyPolicyIdentityRecordMatchingGivenNameOutputReference(this, "given_name");
  public get givenName() {
    return this._givenName;
  }
  public putGivenName(value: VerifyPolicyIdentityRecordMatchingGivenName) {
    this._givenName.internalValue = value;
  }
  public resetGivenName() {
    this._givenName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new VerifyPolicyIdentityRecordMatchingNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: VerifyPolicyIdentityRecordMatchingName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }
}
export interface VerifyPolicyLiveness {
  /**
  * Number of retries permitted when submitting images.  The allowed range is `0 - 3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#retry_attempts VerifyPolicy#retry_attempts}
  */
  readonly retryAttempts?: number;
  /**
  * Liveness Check threshold requirements.  Options are `HIGH`, `LOW`, `MEDIUM`.  Defaults to `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#threshold VerifyPolicy#threshold}
  */
  readonly threshold: string;
  /**
  * Controls Liveness Check verification requirements.  Options are `DISABLED`, `OPTIONAL`, `REQUIRED`.  Defaults to `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#verify VerifyPolicy#verify}
  */
  readonly verify: string;
}

export function verifyPolicyLivenessToTerraform(struct?: VerifyPolicyLiveness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retry_attempts: cdktf.numberToTerraform(struct!.retryAttempts),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    verify: cdktf.stringToTerraform(struct!.verify),
  }
}


export function verifyPolicyLivenessToHclTerraform(struct?: VerifyPolicyLiveness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.retryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify: {
      value: cdktf.stringToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyLivenessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyLiveness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAttempts = this._retryAttempts;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyLiveness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retryAttempts = undefined;
      this._threshold = undefined;
      this._verify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retryAttempts = value.retryAttempts;
      this._threshold = value.threshold;
      this._verify = value.verify;
    }
  }

  // retry_attempts - computed: true, optional: true, required: false
  private _retryAttempts?: number; 
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }
  public set retryAttempts(value: number) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // threshold - computed: true, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // verify - computed: true, optional: false, required: true
  private _verify?: string; 
  public get verify() {
    return this.getStringAttribute('verify');
  }
  public set verify(value: string) {
    this._verify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }
}
export interface VerifyPolicyPhoneOtpAttempts {
  /**
  * Allowed maximum number of OTP failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#count VerifyPolicy#count}
  */
  readonly count: number;
}

export function verifyPolicyPhoneOtpAttemptsToTerraform(struct?: VerifyPolicyPhoneOtpAttempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function verifyPolicyPhoneOtpAttemptsToHclTerraform(struct?: VerifyPolicyPhoneOtpAttempts): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyPhoneOtpAttemptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyPhoneOtpAttempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyPhoneOtpAttempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
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
export interface VerifyPolicyPhoneOtpDeliveriesCooldown {
  /**
  * Cooldown duration.
  *     - If `cooldown.time_unit` is `MINUTES`, the allowed range is `0 - 30`.
  *     - If `cooldown.time_unit` is `SECONDS`, the allowed range is `0 - 1800`.
  *     - Defaults to `30 SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#duration VerifyPolicy#duration}
  */
  readonly duration: number;
  /**
  * Time unit of the cooldown duration configuration.  Options are `MINUTES`, `SECONDS`.  Defaults to `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#time_unit VerifyPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function verifyPolicyPhoneOtpDeliveriesCooldownToTerraform(struct?: VerifyPolicyPhoneOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function verifyPolicyPhoneOtpDeliveriesCooldownToHclTerraform(struct?: VerifyPolicyPhoneOtpDeliveriesCooldown): any {
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

export class VerifyPolicyPhoneOtpDeliveriesCooldownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyPhoneOtpDeliveriesCooldown | undefined {
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

  public set internalValue(value: VerifyPolicyPhoneOtpDeliveriesCooldown | undefined) {
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
export interface VerifyPolicyPhoneOtpDeliveries {
  /**
  * Cooldown (waiting period between OTP attempts) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#cooldown VerifyPolicy#cooldown}
  */
  readonly cooldown: VerifyPolicyPhoneOtpDeliveriesCooldown;
  /**
  * Allowed maximum number of OTP deliveries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#count VerifyPolicy#count}
  */
  readonly count: number;
}

export function verifyPolicyPhoneOtpDeliveriesToTerraform(struct?: VerifyPolicyPhoneOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown: verifyPolicyPhoneOtpDeliveriesCooldownToTerraform(struct!.cooldown),
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function verifyPolicyPhoneOtpDeliveriesToHclTerraform(struct?: VerifyPolicyPhoneOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown: {
      value: verifyPolicyPhoneOtpDeliveriesCooldownToHclTerraform(struct!.cooldown),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyPhoneOtpDeliveriesCooldown",
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

export class VerifyPolicyPhoneOtpDeliveriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyPhoneOtpDeliveries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown?.internalValue;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyPhoneOtpDeliveries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cooldown.internalValue = undefined;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cooldown.internalValue = value.cooldown;
      this._count = value.count;
    }
  }

  // cooldown - computed: true, optional: false, required: true
  private _cooldown = new VerifyPolicyPhoneOtpDeliveriesCooldownOutputReference(this, "cooldown");
  public get cooldown() {
    return this._cooldown;
  }
  public putCooldown(value: VerifyPolicyPhoneOtpDeliveriesCooldown) {
    this._cooldown.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown.internalValue;
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
export interface VerifyPolicyPhoneOtpLifetime {
  /**
  * Lifetime of the OTP delivered via phone (SMS).
  *     - If `lifetime.time_unit` is `MINUTES`, the allowed range is `1 - 30`.
  *     - If `lifetime.time_unit` is `SECONDS`, the allowed range is `60 - 1800`.
  *     - Defaults to `5 MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#duration VerifyPolicy#duration}
  */
  readonly duration: number;
  /**
  * Time unit of the OTP (SMS) duration lifetime.  Options are `MINUTES`, `SECONDS`.  Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#time_unit VerifyPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function verifyPolicyPhoneOtpLifetimeToTerraform(struct?: VerifyPolicyPhoneOtpLifetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function verifyPolicyPhoneOtpLifetimeToHclTerraform(struct?: VerifyPolicyPhoneOtpLifetime): any {
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

export class VerifyPolicyPhoneOtpLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyPhoneOtpLifetime | undefined {
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

  public set internalValue(value: VerifyPolicyPhoneOtpLifetime | undefined) {
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
export interface VerifyPolicyPhoneOtpNotification {
  /**
  * Name of the template variant to use to pass a one-time passcode (OTP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#variant_name VerifyPolicy#variant_name}
  */
  readonly variantName?: string;
}

export function verifyPolicyPhoneOtpNotificationToTerraform(struct?: VerifyPolicyPhoneOtpNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variant_name: cdktf.stringToTerraform(struct!.variantName),
  }
}


export function verifyPolicyPhoneOtpNotificationToHclTerraform(struct?: VerifyPolicyPhoneOtpNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variant_name: {
      value: cdktf.stringToHclTerraform(struct!.variantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyPhoneOtpNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyPhoneOtpNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyPhoneOtpNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variantName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variantName = value.variantName;
    }
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }
}
export interface VerifyPolicyPhoneOtp {
  /**
  * OTP attempts configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#attempts VerifyPolicy#attempts}
  */
  readonly attempts: VerifyPolicyPhoneOtpAttempts;
  /**
  * OTP delivery configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#deliveries VerifyPolicy#deliveries}
  */
  readonly deliveries: VerifyPolicyPhoneOtpDeliveries;
  /**
  * The length of time for which the OTP is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#lifetime VerifyPolicy#lifetime}
  */
  readonly lifetime: VerifyPolicyPhoneOtpLifetime;
  /**
  * OTP notification template configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#notification VerifyPolicy#notification}
  */
  readonly notification?: VerifyPolicyPhoneOtpNotification;
}

export function verifyPolicyPhoneOtpToTerraform(struct?: VerifyPolicyPhoneOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: verifyPolicyPhoneOtpAttemptsToTerraform(struct!.attempts),
    deliveries: verifyPolicyPhoneOtpDeliveriesToTerraform(struct!.deliveries),
    lifetime: verifyPolicyPhoneOtpLifetimeToTerraform(struct!.lifetime),
    notification: verifyPolicyPhoneOtpNotificationToTerraform(struct!.notification),
  }
}


export function verifyPolicyPhoneOtpToHclTerraform(struct?: VerifyPolicyPhoneOtp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: verifyPolicyPhoneOtpAttemptsToHclTerraform(struct!.attempts),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyPhoneOtpAttempts",
    },
    deliveries: {
      value: verifyPolicyPhoneOtpDeliveriesToHclTerraform(struct!.deliveries),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyPhoneOtpDeliveries",
    },
    lifetime: {
      value: verifyPolicyPhoneOtpLifetimeToHclTerraform(struct!.lifetime),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyPhoneOtpLifetime",
    },
    notification: {
      value: verifyPolicyPhoneOtpNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyPhoneOtpNotification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyPhoneOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyPhoneOtp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts?.internalValue;
    }
    if (this._deliveries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveries = this._deliveries?.internalValue;
    }
    if (this._lifetime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime?.internalValue;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyPhoneOtp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts.internalValue = undefined;
      this._deliveries.internalValue = undefined;
      this._lifetime.internalValue = undefined;
      this._notification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts.internalValue = value.attempts;
      this._deliveries.internalValue = value.deliveries;
      this._lifetime.internalValue = value.lifetime;
      this._notification.internalValue = value.notification;
    }
  }

  // attempts - computed: true, optional: false, required: true
  private _attempts = new VerifyPolicyPhoneOtpAttemptsOutputReference(this, "attempts");
  public get attempts() {
    return this._attempts;
  }
  public putAttempts(value: VerifyPolicyPhoneOtpAttempts) {
    this._attempts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts.internalValue;
  }

  // deliveries - computed: true, optional: false, required: true
  private _deliveries = new VerifyPolicyPhoneOtpDeliveriesOutputReference(this, "deliveries");
  public get deliveries() {
    return this._deliveries;
  }
  public putDeliveries(value: VerifyPolicyPhoneOtpDeliveries) {
    this._deliveries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveriesInput() {
    return this._deliveries.internalValue;
  }

  // lifetime - computed: true, optional: false, required: true
  private _lifetime = new VerifyPolicyPhoneOtpLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }
  public putLifetime(value: VerifyPolicyPhoneOtpLifetime) {
    this._lifetime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime.internalValue;
  }

  // notification - computed: true, optional: true, required: false
  private _notification = new VerifyPolicyPhoneOtpNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: VerifyPolicyPhoneOtpNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }
}
export interface VerifyPolicyPhone {
  /**
  * When enabled, PingOne Verify registers the mobile phone with PingOne MFA as a verified MFA device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#create_mfa_device VerifyPolicy#create_mfa_device}
  */
  readonly createMfaDevice?: boolean | cdktf.IResolvable;
  /**
  * SMS/Voice/Email one-time password (OTP) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#otp VerifyPolicy#otp}
  */
  readonly otp?: VerifyPolicyPhoneOtp;
  /**
  * Controls the verification requirements for an Email or Phone verification.  Options are `DISABLED`, `OPTIONAL`, `REQUIRED`.  Defaults to `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#verify VerifyPolicy#verify}
  */
  readonly verify: string;
}

export function verifyPolicyPhoneToTerraform(struct?: VerifyPolicyPhone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_mfa_device: cdktf.booleanToTerraform(struct!.createMfaDevice),
    otp: verifyPolicyPhoneOtpToTerraform(struct!.otp),
    verify: cdktf.stringToTerraform(struct!.verify),
  }
}


export function verifyPolicyPhoneToHclTerraform(struct?: VerifyPolicyPhone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_mfa_device: {
      value: cdktf.booleanToHclTerraform(struct!.createMfaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    otp: {
      value: verifyPolicyPhoneOtpToHclTerraform(struct!.otp),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyPhoneOtp",
    },
    verify: {
      value: cdktf.stringToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyPhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyPhone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createMfaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMfaDevice = this._createMfaDevice;
    }
    if (this._otp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp?.internalValue;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyPhone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createMfaDevice = undefined;
      this._otp.internalValue = undefined;
      this._verify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createMfaDevice = value.createMfaDevice;
      this._otp.internalValue = value.otp;
      this._verify = value.verify;
    }
  }

  // create_mfa_device - computed: true, optional: true, required: false
  private _createMfaDevice?: boolean | cdktf.IResolvable; 
  public get createMfaDevice() {
    return this.getBooleanAttribute('create_mfa_device');
  }
  public set createMfaDevice(value: boolean | cdktf.IResolvable) {
    this._createMfaDevice = value;
  }
  public resetCreateMfaDevice() {
    this._createMfaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMfaDeviceInput() {
    return this._createMfaDevice;
  }

  // otp - computed: true, optional: true, required: false
  private _otp = new VerifyPolicyPhoneOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
  public putOtp(value: VerifyPolicyPhoneOtp) {
    this._otp.internalValue = value;
  }
  public resetOtp() {
    this._otp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp.internalValue;
  }

  // verify - computed: true, optional: false, required: true
  private _verify?: string; 
  public get verify() {
    return this.getStringAttribute('verify');
  }
  public set verify(value: string) {
    this._verify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }
}
export interface VerifyPolicyTransactionDataCollectionTimeout {
  /**
  * Length of time before the data collection transaction expires.
  *     - If `transaction.data_collection.timeout.time_unit` is `MINUTES`, the allowed range is `0 - 30`.
  *     - If `transaction.data_collection.timeout.time_unit` is `SECONDS`, the allowed range is `0 - 1800`.
  *     - Defaults to `15 MINUTES`.
  * 
  *     ~> When setting or changing timeouts in the transaction configuration object, `transaction.data_collection.timeout.duration` must be less than or equal to `transaction.timeout.duration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#duration VerifyPolicy#duration}
  */
  readonly duration: number;
  /**
  * Time unit of data collection timeout.  Options are `MINUTES`, `SECONDS`.  Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#time_unit VerifyPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function verifyPolicyTransactionDataCollectionTimeoutToTerraform(struct?: VerifyPolicyTransactionDataCollectionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function verifyPolicyTransactionDataCollectionTimeoutToHclTerraform(struct?: VerifyPolicyTransactionDataCollectionTimeout): any {
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

export class VerifyPolicyTransactionDataCollectionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyTransactionDataCollectionTimeout | undefined {
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

  public set internalValue(value: VerifyPolicyTransactionDataCollectionTimeout | undefined) {
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
export interface VerifyPolicyTransactionDataCollection {
  /**
  * Object for data collection timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#timeout VerifyPolicy#timeout}
  */
  readonly timeout: VerifyPolicyTransactionDataCollectionTimeout;
}

export function verifyPolicyTransactionDataCollectionToTerraform(struct?: VerifyPolicyTransactionDataCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: verifyPolicyTransactionDataCollectionTimeoutToTerraform(struct!.timeout),
  }
}


export function verifyPolicyTransactionDataCollectionToHclTerraform(struct?: VerifyPolicyTransactionDataCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: verifyPolicyTransactionDataCollectionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyTransactionDataCollectionTimeout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyTransactionDataCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyTransactionDataCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyTransactionDataCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout.internalValue = value.timeout;
    }
  }

  // timeout - computed: true, optional: false, required: true
  private _timeout = new VerifyPolicyTransactionDataCollectionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: VerifyPolicyTransactionDataCollectionTimeout) {
    this._timeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface VerifyPolicyTransactionTimeout {
  /**
  * Length of time before the transaction expires.
  *     - If `transaction.timeout.time_unit` is `MINUTES`, the allowed range is `0 - 30`.
  *     - If `transaction.timeout.time_unit` is `SECONDS`, the allowed range is `0 - 1800`.
  *     - Defaults to `30 MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#duration VerifyPolicy#duration}
  */
  readonly duration: number;
  /**
  * Time unit of transaction timeout.  Options are `MINUTES`, `SECONDS`.  Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#time_unit VerifyPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function verifyPolicyTransactionTimeoutToTerraform(struct?: VerifyPolicyTransactionTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function verifyPolicyTransactionTimeoutToHclTerraform(struct?: VerifyPolicyTransactionTimeout | cdktf.IResolvable): any {
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

export class VerifyPolicyTransactionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyTransactionTimeout | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VerifyPolicyTransactionTimeout | cdktf.IResolvable | undefined) {
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
export interface VerifyPolicyTransaction {
  /**
  * Object for data collection timeout definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#data_collection VerifyPolicy#data_collection}
  */
  readonly dataCollection?: VerifyPolicyTransactionDataCollection;
  /**
  * When `true`, collects documents specified in the policy without determining their validity; defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#data_collection_only VerifyPolicy#data_collection_only}
  */
  readonly dataCollectionOnly?: boolean | cdktf.IResolvable;
  /**
  * Object for transaction timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#timeout VerifyPolicy#timeout}
  */
  readonly timeout?: VerifyPolicyTransactionTimeout;
}

export function verifyPolicyTransactionToTerraform(struct?: VerifyPolicyTransaction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_collection: verifyPolicyTransactionDataCollectionToTerraform(struct!.dataCollection),
    data_collection_only: cdktf.booleanToTerraform(struct!.dataCollectionOnly),
    timeout: verifyPolicyTransactionTimeoutToTerraform(struct!.timeout),
  }
}


export function verifyPolicyTransactionToHclTerraform(struct?: VerifyPolicyTransaction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_collection: {
      value: verifyPolicyTransactionDataCollectionToHclTerraform(struct!.dataCollection),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyTransactionDataCollection",
    },
    data_collection_only: {
      value: cdktf.booleanToHclTerraform(struct!.dataCollectionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: verifyPolicyTransactionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyTransactionTimeout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyTransactionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyTransaction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCollection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCollection = this._dataCollection?.internalValue;
    }
    if (this._dataCollectionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCollectionOnly = this._dataCollectionOnly;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyTransaction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataCollection.internalValue = undefined;
      this._dataCollectionOnly = undefined;
      this._timeout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataCollection.internalValue = value.dataCollection;
      this._dataCollectionOnly = value.dataCollectionOnly;
      this._timeout.internalValue = value.timeout;
    }
  }

  // data_collection - computed: true, optional: true, required: false
  private _dataCollection = new VerifyPolicyTransactionDataCollectionOutputReference(this, "data_collection");
  public get dataCollection() {
    return this._dataCollection;
  }
  public putDataCollection(value: VerifyPolicyTransactionDataCollection) {
    this._dataCollection.internalValue = value;
  }
  public resetDataCollection() {
    this._dataCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionInput() {
    return this._dataCollection.internalValue;
  }

  // data_collection_only - computed: true, optional: true, required: false
  private _dataCollectionOnly?: boolean | cdktf.IResolvable; 
  public get dataCollectionOnly() {
    return this.getBooleanAttribute('data_collection_only');
  }
  public set dataCollectionOnly(value: boolean | cdktf.IResolvable) {
    this._dataCollectionOnly = value;
  }
  public resetDataCollectionOnly() {
    this._dataCollectionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOnlyInput() {
    return this._dataCollectionOnly;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout = new VerifyPolicyTransactionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: VerifyPolicyTransactionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface VerifyPolicyVoiceReferenceData {
  /**
  * Controls if the service stores the original voice recordings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#retain_original_recordings VerifyPolicy#retain_original_recordings}
  */
  readonly retainOriginalRecordings?: boolean | cdktf.IResolvable;
  /**
  * Controls updates to user's voice reference data (voice recordings) upon user re-enrollment. If `TRUE`, new data adds to existing data. If `FALSE`, new data replaces existing data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#update_on_reenrollment VerifyPolicy#update_on_reenrollment}
  */
  readonly updateOnReenrollment?: boolean | cdktf.IResolvable;
  /**
  * Controls updates to user's voice reference data (voice recordings) upon user verification. If `TRUE`, new data adds to existing data. If `FALSE`, new voice recordings are not retained as reference data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#update_on_verification VerifyPolicy#update_on_verification}
  */
  readonly updateOnVerification?: boolean | cdktf.IResolvable;
}

export function verifyPolicyVoiceReferenceDataToTerraform(struct?: VerifyPolicyVoiceReferenceData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retain_original_recordings: cdktf.booleanToTerraform(struct!.retainOriginalRecordings),
    update_on_reenrollment: cdktf.booleanToTerraform(struct!.updateOnReenrollment),
    update_on_verification: cdktf.booleanToTerraform(struct!.updateOnVerification),
  }
}


export function verifyPolicyVoiceReferenceDataToHclTerraform(struct?: VerifyPolicyVoiceReferenceData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retain_original_recordings: {
      value: cdktf.booleanToHclTerraform(struct!.retainOriginalRecordings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_on_reenrollment: {
      value: cdktf.booleanToHclTerraform(struct!.updateOnReenrollment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_on_verification: {
      value: cdktf.booleanToHclTerraform(struct!.updateOnVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyVoiceReferenceDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyVoiceReferenceData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainOriginalRecordings !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainOriginalRecordings = this._retainOriginalRecordings;
    }
    if (this._updateOnReenrollment !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateOnReenrollment = this._updateOnReenrollment;
    }
    if (this._updateOnVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateOnVerification = this._updateOnVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyVoiceReferenceData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retainOriginalRecordings = undefined;
      this._updateOnReenrollment = undefined;
      this._updateOnVerification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retainOriginalRecordings = value.retainOriginalRecordings;
      this._updateOnReenrollment = value.updateOnReenrollment;
      this._updateOnVerification = value.updateOnVerification;
    }
  }

  // retain_original_recordings - computed: true, optional: true, required: false
  private _retainOriginalRecordings?: boolean | cdktf.IResolvable; 
  public get retainOriginalRecordings() {
    return this.getBooleanAttribute('retain_original_recordings');
  }
  public set retainOriginalRecordings(value: boolean | cdktf.IResolvable) {
    this._retainOriginalRecordings = value;
  }
  public resetRetainOriginalRecordings() {
    this._retainOriginalRecordings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainOriginalRecordingsInput() {
    return this._retainOriginalRecordings;
  }

  // update_on_reenrollment - computed: true, optional: true, required: false
  private _updateOnReenrollment?: boolean | cdktf.IResolvable; 
  public get updateOnReenrollment() {
    return this.getBooleanAttribute('update_on_reenrollment');
  }
  public set updateOnReenrollment(value: boolean | cdktf.IResolvable) {
    this._updateOnReenrollment = value;
  }
  public resetUpdateOnReenrollment() {
    this._updateOnReenrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOnReenrollmentInput() {
    return this._updateOnReenrollment;
  }

  // update_on_verification - computed: true, optional: true, required: false
  private _updateOnVerification?: boolean | cdktf.IResolvable; 
  public get updateOnVerification() {
    return this.getBooleanAttribute('update_on_verification');
  }
  public set updateOnVerification(value: boolean | cdktf.IResolvable) {
    this._updateOnVerification = value;
  }
  public resetUpdateOnVerification() {
    this._updateOnVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOnVerificationInput() {
    return this._updateOnVerification;
  }
}
export interface VerifyPolicyVoiceTextDependent {
  /**
  * Number of voice samples to collect. The allowed range is `3 - 5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#samples VerifyPolicy#samples}
  */
  readonly samples: number;
  /**
  * The identifier (UUID) of a defined `voice_phrase` to associate with the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#voice_phrase_id VerifyPolicy#voice_phrase_id}
  */
  readonly voicePhraseId: string;
}

export function verifyPolicyVoiceTextDependentToTerraform(struct?: VerifyPolicyVoiceTextDependent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    samples: cdktf.numberToTerraform(struct!.samples),
    voice_phrase_id: cdktf.stringToTerraform(struct!.voicePhraseId),
  }
}


export function verifyPolicyVoiceTextDependentToHclTerraform(struct?: VerifyPolicyVoiceTextDependent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    voice_phrase_id: {
      value: cdktf.stringToHclTerraform(struct!.voicePhraseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyVoiceTextDependentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyVoiceTextDependent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._voicePhraseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.voicePhraseId = this._voicePhraseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyVoiceTextDependent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._samples = undefined;
      this._voicePhraseId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._samples = value.samples;
      this._voicePhraseId = value.voicePhraseId;
    }
  }

  // samples - computed: true, optional: false, required: true
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // voice_phrase_id - computed: true, optional: false, required: true
  private _voicePhraseId?: string; 
  public get voicePhraseId() {
    return this.getStringAttribute('voice_phrase_id');
  }
  public set voicePhraseId(value: string) {
    this._voicePhraseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voicePhraseIdInput() {
    return this._voicePhraseId;
  }
}
export interface VerifyPolicyVoice {
  /**
  * Comparison threshold requirements.  Options are `HIGH`, `LOW`, `MEDIUM`.  Defaults to `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#comparison_threshold VerifyPolicy#comparison_threshold}
  */
  readonly comparisonThreshold: string;
  /**
  * Controls if the transaction performs voice enrollment (`TRUE`) or voice verification (`FALSE`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#enrollment VerifyPolicy#enrollment}
  */
  readonly enrollment: boolean | cdktf.IResolvable;
  /**
  * Liveness threshold requirements.  Options are `HIGH`, `LOW`, `MEDIUM`.  Defaults to `MEDIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#liveness_threshold VerifyPolicy#liveness_threshold}
  */
  readonly livenessThreshold: string;
  /**
  * Object for configuration of voice recording reference data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#reference_data VerifyPolicy#reference_data}
  */
  readonly referenceData?: VerifyPolicyVoiceReferenceData;
  /**
  * Object for configuration of text dependent voice verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#text_dependent VerifyPolicy#text_dependent}
  */
  readonly textDependent?: VerifyPolicyVoiceTextDependent;
  /**
  * Controls the verification requirements for a Voice verification.  Options are `DISABLED`, `OPTIONAL`, `REQUIRED`.  Defaults to `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#verify VerifyPolicy#verify}
  */
  readonly verify: string;
}

export function verifyPolicyVoiceToTerraform(struct?: VerifyPolicyVoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_threshold: cdktf.stringToTerraform(struct!.comparisonThreshold),
    enrollment: cdktf.booleanToTerraform(struct!.enrollment),
    liveness_threshold: cdktf.stringToTerraform(struct!.livenessThreshold),
    reference_data: verifyPolicyVoiceReferenceDataToTerraform(struct!.referenceData),
    text_dependent: verifyPolicyVoiceTextDependentToTerraform(struct!.textDependent),
    verify: cdktf.stringToTerraform(struct!.verify),
  }
}


export function verifyPolicyVoiceToHclTerraform(struct?: VerifyPolicyVoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_threshold: {
      value: cdktf.stringToHclTerraform(struct!.comparisonThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrollment: {
      value: cdktf.booleanToHclTerraform(struct!.enrollment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    liveness_threshold: {
      value: cdktf.stringToHclTerraform(struct!.livenessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_data: {
      value: verifyPolicyVoiceReferenceDataToHclTerraform(struct!.referenceData),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyVoiceReferenceData",
    },
    text_dependent: {
      value: verifyPolicyVoiceTextDependentToHclTerraform(struct!.textDependent),
      isBlock: true,
      type: "struct",
      storageClassType: "VerifyPolicyVoiceTextDependent",
    },
    verify: {
      value: cdktf.stringToHclTerraform(struct!.verify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifyPolicyVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VerifyPolicyVoice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonThreshold = this._comparisonThreshold;
    }
    if (this._enrollment !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollment = this._enrollment;
    }
    if (this._livenessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessThreshold = this._livenessThreshold;
    }
    if (this._referenceData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceData = this._referenceData?.internalValue;
    }
    if (this._textDependent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDependent = this._textDependent?.internalValue;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifyPolicyVoice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonThreshold = undefined;
      this._enrollment = undefined;
      this._livenessThreshold = undefined;
      this._referenceData.internalValue = undefined;
      this._textDependent.internalValue = undefined;
      this._verify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonThreshold = value.comparisonThreshold;
      this._enrollment = value.enrollment;
      this._livenessThreshold = value.livenessThreshold;
      this._referenceData.internalValue = value.referenceData;
      this._textDependent.internalValue = value.textDependent;
      this._verify = value.verify;
    }
  }

  // comparison_threshold - computed: true, optional: false, required: true
  private _comparisonThreshold?: string; 
  public get comparisonThreshold() {
    return this.getStringAttribute('comparison_threshold');
  }
  public set comparisonThreshold(value: string) {
    this._comparisonThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonThresholdInput() {
    return this._comparisonThreshold;
  }

  // enrollment - computed: true, optional: false, required: true
  private _enrollment?: boolean | cdktf.IResolvable; 
  public get enrollment() {
    return this.getBooleanAttribute('enrollment');
  }
  public set enrollment(value: boolean | cdktf.IResolvable) {
    this._enrollment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentInput() {
    return this._enrollment;
  }

  // liveness_threshold - computed: true, optional: false, required: true
  private _livenessThreshold?: string; 
  public get livenessThreshold() {
    return this.getStringAttribute('liveness_threshold');
  }
  public set livenessThreshold(value: string) {
    this._livenessThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessThresholdInput() {
    return this._livenessThreshold;
  }

  // reference_data - computed: true, optional: true, required: false
  private _referenceData = new VerifyPolicyVoiceReferenceDataOutputReference(this, "reference_data");
  public get referenceData() {
    return this._referenceData;
  }
  public putReferenceData(value: VerifyPolicyVoiceReferenceData) {
    this._referenceData.internalValue = value;
  }
  public resetReferenceData() {
    this._referenceData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceDataInput() {
    return this._referenceData.internalValue;
  }

  // text_dependent - computed: true, optional: true, required: false
  private _textDependent = new VerifyPolicyVoiceTextDependentOutputReference(this, "text_dependent");
  public get textDependent() {
    return this._textDependent;
  }
  public putTextDependent(value: VerifyPolicyVoiceTextDependent) {
    this._textDependent.internalValue = value;
  }
  public resetTextDependent() {
    this._textDependent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textDependentInput() {
    return this._textDependent.internalValue;
  }

  // verify - computed: true, optional: false, required: true
  private _verify?: string; 
  public get verify() {
    return this.getStringAttribute('verify');
  }
  public set verify(value: string) {
    this._verify = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy pingone_verify_policy}
*/
export class VerifyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_verify_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifyPolicy to import
  * @param importFromId The id of the existing VerifyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_verify_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/verify_policy pingone_verify_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VerifyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_verify_policy',
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
    this._description = config.description;
    this._email.internalValue = config.email;
    this._environmentId = config.environmentId;
    this._facialComparison.internalValue = config.facialComparison;
    this._governmentId.internalValue = config.governmentId;
    this._identityRecordMatching.internalValue = config.identityRecordMatching;
    this._liveness.internalValue = config.liveness;
    this._name = config.name;
    this._phone.internalValue = config.phone;
    this._transaction.internalValue = config.transaction;
    this._voice.internalValue = config.voice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // email - computed: true, optional: true, required: false
  private _email = new VerifyPolicyEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: VerifyPolicyEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
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

  // facial_comparison - computed: true, optional: true, required: false
  private _facialComparison = new VerifyPolicyFacialComparisonOutputReference(this, "facial_comparison");
  public get facialComparison() {
    return this._facialComparison;
  }
  public putFacialComparison(value: VerifyPolicyFacialComparison) {
    this._facialComparison.internalValue = value;
  }
  public resetFacialComparison() {
    this._facialComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facialComparisonInput() {
    return this._facialComparison.internalValue;
  }

  // government_id - computed: true, optional: true, required: false
  private _governmentId = new VerifyPolicyGovernmentIdOutputReference(this, "government_id");
  public get governmentId() {
    return this._governmentId;
  }
  public putGovernmentId(value: VerifyPolicyGovernmentId) {
    this._governmentId.internalValue = value;
  }
  public resetGovernmentId() {
    this._governmentId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get governmentIdInput() {
    return this._governmentId.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_record_matching - computed: false, optional: true, required: false
  private _identityRecordMatching = new VerifyPolicyIdentityRecordMatchingOutputReference(this, "identity_record_matching");
  public get identityRecordMatching() {
    return this._identityRecordMatching;
  }
  public putIdentityRecordMatching(value: VerifyPolicyIdentityRecordMatching) {
    this._identityRecordMatching.internalValue = value;
  }
  public resetIdentityRecordMatching() {
    this._identityRecordMatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityRecordMatchingInput() {
    return this._identityRecordMatching.internalValue;
  }

  // liveness - computed: true, optional: true, required: false
  private _liveness = new VerifyPolicyLivenessOutputReference(this, "liveness");
  public get liveness() {
    return this._liveness;
  }
  public putLiveness(value: VerifyPolicyLiveness) {
    this._liveness.internalValue = value;
  }
  public resetLiveness() {
    this._liveness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessInput() {
    return this._liveness.internalValue;
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

  // phone - computed: true, optional: true, required: false
  private _phone = new VerifyPolicyPhoneOutputReference(this, "phone");
  public get phone() {
    return this._phone;
  }
  public putPhone(value: VerifyPolicyPhone) {
    this._phone.internalValue = value;
  }
  public resetPhone() {
    this._phone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone.internalValue;
  }

  // transaction - computed: true, optional: true, required: false
  private _transaction = new VerifyPolicyTransactionOutputReference(this, "transaction");
  public get transaction() {
    return this._transaction;
  }
  public putTransaction(value: VerifyPolicyTransaction) {
    this._transaction.internalValue = value;
  }
  public resetTransaction() {
    this._transaction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionInput() {
    return this._transaction.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // voice - computed: true, optional: true, required: false
  private _voice = new VerifyPolicyVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: VerifyPolicyVoice) {
    this._voice.internalValue = value;
  }
  public resetVoice() {
    this._voice.internalValue = undefined;
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
      description: cdktf.stringToTerraform(this._description),
      email: verifyPolicyEmailToTerraform(this._email.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      facial_comparison: verifyPolicyFacialComparisonToTerraform(this._facialComparison.internalValue),
      government_id: verifyPolicyGovernmentIdToTerraform(this._governmentId.internalValue),
      identity_record_matching: verifyPolicyIdentityRecordMatchingToTerraform(this._identityRecordMatching.internalValue),
      liveness: verifyPolicyLivenessToTerraform(this._liveness.internalValue),
      name: cdktf.stringToTerraform(this._name),
      phone: verifyPolicyPhoneToTerraform(this._phone.internalValue),
      transaction: verifyPolicyTransactionToTerraform(this._transaction.internalValue),
      voice: verifyPolicyVoiceToTerraform(this._voice.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: verifyPolicyEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifyPolicyEmail",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facial_comparison: {
        value: verifyPolicyFacialComparisonToHclTerraform(this._facialComparison.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifyPolicyFacialComparison",
      },
      government_id: {
        value: verifyPolicyGovernmentIdToHclTerraform(this._governmentId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifyPolicyGovernmentId",
      },
      identity_record_matching: {
        value: verifyPolicyIdentityRecordMatchingToHclTerraform(this._identityRecordMatching.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifyPolicyIdentityRecordMatching",
      },
      liveness: {
        value: verifyPolicyLivenessToHclTerraform(this._liveness.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifyPolicyLiveness",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: verifyPolicyPhoneToHclTerraform(this._phone.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifyPolicyPhone",
      },
      transaction: {
        value: verifyPolicyTransactionToHclTerraform(this._transaction.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifyPolicyTransaction",
      },
      voice: {
        value: verifyPolicyVoiceToHclTerraform(this._voice.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VerifyPolicyVoice",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
