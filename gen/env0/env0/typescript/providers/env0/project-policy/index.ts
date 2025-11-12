// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto drift remediation strategy (DISABLED, CODE_TO_CLOUD, CLOUD_TO_CODE, SMART_REMEDIATION). Defaults to DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#auto_drift_remediation ProjectPolicy#auto_drift_remediation}
  */
  readonly autoDriftRemediation?: string;
  /**
  * Redeploy on every push to the git branch default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#continuous_deployment_default ProjectPolicy#continuous_deployment_default}
  */
  readonly continuousDeploymentDefault?: boolean | cdktf.IResolvable;
  /**
  * the default environment time-to-live allowed on deploy time. Format is <number>-<M/w/d/h> (Examples: 12-h, 3-d, 1-w, 1-M). Default value is 'inherit' which inherits the organization policy. must be equal or shorter than max_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#default_ttl ProjectPolicy#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * Disallow destroying environment in the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#disable_destroy_environments ProjectPolicy#disable_destroy_environments}
  */
  readonly disableDestroyEnvironments?: boolean | cdktf.IResolvable;
  /**
  * default cron expression for new environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#drift_detection_cron ProjectPolicy#drift_detection_cron}
  */
  readonly driftDetectionCron?: string;
  /**
  * if 'true' all environments created in this project will be forced to use env0 remote backend. Default is 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#force_remote_backend ProjectPolicy#force_remote_backend}
  */
  readonly forceRemoteBackend?: boolean | cdktf.IResolvable;
  /**
  * Enable cost estimation for the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#include_cost_estimation ProjectPolicy#include_cost_estimation}
  */
  readonly includeCostEstimation?: boolean | cdktf.IResolvable;
  /**
  * the maximum environment time-to-live allowed on deploy time. Format is <number>-<M/w/d/h> (Examples: 12-h, 3-d, 1-w, 1-M). Default value is 'inherit' which inherits the organization policy. must be equal or longer than default_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#max_ttl ProjectPolicy#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * Max number of environments a single user can have in this project.
  * Omitting removes the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#number_of_environments ProjectPolicy#number_of_environments}
  */
  readonly numberOfEnvironments?: number;
  /**
  * Max number of environments in this project.
  * Omitting removes the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#number_of_environments_total ProjectPolicy#number_of_environments_total}
  */
  readonly numberOfEnvironmentsTotal?: number;
  /**
  * if 'true' enables 'environment outputs'. Default is 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#outputs_as_inputs_enabled ProjectPolicy#outputs_as_inputs_enabled}
  */
  readonly outputsAsInputsEnabled?: boolean | cdktf.IResolvable;
  /**
  * id of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#project_id ProjectPolicy#project_id}
  */
  readonly projectId: string;
  /**
  * Requires approval default value when creating a new environment in the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#requires_approval_default ProjectPolicy#requires_approval_default}
  */
  readonly requiresApprovalDefault?: boolean | cdktf.IResolvable;
  /**
  * Run Terraform Plan on Pull Requests for new environments targeting their branch default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#run_pull_request_plan_default ProjectPolicy#run_pull_request_plan_default}
  */
  readonly runPullRequestPlanDefault?: boolean | cdktf.IResolvable;
  /**
  * Skip apply when plan has no changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#skip_apply_when_plan_is_empty ProjectPolicy#skip_apply_when_plan_is_empty}
  */
  readonly skipApplyWhenPlanIsEmpty?: boolean | cdktf.IResolvable;
  /**
  * Automatically skip queued deployments when a newer deployment is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#skip_redundant_deployments ProjectPolicy#skip_redundant_deployments}
  */
  readonly skipRedundantDeployments?: boolean | cdktf.IResolvable;
  /**
  * if 'true' all environments created in this project will be created with an 'enabled' running VCS PR plan/apply commands using PR comments. Default is 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#vcs_pr_comments_enabled_default ProjectPolicy#vcs_pr_comments_enabled_default}
  */
  readonly vcsPrCommentsEnabledDefault?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy env0_project_policy}
*/
export class ProjectPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_project_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectPolicy to import
  * @param importFromId The id of the existing ProjectPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_project_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/project_policy env0_project_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_project_policy',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.6',
        providerVersionConstraint: '1.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDriftRemediation = config.autoDriftRemediation;
    this._continuousDeploymentDefault = config.continuousDeploymentDefault;
    this._defaultTtl = config.defaultTtl;
    this._disableDestroyEnvironments = config.disableDestroyEnvironments;
    this._driftDetectionCron = config.driftDetectionCron;
    this._forceRemoteBackend = config.forceRemoteBackend;
    this._includeCostEstimation = config.includeCostEstimation;
    this._maxTtl = config.maxTtl;
    this._numberOfEnvironments = config.numberOfEnvironments;
    this._numberOfEnvironmentsTotal = config.numberOfEnvironmentsTotal;
    this._outputsAsInputsEnabled = config.outputsAsInputsEnabled;
    this._projectId = config.projectId;
    this._requiresApprovalDefault = config.requiresApprovalDefault;
    this._runPullRequestPlanDefault = config.runPullRequestPlanDefault;
    this._skipApplyWhenPlanIsEmpty = config.skipApplyWhenPlanIsEmpty;
    this._skipRedundantDeployments = config.skipRedundantDeployments;
    this._vcsPrCommentsEnabledDefault = config.vcsPrCommentsEnabledDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_drift_remediation - computed: false, optional: true, required: false
  private _autoDriftRemediation?: string; 
  public get autoDriftRemediation() {
    return this.getStringAttribute('auto_drift_remediation');
  }
  public set autoDriftRemediation(value: string) {
    this._autoDriftRemediation = value;
  }
  public resetAutoDriftRemediation() {
    this._autoDriftRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDriftRemediationInput() {
    return this._autoDriftRemediation;
  }

  // continuous_deployment_default - computed: false, optional: true, required: false
  private _continuousDeploymentDefault?: boolean | cdktf.IResolvable; 
  public get continuousDeploymentDefault() {
    return this.getBooleanAttribute('continuous_deployment_default');
  }
  public set continuousDeploymentDefault(value: boolean | cdktf.IResolvable) {
    this._continuousDeploymentDefault = value;
  }
  public resetContinuousDeploymentDefault() {
    this._continuousDeploymentDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousDeploymentDefaultInput() {
    return this._continuousDeploymentDefault;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // disable_destroy_environments - computed: false, optional: true, required: false
  private _disableDestroyEnvironments?: boolean | cdktf.IResolvable; 
  public get disableDestroyEnvironments() {
    return this.getBooleanAttribute('disable_destroy_environments');
  }
  public set disableDestroyEnvironments(value: boolean | cdktf.IResolvable) {
    this._disableDestroyEnvironments = value;
  }
  public resetDisableDestroyEnvironments() {
    this._disableDestroyEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDestroyEnvironmentsInput() {
    return this._disableDestroyEnvironments;
  }

  // drift_detection_cron - computed: false, optional: true, required: false
  private _driftDetectionCron?: string; 
  public get driftDetectionCron() {
    return this.getStringAttribute('drift_detection_cron');
  }
  public set driftDetectionCron(value: string) {
    this._driftDetectionCron = value;
  }
  public resetDriftDetectionCron() {
    this._driftDetectionCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftDetectionCronInput() {
    return this._driftDetectionCron;
  }

  // force_remote_backend - computed: false, optional: true, required: false
  private _forceRemoteBackend?: boolean | cdktf.IResolvable; 
  public get forceRemoteBackend() {
    return this.getBooleanAttribute('force_remote_backend');
  }
  public set forceRemoteBackend(value: boolean | cdktf.IResolvable) {
    this._forceRemoteBackend = value;
  }
  public resetForceRemoteBackend() {
    this._forceRemoteBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRemoteBackendInput() {
    return this._forceRemoteBackend;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_cost_estimation - computed: false, optional: true, required: false
  private _includeCostEstimation?: boolean | cdktf.IResolvable; 
  public get includeCostEstimation() {
    return this.getBooleanAttribute('include_cost_estimation');
  }
  public set includeCostEstimation(value: boolean | cdktf.IResolvable) {
    this._includeCostEstimation = value;
  }
  public resetIncludeCostEstimation() {
    this._includeCostEstimation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCostEstimationInput() {
    return this._includeCostEstimation;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // number_of_environments - computed: false, optional: true, required: false
  private _numberOfEnvironments?: number; 
  public get numberOfEnvironments() {
    return this.getNumberAttribute('number_of_environments');
  }
  public set numberOfEnvironments(value: number) {
    this._numberOfEnvironments = value;
  }
  public resetNumberOfEnvironments() {
    this._numberOfEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfEnvironmentsInput() {
    return this._numberOfEnvironments;
  }

  // number_of_environments_total - computed: false, optional: true, required: false
  private _numberOfEnvironmentsTotal?: number; 
  public get numberOfEnvironmentsTotal() {
    return this.getNumberAttribute('number_of_environments_total');
  }
  public set numberOfEnvironmentsTotal(value: number) {
    this._numberOfEnvironmentsTotal = value;
  }
  public resetNumberOfEnvironmentsTotal() {
    this._numberOfEnvironmentsTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfEnvironmentsTotalInput() {
    return this._numberOfEnvironmentsTotal;
  }

  // outputs_as_inputs_enabled - computed: false, optional: true, required: false
  private _outputsAsInputsEnabled?: boolean | cdktf.IResolvable; 
  public get outputsAsInputsEnabled() {
    return this.getBooleanAttribute('outputs_as_inputs_enabled');
  }
  public set outputsAsInputsEnabled(value: boolean | cdktf.IResolvable) {
    this._outputsAsInputsEnabled = value;
  }
  public resetOutputsAsInputsEnabled() {
    this._outputsAsInputsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsAsInputsEnabledInput() {
    return this._outputsAsInputsEnabled;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // requires_approval_default - computed: false, optional: true, required: false
  private _requiresApprovalDefault?: boolean | cdktf.IResolvable; 
  public get requiresApprovalDefault() {
    return this.getBooleanAttribute('requires_approval_default');
  }
  public set requiresApprovalDefault(value: boolean | cdktf.IResolvable) {
    this._requiresApprovalDefault = value;
  }
  public resetRequiresApprovalDefault() {
    this._requiresApprovalDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresApprovalDefaultInput() {
    return this._requiresApprovalDefault;
  }

  // run_pull_request_plan_default - computed: false, optional: true, required: false
  private _runPullRequestPlanDefault?: boolean | cdktf.IResolvable; 
  public get runPullRequestPlanDefault() {
    return this.getBooleanAttribute('run_pull_request_plan_default');
  }
  public set runPullRequestPlanDefault(value: boolean | cdktf.IResolvable) {
    this._runPullRequestPlanDefault = value;
  }
  public resetRunPullRequestPlanDefault() {
    this._runPullRequestPlanDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runPullRequestPlanDefaultInput() {
    return this._runPullRequestPlanDefault;
  }

  // skip_apply_when_plan_is_empty - computed: false, optional: true, required: false
  private _skipApplyWhenPlanIsEmpty?: boolean | cdktf.IResolvable; 
  public get skipApplyWhenPlanIsEmpty() {
    return this.getBooleanAttribute('skip_apply_when_plan_is_empty');
  }
  public set skipApplyWhenPlanIsEmpty(value: boolean | cdktf.IResolvable) {
    this._skipApplyWhenPlanIsEmpty = value;
  }
  public resetSkipApplyWhenPlanIsEmpty() {
    this._skipApplyWhenPlanIsEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipApplyWhenPlanIsEmptyInput() {
    return this._skipApplyWhenPlanIsEmpty;
  }

  // skip_redundant_deployments - computed: false, optional: true, required: false
  private _skipRedundantDeployments?: boolean | cdktf.IResolvable; 
  public get skipRedundantDeployments() {
    return this.getBooleanAttribute('skip_redundant_deployments');
  }
  public set skipRedundantDeployments(value: boolean | cdktf.IResolvable) {
    this._skipRedundantDeployments = value;
  }
  public resetSkipRedundantDeployments() {
    this._skipRedundantDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRedundantDeploymentsInput() {
    return this._skipRedundantDeployments;
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // vcs_pr_comments_enabled_default - computed: false, optional: true, required: false
  private _vcsPrCommentsEnabledDefault?: boolean | cdktf.IResolvable; 
  public get vcsPrCommentsEnabledDefault() {
    return this.getBooleanAttribute('vcs_pr_comments_enabled_default');
  }
  public set vcsPrCommentsEnabledDefault(value: boolean | cdktf.IResolvable) {
    this._vcsPrCommentsEnabledDefault = value;
  }
  public resetVcsPrCommentsEnabledDefault() {
    this._vcsPrCommentsEnabledDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsPrCommentsEnabledDefaultInput() {
    return this._vcsPrCommentsEnabledDefault;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_drift_remediation: cdktf.stringToTerraform(this._autoDriftRemediation),
      continuous_deployment_default: cdktf.booleanToTerraform(this._continuousDeploymentDefault),
      default_ttl: cdktf.stringToTerraform(this._defaultTtl),
      disable_destroy_environments: cdktf.booleanToTerraform(this._disableDestroyEnvironments),
      drift_detection_cron: cdktf.stringToTerraform(this._driftDetectionCron),
      force_remote_backend: cdktf.booleanToTerraform(this._forceRemoteBackend),
      include_cost_estimation: cdktf.booleanToTerraform(this._includeCostEstimation),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
      number_of_environments: cdktf.numberToTerraform(this._numberOfEnvironments),
      number_of_environments_total: cdktf.numberToTerraform(this._numberOfEnvironmentsTotal),
      outputs_as_inputs_enabled: cdktf.booleanToTerraform(this._outputsAsInputsEnabled),
      project_id: cdktf.stringToTerraform(this._projectId),
      requires_approval_default: cdktf.booleanToTerraform(this._requiresApprovalDefault),
      run_pull_request_plan_default: cdktf.booleanToTerraform(this._runPullRequestPlanDefault),
      skip_apply_when_plan_is_empty: cdktf.booleanToTerraform(this._skipApplyWhenPlanIsEmpty),
      skip_redundant_deployments: cdktf.booleanToTerraform(this._skipRedundantDeployments),
      vcs_pr_comments_enabled_default: cdktf.booleanToTerraform(this._vcsPrCommentsEnabledDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_drift_remediation: {
        value: cdktf.stringToHclTerraform(this._autoDriftRemediation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continuous_deployment_default: {
        value: cdktf.booleanToHclTerraform(this._continuousDeploymentDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_ttl: {
        value: cdktf.stringToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_destroy_environments: {
        value: cdktf.booleanToHclTerraform(this._disableDestroyEnvironments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drift_detection_cron: {
        value: cdktf.stringToHclTerraform(this._driftDetectionCron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_remote_backend: {
        value: cdktf.booleanToHclTerraform(this._forceRemoteBackend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_cost_estimation: {
        value: cdktf.booleanToHclTerraform(this._includeCostEstimation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_ttl: {
        value: cdktf.stringToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_environments: {
        value: cdktf.numberToHclTerraform(this._numberOfEnvironments),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_environments_total: {
        value: cdktf.numberToHclTerraform(this._numberOfEnvironmentsTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outputs_as_inputs_enabled: {
        value: cdktf.booleanToHclTerraform(this._outputsAsInputsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requires_approval_default: {
        value: cdktf.booleanToHclTerraform(this._requiresApprovalDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_pull_request_plan_default: {
        value: cdktf.booleanToHclTerraform(this._runPullRequestPlanDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_apply_when_plan_is_empty: {
        value: cdktf.booleanToHclTerraform(this._skipApplyWhenPlanIsEmpty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_redundant_deployments: {
        value: cdktf.booleanToHclTerraform(this._skipRedundantDeployments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vcs_pr_comments_enabled_default: {
        value: cdktf.booleanToHclTerraform(this._vcsPrCommentsEnabledDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
