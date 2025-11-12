// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ordered list of authentication methods. Allowed values: local, radius, tacacs, ldap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#auth_order Auth#auth_order}
  */
  readonly authOrder?: string[];
  /**
  * Password policy settings (note: device enforces final policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#password_policy Auth#password_policy}
  */
  readonly passwordPolicy?: AuthPasswordPolicy;
  /**
  * Remote role mappings. Configure role GID (and optionally LDAP group association).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#remote_roles Auth#remote_roles}
  */
  readonly remoteRoles?: AuthRemoteRoles[] | cdktf.IResolvable;
}
export interface AuthPasswordPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#allow_consecutive Auth#allow_consecutive}
  */
  readonly allowConsecutive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#allow_username Auth#allow_username}
  */
  readonly allowUsername?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#history Auth#history}
  */
  readonly history?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#max_age_days Auth#max_age_days}
  */
  readonly maxAgeDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#max_length Auth#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#min_classes Auth#min_classes}
  */
  readonly minClasses?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#min_length Auth#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#require_digit Auth#require_digit}
  */
  readonly requireDigit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#require_lower Auth#require_lower}
  */
  readonly requireLower?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#require_special Auth#require_special}
  */
  readonly requireSpecial?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#require_upper Auth#require_upper}
  */
  readonly requireUpper?: boolean | cdktf.IResolvable;
}

export function authPasswordPolicyToTerraform(struct?: AuthPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_consecutive: cdktf.booleanToTerraform(struct!.allowConsecutive),
    allow_username: cdktf.booleanToTerraform(struct!.allowUsername),
    history: cdktf.numberToTerraform(struct!.history),
    max_age_days: cdktf.numberToTerraform(struct!.maxAgeDays),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_classes: cdktf.numberToTerraform(struct!.minClasses),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    require_digit: cdktf.booleanToTerraform(struct!.requireDigit),
    require_lower: cdktf.booleanToTerraform(struct!.requireLower),
    require_special: cdktf.booleanToTerraform(struct!.requireSpecial),
    require_upper: cdktf.booleanToTerraform(struct!.requireUpper),
  }
}


export function authPasswordPolicyToHclTerraform(struct?: AuthPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_consecutive: {
      value: cdktf.booleanToHclTerraform(struct!.allowConsecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_username: {
      value: cdktf.booleanToHclTerraform(struct!.allowUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    history: {
      value: cdktf.numberToHclTerraform(struct!.history),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_age_days: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_classes: {
      value: cdktf.numberToHclTerraform(struct!.minClasses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_digit: {
      value: cdktf.booleanToHclTerraform(struct!.requireDigit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_lower: {
      value: cdktf.booleanToHclTerraform(struct!.requireLower),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_special: {
      value: cdktf.booleanToHclTerraform(struct!.requireSpecial),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_upper: {
      value: cdktf.booleanToHclTerraform(struct!.requireUpper),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthPasswordPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowConsecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowConsecutive = this._allowConsecutive;
    }
    if (this._allowUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUsername = this._allowUsername;
    }
    if (this._history !== undefined) {
      hasAnyValues = true;
      internalValueResult.history = this._history;
    }
    if (this._maxAgeDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeDays = this._maxAgeDays;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.minClasses = this._minClasses;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._requireDigit !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireDigit = this._requireDigit;
    }
    if (this._requireLower !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireLower = this._requireLower;
    }
    if (this._requireSpecial !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSpecial = this._requireSpecial;
    }
    if (this._requireUpper !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireUpper = this._requireUpper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthPasswordPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowConsecutive = undefined;
      this._allowUsername = undefined;
      this._history = undefined;
      this._maxAgeDays = undefined;
      this._maxLength = undefined;
      this._minClasses = undefined;
      this._minLength = undefined;
      this._requireDigit = undefined;
      this._requireLower = undefined;
      this._requireSpecial = undefined;
      this._requireUpper = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowConsecutive = value.allowConsecutive;
      this._allowUsername = value.allowUsername;
      this._history = value.history;
      this._maxAgeDays = value.maxAgeDays;
      this._maxLength = value.maxLength;
      this._minClasses = value.minClasses;
      this._minLength = value.minLength;
      this._requireDigit = value.requireDigit;
      this._requireLower = value.requireLower;
      this._requireSpecial = value.requireSpecial;
      this._requireUpper = value.requireUpper;
    }
  }

  // allow_consecutive - computed: false, optional: true, required: false
  private _allowConsecutive?: boolean | cdktf.IResolvable; 
  public get allowConsecutive() {
    return this.getBooleanAttribute('allow_consecutive');
  }
  public set allowConsecutive(value: boolean | cdktf.IResolvable) {
    this._allowConsecutive = value;
  }
  public resetAllowConsecutive() {
    this._allowConsecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConsecutiveInput() {
    return this._allowConsecutive;
  }

  // allow_username - computed: false, optional: true, required: false
  private _allowUsername?: boolean | cdktf.IResolvable; 
  public get allowUsername() {
    return this.getBooleanAttribute('allow_username');
  }
  public set allowUsername(value: boolean | cdktf.IResolvable) {
    this._allowUsername = value;
  }
  public resetAllowUsername() {
    this._allowUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUsernameInput() {
    return this._allowUsername;
  }

  // history - computed: false, optional: true, required: false
  private _history?: number; 
  public get history() {
    return this.getNumberAttribute('history');
  }
  public set history(value: number) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
  }

  // max_age_days - computed: false, optional: true, required: false
  private _maxAgeDays?: number; 
  public get maxAgeDays() {
    return this.getNumberAttribute('max_age_days');
  }
  public set maxAgeDays(value: number) {
    this._maxAgeDays = value;
  }
  public resetMaxAgeDays() {
    this._maxAgeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeDaysInput() {
    return this._maxAgeDays;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_classes - computed: false, optional: true, required: false
  private _minClasses?: number; 
  public get minClasses() {
    return this.getNumberAttribute('min_classes');
  }
  public set minClasses(value: number) {
    this._minClasses = value;
  }
  public resetMinClasses() {
    this._minClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClassesInput() {
    return this._minClasses;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // require_digit - computed: false, optional: true, required: false
  private _requireDigit?: boolean | cdktf.IResolvable; 
  public get requireDigit() {
    return this.getBooleanAttribute('require_digit');
  }
  public set requireDigit(value: boolean | cdktf.IResolvable) {
    this._requireDigit = value;
  }
  public resetRequireDigit() {
    this._requireDigit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDigitInput() {
    return this._requireDigit;
  }

  // require_lower - computed: false, optional: true, required: false
  private _requireLower?: boolean | cdktf.IResolvable; 
  public get requireLower() {
    return this.getBooleanAttribute('require_lower');
  }
  public set requireLower(value: boolean | cdktf.IResolvable) {
    this._requireLower = value;
  }
  public resetRequireLower() {
    this._requireLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLowerInput() {
    return this._requireLower;
  }

  // require_special - computed: false, optional: true, required: false
  private _requireSpecial?: boolean | cdktf.IResolvable; 
  public get requireSpecial() {
    return this.getBooleanAttribute('require_special');
  }
  public set requireSpecial(value: boolean | cdktf.IResolvable) {
    this._requireSpecial = value;
  }
  public resetRequireSpecial() {
    this._requireSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSpecialInput() {
    return this._requireSpecial;
  }

  // require_upper - computed: false, optional: true, required: false
  private _requireUpper?: boolean | cdktf.IResolvable; 
  public get requireUpper() {
    return this.getBooleanAttribute('require_upper');
  }
  public set requireUpper(value: boolean | cdktf.IResolvable) {
    this._requireUpper = value;
  }
  public resetRequireUpper() {
    this._requireUpper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireUpperInput() {
    return this._requireUpper;
  }
}
export interface AuthRemoteRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#ldap_group Auth#ldap_group}
  */
  readonly ldapGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#remote_gid Auth#remote_gid}
  */
  readonly remoteGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#rolename Auth#rolename}
  */
  readonly rolename: string;
}

export function authRemoteRolesToTerraform(struct?: AuthRemoteRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ldap_group: cdktf.stringToTerraform(struct!.ldapGroup),
    remote_gid: cdktf.numberToTerraform(struct!.remoteGid),
    rolename: cdktf.stringToTerraform(struct!.rolename),
  }
}


export function authRemoteRolesToHclTerraform(struct?: AuthRemoteRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ldap_group: {
      value: cdktf.stringToHclTerraform(struct!.ldapGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_gid: {
      value: cdktf.numberToHclTerraform(struct!.remoteGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rolename: {
      value: cdktf.stringToHclTerraform(struct!.rolename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthRemoteRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthRemoteRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ldapGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapGroup = this._ldapGroup;
    }
    if (this._remoteGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteGid = this._remoteGid;
    }
    if (this._rolename !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolename = this._rolename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthRemoteRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ldapGroup = undefined;
      this._remoteGid = undefined;
      this._rolename = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ldapGroup = value.ldapGroup;
      this._remoteGid = value.remoteGid;
      this._rolename = value.rolename;
    }
  }

  // ldap_group - computed: false, optional: true, required: false
  private _ldapGroup?: string; 
  public get ldapGroup() {
    return this.getStringAttribute('ldap_group');
  }
  public set ldapGroup(value: string) {
    this._ldapGroup = value;
  }
  public resetLdapGroup() {
    this._ldapGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupInput() {
    return this._ldapGroup;
  }

  // remote_gid - computed: false, optional: true, required: false
  private _remoteGid?: number; 
  public get remoteGid() {
    return this.getNumberAttribute('remote_gid');
  }
  public set remoteGid(value: number) {
    this._remoteGid = value;
  }
  public resetRemoteGid() {
    this._remoteGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGidInput() {
    return this._remoteGid;
  }

  // rolename - computed: false, optional: false, required: true
  private _rolename?: string; 
  public get rolename() {
    return this.getStringAttribute('rolename');
  }
  public set rolename(value: string) {
    this._rolename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolenameInput() {
    return this._rolename;
  }
}

export class AuthRemoteRolesList extends cdktf.ComplexList {
  public internalValue? : AuthRemoteRoles[] | cdktf.IResolvable

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
  public get(index: number): AuthRemoteRolesOutputReference {
    return new AuthRemoteRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth f5os_auth}
*/
export class Auth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Auth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Auth to import
  * @param importFromId The id of the existing Auth that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Auth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/auth f5os_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'f5os_auth',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authOrder = config.authOrder;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._remoteRoles.internalValue = config.remoteRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_order - computed: false, optional: true, required: false
  private _authOrder?: string[]; 
  public get authOrder() {
    return this.getListAttribute('auth_order');
  }
  public set authOrder(value: string[]) {
    this._authOrder = value;
  }
  public resetAuthOrder() {
    this._authOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOrderInput() {
    return this._authOrder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new AuthPasswordPolicyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: AuthPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // remote_roles - computed: false, optional: true, required: false
  private _remoteRoles = new AuthRemoteRolesList(this, "remote_roles", true);
  public get remoteRoles() {
    return this._remoteRoles;
  }
  public putRemoteRoles(value: AuthRemoteRoles[] | cdktf.IResolvable) {
    this._remoteRoles.internalValue = value;
  }
  public resetRemoteRoles() {
    this._remoteRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRolesInput() {
    return this._remoteRoles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_order: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authOrder),
      password_policy: authPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
      remote_roles: cdktf.listMapper(authRemoteRolesToTerraform, false)(this._remoteRoles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_order: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authOrder),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password_policy: {
        value: authPasswordPolicyToHclTerraform(this._passwordPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthPasswordPolicy",
      },
      remote_roles: {
        value: cdktf.listMapperHcl(authRemoteRolesToHclTerraform, false)(this._remoteRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthRemoteRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
