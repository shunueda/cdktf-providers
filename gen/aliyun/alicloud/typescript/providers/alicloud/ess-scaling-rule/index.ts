// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssScalingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#adjustment_type EssScalingRule#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#adjustment_value EssScalingRule#adjustment_value}
  */
  readonly adjustmentValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#cooldown EssScalingRule#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#disable_scale_in EssScalingRule#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#estimated_instance_warmup EssScalingRule#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#hybrid_monitor_namespace EssScalingRule#hybrid_monitor_namespace}
  */
  readonly hybridMonitorNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#id EssScalingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#initial_max_size EssScalingRule#initial_max_size}
  */
  readonly initialMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#metric_name EssScalingRule#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#metric_type EssScalingRule#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#min_adjustment_magnitude EssScalingRule#min_adjustment_magnitude}
  */
  readonly minAdjustmentMagnitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#predictive_scaling_mode EssScalingRule#predictive_scaling_mode}
  */
  readonly predictiveScalingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#predictive_task_buffer_time EssScalingRule#predictive_task_buffer_time}
  */
  readonly predictiveTaskBufferTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#predictive_value_behavior EssScalingRule#predictive_value_behavior}
  */
  readonly predictiveValueBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#predictive_value_buffer EssScalingRule#predictive_value_buffer}
  */
  readonly predictiveValueBuffer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#scale_in_evaluation_count EssScalingRule#scale_in_evaluation_count}
  */
  readonly scaleInEvaluationCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#scale_out_evaluation_count EssScalingRule#scale_out_evaluation_count}
  */
  readonly scaleOutEvaluationCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#scaling_group_id EssScalingRule#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#scaling_rule_name EssScalingRule#scaling_rule_name}
  */
  readonly scalingRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#scaling_rule_type EssScalingRule#scaling_rule_type}
  */
  readonly scalingRuleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#target_value EssScalingRule#target_value}
  */
  readonly targetValue?: number;
  /**
  * alarm_dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#alarm_dimension EssScalingRule#alarm_dimension}
  */
  readonly alarmDimension?: EssScalingRuleAlarmDimension;
  /**
  * hybrid_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#hybrid_metrics EssScalingRule#hybrid_metrics}
  */
  readonly hybridMetrics?: EssScalingRuleHybridMetrics[] | cdktf.IResolvable;
  /**
  * step_adjustment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#step_adjustment EssScalingRule#step_adjustment}
  */
  readonly stepAdjustment?: EssScalingRuleStepAdjustment[] | cdktf.IResolvable;
}
export interface EssScalingRuleAlarmDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#dimension_key EssScalingRule#dimension_key}
  */
  readonly dimensionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#dimension_value EssScalingRule#dimension_value}
  */
  readonly dimensionValue?: string;
}

export function essScalingRuleAlarmDimensionToTerraform(struct?: EssScalingRuleAlarmDimensionOutputReference | EssScalingRuleAlarmDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension_key: cdktf.stringToTerraform(struct!.dimensionKey),
    dimension_value: cdktf.stringToTerraform(struct!.dimensionValue),
  }
}


export function essScalingRuleAlarmDimensionToHclTerraform(struct?: EssScalingRuleAlarmDimensionOutputReference | EssScalingRuleAlarmDimension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension_key: {
      value: cdktf.stringToHclTerraform(struct!.dimensionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_value: {
      value: cdktf.stringToHclTerraform(struct!.dimensionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingRuleAlarmDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EssScalingRuleAlarmDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionKey = this._dimensionKey;
    }
    if (this._dimensionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValue = this._dimensionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingRuleAlarmDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensionKey = undefined;
      this._dimensionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensionKey = value.dimensionKey;
      this._dimensionValue = value.dimensionValue;
    }
  }

  // dimension_key - computed: false, optional: true, required: false
  private _dimensionKey?: string; 
  public get dimensionKey() {
    return this.getStringAttribute('dimension_key');
  }
  public set dimensionKey(value: string) {
    this._dimensionKey = value;
  }
  public resetDimensionKey() {
    this._dimensionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionKeyInput() {
    return this._dimensionKey;
  }

  // dimension_value - computed: false, optional: true, required: false
  private _dimensionValue?: string; 
  public get dimensionValue() {
    return this.getStringAttribute('dimension_value');
  }
  public set dimensionValue(value: string) {
    this._dimensionValue = value;
  }
  public resetDimensionValue() {
    this._dimensionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueInput() {
    return this._dimensionValue;
  }
}
export interface EssScalingRuleHybridMetricsDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#dimension_key EssScalingRule#dimension_key}
  */
  readonly dimensionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#dimension_value EssScalingRule#dimension_value}
  */
  readonly dimensionValue?: string;
}

export function essScalingRuleHybridMetricsDimensionsToTerraform(struct?: EssScalingRuleHybridMetricsDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension_key: cdktf.stringToTerraform(struct!.dimensionKey),
    dimension_value: cdktf.stringToTerraform(struct!.dimensionValue),
  }
}


export function essScalingRuleHybridMetricsDimensionsToHclTerraform(struct?: EssScalingRuleHybridMetricsDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension_key: {
      value: cdktf.stringToHclTerraform(struct!.dimensionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_value: {
      value: cdktf.stringToHclTerraform(struct!.dimensionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingRuleHybridMetricsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingRuleHybridMetricsDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionKey = this._dimensionKey;
    }
    if (this._dimensionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValue = this._dimensionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingRuleHybridMetricsDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionKey = undefined;
      this._dimensionValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionKey = value.dimensionKey;
      this._dimensionValue = value.dimensionValue;
    }
  }

  // dimension_key - computed: false, optional: true, required: false
  private _dimensionKey?: string; 
  public get dimensionKey() {
    return this.getStringAttribute('dimension_key');
  }
  public set dimensionKey(value: string) {
    this._dimensionKey = value;
  }
  public resetDimensionKey() {
    this._dimensionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionKeyInput() {
    return this._dimensionKey;
  }

  // dimension_value - computed: false, optional: true, required: false
  private _dimensionValue?: string; 
  public get dimensionValue() {
    return this.getStringAttribute('dimension_value');
  }
  public set dimensionValue(value: string) {
    this._dimensionValue = value;
  }
  public resetDimensionValue() {
    this._dimensionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueInput() {
    return this._dimensionValue;
  }
}

export class EssScalingRuleHybridMetricsDimensionsList extends cdktf.ComplexList {
  public internalValue? : EssScalingRuleHybridMetricsDimensions[] | cdktf.IResolvable

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
  public get(index: number): EssScalingRuleHybridMetricsDimensionsOutputReference {
    return new EssScalingRuleHybridMetricsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingRuleHybridMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#expression EssScalingRule#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#id EssScalingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#metric_name EssScalingRule#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#statistic EssScalingRule#statistic}
  */
  readonly statistic?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#dimensions EssScalingRule#dimensions}
  */
  readonly dimensions?: EssScalingRuleHybridMetricsDimensions[] | cdktf.IResolvable;
}

export function essScalingRuleHybridMetricsToTerraform(struct?: EssScalingRuleHybridMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    dimensions: cdktf.listMapper(essScalingRuleHybridMetricsDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function essScalingRuleHybridMetricsToHclTerraform(struct?: EssScalingRuleHybridMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(essScalingRuleHybridMetricsDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "EssScalingRuleHybridMetricsDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingRuleHybridMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingRuleHybridMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingRuleHybridMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._metricName = undefined;
      this._statistic = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._id = value.id;
      this._metricName = value.metricName;
      this._statistic = value.statistic;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: false, optional: true, required: false
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

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new EssScalingRuleHybridMetricsDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: EssScalingRuleHybridMetricsDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class EssScalingRuleHybridMetricsList extends cdktf.ComplexList {
  public internalValue? : EssScalingRuleHybridMetrics[] | cdktf.IResolvable

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
  public get(index: number): EssScalingRuleHybridMetricsOutputReference {
    return new EssScalingRuleHybridMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingRuleStepAdjustment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#metric_interval_lower_bound EssScalingRule#metric_interval_lower_bound}
  */
  readonly metricIntervalLowerBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#metric_interval_upper_bound EssScalingRule#metric_interval_upper_bound}
  */
  readonly metricIntervalUpperBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#scaling_adjustment EssScalingRule#scaling_adjustment}
  */
  readonly scalingAdjustment?: number;
}

export function essScalingRuleStepAdjustmentToTerraform(struct?: EssScalingRuleStepAdjustment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_interval_lower_bound: cdktf.stringToTerraform(struct!.metricIntervalLowerBound),
    metric_interval_upper_bound: cdktf.stringToTerraform(struct!.metricIntervalUpperBound),
    scaling_adjustment: cdktf.numberToTerraform(struct!.scalingAdjustment),
  }
}


export function essScalingRuleStepAdjustmentToHclTerraform(struct?: EssScalingRuleStepAdjustment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_interval_lower_bound: {
      value: cdktf.stringToHclTerraform(struct!.metricIntervalLowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_interval_upper_bound: {
      value: cdktf.stringToHclTerraform(struct!.metricIntervalUpperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.scalingAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingRuleStepAdjustmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingRuleStepAdjustment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricIntervalLowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalLowerBound = this._metricIntervalLowerBound;
    }
    if (this._metricIntervalUpperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalUpperBound = this._metricIntervalUpperBound;
    }
    if (this._scalingAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingAdjustment = this._scalingAdjustment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingRuleStepAdjustment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = undefined;
      this._metricIntervalUpperBound = undefined;
      this._scalingAdjustment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = value.metricIntervalLowerBound;
      this._metricIntervalUpperBound = value.metricIntervalUpperBound;
      this._scalingAdjustment = value.scalingAdjustment;
    }
  }

  // metric_interval_lower_bound - computed: false, optional: true, required: false
  private _metricIntervalLowerBound?: string; 
  public get metricIntervalLowerBound() {
    return this.getStringAttribute('metric_interval_lower_bound');
  }
  public set metricIntervalLowerBound(value: string) {
    this._metricIntervalLowerBound = value;
  }
  public resetMetricIntervalLowerBound() {
    this._metricIntervalLowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalLowerBoundInput() {
    return this._metricIntervalLowerBound;
  }

  // metric_interval_upper_bound - computed: false, optional: true, required: false
  private _metricIntervalUpperBound?: string; 
  public get metricIntervalUpperBound() {
    return this.getStringAttribute('metric_interval_upper_bound');
  }
  public set metricIntervalUpperBound(value: string) {
    this._metricIntervalUpperBound = value;
  }
  public resetMetricIntervalUpperBound() {
    this._metricIntervalUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalUpperBoundInput() {
    return this._metricIntervalUpperBound;
  }

  // scaling_adjustment - computed: false, optional: true, required: false
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  public resetScalingAdjustment() {
    this._scalingAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }
}

export class EssScalingRuleStepAdjustmentList extends cdktf.ComplexList {
  public internalValue? : EssScalingRuleStepAdjustment[] | cdktf.IResolvable

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
  public get(index: number): EssScalingRuleStepAdjustmentOutputReference {
    return new EssScalingRuleStepAdjustmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule alicloud_ess_scaling_rule}
*/
export class EssScalingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_scaling_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssScalingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssScalingRule to import
  * @param importFromId The id of the existing EssScalingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssScalingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_scaling_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ess_scaling_rule alicloud_ess_scaling_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssScalingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: EssScalingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_scaling_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adjustmentType = config.adjustmentType;
    this._adjustmentValue = config.adjustmentValue;
    this._cooldown = config.cooldown;
    this._disableScaleIn = config.disableScaleIn;
    this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
    this._hybridMonitorNamespace = config.hybridMonitorNamespace;
    this._id = config.id;
    this._initialMaxSize = config.initialMaxSize;
    this._metricName = config.metricName;
    this._metricType = config.metricType;
    this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
    this._predictiveScalingMode = config.predictiveScalingMode;
    this._predictiveTaskBufferTime = config.predictiveTaskBufferTime;
    this._predictiveValueBehavior = config.predictiveValueBehavior;
    this._predictiveValueBuffer = config.predictiveValueBuffer;
    this._scaleInEvaluationCount = config.scaleInEvaluationCount;
    this._scaleOutEvaluationCount = config.scaleOutEvaluationCount;
    this._scalingGroupId = config.scalingGroupId;
    this._scalingRuleName = config.scalingRuleName;
    this._scalingRuleType = config.scalingRuleType;
    this._targetValue = config.targetValue;
    this._alarmDimension.internalValue = config.alarmDimension;
    this._hybridMetrics.internalValue = config.hybridMetrics;
    this._stepAdjustment.internalValue = config.stepAdjustment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type - computed: false, optional: true, required: false
  private _adjustmentType?: string; 
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string) {
    this._adjustmentType = value;
  }
  public resetAdjustmentType() {
    this._adjustmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType;
  }

  // adjustment_value - computed: false, optional: true, required: false
  private _adjustmentValue?: number; 
  public get adjustmentValue() {
    return this.getNumberAttribute('adjustment_value');
  }
  public set adjustmentValue(value: number) {
    this._adjustmentValue = value;
  }
  public resetAdjustmentValue() {
    this._adjustmentValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentValueInput() {
    return this._adjustmentValue;
  }

  // ari - computed: true, optional: false, required: false
  public get ari() {
    return this.getStringAttribute('ari');
  }

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // disable_scale_in - computed: false, optional: true, required: false
  private _disableScaleIn?: boolean | cdktf.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktf.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
  }

  // estimated_instance_warmup - computed: true, optional: true, required: false
  private _estimatedInstanceWarmup?: number; 
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup;
  }

  // hybrid_monitor_namespace - computed: false, optional: true, required: false
  private _hybridMonitorNamespace?: string; 
  public get hybridMonitorNamespace() {
    return this.getStringAttribute('hybrid_monitor_namespace');
  }
  public set hybridMonitorNamespace(value: string) {
    this._hybridMonitorNamespace = value;
  }
  public resetHybridMonitorNamespace() {
    this._hybridMonitorNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridMonitorNamespaceInput() {
    return this._hybridMonitorNamespace;
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

  // initial_max_size - computed: true, optional: true, required: false
  private _initialMaxSize?: number; 
  public get initialMaxSize() {
    return this.getNumberAttribute('initial_max_size');
  }
  public set initialMaxSize(value: number) {
    this._initialMaxSize = value;
  }
  public resetInitialMaxSize() {
    this._initialMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialMaxSizeInput() {
    return this._initialMaxSize;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // min_adjustment_magnitude - computed: false, optional: true, required: false
  private _minAdjustmentMagnitude?: number; 
  public get minAdjustmentMagnitude() {
    return this.getNumberAttribute('min_adjustment_magnitude');
  }
  public set minAdjustmentMagnitude(value: number) {
    this._minAdjustmentMagnitude = value;
  }
  public resetMinAdjustmentMagnitude() {
    this._minAdjustmentMagnitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentMagnitudeInput() {
    return this._minAdjustmentMagnitude;
  }

  // predictive_scaling_mode - computed: true, optional: true, required: false
  private _predictiveScalingMode?: string; 
  public get predictiveScalingMode() {
    return this.getStringAttribute('predictive_scaling_mode');
  }
  public set predictiveScalingMode(value: string) {
    this._predictiveScalingMode = value;
  }
  public resetPredictiveScalingMode() {
    this._predictiveScalingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingModeInput() {
    return this._predictiveScalingMode;
  }

  // predictive_task_buffer_time - computed: true, optional: true, required: false
  private _predictiveTaskBufferTime?: number; 
  public get predictiveTaskBufferTime() {
    return this.getNumberAttribute('predictive_task_buffer_time');
  }
  public set predictiveTaskBufferTime(value: number) {
    this._predictiveTaskBufferTime = value;
  }
  public resetPredictiveTaskBufferTime() {
    this._predictiveTaskBufferTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveTaskBufferTimeInput() {
    return this._predictiveTaskBufferTime;
  }

  // predictive_value_behavior - computed: true, optional: true, required: false
  private _predictiveValueBehavior?: string; 
  public get predictiveValueBehavior() {
    return this.getStringAttribute('predictive_value_behavior');
  }
  public set predictiveValueBehavior(value: string) {
    this._predictiveValueBehavior = value;
  }
  public resetPredictiveValueBehavior() {
    this._predictiveValueBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveValueBehaviorInput() {
    return this._predictiveValueBehavior;
  }

  // predictive_value_buffer - computed: true, optional: true, required: false
  private _predictiveValueBuffer?: number; 
  public get predictiveValueBuffer() {
    return this.getNumberAttribute('predictive_value_buffer');
  }
  public set predictiveValueBuffer(value: number) {
    this._predictiveValueBuffer = value;
  }
  public resetPredictiveValueBuffer() {
    this._predictiveValueBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveValueBufferInput() {
    return this._predictiveValueBuffer;
  }

  // scale_in_evaluation_count - computed: true, optional: true, required: false
  private _scaleInEvaluationCount?: number; 
  public get scaleInEvaluationCount() {
    return this.getNumberAttribute('scale_in_evaluation_count');
  }
  public set scaleInEvaluationCount(value: number) {
    this._scaleInEvaluationCount = value;
  }
  public resetScaleInEvaluationCount() {
    this._scaleInEvaluationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInEvaluationCountInput() {
    return this._scaleInEvaluationCount;
  }

  // scale_out_evaluation_count - computed: true, optional: true, required: false
  private _scaleOutEvaluationCount?: number; 
  public get scaleOutEvaluationCount() {
    return this.getNumberAttribute('scale_out_evaluation_count');
  }
  public set scaleOutEvaluationCount(value: number) {
    this._scaleOutEvaluationCount = value;
  }
  public resetScaleOutEvaluationCount() {
    this._scaleOutEvaluationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutEvaluationCountInput() {
    return this._scaleOutEvaluationCount;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // scaling_rule_name - computed: true, optional: true, required: false
  private _scalingRuleName?: string; 
  public get scalingRuleName() {
    return this.getStringAttribute('scaling_rule_name');
  }
  public set scalingRuleName(value: string) {
    this._scalingRuleName = value;
  }
  public resetScalingRuleName() {
    this._scalingRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleNameInput() {
    return this._scalingRuleName;
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

  // target_value - computed: false, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }

  // alarm_dimension - computed: false, optional: true, required: false
  private _alarmDimension = new EssScalingRuleAlarmDimensionOutputReference(this, "alarm_dimension");
  public get alarmDimension() {
    return this._alarmDimension;
  }
  public putAlarmDimension(value: EssScalingRuleAlarmDimension) {
    this._alarmDimension.internalValue = value;
  }
  public resetAlarmDimension() {
    this._alarmDimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDimensionInput() {
    return this._alarmDimension.internalValue;
  }

  // hybrid_metrics - computed: false, optional: true, required: false
  private _hybridMetrics = new EssScalingRuleHybridMetricsList(this, "hybrid_metrics", false);
  public get hybridMetrics() {
    return this._hybridMetrics;
  }
  public putHybridMetrics(value: EssScalingRuleHybridMetrics[] | cdktf.IResolvable) {
    this._hybridMetrics.internalValue = value;
  }
  public resetHybridMetrics() {
    this._hybridMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridMetricsInput() {
    return this._hybridMetrics.internalValue;
  }

  // step_adjustment - computed: false, optional: true, required: false
  private _stepAdjustment = new EssScalingRuleStepAdjustmentList(this, "step_adjustment", false);
  public get stepAdjustment() {
    return this._stepAdjustment;
  }
  public putStepAdjustment(value: EssScalingRuleStepAdjustment[] | cdktf.IResolvable) {
    this._stepAdjustment.internalValue = value;
  }
  public resetStepAdjustment() {
    this._stepAdjustment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentInput() {
    return this._stepAdjustment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
      adjustment_value: cdktf.numberToTerraform(this._adjustmentValue),
      cooldown: cdktf.numberToTerraform(this._cooldown),
      disable_scale_in: cdktf.booleanToTerraform(this._disableScaleIn),
      estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
      hybrid_monitor_namespace: cdktf.stringToTerraform(this._hybridMonitorNamespace),
      id: cdktf.stringToTerraform(this._id),
      initial_max_size: cdktf.numberToTerraform(this._initialMaxSize),
      metric_name: cdktf.stringToTerraform(this._metricName),
      metric_type: cdktf.stringToTerraform(this._metricType),
      min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
      predictive_scaling_mode: cdktf.stringToTerraform(this._predictiveScalingMode),
      predictive_task_buffer_time: cdktf.numberToTerraform(this._predictiveTaskBufferTime),
      predictive_value_behavior: cdktf.stringToTerraform(this._predictiveValueBehavior),
      predictive_value_buffer: cdktf.numberToTerraform(this._predictiveValueBuffer),
      scale_in_evaluation_count: cdktf.numberToTerraform(this._scaleInEvaluationCount),
      scale_out_evaluation_count: cdktf.numberToTerraform(this._scaleOutEvaluationCount),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      scaling_rule_name: cdktf.stringToTerraform(this._scalingRuleName),
      scaling_rule_type: cdktf.stringToTerraform(this._scalingRuleType),
      target_value: cdktf.numberToTerraform(this._targetValue),
      alarm_dimension: essScalingRuleAlarmDimensionToTerraform(this._alarmDimension.internalValue),
      hybrid_metrics: cdktf.listMapper(essScalingRuleHybridMetricsToTerraform, true)(this._hybridMetrics.internalValue),
      step_adjustment: cdktf.listMapper(essScalingRuleStepAdjustmentToTerraform, true)(this._stepAdjustment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adjustment_type: {
        value: cdktf.stringToHclTerraform(this._adjustmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adjustment_value: {
        value: cdktf.numberToHclTerraform(this._adjustmentValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cooldown: {
        value: cdktf.numberToHclTerraform(this._cooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_scale_in: {
        value: cdktf.booleanToHclTerraform(this._disableScaleIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      estimated_instance_warmup: {
        value: cdktf.numberToHclTerraform(this._estimatedInstanceWarmup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hybrid_monitor_namespace: {
        value: cdktf.stringToHclTerraform(this._hybridMonitorNamespace),
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
      initial_max_size: {
        value: cdktf.numberToHclTerraform(this._initialMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_adjustment_magnitude: {
        value: cdktf.numberToHclTerraform(this._minAdjustmentMagnitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      predictive_scaling_mode: {
        value: cdktf.stringToHclTerraform(this._predictiveScalingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predictive_task_buffer_time: {
        value: cdktf.numberToHclTerraform(this._predictiveTaskBufferTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      predictive_value_behavior: {
        value: cdktf.stringToHclTerraform(this._predictiveValueBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predictive_value_buffer: {
        value: cdktf.numberToHclTerraform(this._predictiveValueBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_in_evaluation_count: {
        value: cdktf.numberToHclTerraform(this._scaleInEvaluationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scale_out_evaluation_count: {
        value: cdktf.numberToHclTerraform(this._scaleOutEvaluationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_rule_name: {
        value: cdktf.stringToHclTerraform(this._scalingRuleName),
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
      target_value: {
        value: cdktf.numberToHclTerraform(this._targetValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alarm_dimension: {
        value: essScalingRuleAlarmDimensionToHclTerraform(this._alarmDimension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssScalingRuleAlarmDimensionList",
      },
      hybrid_metrics: {
        value: cdktf.listMapperHcl(essScalingRuleHybridMetricsToHclTerraform, true)(this._hybridMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssScalingRuleHybridMetricsList",
      },
      step_adjustment: {
        value: cdktf.listMapperHcl(essScalingRuleStepAdjustmentToHclTerraform, true)(this._stepAdjustment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssScalingRuleStepAdjustmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
