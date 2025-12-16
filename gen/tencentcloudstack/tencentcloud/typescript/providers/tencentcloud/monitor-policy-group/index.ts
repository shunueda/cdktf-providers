// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorPolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy group name, length should between 1 and 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#group_name MonitorPolicyGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#id MonitorPolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The and or relation of indicator alarm rule. Valid values: `0`, `1`. `0` represents or rule (if any rule is met, the alarm will be raised), `1` represents and rule (if all rules are met, the alarm will be raised).The default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#is_union_rule MonitorPolicyGroup#is_union_rule}
  */
  readonly isUnionRule?: number;
  /**
  * Policy view name, eg:`cvm_device`,`BANDWIDTHPACKAGE`, refer to `data.tencentcloud_monitor_policy_conditions(policy_view_name)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#policy_view_name MonitorPolicyGroup#policy_view_name}
  */
  readonly policyViewName: string;
  /**
  * The project id to which the policy group belongs, default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#project_id MonitorPolicyGroup#project_id}
  */
  readonly projectId?: number;
  /**
  * Policy group's remark information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#remark MonitorPolicyGroup#remark}
  */
  readonly remark: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#conditions MonitorPolicyGroup#conditions}
  */
  readonly conditions?: MonitorPolicyGroupConditions[] | cdktf.IResolvable;
  /**
  * event_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#event_conditions MonitorPolicyGroup#event_conditions}
  */
  readonly eventConditions?: MonitorPolicyGroupEventConditions[] | cdktf.IResolvable;
}
export interface MonitorPolicyGroupBindingObjects {
}

export function monitorPolicyGroupBindingObjectsToTerraform(struct?: MonitorPolicyGroupBindingObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function monitorPolicyGroupBindingObjectsToHclTerraform(struct?: MonitorPolicyGroupBindingObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MonitorPolicyGroupBindingObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorPolicyGroupBindingObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorPolicyGroupBindingObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions_json - computed: true, optional: false, required: false
  public get dimensionsJson() {
    return this.getStringAttribute('dimensions_json');
  }

  // is_shielded - computed: true, optional: false, required: false
  public get isShielded() {
    return this.getNumberAttribute('is_shielded');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
}

export class MonitorPolicyGroupBindingObjectsList extends cdktf.ComplexList {

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
  public get(index: number): MonitorPolicyGroupBindingObjectsOutputReference {
    return new MonitorPolicyGroupBindingObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorPolicyGroupReceivers {
}

export function monitorPolicyGroupReceiversToTerraform(struct?: MonitorPolicyGroupReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function monitorPolicyGroupReceiversToHclTerraform(struct?: MonitorPolicyGroupReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MonitorPolicyGroupReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorPolicyGroupReceivers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorPolicyGroupReceivers | undefined) {
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
    return this.getListAttribute('notify_way');
  }

  // person_interval - computed: true, optional: false, required: false
  public get personInterval() {
    return this.getNumberAttribute('person_interval');
  }

  // receive_language - computed: true, optional: false, required: false
  public get receiveLanguage() {
    return this.getStringAttribute('receive_language');
  }

  // receiver_group_list - computed: true, optional: false, required: false
  public get receiverGroupList() {
    return this.getNumberListAttribute('receiver_group_list');
  }

  // receiver_type - computed: true, optional: false, required: false
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }

  // receiver_user_list - computed: true, optional: false, required: false
  public get receiverUserList() {
    return this.getNumberListAttribute('receiver_user_list');
  }

  // recover_notify - computed: true, optional: false, required: false
  public get recoverNotify() {
    return this.getListAttribute('recover_notify');
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
    return this.getListAttribute('send_for');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // uid_list - computed: true, optional: false, required: false
  public get uidList() {
    return this.getNumberListAttribute('uid_list');
  }
}

export class MonitorPolicyGroupReceiversList extends cdktf.ComplexList {

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
  public get(index: number): MonitorPolicyGroupReceiversOutputReference {
    return new MonitorPolicyGroupReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorPolicyGroupConditions {
  /**
  * Alarm sending cycle per second. <0 does not fire, `0` only fires once, and >0 fires every triggerTime second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#alarm_notify_period MonitorPolicyGroup#alarm_notify_period}
  */
  readonly alarmNotifyPeriod: number;
  /**
  * Alarm sending convergence type. `0` continuous alarm, `1` index alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#alarm_notify_type MonitorPolicyGroup#alarm_notify_type}
  */
  readonly alarmNotifyType: number;
  /**
  * Data aggregation cycle (unit of second), if the metric has a default value can not be filled, refer to `data.tencentcloud_monitor_policy_conditions(period_keys)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#calc_period MonitorPolicyGroup#calc_period}
  */
  readonly calcPeriod?: number;
  /**
  * Compare type. Valid value ranges: [1~12]. `1` means more than, `2` means greater than or equal, `3` means less than, `4` means less than or equal to, `5` means equal, `6` means not equal, `7` means days rose, `8` means days fell, `9` means weeks rose, `10` means weeks fell, `11` means period rise, `12` means period fell, refer to `data.tencentcloud_monitor_policy_conditions(calc_type_keys)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#calc_type MonitorPolicyGroup#calc_type}
  */
  readonly calcType?: number;
  /**
  * Threshold value, refer to `data.tencentcloud_monitor_policy_conditions(calc_value_*)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#calc_value MonitorPolicyGroup#calc_value}
  */
  readonly calcValue?: number;
  /**
  * The rule triggers an alert that lasts for several detection cycles, refer to `data.tencentcloud_monitor_policy_conditions(period_num_keys)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#continue_period MonitorPolicyGroup#continue_period}
  */
  readonly continuePeriod?: number;
  /**
  * Id of the metric, refer to `data.tencentcloud_monitor_policy_conditions(metric_id)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#metric_id MonitorPolicyGroup#metric_id}
  */
  readonly metricId: number;
}

export function monitorPolicyGroupConditionsToTerraform(struct?: MonitorPolicyGroupConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_notify_period: cdktf.numberToTerraform(struct!.alarmNotifyPeriod),
    alarm_notify_type: cdktf.numberToTerraform(struct!.alarmNotifyType),
    calc_period: cdktf.numberToTerraform(struct!.calcPeriod),
    calc_type: cdktf.numberToTerraform(struct!.calcType),
    calc_value: cdktf.numberToTerraform(struct!.calcValue),
    continue_period: cdktf.numberToTerraform(struct!.continuePeriod),
    metric_id: cdktf.numberToTerraform(struct!.metricId),
  }
}


export function monitorPolicyGroupConditionsToHclTerraform(struct?: MonitorPolicyGroupConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_notify_period: {
      value: cdktf.numberToHclTerraform(struct!.alarmNotifyPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_notify_type: {
      value: cdktf.numberToHclTerraform(struct!.alarmNotifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    calc_period: {
      value: cdktf.numberToHclTerraform(struct!.calcPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    calc_type: {
      value: cdktf.numberToHclTerraform(struct!.calcType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    calc_value: {
      value: cdktf.numberToHclTerraform(struct!.calcValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    continue_period: {
      value: cdktf.numberToHclTerraform(struct!.continuePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_id: {
      value: cdktf.numberToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorPolicyGroupConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorPolicyGroupConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmNotifyPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmNotifyPeriod = this._alarmNotifyPeriod;
    }
    if (this._alarmNotifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmNotifyType = this._alarmNotifyType;
    }
    if (this._calcPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.calcPeriod = this._calcPeriod;
    }
    if (this._calcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.calcType = this._calcType;
    }
    if (this._calcValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calcValue = this._calcValue;
    }
    if (this._continuePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuePeriod = this._continuePeriod;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorPolicyGroupConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmNotifyPeriod = undefined;
      this._alarmNotifyType = undefined;
      this._calcPeriod = undefined;
      this._calcType = undefined;
      this._calcValue = undefined;
      this._continuePeriod = undefined;
      this._metricId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmNotifyPeriod = value.alarmNotifyPeriod;
      this._alarmNotifyType = value.alarmNotifyType;
      this._calcPeriod = value.calcPeriod;
      this._calcType = value.calcType;
      this._calcValue = value.calcValue;
      this._continuePeriod = value.continuePeriod;
      this._metricId = value.metricId;
    }
  }

  // alarm_notify_period - computed: false, optional: false, required: true
  private _alarmNotifyPeriod?: number; 
  public get alarmNotifyPeriod() {
    return this.getNumberAttribute('alarm_notify_period');
  }
  public set alarmNotifyPeriod(value: number) {
    this._alarmNotifyPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNotifyPeriodInput() {
    return this._alarmNotifyPeriod;
  }

  // alarm_notify_type - computed: false, optional: false, required: true
  private _alarmNotifyType?: number; 
  public get alarmNotifyType() {
    return this.getNumberAttribute('alarm_notify_type');
  }
  public set alarmNotifyType(value: number) {
    this._alarmNotifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNotifyTypeInput() {
    return this._alarmNotifyType;
  }

  // calc_period - computed: true, optional: true, required: false
  private _calcPeriod?: number; 
  public get calcPeriod() {
    return this.getNumberAttribute('calc_period');
  }
  public set calcPeriod(value: number) {
    this._calcPeriod = value;
  }
  public resetCalcPeriod() {
    this._calcPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcPeriodInput() {
    return this._calcPeriod;
  }

  // calc_type - computed: true, optional: true, required: false
  private _calcType?: number; 
  public get calcType() {
    return this.getNumberAttribute('calc_type');
  }
  public set calcType(value: number) {
    this._calcType = value;
  }
  public resetCalcType() {
    this._calcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcTypeInput() {
    return this._calcType;
  }

  // calc_value - computed: true, optional: true, required: false
  private _calcValue?: number; 
  public get calcValue() {
    return this.getNumberAttribute('calc_value');
  }
  public set calcValue(value: number) {
    this._calcValue = value;
  }
  public resetCalcValue() {
    this._calcValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcValueInput() {
    return this._calcValue;
  }

  // continue_period - computed: true, optional: true, required: false
  private _continuePeriod?: number; 
  public get continuePeriod() {
    return this.getNumberAttribute('continue_period');
  }
  public set continuePeriod(value: number) {
    this._continuePeriod = value;
  }
  public resetContinuePeriod() {
    this._continuePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuePeriodInput() {
    return this._continuePeriod;
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: number; 
  public get metricId() {
    return this.getNumberAttribute('metric_id');
  }
  public set metricId(value: number) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }
}

export class MonitorPolicyGroupConditionsList extends cdktf.ComplexList {
  public internalValue? : MonitorPolicyGroupConditions[] | cdktf.IResolvable

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
  public get(index: number): MonitorPolicyGroupConditionsOutputReference {
    return new MonitorPolicyGroupConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorPolicyGroupEventConditions {
  /**
  * Alarm sending cycle per second. <0 does not fire, `0` only fires once, and >0 fires every triggerTime second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#alarm_notify_period MonitorPolicyGroup#alarm_notify_period}
  */
  readonly alarmNotifyPeriod: number;
  /**
  * Alarm sending convergence type. `0` continuous alarm, `1` index alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#alarm_notify_type MonitorPolicyGroup#alarm_notify_type}
  */
  readonly alarmNotifyType: number;
  /**
  * The ID of this event metric, refer to `data.tencentcloud_monitor_policy_conditions(event_id).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#event_id MonitorPolicyGroup#event_id}
  */
  readonly eventId: number;
}

export function monitorPolicyGroupEventConditionsToTerraform(struct?: MonitorPolicyGroupEventConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_notify_period: cdktf.numberToTerraform(struct!.alarmNotifyPeriod),
    alarm_notify_type: cdktf.numberToTerraform(struct!.alarmNotifyType),
    event_id: cdktf.numberToTerraform(struct!.eventId),
  }
}


export function monitorPolicyGroupEventConditionsToHclTerraform(struct?: MonitorPolicyGroupEventConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_notify_period: {
      value: cdktf.numberToHclTerraform(struct!.alarmNotifyPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alarm_notify_type: {
      value: cdktf.numberToHclTerraform(struct!.alarmNotifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_id: {
      value: cdktf.numberToHclTerraform(struct!.eventId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorPolicyGroupEventConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorPolicyGroupEventConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmNotifyPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmNotifyPeriod = this._alarmNotifyPeriod;
    }
    if (this._alarmNotifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmNotifyType = this._alarmNotifyType;
    }
    if (this._eventId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventId = this._eventId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorPolicyGroupEventConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmNotifyPeriod = undefined;
      this._alarmNotifyType = undefined;
      this._eventId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmNotifyPeriod = value.alarmNotifyPeriod;
      this._alarmNotifyType = value.alarmNotifyType;
      this._eventId = value.eventId;
    }
  }

  // alarm_notify_period - computed: false, optional: false, required: true
  private _alarmNotifyPeriod?: number; 
  public get alarmNotifyPeriod() {
    return this.getNumberAttribute('alarm_notify_period');
  }
  public set alarmNotifyPeriod(value: number) {
    this._alarmNotifyPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNotifyPeriodInput() {
    return this._alarmNotifyPeriod;
  }

  // alarm_notify_type - computed: false, optional: false, required: true
  private _alarmNotifyType?: number; 
  public get alarmNotifyType() {
    return this.getNumberAttribute('alarm_notify_type');
  }
  public set alarmNotifyType(value: number) {
    this._alarmNotifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNotifyTypeInput() {
    return this._alarmNotifyType;
  }

  // event_id - computed: false, optional: false, required: true
  private _eventId?: number; 
  public get eventId() {
    return this.getNumberAttribute('event_id');
  }
  public set eventId(value: number) {
    this._eventId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventIdInput() {
    return this._eventId;
  }
}

export class MonitorPolicyGroupEventConditionsList extends cdktf.ComplexList {
  public internalValue? : MonitorPolicyGroupEventConditions[] | cdktf.IResolvable

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
  public get(index: number): MonitorPolicyGroupEventConditionsOutputReference {
    return new MonitorPolicyGroupEventConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group tencentcloud_monitor_policy_group}
*/
export class MonitorPolicyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorPolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorPolicyGroup to import
  * @param importFromId The id of the existing MonitorPolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorPolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_policy_group tencentcloud_monitor_policy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorPolicyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorPolicyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_policy_group',
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
    this._groupName = config.groupName;
    this._id = config.id;
    this._isUnionRule = config.isUnionRule;
    this._policyViewName = config.policyViewName;
    this._projectId = config.projectId;
    this._remark = config.remark;
    this._conditions.internalValue = config.conditions;
    this._eventConditions.internalValue = config.eventConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binding_objects - computed: true, optional: false, required: false
  private _bindingObjects = new MonitorPolicyGroupBindingObjectsList(this, "binding_objects", false);
  public get bindingObjects() {
    return this._bindingObjects;
  }

  // dimension_group - computed: true, optional: false, required: false
  public get dimensionGroup() {
    return this.getListAttribute('dimension_group');
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
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

  // is_union_rule - computed: false, optional: true, required: false
  private _isUnionRule?: number; 
  public get isUnionRule() {
    return this.getNumberAttribute('is_union_rule');
  }
  public set isUnionRule(value: number) {
    this._isUnionRule = value;
  }
  public resetIsUnionRule() {
    this._isUnionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnionRuleInput() {
    return this._isUnionRule;
  }

  // last_edit_uin - computed: true, optional: false, required: false
  public get lastEditUin() {
    return this.getStringAttribute('last_edit_uin');
  }

  // policy_view_name - computed: false, optional: false, required: true
  private _policyViewName?: string; 
  public get policyViewName() {
    return this.getStringAttribute('policy_view_name');
  }
  public set policyViewName(value: string) {
    this._policyViewName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyViewNameInput() {
    return this._policyViewName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // receivers - computed: true, optional: false, required: false
  private _receivers = new MonitorPolicyGroupReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // support_regions - computed: true, optional: false, required: false
  public get supportRegions() {
    return this.getListAttribute('support_regions');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new MonitorPolicyGroupConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: MonitorPolicyGroupConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // event_conditions - computed: false, optional: true, required: false
  private _eventConditions = new MonitorPolicyGroupEventConditionsList(this, "event_conditions", false);
  public get eventConditions() {
    return this._eventConditions;
  }
  public putEventConditions(value: MonitorPolicyGroupEventConditions[] | cdktf.IResolvable) {
    this._eventConditions.internalValue = value;
  }
  public resetEventConditions() {
    this._eventConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventConditionsInput() {
    return this._eventConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      is_union_rule: cdktf.numberToTerraform(this._isUnionRule),
      policy_view_name: cdktf.stringToTerraform(this._policyViewName),
      project_id: cdktf.numberToTerraform(this._projectId),
      remark: cdktf.stringToTerraform(this._remark),
      conditions: cdktf.listMapper(monitorPolicyGroupConditionsToTerraform, true)(this._conditions.internalValue),
      event_conditions: cdktf.listMapper(monitorPolicyGroupEventConditionsToTerraform, true)(this._eventConditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      is_union_rule: {
        value: cdktf.numberToHclTerraform(this._isUnionRule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_view_name: {
        value: cdktf.stringToHclTerraform(this._policyViewName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(monitorPolicyGroupConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorPolicyGroupConditionsList",
      },
      event_conditions: {
        value: cdktf.listMapperHcl(monitorPolicyGroupEventConditionsToHclTerraform, true)(this._eventConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorPolicyGroupEventConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
