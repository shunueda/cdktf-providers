// https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlaywrightCheckSuiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether the check will run periodically or not after being deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#activated PlaywrightCheckSuite#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * How often the check should run in minutes. Possible values are `1`, `2`, `5`, `10`, `15`, `30`, `60`, `120`, `180`, `360`, `720`, and `1440`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#frequency PlaywrightCheckSuite#frequency}
  */
  readonly frequency: number;
  /**
  * The ID of the check group that this check is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#group_id PlaywrightCheckSuite#group_id}
  */
  readonly groupId?: number;
  /**
  * The position of the check in the check group. It determines in what order checks and monitors are run when a group is triggered from the API or from CI/CD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#group_order PlaywrightCheckSuite#group_order}
  */
  readonly groupOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#id PlaywrightCheckSuite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An array of one or more data center locations where to run the this check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#locations PlaywrightCheckSuite#locations}
  */
  readonly locations?: string[];
  /**
  * Determines if any notifications will be sent out when the check fails and/or recovers. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#muted PlaywrightCheckSuite#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * The name of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#name PlaywrightCheckSuite#name}
  */
  readonly name: string;
  /**
  * An array of one or more private locations slugs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#private_locations PlaywrightCheckSuite#private_locations}
  */
  readonly privateLocations?: string[];
  /**
  * Determines whether the check should run on all selected locations in parallel or round-robin. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#run_parallel PlaywrightCheckSuite#run_parallel}
  */
  readonly runParallel?: boolean | cdktf.IResolvable;
  /**
  * A list of tags for organizing and filtering checks and monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#tags PlaywrightCheckSuite#tags}
  */
  readonly tags?: string[];
  /**
  * When true, the account level alert settings will be used, not the alert setting defined on this check. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#use_global_alert_settings PlaywrightCheckSuite#use_global_alert_settings}
  */
  readonly useGlobalAlertSettings?: boolean | cdktf.IResolvable;
  /**
  * alert_channel_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#alert_channel_subscription PlaywrightCheckSuite#alert_channel_subscription}
  */
  readonly alertChannelSubscription?: PlaywrightCheckSuiteAlertChannelSubscription[] | cdktf.IResolvable;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#alert_settings PlaywrightCheckSuite#alert_settings}
  */
  readonly alertSettings?: PlaywrightCheckSuiteAlertSettings;
  /**
  * bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#bundle PlaywrightCheckSuite#bundle}
  */
  readonly bundle: PlaywrightCheckSuiteBundle;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#runtime PlaywrightCheckSuite#runtime}
  */
  readonly runtime: PlaywrightCheckSuiteRuntime;
  /**
  * trigger_incident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#trigger_incident PlaywrightCheckSuite#trigger_incident}
  */
  readonly triggerIncident?: PlaywrightCheckSuiteTriggerIncident;
}
export interface PlaywrightCheckSuiteAlertChannelSubscription {
  /**
  * Whether an alert should be sent to this channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#activated PlaywrightCheckSuite#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * The ID of the alert channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#channel_id PlaywrightCheckSuite#channel_id}
  */
  readonly channelId: number;
}

export function playwrightCheckSuiteAlertChannelSubscriptionToTerraform(struct?: PlaywrightCheckSuiteAlertChannelSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activated: cdktf.booleanToTerraform(struct!.activated),
    channel_id: cdktf.numberToTerraform(struct!.channelId),
  }
}


export function playwrightCheckSuiteAlertChannelSubscriptionToHclTerraform(struct?: PlaywrightCheckSuiteAlertChannelSubscription | cdktf.IResolvable): any {
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

export class PlaywrightCheckSuiteAlertChannelSubscriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlaywrightCheckSuiteAlertChannelSubscription | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlaywrightCheckSuiteAlertChannelSubscription | cdktf.IResolvable | undefined) {
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

export class PlaywrightCheckSuiteAlertChannelSubscriptionList extends cdktf.ComplexList {
  public internalValue? : PlaywrightCheckSuiteAlertChannelSubscription[] | cdktf.IResolvable

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
  public get(index: number): PlaywrightCheckSuiteAlertChannelSubscriptionOutputReference {
    return new PlaywrightCheckSuiteAlertChannelSubscriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlaywrightCheckSuiteAlertSettingsParallelRunFailureThreshold {
  /**
  * Whether parallel run failure threshold is enabled. Only applies if the check is scheduled for multiple locations in parallel. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#enabled PlaywrightCheckSuite#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Percentage of runs that must fail to trigger alert. Possible values are `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, and `100`. (Default `10`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#percentage PlaywrightCheckSuite#percentage}
  */
  readonly percentage?: number;
}

export function playwrightCheckSuiteAlertSettingsParallelRunFailureThresholdToTerraform(struct?: PlaywrightCheckSuiteAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function playwrightCheckSuiteAlertSettingsParallelRunFailureThresholdToHclTerraform(struct?: PlaywrightCheckSuiteAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
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

export class PlaywrightCheckSuiteAlertSettingsParallelRunFailureThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlaywrightCheckSuiteAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlaywrightCheckSuiteAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined) {
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

export class PlaywrightCheckSuiteAlertSettingsParallelRunFailureThresholdList extends cdktf.ComplexList {
  public internalValue? : PlaywrightCheckSuiteAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable

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
  public get(index: number): PlaywrightCheckSuiteAlertSettingsParallelRunFailureThresholdOutputReference {
    return new PlaywrightCheckSuiteAlertSettingsParallelRunFailureThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlaywrightCheckSuiteAlertSettingsReminders {
  /**
  * Number of reminder notifications to send. Possible values are `0`, `1`, `2`, `3`, `4`, `5`, and `100000` (`0` to disable, `100000` for unlimited). (Default `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#amount PlaywrightCheckSuite#amount}
  */
  readonly amount?: number;
  /**
  * Interval between reminder notifications in minutes. Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#interval PlaywrightCheckSuite#interval}
  */
  readonly interval?: number;
}

export function playwrightCheckSuiteAlertSettingsRemindersToTerraform(struct?: PlaywrightCheckSuiteAlertSettingsReminders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function playwrightCheckSuiteAlertSettingsRemindersToHclTerraform(struct?: PlaywrightCheckSuiteAlertSettingsReminders | cdktf.IResolvable): any {
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

export class PlaywrightCheckSuiteAlertSettingsRemindersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlaywrightCheckSuiteAlertSettingsReminders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlaywrightCheckSuiteAlertSettingsReminders | cdktf.IResolvable | undefined) {
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

export class PlaywrightCheckSuiteAlertSettingsRemindersList extends cdktf.ComplexList {
  public internalValue? : PlaywrightCheckSuiteAlertSettingsReminders[] | cdktf.IResolvable

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
  public get(index: number): PlaywrightCheckSuiteAlertSettingsRemindersOutputReference {
    return new PlaywrightCheckSuiteAlertSettingsRemindersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlaywrightCheckSuiteAlertSettingsRunBasedEscalation {
  /**
  * Send an alert notification after the given number of consecutive check runs have failed. Possible values are between `1` and `5`. (Default `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#failed_run_threshold PlaywrightCheckSuite#failed_run_threshold}
  */
  readonly failedRunThreshold?: number;
}

export function playwrightCheckSuiteAlertSettingsRunBasedEscalationToTerraform(struct?: PlaywrightCheckSuiteAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_run_threshold: cdktf.numberToTerraform(struct!.failedRunThreshold),
  }
}


export function playwrightCheckSuiteAlertSettingsRunBasedEscalationToHclTerraform(struct?: PlaywrightCheckSuiteAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
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

export class PlaywrightCheckSuiteAlertSettingsRunBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlaywrightCheckSuiteAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlaywrightCheckSuiteAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined) {
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

export class PlaywrightCheckSuiteAlertSettingsRunBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : PlaywrightCheckSuiteAlertSettingsRunBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): PlaywrightCheckSuiteAlertSettingsRunBasedEscalationOutputReference {
    return new PlaywrightCheckSuiteAlertSettingsRunBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlaywrightCheckSuiteAlertSettingsTimeBasedEscalation {
  /**
  * Send an alert notification after the check has been failing for the given amount of time (in minutes). Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#minutes_failing_threshold PlaywrightCheckSuite#minutes_failing_threshold}
  */
  readonly minutesFailingThreshold?: number;
}

export function playwrightCheckSuiteAlertSettingsTimeBasedEscalationToTerraform(struct?: PlaywrightCheckSuiteAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_failing_threshold: cdktf.numberToTerraform(struct!.minutesFailingThreshold),
  }
}


export function playwrightCheckSuiteAlertSettingsTimeBasedEscalationToHclTerraform(struct?: PlaywrightCheckSuiteAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
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

export class PlaywrightCheckSuiteAlertSettingsTimeBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlaywrightCheckSuiteAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlaywrightCheckSuiteAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined) {
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

export class PlaywrightCheckSuiteAlertSettingsTimeBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : PlaywrightCheckSuiteAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): PlaywrightCheckSuiteAlertSettingsTimeBasedEscalationOutputReference {
    return new PlaywrightCheckSuiteAlertSettingsTimeBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlaywrightCheckSuiteAlertSettings {
  /**
  * Determines the type of escalation to use. Possible values are `RUN_BASED` and `TIME_BASED`. (Default `RUN_BASED`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#escalation_type PlaywrightCheckSuite#escalation_type}
  */
  readonly escalationType?: string;
  /**
  * parallel_run_failure_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#parallel_run_failure_threshold PlaywrightCheckSuite#parallel_run_failure_threshold}
  */
  readonly parallelRunFailureThreshold?: PlaywrightCheckSuiteAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable;
  /**
  * reminders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#reminders PlaywrightCheckSuite#reminders}
  */
  readonly reminders?: PlaywrightCheckSuiteAlertSettingsReminders[] | cdktf.IResolvable;
  /**
  * run_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#run_based_escalation PlaywrightCheckSuite#run_based_escalation}
  */
  readonly runBasedEscalation?: PlaywrightCheckSuiteAlertSettingsRunBasedEscalation[] | cdktf.IResolvable;
  /**
  * time_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#time_based_escalation PlaywrightCheckSuite#time_based_escalation}
  */
  readonly timeBasedEscalation?: PlaywrightCheckSuiteAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable;
}

export function playwrightCheckSuiteAlertSettingsToTerraform(struct?: PlaywrightCheckSuiteAlertSettingsOutputReference | PlaywrightCheckSuiteAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_type: cdktf.stringToTerraform(struct!.escalationType),
    parallel_run_failure_threshold: cdktf.listMapper(playwrightCheckSuiteAlertSettingsParallelRunFailureThresholdToTerraform, true)(struct!.parallelRunFailureThreshold),
    reminders: cdktf.listMapper(playwrightCheckSuiteAlertSettingsRemindersToTerraform, true)(struct!.reminders),
    run_based_escalation: cdktf.listMapper(playwrightCheckSuiteAlertSettingsRunBasedEscalationToTerraform, true)(struct!.runBasedEscalation),
    time_based_escalation: cdktf.listMapper(playwrightCheckSuiteAlertSettingsTimeBasedEscalationToTerraform, true)(struct!.timeBasedEscalation),
  }
}


export function playwrightCheckSuiteAlertSettingsToHclTerraform(struct?: PlaywrightCheckSuiteAlertSettingsOutputReference | PlaywrightCheckSuiteAlertSettings): any {
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
      value: cdktf.listMapperHcl(playwrightCheckSuiteAlertSettingsParallelRunFailureThresholdToHclTerraform, true)(struct!.parallelRunFailureThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "PlaywrightCheckSuiteAlertSettingsParallelRunFailureThresholdList",
    },
    reminders: {
      value: cdktf.listMapperHcl(playwrightCheckSuiteAlertSettingsRemindersToHclTerraform, true)(struct!.reminders),
      isBlock: true,
      type: "list",
      storageClassType: "PlaywrightCheckSuiteAlertSettingsRemindersList",
    },
    run_based_escalation: {
      value: cdktf.listMapperHcl(playwrightCheckSuiteAlertSettingsRunBasedEscalationToHclTerraform, true)(struct!.runBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "PlaywrightCheckSuiteAlertSettingsRunBasedEscalationList",
    },
    time_based_escalation: {
      value: cdktf.listMapperHcl(playwrightCheckSuiteAlertSettingsTimeBasedEscalationToHclTerraform, true)(struct!.timeBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "PlaywrightCheckSuiteAlertSettingsTimeBasedEscalationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaywrightCheckSuiteAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCheckSuiteAlertSettings | undefined {
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

  public set internalValue(value: PlaywrightCheckSuiteAlertSettings | undefined) {
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
  private _parallelRunFailureThreshold = new PlaywrightCheckSuiteAlertSettingsParallelRunFailureThresholdList(this, "parallel_run_failure_threshold", false);
  public get parallelRunFailureThreshold() {
    return this._parallelRunFailureThreshold;
  }
  public putParallelRunFailureThreshold(value: PlaywrightCheckSuiteAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable) {
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
  private _reminders = new PlaywrightCheckSuiteAlertSettingsRemindersList(this, "reminders", false);
  public get reminders() {
    return this._reminders;
  }
  public putReminders(value: PlaywrightCheckSuiteAlertSettingsReminders[] | cdktf.IResolvable) {
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
  private _runBasedEscalation = new PlaywrightCheckSuiteAlertSettingsRunBasedEscalationList(this, "run_based_escalation", false);
  public get runBasedEscalation() {
    return this._runBasedEscalation;
  }
  public putRunBasedEscalation(value: PlaywrightCheckSuiteAlertSettingsRunBasedEscalation[] | cdktf.IResolvable) {
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
  private _timeBasedEscalation = new PlaywrightCheckSuiteAlertSettingsTimeBasedEscalationList(this, "time_based_escalation", false);
  public get timeBasedEscalation() {
    return this._timeBasedEscalation;
  }
  public putTimeBasedEscalation(value: PlaywrightCheckSuiteAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable) {
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
export interface PlaywrightCheckSuiteBundle {
  /**
  * The ID of the code bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#id PlaywrightCheckSuite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The generated metadata of the code bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#metadata PlaywrightCheckSuite#metadata}
  */
  readonly metadata: string;
}

export function playwrightCheckSuiteBundleToTerraform(struct?: PlaywrightCheckSuiteBundleOutputReference | PlaywrightCheckSuiteBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function playwrightCheckSuiteBundleToHclTerraform(struct?: PlaywrightCheckSuiteBundleOutputReference | PlaywrightCheckSuiteBundle): any {
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
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaywrightCheckSuiteBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCheckSuiteBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaywrightCheckSuiteBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._metadata = value.metadata;
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

  // metadata - computed: false, optional: false, required: true
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface PlaywrightCheckSuiteRuntimePlaywrightDevice {
  /**
  * The type of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#type PlaywrightCheckSuite#type}
  */
  readonly type: string;
}

export function playwrightCheckSuiteRuntimePlaywrightDeviceToTerraform(struct?: PlaywrightCheckSuiteRuntimePlaywrightDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function playwrightCheckSuiteRuntimePlaywrightDeviceToHclTerraform(struct?: PlaywrightCheckSuiteRuntimePlaywrightDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class PlaywrightCheckSuiteRuntimePlaywrightDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlaywrightCheckSuiteRuntimePlaywrightDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaywrightCheckSuiteRuntimePlaywrightDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
}

export class PlaywrightCheckSuiteRuntimePlaywrightDeviceList extends cdktf.ComplexList {
  public internalValue? : PlaywrightCheckSuiteRuntimePlaywrightDevice[] | cdktf.IResolvable

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
  public get(index: number): PlaywrightCheckSuiteRuntimePlaywrightDeviceOutputReference {
    return new PlaywrightCheckSuiteRuntimePlaywrightDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlaywrightCheckSuiteRuntimePlaywright {
  /**
  * The Playwright version to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#version PlaywrightCheckSuite#version}
  */
  readonly version?: string;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#device PlaywrightCheckSuite#device}
  */
  readonly device?: PlaywrightCheckSuiteRuntimePlaywrightDevice[] | cdktf.IResolvable;
}

export function playwrightCheckSuiteRuntimePlaywrightToTerraform(struct?: PlaywrightCheckSuiteRuntimePlaywrightOutputReference | PlaywrightCheckSuiteRuntimePlaywright): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    device: cdktf.listMapper(playwrightCheckSuiteRuntimePlaywrightDeviceToTerraform, true)(struct!.device),
  }
}


export function playwrightCheckSuiteRuntimePlaywrightToHclTerraform(struct?: PlaywrightCheckSuiteRuntimePlaywrightOutputReference | PlaywrightCheckSuiteRuntimePlaywright): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.listMapperHcl(playwrightCheckSuiteRuntimePlaywrightDeviceToHclTerraform, true)(struct!.device),
      isBlock: true,
      type: "set",
      storageClassType: "PlaywrightCheckSuiteRuntimePlaywrightDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaywrightCheckSuiteRuntimePlaywrightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCheckSuiteRuntimePlaywright | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaywrightCheckSuiteRuntimePlaywright | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
      this._device.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
      this._device.internalValue = value.device;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // device - computed: false, optional: true, required: false
  private _device = new PlaywrightCheckSuiteRuntimePlaywrightDeviceList(this, "device", true);
  public get device() {
    return this._device;
  }
  public putDevice(value: PlaywrightCheckSuiteRuntimePlaywrightDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }
}
export interface PlaywrightCheckSuiteRuntimeStepsInstall {
  /**
  * The command used to install dependencies prior to running Playwright. The default value is the appropriate install command for your package manager (e.g. `npm install` for `npm`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#command PlaywrightCheckSuite#command}
  */
  readonly command?: string;
}

export function playwrightCheckSuiteRuntimeStepsInstallToTerraform(struct?: PlaywrightCheckSuiteRuntimeStepsInstallOutputReference | PlaywrightCheckSuiteRuntimeStepsInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
  }
}


export function playwrightCheckSuiteRuntimeStepsInstallToHclTerraform(struct?: PlaywrightCheckSuiteRuntimeStepsInstallOutputReference | PlaywrightCheckSuiteRuntimeStepsInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaywrightCheckSuiteRuntimeStepsInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCheckSuiteRuntimeStepsInstall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaywrightCheckSuiteRuntimeStepsInstall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface PlaywrightCheckSuiteRuntimeStepsTest {
  /**
  * The command used to run Playwright. The default value is the appropriate exec command for your package manager (e.g. `npx playwright test` for `npm`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#command PlaywrightCheckSuite#command}
  */
  readonly command?: string;
}

export function playwrightCheckSuiteRuntimeStepsTestToTerraform(struct?: PlaywrightCheckSuiteRuntimeStepsTestOutputReference | PlaywrightCheckSuiteRuntimeStepsTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
  }
}


export function playwrightCheckSuiteRuntimeStepsTestToHclTerraform(struct?: PlaywrightCheckSuiteRuntimeStepsTestOutputReference | PlaywrightCheckSuiteRuntimeStepsTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaywrightCheckSuiteRuntimeStepsTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCheckSuiteRuntimeStepsTest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaywrightCheckSuiteRuntimeStepsTest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface PlaywrightCheckSuiteRuntimeSteps {
  /**
  * install block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#install PlaywrightCheckSuite#install}
  */
  readonly install?: PlaywrightCheckSuiteRuntimeStepsInstall;
  /**
  * test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#test PlaywrightCheckSuite#test}
  */
  readonly test?: PlaywrightCheckSuiteRuntimeStepsTest;
}

export function playwrightCheckSuiteRuntimeStepsToTerraform(struct?: PlaywrightCheckSuiteRuntimeStepsOutputReference | PlaywrightCheckSuiteRuntimeSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install: playwrightCheckSuiteRuntimeStepsInstallToTerraform(struct!.install),
    test: playwrightCheckSuiteRuntimeStepsTestToTerraform(struct!.test),
  }
}


export function playwrightCheckSuiteRuntimeStepsToHclTerraform(struct?: PlaywrightCheckSuiteRuntimeStepsOutputReference | PlaywrightCheckSuiteRuntimeSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install: {
      value: playwrightCheckSuiteRuntimeStepsInstallToHclTerraform(struct!.install),
      isBlock: true,
      type: "list",
      storageClassType: "PlaywrightCheckSuiteRuntimeStepsInstallList",
    },
    test: {
      value: playwrightCheckSuiteRuntimeStepsTestToHclTerraform(struct!.test),
      isBlock: true,
      type: "list",
      storageClassType: "PlaywrightCheckSuiteRuntimeStepsTestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaywrightCheckSuiteRuntimeStepsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCheckSuiteRuntimeSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._install?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install?.internalValue;
    }
    if (this._test?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaywrightCheckSuiteRuntimeSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._install.internalValue = undefined;
      this._test.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._install.internalValue = value.install;
      this._test.internalValue = value.test;
    }
  }

  // install - computed: false, optional: true, required: false
  private _install = new PlaywrightCheckSuiteRuntimeStepsInstallOutputReference(this, "install");
  public get install() {
    return this._install;
  }
  public putInstall(value: PlaywrightCheckSuiteRuntimeStepsInstall) {
    this._install.internalValue = value;
  }
  public resetInstall() {
    this._install.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install.internalValue;
  }

  // test - computed: false, optional: true, required: false
  private _test = new PlaywrightCheckSuiteRuntimeStepsTestOutputReference(this, "test");
  public get test() {
    return this._test;
  }
  public putTest(value: PlaywrightCheckSuiteRuntimeStepsTest) {
    this._test.internalValue = value;
  }
  public resetTest() {
    this._test.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }
}
export interface PlaywrightCheckSuiteRuntime {
  /**
  * playwright block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#playwright PlaywrightCheckSuite#playwright}
  */
  readonly playwright?: PlaywrightCheckSuiteRuntimePlaywright;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#steps PlaywrightCheckSuite#steps}
  */
  readonly steps?: PlaywrightCheckSuiteRuntimeSteps;
}

export function playwrightCheckSuiteRuntimeToTerraform(struct?: PlaywrightCheckSuiteRuntimeOutputReference | PlaywrightCheckSuiteRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    playwright: playwrightCheckSuiteRuntimePlaywrightToTerraform(struct!.playwright),
    steps: playwrightCheckSuiteRuntimeStepsToTerraform(struct!.steps),
  }
}


export function playwrightCheckSuiteRuntimeToHclTerraform(struct?: PlaywrightCheckSuiteRuntimeOutputReference | PlaywrightCheckSuiteRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    playwright: {
      value: playwrightCheckSuiteRuntimePlaywrightToHclTerraform(struct!.playwright),
      isBlock: true,
      type: "list",
      storageClassType: "PlaywrightCheckSuiteRuntimePlaywrightList",
    },
    steps: {
      value: playwrightCheckSuiteRuntimeStepsToHclTerraform(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "PlaywrightCheckSuiteRuntimeStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaywrightCheckSuiteRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCheckSuiteRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._playwright?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playwright = this._playwright?.internalValue;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaywrightCheckSuiteRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._playwright.internalValue = undefined;
      this._steps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._playwright.internalValue = value.playwright;
      this._steps.internalValue = value.steps;
    }
  }

  // playwright - computed: false, optional: true, required: false
  private _playwright = new PlaywrightCheckSuiteRuntimePlaywrightOutputReference(this, "playwright");
  public get playwright() {
    return this._playwright;
  }
  public putPlaywright(value: PlaywrightCheckSuiteRuntimePlaywright) {
    this._playwright.internalValue = value;
  }
  public resetPlaywright() {
    this._playwright.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playwrightInput() {
    return this._playwright.internalValue;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new PlaywrightCheckSuiteRuntimeStepsOutputReference(this, "steps");
  public get steps() {
    return this._steps;
  }
  public putSteps(value: PlaywrightCheckSuiteRuntimeSteps) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}
export interface PlaywrightCheckSuiteTriggerIncident {
  /**
  * A detailed description of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#description PlaywrightCheckSuite#description}
  */
  readonly description: string;
  /**
  * The name of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#name PlaywrightCheckSuite#name}
  */
  readonly name: string;
  /**
  * Whether to notify subscribers when the incident is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#notify_subscribers PlaywrightCheckSuite#notify_subscribers}
  */
  readonly notifySubscribers: boolean | cdktf.IResolvable;
  /**
  * The status page service that this incident will be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#service_id PlaywrightCheckSuite#service_id}
  */
  readonly serviceId: string;
  /**
  * The severity level of the incident. Possible values are `MINOR`, `MEDIUM`, `MAJOR`, and `CRITICAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#severity PlaywrightCheckSuite#severity}
  */
  readonly severity: string;
}

export function playwrightCheckSuiteTriggerIncidentToTerraform(struct?: PlaywrightCheckSuiteTriggerIncidentOutputReference | PlaywrightCheckSuiteTriggerIncident): any {
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


export function playwrightCheckSuiteTriggerIncidentToHclTerraform(struct?: PlaywrightCheckSuiteTriggerIncidentOutputReference | PlaywrightCheckSuiteTriggerIncident): any {
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

export class PlaywrightCheckSuiteTriggerIncidentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCheckSuiteTriggerIncident | undefined {
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

  public set internalValue(value: PlaywrightCheckSuiteTriggerIncident | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite checkly_playwright_check_suite}
*/
export class PlaywrightCheckSuite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_playwright_check_suite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlaywrightCheckSuite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlaywrightCheckSuite to import
  * @param importFromId The id of the existing PlaywrightCheckSuite that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlaywrightCheckSuite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_playwright_check_suite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_check_suite checkly_playwright_check_suite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlaywrightCheckSuiteConfig
  */
  public constructor(scope: Construct, id: string, config: PlaywrightCheckSuiteConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_playwright_check_suite',
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
    this._frequency = config.frequency;
    this._groupId = config.groupId;
    this._groupOrder = config.groupOrder;
    this._id = config.id;
    this._locations = config.locations;
    this._muted = config.muted;
    this._name = config.name;
    this._privateLocations = config.privateLocations;
    this._runParallel = config.runParallel;
    this._tags = config.tags;
    this._useGlobalAlertSettings = config.useGlobalAlertSettings;
    this._alertChannelSubscription.internalValue = config.alertChannelSubscription;
    this._alertSettings.internalValue = config.alertSettings;
    this._bundle.internalValue = config.bundle;
    this._runtime.internalValue = config.runtime;
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
  private _alertChannelSubscription = new PlaywrightCheckSuiteAlertChannelSubscriptionList(this, "alert_channel_subscription", false);
  public get alertChannelSubscription() {
    return this._alertChannelSubscription;
  }
  public putAlertChannelSubscription(value: PlaywrightCheckSuiteAlertChannelSubscription[] | cdktf.IResolvable) {
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
  private _alertSettings = new PlaywrightCheckSuiteAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: PlaywrightCheckSuiteAlertSettings) {
    this._alertSettings.internalValue = value;
  }
  public resetAlertSettings() {
    this._alertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingsInput() {
    return this._alertSettings.internalValue;
  }

  // bundle - computed: false, optional: false, required: true
  private _bundle = new PlaywrightCheckSuiteBundleOutputReference(this, "bundle");
  public get bundle() {
    return this._bundle;
  }
  public putBundle(value: PlaywrightCheckSuiteBundle) {
    this._bundle.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle.internalValue;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime = new PlaywrightCheckSuiteRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: PlaywrightCheckSuiteRuntime) {
    this._runtime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // trigger_incident - computed: false, optional: true, required: false
  private _triggerIncident = new PlaywrightCheckSuiteTriggerIncidentOutputReference(this, "trigger_incident");
  public get triggerIncident() {
    return this._triggerIncident;
  }
  public putTriggerIncident(value: PlaywrightCheckSuiteTriggerIncident) {
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
      frequency: cdktf.numberToTerraform(this._frequency),
      group_id: cdktf.numberToTerraform(this._groupId),
      group_order: cdktf.numberToTerraform(this._groupOrder),
      id: cdktf.stringToTerraform(this._id),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      muted: cdktf.booleanToTerraform(this._muted),
      name: cdktf.stringToTerraform(this._name),
      private_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateLocations),
      run_parallel: cdktf.booleanToTerraform(this._runParallel),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_global_alert_settings: cdktf.booleanToTerraform(this._useGlobalAlertSettings),
      alert_channel_subscription: cdktf.listMapper(playwrightCheckSuiteAlertChannelSubscriptionToTerraform, true)(this._alertChannelSubscription.internalValue),
      alert_settings: playwrightCheckSuiteAlertSettingsToTerraform(this._alertSettings.internalValue),
      bundle: playwrightCheckSuiteBundleToTerraform(this._bundle.internalValue),
      runtime: playwrightCheckSuiteRuntimeToTerraform(this._runtime.internalValue),
      trigger_incident: playwrightCheckSuiteTriggerIncidentToTerraform(this._triggerIncident.internalValue),
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
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
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
        value: cdktf.listMapperHcl(playwrightCheckSuiteAlertChannelSubscriptionToHclTerraform, true)(this._alertChannelSubscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlaywrightCheckSuiteAlertChannelSubscriptionList",
      },
      alert_settings: {
        value: playwrightCheckSuiteAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlaywrightCheckSuiteAlertSettingsList",
      },
      bundle: {
        value: playwrightCheckSuiteBundleToHclTerraform(this._bundle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlaywrightCheckSuiteBundleList",
      },
      runtime: {
        value: playwrightCheckSuiteRuntimeToHclTerraform(this._runtime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlaywrightCheckSuiteRuntimeList",
      },
      trigger_incident: {
        value: playwrightCheckSuiteTriggerIncidentToHclTerraform(this._triggerIncident.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlaywrightCheckSuiteTriggerIncidentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
