// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsDeployStageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#are_hooks_enabled DevopsDeployStage#are_hooks_enabled}
  */
  readonly areHooksEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#command_spec_deploy_artifact_id DevopsDeployStage#command_spec_deploy_artifact_id}
  */
  readonly commandSpecDeployArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#compute_instance_group_blue_green_deployment_deploy_stage_id DevopsDeployStage#compute_instance_group_blue_green_deployment_deploy_stage_id}
  */
  readonly computeInstanceGroupBlueGreenDeploymentDeployStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_deploy_stage_id}
  */
  readonly computeInstanceGroupCanaryDeployStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#compute_instance_group_canary_traffic_shift_deploy_stage_id DevopsDeployStage#compute_instance_group_canary_traffic_shift_deploy_stage_id}
  */
  readonly computeInstanceGroupCanaryTrafficShiftDeployStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#compute_instance_group_deploy_environment_id DevopsDeployStage#compute_instance_group_deploy_environment_id}
  */
  readonly computeInstanceGroupDeployEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#config DevopsDeployStage#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#defined_tags DevopsDeployStage#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#deploy_artifact_id DevopsDeployStage#deploy_artifact_id}
  */
  readonly deployArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#deploy_artifact_ids DevopsDeployStage#deploy_artifact_ids}
  */
  readonly deployArtifactIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#deploy_environment_id_a DevopsDeployStage#deploy_environment_id_a}
  */
  readonly deployEnvironmentIdA?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#deploy_environment_id_b DevopsDeployStage#deploy_environment_id_b}
  */
  readonly deployEnvironmentIdB?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#deploy_pipeline_id DevopsDeployStage#deploy_pipeline_id}
  */
  readonly deployPipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#deploy_stage_type DevopsDeployStage#deploy_stage_type}
  */
  readonly deployStageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#deployment_spec_deploy_artifact_id DevopsDeployStage#deployment_spec_deploy_artifact_id}
  */
  readonly deploymentSpecDeployArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#description DevopsDeployStage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#display_name DevopsDeployStage#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#docker_image_deploy_artifact_id DevopsDeployStage#docker_image_deploy_artifact_id}
  */
  readonly dockerImageDeployArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#freeform_tags DevopsDeployStage#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#function_deploy_environment_id DevopsDeployStage#function_deploy_environment_id}
  */
  readonly functionDeployEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#function_timeout_in_seconds DevopsDeployStage#function_timeout_in_seconds}
  */
  readonly functionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#helm_chart_deploy_artifact_id DevopsDeployStage#helm_chart_deploy_artifact_id}
  */
  readonly helmChartDeployArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#helm_command_artifact_ids DevopsDeployStage#helm_command_artifact_ids}
  */
  readonly helmCommandArtifactIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#is_async DevopsDeployStage#is_async}
  */
  readonly isAsync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#is_debug_enabled DevopsDeployStage#is_debug_enabled}
  */
  readonly isDebugEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#is_force_enabled DevopsDeployStage#is_force_enabled}
  */
  readonly isForceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#is_uninstall_on_stage_delete DevopsDeployStage#is_uninstall_on_stage_delete}
  */
  readonly isUninstallOnStageDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#is_validation_enabled DevopsDeployStage#is_validation_enabled}
  */
  readonly isValidationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#kubernetes_manifest_deploy_artifact_ids DevopsDeployStage#kubernetes_manifest_deploy_artifact_ids}
  */
  readonly kubernetesManifestDeployArtifactIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#max_history DevopsDeployStage#max_history}
  */
  readonly maxHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#max_memory_in_mbs DevopsDeployStage#max_memory_in_mbs}
  */
  readonly maxMemoryInMbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#oke_blue_green_deploy_stage_id DevopsDeployStage#oke_blue_green_deploy_stage_id}
  */
  readonly okeBlueGreenDeployStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#oke_canary_deploy_stage_id DevopsDeployStage#oke_canary_deploy_stage_id}
  */
  readonly okeCanaryDeployStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#oke_canary_traffic_shift_deploy_stage_id DevopsDeployStage#oke_canary_traffic_shift_deploy_stage_id}
  */
  readonly okeCanaryTrafficShiftDeployStageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#oke_cluster_deploy_environment_id DevopsDeployStage#oke_cluster_deploy_environment_id}
  */
  readonly okeClusterDeployEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#purpose DevopsDeployStage#purpose}
  */
  readonly purpose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#release_name DevopsDeployStage#release_name}
  */
  readonly releaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#should_cleanup_on_fail DevopsDeployStage#should_cleanup_on_fail}
  */
  readonly shouldCleanupOnFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#should_not_wait DevopsDeployStage#should_not_wait}
  */
  readonly shouldNotWait?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#should_reset_values DevopsDeployStage#should_reset_values}
  */
  readonly shouldResetValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#should_reuse_values DevopsDeployStage#should_reuse_values}
  */
  readonly shouldReuseValues?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#should_skip_crds DevopsDeployStage#should_skip_crds}
  */
  readonly shouldSkipCrds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#should_skip_render_subchart_notes DevopsDeployStage#should_skip_render_subchart_notes}
  */
  readonly shouldSkipRenderSubchartNotes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#timeout_in_seconds DevopsDeployStage#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#traffic_shift_target DevopsDeployStage#traffic_shift_target}
  */
  readonly trafficShiftTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#values_artifact_ids DevopsDeployStage#values_artifact_ids}
  */
  readonly valuesArtifactIds?: string[];
  /**
  * approval_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#approval_policy DevopsDeployStage#approval_policy}
  */
  readonly approvalPolicy?: DevopsDeployStageApprovalPolicy;
  /**
  * blue_backend_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#blue_backend_ips DevopsDeployStage#blue_backend_ips}
  */
  readonly blueBackendIps?: DevopsDeployStageBlueBackendIps;
  /**
  * blue_green_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#blue_green_strategy DevopsDeployStage#blue_green_strategy}
  */
  readonly blueGreenStrategy?: DevopsDeployStageBlueGreenStrategy;
  /**
  * canary_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#canary_strategy DevopsDeployStage#canary_strategy}
  */
  readonly canaryStrategy?: DevopsDeployStageCanaryStrategy;
  /**
  * container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#container_config DevopsDeployStage#container_config}
  */
  readonly containerConfig?: DevopsDeployStageContainerConfig;
  /**
  * deploy_stage_predecessor_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#deploy_stage_predecessor_collection DevopsDeployStage#deploy_stage_predecessor_collection}
  */
  readonly deployStagePredecessorCollection: DevopsDeployStageDeployStagePredecessorCollection;
  /**
  * failure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#failure_policy DevopsDeployStage#failure_policy}
  */
  readonly failurePolicy?: DevopsDeployStageFailurePolicy;
  /**
  * green_backend_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#green_backend_ips DevopsDeployStage#green_backend_ips}
  */
  readonly greenBackendIps?: DevopsDeployStageGreenBackendIps;
  /**
  * load_balancer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#load_balancer_config DevopsDeployStage#load_balancer_config}
  */
  readonly loadBalancerConfig?: DevopsDeployStageLoadBalancerConfig;
  /**
  * production_load_balancer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#production_load_balancer_config DevopsDeployStage#production_load_balancer_config}
  */
  readonly productionLoadBalancerConfig?: DevopsDeployStageProductionLoadBalancerConfig;
  /**
  * rollback_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#rollback_policy DevopsDeployStage#rollback_policy}
  */
  readonly rollbackPolicy?: DevopsDeployStageRollbackPolicy;
  /**
  * rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#rollout_policy DevopsDeployStage#rollout_policy}
  */
  readonly rolloutPolicy?: DevopsDeployStageRolloutPolicy;
  /**
  * set_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#set_string DevopsDeployStage#set_string}
  */
  readonly setString?: DevopsDeployStageSetString;
  /**
  * set_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#set_values DevopsDeployStage#set_values}
  */
  readonly setValues?: DevopsDeployStageSetValues;
  /**
  * test_load_balancer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#test_load_balancer_config DevopsDeployStage#test_load_balancer_config}
  */
  readonly testLoadBalancerConfig?: DevopsDeployStageTestLoadBalancerConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#timeouts DevopsDeployStage#timeouts}
  */
  readonly timeouts?: DevopsDeployStageTimeouts;
  /**
  * wait_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#wait_criteria DevopsDeployStage#wait_criteria}
  */
  readonly waitCriteria?: DevopsDeployStageWaitCriteria;
}
export interface DevopsDeployStageApprovalPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#approval_policy_type DevopsDeployStage#approval_policy_type}
  */
  readonly approvalPolicyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#number_of_approvals_required DevopsDeployStage#number_of_approvals_required}
  */
  readonly numberOfApprovalsRequired: number;
}

export function devopsDeployStageApprovalPolicyToTerraform(struct?: DevopsDeployStageApprovalPolicyOutputReference | DevopsDeployStageApprovalPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval_policy_type: cdktf.stringToTerraform(struct!.approvalPolicyType),
    number_of_approvals_required: cdktf.numberToTerraform(struct!.numberOfApprovalsRequired),
  }
}


export function devopsDeployStageApprovalPolicyToHclTerraform(struct?: DevopsDeployStageApprovalPolicyOutputReference | DevopsDeployStageApprovalPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.approvalPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_approvals_required: {
      value: cdktf.numberToHclTerraform(struct!.numberOfApprovalsRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageApprovalPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageApprovalPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalPolicyType = this._approvalPolicyType;
    }
    if (this._numberOfApprovalsRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfApprovalsRequired = this._numberOfApprovalsRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageApprovalPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approvalPolicyType = undefined;
      this._numberOfApprovalsRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approvalPolicyType = value.approvalPolicyType;
      this._numberOfApprovalsRequired = value.numberOfApprovalsRequired;
    }
  }

  // approval_policy_type - computed: false, optional: false, required: true
  private _approvalPolicyType?: string; 
  public get approvalPolicyType() {
    return this.getStringAttribute('approval_policy_type');
  }
  public set approvalPolicyType(value: string) {
    this._approvalPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalPolicyTypeInput() {
    return this._approvalPolicyType;
  }

  // number_of_approvals_required - computed: false, optional: false, required: true
  private _numberOfApprovalsRequired?: number; 
  public get numberOfApprovalsRequired() {
    return this.getNumberAttribute('number_of_approvals_required');
  }
  public set numberOfApprovalsRequired(value: number) {
    this._numberOfApprovalsRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfApprovalsRequiredInput() {
    return this._numberOfApprovalsRequired;
  }
}
export interface DevopsDeployStageBlueBackendIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}
  */
  readonly items?: string[];
}

export function devopsDeployStageBlueBackendIpsToTerraform(struct?: DevopsDeployStageBlueBackendIpsOutputReference | DevopsDeployStageBlueBackendIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function devopsDeployStageBlueBackendIpsToHclTerraform(struct?: DevopsDeployStageBlueBackendIpsOutputReference | DevopsDeployStageBlueBackendIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageBlueBackendIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageBlueBackendIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageBlueBackendIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DevopsDeployStageBlueGreenStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}
  */
  readonly ingressName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#namespace_a DevopsDeployStage#namespace_a}
  */
  readonly namespaceA: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#namespace_b DevopsDeployStage#namespace_b}
  */
  readonly namespaceB: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}
  */
  readonly strategyType: string;
}

export function devopsDeployStageBlueGreenStrategyToTerraform(struct?: DevopsDeployStageBlueGreenStrategyOutputReference | DevopsDeployStageBlueGreenStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_name: cdktf.stringToTerraform(struct!.ingressName),
    namespace_a: cdktf.stringToTerraform(struct!.namespaceA),
    namespace_b: cdktf.stringToTerraform(struct!.namespaceB),
    strategy_type: cdktf.stringToTerraform(struct!.strategyType),
  }
}


export function devopsDeployStageBlueGreenStrategyToHclTerraform(struct?: DevopsDeployStageBlueGreenStrategyOutputReference | DevopsDeployStageBlueGreenStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_a: {
      value: cdktf.stringToHclTerraform(struct!.namespaceA),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_b: {
      value: cdktf.stringToHclTerraform(struct!.namespaceB),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_type: {
      value: cdktf.stringToHclTerraform(struct!.strategyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageBlueGreenStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageBlueGreenStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressName = this._ingressName;
    }
    if (this._namespaceA !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceA = this._namespaceA;
    }
    if (this._namespaceB !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceB = this._namespaceB;
    }
    if (this._strategyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyType = this._strategyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageBlueGreenStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingressName = undefined;
      this._namespaceA = undefined;
      this._namespaceB = undefined;
      this._strategyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingressName = value.ingressName;
      this._namespaceA = value.namespaceA;
      this._namespaceB = value.namespaceB;
      this._strategyType = value.strategyType;
    }
  }

  // ingress_name - computed: false, optional: false, required: true
  private _ingressName?: string; 
  public get ingressName() {
    return this.getStringAttribute('ingress_name');
  }
  public set ingressName(value: string) {
    this._ingressName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressNameInput() {
    return this._ingressName;
  }

  // namespace_a - computed: false, optional: false, required: true
  private _namespaceA?: string; 
  public get namespaceA() {
    return this.getStringAttribute('namespace_a');
  }
  public set namespaceA(value: string) {
    this._namespaceA = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceAInput() {
    return this._namespaceA;
  }

  // namespace_b - computed: false, optional: false, required: true
  private _namespaceB?: string; 
  public get namespaceB() {
    return this.getStringAttribute('namespace_b');
  }
  public set namespaceB(value: string) {
    this._namespaceB = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceBInput() {
    return this._namespaceB;
  }

  // strategy_type - computed: false, optional: false, required: true
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }
}
export interface DevopsDeployStageCanaryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#ingress_name DevopsDeployStage#ingress_name}
  */
  readonly ingressName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#namespace DevopsDeployStage#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#strategy_type DevopsDeployStage#strategy_type}
  */
  readonly strategyType: string;
}

export function devopsDeployStageCanaryStrategyToTerraform(struct?: DevopsDeployStageCanaryStrategyOutputReference | DevopsDeployStageCanaryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_name: cdktf.stringToTerraform(struct!.ingressName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    strategy_type: cdktf.stringToTerraform(struct!.strategyType),
  }
}


export function devopsDeployStageCanaryStrategyToHclTerraform(struct?: DevopsDeployStageCanaryStrategyOutputReference | DevopsDeployStageCanaryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressName),
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
    strategy_type: {
      value: cdktf.stringToHclTerraform(struct!.strategyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageCanaryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageCanaryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressName = this._ingressName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._strategyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyType = this._strategyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageCanaryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingressName = undefined;
      this._namespace = undefined;
      this._strategyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingressName = value.ingressName;
      this._namespace = value.namespace;
      this._strategyType = value.strategyType;
    }
  }

  // ingress_name - computed: false, optional: false, required: true
  private _ingressName?: string; 
  public get ingressName() {
    return this.getStringAttribute('ingress_name');
  }
  public set ingressName(value: string) {
    this._ingressName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressNameInput() {
    return this._ingressName;
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

  // strategy_type - computed: false, optional: false, required: true
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }
}
export interface DevopsDeployStageContainerConfigNetworkChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#network_channel_type DevopsDeployStage#network_channel_type}
  */
  readonly networkChannelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#nsg_ids DevopsDeployStage#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#subnet_id DevopsDeployStage#subnet_id}
  */
  readonly subnetId: string;
}

export function devopsDeployStageContainerConfigNetworkChannelToTerraform(struct?: DevopsDeployStageContainerConfigNetworkChannelOutputReference | DevopsDeployStageContainerConfigNetworkChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_channel_type: cdktf.stringToTerraform(struct!.networkChannelType),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function devopsDeployStageContainerConfigNetworkChannelToHclTerraform(struct?: DevopsDeployStageContainerConfigNetworkChannelOutputReference | DevopsDeployStageContainerConfigNetworkChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_channel_type: {
      value: cdktf.stringToHclTerraform(struct!.networkChannelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageContainerConfigNetworkChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageContainerConfigNetworkChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkChannelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkChannelType = this._networkChannelType;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageContainerConfigNetworkChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkChannelType = undefined;
      this._nsgIds = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkChannelType = value.networkChannelType;
      this._nsgIds = value.nsgIds;
      this._subnetId = value.subnetId;
    }
  }

  // network_channel_type - computed: false, optional: false, required: true
  private _networkChannelType?: string; 
  public get networkChannelType() {
    return this.getStringAttribute('network_channel_type');
  }
  public set networkChannelType(value: string) {
    this._networkChannelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkChannelTypeInput() {
    return this._networkChannelType;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface DevopsDeployStageContainerConfigShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#memory_in_gbs DevopsDeployStage#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#ocpus DevopsDeployStage#ocpus}
  */
  readonly ocpus: number;
}

export function devopsDeployStageContainerConfigShapeConfigToTerraform(struct?: DevopsDeployStageContainerConfigShapeConfigOutputReference | DevopsDeployStageContainerConfigShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function devopsDeployStageContainerConfigShapeConfigToHclTerraform(struct?: DevopsDeployStageContainerConfigShapeConfigOutputReference | DevopsDeployStageContainerConfigShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageContainerConfigShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageContainerConfigShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageContainerConfigShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: false, optional: false, required: true
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DevopsDeployStageContainerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#availability_domain DevopsDeployStage#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#compartment_id DevopsDeployStage#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#container_config_type DevopsDeployStage#container_config_type}
  */
  readonly containerConfigType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#shape_name DevopsDeployStage#shape_name}
  */
  readonly shapeName: string;
  /**
  * network_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#network_channel DevopsDeployStage#network_channel}
  */
  readonly networkChannel: DevopsDeployStageContainerConfigNetworkChannel;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#shape_config DevopsDeployStage#shape_config}
  */
  readonly shapeConfig: DevopsDeployStageContainerConfigShapeConfig;
}

export function devopsDeployStageContainerConfigToTerraform(struct?: DevopsDeployStageContainerConfigOutputReference | DevopsDeployStageContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    container_config_type: cdktf.stringToTerraform(struct!.containerConfigType),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
    network_channel: devopsDeployStageContainerConfigNetworkChannelToTerraform(struct!.networkChannel),
    shape_config: devopsDeployStageContainerConfigShapeConfigToTerraform(struct!.shapeConfig),
  }
}


export function devopsDeployStageContainerConfigToHclTerraform(struct?: DevopsDeployStageContainerConfigOutputReference | DevopsDeployStageContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_config_type: {
      value: cdktf.stringToHclTerraform(struct!.containerConfigType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_name: {
      value: cdktf.stringToHclTerraform(struct!.shapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_channel: {
      value: devopsDeployStageContainerConfigNetworkChannelToHclTerraform(struct!.networkChannel),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeployStageContainerConfigNetworkChannelList",
    },
    shape_config: {
      value: devopsDeployStageContainerConfigShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeployStageContainerConfigShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageContainerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageContainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._containerConfigType !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfigType = this._containerConfigType;
    }
    if (this._shapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeName = this._shapeName;
    }
    if (this._networkChannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkChannel = this._networkChannel?.internalValue;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._compartmentId = undefined;
      this._containerConfigType = undefined;
      this._shapeName = undefined;
      this._networkChannel.internalValue = undefined;
      this._shapeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._compartmentId = value.compartmentId;
      this._containerConfigType = value.containerConfigType;
      this._shapeName = value.shapeName;
      this._networkChannel.internalValue = value.networkChannel;
      this._shapeConfig.internalValue = value.shapeConfig;
    }
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // container_config_type - computed: false, optional: false, required: true
  private _containerConfigType?: string; 
  public get containerConfigType() {
    return this.getStringAttribute('container_config_type');
  }
  public set containerConfigType(value: string) {
    this._containerConfigType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigTypeInput() {
    return this._containerConfigType;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // network_channel - computed: false, optional: false, required: true
  private _networkChannel = new DevopsDeployStageContainerConfigNetworkChannelOutputReference(this, "network_channel");
  public get networkChannel() {
    return this._networkChannel;
  }
  public putNetworkChannel(value: DevopsDeployStageContainerConfigNetworkChannel) {
    this._networkChannel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkChannelInput() {
    return this._networkChannel.internalValue;
  }

  // shape_config - computed: false, optional: false, required: true
  private _shapeConfig = new DevopsDeployStageContainerConfigShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: DevopsDeployStageContainerConfigShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }
}
export interface DevopsDeployStageDeployStagePredecessorCollectionItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#id DevopsDeployStage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function devopsDeployStageDeployStagePredecessorCollectionItemsToTerraform(struct?: DevopsDeployStageDeployStagePredecessorCollectionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function devopsDeployStageDeployStagePredecessorCollectionItemsToHclTerraform(struct?: DevopsDeployStageDeployStagePredecessorCollectionItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeployStageDeployStagePredecessorCollectionItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageDeployStagePredecessorCollectionItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DevopsDeployStageDeployStagePredecessorCollectionItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsDeployStageDeployStagePredecessorCollectionItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference {
    return new DevopsDeployStageDeployStagePredecessorCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeployStageDeployStagePredecessorCollection {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}
  */
  readonly items: DevopsDeployStageDeployStagePredecessorCollectionItems[] | cdktf.IResolvable;
}

export function devopsDeployStageDeployStagePredecessorCollectionToTerraform(struct?: DevopsDeployStageDeployStagePredecessorCollectionOutputReference | DevopsDeployStageDeployStagePredecessorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsDeployStageDeployStagePredecessorCollectionItemsToTerraform, true)(struct!.items),
  }
}


export function devopsDeployStageDeployStagePredecessorCollectionToHclTerraform(struct?: DevopsDeployStageDeployStagePredecessorCollectionOutputReference | DevopsDeployStageDeployStagePredecessorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsDeployStageDeployStagePredecessorCollectionItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeployStageDeployStagePredecessorCollectionItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageDeployStagePredecessorCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageDeployStagePredecessorCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageDeployStagePredecessorCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DevopsDeployStageDeployStagePredecessorCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsDeployStageDeployStagePredecessorCollectionItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DevopsDeployStageFailurePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#failure_count DevopsDeployStage#failure_count}
  */
  readonly failureCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#failure_percentage DevopsDeployStage#failure_percentage}
  */
  readonly failurePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}
  */
  readonly policyType: string;
}

export function devopsDeployStageFailurePolicyToTerraform(struct?: DevopsDeployStageFailurePolicyOutputReference | DevopsDeployStageFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_count: cdktf.numberToTerraform(struct!.failureCount),
    failure_percentage: cdktf.numberToTerraform(struct!.failurePercentage),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function devopsDeployStageFailurePolicyToHclTerraform(struct?: DevopsDeployStageFailurePolicyOutputReference | DevopsDeployStageFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_count: {
      value: cdktf.numberToHclTerraform(struct!.failureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_percentage: {
      value: cdktf.numberToHclTerraform(struct!.failurePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageFailurePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageFailurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCount = this._failureCount;
    }
    if (this._failurePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePercentage = this._failurePercentage;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageFailurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureCount = undefined;
      this._failurePercentage = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureCount = value.failureCount;
      this._failurePercentage = value.failurePercentage;
      this._policyType = value.policyType;
    }
  }

  // failure_count - computed: true, optional: true, required: false
  private _failureCount?: number; 
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }
  public set failureCount(value: number) {
    this._failureCount = value;
  }
  public resetFailureCount() {
    this._failureCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountInput() {
    return this._failureCount;
  }

  // failure_percentage - computed: true, optional: true, required: false
  private _failurePercentage?: number; 
  public get failurePercentage() {
    return this.getNumberAttribute('failure_percentage');
  }
  public set failurePercentage(value: number) {
    this._failurePercentage = value;
  }
  public resetFailurePercentage() {
    this._failurePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePercentageInput() {
    return this._failurePercentage;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface DevopsDeployStageGreenBackendIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}
  */
  readonly items?: string[];
}

export function devopsDeployStageGreenBackendIpsToTerraform(struct?: DevopsDeployStageGreenBackendIpsOutputReference | DevopsDeployStageGreenBackendIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}


export function devopsDeployStageGreenBackendIpsToHclTerraform(struct?: DevopsDeployStageGreenBackendIpsOutputReference | DevopsDeployStageGreenBackendIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.items),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageGreenBackendIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageGreenBackendIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageGreenBackendIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface DevopsDeployStageLoadBalancerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}
  */
  readonly backendPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}
  */
  readonly listenerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}
  */
  readonly loadBalancerId?: string;
}

export function devopsDeployStageLoadBalancerConfigToTerraform(struct?: DevopsDeployStageLoadBalancerConfigOutputReference | DevopsDeployStageLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    listener_name: cdktf.stringToTerraform(struct!.listenerName),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
  }
}


export function devopsDeployStageLoadBalancerConfigToHclTerraform(struct?: DevopsDeployStageLoadBalancerConfigOutputReference | DevopsDeployStageLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_port: {
      value: cdktf.numberToHclTerraform(struct!.backendPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listener_name: {
      value: cdktf.stringToHclTerraform(struct!.listenerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageLoadBalancerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageLoadBalancerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPort = this._backendPort;
    }
    if (this._listenerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerName = this._listenerName;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageLoadBalancerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendPort = undefined;
      this._listenerName = undefined;
      this._loadBalancerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendPort = value.backendPort;
      this._listenerName = value.listenerName;
      this._loadBalancerId = value.loadBalancerId;
    }
  }

  // backend_port - computed: true, optional: true, required: false
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  public resetBackendPort() {
    this._backendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // listener_name - computed: true, optional: true, required: false
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  public resetListenerName() {
    this._listenerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // load_balancer_id - computed: true, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DevopsDeployStageProductionLoadBalancerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}
  */
  readonly backendPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}
  */
  readonly listenerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}
  */
  readonly loadBalancerId?: string;
}

export function devopsDeployStageProductionLoadBalancerConfigToTerraform(struct?: DevopsDeployStageProductionLoadBalancerConfigOutputReference | DevopsDeployStageProductionLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    listener_name: cdktf.stringToTerraform(struct!.listenerName),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
  }
}


export function devopsDeployStageProductionLoadBalancerConfigToHclTerraform(struct?: DevopsDeployStageProductionLoadBalancerConfigOutputReference | DevopsDeployStageProductionLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_port: {
      value: cdktf.numberToHclTerraform(struct!.backendPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listener_name: {
      value: cdktf.stringToHclTerraform(struct!.listenerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageProductionLoadBalancerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageProductionLoadBalancerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPort = this._backendPort;
    }
    if (this._listenerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerName = this._listenerName;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageProductionLoadBalancerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendPort = undefined;
      this._listenerName = undefined;
      this._loadBalancerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendPort = value.backendPort;
      this._listenerName = value.listenerName;
      this._loadBalancerId = value.loadBalancerId;
    }
  }

  // backend_port - computed: true, optional: true, required: false
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  public resetBackendPort() {
    this._backendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // listener_name - computed: true, optional: true, required: false
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  public resetListenerName() {
    this._listenerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // load_balancer_id - computed: true, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DevopsDeployStageRollbackPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}
  */
  readonly policyType?: string;
}

export function devopsDeployStageRollbackPolicyToTerraform(struct?: DevopsDeployStageRollbackPolicyOutputReference | DevopsDeployStageRollbackPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function devopsDeployStageRollbackPolicyToHclTerraform(struct?: DevopsDeployStageRollbackPolicyOutputReference | DevopsDeployStageRollbackPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageRollbackPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageRollbackPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageRollbackPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyType = value.policyType;
    }
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface DevopsDeployStageRolloutPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#batch_count DevopsDeployStage#batch_count}
  */
  readonly batchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#batch_delay_in_seconds DevopsDeployStage#batch_delay_in_seconds}
  */
  readonly batchDelayInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#batch_percentage DevopsDeployStage#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#policy_type DevopsDeployStage#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#ramp_limit_percent DevopsDeployStage#ramp_limit_percent}
  */
  readonly rampLimitPercent?: number;
}

export function devopsDeployStageRolloutPolicyToTerraform(struct?: DevopsDeployStageRolloutPolicyOutputReference | DevopsDeployStageRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_count: cdktf.numberToTerraform(struct!.batchCount),
    batch_delay_in_seconds: cdktf.numberToTerraform(struct!.batchDelayInSeconds),
    batch_percentage: cdktf.numberToTerraform(struct!.batchPercentage),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    ramp_limit_percent: cdktf.numberToTerraform(struct!.rampLimitPercent),
  }
}


export function devopsDeployStageRolloutPolicyToHclTerraform(struct?: DevopsDeployStageRolloutPolicyOutputReference | DevopsDeployStageRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_count: {
      value: cdktf.numberToHclTerraform(struct!.batchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_delay_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.batchDelayInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ramp_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.rampLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCount = this._batchCount;
    }
    if (this._batchDelayInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchDelayInSeconds = this._batchDelayInSeconds;
    }
    if (this._batchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPercentage = this._batchPercentage;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._rampLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rampLimitPercent = this._rampLimitPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchCount = undefined;
      this._batchDelayInSeconds = undefined;
      this._batchPercentage = undefined;
      this._policyType = undefined;
      this._rampLimitPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchCount = value.batchCount;
      this._batchDelayInSeconds = value.batchDelayInSeconds;
      this._batchPercentage = value.batchPercentage;
      this._policyType = value.policyType;
      this._rampLimitPercent = value.rampLimitPercent;
    }
  }

  // batch_count - computed: true, optional: true, required: false
  private _batchCount?: number; 
  public get batchCount() {
    return this.getNumberAttribute('batch_count');
  }
  public set batchCount(value: number) {
    this._batchCount = value;
  }
  public resetBatchCount() {
    this._batchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCountInput() {
    return this._batchCount;
  }

  // batch_delay_in_seconds - computed: true, optional: true, required: false
  private _batchDelayInSeconds?: number; 
  public get batchDelayInSeconds() {
    return this.getNumberAttribute('batch_delay_in_seconds');
  }
  public set batchDelayInSeconds(value: number) {
    this._batchDelayInSeconds = value;
  }
  public resetBatchDelayInSeconds() {
    this._batchDelayInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchDelayInSecondsInput() {
    return this._batchDelayInSeconds;
  }

  // batch_percentage - computed: true, optional: true, required: false
  private _batchPercentage?: number; 
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }
  public set batchPercentage(value: number) {
    this._batchPercentage = value;
  }
  public resetBatchPercentage() {
    this._batchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPercentageInput() {
    return this._batchPercentage;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // ramp_limit_percent - computed: true, optional: true, required: false
  private _rampLimitPercent?: number; 
  public get rampLimitPercent() {
    return this.getNumberAttribute('ramp_limit_percent');
  }
  public set rampLimitPercent(value: number) {
    this._rampLimitPercent = value;
  }
  public resetRampLimitPercent() {
    this._rampLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rampLimitPercentInput() {
    return this._rampLimitPercent;
  }
}
export interface DevopsDeployStageSetStringItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}
  */
  readonly value?: string;
}

export function devopsDeployStageSetStringItemsToTerraform(struct?: DevopsDeployStageSetStringItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function devopsDeployStageSetStringItemsToHclTerraform(struct?: DevopsDeployStageSetStringItems | cdktf.IResolvable): any {
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

export class DevopsDeployStageSetStringItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeployStageSetStringItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageSetStringItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class DevopsDeployStageSetStringItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsDeployStageSetStringItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsDeployStageSetStringItemsOutputReference {
    return new DevopsDeployStageSetStringItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeployStageSetString {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}
  */
  readonly items?: DevopsDeployStageSetStringItems[] | cdktf.IResolvable;
}

export function devopsDeployStageSetStringToTerraform(struct?: DevopsDeployStageSetStringOutputReference | DevopsDeployStageSetString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsDeployStageSetStringItemsToTerraform, true)(struct!.items),
  }
}


export function devopsDeployStageSetStringToHclTerraform(struct?: DevopsDeployStageSetStringOutputReference | DevopsDeployStageSetString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsDeployStageSetStringItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeployStageSetStringItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageSetStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageSetString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageSetString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DevopsDeployStageSetStringItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsDeployStageSetStringItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DevopsDeployStageSetValuesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#name DevopsDeployStage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#value DevopsDeployStage#value}
  */
  readonly value?: string;
}

export function devopsDeployStageSetValuesItemsToTerraform(struct?: DevopsDeployStageSetValuesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function devopsDeployStageSetValuesItemsToHclTerraform(struct?: DevopsDeployStageSetValuesItems | cdktf.IResolvable): any {
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

export class DevopsDeployStageSetValuesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsDeployStageSetValuesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageSetValuesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class DevopsDeployStageSetValuesItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsDeployStageSetValuesItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsDeployStageSetValuesItemsOutputReference {
    return new DevopsDeployStageSetValuesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsDeployStageSetValues {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#items DevopsDeployStage#items}
  */
  readonly items?: DevopsDeployStageSetValuesItems[] | cdktf.IResolvable;
}

export function devopsDeployStageSetValuesToTerraform(struct?: DevopsDeployStageSetValuesOutputReference | DevopsDeployStageSetValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsDeployStageSetValuesItemsToTerraform, true)(struct!.items),
  }
}


export function devopsDeployStageSetValuesToHclTerraform(struct?: DevopsDeployStageSetValuesOutputReference | DevopsDeployStageSetValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsDeployStageSetValuesItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeployStageSetValuesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageSetValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageSetValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageSetValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DevopsDeployStageSetValuesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsDeployStageSetValuesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DevopsDeployStageTestLoadBalancerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#backend_port DevopsDeployStage#backend_port}
  */
  readonly backendPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#listener_name DevopsDeployStage#listener_name}
  */
  readonly listenerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#load_balancer_id DevopsDeployStage#load_balancer_id}
  */
  readonly loadBalancerId?: string;
}

export function devopsDeployStageTestLoadBalancerConfigToTerraform(struct?: DevopsDeployStageTestLoadBalancerConfigOutputReference | DevopsDeployStageTestLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    listener_name: cdktf.stringToTerraform(struct!.listenerName),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
  }
}


export function devopsDeployStageTestLoadBalancerConfigToHclTerraform(struct?: DevopsDeployStageTestLoadBalancerConfigOutputReference | DevopsDeployStageTestLoadBalancerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_port: {
      value: cdktf.numberToHclTerraform(struct!.backendPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listener_name: {
      value: cdktf.stringToHclTerraform(struct!.listenerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageTestLoadBalancerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageTestLoadBalancerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPort = this._backendPort;
    }
    if (this._listenerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerName = this._listenerName;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageTestLoadBalancerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendPort = undefined;
      this._listenerName = undefined;
      this._loadBalancerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendPort = value.backendPort;
      this._listenerName = value.listenerName;
      this._loadBalancerId = value.loadBalancerId;
    }
  }

  // backend_port - computed: true, optional: true, required: false
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  public resetBackendPort() {
    this._backendPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // listener_name - computed: true, optional: true, required: false
  private _listenerName?: string; 
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }
  public set listenerName(value: string) {
    this._listenerName = value;
  }
  public resetListenerName() {
    this._listenerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerNameInput() {
    return this._listenerName;
  }

  // load_balancer_id - computed: true, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DevopsDeployStageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#create DevopsDeployStage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#delete DevopsDeployStage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#update DevopsDeployStage#update}
  */
  readonly update?: string;
}

export function devopsDeployStageTimeoutsToTerraform(struct?: DevopsDeployStageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function devopsDeployStageTimeoutsToHclTerraform(struct?: DevopsDeployStageTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsDeployStageTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DevopsDeployStageWaitCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#wait_duration DevopsDeployStage#wait_duration}
  */
  readonly waitDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#wait_type DevopsDeployStage#wait_type}
  */
  readonly waitType: string;
}

export function devopsDeployStageWaitCriteriaToTerraform(struct?: DevopsDeployStageWaitCriteriaOutputReference | DevopsDeployStageWaitCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    wait_duration: cdktf.stringToTerraform(struct!.waitDuration),
    wait_type: cdktf.stringToTerraform(struct!.waitType),
  }
}


export function devopsDeployStageWaitCriteriaToHclTerraform(struct?: DevopsDeployStageWaitCriteriaOutputReference | DevopsDeployStageWaitCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    wait_duration: {
      value: cdktf.stringToHclTerraform(struct!.waitDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_type: {
      value: cdktf.stringToHclTerraform(struct!.waitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployStageWaitCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployStageWaitCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._waitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitDuration = this._waitDuration;
    }
    if (this._waitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitType = this._waitType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployStageWaitCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._waitDuration = undefined;
      this._waitType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._waitDuration = value.waitDuration;
      this._waitType = value.waitType;
    }
  }

  // wait_duration - computed: false, optional: false, required: true
  private _waitDuration?: string; 
  public get waitDuration() {
    return this.getStringAttribute('wait_duration');
  }
  public set waitDuration(value: string) {
    this._waitDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitDurationInput() {
    return this._waitDuration;
  }

  // wait_type - computed: false, optional: false, required: true
  private _waitType?: string; 
  public get waitType() {
    return this.getStringAttribute('wait_type');
  }
  public set waitType(value: string) {
    this._waitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTypeInput() {
    return this._waitType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage oci_devops_deploy_stage}
*/
export class DevopsDeployStage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_deploy_stage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsDeployStage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsDeployStage to import
  * @param importFromId The id of the existing DevopsDeployStage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsDeployStage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_deploy_stage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_stage oci_devops_deploy_stage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsDeployStageConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsDeployStageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_deploy_stage',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areHooksEnabled = config.areHooksEnabled;
    this._commandSpecDeployArtifactId = config.commandSpecDeployArtifactId;
    this._computeInstanceGroupBlueGreenDeploymentDeployStageId = config.computeInstanceGroupBlueGreenDeploymentDeployStageId;
    this._computeInstanceGroupCanaryDeployStageId = config.computeInstanceGroupCanaryDeployStageId;
    this._computeInstanceGroupCanaryTrafficShiftDeployStageId = config.computeInstanceGroupCanaryTrafficShiftDeployStageId;
    this._computeInstanceGroupDeployEnvironmentId = config.computeInstanceGroupDeployEnvironmentId;
    this._config = config.config;
    this._definedTags = config.definedTags;
    this._deployArtifactId = config.deployArtifactId;
    this._deployArtifactIds = config.deployArtifactIds;
    this._deployEnvironmentIdA = config.deployEnvironmentIdA;
    this._deployEnvironmentIdB = config.deployEnvironmentIdB;
    this._deployPipelineId = config.deployPipelineId;
    this._deployStageType = config.deployStageType;
    this._deploymentSpecDeployArtifactId = config.deploymentSpecDeployArtifactId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._dockerImageDeployArtifactId = config.dockerImageDeployArtifactId;
    this._freeformTags = config.freeformTags;
    this._functionDeployEnvironmentId = config.functionDeployEnvironmentId;
    this._functionTimeoutInSeconds = config.functionTimeoutInSeconds;
    this._helmChartDeployArtifactId = config.helmChartDeployArtifactId;
    this._helmCommandArtifactIds = config.helmCommandArtifactIds;
    this._id = config.id;
    this._isAsync = config.isAsync;
    this._isDebugEnabled = config.isDebugEnabled;
    this._isForceEnabled = config.isForceEnabled;
    this._isUninstallOnStageDelete = config.isUninstallOnStageDelete;
    this._isValidationEnabled = config.isValidationEnabled;
    this._kubernetesManifestDeployArtifactIds = config.kubernetesManifestDeployArtifactIds;
    this._maxHistory = config.maxHistory;
    this._maxMemoryInMbs = config.maxMemoryInMbs;
    this._namespace = config.namespace;
    this._okeBlueGreenDeployStageId = config.okeBlueGreenDeployStageId;
    this._okeCanaryDeployStageId = config.okeCanaryDeployStageId;
    this._okeCanaryTrafficShiftDeployStageId = config.okeCanaryTrafficShiftDeployStageId;
    this._okeClusterDeployEnvironmentId = config.okeClusterDeployEnvironmentId;
    this._purpose = config.purpose;
    this._releaseName = config.releaseName;
    this._shouldCleanupOnFail = config.shouldCleanupOnFail;
    this._shouldNotWait = config.shouldNotWait;
    this._shouldResetValues = config.shouldResetValues;
    this._shouldReuseValues = config.shouldReuseValues;
    this._shouldSkipCrds = config.shouldSkipCrds;
    this._shouldSkipRenderSubchartNotes = config.shouldSkipRenderSubchartNotes;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._trafficShiftTarget = config.trafficShiftTarget;
    this._valuesArtifactIds = config.valuesArtifactIds;
    this._approvalPolicy.internalValue = config.approvalPolicy;
    this._blueBackendIps.internalValue = config.blueBackendIps;
    this._blueGreenStrategy.internalValue = config.blueGreenStrategy;
    this._canaryStrategy.internalValue = config.canaryStrategy;
    this._containerConfig.internalValue = config.containerConfig;
    this._deployStagePredecessorCollection.internalValue = config.deployStagePredecessorCollection;
    this._failurePolicy.internalValue = config.failurePolicy;
    this._greenBackendIps.internalValue = config.greenBackendIps;
    this._loadBalancerConfig.internalValue = config.loadBalancerConfig;
    this._productionLoadBalancerConfig.internalValue = config.productionLoadBalancerConfig;
    this._rollbackPolicy.internalValue = config.rollbackPolicy;
    this._rolloutPolicy.internalValue = config.rolloutPolicy;
    this._setString.internalValue = config.setString;
    this._setValues.internalValue = config.setValues;
    this._testLoadBalancerConfig.internalValue = config.testLoadBalancerConfig;
    this._timeouts.internalValue = config.timeouts;
    this._waitCriteria.internalValue = config.waitCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_hooks_enabled - computed: true, optional: true, required: false
  private _areHooksEnabled?: boolean | cdktf.IResolvable; 
  public get areHooksEnabled() {
    return this.getBooleanAttribute('are_hooks_enabled');
  }
  public set areHooksEnabled(value: boolean | cdktf.IResolvable) {
    this._areHooksEnabled = value;
  }
  public resetAreHooksEnabled() {
    this._areHooksEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areHooksEnabledInput() {
    return this._areHooksEnabled;
  }

  // command_spec_deploy_artifact_id - computed: true, optional: true, required: false
  private _commandSpecDeployArtifactId?: string; 
  public get commandSpecDeployArtifactId() {
    return this.getStringAttribute('command_spec_deploy_artifact_id');
  }
  public set commandSpecDeployArtifactId(value: string) {
    this._commandSpecDeployArtifactId = value;
  }
  public resetCommandSpecDeployArtifactId() {
    this._commandSpecDeployArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandSpecDeployArtifactIdInput() {
    return this._commandSpecDeployArtifactId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_instance_group_blue_green_deployment_deploy_stage_id - computed: true, optional: true, required: false
  private _computeInstanceGroupBlueGreenDeploymentDeployStageId?: string; 
  public get computeInstanceGroupBlueGreenDeploymentDeployStageId() {
    return this.getStringAttribute('compute_instance_group_blue_green_deployment_deploy_stage_id');
  }
  public set computeInstanceGroupBlueGreenDeploymentDeployStageId(value: string) {
    this._computeInstanceGroupBlueGreenDeploymentDeployStageId = value;
  }
  public resetComputeInstanceGroupBlueGreenDeploymentDeployStageId() {
    this._computeInstanceGroupBlueGreenDeploymentDeployStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceGroupBlueGreenDeploymentDeployStageIdInput() {
    return this._computeInstanceGroupBlueGreenDeploymentDeployStageId;
  }

  // compute_instance_group_canary_deploy_stage_id - computed: true, optional: true, required: false
  private _computeInstanceGroupCanaryDeployStageId?: string; 
  public get computeInstanceGroupCanaryDeployStageId() {
    return this.getStringAttribute('compute_instance_group_canary_deploy_stage_id');
  }
  public set computeInstanceGroupCanaryDeployStageId(value: string) {
    this._computeInstanceGroupCanaryDeployStageId = value;
  }
  public resetComputeInstanceGroupCanaryDeployStageId() {
    this._computeInstanceGroupCanaryDeployStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceGroupCanaryDeployStageIdInput() {
    return this._computeInstanceGroupCanaryDeployStageId;
  }

  // compute_instance_group_canary_traffic_shift_deploy_stage_id - computed: true, optional: true, required: false
  private _computeInstanceGroupCanaryTrafficShiftDeployStageId?: string; 
  public get computeInstanceGroupCanaryTrafficShiftDeployStageId() {
    return this.getStringAttribute('compute_instance_group_canary_traffic_shift_deploy_stage_id');
  }
  public set computeInstanceGroupCanaryTrafficShiftDeployStageId(value: string) {
    this._computeInstanceGroupCanaryTrafficShiftDeployStageId = value;
  }
  public resetComputeInstanceGroupCanaryTrafficShiftDeployStageId() {
    this._computeInstanceGroupCanaryTrafficShiftDeployStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceGroupCanaryTrafficShiftDeployStageIdInput() {
    return this._computeInstanceGroupCanaryTrafficShiftDeployStageId;
  }

  // compute_instance_group_deploy_environment_id - computed: true, optional: true, required: false
  private _computeInstanceGroupDeployEnvironmentId?: string; 
  public get computeInstanceGroupDeployEnvironmentId() {
    return this.getStringAttribute('compute_instance_group_deploy_environment_id');
  }
  public set computeInstanceGroupDeployEnvironmentId(value: string) {
    this._computeInstanceGroupDeployEnvironmentId = value;
  }
  public resetComputeInstanceGroupDeployEnvironmentId() {
    this._computeInstanceGroupDeployEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceGroupDeployEnvironmentIdInput() {
    return this._computeInstanceGroupDeployEnvironmentId;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deploy_artifact_id - computed: false, optional: true, required: false
  private _deployArtifactId?: string; 
  public get deployArtifactId() {
    return this.getStringAttribute('deploy_artifact_id');
  }
  public set deployArtifactId(value: string) {
    this._deployArtifactId = value;
  }
  public resetDeployArtifactId() {
    this._deployArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactIdInput() {
    return this._deployArtifactId;
  }

  // deploy_artifact_ids - computed: false, optional: true, required: false
  private _deployArtifactIds?: string[]; 
  public get deployArtifactIds() {
    return this.getListAttribute('deploy_artifact_ids');
  }
  public set deployArtifactIds(value: string[]) {
    this._deployArtifactIds = value;
  }
  public resetDeployArtifactIds() {
    this._deployArtifactIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactIdsInput() {
    return this._deployArtifactIds;
  }

  // deploy_environment_id_a - computed: true, optional: true, required: false
  private _deployEnvironmentIdA?: string; 
  public get deployEnvironmentIdA() {
    return this.getStringAttribute('deploy_environment_id_a');
  }
  public set deployEnvironmentIdA(value: string) {
    this._deployEnvironmentIdA = value;
  }
  public resetDeployEnvironmentIdA() {
    this._deployEnvironmentIdA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployEnvironmentIdAInput() {
    return this._deployEnvironmentIdA;
  }

  // deploy_environment_id_b - computed: true, optional: true, required: false
  private _deployEnvironmentIdB?: string; 
  public get deployEnvironmentIdB() {
    return this.getStringAttribute('deploy_environment_id_b');
  }
  public set deployEnvironmentIdB(value: string) {
    this._deployEnvironmentIdB = value;
  }
  public resetDeployEnvironmentIdB() {
    this._deployEnvironmentIdB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployEnvironmentIdBInput() {
    return this._deployEnvironmentIdB;
  }

  // deploy_pipeline_id - computed: false, optional: false, required: true
  private _deployPipelineId?: string; 
  public get deployPipelineId() {
    return this.getStringAttribute('deploy_pipeline_id');
  }
  public set deployPipelineId(value: string) {
    this._deployPipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployPipelineIdInput() {
    return this._deployPipelineId;
  }

  // deploy_stage_type - computed: false, optional: false, required: true
  private _deployStageType?: string; 
  public get deployStageType() {
    return this.getStringAttribute('deploy_stage_type');
  }
  public set deployStageType(value: string) {
    this._deployStageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployStageTypeInput() {
    return this._deployStageType;
  }

  // deployment_spec_deploy_artifact_id - computed: true, optional: true, required: false
  private _deploymentSpecDeployArtifactId?: string; 
  public get deploymentSpecDeployArtifactId() {
    return this.getStringAttribute('deployment_spec_deploy_artifact_id');
  }
  public set deploymentSpecDeployArtifactId(value: string) {
    this._deploymentSpecDeployArtifactId = value;
  }
  public resetDeploymentSpecDeployArtifactId() {
    this._deploymentSpecDeployArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSpecDeployArtifactIdInput() {
    return this._deploymentSpecDeployArtifactId;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // docker_image_deploy_artifact_id - computed: true, optional: true, required: false
  private _dockerImageDeployArtifactId?: string; 
  public get dockerImageDeployArtifactId() {
    return this.getStringAttribute('docker_image_deploy_artifact_id');
  }
  public set dockerImageDeployArtifactId(value: string) {
    this._dockerImageDeployArtifactId = value;
  }
  public resetDockerImageDeployArtifactId() {
    this._dockerImageDeployArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageDeployArtifactIdInput() {
    return this._dockerImageDeployArtifactId;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // function_deploy_environment_id - computed: true, optional: true, required: false
  private _functionDeployEnvironmentId?: string; 
  public get functionDeployEnvironmentId() {
    return this.getStringAttribute('function_deploy_environment_id');
  }
  public set functionDeployEnvironmentId(value: string) {
    this._functionDeployEnvironmentId = value;
  }
  public resetFunctionDeployEnvironmentId() {
    this._functionDeployEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionDeployEnvironmentIdInput() {
    return this._functionDeployEnvironmentId;
  }

  // function_timeout_in_seconds - computed: true, optional: true, required: false
  private _functionTimeoutInSeconds?: number; 
  public get functionTimeoutInSeconds() {
    return this.getNumberAttribute('function_timeout_in_seconds');
  }
  public set functionTimeoutInSeconds(value: number) {
    this._functionTimeoutInSeconds = value;
  }
  public resetFunctionTimeoutInSeconds() {
    this._functionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTimeoutInSecondsInput() {
    return this._functionTimeoutInSeconds;
  }

  // helm_chart_deploy_artifact_id - computed: true, optional: true, required: false
  private _helmChartDeployArtifactId?: string; 
  public get helmChartDeployArtifactId() {
    return this.getStringAttribute('helm_chart_deploy_artifact_id');
  }
  public set helmChartDeployArtifactId(value: string) {
    this._helmChartDeployArtifactId = value;
  }
  public resetHelmChartDeployArtifactId() {
    this._helmChartDeployArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmChartDeployArtifactIdInput() {
    return this._helmChartDeployArtifactId;
  }

  // helm_command_artifact_ids - computed: false, optional: true, required: false
  private _helmCommandArtifactIds?: string[]; 
  public get helmCommandArtifactIds() {
    return this.getListAttribute('helm_command_artifact_ids');
  }
  public set helmCommandArtifactIds(value: string[]) {
    this._helmCommandArtifactIds = value;
  }
  public resetHelmCommandArtifactIds() {
    this._helmCommandArtifactIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmCommandArtifactIdsInput() {
    return this._helmCommandArtifactIds;
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

  // is_async - computed: true, optional: true, required: false
  private _isAsync?: boolean | cdktf.IResolvable; 
  public get isAsync() {
    return this.getBooleanAttribute('is_async');
  }
  public set isAsync(value: boolean | cdktf.IResolvable) {
    this._isAsync = value;
  }
  public resetIsAsync() {
    this._isAsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAsyncInput() {
    return this._isAsync;
  }

  // is_debug_enabled - computed: true, optional: true, required: false
  private _isDebugEnabled?: boolean | cdktf.IResolvable; 
  public get isDebugEnabled() {
    return this.getBooleanAttribute('is_debug_enabled');
  }
  public set isDebugEnabled(value: boolean | cdktf.IResolvable) {
    this._isDebugEnabled = value;
  }
  public resetIsDebugEnabled() {
    this._isDebugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDebugEnabledInput() {
    return this._isDebugEnabled;
  }

  // is_force_enabled - computed: true, optional: true, required: false
  private _isForceEnabled?: boolean | cdktf.IResolvable; 
  public get isForceEnabled() {
    return this.getBooleanAttribute('is_force_enabled');
  }
  public set isForceEnabled(value: boolean | cdktf.IResolvable) {
    this._isForceEnabled = value;
  }
  public resetIsForceEnabled() {
    this._isForceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceEnabledInput() {
    return this._isForceEnabled;
  }

  // is_uninstall_on_stage_delete - computed: true, optional: true, required: false
  private _isUninstallOnStageDelete?: boolean | cdktf.IResolvable; 
  public get isUninstallOnStageDelete() {
    return this.getBooleanAttribute('is_uninstall_on_stage_delete');
  }
  public set isUninstallOnStageDelete(value: boolean | cdktf.IResolvable) {
    this._isUninstallOnStageDelete = value;
  }
  public resetIsUninstallOnStageDelete() {
    this._isUninstallOnStageDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUninstallOnStageDeleteInput() {
    return this._isUninstallOnStageDelete;
  }

  // is_validation_enabled - computed: true, optional: true, required: false
  private _isValidationEnabled?: boolean | cdktf.IResolvable; 
  public get isValidationEnabled() {
    return this.getBooleanAttribute('is_validation_enabled');
  }
  public set isValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._isValidationEnabled = value;
  }
  public resetIsValidationEnabled() {
    this._isValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValidationEnabledInput() {
    return this._isValidationEnabled;
  }

  // kubernetes_manifest_deploy_artifact_ids - computed: false, optional: true, required: false
  private _kubernetesManifestDeployArtifactIds?: string[]; 
  public get kubernetesManifestDeployArtifactIds() {
    return this.getListAttribute('kubernetes_manifest_deploy_artifact_ids');
  }
  public set kubernetesManifestDeployArtifactIds(value: string[]) {
    this._kubernetesManifestDeployArtifactIds = value;
  }
  public resetKubernetesManifestDeployArtifactIds() {
    this._kubernetesManifestDeployArtifactIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesManifestDeployArtifactIdsInput() {
    return this._kubernetesManifestDeployArtifactIds;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_history - computed: true, optional: true, required: false
  private _maxHistory?: number; 
  public get maxHistory() {
    return this.getNumberAttribute('max_history');
  }
  public set maxHistory(value: number) {
    this._maxHistory = value;
  }
  public resetMaxHistory() {
    this._maxHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHistoryInput() {
    return this._maxHistory;
  }

  // max_memory_in_mbs - computed: true, optional: true, required: false
  private _maxMemoryInMbs?: string; 
  public get maxMemoryInMbs() {
    return this.getStringAttribute('max_memory_in_mbs');
  }
  public set maxMemoryInMbs(value: string) {
    this._maxMemoryInMbs = value;
  }
  public resetMaxMemoryInMbs() {
    this._maxMemoryInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInMbsInput() {
    return this._maxMemoryInMbs;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // oke_blue_green_deploy_stage_id - computed: true, optional: true, required: false
  private _okeBlueGreenDeployStageId?: string; 
  public get okeBlueGreenDeployStageId() {
    return this.getStringAttribute('oke_blue_green_deploy_stage_id');
  }
  public set okeBlueGreenDeployStageId(value: string) {
    this._okeBlueGreenDeployStageId = value;
  }
  public resetOkeBlueGreenDeployStageId() {
    this._okeBlueGreenDeployStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okeBlueGreenDeployStageIdInput() {
    return this._okeBlueGreenDeployStageId;
  }

  // oke_canary_deploy_stage_id - computed: true, optional: true, required: false
  private _okeCanaryDeployStageId?: string; 
  public get okeCanaryDeployStageId() {
    return this.getStringAttribute('oke_canary_deploy_stage_id');
  }
  public set okeCanaryDeployStageId(value: string) {
    this._okeCanaryDeployStageId = value;
  }
  public resetOkeCanaryDeployStageId() {
    this._okeCanaryDeployStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okeCanaryDeployStageIdInput() {
    return this._okeCanaryDeployStageId;
  }

  // oke_canary_traffic_shift_deploy_stage_id - computed: true, optional: true, required: false
  private _okeCanaryTrafficShiftDeployStageId?: string; 
  public get okeCanaryTrafficShiftDeployStageId() {
    return this.getStringAttribute('oke_canary_traffic_shift_deploy_stage_id');
  }
  public set okeCanaryTrafficShiftDeployStageId(value: string) {
    this._okeCanaryTrafficShiftDeployStageId = value;
  }
  public resetOkeCanaryTrafficShiftDeployStageId() {
    this._okeCanaryTrafficShiftDeployStageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okeCanaryTrafficShiftDeployStageIdInput() {
    return this._okeCanaryTrafficShiftDeployStageId;
  }

  // oke_cluster_deploy_environment_id - computed: true, optional: true, required: false
  private _okeClusterDeployEnvironmentId?: string; 
  public get okeClusterDeployEnvironmentId() {
    return this.getStringAttribute('oke_cluster_deploy_environment_id');
  }
  public set okeClusterDeployEnvironmentId(value: string) {
    this._okeClusterDeployEnvironmentId = value;
  }
  public resetOkeClusterDeployEnvironmentId() {
    this._okeClusterDeployEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okeClusterDeployEnvironmentIdInput() {
    return this._okeClusterDeployEnvironmentId;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // release_name - computed: true, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // should_cleanup_on_fail - computed: true, optional: true, required: false
  private _shouldCleanupOnFail?: boolean | cdktf.IResolvable; 
  public get shouldCleanupOnFail() {
    return this.getBooleanAttribute('should_cleanup_on_fail');
  }
  public set shouldCleanupOnFail(value: boolean | cdktf.IResolvable) {
    this._shouldCleanupOnFail = value;
  }
  public resetShouldCleanupOnFail() {
    this._shouldCleanupOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldCleanupOnFailInput() {
    return this._shouldCleanupOnFail;
  }

  // should_not_wait - computed: true, optional: true, required: false
  private _shouldNotWait?: boolean | cdktf.IResolvable; 
  public get shouldNotWait() {
    return this.getBooleanAttribute('should_not_wait');
  }
  public set shouldNotWait(value: boolean | cdktf.IResolvable) {
    this._shouldNotWait = value;
  }
  public resetShouldNotWait() {
    this._shouldNotWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldNotWaitInput() {
    return this._shouldNotWait;
  }

  // should_reset_values - computed: true, optional: true, required: false
  private _shouldResetValues?: boolean | cdktf.IResolvable; 
  public get shouldResetValues() {
    return this.getBooleanAttribute('should_reset_values');
  }
  public set shouldResetValues(value: boolean | cdktf.IResolvable) {
    this._shouldResetValues = value;
  }
  public resetShouldResetValues() {
    this._shouldResetValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldResetValuesInput() {
    return this._shouldResetValues;
  }

  // should_reuse_values - computed: true, optional: true, required: false
  private _shouldReuseValues?: boolean | cdktf.IResolvable; 
  public get shouldReuseValues() {
    return this.getBooleanAttribute('should_reuse_values');
  }
  public set shouldReuseValues(value: boolean | cdktf.IResolvable) {
    this._shouldReuseValues = value;
  }
  public resetShouldReuseValues() {
    this._shouldReuseValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldReuseValuesInput() {
    return this._shouldReuseValues;
  }

  // should_skip_crds - computed: true, optional: true, required: false
  private _shouldSkipCrds?: boolean | cdktf.IResolvable; 
  public get shouldSkipCrds() {
    return this.getBooleanAttribute('should_skip_crds');
  }
  public set shouldSkipCrds(value: boolean | cdktf.IResolvable) {
    this._shouldSkipCrds = value;
  }
  public resetShouldSkipCrds() {
    this._shouldSkipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipCrdsInput() {
    return this._shouldSkipCrds;
  }

  // should_skip_render_subchart_notes - computed: true, optional: true, required: false
  private _shouldSkipRenderSubchartNotes?: boolean | cdktf.IResolvable; 
  public get shouldSkipRenderSubchartNotes() {
    return this.getBooleanAttribute('should_skip_render_subchart_notes');
  }
  public set shouldSkipRenderSubchartNotes(value: boolean | cdktf.IResolvable) {
    this._shouldSkipRenderSubchartNotes = value;
  }
  public resetShouldSkipRenderSubchartNotes() {
    this._shouldSkipRenderSubchartNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipRenderSubchartNotesInput() {
    return this._shouldSkipRenderSubchartNotes;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // traffic_shift_target - computed: true, optional: true, required: false
  private _trafficShiftTarget?: string; 
  public get trafficShiftTarget() {
    return this.getStringAttribute('traffic_shift_target');
  }
  public set trafficShiftTarget(value: string) {
    this._trafficShiftTarget = value;
  }
  public resetTrafficShiftTarget() {
    this._trafficShiftTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShiftTargetInput() {
    return this._trafficShiftTarget;
  }

  // values_artifact_ids - computed: false, optional: true, required: false
  private _valuesArtifactIds?: string[]; 
  public get valuesArtifactIds() {
    return this.getListAttribute('values_artifact_ids');
  }
  public set valuesArtifactIds(value: string[]) {
    this._valuesArtifactIds = value;
  }
  public resetValuesArtifactIds() {
    this._valuesArtifactIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesArtifactIdsInput() {
    return this._valuesArtifactIds;
  }

  // approval_policy - computed: false, optional: true, required: false
  private _approvalPolicy = new DevopsDeployStageApprovalPolicyOutputReference(this, "approval_policy");
  public get approvalPolicy() {
    return this._approvalPolicy;
  }
  public putApprovalPolicy(value: DevopsDeployStageApprovalPolicy) {
    this._approvalPolicy.internalValue = value;
  }
  public resetApprovalPolicy() {
    this._approvalPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalPolicyInput() {
    return this._approvalPolicy.internalValue;
  }

  // blue_backend_ips - computed: false, optional: true, required: false
  private _blueBackendIps = new DevopsDeployStageBlueBackendIpsOutputReference(this, "blue_backend_ips");
  public get blueBackendIps() {
    return this._blueBackendIps;
  }
  public putBlueBackendIps(value: DevopsDeployStageBlueBackendIps) {
    this._blueBackendIps.internalValue = value;
  }
  public resetBlueBackendIps() {
    this._blueBackendIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueBackendIpsInput() {
    return this._blueBackendIps.internalValue;
  }

  // blue_green_strategy - computed: false, optional: true, required: false
  private _blueGreenStrategy = new DevopsDeployStageBlueGreenStrategyOutputReference(this, "blue_green_strategy");
  public get blueGreenStrategy() {
    return this._blueGreenStrategy;
  }
  public putBlueGreenStrategy(value: DevopsDeployStageBlueGreenStrategy) {
    this._blueGreenStrategy.internalValue = value;
  }
  public resetBlueGreenStrategy() {
    this._blueGreenStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenStrategyInput() {
    return this._blueGreenStrategy.internalValue;
  }

  // canary_strategy - computed: false, optional: true, required: false
  private _canaryStrategy = new DevopsDeployStageCanaryStrategyOutputReference(this, "canary_strategy");
  public get canaryStrategy() {
    return this._canaryStrategy;
  }
  public putCanaryStrategy(value: DevopsDeployStageCanaryStrategy) {
    this._canaryStrategy.internalValue = value;
  }
  public resetCanaryStrategy() {
    this._canaryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryStrategyInput() {
    return this._canaryStrategy.internalValue;
  }

  // container_config - computed: false, optional: true, required: false
  private _containerConfig = new DevopsDeployStageContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: DevopsDeployStageContainerConfig) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }

  // deploy_stage_predecessor_collection - computed: false, optional: false, required: true
  private _deployStagePredecessorCollection = new DevopsDeployStageDeployStagePredecessorCollectionOutputReference(this, "deploy_stage_predecessor_collection");
  public get deployStagePredecessorCollection() {
    return this._deployStagePredecessorCollection;
  }
  public putDeployStagePredecessorCollection(value: DevopsDeployStageDeployStagePredecessorCollection) {
    this._deployStagePredecessorCollection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployStagePredecessorCollectionInput() {
    return this._deployStagePredecessorCollection.internalValue;
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy = new DevopsDeployStageFailurePolicyOutputReference(this, "failure_policy");
  public get failurePolicy() {
    return this._failurePolicy;
  }
  public putFailurePolicy(value: DevopsDeployStageFailurePolicy) {
    this._failurePolicy.internalValue = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy.internalValue;
  }

  // green_backend_ips - computed: false, optional: true, required: false
  private _greenBackendIps = new DevopsDeployStageGreenBackendIpsOutputReference(this, "green_backend_ips");
  public get greenBackendIps() {
    return this._greenBackendIps;
  }
  public putGreenBackendIps(value: DevopsDeployStageGreenBackendIps) {
    this._greenBackendIps.internalValue = value;
  }
  public resetGreenBackendIps() {
    this._greenBackendIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenBackendIpsInput() {
    return this._greenBackendIps.internalValue;
  }

  // load_balancer_config - computed: false, optional: true, required: false
  private _loadBalancerConfig = new DevopsDeployStageLoadBalancerConfigOutputReference(this, "load_balancer_config");
  public get loadBalancerConfig() {
    return this._loadBalancerConfig;
  }
  public putLoadBalancerConfig(value: DevopsDeployStageLoadBalancerConfig) {
    this._loadBalancerConfig.internalValue = value;
  }
  public resetLoadBalancerConfig() {
    this._loadBalancerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerConfigInput() {
    return this._loadBalancerConfig.internalValue;
  }

  // production_load_balancer_config - computed: false, optional: true, required: false
  private _productionLoadBalancerConfig = new DevopsDeployStageProductionLoadBalancerConfigOutputReference(this, "production_load_balancer_config");
  public get productionLoadBalancerConfig() {
    return this._productionLoadBalancerConfig;
  }
  public putProductionLoadBalancerConfig(value: DevopsDeployStageProductionLoadBalancerConfig) {
    this._productionLoadBalancerConfig.internalValue = value;
  }
  public resetProductionLoadBalancerConfig() {
    this._productionLoadBalancerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionLoadBalancerConfigInput() {
    return this._productionLoadBalancerConfig.internalValue;
  }

  // rollback_policy - computed: false, optional: true, required: false
  private _rollbackPolicy = new DevopsDeployStageRollbackPolicyOutputReference(this, "rollback_policy");
  public get rollbackPolicy() {
    return this._rollbackPolicy;
  }
  public putRollbackPolicy(value: DevopsDeployStageRollbackPolicy) {
    this._rollbackPolicy.internalValue = value;
  }
  public resetRollbackPolicy() {
    this._rollbackPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackPolicyInput() {
    return this._rollbackPolicy.internalValue;
  }

  // rollout_policy - computed: false, optional: true, required: false
  private _rolloutPolicy = new DevopsDeployStageRolloutPolicyOutputReference(this, "rollout_policy");
  public get rolloutPolicy() {
    return this._rolloutPolicy;
  }
  public putRolloutPolicy(value: DevopsDeployStageRolloutPolicy) {
    this._rolloutPolicy.internalValue = value;
  }
  public resetRolloutPolicy() {
    this._rolloutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutPolicyInput() {
    return this._rolloutPolicy.internalValue;
  }

  // set_string - computed: false, optional: true, required: false
  private _setString = new DevopsDeployStageSetStringOutputReference(this, "set_string");
  public get setString() {
    return this._setString;
  }
  public putSetString(value: DevopsDeployStageSetString) {
    this._setString.internalValue = value;
  }
  public resetSetString() {
    this._setString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setStringInput() {
    return this._setString.internalValue;
  }

  // set_values - computed: false, optional: true, required: false
  private _setValues = new DevopsDeployStageSetValuesOutputReference(this, "set_values");
  public get setValues() {
    return this._setValues;
  }
  public putSetValues(value: DevopsDeployStageSetValues) {
    this._setValues.internalValue = value;
  }
  public resetSetValues() {
    this._setValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValuesInput() {
    return this._setValues.internalValue;
  }

  // test_load_balancer_config - computed: false, optional: true, required: false
  private _testLoadBalancerConfig = new DevopsDeployStageTestLoadBalancerConfigOutputReference(this, "test_load_balancer_config");
  public get testLoadBalancerConfig() {
    return this._testLoadBalancerConfig;
  }
  public putTestLoadBalancerConfig(value: DevopsDeployStageTestLoadBalancerConfig) {
    this._testLoadBalancerConfig.internalValue = value;
  }
  public resetTestLoadBalancerConfig() {
    this._testLoadBalancerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testLoadBalancerConfigInput() {
    return this._testLoadBalancerConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsDeployStageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsDeployStageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wait_criteria - computed: false, optional: true, required: false
  private _waitCriteria = new DevopsDeployStageWaitCriteriaOutputReference(this, "wait_criteria");
  public get waitCriteria() {
    return this._waitCriteria;
  }
  public putWaitCriteria(value: DevopsDeployStageWaitCriteria) {
    this._waitCriteria.internalValue = value;
  }
  public resetWaitCriteria() {
    this._waitCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitCriteriaInput() {
    return this._waitCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      are_hooks_enabled: cdktf.booleanToTerraform(this._areHooksEnabled),
      command_spec_deploy_artifact_id: cdktf.stringToTerraform(this._commandSpecDeployArtifactId),
      compute_instance_group_blue_green_deployment_deploy_stage_id: cdktf.stringToTerraform(this._computeInstanceGroupBlueGreenDeploymentDeployStageId),
      compute_instance_group_canary_deploy_stage_id: cdktf.stringToTerraform(this._computeInstanceGroupCanaryDeployStageId),
      compute_instance_group_canary_traffic_shift_deploy_stage_id: cdktf.stringToTerraform(this._computeInstanceGroupCanaryTrafficShiftDeployStageId),
      compute_instance_group_deploy_environment_id: cdktf.stringToTerraform(this._computeInstanceGroupDeployEnvironmentId),
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deploy_artifact_id: cdktf.stringToTerraform(this._deployArtifactId),
      deploy_artifact_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deployArtifactIds),
      deploy_environment_id_a: cdktf.stringToTerraform(this._deployEnvironmentIdA),
      deploy_environment_id_b: cdktf.stringToTerraform(this._deployEnvironmentIdB),
      deploy_pipeline_id: cdktf.stringToTerraform(this._deployPipelineId),
      deploy_stage_type: cdktf.stringToTerraform(this._deployStageType),
      deployment_spec_deploy_artifact_id: cdktf.stringToTerraform(this._deploymentSpecDeployArtifactId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      docker_image_deploy_artifact_id: cdktf.stringToTerraform(this._dockerImageDeployArtifactId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      function_deploy_environment_id: cdktf.stringToTerraform(this._functionDeployEnvironmentId),
      function_timeout_in_seconds: cdktf.numberToTerraform(this._functionTimeoutInSeconds),
      helm_chart_deploy_artifact_id: cdktf.stringToTerraform(this._helmChartDeployArtifactId),
      helm_command_artifact_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._helmCommandArtifactIds),
      id: cdktf.stringToTerraform(this._id),
      is_async: cdktf.booleanToTerraform(this._isAsync),
      is_debug_enabled: cdktf.booleanToTerraform(this._isDebugEnabled),
      is_force_enabled: cdktf.booleanToTerraform(this._isForceEnabled),
      is_uninstall_on_stage_delete: cdktf.booleanToTerraform(this._isUninstallOnStageDelete),
      is_validation_enabled: cdktf.booleanToTerraform(this._isValidationEnabled),
      kubernetes_manifest_deploy_artifact_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kubernetesManifestDeployArtifactIds),
      max_history: cdktf.numberToTerraform(this._maxHistory),
      max_memory_in_mbs: cdktf.stringToTerraform(this._maxMemoryInMbs),
      namespace: cdktf.stringToTerraform(this._namespace),
      oke_blue_green_deploy_stage_id: cdktf.stringToTerraform(this._okeBlueGreenDeployStageId),
      oke_canary_deploy_stage_id: cdktf.stringToTerraform(this._okeCanaryDeployStageId),
      oke_canary_traffic_shift_deploy_stage_id: cdktf.stringToTerraform(this._okeCanaryTrafficShiftDeployStageId),
      oke_cluster_deploy_environment_id: cdktf.stringToTerraform(this._okeClusterDeployEnvironmentId),
      purpose: cdktf.stringToTerraform(this._purpose),
      release_name: cdktf.stringToTerraform(this._releaseName),
      should_cleanup_on_fail: cdktf.booleanToTerraform(this._shouldCleanupOnFail),
      should_not_wait: cdktf.booleanToTerraform(this._shouldNotWait),
      should_reset_values: cdktf.booleanToTerraform(this._shouldResetValues),
      should_reuse_values: cdktf.booleanToTerraform(this._shouldReuseValues),
      should_skip_crds: cdktf.booleanToTerraform(this._shouldSkipCrds),
      should_skip_render_subchart_notes: cdktf.booleanToTerraform(this._shouldSkipRenderSubchartNotes),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      traffic_shift_target: cdktf.stringToTerraform(this._trafficShiftTarget),
      values_artifact_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valuesArtifactIds),
      approval_policy: devopsDeployStageApprovalPolicyToTerraform(this._approvalPolicy.internalValue),
      blue_backend_ips: devopsDeployStageBlueBackendIpsToTerraform(this._blueBackendIps.internalValue),
      blue_green_strategy: devopsDeployStageBlueGreenStrategyToTerraform(this._blueGreenStrategy.internalValue),
      canary_strategy: devopsDeployStageCanaryStrategyToTerraform(this._canaryStrategy.internalValue),
      container_config: devopsDeployStageContainerConfigToTerraform(this._containerConfig.internalValue),
      deploy_stage_predecessor_collection: devopsDeployStageDeployStagePredecessorCollectionToTerraform(this._deployStagePredecessorCollection.internalValue),
      failure_policy: devopsDeployStageFailurePolicyToTerraform(this._failurePolicy.internalValue),
      green_backend_ips: devopsDeployStageGreenBackendIpsToTerraform(this._greenBackendIps.internalValue),
      load_balancer_config: devopsDeployStageLoadBalancerConfigToTerraform(this._loadBalancerConfig.internalValue),
      production_load_balancer_config: devopsDeployStageProductionLoadBalancerConfigToTerraform(this._productionLoadBalancerConfig.internalValue),
      rollback_policy: devopsDeployStageRollbackPolicyToTerraform(this._rollbackPolicy.internalValue),
      rollout_policy: devopsDeployStageRolloutPolicyToTerraform(this._rolloutPolicy.internalValue),
      set_string: devopsDeployStageSetStringToTerraform(this._setString.internalValue),
      set_values: devopsDeployStageSetValuesToTerraform(this._setValues.internalValue),
      test_load_balancer_config: devopsDeployStageTestLoadBalancerConfigToTerraform(this._testLoadBalancerConfig.internalValue),
      timeouts: devopsDeployStageTimeoutsToTerraform(this._timeouts.internalValue),
      wait_criteria: devopsDeployStageWaitCriteriaToTerraform(this._waitCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_hooks_enabled: {
        value: cdktf.booleanToHclTerraform(this._areHooksEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      command_spec_deploy_artifact_id: {
        value: cdktf.stringToHclTerraform(this._commandSpecDeployArtifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance_group_blue_green_deployment_deploy_stage_id: {
        value: cdktf.stringToHclTerraform(this._computeInstanceGroupBlueGreenDeploymentDeployStageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance_group_canary_deploy_stage_id: {
        value: cdktf.stringToHclTerraform(this._computeInstanceGroupCanaryDeployStageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance_group_canary_traffic_shift_deploy_stage_id: {
        value: cdktf.stringToHclTerraform(this._computeInstanceGroupCanaryTrafficShiftDeployStageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance_group_deploy_environment_id: {
        value: cdktf.stringToHclTerraform(this._computeInstanceGroupDeployEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deploy_artifact_id: {
        value: cdktf.stringToHclTerraform(this._deployArtifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_artifact_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deployArtifactIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deploy_environment_id_a: {
        value: cdktf.stringToHclTerraform(this._deployEnvironmentIdA),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_environment_id_b: {
        value: cdktf.stringToHclTerraform(this._deployEnvironmentIdB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_pipeline_id: {
        value: cdktf.stringToHclTerraform(this._deployPipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_stage_type: {
        value: cdktf.stringToHclTerraform(this._deployStageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_spec_deploy_artifact_id: {
        value: cdktf.stringToHclTerraform(this._deploymentSpecDeployArtifactId),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_image_deploy_artifact_id: {
        value: cdktf.stringToHclTerraform(this._dockerImageDeployArtifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      function_deploy_environment_id: {
        value: cdktf.stringToHclTerraform(this._functionDeployEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._functionTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      helm_chart_deploy_artifact_id: {
        value: cdktf.stringToHclTerraform(this._helmChartDeployArtifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      helm_command_artifact_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._helmCommandArtifactIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_async: {
        value: cdktf.booleanToHclTerraform(this._isAsync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_debug_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDebugEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_force_enabled: {
        value: cdktf.booleanToHclTerraform(this._isForceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_uninstall_on_stage_delete: {
        value: cdktf.booleanToHclTerraform(this._isUninstallOnStageDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_validation_enabled: {
        value: cdktf.booleanToHclTerraform(this._isValidationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubernetes_manifest_deploy_artifact_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kubernetesManifestDeployArtifactIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      max_history: {
        value: cdktf.numberToHclTerraform(this._maxHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_memory_in_mbs: {
        value: cdktf.stringToHclTerraform(this._maxMemoryInMbs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oke_blue_green_deploy_stage_id: {
        value: cdktf.stringToHclTerraform(this._okeBlueGreenDeployStageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oke_canary_deploy_stage_id: {
        value: cdktf.stringToHclTerraform(this._okeCanaryDeployStageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oke_canary_traffic_shift_deploy_stage_id: {
        value: cdktf.stringToHclTerraform(this._okeCanaryTrafficShiftDeployStageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oke_cluster_deploy_environment_id: {
        value: cdktf.stringToHclTerraform(this._okeClusterDeployEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_name: {
        value: cdktf.stringToHclTerraform(this._releaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_cleanup_on_fail: {
        value: cdktf.booleanToHclTerraform(this._shouldCleanupOnFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_not_wait: {
        value: cdktf.booleanToHclTerraform(this._shouldNotWait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_reset_values: {
        value: cdktf.booleanToHclTerraform(this._shouldResetValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_reuse_values: {
        value: cdktf.booleanToHclTerraform(this._shouldReuseValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_skip_crds: {
        value: cdktf.booleanToHclTerraform(this._shouldSkipCrds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_skip_render_subchart_notes: {
        value: cdktf.booleanToHclTerraform(this._shouldSkipRenderSubchartNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_shift_target: {
        value: cdktf.stringToHclTerraform(this._trafficShiftTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values_artifact_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valuesArtifactIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      approval_policy: {
        value: devopsDeployStageApprovalPolicyToHclTerraform(this._approvalPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageApprovalPolicyList",
      },
      blue_backend_ips: {
        value: devopsDeployStageBlueBackendIpsToHclTerraform(this._blueBackendIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageBlueBackendIpsList",
      },
      blue_green_strategy: {
        value: devopsDeployStageBlueGreenStrategyToHclTerraform(this._blueGreenStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageBlueGreenStrategyList",
      },
      canary_strategy: {
        value: devopsDeployStageCanaryStrategyToHclTerraform(this._canaryStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageCanaryStrategyList",
      },
      container_config: {
        value: devopsDeployStageContainerConfigToHclTerraform(this._containerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageContainerConfigList",
      },
      deploy_stage_predecessor_collection: {
        value: devopsDeployStageDeployStagePredecessorCollectionToHclTerraform(this._deployStagePredecessorCollection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageDeployStagePredecessorCollectionList",
      },
      failure_policy: {
        value: devopsDeployStageFailurePolicyToHclTerraform(this._failurePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageFailurePolicyList",
      },
      green_backend_ips: {
        value: devopsDeployStageGreenBackendIpsToHclTerraform(this._greenBackendIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageGreenBackendIpsList",
      },
      load_balancer_config: {
        value: devopsDeployStageLoadBalancerConfigToHclTerraform(this._loadBalancerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageLoadBalancerConfigList",
      },
      production_load_balancer_config: {
        value: devopsDeployStageProductionLoadBalancerConfigToHclTerraform(this._productionLoadBalancerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageProductionLoadBalancerConfigList",
      },
      rollback_policy: {
        value: devopsDeployStageRollbackPolicyToHclTerraform(this._rollbackPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageRollbackPolicyList",
      },
      rollout_policy: {
        value: devopsDeployStageRolloutPolicyToHclTerraform(this._rolloutPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageRolloutPolicyList",
      },
      set_string: {
        value: devopsDeployStageSetStringToHclTerraform(this._setString.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageSetStringList",
      },
      set_values: {
        value: devopsDeployStageSetValuesToHclTerraform(this._setValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageSetValuesList",
      },
      test_load_balancer_config: {
        value: devopsDeployStageTestLoadBalancerConfigToHclTerraform(this._testLoadBalancerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageTestLoadBalancerConfigList",
      },
      timeouts: {
        value: devopsDeployStageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsDeployStageTimeouts",
      },
      wait_criteria: {
        value: devopsDeployStageWaitCriteriaToHclTerraform(this._waitCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployStageWaitCriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
