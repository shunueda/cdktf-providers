// https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UrlMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether the monitor will run periodically or not after being deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#activated UrlMonitor#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * The response time in milliseconds where the monitor should be considered degraded. Possible values are between `0` and `30000`. (Default `3000`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#degraded_response_time UrlMonitor#degraded_response_time}
  */
  readonly degradedResponseTime?: number;
  /**
  * How often the monitor should run in minutes. Possible values are `0`, `1`, `2`, `5`, `10`, `15`, `30`, `60`, `120`, `180`, `360`, `720`, and `1440`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#frequency UrlMonitor#frequency}
  */
  readonly frequency: number;
  /**
  * To create a high frequency monitor, set `frequency` to `0` and `frequency_offset` to `10`, `20`, or `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#frequency_offset UrlMonitor#frequency_offset}
  */
  readonly frequencyOffset?: number;
  /**
  * The ID of the check group that this monitor is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#group_id UrlMonitor#group_id}
  */
  readonly groupId?: number;
  /**
  * The position of the monitor in the check group. It determines in what order checks and monitors are run when a group is triggered from the API or from CI/CD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#group_order UrlMonitor#group_order}
  */
  readonly groupOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#id UrlMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An array of one or more data center locations where to run the this monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#locations UrlMonitor#locations}
  */
  readonly locations?: string[];
  /**
  * The response time in milliseconds where the monitor should be considered failing. Possible values are between `0` and `30000`. (Default `5000`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#max_response_time UrlMonitor#max_response_time}
  */
  readonly maxResponseTime?: number;
  /**
  * Determines if any notifications will be sent out when the monitor fails and/or recovers. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#muted UrlMonitor#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * The name of the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#name UrlMonitor#name}
  */
  readonly name: string;
  /**
  * An array of one or more private locations slugs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#private_locations UrlMonitor#private_locations}
  */
  readonly privateLocations?: string[];
  /**
  * Determines whether the monitor should run on all selected locations in parallel or round-robin. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#run_parallel UrlMonitor#run_parallel}
  */
  readonly runParallel?: boolean | cdktf.IResolvable;
  /**
  * Allows to invert the behaviour of when the monitor is considered to fail. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#should_fail UrlMonitor#should_fail}
  */
  readonly shouldFail?: boolean | cdktf.IResolvable;
  /**
  * A list of tags for organizing and filtering checks and monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#tags UrlMonitor#tags}
  */
  readonly tags?: string[];
  /**
  * When true, the account level alert settings will be used, not the alert setting defined on this monitor. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#use_global_alert_settings UrlMonitor#use_global_alert_settings}
  */
  readonly useGlobalAlertSettings?: boolean | cdktf.IResolvable;
  /**
  * alert_channel_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#alert_channel_subscription UrlMonitor#alert_channel_subscription}
  */
  readonly alertChannelSubscription?: UrlMonitorAlertChannelSubscription[] | cdktf.IResolvable;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#alert_settings UrlMonitor#alert_settings}
  */
  readonly alertSettings?: UrlMonitorAlertSettings;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#request UrlMonitor#request}
  */
  readonly request: UrlMonitorRequest;
  /**
  * retry_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#retry_strategy UrlMonitor#retry_strategy}
  */
  readonly retryStrategy?: UrlMonitorRetryStrategy;
  /**
  * trigger_incident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#trigger_incident UrlMonitor#trigger_incident}
  */
  readonly triggerIncident?: UrlMonitorTriggerIncident;
}
export interface UrlMonitorAlertChannelSubscription {
  /**
  * Whether an alert should be sent to this channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#activated UrlMonitor#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * The ID of the alert channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#channel_id UrlMonitor#channel_id}
  */
  readonly channelId: number;
}

export function urlMonitorAlertChannelSubscriptionToTerraform(struct?: UrlMonitorAlertChannelSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activated: cdktf.booleanToTerraform(struct!.activated),
    channel_id: cdktf.numberToTerraform(struct!.channelId),
  }
}


export function urlMonitorAlertChannelSubscriptionToHclTerraform(struct?: UrlMonitorAlertChannelSubscription | cdktf.IResolvable): any {
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

export class UrlMonitorAlertChannelSubscriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlMonitorAlertChannelSubscription | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UrlMonitorAlertChannelSubscription | cdktf.IResolvable | undefined) {
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

export class UrlMonitorAlertChannelSubscriptionList extends cdktf.ComplexList {
  public internalValue? : UrlMonitorAlertChannelSubscription[] | cdktf.IResolvable

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
  public get(index: number): UrlMonitorAlertChannelSubscriptionOutputReference {
    return new UrlMonitorAlertChannelSubscriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlMonitorAlertSettingsParallelRunFailureThreshold {
  /**
  * Whether parallel run failure threshold is enabled. Only applies if the monitor is scheduled for multiple locations in parallel. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#enabled UrlMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Percentage of runs that must fail to trigger alert. Possible values are `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, and `100`. (Default `10`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#percentage UrlMonitor#percentage}
  */
  readonly percentage?: number;
}

export function urlMonitorAlertSettingsParallelRunFailureThresholdToTerraform(struct?: UrlMonitorAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function urlMonitorAlertSettingsParallelRunFailureThresholdToHclTerraform(struct?: UrlMonitorAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
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

export class UrlMonitorAlertSettingsParallelRunFailureThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlMonitorAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UrlMonitorAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined) {
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

export class UrlMonitorAlertSettingsParallelRunFailureThresholdList extends cdktf.ComplexList {
  public internalValue? : UrlMonitorAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable

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
  public get(index: number): UrlMonitorAlertSettingsParallelRunFailureThresholdOutputReference {
    return new UrlMonitorAlertSettingsParallelRunFailureThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlMonitorAlertSettingsReminders {
  /**
  * Number of reminder notifications to send. Possible values are `0`, `1`, `2`, `3`, `4`, `5`, and `100000` (`0` to disable, `100000` for unlimited). (Default `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#amount UrlMonitor#amount}
  */
  readonly amount?: number;
  /**
  * Interval between reminder notifications in minutes. Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#interval UrlMonitor#interval}
  */
  readonly interval?: number;
}

export function urlMonitorAlertSettingsRemindersToTerraform(struct?: UrlMonitorAlertSettingsReminders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function urlMonitorAlertSettingsRemindersToHclTerraform(struct?: UrlMonitorAlertSettingsReminders | cdktf.IResolvable): any {
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

export class UrlMonitorAlertSettingsRemindersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlMonitorAlertSettingsReminders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UrlMonitorAlertSettingsReminders | cdktf.IResolvable | undefined) {
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

export class UrlMonitorAlertSettingsRemindersList extends cdktf.ComplexList {
  public internalValue? : UrlMonitorAlertSettingsReminders[] | cdktf.IResolvable

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
  public get(index: number): UrlMonitorAlertSettingsRemindersOutputReference {
    return new UrlMonitorAlertSettingsRemindersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlMonitorAlertSettingsRunBasedEscalation {
  /**
  * Send an alert notification after the given number of consecutive monitor runs have failed. Possible values are between `1` and `5`. (Default `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#failed_run_threshold UrlMonitor#failed_run_threshold}
  */
  readonly failedRunThreshold?: number;
}

export function urlMonitorAlertSettingsRunBasedEscalationToTerraform(struct?: UrlMonitorAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_run_threshold: cdktf.numberToTerraform(struct!.failedRunThreshold),
  }
}


export function urlMonitorAlertSettingsRunBasedEscalationToHclTerraform(struct?: UrlMonitorAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
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

export class UrlMonitorAlertSettingsRunBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlMonitorAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UrlMonitorAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined) {
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

export class UrlMonitorAlertSettingsRunBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : UrlMonitorAlertSettingsRunBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): UrlMonitorAlertSettingsRunBasedEscalationOutputReference {
    return new UrlMonitorAlertSettingsRunBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlMonitorAlertSettingsTimeBasedEscalation {
  /**
  * Send an alert notification after the monitor has been failing for the given amount of time (in minutes). Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#minutes_failing_threshold UrlMonitor#minutes_failing_threshold}
  */
  readonly minutesFailingThreshold?: number;
}

export function urlMonitorAlertSettingsTimeBasedEscalationToTerraform(struct?: UrlMonitorAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_failing_threshold: cdktf.numberToTerraform(struct!.minutesFailingThreshold),
  }
}


export function urlMonitorAlertSettingsTimeBasedEscalationToHclTerraform(struct?: UrlMonitorAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
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

export class UrlMonitorAlertSettingsTimeBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlMonitorAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UrlMonitorAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined) {
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

export class UrlMonitorAlertSettingsTimeBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : UrlMonitorAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): UrlMonitorAlertSettingsTimeBasedEscalationOutputReference {
    return new UrlMonitorAlertSettingsTimeBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlMonitorAlertSettings {
  /**
  * Determines the type of escalation to use. Possible values are `RUN_BASED` and `TIME_BASED`. (Default `RUN_BASED`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#escalation_type UrlMonitor#escalation_type}
  */
  readonly escalationType?: string;
  /**
  * parallel_run_failure_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#parallel_run_failure_threshold UrlMonitor#parallel_run_failure_threshold}
  */
  readonly parallelRunFailureThreshold?: UrlMonitorAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable;
  /**
  * reminders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#reminders UrlMonitor#reminders}
  */
  readonly reminders?: UrlMonitorAlertSettingsReminders[] | cdktf.IResolvable;
  /**
  * run_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#run_based_escalation UrlMonitor#run_based_escalation}
  */
  readonly runBasedEscalation?: UrlMonitorAlertSettingsRunBasedEscalation[] | cdktf.IResolvable;
  /**
  * time_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#time_based_escalation UrlMonitor#time_based_escalation}
  */
  readonly timeBasedEscalation?: UrlMonitorAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable;
}

export function urlMonitorAlertSettingsToTerraform(struct?: UrlMonitorAlertSettingsOutputReference | UrlMonitorAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_type: cdktf.stringToTerraform(struct!.escalationType),
    parallel_run_failure_threshold: cdktf.listMapper(urlMonitorAlertSettingsParallelRunFailureThresholdToTerraform, true)(struct!.parallelRunFailureThreshold),
    reminders: cdktf.listMapper(urlMonitorAlertSettingsRemindersToTerraform, true)(struct!.reminders),
    run_based_escalation: cdktf.listMapper(urlMonitorAlertSettingsRunBasedEscalationToTerraform, true)(struct!.runBasedEscalation),
    time_based_escalation: cdktf.listMapper(urlMonitorAlertSettingsTimeBasedEscalationToTerraform, true)(struct!.timeBasedEscalation),
  }
}


export function urlMonitorAlertSettingsToHclTerraform(struct?: UrlMonitorAlertSettingsOutputReference | UrlMonitorAlertSettings): any {
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
      value: cdktf.listMapperHcl(urlMonitorAlertSettingsParallelRunFailureThresholdToHclTerraform, true)(struct!.parallelRunFailureThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "UrlMonitorAlertSettingsParallelRunFailureThresholdList",
    },
    reminders: {
      value: cdktf.listMapperHcl(urlMonitorAlertSettingsRemindersToHclTerraform, true)(struct!.reminders),
      isBlock: true,
      type: "list",
      storageClassType: "UrlMonitorAlertSettingsRemindersList",
    },
    run_based_escalation: {
      value: cdktf.listMapperHcl(urlMonitorAlertSettingsRunBasedEscalationToHclTerraform, true)(struct!.runBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "UrlMonitorAlertSettingsRunBasedEscalationList",
    },
    time_based_escalation: {
      value: cdktf.listMapperHcl(urlMonitorAlertSettingsTimeBasedEscalationToHclTerraform, true)(struct!.timeBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "UrlMonitorAlertSettingsTimeBasedEscalationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlMonitorAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlMonitorAlertSettings | undefined {
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
    if (this._timeBasedEscalation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedEscalation = this._timeBasedEscalation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlMonitorAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationType = undefined;
      this._parallelRunFailureThreshold.internalValue = undefined;
      this._reminders.internalValue = undefined;
      this._runBasedEscalation.internalValue = undefined;
      this._timeBasedEscalation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationType = value.escalationType;
      this._parallelRunFailureThreshold.internalValue = value.parallelRunFailureThreshold;
      this._reminders.internalValue = value.reminders;
      this._runBasedEscalation.internalValue = value.runBasedEscalation;
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
  private _parallelRunFailureThreshold = new UrlMonitorAlertSettingsParallelRunFailureThresholdList(this, "parallel_run_failure_threshold", false);
  public get parallelRunFailureThreshold() {
    return this._parallelRunFailureThreshold;
  }
  public putParallelRunFailureThreshold(value: UrlMonitorAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable) {
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
  private _reminders = new UrlMonitorAlertSettingsRemindersList(this, "reminders", false);
  public get reminders() {
    return this._reminders;
  }
  public putReminders(value: UrlMonitorAlertSettingsReminders[] | cdktf.IResolvable) {
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
  private _runBasedEscalation = new UrlMonitorAlertSettingsRunBasedEscalationList(this, "run_based_escalation", false);
  public get runBasedEscalation() {
    return this._runBasedEscalation;
  }
  public putRunBasedEscalation(value: UrlMonitorAlertSettingsRunBasedEscalation[] | cdktf.IResolvable) {
    this._runBasedEscalation.internalValue = value;
  }
  public resetRunBasedEscalation() {
    this._runBasedEscalation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runBasedEscalationInput() {
    return this._runBasedEscalation.internalValue;
  }

  // time_based_escalation - computed: false, optional: true, required: false
  private _timeBasedEscalation = new UrlMonitorAlertSettingsTimeBasedEscalationList(this, "time_based_escalation", false);
  public get timeBasedEscalation() {
    return this._timeBasedEscalation;
  }
  public putTimeBasedEscalation(value: UrlMonitorAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable) {
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
export interface UrlMonitorRequestAssertion {
  /**
  * The type of comparison to be executed between expected and actual value of the assertion. Possible values are `EQUALS`, `NOT_EQUALS`, `GREATER_THAN` and `LESS_THAN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#comparison UrlMonitor#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#property UrlMonitor#property}
  */
  readonly property?: string;
  /**
  * The source of the asserted value. The only allowed value is `STATUS_CODE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#source UrlMonitor#source}
  */
  readonly source: string;
  /**
  * The target value. Typically `200` when the source is `STATUS_CODE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#target UrlMonitor#target}
  */
  readonly target: string;
}

export function urlMonitorRequestAssertionToTerraform(struct?: UrlMonitorRequestAssertion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    property: cdktf.stringToTerraform(struct!.property),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function urlMonitorRequestAssertionToHclTerraform(struct?: UrlMonitorRequestAssertion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlMonitorRequestAssertionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UrlMonitorRequestAssertion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlMonitorRequestAssertion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._property = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._property = value.property;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class UrlMonitorRequestAssertionList extends cdktf.ComplexList {
  public internalValue? : UrlMonitorRequestAssertion[] | cdktf.IResolvable

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
  public get(index: number): UrlMonitorRequestAssertionOutputReference {
    return new UrlMonitorRequestAssertionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UrlMonitorRequest {
  /**
  * Whether to follow HTTP redirects automatically. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#follow_redirects UrlMonitor#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * IP family version to use for the connection. The value can be either `IPv4` or `IPv6`. (Default `IPv4`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#ip_family UrlMonitor#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Whether to skip SSL certificate verification. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#skip_ssl UrlMonitor#skip_ssl}
  */
  readonly skipSsl?: boolean | cdktf.IResolvable;
  /**
  * The URL to monitor. Must be a valid HTTP or HTTPS URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#url UrlMonitor#url}
  */
  readonly url: string;
  /**
  * assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#assertion UrlMonitor#assertion}
  */
  readonly assertion?: UrlMonitorRequestAssertion[] | cdktf.IResolvable;
}

export function urlMonitorRequestToTerraform(struct?: UrlMonitorRequestOutputReference | UrlMonitorRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    skip_ssl: cdktf.booleanToTerraform(struct!.skipSsl),
    url: cdktf.stringToTerraform(struct!.url),
    assertion: cdktf.listMapper(urlMonitorRequestAssertionToTerraform, true)(struct!.assertion),
  }
}


export function urlMonitorRequestToHclTerraform(struct?: UrlMonitorRequestOutputReference | UrlMonitorRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.skipSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion: {
      value: cdktf.listMapperHcl(urlMonitorRequestAssertionToHclTerraform, true)(struct!.assertion),
      isBlock: true,
      type: "set",
      storageClassType: "UrlMonitorRequestAssertionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlMonitorRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlMonitorRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._skipSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSsl = this._skipSsl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._assertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertion = this._assertion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlMonitorRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followRedirects = undefined;
      this._ipFamily = undefined;
      this._skipSsl = undefined;
      this._url = undefined;
      this._assertion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followRedirects = value.followRedirects;
      this._ipFamily = value.ipFamily;
      this._skipSsl = value.skipSsl;
      this._url = value.url;
      this._assertion.internalValue = value.assertion;
    }
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // ip_family - computed: false, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // skip_ssl - computed: false, optional: true, required: false
  private _skipSsl?: boolean | cdktf.IResolvable; 
  public get skipSsl() {
    return this.getBooleanAttribute('skip_ssl');
  }
  public set skipSsl(value: boolean | cdktf.IResolvable) {
    this._skipSsl = value;
  }
  public resetSkipSsl() {
    this._skipSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSslInput() {
    return this._skipSsl;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // assertion - computed: false, optional: true, required: false
  private _assertion = new UrlMonitorRequestAssertionList(this, "assertion", true);
  public get assertion() {
    return this._assertion;
  }
  public putAssertion(value: UrlMonitorRequestAssertion[] | cdktf.IResolvable) {
    this._assertion.internalValue = value;
  }
  public resetAssertion() {
    this._assertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionInput() {
    return this._assertion.internalValue;
  }
}
export interface UrlMonitorRetryStrategyOnlyOn {
  /**
  * When `true`, retry only if the cause of the failure is a network error. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#network_error UrlMonitor#network_error}
  */
  readonly networkError?: boolean | cdktf.IResolvable;
}

export function urlMonitorRetryStrategyOnlyOnToTerraform(struct?: UrlMonitorRetryStrategyOnlyOnOutputReference | UrlMonitorRetryStrategyOnlyOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_error: cdktf.booleanToTerraform(struct!.networkError),
  }
}


export function urlMonitorRetryStrategyOnlyOnToHclTerraform(struct?: UrlMonitorRetryStrategyOnlyOnOutputReference | UrlMonitorRetryStrategyOnlyOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_error: {
      value: cdktf.booleanToHclTerraform(struct!.networkError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlMonitorRetryStrategyOnlyOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlMonitorRetryStrategyOnlyOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkError !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkError = this._networkError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlMonitorRetryStrategyOnlyOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkError = value.networkError;
    }
  }

  // network_error - computed: false, optional: true, required: false
  private _networkError?: boolean | cdktf.IResolvable; 
  public get networkError() {
    return this.getBooleanAttribute('network_error');
  }
  public set networkError(value: boolean | cdktf.IResolvable) {
    this._networkError = value;
  }
  public resetNetworkError() {
    this._networkError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkErrorInput() {
    return this._networkError;
  }
}
export interface UrlMonitorRetryStrategy {
  /**
  * The number of seconds to wait before the first retry attempt. (Default `60`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#base_backoff_seconds UrlMonitor#base_backoff_seconds}
  */
  readonly baseBackoffSeconds?: number;
  /**
  * The total amount of time to continue retrying the check/monitor (maximum 600 seconds). Available when `type` is `FIXED`, `LINEAR`, or `EXPONENTIAL`. (Default `600`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#max_duration_seconds UrlMonitor#max_duration_seconds}
  */
  readonly maxDurationSeconds?: number;
  /**
  * The maximum number of times to retry the check/monitor. Value must be between `1` and `10`. Available when `type` is `FIXED`, `LINEAR`, or `EXPONENTIAL`. (Default `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#max_retries UrlMonitor#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Whether retries should be run in the same region as the initial check/monitor run. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#same_region UrlMonitor#same_region}
  */
  readonly sameRegion?: boolean | cdktf.IResolvable;
  /**
  * Determines which type of retry strategy to use. Possible values are `FIXED`, `LINEAR`, `EXPONENTIAL`, `SINGLE_RETRY`, and `NO_RETRIES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#type UrlMonitor#type}
  */
  readonly type: string;
  /**
  * only_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#only_on UrlMonitor#only_on}
  */
  readonly onlyOn?: UrlMonitorRetryStrategyOnlyOn;
}

export function urlMonitorRetryStrategyToTerraform(struct?: UrlMonitorRetryStrategyOutputReference | UrlMonitorRetryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_backoff_seconds: cdktf.numberToTerraform(struct!.baseBackoffSeconds),
    max_duration_seconds: cdktf.numberToTerraform(struct!.maxDurationSeconds),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    same_region: cdktf.booleanToTerraform(struct!.sameRegion),
    type: cdktf.stringToTerraform(struct!.type),
    only_on: urlMonitorRetryStrategyOnlyOnToTerraform(struct!.onlyOn),
  }
}


export function urlMonitorRetryStrategyToHclTerraform(struct?: UrlMonitorRetryStrategyOutputReference | UrlMonitorRetryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_backoff_seconds: {
      value: cdktf.numberToHclTerraform(struct!.baseBackoffSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    same_region: {
      value: cdktf.booleanToHclTerraform(struct!.sameRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    only_on: {
      value: urlMonitorRetryStrategyOnlyOnToHclTerraform(struct!.onlyOn),
      isBlock: true,
      type: "list",
      storageClassType: "UrlMonitorRetryStrategyOnlyOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UrlMonitorRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlMonitorRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseBackoffSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseBackoffSeconds = this._baseBackoffSeconds;
    }
    if (this._maxDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDurationSeconds = this._maxDurationSeconds;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._sameRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameRegion = this._sameRegion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._onlyOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyOn = this._onlyOn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UrlMonitorRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseBackoffSeconds = undefined;
      this._maxDurationSeconds = undefined;
      this._maxRetries = undefined;
      this._sameRegion = undefined;
      this._type = undefined;
      this._onlyOn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseBackoffSeconds = value.baseBackoffSeconds;
      this._maxDurationSeconds = value.maxDurationSeconds;
      this._maxRetries = value.maxRetries;
      this._sameRegion = value.sameRegion;
      this._type = value.type;
      this._onlyOn.internalValue = value.onlyOn;
    }
  }

  // base_backoff_seconds - computed: false, optional: true, required: false
  private _baseBackoffSeconds?: number; 
  public get baseBackoffSeconds() {
    return this.getNumberAttribute('base_backoff_seconds');
  }
  public set baseBackoffSeconds(value: number) {
    this._baseBackoffSeconds = value;
  }
  public resetBaseBackoffSeconds() {
    this._baseBackoffSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBackoffSecondsInput() {
    return this._baseBackoffSeconds;
  }

  // max_duration_seconds - computed: false, optional: true, required: false
  private _maxDurationSeconds?: number; 
  public get maxDurationSeconds() {
    return this.getNumberAttribute('max_duration_seconds');
  }
  public set maxDurationSeconds(value: number) {
    this._maxDurationSeconds = value;
  }
  public resetMaxDurationSeconds() {
    this._maxDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationSecondsInput() {
    return this._maxDurationSeconds;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // same_region - computed: false, optional: true, required: false
  private _sameRegion?: boolean | cdktf.IResolvable; 
  public get sameRegion() {
    return this.getBooleanAttribute('same_region');
  }
  public set sameRegion(value: boolean | cdktf.IResolvable) {
    this._sameRegion = value;
  }
  public resetSameRegion() {
    this._sameRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameRegionInput() {
    return this._sameRegion;
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

  // only_on - computed: false, optional: true, required: false
  private _onlyOn = new UrlMonitorRetryStrategyOnlyOnOutputReference(this, "only_on");
  public get onlyOn() {
    return this._onlyOn;
  }
  public putOnlyOn(value: UrlMonitorRetryStrategyOnlyOn) {
    this._onlyOn.internalValue = value;
  }
  public resetOnlyOn() {
    this._onlyOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyOnInput() {
    return this._onlyOn.internalValue;
  }
}
export interface UrlMonitorTriggerIncident {
  /**
  * A detailed description of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#description UrlMonitor#description}
  */
  readonly description: string;
  /**
  * The name of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#name UrlMonitor#name}
  */
  readonly name: string;
  /**
  * Whether to notify subscribers when the incident is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#notify_subscribers UrlMonitor#notify_subscribers}
  */
  readonly notifySubscribers: boolean | cdktf.IResolvable;
  /**
  * The status page service that this incident will be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#service_id UrlMonitor#service_id}
  */
  readonly serviceId: string;
  /**
  * The severity level of the incident. Possible values are `MINOR`, `MEDIUM`, `MAJOR`, and `CRITICAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#severity UrlMonitor#severity}
  */
  readonly severity: string;
}

export function urlMonitorTriggerIncidentToTerraform(struct?: UrlMonitorTriggerIncidentOutputReference | UrlMonitorTriggerIncident): any {
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


export function urlMonitorTriggerIncidentToHclTerraform(struct?: UrlMonitorTriggerIncidentOutputReference | UrlMonitorTriggerIncident): any {
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

export class UrlMonitorTriggerIncidentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UrlMonitorTriggerIncident | undefined {
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

  public set internalValue(value: UrlMonitorTriggerIncident | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor checkly_url_monitor}
*/
export class UrlMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_url_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UrlMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UrlMonitor to import
  * @param importFromId The id of the existing UrlMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UrlMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_url_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/url_monitor checkly_url_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UrlMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: UrlMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_url_monitor',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.16.0'
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
    this._degradedResponseTime = config.degradedResponseTime;
    this._frequency = config.frequency;
    this._frequencyOffset = config.frequencyOffset;
    this._groupId = config.groupId;
    this._groupOrder = config.groupOrder;
    this._id = config.id;
    this._locations = config.locations;
    this._maxResponseTime = config.maxResponseTime;
    this._muted = config.muted;
    this._name = config.name;
    this._privateLocations = config.privateLocations;
    this._runParallel = config.runParallel;
    this._shouldFail = config.shouldFail;
    this._tags = config.tags;
    this._useGlobalAlertSettings = config.useGlobalAlertSettings;
    this._alertChannelSubscription.internalValue = config.alertChannelSubscription;
    this._alertSettings.internalValue = config.alertSettings;
    this._request.internalValue = config.request;
    this._retryStrategy.internalValue = config.retryStrategy;
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

  // degraded_response_time - computed: false, optional: true, required: false
  private _degradedResponseTime?: number; 
  public get degradedResponseTime() {
    return this.getNumberAttribute('degraded_response_time');
  }
  public set degradedResponseTime(value: number) {
    this._degradedResponseTime = value;
  }
  public resetDegradedResponseTime() {
    this._degradedResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get degradedResponseTimeInput() {
    return this._degradedResponseTime;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // frequency_offset - computed: false, optional: true, required: false
  private _frequencyOffset?: number; 
  public get frequencyOffset() {
    return this.getNumberAttribute('frequency_offset');
  }
  public set frequencyOffset(value: number) {
    this._frequencyOffset = value;
  }
  public resetFrequencyOffset() {
    this._frequencyOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyOffsetInput() {
    return this._frequencyOffset;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_order - computed: false, optional: true, required: false
  private _groupOrder?: number; 
  public get groupOrder() {
    return this.getNumberAttribute('group_order');
  }
  public set groupOrder(value: number) {
    this._groupOrder = value;
  }
  public resetGroupOrder() {
    this._groupOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOrderInput() {
    return this._groupOrder;
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

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // max_response_time - computed: false, optional: true, required: false
  private _maxResponseTime?: number; 
  public get maxResponseTime() {
    return this.getNumberAttribute('max_response_time');
  }
  public set maxResponseTime(value: number) {
    this._maxResponseTime = value;
  }
  public resetMaxResponseTime() {
    this._maxResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResponseTimeInput() {
    return this._maxResponseTime;
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

  // private_locations - computed: false, optional: true, required: false
  private _privateLocations?: string[]; 
  public get privateLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('private_locations'));
  }
  public set privateLocations(value: string[]) {
    this._privateLocations = value;
  }
  public resetPrivateLocations() {
    this._privateLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLocationsInput() {
    return this._privateLocations;
  }

  // run_parallel - computed: false, optional: true, required: false
  private _runParallel?: boolean | cdktf.IResolvable; 
  public get runParallel() {
    return this.getBooleanAttribute('run_parallel');
  }
  public set runParallel(value: boolean | cdktf.IResolvable) {
    this._runParallel = value;
  }
  public resetRunParallel() {
    this._runParallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runParallelInput() {
    return this._runParallel;
  }

  // should_fail - computed: false, optional: true, required: false
  private _shouldFail?: boolean | cdktf.IResolvable; 
  public get shouldFail() {
    return this.getBooleanAttribute('should_fail');
  }
  public set shouldFail(value: boolean | cdktf.IResolvable) {
    this._shouldFail = value;
  }
  public resetShouldFail() {
    this._shouldFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldFailInput() {
    return this._shouldFail;
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
  private _alertChannelSubscription = new UrlMonitorAlertChannelSubscriptionList(this, "alert_channel_subscription", false);
  public get alertChannelSubscription() {
    return this._alertChannelSubscription;
  }
  public putAlertChannelSubscription(value: UrlMonitorAlertChannelSubscription[] | cdktf.IResolvable) {
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
  private _alertSettings = new UrlMonitorAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: UrlMonitorAlertSettings) {
    this._alertSettings.internalValue = value;
  }
  public resetAlertSettings() {
    this._alertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingsInput() {
    return this._alertSettings.internalValue;
  }

  // request - computed: false, optional: false, required: true
  private _request = new UrlMonitorRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: UrlMonitorRequest) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new UrlMonitorRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: UrlMonitorRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // trigger_incident - computed: false, optional: true, required: false
  private _triggerIncident = new UrlMonitorTriggerIncidentOutputReference(this, "trigger_incident");
  public get triggerIncident() {
    return this._triggerIncident;
  }
  public putTriggerIncident(value: UrlMonitorTriggerIncident) {
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
      degraded_response_time: cdktf.numberToTerraform(this._degradedResponseTime),
      frequency: cdktf.numberToTerraform(this._frequency),
      frequency_offset: cdktf.numberToTerraform(this._frequencyOffset),
      group_id: cdktf.numberToTerraform(this._groupId),
      group_order: cdktf.numberToTerraform(this._groupOrder),
      id: cdktf.stringToTerraform(this._id),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      max_response_time: cdktf.numberToTerraform(this._maxResponseTime),
      muted: cdktf.booleanToTerraform(this._muted),
      name: cdktf.stringToTerraform(this._name),
      private_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateLocations),
      run_parallel: cdktf.booleanToTerraform(this._runParallel),
      should_fail: cdktf.booleanToTerraform(this._shouldFail),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_global_alert_settings: cdktf.booleanToTerraform(this._useGlobalAlertSettings),
      alert_channel_subscription: cdktf.listMapper(urlMonitorAlertChannelSubscriptionToTerraform, true)(this._alertChannelSubscription.internalValue),
      alert_settings: urlMonitorAlertSettingsToTerraform(this._alertSettings.internalValue),
      request: urlMonitorRequestToTerraform(this._request.internalValue),
      retry_strategy: urlMonitorRetryStrategyToTerraform(this._retryStrategy.internalValue),
      trigger_incident: urlMonitorTriggerIncidentToTerraform(this._triggerIncident.internalValue),
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
      degraded_response_time: {
        value: cdktf.numberToHclTerraform(this._degradedResponseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency_offset: {
        value: cdktf.numberToHclTerraform(this._frequencyOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_order: {
        value: cdktf.numberToHclTerraform(this._groupOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_response_time: {
        value: cdktf.numberToHclTerraform(this._maxResponseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      private_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      run_parallel: {
        value: cdktf.booleanToHclTerraform(this._runParallel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_fail: {
        value: cdktf.booleanToHclTerraform(this._shouldFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: cdktf.listMapperHcl(urlMonitorAlertChannelSubscriptionToHclTerraform, true)(this._alertChannelSubscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UrlMonitorAlertChannelSubscriptionList",
      },
      alert_settings: {
        value: urlMonitorAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UrlMonitorAlertSettingsList",
      },
      request: {
        value: urlMonitorRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlMonitorRequestList",
      },
      retry_strategy: {
        value: urlMonitorRetryStrategyToHclTerraform(this._retryStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UrlMonitorRetryStrategyList",
      },
      trigger_incident: {
        value: urlMonitorTriggerIncidentToHclTerraform(this._triggerIncident.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UrlMonitorTriggerIncidentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
