// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorAlarmConditionsTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter queries based on trigger condition template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#group_id DataTencentcloudMonitorAlarmConditionsTemplate#group_id}
  */
  readonly groupId?: string;
  /**
  * Filter queries based on trigger condition template names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#group_name DataTencentcloudMonitorAlarmConditionsTemplate#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#id DataTencentcloudMonitorAlarmConditionsTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Fixed value, as&amp;amp;#39; monitor &amp;amp;#39;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#module DataTencentcloudMonitorAlarmConditionsTemplate#module}
  */
  readonly module: string;
  /**
  * Specify the sorting method based on the number of binding policies, asc=ascending, desc=descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#policy_count_order DataTencentcloudMonitorAlarmConditionsTemplate#policy_count_order}
  */
  readonly policyCountOrder?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#result_output_file DataTencentcloudMonitorAlarmConditionsTemplate#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Specify the sorting method by update time, asc=ascending, desc=descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#update_time_order DataTencentcloudMonitorAlarmConditionsTemplate#update_time_order}
  */
  readonly updateTimeOrder?: string;
  /**
  * View name, composed of [DescribeAllNamespaces]( https://cloud.tencent.com/document/product/248/48683 )Obtain. For cloud product monitoring, retrieve the QceNamespacesNew. N.ID parameter from the interface, such as cvm_ Device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#view_name DataTencentcloudMonitorAlarmConditionsTemplate#view_name}
  */
  readonly viewName?: string;
}
export interface DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditions {
}

export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditionsToTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditionsToHclTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_notify_period - computed: true, optional: false, required: false
  public get alarmNotifyPeriod() {
    return this.getNumberAttribute('alarm_notify_period');
  }

  // alarm_notify_type - computed: true, optional: false, required: false
  public get alarmNotifyType() {
    return this.getNumberAttribute('alarm_notify_type');
  }

  // calc_type - computed: true, optional: false, required: false
  public get calcType() {
    return this.getStringAttribute('calc_type');
  }

  // calc_value - computed: true, optional: false, required: false
  public get calcValue() {
    return this.getStringAttribute('calc_value');
  }

  // continue_time - computed: true, optional: false, required: false
  public get continueTime() {
    return this.getStringAttribute('continue_time');
  }

  // is_advanced - computed: true, optional: false, required: false
  public get isAdvanced() {
    return this.getNumberAttribute('is_advanced');
  }

  // is_open - computed: true, optional: false, required: false
  public get isOpen() {
    return this.getNumberAttribute('is_open');
  }

  // metric_display_name - computed: true, optional: false, required: false
  public get metricDisplayName() {
    return this.getStringAttribute('metric_display_name');
  }

  // metric_id - computed: true, optional: false, required: false
  public get metricId() {
    return this.getNumberAttribute('metric_id');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditionsOutputReference {
    return new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditions {
}

export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditionsToTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditionsToHclTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_notify_period - computed: true, optional: false, required: false
  public get alarmNotifyPeriod() {
    return this.getStringAttribute('alarm_notify_period');
  }

  // alarm_notify_type - computed: true, optional: false, required: false
  public get alarmNotifyType() {
    return this.getStringAttribute('alarm_notify_type');
  }

  // event_display_name - computed: true, optional: false, required: false
  public get eventDisplayName() {
    return this.getStringAttribute('event_display_name');
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getStringAttribute('event_id');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditionsOutputReference {
    return new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfos {
}

export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfosToTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfosToHclTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // need_send_notice - computed: true, optional: false, required: false
  public get needSendNotice() {
    return this.getNumberAttribute('need_send_notice');
  }

  // notify_way - computed: true, optional: false, required: false
  public get notifyWay() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_way'));
  }

  // person_interval - computed: true, optional: false, required: false
  public get personInterval() {
    return this.getNumberAttribute('person_interval');
  }

  // receiver_group_list - computed: true, optional: false, required: false
  public get receiverGroupList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_group_list')));
  }

  // receiver_type - computed: true, optional: false, required: false
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }

  // receiver_user_list - computed: true, optional: false, required: false
  public get receiverUserList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_user_list')));
  }

  // recover_notify - computed: true, optional: false, required: false
  public get recoverNotify() {
    return cdktf.Fn.tolist(this.getListAttribute('recover_notify'));
  }

  // round_interval - computed: true, optional: false, required: false
  public get roundInterval() {
    return this.getNumberAttribute('round_interval');
  }

  // round_number - computed: true, optional: false, required: false
  public get roundNumber() {
    return this.getNumberAttribute('round_number');
  }

  // send_for - computed: true, optional: false, required: false
  public get sendFor() {
    return cdktf.Fn.tolist(this.getListAttribute('send_for'));
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // uid_list - computed: true, optional: false, required: false
  public get uidList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('uid_list')));
  }
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfosOutputReference {
    return new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroups {
}

export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsToTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsToHclTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_set_default - computed: true, optional: false, required: false
  public get canSetDefault() {
    return this.getBooleanAttribute('can_set_default');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // insert_time - computed: true, optional: false, required: false
  public get insertTime() {
    return this.getNumberAttribute('insert_time');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getNumberAttribute('is_default');
  }

  // is_union_rule - computed: true, optional: false, required: false
  public get isUnionRule() {
    return this.getNumberAttribute('is_union_rule');
  }

  // last_edit_uin - computed: true, optional: false, required: false
  public get lastEditUin() {
    return this.getNumberAttribute('last_edit_uin');
  }

  // no_shielded_instance_count - computed: true, optional: false, required: false
  public get noShieldedInstanceCount() {
    return this.getNumberAttribute('no_shielded_instance_count');
  }

  // parent_group_id - computed: true, optional: false, required: false
  public get parentGroupId() {
    return this.getNumberAttribute('parent_group_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // receiver_infos - computed: true, optional: false, required: false
  private _receiverInfos = new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsReceiverInfosList(this, "receiver_infos", false);
  public get receiverInfos() {
    return this._receiverInfos;
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // total_instance_count - computed: true, optional: false, required: false
  public get totalInstanceCount() {
    return this.getNumberAttribute('total_instance_count');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsOutputReference {
    return new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStruct {
}

export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStructToTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStructToHclTerraform(struct?: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // event_conditions - computed: true, optional: false, required: false
  private _eventConditions = new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListEventConditionsList(this, "event_conditions", false);
  public get eventConditions() {
    return this._eventConditions;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // insert_time - computed: true, optional: false, required: false
  public get insertTime() {
    return this.getNumberAttribute('insert_time');
  }

  // is_union_rule - computed: true, optional: false, required: false
  public get isUnionRule() {
    return this.getNumberAttribute('is_union_rule');
  }

  // last_edit_uin - computed: true, optional: false, required: false
  public get lastEditUin() {
    return this.getNumberAttribute('last_edit_uin');
  }

  // policy_groups - computed: true, optional: false, required: false
  private _policyGroups = new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListPolicyGroupsList(this, "policy_groups", false);
  public get policyGroups() {
    return this._policyGroups;
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
}

export class DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStructOutputReference {
    return new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template tencentcloud_monitor_alarm_conditions_template}
*/
export class DataTencentcloudMonitorAlarmConditionsTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_alarm_conditions_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorAlarmConditionsTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorAlarmConditionsTemplate to import
  * @param importFromId The id of the existing DataTencentcloudMonitorAlarmConditionsTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorAlarmConditionsTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_alarm_conditions_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/monitor_alarm_conditions_template tencentcloud_monitor_alarm_conditions_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorAlarmConditionsTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorAlarmConditionsTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_alarm_conditions_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._id = config.id;
    this._module = config.module;
    this._policyCountOrder = config.policyCountOrder;
    this._resultOutputFile = config.resultOutputFile;
    this._updateTimeOrder = config.updateTimeOrder;
    this._viewName = config.viewName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // module - computed: false, optional: false, required: true
  private _module?: string; 
  public get module() {
    return this.getStringAttribute('module');
  }
  public set module(value: string) {
    this._module = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // policy_count_order - computed: false, optional: true, required: false
  private _policyCountOrder?: string; 
  public get policyCountOrder() {
    return this.getStringAttribute('policy_count_order');
  }
  public set policyCountOrder(value: string) {
    this._policyCountOrder = value;
  }
  public resetPolicyCountOrder() {
    this._policyCountOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyCountOrderInput() {
    return this._policyCountOrder;
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

  // template_group_list - computed: true, optional: false, required: false
  private _templateGroupList = new DataTencentcloudMonitorAlarmConditionsTemplateTemplateGroupListStructList(this, "template_group_list", false);
  public get templateGroupList() {
    return this._templateGroupList;
  }

  // update_time_order - computed: false, optional: true, required: false
  private _updateTimeOrder?: string; 
  public get updateTimeOrder() {
    return this.getStringAttribute('update_time_order');
  }
  public set updateTimeOrder(value: string) {
    this._updateTimeOrder = value;
  }
  public resetUpdateTimeOrder() {
    this._updateTimeOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeOrderInput() {
    return this._updateTimeOrder;
  }

  // view_name - computed: false, optional: true, required: false
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  public resetViewName() {
    this._viewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      module: cdktf.stringToTerraform(this._module),
      policy_count_order: cdktf.stringToTerraform(this._policyCountOrder),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      update_time_order: cdktf.stringToTerraform(this._updateTimeOrder),
      view_name: cdktf.stringToTerraform(this._viewName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      module: {
        value: cdktf.stringToHclTerraform(this._module),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_count_order: {
        value: cdktf.stringToHclTerraform(this._policyCountOrder),
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
      update_time_order: {
        value: cdktf.stringToHclTerraform(this._updateTimeOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_name: {
        value: cdktf.stringToHclTerraform(this._viewName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
