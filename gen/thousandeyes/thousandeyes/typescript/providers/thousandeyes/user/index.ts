// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique IDs representing the roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#all_account_group_role_ids User#all_account_group_role_ids}
  */
  readonly allAccountGroupRoleIds?: string[];
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique ID of the login account group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#login_account_group_id User#login_account_group_id}
  */
  readonly loginAccountGroupId?: string;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#name User#name}
  */
  readonly name?: string;
  /**
  * account_group_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#account_group_roles User#account_group_roles}
  */
  readonly accountGroupRoles?: UserAccountGroupRoles[] | cdktf.IResolvable;
}
export interface UserAccountGroupRoles {
  /**
  * Unique ID of the account group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#account_group_id User#account_group_id}
  */
  readonly accountGroupId: string;
  /**
  * Unique role IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#role_ids User#role_ids}
  */
  readonly roleIds?: string[];
}

export function userAccountGroupRolesToTerraform(struct?: UserAccountGroupRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_group_id: cdktf.stringToTerraform(struct!.accountGroupId),
    role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleIds),
  }
}


export function userAccountGroupRolesToHclTerraform(struct?: UserAccountGroupRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_group_id: {
      value: cdktf.stringToHclTerraform(struct!.accountGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAccountGroupRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserAccountGroupRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGroupId = this._accountGroupId;
    }
    if (this._roleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleIds = this._roleIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAccountGroupRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountGroupId = undefined;
      this._roleIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountGroupId = value.accountGroupId;
      this._roleIds = value.roleIds;
    }
  }

  // account_group_id - computed: false, optional: false, required: true
  private _accountGroupId?: string; 
  public get accountGroupId() {
    return this.getStringAttribute('account_group_id');
  }
  public set accountGroupId(value: string) {
    this._accountGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupIdInput() {
    return this._accountGroupId;
  }

  // role_ids - computed: false, optional: true, required: false
  private _roleIds?: string[]; 
  public get roleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_ids'));
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  public resetRoleIds() {
    this._roleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }
}

export class UserAccountGroupRolesList extends cdktf.ComplexList {
  public internalValue? : UserAccountGroupRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UserAccountGroupRolesOutputReference {
    return new UserAccountGroupRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user thousandeyes_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/user thousandeyes_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_user',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.3',
        providerVersionConstraint: '3.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allAccountGroupRoleIds = config.allAccountGroupRoleIds;
    this._email = config.email;
    this._id = config.id;
    this._loginAccountGroupId = config.loginAccountGroupId;
    this._name = config.name;
    this._accountGroupRoles.internalValue = config.accountGroupRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_account_group_role_ids - computed: false, optional: true, required: false
  private _allAccountGroupRoleIds?: string[]; 
  public get allAccountGroupRoleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('all_account_group_role_ids'));
  }
  public set allAccountGroupRoleIds(value: string[]) {
    this._allAccountGroupRoleIds = value;
  }
  public resetAllAccountGroupRoleIds() {
    this._allAccountGroupRoleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allAccountGroupRoleIdsInput() {
    return this._allAccountGroupRoleIds;
  }

  // date_registered - computed: true, optional: false, required: false
  public get dateRegistered() {
    return this.getStringAttribute('date_registered');
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getStringAttribute('last_login');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // login_account_group_id - computed: false, optional: true, required: false
  private _loginAccountGroupId?: string; 
  public get loginAccountGroupId() {
    return this.getStringAttribute('login_account_group_id');
  }
  public set loginAccountGroupId(value: string) {
    this._loginAccountGroupId = value;
  }
  public resetLoginAccountGroupId() {
    this._loginAccountGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAccountGroupIdInput() {
    return this._loginAccountGroupId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // account_group_roles - computed: false, optional: true, required: false
  private _accountGroupRoles = new UserAccountGroupRolesList(this, "account_group_roles", true);
  public get accountGroupRoles() {
    return this._accountGroupRoles;
  }
  public putAccountGroupRoles(value: UserAccountGroupRoles[] | cdktf.IResolvable) {
    this._accountGroupRoles.internalValue = value;
  }
  public resetAccountGroupRoles() {
    this._accountGroupRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupRolesInput() {
    return this._accountGroupRoles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_account_group_role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allAccountGroupRoleIds),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      login_account_group_id: cdktf.stringToTerraform(this._loginAccountGroupId),
      name: cdktf.stringToTerraform(this._name),
      account_group_roles: cdktf.listMapper(userAccountGroupRolesToTerraform, true)(this._accountGroupRoles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_account_group_role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allAccountGroupRoleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      login_account_group_id: {
        value: cdktf.stringToHclTerraform(this._loginAccountGroupId),
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
      account_group_roles: {
        value: cdktf.listMapperHcl(userAccountGroupRolesToHclTerraform, true)(this._accountGroupRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserAccountGroupRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
