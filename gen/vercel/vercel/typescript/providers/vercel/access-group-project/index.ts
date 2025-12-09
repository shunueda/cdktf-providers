// https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/access_group_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessGroupProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Access Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/access_group_project#access_group_id AccessGroupProject#access_group_id}
  */
  readonly accessGroupId: string;
  /**
  * The Project ID to assign to the access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/access_group_project#project_id AccessGroupProject#project_id}
  */
  readonly projectId: string;
  /**
  * The project role to assign to the access group. Must be either `ADMIN`, `PROJECT_DEVELOPER`, or `PROJECT_VIEWER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/access_group_project#role AccessGroupProject#role}
  */
  readonly role: string;
  /**
  * The ID of the team the access group project should exist under. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/access_group_project#team_id AccessGroupProject#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/access_group_project vercel_access_group_project}
*/
export class AccessGroupProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_access_group_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessGroupProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessGroupProject to import
  * @param importFromId The id of the existing AccessGroupProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/access_group_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessGroupProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_access_group_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/access_group_project vercel_access_group_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessGroupProjectConfig
  */
  public constructor(scope: Construct, id: string, config: AccessGroupProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_access_group_project',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.1.0',
        providerVersionConstraint: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGroupId = config.accessGroupId;
    this._projectId = config.projectId;
    this._role = config.role;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_id - computed: false, optional: false, required: true
  private _accessGroupId?: string; 
  public get accessGroupId() {
    return this.getStringAttribute('access_group_id');
  }
  public set accessGroupId(value: string) {
    this._accessGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIdInput() {
    return this._accessGroupId;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_group_id: cdktf.stringToTerraform(this._accessGroupId),
      project_id: cdktf.stringToTerraform(this._projectId),
      role: cdktf.stringToTerraform(this._role),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_group_id: {
        value: cdktf.stringToHclTerraform(this._accessGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
