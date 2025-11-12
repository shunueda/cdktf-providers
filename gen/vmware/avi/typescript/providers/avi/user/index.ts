// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#anonymous_user User#anonymous_user}
  */
  readonly anonymousUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#date_joined User#date_joined}
  */
  readonly dateJoined?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#default_tenant_ref User#default_tenant_ref}
  */
  readonly defaultTenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#full_name User#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#is_active User#is_active}
  */
  readonly isActive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#is_internal_user User#is_internal_user}
  */
  readonly isInternalUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#is_staff User#is_staff}
  */
  readonly isStaff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#is_superuser User#is_superuser}
  */
  readonly isSuperuser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#local User#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#logged_in User#logged_in}
  */
  readonly loggedIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#passwordless User#passwordless}
  */
  readonly passwordless?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#recovery_token User#recovery_token}
  */
  readonly recoveryToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#service_user User#service_user}
  */
  readonly serviceUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#token_expiration_date User#token_expiration_date}
  */
  readonly tokenExpirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#ui_property User#ui_property}
  */
  readonly uiProperty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#uid User#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#unix_crypt_password User#unix_crypt_password}
  */
  readonly unixCryptPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#user_profile_ref User#user_profile_ref}
  */
  readonly userProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#username User#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#uuid User#uuid}
  */
  readonly uuid?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#access User#access}
  */
  readonly access?: UserAccess[] | cdktf.IResolvable;
}
export interface UserAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#all_tenants User#all_tenants}
  */
  readonly allTenants?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#role_ref User#role_ref}
  */
  readonly roleRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#tenant_ref User#tenant_ref}
  */
  readonly tenantRef?: string;
}

export function userAccessToTerraform(struct?: UserAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_tenants: cdktf.stringToTerraform(struct!.allTenants),
    role_ref: cdktf.stringToTerraform(struct!.roleRef),
    tenant_ref: cdktf.stringToTerraform(struct!.tenantRef),
  }
}


export function userAccessToHclTerraform(struct?: UserAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_tenants: {
      value: cdktf.stringToHclTerraform(struct!.allTenants),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_ref: {
      value: cdktf.stringToHclTerraform(struct!.roleRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_ref: {
      value: cdktf.stringToHclTerraform(struct!.tenantRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allTenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTenants = this._allTenants;
    }
    if (this._roleRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRef = this._roleRef;
    }
    if (this._tenantRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantRef = this._tenantRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allTenants = undefined;
      this._roleRef = undefined;
      this._tenantRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allTenants = value.allTenants;
      this._roleRef = value.roleRef;
      this._tenantRef = value.tenantRef;
    }
  }

  // all_tenants - computed: false, optional: true, required: false
  private _allTenants?: string; 
  public get allTenants() {
    return this.getStringAttribute('all_tenants');
  }
  public set allTenants(value: string) {
    this._allTenants = value;
  }
  public resetAllTenants() {
    this._allTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTenantsInput() {
    return this._allTenants;
  }

  // role_ref - computed: true, optional: true, required: false
  private _roleRef?: string; 
  public get roleRef() {
    return this.getStringAttribute('role_ref');
  }
  public set roleRef(value: string) {
    this._roleRef = value;
  }
  public resetRoleRef() {
    this._roleRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }
}

export class UserAccessList extends cdktf.ComplexList {
  public internalValue? : UserAccess[] | cdktf.IResolvable

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
  public get(index: number): UserAccessOutputReference {
    return new UserAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user avi_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/user avi_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_user',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anonymousUser = config.anonymousUser;
    this._dateJoined = config.dateJoined;
    this._defaultTenantRef = config.defaultTenantRef;
    this._email = config.email;
    this._fullName = config.fullName;
    this._id = config.id;
    this._isActive = config.isActive;
    this._isInternalUser = config.isInternalUser;
    this._isStaff = config.isStaff;
    this._isSuperuser = config.isSuperuser;
    this._local = config.local;
    this._loggedIn = config.loggedIn;
    this._name = config.name;
    this._password = config.password;
    this._passwordless = config.passwordless;
    this._recoveryToken = config.recoveryToken;
    this._serviceUser = config.serviceUser;
    this._tokenExpirationDate = config.tokenExpirationDate;
    this._uiProperty = config.uiProperty;
    this._uid = config.uid;
    this._unixCryptPassword = config.unixCryptPassword;
    this._userProfileRef = config.userProfileRef;
    this._username = config.username;
    this._uuid = config.uuid;
    this._access.internalValue = config.access;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymous_user - computed: false, optional: true, required: false
  private _anonymousUser?: string; 
  public get anonymousUser() {
    return this.getStringAttribute('anonymous_user');
  }
  public set anonymousUser(value: string) {
    this._anonymousUser = value;
  }
  public resetAnonymousUser() {
    this._anonymousUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousUserInput() {
    return this._anonymousUser;
  }

  // date_joined - computed: true, optional: true, required: false
  private _dateJoined?: string; 
  public get dateJoined() {
    return this.getStringAttribute('date_joined');
  }
  public set dateJoined(value: string) {
    this._dateJoined = value;
  }
  public resetDateJoined() {
    this._dateJoined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateJoinedInput() {
    return this._dateJoined;
  }

  // default_tenant_ref - computed: true, optional: true, required: false
  private _defaultTenantRef?: string; 
  public get defaultTenantRef() {
    return this.getStringAttribute('default_tenant_ref');
  }
  public set defaultTenantRef(value: string) {
    this._defaultTenantRef = value;
  }
  public resetDefaultTenantRef() {
    this._defaultTenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTenantRefInput() {
    return this._defaultTenantRef;
  }

  // email - computed: true, optional: true, required: false
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

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: string; 
  public get isActive() {
    return this.getStringAttribute('is_active');
  }
  public set isActive(value: string) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_internal_user - computed: false, optional: true, required: false
  private _isInternalUser?: string; 
  public get isInternalUser() {
    return this.getStringAttribute('is_internal_user');
  }
  public set isInternalUser(value: string) {
    this._isInternalUser = value;
  }
  public resetIsInternalUser() {
    this._isInternalUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInternalUserInput() {
    return this._isInternalUser;
  }

  // is_staff - computed: false, optional: true, required: false
  private _isStaff?: string; 
  public get isStaff() {
    return this.getStringAttribute('is_staff');
  }
  public set isStaff(value: string) {
    this._isStaff = value;
  }
  public resetIsStaff() {
    this._isStaff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStaffInput() {
    return this._isStaff;
  }

  // is_superuser - computed: false, optional: true, required: false
  private _isSuperuser?: string; 
  public get isSuperuser() {
    return this.getStringAttribute('is_superuser');
  }
  public set isSuperuser(value: string) {
    this._isSuperuser = value;
  }
  public resetIsSuperuser() {
    this._isSuperuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSuperuserInput() {
    return this._isSuperuser;
  }

  // local - computed: true, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // logged_in - computed: true, optional: true, required: false
  private _loggedIn?: string; 
  public get loggedIn() {
    return this.getStringAttribute('logged_in');
  }
  public set loggedIn(value: string) {
    this._loggedIn = value;
  }
  public resetLoggedIn() {
    this._loggedIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggedInInput() {
    return this._loggedIn;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // passwordless - computed: false, optional: true, required: false
  private _passwordless?: string; 
  public get passwordless() {
    return this.getStringAttribute('passwordless');
  }
  public set passwordless(value: string) {
    this._passwordless = value;
  }
  public resetPasswordless() {
    this._passwordless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessInput() {
    return this._passwordless;
  }

  // recovery_token - computed: true, optional: true, required: false
  private _recoveryToken?: string; 
  public get recoveryToken() {
    return this.getStringAttribute('recovery_token');
  }
  public set recoveryToken(value: string) {
    this._recoveryToken = value;
  }
  public resetRecoveryToken() {
    this._recoveryToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTokenInput() {
    return this._recoveryToken;
  }

  // service_user - computed: false, optional: true, required: false
  private _serviceUser?: string; 
  public get serviceUser() {
    return this.getStringAttribute('service_user');
  }
  public set serviceUser(value: string) {
    this._serviceUser = value;
  }
  public resetServiceUser() {
    this._serviceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUserInput() {
    return this._serviceUser;
  }

  // token_expiration_date - computed: true, optional: true, required: false
  private _tokenExpirationDate?: string; 
  public get tokenExpirationDate() {
    return this.getStringAttribute('token_expiration_date');
  }
  public set tokenExpirationDate(value: string) {
    this._tokenExpirationDate = value;
  }
  public resetTokenExpirationDate() {
    this._tokenExpirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExpirationDateInput() {
    return this._tokenExpirationDate;
  }

  // ui_property - computed: true, optional: true, required: false
  private _uiProperty?: string; 
  public get uiProperty() {
    return this.getStringAttribute('ui_property');
  }
  public set uiProperty(value: string) {
    this._uiProperty = value;
  }
  public resetUiProperty() {
    this._uiProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiPropertyInput() {
    return this._uiProperty;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // unix_crypt_password - computed: true, optional: true, required: false
  private _unixCryptPassword?: string; 
  public get unixCryptPassword() {
    return this.getStringAttribute('unix_crypt_password');
  }
  public set unixCryptPassword(value: string) {
    this._unixCryptPassword = value;
  }
  public resetUnixCryptPassword() {
    this._unixCryptPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixCryptPasswordInput() {
    return this._unixCryptPassword;
  }

  // user_profile_ref - computed: true, optional: true, required: false
  private _userProfileRef?: string; 
  public get userProfileRef() {
    return this.getStringAttribute('user_profile_ref');
  }
  public set userProfileRef(value: string) {
    this._userProfileRef = value;
  }
  public resetUserProfileRef() {
    this._userProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileRefInput() {
    return this._userProfileRef;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // access - computed: false, optional: true, required: false
  private _access = new UserAccessList(this, "access", false);
  public get access() {
    return this._access;
  }
  public putAccess(value: UserAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anonymous_user: cdktf.stringToTerraform(this._anonymousUser),
      date_joined: cdktf.stringToTerraform(this._dateJoined),
      default_tenant_ref: cdktf.stringToTerraform(this._defaultTenantRef),
      email: cdktf.stringToTerraform(this._email),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.stringToTerraform(this._isActive),
      is_internal_user: cdktf.stringToTerraform(this._isInternalUser),
      is_staff: cdktf.stringToTerraform(this._isStaff),
      is_superuser: cdktf.stringToTerraform(this._isSuperuser),
      local: cdktf.stringToTerraform(this._local),
      logged_in: cdktf.stringToTerraform(this._loggedIn),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      passwordless: cdktf.stringToTerraform(this._passwordless),
      recovery_token: cdktf.stringToTerraform(this._recoveryToken),
      service_user: cdktf.stringToTerraform(this._serviceUser),
      token_expiration_date: cdktf.stringToTerraform(this._tokenExpirationDate),
      ui_property: cdktf.stringToTerraform(this._uiProperty),
      uid: cdktf.stringToTerraform(this._uid),
      unix_crypt_password: cdktf.stringToTerraform(this._unixCryptPassword),
      user_profile_ref: cdktf.stringToTerraform(this._userProfileRef),
      username: cdktf.stringToTerraform(this._username),
      uuid: cdktf.stringToTerraform(this._uuid),
      access: cdktf.listMapper(userAccessToTerraform, true)(this._access.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anonymous_user: {
        value: cdktf.stringToHclTerraform(this._anonymousUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_joined: {
        value: cdktf.stringToHclTerraform(this._dateJoined),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tenant_ref: {
        value: cdktf.stringToHclTerraform(this._defaultTenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      is_active: {
        value: cdktf.stringToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_internal_user: {
        value: cdktf.stringToHclTerraform(this._isInternalUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_staff: {
        value: cdktf.stringToHclTerraform(this._isStaff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_superuser: {
        value: cdktf.stringToHclTerraform(this._isSuperuser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local: {
        value: cdktf.stringToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logged_in: {
        value: cdktf.stringToHclTerraform(this._loggedIn),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwordless: {
        value: cdktf.stringToHclTerraform(this._passwordless),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_token: {
        value: cdktf.stringToHclTerraform(this._recoveryToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_user: {
        value: cdktf.stringToHclTerraform(this._serviceUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_expiration_date: {
        value: cdktf.stringToHclTerraform(this._tokenExpirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ui_property: {
        value: cdktf.stringToHclTerraform(this._uiProperty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unix_crypt_password: {
        value: cdktf.stringToHclTerraform(this._unixCryptPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_profile_ref: {
        value: cdktf.stringToHclTerraform(this._userProfileRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access: {
        value: cdktf.listMapperHcl(userAccessToHclTerraform, true)(this._access.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserAccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
