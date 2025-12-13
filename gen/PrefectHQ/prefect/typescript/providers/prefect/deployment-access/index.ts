// https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#account_id DeploymentAccess#account_id}
  */
  readonly accountId?: string;
  /**
  * Deployment ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#deployment_id DeploymentAccess#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * List of actor IDs with manage access to the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#manage_actor_ids DeploymentAccess#manage_actor_ids}
  */
  readonly manageActorIds?: string[];
  /**
  * List of team IDs with manage access to the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#manage_team_ids DeploymentAccess#manage_team_ids}
  */
  readonly manageTeamIds?: string[];
  /**
  * List of actor IDs with run access to the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#run_actor_ids DeploymentAccess#run_actor_ids}
  */
  readonly runActorIds?: string[];
  /**
  * List of team IDs with run access to the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#run_team_ids DeploymentAccess#run_team_ids}
  */
  readonly runTeamIds?: string[];
  /**
  * List of actor IDs with view access to the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#view_actor_ids DeploymentAccess#view_actor_ids}
  */
  readonly viewActorIds?: string[];
  /**
  * List of team IDs with view access to the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#view_team_ids DeploymentAccess#view_team_ids}
  */
  readonly viewTeamIds?: string[];
  /**
  * Workspace ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#workspace_id DeploymentAccess#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access prefect_deployment_access}
*/
export class DeploymentAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_deployment_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentAccess to import
  * @param importFromId The id of the existing DeploymentAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_deployment_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/resources/deployment_access prefect_deployment_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentAccessConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_deployment_access',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.91.0',
        providerVersionConstraint: '2.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._deploymentId = config.deploymentId;
    this._manageActorIds = config.manageActorIds;
    this._manageTeamIds = config.manageTeamIds;
    this._runActorIds = config.runActorIds;
    this._runTeamIds = config.runTeamIds;
    this._viewActorIds = config.viewActorIds;
    this._viewTeamIds = config.viewTeamIds;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // manage_actor_ids - computed: true, optional: true, required: false
  private _manageActorIds?: string[]; 
  public get manageActorIds() {
    return this.getListAttribute('manage_actor_ids');
  }
  public set manageActorIds(value: string[]) {
    this._manageActorIds = value;
  }
  public resetManageActorIds() {
    this._manageActorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageActorIdsInput() {
    return this._manageActorIds;
  }

  // manage_team_ids - computed: true, optional: true, required: false
  private _manageTeamIds?: string[]; 
  public get manageTeamIds() {
    return this.getListAttribute('manage_team_ids');
  }
  public set manageTeamIds(value: string[]) {
    this._manageTeamIds = value;
  }
  public resetManageTeamIds() {
    this._manageTeamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageTeamIdsInput() {
    return this._manageTeamIds;
  }

  // run_actor_ids - computed: true, optional: true, required: false
  private _runActorIds?: string[]; 
  public get runActorIds() {
    return this.getListAttribute('run_actor_ids');
  }
  public set runActorIds(value: string[]) {
    this._runActorIds = value;
  }
  public resetRunActorIds() {
    this._runActorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runActorIdsInput() {
    return this._runActorIds;
  }

  // run_team_ids - computed: true, optional: true, required: false
  private _runTeamIds?: string[]; 
  public get runTeamIds() {
    return this.getListAttribute('run_team_ids');
  }
  public set runTeamIds(value: string[]) {
    this._runTeamIds = value;
  }
  public resetRunTeamIds() {
    this._runTeamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTeamIdsInput() {
    return this._runTeamIds;
  }

  // view_actor_ids - computed: true, optional: true, required: false
  private _viewActorIds?: string[]; 
  public get viewActorIds() {
    return this.getListAttribute('view_actor_ids');
  }
  public set viewActorIds(value: string[]) {
    this._viewActorIds = value;
  }
  public resetViewActorIds() {
    this._viewActorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewActorIdsInput() {
    return this._viewActorIds;
  }

  // view_team_ids - computed: true, optional: true, required: false
  private _viewTeamIds?: string[]; 
  public get viewTeamIds() {
    return this.getListAttribute('view_team_ids');
  }
  public set viewTeamIds(value: string[]) {
    this._viewTeamIds = value;
  }
  public resetViewTeamIds() {
    this._viewTeamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewTeamIdsInput() {
    return this._viewTeamIds;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      manage_actor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manageActorIds),
      manage_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manageTeamIds),
      run_actor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runActorIds),
      run_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runTeamIds),
      view_actor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._viewActorIds),
      view_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._viewTeamIds),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_actor_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manageActorIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      manage_team_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manageTeamIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      run_actor_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runActorIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      run_team_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runTeamIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      view_actor_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._viewActorIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      view_team_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._viewTeamIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
