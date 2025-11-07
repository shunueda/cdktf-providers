// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Emr - additional_info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#additional_info EmrCluster#additional_info}
  */
  readonly additionalInfo?: string;
  /**
  * Emr - list of applications to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#applications EmrCluster#applications}
  */
  readonly applications?: string;
  /**
  * The ARN of the emrCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#arn EmrCluster#arn}
  */
  readonly arn?: string;
  /**
  * Emr - list of bootstrap_actions to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#bootstrap_actions EmrCluster#bootstrap_actions}
  */
  readonly bootstrapActions?: string;
  /**
  * Emr - list of application configurations to be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#configurations EmrCluster#configurations}
  */
  readonly configurations?: string;
  /**
  * EMR CustomAmiId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}
  */
  readonly customAmiId?: string;
  /**
  * Emr Cluster Ec2 ebs_root_volume_size settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}
  */
  readonly ebsRootVolumeSize?: number;
  /**
  * full_name - Duplo will add a prefix to the name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#full_name EmrCluster#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#id EmrCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Emr Instance Count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#instance_count EmrCluster#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Emr - instance_fleets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#instance_fleets EmrCluster#instance_fleets}
  */
  readonly instanceFleets?: string;
  /**
  * Emr - instance_groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#instance_groups EmrCluster#instance_groups}
  */
  readonly instanceGroups?: string;
  /**
  * job flow id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#job_flow_id EmrCluster#job_flow_id}
  */
  readonly jobFlowId?: string;
  /**
  * Keep Job Flow Alive When No Steps. Emr Cluster will be terminated if true. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}
  */
  readonly keepJobFlowAliveWhenNoSteps?: boolean | cdktf.IResolvable;
  /**
  * S3 bucket path for logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#log_uri EmrCluster#log_uri}
  */
  readonly logUri?: string;
  /**
  * Emr - managed_scaling_policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#managed_scaling_policy EmrCluster#managed_scaling_policy}
  */
  readonly managedScalingPolicy?: string;
  /**
  * Emr MasterInstanceType. Supported InstanceTypes e.g. m4.large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#master_instance_type EmrCluster#master_instance_type}
  */
  readonly masterInstanceType?: string;
  /**
  * The short name of the emrCluster.  Duplo will add a prefix to the name.  You can retrieve the full name from the `fullname` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#name EmrCluster#name}
  */
  readonly name: string;
  /**
  * EMR ReleaseLabel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#release_label EmrCluster#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Emr scale_down_behavior. Specifies the way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}
  */
  readonly scaleDownBehavior?: string;
  /**
  * Emr SlaveInstanceType. Supported InstanceTypes e.g. m4.large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#slave_instance_type EmrCluster#slave_instance_type}
  */
  readonly slaveInstanceType?: string;
  /**
  * The status of the emrCluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#status EmrCluster#status}
  */
  readonly status?: string;
  /**
  * Emr Cluster step_concurrency_level settings. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}
  */
  readonly stepConcurrencyLevel?: number;
  /**
  * Emr - list of steps to be run after cluster is ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#steps EmrCluster#steps}
  */
  readonly steps?: string;
  /**
  * The GUID of the tenant that the emrCluster will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#tenant_id EmrCluster#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Emr termination protection setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#termination_protection EmrCluster#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * Emr Cluster visible to all users settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}
  */
  readonly visibleToAllUsers?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#timeouts EmrCluster#timeouts}
  */
  readonly timeouts?: EmrClusterTimeouts;
}
export interface EmrClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#create EmrCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#delete EmrCluster#delete}
  */
  readonly delete?: string;
}

export function emrClusterTimeoutsToTerraform(struct?: EmrClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function emrClusterTimeoutsToHclTerraform(struct?: EmrClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmrClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster duplocloud_emr_cluster}
*/
export class EmrCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_emr_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrCluster to import
  * @param importFromId The id of the existing EmrCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_emr_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/emr_cluster duplocloud_emr_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EmrClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_emr_cluster',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
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
    this._applications = config.applications;
    this._arn = config.arn;
    this._bootstrapActions = config.bootstrapActions;
    this._configurations = config.configurations;
    this._customAmiId = config.customAmiId;
    this._ebsRootVolumeSize = config.ebsRootVolumeSize;
    this._fullName = config.fullName;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._instanceFleets = config.instanceFleets;
    this._instanceGroups = config.instanceGroups;
    this._jobFlowId = config.jobFlowId;
    this._keepJobFlowAliveWhenNoSteps = config.keepJobFlowAliveWhenNoSteps;
    this._logUri = config.logUri;
    this._managedScalingPolicy = config.managedScalingPolicy;
    this._masterInstanceType = config.masterInstanceType;
    this._name = config.name;
    this._releaseLabel = config.releaseLabel;
    this._scaleDownBehavior = config.scaleDownBehavior;
    this._slaveInstanceType = config.slaveInstanceType;
    this._status = config.status;
    this._stepConcurrencyLevel = config.stepConcurrencyLevel;
    this._steps = config.steps;
    this._tenantId = config.tenantId;
    this._terminationProtection = config.terminationProtection;
    this._visibleToAllUsers = config.visibleToAllUsers;
    this._timeouts.internalValue = config.timeouts;
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

  // additional_info_hash - computed: true, optional: false, required: false
  public get additionalInfoHash() {
    return this.getStringAttribute('additional_info_hash');
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string; 
  public get applications() {
    return this.getStringAttribute('applications');
  }
  public set applications(value: string) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // applications_hash - computed: true, optional: false, required: false
  public get applicationsHash() {
    return this.getStringAttribute('applications_hash');
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // bootstrap_actions - computed: false, optional: true, required: false
  private _bootstrapActions?: string; 
  public get bootstrapActions() {
    return this.getStringAttribute('bootstrap_actions');
  }
  public set bootstrapActions(value: string) {
    this._bootstrapActions = value;
  }
  public resetBootstrapActions() {
    this._bootstrapActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapActionsInput() {
    return this._bootstrapActions;
  }

  // bootstrap_actions_hash - computed: true, optional: false, required: false
  public get bootstrapActionsHash() {
    return this.getStringAttribute('bootstrap_actions_hash');
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations?: string; 
  public get configurations() {
    return this.getStringAttribute('configurations');
  }
  public set configurations(value: string) {
    this._configurations = value;
  }
  public resetConfigurations() {
    this._configurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations;
  }

  // configurations_hash - computed: true, optional: false, required: false
  public get configurationsHash() {
    return this.getStringAttribute('configurations_hash');
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

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_fleets - computed: false, optional: true, required: false
  private _instanceFleets?: string; 
  public get instanceFleets() {
    return this.getStringAttribute('instance_fleets');
  }
  public set instanceFleets(value: string) {
    this._instanceFleets = value;
  }
  public resetInstanceFleets() {
    this._instanceFleets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFleetsInput() {
    return this._instanceFleets;
  }

  // instance_fleets_hash - computed: true, optional: false, required: false
  public get instanceFleetsHash() {
    return this.getStringAttribute('instance_fleets_hash');
  }

  // instance_groups - computed: false, optional: true, required: false
  private _instanceGroups?: string; 
  public get instanceGroups() {
    return this.getStringAttribute('instance_groups');
  }
  public set instanceGroups(value: string) {
    this._instanceGroups = value;
  }
  public resetInstanceGroups() {
    this._instanceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupsInput() {
    return this._instanceGroups;
  }

  // instance_groups_hash - computed: true, optional: false, required: false
  public get instanceGroupsHash() {
    return this.getStringAttribute('instance_groups_hash');
  }

  // job_flow_id - computed: true, optional: true, required: false
  private _jobFlowId?: string; 
  public get jobFlowId() {
    return this.getStringAttribute('job_flow_id');
  }
  public set jobFlowId(value: string) {
    this._jobFlowId = value;
  }
  public resetJobFlowId() {
    this._jobFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobFlowIdInput() {
    return this._jobFlowId;
  }

  // keep_job_flow_alive_when_no_steps - computed: false, optional: true, required: false
  private _keepJobFlowAliveWhenNoSteps?: boolean | cdktf.IResolvable; 
  public get keepJobFlowAliveWhenNoSteps() {
    return this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
  }
  public set keepJobFlowAliveWhenNoSteps(value: boolean | cdktf.IResolvable) {
    this._keepJobFlowAliveWhenNoSteps = value;
  }
  public resetKeepJobFlowAliveWhenNoSteps() {
    this._keepJobFlowAliveWhenNoSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepJobFlowAliveWhenNoStepsInput() {
    return this._keepJobFlowAliveWhenNoSteps;
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

  // managed_scaling_policy - computed: false, optional: true, required: false
  private _managedScalingPolicy?: string; 
  public get managedScalingPolicy() {
    return this.getStringAttribute('managed_scaling_policy');
  }
  public set managedScalingPolicy(value: string) {
    this._managedScalingPolicy = value;
  }
  public resetManagedScalingPolicy() {
    this._managedScalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedScalingPolicyInput() {
    return this._managedScalingPolicy;
  }

  // managed_scaling_policy_hash - computed: true, optional: false, required: false
  public get managedScalingPolicyHash() {
    return this.getStringAttribute('managed_scaling_policy_hash');
  }

  // master_instance_type - computed: false, optional: true, required: false
  private _masterInstanceType?: string; 
  public get masterInstanceType() {
    return this.getStringAttribute('master_instance_type');
  }
  public set masterInstanceType(value: string) {
    this._masterInstanceType = value;
  }
  public resetMasterInstanceType() {
    this._masterInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceTypeInput() {
    return this._masterInstanceType;
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

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // scale_down_behavior - computed: false, optional: true, required: false
  private _scaleDownBehavior?: string; 
  public get scaleDownBehavior() {
    return this.getStringAttribute('scale_down_behavior');
  }
  public set scaleDownBehavior(value: string) {
    this._scaleDownBehavior = value;
  }
  public resetScaleDownBehavior() {
    this._scaleDownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownBehaviorInput() {
    return this._scaleDownBehavior;
  }

  // slave_instance_type - computed: false, optional: true, required: false
  private _slaveInstanceType?: string; 
  public get slaveInstanceType() {
    return this.getStringAttribute('slave_instance_type');
  }
  public set slaveInstanceType(value: string) {
    this._slaveInstanceType = value;
  }
  public resetSlaveInstanceType() {
    this._slaveInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveInstanceTypeInput() {
    return this._slaveInstanceType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // step_concurrency_level - computed: false, optional: true, required: false
  private _stepConcurrencyLevel?: number; 
  public get stepConcurrencyLevel() {
    return this.getNumberAttribute('step_concurrency_level');
  }
  public set stepConcurrencyLevel(value: number) {
    this._stepConcurrencyLevel = value;
  }
  public resetStepConcurrencyLevel() {
    this._stepConcurrencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepConcurrencyLevelInput() {
    return this._stepConcurrencyLevel;
  }

  // steps - computed: false, optional: true, required: false
  private _steps?: string; 
  public get steps() {
    return this.getStringAttribute('steps');
  }
  public set steps(value: string) {
    this._steps = value;
  }
  public resetSteps() {
    this._steps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps;
  }

  // steps_hash - computed: true, optional: false, required: false
  public get stepsHash() {
    return this.getStringAttribute('steps_hash');
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // termination_protection - computed: false, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EmrClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EmrClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktf.stringToTerraform(this._additionalInfo),
      applications: cdktf.stringToTerraform(this._applications),
      arn: cdktf.stringToTerraform(this._arn),
      bootstrap_actions: cdktf.stringToTerraform(this._bootstrapActions),
      configurations: cdktf.stringToTerraform(this._configurations),
      custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
      ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_fleets: cdktf.stringToTerraform(this._instanceFleets),
      instance_groups: cdktf.stringToTerraform(this._instanceGroups),
      job_flow_id: cdktf.stringToTerraform(this._jobFlowId),
      keep_job_flow_alive_when_no_steps: cdktf.booleanToTerraform(this._keepJobFlowAliveWhenNoSteps),
      log_uri: cdktf.stringToTerraform(this._logUri),
      managed_scaling_policy: cdktf.stringToTerraform(this._managedScalingPolicy),
      master_instance_type: cdktf.stringToTerraform(this._masterInstanceType),
      name: cdktf.stringToTerraform(this._name),
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      scale_down_behavior: cdktf.stringToTerraform(this._scaleDownBehavior),
      slave_instance_type: cdktf.stringToTerraform(this._slaveInstanceType),
      status: cdktf.stringToTerraform(this._status),
      step_concurrency_level: cdktf.numberToTerraform(this._stepConcurrencyLevel),
      steps: cdktf.stringToTerraform(this._steps),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
      timeouts: emrClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      applications: {
        value: cdktf.stringToHclTerraform(this._applications),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_actions: {
        value: cdktf.stringToHclTerraform(this._bootstrapActions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configurations: {
        value: cdktf.stringToHclTerraform(this._configurations),
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
      ebs_root_volume_size: {
        value: cdktf.numberToHclTerraform(this._ebsRootVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_fleets: {
        value: cdktf.stringToHclTerraform(this._instanceFleets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_groups: {
        value: cdktf.stringToHclTerraform(this._instanceGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_flow_id: {
        value: cdktf.stringToHclTerraform(this._jobFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_job_flow_alive_when_no_steps: {
        value: cdktf.booleanToHclTerraform(this._keepJobFlowAliveWhenNoSteps),
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
      managed_scaling_policy: {
        value: cdktf.stringToHclTerraform(this._managedScalingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_instance_type: {
        value: cdktf.stringToHclTerraform(this._masterInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      scale_down_behavior: {
        value: cdktf.stringToHclTerraform(this._scaleDownBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slave_instance_type: {
        value: cdktf.stringToHclTerraform(this._slaveInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      step_concurrency_level: {
        value: cdktf.numberToHclTerraform(this._stepConcurrencyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      steps: {
        value: cdktf.stringToHclTerraform(this._steps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
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
      timeouts: {
        value: emrClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EmrClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
