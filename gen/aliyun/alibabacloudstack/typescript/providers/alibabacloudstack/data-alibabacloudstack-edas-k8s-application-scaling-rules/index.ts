// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackEdasK8SApplicationScalingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules#app_id DataAlibabacloudstackEdasK8SApplicationScalingRules#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules#id DataAlibabacloudstackEdasK8SApplicationScalingRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules#ids DataAlibabacloudstackEdasK8SApplicationScalingRules#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules#name_regex DataAlibabacloudstackEdasK8SApplicationScalingRules#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules#scaling_rule_type DataAlibabacloudstackEdasK8SApplicationScalingRules#scaling_rule_type}
  */
  readonly scalingRuleType?: string;
}
export interface DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetrics {
}

export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetricsToTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetricsToHclTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // utilization - computed: true, optional: false, required: false
  public get utilization() {
    return this.getNumberAttribute('utilization');
  }
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetricsOutputReference {
    return new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPolicies {
}

export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPoliciesToTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPoliciesToHclTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPoliciesOutputReference {
    return new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPolicies {
}

export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPoliciesToTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPoliciesToHclTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPoliciesOutputReference {
    return new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDay {
}

export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDayToTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDayToHclTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // at_time - computed: true, optional: false, required: false
  public get atTime() {
    return this.getStringAttribute('at_time');
  }

  // horizon_mode - computed: true, optional: false, required: false
  public get horizonMode() {
    return this.getBooleanAttribute('horizon_mode');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDayList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDayOutputReference {
    return new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggers {
}

export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersToTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersToHclTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }

  // timer_in_day - computed: true, optional: false, required: false
  private _timerInDay = new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersTimerInDayList(this, "timer_in_day", true);
  public get timerInDay() {
    return this._timerInDay;
  }

  // timer_in_month - computed: true, optional: false, required: false
  public get timerInMonth() {
    return cdktf.Fn.tolist(this.getListAttribute('timer_in_month'));
  }

  // timer_in_week - computed: true, optional: false, required: false
  public get timerInWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('timer_in_week'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersOutputReference {
    return new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRules {
}

export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesToTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesToHclTerraform(struct?: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_replicas - computed: true, optional: false, required: false
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }

  // min_replicas - computed: true, optional: false, required: false
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }

  // scale_down_policies - computed: true, optional: false, required: false
  private _scaleDownPolicies = new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleDownPoliciesList(this, "scale_down_policies", true);
  public get scaleDownPolicies() {
    return this._scaleDownPolicies;
  }

  // scale_down_select_policy - computed: true, optional: false, required: false
  public get scaleDownSelectPolicy() {
    return this.getStringAttribute('scale_down_select_policy');
  }

  // scale_down_stabilization_window_seconds - computed: true, optional: false, required: false
  public get scaleDownStabilizationWindowSeconds() {
    return this.getNumberAttribute('scale_down_stabilization_window_seconds');
  }

  // scale_up_policies - computed: true, optional: false, required: false
  private _scaleUpPolicies = new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesScaleUpPoliciesList(this, "scale_up_policies", true);
  public get scaleUpPolicies() {
    return this._scaleUpPolicies;
  }

  // scale_up_select_policy - computed: true, optional: false, required: false
  public get scaleUpSelectPolicy() {
    return this.getStringAttribute('scale_up_select_policy');
  }

  // scale_up_stabilization_window_seconds - computed: true, optional: false, required: false
  public get scaleUpStabilizationWindowSeconds() {
    return this.getNumberAttribute('scale_up_stabilization_window_seconds');
  }

  // scaling_rule_name - computed: true, optional: false, required: false
  public get scalingRuleName() {
    return this.getStringAttribute('scaling_rule_name');
  }

  // scaling_rule_type - computed: true, optional: false, required: false
  public get scalingRuleType() {
    return this.getStringAttribute('scaling_rule_type');
  }

  // triggers - computed: true, optional: false, required: false
  private _triggers = new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesTriggersList(this, "triggers", true);
  public get triggers() {
    return this._triggers;
  }
}

export class DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesOutputReference {
    return new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules alibabacloudstack_edas_k8s_application_scaling_rules}
*/
export class DataAlibabacloudstackEdasK8SApplicationScalingRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_edas_k8s_application_scaling_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackEdasK8SApplicationScalingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackEdasK8SApplicationScalingRules to import
  * @param importFromId The id of the existing DataAlibabacloudstackEdasK8SApplicationScalingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackEdasK8SApplicationScalingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_edas_k8s_application_scaling_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/edas_k8s_application_scaling_rules alibabacloudstack_edas_k8s_application_scaling_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackEdasK8SApplicationScalingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackEdasK8SApplicationScalingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_edas_k8s_application_scaling_rules',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._scalingRuleType = config.scalingRuleType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // scaling_rule_type - computed: false, optional: true, required: false
  private _scalingRuleType?: string; 
  public get scalingRuleType() {
    return this.getStringAttribute('scaling_rule_type');
  }
  public set scalingRuleType(value: string) {
    this._scalingRuleType = value;
  }
  public resetScalingRuleType() {
    this._scalingRuleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleTypeInput() {
    return this._scalingRuleType;
  }

  // scaling_rules - computed: true, optional: false, required: false
  private _scalingRules = new DataAlibabacloudstackEdasK8SApplicationScalingRulesScalingRulesList(this, "scaling_rules", false);
  public get scalingRules() {
    return this._scalingRules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      scaling_rule_type: cdktf.stringToTerraform(this._scalingRuleType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_rule_type: {
        value: cdktf.stringToHclTerraform(this._scalingRuleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
