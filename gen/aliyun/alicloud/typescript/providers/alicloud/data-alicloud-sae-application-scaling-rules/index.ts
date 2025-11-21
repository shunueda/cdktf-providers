// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/sae_application_scaling_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudSaeApplicationScalingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/sae_application_scaling_rules#app_id DataAlicloudSaeApplicationScalingRules#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/sae_application_scaling_rules#id DataAlicloudSaeApplicationScalingRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/sae_application_scaling_rules#ids DataAlicloudSaeApplicationScalingRules#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/sae_application_scaling_rules#output_file DataAlicloudSaeApplicationScalingRules#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetrics {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_target_average_utilization - computed: true, optional: false, required: false
  public get metricTargetAverageUtilization() {
    return this.getNumberAttribute('metric_target_average_utilization');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetrics {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetricsToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetricsToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_value - computed: true, optional: false, required: false
  public get currentValue() {
    return this.getNumberAttribute('current_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetricsOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetrics {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetricsToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetricsToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetrics | undefined) {
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

  // next_scale_in_average_utilization - computed: true, optional: false, required: false
  public get nextScaleInAverageUtilization() {
    return this.getNumberAttribute('next_scale_in_average_utilization');
  }

  // next_scale_out_average_utilization - computed: true, optional: false, required: false
  public get nextScaleOutAverageUtilization() {
    return this.getNumberAttribute('next_scale_out_average_utilization');
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetricsOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatus {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_metrics - computed: true, optional: false, required: false
  private _currentMetrics = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusCurrentMetricsList(this, "current_metrics", false);
  public get currentMetrics() {
    return this._currentMetrics;
  }

  // current_replicas - computed: true, optional: false, required: false
  public get currentReplicas() {
    return this.getNumberAttribute('current_replicas');
  }

  // desired_replicas - computed: true, optional: false, required: false
  public get desiredReplicas() {
    return this.getNumberAttribute('desired_replicas');
  }

  // last_scale_time - computed: true, optional: false, required: false
  public get lastScaleTime() {
    return this.getStringAttribute('last_scale_time');
  }

  // max_replicas - computed: true, optional: false, required: false
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }

  // min_replicas - computed: true, optional: false, required: false
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }

  // next_scale_metrics - computed: true, optional: false, required: false
  private _nextScaleMetrics = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusNextScaleMetricsList(this, "next_scale_metrics", false);
  public get nextScaleMetrics() {
    return this._nextScaleMetrics;
  }

  // next_scale_time_period - computed: true, optional: false, required: false
  public get nextScaleTimePeriod() {
    return this.getNumberAttribute('next_scale_time_period');
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRules {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRulesToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRulesToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // stabilization_window_seconds - computed: true, optional: false, required: false
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }

  // step - computed: true, optional: false, required: false
  public get step() {
    return this.getNumberAttribute('step');
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRulesOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRules {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRulesToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRulesToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // stabilization_window_seconds - computed: true, optional: false, required: false
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }

  // step - computed: true, optional: false, required: false
  public get step() {
    return this.getNumberAttribute('step');
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRulesOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetric {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_replicas - computed: true, optional: false, required: false
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // metrics_status - computed: true, optional: false, required: false
  private _metricsStatus = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricMetricsStatusList(this, "metrics_status", false);
  public get metricsStatus() {
    return this._metricsStatus;
  }

  // min_replicas - computed: true, optional: false, required: false
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }

  // scale_down_rules - computed: true, optional: false, required: false
  private _scaleDownRules = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleDownRulesList(this, "scale_down_rules", false);
  public get scaleDownRules() {
    return this._scaleDownRules;
  }

  // scale_up_rules - computed: true, optional: false, required: false
  private _scaleUpRules = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricScaleUpRulesList(this, "scale_up_rules", false);
  public get scaleUpRules() {
    return this._scaleUpRules;
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedules {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedulesToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedulesToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedules | undefined) {
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

  // max_replicas - computed: true, optional: false, required: false
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }

  // min_replicas - computed: true, optional: false, required: false
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }

  // target_replicas - computed: true, optional: false, required: false
  public get targetReplicas() {
    return this.getNumberAttribute('target_replicas');
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedulesOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimer {
}

export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin_date - computed: true, optional: false, required: false
  public get beginDate() {
    return this.getStringAttribute('begin_date');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }

  // schedules - computed: true, optional: false, required: false
  private _schedules = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudSaeApplicationScalingRulesRules {
}

export function dataAlicloudSaeApplicationScalingRulesRulesToTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudSaeApplicationScalingRulesRulesToHclTerraform(struct?: DataAlicloudSaeApplicationScalingRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudSaeApplicationScalingRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudSaeApplicationScalingRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudSaeApplicationScalingRulesRules | undefined) {
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scaling_rule_enable - computed: true, optional: false, required: false
  public get scalingRuleEnable() {
    return this.getBooleanAttribute('scaling_rule_enable');
  }

  // scaling_rule_metric - computed: true, optional: false, required: false
  private _scalingRuleMetric = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleMetricList(this, "scaling_rule_metric", false);
  public get scalingRuleMetric() {
    return this._scalingRuleMetric;
  }

  // scaling_rule_name - computed: true, optional: false, required: false
  public get scalingRuleName() {
    return this.getStringAttribute('scaling_rule_name');
  }

  // scaling_rule_timer - computed: true, optional: false, required: false
  private _scalingRuleTimer = new DataAlicloudSaeApplicationScalingRulesRulesScalingRuleTimerList(this, "scaling_rule_timer", false);
  public get scalingRuleTimer() {
    return this._scalingRuleTimer;
  }

  // scaling_rule_type - computed: true, optional: false, required: false
  public get scalingRuleType() {
    return this.getStringAttribute('scaling_rule_type');
  }
}

export class DataAlicloudSaeApplicationScalingRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudSaeApplicationScalingRulesRulesOutputReference {
    return new DataAlicloudSaeApplicationScalingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/sae_application_scaling_rules alicloud_sae_application_scaling_rules}
*/
export class DataAlicloudSaeApplicationScalingRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sae_application_scaling_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudSaeApplicationScalingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudSaeApplicationScalingRules to import
  * @param importFromId The id of the existing DataAlicloudSaeApplicationScalingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/sae_application_scaling_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudSaeApplicationScalingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sae_application_scaling_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/sae_application_scaling_rules alicloud_sae_application_scaling_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudSaeApplicationScalingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudSaeApplicationScalingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sae_application_scaling_rules',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._outputFile = config.outputFile;
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

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAlicloudSaeApplicationScalingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
