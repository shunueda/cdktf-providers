// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserMappingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the parameters for user mapping rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#parameters UserMappingRules#parameters}
  */
  readonly parameters?: UserMappingRulesParameters;
  /**
  * Specifies the list of user mapping rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#rules UserMappingRules#rules}
  */
  readonly rules?: UserMappingRulesRules[] | cdktf.IResolvable;
  /**
  * List of user identity for mapping test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#test_mapping_users UserMappingRules#test_mapping_users}
  */
  readonly testMappingUsers?: UserMappingRulesTestMappingUsers[] | cdktf.IResolvable;
  /**
  * The zone to which the user mapping applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#zone UserMappingRules#zone}
  */
  readonly zone?: string;
}
export interface UserMappingRulesMappingUsersPrivileges {
}

export function userMappingRulesMappingUsersPrivilegesToTerraform(struct?: UserMappingRulesMappingUsersPrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userMappingRulesMappingUsersPrivilegesToHclTerraform(struct?: UserMappingRulesMappingUsersPrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserMappingRulesMappingUsersPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserMappingRulesMappingUsersPrivileges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesMappingUsersPrivileges | undefined) {
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

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class UserMappingRulesMappingUsersPrivilegesList extends cdktf.ComplexList {

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
  public get(index: number): UserMappingRulesMappingUsersPrivilegesOutputReference {
    return new UserMappingRulesMappingUsersPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserMappingRulesMappingUsersSupplementalIdentities {
}

export function userMappingRulesMappingUsersSupplementalIdentitiesToTerraform(struct?: UserMappingRulesMappingUsersSupplementalIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userMappingRulesMappingUsersSupplementalIdentitiesToHclTerraform(struct?: UserMappingRulesMappingUsersSupplementalIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserMappingRulesMappingUsersSupplementalIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserMappingRulesMappingUsersSupplementalIdentities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesMappingUsersSupplementalIdentities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getStringAttribute('gid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }
}

export class UserMappingRulesMappingUsersSupplementalIdentitiesList extends cdktf.ComplexList {

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
  public get(index: number): UserMappingRulesMappingUsersSupplementalIdentitiesOutputReference {
    return new UserMappingRulesMappingUsersSupplementalIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserMappingRulesMappingUsersUser {
}

export function userMappingRulesMappingUsersUserToTerraform(struct?: UserMappingRulesMappingUsersUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userMappingRulesMappingUsersUserToHclTerraform(struct?: UserMappingRulesMappingUsersUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserMappingRulesMappingUsersUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserMappingRulesMappingUsersUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesMappingUsersUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_disk_user_identity - computed: true, optional: false, required: false
  public get onDiskUserIdentity() {
    return this.getStringAttribute('on_disk_user_identity');
  }

  // primary_group_name - computed: true, optional: false, required: false
  public get primaryGroupName() {
    return this.getStringAttribute('primary_group_name');
  }

  // primary_group_sid - computed: true, optional: false, required: false
  public get primaryGroupSid() {
    return this.getStringAttribute('primary_group_sid');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface UserMappingRulesMappingUsers {
}

export function userMappingRulesMappingUsersToTerraform(struct?: UserMappingRulesMappingUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userMappingRulesMappingUsersToHclTerraform(struct?: UserMappingRulesMappingUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserMappingRulesMappingUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserMappingRulesMappingUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesMappingUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // privileges - computed: true, optional: false, required: false
  private _privileges = new UserMappingRulesMappingUsersPrivilegesList(this, "privileges", false);
  public get privileges() {
    return this._privileges;
  }

  // supplemental_identities - computed: true, optional: false, required: false
  private _supplementalIdentities = new UserMappingRulesMappingUsersSupplementalIdentitiesList(this, "supplemental_identities", false);
  public get supplementalIdentities() {
    return this._supplementalIdentities;
  }

  // user - computed: true, optional: false, required: false
  private _user = new UserMappingRulesMappingUsersUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }

  // zid - computed: true, optional: false, required: false
  public get zid() {
    return this.getNumberAttribute('zid');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class UserMappingRulesMappingUsersList extends cdktf.ComplexList {

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
  public get(index: number): UserMappingRulesMappingUsersOutputReference {
    return new UserMappingRulesMappingUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserMappingRulesParametersDefaultUnixUser {
  /**
  * Specifies the domain of the user that is being mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#domain UserMappingRules#domain}
  */
  readonly domain?: string;
  /**
  * Specifies the name of the user that is being mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#user UserMappingRules#user}
  */
  readonly user: string;
}

export function userMappingRulesParametersDefaultUnixUserToTerraform(struct?: UserMappingRulesParametersDefaultUnixUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function userMappingRulesParametersDefaultUnixUserToHclTerraform(struct?: UserMappingRulesParametersDefaultUnixUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserMappingRulesParametersDefaultUnixUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserMappingRulesParametersDefaultUnixUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesParametersDefaultUnixUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._user = value.user;
    }
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

  // user - computed: true, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface UserMappingRulesParameters {
  /**
  * Specifies the default UNIX user information that can be applied if the final credentials do not have valid UID and GID information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#default_unix_user UserMappingRules#default_unix_user}
  */
  readonly defaultUnixUser?: UserMappingRulesParametersDefaultUnixUser;
}

export function userMappingRulesParametersToTerraform(struct?: UserMappingRulesParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_unix_user: userMappingRulesParametersDefaultUnixUserToTerraform(struct!.defaultUnixUser),
  }
}


export function userMappingRulesParametersToHclTerraform(struct?: UserMappingRulesParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_unix_user: {
      value: userMappingRulesParametersDefaultUnixUserToHclTerraform(struct!.defaultUnixUser),
      isBlock: true,
      type: "struct",
      storageClassType: "UserMappingRulesParametersDefaultUnixUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserMappingRulesParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserMappingRulesParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultUnixUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUnixUser = this._defaultUnixUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultUnixUser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultUnixUser.internalValue = value.defaultUnixUser;
    }
  }

  // default_unix_user - computed: true, optional: true, required: false
  private _defaultUnixUser = new UserMappingRulesParametersDefaultUnixUserOutputReference(this, "default_unix_user");
  public get defaultUnixUser() {
    return this._defaultUnixUser;
  }
  public putDefaultUnixUser(value: UserMappingRulesParametersDefaultUnixUser) {
    this._defaultUnixUser.internalValue = value;
  }
  public resetDefaultUnixUser() {
    this._defaultUnixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUnixUserInput() {
    return this._defaultUnixUser.internalValue;
  }
}
export interface UserMappingRulesRulesOptionsDefaultUser {
  /**
  * Specifies the domain of the user that is being mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#domain UserMappingRules#domain}
  */
  readonly domain?: string;
  /**
  * Specifies the name of the user that is being mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#user UserMappingRules#user}
  */
  readonly user: string;
}

export function userMappingRulesRulesOptionsDefaultUserToTerraform(struct?: UserMappingRulesRulesOptionsDefaultUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function userMappingRulesRulesOptionsDefaultUserToHclTerraform(struct?: UserMappingRulesRulesOptionsDefaultUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserMappingRulesRulesOptionsDefaultUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserMappingRulesRulesOptionsDefaultUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesRulesOptionsDefaultUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._user = value.user;
    }
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

  // user - computed: true, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface UserMappingRulesRulesOptions {
  /**
  * If true, and the rule was applied successfully, stop processing further.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#break UserMappingRules#break}
  */
  readonly break?: boolean | cdktf.IResolvable;
  /**
  * Specifies the default user information that can be applied if the final credentials do not have valid UID and GID information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#default_user UserMappingRules#default_user}
  */
  readonly defaultUser?: UserMappingRulesRulesOptionsDefaultUser;
  /**
  * If true, the primary GID and primary group SID should be copied to the existing credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#group UserMappingRules#group}
  */
  readonly group?: boolean | cdktf.IResolvable;
  /**
  * If true, all additional identifiers should be copied to the existing credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#groups UserMappingRules#groups}
  */
  readonly groups?: boolean | cdktf.IResolvable;
  /**
  * If true, the primary UID and primary user SID should be copied to the existing credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#user UserMappingRules#user}
  */
  readonly user?: boolean | cdktf.IResolvable;
}

export function userMappingRulesRulesOptionsToTerraform(struct?: UserMappingRulesRulesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    break: cdktf.booleanToTerraform(struct!.break),
    default_user: userMappingRulesRulesOptionsDefaultUserToTerraform(struct!.defaultUser),
    group: cdktf.booleanToTerraform(struct!.group),
    groups: cdktf.booleanToTerraform(struct!.groups),
    user: cdktf.booleanToTerraform(struct!.user),
  }
}


export function userMappingRulesRulesOptionsToHclTerraform(struct?: UserMappingRulesRulesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    break: {
      value: cdktf.booleanToHclTerraform(struct!.break),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_user: {
      value: userMappingRulesRulesOptionsDefaultUserToHclTerraform(struct!.defaultUser),
      isBlock: true,
      type: "struct",
      storageClassType: "UserMappingRulesRulesOptionsDefaultUser",
    },
    group: {
      value: cdktf.booleanToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: cdktf.booleanToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.booleanToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserMappingRulesRulesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserMappingRulesRulesOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._break !== undefined) {
      hasAnyValues = true;
      internalValueResult.break = this._break;
    }
    if (this._defaultUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUser = this._defaultUser?.internalValue;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesRulesOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._break = undefined;
      this._defaultUser.internalValue = undefined;
      this._group = undefined;
      this._groups = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._break = value.break;
      this._defaultUser.internalValue = value.defaultUser;
      this._group = value.group;
      this._groups = value.groups;
      this._user = value.user;
    }
  }

  // break - computed: true, optional: true, required: false
  private _break?: boolean | cdktf.IResolvable; 
  public get break() {
    return this.getBooleanAttribute('break');
  }
  public set break(value: boolean | cdktf.IResolvable) {
    this._break = value;
  }
  public resetBreak() {
    this._break = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakInput() {
    return this._break;
  }

  // default_user - computed: true, optional: true, required: false
  private _defaultUser = new UserMappingRulesRulesOptionsDefaultUserOutputReference(this, "default_user");
  public get defaultUser() {
    return this._defaultUser;
  }
  public putDefaultUser(value: UserMappingRulesRulesOptionsDefaultUser) {
    this._defaultUser.internalValue = value;
  }
  public resetDefaultUser() {
    this._defaultUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserInput() {
    return this._defaultUser.internalValue;
  }

  // group - computed: true, optional: true, required: false
  private _group?: boolean | cdktf.IResolvable; 
  public get group() {
    return this.getBooleanAttribute('group');
  }
  public set group(value: boolean | cdktf.IResolvable) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: boolean | cdktf.IResolvable; 
  public get groups() {
    return this.getBooleanAttribute('groups');
  }
  public set groups(value: boolean | cdktf.IResolvable) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // user - computed: true, optional: true, required: false
  private _user?: boolean | cdktf.IResolvable; 
  public get user() {
    return this.getBooleanAttribute('user');
  }
  public set user(value: boolean | cdktf.IResolvable) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface UserMappingRulesRulesSourceUser {
  /**
  * Specifies the domain of the user that is being mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#domain UserMappingRules#domain}
  */
  readonly domain?: string;
  /**
  * Specifies the name of the user that is being mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#user UserMappingRules#user}
  */
  readonly user: string;
}

export function userMappingRulesRulesSourceUserToTerraform(struct?: UserMappingRulesRulesSourceUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function userMappingRulesRulesSourceUserToHclTerraform(struct?: UserMappingRulesRulesSourceUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserMappingRulesRulesSourceUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserMappingRulesRulesSourceUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesRulesSourceUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._user = value.user;
    }
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

  // user - computed: true, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface UserMappingRulesRulesTargetUser {
  /**
  * Specifies the domain of the user that is being mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#domain UserMappingRules#domain}
  */
  readonly domain?: string;
  /**
  * Specifies the name of the user that is being mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#user UserMappingRules#user}
  */
  readonly user: string;
}

export function userMappingRulesRulesTargetUserToTerraform(struct?: UserMappingRulesRulesTargetUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function userMappingRulesRulesTargetUserToHclTerraform(struct?: UserMappingRulesRulesTargetUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserMappingRulesRulesTargetUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserMappingRulesRulesTargetUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesRulesTargetUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._user = value.user;
    }
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

  // user - computed: true, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface UserMappingRulesRules {
  /**
  * Specifies the operator to make rules on specified users or groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#operator UserMappingRules#operator}
  */
  readonly operator: string;
  /**
  * Specifies the mapping options for this user mapping rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#options UserMappingRules#options}
  */
  readonly options?: UserMappingRulesRulesOptions;
  /**
  * Specifies the source user information that the rule can be applied from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#source_user UserMappingRules#source_user}
  */
  readonly sourceUser?: UserMappingRulesRulesSourceUser;
  /**
  * Specifies the target user information that the rule can be applied to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#target_user UserMappingRules#target_user}
  */
  readonly targetUser: UserMappingRulesRulesTargetUser;
}

export function userMappingRulesRulesToTerraform(struct?: UserMappingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    options: userMappingRulesRulesOptionsToTerraform(struct!.options),
    source_user: userMappingRulesRulesSourceUserToTerraform(struct!.sourceUser),
    target_user: userMappingRulesRulesTargetUserToTerraform(struct!.targetUser),
  }
}


export function userMappingRulesRulesToHclTerraform(struct?: UserMappingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: userMappingRulesRulesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "UserMappingRulesRulesOptions",
    },
    source_user: {
      value: userMappingRulesRulesSourceUserToHclTerraform(struct!.sourceUser),
      isBlock: true,
      type: "struct",
      storageClassType: "UserMappingRulesRulesSourceUser",
    },
    target_user: {
      value: userMappingRulesRulesTargetUserToHclTerraform(struct!.targetUser),
      isBlock: true,
      type: "struct",
      storageClassType: "UserMappingRulesRulesTargetUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserMappingRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserMappingRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._sourceUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUser = this._sourceUser?.internalValue;
    }
    if (this._targetUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUser = this._targetUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._options.internalValue = undefined;
      this._sourceUser.internalValue = undefined;
      this._targetUser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._options.internalValue = value.options;
      this._sourceUser.internalValue = value.sourceUser;
      this._targetUser.internalValue = value.targetUser;
    }
  }

  // operator - computed: true, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // options - computed: true, optional: true, required: false
  private _options = new UserMappingRulesRulesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: UserMappingRulesRulesOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // source_user - computed: true, optional: true, required: false
  private _sourceUser = new UserMappingRulesRulesSourceUserOutputReference(this, "source_user");
  public get sourceUser() {
    return this._sourceUser;
  }
  public putSourceUser(value: UserMappingRulesRulesSourceUser) {
    this._sourceUser.internalValue = value;
  }
  public resetSourceUser() {
    this._sourceUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser.internalValue;
  }

  // target_user - computed: true, optional: false, required: true
  private _targetUser = new UserMappingRulesRulesTargetUserOutputReference(this, "target_user");
  public get targetUser() {
    return this._targetUser;
  }
  public putTargetUser(value: UserMappingRulesRulesTargetUser) {
    this._targetUser.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUserInput() {
    return this._targetUser.internalValue;
  }
}

export class UserMappingRulesRulesList extends cdktf.ComplexList {
  public internalValue? : UserMappingRulesRules[] | cdktf.IResolvable

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
  public get(index: number): UserMappingRulesRulesOutputReference {
    return new UserMappingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserMappingRulesTestMappingUsers {
  /**
  * Specifies a user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#name UserMappingRules#name}
  */
  readonly name?: string;
  /**
  * Specifies a numeric user identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#uid UserMappingRules#uid}
  */
  readonly uid?: number;
}

export function userMappingRulesTestMappingUsersToTerraform(struct?: UserMappingRulesTestMappingUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function userMappingRulesTestMappingUsersToHclTerraform(struct?: UserMappingRulesTestMappingUsers | cdktf.IResolvable): any {
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

export class UserMappingRulesTestMappingUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserMappingRulesTestMappingUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserMappingRulesTestMappingUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

export class UserMappingRulesTestMappingUsersList extends cdktf.ComplexList {
  public internalValue? : UserMappingRulesTestMappingUsers[] | cdktf.IResolvable

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
  public get(index: number): UserMappingRulesTestMappingUsersOutputReference {
    return new UserMappingRulesTestMappingUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules powerscale_user_mapping_rules}
*/
export class UserMappingRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_user_mapping_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserMappingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserMappingRules to import
  * @param importFromId The id of the existing UserMappingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserMappingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_user_mapping_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/user_mapping_rules powerscale_user_mapping_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserMappingRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserMappingRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_user_mapping_rules',
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
    this._parameters.internalValue = config.parameters;
    this._rules.internalValue = config.rules;
    this._testMappingUsers.internalValue = config.testMappingUsers;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mapping_users - computed: true, optional: false, required: false
  private _mappingUsers = new UserMappingRulesMappingUsersList(this, "mapping_users", false);
  public get mappingUsers() {
    return this._mappingUsers;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new UserMappingRulesParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: UserMappingRulesParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new UserMappingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: UserMappingRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // test_mapping_users - computed: false, optional: true, required: false
  private _testMappingUsers = new UserMappingRulesTestMappingUsersList(this, "test_mapping_users", false);
  public get testMappingUsers() {
    return this._testMappingUsers;
  }
  public putTestMappingUsers(value: UserMappingRulesTestMappingUsers[] | cdktf.IResolvable) {
    this._testMappingUsers.internalValue = value;
  }
  public resetTestMappingUsers() {
    this._testMappingUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testMappingUsersInput() {
    return this._testMappingUsers.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parameters: userMappingRulesParametersToTerraform(this._parameters.internalValue),
      rules: cdktf.listMapper(userMappingRulesRulesToTerraform, false)(this._rules.internalValue),
      test_mapping_users: cdktf.listMapper(userMappingRulesTestMappingUsersToTerraform, false)(this._testMappingUsers.internalValue),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      parameters: {
        value: userMappingRulesParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserMappingRulesParameters",
      },
      rules: {
        value: cdktf.listMapperHcl(userMappingRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserMappingRulesRulesList",
      },
      test_mapping_users: {
        value: cdktf.listMapperHcl(userMappingRulesTestMappingUsersToHclTerraform, false)(this._testMappingUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserMappingRulesTestMappingUsersList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
