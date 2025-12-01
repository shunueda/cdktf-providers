// https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines if the check is running or not. Possible values `true`, and `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#activated Check#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * The response time in milliseconds starting from which a check should be considered degraded. Possible values are between 0 and 30000. (Default `15000`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#degraded_response_time Check#degraded_response_time}
  */
  readonly degradedResponseTime?: number;
  /**
  * Setting this to `true` will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#double_check Check#double_check}
  */
  readonly doubleCheck?: boolean | cdktf.IResolvable;
  /**
  * Key/value pairs for setting environment variables during check execution. These are only relevant for browser checks. Use global environment variables whenever possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#environment_variables Check#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * The frequency in minutes to run the check. Possible values are `0`, `1`, `2`, `5`, `10`, `15`, `30`, `60`, `120`, `180`, `360`, `720`, and `1440`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#frequency Check#frequency}
  */
  readonly frequency: number;
  /**
  * This property only valid for API high frequency checks. To create a hight frequency check, the property `frequency` must be `0` and `frequency_offset` could be `10`, `20` or `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#frequency_offset Check#frequency_offset}
  */
  readonly frequencyOffset?: number;
  /**
  * The id of the check group this check is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#group_id Check#group_id}
  */
  readonly groupId?: number;
  /**
  * The position of this check in a check group. It determines in what order checks are run when a group is triggered from the API or from CI/CD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#group_order Check#group_order}
  */
  readonly groupOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#id Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A valid piece of Node.js code to run in the setup phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#local_setup_script Check#local_setup_script}
  */
  readonly localSetupScript?: string;
  /**
  * A valid piece of Node.js code to run in the teardown phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#local_teardown_script Check#local_teardown_script}
  */
  readonly localTeardownScript?: string;
  /**
  * An array of one or more data center locations where to run the this check. (Default ["us-east-1"])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#locations Check#locations}
  */
  readonly locations?: string[];
  /**
  * The response time in milliseconds starting from which a check should be considered failing. Possible values are between 0 and 30000. (Default `30000`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#max_response_time Check#max_response_time}
  */
  readonly maxResponseTime?: number;
  /**
  * Determines if any notifications will be sent out when a check fails/degrades/recovers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#muted Check#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * The name of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#name Check#name}
  */
  readonly name: string;
  /**
  * An array of one or more private locations slugs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#private_locations Check#private_locations}
  */
  readonly privateLocations?: string[];
  /**
  * Determines if the check should run in all selected locations in parallel or round-robin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#run_parallel Check#run_parallel}
  */
  readonly runParallel?: boolean | cdktf.IResolvable;
  /**
  * The id of the runtime to use for this check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#runtime_id Check#runtime_id}
  */
  readonly runtimeId?: string;
  /**
  * A valid piece of Node.js JavaScript code describing a browser interaction with the Puppeteer/Playwright framework or a reference to an external JavaScript file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#script Check#script}
  */
  readonly script?: string;
  /**
  * An ID reference to a snippet to use in the setup phase of an API check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#setup_snippet_id Check#setup_snippet_id}
  */
  readonly setupSnippetId?: number;
  /**
  * Allows to invert the behaviour of when a check is considered to fail. Allows for validating error status like 404.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#should_fail Check#should_fail}
  */
  readonly shouldFail?: boolean | cdktf.IResolvable;
  /**
  * Determines if the SSL certificate should be validated for expiry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#ssl_check Check#ssl_check}
  */
  readonly sslCheck?: boolean | cdktf.IResolvable;
  /**
  * A valid fully qualified domain name (FQDN) to check its SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#ssl_check_domain Check#ssl_check_domain}
  */
  readonly sslCheckDomain?: string;
  /**
  * A list of tags for organizing and filtering checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#tags Check#tags}
  */
  readonly tags?: string[];
  /**
  * An ID reference to a snippet to use in the teardown phase of an API check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#teardown_snippet_id Check#teardown_snippet_id}
  */
  readonly teardownSnippetId?: number;
  /**
  * The type of the check. Possible values are `API`, `BROWSER`, and `MULTI_STEP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#type Check#type}
  */
  readonly type: string;
  /**
  * When true, the account level alert settings will be used, not the alert setting defined on this check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#use_global_alert_settings Check#use_global_alert_settings}
  */
  readonly useGlobalAlertSettings?: boolean | cdktf.IResolvable;
  /**
  * alert_channel_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#alert_channel_subscription Check#alert_channel_subscription}
  */
  readonly alertChannelSubscription?: CheckAlertChannelSubscription[] | cdktf.IResolvable;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#alert_settings Check#alert_settings}
  */
  readonly alertSettings?: CheckAlertSettings;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#environment_variable Check#environment_variable}
  */
  readonly environmentVariable?: CheckEnvironmentVariable[] | cdktf.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#request Check#request}
  */
  readonly request?: CheckRequest;
  /**
  * retry_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#retry_strategy Check#retry_strategy}
  */
  readonly retryStrategy?: CheckRetryStrategy;
  /**
  * trigger_incident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#trigger_incident Check#trigger_incident}
  */
  readonly triggerIncident?: CheckTriggerIncident;
}
export interface CheckAlertChannelSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#activated Check#activated}
  */
  readonly activated: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#channel_id Check#channel_id}
  */
  readonly channelId: number;
}

export function checkAlertChannelSubscriptionToTerraform(struct?: CheckAlertChannelSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activated: cdktf.booleanToTerraform(struct!.activated),
    channel_id: cdktf.numberToTerraform(struct!.channelId),
  }
}


export function checkAlertChannelSubscriptionToHclTerraform(struct?: CheckAlertChannelSubscription | cdktf.IResolvable): any {
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

export class CheckAlertChannelSubscriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckAlertChannelSubscription | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckAlertChannelSubscription | cdktf.IResolvable | undefined) {
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

export class CheckAlertChannelSubscriptionList extends cdktf.ComplexList {
  public internalValue? : CheckAlertChannelSubscription[] | cdktf.IResolvable

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
  public get(index: number): CheckAlertChannelSubscriptionOutputReference {
    return new CheckAlertChannelSubscriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckAlertSettingsParallelRunFailureThreshold {
  /**
  * Whether parallel run failure threshold is enabled. Only applies if the check is scheduled for multiple locations in parallel. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#enabled Check#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Percentage of runs that must fail to trigger alert. Possible values are `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, and `100`. (Default `10`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#percentage Check#percentage}
  */
  readonly percentage?: number;
}

export function checkAlertSettingsParallelRunFailureThresholdToTerraform(struct?: CheckAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function checkAlertSettingsParallelRunFailureThresholdToHclTerraform(struct?: CheckAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable): any {
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

export class CheckAlertSettingsParallelRunFailureThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckAlertSettingsParallelRunFailureThreshold | cdktf.IResolvable | undefined) {
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

export class CheckAlertSettingsParallelRunFailureThresholdList extends cdktf.ComplexList {
  public internalValue? : CheckAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable

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
  public get(index: number): CheckAlertSettingsParallelRunFailureThresholdOutputReference {
    return new CheckAlertSettingsParallelRunFailureThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckAlertSettingsReminders {
  /**
  * Number of reminder notifications to send. Possible values are `0`, `1`, `2`, `3`, `4`, `5`, and `100000` (`0` to disable, `100000` for unlimited). (Default `0`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#amount Check#amount}
  */
  readonly amount?: number;
  /**
  * Interval between reminder notifications in minutes. Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#interval Check#interval}
  */
  readonly interval?: number;
}

export function checkAlertSettingsRemindersToTerraform(struct?: CheckAlertSettingsReminders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function checkAlertSettingsRemindersToHclTerraform(struct?: CheckAlertSettingsReminders | cdktf.IResolvable): any {
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

export class CheckAlertSettingsRemindersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckAlertSettingsReminders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckAlertSettingsReminders | cdktf.IResolvable | undefined) {
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

export class CheckAlertSettingsRemindersList extends cdktf.ComplexList {
  public internalValue? : CheckAlertSettingsReminders[] | cdktf.IResolvable

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
  public get(index: number): CheckAlertSettingsRemindersOutputReference {
    return new CheckAlertSettingsRemindersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckAlertSettingsRunBasedEscalation {
  /**
  * Send an alert notification after the given number of consecutive check runs have failed. Possible values are between `1` and `5`. (Default `1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#failed_run_threshold Check#failed_run_threshold}
  */
  readonly failedRunThreshold?: number;
}

export function checkAlertSettingsRunBasedEscalationToTerraform(struct?: CheckAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_run_threshold: cdktf.numberToTerraform(struct!.failedRunThreshold),
  }
}


export function checkAlertSettingsRunBasedEscalationToHclTerraform(struct?: CheckAlertSettingsRunBasedEscalation | cdktf.IResolvable): any {
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

export class CheckAlertSettingsRunBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckAlertSettingsRunBasedEscalation | cdktf.IResolvable | undefined) {
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

export class CheckAlertSettingsRunBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : CheckAlertSettingsRunBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): CheckAlertSettingsRunBasedEscalationOutputReference {
    return new CheckAlertSettingsRunBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckAlertSettingsSslCertificates {
  /**
  * No longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#alert_threshold Check#alert_threshold}
  */
  readonly alertThreshold?: number;
  /**
  * No longer available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#enabled Check#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function checkAlertSettingsSslCertificatesToTerraform(struct?: CheckAlertSettingsSslCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_threshold: cdktf.numberToTerraform(struct!.alertThreshold),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function checkAlertSettingsSslCertificatesToHclTerraform(struct?: CheckAlertSettingsSslCertificates | cdktf.IResolvable): any {
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

export class CheckAlertSettingsSslCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckAlertSettingsSslCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckAlertSettingsSslCertificates | cdktf.IResolvable | undefined) {
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

export class CheckAlertSettingsSslCertificatesList extends cdktf.ComplexList {
  public internalValue? : CheckAlertSettingsSslCertificates[] | cdktf.IResolvable

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
  public get(index: number): CheckAlertSettingsSslCertificatesOutputReference {
    return new CheckAlertSettingsSslCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckAlertSettingsTimeBasedEscalation {
  /**
  * Send an alert notification after the check has been failing for the given amount of time (in minutes). Possible values are `5`, `10`, `15`, and `30`. (Default `5`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#minutes_failing_threshold Check#minutes_failing_threshold}
  */
  readonly minutesFailingThreshold?: number;
}

export function checkAlertSettingsTimeBasedEscalationToTerraform(struct?: CheckAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes_failing_threshold: cdktf.numberToTerraform(struct!.minutesFailingThreshold),
  }
}


export function checkAlertSettingsTimeBasedEscalationToHclTerraform(struct?: CheckAlertSettingsTimeBasedEscalation | cdktf.IResolvable): any {
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

export class CheckAlertSettingsTimeBasedEscalationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckAlertSettingsTimeBasedEscalation | cdktf.IResolvable | undefined) {
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

export class CheckAlertSettingsTimeBasedEscalationList extends cdktf.ComplexList {
  public internalValue? : CheckAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable

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
  public get(index: number): CheckAlertSettingsTimeBasedEscalationOutputReference {
    return new CheckAlertSettingsTimeBasedEscalationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckAlertSettings {
  /**
  * Determines the type of escalation to use. Possible values are `RUN_BASED` and `TIME_BASED`. (Default `RUN_BASED`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#escalation_type Check#escalation_type}
  */
  readonly escalationType?: string;
  /**
  * parallel_run_failure_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#parallel_run_failure_threshold Check#parallel_run_failure_threshold}
  */
  readonly parallelRunFailureThreshold?: CheckAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable;
  /**
  * reminders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#reminders Check#reminders}
  */
  readonly reminders?: CheckAlertSettingsReminders[] | cdktf.IResolvable;
  /**
  * run_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#run_based_escalation Check#run_based_escalation}
  */
  readonly runBasedEscalation?: CheckAlertSettingsRunBasedEscalation[] | cdktf.IResolvable;
  /**
  * ssl_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#ssl_certificates Check#ssl_certificates}
  */
  readonly sslCertificates?: CheckAlertSettingsSslCertificates[] | cdktf.IResolvable;
  /**
  * time_based_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#time_based_escalation Check#time_based_escalation}
  */
  readonly timeBasedEscalation?: CheckAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable;
}

export function checkAlertSettingsToTerraform(struct?: CheckAlertSettingsOutputReference | CheckAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_type: cdktf.stringToTerraform(struct!.escalationType),
    parallel_run_failure_threshold: cdktf.listMapper(checkAlertSettingsParallelRunFailureThresholdToTerraform, true)(struct!.parallelRunFailureThreshold),
    reminders: cdktf.listMapper(checkAlertSettingsRemindersToTerraform, true)(struct!.reminders),
    run_based_escalation: cdktf.listMapper(checkAlertSettingsRunBasedEscalationToTerraform, true)(struct!.runBasedEscalation),
    ssl_certificates: cdktf.listMapper(checkAlertSettingsSslCertificatesToTerraform, true)(struct!.sslCertificates),
    time_based_escalation: cdktf.listMapper(checkAlertSettingsTimeBasedEscalationToTerraform, true)(struct!.timeBasedEscalation),
  }
}


export function checkAlertSettingsToHclTerraform(struct?: CheckAlertSettingsOutputReference | CheckAlertSettings): any {
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
      value: cdktf.listMapperHcl(checkAlertSettingsParallelRunFailureThresholdToHclTerraform, true)(struct!.parallelRunFailureThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "CheckAlertSettingsParallelRunFailureThresholdList",
    },
    reminders: {
      value: cdktf.listMapperHcl(checkAlertSettingsRemindersToHclTerraform, true)(struct!.reminders),
      isBlock: true,
      type: "list",
      storageClassType: "CheckAlertSettingsRemindersList",
    },
    run_based_escalation: {
      value: cdktf.listMapperHcl(checkAlertSettingsRunBasedEscalationToHclTerraform, true)(struct!.runBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "CheckAlertSettingsRunBasedEscalationList",
    },
    ssl_certificates: {
      value: cdktf.listMapperHcl(checkAlertSettingsSslCertificatesToHclTerraform, true)(struct!.sslCertificates),
      isBlock: true,
      type: "set",
      storageClassType: "CheckAlertSettingsSslCertificatesList",
    },
    time_based_escalation: {
      value: cdktf.listMapperHcl(checkAlertSettingsTimeBasedEscalationToHclTerraform, true)(struct!.timeBasedEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "CheckAlertSettingsTimeBasedEscalationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckAlertSettings | undefined {
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

  public set internalValue(value: CheckAlertSettings | undefined) {
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
  private _parallelRunFailureThreshold = new CheckAlertSettingsParallelRunFailureThresholdList(this, "parallel_run_failure_threshold", false);
  public get parallelRunFailureThreshold() {
    return this._parallelRunFailureThreshold;
  }
  public putParallelRunFailureThreshold(value: CheckAlertSettingsParallelRunFailureThreshold[] | cdktf.IResolvable) {
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
  private _reminders = new CheckAlertSettingsRemindersList(this, "reminders", false);
  public get reminders() {
    return this._reminders;
  }
  public putReminders(value: CheckAlertSettingsReminders[] | cdktf.IResolvable) {
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
  private _runBasedEscalation = new CheckAlertSettingsRunBasedEscalationList(this, "run_based_escalation", false);
  public get runBasedEscalation() {
    return this._runBasedEscalation;
  }
  public putRunBasedEscalation(value: CheckAlertSettingsRunBasedEscalation[] | cdktf.IResolvable) {
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
  private _sslCertificates = new CheckAlertSettingsSslCertificatesList(this, "ssl_certificates", true);
  public get sslCertificates() {
    return this._sslCertificates;
  }
  public putSslCertificates(value: CheckAlertSettingsSslCertificates[] | cdktf.IResolvable) {
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
  private _timeBasedEscalation = new CheckAlertSettingsTimeBasedEscalationList(this, "time_based_escalation", false);
  public get timeBasedEscalation() {
    return this._timeBasedEscalation;
  }
  public putTimeBasedEscalation(value: CheckAlertSettingsTimeBasedEscalation[] | cdktf.IResolvable) {
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
export interface CheckEnvironmentVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#key Check#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#locked Check#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#secret Check#secret}
  */
  readonly secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#value Check#value}
  */
  readonly value: string;
}

export function checkEnvironmentVariableToTerraform(struct?: CheckEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    locked: cdktf.booleanToTerraform(struct!.locked),
    secret: cdktf.booleanToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function checkEnvironmentVariableToHclTerraform(struct?: CheckEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.booleanToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckEnvironmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckEnvironmentVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckEnvironmentVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._locked = undefined;
      this._secret = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._locked = value.locked;
      this._secret = value.secret;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: boolean | cdktf.IResolvable; 
  public get secret() {
    return this.getBooleanAttribute('secret');
  }
  public set secret(value: boolean | cdktf.IResolvable) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CheckEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : CheckEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): CheckEnvironmentVariableOutputReference {
    return new CheckEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckRequestAssertion {
  /**
  * The type of comparison to be executed between expected and actual value of the assertion. Possible values `EQUALS`, `NOT_EQUALS`, `HAS_KEY`, `NOT_HAS_KEY`, `HAS_VALUE`, `NOT_HAS_VALUE`, `IS_EMPTY`, `NOT_EMPTY`, `GREATER_THAN`, `LESS_THAN`, `CONTAINS`, `NOT_CONTAINS`, `IS_NULL`, and `NOT_NULL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#comparison Check#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#property Check#property}
  */
  readonly property?: string;
  /**
  * The source of the asserted value. Possible values `STATUS_CODE`, `JSON_BODY`, `HEADERS`, `TEXT_BODY`, and `RESPONSE_TIME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#source Check#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#target Check#target}
  */
  readonly target?: string;
}

export function checkRequestAssertionToTerraform(struct?: CheckRequestAssertion | cdktf.IResolvable): any {
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


export function checkRequestAssertionToHclTerraform(struct?: CheckRequestAssertion | cdktf.IResolvable): any {
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

export class CheckRequestAssertionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckRequestAssertion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckRequestAssertion | cdktf.IResolvable | undefined) {
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class CheckRequestAssertionList extends cdktf.ComplexList {
  public internalValue? : CheckRequestAssertion[] | cdktf.IResolvable

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
  public get(index: number): CheckRequestAssertionOutputReference {
    return new CheckRequestAssertionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckRequestBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#password Check#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#username Check#username}
  */
  readonly username: string;
}

export function checkRequestBasicAuthToTerraform(struct?: CheckRequestBasicAuthOutputReference | CheckRequestBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function checkRequestBasicAuthToHclTerraform(struct?: CheckRequestBasicAuthOutputReference | CheckRequestBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckRequestBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckRequestBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckRequestBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CheckRequest {
  /**
  * The body of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#body Check#body}
  */
  readonly body?: string;
  /**
  * The `Content-Type` header of the request. Possible values `NONE`, `JSON`, `FORM`, `RAW`, and `GRAPHQL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#body_type Check#body_type}
  */
  readonly bodyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#follow_redirects Check#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#headers Check#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * IP Family to be used when executing the api check. The value can be either IPv4 or IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#ip_family Check#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * The HTTP method to use for this API check. Possible values are `GET`, `POST`, `PUT`, `HEAD`, `DELETE`, `PATCH`. (Default `GET`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#method Check#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#query_parameters Check#query_parameters}
  */
  readonly queryParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#skip_ssl Check#skip_ssl}
  */
  readonly skipSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#url Check#url}
  */
  readonly url: string;
  /**
  * assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#assertion Check#assertion}
  */
  readonly assertion?: CheckRequestAssertion[] | cdktf.IResolvable;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#basic_auth Check#basic_auth}
  */
  readonly basicAuth?: CheckRequestBasicAuth;
}

export function checkRequestToTerraform(struct?: CheckRequestOutputReference | CheckRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    body_type: cdktf.stringToTerraform(struct!.bodyType),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    method: cdktf.stringToTerraform(struct!.method),
    query_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryParameters),
    skip_ssl: cdktf.booleanToTerraform(struct!.skipSsl),
    url: cdktf.stringToTerraform(struct!.url),
    assertion: cdktf.listMapper(checkRequestAssertionToTerraform, true)(struct!.assertion),
    basic_auth: checkRequestBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function checkRequestToHclTerraform(struct?: CheckRequestOutputReference | CheckRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_type: {
      value: cdktf.stringToHclTerraform(struct!.bodyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
      value: cdktf.listMapperHcl(checkRequestAssertionToHclTerraform, true)(struct!.assertion),
      isBlock: true,
      type: "set",
      storageClassType: "CheckRequestAssertionList",
    },
    basic_auth: {
      value: checkRequestBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "set",
      storageClassType: "CheckRequestBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyType = this._bodyType;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._queryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters;
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
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._bodyType = undefined;
      this._followRedirects = undefined;
      this._headers = undefined;
      this._ipFamily = undefined;
      this._method = undefined;
      this._queryParameters = undefined;
      this._skipSsl = undefined;
      this._url = undefined;
      this._assertion.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._bodyType = value.bodyType;
      this._followRedirects = value.followRedirects;
      this._headers = value.headers;
      this._ipFamily = value.ipFamily;
      this._method = value.method;
      this._queryParameters = value.queryParameters;
      this._skipSsl = value.skipSsl;
      this._url = value.url;
      this._assertion.internalValue = value.assertion;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_type - computed: false, optional: true, required: false
  private _bodyType?: string; 
  public get bodyType() {
    return this.getStringAttribute('body_type');
  }
  public set bodyType(value: string) {
    this._bodyType = value;
  }
  public resetBodyType() {
    this._bodyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTypeInput() {
    return this._bodyType;
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

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // query_parameters - computed: true, optional: true, required: false
  private _queryParameters?: { [key: string]: string }; 
  public get queryParameters() {
    return this.getStringMapAttribute('query_parameters');
  }
  public set queryParameters(value: { [key: string]: string }) {
    this._queryParameters = value;
  }
  public resetQueryParameters() {
    this._queryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters;
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
  private _assertion = new CheckRequestAssertionList(this, "assertion", true);
  public get assertion() {
    return this._assertion;
  }
  public putAssertion(value: CheckRequestAssertion[] | cdktf.IResolvable) {
    this._assertion.internalValue = value;
  }
  public resetAssertion() {
    this._assertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionInput() {
    return this._assertion.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new CheckRequestBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: CheckRequestBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface CheckRetryStrategyOnlyOn {
  /**
  * When `true`, retry only if the cause of the failure is a network error. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#network_error Check#network_error}
  */
  readonly networkError?: boolean | cdktf.IResolvable;
}

export function checkRetryStrategyOnlyOnToTerraform(struct?: CheckRetryStrategyOnlyOnOutputReference | CheckRetryStrategyOnlyOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_error: cdktf.booleanToTerraform(struct!.networkError),
  }
}


export function checkRetryStrategyOnlyOnToHclTerraform(struct?: CheckRetryStrategyOnlyOnOutputReference | CheckRetryStrategyOnlyOn): any {
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

export class CheckRetryStrategyOnlyOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckRetryStrategyOnlyOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkError !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkError = this._networkError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckRetryStrategyOnlyOn | undefined) {
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
export interface CheckRetryStrategy {
  /**
  * The number of seconds to wait before the first retry attempt. (Default `60`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#base_backoff_seconds Check#base_backoff_seconds}
  */
  readonly baseBackoffSeconds?: number;
  /**
  * The total amount of time to continue retrying the check/monitor (maximum 600 seconds). Available when `type` is `FIXED`, `LINEAR`, or `EXPONENTIAL`. (Default `600`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#max_duration_seconds Check#max_duration_seconds}
  */
  readonly maxDurationSeconds?: number;
  /**
  * The maximum number of times to retry the check/monitor. Value must be between `1` and `10`. Available when `type` is `FIXED`, `LINEAR`, or `EXPONENTIAL`. (Default `2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#max_retries Check#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Whether retries should be run in the same region as the initial check/monitor run. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#same_region Check#same_region}
  */
  readonly sameRegion?: boolean | cdktf.IResolvable;
  /**
  * Determines which type of retry strategy to use. Possible values are `FIXED`, `LINEAR`, `EXPONENTIAL`, `SINGLE_RETRY`, and `NO_RETRIES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#type Check#type}
  */
  readonly type: string;
  /**
  * only_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#only_on Check#only_on}
  */
  readonly onlyOn?: CheckRetryStrategyOnlyOn;
}

export function checkRetryStrategyToTerraform(struct?: CheckRetryStrategyOutputReference | CheckRetryStrategy): any {
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
    only_on: checkRetryStrategyOnlyOnToTerraform(struct!.onlyOn),
  }
}


export function checkRetryStrategyToHclTerraform(struct?: CheckRetryStrategyOutputReference | CheckRetryStrategy): any {
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
      value: checkRetryStrategyOnlyOnToHclTerraform(struct!.onlyOn),
      isBlock: true,
      type: "list",
      storageClassType: "CheckRetryStrategyOnlyOnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckRetryStrategy | undefined {
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

  public set internalValue(value: CheckRetryStrategy | undefined) {
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
  private _onlyOn = new CheckRetryStrategyOnlyOnOutputReference(this, "only_on");
  public get onlyOn() {
    return this._onlyOn;
  }
  public putOnlyOn(value: CheckRetryStrategyOnlyOn) {
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
export interface CheckTriggerIncident {
  /**
  * A detailed description of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#description Check#description}
  */
  readonly description: string;
  /**
  * The name of the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#name Check#name}
  */
  readonly name: string;
  /**
  * Whether to notify subscribers when the incident is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#notify_subscribers Check#notify_subscribers}
  */
  readonly notifySubscribers: boolean | cdktf.IResolvable;
  /**
  * The status page service that this incident will be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#service_id Check#service_id}
  */
  readonly serviceId: string;
  /**
  * The severity level of the incident. Possible values are `MINOR`, `MEDIUM`, `MAJOR`, and `CRITICAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#severity Check#severity}
  */
  readonly severity: string;
}

export function checkTriggerIncidentToTerraform(struct?: CheckTriggerIncidentOutputReference | CheckTriggerIncident): any {
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


export function checkTriggerIncidentToHclTerraform(struct?: CheckTriggerIncidentOutputReference | CheckTriggerIncident): any {
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

export class CheckTriggerIncidentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckTriggerIncident | undefined {
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

  public set internalValue(value: CheckTriggerIncident | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check checkly_check}
*/
export class Check extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Check to import
  * @param importFromId The id of the existing Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/check checkly_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckConfig
  */
  public constructor(scope: Construct, id: string, config: CheckConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_check',
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
    this._doubleCheck = config.doubleCheck;
    this._environmentVariables = config.environmentVariables;
    this._frequency = config.frequency;
    this._frequencyOffset = config.frequencyOffset;
    this._groupId = config.groupId;
    this._groupOrder = config.groupOrder;
    this._id = config.id;
    this._localSetupScript = config.localSetupScript;
    this._localTeardownScript = config.localTeardownScript;
    this._locations = config.locations;
    this._maxResponseTime = config.maxResponseTime;
    this._muted = config.muted;
    this._name = config.name;
    this._privateLocations = config.privateLocations;
    this._runParallel = config.runParallel;
    this._runtimeId = config.runtimeId;
    this._script = config.script;
    this._setupSnippetId = config.setupSnippetId;
    this._shouldFail = config.shouldFail;
    this._sslCheck = config.sslCheck;
    this._sslCheckDomain = config.sslCheckDomain;
    this._tags = config.tags;
    this._teardownSnippetId = config.teardownSnippetId;
    this._type = config.type;
    this._useGlobalAlertSettings = config.useGlobalAlertSettings;
    this._alertChannelSubscription.internalValue = config.alertChannelSubscription;
    this._alertSettings.internalValue = config.alertSettings;
    this._environmentVariable.internalValue = config.environmentVariable;
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

  // double_check - computed: false, optional: true, required: false
  private _doubleCheck?: boolean | cdktf.IResolvable; 
  public get doubleCheck() {
    return this.getBooleanAttribute('double_check');
  }
  public set doubleCheck(value: boolean | cdktf.IResolvable) {
    this._doubleCheck = value;
  }
  public resetDoubleCheck() {
    this._doubleCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleCheckInput() {
    return this._doubleCheck;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
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

  // local_setup_script - computed: false, optional: true, required: false
  private _localSetupScript?: string; 
  public get localSetupScript() {
    return this.getStringAttribute('local_setup_script');
  }
  public set localSetupScript(value: string) {
    this._localSetupScript = value;
  }
  public resetLocalSetupScript() {
    this._localSetupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSetupScriptInput() {
    return this._localSetupScript;
  }

  // local_teardown_script - computed: false, optional: true, required: false
  private _localTeardownScript?: string; 
  public get localTeardownScript() {
    return this.getStringAttribute('local_teardown_script');
  }
  public set localTeardownScript(value: string) {
    this._localTeardownScript = value;
  }
  public resetLocalTeardownScript() {
    this._localTeardownScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTeardownScriptInput() {
    return this._localTeardownScript;
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

  // runtime_id - computed: false, optional: true, required: false
  private _runtimeId?: string; 
  public get runtimeId() {
    return this.getStringAttribute('runtime_id');
  }
  public set runtimeId(value: string) {
    this._runtimeId = value;
  }
  public resetRuntimeId() {
    this._runtimeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeIdInput() {
    return this._runtimeId;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // setup_snippet_id - computed: false, optional: true, required: false
  private _setupSnippetId?: number; 
  public get setupSnippetId() {
    return this.getNumberAttribute('setup_snippet_id');
  }
  public set setupSnippetId(value: number) {
    this._setupSnippetId = value;
  }
  public resetSetupSnippetId() {
    this._setupSnippetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupSnippetIdInput() {
    return this._setupSnippetId;
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

  // ssl_check - computed: false, optional: true, required: false
  private _sslCheck?: boolean | cdktf.IResolvable; 
  public get sslCheck() {
    return this.getBooleanAttribute('ssl_check');
  }
  public set sslCheck(value: boolean | cdktf.IResolvable) {
    this._sslCheck = value;
  }
  public resetSslCheck() {
    this._sslCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCheckInput() {
    return this._sslCheck;
  }

  // ssl_check_domain - computed: false, optional: true, required: false
  private _sslCheckDomain?: string; 
  public get sslCheckDomain() {
    return this.getStringAttribute('ssl_check_domain');
  }
  public set sslCheckDomain(value: string) {
    this._sslCheckDomain = value;
  }
  public resetSslCheckDomain() {
    this._sslCheckDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCheckDomainInput() {
    return this._sslCheckDomain;
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

  // teardown_snippet_id - computed: false, optional: true, required: false
  private _teardownSnippetId?: number; 
  public get teardownSnippetId() {
    return this.getNumberAttribute('teardown_snippet_id');
  }
  public set teardownSnippetId(value: number) {
    this._teardownSnippetId = value;
  }
  public resetTeardownSnippetId() {
    this._teardownSnippetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownSnippetIdInput() {
    return this._teardownSnippetId;
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
  private _alertChannelSubscription = new CheckAlertChannelSubscriptionList(this, "alert_channel_subscription", false);
  public get alertChannelSubscription() {
    return this._alertChannelSubscription;
  }
  public putAlertChannelSubscription(value: CheckAlertChannelSubscription[] | cdktf.IResolvable) {
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
  private _alertSettings = new CheckAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: CheckAlertSettings) {
    this._alertSettings.internalValue = value;
  }
  public resetAlertSettings() {
    this._alertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingsInput() {
    return this._alertSettings.internalValue;
  }

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable = new CheckEnvironmentVariableList(this, "environment_variable", false);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: CheckEnvironmentVariable[] | cdktf.IResolvable) {
    this._environmentVariable.internalValue = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new CheckRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: CheckRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new CheckRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: CheckRetryStrategy) {
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
  private _triggerIncident = new CheckTriggerIncidentOutputReference(this, "trigger_incident");
  public get triggerIncident() {
    return this._triggerIncident;
  }
  public putTriggerIncident(value: CheckTriggerIncident) {
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
      double_check: cdktf.booleanToTerraform(this._doubleCheck),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      frequency: cdktf.numberToTerraform(this._frequency),
      frequency_offset: cdktf.numberToTerraform(this._frequencyOffset),
      group_id: cdktf.numberToTerraform(this._groupId),
      group_order: cdktf.numberToTerraform(this._groupOrder),
      id: cdktf.stringToTerraform(this._id),
      local_setup_script: cdktf.stringToTerraform(this._localSetupScript),
      local_teardown_script: cdktf.stringToTerraform(this._localTeardownScript),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      max_response_time: cdktf.numberToTerraform(this._maxResponseTime),
      muted: cdktf.booleanToTerraform(this._muted),
      name: cdktf.stringToTerraform(this._name),
      private_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateLocations),
      run_parallel: cdktf.booleanToTerraform(this._runParallel),
      runtime_id: cdktf.stringToTerraform(this._runtimeId),
      script: cdktf.stringToTerraform(this._script),
      setup_snippet_id: cdktf.numberToTerraform(this._setupSnippetId),
      should_fail: cdktf.booleanToTerraform(this._shouldFail),
      ssl_check: cdktf.booleanToTerraform(this._sslCheck),
      ssl_check_domain: cdktf.stringToTerraform(this._sslCheckDomain),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      teardown_snippet_id: cdktf.numberToTerraform(this._teardownSnippetId),
      type: cdktf.stringToTerraform(this._type),
      use_global_alert_settings: cdktf.booleanToTerraform(this._useGlobalAlertSettings),
      alert_channel_subscription: cdktf.listMapper(checkAlertChannelSubscriptionToTerraform, true)(this._alertChannelSubscription.internalValue),
      alert_settings: checkAlertSettingsToTerraform(this._alertSettings.internalValue),
      environment_variable: cdktf.listMapper(checkEnvironmentVariableToTerraform, true)(this._environmentVariable.internalValue),
      request: checkRequestToTerraform(this._request.internalValue),
      retry_strategy: checkRetryStrategyToTerraform(this._retryStrategy.internalValue),
      trigger_incident: checkTriggerIncidentToTerraform(this._triggerIncident.internalValue),
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
      double_check: {
        value: cdktf.booleanToHclTerraform(this._doubleCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      local_setup_script: {
        value: cdktf.stringToHclTerraform(this._localSetupScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_teardown_script: {
        value: cdktf.stringToHclTerraform(this._localTeardownScript),
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
      runtime_id: {
        value: cdktf.stringToHclTerraform(this._runtimeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setup_snippet_id: {
        value: cdktf.numberToHclTerraform(this._setupSnippetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      should_fail: {
        value: cdktf.booleanToHclTerraform(this._shouldFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_check: {
        value: cdktf.booleanToHclTerraform(this._sslCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_check_domain: {
        value: cdktf.stringToHclTerraform(this._sslCheckDomain),
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
      teardown_snippet_id: {
        value: cdktf.numberToHclTerraform(this._teardownSnippetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_global_alert_settings: {
        value: cdktf.booleanToHclTerraform(this._useGlobalAlertSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_channel_subscription: {
        value: cdktf.listMapperHcl(checkAlertChannelSubscriptionToHclTerraform, true)(this._alertChannelSubscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckAlertChannelSubscriptionList",
      },
      alert_settings: {
        value: checkAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckAlertSettingsList",
      },
      environment_variable: {
        value: cdktf.listMapperHcl(checkEnvironmentVariableToHclTerraform, true)(this._environmentVariable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckEnvironmentVariableList",
      },
      request: {
        value: checkRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckRequestList",
      },
      retry_strategy: {
        value: checkRetryStrategyToHclTerraform(this._retryStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckRetryStrategyList",
      },
      trigger_incident: {
        value: checkTriggerIncidentToHclTerraform(this._triggerIncident.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckTriggerIncidentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
