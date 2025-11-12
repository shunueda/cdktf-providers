// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the domain that the object is part of. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#domain User#domain}
  */
  readonly domain?: string;
  /**
  * Specifies an email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * If true, the authenticated user is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#enabled User#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the Unix Epoch time at which the authenticated user will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#expiry User#expiry}
  */
  readonly expiry?: number;
  /**
  * Specifies the GECOS value, which is usually the full name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#gecos User#gecos}
  */
  readonly gecos?: string;
  /**
  * Specifies a home directory for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#home_directory User#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Specifies a user name. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Sets or Changes the password for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * If true, the password is allowed to expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#password_expires User#password_expires}
  */
  readonly passwordExpires?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the primary group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#primary_group User#primary_group}
  */
  readonly primaryGroup?: string;
  /**
  * If true, Prompts the user to change their password at the next login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#prompt_password_change User#prompt_password_change}
  */
  readonly promptPasswordChange?: boolean | cdktf.IResolvable;
  /**
  * If true, skip validation checks when creating user. Need to be true, when changing user UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#query_force User#query_force}
  */
  readonly queryForce?: boolean | cdktf.IResolvable;
  /**
  * Specifies the provider type. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#query_provider User#query_provider}
  */
  readonly queryProvider?: string;
  /**
  * Specifies the zone that the object belongs to. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#query_zone User#query_zone}
  */
  readonly queryZone?: string;
  /**
  * List of roles, the user is assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#roles User#roles}
  */
  readonly roles?: string[];
  /**
  * Specifies a path to the shell for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#shell User#shell}
  */
  readonly shell?: string;
  /**
  * Specifies a security identifier. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#sid User#sid}
  */
  readonly sid?: string;
  /**
  * Specifies a numeric user identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#uid User#uid}
  */
  readonly uid?: number;
  /**
  * If true, the user account should be unlocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#unlock User#unlock}
  */
  readonly unlock?: boolean | cdktf.IResolvable;
}
export interface UserGid {
}

export function userGidToTerraform(struct?: UserGid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userGidToHclTerraform(struct?: UserGid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserGidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserGid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface UserPrimaryGroupSid {
}

export function userPrimaryGroupSidToTerraform(struct?: UserPrimaryGroupSid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userPrimaryGroupSidToHclTerraform(struct?: UserPrimaryGroupSid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserPrimaryGroupSidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserPrimaryGroupSid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPrimaryGroupSid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user powerscale_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user powerscale_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_user',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._email = config.email;
    this._enabled = config.enabled;
    this._expiry = config.expiry;
    this._gecos = config.gecos;
    this._homeDirectory = config.homeDirectory;
    this._name = config.name;
    this._password = config.password;
    this._passwordExpires = config.passwordExpires;
    this._primaryGroup = config.primaryGroup;
    this._promptPasswordChange = config.promptPasswordChange;
    this._queryForce = config.queryForce;
    this._queryProvider = config.queryProvider;
    this._queryZone = config.queryZone;
    this._roles = config.roles;
    this._shell = config.shell;
    this._sid = config.sid;
    this._uid = config.uid;
    this._unlock = config.unlock;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // dns_domain - computed: true, optional: false, required: false
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // gecos - computed: true, optional: true, required: false
  private _gecos?: string; 
  public get gecos() {
    return this.getStringAttribute('gecos');
  }
  public set gecos(value: string) {
    this._gecos = value;
  }
  public resetGecos() {
    this._gecos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gecosInput() {
    return this._gecos;
  }

  // generated_gid - computed: true, optional: false, required: false
  public get generatedGid() {
    return this.getBooleanAttribute('generated_gid');
  }

  // generated_uid - computed: true, optional: false, required: false
  public get generatedUid() {
    return this.getBooleanAttribute('generated_uid');
  }

  // generated_upn - computed: true, optional: false, required: false
  public get generatedUpn() {
    return this.getBooleanAttribute('generated_upn');
  }

  // gid - computed: true, optional: false, required: false
  private _gid = new UserGidOutputReference(this, "gid");
  public get gid() {
    return this._gid;
  }

  // home_directory - computed: true, optional: true, required: false
  private _homeDirectory?: string; 
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }
  public set homeDirectory(value: string) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // max_password_age - computed: true, optional: false, required: false
  public get maxPasswordAge() {
    return this.getNumberAttribute('max_password_age');
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

  // password_expired - computed: true, optional: false, required: false
  public get passwordExpired() {
    return this.getBooleanAttribute('password_expired');
  }

  // password_expires - computed: true, optional: true, required: false
  private _passwordExpires?: boolean | cdktf.IResolvable; 
  public get passwordExpires() {
    return this.getBooleanAttribute('password_expires');
  }
  public set passwordExpires(value: boolean | cdktf.IResolvable) {
    this._passwordExpires = value;
  }
  public resetPasswordExpires() {
    this._passwordExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiresInput() {
    return this._passwordExpires;
  }

  // password_expiry - computed: true, optional: false, required: false
  public get passwordExpiry() {
    return this.getNumberAttribute('password_expiry');
  }

  // password_last_set - computed: true, optional: false, required: false
  public get passwordLastSet() {
    return this.getNumberAttribute('password_last_set');
  }

  // primary_group - computed: true, optional: true, required: false
  private _primaryGroup?: string; 
  public get primaryGroup() {
    return this.getStringAttribute('primary_group');
  }
  public set primaryGroup(value: string) {
    this._primaryGroup = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup;
  }

  // primary_group_sid - computed: true, optional: false, required: false
  private _primaryGroupSid = new UserPrimaryGroupSidOutputReference(this, "primary_group_sid");
  public get primaryGroupSid() {
    return this._primaryGroupSid;
  }

  // prompt_password_change - computed: true, optional: true, required: false
  private _promptPasswordChange?: boolean | cdktf.IResolvable; 
  public get promptPasswordChange() {
    return this.getBooleanAttribute('prompt_password_change');
  }
  public set promptPasswordChange(value: boolean | cdktf.IResolvable) {
    this._promptPasswordChange = value;
  }
  public resetPromptPasswordChange() {
    this._promptPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptPasswordChangeInput() {
    return this._promptPasswordChange;
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // query_force - computed: false, optional: true, required: false
  private _queryForce?: boolean | cdktf.IResolvable; 
  public get queryForce() {
    return this.getBooleanAttribute('query_force');
  }
  public set queryForce(value: boolean | cdktf.IResolvable) {
    this._queryForce = value;
  }
  public resetQueryForce() {
    this._queryForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForceInput() {
    return this._queryForce;
  }

  // query_provider - computed: false, optional: true, required: false
  private _queryProvider?: string; 
  public get queryProvider() {
    return this.getStringAttribute('query_provider');
  }
  public set queryProvider(value: string) {
    this._queryProvider = value;
  }
  public resetQueryProvider() {
    this._queryProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryProviderInput() {
    return this._queryProvider;
  }

  // query_zone - computed: false, optional: true, required: false
  private _queryZone?: string; 
  public get queryZone() {
    return this.getStringAttribute('query_zone');
  }
  public set queryZone(value: string) {
    this._queryZone = value;
  }
  public resetQueryZone() {
    this._queryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryZoneInput() {
    return this._queryZone;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // sam_account_name - computed: true, optional: false, required: false
  public get samAccountName() {
    return this.getStringAttribute('sam_account_name');
  }

  // shell - computed: true, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // sid - computed: true, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // unlock - computed: false, optional: true, required: false
  private _unlock?: boolean | cdktf.IResolvable; 
  public get unlock() {
    return this.getBooleanAttribute('unlock');
  }
  public set unlock(value: boolean | cdktf.IResolvable) {
    this._unlock = value;
  }
  public resetUnlock() {
    this._unlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockInput() {
    return this._unlock;
  }

  // upn - computed: true, optional: false, required: false
  public get upn() {
    return this.getStringAttribute('upn');
  }

  // user_can_change_password - computed: true, optional: false, required: false
  public get userCanChangePassword() {
    return this.getBooleanAttribute('user_can_change_password');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      email: cdktf.stringToTerraform(this._email),
      enabled: cdktf.booleanToTerraform(this._enabled),
      expiry: cdktf.numberToTerraform(this._expiry),
      gecos: cdktf.stringToTerraform(this._gecos),
      home_directory: cdktf.stringToTerraform(this._homeDirectory),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_expires: cdktf.booleanToTerraform(this._passwordExpires),
      primary_group: cdktf.stringToTerraform(this._primaryGroup),
      prompt_password_change: cdktf.booleanToTerraform(this._promptPasswordChange),
      query_force: cdktf.booleanToTerraform(this._queryForce),
      query_provider: cdktf.stringToTerraform(this._queryProvider),
      query_zone: cdktf.stringToTerraform(this._queryZone),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      shell: cdktf.stringToTerraform(this._shell),
      sid: cdktf.stringToTerraform(this._sid),
      uid: cdktf.numberToTerraform(this._uid),
      unlock: cdktf.booleanToTerraform(this._unlock),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiry: {
        value: cdktf.numberToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gecos: {
        value: cdktf.stringToHclTerraform(this._gecos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_directory: {
        value: cdktf.stringToHclTerraform(this._homeDirectory),
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
      password_expires: {
        value: cdktf.booleanToHclTerraform(this._passwordExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_group: {
        value: cdktf.stringToHclTerraform(this._primaryGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prompt_password_change: {
        value: cdktf.booleanToHclTerraform(this._promptPasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query_force: {
        value: cdktf.booleanToHclTerraform(this._queryForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query_provider: {
        value: cdktf.stringToHclTerraform(this._queryProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_zone: {
        value: cdktf.stringToHclTerraform(this._queryZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shell: {
        value: cdktf.stringToHclTerraform(this._shell),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sid: {
        value: cdktf.stringToHclTerraform(this._sid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.numberToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unlock: {
        value: cdktf.booleanToHclTerraform(this._unlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
