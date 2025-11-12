// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#filter DataPowerscaleUser#filter}
  */
  readonly filter?: DataPowerscaleUserFilter;
}
export interface DataPowerscaleUserUsers {
  /**
  * Specifies a principal name for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#dn DataPowerscaleUser#dn}
  */
  readonly dn?: string;
  /**
  * Specifies the DNS domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#dns_domain DataPowerscaleUser#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Specifies the domain that the object is part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#domain DataPowerscaleUser#domain}
  */
  readonly domain?: string;
  /**
  * Specifies an email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#email DataPowerscaleUser#email}
  */
  readonly email?: string;
  /**
  * If true, the authenticated user is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#enabled DataPowerscaleUser#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If true, the authenticated user has expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#expired DataPowerscaleUser#expired}
  */
  readonly expired?: boolean | cdktf.IResolvable;
  /**
  * Specifies the Unix Epoch time at which the authenticated user will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#expiry DataPowerscaleUser#expiry}
  */
  readonly expiry?: number;
  /**
  * Specifies the GECOS value, which is usually the full name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#gecos DataPowerscaleUser#gecos}
  */
  readonly gecos?: string;
  /**
  * If true, the GID was generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#generated_gid DataPowerscaleUser#generated_gid}
  */
  readonly generatedGid?: boolean | cdktf.IResolvable;
  /**
  * If true, the UID was generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#generated_uid DataPowerscaleUser#generated_uid}
  */
  readonly generatedUid?: boolean | cdktf.IResolvable;
  /**
  * If true, the UPN was generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#generated_upn DataPowerscaleUser#generated_upn}
  */
  readonly generatedUpn?: boolean | cdktf.IResolvable;
  /**
  * Specifies a group identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#gid DataPowerscaleUser#gid}
  */
  readonly gid?: string;
  /**
  * Specifies a home directory for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#home_directory DataPowerscaleUser#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Specifies the user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#id DataPowerscaleUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, indicates that the account is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#locked DataPowerscaleUser#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum time in seconds allowed before the password expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#max_password_age DataPowerscaleUser#max_password_age}
  */
  readonly maxPasswordAge?: number;
  /**
  * Specifies a user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#name DataPowerscaleUser#name}
  */
  readonly name?: string;
  /**
  * If true, the password has expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#password_expired DataPowerscaleUser#password_expired}
  */
  readonly passwordExpired?: boolean | cdktf.IResolvable;
  /**
  * If true, the password is allowed to expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#password_expires DataPowerscaleUser#password_expires}
  */
  readonly passwordExpires?: boolean | cdktf.IResolvable;
  /**
  * Specifies the time in Unix Epoch seconds that the password will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#password_expiry DataPowerscaleUser#password_expiry}
  */
  readonly passwordExpiry?: number;
  /**
  * Specifies the last time the password was set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#password_last_set DataPowerscaleUser#password_last_set}
  */
  readonly passwordLastSet?: number;
  /**
  * Specifies the persona of the primary group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#primary_group_sid DataPowerscaleUser#primary_group_sid}
  */
  readonly primaryGroupSid?: string;
  /**
  * If true, Prompts the user to change their password at the next login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#prompt_password_change DataPowerscaleUser#prompt_password_change}
  */
  readonly promptPasswordChange?: boolean | cdktf.IResolvable;
  /**
  * Specifies the authentication provider that the object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#provider DataPowerscaleUser#provider}
  */
  readonly provider?: string;
  /**
  * Specifies a user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#sam_account_name DataPowerscaleUser#sam_account_name}
  */
  readonly samAccountName?: string;
  /**
  * Specifies a path to the shell for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#shell DataPowerscaleUser#shell}
  */
  readonly shell?: string;
  /**
  * Specifies a security identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#sid DataPowerscaleUser#sid}
  */
  readonly sid?: string;
  /**
  * Specifies the object type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#type DataPowerscaleUser#type}
  */
  readonly type?: string;
  /**
  * Specifies a user identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#uid DataPowerscaleUser#uid}
  */
  readonly uid?: string;
  /**
  * Specifies a principal name for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#upn DataPowerscaleUser#upn}
  */
  readonly upn?: string;
  /**
  * Specifies whether the password for the user can be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#user_can_change_password DataPowerscaleUser#user_can_change_password}
  */
  readonly userCanChangePassword?: boolean | cdktf.IResolvable;
}

export function dataPowerscaleUserUsersToTerraform(struct?: DataPowerscaleUserUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dn: cdktf.stringToTerraform(struct!.dn),
    dns_domain: cdktf.stringToTerraform(struct!.dnsDomain),
    domain: cdktf.stringToTerraform(struct!.domain),
    email: cdktf.stringToTerraform(struct!.email),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expired: cdktf.booleanToTerraform(struct!.expired),
    expiry: cdktf.numberToTerraform(struct!.expiry),
    gecos: cdktf.stringToTerraform(struct!.gecos),
    generated_gid: cdktf.booleanToTerraform(struct!.generatedGid),
    generated_uid: cdktf.booleanToTerraform(struct!.generatedUid),
    generated_upn: cdktf.booleanToTerraform(struct!.generatedUpn),
    gid: cdktf.stringToTerraform(struct!.gid),
    home_directory: cdktf.stringToTerraform(struct!.homeDirectory),
    id: cdktf.stringToTerraform(struct!.id),
    locked: cdktf.booleanToTerraform(struct!.locked),
    max_password_age: cdktf.numberToTerraform(struct!.maxPasswordAge),
    name: cdktf.stringToTerraform(struct!.name),
    password_expired: cdktf.booleanToTerraform(struct!.passwordExpired),
    password_expires: cdktf.booleanToTerraform(struct!.passwordExpires),
    password_expiry: cdktf.numberToTerraform(struct!.passwordExpiry),
    password_last_set: cdktf.numberToTerraform(struct!.passwordLastSet),
    primary_group_sid: cdktf.stringToTerraform(struct!.primaryGroupSid),
    prompt_password_change: cdktf.booleanToTerraform(struct!.promptPasswordChange),
    provider: cdktf.stringToTerraform(struct!.provider),
    sam_account_name: cdktf.stringToTerraform(struct!.samAccountName),
    shell: cdktf.stringToTerraform(struct!.shell),
    sid: cdktf.stringToTerraform(struct!.sid),
    type: cdktf.stringToTerraform(struct!.type),
    uid: cdktf.stringToTerraform(struct!.uid),
    upn: cdktf.stringToTerraform(struct!.upn),
    user_can_change_password: cdktf.booleanToTerraform(struct!.userCanChangePassword),
  }
}


export function dataPowerscaleUserUsersToHclTerraform(struct?: DataPowerscaleUserUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dn: {
      value: cdktf.stringToHclTerraform(struct!.dn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expired: {
      value: cdktf.booleanToHclTerraform(struct!.expired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gecos: {
      value: cdktf.stringToHclTerraform(struct!.gecos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generated_gid: {
      value: cdktf.booleanToHclTerraform(struct!.generatedGid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generated_uid: {
      value: cdktf.booleanToHclTerraform(struct!.generatedUid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generated_upn: {
      value: cdktf.booleanToHclTerraform(struct!.generatedUpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gid: {
      value: cdktf.stringToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    home_directory: {
      value: cdktf.stringToHclTerraform(struct!.homeDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_password_age: {
      value: cdktf.numberToHclTerraform(struct!.maxPasswordAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_expired: {
      value: cdktf.booleanToHclTerraform(struct!.passwordExpired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_expires: {
      value: cdktf.booleanToHclTerraform(struct!.passwordExpires),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_expiry: {
      value: cdktf.numberToHclTerraform(struct!.passwordExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_last_set: {
      value: cdktf.numberToHclTerraform(struct!.passwordLastSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_group_sid: {
      value: cdktf.stringToHclTerraform(struct!.primaryGroupSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_password_change: {
      value: cdktf.booleanToHclTerraform(struct!.promptPasswordChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam_account_name: {
      value: cdktf.stringToHclTerraform(struct!.samAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upn: {
      value: cdktf.stringToHclTerraform(struct!.upn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_can_change_password: {
      value: cdktf.booleanToHclTerraform(struct!.userCanChangePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleUserUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleUserUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dn = this._dn;
    }
    if (this._dnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomain = this._dnsDomain;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expired !== undefined) {
      hasAnyValues = true;
      internalValueResult.expired = this._expired;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._gecos !== undefined) {
      hasAnyValues = true;
      internalValueResult.gecos = this._gecos;
    }
    if (this._generatedGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedGid = this._generatedGid;
    }
    if (this._generatedUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedUid = this._generatedUid;
    }
    if (this._generatedUpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedUpn = this._generatedUpn;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._homeDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDirectory = this._homeDirectory;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._maxPasswordAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPasswordAge = this._maxPasswordAge;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passwordExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordExpired = this._passwordExpired;
    }
    if (this._passwordExpires !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordExpires = this._passwordExpires;
    }
    if (this._passwordExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordExpiry = this._passwordExpiry;
    }
    if (this._passwordLastSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLastSet = this._passwordLastSet;
    }
    if (this._primaryGroupSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryGroupSid = this._primaryGroupSid;
    }
    if (this._promptPasswordChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptPasswordChange = this._promptPasswordChange;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._samAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.samAccountName = this._samAccountName;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._upn !== undefined) {
      hasAnyValues = true;
      internalValueResult.upn = this._upn;
    }
    if (this._userCanChangePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCanChangePassword = this._userCanChangePassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dn = undefined;
      this._dnsDomain = undefined;
      this._domain = undefined;
      this._email = undefined;
      this._enabled = undefined;
      this._expired = undefined;
      this._expiry = undefined;
      this._gecos = undefined;
      this._generatedGid = undefined;
      this._generatedUid = undefined;
      this._generatedUpn = undefined;
      this._gid = undefined;
      this._homeDirectory = undefined;
      this._id = undefined;
      this._locked = undefined;
      this._maxPasswordAge = undefined;
      this._name = undefined;
      this._passwordExpired = undefined;
      this._passwordExpires = undefined;
      this._passwordExpiry = undefined;
      this._passwordLastSet = undefined;
      this._primaryGroupSid = undefined;
      this._promptPasswordChange = undefined;
      this._provider = undefined;
      this._samAccountName = undefined;
      this._shell = undefined;
      this._sid = undefined;
      this._type = undefined;
      this._uid = undefined;
      this._upn = undefined;
      this._userCanChangePassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dn = value.dn;
      this._dnsDomain = value.dnsDomain;
      this._domain = value.domain;
      this._email = value.email;
      this._enabled = value.enabled;
      this._expired = value.expired;
      this._expiry = value.expiry;
      this._gecos = value.gecos;
      this._generatedGid = value.generatedGid;
      this._generatedUid = value.generatedUid;
      this._generatedUpn = value.generatedUpn;
      this._gid = value.gid;
      this._homeDirectory = value.homeDirectory;
      this._id = value.id;
      this._locked = value.locked;
      this._maxPasswordAge = value.maxPasswordAge;
      this._name = value.name;
      this._passwordExpired = value.passwordExpired;
      this._passwordExpires = value.passwordExpires;
      this._passwordExpiry = value.passwordExpiry;
      this._passwordLastSet = value.passwordLastSet;
      this._primaryGroupSid = value.primaryGroupSid;
      this._promptPasswordChange = value.promptPasswordChange;
      this._provider = value.provider;
      this._samAccountName = value.samAccountName;
      this._shell = value.shell;
      this._sid = value.sid;
      this._type = value.type;
      this._uid = value.uid;
      this._upn = value.upn;
      this._userCanChangePassword = value.userCanChangePassword;
    }
  }

  // dn - computed: true, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // dns_domain - computed: true, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
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

  // expired - computed: true, optional: true, required: false
  private _expired?: boolean | cdktf.IResolvable; 
  public get expired() {
    return this.getBooleanAttribute('expired');
  }
  public set expired(value: boolean | cdktf.IResolvable) {
    this._expired = value;
  }
  public resetExpired() {
    this._expired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredInput() {
    return this._expired;
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

  // generated_gid - computed: true, optional: true, required: false
  private _generatedGid?: boolean | cdktf.IResolvable; 
  public get generatedGid() {
    return this.getBooleanAttribute('generated_gid');
  }
  public set generatedGid(value: boolean | cdktf.IResolvable) {
    this._generatedGid = value;
  }
  public resetGeneratedGid() {
    this._generatedGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedGidInput() {
    return this._generatedGid;
  }

  // generated_uid - computed: true, optional: true, required: false
  private _generatedUid?: boolean | cdktf.IResolvable; 
  public get generatedUid() {
    return this.getBooleanAttribute('generated_uid');
  }
  public set generatedUid(value: boolean | cdktf.IResolvable) {
    this._generatedUid = value;
  }
  public resetGeneratedUid() {
    this._generatedUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedUidInput() {
    return this._generatedUid;
  }

  // generated_upn - computed: true, optional: true, required: false
  private _generatedUpn?: boolean | cdktf.IResolvable; 
  public get generatedUpn() {
    return this.getBooleanAttribute('generated_upn');
  }
  public set generatedUpn(value: boolean | cdktf.IResolvable) {
    this._generatedUpn = value;
  }
  public resetGeneratedUpn() {
    this._generatedUpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedUpnInput() {
    return this._generatedUpn;
  }

  // gid - computed: true, optional: true, required: false
  private _gid?: string; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
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

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // max_password_age - computed: true, optional: true, required: false
  private _maxPasswordAge?: number; 
  public get maxPasswordAge() {
    return this.getNumberAttribute('max_password_age');
  }
  public set maxPasswordAge(value: number) {
    this._maxPasswordAge = value;
  }
  public resetMaxPasswordAge() {
    this._maxPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordAgeInput() {
    return this._maxPasswordAge;
  }

  // name - computed: true, optional: true, required: false
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

  // password_expired - computed: true, optional: true, required: false
  private _passwordExpired?: boolean | cdktf.IResolvable; 
  public get passwordExpired() {
    return this.getBooleanAttribute('password_expired');
  }
  public set passwordExpired(value: boolean | cdktf.IResolvable) {
    this._passwordExpired = value;
  }
  public resetPasswordExpired() {
    this._passwordExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiredInput() {
    return this._passwordExpired;
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

  // password_expiry - computed: true, optional: true, required: false
  private _passwordExpiry?: number; 
  public get passwordExpiry() {
    return this.getNumberAttribute('password_expiry');
  }
  public set passwordExpiry(value: number) {
    this._passwordExpiry = value;
  }
  public resetPasswordExpiry() {
    this._passwordExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiryInput() {
    return this._passwordExpiry;
  }

  // password_last_set - computed: true, optional: true, required: false
  private _passwordLastSet?: number; 
  public get passwordLastSet() {
    return this.getNumberAttribute('password_last_set');
  }
  public set passwordLastSet(value: number) {
    this._passwordLastSet = value;
  }
  public resetPasswordLastSet() {
    this._passwordLastSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLastSetInput() {
    return this._passwordLastSet;
  }

  // primary_group_sid - computed: true, optional: true, required: false
  private _primaryGroupSid?: string; 
  public get primaryGroupSid() {
    return this.getStringAttribute('primary_group_sid');
  }
  public set primaryGroupSid(value: string) {
    this._primaryGroupSid = value;
  }
  public resetPrimaryGroupSid() {
    this._primaryGroupSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupSidInput() {
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

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // sam_account_name - computed: true, optional: true, required: false
  private _samAccountName?: string; 
  public get samAccountName() {
    return this.getStringAttribute('sam_account_name');
  }
  public set samAccountName(value: string) {
    this._samAccountName = value;
  }
  public resetSamAccountName() {
    this._samAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samAccountNameInput() {
    return this._samAccountName;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // upn - computed: true, optional: true, required: false
  private _upn?: string; 
  public get upn() {
    return this.getStringAttribute('upn');
  }
  public set upn(value: string) {
    this._upn = value;
  }
  public resetUpn() {
    this._upn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upnInput() {
    return this._upn;
  }

  // user_can_change_password - computed: true, optional: true, required: false
  private _userCanChangePassword?: boolean | cdktf.IResolvable; 
  public get userCanChangePassword() {
    return this.getBooleanAttribute('user_can_change_password');
  }
  public set userCanChangePassword(value: boolean | cdktf.IResolvable) {
    this._userCanChangePassword = value;
  }
  public resetUserCanChangePassword() {
    this._userCanChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCanChangePasswordInput() {
    return this._userCanChangePassword;
  }
}

export class DataPowerscaleUserUsersList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleUserUsers[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleUserUsersOutputReference {
    return new DataPowerscaleUserUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleUserFilterNames {
  /**
  * Specifies a user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#name DataPowerscaleUser#name}
  */
  readonly name?: string;
  /**
  * Specifies a numeric security identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#sid DataPowerscaleUser#sid}
  */
  readonly sid?: string;
  /**
  * Specifies a numeric user identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#uid DataPowerscaleUser#uid}
  */
  readonly uid?: number;
}

export function dataPowerscaleUserFilterNamesToTerraform(struct?: DataPowerscaleUserFilterNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sid: cdktf.stringToTerraform(struct!.sid),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function dataPowerscaleUserFilterNamesToHclTerraform(struct?: DataPowerscaleUserFilterNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleUserFilterNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleUserFilterNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserFilterNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sid = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sid = value.sid;
      this._uid = value.uid;
    }
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

  // sid - computed: false, optional: true, required: false
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

  // uid - computed: false, optional: true, required: false
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
}

export class DataPowerscaleUserFilterNamesList extends cdktf.ComplexList {
  public internalValue? : DataPowerscaleUserFilterNames[] | cdktf.IResolvable

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
  public get(index: number): DataPowerscaleUserFilterNamesOutputReference {
    return new DataPowerscaleUserFilterNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleUserFilter {
  /**
  * If true, only return cached objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#cached DataPowerscaleUser#cached}
  */
  readonly cached?: boolean | cdktf.IResolvable;
  /**
  * Filter users by domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#domain DataPowerscaleUser#domain}
  */
  readonly domain?: string;
  /**
  * Enumerate all users that a group is a member of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#member_of DataPowerscaleUser#member_of}
  */
  readonly memberOf?: boolean | cdktf.IResolvable;
  /**
  * Filter users by name prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#name_prefix DataPowerscaleUser#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * List of user identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#names DataPowerscaleUser#names}
  */
  readonly names?: DataPowerscaleUserFilterNames[] | cdktf.IResolvable;
  /**
  * Filter users by provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#provider DataPowerscaleUser#provider}
  */
  readonly provider?: string;
  /**
  * Filter users by zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#zone DataPowerscaleUser#zone}
  */
  readonly zone?: string;
}

export function dataPowerscaleUserFilterToTerraform(struct?: DataPowerscaleUserFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cached: cdktf.booleanToTerraform(struct!.cached),
    domain: cdktf.stringToTerraform(struct!.domain),
    member_of: cdktf.booleanToTerraform(struct!.memberOf),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    names: cdktf.listMapper(dataPowerscaleUserFilterNamesToTerraform, false)(struct!.names),
    provider: cdktf.stringToTerraform(struct!.provider),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataPowerscaleUserFilterToHclTerraform(struct?: DataPowerscaleUserFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cached: {
      value: cdktf.booleanToHclTerraform(struct!.cached),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_of: {
      value: cdktf.booleanToHclTerraform(struct!.memberOf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(dataPowerscaleUserFilterNamesToHclTerraform, false)(struct!.names),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerscaleUserFilterNamesList",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleUserFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleUserFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cached !== undefined) {
      hasAnyValues = true;
      internalValueResult.cached = this._cached;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._memberOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberOf = this._memberOf;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._names?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleUserFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cached = undefined;
      this._domain = undefined;
      this._memberOf = undefined;
      this._namePrefix = undefined;
      this._names.internalValue = undefined;
      this._provider = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cached = value.cached;
      this._domain = value.domain;
      this._memberOf = value.memberOf;
      this._namePrefix = value.namePrefix;
      this._names.internalValue = value.names;
      this._provider = value.provider;
      this._zone = value.zone;
    }
  }

  // cached - computed: false, optional: true, required: false
  private _cached?: boolean | cdktf.IResolvable; 
  public get cached() {
    return this.getBooleanAttribute('cached');
  }
  public set cached(value: boolean | cdktf.IResolvable) {
    this._cached = value;
  }
  public resetCached() {
    this._cached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedInput() {
    return this._cached;
  }

  // domain - computed: false, optional: true, required: false
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

  // member_of - computed: false, optional: true, required: false
  private _memberOf?: boolean | cdktf.IResolvable; 
  public get memberOf() {
    return this.getBooleanAttribute('member_of');
  }
  public set memberOf(value: boolean | cdktf.IResolvable) {
    this._memberOf = value;
  }
  public resetMemberOf() {
    this._memberOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfInput() {
    return this._memberOf;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // names - computed: false, optional: true, required: false
  private _names = new DataPowerscaleUserFilterNamesList(this, "names", false);
  public get names() {
    return this._names;
  }
  public putNames(value: DataPowerscaleUserFilterNames[] | cdktf.IResolvable) {
    this._names.internalValue = value;
  }
  public resetNames() {
    this._names.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names.internalValue;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user powerscale_user}
*/
export class DataPowerscaleUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleUser to import
  * @param importFromId The id of the existing DataPowerscaleUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/user powerscale_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleUserConfig = {}) {
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
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataPowerscaleUserUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleUserFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleUserFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleUserFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleUserFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleUserFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
