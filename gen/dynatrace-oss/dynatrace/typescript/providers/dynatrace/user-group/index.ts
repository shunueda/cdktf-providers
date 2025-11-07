// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, then the group has the access account rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#access_account UserGroup#access_account}
  */
  readonly accessAccount?: boolean | cdktf.IResolvable;
  /**
  * If `true`, then the group has the cluster administrator rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#cluster_admin UserGroup#cluster_admin}
  */
  readonly clusterAdmin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#id UserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LDAP group names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#ldap_groups UserGroup#ldap_groups}
  */
  readonly ldapGroups?: string[];
  /**
  * If `true`, then the group has the manage account rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#manage_account UserGroup#manage_account}
  */
  readonly manageAccount?: boolean | cdktf.IResolvable;
  /**
  * The name of the user group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#name UserGroup#name}
  */
  readonly name: string;
  /**
  * SSO group names. If defined it's used to map SSO group name to Dynatrace group name, otherwise mapping is done by group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#sso_groups UserGroup#sso_groups}
  */
  readonly ssoGroups?: string[];
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#permissions UserGroup#permissions}
  */
  readonly permissions?: UserGroupPermissions;
}
export interface UserGroupPermissionsGrant {
  /**
  * The ids of the environments this permission grants the user access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#environments UserGroup#environments}
  */
  readonly environments?: string[];
  /**
  * The permission. Possible values are `VIEWER`, `MANAGE_SETTINGS`, `AGENT_INSTALL`, `LOG_VIEWER`, `VIEW_SENSITIVE_REQUEST_DATA`, `CONFIGURE_REQUEST_CAPTURE_DATA`, `REPLAY_SESSION_DATA`, `REPLAY_SESSION_DATA_WITHOUT_MASKING`, `MANAGE_SECURITY_PROBLEMS` and `MANAGE_SUPPORT_TICKETS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#permission UserGroup#permission}
  */
  readonly permission: string;
}

export function userGroupPermissionsGrantToTerraform(struct?: UserGroupPermissionsGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environments),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function userGroupPermissionsGrantToHclTerraform(struct?: UserGroupPermissionsGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environments),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environments !== undefined) {
      hasAnyValues = true;
      internalValueResult.environments = this._environments;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environments = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environments = value.environments;
      this._permission = value.permission;
    }
  }

  // environments - computed: false, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class UserGroupPermissionsGrantList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsGrant[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsGrantOutputReference {
    return new UserGroupPermissionsGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissions {
  /**
  * grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#grant UserGroup#grant}
  */
  readonly grant: UserGroupPermissionsGrant[] | cdktf.IResolvable;
}

export function userGroupPermissionsToTerraform(struct?: UserGroupPermissionsOutputReference | UserGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grant: cdktf.listMapper(userGroupPermissionsGrantToTerraform, true)(struct!.grant),
  }
}


export function userGroupPermissionsToHclTerraform(struct?: UserGroupPermissionsOutputReference | UserGroupPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grant: {
      value: cdktf.listMapperHcl(userGroupPermissionsGrantToHclTerraform, true)(struct!.grant),
      isBlock: true,
      type: "list",
      storageClassType: "UserGroupPermissionsGrantList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grant = this._grant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grant.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grant.internalValue = value.grant;
    }
  }

  // grant - computed: false, optional: false, required: true
  private _grant = new UserGroupPermissionsGrantList(this, "grant", false);
  public get grant() {
    return this._grant;
  }
  public putGrant(value: UserGroupPermissionsGrant[] | cdktf.IResolvable) {
    this._grant.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group dynatrace_user_group}
*/
export class UserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroup to import
  * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_group dynatrace_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_user_group',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessAccount = config.accessAccount;
    this._clusterAdmin = config.clusterAdmin;
    this._id = config.id;
    this._ldapGroups = config.ldapGroups;
    this._manageAccount = config.manageAccount;
    this._name = config.name;
    this._ssoGroups = config.ssoGroups;
    this._permissions.internalValue = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_account - computed: false, optional: true, required: false
  private _accessAccount?: boolean | cdktf.IResolvable; 
  public get accessAccount() {
    return this.getBooleanAttribute('access_account');
  }
  public set accessAccount(value: boolean | cdktf.IResolvable) {
    this._accessAccount = value;
  }
  public resetAccessAccount() {
    this._accessAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAccountInput() {
    return this._accessAccount;
  }

  // cluster_admin - computed: false, optional: true, required: false
  private _clusterAdmin?: boolean | cdktf.IResolvable; 
  public get clusterAdmin() {
    return this.getBooleanAttribute('cluster_admin');
  }
  public set clusterAdmin(value: boolean | cdktf.IResolvable) {
    this._clusterAdmin = value;
  }
  public resetClusterAdmin() {
    this._clusterAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminInput() {
    return this._clusterAdmin;
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

  // ldap_groups - computed: false, optional: true, required: false
  private _ldapGroups?: string[]; 
  public get ldapGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('ldap_groups'));
  }
  public set ldapGroups(value: string[]) {
    this._ldapGroups = value;
  }
  public resetLdapGroups() {
    this._ldapGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupsInput() {
    return this._ldapGroups;
  }

  // manage_account - computed: false, optional: true, required: false
  private _manageAccount?: boolean | cdktf.IResolvable; 
  public get manageAccount() {
    return this.getBooleanAttribute('manage_account');
  }
  public set manageAccount(value: boolean | cdktf.IResolvable) {
    this._manageAccount = value;
  }
  public resetManageAccount() {
    this._manageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageAccountInput() {
    return this._manageAccount;
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

  // sso_groups - computed: false, optional: true, required: false
  private _ssoGroups?: string[]; 
  public get ssoGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('sso_groups'));
  }
  public set ssoGroups(value: string[]) {
    this._ssoGroups = value;
  }
  public resetSsoGroups() {
    this._ssoGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoGroupsInput() {
    return this._ssoGroups;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new UserGroupPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: UserGroupPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_account: cdktf.booleanToTerraform(this._accessAccount),
      cluster_admin: cdktf.booleanToTerraform(this._clusterAdmin),
      id: cdktf.stringToTerraform(this._id),
      ldap_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldapGroups),
      manage_account: cdktf.booleanToTerraform(this._manageAccount),
      name: cdktf.stringToTerraform(this._name),
      sso_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ssoGroups),
      permissions: userGroupPermissionsToTerraform(this._permissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_account: {
        value: cdktf.booleanToHclTerraform(this._accessAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_admin: {
        value: cdktf.booleanToHclTerraform(this._clusterAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldapGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      manage_account: {
        value: cdktf.booleanToHclTerraform(this._manageAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ssoGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      permissions: {
        value: userGroupPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
