// https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InferenceDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true to enable API key authentication for the inference instance. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#auth_enabled InferenceDeployment#auth_enabled}
  */
  readonly authEnabled?: boolean | cdktf.IResolvable;
  /**
  * Command to be executed when running a container from an image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#command InferenceDeployment#command}
  */
  readonly command?: string;
  /**
  * Required if using a private image registry. Specifies the name of the credentials to authenticate with the registry where the container image is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#credentials_name InferenceDeployment#credentials_name}
  */
  readonly credentialsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#description InferenceDeployment#description}
  */
  readonly description?: string;
  /**
  * Environment variables for the inference instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#envs InferenceDeployment#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * Specifies the resource flavor for the container, determining its allocated CPU, memory, and potentially GPU resources. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#flavor_name InferenceDeployment#flavor_name}
  */
  readonly flavorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#id InferenceDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The container image to be used for deployment. This should be a valid image reference, such as a public or private Docker image (registry.example.com/my-image:latest). Note: If the image is hosted in a private registry, you must specify credentials_name to provide authentication details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#image InferenceDeployment#image}
  */
  readonly image: string;
  /**
  * The port on which the container will accept incoming traffic. This should match the port your application is configured to listen on within the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#listening_port InferenceDeployment#listening_port}
  */
  readonly listeningPort: number;
  /**
  * The name of the deployment. This should be unique within the scope of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#name InferenceDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#project_id InferenceDeployment#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#project_name InferenceDeployment#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#timeout InferenceDeployment#timeout}
  */
  readonly timeout?: number;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#containers InferenceDeployment#containers}
  */
  readonly containers: InferenceDeploymentContainers[] | cdktf.IResolvable;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#liveness_probe InferenceDeployment#liveness_probe}
  */
  readonly livenessProbe?: InferenceDeploymentLivenessProbe;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#logging InferenceDeployment#logging}
  */
  readonly logging?: InferenceDeploymentLogging;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#readiness_probe InferenceDeployment#readiness_probe}
  */
  readonly readinessProbe?: InferenceDeploymentReadinessProbe;
  /**
  * startup_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#startup_probe InferenceDeployment#startup_probe}
  */
  readonly startupProbe?: InferenceDeploymentStartupProbe;
}
export interface InferenceDeploymentContainers {
  /**
  * Cooldown period between scaling actions in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#cooldown_period InferenceDeployment#cooldown_period}
  */
  readonly cooldownPeriod: number;
  /**
  * Polling interval for scaling triggers in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#polling_interval InferenceDeployment#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * Region id for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#region_id InferenceDeployment#region_id}
  */
  readonly regionId: number;
  /**
  * Maximum scale for the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#scale_max InferenceDeployment#scale_max}
  */
  readonly scaleMax: number;
  /**
  * Minimum scale for the container. It can be set to 0, in which case the container will be downscaled to 0 when there is no load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#scale_min InferenceDeployment#scale_min}
  */
  readonly scaleMin: number;
  /**
  * CPU trigger threshold configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_cpu_threshold InferenceDeployment#triggers_cpu_threshold}
  */
  readonly triggersCpuThreshold?: number;
  /**
  * GPU memory trigger threshold configuration. Calculated by DCGM_FI_DEV_MEM_COPY_UTIL metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_gpu_memory_threshold InferenceDeployment#triggers_gpu_memory_threshold}
  */
  readonly triggersGpuMemoryThreshold?: number;
  /**
  * GPU utilization trigger threshold configuration. Calculated by DCGM_FI_DEV_GPU_UTIL metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_gpu_utilization_threshold InferenceDeployment#triggers_gpu_utilization_threshold}
  */
  readonly triggersGpuUtilizationThreshold?: number;
  /**
  * Request count per 'window' seconds for the http trigger. Required if you use http trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_http_rate InferenceDeployment#triggers_http_rate}
  */
  readonly triggersHttpRate?: number;
  /**
  * Time window for rate calculation in seconds. Required if you use http trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_http_window InferenceDeployment#triggers_http_window}
  */
  readonly triggersHttpWindow?: number;
  /**
  * Memory trigger threshold configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_memory_threshold InferenceDeployment#triggers_memory_threshold}
  */
  readonly triggersMemoryThreshold?: number;
  /**
  * Number of messages for activation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_sqs_activation_queue_length InferenceDeployment#triggers_sqs_activation_queue_length}
  */
  readonly triggersSqsActivationQueueLength?: number;
  /**
  * Custom AWS endpoint, left empty to use default aws endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_sqs_aws_endpoint InferenceDeployment#triggers_sqs_aws_endpoint}
  */
  readonly triggersSqsAwsEndpoint?: string;
  /**
  * AWS region. Required if you use SQS trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_sqs_aws_region InferenceDeployment#triggers_sqs_aws_region}
  */
  readonly triggersSqsAwsRegion?: string;
  /**
  * Number of messages for one replica
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_sqs_queue_length InferenceDeployment#triggers_sqs_queue_length}
  */
  readonly triggersSqsQueueLength?: number;
  /**
  * URL of the SQS queue. Required if you use SQS trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_sqs_queue_url InferenceDeployment#triggers_sqs_queue_url}
  */
  readonly triggersSqsQueueUrl?: string;
  /**
  * Scale on delayed messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_sqs_scale_on_delayed InferenceDeployment#triggers_sqs_scale_on_delayed}
  */
  readonly triggersSqsScaleOnDelayed?: boolean | cdktf.IResolvable;
  /**
  * Scale on in-flight messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_sqs_scale_on_flight InferenceDeployment#triggers_sqs_scale_on_flight}
  */
  readonly triggersSqsScaleOnFlight?: boolean | cdktf.IResolvable;
  /**
  * Name of the secret with AWS credentials. Required if you use SQS trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#triggers_sqs_secret_name InferenceDeployment#triggers_sqs_secret_name}
  */
  readonly triggersSqsSecretName?: string;
}

export function inferenceDeploymentContainersToTerraform(struct?: InferenceDeploymentContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown_period: cdktf.numberToTerraform(struct!.cooldownPeriod),
    polling_interval: cdktf.numberToTerraform(struct!.pollingInterval),
    region_id: cdktf.numberToTerraform(struct!.regionId),
    scale_max: cdktf.numberToTerraform(struct!.scaleMax),
    scale_min: cdktf.numberToTerraform(struct!.scaleMin),
    triggers_cpu_threshold: cdktf.numberToTerraform(struct!.triggersCpuThreshold),
    triggers_gpu_memory_threshold: cdktf.numberToTerraform(struct!.triggersGpuMemoryThreshold),
    triggers_gpu_utilization_threshold: cdktf.numberToTerraform(struct!.triggersGpuUtilizationThreshold),
    triggers_http_rate: cdktf.numberToTerraform(struct!.triggersHttpRate),
    triggers_http_window: cdktf.numberToTerraform(struct!.triggersHttpWindow),
    triggers_memory_threshold: cdktf.numberToTerraform(struct!.triggersMemoryThreshold),
    triggers_sqs_activation_queue_length: cdktf.numberToTerraform(struct!.triggersSqsActivationQueueLength),
    triggers_sqs_aws_endpoint: cdktf.stringToTerraform(struct!.triggersSqsAwsEndpoint),
    triggers_sqs_aws_region: cdktf.stringToTerraform(struct!.triggersSqsAwsRegion),
    triggers_sqs_queue_length: cdktf.numberToTerraform(struct!.triggersSqsQueueLength),
    triggers_sqs_queue_url: cdktf.stringToTerraform(struct!.triggersSqsQueueUrl),
    triggers_sqs_scale_on_delayed: cdktf.booleanToTerraform(struct!.triggersSqsScaleOnDelayed),
    triggers_sqs_scale_on_flight: cdktf.booleanToTerraform(struct!.triggersSqsScaleOnFlight),
    triggers_sqs_secret_name: cdktf.stringToTerraform(struct!.triggersSqsSecretName),
  }
}


export function inferenceDeploymentContainersToHclTerraform(struct?: InferenceDeploymentContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown_period: {
      value: cdktf.numberToHclTerraform(struct!.cooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_id: {
      value: cdktf.numberToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_max: {
      value: cdktf.numberToHclTerraform(struct!.scaleMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_min: {
      value: cdktf.numberToHclTerraform(struct!.scaleMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.triggersCpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_gpu_memory_threshold: {
      value: cdktf.numberToHclTerraform(struct!.triggersGpuMemoryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_gpu_utilization_threshold: {
      value: cdktf.numberToHclTerraform(struct!.triggersGpuUtilizationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_http_rate: {
      value: cdktf.numberToHclTerraform(struct!.triggersHttpRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_http_window: {
      value: cdktf.numberToHclTerraform(struct!.triggersHttpWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_memory_threshold: {
      value: cdktf.numberToHclTerraform(struct!.triggersMemoryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_sqs_activation_queue_length: {
      value: cdktf.numberToHclTerraform(struct!.triggersSqsActivationQueueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_sqs_aws_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.triggersSqsAwsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggers_sqs_aws_region: {
      value: cdktf.stringToHclTerraform(struct!.triggersSqsAwsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggers_sqs_queue_length: {
      value: cdktf.numberToHclTerraform(struct!.triggersSqsQueueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    triggers_sqs_queue_url: {
      value: cdktf.stringToHclTerraform(struct!.triggersSqsQueueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggers_sqs_scale_on_delayed: {
      value: cdktf.booleanToHclTerraform(struct!.triggersSqsScaleOnDelayed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    triggers_sqs_scale_on_flight: {
      value: cdktf.booleanToHclTerraform(struct!.triggersSqsScaleOnFlight),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    triggers_sqs_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.triggersSqsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InferenceDeploymentContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InferenceDeploymentContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownPeriod = this._cooldownPeriod;
    }
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._scaleMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMax = this._scaleMax;
    }
    if (this._scaleMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMin = this._scaleMin;
    }
    if (this._triggersCpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersCpuThreshold = this._triggersCpuThreshold;
    }
    if (this._triggersGpuMemoryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersGpuMemoryThreshold = this._triggersGpuMemoryThreshold;
    }
    if (this._triggersGpuUtilizationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersGpuUtilizationThreshold = this._triggersGpuUtilizationThreshold;
    }
    if (this._triggersHttpRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersHttpRate = this._triggersHttpRate;
    }
    if (this._triggersHttpWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersHttpWindow = this._triggersHttpWindow;
    }
    if (this._triggersMemoryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersMemoryThreshold = this._triggersMemoryThreshold;
    }
    if (this._triggersSqsActivationQueueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersSqsActivationQueueLength = this._triggersSqsActivationQueueLength;
    }
    if (this._triggersSqsAwsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersSqsAwsEndpoint = this._triggersSqsAwsEndpoint;
    }
    if (this._triggersSqsAwsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersSqsAwsRegion = this._triggersSqsAwsRegion;
    }
    if (this._triggersSqsQueueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersSqsQueueLength = this._triggersSqsQueueLength;
    }
    if (this._triggersSqsQueueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersSqsQueueUrl = this._triggersSqsQueueUrl;
    }
    if (this._triggersSqsScaleOnDelayed !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersSqsScaleOnDelayed = this._triggersSqsScaleOnDelayed;
    }
    if (this._triggersSqsScaleOnFlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersSqsScaleOnFlight = this._triggersSqsScaleOnFlight;
    }
    if (this._triggersSqsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggersSqsSecretName = this._triggersSqsSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceDeploymentContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cooldownPeriod = undefined;
      this._pollingInterval = undefined;
      this._regionId = undefined;
      this._scaleMax = undefined;
      this._scaleMin = undefined;
      this._triggersCpuThreshold = undefined;
      this._triggersGpuMemoryThreshold = undefined;
      this._triggersGpuUtilizationThreshold = undefined;
      this._triggersHttpRate = undefined;
      this._triggersHttpWindow = undefined;
      this._triggersMemoryThreshold = undefined;
      this._triggersSqsActivationQueueLength = undefined;
      this._triggersSqsAwsEndpoint = undefined;
      this._triggersSqsAwsRegion = undefined;
      this._triggersSqsQueueLength = undefined;
      this._triggersSqsQueueUrl = undefined;
      this._triggersSqsScaleOnDelayed = undefined;
      this._triggersSqsScaleOnFlight = undefined;
      this._triggersSqsSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cooldownPeriod = value.cooldownPeriod;
      this._pollingInterval = value.pollingInterval;
      this._regionId = value.regionId;
      this._scaleMax = value.scaleMax;
      this._scaleMin = value.scaleMin;
      this._triggersCpuThreshold = value.triggersCpuThreshold;
      this._triggersGpuMemoryThreshold = value.triggersGpuMemoryThreshold;
      this._triggersGpuUtilizationThreshold = value.triggersGpuUtilizationThreshold;
      this._triggersHttpRate = value.triggersHttpRate;
      this._triggersHttpWindow = value.triggersHttpWindow;
      this._triggersMemoryThreshold = value.triggersMemoryThreshold;
      this._triggersSqsActivationQueueLength = value.triggersSqsActivationQueueLength;
      this._triggersSqsAwsEndpoint = value.triggersSqsAwsEndpoint;
      this._triggersSqsAwsRegion = value.triggersSqsAwsRegion;
      this._triggersSqsQueueLength = value.triggersSqsQueueLength;
      this._triggersSqsQueueUrl = value.triggersSqsQueueUrl;
      this._triggersSqsScaleOnDelayed = value.triggersSqsScaleOnDelayed;
      this._triggersSqsScaleOnFlight = value.triggersSqsScaleOnFlight;
      this._triggersSqsSecretName = value.triggersSqsSecretName;
    }
  }

  // cooldown_period - computed: false, optional: false, required: true
  private _cooldownPeriod?: number; 
  public get cooldownPeriod() {
    return this.getNumberAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: number) {
    this._cooldownPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod;
  }

  // polling_interval - computed: true, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // ready_containers - computed: true, optional: false, required: false
  public get readyContainers() {
    return this.getNumberAttribute('ready_containers');
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // scale_max - computed: false, optional: false, required: true
  private _scaleMax?: number; 
  public get scaleMax() {
    return this.getNumberAttribute('scale_max');
  }
  public set scaleMax(value: number) {
    this._scaleMax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMaxInput() {
    return this._scaleMax;
  }

  // scale_min - computed: false, optional: false, required: true
  private _scaleMin?: number; 
  public get scaleMin() {
    return this.getNumberAttribute('scale_min');
  }
  public set scaleMin(value: number) {
    this._scaleMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMinInput() {
    return this._scaleMin;
  }

  // total_containers - computed: true, optional: false, required: false
  public get totalContainers() {
    return this.getNumberAttribute('total_containers');
  }

  // triggers_cpu_threshold - computed: false, optional: true, required: false
  private _triggersCpuThreshold?: number; 
  public get triggersCpuThreshold() {
    return this.getNumberAttribute('triggers_cpu_threshold');
  }
  public set triggersCpuThreshold(value: number) {
    this._triggersCpuThreshold = value;
  }
  public resetTriggersCpuThreshold() {
    this._triggersCpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersCpuThresholdInput() {
    return this._triggersCpuThreshold;
  }

  // triggers_gpu_memory_threshold - computed: false, optional: true, required: false
  private _triggersGpuMemoryThreshold?: number; 
  public get triggersGpuMemoryThreshold() {
    return this.getNumberAttribute('triggers_gpu_memory_threshold');
  }
  public set triggersGpuMemoryThreshold(value: number) {
    this._triggersGpuMemoryThreshold = value;
  }
  public resetTriggersGpuMemoryThreshold() {
    this._triggersGpuMemoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersGpuMemoryThresholdInput() {
    return this._triggersGpuMemoryThreshold;
  }

  // triggers_gpu_utilization_threshold - computed: false, optional: true, required: false
  private _triggersGpuUtilizationThreshold?: number; 
  public get triggersGpuUtilizationThreshold() {
    return this.getNumberAttribute('triggers_gpu_utilization_threshold');
  }
  public set triggersGpuUtilizationThreshold(value: number) {
    this._triggersGpuUtilizationThreshold = value;
  }
  public resetTriggersGpuUtilizationThreshold() {
    this._triggersGpuUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersGpuUtilizationThresholdInput() {
    return this._triggersGpuUtilizationThreshold;
  }

  // triggers_http_rate - computed: false, optional: true, required: false
  private _triggersHttpRate?: number; 
  public get triggersHttpRate() {
    return this.getNumberAttribute('triggers_http_rate');
  }
  public set triggersHttpRate(value: number) {
    this._triggersHttpRate = value;
  }
  public resetTriggersHttpRate() {
    this._triggersHttpRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersHttpRateInput() {
    return this._triggersHttpRate;
  }

  // triggers_http_window - computed: false, optional: true, required: false
  private _triggersHttpWindow?: number; 
  public get triggersHttpWindow() {
    return this.getNumberAttribute('triggers_http_window');
  }
  public set triggersHttpWindow(value: number) {
    this._triggersHttpWindow = value;
  }
  public resetTriggersHttpWindow() {
    this._triggersHttpWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersHttpWindowInput() {
    return this._triggersHttpWindow;
  }

  // triggers_memory_threshold - computed: false, optional: true, required: false
  private _triggersMemoryThreshold?: number; 
  public get triggersMemoryThreshold() {
    return this.getNumberAttribute('triggers_memory_threshold');
  }
  public set triggersMemoryThreshold(value: number) {
    this._triggersMemoryThreshold = value;
  }
  public resetTriggersMemoryThreshold() {
    this._triggersMemoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersMemoryThresholdInput() {
    return this._triggersMemoryThreshold;
  }

  // triggers_sqs_activation_queue_length - computed: false, optional: true, required: false
  private _triggersSqsActivationQueueLength?: number; 
  public get triggersSqsActivationQueueLength() {
    return this.getNumberAttribute('triggers_sqs_activation_queue_length');
  }
  public set triggersSqsActivationQueueLength(value: number) {
    this._triggersSqsActivationQueueLength = value;
  }
  public resetTriggersSqsActivationQueueLength() {
    this._triggersSqsActivationQueueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersSqsActivationQueueLengthInput() {
    return this._triggersSqsActivationQueueLength;
  }

  // triggers_sqs_aws_endpoint - computed: false, optional: true, required: false
  private _triggersSqsAwsEndpoint?: string; 
  public get triggersSqsAwsEndpoint() {
    return this.getStringAttribute('triggers_sqs_aws_endpoint');
  }
  public set triggersSqsAwsEndpoint(value: string) {
    this._triggersSqsAwsEndpoint = value;
  }
  public resetTriggersSqsAwsEndpoint() {
    this._triggersSqsAwsEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersSqsAwsEndpointInput() {
    return this._triggersSqsAwsEndpoint;
  }

  // triggers_sqs_aws_region - computed: false, optional: true, required: false
  private _triggersSqsAwsRegion?: string; 
  public get triggersSqsAwsRegion() {
    return this.getStringAttribute('triggers_sqs_aws_region');
  }
  public set triggersSqsAwsRegion(value: string) {
    this._triggersSqsAwsRegion = value;
  }
  public resetTriggersSqsAwsRegion() {
    this._triggersSqsAwsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersSqsAwsRegionInput() {
    return this._triggersSqsAwsRegion;
  }

  // triggers_sqs_queue_length - computed: false, optional: true, required: false
  private _triggersSqsQueueLength?: number; 
  public get triggersSqsQueueLength() {
    return this.getNumberAttribute('triggers_sqs_queue_length');
  }
  public set triggersSqsQueueLength(value: number) {
    this._triggersSqsQueueLength = value;
  }
  public resetTriggersSqsQueueLength() {
    this._triggersSqsQueueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersSqsQueueLengthInput() {
    return this._triggersSqsQueueLength;
  }

  // triggers_sqs_queue_url - computed: false, optional: true, required: false
  private _triggersSqsQueueUrl?: string; 
  public get triggersSqsQueueUrl() {
    return this.getStringAttribute('triggers_sqs_queue_url');
  }
  public set triggersSqsQueueUrl(value: string) {
    this._triggersSqsQueueUrl = value;
  }
  public resetTriggersSqsQueueUrl() {
    this._triggersSqsQueueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersSqsQueueUrlInput() {
    return this._triggersSqsQueueUrl;
  }

  // triggers_sqs_scale_on_delayed - computed: false, optional: true, required: false
  private _triggersSqsScaleOnDelayed?: boolean | cdktf.IResolvable; 
  public get triggersSqsScaleOnDelayed() {
    return this.getBooleanAttribute('triggers_sqs_scale_on_delayed');
  }
  public set triggersSqsScaleOnDelayed(value: boolean | cdktf.IResolvable) {
    this._triggersSqsScaleOnDelayed = value;
  }
  public resetTriggersSqsScaleOnDelayed() {
    this._triggersSqsScaleOnDelayed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersSqsScaleOnDelayedInput() {
    return this._triggersSqsScaleOnDelayed;
  }

  // triggers_sqs_scale_on_flight - computed: false, optional: true, required: false
  private _triggersSqsScaleOnFlight?: boolean | cdktf.IResolvable; 
  public get triggersSqsScaleOnFlight() {
    return this.getBooleanAttribute('triggers_sqs_scale_on_flight');
  }
  public set triggersSqsScaleOnFlight(value: boolean | cdktf.IResolvable) {
    this._triggersSqsScaleOnFlight = value;
  }
  public resetTriggersSqsScaleOnFlight() {
    this._triggersSqsScaleOnFlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersSqsScaleOnFlightInput() {
    return this._triggersSqsScaleOnFlight;
  }

  // triggers_sqs_secret_name - computed: false, optional: true, required: false
  private _triggersSqsSecretName?: string; 
  public get triggersSqsSecretName() {
    return this.getStringAttribute('triggers_sqs_secret_name');
  }
  public set triggersSqsSecretName(value: string) {
    this._triggersSqsSecretName = value;
  }
  public resetTriggersSqsSecretName() {
    this._triggersSqsSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersSqsSecretNameInput() {
    return this._triggersSqsSecretName;
  }
}

export class InferenceDeploymentContainersList extends cdktf.ComplexList {
  public internalValue? : InferenceDeploymentContainers[] | cdktf.IResolvable

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
  public get(index: number): InferenceDeploymentContainersOutputReference {
    return new InferenceDeploymentContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InferenceDeploymentLivenessProbe {
  /**
  * Enable or disable probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#enabled InferenceDeployment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Command to execute in the container to determine the health
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#exec_command InferenceDeployment#exec_command}
  */
  readonly execCommand?: string;
  /**
  * Number of failed probes before the container is considered unhealthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#failure_threshold InferenceDeployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * HTTP headers to use when sending a HTTP GET request, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_headers InferenceDeployment#http_get_headers}
  */
  readonly httpGetHeaders?: { [key: string]: string };
  /**
  * Host name to connect to, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_host InferenceDeployment#http_get_host}
  */
  readonly httpGetHost?: string;
  /**
  * Path to access on the HTTP server, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_path InferenceDeployment#http_get_path}
  */
  readonly httpGetPath?: string;
  /**
  * Number of the port to access on the HTTP server, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_port InferenceDeployment#http_get_port}
  */
  readonly httpGetPort?: number;
  /**
  * Scheme to use for connecting to the host, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_schema InferenceDeployment#http_get_schema}
  */
  readonly httpGetSchema?: string;
  /**
  * Number of seconds after the container has started before liveness probes are initiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#initial_delay_seconds InferenceDeployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#period_seconds InferenceDeployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#success_threshold InferenceDeployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Port to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#tcp_socket_port InferenceDeployment#tcp_socket_port}
  */
  readonly tcpSocketPort?: number;
  /**
  * Number of seconds after which the probe times out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#timeout_seconds InferenceDeployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function inferenceDeploymentLivenessProbeToTerraform(struct?: InferenceDeploymentLivenessProbeOutputReference | InferenceDeploymentLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exec_command: cdktf.stringToTerraform(struct!.execCommand),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpGetHeaders),
    http_get_host: cdktf.stringToTerraform(struct!.httpGetHost),
    http_get_path: cdktf.stringToTerraform(struct!.httpGetPath),
    http_get_port: cdktf.numberToTerraform(struct!.httpGetPort),
    http_get_schema: cdktf.stringToTerraform(struct!.httpGetSchema),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket_port: cdktf.numberToTerraform(struct!.tcpSocketPort),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function inferenceDeploymentLivenessProbeToHclTerraform(struct?: InferenceDeploymentLivenessProbeOutputReference | InferenceDeploymentLivenessProbe): any {
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
    exec_command: {
      value: cdktf.stringToHclTerraform(struct!.execCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpGetHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_get_host: {
      value: cdktf.stringToHclTerraform(struct!.httpGetHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get_path: {
      value: cdktf.stringToHclTerraform(struct!.httpGetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get_port: {
      value: cdktf.numberToHclTerraform(struct!.httpGetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_schema: {
      value: cdktf.stringToHclTerraform(struct!.httpGetSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpSocketPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InferenceDeploymentLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InferenceDeploymentLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._execCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.execCommand = this._execCommand;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGetHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetHeaders = this._httpGetHeaders;
    }
    if (this._httpGetHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetHost = this._httpGetHost;
    }
    if (this._httpGetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPath = this._httpGetPath;
    }
    if (this._httpGetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPort = this._httpGetPort;
    }
    if (this._httpGetSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetSchema = this._httpGetSchema;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocketPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocketPort = this._tcpSocketPort;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceDeploymentLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._execCommand = undefined;
      this._failureThreshold = undefined;
      this._httpGetHeaders = undefined;
      this._httpGetHost = undefined;
      this._httpGetPath = undefined;
      this._httpGetPort = undefined;
      this._httpGetSchema = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocketPort = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._execCommand = value.execCommand;
      this._failureThreshold = value.failureThreshold;
      this._httpGetHeaders = value.httpGetHeaders;
      this._httpGetHost = value.httpGetHost;
      this._httpGetPath = value.httpGetPath;
      this._httpGetPort = value.httpGetPort;
      this._httpGetSchema = value.httpGetSchema;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocketPort = value.tcpSocketPort;
      this._timeoutSeconds = value.timeoutSeconds;
    }
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

  // exec_command - computed: false, optional: true, required: false
  private _execCommand?: string; 
  public get execCommand() {
    return this.getStringAttribute('exec_command');
  }
  public set execCommand(value: string) {
    this._execCommand = value;
  }
  public resetExecCommand() {
    this._execCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execCommandInput() {
    return this._execCommand;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get_headers - computed: true, optional: true, required: false
  private _httpGetHeaders?: { [key: string]: string }; 
  public get httpGetHeaders() {
    return this.getStringMapAttribute('http_get_headers');
  }
  public set httpGetHeaders(value: { [key: string]: string }) {
    this._httpGetHeaders = value;
  }
  public resetHttpGetHeaders() {
    this._httpGetHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetHeadersInput() {
    return this._httpGetHeaders;
  }

  // http_get_host - computed: false, optional: true, required: false
  private _httpGetHost?: string; 
  public get httpGetHost() {
    return this.getStringAttribute('http_get_host');
  }
  public set httpGetHost(value: string) {
    this._httpGetHost = value;
  }
  public resetHttpGetHost() {
    this._httpGetHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetHostInput() {
    return this._httpGetHost;
  }

  // http_get_path - computed: false, optional: true, required: false
  private _httpGetPath?: string; 
  public get httpGetPath() {
    return this.getStringAttribute('http_get_path');
  }
  public set httpGetPath(value: string) {
    this._httpGetPath = value;
  }
  public resetHttpGetPath() {
    this._httpGetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPathInput() {
    return this._httpGetPath;
  }

  // http_get_port - computed: false, optional: true, required: false
  private _httpGetPort?: number; 
  public get httpGetPort() {
    return this.getNumberAttribute('http_get_port');
  }
  public set httpGetPort(value: number) {
    this._httpGetPort = value;
  }
  public resetHttpGetPort() {
    this._httpGetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPortInput() {
    return this._httpGetPort;
  }

  // http_get_schema - computed: true, optional: true, required: false
  private _httpGetSchema?: string; 
  public get httpGetSchema() {
    return this.getStringAttribute('http_get_schema');
  }
  public set httpGetSchema(value: string) {
    this._httpGetSchema = value;
  }
  public resetHttpGetSchema() {
    this._httpGetSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetSchemaInput() {
    return this._httpGetSchema;
  }

  // initial_delay_seconds - computed: true, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: true, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket_port - computed: false, optional: true, required: false
  private _tcpSocketPort?: number; 
  public get tcpSocketPort() {
    return this.getNumberAttribute('tcp_socket_port');
  }
  public set tcpSocketPort(value: number) {
    this._tcpSocketPort = value;
  }
  public resetTcpSocketPort() {
    this._tcpSocketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketPortInput() {
    return this._tcpSocketPort;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface InferenceDeploymentLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#destination_region_id InferenceDeployment#destination_region_id}
  */
  readonly destinationRegionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#enabled InferenceDeployment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#retention_policy_period InferenceDeployment#retention_policy_period}
  */
  readonly retentionPolicyPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#topic_name InferenceDeployment#topic_name}
  */
  readonly topicName?: string;
}

export function inferenceDeploymentLoggingToTerraform(struct?: InferenceDeploymentLoggingOutputReference | InferenceDeploymentLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_region_id: cdktf.numberToTerraform(struct!.destinationRegionId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retention_policy_period: cdktf.numberToTerraform(struct!.retentionPolicyPeriod),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function inferenceDeploymentLoggingToHclTerraform(struct?: InferenceDeploymentLoggingOutputReference | InferenceDeploymentLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_region_id: {
      value: cdktf.numberToHclTerraform(struct!.destinationRegionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_period: {
      value: cdktf.numberToHclTerraform(struct!.retentionPolicyPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InferenceDeploymentLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InferenceDeploymentLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationRegionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationRegionId = this._destinationRegionId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionPolicyPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyPeriod = this._retentionPolicyPeriod;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceDeploymentLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationRegionId = undefined;
      this._enabled = undefined;
      this._retentionPolicyPeriod = undefined;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationRegionId = value.destinationRegionId;
      this._enabled = value.enabled;
      this._retentionPolicyPeriod = value.retentionPolicyPeriod;
      this._topicName = value.topicName;
    }
  }

  // destination_region_id - computed: false, optional: true, required: false
  private _destinationRegionId?: number; 
  public get destinationRegionId() {
    return this.getNumberAttribute('destination_region_id');
  }
  public set destinationRegionId(value: number) {
    this._destinationRegionId = value;
  }
  public resetDestinationRegionId() {
    this._destinationRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionIdInput() {
    return this._destinationRegionId;
  }

  // enabled - computed: false, optional: true, required: false
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

  // retention_policy_period - computed: false, optional: true, required: false
  private _retentionPolicyPeriod?: number; 
  public get retentionPolicyPeriod() {
    return this.getNumberAttribute('retention_policy_period');
  }
  public set retentionPolicyPeriod(value: number) {
    this._retentionPolicyPeriod = value;
  }
  public resetRetentionPolicyPeriod() {
    this._retentionPolicyPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyPeriodInput() {
    return this._retentionPolicyPeriod;
  }

  // topic_name - computed: false, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}
export interface InferenceDeploymentReadinessProbe {
  /**
  * Enable or disable probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#enabled InferenceDeployment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Command to execute in the container to determine the health
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#exec_command InferenceDeployment#exec_command}
  */
  readonly execCommand?: string;
  /**
  * Number of failed probes before the container is considered unhealthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#failure_threshold InferenceDeployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * HTTP headers to use when sending a HTTP GET request, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_headers InferenceDeployment#http_get_headers}
  */
  readonly httpGetHeaders?: { [key: string]: string };
  /**
  * Host name to connect to, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_host InferenceDeployment#http_get_host}
  */
  readonly httpGetHost?: string;
  /**
  * Path to access on the HTTP server, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_path InferenceDeployment#http_get_path}
  */
  readonly httpGetPath?: string;
  /**
  * Number of the port to access on the HTTP server, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_port InferenceDeployment#http_get_port}
  */
  readonly httpGetPort?: number;
  /**
  * Scheme to use for connecting to the host, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_schema InferenceDeployment#http_get_schema}
  */
  readonly httpGetSchema?: string;
  /**
  * Number of seconds after the container has started before liveness probes are initiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#initial_delay_seconds InferenceDeployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#period_seconds InferenceDeployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#success_threshold InferenceDeployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Port to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#tcp_socket_port InferenceDeployment#tcp_socket_port}
  */
  readonly tcpSocketPort?: number;
  /**
  * Number of seconds after which the probe times out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#timeout_seconds InferenceDeployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function inferenceDeploymentReadinessProbeToTerraform(struct?: InferenceDeploymentReadinessProbeOutputReference | InferenceDeploymentReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exec_command: cdktf.stringToTerraform(struct!.execCommand),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpGetHeaders),
    http_get_host: cdktf.stringToTerraform(struct!.httpGetHost),
    http_get_path: cdktf.stringToTerraform(struct!.httpGetPath),
    http_get_port: cdktf.numberToTerraform(struct!.httpGetPort),
    http_get_schema: cdktf.stringToTerraform(struct!.httpGetSchema),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket_port: cdktf.numberToTerraform(struct!.tcpSocketPort),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function inferenceDeploymentReadinessProbeToHclTerraform(struct?: InferenceDeploymentReadinessProbeOutputReference | InferenceDeploymentReadinessProbe): any {
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
    exec_command: {
      value: cdktf.stringToHclTerraform(struct!.execCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpGetHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_get_host: {
      value: cdktf.stringToHclTerraform(struct!.httpGetHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get_path: {
      value: cdktf.stringToHclTerraform(struct!.httpGetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get_port: {
      value: cdktf.numberToHclTerraform(struct!.httpGetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_schema: {
      value: cdktf.stringToHclTerraform(struct!.httpGetSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpSocketPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InferenceDeploymentReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InferenceDeploymentReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._execCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.execCommand = this._execCommand;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGetHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetHeaders = this._httpGetHeaders;
    }
    if (this._httpGetHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetHost = this._httpGetHost;
    }
    if (this._httpGetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPath = this._httpGetPath;
    }
    if (this._httpGetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPort = this._httpGetPort;
    }
    if (this._httpGetSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetSchema = this._httpGetSchema;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocketPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocketPort = this._tcpSocketPort;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceDeploymentReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._execCommand = undefined;
      this._failureThreshold = undefined;
      this._httpGetHeaders = undefined;
      this._httpGetHost = undefined;
      this._httpGetPath = undefined;
      this._httpGetPort = undefined;
      this._httpGetSchema = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocketPort = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._execCommand = value.execCommand;
      this._failureThreshold = value.failureThreshold;
      this._httpGetHeaders = value.httpGetHeaders;
      this._httpGetHost = value.httpGetHost;
      this._httpGetPath = value.httpGetPath;
      this._httpGetPort = value.httpGetPort;
      this._httpGetSchema = value.httpGetSchema;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocketPort = value.tcpSocketPort;
      this._timeoutSeconds = value.timeoutSeconds;
    }
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

  // exec_command - computed: false, optional: true, required: false
  private _execCommand?: string; 
  public get execCommand() {
    return this.getStringAttribute('exec_command');
  }
  public set execCommand(value: string) {
    this._execCommand = value;
  }
  public resetExecCommand() {
    this._execCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execCommandInput() {
    return this._execCommand;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get_headers - computed: true, optional: true, required: false
  private _httpGetHeaders?: { [key: string]: string }; 
  public get httpGetHeaders() {
    return this.getStringMapAttribute('http_get_headers');
  }
  public set httpGetHeaders(value: { [key: string]: string }) {
    this._httpGetHeaders = value;
  }
  public resetHttpGetHeaders() {
    this._httpGetHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetHeadersInput() {
    return this._httpGetHeaders;
  }

  // http_get_host - computed: false, optional: true, required: false
  private _httpGetHost?: string; 
  public get httpGetHost() {
    return this.getStringAttribute('http_get_host');
  }
  public set httpGetHost(value: string) {
    this._httpGetHost = value;
  }
  public resetHttpGetHost() {
    this._httpGetHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetHostInput() {
    return this._httpGetHost;
  }

  // http_get_path - computed: false, optional: true, required: false
  private _httpGetPath?: string; 
  public get httpGetPath() {
    return this.getStringAttribute('http_get_path');
  }
  public set httpGetPath(value: string) {
    this._httpGetPath = value;
  }
  public resetHttpGetPath() {
    this._httpGetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPathInput() {
    return this._httpGetPath;
  }

  // http_get_port - computed: false, optional: true, required: false
  private _httpGetPort?: number; 
  public get httpGetPort() {
    return this.getNumberAttribute('http_get_port');
  }
  public set httpGetPort(value: number) {
    this._httpGetPort = value;
  }
  public resetHttpGetPort() {
    this._httpGetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPortInput() {
    return this._httpGetPort;
  }

  // http_get_schema - computed: true, optional: true, required: false
  private _httpGetSchema?: string; 
  public get httpGetSchema() {
    return this.getStringAttribute('http_get_schema');
  }
  public set httpGetSchema(value: string) {
    this._httpGetSchema = value;
  }
  public resetHttpGetSchema() {
    this._httpGetSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetSchemaInput() {
    return this._httpGetSchema;
  }

  // initial_delay_seconds - computed: true, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: true, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket_port - computed: false, optional: true, required: false
  private _tcpSocketPort?: number; 
  public get tcpSocketPort() {
    return this.getNumberAttribute('tcp_socket_port');
  }
  public set tcpSocketPort(value: number) {
    this._tcpSocketPort = value;
  }
  public resetTcpSocketPort() {
    this._tcpSocketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketPortInput() {
    return this._tcpSocketPort;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface InferenceDeploymentStartupProbe {
  /**
  * Enable or disable probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#enabled InferenceDeployment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Command to execute in the container to determine the health
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#exec_command InferenceDeployment#exec_command}
  */
  readonly execCommand?: string;
  /**
  * Number of failed probes before the container is considered unhealthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#failure_threshold InferenceDeployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * HTTP headers to use when sending a HTTP GET request, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_headers InferenceDeployment#http_get_headers}
  */
  readonly httpGetHeaders?: { [key: string]: string };
  /**
  * Host name to connect to, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_host InferenceDeployment#http_get_host}
  */
  readonly httpGetHost?: string;
  /**
  * Path to access on the HTTP server, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_path InferenceDeployment#http_get_path}
  */
  readonly httpGetPath?: string;
  /**
  * Number of the port to access on the HTTP server, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_port InferenceDeployment#http_get_port}
  */
  readonly httpGetPort?: number;
  /**
  * Scheme to use for connecting to the host, valid only for HTTP probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#http_get_schema InferenceDeployment#http_get_schema}
  */
  readonly httpGetSchema?: string;
  /**
  * Number of seconds after the container has started before liveness probes are initiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#initial_delay_seconds InferenceDeployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#period_seconds InferenceDeployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#success_threshold InferenceDeployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Port to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#tcp_socket_port InferenceDeployment#tcp_socket_port}
  */
  readonly tcpSocketPort?: number;
  /**
  * Number of seconds after which the probe times out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#timeout_seconds InferenceDeployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function inferenceDeploymentStartupProbeToTerraform(struct?: InferenceDeploymentStartupProbeOutputReference | InferenceDeploymentStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exec_command: cdktf.stringToTerraform(struct!.execCommand),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpGetHeaders),
    http_get_host: cdktf.stringToTerraform(struct!.httpGetHost),
    http_get_path: cdktf.stringToTerraform(struct!.httpGetPath),
    http_get_port: cdktf.numberToTerraform(struct!.httpGetPort),
    http_get_schema: cdktf.stringToTerraform(struct!.httpGetSchema),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket_port: cdktf.numberToTerraform(struct!.tcpSocketPort),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function inferenceDeploymentStartupProbeToHclTerraform(struct?: InferenceDeploymentStartupProbeOutputReference | InferenceDeploymentStartupProbe): any {
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
    exec_command: {
      value: cdktf.stringToHclTerraform(struct!.execCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpGetHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    http_get_host: {
      value: cdktf.stringToHclTerraform(struct!.httpGetHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get_path: {
      value: cdktf.stringToHclTerraform(struct!.httpGetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get_port: {
      value: cdktf.numberToHclTerraform(struct!.httpGetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_schema: {
      value: cdktf.stringToHclTerraform(struct!.httpGetSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpSocketPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InferenceDeploymentStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InferenceDeploymentStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._execCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.execCommand = this._execCommand;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGetHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetHeaders = this._httpGetHeaders;
    }
    if (this._httpGetHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetHost = this._httpGetHost;
    }
    if (this._httpGetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPath = this._httpGetPath;
    }
    if (this._httpGetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetPort = this._httpGetPort;
    }
    if (this._httpGetSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetSchema = this._httpGetSchema;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocketPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocketPort = this._tcpSocketPort;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InferenceDeploymentStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._execCommand = undefined;
      this._failureThreshold = undefined;
      this._httpGetHeaders = undefined;
      this._httpGetHost = undefined;
      this._httpGetPath = undefined;
      this._httpGetPort = undefined;
      this._httpGetSchema = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocketPort = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._execCommand = value.execCommand;
      this._failureThreshold = value.failureThreshold;
      this._httpGetHeaders = value.httpGetHeaders;
      this._httpGetHost = value.httpGetHost;
      this._httpGetPath = value.httpGetPath;
      this._httpGetPort = value.httpGetPort;
      this._httpGetSchema = value.httpGetSchema;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocketPort = value.tcpSocketPort;
      this._timeoutSeconds = value.timeoutSeconds;
    }
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

  // exec_command - computed: false, optional: true, required: false
  private _execCommand?: string; 
  public get execCommand() {
    return this.getStringAttribute('exec_command');
  }
  public set execCommand(value: string) {
    this._execCommand = value;
  }
  public resetExecCommand() {
    this._execCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execCommandInput() {
    return this._execCommand;
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get_headers - computed: true, optional: true, required: false
  private _httpGetHeaders?: { [key: string]: string }; 
  public get httpGetHeaders() {
    return this.getStringMapAttribute('http_get_headers');
  }
  public set httpGetHeaders(value: { [key: string]: string }) {
    this._httpGetHeaders = value;
  }
  public resetHttpGetHeaders() {
    this._httpGetHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetHeadersInput() {
    return this._httpGetHeaders;
  }

  // http_get_host - computed: false, optional: true, required: false
  private _httpGetHost?: string; 
  public get httpGetHost() {
    return this.getStringAttribute('http_get_host');
  }
  public set httpGetHost(value: string) {
    this._httpGetHost = value;
  }
  public resetHttpGetHost() {
    this._httpGetHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetHostInput() {
    return this._httpGetHost;
  }

  // http_get_path - computed: false, optional: true, required: false
  private _httpGetPath?: string; 
  public get httpGetPath() {
    return this.getStringAttribute('http_get_path');
  }
  public set httpGetPath(value: string) {
    this._httpGetPath = value;
  }
  public resetHttpGetPath() {
    this._httpGetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPathInput() {
    return this._httpGetPath;
  }

  // http_get_port - computed: false, optional: true, required: false
  private _httpGetPort?: number; 
  public get httpGetPort() {
    return this.getNumberAttribute('http_get_port');
  }
  public set httpGetPort(value: number) {
    this._httpGetPort = value;
  }
  public resetHttpGetPort() {
    this._httpGetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetPortInput() {
    return this._httpGetPort;
  }

  // http_get_schema - computed: true, optional: true, required: false
  private _httpGetSchema?: string; 
  public get httpGetSchema() {
    return this.getStringAttribute('http_get_schema');
  }
  public set httpGetSchema(value: string) {
    this._httpGetSchema = value;
  }
  public resetHttpGetSchema() {
    this._httpGetSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetSchemaInput() {
    return this._httpGetSchema;
  }

  // initial_delay_seconds - computed: true, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: true, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket_port - computed: false, optional: true, required: false
  private _tcpSocketPort?: number; 
  public get tcpSocketPort() {
    return this.getNumberAttribute('tcp_socket_port');
  }
  public set tcpSocketPort(value: number) {
    this._tcpSocketPort = value;
  }
  public resetTcpSocketPort() {
    this._tcpSocketPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketPortInput() {
    return this._tcpSocketPort;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment gcore_inference_deployment}
*/
export class InferenceDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_inference_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InferenceDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InferenceDeployment to import
  * @param importFromId The id of the existing InferenceDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InferenceDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_inference_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/inference_deployment gcore_inference_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InferenceDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: InferenceDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_inference_deployment',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.4',
        providerVersionConstraint: '0.31.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authEnabled = config.authEnabled;
    this._command = config.command;
    this._credentialsName = config.credentialsName;
    this._description = config.description;
    this._envs = config.envs;
    this._flavorName = config.flavorName;
    this._id = config.id;
    this._image = config.image;
    this._listeningPort = config.listeningPort;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._timeout = config.timeout;
    this._containers.internalValue = config.containers;
    this._livenessProbe.internalValue = config.livenessProbe;
    this._logging.internalValue = config.logging;
    this._readinessProbe.internalValue = config.readinessProbe;
    this._startupProbe.internalValue = config.startupProbe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // auth_enabled - computed: false, optional: true, required: false
  private _authEnabled?: boolean | cdktf.IResolvable; 
  public get authEnabled() {
    return this.getBooleanAttribute('auth_enabled');
  }
  public set authEnabled(value: boolean | cdktf.IResolvable) {
    this._authEnabled = value;
  }
  public resetAuthEnabled() {
    this._authEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEnabledInput() {
    return this._authEnabled;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credentials_name - computed: false, optional: true, required: false
  private _credentialsName?: string; 
  public get credentialsName() {
    return this.getStringAttribute('credentials_name');
  }
  public set credentialsName(value: string) {
    this._credentialsName = value;
  }
  public resetCredentialsName() {
    this._credentialsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsNameInput() {
    return this._credentialsName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: { [key: string]: string }; 
  public get envs() {
    return this.getStringMapAttribute('envs');
  }
  public set envs(value: { [key: string]: string }) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
  }

  // flavor_name - computed: false, optional: false, required: true
  private _flavorName?: string; 
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }
  public set flavorName(value: string) {
    this._flavorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorNameInput() {
    return this._flavorName;
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

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // listening_port - computed: false, optional: false, required: true
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
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

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // containers - computed: false, optional: false, required: true
  private _containers = new InferenceDeploymentContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: InferenceDeploymentContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new InferenceDeploymentLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: InferenceDeploymentLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new InferenceDeploymentLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: InferenceDeploymentLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new InferenceDeploymentReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: InferenceDeploymentReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new InferenceDeploymentStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: InferenceDeploymentStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_enabled: cdktf.booleanToTerraform(this._authEnabled),
      command: cdktf.stringToTerraform(this._command),
      credentials_name: cdktf.stringToTerraform(this._credentialsName),
      description: cdktf.stringToTerraform(this._description),
      envs: cdktf.hashMapper(cdktf.stringToTerraform)(this._envs),
      flavor_name: cdktf.stringToTerraform(this._flavorName),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      listening_port: cdktf.numberToTerraform(this._listeningPort),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      timeout: cdktf.numberToTerraform(this._timeout),
      containers: cdktf.listMapper(inferenceDeploymentContainersToTerraform, true)(this._containers.internalValue),
      liveness_probe: inferenceDeploymentLivenessProbeToTerraform(this._livenessProbe.internalValue),
      logging: inferenceDeploymentLoggingToTerraform(this._logging.internalValue),
      readiness_probe: inferenceDeploymentReadinessProbeToTerraform(this._readinessProbe.internalValue),
      startup_probe: inferenceDeploymentStartupProbeToTerraform(this._startupProbe.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._authEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_name: {
        value: cdktf.stringToHclTerraform(this._credentialsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      envs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._envs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      flavor_name: {
        value: cdktf.stringToHclTerraform(this._flavorName),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listening_port: {
        value: cdktf.numberToHclTerraform(this._listeningPort),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      containers: {
        value: cdktf.listMapperHcl(inferenceDeploymentContainersToHclTerraform, true)(this._containers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InferenceDeploymentContainersList",
      },
      liveness_probe: {
        value: inferenceDeploymentLivenessProbeToHclTerraform(this._livenessProbe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InferenceDeploymentLivenessProbeList",
      },
      logging: {
        value: inferenceDeploymentLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InferenceDeploymentLoggingList",
      },
      readiness_probe: {
        value: inferenceDeploymentReadinessProbeToHclTerraform(this._readinessProbe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InferenceDeploymentReadinessProbeList",
      },
      startup_probe: {
        value: inferenceDeploymentStartupProbeToHclTerraform(this._startupProbe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InferenceDeploymentStartupProbeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
