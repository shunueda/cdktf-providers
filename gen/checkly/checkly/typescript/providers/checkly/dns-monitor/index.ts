// https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether the monitor will run periodically or not after being deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#activated DnsMonitor#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * The response time in milliseconds where the monitor should be considered degraded. Possible values are between `0` and `5000`. (Default `500`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#degraded_response_time DnsMonitor#degraded_response_time}
  */
  readonly degradedResponseTime?: number;
  /**
  * How often the monitor should run in minutes. Possible values are `0`, `1`, `2`, `5`, `10`, `15`, `30`, `60`, `120`, `180`, `360`, `720`, and `1440`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#frequency DnsMonitor#frequency}
  */
  readonly frequency: number;
  /**
  * To create a high frequency monitor, set `frequency` to `0` and `frequency_offset` to `10`, `20`, or `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#frequency_offset DnsMonitor#frequency_offset}
  */
  readonly frequencyOffset?: number;
  /**
  * The ID of the check group that this monitor is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#group_id DnsMonitor#group_id}
  */
  readonly groupId?: number;
  /**
  * The position of the monitor in the check group. It determines in what order checks and monitors are run when a group is triggered from the API or from CI/CD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#group_order DnsMonitor#group_order}
  */
  readonly groupOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#id DnsMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An array of one or more data center locations where to run the this monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#locations DnsMonitor#locations}
  */
  readonly locations?: string[];
  /**
  * The response time in milliseconds where the monitor should be considered failing. Possible values are between `0` and `5000`. (Default `1000`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#max_response_time DnsMonitor#max_response_time}
  */
  readonly maxResponseTime?: number;
  /**
  * Determines if any notifications will be sent out when the monitor fails and/or recovers. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#muted DnsMonitor#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * The name of the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#name DnsMonitor#name}
  */
  readonly name: string;
  /**
  * Determines whether the monitor should run on all selected locations in parallel or round-robin. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#run_parallel DnsMonitor#run_parallel}
  */
  readonly runParallel?: boolean | cdktf.IResolvable;
  /**
  * A list of tags for organizing and filtering checks and monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#tags DnsMonitor#tags}
  */
  readonly tags?: string[];
  /**
  * When true, the account level alert settings will be used, not the alert setting defined on this monitor. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#use_global_alert_settings DnsMonitor#use_global_alert_settings}
  */
  readonly useGlobalAlertSettings?: boolean | cdktf.IResolvable;
  /**
  * alert_channel_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#alert_channel_subscription DnsMonitor#alert_channel_subscription}
  */
  readonly alertChannelSubscription?: DnsMonitorAlertChannelSubscription[] | cdktf.IResolvable;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#alert_settings DnsMonitor#alert_settings}
  */
  readonly alertSettings?: DnsMonitorAlertSettings;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#request DnsMonitor#request}
  */
  readonly request: DnsMonitorRequest;
  /**
  * retry_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#retry_strategy DnsMonitor#retry_strategy}
  */
  readonly retryStrategy?: DnsMonitorRetryStrategy;
  /**
  * trigger_incident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#trigger_incident DnsMonitor#trigger_incident}
  */
  readonly triggerIncident?: DnsMonitorTriggerIncident;
}
export interface DnsMonitorAlertChannelSubscription {
  /**
  * Whether an alert should be sent to this channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#activated DnsMonitor#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * The ID of the alert channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#channel_id DnsMonitor#channel_id}
  */
  readonly channelId: number;
}

export function dnsMonitorAlertChannelSubscriptionToTerraform(struct?: DnsMonitorAlertChannelSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activated: cdktf.booleanToTerraform(struct!.activated),
    channel_id: cdktf.numberToTerraform(struct!.channelId),
  }
}


export function dnsMonitorAlertChannelSubscriptionToHclTerraform(struct?: DnsMonitorAlertChannelSubscription | cdktf.IResolvable): any {
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

export class DnsMonitorAlertChannelSubscriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsMonitorAlertChannelSubscription | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsMonitorAlertChannelSubscription | cdktf.IResolvable | undefined) {
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

export class DnsMonitorAlertChannelSubscriptionList extends cdktf.ComplexList {
  public internalValue? : DnsMonitorAlertChannelSubscription[] | cdktf.IResolvable

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
  public get(index: number): DnsMonitorAlertChannelSubscriptionOutputReference {
    return new DnsMonitorAlertChannelSubscriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsMonitorAlertSettingsParallelRunFailureThreshold {
  /**
  * Whether parallel run failure threshold is enabled. Only applies if the monitor is scheduled for multiple locations in parallel. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#enabled DnsMonitor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Percentage of runs that must fail to trigger alert. Possible values are `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, and `100`. (Default `10`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#percentage DnsMonitor#percentage}
  */
  readonly percentage?: number;
}

export function dnsMonitorAlertSettingsParallelRunFailureThresholdToTerraform(struct?: DnsMonitorAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function dnsMonitorAlertSettingsParallelRunFailureThresholdToHclTerraform(struct?: DnsMonitorAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
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

export class DnsMonitorAlertSettingsParallelRunFailureThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsMonitorAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsMonitorAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined) {
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

export class DnsMonitorAlertSettingsParallelRunFailureThresholdList extends cdktf.ComplexList {
  public internalValue? : DnsMonitorAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable

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
  public get(index: number): DnsMonitorAlertSettingsParallelRunFailureThresholdOutputReference {
    return new DnsMonitorAlertSettingsParallelRunFailureThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsMonitorAlertSettingsReminders {
  /**
  * Number of reminder notifications to send. Possible values are `0`, `1`, `2`, `3`, `4`, `5`, and `100000` (`0` to disable, `100000` for unlimited). (Default `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#amount DnsMonitor#amount}
  */
  readonly amount?: number;
  /**
  * Interval between reminder notifications in minutes. Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#interval DnsMonitor#interval}
  */
  readonly interval?: number;
}

export function dnsMonitorAlertSettingsRemindersToTerraform(struct?: DnsMonitorAlertSettingsReminders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function dnsMonitorAlertSettingsRemindersToHclTerraform(struct?: DnsMonitorAlertSettingsReminders | cdktf.IResolvable): any {
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

export class DnsMonitorAlertSettingsRemindersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsMonitorAlertSettingsReminders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsMonitorAlertSettingsReminders | cdktf.IResolvable | undefined) {
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

export class DnsMonitorAlertSettingsRemindersList extends cdktf.ComplexList {
  public internalValue? : DnsMonitorAlertSettingsReminders[] | cdktf.IResolvable

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
  public get(index: number): DnsMonitorAlertSettingsRemindersOutputReference {
    return new DnsMonitorAlertSettingsRemindersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsMonitorAlertSettingsRunBasedEscalation {
  /**
  * Send an alert notification after the given number of consecutive monitor runs have failed. Possible values are between `1` and `5`. (Default `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#failed_run_threshold DnsMonitor#failed_run_threshold}
  */
  readonly failedRunThreshold?: number;
}

export function dnsMonitorAlertSettingsRunBasedEscalationToTerraform(struct?: DnsMonitorAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_run_threshold: cdktf.numberToTerraform(struct!.failedRunThreshold),
  }
}


export function dnsMonitorAlertSettingsRunBasedEscalationToHclTerraform(struct?: DnsMonitorAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
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

export class DnsMonitorAlertSettingsRunBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsMonitorAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsMonitorAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined) {
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

export class DnsMonitorAlertSettingsRunBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : DnsMonitorAlertSettingsRunBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): DnsMonitorAlertSettingsRunBasedEscalationOutputReference {
    return new DnsMonitorAlertSettingsRunBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsMonitorAlertSettingsTimeBasedEscalation {
  /**
  * Send an alert notification after the monitor has been failing for the given amount of time (in minutes). Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#minutes_failing_threshold DnsMonitor#minutes_failing_threshold}
  */
  readonly minutesFailingThreshold?: number;
}

export function dnsMonitorAlertSettingsTimeBasedEscalationToTerraform(struct?: DnsMonitorAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_failing_threshold: cdktf.numberToTerraform(struct!.minutesFailingThreshold),
  }
}


export function dnsMonitorAlertSettingsTimeBasedEscalationToHclTerraform(struct?: DnsMonitorAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
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

export class DnsMonitorAlertSettingsTimeBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsMonitorAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsMonitorAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined) {
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

export class DnsMonitorAlertSettingsTimeBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : DnsMonitorAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): DnsMonitorAlertSettingsTimeBasedEscalationOutputReference {
    return new DnsMonitorAlertSettingsTimeBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsMonitorAlertSettings {
  /**
  * Determines the type of escalation to use. Possible values are `RUN_BASED` and `TIME_BASED`. (Default `RUN_BASED`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#escalation_type DnsMonitor#escalation_type}
  */
  readonly escalationType?: string;
  /**
  * parallel_run_failure_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#parallel_run_failure_threshold DnsMonitor#parallel_run_failure_threshold}
  */
  readonly parallelRunFailureThreshold?: DnsMonitorAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable;
  /**
  * reminders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#reminders DnsMonitor#reminders}
  */
  readonly reminders?: DnsMonitorAlertSettingsReminders[] | cdktf.IResolvable;
  /**
  * run_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#run_based_escalation DnsMonitor#run_based_escalation}
  */
  readonly runBasedEscalation?: DnsMonitorAlertSettingsRunBasedEscalation[] | cdktf.IResolvable;
  /**
  * time_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#time_based_escalation DnsMonitor#time_based_escalation}
  */
  readonly timeBasedEscalation?: DnsMonitorAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable;
}

export function dnsMonitorAlertSettingsToTerraform(struct?: DnsMonitorAlertSettingsOutputReference | DnsMonitorAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_type: cdktf.stringToTerraform(struct!.escalationType),
    parallel_run_failure_threshold: cdktf.listMapper(dnsMonitorAlertSettingsParallelRunFailureThresholdToTerraform, true)(struct!.parallelRunFailureThreshold),
    reminders: cdktf.listMapper(dnsMonitorAlertSettingsRemindersToTerraform, true)(struct!.reminders),
    run_based_escalation: cdktf.listMapper(dnsMonitorAlertSettingsRunBasedEscalationToTerraform, true)(struct!.runBasedEscalation),
    time_based_escalation: cdktf.listMapper(dnsMonitorAlertSettingsTimeBasedEscalationToTerraform, true)(struct!.timeBasedEscalation),
  }
}


export function dnsMonitorAlertSettingsToHclTerraform(struct?: DnsMonitorAlertSettingsOutputReference | DnsMonitorAlertSettings): any {
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
      value: cdktf.listMapperHcl(dnsMonitorAlertSettingsParallelRunFailureThresholdToHclTerraform, true)(struct!.parallelRunFailureThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DnsMonitorAlertSettingsParallelRunFailureThresholdList",
    },
    reminders: {
      value: cdktf.listMapperHcl(dnsMonitorAlertSettingsRemindersToHclTerraform, true)(struct!.reminders),
      isBlock: true,
      type: "list",
      storageClassType: "DnsMonitorAlertSettingsRemindersList",
    },
    run_based_escalation: {
      value: cdktf.listMapperHcl(dnsMonitorAlertSettingsRunBasedEscalationToHclTerraform, true)(struct!.runBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "DnsMonitorAlertSettingsRunBasedEscalationList",
    },
    time_based_escalation: {
      value: cdktf.listMapperHcl(dnsMonitorAlertSettingsTimeBasedEscalationToHclTerraform, true)(struct!.timeBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "DnsMonitorAlertSettingsTimeBasedEscalationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsMonitorAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsMonitorAlertSettings | undefined {
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

  public set internalValue(value: DnsMonitorAlertSettings | undefined) {
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
  private _parallelRunFailureThreshold = new DnsMonitorAlertSettingsParallelRunFailureThresholdList(this, "parallel_run_failure_threshold", false);
  public get parallelRunFailureThreshold() {
    return this._parallelRunFailureThreshold;
  }
  public putParallelRunFailureThreshold(value: DnsMonitorAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable) {
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
  private _reminders = new DnsMonitorAlertSettingsRemindersList(this, "reminders", false);
  public get reminders() {
    return this._reminders;
  }
  public putReminders(value: DnsMonitorAlertSettingsReminders[] | cdktf.IResolvable) {
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
  private _runBasedEscalation = new DnsMonitorAlertSettingsRunBasedEscalationList(this, "run_based_escalation", false);
  public get runBasedEscalation() {
    return this._runBasedEscalation;
  }
  public putRunBasedEscalation(value: DnsMonitorAlertSettingsRunBasedEscalation[] | cdktf.IResolvable) {
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
  private _timeBasedEscalation = new DnsMonitorAlertSettingsTimeBasedEscalationList(this, "time_based_escalation", false);
  public get timeBasedEscalation() {
    return this._timeBasedEscalation;
  }
  public putTimeBasedEscalation(value: DnsMonitorAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable) {
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
export interface DnsMonitorRequestAssertion {
  /**
  * The type of comparison to be executed between expected and actual value of the assertion. Possible values are `EQUALS`, `NOT_EQUALS`, `GREATER_THAN` and `LESS_THAN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#comparison DnsMonitor#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#property DnsMonitor#property}
  */
  readonly property?: string;
  /**
  * The source of the asserted value. Possible values are `RESPONSE_CODE`, `RESPONSE_TIME`, `TEXT_ANSWER` and `JSON_ANSWER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#source DnsMonitor#source}
  */
  readonly source: string;
  /**
  * The target value. Typically `NOERROR` when the source is `RESPONSE_CODE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#target DnsMonitor#target}
  */
  readonly target: string;
}

export function dnsMonitorRequestAssertionToTerraform(struct?: DnsMonitorRequestAssertion | cdktf.IResolvable): any {
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


export function dnsMonitorRequestAssertionToHclTerraform(struct?: DnsMonitorRequestAssertion | cdktf.IResolvable): any {
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

export class DnsMonitorRequestAssertionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsMonitorRequestAssertion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsMonitorRequestAssertion | cdktf.IResolvable | undefined) {
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

export class DnsMonitorRequestAssertionList extends cdktf.ComplexList {
  public internalValue? : DnsMonitorRequestAssertion[] | cdktf.IResolvable

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
  public get(index: number): DnsMonitorRequestAssertionOutputReference {
    return new DnsMonitorRequestAssertionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsMonitorRequestNameServer {
  /**
  * The name server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#host DnsMonitor#host}
  */
  readonly host?: string;
  /**
  * The name server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#port DnsMonitor#port}
  */
  readonly port?: number;
}

export function dnsMonitorRequestNameServerToTerraform(struct?: DnsMonitorRequestNameServerOutputReference | DnsMonitorRequestNameServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dnsMonitorRequestNameServerToHclTerraform(struct?: DnsMonitorRequestNameServerOutputReference | DnsMonitorRequestNameServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsMonitorRequestNameServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsMonitorRequestNameServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsMonitorRequestNameServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DnsMonitorRequest {
  /**
  * The protocol used to communicate with the name server. Possible values are `UDP` and `TCP`. (Default `UDP`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#protocol DnsMonitor#protocol}
  */
  readonly protocol?: string;
  /**
  * The DNS record to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#query DnsMonitor#query}
  */
  readonly query: string;
  /**
  * The DNS record type. Possible values are `A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT` and `SOA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#record_type DnsMonitor#record_type}
  */
  readonly recordType: string;
  /**
  * assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#assertion DnsMonitor#assertion}
  */
  readonly assertion?: DnsMonitorRequestAssertion[] | cdktf.IResolvable;
  /**
  * name_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#name_server DnsMonitor#name_server}
  */
  readonly nameServer?: DnsMonitorRequestNameServer;
}

export function dnsMonitorRequestToTerraform(struct?: DnsMonitorRequestOutputReference | DnsMonitorRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    assertion: cdktf.listMapper(dnsMonitorRequestAssertionToTerraform, true)(struct!.assertion),
    name_server: dnsMonitorRequestNameServerToTerraform(struct!.nameServer),
  }
}


export function dnsMonitorRequestToHclTerraform(struct?: DnsMonitorRequestOutputReference | DnsMonitorRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion: {
      value: cdktf.listMapperHcl(dnsMonitorRequestAssertionToHclTerraform, true)(struct!.assertion),
      isBlock: true,
      type: "set",
      storageClassType: "DnsMonitorRequestAssertionList",
    },
    name_server: {
      value: dnsMonitorRequestNameServerToHclTerraform(struct!.nameServer),
      isBlock: true,
      type: "list",
      storageClassType: "DnsMonitorRequestNameServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsMonitorRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsMonitorRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._assertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertion = this._assertion?.internalValue;
    }
    if (this._nameServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServer = this._nameServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsMonitorRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocol = undefined;
      this._query = undefined;
      this._recordType = undefined;
      this._assertion.internalValue = undefined;
      this._nameServer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocol = value.protocol;
      this._query = value.query;
      this._recordType = value.recordType;
      this._assertion.internalValue = value.assertion;
      this._nameServer.internalValue = value.nameServer;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // assertion - computed: false, optional: true, required: false
  private _assertion = new DnsMonitorRequestAssertionList(this, "assertion", true);
  public get assertion() {
    return this._assertion;
  }
  public putAssertion(value: DnsMonitorRequestAssertion[] | cdktf.IResolvable) {
    this._assertion.internalValue = value;
  }
  public resetAssertion() {
    this._assertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionInput() {
    return this._assertion.internalValue;
  }

  // name_server - computed: false, optional: true, required: false
  private _nameServer = new DnsMonitorRequestNameServerOutputReference(this, "name_server");
  public get nameServer() {
    return this._nameServer;
  }
  public putNameServer(value: DnsMonitorRequestNameServer) {
    this._nameServer.internalValue = value;
  }
  public resetNameServer() {
    this._nameServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer.internalValue;
  }
}
export interface DnsMonitorRetryStrategyOnlyOn {
  /**
  * When `true`, retry only if the cause of the failure is a network error. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#network_error DnsMonitor#network_error}
  */
  readonly networkError?: boolean | cdktf.IResolvable;
}

export function dnsMonitorRetryStrategyOnlyOnToTerraform(struct?: DnsMonitorRetryStrategyOnlyOnOutputReference | DnsMonitorRetryStrategyOnlyOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_error: cdktf.booleanToTerraform(struct!.networkError),
  }
}


export function dnsMonitorRetryStrategyOnlyOnToHclTerraform(struct?: DnsMonitorRetryStrategyOnlyOnOutputReference | DnsMonitorRetryStrategyOnlyOn): any {
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

export class DnsMonitorRetryStrategyOnlyOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsMonitorRetryStrategyOnlyOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkError !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkError = this._networkError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsMonitorRetryStrategyOnlyOn | undefined) {
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
export interface DnsMonitorRetryStrategy {
  /**
  * The number of seconds to wait before the first retry attempt. (Default `60`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#base_backoff_seconds DnsMonitor#base_backoff_seconds}
  */
  readonly baseBackoffSeconds?: number;
  /**
  * The total amount of time to continue retrying the check/monitor (maximum 600 seconds). Available when `type` is `FIXED`, `LINEAR`, or `EXPONENTIAL`. (Default `600`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#max_duration_seconds DnsMonitor#max_duration_seconds}
  */
  readonly maxDurationSeconds?: number;
  /**
  * The maximum number of times to retry the check/monitor. Value must be between `1` and `10`. Available when `type` is `FIXED`, `LINEAR`, or `EXPONENTIAL`. (Default `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#max_retries DnsMonitor#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Whether retries should be run in the same region as the initial check/monitor run. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#same_region DnsMonitor#same_region}
  */
  readonly sameRegion?: boolean | cdktf.IResolvable;
  /**
  * Determines which type of retry strategy to use. Possible values are `FIXED`, `LINEAR`, `EXPONENTIAL`, `SINGLE_RETRY`, and `NO_RETRIES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#type DnsMonitor#type}
  */
  readonly type: string;
  /**
  * only_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#only_on DnsMonitor#only_on}
  */
  readonly onlyOn?: DnsMonitorRetryStrategyOnlyOn;
}

export function dnsMonitorRetryStrategyToTerraform(struct?: DnsMonitorRetryStrategyOutputReference | DnsMonitorRetryStrategy): any {
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
    only_on: dnsMonitorRetryStrategyOnlyOnToTerraform(struct!.onlyOn),
  }
}


export function dnsMonitorRetryStrategyToHclTerraform(struct?: DnsMonitorRetryStrategyOutputReference | DnsMonitorRetryStrategy): any {
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
      value: dnsMonitorRetryStrategyOnlyOnToHclTerraform(struct!.onlyOn),
      isBlock: true,
      type: "list",
      storageClassType: "DnsMonitorRetryStrategyOnlyOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsMonitorRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsMonitorRetryStrategy | undefined {
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

  public set internalValue(value: DnsMonitorRetryStrategy | undefined) {
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
  private _onlyOn = new DnsMonitorRetryStrategyOnlyOnOutputReference(this, "only_on");
  public get onlyOn() {
    return this._onlyOn;
  }
  public putOnlyOn(value: DnsMonitorRetryStrategyOnlyOn) {
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
export interface DnsMonitorTriggerIncident {
  /**
  * A detailed description of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#description DnsMonitor#description}
  */
  readonly description: string;
  /**
  * The name of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#name DnsMonitor#name}
  */
  readonly name: string;
  /**
  * Whether to notify subscribers when the incident is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#notify_subscribers DnsMonitor#notify_subscribers}
  */
  readonly notifySubscribers: boolean | cdktf.IResolvable;
  /**
  * The status page service that this incident will be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#service_id DnsMonitor#service_id}
  */
  readonly serviceId: string;
  /**
  * The severity level of the incident. Possible values are `MINOR`, `MEDIUM`, `MAJOR`, and `CRITICAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#severity DnsMonitor#severity}
  */
  readonly severity: string;
}

export function dnsMonitorTriggerIncidentToTerraform(struct?: DnsMonitorTriggerIncidentOutputReference | DnsMonitorTriggerIncident): any {
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


export function dnsMonitorTriggerIncidentToHclTerraform(struct?: DnsMonitorTriggerIncidentOutputReference | DnsMonitorTriggerIncident): any {
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

export class DnsMonitorTriggerIncidentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsMonitorTriggerIncident | undefined {
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

  public set internalValue(value: DnsMonitorTriggerIncident | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor checkly_dns_monitor}
*/
export class DnsMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_dns_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsMonitor to import
  * @param importFromId The id of the existing DnsMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_dns_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/dns_monitor checkly_dns_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DnsMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_dns_monitor',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
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
    this._runParallel = config.runParallel;
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
  private _alertChannelSubscription = new DnsMonitorAlertChannelSubscriptionList(this, "alert_channel_subscription", false);
  public get alertChannelSubscription() {
    return this._alertChannelSubscription;
  }
  public putAlertChannelSubscription(value: DnsMonitorAlertChannelSubscription[] | cdktf.IResolvable) {
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
  private _alertSettings = new DnsMonitorAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: DnsMonitorAlertSettings) {
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
  private _request = new DnsMonitorRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DnsMonitorRequest) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new DnsMonitorRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: DnsMonitorRetryStrategy) {
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
  private _triggerIncident = new DnsMonitorTriggerIncidentOutputReference(this, "trigger_incident");
  public get triggerIncident() {
    return this._triggerIncident;
  }
  public putTriggerIncident(value: DnsMonitorTriggerIncident) {
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
      run_parallel: cdktf.booleanToTerraform(this._runParallel),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_global_alert_settings: cdktf.booleanToTerraform(this._useGlobalAlertSettings),
      alert_channel_subscription: cdktf.listMapper(dnsMonitorAlertChannelSubscriptionToTerraform, true)(this._alertChannelSubscription.internalValue),
      alert_settings: dnsMonitorAlertSettingsToTerraform(this._alertSettings.internalValue),
      request: dnsMonitorRequestToTerraform(this._request.internalValue),
      retry_strategy: dnsMonitorRetryStrategyToTerraform(this._retryStrategy.internalValue),
      trigger_incident: dnsMonitorTriggerIncidentToTerraform(this._triggerIncident.internalValue),
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
      run_parallel: {
        value: cdktf.booleanToHclTerraform(this._runParallel),
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
        value: cdktf.listMapperHcl(dnsMonitorAlertChannelSubscriptionToHclTerraform, true)(this._alertChannelSubscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsMonitorAlertChannelSubscriptionList",
      },
      alert_settings: {
        value: dnsMonitorAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsMonitorAlertSettingsList",
      },
      request: {
        value: dnsMonitorRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsMonitorRequestList",
      },
      retry_strategy: {
        value: dnsMonitorRetryStrategyToHclTerraform(this._retryStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsMonitorRetryStrategyList",
      },
      trigger_incident: {
        value: dnsMonitorTriggerIncidentToHclTerraform(this._triggerIncident.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsMonitorTriggerIncidentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
