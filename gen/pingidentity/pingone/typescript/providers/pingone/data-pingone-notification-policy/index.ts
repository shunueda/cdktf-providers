// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneNotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set value to `true` to return the default notification policy. There is only one default policy per environment.  Exactly one of the following must be defined: `notification_policy_id`, `name`, `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/notification_policy#default DataPingoneNotificationPolicy#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment that is configured with the notification policy.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/notification_policy#environment_id DataPingoneNotificationPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the name of the notification policy to retrieve configuration for.  Exactly one of the following must be defined: `notification_policy_id`, `name`, `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/notification_policy#name DataPingoneNotificationPolicy#name}
  */
  readonly name?: string;
  /**
  * A string that specifies the ID of the notification policy to retrieve configuration for.  Must be a valid PingOne resource ID.  Exactly one of the following must be defined: `notification_policy_id`, `name`, `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/notification_policy#notification_policy_id DataPingoneNotificationPolicy#notification_policy_id}
  */
  readonly notificationPolicyId?: string;
}
export interface DataPingoneNotificationPolicyCooldownConfigurationEmailPeriods {
}

export function dataPingoneNotificationPolicyCooldownConfigurationEmailPeriodsToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationEmailPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationEmailPeriodsToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationEmailPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationEmailPeriodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfigurationEmailPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfigurationEmailPeriods | undefined) {
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

export class DataPingoneNotificationPolicyCooldownConfigurationEmailPeriodsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneNotificationPolicyCooldownConfigurationEmailPeriodsOutputReference {
    return new DataPingoneNotificationPolicyCooldownConfigurationEmailPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingoneNotificationPolicyCooldownConfigurationEmail {
}

export function dataPingoneNotificationPolicyCooldownConfigurationEmailToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationEmailToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfigurationEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfigurationEmail | undefined) {
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

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }

  // periods - computed: true, optional: false, required: false
  private _periods = new DataPingoneNotificationPolicyCooldownConfigurationEmailPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }

  // resend_limit - computed: true, optional: false, required: false
  public get resendLimit() {
    return this.getNumberAttribute('resend_limit');
  }
}
export interface DataPingoneNotificationPolicyCooldownConfigurationSmsPeriods {
}

export function dataPingoneNotificationPolicyCooldownConfigurationSmsPeriodsToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationSmsPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationSmsPeriodsToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationSmsPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationSmsPeriodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfigurationSmsPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfigurationSmsPeriods | undefined) {
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

export class DataPingoneNotificationPolicyCooldownConfigurationSmsPeriodsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneNotificationPolicyCooldownConfigurationSmsPeriodsOutputReference {
    return new DataPingoneNotificationPolicyCooldownConfigurationSmsPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingoneNotificationPolicyCooldownConfigurationSms {
}

export function dataPingoneNotificationPolicyCooldownConfigurationSmsToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationSmsToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationSmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfigurationSms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfigurationSms | undefined) {
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

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }

  // periods - computed: true, optional: false, required: false
  private _periods = new DataPingoneNotificationPolicyCooldownConfigurationSmsPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }

  // resend_limit - computed: true, optional: false, required: false
  public get resendLimit() {
    return this.getNumberAttribute('resend_limit');
  }
}
export interface DataPingoneNotificationPolicyCooldownConfigurationVoicePeriods {
}

export function dataPingoneNotificationPolicyCooldownConfigurationVoicePeriodsToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationVoicePeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationVoicePeriodsToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationVoicePeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationVoicePeriodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfigurationVoicePeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfigurationVoicePeriods | undefined) {
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

export class DataPingoneNotificationPolicyCooldownConfigurationVoicePeriodsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneNotificationPolicyCooldownConfigurationVoicePeriodsOutputReference {
    return new DataPingoneNotificationPolicyCooldownConfigurationVoicePeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingoneNotificationPolicyCooldownConfigurationVoice {
}

export function dataPingoneNotificationPolicyCooldownConfigurationVoiceToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationVoiceToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfigurationVoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfigurationVoice | undefined) {
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

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }

  // periods - computed: true, optional: false, required: false
  private _periods = new DataPingoneNotificationPolicyCooldownConfigurationVoicePeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }

  // resend_limit - computed: true, optional: false, required: false
  public get resendLimit() {
    return this.getNumberAttribute('resend_limit');
  }
}
export interface DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriods {
}

export function dataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriodsToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriodsToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriods | undefined) {
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

export class DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriodsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriodsOutputReference {
    return new DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingoneNotificationPolicyCooldownConfigurationWhatsApp {
}

export function dataPingoneNotificationPolicyCooldownConfigurationWhatsAppToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationWhatsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationWhatsAppToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfigurationWhatsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationWhatsAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfigurationWhatsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfigurationWhatsApp | undefined) {
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

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }

  // periods - computed: true, optional: false, required: false
  private _periods = new DataPingoneNotificationPolicyCooldownConfigurationWhatsAppPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }

  // resend_limit - computed: true, optional: false, required: false
  public get resendLimit() {
    return this.getNumberAttribute('resend_limit');
  }
}
export interface DataPingoneNotificationPolicyCooldownConfiguration {
}

export function dataPingoneNotificationPolicyCooldownConfigurationToTerraform(struct?: DataPingoneNotificationPolicyCooldownConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCooldownConfigurationToHclTerraform(struct?: DataPingoneNotificationPolicyCooldownConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCooldownConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneNotificationPolicyCooldownConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCooldownConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  private _email = new DataPingoneNotificationPolicyCooldownConfigurationEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }

  // sms - computed: true, optional: false, required: false
  private _sms = new DataPingoneNotificationPolicyCooldownConfigurationSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }

  // voice - computed: true, optional: false, required: false
  private _voice = new DataPingoneNotificationPolicyCooldownConfigurationVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }

  // whats_app - computed: true, optional: false, required: false
  private _whatsApp = new DataPingoneNotificationPolicyCooldownConfigurationWhatsAppOutputReference(this, "whats_app");
  public get whatsApp() {
    return this._whatsApp;
  }
}
export interface DataPingoneNotificationPolicyCountryLimit {
}

export function dataPingoneNotificationPolicyCountryLimitToTerraform(struct?: DataPingoneNotificationPolicyCountryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyCountryLimitToHclTerraform(struct?: DataPingoneNotificationPolicyCountryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyCountryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneNotificationPolicyCountryLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyCountryLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // countries - computed: true, optional: false, required: false
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }

  // delivery_methods - computed: true, optional: false, required: false
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChain {
}

export function dataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChainToTerraform(struct?: DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChainToHclTerraform(struct?: DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChainList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChainOutputReference {
    return new DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingoneNotificationPolicyProviderConfigurationConditions {
}

export function dataPingoneNotificationPolicyProviderConfigurationConditionsToTerraform(struct?: DataPingoneNotificationPolicyProviderConfigurationConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyProviderConfigurationConditionsToHclTerraform(struct?: DataPingoneNotificationPolicyProviderConfigurationConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyProviderConfigurationConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingoneNotificationPolicyProviderConfigurationConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyProviderConfigurationConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // countries - computed: true, optional: false, required: false
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }

  // delivery_methods - computed: true, optional: false, required: false
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }

  // fallback_chain - computed: true, optional: false, required: false
  private _fallbackChain = new DataPingoneNotificationPolicyProviderConfigurationConditionsFallbackChainList(this, "fallback_chain", false);
  public get fallbackChain() {
    return this._fallbackChain;
  }
}

export class DataPingoneNotificationPolicyProviderConfigurationConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneNotificationPolicyProviderConfigurationConditionsOutputReference {
    return new DataPingoneNotificationPolicyProviderConfigurationConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingoneNotificationPolicyProviderConfiguration {
}

export function dataPingoneNotificationPolicyProviderConfigurationToTerraform(struct?: DataPingoneNotificationPolicyProviderConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyProviderConfigurationToHclTerraform(struct?: DataPingoneNotificationPolicyProviderConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyProviderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingoneNotificationPolicyProviderConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyProviderConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataPingoneNotificationPolicyProviderConfigurationConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
}
export interface DataPingoneNotificationPolicyQuota {
}

export function dataPingoneNotificationPolicyQuotaToTerraform(struct?: DataPingoneNotificationPolicyQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingoneNotificationPolicyQuotaToHclTerraform(struct?: DataPingoneNotificationPolicyQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingoneNotificationPolicyQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPingoneNotificationPolicyQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingoneNotificationPolicyQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delivery_methods - computed: true, optional: false, required: false
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unused - computed: true, optional: false, required: false
  public get unused() {
    return this.getNumberAttribute('unused');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class DataPingoneNotificationPolicyQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataPingoneNotificationPolicyQuotaOutputReference {
    return new DataPingoneNotificationPolicyQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/notification_policy pingone_notification_policy}
*/
export class DataPingoneNotificationPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_notification_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneNotificationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneNotificationPolicy to import
  * @param importFromId The id of the existing DataPingoneNotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/notification_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneNotificationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_notification_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/notification_policy pingone_notification_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneNotificationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneNotificationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_notification_policy',
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
    this._notificationPolicyId = config.notificationPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cooldown_configuration - computed: true, optional: false, required: false
  private _cooldownConfiguration = new DataPingoneNotificationPolicyCooldownConfigurationOutputReference(this, "cooldown_configuration");
  public get cooldownConfiguration() {
    return this._cooldownConfiguration;
  }

  // country_limit - computed: true, optional: false, required: false
  private _countryLimit = new DataPingoneNotificationPolicyCountryLimitOutputReference(this, "country_limit");
  public get countryLimit() {
    return this._countryLimit;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // notification_policy_id - computed: false, optional: true, required: false
  private _notificationPolicyId?: string; 
  public get notificationPolicyId() {
    return this.getStringAttribute('notification_policy_id');
  }
  public set notificationPolicyId(value: string) {
    this._notificationPolicyId = value;
  }
  public resetNotificationPolicyId() {
    this._notificationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPolicyIdInput() {
    return this._notificationPolicyId;
  }

  // provider_configuration - computed: true, optional: false, required: false
  private _providerConfiguration = new DataPingoneNotificationPolicyProviderConfigurationOutputReference(this, "provider_configuration");
  public get providerConfiguration() {
    return this._providerConfiguration;
  }

  // quota - computed: true, optional: false, required: false
  private _quota = new DataPingoneNotificationPolicyQuotaList(this, "quota", true);
  public get quota() {
    return this._quota;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      notification_policy_id: cdktf.stringToTerraform(this._notificationPolicyId),
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
      notification_policy_id: {
        value: cdktf.stringToHclTerraform(this._notificationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
