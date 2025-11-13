// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorAlarmPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The alarm object list, which is a JSON string. The outer array corresponds to multiple instances, and the inner array is the dimension of an object.For example, 'CVM - Basic Monitor' can be written as: [ {Dimensions: {unInstanceId: ins-qr8d555g}}, {Dimensions: {unInstanceId: ins-qr8d555h}} ]You can also refer to the 'Example 2' below.For more information on the parameter samples of different Tencent Cloud services, see [Product Policy Type and Dimension Information](https://www.tencentcloud.com/document/product/248/39565?has_map=1).Note: If 1 is passed in for NeedCorrespondence, the relationship between a policy and an instance needs to be returned. You can pass in up to 20 alarm object dimensions to avoid request timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#dimensions DataTencentcloudMonitorAlarmPolicy#dimensions}
  */
  readonly dimensions?: string;
  /**
  * Filter by alarm status. Valid values: [1]: enabled; [0]: disabled; [0, 1]: all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#enable DataTencentcloudMonitorAlarmPolicy#enable}
  */
  readonly enable?: number[];
  /**
  * Sort by field. For example, to sort by the last modification time, use Field: UpdateTime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#field DataTencentcloudMonitorAlarmPolicy#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#id DataTencentcloudMonitorAlarmPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#instance_group_id DataTencentcloudMonitorAlarmPolicy#instance_group_id}
  */
  readonly instanceGroupId?: number;
  /**
  * Value fixed at monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#module DataTencentcloudMonitorAlarmPolicy#module}
  */
  readonly module: string;
  /**
  * Filter by monitor type. Valid values: MT_QCE (Tencent Cloud service monitoring). If this parameter is left empty, all will be queried by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#monitor_types DataTencentcloudMonitorAlarmPolicy#monitor_types}
  */
  readonly monitorTypes?: string[];
  /**
  * Filter by namespace. For the values of different policy types, please see:[Poicy Type List](https://www.tencentcloud.com/document/product/248/39565?has_map=1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#namespaces DataTencentcloudMonitorAlarmPolicy#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Whether the relationship between a policy and the input parameter filter dimension is required. 1: Yes. 0: No. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#need_correspondence DataTencentcloudMonitorAlarmPolicy#need_correspondence}
  */
  readonly needCorrespondence?: number;
  /**
  * Whether the returned result needs to filter policies associated with all objects. Valid values: 1 (Yes), 0 (No).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#not_bind_all DataTencentcloudMonitorAlarmPolicy#not_bind_all}
  */
  readonly notBindAll?: number;
  /**
  * If 1 is passed in, alarm policies with no notification rules configured are queried. If it is left empty or other values are passed in, all alarm policies are queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#not_binding_notice_rule DataTencentcloudMonitorAlarmPolicy#not_binding_notice_rule}
  */
  readonly notBindingNoticeRule?: number;
  /**
  * Whether the returned result needs to filter policies associated with instance groups. Valid values: 1 (Yes), 0 (No).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#not_instance_group DataTencentcloudMonitorAlarmPolicy#not_instance_group}
  */
  readonly notInstanceGroup?: number;
  /**
  * List of the notification template IDs, which can be obtained by querying the notification template list.It can be queried with the API [DescribeAlarmNotices](https://www.tencentcloud.com/document/product/248/39300).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#notice_ids DataTencentcloudMonitorAlarmPolicy#notice_ids}
  */
  readonly noticeIds?: string[];
  /**
  * Filter by quick alarm policy. If this parameter is left empty, all policies are displayed. ONECLICK: Display quick alarm policies; NOT_ONECLICK: Display non-quick alarm policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#one_click_policy_type DataTencentcloudMonitorAlarmPolicy#one_click_policy_type}
  */
  readonly oneClickPolicyType?: string[];
  /**
  * Sort order. Valid values: ASC (ascending), DESC (descending).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#order DataTencentcloudMonitorAlarmPolicy#order}
  */
  readonly order?: string;
  /**
  * Fuzzy search by policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#policy_name DataTencentcloudMonitorAlarmPolicy#policy_name}
  */
  readonly policyName?: string;
  /**
  * Filter by default policy. Valid values: DEFAULT (display default policy), NOT_DEFAULT (display non-default policies). If this parameter is left empty, all policies will be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#policy_type DataTencentcloudMonitorAlarmPolicy#policy_type}
  */
  readonly policyType?: string[];
  /**
  * ID array of the policy project, which can be viewed on the following page: [Project Management](https://console.tencentcloud.com/project).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#project_ids DataTencentcloudMonitorAlarmPolicy#project_ids}
  */
  readonly projectIds?: number[];
  /**
  * ID of the TencentCloud Managed Service for Prometheus instance, which is used for customizing a metric policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#prom_ins_id DataTencentcloudMonitorAlarmPolicy#prom_ins_id}
  */
  readonly promInsId?: string;
  /**
  * Search by recipient group. You can get the user group list with the API [ListGroups](https://www.tencentcloud.com/document/product/598/34589?from_cn_redirect=1) in 'Cloud Access Management' or query the user group list where a sub-user is in with the API [ListGroupsForUser](https://www.tencentcloud.com/document/product/598/34588?from_cn_redirect=1). The GroupId field in the returned result should be entered here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#receiver_groups DataTencentcloudMonitorAlarmPolicy#receiver_groups}
  */
  readonly receiverGroups?: number[];
  /**
  * Search by schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#receiver_on_call_form_ids DataTencentcloudMonitorAlarmPolicy#receiver_on_call_form_ids}
  */
  readonly receiverOnCallFormIds?: string[];
  /**
  * Search by recipient. You can get the user list with the API [ListUsers](https://www.tencentcloud.com/document/product/598/34587?from_cn_redirect=1) in 'Cloud Access Management' or query the sub-user information with the API [GetUser](https://www.tencentcloud.com/document/product/598/34590?from_cn_redirect=1). The Uid field in the returned result should be entered here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#receiver_uids DataTencentcloudMonitorAlarmPolicy#receiver_uids}
  */
  readonly receiverUids?: number[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#result_output_file DataTencentcloudMonitorAlarmPolicy#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter by trigger condition. Valid values: STATIC (display policies with static threshold), DYNAMIC (display policies with dynamic threshold). If this parameter is left empty, all policies will be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#rule_types DataTencentcloudMonitorAlarmPolicy#rule_types}
  */
  readonly ruleTypes?: string[];
  /**
  * trigger_tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#trigger_tasks DataTencentcloudMonitorAlarmPolicy#trigger_tasks}
  */
  readonly triggerTasks?: DataTencentcloudMonitorAlarmPolicyTriggerTasks[] | cdktf.IResolvable;
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilter {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilterToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilterToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilterOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValue {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValueToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValueToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remind - computed: true, optional: false, required: false
  public get remind() {
    return this.getStringAttribute('remind');
  }

  // serious - computed: true, optional: false, required: false
  public get serious() {
    return this.getStringAttribute('serious');
  }

  // warn - computed: true, optional: false, required: false
  public get warn() {
    return this.getStringAttribute('warn');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValueList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValueOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionRules {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continue_period - computed: true, optional: false, required: false
  public get continuePeriod() {
    return this.getNumberAttribute('continue_period');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // hierarchical_value - computed: true, optional: false, required: false
  private _hierarchicalValue = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesHierarchicalValueList(this, "hierarchical_value", false);
  public get hierarchicalValue() {
    return this._hierarchicalValue;
  }

  // is_advanced - computed: true, optional: false, required: false
  public get isAdvanced() {
    return this.getNumberAttribute('is_advanced');
  }

  // is_open - computed: true, optional: false, required: false
  public get isOpen() {
    return this.getNumberAttribute('is_open');
  }

  // is_power_notice - computed: true, optional: false, required: false
  public get isPowerNotice() {
    return this.getNumberAttribute('is_power_notice');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // notice_frequency - computed: true, optional: false, required: false
  public get noticeFrequency() {
    return this.getNumberAttribute('notice_frequency');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_max - computed: true, optional: false, required: false
  public get valueMax() {
    return this.getNumberAttribute('value_max');
  }

  // value_min - computed: true, optional: false, required: false
  public get valueMin() {
    return this.getNumberAttribute('value_min');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesCondition {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // complex_expression - computed: true, optional: false, required: false
  public get complexExpression() {
    return this.getStringAttribute('complex_expression');
  }

  // is_union_rule - computed: true, optional: false, required: false
  public get isUnionRule() {
    return this.getNumberAttribute('is_union_rule');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilter {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilterToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilterToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilterOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValue {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValueToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValueToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remind - computed: true, optional: false, required: false
  public get remind() {
    return this.getStringAttribute('remind');
  }

  // serious - computed: true, optional: false, required: false
  public get serious() {
    return this.getStringAttribute('serious');
  }

  // warn - computed: true, optional: false, required: false
  public get warn() {
    return this.getStringAttribute('warn');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValueList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValueOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRules {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continue_period - computed: true, optional: false, required: false
  public get continuePeriod() {
    return this.getNumberAttribute('continue_period');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // hierarchical_value - computed: true, optional: false, required: false
  private _hierarchicalValue = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesHierarchicalValueList(this, "hierarchical_value", false);
  public get hierarchicalValue() {
    return this._hierarchicalValue;
  }

  // is_advanced - computed: true, optional: false, required: false
  public get isAdvanced() {
    return this.getNumberAttribute('is_advanced');
  }

  // is_open - computed: true, optional: false, required: false
  public get isOpen() {
    return this.getNumberAttribute('is_open');
  }

  // is_power_notice - computed: true, optional: false, required: false
  public get isPowerNotice() {
    return this.getNumberAttribute('is_power_notice');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // notice_frequency - computed: true, optional: false, required: false
  public get noticeFrequency() {
    return this.getNumberAttribute('notice_frequency');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_max - computed: true, optional: false, required: false
  public get valueMax() {
    return this.getNumberAttribute('value_max');
  }

  // value_min - computed: true, optional: false, required: false
  public get valueMin() {
    return this.getNumberAttribute('value_min');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempCondition {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // complex_expression - computed: true, optional: false, required: false
  public get complexExpression() {
    return this.getStringAttribute('complex_expression');
  }

  // is_union_rule - computed: true, optional: false, required: false
  public get isUnionRule() {
    return this.getNumberAttribute('is_union_rule');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilter {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilterToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilterToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilterOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValue {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValueToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValueToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remind - computed: true, optional: false, required: false
  public get remind() {
    return this.getStringAttribute('remind');
  }

  // serious - computed: true, optional: false, required: false
  public get serious() {
    return this.getStringAttribute('serious');
  }

  // warn - computed: true, optional: false, required: false
  public get warn() {
    return this.getStringAttribute('warn');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValueList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValueOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRules {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continue_period - computed: true, optional: false, required: false
  public get continuePeriod() {
    return this.getNumberAttribute('continue_period');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // hierarchical_value - computed: true, optional: false, required: false
  private _hierarchicalValue = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesHierarchicalValueList(this, "hierarchical_value", false);
  public get hierarchicalValue() {
    return this._hierarchicalValue;
  }

  // is_advanced - computed: true, optional: false, required: false
  public get isAdvanced() {
    return this.getNumberAttribute('is_advanced');
  }

  // is_open - computed: true, optional: false, required: false
  public get isOpen() {
    return this.getNumberAttribute('is_open');
  }

  // is_power_notice - computed: true, optional: false, required: false
  public get isPowerNotice() {
    return this.getNumberAttribute('is_power_notice');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // notice_frequency - computed: true, optional: false, required: false
  public get noticeFrequency() {
    return this.getNumberAttribute('notice_frequency');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_max - computed: true, optional: false, required: false
  public get valueMax() {
    return this.getNumberAttribute('value_max');
  }

  // value_min - computed: true, optional: false, required: false
  public get valueMin() {
    return this.getNumberAttribute('value_min');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventCondition {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTemp {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTemp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTemp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTemp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTemp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // event_condition - computed: true, optional: false, required: false
  private _eventCondition = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempEventConditionList(this, "event_condition", false);
  public get eventCondition() {
    return this._eventCondition;
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilter {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilterToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilterToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilterOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValue {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValueToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValueToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remind - computed: true, optional: false, required: false
  public get remind() {
    return this.getStringAttribute('remind');
  }

  // serious - computed: true, optional: false, required: false
  public get serious() {
    return this.getStringAttribute('serious');
  }

  // warn - computed: true, optional: false, required: false
  public get warn() {
    return this.getStringAttribute('warn');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValueList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValueOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRules {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continue_period - computed: true, optional: false, required: false
  public get continuePeriod() {
    return this.getNumberAttribute('continue_period');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }

  // hierarchical_value - computed: true, optional: false, required: false
  private _hierarchicalValue = new DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesHierarchicalValueList(this, "hierarchical_value", false);
  public get hierarchicalValue() {
    return this._hierarchicalValue;
  }

  // is_advanced - computed: true, optional: false, required: false
  public get isAdvanced() {
    return this.getNumberAttribute('is_advanced');
  }

  // is_open - computed: true, optional: false, required: false
  public get isOpen() {
    return this.getNumberAttribute('is_open');
  }

  // is_power_notice - computed: true, optional: false, required: false
  public get isPowerNotice() {
    return this.getNumberAttribute('is_power_notice');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // notice_frequency - computed: true, optional: false, required: false
  public get noticeFrequency() {
    return this.getNumberAttribute('notice_frequency');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_max - computed: true, optional: false, required: false
  public get valueMax() {
    return this.getNumberAttribute('value_max');
  }

  // value_min - computed: true, optional: false, required: false
  public get valueMin() {
    return this.getNumberAttribute('value_min');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesEventCondition {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesEventConditionToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesEventCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesEventConditionToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesEventCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesEventCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesEventCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNotices {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNoticesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNoticesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNotices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNotices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getNumberAttribute('enable');
  }

  // log_set_id - computed: true, optional: false, required: false
  public get logSetId() {
    return this.getStringAttribute('log_set_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNoticesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNoticesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTags {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesTagsToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesTagsToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTagsOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNotices {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNoticesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNoticesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNotices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNotices | undefined) {
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

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getNumberAttribute('is_valid');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // validation_code - computed: true, optional: false, required: false
  public get validationCode() {
    return this.getStringAttribute('validation_code');
  }

  // weekday - computed: true, optional: false, required: false
  public get weekday() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weekday')));
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNoticesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNoticesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNotices {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNoticesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNoticesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNotices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNotices | undefined) {
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

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('group_ids')));
  }

  // need_phone_arrive_notice - computed: true, optional: false, required: false
  public get needPhoneArriveNotice() {
    return this.getNumberAttribute('need_phone_arrive_notice');
  }

  // notice_way - computed: true, optional: false, required: false
  public get noticeWay() {
    return cdktf.Fn.tolist(this.getListAttribute('notice_way'));
  }

  // on_call_form_ids - computed: true, optional: false, required: false
  public get onCallFormIds() {
    return cdktf.Fn.tolist(this.getListAttribute('on_call_form_ids'));
  }

  // phone_call_type - computed: true, optional: false, required: false
  public get phoneCallType() {
    return this.getStringAttribute('phone_call_type');
  }

  // phone_circle_interval - computed: true, optional: false, required: false
  public get phoneCircleInterval() {
    return this.getNumberAttribute('phone_circle_interval');
  }

  // phone_circle_times - computed: true, optional: false, required: false
  public get phoneCircleTimes() {
    return this.getNumberAttribute('phone_circle_times');
  }

  // phone_inner_interval - computed: true, optional: false, required: false
  public get phoneInnerInterval() {
    return this.getNumberAttribute('phone_inner_interval');
  }

  // phone_order - computed: true, optional: false, required: false
  public get phoneOrder() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('phone_order')));
  }

  // receiver_type - computed: true, optional: false, required: false
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_ids')));
  }

  // weekday - computed: true, optional: false, required: false
  public get weekday() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weekday')));
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNoticesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNoticesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesNotices {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesNoticesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesNotices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesNotices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesNotices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amp_consumer_id - computed: true, optional: false, required: false
  public get ampConsumerId() {
    return this.getStringAttribute('amp_consumer_id');
  }

  // cls_notices - computed: true, optional: false, required: false
  private _clsNotices = new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesClsNoticesList(this, "cls_notices", false);
  public get clsNotices() {
    return this._clsNotices;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_preset - computed: true, optional: false, required: false
  public get isPreset() {
    return this.getNumberAttribute('is_preset');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notice_language - computed: true, optional: false, required: false
  public get noticeLanguage() {
    return this.getStringAttribute('notice_language');
  }

  // notice_type - computed: true, optional: false, required: false
  public get noticeType() {
    return this.getStringAttribute('notice_type');
  }

  // policy_ids - computed: true, optional: false, required: false
  public get policyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_ids'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // url_notices - computed: true, optional: false, required: false
  private _urlNotices = new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUrlNoticesList(this, "url_notices", false);
  public get urlNotices() {
    return this._urlNotices;
  }

  // user_notices - computed: true, optional: false, required: false
  private _userNotices = new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesUserNoticesList(this, "user_notices", false);
  public get userNotices() {
    return this._userNotices;
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesNoticesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesNoticesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesTagInstances {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesTagInstancesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesTagInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesTagInstancesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesTagInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesTagInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesTagInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesTagInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding_status - computed: true, optional: false, required: false
  public get bindingStatus() {
    return this.getNumberAttribute('binding_status');
  }

  // instance_sum - computed: true, optional: false, required: false
  public get instanceSum() {
    return this.getNumberAttribute('instance_sum');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // tag_status - computed: true, optional: false, required: false
  public get tagStatus() {
    return this.getNumberAttribute('tag_status');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesTagInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesTagInstancesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesTagInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesTags {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesTagsToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesTagsToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesTagsOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasks {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasksToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasksToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_config - computed: true, optional: false, required: false
  public get taskConfig() {
    return this.getStringAttribute('task_config');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasksOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyPolicies {
}

export function dataTencentcloudMonitorAlarmPolicyPoliciesToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorAlarmPolicyPoliciesToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_metric_number - computed: true, optional: false, required: false
  public get advancedMetricNumber() {
    return this.getNumberAttribute('advanced_metric_number');
  }

  // can_set_default - computed: true, optional: false, required: false
  public get canSetDefault() {
    return this.getNumberAttribute('can_set_default');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // condition_template_id - computed: true, optional: false, required: false
  public get conditionTemplateId() {
    return this.getStringAttribute('condition_template_id');
  }

  // conditions_temp - computed: true, optional: false, required: false
  private _conditionsTemp = new DataTencentcloudMonitorAlarmPolicyPoliciesConditionsTempList(this, "conditions_temp", false);
  public get conditionsTemp() {
    return this._conditionsTemp;
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getNumberAttribute('enable');
  }

  // event_condition - computed: true, optional: false, required: false
  private _eventCondition = new DataTencentcloudMonitorAlarmPolicyPoliciesEventConditionList(this, "event_condition", false);
  public get eventCondition() {
    return this._eventCondition;
  }

  // filter_dimensions_param - computed: true, optional: false, required: false
  public get filterDimensionsParam() {
    return this.getStringAttribute('filter_dimensions_param');
  }

  // insert_time - computed: true, optional: false, required: false
  public get insertTime() {
    return this.getNumberAttribute('insert_time');
  }

  // instance_group_id - computed: true, optional: false, required: false
  public get instanceGroupId() {
    return this.getNumberAttribute('instance_group_id');
  }

  // instance_group_name - computed: true, optional: false, required: false
  public get instanceGroupName() {
    return this.getStringAttribute('instance_group_name');
  }

  // instance_sum - computed: true, optional: false, required: false
  public get instanceSum() {
    return this.getNumberAttribute('instance_sum');
  }

  // is_bind_all - computed: true, optional: false, required: false
  public get isBindAll() {
    return this.getNumberAttribute('is_bind_all');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getNumberAttribute('is_default');
  }

  // is_one_click - computed: true, optional: false, required: false
  public get isOneClick() {
    return this.getNumberAttribute('is_one_click');
  }

  // last_edit_uin - computed: true, optional: false, required: false
  public get lastEditUin() {
    return this.getStringAttribute('last_edit_uin');
  }

  // monitor_type - computed: true, optional: false, required: false
  public get monitorType() {
    return this.getStringAttribute('monitor_type');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // namespace_show_name - computed: true, optional: false, required: false
  public get namespaceShowName() {
    return this.getStringAttribute('namespace_show_name');
  }

  // notice_ids - computed: true, optional: false, required: false
  public get noticeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('notice_ids'));
  }

  // notices - computed: true, optional: false, required: false
  private _notices = new DataTencentcloudMonitorAlarmPolicyPoliciesNoticesList(this, "notices", false);
  public get notices() {
    return this._notices;
  }

  // one_click_status - computed: true, optional: false, required: false
  public get oneClickStatus() {
    return this.getNumberAttribute('one_click_status');
  }

  // origin_id - computed: true, optional: false, required: false
  public get originId() {
    return this.getStringAttribute('origin_id');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return cdktf.Fn.tolist(this.getListAttribute('region'));
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // tag_instances - computed: true, optional: false, required: false
  private _tagInstances = new DataTencentcloudMonitorAlarmPolicyPoliciesTagInstancesList(this, "tag_instances", false);
  public get tagInstances() {
    return this._tagInstances;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudMonitorAlarmPolicyPoliciesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // trigger_tasks - computed: true, optional: false, required: false
  private _triggerTasks = new DataTencentcloudMonitorAlarmPolicyPoliciesTriggerTasksList(this, "trigger_tasks", false);
  public get triggerTasks() {
    return this._triggerTasks;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // use_sum - computed: true, optional: false, required: false
  public get useSum() {
    return this.getNumberAttribute('use_sum');
  }
}

export class DataTencentcloudMonitorAlarmPolicyPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyPoliciesOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorAlarmPolicyTriggerTasks {
  /**
  * Configuration information in JSON format, such as {Key1:Value1,Key2:Value2}Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#task_config DataTencentcloudMonitorAlarmPolicy#task_config}
  */
  readonly taskConfig: string;
  /**
  * Triggered task type. Valid value: AS (auto scaling)Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#type DataTencentcloudMonitorAlarmPolicy#type}
  */
  readonly type: string;
}

export function dataTencentcloudMonitorAlarmPolicyTriggerTasksToTerraform(struct?: DataTencentcloudMonitorAlarmPolicyTriggerTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task_config: cdktf.stringToTerraform(struct!.taskConfig),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataTencentcloudMonitorAlarmPolicyTriggerTasksToHclTerraform(struct?: DataTencentcloudMonitorAlarmPolicyTriggerTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task_config: {
      value: cdktf.stringToHclTerraform(struct!.taskConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataTencentcloudMonitorAlarmPolicyTriggerTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorAlarmPolicyTriggerTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskConfig = this._taskConfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorAlarmPolicyTriggerTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taskConfig = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taskConfig = value.taskConfig;
      this._type = value.type;
    }
  }

  // task_config - computed: false, optional: false, required: true
  private _taskConfig?: string; 
  public get taskConfig() {
    return this.getStringAttribute('task_config');
  }
  public set taskConfig(value: string) {
    this._taskConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskConfigInput() {
    return this._taskConfig;
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

export class DataTencentcloudMonitorAlarmPolicyTriggerTasksList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudMonitorAlarmPolicyTriggerTasks[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudMonitorAlarmPolicyTriggerTasksOutputReference {
    return new DataTencentcloudMonitorAlarmPolicyTriggerTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy tencentcloud_monitor_alarm_policy}
*/
export class DataTencentcloudMonitorAlarmPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_alarm_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorAlarmPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorAlarmPolicy to import
  * @param importFromId The id of the existing DataTencentcloudMonitorAlarmPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorAlarmPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_alarm_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/monitor_alarm_policy tencentcloud_monitor_alarm_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorAlarmPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorAlarmPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_alarm_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dimensions = config.dimensions;
    this._enable = config.enable;
    this._field = config.field;
    this._id = config.id;
    this._instanceGroupId = config.instanceGroupId;
    this._module = config.module;
    this._monitorTypes = config.monitorTypes;
    this._namespaces = config.namespaces;
    this._needCorrespondence = config.needCorrespondence;
    this._notBindAll = config.notBindAll;
    this._notBindingNoticeRule = config.notBindingNoticeRule;
    this._notInstanceGroup = config.notInstanceGroup;
    this._noticeIds = config.noticeIds;
    this._oneClickPolicyType = config.oneClickPolicyType;
    this._order = config.order;
    this._policyName = config.policyName;
    this._policyType = config.policyType;
    this._projectIds = config.projectIds;
    this._promInsId = config.promInsId;
    this._receiverGroups = config.receiverGroups;
    this._receiverOnCallFormIds = config.receiverOnCallFormIds;
    this._receiverUids = config.receiverUids;
    this._resultOutputFile = config.resultOutputFile;
    this._ruleTypes = config.ruleTypes;
    this._triggerTasks.internalValue = config.triggerTasks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string; 
  public get dimensions() {
    return this.getStringAttribute('dimensions');
  }
  public set dimensions(value: string) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number[]; 
  public get enable() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('enable')));
  }
  public set enable(value: number[]) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // instance_group_id - computed: false, optional: true, required: false
  private _instanceGroupId?: number; 
  public get instanceGroupId() {
    return this.getNumberAttribute('instance_group_id');
  }
  public set instanceGroupId(value: number) {
    this._instanceGroupId = value;
  }
  public resetInstanceGroupId() {
    this._instanceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupIdInput() {
    return this._instanceGroupId;
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

  // monitor_types - computed: false, optional: true, required: false
  private _monitorTypes?: string[]; 
  public get monitorTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_types'));
  }
  public set monitorTypes(value: string[]) {
    this._monitorTypes = value;
  }
  public resetMonitorTypes() {
    this._monitorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTypesInput() {
    return this._monitorTypes;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // need_correspondence - computed: false, optional: true, required: false
  private _needCorrespondence?: number; 
  public get needCorrespondence() {
    return this.getNumberAttribute('need_correspondence');
  }
  public set needCorrespondence(value: number) {
    this._needCorrespondence = value;
  }
  public resetNeedCorrespondence() {
    this._needCorrespondence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needCorrespondenceInput() {
    return this._needCorrespondence;
  }

  // not_bind_all - computed: false, optional: true, required: false
  private _notBindAll?: number; 
  public get notBindAll() {
    return this.getNumberAttribute('not_bind_all');
  }
  public set notBindAll(value: number) {
    this._notBindAll = value;
  }
  public resetNotBindAll() {
    this._notBindAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBindAllInput() {
    return this._notBindAll;
  }

  // not_binding_notice_rule - computed: false, optional: true, required: false
  private _notBindingNoticeRule?: number; 
  public get notBindingNoticeRule() {
    return this.getNumberAttribute('not_binding_notice_rule');
  }
  public set notBindingNoticeRule(value: number) {
    this._notBindingNoticeRule = value;
  }
  public resetNotBindingNoticeRule() {
    this._notBindingNoticeRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBindingNoticeRuleInput() {
    return this._notBindingNoticeRule;
  }

  // not_instance_group - computed: false, optional: true, required: false
  private _notInstanceGroup?: number; 
  public get notInstanceGroup() {
    return this.getNumberAttribute('not_instance_group');
  }
  public set notInstanceGroup(value: number) {
    this._notInstanceGroup = value;
  }
  public resetNotInstanceGroup() {
    this._notInstanceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInstanceGroupInput() {
    return this._notInstanceGroup;
  }

  // notice_ids - computed: false, optional: true, required: false
  private _noticeIds?: string[]; 
  public get noticeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('notice_ids'));
  }
  public set noticeIds(value: string[]) {
    this._noticeIds = value;
  }
  public resetNoticeIds() {
    this._noticeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeIdsInput() {
    return this._noticeIds;
  }

  // one_click_policy_type - computed: false, optional: true, required: false
  private _oneClickPolicyType?: string[]; 
  public get oneClickPolicyType() {
    return cdktf.Fn.tolist(this.getListAttribute('one_click_policy_type'));
  }
  public set oneClickPolicyType(value: string[]) {
    this._oneClickPolicyType = value;
  }
  public resetOneClickPolicyType() {
    this._oneClickPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneClickPolicyTypeInput() {
    return this._oneClickPolicyType;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataTencentcloudMonitorAlarmPolicyPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string[]; 
  public get policyType() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_type'));
  }
  public set policyType(value: string[]) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: number[]; 
  public get projectIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('project_ids')));
  }
  public set projectIds(value: number[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // prom_ins_id - computed: false, optional: true, required: false
  private _promInsId?: string; 
  public get promInsId() {
    return this.getStringAttribute('prom_ins_id');
  }
  public set promInsId(value: string) {
    this._promInsId = value;
  }
  public resetPromInsId() {
    this._promInsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promInsIdInput() {
    return this._promInsId;
  }

  // receiver_groups - computed: false, optional: true, required: false
  private _receiverGroups?: number[]; 
  public get receiverGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_groups')));
  }
  public set receiverGroups(value: number[]) {
    this._receiverGroups = value;
  }
  public resetReceiverGroups() {
    this._receiverGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverGroupsInput() {
    return this._receiverGroups;
  }

  // receiver_on_call_form_ids - computed: false, optional: true, required: false
  private _receiverOnCallFormIds?: string[]; 
  public get receiverOnCallFormIds() {
    return cdktf.Fn.tolist(this.getListAttribute('receiver_on_call_form_ids'));
  }
  public set receiverOnCallFormIds(value: string[]) {
    this._receiverOnCallFormIds = value;
  }
  public resetReceiverOnCallFormIds() {
    this._receiverOnCallFormIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverOnCallFormIdsInput() {
    return this._receiverOnCallFormIds;
  }

  // receiver_uids - computed: false, optional: true, required: false
  private _receiverUids?: number[]; 
  public get receiverUids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('receiver_uids')));
  }
  public set receiverUids(value: number[]) {
    this._receiverUids = value;
  }
  public resetReceiverUids() {
    this._receiverUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverUidsInput() {
    return this._receiverUids;
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

  // rule_types - computed: false, optional: true, required: false
  private _ruleTypes?: string[]; 
  public get ruleTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('rule_types'));
  }
  public set ruleTypes(value: string[]) {
    this._ruleTypes = value;
  }
  public resetRuleTypes() {
    this._ruleTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypesInput() {
    return this._ruleTypes;
  }

  // trigger_tasks - computed: false, optional: true, required: false
  private _triggerTasks = new DataTencentcloudMonitorAlarmPolicyTriggerTasksList(this, "trigger_tasks", false);
  public get triggerTasks() {
    return this._triggerTasks;
  }
  public putTriggerTasks(value: DataTencentcloudMonitorAlarmPolicyTriggerTasks[] | cdktf.IResolvable) {
    this._triggerTasks.internalValue = value;
  }
  public resetTriggerTasks() {
    this._triggerTasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTasksInput() {
    return this._triggerTasks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dimensions: cdktf.stringToTerraform(this._dimensions),
      enable: cdktf.listMapper(cdktf.numberToTerraform, false)(this._enable),
      field: cdktf.stringToTerraform(this._field),
      id: cdktf.stringToTerraform(this._id),
      instance_group_id: cdktf.numberToTerraform(this._instanceGroupId),
      module: cdktf.stringToTerraform(this._module),
      monitor_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorTypes),
      namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._namespaces),
      need_correspondence: cdktf.numberToTerraform(this._needCorrespondence),
      not_bind_all: cdktf.numberToTerraform(this._notBindAll),
      not_binding_notice_rule: cdktf.numberToTerraform(this._notBindingNoticeRule),
      not_instance_group: cdktf.numberToTerraform(this._notInstanceGroup),
      notice_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noticeIds),
      one_click_policy_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oneClickPolicyType),
      order: cdktf.stringToTerraform(this._order),
      policy_name: cdktf.stringToTerraform(this._policyName),
      policy_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyType),
      project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._projectIds),
      prom_ins_id: cdktf.stringToTerraform(this._promInsId),
      receiver_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._receiverGroups),
      receiver_on_call_form_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._receiverOnCallFormIds),
      receiver_uids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._receiverUids),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      rule_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleTypes),
      trigger_tasks: cdktf.listMapper(dataTencentcloudMonitorAlarmPolicyTriggerTasksToTerraform, true)(this._triggerTasks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dimensions: {
        value: cdktf.stringToHclTerraform(this._dimensions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._enable),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      field: {
        value: cdktf.stringToHclTerraform(this._field),
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
      instance_group_id: {
        value: cdktf.numberToHclTerraform(this._instanceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      module: {
        value: cdktf.stringToHclTerraform(this._module),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      need_correspondence: {
        value: cdktf.numberToHclTerraform(this._needCorrespondence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      not_bind_all: {
        value: cdktf.numberToHclTerraform(this._notBindAll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      not_binding_notice_rule: {
        value: cdktf.numberToHclTerraform(this._notBindingNoticeRule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      not_instance_group: {
        value: cdktf.numberToHclTerraform(this._notInstanceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notice_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noticeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      one_click_policy_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oneClickPolicyType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      prom_ins_id: {
        value: cdktf.stringToHclTerraform(this._promInsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receiver_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._receiverGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      receiver_on_call_form_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._receiverOnCallFormIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      receiver_uids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._receiverUids),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trigger_tasks: {
        value: cdktf.listMapperHcl(dataTencentcloudMonitorAlarmPolicyTriggerTasksToHclTerraform, true)(this._triggerTasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudMonitorAlarmPolicyTriggerTasksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
