// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_user_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RbacGroupUserMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * RBAC permission group name. This resource is authoritative for the group's user membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_user_membership#group_name RbacGroupUserMembership#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_user_membership#id RbacGroupUserMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, deleting this resource will remove all users from the group. Default is false (the users are left in place).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_user_membership#remove_users_on_destroy RbacGroupUserMembership#remove_users_on_destroy}
  */
  readonly removeUsersOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Complete set of user names that must be members of the group (authoritative).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_user_membership#user_names RbacGroupUserMembership#user_names}
  */
  readonly userNames: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_user_membership aviatrix_rbac_group_user_membership}
*/
export class RbacGroupUserMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_rbac_group_user_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RbacGroupUserMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RbacGroupUserMembership to import
  * @param importFromId The id of the existing RbacGroupUserMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_user_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RbacGroupUserMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_rbac_group_user_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_user_membership aviatrix_rbac_group_user_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RbacGroupUserMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: RbacGroupUserMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_rbac_group_user_membership',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupName = config.groupName;
    this._id = config.id;
    this._removeUsersOnDestroy = config.removeUsersOnDestroy;
    this._userNames = config.userNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // remove_users_on_destroy - computed: false, optional: true, required: false
  private _removeUsersOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeUsersOnDestroy() {
    return this.getBooleanAttribute('remove_users_on_destroy');
  }
  public set removeUsersOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeUsersOnDestroy = value;
  }
  public resetRemoveUsersOnDestroy() {
    this._removeUsersOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeUsersOnDestroyInput() {
    return this._removeUsersOnDestroy;
  }

  // user_names - computed: false, optional: false, required: true
  private _userNames?: string[]; 
  public get userNames() {
    return cdktf.Fn.tolist(this.getListAttribute('user_names'));
  }
  public set userNames(value: string[]) {
    this._userNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNamesInput() {
    return this._userNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      remove_users_on_destroy: cdktf.booleanToTerraform(this._removeUsersOnDestroy),
      user_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_users_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._removeUsersOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
