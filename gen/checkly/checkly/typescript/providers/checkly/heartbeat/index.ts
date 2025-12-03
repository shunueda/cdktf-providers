// https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HeartbeatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines if the check is running or not. Possible values `true`, and `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#activated Heartbeat#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#id Heartbeat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines if any notifications will be sent out when a check fails/degrades/recovers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#muted Heartbeat#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * The name of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#name Heartbeat#name}
  */
  readonly name: string;
  /**
  * A list of tags for organizing and filtering checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#tags Heartbeat#tags}
  */
  readonly tags?: string[];
  /**
  * When true, the account level alert settings will be used, not the alert setting defined on this check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#use_global_alert_settings Heartbeat#use_global_alert_settings}
  */
  readonly useGlobalAlertSettings?: boolean | cdktf.IResolvable;
  /**
  * alert_channel_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#alert_channel_subscription Heartbeat#alert_channel_subscription}
  */
  readonly alertChannelSubscription?: HeartbeatAlertChannelSubscription[] | cdktf.IResolvable;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#alert_settings Heartbeat#alert_settings}
  */
  readonly alertSettings?: HeartbeatAlertSettings;
  /**
  * heartbeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#heartbeat Heartbeat#heartbeat}
  */
  readonly heartbeat: HeartbeatHeartbeat;
  /**
  * trigger_incident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#trigger_incident Heartbeat#trigger_incident}
  */
  readonly triggerIncident?: HeartbeatTriggerIncident;
}
export interface HeartbeatAlertChannelSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#activated Heartbeat#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#channel_id Heartbeat#channel_id}
  */
  readonly channelId: number;
}

export function heartbeatAlertChannelSubscriptionToTerraform(struct?: HeartbeatAlertChannelSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activated: cdktf.booleanToTerraform(struct!.activated),
    channel_id: cdktf.numberToTerraform(struct!.channelId),
  }
}


export function heartbeatAlertChannelSubscriptionToHclTerraform(struct?: HeartbeatAlertChannelSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activated: {
      value: cdktf.booleanToHclTerraform(struct!.activated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_id: {
      value: cdktf.numberToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatAlertChannelSubscriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HeartbeatAlertChannelSubscription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activated !== undefined) {
      hasAnyValues = true;
      internalValueResult.activated = this._activated;
    }
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatAlertChannelSubscription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activated = undefined;
      this._channelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activated = value.activated;
      this._channelId = value.channelId;
    }
  }

  // activated - computed: false, optional: false, required: true
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated');
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: number; 
  public get channelId() {
    return this.getNumberAttribute('channel_id');
  }
  public set channelId(value: number) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }
}

export class HeartbeatAlertChannelSubscriptionList extends cdktf.ComplexList {
  public internalValue? : HeartbeatAlertChannelSubscription[] | cdktf.IResolvable

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
  public get(index: number): HeartbeatAlertChannelSubscriptionOutputReference {
    return new HeartbeatAlertChannelSubscriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HeartbeatAlertSettingsParallelRunFailureThreshold {
  /**
  * Whether parallel run failure threshold is enabled. Only applies if the monitor is scheduled for multiple locations in parallel. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#enabled Heartbeat#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Percentage of runs that must fail to trigger alert. Possible values are `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, and `100`. (Default `10`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#percentage Heartbeat#percentage}
  */
  readonly percentage?: number;
}

export function heartbeatAlertSettingsParallelRunFailureThresholdToTerraform(struct?: HeartbeatAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function heartbeatAlertSettingsParallelRunFailureThresholdToHclTerraform(struct?: HeartbeatAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
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
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatAlertSettingsParallelRunFailureThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HeartbeatAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._percentage = value.percentage;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}

export class HeartbeatAlertSettingsParallelRunFailureThresholdList extends cdktf.ComplexList {
  public internalValue? : HeartbeatAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable

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
  public get(index: number): HeartbeatAlertSettingsParallelRunFailureThresholdOutputReference {
    return new HeartbeatAlertSettingsParallelRunFailureThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HeartbeatAlertSettingsReminders {
  /**
  * Number of reminder notifications to send. Possible values are `0`, `1`, `2`, `3`, `4`, `5`, and `100000` (`0` to disable, `100000` for unlimited). (Default `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#amount Heartbeat#amount}
  */
  readonly amount?: number;
  /**
  * Interval between reminder notifications in minutes. Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#interval Heartbeat#interval}
  */
  readonly interval?: number;
}

export function heartbeatAlertSettingsRemindersToTerraform(struct?: HeartbeatAlertSettingsReminders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function heartbeatAlertSettingsRemindersToHclTerraform(struct?: HeartbeatAlertSettingsReminders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatAlertSettingsRemindersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HeartbeatAlertSettingsReminders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatAlertSettingsReminders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._interval = value.interval;
    }
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class HeartbeatAlertSettingsRemindersList extends cdktf.ComplexList {
  public internalValue? : HeartbeatAlertSettingsReminders[] | cdktf.IResolvable

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
  public get(index: number): HeartbeatAlertSettingsRemindersOutputReference {
    return new HeartbeatAlertSettingsRemindersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HeartbeatAlertSettingsRunBasedEscalation {
  /**
  * Send an alert notification after the given number of consecutive monitor runs have failed. Possible values are between `1` and `5`. (Default `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#failed_run_threshold Heartbeat#failed_run_threshold}
  */
  readonly failedRunThreshold?: number;
}

export function heartbeatAlertSettingsRunBasedEscalationToTerraform(struct?: HeartbeatAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_run_threshold: cdktf.numberToTerraform(struct!.failedRunThreshold),
  }
}


export function heartbeatAlertSettingsRunBasedEscalationToHclTerraform(struct?: HeartbeatAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_run_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failedRunThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatAlertSettingsRunBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HeartbeatAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedRunThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedRunThreshold = this._failedRunThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failedRunThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failedRunThreshold = value.failedRunThreshold;
    }
  }

  // failed_run_threshold - computed: false, optional: true, required: false
  private _failedRunThreshold?: number; 
  public get failedRunThreshold() {
    return this.getNumberAttribute('failed_run_threshold');
  }
  public set failedRunThreshold(value: number) {
    this._failedRunThreshold = value;
  }
  public resetFailedRunThreshold() {
    this._failedRunThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedRunThresholdInput() {
    return this._failedRunThreshold;
  }
}

export class HeartbeatAlertSettingsRunBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : HeartbeatAlertSettingsRunBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): HeartbeatAlertSettingsRunBasedEscalationOutputReference {
    return new HeartbeatAlertSettingsRunBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HeartbeatAlertSettingsSslCertificates {
  /**
  * No longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#alert_threshold Heartbeat#alert_threshold}
  */
  readonly alertThreshold?: number;
  /**
  * No longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#enabled Heartbeat#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function heartbeatAlertSettingsSslCertificatesToTerraform(struct?: HeartbeatAlertSettingsSslCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_threshold: cdktf.numberToTerraform(struct!.alertThreshold),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function heartbeatAlertSettingsSslCertificatesToHclTerraform(struct?: HeartbeatAlertSettingsSslCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_threshold: {
      value: cdktf.numberToHclTerraform(struct!.alertThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class HeartbeatAlertSettingsSslCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HeartbeatAlertSettingsSslCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertThreshold = this._alertThreshold;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatAlertSettingsSslCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertThreshold = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertThreshold = value.alertThreshold;
      this._enabled = value.enabled;
    }
  }

  // alert_threshold - computed: false, optional: true, required: false
  private _alertThreshold?: number; 
  public get alertThreshold() {
    return this.getNumberAttribute('alert_threshold');
  }
  public set alertThreshold(value: number) {
    this._alertThreshold = value;
  }
  public resetAlertThreshold() {
    this._alertThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertThresholdInput() {
    return this._alertThreshold;
  }

  // enabled - computed: false, optional: true, required: false
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
}

export class HeartbeatAlertSettingsSslCertificatesList extends cdktf.ComplexList {
  public internalValue? : HeartbeatAlertSettingsSslCertificates[] | cdktf.IResolvable

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
  public get(index: number): HeartbeatAlertSettingsSslCertificatesOutputReference {
    return new HeartbeatAlertSettingsSslCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HeartbeatAlertSettingsTimeBasedEscalation {
  /**
  * Send an alert notification after the monitor has been failing for the given amount of time (in minutes). Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#minutes_failing_threshold Heartbeat#minutes_failing_threshold}
  */
  readonly minutesFailingThreshold?: number;
}

export function heartbeatAlertSettingsTimeBasedEscalationToTerraform(struct?: HeartbeatAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_failing_threshold: cdktf.numberToTerraform(struct!.minutesFailingThreshold),
  }
}


export function heartbeatAlertSettingsTimeBasedEscalationToHclTerraform(struct?: HeartbeatAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes_failing_threshold: {
      value: cdktf.numberToHclTerraform(struct!.minutesFailingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatAlertSettingsTimeBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HeartbeatAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutesFailingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesFailingThreshold = this._minutesFailingThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minutesFailingThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minutesFailingThreshold = value.minutesFailingThreshold;
    }
  }

  // minutes_failing_threshold - computed: false, optional: true, required: false
  private _minutesFailingThreshold?: number; 
  public get minutesFailingThreshold() {
    return this.getNumberAttribute('minutes_failing_threshold');
  }
  public set minutesFailingThreshold(value: number) {
    this._minutesFailingThreshold = value;
  }
  public resetMinutesFailingThreshold() {
    this._minutesFailingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesFailingThresholdInput() {
    return this._minutesFailingThreshold;
  }
}

export class HeartbeatAlertSettingsTimeBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : HeartbeatAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): HeartbeatAlertSettingsTimeBasedEscalationOutputReference {
    return new HeartbeatAlertSettingsTimeBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HeartbeatAlertSettings {
  /**
  * Determines the type of escalation to use. Possible values are `RUN_BASED` and `TIME_BASED`. (Default `RUN_BASED`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#escalation_type Heartbeat#escalation_type}
  */
  readonly escalationType?: string;
  /**
  * parallel_run_failure_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#parallel_run_failure_threshold Heartbeat#parallel_run_failure_threshold}
  */
  readonly parallelRunFailureThreshold?: HeartbeatAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable;
  /**
  * reminders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#reminders Heartbeat#reminders}
  */
  readonly reminders?: HeartbeatAlertSettingsReminders[] | cdktf.IResolvable;
  /**
  * run_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#run_based_escalation Heartbeat#run_based_escalation}
  */
  readonly runBasedEscalation?: HeartbeatAlertSettingsRunBasedEscalation[] | cdktf.IResolvable;
  /**
  * ssl_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#ssl_certificates Heartbeat#ssl_certificates}
  */
  readonly sslCertificates?: HeartbeatAlertSettingsSslCertificates[] | cdktf.IResolvable;
  /**
  * time_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#time_based_escalation Heartbeat#time_based_escalation}
  */
  readonly timeBasedEscalation?: HeartbeatAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable;
}

export function heartbeatAlertSettingsToTerraform(struct?: HeartbeatAlertSettingsOutputReference | HeartbeatAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_type: cdktf.stringToTerraform(struct!.escalationType),
    parallel_run_failure_threshold: cdktf.listMapper(heartbeatAlertSettingsParallelRunFailureThresholdToTerraform, true)(struct!.parallelRunFailureThreshold),
    reminders: cdktf.listMapper(heartbeatAlertSettingsRemindersToTerraform, true)(struct!.reminders),
    run_based_escalation: cdktf.listMapper(heartbeatAlertSettingsRunBasedEscalationToTerraform, true)(struct!.runBasedEscalation),
    ssl_certificates: cdktf.listMapper(heartbeatAlertSettingsSslCertificatesToTerraform, true)(struct!.sslCertificates),
    time_based_escalation: cdktf.listMapper(heartbeatAlertSettingsTimeBasedEscalationToTerraform, true)(struct!.timeBasedEscalation),
  }
}


export function heartbeatAlertSettingsToHclTerraform(struct?: HeartbeatAlertSettingsOutputReference | HeartbeatAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_type: {
      value: cdktf.stringToHclTerraform(struct!.escalationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel_run_failure_threshold: {
      value: cdktf.listMapperHcl(heartbeatAlertSettingsParallelRunFailureThresholdToHclTerraform, true)(struct!.parallelRunFailureThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "HeartbeatAlertSettingsParallelRunFailureThresholdList",
    },
    reminders: {
      value: cdktf.listMapperHcl(heartbeatAlertSettingsRemindersToHclTerraform, true)(struct!.reminders),
      isBlock: true,
      type: "list",
      storageClassType: "HeartbeatAlertSettingsRemindersList",
    },
    run_based_escalation: {
      value: cdktf.listMapperHcl(heartbeatAlertSettingsRunBasedEscalationToHclTerraform, true)(struct!.runBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "HeartbeatAlertSettingsRunBasedEscalationList",
    },
    ssl_certificates: {
      value: cdktf.listMapperHcl(heartbeatAlertSettingsSslCertificatesToHclTerraform, true)(struct!.sslCertificates),
      isBlock: true,
      type: "set",
      storageClassType: "HeartbeatAlertSettingsSslCertificatesList",
    },
    time_based_escalation: {
      value: cdktf.listMapperHcl(heartbeatAlertSettingsTimeBasedEscalationToHclTerraform, true)(struct!.timeBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "HeartbeatAlertSettingsTimeBasedEscalationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeartbeatAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationType = this._escalationType;
    }
    if (this._parallelRunFailureThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelRunFailureThreshold = this._parallelRunFailureThreshold?.internalValue;
    }
    if (this._reminders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminders = this._reminders?.internalValue;
    }
    if (this._runBasedEscalation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runBasedEscalation = this._runBasedEscalation?.internalValue;
    }
    if (this._sslCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificates = this._sslCertificates?.internalValue;
    }
    if (this._timeBasedEscalation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedEscalation = this._timeBasedEscalation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationType = undefined;
      this._parallelRunFailureThreshold.internalValue = undefined;
      this._reminders.internalValue = undefined;
      this._runBasedEscalation.internalValue = undefined;
      this._sslCertificates.internalValue = undefined;
      this._timeBasedEscalation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationType = value.escalationType;
      this._parallelRunFailureThreshold.internalValue = value.parallelRunFailureThreshold;
      this._reminders.internalValue = value.reminders;
      this._runBasedEscalation.internalValue = value.runBasedEscalation;
      this._sslCertificates.internalValue = value.sslCertificates;
      this._timeBasedEscalation.internalValue = value.timeBasedEscalation;
    }
  }

  // escalation_type - computed: false, optional: true, required: false
  private _escalationType?: string; 
  public get escalationType() {
    return this.getStringAttribute('escalation_type');
  }
  public set escalationType(value: string) {
    this._escalationType = value;
  }
  public resetEscalationType() {
    this._escalationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationTypeInput() {
    return this._escalationType;
  }

  // parallel_run_failure_threshold - computed: false, optional: true, required: false
  private _parallelRunFailureThreshold = new HeartbeatAlertSettingsParallelRunFailureThresholdList(this, "parallel_run_failure_threshold", false);
  public get parallelRunFailureThreshold() {
    return this._parallelRunFailureThreshold;
  }
  public putParallelRunFailureThreshold(value: HeartbeatAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable) {
    this._parallelRunFailureThreshold.internalValue = value;
  }
  public resetParallelRunFailureThreshold() {
    this._parallelRunFailureThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelRunFailureThresholdInput() {
    return this._parallelRunFailureThreshold.internalValue;
  }

  // reminders - computed: false, optional: true, required: false
  private _reminders = new HeartbeatAlertSettingsRemindersList(this, "reminders", false);
  public get reminders() {
    return this._reminders;
  }
  public putReminders(value: HeartbeatAlertSettingsReminders[] | cdktf.IResolvable) {
    this._reminders.internalValue = value;
  }
  public resetReminders() {
    this._reminders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remindersInput() {
    return this._reminders.internalValue;
  }

  // run_based_escalation - computed: false, optional: true, required: false
  private _runBasedEscalation = new HeartbeatAlertSettingsRunBasedEscalationList(this, "run_based_escalation", false);
  public get runBasedEscalation() {
    return this._runBasedEscalation;
  }
  public putRunBasedEscalation(value: HeartbeatAlertSettingsRunBasedEscalation[] | cdktf.IResolvable) {
    this._runBasedEscalation.internalValue = value;
  }
  public resetRunBasedEscalation() {
    this._runBasedEscalation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runBasedEscalationInput() {
    return this._runBasedEscalation.internalValue;
  }

  // ssl_certificates - computed: false, optional: true, required: false
  private _sslCertificates = new HeartbeatAlertSettingsSslCertificatesList(this, "ssl_certificates", true);
  public get sslCertificates() {
    return this._sslCertificates;
  }
  public putSslCertificates(value: HeartbeatAlertSettingsSslCertificates[] | cdktf.IResolvable) {
    this._sslCertificates.internalValue = value;
  }
  public resetSslCertificates() {
    this._sslCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificatesInput() {
    return this._sslCertificates.internalValue;
  }

  // time_based_escalation - computed: false, optional: true, required: false
  private _timeBasedEscalation = new HeartbeatAlertSettingsTimeBasedEscalationList(this, "time_based_escalation", false);
  public get timeBasedEscalation() {
    return this._timeBasedEscalation;
  }
  public putTimeBasedEscalation(value: HeartbeatAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable) {
    this._timeBasedEscalation.internalValue = value;
  }
  public resetTimeBasedEscalation() {
    this._timeBasedEscalation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedEscalationInput() {
    return this._timeBasedEscalation.internalValue;
  }
}
export interface HeartbeatHeartbeat {
  /**
  * How long Checkly should wait before triggering any alerts when a ping does not arrive within the set period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#grace Heartbeat#grace}
  */
  readonly grace: number;
  /**
  * Possible values `seconds`, `minutes`, `hours` and `days`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#grace_unit Heartbeat#grace_unit}
  */
  readonly graceUnit: string;
  /**
  * How often you expect a ping to the ping URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#period Heartbeat#period}
  */
  readonly period: number;
  /**
  * Possible values `seconds`, `minutes`, `hours` and `days`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#period_unit Heartbeat#period_unit}
  */
  readonly periodUnit: string;
  /**
  * Custom token to generate your ping URL. Checkly will expect a ping to `https://ping.checklyhq.com/[PING_TOKEN]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#ping_token Heartbeat#ping_token}
  */
  readonly pingToken?: string;
}

export function heartbeatHeartbeatToTerraform(struct?: HeartbeatHeartbeatOutputReference | HeartbeatHeartbeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace: cdktf.numberToTerraform(struct!.grace),
    grace_unit: cdktf.stringToTerraform(struct!.graceUnit),
    period: cdktf.numberToTerraform(struct!.period),
    period_unit: cdktf.stringToTerraform(struct!.periodUnit),
    ping_token: cdktf.stringToTerraform(struct!.pingToken),
  }
}


export function heartbeatHeartbeatToHclTerraform(struct?: HeartbeatHeartbeatOutputReference | HeartbeatHeartbeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grace: {
      value: cdktf.numberToHclTerraform(struct!.grace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grace_unit: {
      value: cdktf.stringToHclTerraform(struct!.graceUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_unit: {
      value: cdktf.stringToHclTerraform(struct!.periodUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_token: {
      value: cdktf.stringToHclTerraform(struct!.pingToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatHeartbeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeartbeatHeartbeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grace !== undefined) {
      hasAnyValues = true;
      internalValueResult.grace = this._grace;
    }
    if (this._graceUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceUnit = this._graceUnit;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodUnit = this._periodUnit;
    }
    if (this._pingToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingToken = this._pingToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatHeartbeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grace = undefined;
      this._graceUnit = undefined;
      this._period = undefined;
      this._periodUnit = undefined;
      this._pingToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grace = value.grace;
      this._graceUnit = value.graceUnit;
      this._period = value.period;
      this._periodUnit = value.periodUnit;
      this._pingToken = value.pingToken;
    }
  }

  // grace - computed: false, optional: false, required: true
  private _grace?: number; 
  public get grace() {
    return this.getNumberAttribute('grace');
  }
  public set grace(value: number) {
    this._grace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graceInput() {
    return this._grace;
  }

  // grace_unit - computed: false, optional: false, required: true
  private _graceUnit?: string; 
  public get graceUnit() {
    return this.getStringAttribute('grace_unit');
  }
  public set graceUnit(value: string) {
    this._graceUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graceUnitInput() {
    return this._graceUnit;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: false, required: true
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // ping_token - computed: true, optional: true, required: false
  private _pingToken?: string; 
  public get pingToken() {
    return this.getStringAttribute('ping_token');
  }
  public set pingToken(value: string) {
    this._pingToken = value;
  }
  public resetPingToken() {
    this._pingToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingTokenInput() {
    return this._pingToken;
  }
}
export interface HeartbeatTriggerIncident {
  /**
  * A detailed description of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#description Heartbeat#description}
  */
  readonly description: string;
  /**
  * The name of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#name Heartbeat#name}
  */
  readonly name: string;
  /**
  * Whether to notify subscribers when the incident is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#notify_subscribers Heartbeat#notify_subscribers}
  */
  readonly notifySubscribers: boolean | cdktf.IResolvable;
  /**
  * The status page service that this incident will be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#service_id Heartbeat#service_id}
  */
  readonly serviceId: string;
  /**
  * The severity level of the incident. Possible values are `MINOR`, `MEDIUM`, `MAJOR`, and `CRITICAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#severity Heartbeat#severity}
  */
  readonly severity: string;
}

export function heartbeatTriggerIncidentToTerraform(struct?: HeartbeatTriggerIncidentOutputReference | HeartbeatTriggerIncident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    notify_subscribers: cdktf.booleanToTerraform(struct!.notifySubscribers),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function heartbeatTriggerIncidentToHclTerraform(struct?: HeartbeatTriggerIncidentOutputReference | HeartbeatTriggerIncident): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_subscribers: {
      value: cdktf.booleanToHclTerraform(struct!.notifySubscribers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HeartbeatTriggerIncidentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HeartbeatTriggerIncident | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifySubscribers !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifySubscribers = this._notifySubscribers;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HeartbeatTriggerIncident | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._notifySubscribers = undefined;
      this._serviceId = undefined;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._notifySubscribers = value.notifySubscribers;
      this._serviceId = value.serviceId;
      this._severity = value.severity;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // notify_subscribers - computed: false, optional: false, required: true
  private _notifySubscribers?: boolean | cdktf.IResolvable; 
  public get notifySubscribers() {
    return this.getBooleanAttribute('notify_subscribers');
  }
  public set notifySubscribers(value: boolean | cdktf.IResolvable) {
    this._notifySubscribers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySubscribersInput() {
    return this._notifySubscribers;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat checkly_heartbeat}
*/
export class Heartbeat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_heartbeat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Heartbeat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Heartbeat to import
  * @param importFromId The id of the existing Heartbeat that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Heartbeat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_heartbeat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.1/docs/resources/heartbeat checkly_heartbeat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HeartbeatConfig
  */
  public constructor(scope: Construct, id: string, config: HeartbeatConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_heartbeat',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.1',
        providerVersionConstraint: '1.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activated = config.activated;
    this._id = config.id;
    this._muted = config.muted;
    this._name = config.name;
    this._tags = config.tags;
    this._useGlobalAlertSettings = config.useGlobalAlertSettings;
    this._alertChannelSubscription.internalValue = config.alertChannelSubscription;
    this._alertSettings.internalValue = config.alertSettings;
    this._heartbeat.internalValue = config.heartbeat;
    this._triggerIncident.internalValue = config.triggerIncident;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: false, optional: false, required: true
  private _activated?: boolean | cdktf.IResolvable; 
  public get activated() {
    return this.getBooleanAttribute('activated');
  }
  public set activated(value: boolean | cdktf.IResolvable) {
    this._activated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedInput() {
    return this._activated;
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

  // muted - computed: false, optional: true, required: false
  private _muted?: boolean | cdktf.IResolvable; 
  public get muted() {
    return this.getBooleanAttribute('muted');
  }
  public set muted(value: boolean | cdktf.IResolvable) {
    this._muted = value;
  }
  public resetMuted() {
    this._muted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutedInput() {
    return this._muted;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_global_alert_settings - computed: false, optional: true, required: false
  private _useGlobalAlertSettings?: boolean | cdktf.IResolvable; 
  public get useGlobalAlertSettings() {
    return this.getBooleanAttribute('use_global_alert_settings');
  }
  public set useGlobalAlertSettings(value: boolean | cdktf.IResolvable) {
    this._useGlobalAlertSettings = value;
  }
  public resetUseGlobalAlertSettings() {
    this._useGlobalAlertSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGlobalAlertSettingsInput() {
    return this._useGlobalAlertSettings;
  }

  // alert_channel_subscription - computed: false, optional: true, required: false
  private _alertChannelSubscription = new HeartbeatAlertChannelSubscriptionList(this, "alert_channel_subscription", false);
  public get alertChannelSubscription() {
    return this._alertChannelSubscription;
  }
  public putAlertChannelSubscription(value: HeartbeatAlertChannelSubscription[] | cdktf.IResolvable) {
    this._alertChannelSubscription.internalValue = value;
  }
  public resetAlertChannelSubscription() {
    this._alertChannelSubscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertChannelSubscriptionInput() {
    return this._alertChannelSubscription.internalValue;
  }

  // alert_settings - computed: false, optional: true, required: false
  private _alertSettings = new HeartbeatAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: HeartbeatAlertSettings) {
    this._alertSettings.internalValue = value;
  }
  public resetAlertSettings() {
    this._alertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingsInput() {
    return this._alertSettings.internalValue;
  }

  // heartbeat - computed: false, optional: false, required: true
  private _heartbeat = new HeartbeatHeartbeatOutputReference(this, "heartbeat");
  public get heartbeat() {
    return this._heartbeat;
  }
  public putHeartbeat(value: HeartbeatHeartbeat) {
    this._heartbeat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatInput() {
    return this._heartbeat.internalValue;
  }

  // trigger_incident - computed: false, optional: true, required: false
  private _triggerIncident = new HeartbeatTriggerIncidentOutputReference(this, "trigger_incident");
  public get triggerIncident() {
    return this._triggerIncident;
  }
  public putTriggerIncident(value: HeartbeatTriggerIncident) {
    this._triggerIncident.internalValue = value;
  }
  public resetTriggerIncident() {
    this._triggerIncident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerIncidentInput() {
    return this._triggerIncident.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activated: cdktf.booleanToTerraform(this._activated),
      id: cdktf.stringToTerraform(this._id),
      muted: cdktf.booleanToTerraform(this._muted),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_global_alert_settings: cdktf.booleanToTerraform(this._useGlobalAlertSettings),
      alert_channel_subscription: cdktf.listMapper(heartbeatAlertChannelSubscriptionToTerraform, true)(this._alertChannelSubscription.internalValue),
      alert_settings: heartbeatAlertSettingsToTerraform(this._alertSettings.internalValue),
      heartbeat: heartbeatHeartbeatToTerraform(this._heartbeat.internalValue),
      trigger_incident: heartbeatTriggerIncidentToTerraform(this._triggerIncident.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activated: {
        value: cdktf.booleanToHclTerraform(this._activated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      muted: {
        value: cdktf.booleanToHclTerraform(this._muted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_global_alert_settings: {
        value: cdktf.booleanToHclTerraform(this._useGlobalAlertSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_channel_subscription: {
        value: cdktf.listMapperHcl(heartbeatAlertChannelSubscriptionToHclTerraform, true)(this._alertChannelSubscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HeartbeatAlertChannelSubscriptionList",
      },
      alert_settings: {
        value: heartbeatAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HeartbeatAlertSettingsList",
      },
      heartbeat: {
        value: heartbeatHeartbeatToHclTerraform(this._heartbeat.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HeartbeatHeartbeatList",
      },
      trigger_incident: {
        value: heartbeatTriggerIncidentToHclTerraform(this._triggerIncident.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HeartbeatTriggerIncidentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
