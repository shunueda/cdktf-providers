// https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#config App#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#env_id App#env_id}
  */
  readonly envId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#handle App#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#id App#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#service App#service}
  */
  readonly service?: AppService[] | cdktf.IResolvable;
}
export interface AppServiceAutoscalingPolicy {
  /**
  * The type of autoscaling, must be either 'vertical' or 'horizontal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#autoscaling_type App#autoscaling_type}
  */
  readonly autoscalingType: string;
  /**
  * The maximum number of containers for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#max_containers App#max_containers}
  */
  readonly maxContainers?: number;
  /**
  * The maximum CPU utilization threshold for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#max_cpu_threshold App#max_cpu_threshold}
  */
  readonly maxCpuThreshold?: number;
  /**
  * The maximum memory allocation in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#maximum_memory App#maximum_memory}
  */
  readonly maximumMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#mem_cpu_ratio_c_threshold App#mem_cpu_ratio_c_threshold}
  */
  readonly memCpuRatioCThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#mem_cpu_ratio_r_threshold App#mem_cpu_ratio_r_threshold}
  */
  readonly memCpuRatioRThreshold?: number;
  /**
  * The memory usage threshold for scaling down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#mem_scale_down_threshold App#mem_scale_down_threshold}
  */
  readonly memScaleDownThreshold?: number;
  /**
  * The memory usage threshold for scaling up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#mem_scale_up_threshold App#mem_scale_up_threshold}
  */
  readonly memScaleUpThreshold?: number;
  /**
  * The lookback period for metrics in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#metric_lookback_seconds App#metric_lookback_seconds}
  */
  readonly metricLookbackSeconds?: number;
  /**
  * The minimum number of containers for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#min_containers App#min_containers}
  */
  readonly minContainers?: number;
  /**
  * The minimum CPU utilization threshold for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#min_cpu_threshold App#min_cpu_threshold}
  */
  readonly minCpuThreshold?: number;
  /**
  * The minimum memory allocation in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#minimum_memory App#minimum_memory}
  */
  readonly minimumMemory?: number;
  /**
  * The percentile threshold used for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#percentile App#percentile}
  */
  readonly percentile?: number;
  /**
  * Seconds to ignore in metrics after a release event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#post_release_cooldown_seconds App#post_release_cooldown_seconds}
  */
  readonly postReleaseCooldownSeconds?: number;
  /**
  * Cooldown period in seconds after a scale-down event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#post_scale_down_cooldown_seconds App#post_scale_down_cooldown_seconds}
  */
  readonly postScaleDownCooldownSeconds?: number;
  /**
  * Cooldown period in seconds after a scale-up event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#post_scale_up_cooldown_seconds App#post_scale_up_cooldown_seconds}
  */
  readonly postScaleUpCooldownSeconds?: number;
  /**
  * The number of containers to remove in each scale-down event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#scale_down_step App#scale_down_step}
  */
  readonly scaleDownStep?: number;
  /**
  * The number of containers to add in each scale-up event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#scale_up_step App#scale_up_step}
  */
  readonly scaleUpStep?: number;
  /**
  * Whether to use restart-free scaling for this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#use_horizontal_scale App#use_horizontal_scale}
  */
  readonly useHorizontalScale?: boolean | cdktf.IResolvable;
}

export function appServiceAutoscalingPolicyToTerraform(struct?: AppServiceAutoscalingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_type: cdktf.stringToTerraform(struct!.autoscalingType),
    max_containers: cdktf.numberToTerraform(struct!.maxContainers),
    max_cpu_threshold: cdktf.numberToTerraform(struct!.maxCpuThreshold),
    maximum_memory: cdktf.numberToTerraform(struct!.maximumMemory),
    mem_cpu_ratio_c_threshold: cdktf.numberToTerraform(struct!.memCpuRatioCThreshold),
    mem_cpu_ratio_r_threshold: cdktf.numberToTerraform(struct!.memCpuRatioRThreshold),
    mem_scale_down_threshold: cdktf.numberToTerraform(struct!.memScaleDownThreshold),
    mem_scale_up_threshold: cdktf.numberToTerraform(struct!.memScaleUpThreshold),
    metric_lookback_seconds: cdktf.numberToTerraform(struct!.metricLookbackSeconds),
    min_containers: cdktf.numberToTerraform(struct!.minContainers),
    min_cpu_threshold: cdktf.numberToTerraform(struct!.minCpuThreshold),
    minimum_memory: cdktf.numberToTerraform(struct!.minimumMemory),
    percentile: cdktf.numberToTerraform(struct!.percentile),
    post_release_cooldown_seconds: cdktf.numberToTerraform(struct!.postReleaseCooldownSeconds),
    post_scale_down_cooldown_seconds: cdktf.numberToTerraform(struct!.postScaleDownCooldownSeconds),
    post_scale_up_cooldown_seconds: cdktf.numberToTerraform(struct!.postScaleUpCooldownSeconds),
    scale_down_step: cdktf.numberToTerraform(struct!.scaleDownStep),
    scale_up_step: cdktf.numberToTerraform(struct!.scaleUpStep),
    use_horizontal_scale: cdktf.booleanToTerraform(struct!.useHorizontalScale),
  }
}


export function appServiceAutoscalingPolicyToHclTerraform(struct?: AppServiceAutoscalingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_type: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_containers: {
      value: cdktf.numberToHclTerraform(struct!.maxContainers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxCpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_memory: {
      value: cdktf.numberToHclTerraform(struct!.maximumMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_cpu_ratio_c_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memCpuRatioCThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_cpu_ratio_r_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memCpuRatioRThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_scale_down_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memScaleDownThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_scale_up_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memScaleUpThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_lookback_seconds: {
      value: cdktf.numberToHclTerraform(struct!.metricLookbackSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_containers: {
      value: cdktf.numberToHclTerraform(struct!.minContainers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.minCpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_memory: {
      value: cdktf.numberToHclTerraform(struct!.minimumMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_release_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.postReleaseCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_scale_down_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.postScaleDownCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_scale_up_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.postScaleUpCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_down_step: {
      value: cdktf.numberToHclTerraform(struct!.scaleDownStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_up_step: {
      value: cdktf.numberToHclTerraform(struct!.scaleUpStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_horizontal_scale: {
      value: cdktf.booleanToHclTerraform(struct!.useHorizontalScale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppServiceAutoscalingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppServiceAutoscalingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingType = this._autoscalingType;
    }
    if (this._maxContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContainers = this._maxContainers;
    }
    if (this._maxCpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpuThreshold = this._maxCpuThreshold;
    }
    if (this._maximumMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumMemory = this._maximumMemory;
    }
    if (this._memCpuRatioCThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memCpuRatioCThreshold = this._memCpuRatioCThreshold;
    }
    if (this._memCpuRatioRThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memCpuRatioRThreshold = this._memCpuRatioRThreshold;
    }
    if (this._memScaleDownThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memScaleDownThreshold = this._memScaleDownThreshold;
    }
    if (this._memScaleUpThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memScaleUpThreshold = this._memScaleUpThreshold;
    }
    if (this._metricLookbackSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLookbackSeconds = this._metricLookbackSeconds;
    }
    if (this._minContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minContainers = this._minContainers;
    }
    if (this._minCpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuThreshold = this._minCpuThreshold;
    }
    if (this._minimumMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumMemory = this._minimumMemory;
    }
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._postReleaseCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.postReleaseCooldownSeconds = this._postReleaseCooldownSeconds;
    }
    if (this._postScaleDownCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScaleDownCooldownSeconds = this._postScaleDownCooldownSeconds;
    }
    if (this._postScaleUpCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScaleUpCooldownSeconds = this._postScaleUpCooldownSeconds;
    }
    if (this._scaleDownStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownStep = this._scaleDownStep;
    }
    if (this._scaleUpStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpStep = this._scaleUpStep;
    }
    if (this._useHorizontalScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHorizontalScale = this._useHorizontalScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceAutoscalingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscalingType = undefined;
      this._maxContainers = undefined;
      this._maxCpuThreshold = undefined;
      this._maximumMemory = undefined;
      this._memCpuRatioCThreshold = undefined;
      this._memCpuRatioRThreshold = undefined;
      this._memScaleDownThreshold = undefined;
      this._memScaleUpThreshold = undefined;
      this._metricLookbackSeconds = undefined;
      this._minContainers = undefined;
      this._minCpuThreshold = undefined;
      this._minimumMemory = undefined;
      this._percentile = undefined;
      this._postReleaseCooldownSeconds = undefined;
      this._postScaleDownCooldownSeconds = undefined;
      this._postScaleUpCooldownSeconds = undefined;
      this._scaleDownStep = undefined;
      this._scaleUpStep = undefined;
      this._useHorizontalScale = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscalingType = value.autoscalingType;
      this._maxContainers = value.maxContainers;
      this._maxCpuThreshold = value.maxCpuThreshold;
      this._maximumMemory = value.maximumMemory;
      this._memCpuRatioCThreshold = value.memCpuRatioCThreshold;
      this._memCpuRatioRThreshold = value.memCpuRatioRThreshold;
      this._memScaleDownThreshold = value.memScaleDownThreshold;
      this._memScaleUpThreshold = value.memScaleUpThreshold;
      this._metricLookbackSeconds = value.metricLookbackSeconds;
      this._minContainers = value.minContainers;
      this._minCpuThreshold = value.minCpuThreshold;
      this._minimumMemory = value.minimumMemory;
      this._percentile = value.percentile;
      this._postReleaseCooldownSeconds = value.postReleaseCooldownSeconds;
      this._postScaleDownCooldownSeconds = value.postScaleDownCooldownSeconds;
      this._postScaleUpCooldownSeconds = value.postScaleUpCooldownSeconds;
      this._scaleDownStep = value.scaleDownStep;
      this._scaleUpStep = value.scaleUpStep;
      this._useHorizontalScale = value.useHorizontalScale;
    }
  }

  // autoscaling_type - computed: false, optional: false, required: true
  private _autoscalingType?: string; 
  public get autoscalingType() {
    return this.getStringAttribute('autoscaling_type');
  }
  public set autoscalingType(value: string) {
    this._autoscalingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingTypeInput() {
    return this._autoscalingType;
  }

  // max_containers - computed: false, optional: true, required: false
  private _maxContainers?: number; 
  public get maxContainers() {
    return this.getNumberAttribute('max_containers');
  }
  public set maxContainers(value: number) {
    this._maxContainers = value;
  }
  public resetMaxContainers() {
    this._maxContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContainersInput() {
    return this._maxContainers;
  }

  // max_cpu_threshold - computed: false, optional: true, required: false
  private _maxCpuThreshold?: number; 
  public get maxCpuThreshold() {
    return this.getNumberAttribute('max_cpu_threshold');
  }
  public set maxCpuThreshold(value: number) {
    this._maxCpuThreshold = value;
  }
  public resetMaxCpuThreshold() {
    this._maxCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuThresholdInput() {
    return this._maxCpuThreshold;
  }

  // maximum_memory - computed: false, optional: true, required: false
  private _maximumMemory?: number; 
  public get maximumMemory() {
    return this.getNumberAttribute('maximum_memory');
  }
  public set maximumMemory(value: number) {
    this._maximumMemory = value;
  }
  public resetMaximumMemory() {
    this._maximumMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMemoryInput() {
    return this._maximumMemory;
  }

  // mem_cpu_ratio_c_threshold - computed: false, optional: true, required: false
  private _memCpuRatioCThreshold?: number; 
  public get memCpuRatioCThreshold() {
    return this.getNumberAttribute('mem_cpu_ratio_c_threshold');
  }
  public set memCpuRatioCThreshold(value: number) {
    this._memCpuRatioCThreshold = value;
  }
  public resetMemCpuRatioCThreshold() {
    this._memCpuRatioCThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memCpuRatioCThresholdInput() {
    return this._memCpuRatioCThreshold;
  }

  // mem_cpu_ratio_r_threshold - computed: false, optional: true, required: false
  private _memCpuRatioRThreshold?: number; 
  public get memCpuRatioRThreshold() {
    return this.getNumberAttribute('mem_cpu_ratio_r_threshold');
  }
  public set memCpuRatioRThreshold(value: number) {
    this._memCpuRatioRThreshold = value;
  }
  public resetMemCpuRatioRThreshold() {
    this._memCpuRatioRThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memCpuRatioRThresholdInput() {
    return this._memCpuRatioRThreshold;
  }

  // mem_scale_down_threshold - computed: false, optional: true, required: false
  private _memScaleDownThreshold?: number; 
  public get memScaleDownThreshold() {
    return this.getNumberAttribute('mem_scale_down_threshold');
  }
  public set memScaleDownThreshold(value: number) {
    this._memScaleDownThreshold = value;
  }
  public resetMemScaleDownThreshold() {
    this._memScaleDownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memScaleDownThresholdInput() {
    return this._memScaleDownThreshold;
  }

  // mem_scale_up_threshold - computed: false, optional: true, required: false
  private _memScaleUpThreshold?: number; 
  public get memScaleUpThreshold() {
    return this.getNumberAttribute('mem_scale_up_threshold');
  }
  public set memScaleUpThreshold(value: number) {
    this._memScaleUpThreshold = value;
  }
  public resetMemScaleUpThreshold() {
    this._memScaleUpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memScaleUpThresholdInput() {
    return this._memScaleUpThreshold;
  }

  // metric_lookback_seconds - computed: false, optional: true, required: false
  private _metricLookbackSeconds?: number; 
  public get metricLookbackSeconds() {
    return this.getNumberAttribute('metric_lookback_seconds');
  }
  public set metricLookbackSeconds(value: number) {
    this._metricLookbackSeconds = value;
  }
  public resetMetricLookbackSeconds() {
    this._metricLookbackSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLookbackSecondsInput() {
    return this._metricLookbackSeconds;
  }

  // min_containers - computed: false, optional: true, required: false
  private _minContainers?: number; 
  public get minContainers() {
    return this.getNumberAttribute('min_containers');
  }
  public set minContainers(value: number) {
    this._minContainers = value;
  }
  public resetMinContainers() {
    this._minContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minContainersInput() {
    return this._minContainers;
  }

  // min_cpu_threshold - computed: false, optional: true, required: false
  private _minCpuThreshold?: number; 
  public get minCpuThreshold() {
    return this.getNumberAttribute('min_cpu_threshold');
  }
  public set minCpuThreshold(value: number) {
    this._minCpuThreshold = value;
  }
  public resetMinCpuThreshold() {
    this._minCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuThresholdInput() {
    return this._minCpuThreshold;
  }

  // minimum_memory - computed: false, optional: true, required: false
  private _minimumMemory?: number; 
  public get minimumMemory() {
    return this.getNumberAttribute('minimum_memory');
  }
  public set minimumMemory(value: number) {
    this._minimumMemory = value;
  }
  public resetMinimumMemory() {
    this._minimumMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumMemoryInput() {
    return this._minimumMemory;
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // post_release_cooldown_seconds - computed: false, optional: true, required: false
  private _postReleaseCooldownSeconds?: number; 
  public get postReleaseCooldownSeconds() {
    return this.getNumberAttribute('post_release_cooldown_seconds');
  }
  public set postReleaseCooldownSeconds(value: number) {
    this._postReleaseCooldownSeconds = value;
  }
  public resetPostReleaseCooldownSeconds() {
    this._postReleaseCooldownSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postReleaseCooldownSecondsInput() {
    return this._postReleaseCooldownSeconds;
  }

  // post_scale_down_cooldown_seconds - computed: false, optional: true, required: false
  private _postScaleDownCooldownSeconds?: number; 
  public get postScaleDownCooldownSeconds() {
    return this.getNumberAttribute('post_scale_down_cooldown_seconds');
  }
  public set postScaleDownCooldownSeconds(value: number) {
    this._postScaleDownCooldownSeconds = value;
  }
  public resetPostScaleDownCooldownSeconds() {
    this._postScaleDownCooldownSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScaleDownCooldownSecondsInput() {
    return this._postScaleDownCooldownSeconds;
  }

  // post_scale_up_cooldown_seconds - computed: false, optional: true, required: false
  private _postScaleUpCooldownSeconds?: number; 
  public get postScaleUpCooldownSeconds() {
    return this.getNumberAttribute('post_scale_up_cooldown_seconds');
  }
  public set postScaleUpCooldownSeconds(value: number) {
    this._postScaleUpCooldownSeconds = value;
  }
  public resetPostScaleUpCooldownSeconds() {
    this._postScaleUpCooldownSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScaleUpCooldownSecondsInput() {
    return this._postScaleUpCooldownSeconds;
  }

  // scale_down_step - computed: false, optional: true, required: false
  private _scaleDownStep?: number; 
  public get scaleDownStep() {
    return this.getNumberAttribute('scale_down_step');
  }
  public set scaleDownStep(value: number) {
    this._scaleDownStep = value;
  }
  public resetScaleDownStep() {
    this._scaleDownStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownStepInput() {
    return this._scaleDownStep;
  }

  // scale_up_step - computed: false, optional: true, required: false
  private _scaleUpStep?: number; 
  public get scaleUpStep() {
    return this.getNumberAttribute('scale_up_step');
  }
  public set scaleUpStep(value: number) {
    this._scaleUpStep = value;
  }
  public resetScaleUpStep() {
    this._scaleUpStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpStepInput() {
    return this._scaleUpStep;
  }

  // scaling_enabled - computed: true, optional: false, required: false
  public get scalingEnabled() {
    return this.getBooleanAttribute('scaling_enabled');
  }

  // use_horizontal_scale - computed: false, optional: true, required: false
  private _useHorizontalScale?: boolean | cdktf.IResolvable; 
  public get useHorizontalScale() {
    return this.getBooleanAttribute('use_horizontal_scale');
  }
  public set useHorizontalScale(value: boolean | cdktf.IResolvable) {
    this._useHorizontalScale = value;
  }
  public resetUseHorizontalScale() {
    this._useHorizontalScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHorizontalScaleInput() {
    return this._useHorizontalScale;
  }
}

export class AppServiceAutoscalingPolicyList extends cdktf.ComplexList {
  public internalValue? : AppServiceAutoscalingPolicy[] | cdktf.IResolvable

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
  public get(index: number): AppServiceAutoscalingPolicyOutputReference {
    return new AppServiceAutoscalingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppServiceServiceSizingPolicy {
  /**
  * The type of autoscaling, must be either 'vertical' or 'horizontal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#autoscaling_type App#autoscaling_type}
  */
  readonly autoscalingType: string;
  /**
  * The maximum number of containers for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#max_containers App#max_containers}
  */
  readonly maxContainers?: number;
  /**
  * The maximum CPU utilization threshold for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#max_cpu_threshold App#max_cpu_threshold}
  */
  readonly maxCpuThreshold?: number;
  /**
  * The maximum memory allocation in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#maximum_memory App#maximum_memory}
  */
  readonly maximumMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#mem_cpu_ratio_c_threshold App#mem_cpu_ratio_c_threshold}
  */
  readonly memCpuRatioCThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#mem_cpu_ratio_r_threshold App#mem_cpu_ratio_r_threshold}
  */
  readonly memCpuRatioRThreshold?: number;
  /**
  * The memory usage threshold for scaling down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#mem_scale_down_threshold App#mem_scale_down_threshold}
  */
  readonly memScaleDownThreshold?: number;
  /**
  * The memory usage threshold for scaling up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#mem_scale_up_threshold App#mem_scale_up_threshold}
  */
  readonly memScaleUpThreshold?: number;
  /**
  * The lookback period for metrics in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#metric_lookback_seconds App#metric_lookback_seconds}
  */
  readonly metricLookbackSeconds?: number;
  /**
  * The minimum number of containers for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#min_containers App#min_containers}
  */
  readonly minContainers?: number;
  /**
  * The minimum CPU utilization threshold for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#min_cpu_threshold App#min_cpu_threshold}
  */
  readonly minCpuThreshold?: number;
  /**
  * The minimum memory allocation in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#minimum_memory App#minimum_memory}
  */
  readonly minimumMemory?: number;
  /**
  * The percentile threshold used for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#percentile App#percentile}
  */
  readonly percentile?: number;
  /**
  * Seconds to ignore in metrics after a release event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#post_release_cooldown_seconds App#post_release_cooldown_seconds}
  */
  readonly postReleaseCooldownSeconds?: number;
  /**
  * Cooldown period in seconds after a scale-down event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#post_scale_down_cooldown_seconds App#post_scale_down_cooldown_seconds}
  */
  readonly postScaleDownCooldownSeconds?: number;
  /**
  * Cooldown period in seconds after a scale-up event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#post_scale_up_cooldown_seconds App#post_scale_up_cooldown_seconds}
  */
  readonly postScaleUpCooldownSeconds?: number;
  /**
  * The number of containers to remove in each scale-down event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#scale_down_step App#scale_down_step}
  */
  readonly scaleDownStep?: number;
  /**
  * The number of containers to add in each scale-up event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#scale_up_step App#scale_up_step}
  */
  readonly scaleUpStep?: number;
  /**
  * Whether to use restart-free scaling for this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#use_horizontal_scale App#use_horizontal_scale}
  */
  readonly useHorizontalScale?: boolean | cdktf.IResolvable;
}

export function appServiceServiceSizingPolicyToTerraform(struct?: AppServiceServiceSizingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_type: cdktf.stringToTerraform(struct!.autoscalingType),
    max_containers: cdktf.numberToTerraform(struct!.maxContainers),
    max_cpu_threshold: cdktf.numberToTerraform(struct!.maxCpuThreshold),
    maximum_memory: cdktf.numberToTerraform(struct!.maximumMemory),
    mem_cpu_ratio_c_threshold: cdktf.numberToTerraform(struct!.memCpuRatioCThreshold),
    mem_cpu_ratio_r_threshold: cdktf.numberToTerraform(struct!.memCpuRatioRThreshold),
    mem_scale_down_threshold: cdktf.numberToTerraform(struct!.memScaleDownThreshold),
    mem_scale_up_threshold: cdktf.numberToTerraform(struct!.memScaleUpThreshold),
    metric_lookback_seconds: cdktf.numberToTerraform(struct!.metricLookbackSeconds),
    min_containers: cdktf.numberToTerraform(struct!.minContainers),
    min_cpu_threshold: cdktf.numberToTerraform(struct!.minCpuThreshold),
    minimum_memory: cdktf.numberToTerraform(struct!.minimumMemory),
    percentile: cdktf.numberToTerraform(struct!.percentile),
    post_release_cooldown_seconds: cdktf.numberToTerraform(struct!.postReleaseCooldownSeconds),
    post_scale_down_cooldown_seconds: cdktf.numberToTerraform(struct!.postScaleDownCooldownSeconds),
    post_scale_up_cooldown_seconds: cdktf.numberToTerraform(struct!.postScaleUpCooldownSeconds),
    scale_down_step: cdktf.numberToTerraform(struct!.scaleDownStep),
    scale_up_step: cdktf.numberToTerraform(struct!.scaleUpStep),
    use_horizontal_scale: cdktf.booleanToTerraform(struct!.useHorizontalScale),
  }
}


export function appServiceServiceSizingPolicyToHclTerraform(struct?: AppServiceServiceSizingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_type: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_containers: {
      value: cdktf.numberToHclTerraform(struct!.maxContainers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxCpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_memory: {
      value: cdktf.numberToHclTerraform(struct!.maximumMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_cpu_ratio_c_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memCpuRatioCThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_cpu_ratio_r_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memCpuRatioRThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_scale_down_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memScaleDownThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_scale_up_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memScaleUpThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_lookback_seconds: {
      value: cdktf.numberToHclTerraform(struct!.metricLookbackSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_containers: {
      value: cdktf.numberToHclTerraform(struct!.minContainers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.minCpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_memory: {
      value: cdktf.numberToHclTerraform(struct!.minimumMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_release_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.postReleaseCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_scale_down_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.postScaleDownCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_scale_up_cooldown_seconds: {
      value: cdktf.numberToHclTerraform(struct!.postScaleUpCooldownSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_down_step: {
      value: cdktf.numberToHclTerraform(struct!.scaleDownStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_up_step: {
      value: cdktf.numberToHclTerraform(struct!.scaleUpStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_horizontal_scale: {
      value: cdktf.booleanToHclTerraform(struct!.useHorizontalScale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppServiceServiceSizingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppServiceServiceSizingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingType = this._autoscalingType;
    }
    if (this._maxContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContainers = this._maxContainers;
    }
    if (this._maxCpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpuThreshold = this._maxCpuThreshold;
    }
    if (this._maximumMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumMemory = this._maximumMemory;
    }
    if (this._memCpuRatioCThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memCpuRatioCThreshold = this._memCpuRatioCThreshold;
    }
    if (this._memCpuRatioRThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memCpuRatioRThreshold = this._memCpuRatioRThreshold;
    }
    if (this._memScaleDownThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memScaleDownThreshold = this._memScaleDownThreshold;
    }
    if (this._memScaleUpThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memScaleUpThreshold = this._memScaleUpThreshold;
    }
    if (this._metricLookbackSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLookbackSeconds = this._metricLookbackSeconds;
    }
    if (this._minContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minContainers = this._minContainers;
    }
    if (this._minCpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuThreshold = this._minCpuThreshold;
    }
    if (this._minimumMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumMemory = this._minimumMemory;
    }
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._postReleaseCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.postReleaseCooldownSeconds = this._postReleaseCooldownSeconds;
    }
    if (this._postScaleDownCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScaleDownCooldownSeconds = this._postScaleDownCooldownSeconds;
    }
    if (this._postScaleUpCooldownSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScaleUpCooldownSeconds = this._postScaleUpCooldownSeconds;
    }
    if (this._scaleDownStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownStep = this._scaleDownStep;
    }
    if (this._scaleUpStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpStep = this._scaleUpStep;
    }
    if (this._useHorizontalScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHorizontalScale = this._useHorizontalScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppServiceServiceSizingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscalingType = undefined;
      this._maxContainers = undefined;
      this._maxCpuThreshold = undefined;
      this._maximumMemory = undefined;
      this._memCpuRatioCThreshold = undefined;
      this._memCpuRatioRThreshold = undefined;
      this._memScaleDownThreshold = undefined;
      this._memScaleUpThreshold = undefined;
      this._metricLookbackSeconds = undefined;
      this._minContainers = undefined;
      this._minCpuThreshold = undefined;
      this._minimumMemory = undefined;
      this._percentile = undefined;
      this._postReleaseCooldownSeconds = undefined;
      this._postScaleDownCooldownSeconds = undefined;
      this._postScaleUpCooldownSeconds = undefined;
      this._scaleDownStep = undefined;
      this._scaleUpStep = undefined;
      this._useHorizontalScale = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscalingType = value.autoscalingType;
      this._maxContainers = value.maxContainers;
      this._maxCpuThreshold = value.maxCpuThreshold;
      this._maximumMemory = value.maximumMemory;
      this._memCpuRatioCThreshold = value.memCpuRatioCThreshold;
      this._memCpuRatioRThreshold = value.memCpuRatioRThreshold;
      this._memScaleDownThreshold = value.memScaleDownThreshold;
      this._memScaleUpThreshold = value.memScaleUpThreshold;
      this._metricLookbackSeconds = value.metricLookbackSeconds;
      this._minContainers = value.minContainers;
      this._minCpuThreshold = value.minCpuThreshold;
      this._minimumMemory = value.minimumMemory;
      this._percentile = value.percentile;
      this._postReleaseCooldownSeconds = value.postReleaseCooldownSeconds;
      this._postScaleDownCooldownSeconds = value.postScaleDownCooldownSeconds;
      this._postScaleUpCooldownSeconds = value.postScaleUpCooldownSeconds;
      this._scaleDownStep = value.scaleDownStep;
      this._scaleUpStep = value.scaleUpStep;
      this._useHorizontalScale = value.useHorizontalScale;
    }
  }

  // autoscaling_type - computed: false, optional: false, required: true
  private _autoscalingType?: string; 
  public get autoscalingType() {
    return this.getStringAttribute('autoscaling_type');
  }
  public set autoscalingType(value: string) {
    this._autoscalingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingTypeInput() {
    return this._autoscalingType;
  }

  // max_containers - computed: false, optional: true, required: false
  private _maxContainers?: number; 
  public get maxContainers() {
    return this.getNumberAttribute('max_containers');
  }
  public set maxContainers(value: number) {
    this._maxContainers = value;
  }
  public resetMaxContainers() {
    this._maxContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContainersInput() {
    return this._maxContainers;
  }

  // max_cpu_threshold - computed: false, optional: true, required: false
  private _maxCpuThreshold?: number; 
  public get maxCpuThreshold() {
    return this.getNumberAttribute('max_cpu_threshold');
  }
  public set maxCpuThreshold(value: number) {
    this._maxCpuThreshold = value;
  }
  public resetMaxCpuThreshold() {
    this._maxCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuThresholdInput() {
    return this._maxCpuThreshold;
  }

  // maximum_memory - computed: false, optional: true, required: false
  private _maximumMemory?: number; 
  public get maximumMemory() {
    return this.getNumberAttribute('maximum_memory');
  }
  public set maximumMemory(value: number) {
    this._maximumMemory = value;
  }
  public resetMaximumMemory() {
    this._maximumMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMemoryInput() {
    return this._maximumMemory;
  }

  // mem_cpu_ratio_c_threshold - computed: false, optional: true, required: false
  private _memCpuRatioCThreshold?: number; 
  public get memCpuRatioCThreshold() {
    return this.getNumberAttribute('mem_cpu_ratio_c_threshold');
  }
  public set memCpuRatioCThreshold(value: number) {
    this._memCpuRatioCThreshold = value;
  }
  public resetMemCpuRatioCThreshold() {
    this._memCpuRatioCThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memCpuRatioCThresholdInput() {
    return this._memCpuRatioCThreshold;
  }

  // mem_cpu_ratio_r_threshold - computed: false, optional: true, required: false
  private _memCpuRatioRThreshold?: number; 
  public get memCpuRatioRThreshold() {
    return this.getNumberAttribute('mem_cpu_ratio_r_threshold');
  }
  public set memCpuRatioRThreshold(value: number) {
    this._memCpuRatioRThreshold = value;
  }
  public resetMemCpuRatioRThreshold() {
    this._memCpuRatioRThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memCpuRatioRThresholdInput() {
    return this._memCpuRatioRThreshold;
  }

  // mem_scale_down_threshold - computed: false, optional: true, required: false
  private _memScaleDownThreshold?: number; 
  public get memScaleDownThreshold() {
    return this.getNumberAttribute('mem_scale_down_threshold');
  }
  public set memScaleDownThreshold(value: number) {
    this._memScaleDownThreshold = value;
  }
  public resetMemScaleDownThreshold() {
    this._memScaleDownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memScaleDownThresholdInput() {
    return this._memScaleDownThreshold;
  }

  // mem_scale_up_threshold - computed: false, optional: true, required: false
  private _memScaleUpThreshold?: number; 
  public get memScaleUpThreshold() {
    return this.getNumberAttribute('mem_scale_up_threshold');
  }
  public set memScaleUpThreshold(value: number) {
    this._memScaleUpThreshold = value;
  }
  public resetMemScaleUpThreshold() {
    this._memScaleUpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memScaleUpThresholdInput() {
    return this._memScaleUpThreshold;
  }

  // metric_lookback_seconds - computed: false, optional: true, required: false
  private _metricLookbackSeconds?: number; 
  public get metricLookbackSeconds() {
    return this.getNumberAttribute('metric_lookback_seconds');
  }
  public set metricLookbackSeconds(value: number) {
    this._metricLookbackSeconds = value;
  }
  public resetMetricLookbackSeconds() {
    this._metricLookbackSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLookbackSecondsInput() {
    return this._metricLookbackSeconds;
  }

  // min_containers - computed: false, optional: true, required: false
  private _minContainers?: number; 
  public get minContainers() {
    return this.getNumberAttribute('min_containers');
  }
  public set minContainers(value: number) {
    this._minContainers = value;
  }
  public resetMinContainers() {
    this._minContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minContainersInput() {
    return this._minContainers;
  }

  // min_cpu_threshold - computed: false, optional: true, required: false
  private _minCpuThreshold?: number; 
  public get minCpuThreshold() {
    return this.getNumberAttribute('min_cpu_threshold');
  }
  public set minCpuThreshold(value: number) {
    this._minCpuThreshold = value;
  }
  public resetMinCpuThreshold() {
    this._minCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuThresholdInput() {
    return this._minCpuThreshold;
  }

  // minimum_memory - computed: false, optional: true, required: false
  private _minimumMemory?: number; 
  public get minimumMemory() {
    return this.getNumberAttribute('minimum_memory');
  }
  public set minimumMemory(value: number) {
    this._minimumMemory = value;
  }
  public resetMinimumMemory() {
    this._minimumMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumMemoryInput() {
    return this._minimumMemory;
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // post_release_cooldown_seconds - computed: false, optional: true, required: false
  private _postReleaseCooldownSeconds?: number; 
  public get postReleaseCooldownSeconds() {
    return this.getNumberAttribute('post_release_cooldown_seconds');
  }
  public set postReleaseCooldownSeconds(value: number) {
    this._postReleaseCooldownSeconds = value;
  }
  public resetPostReleaseCooldownSeconds() {
    this._postReleaseCooldownSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postReleaseCooldownSecondsInput() {
    return this._postReleaseCooldownSeconds;
  }

  // post_scale_down_cooldown_seconds - computed: false, optional: true, required: false
  private _postScaleDownCooldownSeconds?: number; 
  public get postScaleDownCooldownSeconds() {
    return this.getNumberAttribute('post_scale_down_cooldown_seconds');
  }
  public set postScaleDownCooldownSeconds(value: number) {
    this._postScaleDownCooldownSeconds = value;
  }
  public resetPostScaleDownCooldownSeconds() {
    this._postScaleDownCooldownSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScaleDownCooldownSecondsInput() {
    return this._postScaleDownCooldownSeconds;
  }

  // post_scale_up_cooldown_seconds - computed: false, optional: true, required: false
  private _postScaleUpCooldownSeconds?: number; 
  public get postScaleUpCooldownSeconds() {
    return this.getNumberAttribute('post_scale_up_cooldown_seconds');
  }
  public set postScaleUpCooldownSeconds(value: number) {
    this._postScaleUpCooldownSeconds = value;
  }
  public resetPostScaleUpCooldownSeconds() {
    this._postScaleUpCooldownSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScaleUpCooldownSecondsInput() {
    return this._postScaleUpCooldownSeconds;
  }

  // scale_down_step - computed: false, optional: true, required: false
  private _scaleDownStep?: number; 
  public get scaleDownStep() {
    return this.getNumberAttribute('scale_down_step');
  }
  public set scaleDownStep(value: number) {
    this._scaleDownStep = value;
  }
  public resetScaleDownStep() {
    this._scaleDownStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownStepInput() {
    return this._scaleDownStep;
  }

  // scale_up_step - computed: false, optional: true, required: false
  private _scaleUpStep?: number; 
  public get scaleUpStep() {
    return this.getNumberAttribute('scale_up_step');
  }
  public set scaleUpStep(value: number) {
    this._scaleUpStep = value;
  }
  public resetScaleUpStep() {
    this._scaleUpStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpStepInput() {
    return this._scaleUpStep;
  }

  // scaling_enabled - computed: true, optional: false, required: false
  public get scalingEnabled() {
    return this.getBooleanAttribute('scaling_enabled');
  }

  // use_horizontal_scale - computed: false, optional: true, required: false
  private _useHorizontalScale?: boolean | cdktf.IResolvable; 
  public get useHorizontalScale() {
    return this.getBooleanAttribute('use_horizontal_scale');
  }
  public set useHorizontalScale(value: boolean | cdktf.IResolvable) {
    this._useHorizontalScale = value;
  }
  public resetUseHorizontalScale() {
    this._useHorizontalScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHorizontalScaleInput() {
    return this._useHorizontalScale;
  }
}

export class AppServiceServiceSizingPolicyList extends cdktf.ComplexList {
  public internalValue? : AppServiceServiceSizingPolicy[] | cdktf.IResolvable

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
  public get(index: number): AppServiceServiceSizingPolicyOutputReference {
    return new AppServiceServiceSizingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#container_count App#container_count}
  */
  readonly containerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#container_memory_limit App#container_memory_limit}
  */
  readonly containerMemoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#container_profile App#container_profile}
  */
  readonly containerProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#force_zero_downtime App#force_zero_downtime}
  */
  readonly forceZeroDowntime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#process_type App#process_type}
  */
  readonly processType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#simple_health_check App#simple_health_check}
  */
  readonly simpleHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#stop_timeout App#stop_timeout}
  */
  readonly stopTimeout?: number;
  /**
  * autoscaling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#autoscaling_policy App#autoscaling_policy}
  */
  readonly autoscalingPolicy?: AppServiceAutoscalingPolicy[] | cdktf.IResolvable;
  /**
  * service_sizing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#service_sizing_policy App#service_sizing_policy}
  */
  readonly serviceSizingPolicy?: AppServiceServiceSizingPolicy[] | cdktf.IResolvable;
}

export function appServiceToTerraform(struct?: AppService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_count: cdktf.numberToTerraform(struct!.containerCount),
    container_memory_limit: cdktf.numberToTerraform(struct!.containerMemoryLimit),
    container_profile: cdktf.stringToTerraform(struct!.containerProfile),
    force_zero_downtime: cdktf.booleanToTerraform(struct!.forceZeroDowntime),
    process_type: cdktf.stringToTerraform(struct!.processType),
    simple_health_check: cdktf.booleanToTerraform(struct!.simpleHealthCheck),
    stop_timeout: cdktf.numberToTerraform(struct!.stopTimeout),
    autoscaling_policy: cdktf.listMapper(appServiceAutoscalingPolicyToTerraform, true)(struct!.autoscalingPolicy),
    service_sizing_policy: cdktf.listMapper(appServiceServiceSizingPolicyToTerraform, true)(struct!.serviceSizingPolicy),
  }
}


export function appServiceToHclTerraform(struct?: AppService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_count: {
      value: cdktf.numberToHclTerraform(struct!.containerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_memory_limit: {
      value: cdktf.numberToHclTerraform(struct!.containerMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_profile: {
      value: cdktf.stringToHclTerraform(struct!.containerProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_zero_downtime: {
      value: cdktf.booleanToHclTerraform(struct!.forceZeroDowntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    process_type: {
      value: cdktf.stringToHclTerraform(struct!.processType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simple_health_check: {
      value: cdktf.booleanToHclTerraform(struct!.simpleHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_timeout: {
      value: cdktf.numberToHclTerraform(struct!.stopTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscaling_policy: {
      value: cdktf.listMapperHcl(appServiceAutoscalingPolicyToHclTerraform, true)(struct!.autoscalingPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "AppServiceAutoscalingPolicyList",
    },
    service_sizing_policy: {
      value: cdktf.listMapperHcl(appServiceServiceSizingPolicyToHclTerraform, true)(struct!.serviceSizingPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "AppServiceServiceSizingPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerCount = this._containerCount;
    }
    if (this._containerMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerMemoryLimit = this._containerMemoryLimit;
    }
    if (this._containerProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerProfile = this._containerProfile;
    }
    if (this._forceZeroDowntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceZeroDowntime = this._forceZeroDowntime;
    }
    if (this._processType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processType = this._processType;
    }
    if (this._simpleHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleHealthCheck = this._simpleHealthCheck;
    }
    if (this._stopTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTimeout = this._stopTimeout;
    }
    if (this._autoscalingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingPolicy = this._autoscalingPolicy?.internalValue;
    }
    if (this._serviceSizingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSizingPolicy = this._serviceSizingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerCount = undefined;
      this._containerMemoryLimit = undefined;
      this._containerProfile = undefined;
      this._forceZeroDowntime = undefined;
      this._processType = undefined;
      this._simpleHealthCheck = undefined;
      this._stopTimeout = undefined;
      this._autoscalingPolicy.internalValue = undefined;
      this._serviceSizingPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerCount = value.containerCount;
      this._containerMemoryLimit = value.containerMemoryLimit;
      this._containerProfile = value.containerProfile;
      this._forceZeroDowntime = value.forceZeroDowntime;
      this._processType = value.processType;
      this._simpleHealthCheck = value.simpleHealthCheck;
      this._stopTimeout = value.stopTimeout;
      this._autoscalingPolicy.internalValue = value.autoscalingPolicy;
      this._serviceSizingPolicy.internalValue = value.serviceSizingPolicy;
    }
  }

  // container_count - computed: false, optional: true, required: false
  private _containerCount?: number; 
  public get containerCount() {
    return this.getNumberAttribute('container_count');
  }
  public set containerCount(value: number) {
    this._containerCount = value;
  }
  public resetContainerCount() {
    this._containerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCountInput() {
    return this._containerCount;
  }

  // container_memory_limit - computed: false, optional: true, required: false
  private _containerMemoryLimit?: number; 
  public get containerMemoryLimit() {
    return this.getNumberAttribute('container_memory_limit');
  }
  public set containerMemoryLimit(value: number) {
    this._containerMemoryLimit = value;
  }
  public resetContainerMemoryLimit() {
    this._containerMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerMemoryLimitInput() {
    return this._containerMemoryLimit;
  }

  // container_profile - computed: false, optional: true, required: false
  private _containerProfile?: string; 
  public get containerProfile() {
    return this.getStringAttribute('container_profile');
  }
  public set containerProfile(value: string) {
    this._containerProfile = value;
  }
  public resetContainerProfile() {
    this._containerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerProfileInput() {
    return this._containerProfile;
  }

  // force_zero_downtime - computed: false, optional: true, required: false
  private _forceZeroDowntime?: boolean | cdktf.IResolvable; 
  public get forceZeroDowntime() {
    return this.getBooleanAttribute('force_zero_downtime');
  }
  public set forceZeroDowntime(value: boolean | cdktf.IResolvable) {
    this._forceZeroDowntime = value;
  }
  public resetForceZeroDowntime() {
    this._forceZeroDowntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceZeroDowntimeInput() {
    return this._forceZeroDowntime;
  }

  // process_type - computed: false, optional: true, required: false
  private _processType?: string; 
  public get processType() {
    return this.getStringAttribute('process_type');
  }
  public set processType(value: string) {
    this._processType = value;
  }
  public resetProcessType() {
    this._processType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTypeInput() {
    return this._processType;
  }

  // simple_health_check - computed: false, optional: true, required: false
  private _simpleHealthCheck?: boolean | cdktf.IResolvable; 
  public get simpleHealthCheck() {
    return this.getBooleanAttribute('simple_health_check');
  }
  public set simpleHealthCheck(value: boolean | cdktf.IResolvable) {
    this._simpleHealthCheck = value;
  }
  public resetSimpleHealthCheck() {
    this._simpleHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleHealthCheckInput() {
    return this._simpleHealthCheck;
  }

  // stop_timeout - computed: false, optional: true, required: false
  private _stopTimeout?: number; 
  public get stopTimeout() {
    return this.getNumberAttribute('stop_timeout');
  }
  public set stopTimeout(value: number) {
    this._stopTimeout = value;
  }
  public resetStopTimeout() {
    this._stopTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeoutInput() {
    return this._stopTimeout;
  }

  // autoscaling_policy - computed: false, optional: true, required: false
  private _autoscalingPolicy = new AppServiceAutoscalingPolicyList(this, "autoscaling_policy", true);
  public get autoscalingPolicy() {
    return this._autoscalingPolicy;
  }
  public putAutoscalingPolicy(value: AppServiceAutoscalingPolicy[] | cdktf.IResolvable) {
    this._autoscalingPolicy.internalValue = value;
  }
  public resetAutoscalingPolicy() {
    this._autoscalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy.internalValue;
  }

  // service_sizing_policy - computed: false, optional: true, required: false
  private _serviceSizingPolicy = new AppServiceServiceSizingPolicyList(this, "service_sizing_policy", true);
  public get serviceSizingPolicy() {
    return this._serviceSizingPolicy;
  }
  public putServiceSizingPolicy(value: AppServiceServiceSizingPolicy[] | cdktf.IResolvable) {
    this._serviceSizingPolicy.internalValue = value;
  }
  public resetServiceSizingPolicy() {
    this._serviceSizingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSizingPolicyInput() {
    return this._serviceSizingPolicy.internalValue;
  }
}

export class AppServiceList extends cdktf.ComplexList {
  public internalValue? : AppService[] | cdktf.IResolvable

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
  public get(index: number): AppServiceOutputReference {
    return new AppServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app aptible_app}
*/
export class App extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aptible_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a App resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the App to import
  * @param importFromId The id of the existing App that should be imported. Refer to the {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the App to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aptible_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/app aptible_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfig) {
    super(scope, id, {
      terraformResourceType: 'aptible_app',
      terraformGeneratorMetadata: {
        providerName: 'aptible',
        providerVersion: '0.9.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._envId = config.envId;
    this._handle = config.handle;
    this._id = config.id;
    this._service.internalValue = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // git_repo - computed: true, optional: false, required: false
  public get gitRepo() {
    return this.getStringAttribute('git_repo');
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
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

  // service - computed: false, optional: true, required: false
  private _service = new AppServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: AppService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      env_id: cdktf.numberToTerraform(this._envId),
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      service: cdktf.listMapper(appServiceToTerraform, true)(this._service.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
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
      service: {
        value: cdktf.listMapperHcl(appServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
