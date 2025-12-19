// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataOpsAlarmRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alarm level: 1. Normal, 2. Major, 3. Urgent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#alarm_level DataTencentcloudWedataOpsAlarmRules#alarm_level}
  */
  readonly alarmLevel?: number;
  /**
  * Query the alarm rules configured for the corresponding alarm recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#alarm_recipient_id DataTencentcloudWedataOpsAlarmRules#alarm_recipient_id}
  */
  readonly alarmRecipientId?: string;
  /**
  * Alarm Rule Monitoring Types: failure: failure alarm; overtime: timeout alarm; success: success alarm; backTrackingOrRerunSuccess: backTrackingOrRerunSuccess: backTrackingOrRerunFailure: backTrackingOrRerunFailure. Project Fluctuation Alarms: projectFailureInstanceUpwardFluctuationAlarm: alarm if the upward fluctuation rate of failed instances exceeds the threshold. projectSuccessInstanceDownwardFluctuationAlarm: alarm if the downward fluctuation rate of successful instances exceeds the threshold. Offline Integration Task Reconciliation Alarms: reconciliationFailure: offline reconciliation task failure alarm; reconciliationOvertime: offline reconciliation task timeout alarm; reconciliationMismatch: alarm if the number of inconsistent entries in a data reconciliation task exceeds the threshold. Example value: ["failure"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#alarm_type DataTencentcloudWedataOpsAlarmRules#alarm_type}
  */
  readonly alarmType?: string;
  /**
  * The start time of the alarm rule creation time range, in the format of 2025-08-17 00:00:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#create_time_from DataTencentcloudWedataOpsAlarmRules#create_time_from}
  */
  readonly createTimeFrom?: string;
  /**
  * The end time of the alarm rule creation time range, in the format of "2025-08-26 23:59:59".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#create_time_to DataTencentcloudWedataOpsAlarmRules#create_time_to}
  */
  readonly createTimeTo?: string;
  /**
  * Alarm rule creator filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#create_user_uin DataTencentcloudWedataOpsAlarmRules#create_user_uin}
  */
  readonly createUserUin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#id DataTencentcloudWedataOpsAlarmRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Query the corresponding alarm rule based on the alarm rule ID/rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#keyword DataTencentcloudWedataOpsAlarmRules#keyword}
  */
  readonly keyword?: string;
  /**
  * Monitoring object type, Task dimension monitoring: can be configured according to task/workflow/project: 1.Task, 2.Workflow, 3.Project (default is 1.Task) Project dimension monitoring: Project overall task fluctuation alarm, 7: Project fluctuation monitoring alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#monitor_object_type DataTencentcloudWedataOpsAlarmRules#monitor_object_type}
  */
  readonly monitorObjectType?: number;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#project_id DataTencentcloudWedataOpsAlarmRules#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#result_output_file DataTencentcloudWedataOpsAlarmRules#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Query alarm rules based on task ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#task_id DataTencentcloudWedataOpsAlarmRules#task_id}
  */
  readonly taskId?: string;
  /**
  * Last updated time filter alarm rules, format such as "2025-08-26 00:00:00".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#update_time_from DataTencentcloudWedataOpsAlarmRules#update_time_from}
  */
  readonly updateTimeFrom?: string;
  /**
  * Last updated time filter alarm rule format such as: "2025-08-26 23:59:59".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#update_time_to DataTencentcloudWedataOpsAlarmRules#update_time_to}
  */
  readonly updateTimeTo?: string;
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervals {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervalsToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervalsToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_of_week - computed: true, optional: false, required: false
  public get daysOfWeek() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_of_week')));
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervalsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervalsOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigue {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notify_count - computed: true, optional: false, required: false
  public get notifyCount() {
    return this.getNumberAttribute('notify_count');
  }

  // notify_interval - computed: true, optional: false, required: false
  public get notifyInterval() {
    return this.getNumberAttribute('notify_interval');
  }

  // quiet_intervals - computed: true, optional: false, required: false
  private _quietIntervals = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueQuietIntervalsList(this, "quiet_intervals", false);
  public get quietIntervals() {
    return this._quietIntervals;
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooks {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooksToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooksToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_way - computed: true, optional: false, required: false
  public get alarmWay() {
    return this.getStringAttribute('alarm_way');
  }

  // web_hooks - computed: true, optional: false, required: false
  public get webHooks() {
    return cdktf.Fn.tolist(this.getListAttribute('web_hooks'));
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooksOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroups {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_escalation_interval - computed: true, optional: false, required: false
  public get alarmEscalationInterval() {
    return this.getNumberAttribute('alarm_escalation_interval');
  }

  // alarm_escalation_recipient_ids - computed: true, optional: false, required: false
  public get alarmEscalationRecipientIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_escalation_recipient_ids'));
  }

  // alarm_recipient_ids - computed: true, optional: false, required: false
  public get alarmRecipientIds() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_recipient_ids'));
  }

  // alarm_recipient_type - computed: true, optional: false, required: false
  public get alarmRecipientType() {
    return this.getNumberAttribute('alarm_recipient_type');
  }

  // alarm_ways - computed: true, optional: false, required: false
  public get alarmWays() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_ways'));
  }

  // notification_fatigue - computed: true, optional: false, required: false
  private _notificationFatigue = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsNotificationFatigueList(this, "notification_fatigue", false);
  public get notificationFatigue() {
    return this._notificationFatigue;
  }

  // web_hooks - computed: true, optional: false, required: false
  private _webHooks = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsWebHooksList(this, "web_hooks", false);
  public get webHooks() {
    return this._webHooks;
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getNumberAttribute('rule_type');
  }

  // schedule_time_zone - computed: true, optional: false, required: false
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_type - computed: true, optional: false, required: false
  public get alarmType() {
    return this.getStringAttribute('alarm_type');
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // instance_threshold_count - computed: true, optional: false, required: false
  public get instanceThresholdCount() {
    return this.getNumberAttribute('instance_threshold_count');
  }

  // instance_threshold_count_percent - computed: true, optional: false, required: false
  public get instanceThresholdCountPercent() {
    return this.getNumberAttribute('instance_threshold_count_percent');
  }

  // is_cumulant - computed: true, optional: false, required: false
  public get isCumulant() {
    return this.getBooleanAttribute('is_cumulant');
  }

  // stabilize_statistics_cycle - computed: true, optional: false, required: false
  public get stabilizeStatisticsCycle() {
    return this.getNumberAttribute('stabilize_statistics_cycle');
  }

  // stabilize_threshold - computed: true, optional: false, required: false
  public get stabilizeThreshold() {
    return this.getNumberAttribute('stabilize_threshold');
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfo {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfoToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfoToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // mismatch_count - computed: true, optional: false, required: false
  public get mismatchCount() {
    return this.getNumberAttribute('mismatch_count');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfoOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfo {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfoToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfoToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getNumberAttribute('rule_type');
  }

  // schedule_time_zone - computed: true, optional: false, required: false
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfoOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetail {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_backfill_or_rerun_time_out_ext_info - computed: true, optional: false, required: false
  private _dataBackfillOrRerunTimeOutExtInfo = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailDataBackfillOrRerunTimeOutExtInfoList(this, "data_backfill_or_rerun_time_out_ext_info", false);
  public get dataBackfillOrRerunTimeOutExtInfo() {
    return this._dataBackfillOrRerunTimeOutExtInfo;
  }

  // data_backfill_or_rerun_trigger - computed: true, optional: false, required: false
  public get dataBackfillOrRerunTrigger() {
    return this.getNumberAttribute('data_backfill_or_rerun_trigger');
  }

  // project_instance_statistics_alarm_info_list - computed: true, optional: false, required: false
  private _projectInstanceStatisticsAlarmInfoList = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailProjectInstanceStatisticsAlarmInfoListStructList(this, "project_instance_statistics_alarm_info_list", false);
  public get projectInstanceStatisticsAlarmInfoList() {
    return this._projectInstanceStatisticsAlarmInfoList;
  }

  // reconciliation_ext_info - computed: true, optional: false, required: false
  private _reconciliationExtInfo = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailReconciliationExtInfoList(this, "reconciliation_ext_info", false);
  public get reconciliationExtInfo() {
    return this._reconciliationExtInfo;
  }

  // time_out_ext_info - computed: true, optional: false, required: false
  private _timeOutExtInfo = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailTimeOutExtInfoList(this, "time_out_ext_info", false);
  public get timeOutExtInfo() {
    return this._timeOutExtInfo;
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getNumberAttribute('trigger');
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesDataItems {
}

export function dataTencentcloudWedataOpsAlarmRulesDataItemsToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataItemsToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesDataItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesDataItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_groups - computed: true, optional: false, required: false
  private _alarmGroups = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmGroupsList(this, "alarm_groups", false);
  public get alarmGroups() {
    return this._alarmGroups;
  }

  // alarm_level - computed: true, optional: false, required: false
  public get alarmLevel() {
    return this.getNumberAttribute('alarm_level');
  }

  // alarm_rule_detail - computed: true, optional: false, required: false
  private _alarmRuleDetail = new DataTencentcloudWedataOpsAlarmRulesDataItemsAlarmRuleDetailList(this, "alarm_rule_detail", false);
  public get alarmRuleDetail() {
    return this._alarmRuleDetail;
  }

  // alarm_rule_id - computed: true, optional: false, required: false
  public get alarmRuleId() {
    return this.getStringAttribute('alarm_rule_id');
  }

  // alarm_rule_name - computed: true, optional: false, required: false
  public get alarmRuleName() {
    return this.getStringAttribute('alarm_rule_name');
  }

  // alarm_types - computed: true, optional: false, required: false
  public get alarmTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_types'));
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // bundle_info - computed: true, optional: false, required: false
  public get bundleInfo() {
    return this.getStringAttribute('bundle_info');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // monitor_object_ids - computed: true, optional: false, required: false
  public get monitorObjectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_object_ids'));
  }

  // monitor_object_type - computed: true, optional: false, required: false
  public get monitorObjectType() {
    return this.getNumberAttribute('monitor_object_type');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataItemsOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsAlarmRulesData {
}

export function dataTencentcloudWedataOpsAlarmRulesDataToTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsAlarmRulesDataToHclTerraform(struct?: DataTencentcloudWedataOpsAlarmRulesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsAlarmRulesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsAlarmRulesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsAlarmRulesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudWedataOpsAlarmRulesDataItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // page_number - computed: true, optional: false, required: false
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // total_page_number - computed: true, optional: false, required: false
  public get totalPageNumber() {
    return this.getNumberAttribute('total_page_number');
  }
}

export class DataTencentcloudWedataOpsAlarmRulesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsAlarmRulesDataOutputReference {
    return new DataTencentcloudWedataOpsAlarmRulesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules tencentcloud_wedata_ops_alarm_rules}
*/
export class DataTencentcloudWedataOpsAlarmRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_ops_alarm_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataOpsAlarmRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataOpsAlarmRules to import
  * @param importFromId The id of the existing DataTencentcloudWedataOpsAlarmRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataOpsAlarmRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_ops_alarm_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/wedata_ops_alarm_rules tencentcloud_wedata_ops_alarm_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataOpsAlarmRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataOpsAlarmRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_ops_alarm_rules',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._alarmRecipientId = config.alarmRecipientId;
    this._alarmType = config.alarmType;
    this._createTimeFrom = config.createTimeFrom;
    this._createTimeTo = config.createTimeTo;
    this._createUserUin = config.createUserUin;
    this._id = config.id;
    this._keyword = config.keyword;
    this._monitorObjectType = config.monitorObjectType;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._taskId = config.taskId;
    this._updateTimeFrom = config.updateTimeFrom;
    this._updateTimeTo = config.updateTimeTo;
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

  // alarm_recipient_id - computed: false, optional: true, required: false
  private _alarmRecipientId?: string; 
  public get alarmRecipientId() {
    return this.getStringAttribute('alarm_recipient_id');
  }
  public set alarmRecipientId(value: string) {
    this._alarmRecipientId = value;
  }
  public resetAlarmRecipientId() {
    this._alarmRecipientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRecipientIdInput() {
    return this._alarmRecipientId;
  }

  // alarm_type - computed: false, optional: true, required: false
  private _alarmType?: string; 
  public get alarmType() {
    return this.getStringAttribute('alarm_type');
  }
  public set alarmType(value: string) {
    this._alarmType = value;
  }
  public resetAlarmType() {
    this._alarmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmTypeInput() {
    return this._alarmType;
  }

  // create_time_from - computed: false, optional: true, required: false
  private _createTimeFrom?: string; 
  public get createTimeFrom() {
    return this.getStringAttribute('create_time_from');
  }
  public set createTimeFrom(value: string) {
    this._createTimeFrom = value;
  }
  public resetCreateTimeFrom() {
    this._createTimeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeFromInput() {
    return this._createTimeFrom;
  }

  // create_time_to - computed: false, optional: true, required: false
  private _createTimeTo?: string; 
  public get createTimeTo() {
    return this.getStringAttribute('create_time_to');
  }
  public set createTimeTo(value: string) {
    this._createTimeTo = value;
  }
  public resetCreateTimeTo() {
    this._createTimeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeToInput() {
    return this._createTimeTo;
  }

  // create_user_uin - computed: false, optional: true, required: false
  private _createUserUin?: string; 
  public get createUserUin() {
    return this.getStringAttribute('create_user_uin');
  }
  public set createUserUin(value: string) {
    this._createUserUin = value;
  }
  public resetCreateUserUin() {
    this._createUserUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUserUinInput() {
    return this._createUserUin;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataOpsAlarmRulesDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // task_id - computed: false, optional: true, required: false
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  public resetTaskId() {
    this._taskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // update_time_from - computed: false, optional: true, required: false
  private _updateTimeFrom?: string; 
  public get updateTimeFrom() {
    return this.getStringAttribute('update_time_from');
  }
  public set updateTimeFrom(value: string) {
    this._updateTimeFrom = value;
  }
  public resetUpdateTimeFrom() {
    this._updateTimeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeFromInput() {
    return this._updateTimeFrom;
  }

  // update_time_to - computed: false, optional: true, required: false
  private _updateTimeTo?: string; 
  public get updateTimeTo() {
    return this.getStringAttribute('update_time_to');
  }
  public set updateTimeTo(value: string) {
    this._updateTimeTo = value;
  }
  public resetUpdateTimeTo() {
    this._updateTimeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeToInput() {
    return this._updateTimeTo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_level: cdktf.numberToTerraform(this._alarmLevel),
      alarm_recipient_id: cdktf.stringToTerraform(this._alarmRecipientId),
      alarm_type: cdktf.stringToTerraform(this._alarmType),
      create_time_from: cdktf.stringToTerraform(this._createTimeFrom),
      create_time_to: cdktf.stringToTerraform(this._createTimeTo),
      create_user_uin: cdktf.stringToTerraform(this._createUserUin),
      id: cdktf.stringToTerraform(this._id),
      keyword: cdktf.stringToTerraform(this._keyword),
      monitor_object_type: cdktf.numberToTerraform(this._monitorObjectType),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      task_id: cdktf.stringToTerraform(this._taskId),
      update_time_from: cdktf.stringToTerraform(this._updateTimeFrom),
      update_time_to: cdktf.stringToTerraform(this._updateTimeTo),
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
      alarm_recipient_id: {
        value: cdktf.stringToHclTerraform(this._alarmRecipientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_type: {
        value: cdktf.stringToHclTerraform(this._alarmType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time_from: {
        value: cdktf.stringToHclTerraform(this._createTimeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time_to: {
        value: cdktf.stringToHclTerraform(this._createTimeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_user_uin: {
        value: cdktf.stringToHclTerraform(this._createUserUin),
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
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_time_from: {
        value: cdktf.stringToHclTerraform(this._updateTimeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_time_to: {
        value: cdktf.stringToHclTerraform(this._updateTimeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
