// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneVerifyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set value to `true` to return the default verify policy. There is only one default policy per environment.  Exactly one of the following must be defined: `verify_policy_id`, `name`, `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_policy#default DataPingoneVerifyPolicy#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * PingOne environment identifier (UUID) in which the verify policy exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_policy#environment_id DataPingoneVerifyPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * Name of the verification policy displayed in PingOne Admin UI.  Exactly one of the following must be defined: `verify_policy_id`, `name`, `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_policy#name DataPingoneVerifyPolicy#name}
  */
  readonly name?: string;
  /**
  * Identifier (UUID) associated with the verify policy.  Exactly one of the following must be defined: `verify_policy_id`, `name`, `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_policy#verify_policy_id DataPingoneVerifyPolicy#verify_policy_id}
  */
  readonly verifyPolicyId?: string;
}
export interface DataPingoneVerifyPolicyEmailOtpAttempts {
}

export function dataPingoneVerifyPolicyEmailOtpAttemptsToTerraform(struct?: DataPingoneVerifyPolicyEmailOtpAttempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyEmailOtpAttemptsToHclTerraform(struct?: DataPingoneVerifyPolicyEmailOtpAttempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyEmailOtpAttemptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyEmailOtpAttempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyEmailOtpAttempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}
export interface DataPingoneVerifyPolicyEmailOtpDeliveriesCooldown {
}

export function dataPingoneVerifyPolicyEmailOtpDeliveriesCooldownToTerraform(struct?: DataPingoneVerifyPolicyEmailOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyEmailOtpDeliveriesCooldownToHclTerraform(struct?: DataPingoneVerifyPolicyEmailOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyEmailOtpDeliveriesCooldownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyEmailOtpDeliveriesCooldown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyEmailOtpDeliveriesCooldown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export interface DataPingoneVerifyPolicyEmailOtpDeliveries {
}

export function dataPingoneVerifyPolicyEmailOtpDeliveriesToTerraform(struct?: DataPingoneVerifyPolicyEmailOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyEmailOtpDeliveriesToHclTerraform(struct?: DataPingoneVerifyPolicyEmailOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyEmailOtpDeliveriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyEmailOtpDeliveries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyEmailOtpDeliveries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooldown - computed: true, optional: false, required: false
  private _cooldown = new DataPingoneVerifyPolicyEmailOtpDeliveriesCooldownOutputReference(this, "cooldown");
  public get cooldown() {
    return this._cooldown;
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}
export interface DataPingoneVerifyPolicyEmailOtpLifetime {
}

export function dataPingoneVerifyPolicyEmailOtpLifetimeToTerraform(struct?: DataPingoneVerifyPolicyEmailOtpLifetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyEmailOtpLifetimeToHclTerraform(struct?: DataPingoneVerifyPolicyEmailOtpLifetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyEmailOtpLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyEmailOtpLifetime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyEmailOtpLifetime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export interface DataPingoneVerifyPolicyEmailOtpNotification {
}

export function dataPingoneVerifyPolicyEmailOtpNotificationToTerraform(struct?: DataPingoneVerifyPolicyEmailOtpNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyEmailOtpNotificationToHclTerraform(struct?: DataPingoneVerifyPolicyEmailOtpNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyEmailOtpNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyEmailOtpNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyEmailOtpNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // variant_name - computed: true, optional: false, required: false
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
}
export interface DataPingoneVerifyPolicyEmailOtp {
}

export function dataPingoneVerifyPolicyEmailOtpToTerraform(struct?: DataPingoneVerifyPolicyEmailOtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyEmailOtpToHclTerraform(struct?: DataPingoneVerifyPolicyEmailOtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyEmailOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyEmailOtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyEmailOtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempts - computed: true, optional: false, required: false
  private _attempts = new DataPingoneVerifyPolicyEmailOtpAttemptsOutputReference(this, "attempts");
  public get attempts() {
    return this._attempts;
  }

  // deliveries - computed: true, optional: false, required: false
  private _deliveries = new DataPingoneVerifyPolicyEmailOtpDeliveriesOutputReference(this, "deliveries");
  public get deliveries() {
    return this._deliveries;
  }

  // lifetime - computed: true, optional: false, required: false
  private _lifetime = new DataPingoneVerifyPolicyEmailOtpLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }

  // notification - computed: true, optional: false, required: false
  private _notification = new DataPingoneVerifyPolicyEmailOtpNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
}
export interface DataPingoneVerifyPolicyEmail {
}

export function dataPingoneVerifyPolicyEmailToTerraform(struct?: DataPingoneVerifyPolicyEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyEmailToHclTerraform(struct?: DataPingoneVerifyPolicyEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_mfa_device - computed: true, optional: false, required: false
  public get createMfaDevice() {
    return this.getBooleanAttribute('create_mfa_device');
  }

  // otp - computed: true, optional: false, required: false
  private _otp = new DataPingoneVerifyPolicyEmailOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }

  // verify - computed: true, optional: false, required: false
  public get verify() {
    return this.getStringAttribute('verify');
  }
}
export interface DataPingoneVerifyPolicyFacialComparison {
}

export function dataPingoneVerifyPolicyFacialComparisonToTerraform(struct?: DataPingoneVerifyPolicyFacialComparison): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyFacialComparisonToHclTerraform(struct?: DataPingoneVerifyPolicyFacialComparison): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyFacialComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyFacialComparison | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyFacialComparison | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }

  // verify - computed: true, optional: false, required: false
  public get verify() {
    return this.getStringAttribute('verify');
  }
}
export interface DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown {
}

export function dataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownToTerraform(struct?: DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownToHclTerraform(struct?: DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export interface DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveries {
}

export function dataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesToTerraform(struct?: DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesToHclTerraform(struct?: DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooldown - computed: true, optional: false, required: false
  private _cooldown = new DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesCooldownOutputReference(this, "cooldown");
  public get cooldown() {
    return this._cooldown;
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}
export interface DataPingoneVerifyPolicyGovernmentIdAadhaarOtp {
}

export function dataPingoneVerifyPolicyGovernmentIdAadhaarOtpToTerraform(struct?: DataPingoneVerifyPolicyGovernmentIdAadhaarOtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyGovernmentIdAadhaarOtpToHclTerraform(struct?: DataPingoneVerifyPolicyGovernmentIdAadhaarOtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyGovernmentIdAadhaarOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyGovernmentIdAadhaarOtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyGovernmentIdAadhaarOtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deliveries - computed: true, optional: false, required: false
  private _deliveries = new DataPingoneVerifyPolicyGovernmentIdAadhaarOtpDeliveriesOutputReference(this, "deliveries");
  public get deliveries() {
    return this._deliveries;
  }
}
export interface DataPingoneVerifyPolicyGovernmentIdAadhaar {
}

export function dataPingoneVerifyPolicyGovernmentIdAadhaarToTerraform(struct?: DataPingoneVerifyPolicyGovernmentIdAadhaar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyGovernmentIdAadhaarToHclTerraform(struct?: DataPingoneVerifyPolicyGovernmentIdAadhaar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyGovernmentIdAadhaarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyGovernmentIdAadhaar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyGovernmentIdAadhaar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // otp - computed: true, optional: false, required: false
  private _otp = new DataPingoneVerifyPolicyGovernmentIdAadhaarOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }
}
export interface DataPingoneVerifyPolicyGovernmentId {
}

export function dataPingoneVerifyPolicyGovernmentIdToTerraform(struct?: DataPingoneVerifyPolicyGovernmentId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyGovernmentIdToHclTerraform(struct?: DataPingoneVerifyPolicyGovernmentId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyGovernmentIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyGovernmentId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyGovernmentId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aadhaar - computed: true, optional: false, required: false
  private _aadhaar = new DataPingoneVerifyPolicyGovernmentIdAadhaarOutputReference(this, "aadhaar");
  public get aadhaar() {
    return this._aadhaar;
  }

  // fail_expired_id - computed: true, optional: false, required: false
  public get failExpiredId() {
    return this.getBooleanAttribute('fail_expired_id');
  }

  // inspection_type - computed: true, optional: false, required: false
  public get inspectionType() {
    return this.getStringAttribute('inspection_type');
  }

  // provider_auto - computed: true, optional: false, required: false
  public get providerAuto() {
    return this.getStringAttribute('provider_auto');
  }

  // provider_manual - computed: true, optional: false, required: false
  public get providerManual() {
    return this.getStringAttribute('provider_manual');
  }

  // retry_attempts - computed: true, optional: false, required: false
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }

  // verify - computed: true, optional: false, required: false
  public get verify() {
    return this.getStringAttribute('verify');
  }

  // verify_aamva - computed: true, optional: false, required: false
  public get verifyAamva() {
    return this.getBooleanAttribute('verify_aamva');
  }
}
export interface DataPingoneVerifyPolicyIdentityRecordMatchingAddress {
}

export function dataPingoneVerifyPolicyIdentityRecordMatchingAddressToTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyIdentityRecordMatchingAddressToHclTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyIdentityRecordMatchingAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyIdentityRecordMatchingAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyIdentityRecordMatchingAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_required - computed: true, optional: false, required: false
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}
export interface DataPingoneVerifyPolicyIdentityRecordMatchingBirthDate {
}

export function dataPingoneVerifyPolicyIdentityRecordMatchingBirthDateToTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingBirthDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyIdentityRecordMatchingBirthDateToHclTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingBirthDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyIdentityRecordMatchingBirthDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyIdentityRecordMatchingBirthDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyIdentityRecordMatchingBirthDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_required - computed: true, optional: false, required: false
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}
export interface DataPingoneVerifyPolicyIdentityRecordMatchingFamilyName {
}

export function dataPingoneVerifyPolicyIdentityRecordMatchingFamilyNameToTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingFamilyName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyIdentityRecordMatchingFamilyNameToHclTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingFamilyName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyIdentityRecordMatchingFamilyNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyIdentityRecordMatchingFamilyName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyIdentityRecordMatchingFamilyName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_required - computed: true, optional: false, required: false
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}
export interface DataPingoneVerifyPolicyIdentityRecordMatchingGivenName {
}

export function dataPingoneVerifyPolicyIdentityRecordMatchingGivenNameToTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingGivenName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyIdentityRecordMatchingGivenNameToHclTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingGivenName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyIdentityRecordMatchingGivenNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyIdentityRecordMatchingGivenName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyIdentityRecordMatchingGivenName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_required - computed: true, optional: false, required: false
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}
export interface DataPingoneVerifyPolicyIdentityRecordMatchingName {
}

export function dataPingoneVerifyPolicyIdentityRecordMatchingNameToTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyIdentityRecordMatchingNameToHclTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatchingName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyIdentityRecordMatchingNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyIdentityRecordMatchingName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyIdentityRecordMatchingName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_required - computed: true, optional: false, required: false
  public get fieldRequired() {
    return this.getBooleanAttribute('field_required');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}
export interface DataPingoneVerifyPolicyIdentityRecordMatching {
}

export function dataPingoneVerifyPolicyIdentityRecordMatchingToTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyIdentityRecordMatchingToHclTerraform(struct?: DataPingoneVerifyPolicyIdentityRecordMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyIdentityRecordMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyIdentityRecordMatching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyIdentityRecordMatching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  private _address = new DataPingoneVerifyPolicyIdentityRecordMatchingAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }

  // birth_date - computed: true, optional: false, required: false
  private _birthDate = new DataPingoneVerifyPolicyIdentityRecordMatchingBirthDateOutputReference(this, "birth_date");
  public get birthDate() {
    return this._birthDate;
  }

  // family_name - computed: true, optional: false, required: false
  private _familyName = new DataPingoneVerifyPolicyIdentityRecordMatchingFamilyNameOutputReference(this, "family_name");
  public get familyName() {
    return this._familyName;
  }

  // given_name - computed: true, optional: false, required: false
  private _givenName = new DataPingoneVerifyPolicyIdentityRecordMatchingGivenNameOutputReference(this, "given_name");
  public get givenName() {
    return this._givenName;
  }

  // name - computed: true, optional: false, required: false
  private _name = new DataPingoneVerifyPolicyIdentityRecordMatchingNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
}
export interface DataPingoneVerifyPolicyLiveness {
}

export function dataPingoneVerifyPolicyLivenessToTerraform(struct?: DataPingoneVerifyPolicyLiveness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyLivenessToHclTerraform(struct?: DataPingoneVerifyPolicyLiveness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyLivenessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyLiveness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyLiveness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retry_attempts - computed: true, optional: false, required: false
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }

  // verify - computed: true, optional: false, required: false
  public get verify() {
    return this.getStringAttribute('verify');
  }
}
export interface DataPingoneVerifyPolicyPhoneOtpAttempts {
}

export function dataPingoneVerifyPolicyPhoneOtpAttemptsToTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpAttempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyPhoneOtpAttemptsToHclTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpAttempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyPhoneOtpAttemptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyPhoneOtpAttempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyPhoneOtpAttempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}
export interface DataPingoneVerifyPolicyPhoneOtpDeliveriesCooldown {
}

export function dataPingoneVerifyPolicyPhoneOtpDeliveriesCooldownToTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyPhoneOtpDeliveriesCooldownToHclTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpDeliveriesCooldown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyPhoneOtpDeliveriesCooldownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyPhoneOtpDeliveriesCooldown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyPhoneOtpDeliveriesCooldown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export interface DataPingoneVerifyPolicyPhoneOtpDeliveries {
}

export function dataPingoneVerifyPolicyPhoneOtpDeliveriesToTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyPhoneOtpDeliveriesToHclTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpDeliveries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyPhoneOtpDeliveriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyPhoneOtpDeliveries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyPhoneOtpDeliveries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cooldown - computed: true, optional: false, required: false
  private _cooldown = new DataPingoneVerifyPolicyPhoneOtpDeliveriesCooldownOutputReference(this, "cooldown");
  public get cooldown() {
    return this._cooldown;
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}
export interface DataPingoneVerifyPolicyPhoneOtpLifetime {
}

export function dataPingoneVerifyPolicyPhoneOtpLifetimeToTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpLifetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyPhoneOtpLifetimeToHclTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpLifetime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyPhoneOtpLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyPhoneOtpLifetime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyPhoneOtpLifetime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export interface DataPingoneVerifyPolicyPhoneOtpNotification {
}

export function dataPingoneVerifyPolicyPhoneOtpNotificationToTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyPhoneOtpNotificationToHclTerraform(struct?: DataPingoneVerifyPolicyPhoneOtpNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyPhoneOtpNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyPhoneOtpNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyPhoneOtpNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // variant_name - computed: true, optional: false, required: false
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
}
export interface DataPingoneVerifyPolicyPhoneOtp {
}

export function dataPingoneVerifyPolicyPhoneOtpToTerraform(struct?: DataPingoneVerifyPolicyPhoneOtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyPhoneOtpToHclTerraform(struct?: DataPingoneVerifyPolicyPhoneOtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyPhoneOtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyPhoneOtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyPhoneOtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempts - computed: true, optional: false, required: false
  private _attempts = new DataPingoneVerifyPolicyPhoneOtpAttemptsOutputReference(this, "attempts");
  public get attempts() {
    return this._attempts;
  }

  // deliveries - computed: true, optional: false, required: false
  private _deliveries = new DataPingoneVerifyPolicyPhoneOtpDeliveriesOutputReference(this, "deliveries");
  public get deliveries() {
    return this._deliveries;
  }

  // lifetime - computed: true, optional: false, required: false
  private _lifetime = new DataPingoneVerifyPolicyPhoneOtpLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }

  // notification - computed: true, optional: false, required: false
  private _notification = new DataPingoneVerifyPolicyPhoneOtpNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
}
export interface DataPingoneVerifyPolicyPhone {
}

export function dataPingoneVerifyPolicyPhoneToTerraform(struct?: DataPingoneVerifyPolicyPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyPhoneToHclTerraform(struct?: DataPingoneVerifyPolicyPhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyPhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyPhone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyPhone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_mfa_device - computed: true, optional: false, required: false
  public get createMfaDevice() {
    return this.getBooleanAttribute('create_mfa_device');
  }

  // otp - computed: true, optional: false, required: false
  private _otp = new DataPingoneVerifyPolicyPhoneOtpOutputReference(this, "otp");
  public get otp() {
    return this._otp;
  }

  // verify - computed: true, optional: false, required: false
  public get verify() {
    return this.getStringAttribute('verify');
  }
}
export interface DataPingoneVerifyPolicyTransactionDataCollectionTimeout {
}

export function dataPingoneVerifyPolicyTransactionDataCollectionTimeoutToTerraform(struct?: DataPingoneVerifyPolicyTransactionDataCollectionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyTransactionDataCollectionTimeoutToHclTerraform(struct?: DataPingoneVerifyPolicyTransactionDataCollectionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyTransactionDataCollectionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyTransactionDataCollectionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyTransactionDataCollectionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export interface DataPingoneVerifyPolicyTransactionDataCollection {
}

export function dataPingoneVerifyPolicyTransactionDataCollectionToTerraform(struct?: DataPingoneVerifyPolicyTransactionDataCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyTransactionDataCollectionToHclTerraform(struct?: DataPingoneVerifyPolicyTransactionDataCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyTransactionDataCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyTransactionDataCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyTransactionDataCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timeout - computed: true, optional: false, required: false
  private _timeout = new DataPingoneVerifyPolicyTransactionDataCollectionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
}
export interface DataPingoneVerifyPolicyTransactionTimeout {
}

export function dataPingoneVerifyPolicyTransactionTimeoutToTerraform(struct?: DataPingoneVerifyPolicyTransactionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyTransactionTimeoutToHclTerraform(struct?: DataPingoneVerifyPolicyTransactionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyTransactionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyTransactionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyTransactionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // time_unit - computed: true, optional: false, required: false
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
}
export interface DataPingoneVerifyPolicyTransaction {
}

export function dataPingoneVerifyPolicyTransactionToTerraform(struct?: DataPingoneVerifyPolicyTransaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyTransactionToHclTerraform(struct?: DataPingoneVerifyPolicyTransaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyTransactionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyTransaction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyTransaction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_collection - computed: true, optional: false, required: false
  private _dataCollection = new DataPingoneVerifyPolicyTransactionDataCollectionOutputReference(this, "data_collection");
  public get dataCollection() {
    return this._dataCollection;
  }

  // data_collection_only - computed: true, optional: false, required: false
  public get dataCollectionOnly() {
    return this.getBooleanAttribute('data_collection_only');
  }

  // timeout - computed: true, optional: false, required: false
  private _timeout = new DataPingoneVerifyPolicyTransactionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
}
export interface DataPingoneVerifyPolicyVoiceReferenceData {
}

export function dataPingoneVerifyPolicyVoiceReferenceDataToTerraform(struct?: DataPingoneVerifyPolicyVoiceReferenceData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyVoiceReferenceDataToHclTerraform(struct?: DataPingoneVerifyPolicyVoiceReferenceData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyVoiceReferenceDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyVoiceReferenceData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyVoiceReferenceData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retain_original_recordings - computed: true, optional: false, required: false
  public get retainOriginalRecordings() {
    return this.getBooleanAttribute('retain_original_recordings');
  }

  // update_on_reenrollment - computed: true, optional: false, required: false
  public get updateOnReenrollment() {
    return this.getBooleanAttribute('update_on_reenrollment');
  }

  // update_on_verification - computed: true, optional: false, required: false
  public get updateOnVerification() {
    return this.getBooleanAttribute('update_on_verification');
  }
}
export interface DataPingoneVerifyPolicyVoiceTextDependent {
}

export function dataPingoneVerifyPolicyVoiceTextDependentToTerraform(struct?: DataPingoneVerifyPolicyVoiceTextDependent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyVoiceTextDependentToHclTerraform(struct?: DataPingoneVerifyPolicyVoiceTextDependent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyVoiceTextDependentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyVoiceTextDependent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyVoiceTextDependent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // samples - computed: true, optional: false, required: false
  public get samples() {
    return this.getNumberAttribute('samples');
  }

  // voice_phrase_id - computed: true, optional: false, required: false
  public get voicePhraseId() {
    return this.getStringAttribute('voice_phrase_id');
  }
}
export interface DataPingoneVerifyPolicyVoice {
}

export function dataPingoneVerifyPolicyVoiceToTerraform(struct?: DataPingoneVerifyPolicyVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneVerifyPolicyVoiceToHclTerraform(struct?: DataPingoneVerifyPolicyVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneVerifyPolicyVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneVerifyPolicyVoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneVerifyPolicyVoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparison_threshold - computed: true, optional: false, required: false
  public get comparisonThreshold() {
    return this.getStringAttribute('comparison_threshold');
  }

  // enrollment - computed: true, optional: false, required: false
  public get enrollment() {
    return this.getBooleanAttribute('enrollment');
  }

  // liveness_threshold - computed: true, optional: false, required: false
  public get livenessThreshold() {
    return this.getStringAttribute('liveness_threshold');
  }

  // reference_data - computed: true, optional: false, required: false
  private _referenceData = new DataPingoneVerifyPolicyVoiceReferenceDataOutputReference(this, "reference_data");
  public get referenceData() {
    return this._referenceData;
  }

  // text_dependent - computed: true, optional: false, required: false
  private _textDependent = new DataPingoneVerifyPolicyVoiceTextDependentOutputReference(this, "text_dependent");
  public get textDependent() {
    return this._textDependent;
  }

  // verify - computed: true, optional: false, required: false
  public get verify() {
    return this.getStringAttribute('verify');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_policy pingone_verify_policy}
*/
export class DataPingoneVerifyPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_verify_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneVerifyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneVerifyPolicy to import
  * @param importFromId The id of the existing DataPingoneVerifyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneVerifyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_verify_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_policy pingone_verify_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneVerifyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneVerifyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_verify_policy',
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
    this._default = config.default;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._verifyPolicyId = config.verifyPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default - computed: false, optional: true, required: false
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email - computed: true, optional: false, required: false
  private _email = new DataPingoneVerifyPolicyEmailOutputReference(this, "email");
  public get email() {
    return this._email;
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

  // facial_comparison - computed: true, optional: false, required: false
  private _facialComparison = new DataPingoneVerifyPolicyFacialComparisonOutputReference(this, "facial_comparison");
  public get facialComparison() {
    return this._facialComparison;
  }

  // government_id - computed: true, optional: false, required: false
  private _governmentId = new DataPingoneVerifyPolicyGovernmentIdOutputReference(this, "government_id");
  public get governmentId() {
    return this._governmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_record_matching - computed: true, optional: false, required: false
  private _identityRecordMatching = new DataPingoneVerifyPolicyIdentityRecordMatchingOutputReference(this, "identity_record_matching");
  public get identityRecordMatching() {
    return this._identityRecordMatching;
  }

  // liveness - computed: true, optional: false, required: false
  private _liveness = new DataPingoneVerifyPolicyLivenessOutputReference(this, "liveness");
  public get liveness() {
    return this._liveness;
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

  // phone - computed: true, optional: false, required: false
  private _phone = new DataPingoneVerifyPolicyPhoneOutputReference(this, "phone");
  public get phone() {
    return this._phone;
  }

  // transaction - computed: true, optional: false, required: false
  private _transaction = new DataPingoneVerifyPolicyTransactionOutputReference(this, "transaction");
  public get transaction() {
    return this._transaction;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // verify_policy_id - computed: false, optional: true, required: false
  private _verifyPolicyId?: string; 
  public get verifyPolicyId() {
    return this.getStringAttribute('verify_policy_id');
  }
  public set verifyPolicyId(value: string) {
    this._verifyPolicyId = value;
  }
  public resetVerifyPolicyId() {
    this._verifyPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyPolicyIdInput() {
    return this._verifyPolicyId;
  }

  // voice - computed: true, optional: false, required: false
  private _voice = new DataPingoneVerifyPolicyVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      verify_policy_id: cdktf.stringToTerraform(this._verifyPolicyId),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      verify_policy_id: {
        value: cdktf.stringToHclTerraform(this._verifyPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
