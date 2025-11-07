// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#allow_list AuthenticationProfile#allow_list}
  */
  readonly allowList?: string[];
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#device AuthenticationProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#folder AuthenticationProfile#folder}
  */
  readonly folder?: string;
  /**
  * Lockout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#lockout AuthenticationProfile#lockout}
  */
  readonly lockout?: AuthenticationProfileLockout;
  /**
  * Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#method AuthenticationProfile#method}
  */
  readonly method?: AuthenticationProfileMethod;
  /**
  * Multi factor auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#multi_factor_auth AuthenticationProfile#multi_factor_auth}
  */
  readonly multiFactorAuth?: AuthenticationProfileMultiFactorAuth;
  /**
  * The name of the authentication profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#name AuthenticationProfile#name}
  */
  readonly name: string;
  /**
  * Single sign on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#single_sign_on AuthenticationProfile#single_sign_on}
  */
  readonly singleSignOn?: AuthenticationProfileSingleSignOn;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#snippet AuthenticationProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * User domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#user_domain AuthenticationProfile#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Username modifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#username_modifier AuthenticationProfile#username_modifier}
  */
  readonly usernameModifier?: string;
}
export interface AuthenticationProfileLockout {
  /**
  * Failed attempts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#failed_attempts AuthenticationProfile#failed_attempts}
  */
  readonly failedAttempts?: number;
  /**
  * Lockout time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#lockout_time AuthenticationProfile#lockout_time}
  */
  readonly lockoutTime?: number;
}

export function authenticationProfileLockoutToTerraform(struct?: AuthenticationProfileLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_attempts: cdktf.numberToTerraform(struct!.failedAttempts),
    lockout_time: cdktf.numberToTerraform(struct!.lockoutTime),
  }
}


export function authenticationProfileLockoutToHclTerraform(struct?: AuthenticationProfileLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_attempts: {
      value: cdktf.numberToHclTerraform(struct!.failedAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout_time: {
      value: cdktf.numberToHclTerraform(struct!.lockoutTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLockout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedAttempts = this._failedAttempts;
    }
    if (this._lockoutTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutTime = this._lockoutTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLockout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failedAttempts = undefined;
      this._lockoutTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failedAttempts = value.failedAttempts;
      this._lockoutTime = value.lockoutTime;
    }
  }

  // failed_attempts - computed: false, optional: true, required: false
  private _failedAttempts?: number; 
  public get failedAttempts() {
    return this.getNumberAttribute('failed_attempts');
  }
  public set failedAttempts(value: number) {
    this._failedAttempts = value;
  }
  public resetFailedAttempts() {
    this._failedAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAttemptsInput() {
    return this._failedAttempts;
  }

  // lockout_time - computed: false, optional: true, required: false
  private _lockoutTime?: number; 
  public get lockoutTime() {
    return this.getNumberAttribute('lockout_time');
  }
  public set lockoutTime(value: number) {
    this._lockoutTime = value;
  }
  public resetLockoutTime() {
    this._lockoutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutTimeInput() {
    return this._lockoutTime;
  }
}
export interface AuthenticationProfileMethodCloud {
  /**
  * The tenant profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#profile_name AuthenticationProfile#profile_name}
  */
  readonly profileName?: string;
}

export function authenticationProfileMethodCloudToTerraform(struct?: AuthenticationProfileMethodCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_name: cdktf.stringToTerraform(struct!.profileName),
  }
}


export function authenticationProfileMethodCloudToHclTerraform(struct?: AuthenticationProfileMethodCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileName = value.profileName;
    }
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }
}
export interface AuthenticationProfileMethodKerberos {
  /**
  * Realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#realm AuthenticationProfile#realm}
  */
  readonly realm?: string;
  /**
  * Server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodKerberosToTerraform(struct?: AuthenticationProfileMethodKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm: cdktf.stringToTerraform(struct!.realm),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodKerberosToHclTerraform(struct?: AuthenticationProfileMethodKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodKerberos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodKerberos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realm = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._realm = value.realm;
      this._serverProfile = value.serverProfile;
    }
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethodLdap {
  /**
  * Login attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#login_attribute AuthenticationProfile#login_attribute}
  */
  readonly loginAttribute?: string;
  /**
  * Passwd exp days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#passwd_exp_days AuthenticationProfile#passwd_exp_days}
  */
  readonly passwdExpDays?: number;
  /**
  * Server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodLdapToTerraform(struct?: AuthenticationProfileMethodLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_attribute: cdktf.stringToTerraform(struct!.loginAttribute),
    passwd_exp_days: cdktf.numberToTerraform(struct!.passwdExpDays),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodLdapToHclTerraform(struct?: AuthenticationProfileMethodLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_attribute: {
      value: cdktf.stringToHclTerraform(struct!.loginAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passwd_exp_days: {
      value: cdktf.numberToHclTerraform(struct!.passwdExpDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAttribute = this._loginAttribute;
    }
    if (this._passwdExpDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwdExpDays = this._passwdExpDays;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loginAttribute = undefined;
      this._passwdExpDays = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loginAttribute = value.loginAttribute;
      this._passwdExpDays = value.passwdExpDays;
      this._serverProfile = value.serverProfile;
    }
  }

  // login_attribute - computed: false, optional: true, required: false
  private _loginAttribute?: string; 
  public get loginAttribute() {
    return this.getStringAttribute('login_attribute');
  }
  public set loginAttribute(value: string) {
    this._loginAttribute = value;
  }
  public resetLoginAttribute() {
    this._loginAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAttributeInput() {
    return this._loginAttribute;
  }

  // passwd_exp_days - computed: false, optional: true, required: false
  private _passwdExpDays?: number; 
  public get passwdExpDays() {
    return this.getNumberAttribute('passwd_exp_days');
  }
  public set passwdExpDays(value: number) {
    this._passwdExpDays = value;
  }
  public resetPasswdExpDays() {
    this._passwdExpDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdExpDaysInput() {
    return this._passwdExpDays;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethodLocalDatabase {
}

export function authenticationProfileMethodLocalDatabaseToTerraform(struct?: AuthenticationProfileMethodLocalDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authenticationProfileMethodLocalDatabaseToHclTerraform(struct?: AuthenticationProfileMethodLocalDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthenticationProfileMethodLocalDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodLocalDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodLocalDatabase | cdktf.IResolvable | undefined) {
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
export interface AuthenticationProfileMethodRadius {
  /**
  * Checkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#checkgroup AuthenticationProfile#checkgroup}
  */
  readonly checkgroup?: boolean | cdktf.IResolvable;
  /**
  * Server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodRadiusToTerraform(struct?: AuthenticationProfileMethodRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkgroup: cdktf.booleanToTerraform(struct!.checkgroup),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodRadiusToHclTerraform(struct?: AuthenticationProfileMethodRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkgroup: {
      value: cdktf.booleanToHclTerraform(struct!.checkgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodRadius | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkgroup = this._checkgroup;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodRadius | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkgroup = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkgroup = value.checkgroup;
      this._serverProfile = value.serverProfile;
    }
  }

  // checkgroup - computed: false, optional: true, required: false
  private _checkgroup?: boolean | cdktf.IResolvable; 
  public get checkgroup() {
    return this.getBooleanAttribute('checkgroup');
  }
  public set checkgroup(value: boolean | cdktf.IResolvable) {
    this._checkgroup = value;
  }
  public resetCheckgroup() {
    this._checkgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkgroupInput() {
    return this._checkgroup;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethodSamlIdp {
  /**
  * Attribute name usergroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#attribute_name_usergroup AuthenticationProfile#attribute_name_usergroup}
  */
  readonly attributeNameUsergroup?: string;
  /**
  * Attribute name username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#attribute_name_username AuthenticationProfile#attribute_name_username}
  */
  readonly attributeNameUsername?: string;
  /**
  * Certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#certificate_profile AuthenticationProfile#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Enable single logout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#enable_single_logout AuthenticationProfile#enable_single_logout}
  */
  readonly enableSingleLogout?: boolean | cdktf.IResolvable;
  /**
  * Request signing certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#request_signing_certificate AuthenticationProfile#request_signing_certificate}
  */
  readonly requestSigningCertificate?: string;
  /**
  * Server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodSamlIdpToTerraform(struct?: AuthenticationProfileMethodSamlIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name_usergroup: cdktf.stringToTerraform(struct!.attributeNameUsergroup),
    attribute_name_username: cdktf.stringToTerraform(struct!.attributeNameUsername),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    enable_single_logout: cdktf.booleanToTerraform(struct!.enableSingleLogout),
    request_signing_certificate: cdktf.stringToTerraform(struct!.requestSigningCertificate),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodSamlIdpToHclTerraform(struct?: AuthenticationProfileMethodSamlIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name_usergroup: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameUsergroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name_username: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_single_logout: {
      value: cdktf.booleanToHclTerraform(struct!.enableSingleLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_signing_certificate: {
      value: cdktf.stringToHclTerraform(struct!.requestSigningCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodSamlIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodSamlIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNameUsergroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameUsergroup = this._attributeNameUsergroup;
    }
    if (this._attributeNameUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameUsername = this._attributeNameUsername;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._enableSingleLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSingleLogout = this._enableSingleLogout;
    }
    if (this._requestSigningCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSigningCertificate = this._requestSigningCertificate;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodSamlIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNameUsergroup = undefined;
      this._attributeNameUsername = undefined;
      this._certificateProfile = undefined;
      this._enableSingleLogout = undefined;
      this._requestSigningCertificate = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNameUsergroup = value.attributeNameUsergroup;
      this._attributeNameUsername = value.attributeNameUsername;
      this._certificateProfile = value.certificateProfile;
      this._enableSingleLogout = value.enableSingleLogout;
      this._requestSigningCertificate = value.requestSigningCertificate;
      this._serverProfile = value.serverProfile;
    }
  }

  // attribute_name_usergroup - computed: false, optional: true, required: false
  private _attributeNameUsergroup?: string; 
  public get attributeNameUsergroup() {
    return this.getStringAttribute('attribute_name_usergroup');
  }
  public set attributeNameUsergroup(value: string) {
    this._attributeNameUsergroup = value;
  }
  public resetAttributeNameUsergroup() {
    this._attributeNameUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameUsergroupInput() {
    return this._attributeNameUsergroup;
  }

  // attribute_name_username - computed: false, optional: true, required: false
  private _attributeNameUsername?: string; 
  public get attributeNameUsername() {
    return this.getStringAttribute('attribute_name_username');
  }
  public set attributeNameUsername(value: string) {
    this._attributeNameUsername = value;
  }
  public resetAttributeNameUsername() {
    this._attributeNameUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameUsernameInput() {
    return this._attributeNameUsername;
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // enable_single_logout - computed: false, optional: true, required: false
  private _enableSingleLogout?: boolean | cdktf.IResolvable; 
  public get enableSingleLogout() {
    return this.getBooleanAttribute('enable_single_logout');
  }
  public set enableSingleLogout(value: boolean | cdktf.IResolvable) {
    this._enableSingleLogout = value;
  }
  public resetEnableSingleLogout() {
    this._enableSingleLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSingleLogoutInput() {
    return this._enableSingleLogout;
  }

  // request_signing_certificate - computed: false, optional: true, required: false
  private _requestSigningCertificate?: string; 
  public get requestSigningCertificate() {
    return this.getStringAttribute('request_signing_certificate');
  }
  public set requestSigningCertificate(value: string) {
    this._requestSigningCertificate = value;
  }
  public resetRequestSigningCertificate() {
    this._requestSigningCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSigningCertificateInput() {
    return this._requestSigningCertificate;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethodTacplus {
  /**
  * Checkgroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#checkgroup AuthenticationProfile#checkgroup}
  */
  readonly checkgroup?: boolean | cdktf.IResolvable;
  /**
  * Server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodTacplusToTerraform(struct?: AuthenticationProfileMethodTacplus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkgroup: cdktf.booleanToTerraform(struct!.checkgroup),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodTacplusToHclTerraform(struct?: AuthenticationProfileMethodTacplus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkgroup: {
      value: cdktf.booleanToHclTerraform(struct!.checkgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodTacplusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodTacplus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkgroup = this._checkgroup;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodTacplus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkgroup = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkgroup = value.checkgroup;
      this._serverProfile = value.serverProfile;
    }
  }

  // checkgroup - computed: false, optional: true, required: false
  private _checkgroup?: boolean | cdktf.IResolvable; 
  public get checkgroup() {
    return this.getBooleanAttribute('checkgroup');
  }
  public set checkgroup(value: boolean | cdktf.IResolvable) {
    this._checkgroup = value;
  }
  public resetCheckgroup() {
    this._checkgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkgroupInput() {
    return this._checkgroup;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethod {
  /**
  * Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#cloud AuthenticationProfile#cloud}
  */
  readonly cloud?: AuthenticationProfileMethodCloud;
  /**
  * Kerberos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#kerberos AuthenticationProfile#kerberos}
  */
  readonly kerberos?: AuthenticationProfileMethodKerberos;
  /**
  * Ldap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#ldap AuthenticationProfile#ldap}
  */
  readonly ldap?: AuthenticationProfileMethodLdap;
  /**
  * Local database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#local_database AuthenticationProfile#local_database}
  */
  readonly localDatabase?: AuthenticationProfileMethodLocalDatabase;
  /**
  * Radius
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#radius AuthenticationProfile#radius}
  */
  readonly radius?: AuthenticationProfileMethodRadius;
  /**
  * Saml idp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#saml_idp AuthenticationProfile#saml_idp}
  */
  readonly samlIdp?: AuthenticationProfileMethodSamlIdp;
  /**
  * Tacplus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#tacplus AuthenticationProfile#tacplus}
  */
  readonly tacplus?: AuthenticationProfileMethodTacplus;
}

export function authenticationProfileMethodToTerraform(struct?: AuthenticationProfileMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud: authenticationProfileMethodCloudToTerraform(struct!.cloud),
    kerberos: authenticationProfileMethodKerberosToTerraform(struct!.kerberos),
    ldap: authenticationProfileMethodLdapToTerraform(struct!.ldap),
    local_database: authenticationProfileMethodLocalDatabaseToTerraform(struct!.localDatabase),
    radius: authenticationProfileMethodRadiusToTerraform(struct!.radius),
    saml_idp: authenticationProfileMethodSamlIdpToTerraform(struct!.samlIdp),
    tacplus: authenticationProfileMethodTacplusToTerraform(struct!.tacplus),
  }
}


export function authenticationProfileMethodToHclTerraform(struct?: AuthenticationProfileMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud: {
      value: authenticationProfileMethodCloudToHclTerraform(struct!.cloud),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodCloud",
    },
    kerberos: {
      value: authenticationProfileMethodKerberosToHclTerraform(struct!.kerberos),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodKerberos",
    },
    ldap: {
      value: authenticationProfileMethodLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodLdap",
    },
    local_database: {
      value: authenticationProfileMethodLocalDatabaseToHclTerraform(struct!.localDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodLocalDatabase",
    },
    radius: {
      value: authenticationProfileMethodRadiusToHclTerraform(struct!.radius),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodRadius",
    },
    saml_idp: {
      value: authenticationProfileMethodSamlIdpToHclTerraform(struct!.samlIdp),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodSamlIdp",
    },
    tacplus: {
      value: authenticationProfileMethodTacplusToHclTerraform(struct!.tacplus),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodTacplus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud?.internalValue;
    }
    if (this._kerberos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos = this._kerberos?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._localDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDatabase = this._localDatabase?.internalValue;
    }
    if (this._radius?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius?.internalValue;
    }
    if (this._samlIdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdp = this._samlIdp?.internalValue;
    }
    if (this._tacplus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplus = this._tacplus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloud.internalValue = undefined;
      this._kerberos.internalValue = undefined;
      this._ldap.internalValue = undefined;
      this._localDatabase.internalValue = undefined;
      this._radius.internalValue = undefined;
      this._samlIdp.internalValue = undefined;
      this._tacplus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloud.internalValue = value.cloud;
      this._kerberos.internalValue = value.kerberos;
      this._ldap.internalValue = value.ldap;
      this._localDatabase.internalValue = value.localDatabase;
      this._radius.internalValue = value.radius;
      this._samlIdp.internalValue = value.samlIdp;
      this._tacplus.internalValue = value.tacplus;
    }
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud = new AuthenticationProfileMethodCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: AuthenticationProfileMethodCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos = new AuthenticationProfileMethodKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: AuthenticationProfileMethodKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new AuthenticationProfileMethodLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: AuthenticationProfileMethodLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // local_database - computed: false, optional: true, required: false
  private _localDatabase = new AuthenticationProfileMethodLocalDatabaseOutputReference(this, "local_database");
  public get localDatabase() {
    return this._localDatabase;
  }
  public putLocalDatabase(value: AuthenticationProfileMethodLocalDatabase) {
    this._localDatabase.internalValue = value;
  }
  public resetLocalDatabase() {
    this._localDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDatabaseInput() {
    return this._localDatabase.internalValue;
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new AuthenticationProfileMethodRadiusOutputReference(this, "radius");
  public get radius() {
    return this._radius;
  }
  public putRadius(value: AuthenticationProfileMethodRadius) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // saml_idp - computed: false, optional: true, required: false
  private _samlIdp = new AuthenticationProfileMethodSamlIdpOutputReference(this, "saml_idp");
  public get samlIdp() {
    return this._samlIdp;
  }
  public putSamlIdp(value: AuthenticationProfileMethodSamlIdp) {
    this._samlIdp.internalValue = value;
  }
  public resetSamlIdp() {
    this._samlIdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInput() {
    return this._samlIdp.internalValue;
  }

  // tacplus - computed: false, optional: true, required: false
  private _tacplus = new AuthenticationProfileMethodTacplusOutputReference(this, "tacplus");
  public get tacplus() {
    return this._tacplus;
  }
  public putTacplus(value: AuthenticationProfileMethodTacplus) {
    this._tacplus.internalValue = value;
  }
  public resetTacplus() {
    this._tacplus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus.internalValue;
  }
}
export interface AuthenticationProfileMultiFactorAuth {
  /**
  * Factors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#factors AuthenticationProfile#factors}
  */
  readonly factors?: string[];
  /**
  * Mfa enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#mfa_enable AuthenticationProfile#mfa_enable}
  */
  readonly mfaEnable?: boolean | cdktf.IResolvable;
}

export function authenticationProfileMultiFactorAuthToTerraform(struct?: AuthenticationProfileMultiFactorAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    factors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.factors),
    mfa_enable: cdktf.booleanToTerraform(struct!.mfaEnable),
  }
}


export function authenticationProfileMultiFactorAuthToHclTerraform(struct?: AuthenticationProfileMultiFactorAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    factors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.factors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mfa_enable: {
      value: cdktf.booleanToHclTerraform(struct!.mfaEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMultiFactorAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMultiFactorAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._factors !== undefined) {
      hasAnyValues = true;
      internalValueResult.factors = this._factors;
    }
    if (this._mfaEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaEnable = this._mfaEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMultiFactorAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._factors = undefined;
      this._mfaEnable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._factors = value.factors;
      this._mfaEnable = value.mfaEnable;
    }
  }

  // factors - computed: false, optional: true, required: false
  private _factors?: string[]; 
  public get factors() {
    return this.getListAttribute('factors');
  }
  public set factors(value: string[]) {
    this._factors = value;
  }
  public resetFactors() {
    this._factors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorsInput() {
    return this._factors;
  }

  // mfa_enable - computed: false, optional: true, required: false
  private _mfaEnable?: boolean | cdktf.IResolvable; 
  public get mfaEnable() {
    return this.getBooleanAttribute('mfa_enable');
  }
  public set mfaEnable(value: boolean | cdktf.IResolvable) {
    this._mfaEnable = value;
  }
  public resetMfaEnable() {
    this._mfaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnableInput() {
    return this._mfaEnable;
  }
}
export interface AuthenticationProfileSingleSignOn {
  /**
  * Kerberos keytab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#kerberos_keytab AuthenticationProfile#kerberos_keytab}
  */
  readonly kerberosKeytab?: string;
  /**
  * Realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#realm AuthenticationProfile#realm}
  */
  readonly realm?: string;
}

export function authenticationProfileSingleSignOnToTerraform(struct?: AuthenticationProfileSingleSignOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_keytab: cdktf.stringToTerraform(struct!.kerberosKeytab),
    realm: cdktf.stringToTerraform(struct!.realm),
  }
}


export function authenticationProfileSingleSignOnToHclTerraform(struct?: AuthenticationProfileSingleSignOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_keytab: {
      value: cdktf.stringToHclTerraform(struct!.kerberosKeytab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileSingleSignOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileSingleSignOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosKeytab !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeytab = this._kerberosKeytab;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileSingleSignOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kerberosKeytab = undefined;
      this._realm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kerberosKeytab = value.kerberosKeytab;
      this._realm = value.realm;
    }
  }

  // kerberos_keytab - computed: false, optional: true, required: false
  private _kerberosKeytab?: string; 
  public get kerberosKeytab() {
    return this.getStringAttribute('kerberos_keytab');
  }
  public set kerberosKeytab(value: string) {
    this._kerberosKeytab = value;
  }
  public resetKerberosKeytab() {
    this._kerberosKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeytabInput() {
    return this._kerberosKeytab;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile scm_authentication_profile}
*/
export class AuthenticationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationProfile to import
  * @param importFromId The id of the existing AuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/authentication_profile scm_authentication_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList = config.allowList;
    this._device = config.device;
    this._folder = config.folder;
    this._lockout.internalValue = config.lockout;
    this._method.internalValue = config.method;
    this._multiFactorAuth.internalValue = config.multiFactorAuth;
    this._name = config.name;
    this._singleSignOn.internalValue = config.singleSignOn;
    this._snippet = config.snippet;
    this._userDomain = config.userDomain;
    this._usernameModifier = config.usernameModifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: true, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return this.getListAttribute('allow_list');
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lockout - computed: false, optional: true, required: false
  private _lockout = new AuthenticationProfileLockoutOutputReference(this, "lockout");
  public get lockout() {
    return this._lockout;
  }
  public putLockout(value: AuthenticationProfileLockout) {
    this._lockout.internalValue = value;
  }
  public resetLockout() {
    this._lockout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new AuthenticationProfileMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: AuthenticationProfileMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // multi_factor_auth - computed: false, optional: true, required: false
  private _multiFactorAuth = new AuthenticationProfileMultiFactorAuthOutputReference(this, "multi_factor_auth");
  public get multiFactorAuth() {
    return this._multiFactorAuth;
  }
  public putMultiFactorAuth(value: AuthenticationProfileMultiFactorAuth) {
    this._multiFactorAuth.internalValue = value;
  }
  public resetMultiFactorAuth() {
    this._multiFactorAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorAuthInput() {
    return this._multiFactorAuth.internalValue;
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

  // single_sign_on - computed: false, optional: true, required: false
  private _singleSignOn = new AuthenticationProfileSingleSignOnOutputReference(this, "single_sign_on");
  public get singleSignOn() {
    return this._singleSignOn;
  }
  public putSingleSignOn(value: AuthenticationProfileSingleSignOn) {
    this._singleSignOn.internalValue = value;
  }
  public resetSingleSignOn() {
    this._singleSignOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnInput() {
    return this._singleSignOn.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // user_domain - computed: false, optional: true, required: false
  private _userDomain?: string; 
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }
  public set userDomain(value: string) {
    this._userDomain = value;
  }
  public resetUserDomain() {
    this._userDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainInput() {
    return this._userDomain;
  }

  // username_modifier - computed: false, optional: true, required: false
  private _usernameModifier?: string; 
  public get usernameModifier() {
    return this.getStringAttribute('username_modifier');
  }
  public set usernameModifier(value: string) {
    this._usernameModifier = value;
  }
  public resetUsernameModifier() {
    this._usernameModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameModifierInput() {
    return this._usernameModifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowList),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      lockout: authenticationProfileLockoutToTerraform(this._lockout.internalValue),
      method: authenticationProfileMethodToTerraform(this._method.internalValue),
      multi_factor_auth: authenticationProfileMultiFactorAuthToTerraform(this._multiFactorAuth.internalValue),
      name: cdktf.stringToTerraform(this._name),
      single_sign_on: authenticationProfileSingleSignOnToTerraform(this._singleSignOn.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      user_domain: cdktf.stringToTerraform(this._userDomain),
      username_modifier: cdktf.stringToTerraform(this._usernameModifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lockout: {
        value: authenticationProfileLockoutToHclTerraform(this._lockout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileLockout",
      },
      method: {
        value: authenticationProfileMethodToHclTerraform(this._method.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileMethod",
      },
      multi_factor_auth: {
        value: authenticationProfileMultiFactorAuthToHclTerraform(this._multiFactorAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileMultiFactorAuth",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on: {
        value: authenticationProfileSingleSignOnToHclTerraform(this._singleSignOn.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileSingleSignOn",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_domain: {
        value: cdktf.stringToHclTerraform(this._userDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_modifier: {
        value: cdktf.stringToHclTerraform(this._usernameModifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
