// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataOpsAlarmRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alarm level: 1. Normal, 2. Major, 3. Urgent (default 1. Normal).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_level WedataOpsAlarmRule#alarm_level}
  */
  readonly alarmLevel?: number;
  /**
  * Alert rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_rule_name WedataOpsAlarmRule#alarm_rule_name}
  */
  readonly alarmRuleName: string;
  /**
  * Alarm Rule Monitoring Types: failure: failure alarm; overtime: timeout alarm; success: success alarm; backTrackingOrRerunSuccess: backTrackingOrRerunSuccess: backTrackingOrRerunFailure: backTrackingOrRerunFailure. Project Fluctuation Alarms: projectFailureInstanceUpwardFluctuationAlarm: alarm if the upward fluctuation rate of failed instances exceeds the threshold. projectSuccessInstanceDownwardFluctuationAlarm: alarm if the downward fluctuation rate of successful instances exceeds the threshold. Offline Integration Task Reconciliation Alarms: reconciliationFailure: offline reconciliation task failure alarm; reconciliationOvertime: offline reconciliation task timeout alarm; reconciliationMismatch: alarm if the number of inconsistent entries in a data reconciliation task exceeds the threshold. Example value: ["failure"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_types WedataOpsAlarmRule#alarm_types}
  */
  readonly alarmTypes: string[];
  /**
  * Alarm rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#description WedataOpsAlarmRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#id WedataOpsAlarmRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of monitored object business IDs. Different business IDs are passed in based on the MonitorType setting. For example, 1 (Task) - MonitorObjectIds is a list of task IDs; 2 (Workflow) - MonitorObjectIds is a list of workflow IDs (workflow IDs can be obtained from the ListWorkflows interface); 3 (Project) - MonitorObjectIds is a list of project IDs. Example value: ["ddc"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#monitor_object_ids WedataOpsAlarmRule#monitor_object_ids}
  */
  readonly monitorObjectIds: string[];
  /**
  * Monitoring object type, Task-based monitoring: Configurable by task/workflow/project: 1. Task, 2. Workflow, 3. Project (default is 1. Task). Project-based monitoring: Alerts for overall project task fluctuations, 7: Project fluctuation monitoring alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#monitor_object_type WedataOpsAlarmRule#monitor_object_type}
  */
  readonly monitorObjectType?: number;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#project_id WedataOpsAlarmRule#project_id}
  */
  readonly projectId: string;
  /**
  * alarm_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_groups WedataOpsAlarmRule#alarm_groups}
  */
  readonly alarmGroups: WedataOpsAlarmRuleAlarmGroups[] | cdktf.IResolvable;
  /**
  * alarm_rule_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_rule_detail WedataOpsAlarmRule#alarm_rule_detail}
  */
  readonly alarmRuleDetail?: WedataOpsAlarmRuleAlarmRuleDetail;
}
export interface WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervals {
  /**
  * According to the ISO standard, 1 represents Monday and 7 represents Sunday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#days_of_week WedataOpsAlarmRule#days_of_week}
  */
  readonly daysOfWeek?: number[];
  /**
  * End time, with precision of hours, minutes, and seconds, in the format of HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#end_time WedataOpsAlarmRule#end_time}
  */
  readonly endTime?: string;
  /**
  * Start time, with precision of hours, minutes, and seconds, in the format of HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#start_time WedataOpsAlarmRule#start_time}
  */
  readonly startTime?: string;
}

export function wedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsToTerraform(struct?: WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfWeek),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function wedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsToHclTerraform(struct?: WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysOfWeek = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysOfWeek = value.daysOfWeek;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: number[]; 
  public get daysOfWeek() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_of_week')));
  }
  public set daysOfWeek(value: number[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsList extends cdktf.ComplexList {
  public internalValue? : WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervals[] | cdktf.IResolvable

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
  public get(index: number): WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsOutputReference {
    return new WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataOpsAlarmRuleAlarmGroupsNotificationFatigue {
  /**
  * Number of alarms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#notify_count WedataOpsAlarmRule#notify_count}
  */
  readonly notifyCount?: number;
  /**
  * Alarm interval, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#notify_interval WedataOpsAlarmRule#notify_interval}
  */
  readonly notifyInterval?: number;
  /**
  * quiet_intervals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#quiet_intervals WedataOpsAlarmRule#quiet_intervals}
  */
  readonly quietIntervals?: WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervals[] | cdktf.IResolvable;
}

export function wedataOpsAlarmRuleAlarmGroupsNotificationFatigueToTerraform(struct?: WedataOpsAlarmRuleAlarmGroupsNotificationFatigueOutputReference | WedataOpsAlarmRuleAlarmGroupsNotificationFatigue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notify_count: cdktf.numberToTerraform(struct!.notifyCount),
    notify_interval: cdktf.numberToTerraform(struct!.notifyInterval),
    quiet_intervals: cdktf.listMapper(wedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsToTerraform, true)(struct!.quietIntervals),
  }
}


export function wedataOpsAlarmRuleAlarmGroupsNotificationFatigueToHclTerraform(struct?: WedataOpsAlarmRuleAlarmGroupsNotificationFatigueOutputReference | WedataOpsAlarmRuleAlarmGroupsNotificationFatigue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notify_count: {
      value: cdktf.numberToHclTerraform(struct!.notifyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_interval: {
      value: cdktf.numberToHclTerraform(struct!.notifyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quiet_intervals: {
      value: cdktf.listMapperHcl(wedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsToHclTerraform, true)(struct!.quietIntervals),
      isBlock: true,
      type: "list",
      storageClassType: "WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmGroupsNotificationFatigueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataOpsAlarmRuleAlarmGroupsNotificationFatigue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyCount = this._notifyCount;
    }
    if (this._notifyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyInterval = this._notifyInterval;
    }
    if (this._quietIntervals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quietIntervals = this._quietIntervals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmGroupsNotificationFatigue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifyCount = undefined;
      this._notifyInterval = undefined;
      this._quietIntervals.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifyCount = value.notifyCount;
      this._notifyInterval = value.notifyInterval;
      this._quietIntervals.internalValue = value.quietIntervals;
    }
  }

  // notify_count - computed: false, optional: true, required: false
  private _notifyCount?: number; 
  public get notifyCount() {
    return this.getNumberAttribute('notify_count');
  }
  public set notifyCount(value: number) {
    this._notifyCount = value;
  }
  public resetNotifyCount() {
    this._notifyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyCountInput() {
    return this._notifyCount;
  }

  // notify_interval - computed: false, optional: true, required: false
  private _notifyInterval?: number; 
  public get notifyInterval() {
    return this.getNumberAttribute('notify_interval');
  }
  public set notifyInterval(value: number) {
    this._notifyInterval = value;
  }
  public resetNotifyInterval() {
    this._notifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyIntervalInput() {
    return this._notifyInterval;
  }

  // quiet_intervals - computed: false, optional: true, required: false
  private _quietIntervals = new WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervalsList(this, "quiet_intervals", false);
  public get quietIntervals() {
    return this._quietIntervals;
  }
  public putQuietIntervals(value: WedataOpsAlarmRuleAlarmGroupsNotificationFatigueQuietIntervals[] | cdktf.IResolvable) {
    this._quietIntervals.internalValue = value;
  }
  public resetQuietIntervals() {
    this._quietIntervals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quietIntervalsInput() {
    return this._quietIntervals.internalValue;
  }
}
export interface WedataOpsAlarmRuleAlarmGroupsWebHooks {
  /**
  * Alert channel value: 7. Enterprise WeChat group, 8. Feishu group, 9. DingTalk group, 10. Slack group, 11. Teams group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_way WedataOpsAlarmRule#alarm_way}
  */
  readonly alarmWay?: string;
  /**
  * List of webhook addresses for the alarm group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#web_hooks WedataOpsAlarmRule#web_hooks}
  */
  readonly webHooks?: string[];
}

export function wedataOpsAlarmRuleAlarmGroupsWebHooksToTerraform(struct?: WedataOpsAlarmRuleAlarmGroupsWebHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_way: cdktf.stringToTerraform(struct!.alarmWay),
    web_hooks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webHooks),
  }
}


export function wedataOpsAlarmRuleAlarmGroupsWebHooksToHclTerraform(struct?: WedataOpsAlarmRuleAlarmGroupsWebHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_way: {
      value: cdktf.stringToHclTerraform(struct!.alarmWay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_hooks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webHooks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmGroupsWebHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataOpsAlarmRuleAlarmGroupsWebHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmWay !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmWay = this._alarmWay;
    }
    if (this._webHooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHooks = this._webHooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmGroupsWebHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmWay = undefined;
      this._webHooks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmWay = value.alarmWay;
      this._webHooks = value.webHooks;
    }
  }

  // alarm_way - computed: false, optional: true, required: false
  private _alarmWay?: string; 
  public get alarmWay() {
    return this.getStringAttribute('alarm_way');
  }
  public set alarmWay(value: string) {
    this._alarmWay = value;
  }
  public resetAlarmWay() {
    this._alarmWay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmWayInput() {
    return this._alarmWay;
  }

  // web_hooks - computed: false, optional: true, required: false
  private _webHooks?: string[]; 
  public get webHooks() {
    return cdktf.Fn.tolist(this.getListAttribute('web_hooks'));
  }
  public set webHooks(value: string[]) {
    this._webHooks = value;
  }
  public resetWebHooks() {
    this._webHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHooksInput() {
    return this._webHooks;
  }
}

export class WedataOpsAlarmRuleAlarmGroupsWebHooksList extends cdktf.ComplexList {
  public internalValue? : WedataOpsAlarmRuleAlarmGroupsWebHooks[] | cdktf.IResolvable

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
  public get(index: number): WedataOpsAlarmRuleAlarmGroupsWebHooksOutputReference {
    return new WedataOpsAlarmRuleAlarmGroupsWebHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataOpsAlarmRuleAlarmGroups {
  /**
  * Alarm escalation interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_escalation_interval WedataOpsAlarmRule#alarm_escalation_interval}
  */
  readonly alarmEscalationInterval?: number;
  /**
  * Alarm escalator ID list. If the alarm receiver or the upper escalator does not confirm the alarm within the alarm interval, the alarm will be sent to the next level escalator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_escalation_recipient_ids WedataOpsAlarmRule#alarm_escalation_recipient_ids}
  */
  readonly alarmEscalationRecipientIds?: string[];
  /**
  * Depending on the type of AlarmRecipientType, this list has different business IDs: 1 (Specified Person): Alarm Recipient ID List; 2 (Task Responsible Person): No configuration required; 3 (Duty Roster): Duty Roster ID List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_recipient_ids WedataOpsAlarmRule#alarm_recipient_ids}
  */
  readonly alarmRecipientIds?: string[];
  /**
  * Alarm Recipient Type: 1. Designated Personnel, 2. Task Responsible Personnel, 3. Duty Roster (Default: 1. Designated Personnel).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_recipient_type WedataOpsAlarmRule#alarm_recipient_type}
  */
  readonly alarmRecipientType?: number;
  /**
  * Alert Channels: 1: Email, 2: SMS, 3: WeChat, 4: Voice, 5: WeChat Enterprise, 6: Http, 7: WeChat Enterprise Group, 8: Lark Group, 9: DingTalk Group, 10: Slack Group, 11: Teams Group (Default: Email), Only one channel can be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_ways WedataOpsAlarmRule#alarm_ways}
  */
  readonly alarmWays?: string[];
  /**
  * notification_fatigue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#notification_fatigue WedataOpsAlarmRule#notification_fatigue}
  */
  readonly notificationFatigue?: WedataOpsAlarmRuleAlarmGroupsNotificationFatigue;
  /**
  * web_hooks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#web_hooks WedataOpsAlarmRule#web_hooks}
  */
  readonly webHooks?: WedataOpsAlarmRuleAlarmGroupsWebHooks[] | cdktf.IResolvable;
}

export function wedataOpsAlarmRuleAlarmGroupsToTerraform(struct?: WedataOpsAlarmRuleAlarmGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_escalation_interval: cdktf.numberToTerraform(struct!.alarmEscalationInterval),
    alarm_escalation_recipient_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarmEscalationRecipientIds),
    alarm_recipient_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarmRecipientIds),
    alarm_recipient_type: cdktf.numberToTerraform(struct!.alarmRecipientType),
    alarm_ways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarmWays),
    notification_fatigue: wedataOpsAlarmRuleAlarmGroupsNotificationFatigueToTerraform(struct!.notificationFatigue),
    web_hooks: cdktf.listMapper(wedataOpsAlarmRuleAlarmGroupsWebHooksToTerraform, true)(struct!.webHooks),
  }
}


export function wedataOpsAlarmRuleAlarmGroupsToHclTerraform(struct?: WedataOpsAlarmRuleAlarmGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_escalation_interval: {
      value: cdktf.numberToHclTerraform(struct!.alarmEscalationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_escalation_recipient_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alarmEscalationRecipientIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    alarm_recipient_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alarmRecipientIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    alarm_recipient_type: {
      value: cdktf.numberToHclTerraform(struct!.alarmRecipientType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_ways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alarmWays),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    notification_fatigue: {
      value: wedataOpsAlarmRuleAlarmGroupsNotificationFatigueToHclTerraform(struct!.notificationFatigue),
      isBlock: true,
      type: "list",
      storageClassType: "WedataOpsAlarmRuleAlarmGroupsNotificationFatigueList",
    },
    web_hooks: {
      value: cdktf.listMapperHcl(wedataOpsAlarmRuleAlarmGroupsWebHooksToHclTerraform, true)(struct!.webHooks),
      isBlock: true,
      type: "list",
      storageClassType: "WedataOpsAlarmRuleAlarmGroupsWebHooksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataOpsAlarmRuleAlarmGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmEscalationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmEscalationInterval = this._alarmEscalationInterval;
    }
    if (this._alarmEscalationRecipientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmEscalationRecipientIds = this._alarmEscalationRecipientIds;
    }
    if (this._alarmRecipientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRecipientIds = this._alarmRecipientIds;
    }
    if (this._alarmRecipientType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmRecipientType = this._alarmRecipientType;
    }
    if (this._alarmWays !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmWays = this._alarmWays;
    }
    if (this._notificationFatigue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationFatigue = this._notificationFatigue?.internalValue;
    }
    if (this._webHooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webHooks = this._webHooks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmEscalationInterval = undefined;
      this._alarmEscalationRecipientIds = undefined;
      this._alarmRecipientIds = undefined;
      this._alarmRecipientType = undefined;
      this._alarmWays = undefined;
      this._notificationFatigue.internalValue = undefined;
      this._webHooks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmEscalationInterval = value.alarmEscalationInterval;
      this._alarmEscalationRecipientIds = value.alarmEscalationRecipientIds;
      this._alarmRecipientIds = value.alarmRecipientIds;
      this._alarmRecipientType = value.alarmRecipientType;
      this._alarmWays = value.alarmWays;
      this._notificationFatigue.internalValue = value.notificationFatigue;
      this._webHooks.internalValue = value.webHooks;
    }
  }

  // alarm_escalation_interval - computed: false, optional: true, required: false
  private _alarmEscalationInterval?: number; 
  public get alarmEscalationInterval() {
    return this.getNumberAttribute('alarm_escalation_interval');
  }
  public set alarmEscalationInterval(value: number) {
    this._alarmEscalationInterval = value;
  }
  public resetAlarmEscalationInterval() {
    this._alarmEscalationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmEscalationIntervalInput() {
    return this._alarmEscalationInterval;
  }

  // alarm_escalation_recipient_ids - computed: false, optional: true, required: false
  private _alarmEscalationRecipientIds?: string[]; 
  public get alarmEscalationRecipientIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_escalation_recipient_ids'));
  }
  public set alarmEscalationRecipientIds(value: string[]) {
    this._alarmEscalationRecipientIds = value;
  }
  public resetAlarmEscalationRecipientIds() {
    this._alarmEscalationRecipientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmEscalationRecipientIdsInput() {
    return this._alarmEscalationRecipientIds;
  }

  // alarm_recipient_ids - computed: false, optional: true, required: false
  private _alarmRecipientIds?: string[]; 
  public get alarmRecipientIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_recipient_ids'));
  }
  public set alarmRecipientIds(value: string[]) {
    this._alarmRecipientIds = value;
  }
  public resetAlarmRecipientIds() {
    this._alarmRecipientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRecipientIdsInput() {
    return this._alarmRecipientIds;
  }

  // alarm_recipient_type - computed: false, optional: true, required: false
  private _alarmRecipientType?: number; 
  public get alarmRecipientType() {
    return this.getNumberAttribute('alarm_recipient_type');
  }
  public set alarmRecipientType(value: number) {
    this._alarmRecipientType = value;
  }
  public resetAlarmRecipientType() {
    this._alarmRecipientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRecipientTypeInput() {
    return this._alarmRecipientType;
  }

  // alarm_ways - computed: false, optional: true, required: false
  private _alarmWays?: string[]; 
  public get alarmWays() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_ways'));
  }
  public set alarmWays(value: string[]) {
    this._alarmWays = value;
  }
  public resetAlarmWays() {
    this._alarmWays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmWaysInput() {
    return this._alarmWays;
  }

  // notification_fatigue - computed: false, optional: true, required: false
  private _notificationFatigue = new WedataOpsAlarmRuleAlarmGroupsNotificationFatigueOutputReference(this, "notification_fatigue");
  public get notificationFatigue() {
    return this._notificationFatigue;
  }
  public putNotificationFatigue(value: WedataOpsAlarmRuleAlarmGroupsNotificationFatigue) {
    this._notificationFatigue.internalValue = value;
  }
  public resetNotificationFatigue() {
    this._notificationFatigue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationFatigueInput() {
    return this._notificationFatigue.internalValue;
  }

  // web_hooks - computed: false, optional: true, required: false
  private _webHooks = new WedataOpsAlarmRuleAlarmGroupsWebHooksList(this, "web_hooks", false);
  public get webHooks() {
    return this._webHooks;
  }
  public putWebHooks(value: WedataOpsAlarmRuleAlarmGroupsWebHooks[] | cdktf.IResolvable) {
    this._webHooks.internalValue = value;
  }
  public resetWebHooks() {
    this._webHooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webHooksInput() {
    return this._webHooks.internalValue;
  }
}

export class WedataOpsAlarmRuleAlarmGroupsList extends cdktf.ComplexList {
  public internalValue? : WedataOpsAlarmRuleAlarmGroups[] | cdktf.IResolvable

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
  public get(index: number): WedataOpsAlarmRuleAlarmGroupsOutputReference {
    return new WedataOpsAlarmRuleAlarmGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo {
  /**
  * Specify the timeout value in hours. The default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#hour WedataOpsAlarmRule#hour}
  */
  readonly hour?: number;
  /**
  * The timeout value is specified in minutes. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#min WedataOpsAlarmRule#min}
  */
  readonly min?: number;
  /**
  * Timeout alarm configuration: 1. Estimated running time exceeded, 2. Estimated completion time exceeded, 3. Estimated waiting time for scheduling exceeded, 4. Estimated completion within the period but not completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#rule_type WedataOpsAlarmRule#rule_type}
  */
  readonly ruleType?: number;
  /**
  * The time zone configuration corresponding to the timeout period, such as UTC+7, the default is UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#schedule_time_zone WedataOpsAlarmRule#schedule_time_zone}
  */
  readonly scheduleTimeZone?: string;
  /**
  * Timeout value configuration type: 1-Specified value; 2-Average value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#type WedataOpsAlarmRule#type}
  */
  readonly type?: number;
}

export function wedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoToTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    min: cdktf.numberToTerraform(struct!.min),
    rule_type: cdktf.numberToTerraform(struct!.ruleType),
    schedule_time_zone: cdktf.stringToTerraform(struct!.scheduleTimeZone),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function wedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoToHclTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.numberToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.scheduleTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._scheduleTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTimeZone = this._scheduleTimeZone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hour = undefined;
      this._min = undefined;
      this._ruleType = undefined;
      this._scheduleTimeZone = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hour = value.hour;
      this._min = value.min;
      this._ruleType = value.ruleType;
      this._scheduleTimeZone = value.scheduleTimeZone;
      this._type = value.type;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: number; 
  public get ruleType() {
    return this.getNumberAttribute('rule_type');
  }
  public set ruleType(value: number) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // schedule_time_zone - computed: false, optional: true, required: false
  private _scheduleTimeZone?: string; 
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }
  public set scheduleTimeZone(value: string) {
    this._scheduleTimeZone = value;
  }
  public resetScheduleTimeZone() {
    this._scheduleTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeZoneInput() {
    return this._scheduleTimeZone;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoList extends cdktf.ComplexList {
  public internalValue? : WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo[] | cdktf.IResolvable

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
  public get(index: number): WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoOutputReference {
    return new WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct {
  /**
  * Alarm type: projectFailureInstanceUpwardFluctuationAlarm: Failure instance upward fluctuation alarm; projectSuccessInstanceDownwardFluctuationAlarm: Success instance downward fluctuation alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#alarm_type WedataOpsAlarmRule#alarm_type}
  */
  readonly alarmType: string;
  /**
  * The cumulative number of instances on the day; the downward fluctuation of the number of failed instances on the day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#instance_count WedataOpsAlarmRule#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * The cumulative instance number fluctuation threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#instance_threshold_count WedataOpsAlarmRule#instance_threshold_count}
  */
  readonly instanceThresholdCount?: number;
  /**
  * The alarm threshold for the proportion of instance successes fluctuating downwards; the alarm threshold for the proportion of instance failures fluctuating upwards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#instance_threshold_count_percent WedataOpsAlarmRule#instance_threshold_count_percent}
  */
  readonly instanceThresholdCountPercent?: number;
  /**
  * Whether to calculate cumulatively, false: continuous, true: cumulative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#is_cumulant WedataOpsAlarmRule#is_cumulant}
  */
  readonly isCumulant?: boolean | cdktf.IResolvable;
  /**
  * Stability statistics period (number of anti-shake configuration statistics periods).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#stabilize_statistics_cycle WedataOpsAlarmRule#stabilize_statistics_cycle}
  */
  readonly stabilizeStatisticsCycle?: number;
  /**
  * Stability threshold (number of statistical cycles for anti-shake configuration).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#stabilize_threshold WedataOpsAlarmRule#stabilize_threshold}
  */
  readonly stabilizeThreshold?: number;
}

export function wedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructToTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_type: cdktf.stringToTerraform(struct!.alarmType),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_threshold_count: cdktf.numberToTerraform(struct!.instanceThresholdCount),
    instance_threshold_count_percent: cdktf.numberToTerraform(struct!.instanceThresholdCountPercent),
    is_cumulant: cdktf.booleanToTerraform(struct!.isCumulant),
    stabilize_statistics_cycle: cdktf.numberToTerraform(struct!.stabilizeStatisticsCycle),
    stabilize_threshold: cdktf.numberToTerraform(struct!.stabilizeThreshold),
  }
}


export function wedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructToHclTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_type: {
      value: cdktf.stringToHclTerraform(struct!.alarmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_threshold_count_percent: {
      value: cdktf.numberToHclTerraform(struct!.instanceThresholdCountPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_cumulant: {
      value: cdktf.booleanToHclTerraform(struct!.isCumulant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stabilize_statistics_cycle: {
      value: cdktf.numberToHclTerraform(struct!.stabilizeStatisticsCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stabilize_threshold: {
      value: cdktf.numberToHclTerraform(struct!.stabilizeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmType = this._alarmType;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceThresholdCount = this._instanceThresholdCount;
    }
    if (this._instanceThresholdCountPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceThresholdCountPercent = this._instanceThresholdCountPercent;
    }
    if (this._isCumulant !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCumulant = this._isCumulant;
    }
    if (this._stabilizeStatisticsCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizeStatisticsCycle = this._stabilizeStatisticsCycle;
    }
    if (this._stabilizeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizeThreshold = this._stabilizeThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmType = undefined;
      this._instanceCount = undefined;
      this._instanceThresholdCount = undefined;
      this._instanceThresholdCountPercent = undefined;
      this._isCumulant = undefined;
      this._stabilizeStatisticsCycle = undefined;
      this._stabilizeThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmType = value.alarmType;
      this._instanceCount = value.instanceCount;
      this._instanceThresholdCount = value.instanceThresholdCount;
      this._instanceThresholdCountPercent = value.instanceThresholdCountPercent;
      this._isCumulant = value.isCumulant;
      this._stabilizeStatisticsCycle = value.stabilizeStatisticsCycle;
      this._stabilizeThreshold = value.stabilizeThreshold;
    }
  }

  // alarm_type - computed: false, optional: false, required: true
  private _alarmType?: string; 
  public get alarmType() {
    return this.getStringAttribute('alarm_type');
  }
  public set alarmType(value: string) {
    this._alarmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTypeInput() {
    return this._alarmType;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_threshold_count - computed: false, optional: true, required: false
  private _instanceThresholdCount?: number; 
  public get instanceThresholdCount() {
    return this.getNumberAttribute('instance_threshold_count');
  }
  public set instanceThresholdCount(value: number) {
    this._instanceThresholdCount = value;
  }
  public resetInstanceThresholdCount() {
    this._instanceThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceThresholdCountInput() {
    return this._instanceThresholdCount;
  }

  // instance_threshold_count_percent - computed: false, optional: true, required: false
  private _instanceThresholdCountPercent?: number; 
  public get instanceThresholdCountPercent() {
    return this.getNumberAttribute('instance_threshold_count_percent');
  }
  public set instanceThresholdCountPercent(value: number) {
    this._instanceThresholdCountPercent = value;
  }
  public resetInstanceThresholdCountPercent() {
    this._instanceThresholdCountPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceThresholdCountPercentInput() {
    return this._instanceThresholdCountPercent;
  }

  // is_cumulant - computed: false, optional: true, required: false
  private _isCumulant?: boolean | cdktf.IResolvable; 
  public get isCumulant() {
    return this.getBooleanAttribute('is_cumulant');
  }
  public set isCumulant(value: boolean | cdktf.IResolvable) {
    this._isCumulant = value;
  }
  public resetIsCumulant() {
    this._isCumulant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCumulantInput() {
    return this._isCumulant;
  }

  // stabilize_statistics_cycle - computed: false, optional: true, required: false
  private _stabilizeStatisticsCycle?: number; 
  public get stabilizeStatisticsCycle() {
    return this.getNumberAttribute('stabilize_statistics_cycle');
  }
  public set stabilizeStatisticsCycle(value: number) {
    this._stabilizeStatisticsCycle = value;
  }
  public resetStabilizeStatisticsCycle() {
    this._stabilizeStatisticsCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizeStatisticsCycleInput() {
    return this._stabilizeStatisticsCycle;
  }

  // stabilize_threshold - computed: false, optional: true, required: false
  private _stabilizeThreshold?: number; 
  public get stabilizeThreshold() {
    return this.getNumberAttribute('stabilize_threshold');
  }
  public set stabilizeThreshold(value: number) {
    this._stabilizeThreshold = value;
  }
  public resetStabilizeThreshold() {
    this._stabilizeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizeThresholdInput() {
    return this._stabilizeThreshold;
  }
}

export class WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructList extends cdktf.ComplexList {
  public internalValue? : WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructOutputReference {
    return new WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfo {
  /**
  * Reconciliation task timeout threshold: hours, default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#hour WedataOpsAlarmRule#hour}
  */
  readonly hour?: number;
  /**
  * Reconciliation task timeout threshold: minutes, default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#min WedataOpsAlarmRule#min}
  */
  readonly min?: number;
  /**
  * Reconciliation inconsistency threshold, RuleType=reconciliationMismatch. This field needs to be configured and has no default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#mismatch_count WedataOpsAlarmRule#mismatch_count}
  */
  readonly mismatchCount?: number;
  /**
  * Offline alarm rule types: reconciliationFailure: Offline reconciliation failure alarm; reconciliationOvertime: Offline reconciliation task timeout alarm (timeout must be configured); reconciliationMismatch: Offline reconciliation mismatch alarm (mismatch threshold must be configured).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#rule_type WedataOpsAlarmRule#rule_type}
  */
  readonly ruleType?: string;
}

export function wedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoToTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    min: cdktf.numberToTerraform(struct!.min),
    mismatch_count: cdktf.numberToTerraform(struct!.mismatchCount),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function wedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoToHclTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatch_count: {
      value: cdktf.numberToHclTerraform(struct!.mismatchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._mismatchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchCount = this._mismatchCount;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hour = undefined;
      this._min = undefined;
      this._mismatchCount = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hour = value.hour;
      this._min = value.min;
      this._mismatchCount = value.mismatchCount;
      this._ruleType = value.ruleType;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // mismatch_count - computed: false, optional: true, required: false
  private _mismatchCount?: number; 
  public get mismatchCount() {
    return this.getNumberAttribute('mismatch_count');
  }
  public set mismatchCount(value: number) {
    this._mismatchCount = value;
  }
  public resetMismatchCount() {
    this._mismatchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchCountInput() {
    return this._mismatchCount;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoList extends cdktf.ComplexList {
  public internalValue? : WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfo[] | cdktf.IResolvable

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
  public get(index: number): WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoOutputReference {
    return new WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfo {
  /**
  * Specify the timeout value in hours. The default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#hour WedataOpsAlarmRule#hour}
  */
  readonly hour?: number;
  /**
  * The timeout value is specified in minutes. The default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#min WedataOpsAlarmRule#min}
  */
  readonly min?: number;
  /**
  * Timeout alarm configuration: 1. Estimated running time exceeded, 2. Estimated completion time exceeded, 3. Estimated waiting time for scheduling exceeded, 4. Estimated completion within the period but not completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#rule_type WedataOpsAlarmRule#rule_type}
  */
  readonly ruleType?: number;
  /**
  * The time zone configuration corresponding to the timeout period, such as UTC+7, the default is UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#schedule_time_zone WedataOpsAlarmRule#schedule_time_zone}
  */
  readonly scheduleTimeZone?: string;
  /**
  * Timeout value configuration type: 1-Specified value; 2-Average value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#type WedataOpsAlarmRule#type}
  */
  readonly type?: number;
}

export function wedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoToTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    min: cdktf.numberToTerraform(struct!.min),
    rule_type: cdktf.numberToTerraform(struct!.ruleType),
    schedule_time_zone: cdktf.stringToTerraform(struct!.scheduleTimeZone),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function wedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoToHclTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.numberToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.scheduleTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._scheduleTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTimeZone = this._scheduleTimeZone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hour = undefined;
      this._min = undefined;
      this._ruleType = undefined;
      this._scheduleTimeZone = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hour = value.hour;
      this._min = value.min;
      this._ruleType = value.ruleType;
      this._scheduleTimeZone = value.scheduleTimeZone;
      this._type = value.type;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: number; 
  public get ruleType() {
    return this.getNumberAttribute('rule_type');
  }
  public set ruleType(value: number) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // schedule_time_zone - computed: false, optional: true, required: false
  private _scheduleTimeZone?: string; 
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }
  public set scheduleTimeZone(value: string) {
    this._scheduleTimeZone = value;
  }
  public resetScheduleTimeZone() {
    this._scheduleTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeZoneInput() {
    return this._scheduleTimeZone;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoList extends cdktf.ComplexList {
  public internalValue? : WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfo[] | cdktf.IResolvable

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
  public get(index: number): WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoOutputReference {
    return new WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataOpsAlarmRuleAlarmRuleDetail {
  /**
  * Re-recording trigger timing: 1 - Triggered by the first failure; 2 - Triggered by completion of all retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#data_backfill_or_rerun_trigger WedataOpsAlarmRule#data_backfill_or_rerun_trigger}
  */
  readonly dataBackfillOrRerunTrigger?: number;
  /**
  * Failure trigger timing: 1 - Triggered on first failure; 2 -- Triggered when all retries complete (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#trigger WedataOpsAlarmRule#trigger}
  */
  readonly trigger?: number;
  /**
  * data_backfill_or_rerun_time_out_ext_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#data_backfill_or_rerun_time_out_ext_info WedataOpsAlarmRule#data_backfill_or_rerun_time_out_ext_info}
  */
  readonly dataBackfillOrRerunTimeOutExtInfo?: WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo[] | cdktf.IResolvable;
  /**
  * project_instance_statistics_alarm_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#project_instance_statistics_alarm_info_list WedataOpsAlarmRule#project_instance_statistics_alarm_info_list}
  */
  readonly projectInstanceStatisticsAlarmInfoList?: WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct[] | cdktf.IResolvable;
  /**
  * reconciliation_ext_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#reconciliation_ext_info WedataOpsAlarmRule#reconciliation_ext_info}
  */
  readonly reconciliationExtInfo?: WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfo[] | cdktf.IResolvable;
  /**
  * time_out_ext_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#time_out_ext_info WedataOpsAlarmRule#time_out_ext_info}
  */
  readonly timeOutExtInfo?: WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfo[] | cdktf.IResolvable;
}

export function wedataOpsAlarmRuleAlarmRuleDetailToTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailOutputReference | WedataOpsAlarmRuleAlarmRuleDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_backfill_or_rerun_trigger: cdktf.numberToTerraform(struct!.dataBackfillOrRerunTrigger),
    trigger: cdktf.numberToTerraform(struct!.trigger),
    data_backfill_or_rerun_time_out_ext_info: cdktf.listMapper(wedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoToTerraform, true)(struct!.dataBackfillOrRerunTimeOutExtInfo),
    project_instance_statistics_alarm_info_list: cdktf.listMapper(wedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructToTerraform, true)(struct!.projectInstanceStatisticsAlarmInfoList),
    reconciliation_ext_info: cdktf.listMapper(wedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoToTerraform, true)(struct!.reconciliationExtInfo),
    time_out_ext_info: cdktf.listMapper(wedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoToTerraform, true)(struct!.timeOutExtInfo),
  }
}


export function wedataOpsAlarmRuleAlarmRuleDetailToHclTerraform(struct?: WedataOpsAlarmRuleAlarmRuleDetailOutputReference | WedataOpsAlarmRuleAlarmRuleDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_backfill_or_rerun_trigger: {
      value: cdktf.numberToHclTerraform(struct!.dataBackfillOrRerunTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger: {
      value: cdktf.numberToHclTerraform(struct!.trigger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_backfill_or_rerun_time_out_ext_info: {
      value: cdktf.listMapperHcl(wedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoToHclTerraform, true)(struct!.dataBackfillOrRerunTimeOutExtInfo),
      isBlock: true,
      type: "list",
      storageClassType: "WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoList",
    },
    project_instance_statistics_alarm_info_list: {
      value: cdktf.listMapperHcl(wedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructToHclTerraform, true)(struct!.projectInstanceStatisticsAlarmInfoList),
      isBlock: true,
      type: "list",
      storageClassType: "WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructList",
    },
    reconciliation_ext_info: {
      value: cdktf.listMapperHcl(wedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoToHclTerraform, true)(struct!.reconciliationExtInfo),
      isBlock: true,
      type: "list",
      storageClassType: "WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoList",
    },
    time_out_ext_info: {
      value: cdktf.listMapperHcl(wedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoToHclTerraform, true)(struct!.timeOutExtInfo),
      isBlock: true,
      type: "list",
      storageClassType: "WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataOpsAlarmRuleAlarmRuleDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataOpsAlarmRuleAlarmRuleDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataBackfillOrRerunTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBackfillOrRerunTrigger = this._dataBackfillOrRerunTrigger;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    if (this._dataBackfillOrRerunTimeOutExtInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBackfillOrRerunTimeOutExtInfo = this._dataBackfillOrRerunTimeOutExtInfo?.internalValue;
    }
    if (this._projectInstanceStatisticsAlarmInfoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectInstanceStatisticsAlarmInfoList = this._projectInstanceStatisticsAlarmInfoList?.internalValue;
    }
    if (this._reconciliationExtInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconciliationExtInfo = this._reconciliationExtInfo?.internalValue;
    }
    if (this._timeOutExtInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOutExtInfo = this._timeOutExtInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataOpsAlarmRuleAlarmRuleDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataBackfillOrRerunTrigger = undefined;
      this._trigger = undefined;
      this._dataBackfillOrRerunTimeOutExtInfo.internalValue = undefined;
      this._projectInstanceStatisticsAlarmInfoList.internalValue = undefined;
      this._reconciliationExtInfo.internalValue = undefined;
      this._timeOutExtInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataBackfillOrRerunTrigger = value.dataBackfillOrRerunTrigger;
      this._trigger = value.trigger;
      this._dataBackfillOrRerunTimeOutExtInfo.internalValue = value.dataBackfillOrRerunTimeOutExtInfo;
      this._projectInstanceStatisticsAlarmInfoList.internalValue = value.projectInstanceStatisticsAlarmInfoList;
      this._reconciliationExtInfo.internalValue = value.reconciliationExtInfo;
      this._timeOutExtInfo.internalValue = value.timeOutExtInfo;
    }
  }

  // data_backfill_or_rerun_trigger - computed: false, optional: true, required: false
  private _dataBackfillOrRerunTrigger?: number; 
  public get dataBackfillOrRerunTrigger() {
    return this.getNumberAttribute('data_backfill_or_rerun_trigger');
  }
  public set dataBackfillOrRerunTrigger(value: number) {
    this._dataBackfillOrRerunTrigger = value;
  }
  public resetDataBackfillOrRerunTrigger() {
    this._dataBackfillOrRerunTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBackfillOrRerunTriggerInput() {
    return this._dataBackfillOrRerunTrigger;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger?: number; 
  public get trigger() {
    return this.getNumberAttribute('trigger');
  }
  public set trigger(value: number) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // data_backfill_or_rerun_time_out_ext_info - computed: false, optional: true, required: false
  private _dataBackfillOrRerunTimeOutExtInfo = new WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoList(this, "data_backfill_or_rerun_time_out_ext_info", false);
  public get dataBackfillOrRerunTimeOutExtInfo() {
    return this._dataBackfillOrRerunTimeOutExtInfo;
  }
  public putDataBackfillOrRerunTimeOutExtInfo(value: WedataOpsAlarmRuleAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo[] | cdktf.IResolvable) {
    this._dataBackfillOrRerunTimeOutExtInfo.internalValue = value;
  }
  public resetDataBackfillOrRerunTimeOutExtInfo() {
    this._dataBackfillOrRerunTimeOutExtInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBackfillOrRerunTimeOutExtInfoInput() {
    return this._dataBackfillOrRerunTimeOutExtInfo.internalValue;
  }

  // project_instance_statistics_alarm_info_list - computed: false, optional: true, required: false
  private _projectInstanceStatisticsAlarmInfoList = new WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructList(this, "project_instance_statistics_alarm_info_list", false);
  public get projectInstanceStatisticsAlarmInfoList() {
    return this._projectInstanceStatisticsAlarmInfoList;
  }
  public putProjectInstanceStatisticsAlarmInfoList(value: WedataOpsAlarmRuleAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct[] | cdktf.IResolvable) {
    this._projectInstanceStatisticsAlarmInfoList.internalValue = value;
  }
  public resetProjectInstanceStatisticsAlarmInfoList() {
    this._projectInstanceStatisticsAlarmInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInstanceStatisticsAlarmInfoListInput() {
    return this._projectInstanceStatisticsAlarmInfoList.internalValue;
  }

  // reconciliation_ext_info - computed: false, optional: true, required: false
  private _reconciliationExtInfo = new WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfoList(this, "reconciliation_ext_info", false);
  public get reconciliationExtInfo() {
    return this._reconciliationExtInfo;
  }
  public putReconciliationExtInfo(value: WedataOpsAlarmRuleAlarmRuleDetailReconciliationExtInfo[] | cdktf.IResolvable) {
    this._reconciliationExtInfo.internalValue = value;
  }
  public resetReconciliationExtInfo() {
    this._reconciliationExtInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconciliationExtInfoInput() {
    return this._reconciliationExtInfo.internalValue;
  }

  // time_out_ext_info - computed: false, optional: true, required: false
  private _timeOutExtInfo = new WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfoList(this, "time_out_ext_info", false);
  public get timeOutExtInfo() {
    return this._timeOutExtInfo;
  }
  public putTimeOutExtInfo(value: WedataOpsAlarmRuleAlarmRuleDetailTimeOutExtInfo[] | cdktf.IResolvable) {
    this._timeOutExtInfo.internalValue = value;
  }
  public resetTimeOutExtInfo() {
    this._timeOutExtInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutExtInfoInput() {
    return this._timeOutExtInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule tencentcloud_wedata_ops_alarm_rule}
*/
export class WedataOpsAlarmRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_ops_alarm_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataOpsAlarmRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataOpsAlarmRule to import
  * @param importFromId The id of the existing WedataOpsAlarmRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataOpsAlarmRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_ops_alarm_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/wedata_ops_alarm_rule tencentcloud_wedata_ops_alarm_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataOpsAlarmRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WedataOpsAlarmRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_ops_alarm_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmLevel = config.alarmLevel;
    this._alarmRuleName = config.alarmRuleName;
    this._alarmTypes = config.alarmTypes;
    this._description = config.description;
    this._id = config.id;
    this._monitorObjectIds = config.monitorObjectIds;
    this._monitorObjectType = config.monitorObjectType;
    this._projectId = config.projectId;
    this._alarmGroups.internalValue = config.alarmGroups;
    this._alarmRuleDetail.internalValue = config.alarmRuleDetail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_level - computed: false, optional: true, required: false
  private _alarmLevel?: number; 
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }
  public set alarmLevel(value: number) {
    this._alarmLevel = value;
  }
  public resetAlarmLevel() {
    this._alarmLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmLevelInput() {
    return this._alarmLevel;
  }

  // alarm_rule_name - computed: false, optional: false, required: true
  private _alarmRuleName?: string; 
  public get alarmRuleName() {
    return this.getStringAttribute('alarm_rule_name');
  }
  public set alarmRuleName(value: string) {
    this._alarmRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRuleNameInput() {
    return this._alarmRuleName;
  }

  // alarm_types - computed: false, optional: false, required: true
  private _alarmTypes?: string[]; 
  public get alarmTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_types'));
  }
  public set alarmTypes(value: string[]) {
    this._alarmTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTypesInput() {
    return this._alarmTypes;
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

  // monitor_object_ids - computed: false, optional: false, required: true
  private _monitorObjectIds?: string[]; 
  public get monitorObjectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_object_ids'));
  }
  public set monitorObjectIds(value: string[]) {
    this._monitorObjectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorObjectIdsInput() {
    return this._monitorObjectIds;
  }

  // monitor_object_type - computed: false, optional: true, required: false
  private _monitorObjectType?: number; 
  public get monitorObjectType() {
    return this.getNumberAttribute('monitor_object_type');
  }
  public set monitorObjectType(value: number) {
    this._monitorObjectType = value;
  }
  public resetMonitorObjectType() {
    this._monitorObjectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorObjectTypeInput() {
    return this._monitorObjectType;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // alarm_groups - computed: false, optional: false, required: true
  private _alarmGroups = new WedataOpsAlarmRuleAlarmGroupsList(this, "alarm_groups", false);
  public get alarmGroups() {
    return this._alarmGroups;
  }
  public putAlarmGroups(value: WedataOpsAlarmRuleAlarmGroups[] | cdktf.IResolvable) {
    this._alarmGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmGroupsInput() {
    return this._alarmGroups.internalValue;
  }

  // alarm_rule_detail - computed: false, optional: true, required: false
  private _alarmRuleDetail = new WedataOpsAlarmRuleAlarmRuleDetailOutputReference(this, "alarm_rule_detail");
  public get alarmRuleDetail() {
    return this._alarmRuleDetail;
  }
  public putAlarmRuleDetail(value: WedataOpsAlarmRuleAlarmRuleDetail) {
    this._alarmRuleDetail.internalValue = value;
  }
  public resetAlarmRuleDetail() {
    this._alarmRuleDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRuleDetailInput() {
    return this._alarmRuleDetail.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_level: cdktf.numberToTerraform(this._alarmLevel),
      alarm_rule_name: cdktf.stringToTerraform(this._alarmRuleName),
      alarm_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alarmTypes),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      monitor_object_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorObjectIds),
      monitor_object_type: cdktf.numberToTerraform(this._monitorObjectType),
      project_id: cdktf.stringToTerraform(this._projectId),
      alarm_groups: cdktf.listMapper(wedataOpsAlarmRuleAlarmGroupsToTerraform, true)(this._alarmGroups.internalValue),
      alarm_rule_detail: wedataOpsAlarmRuleAlarmRuleDetailToTerraform(this._alarmRuleDetail.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_level: {
        value: cdktf.numberToHclTerraform(this._alarmLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alarm_rule_name: {
        value: cdktf.stringToHclTerraform(this._alarmRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alarmTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_object_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorObjectIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      monitor_object_type: {
        value: cdktf.numberToHclTerraform(this._monitorObjectType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_groups: {
        value: cdktf.listMapperHcl(wedataOpsAlarmRuleAlarmGroupsToHclTerraform, true)(this._alarmGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataOpsAlarmRuleAlarmGroupsList",
      },
      alarm_rule_detail: {
        value: wedataOpsAlarmRuleAlarmRuleDetailToHclTerraform(this._alarmRuleDetail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataOpsAlarmRuleAlarmRuleDetailList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
