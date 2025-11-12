// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/project_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0ProjectPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * id of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/project_policy#project_id DataEnv0ProjectPolicy#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/project_policy env0_project_policy}
*/
export class DataEnv0ProjectPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_project_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0ProjectPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0ProjectPolicy to import
  * @param importFromId The id of the existing DataEnv0ProjectPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/project_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0ProjectPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_project_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/data-sources/project_policy env0_project_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0ProjectPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataEnv0ProjectPolicyConfig) {
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
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_drift_remediation - computed: true, optional: false, required: false
  public get autoDriftRemediation() {
    return this.getStringAttribute('auto_drift_remediation');
  }

  // continuous_deployment_default - computed: true, optional: false, required: false
  public get continuousDeploymentDefault() {
    return this.getBooleanAttribute('continuous_deployment_default');
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }

  // disable_destroy_environments - computed: true, optional: false, required: false
  public get disableDestroyEnvironments() {
    return this.getBooleanAttribute('disable_destroy_environments');
  }

  // force_remote_backend - computed: true, optional: false, required: false
  public get forceRemoteBackend() {
    return this.getBooleanAttribute('force_remote_backend');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_cost_estimation - computed: true, optional: false, required: false
  public get includeCostEstimation() {
    return this.getBooleanAttribute('include_cost_estimation');
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }

  // number_of_environments - computed: true, optional: false, required: false
  public get numberOfEnvironments() {
    return this.getNumberAttribute('number_of_environments');
  }

  // number_of_environments_total - computed: true, optional: false, required: false
  public get numberOfEnvironmentsTotal() {
    return this.getNumberAttribute('number_of_environments_total');
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

  // requires_approval_default - computed: true, optional: false, required: false
  public get requiresApprovalDefault() {
    return this.getBooleanAttribute('requires_approval_default');
  }

  // run_pull_request_plan_default - computed: true, optional: false, required: false
  public get runPullRequestPlanDefault() {
    return this.getBooleanAttribute('run_pull_request_plan_default');
  }

  // skip_apply_when_plan_is_empty - computed: true, optional: false, required: false
  public get skipApplyWhenPlanIsEmpty() {
    return this.getBooleanAttribute('skip_apply_when_plan_is_empty');
  }

  // skip_redundant_deployments - computed: true, optional: false, required: false
  public get skipRedundantDeployments() {
    return this.getBooleanAttribute('skip_redundant_deployments');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
