// https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/group_role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupRoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or key of the group to assign the role to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/group_role_assignment#group_id GroupRoleAssignment#group_id}
  */
  readonly groupId: string;
  /**
  * The ID of the role to assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/group_role_assignment#role_id GroupRoleAssignment#role_id}
  */
  readonly roleId: string;
  /**
  * The scope of the role assignment. Use 'g' for global scope or 'p:PROJECT_ID' for project-specific scope. Defaults to global if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/group_role_assignment#scope GroupRoleAssignment#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/group_role_assignment teamcity_group_role_assignment}
*/
export class GroupRoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "teamcity_group_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupRoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupRoleAssignment to import
  * @param importFromId The id of the existing GroupRoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/group_role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupRoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "teamcity_group_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/group_role_assignment teamcity_group_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupRoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: GroupRoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'teamcity_group_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'teamcity',
        providerVersion: '0.0.86',
        providerVersionConstraint: '0.0.86'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._roleId = config.roleId;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      role_id: cdktf.stringToTerraform(this._roleId),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
