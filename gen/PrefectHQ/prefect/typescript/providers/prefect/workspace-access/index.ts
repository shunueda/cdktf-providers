// https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID (UUID) of accessor to the workspace. This can be an `account_member.user_id` or `service_account.id`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access#accessor_id WorkspaceAccess#accessor_id}
  */
  readonly accessorId: string;
  /**
  * USER | SERVICE_ACCOUNT | TEAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access#accessor_type WorkspaceAccess#accessor_type}
  */
  readonly accessorType: string;
  /**
  * Account ID (UUID) where the workspace is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access#account_id WorkspaceAccess#account_id}
  */
  readonly accountId?: string;
  /**
  * Workspace ID (UUID) to grant access to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access#workspace_id WorkspaceAccess#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * Workspace Role ID (UUID) to grant to accessor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access#workspace_role_id WorkspaceAccess#workspace_role_id}
  */
  readonly workspaceRoleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access prefect_workspace_access}
*/
export class WorkspaceAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_workspace_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceAccess to import
  * @param importFromId The id of the existing WorkspaceAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_workspace_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/workspace_access prefect_workspace_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceAccessConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_workspace_access',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.4',
        providerVersionConstraint: '2.90.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessorId = config.accessorId;
    this._accessorType = config.accessorType;
    this._accountId = config.accountId;
    this._workspaceId = config.workspaceId;
    this._workspaceRoleId = config.workspaceRoleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor_id - computed: false, optional: false, required: true
  private _accessorId?: string; 
  public get accessorId() {
    return this.getStringAttribute('accessor_id');
  }
  public set accessorId(value: string) {
    this._accessorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessorIdInput() {
    return this._accessorId;
  }

  // accessor_type - computed: false, optional: false, required: true
  private _accessorType?: string; 
  public get accessorType() {
    return this.getStringAttribute('accessor_type');
  }
  public set accessorType(value: string) {
    this._accessorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessorTypeInput() {
    return this._accessorType;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // workspace_role_id - computed: false, optional: false, required: true
  private _workspaceRoleId?: string; 
  public get workspaceRoleId() {
    return this.getStringAttribute('workspace_role_id');
  }
  public set workspaceRoleId(value: string) {
    this._workspaceRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceRoleIdInput() {
    return this._workspaceRoleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessor_id: cdktf.stringToTerraform(this._accessorId),
      accessor_type: cdktf.stringToTerraform(this._accessorType),
      account_id: cdktf.stringToTerraform(this._accountId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      workspace_role_id: cdktf.stringToTerraform(this._workspaceRoleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessor_id: {
        value: cdktf.stringToHclTerraform(this._accessorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessor_type: {
        value: cdktf.stringToHclTerraform(this._accessorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      workspace_role_id: {
        value: cdktf.stringToHclTerraform(this._workspaceRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
