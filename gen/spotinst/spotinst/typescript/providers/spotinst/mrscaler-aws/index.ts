// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MrscalerAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#additional_info MrscalerAws#additional_info}
  */
  readonly additionalInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#additional_primary_security_groups MrscalerAws#additional_primary_security_groups}
  */
  readonly additionalPrimarySecurityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#additional_replica_security_groups MrscalerAws#additional_replica_security_groups}
  */
  readonly additionalReplicaSecurityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#availability_zones MrscalerAws#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#cluster_id MrscalerAws#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_desired_capacity MrscalerAws#core_desired_capacity}
  */
  readonly coreDesiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_ebs_optimized MrscalerAws#core_ebs_optimized}
  */
  readonly coreEbsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_instance_types MrscalerAws#core_instance_types}
  */
  readonly coreInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_lifecycle MrscalerAws#core_lifecycle}
  */
  readonly coreLifecycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_max_size MrscalerAws#core_max_size}
  */
  readonly coreMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_min_size MrscalerAws#core_min_size}
  */
  readonly coreMinSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_unit MrscalerAws#core_unit}
  */
  readonly coreUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#custom_ami_id MrscalerAws#custom_ami_id}
  */
  readonly customAmiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#description MrscalerAws#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#ebs_root_volume_size MrscalerAws#ebs_root_volume_size}
  */
  readonly ebsRootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#ec2_key_name MrscalerAws#ec2_key_name}
  */
  readonly ec2KeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#expose_cluster_id MrscalerAws#expose_cluster_id}
  */
  readonly exposeClusterId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#id MrscalerAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#job_flow_role MrscalerAws#job_flow_role}
  */
  readonly jobFlowRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#keep_job_flow_alive MrscalerAws#keep_job_flow_alive}
  */
  readonly keepJobFlowAlive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#log_uri MrscalerAws#log_uri}
  */
  readonly logUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#managed_primary_security_group MrscalerAws#managed_primary_security_group}
  */
  readonly managedPrimarySecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#managed_replica_security_group MrscalerAws#managed_replica_security_group}
  */
  readonly managedReplicaSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#master_ebs_optimized MrscalerAws#master_ebs_optimized}
  */
  readonly masterEbsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#master_instance_types MrscalerAws#master_instance_types}
  */
  readonly masterInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#master_lifecycle MrscalerAws#master_lifecycle}
  */
  readonly masterLifecycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#master_target MrscalerAws#master_target}
  */
  readonly masterTarget?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#name MrscalerAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#region MrscalerAws#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#release_label MrscalerAws#release_label}
  */
  readonly releaseLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#repo_upgrade_on_boot MrscalerAws#repo_upgrade_on_boot}
  */
  readonly repoUpgradeOnBoot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#retries MrscalerAws#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#security_config MrscalerAws#security_config}
  */
  readonly securityConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#service_access_security_group MrscalerAws#service_access_security_group}
  */
  readonly serviceAccessSecurityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#service_role MrscalerAws#service_role}
  */
  readonly serviceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#strategy MrscalerAws#strategy}
  */
  readonly strategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_desired_capacity MrscalerAws#task_desired_capacity}
  */
  readonly taskDesiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_ebs_optimized MrscalerAws#task_ebs_optimized}
  */
  readonly taskEbsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_instance_types MrscalerAws#task_instance_types}
  */
  readonly taskInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_lifecycle MrscalerAws#task_lifecycle}
  */
  readonly taskLifecycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_max_size MrscalerAws#task_max_size}
  */
  readonly taskMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_min_size MrscalerAws#task_min_size}
  */
  readonly taskMinSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_unit MrscalerAws#task_unit}
  */
  readonly taskUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#termination_protected MrscalerAws#termination_protected}
  */
  readonly terminationProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#visible_to_all_users MrscalerAws#visible_to_all_users}
  */
  readonly visibleToAllUsers?: boolean | cdktf.IResolvable;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#applications MrscalerAws#applications}
  */
  readonly applications?: MrscalerAwsApplications[] | cdktf.IResolvable;
  /**
  * bootstrap_actions_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#bootstrap_actions_file MrscalerAws#bootstrap_actions_file}
  */
  readonly bootstrapActionsFile?: MrscalerAwsBootstrapActionsFile[] | cdktf.IResolvable;
  /**
  * configurations_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#configurations_file MrscalerAws#configurations_file}
  */
  readonly configurationsFile?: MrscalerAwsConfigurationsFile[] | cdktf.IResolvable;
  /**
  * core_ebs_block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_ebs_block_device MrscalerAws#core_ebs_block_device}
  */
  readonly coreEbsBlockDevice?: MrscalerAwsCoreEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * core_scaling_down_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_scaling_down_policy MrscalerAws#core_scaling_down_policy}
  */
  readonly coreScalingDownPolicy?: MrscalerAwsCoreScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * core_scaling_up_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#core_scaling_up_policy MrscalerAws#core_scaling_up_policy}
  */
  readonly coreScalingUpPolicy?: MrscalerAwsCoreScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * instance_weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#instance_weights MrscalerAws#instance_weights}
  */
  readonly instanceWeights?: MrscalerAwsInstanceWeights[] | cdktf.IResolvable;
  /**
  * master_ebs_block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#master_ebs_block_device MrscalerAws#master_ebs_block_device}
  */
  readonly masterEbsBlockDevice?: MrscalerAwsMasterEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * provisioning_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#provisioning_timeout MrscalerAws#provisioning_timeout}
  */
  readonly provisioningTimeout?: MrscalerAwsProvisioningTimeout;
  /**
  * scheduled_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#scheduled_task MrscalerAws#scheduled_task}
  */
  readonly scheduledTask?: MrscalerAwsScheduledTask[] | cdktf.IResolvable;
  /**
  * steps_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#steps_file MrscalerAws#steps_file}
  */
  readonly stepsFile?: MrscalerAwsStepsFile[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#tags MrscalerAws#tags}
  */
  readonly tags?: MrscalerAwsTags[] | cdktf.IResolvable;
  /**
  * task_ebs_block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_ebs_block_device MrscalerAws#task_ebs_block_device}
  */
  readonly taskEbsBlockDevice?: MrscalerAwsTaskEbsBlockDevice[] | cdktf.IResolvable;
  /**
  * task_scaling_down_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_scaling_down_policy MrscalerAws#task_scaling_down_policy}
  */
  readonly taskScalingDownPolicy?: MrscalerAwsTaskScalingDownPolicy[] | cdktf.IResolvable;
  /**
  * task_scaling_up_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_scaling_up_policy MrscalerAws#task_scaling_up_policy}
  */
  readonly taskScalingUpPolicy?: MrscalerAwsTaskScalingUpPolicy[] | cdktf.IResolvable;
  /**
  * termination_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#termination_policies MrscalerAws#termination_policies}
  */
  readonly terminationPolicies?: MrscalerAwsTerminationPolicies[] | cdktf.IResolvable;
}
export interface MrscalerAwsApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#args MrscalerAws#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#name MrscalerAws#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#version MrscalerAws#version}
  */
  readonly version?: string;
}

export function mrscalerAwsApplicationsToTerraform(struct?: MrscalerAwsApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function mrscalerAwsApplicationsToHclTerraform(struct?: MrscalerAwsApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class MrscalerAwsApplicationsList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsApplications[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsApplicationsOutputReference {
    return new MrscalerAwsApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsBootstrapActionsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#key MrscalerAws#key}
  */
  readonly key: string;
}

export function mrscalerAwsBootstrapActionsFileToTerraform(struct?: MrscalerAwsBootstrapActionsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function mrscalerAwsBootstrapActionsFileToHclTerraform(struct?: MrscalerAwsBootstrapActionsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsBootstrapActionsFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsBootstrapActionsFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsBootstrapActionsFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}

export class MrscalerAwsBootstrapActionsFileList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsBootstrapActionsFile[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsBootstrapActionsFileOutputReference {
    return new MrscalerAwsBootstrapActionsFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsConfigurationsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#key MrscalerAws#key}
  */
  readonly key: string;
}

export function mrscalerAwsConfigurationsFileToTerraform(struct?: MrscalerAwsConfigurationsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function mrscalerAwsConfigurationsFileToHclTerraform(struct?: MrscalerAwsConfigurationsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsConfigurationsFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsConfigurationsFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsConfigurationsFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}

export class MrscalerAwsConfigurationsFileList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsConfigurationsFile[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsConfigurationsFileOutputReference {
    return new MrscalerAwsConfigurationsFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsCoreEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}
  */
  readonly volumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function mrscalerAwsCoreEbsBlockDeviceToTerraform(struct?: MrscalerAwsCoreEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function mrscalerAwsCoreEbsBlockDeviceToHclTerraform(struct?: MrscalerAwsCoreEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsCoreEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsCoreEbsBlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._sizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGb = this._sizeInGb;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsCoreEbsBlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._sizeInGb = undefined;
      this._volumeType = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._sizeInGb = value.sizeInGb;
      this._volumeType = value.volumeType;
      this._volumesPerInstance = value.volumesPerInstance;
    }
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size_in_gb - computed: false, optional: false, required: true
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class MrscalerAwsCoreEbsBlockDeviceList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsCoreEbsBlockDevice[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsCoreEbsBlockDeviceOutputReference {
    return new MrscalerAwsCoreEbsBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsCoreScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#target MrscalerAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit: string;
}

export function mrscalerAwsCoreScalingDownPolicyToTerraform(struct?: MrscalerAwsCoreScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function mrscalerAwsCoreScalingDownPolicyToHclTerraform(struct?: MrscalerAwsCoreScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dimensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
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
    min_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsCoreScalingDownPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsCoreScalingDownPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsCoreScalingDownPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._adjustment = undefined;
      this._cooldown = undefined;
      this._dimensions = undefined;
      this._evaluationPeriods = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._metricName = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._statistic = undefined;
      this._target = undefined;
      this._threshold = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._adjustment = value.adjustment;
      this._cooldown = value.cooldown;
      this._dimensions = value.dimensions;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._metricName = value.metricName;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._statistic = value.statistic;
      this._target = value.target;
      this._threshold = value.threshold;
      this._unit = value.unit;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // cooldown - computed: true, optional: true, required: false
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // evaluation_periods - computed: true, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // statistic - computed: true, optional: true, required: false
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class MrscalerAwsCoreScalingDownPolicyList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsCoreScalingDownPolicy[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsCoreScalingDownPolicyOutputReference {
    return new MrscalerAwsCoreScalingDownPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsCoreScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#target MrscalerAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit: string;
}

export function mrscalerAwsCoreScalingUpPolicyToTerraform(struct?: MrscalerAwsCoreScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function mrscalerAwsCoreScalingUpPolicyToHclTerraform(struct?: MrscalerAwsCoreScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dimensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
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
    min_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsCoreScalingUpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsCoreScalingUpPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsCoreScalingUpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._adjustment = undefined;
      this._cooldown = undefined;
      this._dimensions = undefined;
      this._evaluationPeriods = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._metricName = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._statistic = undefined;
      this._target = undefined;
      this._threshold = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._adjustment = value.adjustment;
      this._cooldown = value.cooldown;
      this._dimensions = value.dimensions;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._metricName = value.metricName;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._statistic = value.statistic;
      this._target = value.target;
      this._threshold = value.threshold;
      this._unit = value.unit;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // cooldown - computed: true, optional: true, required: false
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // evaluation_periods - computed: true, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // statistic - computed: true, optional: true, required: false
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class MrscalerAwsCoreScalingUpPolicyList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsCoreScalingUpPolicy[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsCoreScalingUpPolicyOutputReference {
    return new MrscalerAwsCoreScalingUpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsInstanceWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#instance_type MrscalerAws#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#weighted_capacity MrscalerAws#weighted_capacity}
  */
  readonly weightedCapacity: number;
}

export function mrscalerAwsInstanceWeightsToTerraform(struct?: MrscalerAwsInstanceWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}


export function mrscalerAwsInstanceWeightsToHclTerraform(struct?: MrscalerAwsInstanceWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weighted_capacity: {
      value: cdktf.numberToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsInstanceWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsInstanceWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsInstanceWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._weightedCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._weightedCapacity = value.weightedCapacity;
    }
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // weighted_capacity - computed: false, optional: false, required: true
  private _weightedCapacity?: number; 
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: number) {
    this._weightedCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }
}

export class MrscalerAwsInstanceWeightsList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsInstanceWeights[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsInstanceWeightsOutputReference {
    return new MrscalerAwsInstanceWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsMasterEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}
  */
  readonly volumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function mrscalerAwsMasterEbsBlockDeviceToTerraform(struct?: MrscalerAwsMasterEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function mrscalerAwsMasterEbsBlockDeviceToHclTerraform(struct?: MrscalerAwsMasterEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsMasterEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsMasterEbsBlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._sizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGb = this._sizeInGb;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsMasterEbsBlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._sizeInGb = undefined;
      this._volumeType = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._sizeInGb = value.sizeInGb;
      this._volumeType = value.volumeType;
      this._volumesPerInstance = value.volumesPerInstance;
    }
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size_in_gb - computed: false, optional: false, required: true
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class MrscalerAwsMasterEbsBlockDeviceList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsMasterEbsBlockDevice[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsMasterEbsBlockDeviceOutputReference {
    return new MrscalerAwsMasterEbsBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsProvisioningTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#timeout MrscalerAws#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#timeout_action MrscalerAws#timeout_action}
  */
  readonly timeoutAction: string;
}

export function mrscalerAwsProvisioningTimeoutToTerraform(struct?: MrscalerAwsProvisioningTimeoutOutputReference | MrscalerAwsProvisioningTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
  }
}


export function mrscalerAwsProvisioningTimeoutToHclTerraform(struct?: MrscalerAwsProvisioningTimeoutOutputReference | MrscalerAwsProvisioningTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_action: {
      value: cdktf.stringToHclTerraform(struct!.timeoutAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsProvisioningTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrscalerAwsProvisioningTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timeoutAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAction = this._timeoutAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsProvisioningTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeout = undefined;
      this._timeoutAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeout = value.timeout;
      this._timeoutAction = value.timeoutAction;
    }
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timeout_action - computed: false, optional: false, required: true
  private _timeoutAction?: string; 
  public get timeoutAction() {
    return this.getStringAttribute('timeout_action');
  }
  public set timeoutAction(value: string) {
    this._timeoutAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutActionInput() {
    return this._timeoutAction;
  }
}
export interface MrscalerAwsScheduledTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#cron MrscalerAws#cron}
  */
  readonly cron: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#desired_capacity MrscalerAws#desired_capacity}
  */
  readonly desiredCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#instance_group_type MrscalerAws#instance_group_type}
  */
  readonly instanceGroupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#is_enabled MrscalerAws#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#max_capacity MrscalerAws#max_capacity}
  */
  readonly maxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#min_capacity MrscalerAws#min_capacity}
  */
  readonly minCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#task_type MrscalerAws#task_type}
  */
  readonly taskType: string;
}

export function mrscalerAwsScheduledTaskToTerraform(struct?: MrscalerAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
    desired_capacity: cdktf.stringToTerraform(struct!.desiredCapacity),
    instance_group_type: cdktf.stringToTerraform(struct!.instanceGroupType),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}


export function mrscalerAwsScheduledTaskToHclTerraform(struct?: MrscalerAwsScheduledTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_capacity: {
      value: cdktf.stringToHclTerraform(struct!.desiredCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_group_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceGroupType),
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
    max_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsScheduledTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsScheduledTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    if (this._desiredCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredCapacity = this._desiredCapacity;
    }
    if (this._instanceGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceGroupType = this._instanceGroupType;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsScheduledTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cron = undefined;
      this._desiredCapacity = undefined;
      this._instanceGroupType = undefined;
      this._isEnabled = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._taskType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cron = value.cron;
      this._desiredCapacity = value.desiredCapacity;
      this._instanceGroupType = value.instanceGroupType;
      this._isEnabled = value.isEnabled;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._taskType = value.taskType;
    }
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: string; 
  public get desiredCapacity() {
    return this.getStringAttribute('desired_capacity');
  }
  public set desiredCapacity(value: string) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // instance_group_type - computed: false, optional: false, required: true
  private _instanceGroupType?: string; 
  public get instanceGroupType() {
    return this.getStringAttribute('instance_group_type');
  }
  public set instanceGroupType(value: string) {
    this._instanceGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupTypeInput() {
    return this._instanceGroupType;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: string; 
  public get maxCapacity() {
    return this.getStringAttribute('max_capacity');
  }
  public set maxCapacity(value: string) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: string; 
  public get minCapacity() {
    return this.getStringAttribute('min_capacity');
  }
  public set minCapacity(value: string) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }
}

export class MrscalerAwsScheduledTaskList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsScheduledTask[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsScheduledTaskOutputReference {
    return new MrscalerAwsScheduledTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsStepsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#bucket MrscalerAws#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#key MrscalerAws#key}
  */
  readonly key: string;
}

export function mrscalerAwsStepsFileToTerraform(struct?: MrscalerAwsStepsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function mrscalerAwsStepsFileToHclTerraform(struct?: MrscalerAwsStepsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsStepsFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsStepsFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsStepsFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}

export class MrscalerAwsStepsFileList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsStepsFile[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsStepsFileOutputReference {
    return new MrscalerAwsStepsFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#key MrscalerAws#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#value MrscalerAws#value}
  */
  readonly value: string;
}

export function mrscalerAwsTagsToTerraform(struct?: MrscalerAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mrscalerAwsTagsToHclTerraform(struct?: MrscalerAwsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class MrscalerAwsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: MrscalerAwsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MrscalerAwsTagsList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsTags[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsTagsOutputReference {
    return new MrscalerAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsTaskEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#iops MrscalerAws#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#size_in_gb MrscalerAws#size_in_gb}
  */
  readonly sizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#volume_type MrscalerAws#volume_type}
  */
  readonly volumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#volumes_per_instance MrscalerAws#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function mrscalerAwsTaskEbsBlockDeviceToTerraform(struct?: MrscalerAwsTaskEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function mrscalerAwsTaskEbsBlockDeviceToHclTerraform(struct?: MrscalerAwsTaskEbsBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsTaskEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsTaskEbsBlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._sizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGb = this._sizeInGb;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsTaskEbsBlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._sizeInGb = undefined;
      this._volumeType = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._sizeInGb = value.sizeInGb;
      this._volumeType = value.volumeType;
      this._volumesPerInstance = value.volumesPerInstance;
    }
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size_in_gb - computed: false, optional: false, required: true
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class MrscalerAwsTaskEbsBlockDeviceList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsTaskEbsBlockDevice[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsTaskEbsBlockDeviceOutputReference {
    return new MrscalerAwsTaskEbsBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsTaskScalingDownPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#target MrscalerAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit: string;
}

export function mrscalerAwsTaskScalingDownPolicyToTerraform(struct?: MrscalerAwsTaskScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function mrscalerAwsTaskScalingDownPolicyToHclTerraform(struct?: MrscalerAwsTaskScalingDownPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dimensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
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
    min_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsTaskScalingDownPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsTaskScalingDownPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsTaskScalingDownPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._adjustment = undefined;
      this._cooldown = undefined;
      this._dimensions = undefined;
      this._evaluationPeriods = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._metricName = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._statistic = undefined;
      this._target = undefined;
      this._threshold = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._adjustment = value.adjustment;
      this._cooldown = value.cooldown;
      this._dimensions = value.dimensions;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._metricName = value.metricName;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._statistic = value.statistic;
      this._target = value.target;
      this._threshold = value.threshold;
      this._unit = value.unit;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // cooldown - computed: true, optional: true, required: false
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // evaluation_periods - computed: true, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // statistic - computed: true, optional: true, required: false
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class MrscalerAwsTaskScalingDownPolicyList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsTaskScalingDownPolicy[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsTaskScalingDownPolicyOutputReference {
    return new MrscalerAwsTaskScalingDownPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsTaskScalingUpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#action_type MrscalerAws#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#adjustment MrscalerAws#adjustment}
  */
  readonly adjustment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#cooldown MrscalerAws#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#dimensions MrscalerAws#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#max_target_capacity MrscalerAws#max_target_capacity}
  */
  readonly maxTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#maximum MrscalerAws#maximum}
  */
  readonly maximum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#min_target_capacity MrscalerAws#min_target_capacity}
  */
  readonly minTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#minimum MrscalerAws#minimum}
  */
  readonly minimum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#policy_name MrscalerAws#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#target MrscalerAws#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit: string;
}

export function mrscalerAwsTaskScalingUpPolicyToTerraform(struct?: MrscalerAwsTaskScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    adjustment: cdktf.stringToTerraform(struct!.adjustment),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    max_target_capacity: cdktf.stringToTerraform(struct!.maxTargetCapacity),
    maximum: cdktf.stringToTerraform(struct!.maximum),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    min_target_capacity: cdktf.stringToTerraform(struct!.minTargetCapacity),
    minimum: cdktf.stringToTerraform(struct!.minimum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function mrscalerAwsTaskScalingUpPolicyToHclTerraform(struct?: MrscalerAwsTaskScalingUpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment: {
      value: cdktf.stringToHclTerraform(struct!.adjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dimensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.maxTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.stringToHclTerraform(struct!.maximum),
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
    min_target_capacity: {
      value: cdktf.stringToHclTerraform(struct!.minTargetCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum: {
      value: cdktf.stringToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
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
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsTaskScalingUpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsTaskScalingUpPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._adjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustment = this._adjustment;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._maxTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTargetCapacity = this._maxTargetCapacity;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._minTargetCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTargetCapacity = this._minTargetCapacity;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsTaskScalingUpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._adjustment = undefined;
      this._cooldown = undefined;
      this._dimensions = undefined;
      this._evaluationPeriods = undefined;
      this._maxTargetCapacity = undefined;
      this._maximum = undefined;
      this._metricName = undefined;
      this._minTargetCapacity = undefined;
      this._minimum = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._policyName = undefined;
      this._statistic = undefined;
      this._target = undefined;
      this._threshold = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._adjustment = value.adjustment;
      this._cooldown = value.cooldown;
      this._dimensions = value.dimensions;
      this._evaluationPeriods = value.evaluationPeriods;
      this._maxTargetCapacity = value.maxTargetCapacity;
      this._maximum = value.maximum;
      this._metricName = value.metricName;
      this._minTargetCapacity = value.minTargetCapacity;
      this._minimum = value.minimum;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._policyName = value.policyName;
      this._statistic = value.statistic;
      this._target = value.target;
      this._threshold = value.threshold;
      this._unit = value.unit;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // adjustment - computed: false, optional: true, required: false
  private _adjustment?: string; 
  public get adjustment() {
    return this.getStringAttribute('adjustment');
  }
  public set adjustment(value: string) {
    this._adjustment = value;
  }
  public resetAdjustment() {
    this._adjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentInput() {
    return this._adjustment;
  }

  // cooldown - computed: true, optional: true, required: false
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // evaluation_periods - computed: true, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // max_target_capacity - computed: false, optional: true, required: false
  private _maxTargetCapacity?: string; 
  public get maxTargetCapacity() {
    return this.getStringAttribute('max_target_capacity');
  }
  public set maxTargetCapacity(value: string) {
    this._maxTargetCapacity = value;
  }
  public resetMaxTargetCapacity() {
    this._maxTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTargetCapacityInput() {
    return this._maxTargetCapacity;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: string; 
  public get maximum() {
    return this.getStringAttribute('maximum');
  }
  public set maximum(value: string) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // min_target_capacity - computed: false, optional: true, required: false
  private _minTargetCapacity?: string; 
  public get minTargetCapacity() {
    return this.getStringAttribute('min_target_capacity');
  }
  public set minTargetCapacity(value: string) {
    this._minTargetCapacity = value;
  }
  public resetMinTargetCapacity() {
    this._minTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTargetCapacityInput() {
    return this._minTargetCapacity;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: string; 
  public get minimum() {
    return this.getStringAttribute('minimum');
  }
  public set minimum(value: string) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // statistic - computed: true, optional: true, required: false
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class MrscalerAwsTaskScalingUpPolicyList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsTaskScalingUpPolicy[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsTaskScalingUpPolicyOutputReference {
    return new MrscalerAwsTaskScalingUpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsTerminationPoliciesStatements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#evaluation_periods MrscalerAws#evaluation_periods}
  */
  readonly evaluationPeriods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#metric_name MrscalerAws#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#namespace MrscalerAws#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#operator MrscalerAws#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#period MrscalerAws#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#statistic MrscalerAws#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#threshold MrscalerAws#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#unit MrscalerAws#unit}
  */
  readonly unit?: string;
}

export function mrscalerAwsTerminationPoliciesStatementsToTerraform(struct?: MrscalerAwsTerminationPoliciesStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operator: cdktf.stringToTerraform(struct!.operator),
    period: cdktf.numberToTerraform(struct!.period),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function mrscalerAwsTerminationPoliciesStatementsToHclTerraform(struct?: MrscalerAwsTerminationPoliciesStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsTerminationPoliciesStatementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsTerminationPoliciesStatements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsTerminationPoliciesStatements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationPeriods = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._operator = undefined;
      this._period = undefined;
      this._statistic = undefined;
      this._threshold = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationPeriods = value.evaluationPeriods;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._operator = value.operator;
      this._period = value.period;
      this._statistic = value.statistic;
      this._threshold = value.threshold;
      this._unit = value.unit;
    }
  }

  // evaluation_periods - computed: false, optional: true, required: false
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  public resetEvaluationPeriods() {
    this._evaluationPeriods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class MrscalerAwsTerminationPoliciesStatementsList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsTerminationPoliciesStatements[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsTerminationPoliciesStatementsOutputReference {
    return new MrscalerAwsTerminationPoliciesStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrscalerAwsTerminationPolicies {
  /**
  * statements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#statements MrscalerAws#statements}
  */
  readonly statements: MrscalerAwsTerminationPoliciesStatements[] | cdktf.IResolvable;
}

export function mrscalerAwsTerminationPoliciesToTerraform(struct?: MrscalerAwsTerminationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statements: cdktf.listMapper(mrscalerAwsTerminationPoliciesStatementsToTerraform, true)(struct!.statements),
  }
}


export function mrscalerAwsTerminationPoliciesToHclTerraform(struct?: MrscalerAwsTerminationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    statements: {
      value: cdktf.listMapperHcl(mrscalerAwsTerminationPoliciesStatementsToHclTerraform, true)(struct!.statements),
      isBlock: true,
      type: "list",
      storageClassType: "MrscalerAwsTerminationPoliciesStatementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrscalerAwsTerminationPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrscalerAwsTerminationPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statements = this._statements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrscalerAwsTerminationPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statements.internalValue = value.statements;
    }
  }

  // statements - computed: false, optional: false, required: true
  private _statements = new MrscalerAwsTerminationPoliciesStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }
  public putStatements(value: MrscalerAwsTerminationPoliciesStatements[] | cdktf.IResolvable) {
    this._statements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements.internalValue;
  }
}

export class MrscalerAwsTerminationPoliciesList extends cdktf.ComplexList {
  public internalValue? : MrscalerAwsTerminationPolicies[] | cdktf.IResolvable

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
  public get(index: number): MrscalerAwsTerminationPoliciesOutputReference {
    return new MrscalerAwsTerminationPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws spotinst_mrscaler_aws}
*/
export class MrscalerAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_mrscaler_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MrscalerAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MrscalerAws to import
  * @param importFromId The id of the existing MrscalerAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MrscalerAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_mrscaler_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/mrscaler_aws spotinst_mrscaler_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MrscalerAwsConfig
  */
  public constructor(scope: Construct, id: string, config: MrscalerAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_mrscaler_aws',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalInfo = config.additionalInfo;
    this._additionalPrimarySecurityGroups = config.additionalPrimarySecurityGroups;
    this._additionalReplicaSecurityGroups = config.additionalReplicaSecurityGroups;
    this._availabilityZones = config.availabilityZones;
    this._clusterId = config.clusterId;
    this._coreDesiredCapacity = config.coreDesiredCapacity;
    this._coreEbsOptimized = config.coreEbsOptimized;
    this._coreInstanceTypes = config.coreInstanceTypes;
    this._coreLifecycle = config.coreLifecycle;
    this._coreMaxSize = config.coreMaxSize;
    this._coreMinSize = config.coreMinSize;
    this._coreUnit = config.coreUnit;
    this._customAmiId = config.customAmiId;
    this._description = config.description;
    this._ebsRootVolumeSize = config.ebsRootVolumeSize;
    this._ec2KeyName = config.ec2KeyName;
    this._exposeClusterId = config.exposeClusterId;
    this._id = config.id;
    this._jobFlowRole = config.jobFlowRole;
    this._keepJobFlowAlive = config.keepJobFlowAlive;
    this._logUri = config.logUri;
    this._managedPrimarySecurityGroup = config.managedPrimarySecurityGroup;
    this._managedReplicaSecurityGroup = config.managedReplicaSecurityGroup;
    this._masterEbsOptimized = config.masterEbsOptimized;
    this._masterInstanceTypes = config.masterInstanceTypes;
    this._masterLifecycle = config.masterLifecycle;
    this._masterTarget = config.masterTarget;
    this._name = config.name;
    this._region = config.region;
    this._releaseLabel = config.releaseLabel;
    this._repoUpgradeOnBoot = config.repoUpgradeOnBoot;
    this._retries = config.retries;
    this._securityConfig = config.securityConfig;
    this._serviceAccessSecurityGroup = config.serviceAccessSecurityGroup;
    this._serviceRole = config.serviceRole;
    this._strategy = config.strategy;
    this._taskDesiredCapacity = config.taskDesiredCapacity;
    this._taskEbsOptimized = config.taskEbsOptimized;
    this._taskInstanceTypes = config.taskInstanceTypes;
    this._taskLifecycle = config.taskLifecycle;
    this._taskMaxSize = config.taskMaxSize;
    this._taskMinSize = config.taskMinSize;
    this._taskUnit = config.taskUnit;
    this._terminationProtected = config.terminationProtected;
    this._visibleToAllUsers = config.visibleToAllUsers;
    this._applications.internalValue = config.applications;
    this._bootstrapActionsFile.internalValue = config.bootstrapActionsFile;
    this._configurationsFile.internalValue = config.configurationsFile;
    this._coreEbsBlockDevice.internalValue = config.coreEbsBlockDevice;
    this._coreScalingDownPolicy.internalValue = config.coreScalingDownPolicy;
    this._coreScalingUpPolicy.internalValue = config.coreScalingUpPolicy;
    this._instanceWeights.internalValue = config.instanceWeights;
    this._masterEbsBlockDevice.internalValue = config.masterEbsBlockDevice;
    this._provisioningTimeout.internalValue = config.provisioningTimeout;
    this._scheduledTask.internalValue = config.scheduledTask;
    this._stepsFile.internalValue = config.stepsFile;
    this._tags.internalValue = config.tags;
    this._taskEbsBlockDevice.internalValue = config.taskEbsBlockDevice;
    this._taskScalingDownPolicy.internalValue = config.taskScalingDownPolicy;
    this._taskScalingUpPolicy.internalValue = config.taskScalingUpPolicy;
    this._terminationPolicies.internalValue = config.terminationPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo?: string; 
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }
  public set additionalInfo(value: string) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo;
  }

  // additional_primary_security_groups - computed: false, optional: true, required: false
  private _additionalPrimarySecurityGroups?: string[]; 
  public get additionalPrimarySecurityGroups() {
    return this.getListAttribute('additional_primary_security_groups');
  }
  public set additionalPrimarySecurityGroups(value: string[]) {
    this._additionalPrimarySecurityGroups = value;
  }
  public resetAdditionalPrimarySecurityGroups() {
    this._additionalPrimarySecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPrimarySecurityGroupsInput() {
    return this._additionalPrimarySecurityGroups;
  }

  // additional_replica_security_groups - computed: false, optional: true, required: false
  private _additionalReplicaSecurityGroups?: string[]; 
  public get additionalReplicaSecurityGroups() {
    return this.getListAttribute('additional_replica_security_groups');
  }
  public set additionalReplicaSecurityGroups(value: string[]) {
    this._additionalReplicaSecurityGroups = value;
  }
  public resetAdditionalReplicaSecurityGroups() {
    this._additionalReplicaSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalReplicaSecurityGroupsInput() {
    return this._additionalReplicaSecurityGroups;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // cluster_id - computed: false, optional: true, required: false
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

  // core_desired_capacity - computed: false, optional: true, required: false
  private _coreDesiredCapacity?: number; 
  public get coreDesiredCapacity() {
    return this.getNumberAttribute('core_desired_capacity');
  }
  public set coreDesiredCapacity(value: number) {
    this._coreDesiredCapacity = value;
  }
  public resetCoreDesiredCapacity() {
    this._coreDesiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDesiredCapacityInput() {
    return this._coreDesiredCapacity;
  }

  // core_ebs_optimized - computed: false, optional: true, required: false
  private _coreEbsOptimized?: boolean | cdktf.IResolvable; 
  public get coreEbsOptimized() {
    return this.getBooleanAttribute('core_ebs_optimized');
  }
  public set coreEbsOptimized(value: boolean | cdktf.IResolvable) {
    this._coreEbsOptimized = value;
  }
  public resetCoreEbsOptimized() {
    this._coreEbsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreEbsOptimizedInput() {
    return this._coreEbsOptimized;
  }

  // core_instance_types - computed: false, optional: true, required: false
  private _coreInstanceTypes?: string[]; 
  public get coreInstanceTypes() {
    return this.getListAttribute('core_instance_types');
  }
  public set coreInstanceTypes(value: string[]) {
    this._coreInstanceTypes = value;
  }
  public resetCoreInstanceTypes() {
    this._coreInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInstanceTypesInput() {
    return this._coreInstanceTypes;
  }

  // core_lifecycle - computed: false, optional: true, required: false
  private _coreLifecycle?: string; 
  public get coreLifecycle() {
    return this.getStringAttribute('core_lifecycle');
  }
  public set coreLifecycle(value: string) {
    this._coreLifecycle = value;
  }
  public resetCoreLifecycle() {
    this._coreLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreLifecycleInput() {
    return this._coreLifecycle;
  }

  // core_max_size - computed: false, optional: true, required: false
  private _coreMaxSize?: number; 
  public get coreMaxSize() {
    return this.getNumberAttribute('core_max_size');
  }
  public set coreMaxSize(value: number) {
    this._coreMaxSize = value;
  }
  public resetCoreMaxSize() {
    this._coreMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreMaxSizeInput() {
    return this._coreMaxSize;
  }

  // core_min_size - computed: false, optional: true, required: false
  private _coreMinSize?: number; 
  public get coreMinSize() {
    return this.getNumberAttribute('core_min_size');
  }
  public set coreMinSize(value: number) {
    this._coreMinSize = value;
  }
  public resetCoreMinSize() {
    this._coreMinSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreMinSizeInput() {
    return this._coreMinSize;
  }

  // core_unit - computed: false, optional: true, required: false
  private _coreUnit?: string; 
  public get coreUnit() {
    return this.getStringAttribute('core_unit');
  }
  public set coreUnit(value: string) {
    this._coreUnit = value;
  }
  public resetCoreUnit() {
    this._coreUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreUnitInput() {
    return this._coreUnit;
  }

  // custom_ami_id - computed: false, optional: true, required: false
  private _customAmiId?: string; 
  public get customAmiId() {
    return this.getStringAttribute('custom_ami_id');
  }
  public set customAmiId(value: string) {
    this._customAmiId = value;
  }
  public resetCustomAmiId() {
    this._customAmiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAmiIdInput() {
    return this._customAmiId;
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

  // ebs_root_volume_size - computed: false, optional: true, required: false
  private _ebsRootVolumeSize?: number; 
  public get ebsRootVolumeSize() {
    return this.getNumberAttribute('ebs_root_volume_size');
  }
  public set ebsRootVolumeSize(value: number) {
    this._ebsRootVolumeSize = value;
  }
  public resetEbsRootVolumeSize() {
    this._ebsRootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsRootVolumeSizeInput() {
    return this._ebsRootVolumeSize;
  }

  // ec2_key_name - computed: false, optional: true, required: false
  private _ec2KeyName?: string; 
  public get ec2KeyName() {
    return this.getStringAttribute('ec2_key_name');
  }
  public set ec2KeyName(value: string) {
    this._ec2KeyName = value;
  }
  public resetEc2KeyName() {
    this._ec2KeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2KeyNameInput() {
    return this._ec2KeyName;
  }

  // expose_cluster_id - computed: false, optional: true, required: false
  private _exposeClusterId?: boolean | cdktf.IResolvable; 
  public get exposeClusterId() {
    return this.getBooleanAttribute('expose_cluster_id');
  }
  public set exposeClusterId(value: boolean | cdktf.IResolvable) {
    this._exposeClusterId = value;
  }
  public resetExposeClusterId() {
    this._exposeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeClusterIdInput() {
    return this._exposeClusterId;
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

  // job_flow_role - computed: false, optional: true, required: false
  private _jobFlowRole?: string; 
  public get jobFlowRole() {
    return this.getStringAttribute('job_flow_role');
  }
  public set jobFlowRole(value: string) {
    this._jobFlowRole = value;
  }
  public resetJobFlowRole() {
    this._jobFlowRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobFlowRoleInput() {
    return this._jobFlowRole;
  }

  // keep_job_flow_alive - computed: false, optional: true, required: false
  private _keepJobFlowAlive?: boolean | cdktf.IResolvable; 
  public get keepJobFlowAlive() {
    return this.getBooleanAttribute('keep_job_flow_alive');
  }
  public set keepJobFlowAlive(value: boolean | cdktf.IResolvable) {
    this._keepJobFlowAlive = value;
  }
  public resetKeepJobFlowAlive() {
    this._keepJobFlowAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobFlowAliveInput() {
    return this._keepJobFlowAlive;
  }

  // log_uri - computed: false, optional: true, required: false
  private _logUri?: string; 
  public get logUri() {
    return this.getStringAttribute('log_uri');
  }
  public set logUri(value: string) {
    this._logUri = value;
  }
  public resetLogUri() {
    this._logUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUriInput() {
    return this._logUri;
  }

  // managed_primary_security_group - computed: false, optional: true, required: false
  private _managedPrimarySecurityGroup?: string; 
  public get managedPrimarySecurityGroup() {
    return this.getStringAttribute('managed_primary_security_group');
  }
  public set managedPrimarySecurityGroup(value: string) {
    this._managedPrimarySecurityGroup = value;
  }
  public resetManagedPrimarySecurityGroup() {
    this._managedPrimarySecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrimarySecurityGroupInput() {
    return this._managedPrimarySecurityGroup;
  }

  // managed_replica_security_group - computed: false, optional: true, required: false
  private _managedReplicaSecurityGroup?: string; 
  public get managedReplicaSecurityGroup() {
    return this.getStringAttribute('managed_replica_security_group');
  }
  public set managedReplicaSecurityGroup(value: string) {
    this._managedReplicaSecurityGroup = value;
  }
  public resetManagedReplicaSecurityGroup() {
    this._managedReplicaSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedReplicaSecurityGroupInput() {
    return this._managedReplicaSecurityGroup;
  }

  // master_ebs_optimized - computed: false, optional: true, required: false
  private _masterEbsOptimized?: boolean | cdktf.IResolvable; 
  public get masterEbsOptimized() {
    return this.getBooleanAttribute('master_ebs_optimized');
  }
  public set masterEbsOptimized(value: boolean | cdktf.IResolvable) {
    this._masterEbsOptimized = value;
  }
  public resetMasterEbsOptimized() {
    this._masterEbsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterEbsOptimizedInput() {
    return this._masterEbsOptimized;
  }

  // master_instance_types - computed: false, optional: true, required: false
  private _masterInstanceTypes?: string[]; 
  public get masterInstanceTypes() {
    return this.getListAttribute('master_instance_types');
  }
  public set masterInstanceTypes(value: string[]) {
    this._masterInstanceTypes = value;
  }
  public resetMasterInstanceTypes() {
    this._masterInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceTypesInput() {
    return this._masterInstanceTypes;
  }

  // master_lifecycle - computed: false, optional: true, required: false
  private _masterLifecycle?: string; 
  public get masterLifecycle() {
    return this.getStringAttribute('master_lifecycle');
  }
  public set masterLifecycle(value: string) {
    this._masterLifecycle = value;
  }
  public resetMasterLifecycle() {
    this._masterLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterLifecycleInput() {
    return this._masterLifecycle;
  }

  // master_target - computed: false, optional: true, required: false
  private _masterTarget?: number; 
  public get masterTarget() {
    return this.getNumberAttribute('master_target');
  }
  public set masterTarget(value: number) {
    this._masterTarget = value;
  }
  public resetMasterTarget() {
    this._masterTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterTargetInput() {
    return this._masterTarget;
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

  // output_cluster_id - computed: true, optional: false, required: false
  public get outputClusterId() {
    return this.getStringAttribute('output_cluster_id');
  }

  // region - computed: false, optional: true, required: false
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

  // release_label - computed: false, optional: true, required: false
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  public resetReleaseLabel() {
    this._releaseLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // repo_upgrade_on_boot - computed: false, optional: true, required: false
  private _repoUpgradeOnBoot?: string; 
  public get repoUpgradeOnBoot() {
    return this.getStringAttribute('repo_upgrade_on_boot');
  }
  public set repoUpgradeOnBoot(value: string) {
    this._repoUpgradeOnBoot = value;
  }
  public resetRepoUpgradeOnBoot() {
    this._repoUpgradeOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUpgradeOnBootInput() {
    return this._repoUpgradeOnBoot;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig?: string; 
  public get securityConfig() {
    return this.getStringAttribute('security_config');
  }
  public set securityConfig(value: string) {
    this._securityConfig = value;
  }
  public resetSecurityConfig() {
    this._securityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig;
  }

  // service_access_security_group - computed: false, optional: true, required: false
  private _serviceAccessSecurityGroup?: string; 
  public get serviceAccessSecurityGroup() {
    return this.getStringAttribute('service_access_security_group');
  }
  public set serviceAccessSecurityGroup(value: string) {
    this._serviceAccessSecurityGroup = value;
  }
  public resetServiceAccessSecurityGroup() {
    this._serviceAccessSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessSecurityGroupInput() {
    return this._serviceAccessSecurityGroup;
  }

  // service_role - computed: false, optional: true, required: false
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  public resetServiceRole() {
    this._serviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // task_desired_capacity - computed: false, optional: true, required: false
  private _taskDesiredCapacity?: number; 
  public get taskDesiredCapacity() {
    return this.getNumberAttribute('task_desired_capacity');
  }
  public set taskDesiredCapacity(value: number) {
    this._taskDesiredCapacity = value;
  }
  public resetTaskDesiredCapacity() {
    this._taskDesiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDesiredCapacityInput() {
    return this._taskDesiredCapacity;
  }

  // task_ebs_optimized - computed: false, optional: true, required: false
  private _taskEbsOptimized?: boolean | cdktf.IResolvable; 
  public get taskEbsOptimized() {
    return this.getBooleanAttribute('task_ebs_optimized');
  }
  public set taskEbsOptimized(value: boolean | cdktf.IResolvable) {
    this._taskEbsOptimized = value;
  }
  public resetTaskEbsOptimized() {
    this._taskEbsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskEbsOptimizedInput() {
    return this._taskEbsOptimized;
  }

  // task_instance_types - computed: false, optional: true, required: false
  private _taskInstanceTypes?: string[]; 
  public get taskInstanceTypes() {
    return this.getListAttribute('task_instance_types');
  }
  public set taskInstanceTypes(value: string[]) {
    this._taskInstanceTypes = value;
  }
  public resetTaskInstanceTypes() {
    this._taskInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInstanceTypesInput() {
    return this._taskInstanceTypes;
  }

  // task_lifecycle - computed: false, optional: true, required: false
  private _taskLifecycle?: string; 
  public get taskLifecycle() {
    return this.getStringAttribute('task_lifecycle');
  }
  public set taskLifecycle(value: string) {
    this._taskLifecycle = value;
  }
  public resetTaskLifecycle() {
    this._taskLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskLifecycleInput() {
    return this._taskLifecycle;
  }

  // task_max_size - computed: false, optional: true, required: false
  private _taskMaxSize?: number; 
  public get taskMaxSize() {
    return this.getNumberAttribute('task_max_size');
  }
  public set taskMaxSize(value: number) {
    this._taskMaxSize = value;
  }
  public resetTaskMaxSize() {
    this._taskMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskMaxSizeInput() {
    return this._taskMaxSize;
  }

  // task_min_size - computed: false, optional: true, required: false
  private _taskMinSize?: number; 
  public get taskMinSize() {
    return this.getNumberAttribute('task_min_size');
  }
  public set taskMinSize(value: number) {
    this._taskMinSize = value;
  }
  public resetTaskMinSize() {
    this._taskMinSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskMinSizeInput() {
    return this._taskMinSize;
  }

  // task_unit - computed: false, optional: true, required: false
  private _taskUnit?: string; 
  public get taskUnit() {
    return this.getStringAttribute('task_unit');
  }
  public set taskUnit(value: string) {
    this._taskUnit = value;
  }
  public resetTaskUnit() {
    this._taskUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskUnitInput() {
    return this._taskUnit;
  }

  // termination_protected - computed: false, optional: true, required: false
  private _terminationProtected?: boolean | cdktf.IResolvable; 
  public get terminationProtected() {
    return this.getBooleanAttribute('termination_protected');
  }
  public set terminationProtected(value: boolean | cdktf.IResolvable) {
    this._terminationProtected = value;
  }
  public resetTerminationProtected() {
    this._terminationProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectedInput() {
    return this._terminationProtected;
  }

  // visible_to_all_users - computed: false, optional: true, required: false
  private _visibleToAllUsers?: boolean | cdktf.IResolvable; 
  public get visibleToAllUsers() {
    return this.getBooleanAttribute('visible_to_all_users');
  }
  public set visibleToAllUsers(value: boolean | cdktf.IResolvable) {
    this._visibleToAllUsers = value;
  }
  public resetVisibleToAllUsers() {
    this._visibleToAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleToAllUsersInput() {
    return this._visibleToAllUsers;
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new MrscalerAwsApplicationsList(this, "applications", true);
  public get applications() {
    return this._applications;
  }
  public putApplications(value: MrscalerAwsApplications[] | cdktf.IResolvable) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // bootstrap_actions_file - computed: false, optional: true, required: false
  private _bootstrapActionsFile = new MrscalerAwsBootstrapActionsFileList(this, "bootstrap_actions_file", true);
  public get bootstrapActionsFile() {
    return this._bootstrapActionsFile;
  }
  public putBootstrapActionsFile(value: MrscalerAwsBootstrapActionsFile[] | cdktf.IResolvable) {
    this._bootstrapActionsFile.internalValue = value;
  }
  public resetBootstrapActionsFile() {
    this._bootstrapActionsFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapActionsFileInput() {
    return this._bootstrapActionsFile.internalValue;
  }

  // configurations_file - computed: false, optional: true, required: false
  private _configurationsFile = new MrscalerAwsConfigurationsFileList(this, "configurations_file", true);
  public get configurationsFile() {
    return this._configurationsFile;
  }
  public putConfigurationsFile(value: MrscalerAwsConfigurationsFile[] | cdktf.IResolvable) {
    this._configurationsFile.internalValue = value;
  }
  public resetConfigurationsFile() {
    this._configurationsFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsFileInput() {
    return this._configurationsFile.internalValue;
  }

  // core_ebs_block_device - computed: false, optional: true, required: false
  private _coreEbsBlockDevice = new MrscalerAwsCoreEbsBlockDeviceList(this, "core_ebs_block_device", true);
  public get coreEbsBlockDevice() {
    return this._coreEbsBlockDevice;
  }
  public putCoreEbsBlockDevice(value: MrscalerAwsCoreEbsBlockDevice[] | cdktf.IResolvable) {
    this._coreEbsBlockDevice.internalValue = value;
  }
  public resetCoreEbsBlockDevice() {
    this._coreEbsBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreEbsBlockDeviceInput() {
    return this._coreEbsBlockDevice.internalValue;
  }

  // core_scaling_down_policy - computed: false, optional: true, required: false
  private _coreScalingDownPolicy = new MrscalerAwsCoreScalingDownPolicyList(this, "core_scaling_down_policy", true);
  public get coreScalingDownPolicy() {
    return this._coreScalingDownPolicy;
  }
  public putCoreScalingDownPolicy(value: MrscalerAwsCoreScalingDownPolicy[] | cdktf.IResolvable) {
    this._coreScalingDownPolicy.internalValue = value;
  }
  public resetCoreScalingDownPolicy() {
    this._coreScalingDownPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreScalingDownPolicyInput() {
    return this._coreScalingDownPolicy.internalValue;
  }

  // core_scaling_up_policy - computed: false, optional: true, required: false
  private _coreScalingUpPolicy = new MrscalerAwsCoreScalingUpPolicyList(this, "core_scaling_up_policy", true);
  public get coreScalingUpPolicy() {
    return this._coreScalingUpPolicy;
  }
  public putCoreScalingUpPolicy(value: MrscalerAwsCoreScalingUpPolicy[] | cdktf.IResolvable) {
    this._coreScalingUpPolicy.internalValue = value;
  }
  public resetCoreScalingUpPolicy() {
    this._coreScalingUpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreScalingUpPolicyInput() {
    return this._coreScalingUpPolicy.internalValue;
  }

  // instance_weights - computed: false, optional: true, required: false
  private _instanceWeights = new MrscalerAwsInstanceWeightsList(this, "instance_weights", true);
  public get instanceWeights() {
    return this._instanceWeights;
  }
  public putInstanceWeights(value: MrscalerAwsInstanceWeights[] | cdktf.IResolvable) {
    this._instanceWeights.internalValue = value;
  }
  public resetInstanceWeights() {
    this._instanceWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceWeightsInput() {
    return this._instanceWeights.internalValue;
  }

  // master_ebs_block_device - computed: false, optional: true, required: false
  private _masterEbsBlockDevice = new MrscalerAwsMasterEbsBlockDeviceList(this, "master_ebs_block_device", true);
  public get masterEbsBlockDevice() {
    return this._masterEbsBlockDevice;
  }
  public putMasterEbsBlockDevice(value: MrscalerAwsMasterEbsBlockDevice[] | cdktf.IResolvable) {
    this._masterEbsBlockDevice.internalValue = value;
  }
  public resetMasterEbsBlockDevice() {
    this._masterEbsBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterEbsBlockDeviceInput() {
    return this._masterEbsBlockDevice.internalValue;
  }

  // provisioning_timeout - computed: false, optional: true, required: false
  private _provisioningTimeout = new MrscalerAwsProvisioningTimeoutOutputReference(this, "provisioning_timeout");
  public get provisioningTimeout() {
    return this._provisioningTimeout;
  }
  public putProvisioningTimeout(value: MrscalerAwsProvisioningTimeout) {
    this._provisioningTimeout.internalValue = value;
  }
  public resetProvisioningTimeout() {
    this._provisioningTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningTimeoutInput() {
    return this._provisioningTimeout.internalValue;
  }

  // scheduled_task - computed: false, optional: true, required: false
  private _scheduledTask = new MrscalerAwsScheduledTaskList(this, "scheduled_task", true);
  public get scheduledTask() {
    return this._scheduledTask;
  }
  public putScheduledTask(value: MrscalerAwsScheduledTask[] | cdktf.IResolvable) {
    this._scheduledTask.internalValue = value;
  }
  public resetScheduledTask() {
    this._scheduledTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskInput() {
    return this._scheduledTask.internalValue;
  }

  // steps_file - computed: false, optional: true, required: false
  private _stepsFile = new MrscalerAwsStepsFileList(this, "steps_file", true);
  public get stepsFile() {
    return this._stepsFile;
  }
  public putStepsFile(value: MrscalerAwsStepsFile[] | cdktf.IResolvable) {
    this._stepsFile.internalValue = value;
  }
  public resetStepsFile() {
    this._stepsFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsFileInput() {
    return this._stepsFile.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new MrscalerAwsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MrscalerAwsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // task_ebs_block_device - computed: false, optional: true, required: false
  private _taskEbsBlockDevice = new MrscalerAwsTaskEbsBlockDeviceList(this, "task_ebs_block_device", true);
  public get taskEbsBlockDevice() {
    return this._taskEbsBlockDevice;
  }
  public putTaskEbsBlockDevice(value: MrscalerAwsTaskEbsBlockDevice[] | cdktf.IResolvable) {
    this._taskEbsBlockDevice.internalValue = value;
  }
  public resetTaskEbsBlockDevice() {
    this._taskEbsBlockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskEbsBlockDeviceInput() {
    return this._taskEbsBlockDevice.internalValue;
  }

  // task_scaling_down_policy - computed: false, optional: true, required: false
  private _taskScalingDownPolicy = new MrscalerAwsTaskScalingDownPolicyList(this, "task_scaling_down_policy", true);
  public get taskScalingDownPolicy() {
    return this._taskScalingDownPolicy;
  }
  public putTaskScalingDownPolicy(value: MrscalerAwsTaskScalingDownPolicy[] | cdktf.IResolvable) {
    this._taskScalingDownPolicy.internalValue = value;
  }
  public resetTaskScalingDownPolicy() {
    this._taskScalingDownPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskScalingDownPolicyInput() {
    return this._taskScalingDownPolicy.internalValue;
  }

  // task_scaling_up_policy - computed: false, optional: true, required: false
  private _taskScalingUpPolicy = new MrscalerAwsTaskScalingUpPolicyList(this, "task_scaling_up_policy", true);
  public get taskScalingUpPolicy() {
    return this._taskScalingUpPolicy;
  }
  public putTaskScalingUpPolicy(value: MrscalerAwsTaskScalingUpPolicy[] | cdktf.IResolvable) {
    this._taskScalingUpPolicy.internalValue = value;
  }
  public resetTaskScalingUpPolicy() {
    this._taskScalingUpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskScalingUpPolicyInput() {
    return this._taskScalingUpPolicy.internalValue;
  }

  // termination_policies - computed: false, optional: true, required: false
  private _terminationPolicies = new MrscalerAwsTerminationPoliciesList(this, "termination_policies", false);
  public get terminationPolicies() {
    return this._terminationPolicies;
  }
  public putTerminationPolicies(value: MrscalerAwsTerminationPolicies[] | cdktf.IResolvable) {
    this._terminationPolicies.internalValue = value;
  }
  public resetTerminationPolicies() {
    this._terminationPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPoliciesInput() {
    return this._terminationPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktf.stringToTerraform(this._additionalInfo),
      additional_primary_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalPrimarySecurityGroups),
      additional_replica_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalReplicaSecurityGroups),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      core_desired_capacity: cdktf.numberToTerraform(this._coreDesiredCapacity),
      core_ebs_optimized: cdktf.booleanToTerraform(this._coreEbsOptimized),
      core_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._coreInstanceTypes),
      core_lifecycle: cdktf.stringToTerraform(this._coreLifecycle),
      core_max_size: cdktf.numberToTerraform(this._coreMaxSize),
      core_min_size: cdktf.numberToTerraform(this._coreMinSize),
      core_unit: cdktf.stringToTerraform(this._coreUnit),
      custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
      description: cdktf.stringToTerraform(this._description),
      ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
      ec2_key_name: cdktf.stringToTerraform(this._ec2KeyName),
      expose_cluster_id: cdktf.booleanToTerraform(this._exposeClusterId),
      id: cdktf.stringToTerraform(this._id),
      job_flow_role: cdktf.stringToTerraform(this._jobFlowRole),
      keep_job_flow_alive: cdktf.booleanToTerraform(this._keepJobFlowAlive),
      log_uri: cdktf.stringToTerraform(this._logUri),
      managed_primary_security_group: cdktf.stringToTerraform(this._managedPrimarySecurityGroup),
      managed_replica_security_group: cdktf.stringToTerraform(this._managedReplicaSecurityGroup),
      master_ebs_optimized: cdktf.booleanToTerraform(this._masterEbsOptimized),
      master_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masterInstanceTypes),
      master_lifecycle: cdktf.stringToTerraform(this._masterLifecycle),
      master_target: cdktf.numberToTerraform(this._masterTarget),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      repo_upgrade_on_boot: cdktf.stringToTerraform(this._repoUpgradeOnBoot),
      retries: cdktf.numberToTerraform(this._retries),
      security_config: cdktf.stringToTerraform(this._securityConfig),
      service_access_security_group: cdktf.stringToTerraform(this._serviceAccessSecurityGroup),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      strategy: cdktf.stringToTerraform(this._strategy),
      task_desired_capacity: cdktf.numberToTerraform(this._taskDesiredCapacity),
      task_ebs_optimized: cdktf.booleanToTerraform(this._taskEbsOptimized),
      task_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskInstanceTypes),
      task_lifecycle: cdktf.stringToTerraform(this._taskLifecycle),
      task_max_size: cdktf.numberToTerraform(this._taskMaxSize),
      task_min_size: cdktf.numberToTerraform(this._taskMinSize),
      task_unit: cdktf.stringToTerraform(this._taskUnit),
      termination_protected: cdktf.booleanToTerraform(this._terminationProtected),
      visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
      applications: cdktf.listMapper(mrscalerAwsApplicationsToTerraform, true)(this._applications.internalValue),
      bootstrap_actions_file: cdktf.listMapper(mrscalerAwsBootstrapActionsFileToTerraform, true)(this._bootstrapActionsFile.internalValue),
      configurations_file: cdktf.listMapper(mrscalerAwsConfigurationsFileToTerraform, true)(this._configurationsFile.internalValue),
      core_ebs_block_device: cdktf.listMapper(mrscalerAwsCoreEbsBlockDeviceToTerraform, true)(this._coreEbsBlockDevice.internalValue),
      core_scaling_down_policy: cdktf.listMapper(mrscalerAwsCoreScalingDownPolicyToTerraform, true)(this._coreScalingDownPolicy.internalValue),
      core_scaling_up_policy: cdktf.listMapper(mrscalerAwsCoreScalingUpPolicyToTerraform, true)(this._coreScalingUpPolicy.internalValue),
      instance_weights: cdktf.listMapper(mrscalerAwsInstanceWeightsToTerraform, true)(this._instanceWeights.internalValue),
      master_ebs_block_device: cdktf.listMapper(mrscalerAwsMasterEbsBlockDeviceToTerraform, true)(this._masterEbsBlockDevice.internalValue),
      provisioning_timeout: mrscalerAwsProvisioningTimeoutToTerraform(this._provisioningTimeout.internalValue),
      scheduled_task: cdktf.listMapper(mrscalerAwsScheduledTaskToTerraform, true)(this._scheduledTask.internalValue),
      steps_file: cdktf.listMapper(mrscalerAwsStepsFileToTerraform, true)(this._stepsFile.internalValue),
      tags: cdktf.listMapper(mrscalerAwsTagsToTerraform, true)(this._tags.internalValue),
      task_ebs_block_device: cdktf.listMapper(mrscalerAwsTaskEbsBlockDeviceToTerraform, true)(this._taskEbsBlockDevice.internalValue),
      task_scaling_down_policy: cdktf.listMapper(mrscalerAwsTaskScalingDownPolicyToTerraform, true)(this._taskScalingDownPolicy.internalValue),
      task_scaling_up_policy: cdktf.listMapper(mrscalerAwsTaskScalingUpPolicyToTerraform, true)(this._taskScalingUpPolicy.internalValue),
      termination_policies: cdktf.listMapper(mrscalerAwsTerminationPoliciesToTerraform, true)(this._terminationPolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_info: {
        value: cdktf.stringToHclTerraform(this._additionalInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_primary_security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalPrimarySecurityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      additional_replica_security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalReplicaSecurityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_desired_capacity: {
        value: cdktf.numberToHclTerraform(this._coreDesiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_ebs_optimized: {
        value: cdktf.booleanToHclTerraform(this._coreEbsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      core_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._coreInstanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      core_lifecycle: {
        value: cdktf.stringToHclTerraform(this._coreLifecycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_max_size: {
        value: cdktf.numberToHclTerraform(this._coreMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_min_size: {
        value: cdktf.numberToHclTerraform(this._coreMinSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_unit: {
        value: cdktf.stringToHclTerraform(this._coreUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_ami_id: {
        value: cdktf.stringToHclTerraform(this._customAmiId),
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
      ebs_root_volume_size: {
        value: cdktf.numberToHclTerraform(this._ebsRootVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ec2_key_name: {
        value: cdktf.stringToHclTerraform(this._ec2KeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expose_cluster_id: {
        value: cdktf.booleanToHclTerraform(this._exposeClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_flow_role: {
        value: cdktf.stringToHclTerraform(this._jobFlowRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_job_flow_alive: {
        value: cdktf.booleanToHclTerraform(this._keepJobFlowAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_uri: {
        value: cdktf.stringToHclTerraform(this._logUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_primary_security_group: {
        value: cdktf.stringToHclTerraform(this._managedPrimarySecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_replica_security_group: {
        value: cdktf.stringToHclTerraform(this._managedReplicaSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_ebs_optimized: {
        value: cdktf.booleanToHclTerraform(this._masterEbsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._masterInstanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      master_lifecycle: {
        value: cdktf.stringToHclTerraform(this._masterLifecycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_target: {
        value: cdktf.numberToHclTerraform(this._masterTarget),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_label: {
        value: cdktf.stringToHclTerraform(this._releaseLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_upgrade_on_boot: {
        value: cdktf.stringToHclTerraform(this._repoUpgradeOnBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_config: {
        value: cdktf.stringToHclTerraform(this._securityConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_access_security_group: {
        value: cdktf.stringToHclTerraform(this._serviceAccessSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_role: {
        value: cdktf.stringToHclTerraform(this._serviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_desired_capacity: {
        value: cdktf.numberToHclTerraform(this._taskDesiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_ebs_optimized: {
        value: cdktf.booleanToHclTerraform(this._taskEbsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      task_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taskInstanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      task_lifecycle: {
        value: cdktf.stringToHclTerraform(this._taskLifecycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_max_size: {
        value: cdktf.numberToHclTerraform(this._taskMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_min_size: {
        value: cdktf.numberToHclTerraform(this._taskMinSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_unit: {
        value: cdktf.stringToHclTerraform(this._taskUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      termination_protected: {
        value: cdktf.booleanToHclTerraform(this._terminationProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      visible_to_all_users: {
        value: cdktf.booleanToHclTerraform(this._visibleToAllUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      applications: {
        value: cdktf.listMapperHcl(mrscalerAwsApplicationsToHclTerraform, true)(this._applications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsApplicationsList",
      },
      bootstrap_actions_file: {
        value: cdktf.listMapperHcl(mrscalerAwsBootstrapActionsFileToHclTerraform, true)(this._bootstrapActionsFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsBootstrapActionsFileList",
      },
      configurations_file: {
        value: cdktf.listMapperHcl(mrscalerAwsConfigurationsFileToHclTerraform, true)(this._configurationsFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsConfigurationsFileList",
      },
      core_ebs_block_device: {
        value: cdktf.listMapperHcl(mrscalerAwsCoreEbsBlockDeviceToHclTerraform, true)(this._coreEbsBlockDevice.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsCoreEbsBlockDeviceList",
      },
      core_scaling_down_policy: {
        value: cdktf.listMapperHcl(mrscalerAwsCoreScalingDownPolicyToHclTerraform, true)(this._coreScalingDownPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsCoreScalingDownPolicyList",
      },
      core_scaling_up_policy: {
        value: cdktf.listMapperHcl(mrscalerAwsCoreScalingUpPolicyToHclTerraform, true)(this._coreScalingUpPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsCoreScalingUpPolicyList",
      },
      instance_weights: {
        value: cdktf.listMapperHcl(mrscalerAwsInstanceWeightsToHclTerraform, true)(this._instanceWeights.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsInstanceWeightsList",
      },
      master_ebs_block_device: {
        value: cdktf.listMapperHcl(mrscalerAwsMasterEbsBlockDeviceToHclTerraform, true)(this._masterEbsBlockDevice.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsMasterEbsBlockDeviceList",
      },
      provisioning_timeout: {
        value: mrscalerAwsProvisioningTimeoutToHclTerraform(this._provisioningTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrscalerAwsProvisioningTimeoutList",
      },
      scheduled_task: {
        value: cdktf.listMapperHcl(mrscalerAwsScheduledTaskToHclTerraform, true)(this._scheduledTask.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsScheduledTaskList",
      },
      steps_file: {
        value: cdktf.listMapperHcl(mrscalerAwsStepsFileToHclTerraform, true)(this._stepsFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsStepsFileList",
      },
      tags: {
        value: cdktf.listMapperHcl(mrscalerAwsTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsTagsList",
      },
      task_ebs_block_device: {
        value: cdktf.listMapperHcl(mrscalerAwsTaskEbsBlockDeviceToHclTerraform, true)(this._taskEbsBlockDevice.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsTaskEbsBlockDeviceList",
      },
      task_scaling_down_policy: {
        value: cdktf.listMapperHcl(mrscalerAwsTaskScalingDownPolicyToHclTerraform, true)(this._taskScalingDownPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsTaskScalingDownPolicyList",
      },
      task_scaling_up_policy: {
        value: cdktf.listMapperHcl(mrscalerAwsTaskScalingUpPolicyToHclTerraform, true)(this._taskScalingUpPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrscalerAwsTaskScalingUpPolicyList",
      },
      termination_policies: {
        value: cdktf.listMapperHcl(mrscalerAwsTerminationPoliciesToHclTerraform, true)(this._terminationPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrscalerAwsTerminationPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
