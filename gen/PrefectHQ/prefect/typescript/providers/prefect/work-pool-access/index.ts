// https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkPoolAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#account_id WorkPoolAccess#account_id}
  */
  readonly accountId?: string;
  /**
  * List of actor IDs with manage access to the Work Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#manage_actor_ids WorkPoolAccess#manage_actor_ids}
  */
  readonly manageActorIds?: string[];
  /**
  * List of team IDs with manage access to the Work Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#manage_team_ids WorkPoolAccess#manage_team_ids}
  */
  readonly manageTeamIds?: string[];
  /**
  * List of actor IDs with run access to the Work Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#run_actor_ids WorkPoolAccess#run_actor_ids}
  */
  readonly runActorIds?: string[];
  /**
  * List of team IDs with run access to the Work Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#run_team_ids WorkPoolAccess#run_team_ids}
  */
  readonly runTeamIds?: string[];
  /**
  * List of actor IDs with view access to the Work Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#view_actor_ids WorkPoolAccess#view_actor_ids}
  */
  readonly viewActorIds?: string[];
  /**
  * List of team IDs with view access to the Work Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#view_team_ids WorkPoolAccess#view_team_ids}
  */
  readonly viewTeamIds?: string[];
  /**
  * The name of the Work Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#work_pool_name WorkPoolAccess#work_pool_name}
  */
  readonly workPoolName: string;
  /**
  * Workspace ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#workspace_id WorkPoolAccess#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access prefect_work_pool_access}
*/
export class WorkPoolAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_work_pool_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkPoolAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkPoolAccess to import
  * @param importFromId The id of the existing WorkPoolAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkPoolAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_work_pool_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.1/docs/resources/work_pool_access prefect_work_pool_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkPoolAccessConfig
  */
  public constructor(scope: Construct, id: string, config: WorkPoolAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_work_pool_access',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.92.1',
        providerVersionConstraint: '2.92.1'
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
    this._manageActorIds = config.manageActorIds;
    this._manageTeamIds = config.manageTeamIds;
    this._runActorIds = config.runActorIds;
    this._runTeamIds = config.runTeamIds;
    this._viewActorIds = config.viewActorIds;
    this._viewTeamIds = config.viewTeamIds;
    this._workPoolName = config.workPoolName;
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

  // work_pool_name - computed: false, optional: false, required: true
  private _workPoolName?: string; 
  public get workPoolName() {
    return this.getStringAttribute('work_pool_name');
  }
  public set workPoolName(value: string) {
    this._workPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workPoolNameInput() {
    return this._workPoolName;
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
      manage_actor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manageActorIds),
      manage_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manageTeamIds),
      run_actor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runActorIds),
      run_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runTeamIds),
      view_actor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._viewActorIds),
      view_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._viewTeamIds),
      work_pool_name: cdktf.stringToTerraform(this._workPoolName),
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
      work_pool_name: {
        value: cdktf.stringToHclTerraform(this._workPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
