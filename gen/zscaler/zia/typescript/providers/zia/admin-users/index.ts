// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#admin_scope_type AdminUsers#admin_scope_type}
  */
  readonly adminScopeType?: string;
  /**
  * Additional information about the admin or auditor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#comments AdminUsers#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#disabled AdminUsers#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Admin or auditor's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#email AdminUsers#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#is_auditor AdminUsers#is_auditor}
  */
  readonly isAuditor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#is_exec_mobile_app_enabled AdminUsers#is_exec_mobile_app_enabled}
  */
  readonly isExecMobileAppEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#is_non_editable AdminUsers#is_non_editable}
  */
  readonly isNonEditable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#is_password_expired AdminUsers#is_password_expired}
  */
  readonly isPasswordExpired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#is_password_login_allowed AdminUsers#is_password_login_allowed}
  */
  readonly isPasswordLoginAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#is_product_update_comm_enabled AdminUsers#is_product_update_comm_enabled}
  */
  readonly isProductUpdateCommEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#is_security_report_comm_enabled AdminUsers#is_security_report_comm_enabled}
  */
  readonly isSecurityReportCommEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#is_service_update_comm_enabled AdminUsers#is_service_update_comm_enabled}
  */
  readonly isServiceUpdateCommEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#login_name AdminUsers#login_name}
  */
  readonly loginName: string;
  /**
  * The admin's password. If admin single sign-on (SSO) is disabled, then this field is mandatory for POST requests. This information is not provided in a GET response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#password AdminUsers#password}
  */
  readonly password?: string;
  /**
  * Admin or auditor's username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#username AdminUsers#username}
  */
  readonly username: string;
  /**
  * admin_scope_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#admin_scope_entities AdminUsers#admin_scope_entities}
  */
  readonly adminScopeEntities?: AdminUsersAdminScopeEntities;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#role AdminUsers#role}
  */
  readonly role?: AdminUsersRole[] | cdktf.IResolvable;
}
export interface AdminUsersAdminScopeEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#id AdminUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function adminUsersAdminScopeEntitiesToTerraform(struct?: AdminUsersAdminScopeEntitiesOutputReference | AdminUsersAdminScopeEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function adminUsersAdminScopeEntitiesToHclTerraform(struct?: AdminUsersAdminScopeEntitiesOutputReference | AdminUsersAdminScopeEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminUsersAdminScopeEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdminUsersAdminScopeEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminUsersAdminScopeEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface AdminUsersRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#id AdminUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function adminUsersRoleToTerraform(struct?: AdminUsersRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function adminUsersRoleToHclTerraform(struct?: AdminUsersRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminUsersRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdminUsersRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminUsersRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class AdminUsersRoleList extends cdktf.ComplexList {
  public internalValue? : AdminUsersRole[] | cdktf.IResolvable

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
  public get(index: number): AdminUsersRoleOutputReference {
    return new AdminUsersRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users zia_admin_users}
*/
export class AdminUsers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_admin_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminUsers to import
  * @param importFromId The id of the existing AdminUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_admin_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/admin_users zia_admin_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminUsersConfig
  */
  public constructor(scope: Construct, id: string, config: AdminUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_admin_users',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminScopeType = config.adminScopeType;
    this._comments = config.comments;
    this._disabled = config.disabled;
    this._email = config.email;
    this._isAuditor = config.isAuditor;
    this._isExecMobileAppEnabled = config.isExecMobileAppEnabled;
    this._isNonEditable = config.isNonEditable;
    this._isPasswordExpired = config.isPasswordExpired;
    this._isPasswordLoginAllowed = config.isPasswordLoginAllowed;
    this._isProductUpdateCommEnabled = config.isProductUpdateCommEnabled;
    this._isSecurityReportCommEnabled = config.isSecurityReportCommEnabled;
    this._isServiceUpdateCommEnabled = config.isServiceUpdateCommEnabled;
    this._loginName = config.loginName;
    this._password = config.password;
    this._username = config.username;
    this._adminScopeEntities.internalValue = config.adminScopeEntities;
    this._role.internalValue = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_id - computed: true, optional: false, required: false
  public get adminId() {
    return this.getNumberAttribute('admin_id');
  }

  // admin_scope_type - computed: true, optional: true, required: false
  private _adminScopeType?: string; 
  public get adminScopeType() {
    return this.getStringAttribute('admin_scope_type');
  }
  public set adminScopeType(value: string) {
    this._adminScopeType = value;
  }
  public resetAdminScopeType() {
    this._adminScopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminScopeTypeInput() {
    return this._adminScopeType;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // is_auditor - computed: false, optional: true, required: false
  private _isAuditor?: boolean | cdktf.IResolvable; 
  public get isAuditor() {
    return this.getBooleanAttribute('is_auditor');
  }
  public set isAuditor(value: boolean | cdktf.IResolvable) {
    this._isAuditor = value;
  }
  public resetIsAuditor() {
    this._isAuditor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuditorInput() {
    return this._isAuditor;
  }

  // is_exec_mobile_app_enabled - computed: false, optional: true, required: false
  private _isExecMobileAppEnabled?: boolean | cdktf.IResolvable; 
  public get isExecMobileAppEnabled() {
    return this.getBooleanAttribute('is_exec_mobile_app_enabled');
  }
  public set isExecMobileAppEnabled(value: boolean | cdktf.IResolvable) {
    this._isExecMobileAppEnabled = value;
  }
  public resetIsExecMobileAppEnabled() {
    this._isExecMobileAppEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExecMobileAppEnabledInput() {
    return this._isExecMobileAppEnabled;
  }

  // is_non_editable - computed: false, optional: true, required: false
  private _isNonEditable?: boolean | cdktf.IResolvable; 
  public get isNonEditable() {
    return this.getBooleanAttribute('is_non_editable');
  }
  public set isNonEditable(value: boolean | cdktf.IResolvable) {
    this._isNonEditable = value;
  }
  public resetIsNonEditable() {
    this._isNonEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNonEditableInput() {
    return this._isNonEditable;
  }

  // is_password_expired - computed: false, optional: true, required: false
  private _isPasswordExpired?: boolean | cdktf.IResolvable; 
  public get isPasswordExpired() {
    return this.getBooleanAttribute('is_password_expired');
  }
  public set isPasswordExpired(value: boolean | cdktf.IResolvable) {
    this._isPasswordExpired = value;
  }
  public resetIsPasswordExpired() {
    this._isPasswordExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPasswordExpiredInput() {
    return this._isPasswordExpired;
  }

  // is_password_login_allowed - computed: false, optional: true, required: false
  private _isPasswordLoginAllowed?: boolean | cdktf.IResolvable; 
  public get isPasswordLoginAllowed() {
    return this.getBooleanAttribute('is_password_login_allowed');
  }
  public set isPasswordLoginAllowed(value: boolean | cdktf.IResolvable) {
    this._isPasswordLoginAllowed = value;
  }
  public resetIsPasswordLoginAllowed() {
    this._isPasswordLoginAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPasswordLoginAllowedInput() {
    return this._isPasswordLoginAllowed;
  }

  // is_product_update_comm_enabled - computed: false, optional: true, required: false
  private _isProductUpdateCommEnabled?: boolean | cdktf.IResolvable; 
  public get isProductUpdateCommEnabled() {
    return this.getBooleanAttribute('is_product_update_comm_enabled');
  }
  public set isProductUpdateCommEnabled(value: boolean | cdktf.IResolvable) {
    this._isProductUpdateCommEnabled = value;
  }
  public resetIsProductUpdateCommEnabled() {
    this._isProductUpdateCommEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProductUpdateCommEnabledInput() {
    return this._isProductUpdateCommEnabled;
  }

  // is_security_report_comm_enabled - computed: false, optional: true, required: false
  private _isSecurityReportCommEnabled?: boolean | cdktf.IResolvable; 
  public get isSecurityReportCommEnabled() {
    return this.getBooleanAttribute('is_security_report_comm_enabled');
  }
  public set isSecurityReportCommEnabled(value: boolean | cdktf.IResolvable) {
    this._isSecurityReportCommEnabled = value;
  }
  public resetIsSecurityReportCommEnabled() {
    this._isSecurityReportCommEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecurityReportCommEnabledInput() {
    return this._isSecurityReportCommEnabled;
  }

  // is_service_update_comm_enabled - computed: false, optional: true, required: false
  private _isServiceUpdateCommEnabled?: boolean | cdktf.IResolvable; 
  public get isServiceUpdateCommEnabled() {
    return this.getBooleanAttribute('is_service_update_comm_enabled');
  }
  public set isServiceUpdateCommEnabled(value: boolean | cdktf.IResolvable) {
    this._isServiceUpdateCommEnabled = value;
  }
  public resetIsServiceUpdateCommEnabled() {
    this._isServiceUpdateCommEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isServiceUpdateCommEnabledInput() {
    return this._isServiceUpdateCommEnabled;
  }

  // login_name - computed: false, optional: false, required: true
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // admin_scope_entities - computed: false, optional: true, required: false
  private _adminScopeEntities = new AdminUsersAdminScopeEntitiesOutputReference(this, "admin_scope_entities");
  public get adminScopeEntities() {
    return this._adminScopeEntities;
  }
  public putAdminScopeEntities(value: AdminUsersAdminScopeEntities) {
    this._adminScopeEntities.internalValue = value;
  }
  public resetAdminScopeEntities() {
    this._adminScopeEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminScopeEntitiesInput() {
    return this._adminScopeEntities.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role = new AdminUsersRoleList(this, "role", true);
  public get role() {
    return this._role;
  }
  public putRole(value: AdminUsersRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_scope_type: cdktf.stringToTerraform(this._adminScopeType),
      comments: cdktf.stringToTerraform(this._comments),
      disabled: cdktf.booleanToTerraform(this._disabled),
      email: cdktf.stringToTerraform(this._email),
      is_auditor: cdktf.booleanToTerraform(this._isAuditor),
      is_exec_mobile_app_enabled: cdktf.booleanToTerraform(this._isExecMobileAppEnabled),
      is_non_editable: cdktf.booleanToTerraform(this._isNonEditable),
      is_password_expired: cdktf.booleanToTerraform(this._isPasswordExpired),
      is_password_login_allowed: cdktf.booleanToTerraform(this._isPasswordLoginAllowed),
      is_product_update_comm_enabled: cdktf.booleanToTerraform(this._isProductUpdateCommEnabled),
      is_security_report_comm_enabled: cdktf.booleanToTerraform(this._isSecurityReportCommEnabled),
      is_service_update_comm_enabled: cdktf.booleanToTerraform(this._isServiceUpdateCommEnabled),
      login_name: cdktf.stringToTerraform(this._loginName),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      admin_scope_entities: adminUsersAdminScopeEntitiesToTerraform(this._adminScopeEntities.internalValue),
      role: cdktf.listMapper(adminUsersRoleToTerraform, true)(this._role.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_scope_type: {
        value: cdktf.stringToHclTerraform(this._adminScopeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auditor: {
        value: cdktf.booleanToHclTerraform(this._isAuditor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_exec_mobile_app_enabled: {
        value: cdktf.booleanToHclTerraform(this._isExecMobileAppEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_non_editable: {
        value: cdktf.booleanToHclTerraform(this._isNonEditable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_password_expired: {
        value: cdktf.booleanToHclTerraform(this._isPasswordExpired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_password_login_allowed: {
        value: cdktf.booleanToHclTerraform(this._isPasswordLoginAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_product_update_comm_enabled: {
        value: cdktf.booleanToHclTerraform(this._isProductUpdateCommEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_security_report_comm_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSecurityReportCommEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_service_update_comm_enabled: {
        value: cdktf.booleanToHclTerraform(this._isServiceUpdateCommEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_scope_entities: {
        value: adminUsersAdminScopeEntitiesToHclTerraform(this._adminScopeEntities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AdminUsersAdminScopeEntitiesList",
      },
      role: {
        value: cdktf.listMapperHcl(adminUsersRoleToHclTerraform, true)(this._role.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AdminUsersRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
