// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrAutoScaleStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#id EmrAutoScaleStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#instance_id EmrAutoScaleStrategy#instance_id}
  */
  readonly instanceId: string;
  /**
  * 1 means expansion and contraction according to load rules, 2 means expansion and contraction according to time rules. Must be filled in and match the following rule policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#strategy_type EmrAutoScaleStrategy#strategy_type}
  */
  readonly strategyType: number;
  /**
  * load_auto_scale_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#load_auto_scale_strategy EmrAutoScaleStrategy#load_auto_scale_strategy}
  */
  readonly loadAutoScaleStrategy?: EmrAutoScaleStrategyLoadAutoScaleStrategy[] | cdktf.IResolvable;
  /**
  * time_auto_scale_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#time_auto_scale_strategy EmrAutoScaleStrategy#time_auto_scale_strategy}
  */
  readonly timeAutoScaleStrategy?: EmrAutoScaleStrategyTimeAutoScaleStrategy[] | cdktf.IResolvable;
}
export interface EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditions {
  /**
  * Conditional comparison method, 1 means greater than, 2 means less than, 3 means greater than or equal to, 4 means less than or equal to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#compare_method EmrAutoScaleStrategy#compare_method}
  */
  readonly compareMethod: number;
  /**
  * Conditional threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#threshold EmrAutoScaleStrategy#threshold}
  */
  readonly threshold?: number;
}

export function emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsToTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare_method: cdktf.numberToTerraform(struct!.compareMethod),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsToHclTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare_method: {
      value: cdktf.numberToHclTerraform(struct!.compareMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compareMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareMethod = this._compareMethod;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compareMethod = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compareMethod = value.compareMethod;
      this._threshold = value.threshold;
    }
  }

  // compare_method - computed: false, optional: false, required: true
  private _compareMethod?: number; 
  public get compareMethod() {
    return this.getNumberAttribute('compare_method');
  }
  public set compareMethod(value: number) {
    this._compareMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareMethodInput() {
    return this._compareMethod;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsList extends cdktf.ComplexList {
  public internalValue? : EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditions[] | cdktf.IResolvable

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
  public get(index: number): EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsOutputReference {
    return new EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetrics {
  /**
  * Expansion and contraction load indicators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#load_metrics EmrAutoScaleStrategy#load_metrics}
  */
  readonly loadMetrics?: string;
  /**
  * Rule metadata record ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#metric_id EmrAutoScaleStrategy#metric_id}
  */
  readonly metricId?: number;
  /**
  * The regular statistical period provides 1min, 3min, and 5min.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#statistic_period EmrAutoScaleStrategy#statistic_period}
  */
  readonly statisticPeriod?: number;
  /**
  * The number of triggers. When the number of consecutive triggers exceeds TriggerThreshold, the expansion and contraction will begin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#trigger_threshold EmrAutoScaleStrategy#trigger_threshold}
  */
  readonly triggerThreshold?: number;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#conditions EmrAutoScaleStrategy#conditions}
  */
  readonly conditions?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditions[] | cdktf.IResolvable;
}

export function emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsToTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_metrics: cdktf.stringToTerraform(struct!.loadMetrics),
    metric_id: cdktf.numberToTerraform(struct!.metricId),
    statistic_period: cdktf.numberToTerraform(struct!.statisticPeriod),
    trigger_threshold: cdktf.numberToTerraform(struct!.triggerThreshold),
    conditions: cdktf.listMapper(emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsToHclTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_metrics: {
      value: cdktf.stringToHclTerraform(struct!.loadMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_id: {
      value: cdktf.numberToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statistic_period: {
      value: cdktf.numberToHclTerraform(struct!.statisticPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_threshold: {
      value: cdktf.numberToHclTerraform(struct!.triggerThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conditions: {
      value: cdktf.listMapperHcl(emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadMetrics = this._loadMetrics;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._statisticPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticPeriod = this._statisticPeriod;
    }
    if (this._triggerThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerThreshold = this._triggerThreshold;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadMetrics = undefined;
      this._metricId = undefined;
      this._statisticPeriod = undefined;
      this._triggerThreshold = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadMetrics = value.loadMetrics;
      this._metricId = value.metricId;
      this._statisticPeriod = value.statisticPeriod;
      this._triggerThreshold = value.triggerThreshold;
      this._conditions.internalValue = value.conditions;
    }
  }

  // load_metrics - computed: false, optional: true, required: false
  private _loadMetrics?: string; 
  public get loadMetrics() {
    return this.getStringAttribute('load_metrics');
  }
  public set loadMetrics(value: string) {
    this._loadMetrics = value;
  }
  public resetLoadMetrics() {
    this._loadMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadMetricsInput() {
    return this._loadMetrics;
  }

  // metric_id - computed: false, optional: true, required: false
  private _metricId?: number; 
  public get metricId() {
    return this.getNumberAttribute('metric_id');
  }
  public set metricId(value: number) {
    this._metricId = value;
  }
  public resetMetricId() {
    this._metricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // statistic_period - computed: false, optional: true, required: false
  private _statisticPeriod?: number; 
  public get statisticPeriod() {
    return this.getNumberAttribute('statistic_period');
  }
  public set statisticPeriod(value: number) {
    this._statisticPeriod = value;
  }
  public resetStatisticPeriod() {
    this._statisticPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticPeriodInput() {
    return this._statisticPeriod;
  }

  // trigger_threshold - computed: false, optional: true, required: false
  private _triggerThreshold?: number; 
  public get triggerThreshold() {
    return this.getNumberAttribute('trigger_threshold');
  }
  public set triggerThreshold(value: number) {
    this._triggerThreshold = value;
  }
  public resetTriggerThreshold() {
    this._triggerThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerThresholdInput() {
    return this._triggerThreshold;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsList extends cdktf.ComplexList {
  public internalValue? : EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetrics[] | cdktf.IResolvable

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
  public get(index: number): EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsOutputReference {
    return new EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditions {
  /**
  * load_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#load_metrics EmrAutoScaleStrategy#load_metrics}
  */
  readonly loadMetrics?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetrics[] | cdktf.IResolvable;
}

export function emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsToTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsOutputReference | EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_metrics: cdktf.listMapper(emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsToTerraform, true)(struct!.loadMetrics),
  }
}


export function emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsToHclTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsOutputReference | EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_metrics: {
      value: cdktf.listMapperHcl(emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsToHclTerraform, true)(struct!.loadMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadMetrics = this._loadMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadMetrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadMetrics.internalValue = value.loadMetrics;
    }
  }

  // load_metrics - computed: false, optional: true, required: false
  private _loadMetrics = new EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetricsList(this, "load_metrics", false);
  public get loadMetrics() {
    return this._loadMetrics;
  }
  public putLoadMetrics(value: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsLoadMetrics[] | cdktf.IResolvable) {
    this._loadMetrics.internalValue = value;
  }
  public resetLoadMetrics() {
    this._loadMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadMetricsInput() {
    return this._loadMetrics.internalValue;
  }
}
export interface EmrAutoScaleStrategyLoadAutoScaleStrategyTags {
  /**
  * tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#tag_key EmrAutoScaleStrategy#tag_key}
  */
  readonly tagKey?: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#tag_value EmrAutoScaleStrategy#tag_value}
  */
  readonly tagValue?: string;
}

export function emrAutoScaleStrategyLoadAutoScaleStrategyTagsToTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function emrAutoScaleStrategyLoadAutoScaleStrategyTagsToHclTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrAutoScaleStrategyLoadAutoScaleStrategyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyLoadAutoScaleStrategyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyTagsList extends cdktf.ComplexList {
  public internalValue? : EmrAutoScaleStrategyLoadAutoScaleStrategyTags[] | cdktf.IResolvable

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
  public get(index: number): EmrAutoScaleStrategyLoadAutoScaleStrategyTagsOutputReference {
    return new EmrAutoScaleStrategyLoadAutoScaleStrategyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrAutoScaleStrategyLoadAutoScaleStrategy {
  /**
  * Cooling time for rules to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#calm_down_time EmrAutoScaleStrategy#calm_down_time}
  */
  readonly calmDownTime?: number;
  /**
  * Default configuration group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#config_group_assigned EmrAutoScaleStrategy#config_group_assigned}
  */
  readonly configGroupAssigned?: string;
  /**
  * Elegant shrink switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#grace_down_flag EmrAutoScaleStrategy#grace_down_flag}
  */
  readonly graceDownFlag?: boolean | cdktf.IResolvable;
  /**
  * Graceful downsizing waiting time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#grace_down_time EmrAutoScaleStrategy#grace_down_time}
  */
  readonly graceDownTime?: number;
  /**
  * Expansion resource calculation methods, "DEFAULT", "INSTANCE", "CPU", "MEMORYGB".
  * "DEFAULT" means the default mode, which has the same meaning as "INSTANCE".
  * "INSTANCE" means calculation based on nodes, the default method.
  * "CPU" means calculated based on the number of cores of the machine.
  * "MEMORYGB" means calculated based on the number of machine memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#measure_method EmrAutoScaleStrategy#measure_method}
  */
  readonly measureMethod?: string;
  /**
  * Effective time for the rule to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#period_valid EmrAutoScaleStrategy#period_valid}
  */
  readonly periodValid?: string;
  /**
  * Rule priority, invalid when added, defaults to auto-increment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#priority EmrAutoScaleStrategy#priority}
  */
  readonly priority?: number;
  /**
  * Indicator processing method, 1 represents MAX, 2 represents MIN, and 3 represents AVG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#process_method EmrAutoScaleStrategy#process_method}
  */
  readonly processMethod?: number;
  /**
  * Expansion and contraction actions, 1 means expansion, 2 means shrinkage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#scale_action EmrAutoScaleStrategy#scale_action}
  */
  readonly scaleAction?: number;
  /**
  * The amount of expansion and contraction each time the rule takes effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#scale_num EmrAutoScaleStrategy#scale_num}
  */
  readonly scaleNum?: number;
  /**
  * Rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#strategy_id EmrAutoScaleStrategy#strategy_id}
  */
  readonly strategyId?: number;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#strategy_name EmrAutoScaleStrategy#strategy_name}
  */
  readonly strategyName?: string;
  /**
  * Rule status, 1 means enabled, 3 means disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#strategy_status EmrAutoScaleStrategy#strategy_status}
  */
  readonly strategyStatus?: number;
  /**
  * Rule expansion specifies yarn node label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#yarn_node_label EmrAutoScaleStrategy#yarn_node_label}
  */
  readonly yarnNodeLabel?: string;
  /**
  * load_metrics_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#load_metrics_conditions EmrAutoScaleStrategy#load_metrics_conditions}
  */
  readonly loadMetricsConditions?: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditions;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#tags EmrAutoScaleStrategy#tags}
  */
  readonly tags?: EmrAutoScaleStrategyLoadAutoScaleStrategyTags[] | cdktf.IResolvable;
}

export function emrAutoScaleStrategyLoadAutoScaleStrategyToTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calm_down_time: cdktf.numberToTerraform(struct!.calmDownTime),
    config_group_assigned: cdktf.stringToTerraform(struct!.configGroupAssigned),
    grace_down_flag: cdktf.booleanToTerraform(struct!.graceDownFlag),
    grace_down_time: cdktf.numberToTerraform(struct!.graceDownTime),
    measure_method: cdktf.stringToTerraform(struct!.measureMethod),
    period_valid: cdktf.stringToTerraform(struct!.periodValid),
    priority: cdktf.numberToTerraform(struct!.priority),
    process_method: cdktf.numberToTerraform(struct!.processMethod),
    scale_action: cdktf.numberToTerraform(struct!.scaleAction),
    scale_num: cdktf.numberToTerraform(struct!.scaleNum),
    strategy_id: cdktf.numberToTerraform(struct!.strategyId),
    strategy_name: cdktf.stringToTerraform(struct!.strategyName),
    strategy_status: cdktf.numberToTerraform(struct!.strategyStatus),
    yarn_node_label: cdktf.stringToTerraform(struct!.yarnNodeLabel),
    load_metrics_conditions: emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsToTerraform(struct!.loadMetricsConditions),
    tags: cdktf.listMapper(emrAutoScaleStrategyLoadAutoScaleStrategyTagsToTerraform, true)(struct!.tags),
  }
}


export function emrAutoScaleStrategyLoadAutoScaleStrategyToHclTerraform(struct?: EmrAutoScaleStrategyLoadAutoScaleStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calm_down_time: {
      value: cdktf.numberToHclTerraform(struct!.calmDownTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_group_assigned: {
      value: cdktf.stringToHclTerraform(struct!.configGroupAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_down_flag: {
      value: cdktf.booleanToHclTerraform(struct!.graceDownFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_down_time: {
      value: cdktf.numberToHclTerraform(struct!.graceDownTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    measure_method: {
      value: cdktf.stringToHclTerraform(struct!.measureMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period_valid: {
      value: cdktf.stringToHclTerraform(struct!.periodValid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_method: {
      value: cdktf.numberToHclTerraform(struct!.processMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_action: {
      value: cdktf.numberToHclTerraform(struct!.scaleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_num: {
      value: cdktf.numberToHclTerraform(struct!.scaleNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy_id: {
      value: cdktf.numberToHclTerraform(struct!.strategyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy_name: {
      value: cdktf.stringToHclTerraform(struct!.strategyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_status: {
      value: cdktf.numberToHclTerraform(struct!.strategyStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    yarn_node_label: {
      value: cdktf.stringToHclTerraform(struct!.yarnNodeLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_metrics_conditions: {
      value: emrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsToHclTerraform(struct!.loadMetricsConditions),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsList",
    },
    tags: {
      value: cdktf.listMapperHcl(emrAutoScaleStrategyLoadAutoScaleStrategyTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyLoadAutoScaleStrategyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrAutoScaleStrategyLoadAutoScaleStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calmDownTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.calmDownTime = this._calmDownTime;
    }
    if (this._configGroupAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.configGroupAssigned = this._configGroupAssigned;
    }
    if (this._graceDownFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceDownFlag = this._graceDownFlag;
    }
    if (this._graceDownTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceDownTime = this._graceDownTime;
    }
    if (this._measureMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureMethod = this._measureMethod;
    }
    if (this._periodValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodValid = this._periodValid;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._processMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMethod = this._processMethod;
    }
    if (this._scaleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleAction = this._scaleAction;
    }
    if (this._scaleNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleNum = this._scaleNum;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._strategyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyName = this._strategyName;
    }
    if (this._strategyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyStatus = this._strategyStatus;
    }
    if (this._yarnNodeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.yarnNodeLabel = this._yarnNodeLabel;
    }
    if (this._loadMetricsConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadMetricsConditions = this._loadMetricsConditions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyLoadAutoScaleStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calmDownTime = undefined;
      this._configGroupAssigned = undefined;
      this._graceDownFlag = undefined;
      this._graceDownTime = undefined;
      this._measureMethod = undefined;
      this._periodValid = undefined;
      this._priority = undefined;
      this._processMethod = undefined;
      this._scaleAction = undefined;
      this._scaleNum = undefined;
      this._strategyId = undefined;
      this._strategyName = undefined;
      this._strategyStatus = undefined;
      this._yarnNodeLabel = undefined;
      this._loadMetricsConditions.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calmDownTime = value.calmDownTime;
      this._configGroupAssigned = value.configGroupAssigned;
      this._graceDownFlag = value.graceDownFlag;
      this._graceDownTime = value.graceDownTime;
      this._measureMethod = value.measureMethod;
      this._periodValid = value.periodValid;
      this._priority = value.priority;
      this._processMethod = value.processMethod;
      this._scaleAction = value.scaleAction;
      this._scaleNum = value.scaleNum;
      this._strategyId = value.strategyId;
      this._strategyName = value.strategyName;
      this._strategyStatus = value.strategyStatus;
      this._yarnNodeLabel = value.yarnNodeLabel;
      this._loadMetricsConditions.internalValue = value.loadMetricsConditions;
      this._tags.internalValue = value.tags;
    }
  }

  // calm_down_time - computed: false, optional: true, required: false
  private _calmDownTime?: number; 
  public get calmDownTime() {
    return this.getNumberAttribute('calm_down_time');
  }
  public set calmDownTime(value: number) {
    this._calmDownTime = value;
  }
  public resetCalmDownTime() {
    this._calmDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calmDownTimeInput() {
    return this._calmDownTime;
  }

  // config_group_assigned - computed: false, optional: true, required: false
  private _configGroupAssigned?: string; 
  public get configGroupAssigned() {
    return this.getStringAttribute('config_group_assigned');
  }
  public set configGroupAssigned(value: string) {
    this._configGroupAssigned = value;
  }
  public resetConfigGroupAssigned() {
    this._configGroupAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configGroupAssignedInput() {
    return this._configGroupAssigned;
  }

  // grace_down_flag - computed: false, optional: true, required: false
  private _graceDownFlag?: boolean | cdktf.IResolvable; 
  public get graceDownFlag() {
    return this.getBooleanAttribute('grace_down_flag');
  }
  public set graceDownFlag(value: boolean | cdktf.IResolvable) {
    this._graceDownFlag = value;
  }
  public resetGraceDownFlag() {
    this._graceDownFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceDownFlagInput() {
    return this._graceDownFlag;
  }

  // grace_down_time - computed: false, optional: true, required: false
  private _graceDownTime?: number; 
  public get graceDownTime() {
    return this.getNumberAttribute('grace_down_time');
  }
  public set graceDownTime(value: number) {
    this._graceDownTime = value;
  }
  public resetGraceDownTime() {
    this._graceDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceDownTimeInput() {
    return this._graceDownTime;
  }

  // measure_method - computed: false, optional: true, required: false
  private _measureMethod?: string; 
  public get measureMethod() {
    return this.getStringAttribute('measure_method');
  }
  public set measureMethod(value: string) {
    this._measureMethod = value;
  }
  public resetMeasureMethod() {
    this._measureMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureMethodInput() {
    return this._measureMethod;
  }

  // period_valid - computed: false, optional: true, required: false
  private _periodValid?: string; 
  public get periodValid() {
    return this.getStringAttribute('period_valid');
  }
  public set periodValid(value: string) {
    this._periodValid = value;
  }
  public resetPeriodValid() {
    this._periodValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodValidInput() {
    return this._periodValid;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // process_method - computed: false, optional: true, required: false
  private _processMethod?: number; 
  public get processMethod() {
    return this.getNumberAttribute('process_method');
  }
  public set processMethod(value: number) {
    this._processMethod = value;
  }
  public resetProcessMethod() {
    this._processMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMethodInput() {
    return this._processMethod;
  }

  // scale_action - computed: false, optional: true, required: false
  private _scaleAction?: number; 
  public get scaleAction() {
    return this.getNumberAttribute('scale_action');
  }
  public set scaleAction(value: number) {
    this._scaleAction = value;
  }
  public resetScaleAction() {
    this._scaleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleActionInput() {
    return this._scaleAction;
  }

  // scale_num - computed: false, optional: true, required: false
  private _scaleNum?: number; 
  public get scaleNum() {
    return this.getNumberAttribute('scale_num');
  }
  public set scaleNum(value: number) {
    this._scaleNum = value;
  }
  public resetScaleNum() {
    this._scaleNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleNumInput() {
    return this._scaleNum;
  }

  // strategy_id - computed: true, optional: true, required: false
  private _strategyId?: number; 
  public get strategyId() {
    return this.getNumberAttribute('strategy_id');
  }
  public set strategyId(value: number) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
  }

  // strategy_name - computed: false, optional: true, required: false
  private _strategyName?: string; 
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
  public set strategyName(value: string) {
    this._strategyName = value;
  }
  public resetStrategyName() {
    this._strategyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyNameInput() {
    return this._strategyName;
  }

  // strategy_status - computed: false, optional: true, required: false
  private _strategyStatus?: number; 
  public get strategyStatus() {
    return this.getNumberAttribute('strategy_status');
  }
  public set strategyStatus(value: number) {
    this._strategyStatus = value;
  }
  public resetStrategyStatus() {
    this._strategyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyStatusInput() {
    return this._strategyStatus;
  }

  // yarn_node_label - computed: false, optional: true, required: false
  private _yarnNodeLabel?: string; 
  public get yarnNodeLabel() {
    return this.getStringAttribute('yarn_node_label');
  }
  public set yarnNodeLabel(value: string) {
    this._yarnNodeLabel = value;
  }
  public resetYarnNodeLabel() {
    this._yarnNodeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yarnNodeLabelInput() {
    return this._yarnNodeLabel;
  }

  // load_metrics_conditions - computed: false, optional: true, required: false
  private _loadMetricsConditions = new EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditionsOutputReference(this, "load_metrics_conditions");
  public get loadMetricsConditions() {
    return this._loadMetricsConditions;
  }
  public putLoadMetricsConditions(value: EmrAutoScaleStrategyLoadAutoScaleStrategyLoadMetricsConditions) {
    this._loadMetricsConditions.internalValue = value;
  }
  public resetLoadMetricsConditions() {
    this._loadMetricsConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadMetricsConditionsInput() {
    return this._loadMetricsConditions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new EmrAutoScaleStrategyLoadAutoScaleStrategyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EmrAutoScaleStrategyLoadAutoScaleStrategyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class EmrAutoScaleStrategyLoadAutoScaleStrategyList extends cdktf.ComplexList {
  public internalValue? : EmrAutoScaleStrategyLoadAutoScaleStrategy[] | cdktf.IResolvable

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
  public get(index: number): EmrAutoScaleStrategyLoadAutoScaleStrategyOutputReference {
    return new EmrAutoScaleStrategyLoadAutoScaleStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeat {
  /**
  * Repeat the specific time when the task is executed, such as "01:02:00".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#execute_at_time_of_day EmrAutoScaleStrategy#execute_at_time_of_day}
  */
  readonly executeAtTimeOfDay: string;
  /**
  * Executed every Step day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#step EmrAutoScaleStrategy#step}
  */
  readonly step: number;
}

export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatToTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_at_time_of_day: cdktf.stringToTerraform(struct!.executeAtTimeOfDay),
    step: cdktf.numberToTerraform(struct!.step),
  }
}


export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatToHclTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_at_time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.executeAtTimeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step: {
      value: cdktf.numberToHclTerraform(struct!.step),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeAtTimeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeAtTimeOfDay = this._executeAtTimeOfDay;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeAtTimeOfDay = undefined;
      this._step = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeAtTimeOfDay = value.executeAtTimeOfDay;
      this._step = value.step;
    }
  }

  // execute_at_time_of_day - computed: false, optional: false, required: true
  private _executeAtTimeOfDay?: string; 
  public get executeAtTimeOfDay() {
    return this.getStringAttribute('execute_at_time_of_day');
  }
  public set executeAtTimeOfDay(value: string) {
    this._executeAtTimeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeAtTimeOfDayInput() {
    return this._executeAtTimeOfDay;
  }

  // step - computed: false, optional: false, required: true
  private _step?: number; 
  public get step() {
    return this.getNumberAttribute('step');
  }
  public set step(value: number) {
    this._step = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}
export interface EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeat {
  /**
  * The description of the day period in each month, the length can only be 2, for example, [2,10] means the 2-10th of each month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#days_of_month_range EmrAutoScaleStrategy#days_of_month_range}
  */
  readonly daysOfMonthRange: number[];
  /**
  * Repeat the specific time when the task is executed, such as "01:02:00".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#execute_at_time_of_day EmrAutoScaleStrategy#execute_at_time_of_day}
  */
  readonly executeAtTimeOfDay: string;
}

export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatToTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month_range: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfMonthRange),
    execute_at_time_of_day: cdktf.stringToTerraform(struct!.executeAtTimeOfDay),
  }
}


export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatToHclTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_month_range: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfMonthRange),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    execute_at_time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.executeAtTimeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfMonthRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonthRange = this._daysOfMonthRange;
    }
    if (this._executeAtTimeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeAtTimeOfDay = this._executeAtTimeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfMonthRange = undefined;
      this._executeAtTimeOfDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfMonthRange = value.daysOfMonthRange;
      this._executeAtTimeOfDay = value.executeAtTimeOfDay;
    }
  }

  // days_of_month_range - computed: false, optional: false, required: true
  private _daysOfMonthRange?: number[]; 
  public get daysOfMonthRange() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_of_month_range')));
  }
  public set daysOfMonthRange(value: number[]) {
    this._daysOfMonthRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthRangeInput() {
    return this._daysOfMonthRange;
  }

  // execute_at_time_of_day - computed: false, optional: false, required: true
  private _executeAtTimeOfDay?: string; 
  public get executeAtTimeOfDay() {
    return this.getStringAttribute('execute_at_time_of_day');
  }
  public set executeAtTimeOfDay(value: string) {
    this._executeAtTimeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeAtTimeOfDayInput() {
    return this._executeAtTimeOfDay;
  }
}
export interface EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeat {
  /**
  * The specific and complete time of the task execution, the format is "2020-07-13 00:00:00".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#execute_at EmrAutoScaleStrategy#execute_at}
  */
  readonly executeAt: string;
}

export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatToTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_at: cdktf.stringToTerraform(struct!.executeAt),
  }
}


export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatToHclTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_at: {
      value: cdktf.stringToHclTerraform(struct!.executeAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeAt = this._executeAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeAt = value.executeAt;
    }
  }

  // execute_at - computed: false, optional: false, required: true
  private _executeAt?: string; 
  public get executeAt() {
    return this.getStringAttribute('execute_at');
  }
  public set executeAt(value: string) {
    this._executeAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeAtInput() {
    return this._executeAt;
  }
}
export interface EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeat {
  /**
  * The numerical description of the days of the week, for example, [1,3,4] means Monday, Wednesday, and Thursday every week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#days_of_week EmrAutoScaleStrategy#days_of_week}
  */
  readonly daysOfWeek: number[];
  /**
  * Repeat the specific time when the task is executed, such as "01:02:00".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#execute_at_time_of_day EmrAutoScaleStrategy#execute_at_time_of_day}
  */
  readonly executeAtTimeOfDay: string;
}

export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatToTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfWeek),
    execute_at_time_of_day: cdktf.stringToTerraform(struct!.executeAtTimeOfDay),
  }
}


export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatToHclTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeat): any {
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
    execute_at_time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.executeAtTimeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._executeAtTimeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeAtTimeOfDay = this._executeAtTimeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._executeAtTimeOfDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._executeAtTimeOfDay = value.executeAtTimeOfDay;
    }
  }

  // days_of_week - computed: false, optional: false, required: true
  private _daysOfWeek?: number[]; 
  public get daysOfWeek() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('days_of_week')));
  }
  public set daysOfWeek(value: number[]) {
    this._daysOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // execute_at_time_of_day - computed: false, optional: false, required: true
  private _executeAtTimeOfDay?: string; 
  public get executeAtTimeOfDay() {
    return this.getStringAttribute('execute_at_time_of_day');
  }
  public set executeAtTimeOfDay(value: string) {
    this._executeAtTimeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeAtTimeOfDayInput() {
    return this._executeAtTimeOfDay;
  }
}
export interface EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategy {
  /**
  * Rule expiration time. After this time, the rule will automatically be placed in a suspended state, in the form of "2020-07-23 00:00:00". Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#expire EmrAutoScaleStrategy#expire}
  */
  readonly expire?: string;
  /**
  * The value range is "DAY", "DOW", "DOM", and "NONE", which respectively represent daily repetition, weekly repetition, monthly repetition and one-time execution. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#repeat_type EmrAutoScaleStrategy#repeat_type}
  */
  readonly repeatType: string;
  /**
  * day_repeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#day_repeat EmrAutoScaleStrategy#day_repeat}
  */
  readonly dayRepeat?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeat;
  /**
  * month_repeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#month_repeat EmrAutoScaleStrategy#month_repeat}
  */
  readonly monthRepeat?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeat;
  /**
  * not_repeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#not_repeat EmrAutoScaleStrategy#not_repeat}
  */
  readonly notRepeat?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeat;
  /**
  * week_repeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#week_repeat EmrAutoScaleStrategy#week_repeat}
  */
  readonly weekRepeat?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeat;
}

export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyToTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire: cdktf.stringToTerraform(struct!.expire),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    day_repeat: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatToTerraform(struct!.dayRepeat),
    month_repeat: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatToTerraform(struct!.monthRepeat),
    not_repeat: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatToTerraform(struct!.notRepeat),
    week_repeat: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatToTerraform(struct!.weekRepeat),
  }
}


export function emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyToHclTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyOutputReference | EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire: {
      value: cdktf.stringToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_type: {
      value: cdktf.stringToHclTerraform(struct!.repeatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_repeat: {
      value: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatToHclTerraform(struct!.dayRepeat),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatList",
    },
    month_repeat: {
      value: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatToHclTerraform(struct!.monthRepeat),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatList",
    },
    not_repeat: {
      value: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatToHclTerraform(struct!.notRepeat),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatList",
    },
    week_repeat: {
      value: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatToHclTerraform(struct!.weekRepeat),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._repeatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatType = this._repeatType;
    }
    if (this._dayRepeat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayRepeat = this._dayRepeat?.internalValue;
    }
    if (this._monthRepeat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthRepeat = this._monthRepeat?.internalValue;
    }
    if (this._notRepeat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notRepeat = this._notRepeat?.internalValue;
    }
    if (this._weekRepeat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekRepeat = this._weekRepeat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expire = undefined;
      this._repeatType = undefined;
      this._dayRepeat.internalValue = undefined;
      this._monthRepeat.internalValue = undefined;
      this._notRepeat.internalValue = undefined;
      this._weekRepeat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expire = value.expire;
      this._repeatType = value.repeatType;
      this._dayRepeat.internalValue = value.dayRepeat;
      this._monthRepeat.internalValue = value.monthRepeat;
      this._notRepeat.internalValue = value.notRepeat;
      this._weekRepeat.internalValue = value.weekRepeat;
    }
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: string; 
  public get expire() {
    return this.getStringAttribute('expire');
  }
  public set expire(value: string) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // repeat_type - computed: false, optional: false, required: true
  private _repeatType?: string; 
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }
  public set repeatType(value: string) {
    this._repeatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTypeInput() {
    return this._repeatType;
  }

  // day_repeat - computed: false, optional: true, required: false
  private _dayRepeat = new EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeatOutputReference(this, "day_repeat");
  public get dayRepeat() {
    return this._dayRepeat;
  }
  public putDayRepeat(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyDayRepeat) {
    this._dayRepeat.internalValue = value;
  }
  public resetDayRepeat() {
    this._dayRepeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayRepeatInput() {
    return this._dayRepeat.internalValue;
  }

  // month_repeat - computed: false, optional: true, required: false
  private _monthRepeat = new EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeatOutputReference(this, "month_repeat");
  public get monthRepeat() {
    return this._monthRepeat;
  }
  public putMonthRepeat(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyMonthRepeat) {
    this._monthRepeat.internalValue = value;
  }
  public resetMonthRepeat() {
    this._monthRepeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthRepeatInput() {
    return this._monthRepeat.internalValue;
  }

  // not_repeat - computed: false, optional: true, required: false
  private _notRepeat = new EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeatOutputReference(this, "not_repeat");
  public get notRepeat() {
    return this._notRepeat;
  }
  public putNotRepeat(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyNotRepeat) {
    this._notRepeat.internalValue = value;
  }
  public resetNotRepeat() {
    this._notRepeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notRepeatInput() {
    return this._notRepeat.internalValue;
  }

  // week_repeat - computed: false, optional: true, required: false
  private _weekRepeat = new EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeatOutputReference(this, "week_repeat");
  public get weekRepeat() {
    return this._weekRepeat;
  }
  public putWeekRepeat(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyWeekRepeat) {
    this._weekRepeat.internalValue = value;
  }
  public resetWeekRepeat() {
    this._weekRepeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekRepeatInput() {
    return this._weekRepeat.internalValue;
  }
}
export interface EmrAutoScaleStrategyTimeAutoScaleStrategyTags {
  /**
  * tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#tag_key EmrAutoScaleStrategy#tag_key}
  */
  readonly tagKey?: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#tag_value EmrAutoScaleStrategy#tag_value}
  */
  readonly tagValue?: string;
}

export function emrAutoScaleStrategyTimeAutoScaleStrategyTagsToTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function emrAutoScaleStrategyTimeAutoScaleStrategyTagsToHclTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrAutoScaleStrategyTimeAutoScaleStrategyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyTimeAutoScaleStrategyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyTagsList extends cdktf.ComplexList {
  public internalValue? : EmrAutoScaleStrategyTimeAutoScaleStrategyTags[] | cdktf.IResolvable

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
  public get(index: number): EmrAutoScaleStrategyTimeAutoScaleStrategyTagsOutputReference {
    return new EmrAutoScaleStrategyTimeAutoScaleStrategyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrAutoScaleStrategyTimeAutoScaleStrategy {
  /**
  * Compensation expansion, 0 means not enabled, 1 means enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#compensate_flag EmrAutoScaleStrategy#compensate_flag}
  */
  readonly compensateFlag?: number;
  /**
  * Default configuration group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#config_group_assigned EmrAutoScaleStrategy#config_group_assigned}
  */
  readonly configGroupAssigned?: string;
  /**
  * Elegant shrink switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#grace_down_flag EmrAutoScaleStrategy#grace_down_flag}
  */
  readonly graceDownFlag?: boolean | cdktf.IResolvable;
  /**
  * Graceful downsizing waiting time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#grace_down_time EmrAutoScaleStrategy#grace_down_time}
  */
  readonly graceDownTime?: number;
  /**
  * scaling group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#group_id EmrAutoScaleStrategy#group_id}
  */
  readonly groupId?: number;
  /**
  * The cooling time after the policy is triggered. During this period, elastic expansion and contraction will not be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#interval_time EmrAutoScaleStrategy#interval_time}
  */
  readonly intervalTime: number;
  /**
  * Maximum usage time, seconds, minimum 1 hour, maximum 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#max_use EmrAutoScaleStrategy#max_use}
  */
  readonly maxUse?: number;
  /**
  * Expansion resource calculation methods, "DEFAULT", "INSTANCE", "CPU", "MEMORYGB".
  * "DEFAULT" means the default mode, which has the same meaning as "INSTANCE".
  * "INSTANCE" means calculation based on nodes, the default method.
  * "CPU" means calculated based on the number of cores of the machine.
  * "MEMORYGB" means calculated based on the number of machine memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#measure_method EmrAutoScaleStrategy#measure_method}
  */
  readonly measureMethod?: string;
  /**
  * Rule priority, the smaller it is, the higher it is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#priority EmrAutoScaleStrategy#priority}
  */
  readonly priority: number;
  /**
  * When multiple rules are triggered at the same time and some of them are not actually executed, retries will be made within this time range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#retry_valid_time EmrAutoScaleStrategy#retry_valid_time}
  */
  readonly retryValidTime: number;
  /**
  * Expansion and contraction actions, 1 means expansion, 2 means shrinkage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#scale_action EmrAutoScaleStrategy#scale_action}
  */
  readonly scaleAction: number;
  /**
  * The number of expansions and contractions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#scale_num EmrAutoScaleStrategy#scale_num}
  */
  readonly scaleNum: number;
  /**
  * Start process list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#service_node_info EmrAutoScaleStrategy#service_node_info}
  */
  readonly serviceNodeInfo?: number[];
  /**
  * Node deployment service list. Only fill in HDFS and YARN for deployment services. [Mapping relationship table corresponding to component names](https://cloud.tencent.com/document/product/589/98760).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#soft_deploy_info EmrAutoScaleStrategy#soft_deploy_info}
  */
  readonly softDeployInfo?: number[];
  /**
  * Policy name, unique within the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#strategy_name EmrAutoScaleStrategy#strategy_name}
  */
  readonly strategyName: string;
  /**
  * Rule status, 1 means valid, 2 means invalid, and 3 means suspended. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#strategy_status EmrAutoScaleStrategy#strategy_status}
  */
  readonly strategyStatus: number;
  /**
  * Destruction strategy, "DEFAULT", the default destruction strategy, shrinkage is triggered by shrinkage rules, "TIMING" means scheduled destruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#terminate_policy EmrAutoScaleStrategy#terminate_policy}
  */
  readonly terminatePolicy?: string;
  /**
  * repeat_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#repeat_strategy EmrAutoScaleStrategy#repeat_strategy}
  */
  readonly repeatStrategy: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategy;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#tags EmrAutoScaleStrategy#tags}
  */
  readonly tags?: EmrAutoScaleStrategyTimeAutoScaleStrategyTags[] | cdktf.IResolvable;
}

export function emrAutoScaleStrategyTimeAutoScaleStrategyToTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compensate_flag: cdktf.numberToTerraform(struct!.compensateFlag),
    config_group_assigned: cdktf.stringToTerraform(struct!.configGroupAssigned),
    grace_down_flag: cdktf.booleanToTerraform(struct!.graceDownFlag),
    grace_down_time: cdktf.numberToTerraform(struct!.graceDownTime),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    interval_time: cdktf.numberToTerraform(struct!.intervalTime),
    max_use: cdktf.numberToTerraform(struct!.maxUse),
    measure_method: cdktf.stringToTerraform(struct!.measureMethod),
    priority: cdktf.numberToTerraform(struct!.priority),
    retry_valid_time: cdktf.numberToTerraform(struct!.retryValidTime),
    scale_action: cdktf.numberToTerraform(struct!.scaleAction),
    scale_num: cdktf.numberToTerraform(struct!.scaleNum),
    service_node_info: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.serviceNodeInfo),
    soft_deploy_info: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.softDeployInfo),
    strategy_name: cdktf.stringToTerraform(struct!.strategyName),
    strategy_status: cdktf.numberToTerraform(struct!.strategyStatus),
    terminate_policy: cdktf.stringToTerraform(struct!.terminatePolicy),
    repeat_strategy: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyToTerraform(struct!.repeatStrategy),
    tags: cdktf.listMapper(emrAutoScaleStrategyTimeAutoScaleStrategyTagsToTerraform, true)(struct!.tags),
  }
}


export function emrAutoScaleStrategyTimeAutoScaleStrategyToHclTerraform(struct?: EmrAutoScaleStrategyTimeAutoScaleStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compensate_flag: {
      value: cdktf.numberToHclTerraform(struct!.compensateFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_group_assigned: {
      value: cdktf.stringToHclTerraform(struct!.configGroupAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_down_flag: {
      value: cdktf.booleanToHclTerraform(struct!.graceDownFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_down_time: {
      value: cdktf.numberToHclTerraform(struct!.graceDownTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_time: {
      value: cdktf.numberToHclTerraform(struct!.intervalTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_use: {
      value: cdktf.numberToHclTerraform(struct!.maxUse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    measure_method: {
      value: cdktf.stringToHclTerraform(struct!.measureMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_valid_time: {
      value: cdktf.numberToHclTerraform(struct!.retryValidTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_action: {
      value: cdktf.numberToHclTerraform(struct!.scaleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_num: {
      value: cdktf.numberToHclTerraform(struct!.scaleNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_node_info: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.serviceNodeInfo),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    soft_deploy_info: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.softDeployInfo),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    strategy_name: {
      value: cdktf.stringToHclTerraform(struct!.strategyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_status: {
      value: cdktf.numberToHclTerraform(struct!.strategyStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminate_policy: {
      value: cdktf.stringToHclTerraform(struct!.terminatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_strategy: {
      value: emrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyToHclTerraform(struct!.repeatStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyList",
    },
    tags: {
      value: cdktf.listMapperHcl(emrAutoScaleStrategyTimeAutoScaleStrategyTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "EmrAutoScaleStrategyTimeAutoScaleStrategyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrAutoScaleStrategyTimeAutoScaleStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compensateFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.compensateFlag = this._compensateFlag;
    }
    if (this._configGroupAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.configGroupAssigned = this._configGroupAssigned;
    }
    if (this._graceDownFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceDownFlag = this._graceDownFlag;
    }
    if (this._graceDownTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.graceDownTime = this._graceDownTime;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._intervalTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalTime = this._intervalTime;
    }
    if (this._maxUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUse = this._maxUse;
    }
    if (this._measureMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureMethod = this._measureMethod;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retryValidTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryValidTime = this._retryValidTime;
    }
    if (this._scaleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleAction = this._scaleAction;
    }
    if (this._scaleNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleNum = this._scaleNum;
    }
    if (this._serviceNodeInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNodeInfo = this._serviceNodeInfo;
    }
    if (this._softDeployInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.softDeployInfo = this._softDeployInfo;
    }
    if (this._strategyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyName = this._strategyName;
    }
    if (this._strategyStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyStatus = this._strategyStatus;
    }
    if (this._terminatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminatePolicy = this._terminatePolicy;
    }
    if (this._repeatStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatStrategy = this._repeatStrategy?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrAutoScaleStrategyTimeAutoScaleStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compensateFlag = undefined;
      this._configGroupAssigned = undefined;
      this._graceDownFlag = undefined;
      this._graceDownTime = undefined;
      this._groupId = undefined;
      this._intervalTime = undefined;
      this._maxUse = undefined;
      this._measureMethod = undefined;
      this._priority = undefined;
      this._retryValidTime = undefined;
      this._scaleAction = undefined;
      this._scaleNum = undefined;
      this._serviceNodeInfo = undefined;
      this._softDeployInfo = undefined;
      this._strategyName = undefined;
      this._strategyStatus = undefined;
      this._terminatePolicy = undefined;
      this._repeatStrategy.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compensateFlag = value.compensateFlag;
      this._configGroupAssigned = value.configGroupAssigned;
      this._graceDownFlag = value.graceDownFlag;
      this._graceDownTime = value.graceDownTime;
      this._groupId = value.groupId;
      this._intervalTime = value.intervalTime;
      this._maxUse = value.maxUse;
      this._measureMethod = value.measureMethod;
      this._priority = value.priority;
      this._retryValidTime = value.retryValidTime;
      this._scaleAction = value.scaleAction;
      this._scaleNum = value.scaleNum;
      this._serviceNodeInfo = value.serviceNodeInfo;
      this._softDeployInfo = value.softDeployInfo;
      this._strategyName = value.strategyName;
      this._strategyStatus = value.strategyStatus;
      this._terminatePolicy = value.terminatePolicy;
      this._repeatStrategy.internalValue = value.repeatStrategy;
      this._tags.internalValue = value.tags;
    }
  }

  // compensate_flag - computed: false, optional: true, required: false
  private _compensateFlag?: number; 
  public get compensateFlag() {
    return this.getNumberAttribute('compensate_flag');
  }
  public set compensateFlag(value: number) {
    this._compensateFlag = value;
  }
  public resetCompensateFlag() {
    this._compensateFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compensateFlagInput() {
    return this._compensateFlag;
  }

  // config_group_assigned - computed: false, optional: true, required: false
  private _configGroupAssigned?: string; 
  public get configGroupAssigned() {
    return this.getStringAttribute('config_group_assigned');
  }
  public set configGroupAssigned(value: string) {
    this._configGroupAssigned = value;
  }
  public resetConfigGroupAssigned() {
    this._configGroupAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configGroupAssignedInput() {
    return this._configGroupAssigned;
  }

  // grace_down_flag - computed: false, optional: true, required: false
  private _graceDownFlag?: boolean | cdktf.IResolvable; 
  public get graceDownFlag() {
    return this.getBooleanAttribute('grace_down_flag');
  }
  public set graceDownFlag(value: boolean | cdktf.IResolvable) {
    this._graceDownFlag = value;
  }
  public resetGraceDownFlag() {
    this._graceDownFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceDownFlagInput() {
    return this._graceDownFlag;
  }

  // grace_down_time - computed: false, optional: true, required: false
  private _graceDownTime?: number; 
  public get graceDownTime() {
    return this.getNumberAttribute('grace_down_time');
  }
  public set graceDownTime(value: number) {
    this._graceDownTime = value;
  }
  public resetGraceDownTime() {
    this._graceDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceDownTimeInput() {
    return this._graceDownTime;
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

  // interval_time - computed: false, optional: false, required: true
  private _intervalTime?: number; 
  public get intervalTime() {
    return this.getNumberAttribute('interval_time');
  }
  public set intervalTime(value: number) {
    this._intervalTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalTimeInput() {
    return this._intervalTime;
  }

  // max_use - computed: false, optional: true, required: false
  private _maxUse?: number; 
  public get maxUse() {
    return this.getNumberAttribute('max_use');
  }
  public set maxUse(value: number) {
    this._maxUse = value;
  }
  public resetMaxUse() {
    this._maxUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUseInput() {
    return this._maxUse;
  }

  // measure_method - computed: false, optional: true, required: false
  private _measureMethod?: string; 
  public get measureMethod() {
    return this.getStringAttribute('measure_method');
  }
  public set measureMethod(value: string) {
    this._measureMethod = value;
  }
  public resetMeasureMethod() {
    this._measureMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureMethodInput() {
    return this._measureMethod;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retry_valid_time - computed: false, optional: false, required: true
  private _retryValidTime?: number; 
  public get retryValidTime() {
    return this.getNumberAttribute('retry_valid_time');
  }
  public set retryValidTime(value: number) {
    this._retryValidTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryValidTimeInput() {
    return this._retryValidTime;
  }

  // scale_action - computed: false, optional: false, required: true
  private _scaleAction?: number; 
  public get scaleAction() {
    return this.getNumberAttribute('scale_action');
  }
  public set scaleAction(value: number) {
    this._scaleAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleActionInput() {
    return this._scaleAction;
  }

  // scale_num - computed: false, optional: false, required: true
  private _scaleNum?: number; 
  public get scaleNum() {
    return this.getNumberAttribute('scale_num');
  }
  public set scaleNum(value: number) {
    this._scaleNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleNumInput() {
    return this._scaleNum;
  }

  // service_node_info - computed: false, optional: true, required: false
  private _serviceNodeInfo?: number[]; 
  public get serviceNodeInfo() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('service_node_info')));
  }
  public set serviceNodeInfo(value: number[]) {
    this._serviceNodeInfo = value;
  }
  public resetServiceNodeInfo() {
    this._serviceNodeInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeInfoInput() {
    return this._serviceNodeInfo;
  }

  // soft_deploy_info - computed: false, optional: true, required: false
  private _softDeployInfo?: number[]; 
  public get softDeployInfo() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('soft_deploy_info')));
  }
  public set softDeployInfo(value: number[]) {
    this._softDeployInfo = value;
  }
  public resetSoftDeployInfo() {
    this._softDeployInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeployInfoInput() {
    return this._softDeployInfo;
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getNumberAttribute('strategy_id');
  }

  // strategy_name - computed: false, optional: false, required: true
  private _strategyName?: string; 
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
  public set strategyName(value: string) {
    this._strategyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyNameInput() {
    return this._strategyName;
  }

  // strategy_status - computed: false, optional: false, required: true
  private _strategyStatus?: number; 
  public get strategyStatus() {
    return this.getNumberAttribute('strategy_status');
  }
  public set strategyStatus(value: number) {
    this._strategyStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyStatusInput() {
    return this._strategyStatus;
  }

  // terminate_policy - computed: false, optional: true, required: false
  private _terminatePolicy?: string; 
  public get terminatePolicy() {
    return this.getStringAttribute('terminate_policy');
  }
  public set terminatePolicy(value: string) {
    this._terminatePolicy = value;
  }
  public resetTerminatePolicy() {
    this._terminatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatePolicyInput() {
    return this._terminatePolicy;
  }

  // repeat_strategy - computed: false, optional: false, required: true
  private _repeatStrategy = new EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategyOutputReference(this, "repeat_strategy");
  public get repeatStrategy() {
    return this._repeatStrategy;
  }
  public putRepeatStrategy(value: EmrAutoScaleStrategyTimeAutoScaleStrategyRepeatStrategy) {
    this._repeatStrategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatStrategyInput() {
    return this._repeatStrategy.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new EmrAutoScaleStrategyTimeAutoScaleStrategyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EmrAutoScaleStrategyTimeAutoScaleStrategyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class EmrAutoScaleStrategyTimeAutoScaleStrategyList extends cdktf.ComplexList {
  public internalValue? : EmrAutoScaleStrategyTimeAutoScaleStrategy[] | cdktf.IResolvable

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
  public get(index: number): EmrAutoScaleStrategyTimeAutoScaleStrategyOutputReference {
    return new EmrAutoScaleStrategyTimeAutoScaleStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy tencentcloud_emr_auto_scale_strategy}
*/
export class EmrAutoScaleStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_emr_auto_scale_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrAutoScaleStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrAutoScaleStrategy to import
  * @param importFromId The id of the existing EmrAutoScaleStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrAutoScaleStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_emr_auto_scale_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/emr_auto_scale_strategy tencentcloud_emr_auto_scale_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrAutoScaleStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: EmrAutoScaleStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_emr_auto_scale_strategy',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._strategyType = config.strategyType;
    this._loadAutoScaleStrategy.internalValue = config.loadAutoScaleStrategy;
    this._timeAutoScaleStrategy.internalValue = config.timeAutoScaleStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // strategy_type - computed: false, optional: false, required: true
  private _strategyType?: number; 
  public get strategyType() {
    return this.getNumberAttribute('strategy_type');
  }
  public set strategyType(value: number) {
    this._strategyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }

  // load_auto_scale_strategy - computed: false, optional: true, required: false
  private _loadAutoScaleStrategy = new EmrAutoScaleStrategyLoadAutoScaleStrategyList(this, "load_auto_scale_strategy", false);
  public get loadAutoScaleStrategy() {
    return this._loadAutoScaleStrategy;
  }
  public putLoadAutoScaleStrategy(value: EmrAutoScaleStrategyLoadAutoScaleStrategy[] | cdktf.IResolvable) {
    this._loadAutoScaleStrategy.internalValue = value;
  }
  public resetLoadAutoScaleStrategy() {
    this._loadAutoScaleStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadAutoScaleStrategyInput() {
    return this._loadAutoScaleStrategy.internalValue;
  }

  // time_auto_scale_strategy - computed: false, optional: true, required: false
  private _timeAutoScaleStrategy = new EmrAutoScaleStrategyTimeAutoScaleStrategyList(this, "time_auto_scale_strategy", false);
  public get timeAutoScaleStrategy() {
    return this._timeAutoScaleStrategy;
  }
  public putTimeAutoScaleStrategy(value: EmrAutoScaleStrategyTimeAutoScaleStrategy[] | cdktf.IResolvable) {
    this._timeAutoScaleStrategy.internalValue = value;
  }
  public resetTimeAutoScaleStrategy() {
    this._timeAutoScaleStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAutoScaleStrategyInput() {
    return this._timeAutoScaleStrategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      strategy_type: cdktf.numberToTerraform(this._strategyType),
      load_auto_scale_strategy: cdktf.listMapper(emrAutoScaleStrategyLoadAutoScaleStrategyToTerraform, true)(this._loadAutoScaleStrategy.internalValue),
      time_auto_scale_strategy: cdktf.listMapper(emrAutoScaleStrategyTimeAutoScaleStrategyToTerraform, true)(this._timeAutoScaleStrategy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_type: {
        value: cdktf.numberToHclTerraform(this._strategyType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_auto_scale_strategy: {
        value: cdktf.listMapperHcl(emrAutoScaleStrategyLoadAutoScaleStrategyToHclTerraform, true)(this._loadAutoScaleStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrAutoScaleStrategyLoadAutoScaleStrategyList",
      },
      time_auto_scale_strategy: {
        value: cdktf.listMapperHcl(emrAutoScaleStrategyTimeAutoScaleStrategyToHclTerraform, true)(this._timeAutoScaleStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrAutoScaleStrategyTimeAutoScaleStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
