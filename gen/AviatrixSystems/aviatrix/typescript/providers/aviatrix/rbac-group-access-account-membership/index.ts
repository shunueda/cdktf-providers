// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_access_account_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RbacGroupAccessAccountMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Complete set of access account names that must be members of the group (authoritative).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_access_account_membership#access_account_names RbacGroupAccessAccountMembership#access_account_names}
  */
  readonly accessAccountNames: string[];
  /**
  * RBAC permission group name. This resource is authoritative for the group's access account membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_access_account_membership#group_name RbacGroupAccessAccountMembership#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_access_account_membership#id RbacGroupAccessAccountMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, deleting this resource will remove all access accounts from the group. Default is false (the access accounts are left in place).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_access_account_membership#remove_access_accounts_on_destroy RbacGroupAccessAccountMembership#remove_access_accounts_on_destroy}
  */
  readonly removeAccessAccountsOnDestroy?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_access_account_membership aviatrix_rbac_group_access_account_membership}
*/
export class RbacGroupAccessAccountMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_rbac_group_access_account_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RbacGroupAccessAccountMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RbacGroupAccessAccountMembership to import
  * @param importFromId The id of the existing RbacGroupAccessAccountMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_access_account_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RbacGroupAccessAccountMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_rbac_group_access_account_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/rbac_group_access_account_membership aviatrix_rbac_group_access_account_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RbacGroupAccessAccountMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: RbacGroupAccessAccountMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_rbac_group_access_account_membership',
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
    this._accessAccountNames = config.accessAccountNames;
    this._groupName = config.groupName;
    this._id = config.id;
    this._removeAccessAccountsOnDestroy = config.removeAccessAccountsOnDestroy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_account_names - computed: false, optional: false, required: true
  private _accessAccountNames?: string[]; 
  public get accessAccountNames() {
    return cdktf.Fn.tolist(this.getListAttribute('access_account_names'));
  }
  public set accessAccountNames(value: string[]) {
    this._accessAccountNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAccountNamesInput() {
    return this._accessAccountNames;
  }

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

  // remove_access_accounts_on_destroy - computed: false, optional: true, required: false
  private _removeAccessAccountsOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeAccessAccountsOnDestroy() {
    return this.getBooleanAttribute('remove_access_accounts_on_destroy');
  }
  public set removeAccessAccountsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeAccessAccountsOnDestroy = value;
  }
  public resetRemoveAccessAccountsOnDestroy() {
    this._removeAccessAccountsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAccessAccountsOnDestroyInput() {
    return this._removeAccessAccountsOnDestroy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_account_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessAccountNames),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      remove_access_accounts_on_destroy: cdktf.booleanToTerraform(this._removeAccessAccountsOnDestroy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_account_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessAccountNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      remove_access_accounts_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._removeAccessAccountsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
