// https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#allow_guest AuthSettings#allow_guest}
  */
  readonly allowGuest: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#collapse_login_form AuthSettings#collapse_login_form}
  */
  readonly collapseLoginForm: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#email_verification AuthSettings#email_verification}
  */
  readonly emailVerification: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#guest_username AuthSettings#guest_username}
  */
  readonly guestUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#modules AuthSettings#modules}
  */
  readonly modules: AuthSettingsModules;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#per_project_permissions AuthSettings#per_project_permissions}
  */
  readonly perProjectPermissions: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#welcome_text AuthSettings#welcome_text}
  */
  readonly welcomeText: string;
}
export interface AuthSettingsModulesBasicHttp {
}

export function authSettingsModulesBasicHttpToTerraform(struct?: AuthSettingsModulesBasicHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authSettingsModulesBasicHttpToHclTerraform(struct?: AuthSettingsModulesBasicHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthSettingsModulesBasicHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesBasicHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesBasicHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AuthSettingsModulesBuiltIn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#change_passwords AuthSettings#change_passwords}
  */
  readonly changePasswords: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#registration AuthSettings#registration}
  */
  readonly registration: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#reset_passwords AuthSettings#reset_passwords}
  */
  readonly resetPasswords?: boolean | cdktf.IResolvable;
}

export function authSettingsModulesBuiltInToTerraform(struct?: AuthSettingsModulesBuiltIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_passwords: cdktf.booleanToTerraform(struct!.changePasswords),
    registration: cdktf.booleanToTerraform(struct!.registration),
    reset_passwords: cdktf.booleanToTerraform(struct!.resetPasswords),
  }
}


export function authSettingsModulesBuiltInToHclTerraform(struct?: AuthSettingsModulesBuiltIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.changePasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registration: {
      value: cdktf.booleanToHclTerraform(struct!.registration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.resetPasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSettingsModulesBuiltInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesBuiltIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changePasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.changePasswords = this._changePasswords;
    }
    if (this._registration !== undefined) {
      hasAnyValues = true;
      internalValueResult.registration = this._registration;
    }
    if (this._resetPasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetPasswords = this._resetPasswords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesBuiltIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._changePasswords = undefined;
      this._registration = undefined;
      this._resetPasswords = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._changePasswords = value.changePasswords;
      this._registration = value.registration;
      this._resetPasswords = value.resetPasswords;
    }
  }

  // change_passwords - computed: false, optional: false, required: true
  private _changePasswords?: boolean | cdktf.IResolvable; 
  public get changePasswords() {
    return this.getBooleanAttribute('change_passwords');
  }
  public set changePasswords(value: boolean | cdktf.IResolvable) {
    this._changePasswords = value;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordsInput() {
    return this._changePasswords;
  }

  // registration - computed: false, optional: false, required: true
  private _registration?: boolean | cdktf.IResolvable; 
  public get registration() {
    return this.getBooleanAttribute('registration');
  }
  public set registration(value: boolean | cdktf.IResolvable) {
    this._registration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationInput() {
    return this._registration;
  }

  // reset_passwords - computed: false, optional: true, required: false
  private _resetPasswords?: boolean | cdktf.IResolvable; 
  public get resetPasswords() {
    return this.getBooleanAttribute('reset_passwords');
  }
  public set resetPasswords(value: boolean | cdktf.IResolvable) {
    this._resetPasswords = value;
  }
  public resetResetPasswords() {
    this._resetPasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPasswordsInput() {
    return this._resetPasswords;
  }
}
export interface AuthSettingsModulesGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#create_new_users AuthSettings#create_new_users}
  */
  readonly createNewUsers: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#organizations AuthSettings#organizations}
  */
  readonly organizations: string;
}

export function authSettingsModulesGithubToTerraform(struct?: AuthSettingsModulesGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_new_users: cdktf.booleanToTerraform(struct!.createNewUsers),
    organizations: cdktf.stringToTerraform(struct!.organizations),
  }
}


export function authSettingsModulesGithubToHclTerraform(struct?: AuthSettingsModulesGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_new_users: {
      value: cdktf.booleanToHclTerraform(struct!.createNewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organizations: {
      value: cdktf.stringToHclTerraform(struct!.organizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSettingsModulesGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesGithub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createNewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNewUsers = this._createNewUsers;
    }
    if (this._organizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizations = this._organizations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createNewUsers = undefined;
      this._organizations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createNewUsers = value.createNewUsers;
      this._organizations = value.organizations;
    }
  }

  // create_new_users - computed: false, optional: false, required: true
  private _createNewUsers?: boolean | cdktf.IResolvable; 
  public get createNewUsers() {
    return this.getBooleanAttribute('create_new_users');
  }
  public set createNewUsers(value: boolean | cdktf.IResolvable) {
    this._createNewUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewUsersInput() {
    return this._createNewUsers;
  }

  // organizations - computed: false, optional: false, required: true
  private _organizations?: string; 
  public get organizations() {
    return this.getStringAttribute('organizations');
  }
  public set organizations(value: string) {
    this._organizations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }
}
export interface AuthSettingsModulesGithubApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#create_new_users AuthSettings#create_new_users}
  */
  readonly createNewUsers: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#organizations AuthSettings#organizations}
  */
  readonly organizations: string;
}

export function authSettingsModulesGithubAppToTerraform(struct?: AuthSettingsModulesGithubApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_new_users: cdktf.booleanToTerraform(struct!.createNewUsers),
    organizations: cdktf.stringToTerraform(struct!.organizations),
  }
}


export function authSettingsModulesGithubAppToHclTerraform(struct?: AuthSettingsModulesGithubApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_new_users: {
      value: cdktf.booleanToHclTerraform(struct!.createNewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organizations: {
      value: cdktf.stringToHclTerraform(struct!.organizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSettingsModulesGithubAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesGithubApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createNewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNewUsers = this._createNewUsers;
    }
    if (this._organizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizations = this._organizations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesGithubApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createNewUsers = undefined;
      this._organizations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createNewUsers = value.createNewUsers;
      this._organizations = value.organizations;
    }
  }

  // create_new_users - computed: false, optional: false, required: true
  private _createNewUsers?: boolean | cdktf.IResolvable; 
  public get createNewUsers() {
    return this.getBooleanAttribute('create_new_users');
  }
  public set createNewUsers(value: boolean | cdktf.IResolvable) {
    this._createNewUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewUsersInput() {
    return this._createNewUsers;
  }

  // organizations - computed: false, optional: false, required: true
  private _organizations?: string; 
  public get organizations() {
    return this.getStringAttribute('organizations');
  }
  public set organizations(value: string) {
    this._organizations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }
}
export interface AuthSettingsModulesGithubEnterprise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#create_new_users AuthSettings#create_new_users}
  */
  readonly createNewUsers: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#organizations AuthSettings#organizations}
  */
  readonly organizations: string;
}

export function authSettingsModulesGithubEnterpriseToTerraform(struct?: AuthSettingsModulesGithubEnterprise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_new_users: cdktf.booleanToTerraform(struct!.createNewUsers),
    organizations: cdktf.stringToTerraform(struct!.organizations),
  }
}


export function authSettingsModulesGithubEnterpriseToHclTerraform(struct?: AuthSettingsModulesGithubEnterprise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_new_users: {
      value: cdktf.booleanToHclTerraform(struct!.createNewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    organizations: {
      value: cdktf.stringToHclTerraform(struct!.organizations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSettingsModulesGithubEnterpriseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesGithubEnterprise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createNewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNewUsers = this._createNewUsers;
    }
    if (this._organizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizations = this._organizations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesGithubEnterprise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createNewUsers = undefined;
      this._organizations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createNewUsers = value.createNewUsers;
      this._organizations = value.organizations;
    }
  }

  // create_new_users - computed: false, optional: false, required: true
  private _createNewUsers?: boolean | cdktf.IResolvable; 
  public get createNewUsers() {
    return this.getBooleanAttribute('create_new_users');
  }
  public set createNewUsers(value: boolean | cdktf.IResolvable) {
    this._createNewUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewUsersInput() {
    return this._createNewUsers;
  }

  // organizations - computed: false, optional: false, required: true
  private _organizations?: string; 
  public get organizations() {
    return this.getStringAttribute('organizations');
  }
  public set organizations(value: string) {
    this._organizations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }
}
export interface AuthSettingsModulesGoogle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#all_domains AuthSettings#all_domains}
  */
  readonly allDomains: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#create_new_users AuthSettings#create_new_users}
  */
  readonly createNewUsers: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#domains AuthSettings#domains}
  */
  readonly domains?: string;
}

export function authSettingsModulesGoogleToTerraform(struct?: AuthSettingsModulesGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_domains: cdktf.booleanToTerraform(struct!.allDomains),
    create_new_users: cdktf.booleanToTerraform(struct!.createNewUsers),
    domains: cdktf.stringToTerraform(struct!.domains),
  }
}


export function authSettingsModulesGoogleToHclTerraform(struct?: AuthSettingsModulesGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_domains: {
      value: cdktf.booleanToHclTerraform(struct!.allDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_new_users: {
      value: cdktf.booleanToHclTerraform(struct!.createNewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domains: {
      value: cdktf.stringToHclTerraform(struct!.domains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSettingsModulesGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesGoogle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDomains = this._allDomains;
    }
    if (this._createNewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNewUsers = this._createNewUsers;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesGoogle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDomains = undefined;
      this._createNewUsers = undefined;
      this._domains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDomains = value.allDomains;
      this._createNewUsers = value.createNewUsers;
      this._domains = value.domains;
    }
  }

  // all_domains - computed: false, optional: false, required: true
  private _allDomains?: boolean | cdktf.IResolvable; 
  public get allDomains() {
    return this.getBooleanAttribute('all_domains');
  }
  public set allDomains(value: boolean | cdktf.IResolvable) {
    this._allDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allDomainsInput() {
    return this._allDomains;
  }

  // create_new_users - computed: false, optional: false, required: true
  private _createNewUsers?: boolean | cdktf.IResolvable; 
  public get createNewUsers() {
    return this.getBooleanAttribute('create_new_users');
  }
  public set createNewUsers(value: boolean | cdktf.IResolvable) {
    this._createNewUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewUsersInput() {
    return this._createNewUsers;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string; 
  public get domains() {
    return this.getStringAttribute('domains');
  }
  public set domains(value: string) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface AuthSettingsModulesJetbrainsSpace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#create_new_users AuthSettings#create_new_users}
  */
  readonly createNewUsers: boolean | cdktf.IResolvable;
}

export function authSettingsModulesJetbrainsSpaceToTerraform(struct?: AuthSettingsModulesJetbrainsSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_new_users: cdktf.booleanToTerraform(struct!.createNewUsers),
  }
}


export function authSettingsModulesJetbrainsSpaceToHclTerraform(struct?: AuthSettingsModulesJetbrainsSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_new_users: {
      value: cdktf.booleanToHclTerraform(struct!.createNewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSettingsModulesJetbrainsSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesJetbrainsSpace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createNewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNewUsers = this._createNewUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesJetbrainsSpace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createNewUsers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createNewUsers = value.createNewUsers;
    }
  }

  // create_new_users - computed: false, optional: false, required: true
  private _createNewUsers?: boolean | cdktf.IResolvable; 
  public get createNewUsers() {
    return this.getBooleanAttribute('create_new_users');
  }
  public set createNewUsers(value: boolean | cdktf.IResolvable) {
    this._createNewUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewUsersInput() {
    return this._createNewUsers;
  }
}
export interface AuthSettingsModulesLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#create_new_users AuthSettings#create_new_users}
  */
  readonly createNewUsers: boolean | cdktf.IResolvable;
}

export function authSettingsModulesLdapToTerraform(struct?: AuthSettingsModulesLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_new_users: cdktf.booleanToTerraform(struct!.createNewUsers),
  }
}


export function authSettingsModulesLdapToHclTerraform(struct?: AuthSettingsModulesLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_new_users: {
      value: cdktf.booleanToHclTerraform(struct!.createNewUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSettingsModulesLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createNewUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.createNewUsers = this._createNewUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createNewUsers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createNewUsers = value.createNewUsers;
    }
  }

  // create_new_users - computed: false, optional: false, required: true
  private _createNewUsers?: boolean | cdktf.IResolvable; 
  public get createNewUsers() {
    return this.getBooleanAttribute('create_new_users');
  }
  public set createNewUsers(value: boolean | cdktf.IResolvable) {
    this._createNewUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createNewUsersInput() {
    return this._createNewUsers;
  }
}
export interface AuthSettingsModulesToken {
}

export function authSettingsModulesTokenToTerraform(struct?: AuthSettingsModulesToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authSettingsModulesTokenToHclTerraform(struct?: AuthSettingsModulesToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthSettingsModulesTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModulesToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModulesToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AuthSettingsModules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#basic_http AuthSettings#basic_http}
  */
  readonly basicHttp?: AuthSettingsModulesBasicHttp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#built_in AuthSettings#built_in}
  */
  readonly builtIn?: AuthSettingsModulesBuiltIn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#github AuthSettings#github}
  */
  readonly github?: AuthSettingsModulesGithub;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#github_app AuthSettings#github_app}
  */
  readonly githubApp?: AuthSettingsModulesGithubApp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#github_enterprise AuthSettings#github_enterprise}
  */
  readonly githubEnterprise?: AuthSettingsModulesGithubEnterprise;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#google AuthSettings#google}
  */
  readonly google?: AuthSettingsModulesGoogle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#jetbrains_space AuthSettings#jetbrains_space}
  */
  readonly jetbrainsSpace?: AuthSettingsModulesJetbrainsSpace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#ldap AuthSettings#ldap}
  */
  readonly ldap?: AuthSettingsModulesLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#token AuthSettings#token}
  */
  readonly token: AuthSettingsModulesToken;
}

export function authSettingsModulesToTerraform(struct?: AuthSettingsModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_http: authSettingsModulesBasicHttpToTerraform(struct!.basicHttp),
    built_in: authSettingsModulesBuiltInToTerraform(struct!.builtIn),
    github: authSettingsModulesGithubToTerraform(struct!.github),
    github_app: authSettingsModulesGithubAppToTerraform(struct!.githubApp),
    github_enterprise: authSettingsModulesGithubEnterpriseToTerraform(struct!.githubEnterprise),
    google: authSettingsModulesGoogleToTerraform(struct!.google),
    jetbrains_space: authSettingsModulesJetbrainsSpaceToTerraform(struct!.jetbrainsSpace),
    ldap: authSettingsModulesLdapToTerraform(struct!.ldap),
    token: authSettingsModulesTokenToTerraform(struct!.token),
  }
}


export function authSettingsModulesToHclTerraform(struct?: AuthSettingsModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_http: {
      value: authSettingsModulesBasicHttpToHclTerraform(struct!.basicHttp),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesBasicHttp",
    },
    built_in: {
      value: authSettingsModulesBuiltInToHclTerraform(struct!.builtIn),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesBuiltIn",
    },
    github: {
      value: authSettingsModulesGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesGithub",
    },
    github_app: {
      value: authSettingsModulesGithubAppToHclTerraform(struct!.githubApp),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesGithubApp",
    },
    github_enterprise: {
      value: authSettingsModulesGithubEnterpriseToHclTerraform(struct!.githubEnterprise),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesGithubEnterprise",
    },
    google: {
      value: authSettingsModulesGoogleToHclTerraform(struct!.google),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesGoogle",
    },
    jetbrains_space: {
      value: authSettingsModulesJetbrainsSpaceToHclTerraform(struct!.jetbrainsSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesJetbrainsSpace",
    },
    ldap: {
      value: authSettingsModulesLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesLdap",
    },
    token: {
      value: authSettingsModulesTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthSettingsModulesToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSettingsModulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSettingsModules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicHttp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicHttp = this._basicHttp?.internalValue;
    }
    if (this._builtIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtIn = this._builtIn?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._githubApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubApp = this._githubApp?.internalValue;
    }
    if (this._githubEnterprise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubEnterprise = this._githubEnterprise?.internalValue;
    }
    if (this._google?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.google = this._google?.internalValue;
    }
    if (this._jetbrainsSpace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jetbrainsSpace = this._jetbrainsSpace?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSettingsModules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicHttp.internalValue = undefined;
      this._builtIn.internalValue = undefined;
      this._github.internalValue = undefined;
      this._githubApp.internalValue = undefined;
      this._githubEnterprise.internalValue = undefined;
      this._google.internalValue = undefined;
      this._jetbrainsSpace.internalValue = undefined;
      this._ldap.internalValue = undefined;
      this._token.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicHttp.internalValue = value.basicHttp;
      this._builtIn.internalValue = value.builtIn;
      this._github.internalValue = value.github;
      this._githubApp.internalValue = value.githubApp;
      this._githubEnterprise.internalValue = value.githubEnterprise;
      this._google.internalValue = value.google;
      this._jetbrainsSpace.internalValue = value.jetbrainsSpace;
      this._ldap.internalValue = value.ldap;
      this._token.internalValue = value.token;
    }
  }

  // basic_http - computed: false, optional: true, required: false
  private _basicHttp = new AuthSettingsModulesBasicHttpOutputReference(this, "basic_http");
  public get basicHttp() {
    return this._basicHttp;
  }
  public putBasicHttp(value: AuthSettingsModulesBasicHttp) {
    this._basicHttp.internalValue = value;
  }
  public resetBasicHttp() {
    this._basicHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicHttpInput() {
    return this._basicHttp.internalValue;
  }

  // built_in - computed: false, optional: true, required: false
  private _builtIn = new AuthSettingsModulesBuiltInOutputReference(this, "built_in");
  public get builtIn() {
    return this._builtIn;
  }
  public putBuiltIn(value: AuthSettingsModulesBuiltIn) {
    this._builtIn.internalValue = value;
  }
  public resetBuiltIn() {
    this._builtIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInInput() {
    return this._builtIn.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new AuthSettingsModulesGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: AuthSettingsModulesGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // github_app - computed: false, optional: true, required: false
  private _githubApp = new AuthSettingsModulesGithubAppOutputReference(this, "github_app");
  public get githubApp() {
    return this._githubApp;
  }
  public putGithubApp(value: AuthSettingsModulesGithubApp) {
    this._githubApp.internalValue = value;
  }
  public resetGithubApp() {
    this._githubApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInput() {
    return this._githubApp.internalValue;
  }

  // github_enterprise - computed: false, optional: true, required: false
  private _githubEnterprise = new AuthSettingsModulesGithubEnterpriseOutputReference(this, "github_enterprise");
  public get githubEnterprise() {
    return this._githubEnterprise;
  }
  public putGithubEnterprise(value: AuthSettingsModulesGithubEnterprise) {
    this._githubEnterprise.internalValue = value;
  }
  public resetGithubEnterprise() {
    this._githubEnterprise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseInput() {
    return this._githubEnterprise.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new AuthSettingsModulesGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: AuthSettingsModulesGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // jetbrains_space - computed: false, optional: true, required: false
  private _jetbrainsSpace = new AuthSettingsModulesJetbrainsSpaceOutputReference(this, "jetbrains_space");
  public get jetbrainsSpace() {
    return this._jetbrainsSpace;
  }
  public putJetbrainsSpace(value: AuthSettingsModulesJetbrainsSpace) {
    this._jetbrainsSpace.internalValue = value;
  }
  public resetJetbrainsSpace() {
    this._jetbrainsSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jetbrainsSpaceInput() {
    return this._jetbrainsSpace.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new AuthSettingsModulesLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: AuthSettingsModulesLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // token - computed: false, optional: false, required: true
  private _token = new AuthSettingsModulesTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: AuthSettingsModulesToken) {
    this._token.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings teamcity_auth_settings}
*/
export class AuthSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "teamcity_auth_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthSettings to import
  * @param importFromId The id of the existing AuthSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "teamcity_auth_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/auth_settings teamcity_auth_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AuthSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'teamcity_auth_settings',
      terraformGeneratorMetadata: {
        providerName: 'teamcity',
        providerVersion: '0.0.86',
        providerVersionConstraint: '0.0.86'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowGuest = config.allowGuest;
    this._collapseLoginForm = config.collapseLoginForm;
    this._emailVerification = config.emailVerification;
    this._guestUsername = config.guestUsername;
    this._modules.internalValue = config.modules;
    this._perProjectPermissions = config.perProjectPermissions;
    this._welcomeText = config.welcomeText;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_guest - computed: false, optional: false, required: true
  private _allowGuest?: boolean | cdktf.IResolvable; 
  public get allowGuest() {
    return this.getBooleanAttribute('allow_guest');
  }
  public set allowGuest(value: boolean | cdktf.IResolvable) {
    this._allowGuest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGuestInput() {
    return this._allowGuest;
  }

  // collapse_login_form - computed: false, optional: false, required: true
  private _collapseLoginForm?: boolean | cdktf.IResolvable; 
  public get collapseLoginForm() {
    return this.getBooleanAttribute('collapse_login_form');
  }
  public set collapseLoginForm(value: boolean | cdktf.IResolvable) {
    this._collapseLoginForm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collapseLoginFormInput() {
    return this._collapseLoginForm;
  }

  // email_verification - computed: false, optional: false, required: true
  private _emailVerification?: boolean | cdktf.IResolvable; 
  public get emailVerification() {
    return this.getBooleanAttribute('email_verification');
  }
  public set emailVerification(value: boolean | cdktf.IResolvable) {
    this._emailVerification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationInput() {
    return this._emailVerification;
  }

  // guest_username - computed: false, optional: false, required: true
  private _guestUsername?: string; 
  public get guestUsername() {
    return this.getStringAttribute('guest_username');
  }
  public set guestUsername(value: string) {
    this._guestUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestUsernameInput() {
    return this._guestUsername;
  }

  // modules - computed: false, optional: false, required: true
  private _modules = new AuthSettingsModulesOutputReference(this, "modules");
  public get modules() {
    return this._modules;
  }
  public putModules(value: AuthSettingsModules) {
    this._modules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules.internalValue;
  }

  // per_project_permissions - computed: false, optional: false, required: true
  private _perProjectPermissions?: boolean | cdktf.IResolvable; 
  public get perProjectPermissions() {
    return this.getBooleanAttribute('per_project_permissions');
  }
  public set perProjectPermissions(value: boolean | cdktf.IResolvable) {
    this._perProjectPermissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perProjectPermissionsInput() {
    return this._perProjectPermissions;
  }

  // welcome_text - computed: false, optional: false, required: true
  private _welcomeText?: string; 
  public get welcomeText() {
    return this.getStringAttribute('welcome_text');
  }
  public set welcomeText(value: string) {
    this._welcomeText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeTextInput() {
    return this._welcomeText;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_guest: cdktf.booleanToTerraform(this._allowGuest),
      collapse_login_form: cdktf.booleanToTerraform(this._collapseLoginForm),
      email_verification: cdktf.booleanToTerraform(this._emailVerification),
      guest_username: cdktf.stringToTerraform(this._guestUsername),
      modules: authSettingsModulesToTerraform(this._modules.internalValue),
      per_project_permissions: cdktf.booleanToTerraform(this._perProjectPermissions),
      welcome_text: cdktf.stringToTerraform(this._welcomeText),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_guest: {
        value: cdktf.booleanToHclTerraform(this._allowGuest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collapse_login_form: {
        value: cdktf.booleanToHclTerraform(this._collapseLoginForm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_verification: {
        value: cdktf.booleanToHclTerraform(this._emailVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_username: {
        value: cdktf.stringToHclTerraform(this._guestUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modules: {
        value: authSettingsModulesToHclTerraform(this._modules.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthSettingsModules",
      },
      per_project_permissions: {
        value: cdktf.booleanToHclTerraform(this._perProjectPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      welcome_text: {
        value: cdktf.stringToHclTerraform(this._welcomeText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
