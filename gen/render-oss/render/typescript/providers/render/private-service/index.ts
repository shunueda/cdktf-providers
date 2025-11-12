// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * [Autoscaling settings](https://render.com/docs/scaling#autoscaling) for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#autoscaling PrivateService#autoscaling}
  */
  readonly autoscaling?: PrivateServiceAutoscaling;
  /**
  * [Persistent disk](https://render.com/docs/disks) to attach to the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#disk PrivateService#disk}
  */
  readonly disk?: PrivateServiceDisk;
  /**
  * Map of environment variable names to their values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#env_vars PrivateService#env_vars}
  */
  readonly envVars?: { [key: string]: PrivateServiceEnvVars } | cdktf.IResolvable;
  /**
  * ID of the [project environment](https://render.com/docs/projects) that the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#environment_id PrivateService#environment_id}
  */
  readonly environmentId?: string;
  /**
  * Configure the [log stream override settings](https://render.com/docs/log-streams#overriding-defaults) for this service. These will override the global log stream settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#log_stream_override PrivateService#log_stream_override}
  */
  readonly logStreamOverride?: PrivateServiceLogStreamOverride;
  /**
  * The maximum amount of time (in seconds) that Render waits for your application process to exit gracefully after sending it a SIGTERM signal before sending a SIGKILL signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#max_shutdown_delay_seconds PrivateService#max_shutdown_delay_seconds}
  */
  readonly maxShutdownDelaySeconds?: number;
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#name PrivateService#name}
  */
  readonly name: string;
  /**
  * Configure the [notification settings](https://render.com/docs/notifications) for this service. These will override the global notification settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#notification_override PrivateService#notification_override}
  */
  readonly notificationOverride?: PrivateServiceNotificationOverride;
  /**
  * Number of replicas of the service to run. Defaults to 1 on service creation and current instance count on update. If you want to manage the service's instance count outside Terraform, leave num_instances unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#num_instances PrivateService#num_instances}
  */
  readonly numInstances?: number;
  /**
  * Plan to use for the service. Must be one of `starter`, `standard`, `pro`, `pro_plus`, `pro_max`, `pro_ultra`, or a custom plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#plan PrivateService#plan}
  */
  readonly plan: string;
  /**
  * This command runs before starting your service. It is typically used for tasks like running a database migration or uploading assets to a CDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#pre_deploy_command PrivateService#pre_deploy_command}
  */
  readonly preDeployCommand?: string;
  /**
  * [Pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed) settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#previews PrivateService#previews}
  */
  readonly previews?: PrivateServicePreviews;
  /**
  * Enable [pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed) for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#pull_request_previews_enabled PrivateService#pull_request_previews_enabled}
  */
  readonly pullRequestPreviewsEnabled?: boolean | cdktf.IResolvable;
  /**
  * [Region](https://render.com/docs/regions) to deploy the service. One of `frankfurt`, `ohio`, `oregon`, `singapore`, `virginia`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#region PrivateService#region}
  */
  readonly region: string;
  /**
  * When you specify a [root directory](https://render.com/docs/monorepo-support#root-directory), Render runs all your commands in the specified directory and ignores changes outside the directory. Defaults to the repository root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#root_directory PrivateService#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * Source of the build artifacts or image that run your service. You must provide one of [native_runtime](https://render.com/docs/native-runtimes), [docker](https://render.com/docs/docker), or [image](https://render.com/docs/deploy-an-image).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#runtime_source PrivateService#runtime_source}
  */
  readonly runtimeSource: PrivateServiceRuntimeSource;
  /**
  * A map of secret file paths to their contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#secret_files PrivateService#secret_files}
  */
  readonly secretFiles?: { [key: string]: PrivateServiceSecretFiles } | cdktf.IResolvable;
  /**
  * Command to run the service. When using native runtimes, this will be used as the start command and is required. For [Docker](https://render.com/docs/docker) and [image-backed](https://render.com/docs/deploy-an-image) services, this will override the default Docker command for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#start_command PrivateService#start_command}
  */
  readonly startCommand?: string;
}
export interface PrivateServiceAutoscalingCriteriaCpu {
  /**
  * Whether CPU-based autoscaling is enabled for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#enabled PrivateService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#percentage PrivateService#percentage}
  */
  readonly percentage: number;
}

export function privateServiceAutoscalingCriteriaCpuToTerraform(struct?: PrivateServiceAutoscalingCriteriaCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function privateServiceAutoscalingCriteriaCpuToHclTerraform(struct?: PrivateServiceAutoscalingCriteriaCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceAutoscalingCriteriaCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceAutoscalingCriteriaCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceAutoscalingCriteriaCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._percentage = value.percentage;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // percentage - computed: true, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface PrivateServiceAutoscalingCriteriaMemory {
  /**
  * Whether memory-based autoscaling is enabled for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#enabled PrivateService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#percentage PrivateService#percentage}
  */
  readonly percentage: number;
}

export function privateServiceAutoscalingCriteriaMemoryToTerraform(struct?: PrivateServiceAutoscalingCriteriaMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function privateServiceAutoscalingCriteriaMemoryToHclTerraform(struct?: PrivateServiceAutoscalingCriteriaMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceAutoscalingCriteriaMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceAutoscalingCriteriaMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceAutoscalingCriteriaMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._percentage = value.percentage;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // percentage - computed: true, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface PrivateServiceAutoscalingCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#cpu PrivateService#cpu}
  */
  readonly cpu?: PrivateServiceAutoscalingCriteriaCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#memory PrivateService#memory}
  */
  readonly memory?: PrivateServiceAutoscalingCriteriaMemory;
}

export function privateServiceAutoscalingCriteriaToTerraform(struct?: PrivateServiceAutoscalingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: privateServiceAutoscalingCriteriaCpuToTerraform(struct!.cpu),
    memory: privateServiceAutoscalingCriteriaMemoryToTerraform(struct!.memory),
  }
}


export function privateServiceAutoscalingCriteriaToHclTerraform(struct?: PrivateServiceAutoscalingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: privateServiceAutoscalingCriteriaCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateServiceAutoscalingCriteriaCpu",
    },
    memory: {
      value: privateServiceAutoscalingCriteriaMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateServiceAutoscalingCriteriaMemory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceAutoscalingCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceAutoscalingCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceAutoscalingCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu = new PrivateServiceAutoscalingCriteriaCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: PrivateServiceAutoscalingCriteriaCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: true, optional: true, required: false
  private _memory = new PrivateServiceAutoscalingCriteriaMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: PrivateServiceAutoscalingCriteriaMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}
export interface PrivateServiceAutoscaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#criteria PrivateService#criteria}
  */
  readonly criteria: PrivateServiceAutoscalingCriteria;
  /**
  * Whether autoscaling is enabled for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#enabled PrivateService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#max PrivateService#max}
  */
  readonly max: number;
  /**
  * The minimum number of instances for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#min PrivateService#min}
  */
  readonly min: number;
}

export function privateServiceAutoscalingToTerraform(struct?: PrivateServiceAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: privateServiceAutoscalingCriteriaToTerraform(struct!.criteria),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function privateServiceAutoscalingToHclTerraform(struct?: PrivateServiceAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: privateServiceAutoscalingCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateServiceAutoscalingCriteria",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
      this._enabled = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
      this._enabled = value.enabled;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new PrivateServiceAutoscalingCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: PrivateServiceAutoscalingCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface PrivateServiceDisk {
  /**
  * Absolute path to mount the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#mount_path PrivateService#mount_path}
  */
  readonly mountPath: string;
  /**
  * Name of the disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#name PrivateService#name}
  */
  readonly name: string;
  /**
  * Size of the disk in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#size_gb PrivateService#size_gb}
  */
  readonly sizeGb: number;
}

export function privateServiceDiskToTerraform(struct?: PrivateServiceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}


export function privateServiceDiskToHclTerraform(struct?: PrivateServiceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sizeGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sizeGb = value.sizeGb;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface PrivateServiceEnvVars {
  /**
  * If true, Render will generate the variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#generate_value PrivateService#generate_value}
  */
  readonly generateValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#value PrivateService#value}
  */
  readonly value?: string;
}

export function privateServiceEnvVarsToTerraform(struct?: PrivateServiceEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate_value: cdktf.booleanToTerraform(struct!.generateValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function privateServiceEnvVarsToHclTerraform(struct?: PrivateServiceEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate_value: {
      value: cdktf.booleanToHclTerraform(struct!.generateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PrivateServiceEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateValue = this._generateValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generateValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generateValue = value.generateValue;
      this._value = value.value;
    }
  }

  // generate_value - computed: true, optional: true, required: false
  private _generateValue?: boolean | cdktf.IResolvable; 
  public get generateValue() {
    return this.getBooleanAttribute('generate_value');
  }
  public set generateValue(value: boolean | cdktf.IResolvable) {
    this._generateValue = value;
  }
  public resetGenerateValue() {
    this._generateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateValueInput() {
    return this._generateValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PrivateServiceEnvVarsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PrivateServiceEnvVars } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PrivateServiceEnvVarsOutputReference {
    return new PrivateServiceEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PrivateServiceLogStreamOverride {
  /**
  * The endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#endpoint PrivateService#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to send or drop logs for this service. Must be one of `send` or `drop`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#setting PrivateService#setting}
  */
  readonly setting: string;
  /**
  * The token to use when sending logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#token PrivateService#token}
  */
  readonly token?: string;
}

export function privateServiceLogStreamOverrideToTerraform(struct?: PrivateServiceLogStreamOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    setting: cdktf.stringToTerraform(struct!.setting),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function privateServiceLogStreamOverrideToHclTerraform(struct?: PrivateServiceLogStreamOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setting: {
      value: cdktf.stringToHclTerraform(struct!.setting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceLogStreamOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceLogStreamOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._setting !== undefined) {
      hasAnyValues = true;
      internalValueResult.setting = this._setting;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceLogStreamOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._setting = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._setting = value.setting;
      this._token = value.token;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // setting - computed: true, optional: false, required: true
  private _setting?: string; 
  public get setting() {
    return this.getStringAttribute('setting');
  }
  public set setting(value: string) {
    this._setting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface PrivateServiceNotificationOverride {
  /**
  * The types of notifications to send. Must be one of `default`, `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#notifications_to_send PrivateService#notifications_to_send}
  */
  readonly notificationsToSend?: string;
  /**
  * Whether notifications for previews of this service are sent. Must be one of `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#preview_notifications_enabled PrivateService#preview_notifications_enabled}
  */
  readonly previewNotificationsEnabled?: string;
}

export function privateServiceNotificationOverrideToTerraform(struct?: PrivateServiceNotificationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifications_to_send: cdktf.stringToTerraform(struct!.notificationsToSend),
    preview_notifications_enabled: cdktf.stringToTerraform(struct!.previewNotificationsEnabled),
  }
}


export function privateServiceNotificationOverrideToHclTerraform(struct?: PrivateServiceNotificationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notifications_to_send: {
      value: cdktf.stringToHclTerraform(struct!.notificationsToSend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preview_notifications_enabled: {
      value: cdktf.stringToHclTerraform(struct!.previewNotificationsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceNotificationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceNotificationOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationsToSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationsToSend = this._notificationsToSend;
    }
    if (this._previewNotificationsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewNotificationsEnabled = this._previewNotificationsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceNotificationOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationsToSend = undefined;
      this._previewNotificationsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationsToSend = value.notificationsToSend;
      this._previewNotificationsEnabled = value.previewNotificationsEnabled;
    }
  }

  // notifications_to_send - computed: true, optional: true, required: false
  private _notificationsToSend?: string; 
  public get notificationsToSend() {
    return this.getStringAttribute('notifications_to_send');
  }
  public set notificationsToSend(value: string) {
    this._notificationsToSend = value;
  }
  public resetNotificationsToSend() {
    this._notificationsToSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsToSendInput() {
    return this._notificationsToSend;
  }

  // preview_notifications_enabled - computed: true, optional: true, required: false
  private _previewNotificationsEnabled?: string; 
  public get previewNotificationsEnabled() {
    return this.getStringAttribute('preview_notifications_enabled');
  }
  public set previewNotificationsEnabled(value: string) {
    this._previewNotificationsEnabled = value;
  }
  public resetPreviewNotificationsEnabled() {
    this._previewNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewNotificationsEnabledInput() {
    return this._previewNotificationsEnabled;
  }
}
export interface PrivateServicePreviews {
  /**
  * Generation mode for [pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed). One of `off`, `manual`, or `automatic`. Defaults to `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#generation PrivateService#generation}
  */
  readonly generation?: string;
}

export function privateServicePreviewsToTerraform(struct?: PrivateServicePreviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.stringToTerraform(struct!.generation),
  }
}


export function privateServicePreviewsToHclTerraform(struct?: PrivateServicePreviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServicePreviewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServicePreviews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServicePreviews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generation = value.generation;
    }
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }
}
export interface PrivateServiceRuntimeSourceDockerBuildFilter {
  /**
  * Changes that match these paths will not trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#ignored_paths PrivateService#ignored_paths}
  */
  readonly ignoredPaths?: string[];
  /**
  * Changes that match these paths will trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#paths PrivateService#paths}
  */
  readonly paths?: string[];
}

export function privateServiceRuntimeSourceDockerBuildFilterToTerraform(struct?: PrivateServiceRuntimeSourceDockerBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredPaths),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function privateServiceRuntimeSourceDockerBuildFilterToHclTerraform(struct?: PrivateServiceRuntimeSourceDockerBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignored_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceRuntimeSourceDockerBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceRuntimeSourceDockerBuildFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoredPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredPaths = this._ignoredPaths;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceRuntimeSourceDockerBuildFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoredPaths = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoredPaths = value.ignoredPaths;
      this._paths = value.paths;
    }
  }

  // ignored_paths - computed: false, optional: true, required: false
  private _ignoredPaths?: string[]; 
  public get ignoredPaths() {
    return this.getListAttribute('ignored_paths');
  }
  public set ignoredPaths(value: string[]) {
    this._ignoredPaths = value;
  }
  public resetIgnoredPaths() {
    this._ignoredPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredPathsInput() {
    return this._ignoredPaths;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}
export interface PrivateServiceRuntimeSourceDocker {
  /**
  * [Automatic deploy](https://render.com/docs/deploys#automatic-git-deploys) on every push to your repository, or changes to your service settings or environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#auto_deploy PrivateService#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Sets the Automatic deploy behavior for a Git-based service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#auto_deploy_trigger PrivateService#auto_deploy_trigger}
  */
  readonly autoDeployTrigger?: string;
  /**
  * Branch of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#branch PrivateService#branch}
  */
  readonly branch: string;
  /**
  * Apply [build filters](https://render.com/docs/monorepo-support#build-filters) to configure which changes in your git repository trigger automatic deploys. If you've defined a root directory, you can still define paths outside of the root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#build_filter PrivateService#build_filter}
  */
  readonly buildFilter?: PrivateServiceRuntimeSourceDockerBuildFilter;
  /**
  * [Docker build context directory.](https://docs.docker.com/reference/dockerfile/#usage) This is relative to your repository root. Defaults to the root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#context PrivateService#context}
  */
  readonly context?: string;
  /**
  * Path to your Dockerfile relative to the repository root. This is not relative to your Docker build context. Example: `./subdir/Dockerfile.`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#dockerfile_path PrivateService#dockerfile_path}
  */
  readonly dockerfilePath?: string;
  /**
  * ID of the registry credential to use when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#registry_credential_id PrivateService#registry_credential_id}
  */
  readonly registryCredentialId?: string;
  /**
  * URL of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#repo_url PrivateService#repo_url}
  */
  readonly repoUrl: string;
}

export function privateServiceRuntimeSourceDockerToTerraform(struct?: PrivateServiceRuntimeSourceDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deploy: cdktf.booleanToTerraform(struct!.autoDeploy),
    auto_deploy_trigger: cdktf.stringToTerraform(struct!.autoDeployTrigger),
    branch: cdktf.stringToTerraform(struct!.branch),
    build_filter: privateServiceRuntimeSourceDockerBuildFilterToTerraform(struct!.buildFilter),
    context: cdktf.stringToTerraform(struct!.context),
    dockerfile_path: cdktf.stringToTerraform(struct!.dockerfilePath),
    registry_credential_id: cdktf.stringToTerraform(struct!.registryCredentialId),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
  }
}


export function privateServiceRuntimeSourceDockerToHclTerraform(struct?: PrivateServiceRuntimeSourceDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_deploy: {
      value: cdktf.booleanToHclTerraform(struct!.autoDeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_deploy_trigger: {
      value: cdktf.stringToHclTerraform(struct!.autoDeployTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_filter: {
      value: privateServiceRuntimeSourceDockerBuildFilterToHclTerraform(struct!.buildFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateServiceRuntimeSourceDockerBuildFilter",
    },
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dockerfile_path: {
      value: cdktf.stringToHclTerraform(struct!.dockerfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.registryCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceRuntimeSourceDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceRuntimeSourceDocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeploy = this._autoDeploy;
    }
    if (this._autoDeployTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployTrigger = this._autoDeployTrigger;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._buildFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildFilter = this._buildFilter?.internalValue;
    }
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._dockerfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerfilePath = this._dockerfilePath;
    }
    if (this._registryCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryCredentialId = this._registryCredentialId;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceRuntimeSourceDocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDeploy = undefined;
      this._autoDeployTrigger = undefined;
      this._branch = undefined;
      this._buildFilter.internalValue = undefined;
      this._context = undefined;
      this._dockerfilePath = undefined;
      this._registryCredentialId = undefined;
      this._repoUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDeploy = value.autoDeploy;
      this._autoDeployTrigger = value.autoDeployTrigger;
      this._branch = value.branch;
      this._buildFilter.internalValue = value.buildFilter;
      this._context = value.context;
      this._dockerfilePath = value.dockerfilePath;
      this._registryCredentialId = value.registryCredentialId;
      this._repoUrl = value.repoUrl;
    }
  }

  // auto_deploy - computed: true, optional: true, required: false
  private _autoDeploy?: boolean | cdktf.IResolvable; 
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean | cdktf.IResolvable) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy;
  }

  // auto_deploy_trigger - computed: true, optional: true, required: false
  private _autoDeployTrigger?: string; 
  public get autoDeployTrigger() {
    return this.getStringAttribute('auto_deploy_trigger');
  }
  public set autoDeployTrigger(value: string) {
    this._autoDeployTrigger = value;
  }
  public resetAutoDeployTrigger() {
    this._autoDeployTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployTriggerInput() {
    return this._autoDeployTrigger;
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // build_filter - computed: false, optional: true, required: false
  private _buildFilter = new PrivateServiceRuntimeSourceDockerBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }
  public putBuildFilter(value: PrivateServiceRuntimeSourceDockerBuildFilter) {
    this._buildFilter.internalValue = value;
  }
  public resetBuildFilter() {
    this._buildFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildFilterInput() {
    return this._buildFilter.internalValue;
  }

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // dockerfile_path - computed: true, optional: true, required: false
  private _dockerfilePath?: string; 
  public get dockerfilePath() {
    return this.getStringAttribute('dockerfile_path');
  }
  public set dockerfilePath(value: string) {
    this._dockerfilePath = value;
  }
  public resetDockerfilePath() {
    this._dockerfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfilePathInput() {
    return this._dockerfilePath;
  }

  // registry_credential_id - computed: false, optional: true, required: false
  private _registryCredentialId?: string; 
  public get registryCredentialId() {
    return this.getStringAttribute('registry_credential_id');
  }
  public set registryCredentialId(value: string) {
    this._registryCredentialId = value;
  }
  public resetRegistryCredentialId() {
    this._registryCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialIdInput() {
    return this._registryCredentialId;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }
}
export interface PrivateServiceRuntimeSourceImage {
  /**
  * Digest of the Docker image to deploy. Mutually exclusive with tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#digest PrivateService#digest}
  */
  readonly digest?: string;
  /**
  * URL of the Docker image to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#image_url PrivateService#image_url}
  */
  readonly imageUrl: string;
  /**
  * ID of the registry credential to use when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#registry_credential_id PrivateService#registry_credential_id}
  */
  readonly registryCredentialId?: string;
  /**
  * Tag of the Docker image to deploy. Mutually exclusive with digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#tag PrivateService#tag}
  */
  readonly tag?: string;
}

export function privateServiceRuntimeSourceImageToTerraform(struct?: PrivateServiceRuntimeSourceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digest: cdktf.stringToTerraform(struct!.digest),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    registry_credential_id: cdktf.stringToTerraform(struct!.registryCredentialId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function privateServiceRuntimeSourceImageToHclTerraform(struct?: PrivateServiceRuntimeSourceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.registryCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceRuntimeSourceImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceRuntimeSourceImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._registryCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryCredentialId = this._registryCredentialId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceRuntimeSourceImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digest = undefined;
      this._imageUrl = undefined;
      this._registryCredentialId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digest = value.digest;
      this._imageUrl = value.imageUrl;
      this._registryCredentialId = value.registryCredentialId;
      this._tag = value.tag;
    }
  }

  // digest - computed: true, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // image_url - computed: false, optional: false, required: true
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // registry_credential_id - computed: false, optional: true, required: false
  private _registryCredentialId?: string; 
  public get registryCredentialId() {
    return this.getStringAttribute('registry_credential_id');
  }
  public set registryCredentialId(value: string) {
    this._registryCredentialId = value;
  }
  public resetRegistryCredentialId() {
    this._registryCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialIdInput() {
    return this._registryCredentialId;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface PrivateServiceRuntimeSourceNativeRuntimeBuildFilter {
  /**
  * Changes that match these paths will not trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#ignored_paths PrivateService#ignored_paths}
  */
  readonly ignoredPaths?: string[];
  /**
  * Changes that match these paths will trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#paths PrivateService#paths}
  */
  readonly paths?: string[];
}

export function privateServiceRuntimeSourceNativeRuntimeBuildFilterToTerraform(struct?: PrivateServiceRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredPaths),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function privateServiceRuntimeSourceNativeRuntimeBuildFilterToHclTerraform(struct?: PrivateServiceRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignored_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceRuntimeSourceNativeRuntimeBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoredPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredPaths = this._ignoredPaths;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoredPaths = undefined;
      this._paths = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoredPaths = value.ignoredPaths;
      this._paths = value.paths;
    }
  }

  // ignored_paths - computed: false, optional: true, required: false
  private _ignoredPaths?: string[]; 
  public get ignoredPaths() {
    return this.getListAttribute('ignored_paths');
  }
  public set ignoredPaths(value: string[]) {
    this._ignoredPaths = value;
  }
  public resetIgnoredPaths() {
    this._ignoredPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredPathsInput() {
    return this._ignoredPaths;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }
}
export interface PrivateServiceRuntimeSourceNativeRuntime {
  /**
  * [Automatic deploy](https://render.com/docs/deploys#automatic-git-deploys) on every push to your repository, or changes to your service settings or environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#auto_deploy PrivateService#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Sets the Automatic deploy behavior for a Git-based service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#auto_deploy_trigger PrivateService#auto_deploy_trigger}
  */
  readonly autoDeployTrigger?: string;
  /**
  * Branch of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#branch PrivateService#branch}
  */
  readonly branch: string;
  /**
  * Command to build the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#build_command PrivateService#build_command}
  */
  readonly buildCommand: string;
  /**
  * Apply [build filters](https://render.com/docs/monorepo-support#build-filters) to configure which changes in your git repository trigger automatic deploys. If you've defined a root directory, you can still define paths outside of the root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#build_filter PrivateService#build_filter}
  */
  readonly buildFilter?: PrivateServiceRuntimeSourceNativeRuntimeBuildFilter;
  /**
  * URL of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#repo_url PrivateService#repo_url}
  */
  readonly repoUrl: string;
  /**
  * Runtime of the service to use. Must be one of `elixir`, `go`, `node`, `python`, `ruby`, `rust`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#runtime PrivateService#runtime}
  */
  readonly runtime: string;
}

export function privateServiceRuntimeSourceNativeRuntimeToTerraform(struct?: PrivateServiceRuntimeSourceNativeRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deploy: cdktf.booleanToTerraform(struct!.autoDeploy),
    auto_deploy_trigger: cdktf.stringToTerraform(struct!.autoDeployTrigger),
    branch: cdktf.stringToTerraform(struct!.branch),
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    build_filter: privateServiceRuntimeSourceNativeRuntimeBuildFilterToTerraform(struct!.buildFilter),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    runtime: cdktf.stringToTerraform(struct!.runtime),
  }
}


export function privateServiceRuntimeSourceNativeRuntimeToHclTerraform(struct?: PrivateServiceRuntimeSourceNativeRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_deploy: {
      value: cdktf.booleanToHclTerraform(struct!.autoDeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_deploy_trigger: {
      value: cdktf.stringToHclTerraform(struct!.autoDeployTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_command: {
      value: cdktf.stringToHclTerraform(struct!.buildCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_filter: {
      value: privateServiceRuntimeSourceNativeRuntimeBuildFilterToHclTerraform(struct!.buildFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateServiceRuntimeSourceNativeRuntimeBuildFilter",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime: {
      value: cdktf.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceRuntimeSourceNativeRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceRuntimeSourceNativeRuntime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeploy = this._autoDeploy;
    }
    if (this._autoDeployTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployTrigger = this._autoDeployTrigger;
    }
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._buildFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildFilter = this._buildFilter?.internalValue;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceRuntimeSourceNativeRuntime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDeploy = undefined;
      this._autoDeployTrigger = undefined;
      this._branch = undefined;
      this._buildCommand = undefined;
      this._buildFilter.internalValue = undefined;
      this._repoUrl = undefined;
      this._runtime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDeploy = value.autoDeploy;
      this._autoDeployTrigger = value.autoDeployTrigger;
      this._branch = value.branch;
      this._buildCommand = value.buildCommand;
      this._buildFilter.internalValue = value.buildFilter;
      this._repoUrl = value.repoUrl;
      this._runtime = value.runtime;
    }
  }

  // auto_deploy - computed: true, optional: true, required: false
  private _autoDeploy?: boolean | cdktf.IResolvable; 
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean | cdktf.IResolvable) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy;
  }

  // auto_deploy_trigger - computed: true, optional: true, required: false
  private _autoDeployTrigger?: string; 
  public get autoDeployTrigger() {
    return this.getStringAttribute('auto_deploy_trigger');
  }
  public set autoDeployTrigger(value: string) {
    this._autoDeployTrigger = value;
  }
  public resetAutoDeployTrigger() {
    this._autoDeployTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployTriggerInput() {
    return this._autoDeployTrigger;
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // build_command - computed: false, optional: false, required: true
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // build_filter - computed: false, optional: true, required: false
  private _buildFilter = new PrivateServiceRuntimeSourceNativeRuntimeBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }
  public putBuildFilter(value: PrivateServiceRuntimeSourceNativeRuntimeBuildFilter) {
    this._buildFilter.internalValue = value;
  }
  public resetBuildFilter() {
    this._buildFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildFilterInput() {
    return this._buildFilter.internalValue;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }
}
export interface PrivateServiceRuntimeSource {
  /**
  * Details for building and deploying a service [using a Dockerfile](https://render.com/docs/docker).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#docker PrivateService#docker}
  */
  readonly docker?: PrivateServiceRuntimeSourceDocker;
  /**
  * Details for deploying a service using a [Docker image from a registry](https://render.com/docs/deploy-an-image).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#image PrivateService#image}
  */
  readonly image?: PrivateServiceRuntimeSourceImage;
  /**
  * Details for building and deploying a service using one of Render's [native runtimes](https://render.com/docs/native-runtimes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#native_runtime PrivateService#native_runtime}
  */
  readonly nativeRuntime?: PrivateServiceRuntimeSourceNativeRuntime;
}

export function privateServiceRuntimeSourceToTerraform(struct?: PrivateServiceRuntimeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker: privateServiceRuntimeSourceDockerToTerraform(struct!.docker),
    image: privateServiceRuntimeSourceImageToTerraform(struct!.image),
    native_runtime: privateServiceRuntimeSourceNativeRuntimeToTerraform(struct!.nativeRuntime),
  }
}


export function privateServiceRuntimeSourceToHclTerraform(struct?: PrivateServiceRuntimeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker: {
      value: privateServiceRuntimeSourceDockerToHclTerraform(struct!.docker),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateServiceRuntimeSourceDocker",
    },
    image: {
      value: privateServiceRuntimeSourceImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateServiceRuntimeSourceImage",
    },
    native_runtime: {
      value: privateServiceRuntimeSourceNativeRuntimeToHclTerraform(struct!.nativeRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateServiceRuntimeSourceNativeRuntime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceRuntimeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceRuntimeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._docker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docker = this._docker?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._nativeRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeRuntime = this._nativeRuntime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceRuntimeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._docker.internalValue = undefined;
      this._image.internalValue = undefined;
      this._nativeRuntime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._docker.internalValue = value.docker;
      this._image.internalValue = value.image;
      this._nativeRuntime.internalValue = value.nativeRuntime;
    }
  }

  // docker - computed: false, optional: true, required: false
  private _docker = new PrivateServiceRuntimeSourceDockerOutputReference(this, "docker");
  public get docker() {
    return this._docker;
  }
  public putDocker(value: PrivateServiceRuntimeSourceDocker) {
    this._docker.internalValue = value;
  }
  public resetDocker() {
    this._docker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new PrivateServiceRuntimeSourceImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: PrivateServiceRuntimeSourceImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // native_runtime - computed: false, optional: true, required: false
  private _nativeRuntime = new PrivateServiceRuntimeSourceNativeRuntimeOutputReference(this, "native_runtime");
  public get nativeRuntime() {
    return this._nativeRuntime;
  }
  public putNativeRuntime(value: PrivateServiceRuntimeSourceNativeRuntime) {
    this._nativeRuntime.internalValue = value;
  }
  public resetNativeRuntime() {
    this._nativeRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeRuntimeInput() {
    return this._nativeRuntime.internalValue;
  }
}
export interface PrivateServiceSecretFiles {
  /**
  * The content of the secret file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#content PrivateService#content}
  */
  readonly content: string;
}

export function privateServiceSecretFilesToTerraform(struct?: PrivateServiceSecretFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function privateServiceSecretFilesToHclTerraform(struct?: PrivateServiceSecretFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceSecretFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PrivateServiceSecretFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceSecretFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}

export class PrivateServiceSecretFilesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PrivateServiceSecretFiles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PrivateServiceSecretFilesOutputReference {
    return new PrivateServiceSecretFilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service render_private_service}
*/
export class PrivateService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_private_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateService to import
  * @param importFromId The id of the existing PrivateService that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_private_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/private_service render_private_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateServiceConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'render_private_service',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscaling.internalValue = config.autoscaling;
    this._disk.internalValue = config.disk;
    this._envVars.internalValue = config.envVars;
    this._environmentId = config.environmentId;
    this._logStreamOverride.internalValue = config.logStreamOverride;
    this._maxShutdownDelaySeconds = config.maxShutdownDelaySeconds;
    this._name = config.name;
    this._notificationOverride.internalValue = config.notificationOverride;
    this._numInstances = config.numInstances;
    this._plan = config.plan;
    this._preDeployCommand = config.preDeployCommand;
    this._previews.internalValue = config.previews;
    this._pullRequestPreviewsEnabled = config.pullRequestPreviewsEnabled;
    this._region = config.region;
    this._rootDirectory = config.rootDirectory;
    this._runtimeSource.internalValue = config.runtimeSource;
    this._secretFiles.internalValue = config.secretFiles;
    this._startCommand = config.startCommand;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new PrivateServiceAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: PrivateServiceAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new PrivateServiceDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: PrivateServiceDisk) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars = new PrivateServiceEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: PrivateServiceEnvVars } | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_stream_override - computed: true, optional: true, required: false
  private _logStreamOverride = new PrivateServiceLogStreamOverrideOutputReference(this, "log_stream_override");
  public get logStreamOverride() {
    return this._logStreamOverride;
  }
  public putLogStreamOverride(value: PrivateServiceLogStreamOverride) {
    this._logStreamOverride.internalValue = value;
  }
  public resetLogStreamOverride() {
    this._logStreamOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamOverrideInput() {
    return this._logStreamOverride.internalValue;
  }

  // max_shutdown_delay_seconds - computed: true, optional: true, required: false
  private _maxShutdownDelaySeconds?: number; 
  public get maxShutdownDelaySeconds() {
    return this.getNumberAttribute('max_shutdown_delay_seconds');
  }
  public set maxShutdownDelaySeconds(value: number) {
    this._maxShutdownDelaySeconds = value;
  }
  public resetMaxShutdownDelaySeconds() {
    this._maxShutdownDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxShutdownDelaySecondsInput() {
    return this._maxShutdownDelaySeconds;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notification_override - computed: true, optional: true, required: false
  private _notificationOverride = new PrivateServiceNotificationOverrideOutputReference(this, "notification_override");
  public get notificationOverride() {
    return this._notificationOverride;
  }
  public putNotificationOverride(value: PrivateServiceNotificationOverride) {
    this._notificationOverride.internalValue = value;
  }
  public resetNotificationOverride() {
    this._notificationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationOverrideInput() {
    return this._notificationOverride.internalValue;
  }

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // pre_deploy_command - computed: false, optional: true, required: false
  private _preDeployCommand?: string; 
  public get preDeployCommand() {
    return this.getStringAttribute('pre_deploy_command');
  }
  public set preDeployCommand(value: string) {
    this._preDeployCommand = value;
  }
  public resetPreDeployCommand() {
    this._preDeployCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preDeployCommandInput() {
    return this._preDeployCommand;
  }

  // previews - computed: true, optional: true, required: false
  private _previews = new PrivateServicePreviewsOutputReference(this, "previews");
  public get previews() {
    return this._previews;
  }
  public putPreviews(value: PrivateServicePreviews) {
    this._previews.internalValue = value;
  }
  public resetPreviews() {
    this._previews.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewsInput() {
    return this._previews.internalValue;
  }

  // pull_request_previews_enabled - computed: true, optional: true, required: false
  private _pullRequestPreviewsEnabled?: boolean | cdktf.IResolvable; 
  public get pullRequestPreviewsEnabled() {
    return this.getBooleanAttribute('pull_request_previews_enabled');
  }
  public set pullRequestPreviewsEnabled(value: boolean | cdktf.IResolvable) {
    this._pullRequestPreviewsEnabled = value;
  }
  public resetPullRequestPreviewsEnabled() {
    this._pullRequestPreviewsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestPreviewsEnabledInput() {
    return this._pullRequestPreviewsEnabled;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // root_directory - computed: true, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // runtime_source - computed: false, optional: false, required: true
  private _runtimeSource = new PrivateServiceRuntimeSourceOutputReference(this, "runtime_source");
  public get runtimeSource() {
    return this._runtimeSource;
  }
  public putRuntimeSource(value: PrivateServiceRuntimeSource) {
    this._runtimeSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeSourceInput() {
    return this._runtimeSource.internalValue;
  }

  // secret_files - computed: false, optional: true, required: false
  private _secretFiles = new PrivateServiceSecretFilesMap(this, "secret_files");
  public get secretFiles() {
    return this._secretFiles;
  }
  public putSecretFiles(value: { [key: string]: PrivateServiceSecretFiles } | cdktf.IResolvable) {
    this._secretFiles.internalValue = value;
  }
  public resetSecretFiles() {
    this._secretFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFilesInput() {
    return this._secretFiles.internalValue;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // start_command - computed: false, optional: true, required: false
  private _startCommand?: string; 
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
  public set startCommand(value: string) {
    this._startCommand = value;
  }
  public resetStartCommand() {
    this._startCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCommandInput() {
    return this._startCommand;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling: privateServiceAutoscalingToTerraform(this._autoscaling.internalValue),
      disk: privateServiceDiskToTerraform(this._disk.internalValue),
      env_vars: cdktf.hashMapper(privateServiceEnvVarsToTerraform)(this._envVars.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      log_stream_override: privateServiceLogStreamOverrideToTerraform(this._logStreamOverride.internalValue),
      max_shutdown_delay_seconds: cdktf.numberToTerraform(this._maxShutdownDelaySeconds),
      name: cdktf.stringToTerraform(this._name),
      notification_override: privateServiceNotificationOverrideToTerraform(this._notificationOverride.internalValue),
      num_instances: cdktf.numberToTerraform(this._numInstances),
      plan: cdktf.stringToTerraform(this._plan),
      pre_deploy_command: cdktf.stringToTerraform(this._preDeployCommand),
      previews: privateServicePreviewsToTerraform(this._previews.internalValue),
      pull_request_previews_enabled: cdktf.booleanToTerraform(this._pullRequestPreviewsEnabled),
      region: cdktf.stringToTerraform(this._region),
      root_directory: cdktf.stringToTerraform(this._rootDirectory),
      runtime_source: privateServiceRuntimeSourceToTerraform(this._runtimeSource.internalValue),
      secret_files: cdktf.hashMapper(privateServiceSecretFilesToTerraform)(this._secretFiles.internalValue),
      start_command: cdktf.stringToTerraform(this._startCommand),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaling: {
        value: privateServiceAutoscalingToHclTerraform(this._autoscaling.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateServiceAutoscaling",
      },
      disk: {
        value: privateServiceDiskToHclTerraform(this._disk.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateServiceDisk",
      },
      env_vars: {
        value: cdktf.hashMapperHcl(privateServiceEnvVarsToHclTerraform)(this._envVars.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PrivateServiceEnvVarsMap",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_override: {
        value: privateServiceLogStreamOverrideToHclTerraform(this._logStreamOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateServiceLogStreamOverride",
      },
      max_shutdown_delay_seconds: {
        value: cdktf.numberToHclTerraform(this._maxShutdownDelaySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_override: {
        value: privateServiceNotificationOverrideToHclTerraform(this._notificationOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateServiceNotificationOverride",
      },
      num_instances: {
        value: cdktf.numberToHclTerraform(this._numInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_deploy_command: {
        value: cdktf.stringToHclTerraform(this._preDeployCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previews: {
        value: privateServicePreviewsToHclTerraform(this._previews.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateServicePreviews",
      },
      pull_request_previews_enabled: {
        value: cdktf.booleanToHclTerraform(this._pullRequestPreviewsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_directory: {
        value: cdktf.stringToHclTerraform(this._rootDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_source: {
        value: privateServiceRuntimeSourceToHclTerraform(this._runtimeSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateServiceRuntimeSource",
      },
      secret_files: {
        value: cdktf.hashMapperHcl(privateServiceSecretFilesToHclTerraform)(this._secretFiles.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PrivateServiceSecretFilesMap",
      },
      start_command: {
        value: cdktf.stringToHclTerraform(this._startCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
