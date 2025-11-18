// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserSaasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas#account_admin UserSaas#account_admin}
  */
  readonly accountAdmin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas#csp_roles UserSaas#csp_roles}
  */
  readonly cspRoles: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas#email UserSaas#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas#mfa_enabled UserSaas#mfa_enabled}
  */
  readonly mfaEnabled?: boolean | cdktf.IResolvable;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas#groups UserSaas#groups}
  */
  readonly groups?: UserSaasGroups[] | cdktf.IResolvable;
}
export interface UserSaasLogins {
}

export function userSaasLoginsToTerraform(struct?: UserSaasLogins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userSaasLoginsToHclTerraform(struct?: UserSaasLogins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserSaasLoginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserSaasLogins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSaasLogins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // csp_roles - computed: true, optional: false, required: false
  public get cspRoles() {
    return this.getListAttribute('csp_roles');
  }

  // cspm_roles - computed: true, optional: false, required: false
  public get cspmRoles() {
    return this.getListAttribute('cspm_roles');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}

export class UserSaasLoginsList extends cdktf.ComplexList {

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
  public get(index: number): UserSaasLoginsOutputReference {
    return new UserSaasLoginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSaasGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas#created UserSaas#created}
  */
  readonly created?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas#name UserSaas#name}
  */
  readonly name?: string;
}

export function userSaasGroupsToTerraform(struct?: UserSaasGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userSaasGroupsToHclTerraform(struct?: UserSaasGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserSaasGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserSaasGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSaasGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._name = value.name;
    }
  }

  // created - computed: false, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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
}

export class UserSaasGroupsList extends cdktf.ComplexList {
  public internalValue? : UserSaasGroups[] | cdktf.IResolvable

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
  public get(index: number): UserSaasGroupsOutputReference {
    return new UserSaasGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas aquasec_user_saas}
*/
export class UserSaas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_user_saas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserSaas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserSaas to import
  * @param importFromId The id of the existing UserSaas that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserSaas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_user_saas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/user_saas aquasec_user_saas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserSaasConfig
  */
  public constructor(scope: Construct, id: string, config: UserSaasConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_user_saas',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountAdmin = config.accountAdmin;
    this._cspRoles = config.cspRoles;
    this._email = config.email;
    this._mfaEnabled = config.mfaEnabled;
    this._groups.internalValue = config.groups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_admin - computed: false, optional: false, required: true
  private _accountAdmin?: boolean | cdktf.IResolvable; 
  public get accountAdmin() {
    return this.getBooleanAttribute('account_admin');
  }
  public set accountAdmin(value: boolean | cdktf.IResolvable) {
    this._accountAdmin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAdminInput() {
    return this._accountAdmin;
  }

  // confirmed - computed: true, optional: false, required: false
  public get confirmed() {
    return this.getBooleanAttribute('confirmed');
  }

  // count_failed_signin - computed: true, optional: false, required: false
  public get countFailedSignin() {
    return this.getNumberAttribute('count_failed_signin');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // csp_roles - computed: false, optional: false, required: true
  private _cspRoles?: string[]; 
  public get cspRoles() {
    return this.getListAttribute('csp_roles');
  }
  public set cspRoles(value: string[]) {
    this._cspRoles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspRolesInput() {
    return this._cspRoles;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_signin_attempt - computed: true, optional: false, required: false
  public get lastSigninAttempt() {
    return this.getStringAttribute('last_signin_attempt');
  }

  // logins - computed: true, optional: false, required: false
  private _logins = new UserSaasLoginsList(this, "logins", false);
  public get logins() {
    return this._logins;
  }

  // mfa_enabled - computed: false, optional: true, required: false
  private _mfaEnabled?: boolean | cdktf.IResolvable; 
  public get mfaEnabled() {
    return this.getBooleanAttribute('mfa_enabled');
  }
  public set mfaEnabled(value: boolean | cdktf.IResolvable) {
    this._mfaEnabled = value;
  }
  public resetMfaEnabled() {
    this._mfaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnabledInput() {
    return this._mfaEnabled;
  }

  // multiaccount - computed: true, optional: false, required: false
  public get multiaccount() {
    return this.getBooleanAttribute('multiaccount');
  }

  // password_reset - computed: true, optional: false, required: false
  public get passwordReset() {
    return this.getBooleanAttribute('password_reset');
  }

  // send_announcements - computed: true, optional: false, required: false
  public get sendAnnouncements() {
    return this.getBooleanAttribute('send_announcements');
  }

  // send_new_plugins - computed: true, optional: false, required: false
  public get sendNewPlugins() {
    return this.getBooleanAttribute('send_new_plugins');
  }

  // send_new_risks - computed: true, optional: false, required: false
  public get sendNewRisks() {
    return this.getBooleanAttribute('send_new_risks');
  }

  // send_scan_results - computed: true, optional: false, required: false
  public get sendScanResults() {
    return this.getBooleanAttribute('send_scan_results');
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new UserSaasGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: UserSaasGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_admin: cdktf.booleanToTerraform(this._accountAdmin),
      csp_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cspRoles),
      email: cdktf.stringToTerraform(this._email),
      mfa_enabled: cdktf.booleanToTerraform(this._mfaEnabled),
      groups: cdktf.listMapper(userSaasGroupsToTerraform, true)(this._groups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_admin: {
        value: cdktf.booleanToHclTerraform(this._accountAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      csp_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cspRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_enabled: {
        value: cdktf.booleanToHclTerraform(this._mfaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(userSaasGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserSaasGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
