// https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Any users added to this group will automatically be assigned with admin privileges in the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group#admin_privileges Group#admin_privileges}
  */
  readonly adminPrivileges?: boolean | cdktf.IResolvable;
  /**
  * When this parameter is set, any new users defined in the system are automatically assigned to this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group#auto_join Group#auto_join}
  */
  readonly autoJoin?: boolean | cdktf.IResolvable;
  /**
  * A description for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * New external group ID used to configure the corresponding group in Azure AD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group#external_id Group#external_id}
  */
  readonly externalId?: string;
  /**
  * List of users assigned to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group#members Group#members}
  */
  readonly members?: string[];
  /**
  * Name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * When set to `true`, this resource will ignore the `members` attributes and allow memberships to be managed by `platform_group_members` resource instead. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group#use_group_members_resource Group#use_group_members_resource}
  */
  readonly useGroupMembersResource?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group platform_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/group platform_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_group',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPrivileges = config.adminPrivileges;
    this._autoJoin = config.autoJoin;
    this._description = config.description;
    this._externalId = config.externalId;
    this._members = config.members;
    this._name = config.name;
    this._useGroupMembersResource = config.useGroupMembersResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_privileges - computed: true, optional: true, required: false
  private _adminPrivileges?: boolean | cdktf.IResolvable; 
  public get adminPrivileges() {
    return this.getBooleanAttribute('admin_privileges');
  }
  public set adminPrivileges(value: boolean | cdktf.IResolvable) {
    this._adminPrivileges = value;
  }
  public resetAdminPrivileges() {
    this._adminPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPrivilegesInput() {
    return this._adminPrivileges;
  }

  // auto_join - computed: true, optional: true, required: false
  private _autoJoin?: boolean | cdktf.IResolvable; 
  public get autoJoin() {
    return this.getBooleanAttribute('auto_join');
  }
  public set autoJoin(value: boolean | cdktf.IResolvable) {
    this._autoJoin = value;
  }
  public resetAutoJoin() {
    this._autoJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoJoinInput() {
    return this._autoJoin;
  }

  // description - computed: false, optional: true, required: false
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

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // realm - computed: true, optional: false, required: false
  public get realm() {
    return this.getStringAttribute('realm');
  }

  // realm_attributes - computed: true, optional: false, required: false
  public get realmAttributes() {
    return this.getStringAttribute('realm_attributes');
  }

  // use_group_members_resource - computed: true, optional: true, required: false
  private _useGroupMembersResource?: boolean | cdktf.IResolvable; 
  public get useGroupMembersResource() {
    return this.getBooleanAttribute('use_group_members_resource');
  }
  public set useGroupMembersResource(value: boolean | cdktf.IResolvable) {
    this._useGroupMembersResource = value;
  }
  public resetUseGroupMembersResource() {
    this._useGroupMembersResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGroupMembersResourceInput() {
    return this._useGroupMembersResource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_privileges: cdktf.booleanToTerraform(this._adminPrivileges),
      auto_join: cdktf.booleanToTerraform(this._autoJoin),
      description: cdktf.stringToTerraform(this._description),
      external_id: cdktf.stringToTerraform(this._externalId),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
      use_group_members_resource: cdktf.booleanToTerraform(this._useGroupMembersResource),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_privileges: {
        value: cdktf.booleanToHclTerraform(this._adminPrivileges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_join: {
        value: cdktf.booleanToHclTerraform(this._autoJoin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_group_members_resource: {
        value: cdktf.booleanToHclTerraform(this._useGroupMembersResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
