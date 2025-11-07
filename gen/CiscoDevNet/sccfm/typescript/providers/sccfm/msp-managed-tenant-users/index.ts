// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MspManagedTenantUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Universally unique identifier of the tenant to which the users should be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users#tenant_uid MspManagedTenantUsers#tenant_uid}
  */
  readonly tenantUid: string;
  /**
  * The list of users to be added to the tenant. You can add a maximum of 50 users at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users#users MspManagedTenantUsers#users}
  */
  readonly users: MspManagedTenantUsersUsers[] | cdktf.IResolvable;
}
export interface MspManagedTenantUsersUsers {
  /**
  * Whether the user is an API-only user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users#api_only_user MspManagedTenantUsers#api_only_user}
  */
  readonly apiOnlyUser: boolean | cdktf.IResolvable;
  /**
  * The roles to assign to the user in the CDO tenant. Note: this list can only contain one entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users#roles MspManagedTenantUsers#roles}
  */
  readonly roles: string[];
  /**
  * The username. This must be a valid e-mail address if the user is not an API-only user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users#username MspManagedTenantUsers#username}
  */
  readonly username: string;
}

export function mspManagedTenantUsersUsersToTerraform(struct?: MspManagedTenantUsersUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_only_user: cdktf.booleanToTerraform(struct!.apiOnlyUser),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function mspManagedTenantUsersUsersToHclTerraform(struct?: MspManagedTenantUsersUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_only_user: {
      value: cdktf.booleanToHclTerraform(struct!.apiOnlyUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MspManagedTenantUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MspManagedTenantUsersUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiOnlyUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiOnlyUser = this._apiOnlyUser;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MspManagedTenantUsersUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiOnlyUser = undefined;
      this._roles = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiOnlyUser = value.apiOnlyUser;
      this._roles = value.roles;
      this._username = value.username;
    }
  }

  // api_only_user - computed: false, optional: false, required: true
  private _apiOnlyUser?: boolean | cdktf.IResolvable; 
  public get apiOnlyUser() {
    return this.getBooleanAttribute('api_only_user');
  }
  public set apiOnlyUser(value: boolean | cdktf.IResolvable) {
    this._apiOnlyUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiOnlyUserInput() {
    return this._apiOnlyUser;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_in_scc_firewall_manager - computed: true, optional: false, required: false
  public get usernameInSccFirewallManager() {
    return this.getStringAttribute('username_in_scc_firewall_manager');
  }
}

export class MspManagedTenantUsersUsersList extends cdktf.ComplexList {
  public internalValue? : MspManagedTenantUsersUsers[] | cdktf.IResolvable

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
  public get(index: number): MspManagedTenantUsersUsersOutputReference {
    return new MspManagedTenantUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users sccfm_msp_managed_tenant_users}
*/
export class MspManagedTenantUsers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_msp_managed_tenant_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MspManagedTenantUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MspManagedTenantUsers to import
  * @param importFromId The id of the existing MspManagedTenantUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MspManagedTenantUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_msp_managed_tenant_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_users sccfm_msp_managed_tenant_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MspManagedTenantUsersConfig
  */
  public constructor(scope: Construct, id: string, config: MspManagedTenantUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_msp_managed_tenant_users',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._tenantUid = config.tenantUid;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // tenant_uid - computed: false, optional: false, required: true
  private _tenantUid?: string; 
  public get tenantUid() {
    return this.getStringAttribute('tenant_uid');
  }
  public set tenantUid(value: string) {
    this._tenantUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantUidInput() {
    return this._tenantUid;
  }

  // users - computed: false, optional: false, required: true
  private _users = new MspManagedTenantUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: MspManagedTenantUsersUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tenant_uid: cdktf.stringToTerraform(this._tenantUid),
      users: cdktf.listMapper(mspManagedTenantUsersUsersToTerraform, false)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tenant_uid: {
        value: cdktf.stringToHclTerraform(this._tenantUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(mspManagedTenantUsersUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MspManagedTenantUsersUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
