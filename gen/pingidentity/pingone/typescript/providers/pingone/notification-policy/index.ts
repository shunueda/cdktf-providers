// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object to specify a period of time that users must wait before requesting an additional notification such as an additional OTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#cooldown_configuration NotificationPolicy#cooldown_configuration}
  */
  readonly cooldownConfiguration?: NotificationPolicyCooldownConfiguration;
  /**
  * A single object to limit the countries where you can send SMS and voice notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#country_limit NotificationPolicy#country_limit}
  */
  readonly countryLimit?: NotificationPolicyCountryLimit;
  /**
  * The ID of the environment to associate the notification policy with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#environment_id NotificationPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * The name to use for the notification policy.  Must be unique among the notification policies in the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#name NotificationPolicy#name}
  */
  readonly name: string;
  /**
  * A single object to specify the custom notification providers to use for different countries and delivery methods (SMS and Voice).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#provider_configuration NotificationPolicy#provider_configuration}
  */
  readonly providerConfiguration?: NotificationPolicyProviderConfiguration;
  /**
  * A set of objects that define the SMS/Voice limits.  A maximum of two quota objects can be defined, one for SMS and/or Voice quota, and one for Email quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#quota NotificationPolicy#quota}
  */
  readonly quota?: NotificationPolicyQuota[] | cdktf.IResolvable;
}
export interface NotificationPolicyCooldownConfigurationEmailPeriods {
  /**
  * Used in conjunction with `time_unit` to specify the waiting period.  If `time_unit` is `SECONDS`, the allowed range is 10-600.  If `time_unit` is `MINUTES`, the allowed range is 1-10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#duration NotificationPolicy#duration}
  */
  readonly duration: number;
  /**
  * Used in conjunction with `duration` to specify the waiting period.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#time_unit NotificationPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function notificationPolicyCooldownConfigurationEmailPeriodsToTerraform(struct?: NotificationPolicyCooldownConfigurationEmailPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function notificationPolicyCooldownConfigurationEmailPeriodsToHclTerraform(struct?: NotificationPolicyCooldownConfigurationEmailPeriods | cdktf.IResolvable): any {
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

export class NotificationPolicyCooldownConfigurationEmailPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyCooldownConfigurationEmailPeriods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPolicyCooldownConfigurationEmailPeriods | cdktf.IResolvable | undefined) {
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

export class NotificationPolicyCooldownConfigurationEmailPeriodsList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyCooldownConfigurationEmailPeriods[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyCooldownConfigurationEmailPeriodsOutputReference {
    return new NotificationPolicyCooldownConfigurationEmailPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyCooldownConfigurationEmail {
  /**
  * Set to `true` if you want to specify notification cooldown periods for the authentication method. Set to `false` if you don't want notification cooldown periods for this authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * If you want the settings to be applied at the single-user level for the address/number, set this to `USER_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy?: string;
  /**
  * Use the periods array to specify the amount of time the user has to wait before requesting another notification such as another OTP. The array should contain three objects: the time to wait before the first retry, the time to wait before the second retry, and the time to wait before any subsequent retries. Required when `enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#periods NotificationPolicy#periods}
  */
  readonly periods?: NotificationPolicyCooldownConfigurationEmailPeriods[] | cdktf.IResolvable;
  /**
  * The maximum number of requests that a user can send to receive another notification, such as another OTP, before they are blocked for 30 minutes. Required when `enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#resend_limit NotificationPolicy#resend_limit}
  */
  readonly resendLimit?: number;
}

export function notificationPolicyCooldownConfigurationEmailToTerraform(struct?: NotificationPolicyCooldownConfigurationEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_by: cdktf.stringToTerraform(struct!.groupBy),
    periods: cdktf.listMapper(notificationPolicyCooldownConfigurationEmailPeriodsToTerraform, false)(struct!.periods),
    resend_limit: cdktf.numberToTerraform(struct!.resendLimit),
  }
}


export function notificationPolicyCooldownConfigurationEmailToHclTerraform(struct?: NotificationPolicyCooldownConfigurationEmail): any {
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
    group_by: {
      value: cdktf.stringToHclTerraform(struct!.groupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    periods: {
      value: cdktf.listMapperHcl(notificationPolicyCooldownConfigurationEmailPeriodsToHclTerraform, false)(struct!.periods),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyCooldownConfigurationEmailPeriodsList",
    },
    resend_limit: {
      value: cdktf.numberToHclTerraform(struct!.resendLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyCooldownConfigurationEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyCooldownConfigurationEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._periods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periods = this._periods?.internalValue;
    }
    if (this._resendLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendLimit = this._resendLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyCooldownConfigurationEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._groupBy = undefined;
      this._periods.internalValue = undefined;
      this._resendLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._groupBy = value.groupBy;
      this._periods.internalValue = value.periods;
      this._resendLimit = value.resendLimit;
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

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // periods - computed: true, optional: true, required: false
  private _periods = new NotificationPolicyCooldownConfigurationEmailPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }
  public putPeriods(value: NotificationPolicyCooldownConfigurationEmailPeriods[] | cdktf.IResolvable) {
    this._periods.internalValue = value;
  }
  public resetPeriods() {
    this._periods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodsInput() {
    return this._periods.internalValue;
  }

  // resend_limit - computed: true, optional: true, required: false
  private _resendLimit?: number; 
  public get resendLimit() {
    return this.getNumberAttribute('resend_limit');
  }
  public set resendLimit(value: number) {
    this._resendLimit = value;
  }
  public resetResendLimit() {
    this._resendLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendLimitInput() {
    return this._resendLimit;
  }
}
export interface NotificationPolicyCooldownConfigurationSmsPeriods {
  /**
  * Used in conjunction with `time_unit` to specify the waiting period.  If `time_unit` is `SECONDS`, the allowed range is 10-600.  If `time_unit` is `MINUTES`, the allowed range is 1-10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#duration NotificationPolicy#duration}
  */
  readonly duration: number;
  /**
  * Used in conjunction with `duration` to specify the waiting period.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#time_unit NotificationPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function notificationPolicyCooldownConfigurationSmsPeriodsToTerraform(struct?: NotificationPolicyCooldownConfigurationSmsPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function notificationPolicyCooldownConfigurationSmsPeriodsToHclTerraform(struct?: NotificationPolicyCooldownConfigurationSmsPeriods | cdktf.IResolvable): any {
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

export class NotificationPolicyCooldownConfigurationSmsPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyCooldownConfigurationSmsPeriods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPolicyCooldownConfigurationSmsPeriods | cdktf.IResolvable | undefined) {
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

export class NotificationPolicyCooldownConfigurationSmsPeriodsList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyCooldownConfigurationSmsPeriods[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyCooldownConfigurationSmsPeriodsOutputReference {
    return new NotificationPolicyCooldownConfigurationSmsPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyCooldownConfigurationSms {
  /**
  * Set to `true` if you want to specify notification cooldown periods for the authentication method. Set to `false` if you don't want notification cooldown periods for this authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * If you want the settings to be applied at the single-user level for the address/number, set this to `USER_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy?: string;
  /**
  * Use the periods array to specify the amount of time the user has to wait before requesting another notification such as another OTP. The array should contain three objects: the time to wait before the first retry, the time to wait before the second retry, and the time to wait before any subsequent retries. Required when `enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#periods NotificationPolicy#periods}
  */
  readonly periods?: NotificationPolicyCooldownConfigurationSmsPeriods[] | cdktf.IResolvable;
  /**
  * The maximum number of requests that a user can send to receive another notification, such as another OTP, before they are blocked for 30 minutes. Required when `enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#resend_limit NotificationPolicy#resend_limit}
  */
  readonly resendLimit?: number;
}

export function notificationPolicyCooldownConfigurationSmsToTerraform(struct?: NotificationPolicyCooldownConfigurationSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_by: cdktf.stringToTerraform(struct!.groupBy),
    periods: cdktf.listMapper(notificationPolicyCooldownConfigurationSmsPeriodsToTerraform, false)(struct!.periods),
    resend_limit: cdktf.numberToTerraform(struct!.resendLimit),
  }
}


export function notificationPolicyCooldownConfigurationSmsToHclTerraform(struct?: NotificationPolicyCooldownConfigurationSms): any {
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
    group_by: {
      value: cdktf.stringToHclTerraform(struct!.groupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    periods: {
      value: cdktf.listMapperHcl(notificationPolicyCooldownConfigurationSmsPeriodsToHclTerraform, false)(struct!.periods),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyCooldownConfigurationSmsPeriodsList",
    },
    resend_limit: {
      value: cdktf.numberToHclTerraform(struct!.resendLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyCooldownConfigurationSmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyCooldownConfigurationSms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._periods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periods = this._periods?.internalValue;
    }
    if (this._resendLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendLimit = this._resendLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyCooldownConfigurationSms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._groupBy = undefined;
      this._periods.internalValue = undefined;
      this._resendLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._groupBy = value.groupBy;
      this._periods.internalValue = value.periods;
      this._resendLimit = value.resendLimit;
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

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // periods - computed: true, optional: true, required: false
  private _periods = new NotificationPolicyCooldownConfigurationSmsPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }
  public putPeriods(value: NotificationPolicyCooldownConfigurationSmsPeriods[] | cdktf.IResolvable) {
    this._periods.internalValue = value;
  }
  public resetPeriods() {
    this._periods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodsInput() {
    return this._periods.internalValue;
  }

  // resend_limit - computed: true, optional: true, required: false
  private _resendLimit?: number; 
  public get resendLimit() {
    return this.getNumberAttribute('resend_limit');
  }
  public set resendLimit(value: number) {
    this._resendLimit = value;
  }
  public resetResendLimit() {
    this._resendLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendLimitInput() {
    return this._resendLimit;
  }
}
export interface NotificationPolicyCooldownConfigurationVoicePeriods {
  /**
  * Used in conjunction with `time_unit` to specify the waiting period.  If `time_unit` is `SECONDS`, the allowed range is 10-600.  If `time_unit` is `MINUTES`, the allowed range is 1-10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#duration NotificationPolicy#duration}
  */
  readonly duration: number;
  /**
  * Used in conjunction with `duration` to specify the waiting period.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#time_unit NotificationPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function notificationPolicyCooldownConfigurationVoicePeriodsToTerraform(struct?: NotificationPolicyCooldownConfigurationVoicePeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function notificationPolicyCooldownConfigurationVoicePeriodsToHclTerraform(struct?: NotificationPolicyCooldownConfigurationVoicePeriods | cdktf.IResolvable): any {
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

export class NotificationPolicyCooldownConfigurationVoicePeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyCooldownConfigurationVoicePeriods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPolicyCooldownConfigurationVoicePeriods | cdktf.IResolvable | undefined) {
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

export class NotificationPolicyCooldownConfigurationVoicePeriodsList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyCooldownConfigurationVoicePeriods[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyCooldownConfigurationVoicePeriodsOutputReference {
    return new NotificationPolicyCooldownConfigurationVoicePeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyCooldownConfigurationVoice {
  /**
  * Set to `true` if you want to specify notification cooldown periods for the authentication method. Set to `false` if you don't want notification cooldown periods for this authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * If you want the settings to be applied at the single-user level for the address/number, set this to `USER_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy?: string;
  /**
  * Use the periods array to specify the amount of time the user has to wait before requesting another notification such as another OTP. The array should contain three objects: the time to wait before the first retry, the time to wait before the second retry, and the time to wait before any subsequent retries. Required when `enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#periods NotificationPolicy#periods}
  */
  readonly periods?: NotificationPolicyCooldownConfigurationVoicePeriods[] | cdktf.IResolvable;
  /**
  * The maximum number of requests that a user can send to receive another notification, such as another OTP, before they are blocked for 30 minutes. Required when `enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#resend_limit NotificationPolicy#resend_limit}
  */
  readonly resendLimit?: number;
}

export function notificationPolicyCooldownConfigurationVoiceToTerraform(struct?: NotificationPolicyCooldownConfigurationVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_by: cdktf.stringToTerraform(struct!.groupBy),
    periods: cdktf.listMapper(notificationPolicyCooldownConfigurationVoicePeriodsToTerraform, false)(struct!.periods),
    resend_limit: cdktf.numberToTerraform(struct!.resendLimit),
  }
}


export function notificationPolicyCooldownConfigurationVoiceToHclTerraform(struct?: NotificationPolicyCooldownConfigurationVoice): any {
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
    group_by: {
      value: cdktf.stringToHclTerraform(struct!.groupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    periods: {
      value: cdktf.listMapperHcl(notificationPolicyCooldownConfigurationVoicePeriodsToHclTerraform, false)(struct!.periods),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyCooldownConfigurationVoicePeriodsList",
    },
    resend_limit: {
      value: cdktf.numberToHclTerraform(struct!.resendLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyCooldownConfigurationVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyCooldownConfigurationVoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._periods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periods = this._periods?.internalValue;
    }
    if (this._resendLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendLimit = this._resendLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyCooldownConfigurationVoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._groupBy = undefined;
      this._periods.internalValue = undefined;
      this._resendLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._groupBy = value.groupBy;
      this._periods.internalValue = value.periods;
      this._resendLimit = value.resendLimit;
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

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // periods - computed: true, optional: true, required: false
  private _periods = new NotificationPolicyCooldownConfigurationVoicePeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }
  public putPeriods(value: NotificationPolicyCooldownConfigurationVoicePeriods[] | cdktf.IResolvable) {
    this._periods.internalValue = value;
  }
  public resetPeriods() {
    this._periods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodsInput() {
    return this._periods.internalValue;
  }

  // resend_limit - computed: true, optional: true, required: false
  private _resendLimit?: number; 
  public get resendLimit() {
    return this.getNumberAttribute('resend_limit');
  }
  public set resendLimit(value: number) {
    this._resendLimit = value;
  }
  public resetResendLimit() {
    this._resendLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendLimitInput() {
    return this._resendLimit;
  }
}
export interface NotificationPolicyCooldownConfigurationWhatsAppPeriods {
  /**
  * Used in conjunction with `time_unit` to specify the waiting period.  If `time_unit` is `SECONDS`, the allowed range is 10-600.  If `time_unit` is `MINUTES`, the allowed range is 1-10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#duration NotificationPolicy#duration}
  */
  readonly duration: number;
  /**
  * Used in conjunction with `duration` to specify the waiting period.  Options are `MINUTES`, `SECONDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#time_unit NotificationPolicy#time_unit}
  */
  readonly timeUnit: string;
}

export function notificationPolicyCooldownConfigurationWhatsAppPeriodsToTerraform(struct?: NotificationPolicyCooldownConfigurationWhatsAppPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function notificationPolicyCooldownConfigurationWhatsAppPeriodsToHclTerraform(struct?: NotificationPolicyCooldownConfigurationWhatsAppPeriods | cdktf.IResolvable): any {
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

export class NotificationPolicyCooldownConfigurationWhatsAppPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyCooldownConfigurationWhatsAppPeriods | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPolicyCooldownConfigurationWhatsAppPeriods | cdktf.IResolvable | undefined) {
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

export class NotificationPolicyCooldownConfigurationWhatsAppPeriodsList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyCooldownConfigurationWhatsAppPeriods[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyCooldownConfigurationWhatsAppPeriodsOutputReference {
    return new NotificationPolicyCooldownConfigurationWhatsAppPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyCooldownConfigurationWhatsApp {
  /**
  * Set to `true` if you want to specify notification cooldown periods for the authentication method. Set to `false` if you don't want notification cooldown periods for this authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#enabled NotificationPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * If you want the settings to be applied at the single-user level for the address/number, set this to `USER_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy?: string;
  /**
  * Use the periods array to specify the amount of time the user has to wait before requesting another notification such as another OTP. The array should contain three objects: the time to wait before the first retry, the time to wait before the second retry, and the time to wait before any subsequent retries. Required when `enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#periods NotificationPolicy#periods}
  */
  readonly periods?: NotificationPolicyCooldownConfigurationWhatsAppPeriods[] | cdktf.IResolvable;
  /**
  * The maximum number of requests that a user can send to receive another notification, such as another OTP, before they are blocked for 30 minutes. Required when `enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#resend_limit NotificationPolicy#resend_limit}
  */
  readonly resendLimit?: number;
}

export function notificationPolicyCooldownConfigurationWhatsAppToTerraform(struct?: NotificationPolicyCooldownConfigurationWhatsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_by: cdktf.stringToTerraform(struct!.groupBy),
    periods: cdktf.listMapper(notificationPolicyCooldownConfigurationWhatsAppPeriodsToTerraform, false)(struct!.periods),
    resend_limit: cdktf.numberToTerraform(struct!.resendLimit),
  }
}


export function notificationPolicyCooldownConfigurationWhatsAppToHclTerraform(struct?: NotificationPolicyCooldownConfigurationWhatsApp): any {
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
    group_by: {
      value: cdktf.stringToHclTerraform(struct!.groupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    periods: {
      value: cdktf.listMapperHcl(notificationPolicyCooldownConfigurationWhatsAppPeriodsToHclTerraform, false)(struct!.periods),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyCooldownConfigurationWhatsAppPeriodsList",
    },
    resend_limit: {
      value: cdktf.numberToHclTerraform(struct!.resendLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyCooldownConfigurationWhatsAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyCooldownConfigurationWhatsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._periods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periods = this._periods?.internalValue;
    }
    if (this._resendLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendLimit = this._resendLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyCooldownConfigurationWhatsApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._groupBy = undefined;
      this._periods.internalValue = undefined;
      this._resendLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._groupBy = value.groupBy;
      this._periods.internalValue = value.periods;
      this._resendLimit = value.resendLimit;
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

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // periods - computed: true, optional: true, required: false
  private _periods = new NotificationPolicyCooldownConfigurationWhatsAppPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }
  public putPeriods(value: NotificationPolicyCooldownConfigurationWhatsAppPeriods[] | cdktf.IResolvable) {
    this._periods.internalValue = value;
  }
  public resetPeriods() {
    this._periods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodsInput() {
    return this._periods.internalValue;
  }

  // resend_limit - computed: true, optional: true, required: false
  private _resendLimit?: number; 
  public get resendLimit() {
    return this.getNumberAttribute('resend_limit');
  }
  public set resendLimit(value: number) {
    this._resendLimit = value;
  }
  public resetResendLimit() {
    this._resendLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendLimitInput() {
    return this._resendLimit;
  }
}
export interface NotificationPolicyCooldownConfiguration {
  /**
  * Contains the notification cooldown period settings for email notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#email NotificationPolicy#email}
  */
  readonly email: NotificationPolicyCooldownConfigurationEmail;
  /**
  * Contains the notification cooldown period settings for SMS notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#sms NotificationPolicy#sms}
  */
  readonly sms: NotificationPolicyCooldownConfigurationSms;
  /**
  * Contains the notification cooldown period settings for voice notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#voice NotificationPolicy#voice}
  */
  readonly voice: NotificationPolicyCooldownConfigurationVoice;
  /**
  * Contains the notification cooldown period settings for WhatsApp notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#whats_app NotificationPolicy#whats_app}
  */
  readonly whatsApp: NotificationPolicyCooldownConfigurationWhatsApp;
}

export function notificationPolicyCooldownConfigurationToTerraform(struct?: NotificationPolicyCooldownConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: notificationPolicyCooldownConfigurationEmailToTerraform(struct!.email),
    sms: notificationPolicyCooldownConfigurationSmsToTerraform(struct!.sms),
    voice: notificationPolicyCooldownConfigurationVoiceToTerraform(struct!.voice),
    whats_app: notificationPolicyCooldownConfigurationWhatsAppToTerraform(struct!.whatsApp),
  }
}


export function notificationPolicyCooldownConfigurationToHclTerraform(struct?: NotificationPolicyCooldownConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: notificationPolicyCooldownConfigurationEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "NotificationPolicyCooldownConfigurationEmail",
    },
    sms: {
      value: notificationPolicyCooldownConfigurationSmsToHclTerraform(struct!.sms),
      isBlock: true,
      type: "struct",
      storageClassType: "NotificationPolicyCooldownConfigurationSms",
    },
    voice: {
      value: notificationPolicyCooldownConfigurationVoiceToHclTerraform(struct!.voice),
      isBlock: true,
      type: "struct",
      storageClassType: "NotificationPolicyCooldownConfigurationVoice",
    },
    whats_app: {
      value: notificationPolicyCooldownConfigurationWhatsAppToHclTerraform(struct!.whatsApp),
      isBlock: true,
      type: "struct",
      storageClassType: "NotificationPolicyCooldownConfigurationWhatsApp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyCooldownConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyCooldownConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._sms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms?.internalValue;
    }
    if (this._voice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voice = this._voice?.internalValue;
    }
    if (this._whatsApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whatsApp = this._whatsApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyCooldownConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email.internalValue = undefined;
      this._sms.internalValue = undefined;
      this._voice.internalValue = undefined;
      this._whatsApp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email.internalValue = value.email;
      this._sms.internalValue = value.sms;
      this._voice.internalValue = value.voice;
      this._whatsApp.internalValue = value.whatsApp;
    }
  }

  // email - computed: true, optional: false, required: true
  private _email = new NotificationPolicyCooldownConfigurationEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: NotificationPolicyCooldownConfigurationEmail) {
    this._email.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // sms - computed: true, optional: false, required: true
  private _sms = new NotificationPolicyCooldownConfigurationSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: NotificationPolicyCooldownConfigurationSms) {
    this._sms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // voice - computed: true, optional: false, required: true
  private _voice = new NotificationPolicyCooldownConfigurationVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: NotificationPolicyCooldownConfigurationVoice) {
    this._voice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice.internalValue;
  }

  // whats_app - computed: true, optional: false, required: true
  private _whatsApp = new NotificationPolicyCooldownConfigurationWhatsAppOutputReference(this, "whats_app");
  public get whatsApp() {
    return this._whatsApp;
  }
  public putWhatsApp(value: NotificationPolicyCooldownConfigurationWhatsApp) {
    this._whatsApp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whatsAppInput() {
    return this._whatsApp.internalValue;
  }
}
export interface NotificationPolicyCountryLimit {
  /**
  * The countries where the specified methods should be allowed or denied. Use two-letter country codes from ISO 3166-1.  Required when `type` is not `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#countries NotificationPolicy#countries}
  */
  readonly countries?: string[];
  /**
  * The delivery methods that the defined limitation should be applied to. Content of the array can be `SMS`, `Voice`, or both. If the parameter is not provided, the default is `SMS` and `Voice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#delivery_methods NotificationPolicy#delivery_methods}
  */
  readonly deliveryMethods?: string[];
  /**
  * A string that specifies the kind of limitation being defined.  Options are `ALLOWED` (allows notifications only for the countries specified in the `countries` parameter), `DENIED` (denies notifications only for the countries specified in the `countries` parameter), `NONE` (no limitation is defined).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#type NotificationPolicy#type}
  */
  readonly type: string;
}

export function notificationPolicyCountryLimitToTerraform(struct?: NotificationPolicyCountryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    delivery_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deliveryMethods),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function notificationPolicyCountryLimitToHclTerraform(struct?: NotificationPolicyCountryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    delivery_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deliveryMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyCountryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyCountryLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._deliveryMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethods = this._deliveryMethods;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyCountryLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._deliveryMethods = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._deliveryMethods = value.deliveryMethods;
      this._type = value.type;
    }
  }

  // countries - computed: true, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // delivery_methods - computed: true, optional: true, required: false
  private _deliveryMethods?: string[]; 
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }
  public set deliveryMethods(value: string[]) {
    this._deliveryMethods = value;
  }
  public resetDeliveryMethods() {
    this._deliveryMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodsInput() {
    return this._deliveryMethods;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface NotificationPolicyProviderConfigurationConditionsFallbackChain {
  /**
  * The ID of a custom provider. Reference the `id` attribute of a `pingone_phone_delivery_settings` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#id NotificationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function notificationPolicyProviderConfigurationConditionsFallbackChainToTerraform(struct?: NotificationPolicyProviderConfigurationConditionsFallbackChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function notificationPolicyProviderConfigurationConditionsFallbackChainToHclTerraform(struct?: NotificationPolicyProviderConfigurationConditionsFallbackChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyProviderConfigurationConditionsFallbackChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyProviderConfigurationConditionsFallbackChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyProviderConfigurationConditionsFallbackChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

export class NotificationPolicyProviderConfigurationConditionsFallbackChainList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyProviderConfigurationConditionsFallbackChain[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyProviderConfigurationConditionsFallbackChainOutputReference {
    return new NotificationPolicyProviderConfigurationConditionsFallbackChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyProviderConfigurationConditions {
  /**
  * The countries for which the fallback order should be used. Use the two-letter country codes from ISO 3166-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#countries NotificationPolicy#countries}
  */
  readonly countries?: string[];
  /**
  * The delivery methods for which the fallback order should be applied.  Options are `SMS`, `VOICE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#delivery_methods NotificationPolicy#delivery_methods}
  */
  readonly deliveryMethods?: string[];
  /**
  * A list of custom provider IDs in the order they should be used if available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#fallback_chain NotificationPolicy#fallback_chain}
  */
  readonly fallbackChain: NotificationPolicyProviderConfigurationConditionsFallbackChain[] | cdktf.IResolvable;
}

export function notificationPolicyProviderConfigurationConditionsToTerraform(struct?: NotificationPolicyProviderConfigurationConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    delivery_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deliveryMethods),
    fallback_chain: cdktf.listMapper(notificationPolicyProviderConfigurationConditionsFallbackChainToTerraform, false)(struct!.fallbackChain),
  }
}


export function notificationPolicyProviderConfigurationConditionsToHclTerraform(struct?: NotificationPolicyProviderConfigurationConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    delivery_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deliveryMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fallback_chain: {
      value: cdktf.listMapperHcl(notificationPolicyProviderConfigurationConditionsFallbackChainToHclTerraform, false)(struct!.fallbackChain),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyProviderConfigurationConditionsFallbackChainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyProviderConfigurationConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyProviderConfigurationConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._deliveryMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethods = this._deliveryMethods;
    }
    if (this._fallbackChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackChain = this._fallbackChain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyProviderConfigurationConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._deliveryMethods = undefined;
      this._fallbackChain.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._deliveryMethods = value.deliveryMethods;
      this._fallbackChain.internalValue = value.fallbackChain;
    }
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // delivery_methods - computed: false, optional: true, required: false
  private _deliveryMethods?: string[]; 
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }
  public set deliveryMethods(value: string[]) {
    this._deliveryMethods = value;
  }
  public resetDeliveryMethods() {
    this._deliveryMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodsInput() {
    return this._deliveryMethods;
  }

  // fallback_chain - computed: false, optional: false, required: true
  private _fallbackChain = new NotificationPolicyProviderConfigurationConditionsFallbackChainList(this, "fallback_chain", false);
  public get fallbackChain() {
    return this._fallbackChain;
  }
  public putFallbackChain(value: NotificationPolicyProviderConfigurationConditionsFallbackChain[] | cdktf.IResolvable) {
    this._fallbackChain.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackChainInput() {
    return this._fallbackChain.internalValue;
  }
}

export class NotificationPolicyProviderConfigurationConditionsList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyProviderConfigurationConditions[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyProviderConfigurationConditionsOutputReference {
    return new NotificationPolicyProviderConfigurationConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyProviderConfiguration {
  /**
  * A list of condition objects that define the provider fallback order to use for specific groups of countries and delivery methods. The **last condition** in the list must not have the `countries` field configured, which makes it serve as the default fallback order for all countries not specified in the preceding conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#conditions NotificationPolicy#conditions}
  */
  readonly conditions: NotificationPolicyProviderConfigurationConditions[] | cdktf.IResolvable;
}

export function notificationPolicyProviderConfigurationToTerraform(struct?: NotificationPolicyProviderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(notificationPolicyProviderConfigurationConditionsToTerraform, false)(struct!.conditions),
  }
}


export function notificationPolicyProviderConfigurationToHclTerraform(struct?: NotificationPolicyProviderConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(notificationPolicyProviderConfigurationConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyProviderConfigurationConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyProviderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyProviderConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyProviderConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new NotificationPolicyProviderConfigurationConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: NotificationPolicyProviderConfigurationConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface NotificationPolicyQuota {
  /**
  * The delivery methods for which the limit is being defined.  This limits defined in this block are configured as two groups, Voice/SMS, or Email.  Email cannot be configured with Voice and/or SMS limits.  Options are `Email` (configuration of Email limits but can not be set alongside `SMS` or `Voice`), `SMS` (configuration of SMS limits and can be set alongside `Voice`, but not `Email`), `Voice` (configuration of Voice limits and can be set alongside `SMS`, but not `Email`).  Defaults to `["SMS", "Voice"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#delivery_methods NotificationPolicy#delivery_methods}
  */
  readonly deliveryMethods?: string[];
  /**
  * The maximum number of notifications allowed per day.  Cannot be set with `used` and `unused`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#total NotificationPolicy#total}
  */
  readonly total?: number;
  /**
  * A string to specify whether the limit defined is per-user or per environment.  Options are `ENVIRONMENT`, `USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#type NotificationPolicy#type}
  */
  readonly type: string;
  /**
  * The maximum number of notifications that can be received and not responded to each day. Must be configured with `used` and cannot be configured with `total`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#unused NotificationPolicy#unused}
  */
  readonly unused?: number;
  /**
  * The maximum number of notifications that can be received and responded to each day. Must be configured with `unused` and cannot be configured with `total`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#used NotificationPolicy#used}
  */
  readonly used?: number;
}

export function notificationPolicyQuotaToTerraform(struct?: NotificationPolicyQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deliveryMethods),
    total: cdktf.numberToTerraform(struct!.total),
    type: cdktf.stringToTerraform(struct!.type),
    unused: cdktf.numberToTerraform(struct!.unused),
    used: cdktf.numberToTerraform(struct!.used),
  }
}


export function notificationPolicyQuotaToHclTerraform(struct?: NotificationPolicyQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deliveryMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unused: {
      value: cdktf.numberToHclTerraform(struct!.unused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used: {
      value: cdktf.numberToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethods = this._deliveryMethods;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unused !== undefined) {
      hasAnyValues = true;
      internalValueResult.unused = this._unused;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryMethods = undefined;
      this._total = undefined;
      this._type = undefined;
      this._unused = undefined;
      this._used = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryMethods = value.deliveryMethods;
      this._total = value.total;
      this._type = value.type;
      this._unused = value.unused;
      this._used = value.used;
    }
  }

  // delivery_methods - computed: true, optional: true, required: false
  private _deliveryMethods?: string[]; 
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }
  public set deliveryMethods(value: string[]) {
    this._deliveryMethods = value;
  }
  public resetDeliveryMethods() {
    this._deliveryMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodsInput() {
    return this._deliveryMethods;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unused - computed: false, optional: true, required: false
  private _unused?: number; 
  public get unused() {
    return this.getNumberAttribute('unused');
  }
  public set unused(value: number) {
    this._unused = value;
  }
  public resetUnused() {
    this._unused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedInput() {
    return this._unused;
  }

  // used - computed: false, optional: true, required: false
  private _used?: number; 
  public get used() {
    return this.getNumberAttribute('used');
  }
  public set used(value: number) {
    this._used = value;
  }
  public resetUsed() {
    this._used = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }
}

export class NotificationPolicyQuotaList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyQuota[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyQuotaOutputReference {
    return new NotificationPolicyQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy pingone_notification_policy}
*/
export class NotificationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_notification_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPolicy to import
  * @param importFromId The id of the existing NotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_notification_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_policy pingone_notification_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPolicyConfig) {
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
    this._cooldownConfiguration.internalValue = config.cooldownConfiguration;
    this._countryLimit.internalValue = config.countryLimit;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._providerConfiguration.internalValue = config.providerConfiguration;
    this._quota.internalValue = config.quota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cooldown_configuration - computed: true, optional: true, required: false
  private _cooldownConfiguration = new NotificationPolicyCooldownConfigurationOutputReference(this, "cooldown_configuration");
  public get cooldownConfiguration() {
    return this._cooldownConfiguration;
  }
  public putCooldownConfiguration(value: NotificationPolicyCooldownConfiguration) {
    this._cooldownConfiguration.internalValue = value;
  }
  public resetCooldownConfiguration() {
    this._cooldownConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownConfigurationInput() {
    return this._cooldownConfiguration.internalValue;
  }

  // country_limit - computed: true, optional: true, required: false
  private _countryLimit = new NotificationPolicyCountryLimitOutputReference(this, "country_limit");
  public get countryLimit() {
    return this._countryLimit;
  }
  public putCountryLimit(value: NotificationPolicyCountryLimit) {
    this._countryLimit.internalValue = value;
  }
  public resetCountryLimit() {
    this._countryLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryLimitInput() {
    return this._countryLimit.internalValue;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // provider_configuration - computed: false, optional: true, required: false
  private _providerConfiguration = new NotificationPolicyProviderConfigurationOutputReference(this, "provider_configuration");
  public get providerConfiguration() {
    return this._providerConfiguration;
  }
  public putProviderConfiguration(value: NotificationPolicyProviderConfiguration) {
    this._providerConfiguration.internalValue = value;
  }
  public resetProviderConfiguration() {
    this._providerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigurationInput() {
    return this._providerConfiguration.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new NotificationPolicyQuotaList(this, "quota", true);
  public get quota() {
    return this._quota;
  }
  public putQuota(value: NotificationPolicyQuota[] | cdktf.IResolvable) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cooldown_configuration: notificationPolicyCooldownConfigurationToTerraform(this._cooldownConfiguration.internalValue),
      country_limit: notificationPolicyCountryLimitToTerraform(this._countryLimit.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      provider_configuration: notificationPolicyProviderConfigurationToTerraform(this._providerConfiguration.internalValue),
      quota: cdktf.listMapper(notificationPolicyQuotaToTerraform, false)(this._quota.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cooldown_configuration: {
        value: notificationPolicyCooldownConfigurationToHclTerraform(this._cooldownConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPolicyCooldownConfiguration",
      },
      country_limit: {
        value: notificationPolicyCountryLimitToHclTerraform(this._countryLimit.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPolicyCountryLimit",
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
      provider_configuration: {
        value: notificationPolicyProviderConfigurationToHclTerraform(this._providerConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPolicyProviderConfiguration",
      },
      quota: {
        value: cdktf.listMapperHcl(notificationPolicyQuotaToHclTerraform, false)(this._quota.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationPolicyQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
