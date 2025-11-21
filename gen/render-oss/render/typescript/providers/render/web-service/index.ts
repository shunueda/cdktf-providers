// https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * [Autoscaling settings](https://render.com/docs/scaling#autoscaling) for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#autoscaling WebService#autoscaling}
  */
  readonly autoscaling?: WebServiceAutoscaling;
  /**
  * Custom domains to associate with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#custom_domains WebService#custom_domains}
  */
  readonly customDomains?: WebServiceCustomDomains[] | cdktf.IResolvable;
  /**
  * [Persistent disk](https://render.com/docs/disks) to attach to the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#disk WebService#disk}
  */
  readonly disk?: WebServiceDisk;
  /**
  * Map of environment variable names to their values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#env_vars WebService#env_vars}
  */
  readonly envVars?: { [key: string]: WebServiceEnvVars } | cdktf.IResolvable;
  /**
  * ID of the [project environment](https://render.com/docs/projects) that the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#environment_id WebService#environment_id}
  */
  readonly environmentId?: string;
  /**
  * If you're running a server, enter the path where your server will always return a 200 OK response. We use it to monitor your app and for [zero downtime deploys](https://render.com/docs/deploys#zero-downtime-deploys).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#health_check_path WebService#health_check_path}
  */
  readonly healthCheckPath?: string;
  /**
  * List of IP addresses that are allowed to connect to the web service. If omitted, the API default (0.0.0.0/0 - allow all) is used. If set to an empty list, all traffic is blocked. If removed after being set, it reverts to the default (0.0.0.0/0). This is an enterprise-only feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#ip_allow_list WebService#ip_allow_list}
  */
  readonly ipAllowList?: WebServiceIpAllowListStruct[] | cdktf.IResolvable;
  /**
  * Configure the [log stream override settings](https://render.com/docs/log-streams#overriding-defaults) for this service. These will override the global log stream settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#log_stream_override WebService#log_stream_override}
  */
  readonly logStreamOverride?: WebServiceLogStreamOverride;
  /**
  * Maintenance mode settings for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#maintenance_mode WebService#maintenance_mode}
  */
  readonly maintenanceMode?: WebServiceMaintenanceMode;
  /**
  * The maximum amount of time (in seconds) that Render waits for your application process to exit gracefully after sending it a SIGTERM signal before sending a SIGKILL signal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#max_shutdown_delay_seconds WebService#max_shutdown_delay_seconds}
  */
  readonly maxShutdownDelaySeconds?: number;
  /**
  * Name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#name WebService#name}
  */
  readonly name: string;
  /**
  * Configure the [notification settings](https://render.com/docs/notifications) for this service. These will override the global notification settings of the user or team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#notification_override WebService#notification_override}
  */
  readonly notificationOverride?: WebServiceNotificationOverride;
  /**
  * Number of replicas of the service to run. Defaults to 1 on service creation and current instance count on update. If you want to manage the service's instance count outside Terraform, leave num_instances unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#num_instances WebService#num_instances}
  */
  readonly numInstances?: number;
  /**
  * Plan to use for the service. Must be one of `starter`, `standard`, `pro`, `pro_plus`, `pro_max`, `pro_ultra`, or a custom plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#plan WebService#plan}
  */
  readonly plan: string;
  /**
  * This command runs before starting your service. It is typically used for tasks like running a database migration or uploading assets to a CDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#pre_deploy_command WebService#pre_deploy_command}
  */
  readonly preDeployCommand?: string;
  /**
  * [Pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed) settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#previews WebService#previews}
  */
  readonly previews?: WebServicePreviews;
  /**
  * Enable [pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed) for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#pull_request_previews_enabled WebService#pull_request_previews_enabled}
  */
  readonly pullRequestPreviewsEnabled?: boolean | cdktf.IResolvable;
  /**
  * [Region](https://render.com/docs/regions) to deploy the service. One of `frankfurt`, `ohio`, `oregon`, `singapore`, `virginia`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#region WebService#region}
  */
  readonly region: string;
  /**
  * When you specify a [root directory](https://render.com/docs/monorepo-support#root-directory), Render runs all your commands in the specified directory and ignores changes outside the directory. Defaults to the repository root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#root_directory WebService#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * Source of the build artifacts or image that run your service. You must provide one of [native_runtime](https://render.com/docs/native-runtimes), [docker](https://render.com/docs/docker), or [image](https://render.com/docs/deploy-an-image).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#runtime_source WebService#runtime_source}
  */
  readonly runtimeSource: WebServiceRuntimeSource;
  /**
  * A map of secret file paths to their contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#secret_files WebService#secret_files}
  */
  readonly secretFiles?: { [key: string]: WebServiceSecretFiles } | cdktf.IResolvable;
  /**
  * Command to run the service. When using native runtimes, this will be used as the start command and is required. For [Docker](https://render.com/docs/docker) and [image-backed](https://render.com/docs/deploy-an-image) services, this will override the default Docker command for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#start_command WebService#start_command}
  */
  readonly startCommand?: string;
}
export interface WebServiceActiveCustomDomains {
}

export function webServiceActiveCustomDomainsToTerraform(struct?: WebServiceActiveCustomDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function webServiceActiveCustomDomainsToHclTerraform(struct?: WebServiceActiveCustomDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WebServiceActiveCustomDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebServiceActiveCustomDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceActiveCustomDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_suffix - computed: true, optional: false, required: false
  public get publicSuffix() {
    return this.getStringAttribute('public_suffix');
  }

  // redirect_for_name - computed: true, optional: false, required: false
  public get redirectForName() {
    return this.getStringAttribute('redirect_for_name');
  }
}

export class WebServiceActiveCustomDomainsList extends cdktf.ComplexList {

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
  public get(index: number): WebServiceActiveCustomDomainsOutputReference {
    return new WebServiceActiveCustomDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebServiceAutoscalingCriteriaCpu {
  /**
  * Whether CPU-based autoscaling is enabled for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#enabled WebService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#percentage WebService#percentage}
  */
  readonly percentage: number;
}

export function webServiceAutoscalingCriteriaCpuToTerraform(struct?: WebServiceAutoscalingCriteriaCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function webServiceAutoscalingCriteriaCpuToHclTerraform(struct?: WebServiceAutoscalingCriteriaCpu | cdktf.IResolvable): any {
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

export class WebServiceAutoscalingCriteriaCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceAutoscalingCriteriaCpu | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceAutoscalingCriteriaCpu | cdktf.IResolvable | undefined) {
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
export interface WebServiceAutoscalingCriteriaMemory {
  /**
  * Whether memory-based autoscaling is enabled for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#enabled WebService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#percentage WebService#percentage}
  */
  readonly percentage: number;
}

export function webServiceAutoscalingCriteriaMemoryToTerraform(struct?: WebServiceAutoscalingCriteriaMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function webServiceAutoscalingCriteriaMemoryToHclTerraform(struct?: WebServiceAutoscalingCriteriaMemory | cdktf.IResolvable): any {
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

export class WebServiceAutoscalingCriteriaMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceAutoscalingCriteriaMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceAutoscalingCriteriaMemory | cdktf.IResolvable | undefined) {
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
export interface WebServiceAutoscalingCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#cpu WebService#cpu}
  */
  readonly cpu?: WebServiceAutoscalingCriteriaCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#memory WebService#memory}
  */
  readonly memory?: WebServiceAutoscalingCriteriaMemory;
}

export function webServiceAutoscalingCriteriaToTerraform(struct?: WebServiceAutoscalingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: webServiceAutoscalingCriteriaCpuToTerraform(struct!.cpu),
    memory: webServiceAutoscalingCriteriaMemoryToTerraform(struct!.memory),
  }
}


export function webServiceAutoscalingCriteriaToHclTerraform(struct?: WebServiceAutoscalingCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: webServiceAutoscalingCriteriaCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "WebServiceAutoscalingCriteriaCpu",
    },
    memory: {
      value: webServiceAutoscalingCriteriaMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "WebServiceAutoscalingCriteriaMemory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceAutoscalingCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceAutoscalingCriteria | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceAutoscalingCriteria | cdktf.IResolvable | undefined) {
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
  private _cpu = new WebServiceAutoscalingCriteriaCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: WebServiceAutoscalingCriteriaCpu) {
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
  private _memory = new WebServiceAutoscalingCriteriaMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: WebServiceAutoscalingCriteriaMemory) {
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
export interface WebServiceAutoscaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#criteria WebService#criteria}
  */
  readonly criteria: WebServiceAutoscalingCriteria;
  /**
  * Whether autoscaling is enabled for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#enabled WebService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The maximum number of instances for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#max WebService#max}
  */
  readonly max: number;
  /**
  * The minimum number of instances for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#min WebService#min}
  */
  readonly min: number;
}

export function webServiceAutoscalingToTerraform(struct?: WebServiceAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: webServiceAutoscalingCriteriaToTerraform(struct!.criteria),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function webServiceAutoscalingToHclTerraform(struct?: WebServiceAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: webServiceAutoscalingCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "struct",
      storageClassType: "WebServiceAutoscalingCriteria",
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

export class WebServiceAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceAutoscaling | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceAutoscaling | cdktf.IResolvable | undefined) {
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
  private _criteria = new WebServiceAutoscalingCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: WebServiceAutoscalingCriteria) {
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
export interface WebServiceCustomDomains {
  /**
  * DNS record of the custom domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#name WebService#name}
  */
  readonly name: string;
}

export function webServiceCustomDomainsToTerraform(struct?: WebServiceCustomDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webServiceCustomDomainsToHclTerraform(struct?: WebServiceCustomDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceCustomDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebServiceCustomDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceCustomDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // public_suffix - computed: true, optional: false, required: false
  public get publicSuffix() {
    return this.getStringAttribute('public_suffix');
  }

  // redirect_for_name - computed: true, optional: false, required: false
  public get redirectForName() {
    return this.getStringAttribute('redirect_for_name');
  }
}

export class WebServiceCustomDomainsList extends cdktf.ComplexList {
  public internalValue? : WebServiceCustomDomains[] | cdktf.IResolvable

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
  public get(index: number): WebServiceCustomDomainsOutputReference {
    return new WebServiceCustomDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebServiceDisk {
  /**
  * Absolute path to mount the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#mount_path WebService#mount_path}
  */
  readonly mountPath: string;
  /**
  * Name of the disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#name WebService#name}
  */
  readonly name: string;
  /**
  * Size of the disk in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#size_gb WebService#size_gb}
  */
  readonly sizeGb: number;
}

export function webServiceDiskToTerraform(struct?: WebServiceDisk | cdktf.IResolvable): any {
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


export function webServiceDiskToHclTerraform(struct?: WebServiceDisk | cdktf.IResolvable): any {
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

export class WebServiceDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceDisk | cdktf.IResolvable | undefined) {
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
export interface WebServiceEnvVars {
  /**
  * If true, Render will generate the variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#generate_value WebService#generate_value}
  */
  readonly generateValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#value WebService#value}
  */
  readonly value?: string;
}

export function webServiceEnvVarsToTerraform(struct?: WebServiceEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate_value: cdktf.booleanToTerraform(struct!.generateValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webServiceEnvVarsToHclTerraform(struct?: WebServiceEnvVars | cdktf.IResolvable): any {
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

export class WebServiceEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebServiceEnvVars | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceEnvVars | cdktf.IResolvable | undefined) {
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

export class WebServiceEnvVarsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: WebServiceEnvVars } | cdktf.IResolvable

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
  public get(key: string): WebServiceEnvVarsOutputReference {
    return new WebServiceEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface WebServiceIpAllowListStruct {
  /**
  * CIDR block that is allowed to connect to the Redis instance. (0.0.0.0/0 to allow traffic from all IPs) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#cidr_block WebService#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Description of the IP address or range. This is used to help identify the IP address or range in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#description WebService#description}
  */
  readonly description: string;
}

export function webServiceIpAllowListStructToTerraform(struct?: WebServiceIpAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function webServiceIpAllowListStructToHclTerraform(struct?: WebServiceIpAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceIpAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebServiceIpAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceIpAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class WebServiceIpAllowListStructList extends cdktf.ComplexList {
  public internalValue? : WebServiceIpAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): WebServiceIpAllowListStructOutputReference {
    return new WebServiceIpAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebServiceLogStreamOverride {
  /**
  * The endpoint to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#endpoint WebService#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to send or drop logs for this service. Must be one of `send` or `drop`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#setting WebService#setting}
  */
  readonly setting: string;
  /**
  * The token to use when sending logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#token WebService#token}
  */
  readonly token?: string;
}

export function webServiceLogStreamOverrideToTerraform(struct?: WebServiceLogStreamOverride | cdktf.IResolvable): any {
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


export function webServiceLogStreamOverrideToHclTerraform(struct?: WebServiceLogStreamOverride | cdktf.IResolvable): any {
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

export class WebServiceLogStreamOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceLogStreamOverride | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceLogStreamOverride | cdktf.IResolvable | undefined) {
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
export interface WebServiceMaintenanceMode {
  /**
  * Whether maintenance mode is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#enabled WebService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * URI to redirect to when maintenance mode is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#uri WebService#uri}
  */
  readonly uri?: string;
}

export function webServiceMaintenanceModeToTerraform(struct?: WebServiceMaintenanceMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function webServiceMaintenanceModeToHclTerraform(struct?: WebServiceMaintenanceMode | cdktf.IResolvable): any {
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceMaintenanceModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceMaintenanceMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceMaintenanceMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._uri = value.uri;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface WebServiceNotificationOverride {
  /**
  * The types of notifications to send. Must be one of `default`, `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#notifications_to_send WebService#notifications_to_send}
  */
  readonly notificationsToSend?: string;
  /**
  * Whether notifications for previews of this service are sent. Must be one of `all`, `failure`, or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#preview_notifications_enabled WebService#preview_notifications_enabled}
  */
  readonly previewNotificationsEnabled?: string;
}

export function webServiceNotificationOverrideToTerraform(struct?: WebServiceNotificationOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifications_to_send: cdktf.stringToTerraform(struct!.notificationsToSend),
    preview_notifications_enabled: cdktf.stringToTerraform(struct!.previewNotificationsEnabled),
  }
}


export function webServiceNotificationOverrideToHclTerraform(struct?: WebServiceNotificationOverride | cdktf.IResolvable): any {
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

export class WebServiceNotificationOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceNotificationOverride | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceNotificationOverride | cdktf.IResolvable | undefined) {
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
export interface WebServicePreviews {
  /**
  * Generation mode for [pull request previews](https://render.com/docs/pull-request-previews#pull-request-previews-git-backed). One of `off`, `manual`, or `automatic`. Defaults to `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#generation WebService#generation}
  */
  readonly generation?: string;
}

export function webServicePreviewsToTerraform(struct?: WebServicePreviews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation: cdktf.stringToTerraform(struct!.generation),
  }
}


export function webServicePreviewsToHclTerraform(struct?: WebServicePreviews | cdktf.IResolvable): any {
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

export class WebServicePreviewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServicePreviews | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServicePreviews | cdktf.IResolvable | undefined) {
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
export interface WebServiceRuntimeSourceDockerBuildFilter {
  /**
  * Changes that match these paths will not trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#ignored_paths WebService#ignored_paths}
  */
  readonly ignoredPaths?: string[];
  /**
  * Changes that match these paths will trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#paths WebService#paths}
  */
  readonly paths?: string[];
}

export function webServiceRuntimeSourceDockerBuildFilterToTerraform(struct?: WebServiceRuntimeSourceDockerBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredPaths),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function webServiceRuntimeSourceDockerBuildFilterToHclTerraform(struct?: WebServiceRuntimeSourceDockerBuildFilter | cdktf.IResolvable): any {
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

export class WebServiceRuntimeSourceDockerBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceRuntimeSourceDockerBuildFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceRuntimeSourceDockerBuildFilter | cdktf.IResolvable | undefined) {
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
export interface WebServiceRuntimeSourceDocker {
  /**
  * [Automatic deploy](https://render.com/docs/deploys#automatic-git-deploys) on every push to your repository, or changes to your service settings or environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#auto_deploy WebService#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Sets the Automatic deploy behavior for a Git-based service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#auto_deploy_trigger WebService#auto_deploy_trigger}
  */
  readonly autoDeployTrigger?: string;
  /**
  * Branch of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#branch WebService#branch}
  */
  readonly branch: string;
  /**
  * Apply [build filters](https://render.com/docs/monorepo-support#build-filters) to configure which changes in your git repository trigger automatic deploys. If you've defined a root directory, you can still define paths outside of the root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#build_filter WebService#build_filter}
  */
  readonly buildFilter?: WebServiceRuntimeSourceDockerBuildFilter;
  /**
  * [Docker build context directory.](https://docs.docker.com/reference/dockerfile/#usage) This is relative to your repository root. Defaults to the root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#context WebService#context}
  */
  readonly context?: string;
  /**
  * Path to your Dockerfile relative to the repository root. This is not relative to your Docker build context. Example: `./subdir/Dockerfile.`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#dockerfile_path WebService#dockerfile_path}
  */
  readonly dockerfilePath?: string;
  /**
  * ID of the registry credential to use when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#registry_credential_id WebService#registry_credential_id}
  */
  readonly registryCredentialId?: string;
  /**
  * URL of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#repo_url WebService#repo_url}
  */
  readonly repoUrl: string;
}

export function webServiceRuntimeSourceDockerToTerraform(struct?: WebServiceRuntimeSourceDocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deploy: cdktf.booleanToTerraform(struct!.autoDeploy),
    auto_deploy_trigger: cdktf.stringToTerraform(struct!.autoDeployTrigger),
    branch: cdktf.stringToTerraform(struct!.branch),
    build_filter: webServiceRuntimeSourceDockerBuildFilterToTerraform(struct!.buildFilter),
    context: cdktf.stringToTerraform(struct!.context),
    dockerfile_path: cdktf.stringToTerraform(struct!.dockerfilePath),
    registry_credential_id: cdktf.stringToTerraform(struct!.registryCredentialId),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
  }
}


export function webServiceRuntimeSourceDockerToHclTerraform(struct?: WebServiceRuntimeSourceDocker | cdktf.IResolvable): any {
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
      value: webServiceRuntimeSourceDockerBuildFilterToHclTerraform(struct!.buildFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "WebServiceRuntimeSourceDockerBuildFilter",
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

export class WebServiceRuntimeSourceDockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceRuntimeSourceDocker | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceRuntimeSourceDocker | cdktf.IResolvable | undefined) {
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
  private _buildFilter = new WebServiceRuntimeSourceDockerBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }
  public putBuildFilter(value: WebServiceRuntimeSourceDockerBuildFilter) {
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
export interface WebServiceRuntimeSourceImage {
  /**
  * Digest of the Docker image to deploy. Mutually exclusive with tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#digest WebService#digest}
  */
  readonly digest?: string;
  /**
  * URL of the Docker image to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#image_url WebService#image_url}
  */
  readonly imageUrl: string;
  /**
  * ID of the registry credential to use when pulling the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#registry_credential_id WebService#registry_credential_id}
  */
  readonly registryCredentialId?: string;
  /**
  * Tag of the Docker image to deploy. Mutually exclusive with digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#tag WebService#tag}
  */
  readonly tag?: string;
}

export function webServiceRuntimeSourceImageToTerraform(struct?: WebServiceRuntimeSourceImage | cdktf.IResolvable): any {
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


export function webServiceRuntimeSourceImageToHclTerraform(struct?: WebServiceRuntimeSourceImage | cdktf.IResolvable): any {
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

export class WebServiceRuntimeSourceImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceRuntimeSourceImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceRuntimeSourceImage | cdktf.IResolvable | undefined) {
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
export interface WebServiceRuntimeSourceNativeRuntimeBuildFilter {
  /**
  * Changes that match these paths will not trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#ignored_paths WebService#ignored_paths}
  */
  readonly ignoredPaths?: string[];
  /**
  * Changes that match these paths will trigger a new build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#paths WebService#paths}
  */
  readonly paths?: string[];
}

export function webServiceRuntimeSourceNativeRuntimeBuildFilterToTerraform(struct?: WebServiceRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredPaths),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function webServiceRuntimeSourceNativeRuntimeBuildFilterToHclTerraform(struct?: WebServiceRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable): any {
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

export class WebServiceRuntimeSourceNativeRuntimeBuildFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceRuntimeSourceNativeRuntimeBuildFilter | cdktf.IResolvable | undefined) {
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
export interface WebServiceRuntimeSourceNativeRuntime {
  /**
  * [Automatic deploy](https://render.com/docs/deploys#automatic-git-deploys) on every push to your repository, or changes to your service settings or environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#auto_deploy WebService#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Sets the Automatic deploy behavior for a Git-based service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#auto_deploy_trigger WebService#auto_deploy_trigger}
  */
  readonly autoDeployTrigger?: string;
  /**
  * Branch of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#branch WebService#branch}
  */
  readonly branch: string;
  /**
  * Command to build the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#build_command WebService#build_command}
  */
  readonly buildCommand: string;
  /**
  * Apply [build filters](https://render.com/docs/monorepo-support#build-filters) to configure which changes in your git repository trigger automatic deploys. If you've defined a root directory, you can still define paths outside of the root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#build_filter WebService#build_filter}
  */
  readonly buildFilter?: WebServiceRuntimeSourceNativeRuntimeBuildFilter;
  /**
  * URL of the git repository to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#repo_url WebService#repo_url}
  */
  readonly repoUrl: string;
  /**
  * Runtime of the service to use. Must be one of `elixir`, `go`, `node`, `python`, `ruby`, `rust`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#runtime WebService#runtime}
  */
  readonly runtime: string;
}

export function webServiceRuntimeSourceNativeRuntimeToTerraform(struct?: WebServiceRuntimeSourceNativeRuntime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deploy: cdktf.booleanToTerraform(struct!.autoDeploy),
    auto_deploy_trigger: cdktf.stringToTerraform(struct!.autoDeployTrigger),
    branch: cdktf.stringToTerraform(struct!.branch),
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    build_filter: webServiceRuntimeSourceNativeRuntimeBuildFilterToTerraform(struct!.buildFilter),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    runtime: cdktf.stringToTerraform(struct!.runtime),
  }
}


export function webServiceRuntimeSourceNativeRuntimeToHclTerraform(struct?: WebServiceRuntimeSourceNativeRuntime | cdktf.IResolvable): any {
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
      value: webServiceRuntimeSourceNativeRuntimeBuildFilterToHclTerraform(struct!.buildFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "WebServiceRuntimeSourceNativeRuntimeBuildFilter",
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

export class WebServiceRuntimeSourceNativeRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceRuntimeSourceNativeRuntime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceRuntimeSourceNativeRuntime | cdktf.IResolvable | undefined) {
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
  private _buildFilter = new WebServiceRuntimeSourceNativeRuntimeBuildFilterOutputReference(this, "build_filter");
  public get buildFilter() {
    return this._buildFilter;
  }
  public putBuildFilter(value: WebServiceRuntimeSourceNativeRuntimeBuildFilter) {
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
export interface WebServiceRuntimeSource {
  /**
  * Details for building and deploying a service [using a Dockerfile](https://render.com/docs/docker).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#docker WebService#docker}
  */
  readonly docker?: WebServiceRuntimeSourceDocker;
  /**
  * Details for deploying a service using a [Docker image from a registry](https://render.com/docs/deploy-an-image).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#image WebService#image}
  */
  readonly image?: WebServiceRuntimeSourceImage;
  /**
  * Details for building and deploying a service using one of Render's [native runtimes](https://render.com/docs/native-runtimes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#native_runtime WebService#native_runtime}
  */
  readonly nativeRuntime?: WebServiceRuntimeSourceNativeRuntime;
}

export function webServiceRuntimeSourceToTerraform(struct?: WebServiceRuntimeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker: webServiceRuntimeSourceDockerToTerraform(struct!.docker),
    image: webServiceRuntimeSourceImageToTerraform(struct!.image),
    native_runtime: webServiceRuntimeSourceNativeRuntimeToTerraform(struct!.nativeRuntime),
  }
}


export function webServiceRuntimeSourceToHclTerraform(struct?: WebServiceRuntimeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker: {
      value: webServiceRuntimeSourceDockerToHclTerraform(struct!.docker),
      isBlock: true,
      type: "struct",
      storageClassType: "WebServiceRuntimeSourceDocker",
    },
    image: {
      value: webServiceRuntimeSourceImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "WebServiceRuntimeSourceImage",
    },
    native_runtime: {
      value: webServiceRuntimeSourceNativeRuntimeToHclTerraform(struct!.nativeRuntime),
      isBlock: true,
      type: "struct",
      storageClassType: "WebServiceRuntimeSourceNativeRuntime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceRuntimeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebServiceRuntimeSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceRuntimeSource | cdktf.IResolvable | undefined) {
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
  private _docker = new WebServiceRuntimeSourceDockerOutputReference(this, "docker");
  public get docker() {
    return this._docker;
  }
  public putDocker(value: WebServiceRuntimeSourceDocker) {
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
  private _image = new WebServiceRuntimeSourceImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: WebServiceRuntimeSourceImage) {
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
  private _nativeRuntime = new WebServiceRuntimeSourceNativeRuntimeOutputReference(this, "native_runtime");
  public get nativeRuntime() {
    return this._nativeRuntime;
  }
  public putNativeRuntime(value: WebServiceRuntimeSourceNativeRuntime) {
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
export interface WebServiceSecretFiles {
  /**
  * The content of the secret file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#content WebService#content}
  */
  readonly content: string;
}

export function webServiceSecretFilesToTerraform(struct?: WebServiceSecretFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function webServiceSecretFilesToHclTerraform(struct?: WebServiceSecretFiles | cdktf.IResolvable): any {
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

export class WebServiceSecretFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebServiceSecretFiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebServiceSecretFiles | cdktf.IResolvable | undefined) {
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

export class WebServiceSecretFilesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: WebServiceSecretFiles } | cdktf.IResolvable

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
  public get(key: string): WebServiceSecretFilesOutputReference {
    return new WebServiceSecretFilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service render_web_service}
*/
export class WebService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_web_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebService to import
  * @param importFromId The id of the existing WebService that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_web_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs/resources/web_service render_web_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebServiceConfig
  */
  public constructor(scope: Construct, id: string, config: WebServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'render_web_service',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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
    this._customDomains.internalValue = config.customDomains;
    this._disk.internalValue = config.disk;
    this._envVars.internalValue = config.envVars;
    this._environmentId = config.environmentId;
    this._healthCheckPath = config.healthCheckPath;
    this._ipAllowList.internalValue = config.ipAllowList;
    this._logStreamOverride.internalValue = config.logStreamOverride;
    this._maintenanceMode.internalValue = config.maintenanceMode;
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

  // active_custom_domains - computed: true, optional: false, required: false
  private _activeCustomDomains = new WebServiceActiveCustomDomainsList(this, "active_custom_domains", true);
  public get activeCustomDomains() {
    return this._activeCustomDomains;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new WebServiceAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: WebServiceAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // custom_domains - computed: false, optional: true, required: false
  private _customDomains = new WebServiceCustomDomainsList(this, "custom_domains", true);
  public get customDomains() {
    return this._customDomains;
  }
  public putCustomDomains(value: WebServiceCustomDomains[] | cdktf.IResolvable) {
    this._customDomains.internalValue = value;
  }
  public resetCustomDomains() {
    this._customDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new WebServiceDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: WebServiceDisk) {
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
  private _envVars = new WebServiceEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: WebServiceEnvVars } | cdktf.IResolvable) {
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

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_allow_list - computed: false, optional: true, required: false
  private _ipAllowList = new WebServiceIpAllowListStructList(this, "ip_allow_list", true);
  public get ipAllowList() {
    return this._ipAllowList;
  }
  public putIpAllowList(value: WebServiceIpAllowListStruct[] | cdktf.IResolvable) {
    this._ipAllowList.internalValue = value;
  }
  public resetIpAllowList() {
    this._ipAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowListInput() {
    return this._ipAllowList.internalValue;
  }

  // log_stream_override - computed: true, optional: true, required: false
  private _logStreamOverride = new WebServiceLogStreamOverrideOutputReference(this, "log_stream_override");
  public get logStreamOverride() {
    return this._logStreamOverride;
  }
  public putLogStreamOverride(value: WebServiceLogStreamOverride) {
    this._logStreamOverride.internalValue = value;
  }
  public resetLogStreamOverride() {
    this._logStreamOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamOverrideInput() {
    return this._logStreamOverride.internalValue;
  }

  // maintenance_mode - computed: true, optional: true, required: false
  private _maintenanceMode = new WebServiceMaintenanceModeOutputReference(this, "maintenance_mode");
  public get maintenanceMode() {
    return this._maintenanceMode;
  }
  public putMaintenanceMode(value: WebServiceMaintenanceMode) {
    this._maintenanceMode.internalValue = value;
  }
  public resetMaintenanceMode() {
    this._maintenanceMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeInput() {
    return this._maintenanceMode.internalValue;
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
  private _notificationOverride = new WebServiceNotificationOverrideOutputReference(this, "notification_override");
  public get notificationOverride() {
    return this._notificationOverride;
  }
  public putNotificationOverride(value: WebServiceNotificationOverride) {
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
  private _previews = new WebServicePreviewsOutputReference(this, "previews");
  public get previews() {
    return this._previews;
  }
  public putPreviews(value: WebServicePreviews) {
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
  private _runtimeSource = new WebServiceRuntimeSourceOutputReference(this, "runtime_source");
  public get runtimeSource() {
    return this._runtimeSource;
  }
  public putRuntimeSource(value: WebServiceRuntimeSource) {
    this._runtimeSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeSourceInput() {
    return this._runtimeSource.internalValue;
  }

  // secret_files - computed: false, optional: true, required: false
  private _secretFiles = new WebServiceSecretFilesMap(this, "secret_files");
  public get secretFiles() {
    return this._secretFiles;
  }
  public putSecretFiles(value: { [key: string]: WebServiceSecretFiles } | cdktf.IResolvable) {
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
      autoscaling: webServiceAutoscalingToTerraform(this._autoscaling.internalValue),
      custom_domains: cdktf.listMapper(webServiceCustomDomainsToTerraform, false)(this._customDomains.internalValue),
      disk: webServiceDiskToTerraform(this._disk.internalValue),
      env_vars: cdktf.hashMapper(webServiceEnvVarsToTerraform)(this._envVars.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
      ip_allow_list: cdktf.listMapper(webServiceIpAllowListStructToTerraform, false)(this._ipAllowList.internalValue),
      log_stream_override: webServiceLogStreamOverrideToTerraform(this._logStreamOverride.internalValue),
      maintenance_mode: webServiceMaintenanceModeToTerraform(this._maintenanceMode.internalValue),
      max_shutdown_delay_seconds: cdktf.numberToTerraform(this._maxShutdownDelaySeconds),
      name: cdktf.stringToTerraform(this._name),
      notification_override: webServiceNotificationOverrideToTerraform(this._notificationOverride.internalValue),
      num_instances: cdktf.numberToTerraform(this._numInstances),
      plan: cdktf.stringToTerraform(this._plan),
      pre_deploy_command: cdktf.stringToTerraform(this._preDeployCommand),
      previews: webServicePreviewsToTerraform(this._previews.internalValue),
      pull_request_previews_enabled: cdktf.booleanToTerraform(this._pullRequestPreviewsEnabled),
      region: cdktf.stringToTerraform(this._region),
      root_directory: cdktf.stringToTerraform(this._rootDirectory),
      runtime_source: webServiceRuntimeSourceToTerraform(this._runtimeSource.internalValue),
      secret_files: cdktf.hashMapper(webServiceSecretFilesToTerraform)(this._secretFiles.internalValue),
      start_command: cdktf.stringToTerraform(this._startCommand),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaling: {
        value: webServiceAutoscalingToHclTerraform(this._autoscaling.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebServiceAutoscaling",
      },
      custom_domains: {
        value: cdktf.listMapperHcl(webServiceCustomDomainsToHclTerraform, false)(this._customDomains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebServiceCustomDomainsList",
      },
      disk: {
        value: webServiceDiskToHclTerraform(this._disk.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebServiceDisk",
      },
      env_vars: {
        value: cdktf.hashMapperHcl(webServiceEnvVarsToHclTerraform)(this._envVars.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "WebServiceEnvVarsMap",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_path: {
        value: cdktf.stringToHclTerraform(this._healthCheckPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_allow_list: {
        value: cdktf.listMapperHcl(webServiceIpAllowListStructToHclTerraform, false)(this._ipAllowList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebServiceIpAllowListStructList",
      },
      log_stream_override: {
        value: webServiceLogStreamOverrideToHclTerraform(this._logStreamOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebServiceLogStreamOverride",
      },
      maintenance_mode: {
        value: webServiceMaintenanceModeToHclTerraform(this._maintenanceMode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebServiceMaintenanceMode",
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
        value: webServiceNotificationOverrideToHclTerraform(this._notificationOverride.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebServiceNotificationOverride",
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
        value: webServicePreviewsToHclTerraform(this._previews.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebServicePreviews",
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
        value: webServiceRuntimeSourceToHclTerraform(this._runtimeSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebServiceRuntimeSource",
      },
      secret_files: {
        value: cdktf.hashMapperHcl(webServiceSecretFilesToHclTerraform)(this._secretFiles.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "WebServiceSecretFilesMap",
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
