// https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID) where the Block is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access#account_id BlockAccess#account_id}
  */
  readonly accountId?: string;
  /**
  * Block ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access#block_id BlockAccess#block_id}
  */
  readonly blockId: string;
  /**
  * List of actor IDs with manage access to the Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access#manage_actor_ids BlockAccess#manage_actor_ids}
  */
  readonly manageActorIds?: string[];
  /**
  * List of team IDs with manage access to the Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access#manage_team_ids BlockAccess#manage_team_ids}
  */
  readonly manageTeamIds?: string[];
  /**
  * List of actor IDs with view access to the Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access#view_actor_ids BlockAccess#view_actor_ids}
  */
  readonly viewActorIds?: string[];
  /**
  * List of team IDs with view access to the Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access#view_team_ids BlockAccess#view_team_ids}
  */
  readonly viewTeamIds?: string[];
  /**
  * Workspace ID (UUID) where the Block is located. In Prefect Cloud, either the `prefect_block_access` resource or the provider's `workspace_id` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access#workspace_id BlockAccess#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access prefect_block_access}
*/
export class BlockAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_block_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockAccess to import
  * @param importFromId The id of the existing BlockAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_block_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/block_access prefect_block_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockAccessConfig
  */
  public constructor(scope: Construct, id: string, config: BlockAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_block_access',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.92.0',
        providerVersionConstraint: '2.92.0'
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
    this._blockId = config.blockId;
    this._manageActorIds = config.manageActorIds;
    this._manageTeamIds = config.manageTeamIds;
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

  // block_id - computed: false, optional: false, required: true
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
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
      block_id: cdktf.stringToTerraform(this._blockId),
      manage_actor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manageActorIds),
      manage_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manageTeamIds),
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
      block_id: {
        value: cdktf.stringToHclTerraform(this._blockId),
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
