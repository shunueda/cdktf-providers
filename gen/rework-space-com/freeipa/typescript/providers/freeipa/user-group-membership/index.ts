// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * **deprecated** External member to add. name must refer to an external group. (Requires a valid AD Trust configuration).. Will be replaced by external_members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#external_member UserGroupMembership#external_member}
  */
  readonly externalMember?: string;
  /**
  * External members to add as group members. name must refer to an external group. (Requires a valid AD Trust configuration).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#external_members UserGroupMembership#external_members}
  */
  readonly externalMembers?: string[];
  /**
  * **deprecated** User group to add. Will be replaced by groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#group UserGroupMembership#group}
  */
  readonly group?: string;
  /**
  * User groups to add as group members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#groups UserGroupMembership#groups}
  */
  readonly groups?: string[];
  /**
  * Unique identifier to differentiate multiple user group membership resources on the same group. Manadatory for using users/groups/external_members configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#identifier UserGroupMembership#identifier}
  */
  readonly identifier?: string;
  /**
  * Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#name UserGroupMembership#name}
  */
  readonly name: string;
  /**
  * **deprecated** User to add. Will be replaced by users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#user UserGroupMembership#user}
  */
  readonly user?: string;
  /**
  * Users to add as group members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#users UserGroupMembership#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership freeipa_user_group_membership}
*/
export class UserGroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_user_group_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroupMembership to import
  * @param importFromId The id of the existing UserGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_user_group_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.3/docs/resources/user_group_membership freeipa_user_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_user_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.3',
        providerVersionConstraint: '5.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalMember = config.externalMember;
    this._externalMembers = config.externalMembers;
    this._group = config.group;
    this._groups = config.groups;
    this._identifier = config.identifier;
    this._name = config.name;
    this._user = config.user;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_member - computed: false, optional: true, required: false
  private _externalMember?: string; 
  public get externalMember() {
    return this.getStringAttribute('external_member');
  }
  public set externalMember(value: string) {
    this._externalMember = value;
  }
  public resetExternalMember() {
    this._externalMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMemberInput() {
    return this._externalMember;
  }

  // external_members - computed: false, optional: true, required: false
  private _externalMembers?: string[]; 
  public get externalMembers() {
    return this.getListAttribute('external_members');
  }
  public set externalMembers(value: string[]) {
    this._externalMembers = value;
  }
  public resetExternalMembers() {
    this._externalMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMembersInput() {
    return this._externalMembers;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_member: cdktf.stringToTerraform(this._externalMember),
      external_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalMembers),
      group: cdktf.stringToTerraform(this._group),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      user: cdktf.stringToTerraform(this._user),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_member: {
        value: cdktf.stringToHclTerraform(this._externalMember),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalMembers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
