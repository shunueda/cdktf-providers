// https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deployment cloud provider - required for 'STANDARD' deployments. If changing this value, the deployment will be recreated in the new cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#cloud_provider Deployment#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Deployment cluster identifier - required for 'HYBRID' and 'DEDICATED' deployments. If changing this value, the deployment will be recreated in the new cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#cluster_id Deployment#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Deployment contact emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#contact_emails Deployment#contact_emails}
  */
  readonly contactEmails: string[];
  /**
  * Deployment default task pod CPU - required for 'STANDARD' and 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#default_task_pod_cpu Deployment#default_task_pod_cpu}
  */
  readonly defaultTaskPodCpu?: string;
  /**
  * Deployment default task pod memory - required for 'STANDARD' and 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#default_task_pod_memory Deployment#default_task_pod_memory}
  */
  readonly defaultTaskPodMemory?: string;
  /**
  * Deployment description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#description Deployment#description}
  */
  readonly description: string;
  /**
  * Deployment's desired workload identity. The Terraform provider will use this provided workload identity to create the Deployment. If it is not provided the workload identity will be assigned automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#desired_workload_identity Deployment#desired_workload_identity}
  */
  readonly desiredWorkloadIdentity?: string;
  /**
  * Deployment environment variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#environment_variables Deployment#environment_variables}
  */
  readonly environmentVariables: DeploymentEnvironmentVariables[] | cdktf.IResolvable;
  /**
  * Deployment executor. Valid values: CELERY, KUBERNETES, ASTRO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#executor Deployment#executor}
  */
  readonly executor: string;
  /**
  * Deployment CI/CD enforced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#is_cicd_enforced Deployment#is_cicd_enforced}
  */
  readonly isCicdEnforced: boolean | cdktf.IResolvable;
  /**
  * Whether DAG deploy is enabled - Changing this value may disrupt your deployment. Read more at https://docs.astronomer.io/astro/deploy-dags#enable-or-disable-dag-only-deploys-on-a-deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#is_dag_deploy_enabled Deployment#is_dag_deploy_enabled}
  */
  readonly isDagDeployEnabled: boolean | cdktf.IResolvable;
  /**
  * Deployment development mode - required for 'STANDARD' and 'DEDICATED' deployments. If changing from 'False' to 'True', the deployment will be recreated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#is_development_mode Deployment#is_development_mode}
  */
  readonly isDevelopmentMode?: boolean | cdktf.IResolvable;
  /**
  * Deployment high availability - required for 'STANDARD' and 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#is_high_availability Deployment#is_high_availability}
  */
  readonly isHighAvailability?: boolean | cdktf.IResolvable;
  /**
  * Deployment name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * Deployment's original Astro Runtime version. The Terraform provider will use this provided Astro runtime version to create the Deployment. The Astro runtime version can be updated with your Astro project Dockerfile, but if this value is changed, the Deployment will be recreated with this new Astro runtime version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#original_astro_runtime_version Deployment#original_astro_runtime_version}
  */
  readonly originalAstroRuntimeVersion?: string;
  /**
  * Deployment region - required for 'STANDARD' deployments. If changing this value, the deployment will be recreated in the new region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#region Deployment#region}
  */
  readonly region?: string;
  /**
  * Deployment remote execution configuration - only for 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#remote_execution Deployment#remote_execution}
  */
  readonly remoteExecution?: DeploymentRemoteExecution;
  /**
  * Deployment resource quota CPU - required for 'STANDARD' and 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#resource_quota_cpu Deployment#resource_quota_cpu}
  */
  readonly resourceQuotaCpu?: string;
  /**
  * Deployment resource quota memory - required for 'STANDARD' and 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#resource_quota_memory Deployment#resource_quota_memory}
  */
  readonly resourceQuotaMemory?: string;
  /**
  * Deployment scaling spec - only for 'STANDARD' and 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#scaling_spec Deployment#scaling_spec}
  */
  readonly scalingSpec?: DeploymentScalingSpec;
  /**
  * Deployment scheduler AU - required for 'HYBRID' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#scheduler_au Deployment#scheduler_au}
  */
  readonly schedulerAu?: number;
  /**
  * Deployment scheduler replicas - required for 'HYBRID' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#scheduler_replicas Deployment#scheduler_replicas}
  */
  readonly schedulerReplicas?: number;
  /**
  * Deployment scheduler size - required for 'STANDARD' and 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#scheduler_size Deployment#scheduler_size}
  */
  readonly schedulerSize?: string;
  /**
  * Deployment task pod node pool identifier - required if executor is 'KUBERNETES' and type is 'HYBRID'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#task_pod_node_pool_id Deployment#task_pod_node_pool_id}
  */
  readonly taskPodNodePoolId?: string;
  /**
  * Deployment type - if changing this value, the deployment will be recreated with the new type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#type Deployment#type}
  */
  readonly type: string;
  /**
  * Deployment worker queues - required for deployments with 'CELERY' executor. For 'STANDARD' and 'DEDICATED' deployments, use astro_machine. For 'HYBRID' deployments, use node_pool_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#worker_queues Deployment#worker_queues}
  */
  readonly workerQueues?: DeploymentWorkerQueues[] | cdktf.IResolvable;
  /**
  * Deployment workspace identifier - if changing this value, the deployment will be recreated in the new workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#workspace_id Deployment#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DeploymentCreatedBy {
}

export function deploymentCreatedByToTerraform(struct?: DeploymentCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentCreatedByToHclTerraform(struct?: DeploymentCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeploymentEnvironmentVariables {
  /**
  * Whether Environment variable is a secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#is_secret Deployment#is_secret}
  */
  readonly isSecret: boolean | cdktf.IResolvable;
  /**
  * Environment variable key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#key Deployment#key}
  */
  readonly key: string;
  /**
  * Environment variable value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentEnvironmentVariablesToTerraform(struct?: DeploymentEnvironmentVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_secret: cdktf.booleanToTerraform(struct!.isSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentEnvironmentVariablesToHclTerraform(struct?: DeploymentEnvironmentVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_secret: {
      value: cdktf.booleanToHclTerraform(struct!.isSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DeploymentEnvironmentVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentEnvironmentVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecret = this._isSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentEnvironmentVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSecret = value.isSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_secret - computed: false, optional: false, required: true
  private _isSecret?: boolean | cdktf.IResolvable; 
  public get isSecret() {
    return this.getBooleanAttribute('is_secret');
  }
  public set isSecret(value: boolean | cdktf.IResolvable) {
    this._isSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecretInput() {
    return this._isSecret;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: false, optional: true, required: false
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

export class DeploymentEnvironmentVariablesList extends cdktf.ComplexList {
  public internalValue? : DeploymentEnvironmentVariables[] | cdktf.IResolvable

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
  public get(index: number): DeploymentEnvironmentVariablesOutputReference {
    return new DeploymentEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentRemoteExecution {
  /**
  * The allowed IP address ranges for remote execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#allowed_ip_address_ranges Deployment#allowed_ip_address_ranges}
  */
  readonly allowedIpAddressRanges?: string[];
  /**
  * Whether remote execution is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#enabled Deployment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The bucket for task logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#task_log_bucket Deployment#task_log_bucket}
  */
  readonly taskLogBucket?: string;
  /**
  * The URL pattern for task logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#task_log_url_pattern Deployment#task_log_url_pattern}
  */
  readonly taskLogUrlPattern?: string;
}

export function deploymentRemoteExecutionToTerraform(struct?: DeploymentRemoteExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIpAddressRanges),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    task_log_bucket: cdktf.stringToTerraform(struct!.taskLogBucket),
    task_log_url_pattern: cdktf.stringToTerraform(struct!.taskLogUrlPattern),
  }
}


export function deploymentRemoteExecutionToHclTerraform(struct?: DeploymentRemoteExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ip_address_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIpAddressRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    task_log_bucket: {
      value: cdktf.stringToHclTerraform(struct!.taskLogBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_log_url_pattern: {
      value: cdktf.stringToHclTerraform(struct!.taskLogUrlPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentRemoteExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentRemoteExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpAddressRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpAddressRanges = this._allowedIpAddressRanges;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._taskLogBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskLogBucket = this._taskLogBucket;
    }
    if (this._taskLogUrlPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskLogUrlPattern = this._taskLogUrlPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentRemoteExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIpAddressRanges = undefined;
      this._enabled = undefined;
      this._taskLogBucket = undefined;
      this._taskLogUrlPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIpAddressRanges = value.allowedIpAddressRanges;
      this._enabled = value.enabled;
      this._taskLogBucket = value.taskLogBucket;
      this._taskLogUrlPattern = value.taskLogUrlPattern;
    }
  }

  // allowed_ip_address_ranges - computed: false, optional: true, required: false
  private _allowedIpAddressRanges?: string[]; 
  public get allowedIpAddressRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_address_ranges'));
  }
  public set allowedIpAddressRanges(value: string[]) {
    this._allowedIpAddressRanges = value;
  }
  public resetAllowedIpAddressRanges() {
    this._allowedIpAddressRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpAddressRangesInput() {
    return this._allowedIpAddressRanges;
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

  // remote_api_url - computed: true, optional: false, required: false
  public get remoteApiUrl() {
    return this.getStringAttribute('remote_api_url');
  }

  // task_log_bucket - computed: false, optional: true, required: false
  private _taskLogBucket?: string; 
  public get taskLogBucket() {
    return this.getStringAttribute('task_log_bucket');
  }
  public set taskLogBucket(value: string) {
    this._taskLogBucket = value;
  }
  public resetTaskLogBucket() {
    this._taskLogBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskLogBucketInput() {
    return this._taskLogBucket;
  }

  // task_log_url_pattern - computed: false, optional: true, required: false
  private _taskLogUrlPattern?: string; 
  public get taskLogUrlPattern() {
    return this.getStringAttribute('task_log_url_pattern');
  }
  public set taskLogUrlPattern(value: string) {
    this._taskLogUrlPattern = value;
  }
  public resetTaskLogUrlPattern() {
    this._taskLogUrlPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskLogUrlPatternInput() {
    return this._taskLogUrlPattern;
  }
}
export interface DeploymentScalingSpecHibernationSpecOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#is_hibernating Deployment#is_hibernating}
  */
  readonly isHibernating: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#override_until Deployment#override_until}
  */
  readonly overrideUntil?: string;
}

export function deploymentScalingSpecHibernationSpecOverrideToTerraform(struct?: DeploymentScalingSpecHibernationSpecOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_hibernating: cdktf.booleanToTerraform(struct!.isHibernating),
    override_until: cdktf.stringToTerraform(struct!.overrideUntil),
  }
}


export function deploymentScalingSpecHibernationSpecOverrideToHclTerraform(struct?: DeploymentScalingSpecHibernationSpecOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_hibernating: {
      value: cdktf.booleanToHclTerraform(struct!.isHibernating),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_until: {
      value: cdktf.stringToHclTerraform(struct!.overrideUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentScalingSpecHibernationSpecOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentScalingSpecHibernationSpecOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isHibernating !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHibernating = this._isHibernating;
    }
    if (this._overrideUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideUntil = this._overrideUntil;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentScalingSpecHibernationSpecOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isHibernating = undefined;
      this._overrideUntil = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isHibernating = value.isHibernating;
      this._overrideUntil = value.overrideUntil;
    }
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // is_hibernating - computed: false, optional: false, required: true
  private _isHibernating?: boolean | cdktf.IResolvable; 
  public get isHibernating() {
    return this.getBooleanAttribute('is_hibernating');
  }
  public set isHibernating(value: boolean | cdktf.IResolvable) {
    this._isHibernating = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHibernatingInput() {
    return this._isHibernating;
  }

  // override_until - computed: false, optional: true, required: false
  private _overrideUntil?: string; 
  public get overrideUntil() {
    return this.getStringAttribute('override_until');
  }
  public set overrideUntil(value: string) {
    this._overrideUntil = value;
  }
  public resetOverrideUntil() {
    this._overrideUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideUntilInput() {
    return this._overrideUntil;
  }
}
export interface DeploymentScalingSpecHibernationSpecSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#description Deployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#hibernate_at_cron Deployment#hibernate_at_cron}
  */
  readonly hibernateAtCron: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#is_enabled Deployment#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#wake_at_cron Deployment#wake_at_cron}
  */
  readonly wakeAtCron: string;
}

export function deploymentScalingSpecHibernationSpecSchedulesToTerraform(struct?: DeploymentScalingSpecHibernationSpecSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hibernate_at_cron: cdktf.stringToTerraform(struct!.hibernateAtCron),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    wake_at_cron: cdktf.stringToTerraform(struct!.wakeAtCron),
  }
}


export function deploymentScalingSpecHibernationSpecSchedulesToHclTerraform(struct?: DeploymentScalingSpecHibernationSpecSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hibernate_at_cron: {
      value: cdktf.stringToHclTerraform(struct!.hibernateAtCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wake_at_cron: {
      value: cdktf.stringToHclTerraform(struct!.wakeAtCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentScalingSpecHibernationSpecSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentScalingSpecHibernationSpecSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hibernateAtCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.hibernateAtCron = this._hibernateAtCron;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._wakeAtCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.wakeAtCron = this._wakeAtCron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentScalingSpecHibernationSpecSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hibernateAtCron = undefined;
      this._isEnabled = undefined;
      this._wakeAtCron = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._hibernateAtCron = value.hibernateAtCron;
      this._isEnabled = value.isEnabled;
      this._wakeAtCron = value.wakeAtCron;
    }
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

  // hibernate_at_cron - computed: false, optional: false, required: true
  private _hibernateAtCron?: string; 
  public get hibernateAtCron() {
    return this.getStringAttribute('hibernate_at_cron');
  }
  public set hibernateAtCron(value: string) {
    this._hibernateAtCron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernateAtCronInput() {
    return this._hibernateAtCron;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // wake_at_cron - computed: false, optional: false, required: true
  private _wakeAtCron?: string; 
  public get wakeAtCron() {
    return this.getStringAttribute('wake_at_cron');
  }
  public set wakeAtCron(value: string) {
    this._wakeAtCron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wakeAtCronInput() {
    return this._wakeAtCron;
  }
}

export class DeploymentScalingSpecHibernationSpecSchedulesList extends cdktf.ComplexList {
  public internalValue? : DeploymentScalingSpecHibernationSpecSchedules[] | cdktf.IResolvable

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
  public get(index: number): DeploymentScalingSpecHibernationSpecSchedulesOutputReference {
    return new DeploymentScalingSpecHibernationSpecSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentScalingSpecHibernationSpec {
  /**
  * Hibernation override configuration. Set to null to remove the override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#override Deployment#override}
  */
  readonly override?: DeploymentScalingSpecHibernationSpecOverride;
  /**
  * List of hibernation schedules. Set to null to remove all schedules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#schedules Deployment#schedules}
  */
  readonly schedules?: DeploymentScalingSpecHibernationSpecSchedules[] | cdktf.IResolvable;
}

export function deploymentScalingSpecHibernationSpecToTerraform(struct?: DeploymentScalingSpecHibernationSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override: deploymentScalingSpecHibernationSpecOverrideToTerraform(struct!.override),
    schedules: cdktf.listMapper(deploymentScalingSpecHibernationSpecSchedulesToTerraform, false)(struct!.schedules),
  }
}


export function deploymentScalingSpecHibernationSpecToHclTerraform(struct?: DeploymentScalingSpecHibernationSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override: {
      value: deploymentScalingSpecHibernationSpecOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentScalingSpecHibernationSpecOverride",
    },
    schedules: {
      value: cdktf.listMapperHcl(deploymentScalingSpecHibernationSpecSchedulesToHclTerraform, false)(struct!.schedules),
      isBlock: true,
      type: "set",
      storageClassType: "DeploymentScalingSpecHibernationSpecSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentScalingSpecHibernationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentScalingSpecHibernationSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentScalingSpecHibernationSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._override.internalValue = undefined;
      this._schedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._override.internalValue = value.override;
      this._schedules.internalValue = value.schedules;
    }
  }

  // override - computed: false, optional: true, required: false
  private _override = new DeploymentScalingSpecHibernationSpecOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: DeploymentScalingSpecHibernationSpecOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new DeploymentScalingSpecHibernationSpecSchedulesList(this, "schedules", true);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: DeploymentScalingSpecHibernationSpecSchedules[] | cdktf.IResolvable) {
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
export interface DeploymentScalingSpec {
  /**
  * Hibernation configuration for the deployment. The deployment will hibernate according to the schedules defined in this configuration. To remove the hibernation configuration, set scaling_spec to null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#hibernation_spec Deployment#hibernation_spec}
  */
  readonly hibernationSpec: DeploymentScalingSpecHibernationSpec;
}

export function deploymentScalingSpecToTerraform(struct?: DeploymentScalingSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hibernation_spec: deploymentScalingSpecHibernationSpecToTerraform(struct!.hibernationSpec),
  }
}


export function deploymentScalingSpecToHclTerraform(struct?: DeploymentScalingSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hibernation_spec: {
      value: deploymentScalingSpecHibernationSpecToHclTerraform(struct!.hibernationSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentScalingSpecHibernationSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentScalingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentScalingSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hibernationSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hibernationSpec = this._hibernationSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentScalingSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hibernationSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hibernationSpec.internalValue = value.hibernationSpec;
    }
  }

  // hibernation_spec - computed: false, optional: false, required: true
  private _hibernationSpec = new DeploymentScalingSpecHibernationSpecOutputReference(this, "hibernation_spec");
  public get hibernationSpec() {
    return this._hibernationSpec;
  }
  public putHibernationSpec(value: DeploymentScalingSpecHibernationSpec) {
    this._hibernationSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationSpecInput() {
    return this._hibernationSpec.internalValue;
  }
}
export interface DeploymentScalingStatusHibernationStatus {
}

export function deploymentScalingStatusHibernationStatusToTerraform(struct?: DeploymentScalingStatusHibernationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentScalingStatusHibernationStatusToHclTerraform(struct?: DeploymentScalingStatusHibernationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentScalingStatusHibernationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentScalingStatusHibernationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentScalingStatusHibernationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_hibernating - computed: true, optional: false, required: false
  public get isHibernating() {
    return this.getBooleanAttribute('is_hibernating');
  }

  // next_event_at - computed: true, optional: false, required: false
  public get nextEventAt() {
    return this.getStringAttribute('next_event_at');
  }

  // next_event_type - computed: true, optional: false, required: false
  public get nextEventType() {
    return this.getStringAttribute('next_event_type');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}
export interface DeploymentScalingStatus {
}

export function deploymentScalingStatusToTerraform(struct?: DeploymentScalingStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentScalingStatusToHclTerraform(struct?: DeploymentScalingStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentScalingStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentScalingStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentScalingStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hibernation_status - computed: true, optional: false, required: false
  private _hibernationStatus = new DeploymentScalingStatusHibernationStatusOutputReference(this, "hibernation_status");
  public get hibernationStatus() {
    return this._hibernationStatus;
  }
}
export interface DeploymentUpdatedBy {
}

export function deploymentUpdatedByToTerraform(struct?: DeploymentUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deploymentUpdatedByToHclTerraform(struct?: DeploymentUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeploymentUpdatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DeploymentWorkerQueues {
  /**
  * Worker queue Astro machine value - required for 'STANDARD' and 'DEDICATED' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#astro_machine Deployment#astro_machine}
  */
  readonly astroMachine?: string;
  /**
  * Worker queue default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#is_default Deployment#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Worker queue max worker count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#max_worker_count Deployment#max_worker_count}
  */
  readonly maxWorkerCount: number;
  /**
  * Worker queue min worker count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#min_worker_count Deployment#min_worker_count}
  */
  readonly minWorkerCount: number;
  /**
  * Worker queue name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#name Deployment#name}
  */
  readonly name: string;
  /**
  * Worker queue Node pool identifier - required for 'HYBRID' deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#node_pool_id Deployment#node_pool_id}
  */
  readonly nodePoolId?: string;
  /**
  * Worker queue worker concurrency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#worker_concurrency Deployment#worker_concurrency}
  */
  readonly workerConcurrency: number;
}

export function deploymentWorkerQueuesToTerraform(struct?: DeploymentWorkerQueues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    astro_machine: cdktf.stringToTerraform(struct!.astroMachine),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    max_worker_count: cdktf.numberToTerraform(struct!.maxWorkerCount),
    min_worker_count: cdktf.numberToTerraform(struct!.minWorkerCount),
    name: cdktf.stringToTerraform(struct!.name),
    node_pool_id: cdktf.stringToTerraform(struct!.nodePoolId),
    worker_concurrency: cdktf.numberToTerraform(struct!.workerConcurrency),
  }
}


export function deploymentWorkerQueuesToHclTerraform(struct?: DeploymentWorkerQueues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    astro_machine: {
      value: cdktf.stringToHclTerraform(struct!.astroMachine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_worker_count: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_worker_count: {
      value: cdktf.numberToHclTerraform(struct!.minWorkerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.workerConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentWorkerQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentWorkerQueues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._astroMachine !== undefined) {
      hasAnyValues = true;
      internalValueResult.astroMachine = this._astroMachine;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._maxWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerCount = this._maxWorkerCount;
    }
    if (this._minWorkerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkerCount = this._minWorkerCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolId = this._nodePoolId;
    }
    if (this._workerConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConcurrency = this._workerConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentWorkerQueues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._astroMachine = undefined;
      this._isDefault = undefined;
      this._maxWorkerCount = undefined;
      this._minWorkerCount = undefined;
      this._name = undefined;
      this._nodePoolId = undefined;
      this._workerConcurrency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._astroMachine = value.astroMachine;
      this._isDefault = value.isDefault;
      this._maxWorkerCount = value.maxWorkerCount;
      this._minWorkerCount = value.minWorkerCount;
      this._name = value.name;
      this._nodePoolId = value.nodePoolId;
      this._workerConcurrency = value.workerConcurrency;
    }
  }

  // astro_machine - computed: false, optional: true, required: false
  private _astroMachine?: string; 
  public get astroMachine() {
    return this.getStringAttribute('astro_machine');
  }
  public set astroMachine(value: string) {
    this._astroMachine = value;
  }
  public resetAstroMachine() {
    this._astroMachine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get astroMachineInput() {
    return this._astroMachine;
  }

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // max_worker_count - computed: false, optional: false, required: true
  private _maxWorkerCount?: number; 
  public get maxWorkerCount() {
    return this.getNumberAttribute('max_worker_count');
  }
  public set maxWorkerCount(value: number) {
    this._maxWorkerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerCountInput() {
    return this._maxWorkerCount;
  }

  // min_worker_count - computed: false, optional: false, required: true
  private _minWorkerCount?: number; 
  public get minWorkerCount() {
    return this.getNumberAttribute('min_worker_count');
  }
  public set minWorkerCount(value: number) {
    this._minWorkerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkerCountInput() {
    return this._minWorkerCount;
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

  // node_pool_id - computed: false, optional: true, required: false
  private _nodePoolId?: string; 
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }
  public set nodePoolId(value: string) {
    this._nodePoolId = value;
  }
  public resetNodePoolId() {
    this._nodePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolIdInput() {
    return this._nodePoolId;
  }

  // pod_cpu - computed: true, optional: false, required: false
  public get podCpu() {
    return this.getStringAttribute('pod_cpu');
  }

  // pod_memory - computed: true, optional: false, required: false
  public get podMemory() {
    return this.getStringAttribute('pod_memory');
  }

  // worker_concurrency - computed: false, optional: false, required: true
  private _workerConcurrency?: number; 
  public get workerConcurrency() {
    return this.getNumberAttribute('worker_concurrency');
  }
  public set workerConcurrency(value: number) {
    this._workerConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConcurrencyInput() {
    return this._workerConcurrency;
  }
}

export class DeploymentWorkerQueuesList extends cdktf.ComplexList {
  public internalValue? : DeploymentWorkerQueues[] | cdktf.IResolvable

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
  public get(index: number): DeploymentWorkerQueuesOutputReference {
    return new DeploymentWorkerQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment astro_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/resources/deployment astro_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'astro_deployment',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._clusterId = config.clusterId;
    this._contactEmails = config.contactEmails;
    this._defaultTaskPodCpu = config.defaultTaskPodCpu;
    this._defaultTaskPodMemory = config.defaultTaskPodMemory;
    this._description = config.description;
    this._desiredWorkloadIdentity = config.desiredWorkloadIdentity;
    this._environmentVariables.internalValue = config.environmentVariables;
    this._executor = config.executor;
    this._isCicdEnforced = config.isCicdEnforced;
    this._isDagDeployEnabled = config.isDagDeployEnabled;
    this._isDevelopmentMode = config.isDevelopmentMode;
    this._isHighAvailability = config.isHighAvailability;
    this._name = config.name;
    this._originalAstroRuntimeVersion = config.originalAstroRuntimeVersion;
    this._region = config.region;
    this._remoteExecution.internalValue = config.remoteExecution;
    this._resourceQuotaCpu = config.resourceQuotaCpu;
    this._resourceQuotaMemory = config.resourceQuotaMemory;
    this._scalingSpec.internalValue = config.scalingSpec;
    this._schedulerAu = config.schedulerAu;
    this._schedulerReplicas = config.schedulerReplicas;
    this._schedulerSize = config.schedulerSize;
    this._taskPodNodePoolId = config.taskPodNodePoolId;
    this._type = config.type;
    this._workerQueues.internalValue = config.workerQueues;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // airflow_version - computed: true, optional: false, required: false
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }

  // astro_runtime_version - computed: true, optional: false, required: false
  public get astroRuntimeVersion() {
    return this.getStringAttribute('astro_runtime_version');
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // contact_emails - computed: false, optional: false, required: true
  private _contactEmails?: string[]; 
  public get contactEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_emails'));
  }
  public set contactEmails(value: string[]) {
    this._contactEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailsInput() {
    return this._contactEmails;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DeploymentCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // dag_tarball_version - computed: true, optional: false, required: false
  public get dagTarballVersion() {
    return this.getStringAttribute('dag_tarball_version');
  }

  // default_task_pod_cpu - computed: false, optional: true, required: false
  private _defaultTaskPodCpu?: string; 
  public get defaultTaskPodCpu() {
    return this.getStringAttribute('default_task_pod_cpu');
  }
  public set defaultTaskPodCpu(value: string) {
    this._defaultTaskPodCpu = value;
  }
  public resetDefaultTaskPodCpu() {
    this._defaultTaskPodCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTaskPodCpuInput() {
    return this._defaultTaskPodCpu;
  }

  // default_task_pod_memory - computed: false, optional: true, required: false
  private _defaultTaskPodMemory?: string; 
  public get defaultTaskPodMemory() {
    return this.getStringAttribute('default_task_pod_memory');
  }
  public set defaultTaskPodMemory(value: string) {
    this._defaultTaskPodMemory = value;
  }
  public resetDefaultTaskPodMemory() {
    this._defaultTaskPodMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTaskPodMemoryInput() {
    return this._defaultTaskPodMemory;
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

  // desired_dag_tarball_version - computed: true, optional: false, required: false
  public get desiredDagTarballVersion() {
    return this.getStringAttribute('desired_dag_tarball_version');
  }

  // desired_workload_identity - computed: false, optional: true, required: false
  private _desiredWorkloadIdentity?: string; 
  public get desiredWorkloadIdentity() {
    return this.getStringAttribute('desired_workload_identity');
  }
  public set desiredWorkloadIdentity(value: string) {
    this._desiredWorkloadIdentity = value;
  }
  public resetDesiredWorkloadIdentity() {
    this._desiredWorkloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredWorkloadIdentityInput() {
    return this._desiredWorkloadIdentity;
  }

  // environment_variables - computed: false, optional: false, required: true
  private _environmentVariables = new DeploymentEnvironmentVariablesList(this, "environment_variables", true);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: DeploymentEnvironmentVariables[] | cdktf.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
  }

  // executor - computed: false, optional: false, required: true
  private _executor?: string; 
  public get executor() {
    return this.getStringAttribute('executor');
  }
  public set executor(value: string) {
    this._executor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executorInput() {
    return this._executor;
  }

  // external_ips - computed: true, optional: false, required: false
  public get externalIps() {
    return cdktf.Fn.tolist(this.getListAttribute('external_ips'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_repository - computed: true, optional: false, required: false
  public get imageRepository() {
    return this.getStringAttribute('image_repository');
  }

  // image_tag - computed: true, optional: false, required: false
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // is_cicd_enforced - computed: false, optional: false, required: true
  private _isCicdEnforced?: boolean | cdktf.IResolvable; 
  public get isCicdEnforced() {
    return this.getBooleanAttribute('is_cicd_enforced');
  }
  public set isCicdEnforced(value: boolean | cdktf.IResolvable) {
    this._isCicdEnforced = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isCicdEnforcedInput() {
    return this._isCicdEnforced;
  }

  // is_dag_deploy_enabled - computed: false, optional: false, required: true
  private _isDagDeployEnabled?: boolean | cdktf.IResolvable; 
  public get isDagDeployEnabled() {
    return this.getBooleanAttribute('is_dag_deploy_enabled');
  }
  public set isDagDeployEnabled(value: boolean | cdktf.IResolvable) {
    this._isDagDeployEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDagDeployEnabledInput() {
    return this._isDagDeployEnabled;
  }

  // is_development_mode - computed: false, optional: true, required: false
  private _isDevelopmentMode?: boolean | cdktf.IResolvable; 
  public get isDevelopmentMode() {
    return this.getBooleanAttribute('is_development_mode');
  }
  public set isDevelopmentMode(value: boolean | cdktf.IResolvable) {
    this._isDevelopmentMode = value;
  }
  public resetIsDevelopmentMode() {
    this._isDevelopmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDevelopmentModeInput() {
    return this._isDevelopmentMode;
  }

  // is_high_availability - computed: false, optional: true, required: false
  private _isHighAvailability?: boolean | cdktf.IResolvable; 
  public get isHighAvailability() {
    return this.getBooleanAttribute('is_high_availability');
  }
  public set isHighAvailability(value: boolean | cdktf.IResolvable) {
    this._isHighAvailability = value;
  }
  public resetIsHighAvailability() {
    this._isHighAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHighAvailabilityInput() {
    return this._isHighAvailability;
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // oidc_issuer_url - computed: true, optional: false, required: false
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }

  // original_astro_runtime_version - computed: false, optional: true, required: false
  private _originalAstroRuntimeVersion?: string; 
  public get originalAstroRuntimeVersion() {
    return this.getStringAttribute('original_astro_runtime_version');
  }
  public set originalAstroRuntimeVersion(value: string) {
    this._originalAstroRuntimeVersion = value;
  }
  public resetOriginalAstroRuntimeVersion() {
    this._originalAstroRuntimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalAstroRuntimeVersionInput() {
    return this._originalAstroRuntimeVersion;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // remote_execution - computed: false, optional: true, required: false
  private _remoteExecution = new DeploymentRemoteExecutionOutputReference(this, "remote_execution");
  public get remoteExecution() {
    return this._remoteExecution;
  }
  public putRemoteExecution(value: DeploymentRemoteExecution) {
    this._remoteExecution.internalValue = value;
  }
  public resetRemoteExecution() {
    this._remoteExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteExecutionInput() {
    return this._remoteExecution.internalValue;
  }

  // resource_quota_cpu - computed: false, optional: true, required: false
  private _resourceQuotaCpu?: string; 
  public get resourceQuotaCpu() {
    return this.getStringAttribute('resource_quota_cpu');
  }
  public set resourceQuotaCpu(value: string) {
    this._resourceQuotaCpu = value;
  }
  public resetResourceQuotaCpu() {
    this._resourceQuotaCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQuotaCpuInput() {
    return this._resourceQuotaCpu;
  }

  // resource_quota_memory - computed: false, optional: true, required: false
  private _resourceQuotaMemory?: string; 
  public get resourceQuotaMemory() {
    return this.getStringAttribute('resource_quota_memory');
  }
  public set resourceQuotaMemory(value: string) {
    this._resourceQuotaMemory = value;
  }
  public resetResourceQuotaMemory() {
    this._resourceQuotaMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQuotaMemoryInput() {
    return this._resourceQuotaMemory;
  }

  // scaling_spec - computed: false, optional: true, required: false
  private _scalingSpec = new DeploymentScalingSpecOutputReference(this, "scaling_spec");
  public get scalingSpec() {
    return this._scalingSpec;
  }
  public putScalingSpec(value: DeploymentScalingSpec) {
    this._scalingSpec.internalValue = value;
  }
  public resetScalingSpec() {
    this._scalingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingSpecInput() {
    return this._scalingSpec.internalValue;
  }

  // scaling_status - computed: true, optional: false, required: false
  private _scalingStatus = new DeploymentScalingStatusOutputReference(this, "scaling_status");
  public get scalingStatus() {
    return this._scalingStatus;
  }

  // scheduler_au - computed: false, optional: true, required: false
  private _schedulerAu?: number; 
  public get schedulerAu() {
    return this.getNumberAttribute('scheduler_au');
  }
  public set schedulerAu(value: number) {
    this._schedulerAu = value;
  }
  public resetSchedulerAu() {
    this._schedulerAu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerAuInput() {
    return this._schedulerAu;
  }

  // scheduler_cpu - computed: true, optional: false, required: false
  public get schedulerCpu() {
    return this.getStringAttribute('scheduler_cpu');
  }

  // scheduler_memory - computed: true, optional: false, required: false
  public get schedulerMemory() {
    return this.getStringAttribute('scheduler_memory');
  }

  // scheduler_replicas - computed: true, optional: true, required: false
  private _schedulerReplicas?: number; 
  public get schedulerReplicas() {
    return this.getNumberAttribute('scheduler_replicas');
  }
  public set schedulerReplicas(value: number) {
    this._schedulerReplicas = value;
  }
  public resetSchedulerReplicas() {
    this._schedulerReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerReplicasInput() {
    return this._schedulerReplicas;
  }

  // scheduler_size - computed: false, optional: true, required: false
  private _schedulerSize?: string; 
  public get schedulerSize() {
    return this.getStringAttribute('scheduler_size');
  }
  public set schedulerSize(value: string) {
    this._schedulerSize = value;
  }
  public resetSchedulerSize() {
    this._schedulerSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerSizeInput() {
    return this._schedulerSize;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // task_pod_node_pool_id - computed: false, optional: true, required: false
  private _taskPodNodePoolId?: string; 
  public get taskPodNodePoolId() {
    return this.getStringAttribute('task_pod_node_pool_id');
  }
  public set taskPodNodePoolId(value: string) {
    this._taskPodNodePoolId = value;
  }
  public resetTaskPodNodePoolId() {
    this._taskPodNodePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskPodNodePoolIdInput() {
    return this._taskPodNodePoolId;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DeploymentUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // webserver_airflow_api_url - computed: true, optional: false, required: false
  public get webserverAirflowApiUrl() {
    return this.getStringAttribute('webserver_airflow_api_url');
  }

  // webserver_ingress_hostname - computed: true, optional: false, required: false
  public get webserverIngressHostname() {
    return this.getStringAttribute('webserver_ingress_hostname');
  }

  // webserver_url - computed: true, optional: false, required: false
  public get webserverUrl() {
    return this.getStringAttribute('webserver_url');
  }

  // worker_queues - computed: false, optional: true, required: false
  private _workerQueues = new DeploymentWorkerQueuesList(this, "worker_queues", true);
  public get workerQueues() {
    return this._workerQueues;
  }
  public putWorkerQueues(value: DeploymentWorkerQueues[] | cdktf.IResolvable) {
    this._workerQueues.internalValue = value;
  }
  public resetWorkerQueues() {
    this._workerQueues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerQueuesInput() {
    return this._workerQueues.internalValue;
  }

  // workload_identity - computed: true, optional: false, required: false
  public get workloadIdentity() {
    return this.getStringAttribute('workload_identity');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      contact_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactEmails),
      default_task_pod_cpu: cdktf.stringToTerraform(this._defaultTaskPodCpu),
      default_task_pod_memory: cdktf.stringToTerraform(this._defaultTaskPodMemory),
      description: cdktf.stringToTerraform(this._description),
      desired_workload_identity: cdktf.stringToTerraform(this._desiredWorkloadIdentity),
      environment_variables: cdktf.listMapper(deploymentEnvironmentVariablesToTerraform, false)(this._environmentVariables.internalValue),
      executor: cdktf.stringToTerraform(this._executor),
      is_cicd_enforced: cdktf.booleanToTerraform(this._isCicdEnforced),
      is_dag_deploy_enabled: cdktf.booleanToTerraform(this._isDagDeployEnabled),
      is_development_mode: cdktf.booleanToTerraform(this._isDevelopmentMode),
      is_high_availability: cdktf.booleanToTerraform(this._isHighAvailability),
      name: cdktf.stringToTerraform(this._name),
      original_astro_runtime_version: cdktf.stringToTerraform(this._originalAstroRuntimeVersion),
      region: cdktf.stringToTerraform(this._region),
      remote_execution: deploymentRemoteExecutionToTerraform(this._remoteExecution.internalValue),
      resource_quota_cpu: cdktf.stringToTerraform(this._resourceQuotaCpu),
      resource_quota_memory: cdktf.stringToTerraform(this._resourceQuotaMemory),
      scaling_spec: deploymentScalingSpecToTerraform(this._scalingSpec.internalValue),
      scheduler_au: cdktf.numberToTerraform(this._schedulerAu),
      scheduler_replicas: cdktf.numberToTerraform(this._schedulerReplicas),
      scheduler_size: cdktf.stringToTerraform(this._schedulerSize),
      task_pod_node_pool_id: cdktf.stringToTerraform(this._taskPodNodePoolId),
      type: cdktf.stringToTerraform(this._type),
      worker_queues: cdktf.listMapper(deploymentWorkerQueuesToTerraform, false)(this._workerQueues.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_task_pod_cpu: {
        value: cdktf.stringToHclTerraform(this._defaultTaskPodCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_task_pod_memory: {
        value: cdktf.stringToHclTerraform(this._defaultTaskPodMemory),
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
      desired_workload_identity: {
        value: cdktf.stringToHclTerraform(this._desiredWorkloadIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktf.listMapperHcl(deploymentEnvironmentVariablesToHclTerraform, false)(this._environmentVariables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeploymentEnvironmentVariablesList",
      },
      executor: {
        value: cdktf.stringToHclTerraform(this._executor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_cicd_enforced: {
        value: cdktf.booleanToHclTerraform(this._isCicdEnforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_dag_deploy_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDagDeployEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_development_mode: {
        value: cdktf.booleanToHclTerraform(this._isDevelopmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_high_availability: {
        value: cdktf.booleanToHclTerraform(this._isHighAvailability),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_astro_runtime_version: {
        value: cdktf.stringToHclTerraform(this._originalAstroRuntimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_execution: {
        value: deploymentRemoteExecutionToHclTerraform(this._remoteExecution.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentRemoteExecution",
      },
      resource_quota_cpu: {
        value: cdktf.stringToHclTerraform(this._resourceQuotaCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_quota_memory: {
        value: cdktf.stringToHclTerraform(this._resourceQuotaMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_spec: {
        value: deploymentScalingSpecToHclTerraform(this._scalingSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentScalingSpec",
      },
      scheduler_au: {
        value: cdktf.numberToHclTerraform(this._schedulerAu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduler_replicas: {
        value: cdktf.numberToHclTerraform(this._schedulerReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduler_size: {
        value: cdktf.stringToHclTerraform(this._schedulerSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_pod_node_pool_id: {
        value: cdktf.stringToHclTerraform(this._taskPodNodePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_queues: {
        value: cdktf.listMapperHcl(deploymentWorkerQueuesToHclTerraform, false)(this._workerQueues.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeploymentWorkerQueuesList",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
