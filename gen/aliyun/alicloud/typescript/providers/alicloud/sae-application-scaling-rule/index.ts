// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SaeApplicationScalingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#app_id SaeApplicationScalingRule#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#id SaeApplicationScalingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#min_ready_instance_ratio SaeApplicationScalingRule#min_ready_instance_ratio}
  */
  readonly minReadyInstanceRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#min_ready_instances SaeApplicationScalingRule#min_ready_instances}
  */
  readonly minReadyInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#scaling_rule_enable SaeApplicationScalingRule#scaling_rule_enable}
  */
  readonly scalingRuleEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#scaling_rule_name SaeApplicationScalingRule#scaling_rule_name}
  */
  readonly scalingRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#scaling_rule_type SaeApplicationScalingRule#scaling_rule_type}
  */
  readonly scalingRuleType: string;
  /**
  * scaling_rule_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#scaling_rule_metric SaeApplicationScalingRule#scaling_rule_metric}
  */
  readonly scalingRuleMetric?: SaeApplicationScalingRuleScalingRuleMetric;
  /**
  * scaling_rule_timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#scaling_rule_timer SaeApplicationScalingRule#scaling_rule_timer}
  */
  readonly scalingRuleTimer?: SaeApplicationScalingRuleScalingRuleTimer;
}
export interface SaeApplicationScalingRuleScalingRuleMetricMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#metric_target_average_utilization SaeApplicationScalingRule#metric_target_average_utilization}
  */
  readonly metricTargetAverageUtilization?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#metric_type SaeApplicationScalingRule#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#slb_id SaeApplicationScalingRule#slb_id}
  */
  readonly slbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#slb_log_store SaeApplicationScalingRule#slb_log_store}
  */
  readonly slbLogStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#slb_project SaeApplicationScalingRule#slb_project}
  */
  readonly slbProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#vport SaeApplicationScalingRule#vport}
  */
  readonly vport?: string;
}

export function saeApplicationScalingRuleScalingRuleMetricMetricsToTerraform(struct?: SaeApplicationScalingRuleScalingRuleMetricMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_target_average_utilization: cdktf.numberToTerraform(struct!.metricTargetAverageUtilization),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    slb_id: cdktf.stringToTerraform(struct!.slbId),
    slb_log_store: cdktf.stringToTerraform(struct!.slbLogStore),
    slb_project: cdktf.stringToTerraform(struct!.slbProject),
    vport: cdktf.stringToTerraform(struct!.vport),
  }
}


export function saeApplicationScalingRuleScalingRuleMetricMetricsToHclTerraform(struct?: SaeApplicationScalingRuleScalingRuleMetricMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_target_average_utilization: {
      value: cdktf.numberToHclTerraform(struct!.metricTargetAverageUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slb_id: {
      value: cdktf.stringToHclTerraform(struct!.slbId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slb_log_store: {
      value: cdktf.stringToHclTerraform(struct!.slbLogStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slb_project: {
      value: cdktf.stringToHclTerraform(struct!.slbProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vport: {
      value: cdktf.stringToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationScalingRuleScalingRuleMetricMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SaeApplicationScalingRuleScalingRuleMetricMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricTargetAverageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTargetAverageUtilization = this._metricTargetAverageUtilization;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._slbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbId = this._slbId;
    }
    if (this._slbLogStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbLogStore = this._slbLogStore;
    }
    if (this._slbProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbProject = this._slbProject;
    }
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationScalingRuleScalingRuleMetricMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricTargetAverageUtilization = undefined;
      this._metricType = undefined;
      this._slbId = undefined;
      this._slbLogStore = undefined;
      this._slbProject = undefined;
      this._vport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricTargetAverageUtilization = value.metricTargetAverageUtilization;
      this._metricType = value.metricType;
      this._slbId = value.slbId;
      this._slbLogStore = value.slbLogStore;
      this._slbProject = value.slbProject;
      this._vport = value.vport;
    }
  }

  // metric_target_average_utilization - computed: false, optional: true, required: false
  private _metricTargetAverageUtilization?: number; 
  public get metricTargetAverageUtilization() {
    return this.getNumberAttribute('metric_target_average_utilization');
  }
  public set metricTargetAverageUtilization(value: number) {
    this._metricTargetAverageUtilization = value;
  }
  public resetMetricTargetAverageUtilization() {
    this._metricTargetAverageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTargetAverageUtilizationInput() {
    return this._metricTargetAverageUtilization;
  }

  // metric_type - computed: false, optional: true, required: false
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

  // slb_id - computed: false, optional: true, required: false
  private _slbId?: string; 
  public get slbId() {
    return this.getStringAttribute('slb_id');
  }
  public set slbId(value: string) {
    this._slbId = value;
  }
  public resetSlbId() {
    this._slbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbIdInput() {
    return this._slbId;
  }

  // slb_log_store - computed: false, optional: true, required: false
  private _slbLogStore?: string; 
  public get slbLogStore() {
    return this.getStringAttribute('slb_log_store');
  }
  public set slbLogStore(value: string) {
    this._slbLogStore = value;
  }
  public resetSlbLogStore() {
    this._slbLogStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbLogStoreInput() {
    return this._slbLogStore;
  }

  // slb_project - computed: false, optional: true, required: false
  private _slbProject?: string; 
  public get slbProject() {
    return this.getStringAttribute('slb_project');
  }
  public set slbProject(value: string) {
    this._slbProject = value;
  }
  public resetSlbProject() {
    this._slbProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbProjectInput() {
    return this._slbProject;
  }

  // vport - computed: false, optional: true, required: false
  private _vport?: string; 
  public get vport() {
    return this.getStringAttribute('vport');
  }
  public set vport(value: string) {
    this._vport = value;
  }
  public resetVport() {
    this._vport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }
}

export class SaeApplicationScalingRuleScalingRuleMetricMetricsList extends cdktf.ComplexList {
  public internalValue? : SaeApplicationScalingRuleScalingRuleMetricMetrics[] | cdktf.IResolvable

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
  public get(index: number): SaeApplicationScalingRuleScalingRuleMetricMetricsOutputReference {
    return new SaeApplicationScalingRuleScalingRuleMetricMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaeApplicationScalingRuleScalingRuleMetricScaleDownRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#disabled SaeApplicationScalingRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#stabilization_window_seconds SaeApplicationScalingRule#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#step SaeApplicationScalingRule#step}
  */
  readonly step?: number;
}

export function saeApplicationScalingRuleScalingRuleMetricScaleDownRulesToTerraform(struct?: SaeApplicationScalingRuleScalingRuleMetricScaleDownRulesOutputReference | SaeApplicationScalingRuleScalingRuleMetricScaleDownRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    step: cdktf.numberToTerraform(struct!.step),
  }
}


export function saeApplicationScalingRuleScalingRuleMetricScaleDownRulesToHclTerraform(struct?: SaeApplicationScalingRuleScalingRuleMetricScaleDownRulesOutputReference | SaeApplicationScalingRuleScalingRuleMetricScaleDownRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stabilization_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SaeApplicationScalingRuleScalingRuleMetricScaleDownRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationScalingRuleScalingRuleMetricScaleDownRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._stabilizationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindowSeconds = this._stabilizationWindowSeconds;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationScalingRuleScalingRuleMetricScaleDownRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._stabilizationWindowSeconds = undefined;
      this._step = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._stabilizationWindowSeconds = value.stabilizationWindowSeconds;
      this._step = value.step;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // stabilization_window_seconds - computed: false, optional: true, required: false
  private _stabilizationWindowSeconds?: number; 
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }
  public set stabilizationWindowSeconds(value: number) {
    this._stabilizationWindowSeconds = value;
  }
  public resetStabilizationWindowSeconds() {
    this._stabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowSecondsInput() {
    return this._stabilizationWindowSeconds;
  }

  // step - computed: false, optional: true, required: false
  private _step?: number; 
  public get step() {
    return this.getNumberAttribute('step');
  }
  public set step(value: number) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}
export interface SaeApplicationScalingRuleScalingRuleMetricScaleUpRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#disabled SaeApplicationScalingRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#stabilization_window_seconds SaeApplicationScalingRule#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#step SaeApplicationScalingRule#step}
  */
  readonly step?: number;
}

export function saeApplicationScalingRuleScalingRuleMetricScaleUpRulesToTerraform(struct?: SaeApplicationScalingRuleScalingRuleMetricScaleUpRulesOutputReference | SaeApplicationScalingRuleScalingRuleMetricScaleUpRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    step: cdktf.numberToTerraform(struct!.step),
  }
}


export function saeApplicationScalingRuleScalingRuleMetricScaleUpRulesToHclTerraform(struct?: SaeApplicationScalingRuleScalingRuleMetricScaleUpRulesOutputReference | SaeApplicationScalingRuleScalingRuleMetricScaleUpRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stabilization_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SaeApplicationScalingRuleScalingRuleMetricScaleUpRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationScalingRuleScalingRuleMetricScaleUpRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._stabilizationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindowSeconds = this._stabilizationWindowSeconds;
    }
    if (this._step !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationScalingRuleScalingRuleMetricScaleUpRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._stabilizationWindowSeconds = undefined;
      this._step = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._stabilizationWindowSeconds = value.stabilizationWindowSeconds;
      this._step = value.step;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // stabilization_window_seconds - computed: false, optional: true, required: false
  private _stabilizationWindowSeconds?: number; 
  public get stabilizationWindowSeconds() {
    return this.getNumberAttribute('stabilization_window_seconds');
  }
  public set stabilizationWindowSeconds(value: number) {
    this._stabilizationWindowSeconds = value;
  }
  public resetStabilizationWindowSeconds() {
    this._stabilizationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowSecondsInput() {
    return this._stabilizationWindowSeconds;
  }

  // step - computed: false, optional: true, required: false
  private _step?: number; 
  public get step() {
    return this.getNumberAttribute('step');
  }
  public set step(value: number) {
    this._step = value;
  }
  public resetStep() {
    this._step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step;
  }
}
export interface SaeApplicationScalingRuleScalingRuleMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#max_replicas SaeApplicationScalingRule#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#min_replicas SaeApplicationScalingRule#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#metrics SaeApplicationScalingRule#metrics}
  */
  readonly metrics?: SaeApplicationScalingRuleScalingRuleMetricMetrics[] | cdktf.IResolvable;
  /**
  * scale_down_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#scale_down_rules SaeApplicationScalingRule#scale_down_rules}
  */
  readonly scaleDownRules?: SaeApplicationScalingRuleScalingRuleMetricScaleDownRules;
  /**
  * scale_up_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#scale_up_rules SaeApplicationScalingRule#scale_up_rules}
  */
  readonly scaleUpRules?: SaeApplicationScalingRuleScalingRuleMetricScaleUpRules;
}

export function saeApplicationScalingRuleScalingRuleMetricToTerraform(struct?: SaeApplicationScalingRuleScalingRuleMetricOutputReference | SaeApplicationScalingRuleScalingRuleMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    metrics: cdktf.listMapper(saeApplicationScalingRuleScalingRuleMetricMetricsToTerraform, true)(struct!.metrics),
    scale_down_rules: saeApplicationScalingRuleScalingRuleMetricScaleDownRulesToTerraform(struct!.scaleDownRules),
    scale_up_rules: saeApplicationScalingRuleScalingRuleMetricScaleUpRulesToTerraform(struct!.scaleUpRules),
  }
}


export function saeApplicationScalingRuleScalingRuleMetricToHclTerraform(struct?: SaeApplicationScalingRuleScalingRuleMetricOutputReference | SaeApplicationScalingRuleScalingRuleMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(saeApplicationScalingRuleScalingRuleMetricMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "set",
      storageClassType: "SaeApplicationScalingRuleScalingRuleMetricMetricsList",
    },
    scale_down_rules: {
      value: saeApplicationScalingRuleScalingRuleMetricScaleDownRulesToHclTerraform(struct!.scaleDownRules),
      isBlock: true,
      type: "set",
      storageClassType: "SaeApplicationScalingRuleScalingRuleMetricScaleDownRulesList",
    },
    scale_up_rules: {
      value: saeApplicationScalingRuleScalingRuleMetricScaleUpRulesToHclTerraform(struct!.scaleUpRules),
      isBlock: true,
      type: "set",
      storageClassType: "SaeApplicationScalingRuleScalingRuleMetricScaleUpRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationScalingRuleScalingRuleMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationScalingRuleScalingRuleMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._scaleDownRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownRules = this._scaleDownRules?.internalValue;
    }
    if (this._scaleUpRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpRules = this._scaleUpRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationScalingRuleScalingRuleMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._metrics.internalValue = undefined;
      this._scaleDownRules.internalValue = undefined;
      this._scaleUpRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._metrics.internalValue = value.metrics;
      this._scaleDownRules.internalValue = value.scaleDownRules;
      this._scaleUpRules.internalValue = value.scaleUpRules;
    }
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new SaeApplicationScalingRuleScalingRuleMetricMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: SaeApplicationScalingRuleScalingRuleMetricMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // scale_down_rules - computed: false, optional: true, required: false
  private _scaleDownRules = new SaeApplicationScalingRuleScalingRuleMetricScaleDownRulesOutputReference(this, "scale_down_rules");
  public get scaleDownRules() {
    return this._scaleDownRules;
  }
  public putScaleDownRules(value: SaeApplicationScalingRuleScalingRuleMetricScaleDownRules) {
    this._scaleDownRules.internalValue = value;
  }
  public resetScaleDownRules() {
    this._scaleDownRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownRulesInput() {
    return this._scaleDownRules.internalValue;
  }

  // scale_up_rules - computed: false, optional: true, required: false
  private _scaleUpRules = new SaeApplicationScalingRuleScalingRuleMetricScaleUpRulesOutputReference(this, "scale_up_rules");
  public get scaleUpRules() {
    return this._scaleUpRules;
  }
  public putScaleUpRules(value: SaeApplicationScalingRuleScalingRuleMetricScaleUpRules) {
    this._scaleUpRules.internalValue = value;
  }
  public resetScaleUpRules() {
    this._scaleUpRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpRulesInput() {
    return this._scaleUpRules.internalValue;
  }
}
export interface SaeApplicationScalingRuleScalingRuleTimerSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#at_time SaeApplicationScalingRule#at_time}
  */
  readonly atTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#max_replicas SaeApplicationScalingRule#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#min_replicas SaeApplicationScalingRule#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#target_replicas SaeApplicationScalingRule#target_replicas}
  */
  readonly targetReplicas?: number;
}

export function saeApplicationScalingRuleScalingRuleTimerSchedulesToTerraform(struct?: SaeApplicationScalingRuleScalingRuleTimerSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at_time: cdktf.stringToTerraform(struct!.atTime),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    target_replicas: cdktf.numberToTerraform(struct!.targetReplicas),
  }
}


export function saeApplicationScalingRuleScalingRuleTimerSchedulesToHclTerraform(struct?: SaeApplicationScalingRuleScalingRuleTimerSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at_time: {
      value: cdktf.stringToHclTerraform(struct!.atTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_replicas: {
      value: cdktf.numberToHclTerraform(struct!.targetReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationScalingRuleScalingRuleTimerSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SaeApplicationScalingRuleScalingRuleTimerSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.atTime = this._atTime;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._targetReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetReplicas = this._targetReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationScalingRuleScalingRuleTimerSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atTime = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._targetReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atTime = value.atTime;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._targetReplicas = value.targetReplicas;
    }
  }

  // at_time - computed: false, optional: true, required: false
  private _atTime?: string; 
  public get atTime() {
    return this.getStringAttribute('at_time');
  }
  public set atTime(value: string) {
    this._atTime = value;
  }
  public resetAtTime() {
    this._atTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atTimeInput() {
    return this._atTime;
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // target_replicas - computed: false, optional: true, required: false
  private _targetReplicas?: number; 
  public get targetReplicas() {
    return this.getNumberAttribute('target_replicas');
  }
  public set targetReplicas(value: number) {
    this._targetReplicas = value;
  }
  public resetTargetReplicas() {
    this._targetReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetReplicasInput() {
    return this._targetReplicas;
  }
}

export class SaeApplicationScalingRuleScalingRuleTimerSchedulesList extends cdktf.ComplexList {
  public internalValue? : SaeApplicationScalingRuleScalingRuleTimerSchedules[] | cdktf.IResolvable

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
  public get(index: number): SaeApplicationScalingRuleScalingRuleTimerSchedulesOutputReference {
    return new SaeApplicationScalingRuleScalingRuleTimerSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SaeApplicationScalingRuleScalingRuleTimer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#begin_date SaeApplicationScalingRule#begin_date}
  */
  readonly beginDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#end_date SaeApplicationScalingRule#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#period SaeApplicationScalingRule#period}
  */
  readonly period?: string;
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#schedules SaeApplicationScalingRule#schedules}
  */
  readonly schedules?: SaeApplicationScalingRuleScalingRuleTimerSchedules[] | cdktf.IResolvable;
}

export function saeApplicationScalingRuleScalingRuleTimerToTerraform(struct?: SaeApplicationScalingRuleScalingRuleTimerOutputReference | SaeApplicationScalingRuleScalingRuleTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_date: cdktf.stringToTerraform(struct!.beginDate),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    period: cdktf.stringToTerraform(struct!.period),
    schedules: cdktf.listMapper(saeApplicationScalingRuleScalingRuleTimerSchedulesToTerraform, true)(struct!.schedules),
  }
}


export function saeApplicationScalingRuleScalingRuleTimerToHclTerraform(struct?: SaeApplicationScalingRuleScalingRuleTimerOutputReference | SaeApplicationScalingRuleScalingRuleTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_date: {
      value: cdktf.stringToHclTerraform(struct!.beginDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedules: {
      value: cdktf.listMapperHcl(saeApplicationScalingRuleScalingRuleTimerSchedulesToHclTerraform, true)(struct!.schedules),
      isBlock: true,
      type: "list",
      storageClassType: "SaeApplicationScalingRuleScalingRuleTimerSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaeApplicationScalingRuleScalingRuleTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SaeApplicationScalingRuleScalingRuleTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginDate = this._beginDate;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaeApplicationScalingRuleScalingRuleTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beginDate = undefined;
      this._endDate = undefined;
      this._period = undefined;
      this._schedules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beginDate = value.beginDate;
      this._endDate = value.endDate;
      this._period = value.period;
      this._schedules.internalValue = value.schedules;
    }
  }

  // begin_date - computed: false, optional: true, required: false
  private _beginDate?: string; 
  public get beginDate() {
    return this.getStringAttribute('begin_date');
  }
  public set beginDate(value: string) {
    this._beginDate = value;
  }
  public resetBeginDate() {
    this._beginDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginDateInput() {
    return this._beginDate;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new SaeApplicationScalingRuleScalingRuleTimerSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: SaeApplicationScalingRuleScalingRuleTimerSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule alicloud_sae_application_scaling_rule}
*/
export class SaeApplicationScalingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sae_application_scaling_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SaeApplicationScalingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaeApplicationScalingRule to import
  * @param importFromId The id of the existing SaeApplicationScalingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaeApplicationScalingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sae_application_scaling_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sae_application_scaling_rule alicloud_sae_application_scaling_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaeApplicationScalingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SaeApplicationScalingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sae_application_scaling_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._minReadyInstanceRatio = config.minReadyInstanceRatio;
    this._minReadyInstances = config.minReadyInstances;
    this._scalingRuleEnable = config.scalingRuleEnable;
    this._scalingRuleName = config.scalingRuleName;
    this._scalingRuleType = config.scalingRuleType;
    this._scalingRuleMetric.internalValue = config.scalingRuleMetric;
    this._scalingRuleTimer.internalValue = config.scalingRuleTimer;
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

  // min_ready_instance_ratio - computed: false, optional: true, required: false
  private _minReadyInstanceRatio?: number; 
  public get minReadyInstanceRatio() {
    return this.getNumberAttribute('min_ready_instance_ratio');
  }
  public set minReadyInstanceRatio(value: number) {
    this._minReadyInstanceRatio = value;
  }
  public resetMinReadyInstanceRatio() {
    this._minReadyInstanceRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadyInstanceRatioInput() {
    return this._minReadyInstanceRatio;
  }

  // min_ready_instances - computed: false, optional: true, required: false
  private _minReadyInstances?: number; 
  public get minReadyInstances() {
    return this.getNumberAttribute('min_ready_instances');
  }
  public set minReadyInstances(value: number) {
    this._minReadyInstances = value;
  }
  public resetMinReadyInstances() {
    this._minReadyInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadyInstancesInput() {
    return this._minReadyInstances;
  }

  // scaling_rule_enable - computed: true, optional: true, required: false
  private _scalingRuleEnable?: boolean | cdktf.IResolvable; 
  public get scalingRuleEnable() {
    return this.getBooleanAttribute('scaling_rule_enable');
  }
  public set scalingRuleEnable(value: boolean | cdktf.IResolvable) {
    this._scalingRuleEnable = value;
  }
  public resetScalingRuleEnable() {
    this._scalingRuleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleEnableInput() {
    return this._scalingRuleEnable;
  }

  // scaling_rule_name - computed: false, optional: false, required: true
  private _scalingRuleName?: string; 
  public get scalingRuleName() {
    return this.getStringAttribute('scaling_rule_name');
  }
  public set scalingRuleName(value: string) {
    this._scalingRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleNameInput() {
    return this._scalingRuleName;
  }

  // scaling_rule_type - computed: false, optional: false, required: true
  private _scalingRuleType?: string; 
  public get scalingRuleType() {
    return this.getStringAttribute('scaling_rule_type');
  }
  public set scalingRuleType(value: string) {
    this._scalingRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleTypeInput() {
    return this._scalingRuleType;
  }

  // scaling_rule_metric - computed: false, optional: true, required: false
  private _scalingRuleMetric = new SaeApplicationScalingRuleScalingRuleMetricOutputReference(this, "scaling_rule_metric");
  public get scalingRuleMetric() {
    return this._scalingRuleMetric;
  }
  public putScalingRuleMetric(value: SaeApplicationScalingRuleScalingRuleMetric) {
    this._scalingRuleMetric.internalValue = value;
  }
  public resetScalingRuleMetric() {
    this._scalingRuleMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleMetricInput() {
    return this._scalingRuleMetric.internalValue;
  }

  // scaling_rule_timer - computed: false, optional: true, required: false
  private _scalingRuleTimer = new SaeApplicationScalingRuleScalingRuleTimerOutputReference(this, "scaling_rule_timer");
  public get scalingRuleTimer() {
    return this._scalingRuleTimer;
  }
  public putScalingRuleTimer(value: SaeApplicationScalingRuleScalingRuleTimer) {
    this._scalingRuleTimer.internalValue = value;
  }
  public resetScalingRuleTimer() {
    this._scalingRuleTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRuleTimerInput() {
    return this._scalingRuleTimer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      min_ready_instance_ratio: cdktf.numberToTerraform(this._minReadyInstanceRatio),
      min_ready_instances: cdktf.numberToTerraform(this._minReadyInstances),
      scaling_rule_enable: cdktf.booleanToTerraform(this._scalingRuleEnable),
      scaling_rule_name: cdktf.stringToTerraform(this._scalingRuleName),
      scaling_rule_type: cdktf.stringToTerraform(this._scalingRuleType),
      scaling_rule_metric: saeApplicationScalingRuleScalingRuleMetricToTerraform(this._scalingRuleMetric.internalValue),
      scaling_rule_timer: saeApplicationScalingRuleScalingRuleTimerToTerraform(this._scalingRuleTimer.internalValue),
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
      min_ready_instance_ratio: {
        value: cdktf.numberToHclTerraform(this._minReadyInstanceRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ready_instances: {
        value: cdktf.numberToHclTerraform(this._minReadyInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaling_rule_enable: {
        value: cdktf.booleanToHclTerraform(this._scalingRuleEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      scaling_rule_metric: {
        value: saeApplicationScalingRuleScalingRuleMetricToHclTerraform(this._scalingRuleMetric.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SaeApplicationScalingRuleScalingRuleMetricList",
      },
      scaling_rule_timer: {
        value: saeApplicationScalingRuleScalingRuleTimerToHclTerraform(this._scalingRuleTimer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaeApplicationScalingRuleScalingRuleTimerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
