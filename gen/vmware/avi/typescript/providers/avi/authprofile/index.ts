// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#description Authprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#id Authprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#jwt_profile_ref Authprofile#jwt_profile_ref}
  */
  readonly jwtProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#name Authprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#tenant_ref Authprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#type Authprofile#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#uuid Authprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#configpb_attributes Authprofile#configpb_attributes}
  */
  readonly configpbAttributes?: AuthprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#http Authprofile#http}
  */
  readonly http?: AuthprofileHttp[] | cdktf.IResolvable;
  /**
  * ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#ldap Authprofile#ldap}
  */
  readonly ldap?: AuthprofileLdap[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#markers Authprofile#markers}
  */
  readonly markers?: AuthprofileMarkers[] | cdktf.IResolvable;
  /**
  * oauth_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#oauth_profile Authprofile#oauth_profile}
  */
  readonly oauthProfile?: AuthprofileOauthProfile[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#saml Authprofile#saml}
  */
  readonly saml?: AuthprofileSaml[] | cdktf.IResolvable;
  /**
  * tacacs_plus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#tacacs_plus Authprofile#tacacs_plus}
  */
  readonly tacacsPlus?: AuthprofileTacacsPlus[] | cdktf.IResolvable;
}
export interface AuthprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#version Authprofile#version}
  */
  readonly version?: string;
}

export function authprofileConfigpbAttributesToTerraform(struct?: AuthprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function authprofileConfigpbAttributesToHclTerraform(struct?: AuthprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class AuthprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AuthprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileConfigpbAttributesOutputReference {
    return new AuthprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#cache_expiration_time Authprofile#cache_expiration_time}
  */
  readonly cacheExpirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#request_header Authprofile#request_header}
  */
  readonly requestHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#require_user_groups Authprofile#require_user_groups}
  */
  readonly requireUserGroups?: string[];
}

export function authprofileHttpToTerraform(struct?: AuthprofileHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_expiration_time: cdktf.stringToTerraform(struct!.cacheExpirationTime),
    request_header: cdktf.stringToTerraform(struct!.requestHeader),
    require_user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requireUserGroups),
  }
}


export function authprofileHttpToHclTerraform(struct?: AuthprofileHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.cacheExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_header: {
      value: cdktf.stringToHclTerraform(struct!.requestHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_user_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requireUserGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheExpirationTime = this._cacheExpirationTime;
    }
    if (this._requestHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader;
    }
    if (this._requireUserGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireUserGroups = this._requireUserGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheExpirationTime = undefined;
      this._requestHeader = undefined;
      this._requireUserGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheExpirationTime = value.cacheExpirationTime;
      this._requestHeader = value.requestHeader;
      this._requireUserGroups = value.requireUserGroups;
    }
  }

  // cache_expiration_time - computed: false, optional: true, required: false
  private _cacheExpirationTime?: string; 
  public get cacheExpirationTime() {
    return this.getStringAttribute('cache_expiration_time');
  }
  public set cacheExpirationTime(value: string) {
    this._cacheExpirationTime = value;
  }
  public resetCacheExpirationTime() {
    this._cacheExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheExpirationTimeInput() {
    return this._cacheExpirationTime;
  }

  // request_header - computed: true, optional: true, required: false
  private _requestHeader?: string; 
  public get requestHeader() {
    return this.getStringAttribute('request_header');
  }
  public set requestHeader(value: string) {
    this._requestHeader = value;
  }
  public resetRequestHeader() {
    this._requestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader;
  }

  // require_user_groups - computed: false, optional: true, required: false
  private _requireUserGroups?: string[]; 
  public get requireUserGroups() {
    return this.getListAttribute('require_user_groups');
  }
  public set requireUserGroups(value: string[]) {
    this._requireUserGroups = value;
  }
  public resetRequireUserGroups() {
    this._requireUserGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireUserGroupsInput() {
    return this._requireUserGroups;
  }
}

export class AuthprofileHttpList extends cdktf.ComplexList {
  public internalValue? : AuthprofileHttp[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileHttpOutputReference {
    return new AuthprofileHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileLdapSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#admin_bind_dn Authprofile#admin_bind_dn}
  */
  readonly adminBindDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#group_filter Authprofile#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#group_member_attribute Authprofile#group_member_attribute}
  */
  readonly groupMemberAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#group_member_is_full_dn Authprofile#group_member_is_full_dn}
  */
  readonly groupMemberIsFullDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#group_search_dn Authprofile#group_search_dn}
  */
  readonly groupSearchDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#group_search_scope Authprofile#group_search_scope}
  */
  readonly groupSearchScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#ignore_referrals Authprofile#ignore_referrals}
  */
  readonly ignoreReferrals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#password Authprofile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#user_attributes Authprofile#user_attributes}
  */
  readonly userAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#user_id_attribute Authprofile#user_id_attribute}
  */
  readonly userIdAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#user_search_dn Authprofile#user_search_dn}
  */
  readonly userSearchDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#user_search_scope Authprofile#user_search_scope}
  */
  readonly userSearchScope?: string;
}

export function authprofileLdapSettingsToTerraform(struct?: AuthprofileLdapSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_bind_dn: cdktf.stringToTerraform(struct!.adminBindDn),
    group_filter: cdktf.stringToTerraform(struct!.groupFilter),
    group_member_attribute: cdktf.stringToTerraform(struct!.groupMemberAttribute),
    group_member_is_full_dn: cdktf.stringToTerraform(struct!.groupMemberIsFullDn),
    group_search_dn: cdktf.stringToTerraform(struct!.groupSearchDn),
    group_search_scope: cdktf.stringToTerraform(struct!.groupSearchScope),
    ignore_referrals: cdktf.stringToTerraform(struct!.ignoreReferrals),
    password: cdktf.stringToTerraform(struct!.password),
    user_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userAttributes),
    user_id_attribute: cdktf.stringToTerraform(struct!.userIdAttribute),
    user_search_dn: cdktf.stringToTerraform(struct!.userSearchDn),
    user_search_scope: cdktf.stringToTerraform(struct!.userSearchScope),
  }
}


export function authprofileLdapSettingsToHclTerraform(struct?: AuthprofileLdapSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_bind_dn: {
      value: cdktf.stringToHclTerraform(struct!.adminBindDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_filter: {
      value: cdktf.stringToHclTerraform(struct!.groupFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_member_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupMemberAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_member_is_full_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupMemberIsFullDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_search_dn: {
      value: cdktf.stringToHclTerraform(struct!.groupSearchDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_search_scope: {
      value: cdktf.stringToHclTerraform(struct!.groupSearchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_referrals: {
      value: cdktf.stringToHclTerraform(struct!.ignoreReferrals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_id_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userIdAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_search_dn: {
      value: cdktf.stringToHclTerraform(struct!.userSearchDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_search_scope: {
      value: cdktf.stringToHclTerraform(struct!.userSearchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileLdapSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileLdapSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminBindDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminBindDn = this._adminBindDn;
    }
    if (this._groupFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupFilter = this._groupFilter;
    }
    if (this._groupMemberAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMemberAttribute = this._groupMemberAttribute;
    }
    if (this._groupMemberIsFullDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMemberIsFullDn = this._groupMemberIsFullDn;
    }
    if (this._groupSearchDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearchDn = this._groupSearchDn;
    }
    if (this._groupSearchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearchScope = this._groupSearchScope;
    }
    if (this._ignoreReferrals !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreReferrals = this._ignoreReferrals;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttributes = this._userAttributes;
    }
    if (this._userIdAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdAttribute = this._userIdAttribute;
    }
    if (this._userSearchDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchDn = this._userSearchDn;
    }
    if (this._userSearchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchScope = this._userSearchScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileLdapSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminBindDn = undefined;
      this._groupFilter = undefined;
      this._groupMemberAttribute = undefined;
      this._groupMemberIsFullDn = undefined;
      this._groupSearchDn = undefined;
      this._groupSearchScope = undefined;
      this._ignoreReferrals = undefined;
      this._password = undefined;
      this._userAttributes = undefined;
      this._userIdAttribute = undefined;
      this._userSearchDn = undefined;
      this._userSearchScope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminBindDn = value.adminBindDn;
      this._groupFilter = value.groupFilter;
      this._groupMemberAttribute = value.groupMemberAttribute;
      this._groupMemberIsFullDn = value.groupMemberIsFullDn;
      this._groupSearchDn = value.groupSearchDn;
      this._groupSearchScope = value.groupSearchScope;
      this._ignoreReferrals = value.ignoreReferrals;
      this._password = value.password;
      this._userAttributes = value.userAttributes;
      this._userIdAttribute = value.userIdAttribute;
      this._userSearchDn = value.userSearchDn;
      this._userSearchScope = value.userSearchScope;
    }
  }

  // admin_bind_dn - computed: false, optional: false, required: true
  private _adminBindDn?: string; 
  public get adminBindDn() {
    return this.getStringAttribute('admin_bind_dn');
  }
  public set adminBindDn(value: string) {
    this._adminBindDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminBindDnInput() {
    return this._adminBindDn;
  }

  // group_filter - computed: false, optional: true, required: false
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  public resetGroupFilter() {
    this._groupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }

  // group_member_attribute - computed: false, optional: true, required: false
  private _groupMemberAttribute?: string; 
  public get groupMemberAttribute() {
    return this.getStringAttribute('group_member_attribute');
  }
  public set groupMemberAttribute(value: string) {
    this._groupMemberAttribute = value;
  }
  public resetGroupMemberAttribute() {
    this._groupMemberAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberAttributeInput() {
    return this._groupMemberAttribute;
  }

  // group_member_is_full_dn - computed: false, optional: true, required: false
  private _groupMemberIsFullDn?: string; 
  public get groupMemberIsFullDn() {
    return this.getStringAttribute('group_member_is_full_dn');
  }
  public set groupMemberIsFullDn(value: string) {
    this._groupMemberIsFullDn = value;
  }
  public resetGroupMemberIsFullDn() {
    this._groupMemberIsFullDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberIsFullDnInput() {
    return this._groupMemberIsFullDn;
  }

  // group_search_dn - computed: true, optional: true, required: false
  private _groupSearchDn?: string; 
  public get groupSearchDn() {
    return this.getStringAttribute('group_search_dn');
  }
  public set groupSearchDn(value: string) {
    this._groupSearchDn = value;
  }
  public resetGroupSearchDn() {
    this._groupSearchDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchDnInput() {
    return this._groupSearchDn;
  }

  // group_search_scope - computed: false, optional: true, required: false
  private _groupSearchScope?: string; 
  public get groupSearchScope() {
    return this.getStringAttribute('group_search_scope');
  }
  public set groupSearchScope(value: string) {
    this._groupSearchScope = value;
  }
  public resetGroupSearchScope() {
    this._groupSearchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchScopeInput() {
    return this._groupSearchScope;
  }

  // ignore_referrals - computed: false, optional: true, required: false
  private _ignoreReferrals?: string; 
  public get ignoreReferrals() {
    return this.getStringAttribute('ignore_referrals');
  }
  public set ignoreReferrals(value: string) {
    this._ignoreReferrals = value;
  }
  public resetIgnoreReferrals() {
    this._ignoreReferrals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreReferralsInput() {
    return this._ignoreReferrals;
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

  // user_attributes - computed: false, optional: true, required: false
  private _userAttributes?: string[]; 
  public get userAttributes() {
    return this.getListAttribute('user_attributes');
  }
  public set userAttributes(value: string[]) {
    this._userAttributes = value;
  }
  public resetUserAttributes() {
    this._userAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributesInput() {
    return this._userAttributes;
  }

  // user_id_attribute - computed: false, optional: false, required: true
  private _userIdAttribute?: string; 
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }
  public set userIdAttribute(value: string) {
    this._userIdAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdAttributeInput() {
    return this._userIdAttribute;
  }

  // user_search_dn - computed: true, optional: true, required: false
  private _userSearchDn?: string; 
  public get userSearchDn() {
    return this.getStringAttribute('user_search_dn');
  }
  public set userSearchDn(value: string) {
    this._userSearchDn = value;
  }
  public resetUserSearchDn() {
    this._userSearchDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchDnInput() {
    return this._userSearchDn;
  }

  // user_search_scope - computed: false, optional: true, required: false
  private _userSearchScope?: string; 
  public get userSearchScope() {
    return this.getStringAttribute('user_search_scope');
  }
  public set userSearchScope(value: string) {
    this._userSearchScope = value;
  }
  public resetUserSearchScope() {
    this._userSearchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchScopeInput() {
    return this._userSearchScope;
  }
}

export class AuthprofileLdapSettingsList extends cdktf.ComplexList {
  public internalValue? : AuthprofileLdapSettings[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileLdapSettingsOutputReference {
    return new AuthprofileLdapSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileLdapUserBind {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#dn_template Authprofile#dn_template}
  */
  readonly dnTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#token Authprofile#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#user_attributes Authprofile#user_attributes}
  */
  readonly userAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#user_id_attribute Authprofile#user_id_attribute}
  */
  readonly userIdAttribute: string;
}

export function authprofileLdapUserBindToTerraform(struct?: AuthprofileLdapUserBind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dn_template: cdktf.stringToTerraform(struct!.dnTemplate),
    token: cdktf.stringToTerraform(struct!.token),
    user_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userAttributes),
    user_id_attribute: cdktf.stringToTerraform(struct!.userIdAttribute),
  }
}


export function authprofileLdapUserBindToHclTerraform(struct?: AuthprofileLdapUserBind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dn_template: {
      value: cdktf.stringToHclTerraform(struct!.dnTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_id_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userIdAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileLdapUserBindOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileLdapUserBind | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnTemplate = this._dnTemplate;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._userAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttributes = this._userAttributes;
    }
    if (this._userIdAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdAttribute = this._userIdAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileLdapUserBind | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnTemplate = undefined;
      this._token = undefined;
      this._userAttributes = undefined;
      this._userIdAttribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnTemplate = value.dnTemplate;
      this._token = value.token;
      this._userAttributes = value.userAttributes;
      this._userIdAttribute = value.userIdAttribute;
    }
  }

  // dn_template - computed: false, optional: false, required: true
  private _dnTemplate?: string; 
  public get dnTemplate() {
    return this.getStringAttribute('dn_template');
  }
  public set dnTemplate(value: string) {
    this._dnTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnTemplateInput() {
    return this._dnTemplate;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user_attributes - computed: false, optional: true, required: false
  private _userAttributes?: string[]; 
  public get userAttributes() {
    return this.getListAttribute('user_attributes');
  }
  public set userAttributes(value: string[]) {
    this._userAttributes = value;
  }
  public resetUserAttributes() {
    this._userAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributesInput() {
    return this._userAttributes;
  }

  // user_id_attribute - computed: false, optional: false, required: true
  private _userIdAttribute?: string; 
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }
  public set userIdAttribute(value: string) {
    this._userIdAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdAttributeInput() {
    return this._userIdAttribute;
  }
}

export class AuthprofileLdapUserBindList extends cdktf.ComplexList {
  public internalValue? : AuthprofileLdapUserBind[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileLdapUserBindOutputReference {
    return new AuthprofileLdapUserBindOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileLdap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#base_dn Authprofile#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#bind_as_administrator Authprofile#bind_as_administrator}
  */
  readonly bindAsAdministrator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#email_attribute Authprofile#email_attribute}
  */
  readonly emailAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#full_name_attribute Authprofile#full_name_attribute}
  */
  readonly fullNameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#port Authprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#security_mode Authprofile#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#server Authprofile#server}
  */
  readonly server: string[];
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#settings Authprofile#settings}
  */
  readonly settings?: AuthprofileLdapSettings[] | cdktf.IResolvable;
  /**
  * user_bind block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#user_bind Authprofile#user_bind}
  */
  readonly userBind?: AuthprofileLdapUserBind[] | cdktf.IResolvable;
}

export function authprofileLdapToTerraform(struct?: AuthprofileLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    bind_as_administrator: cdktf.stringToTerraform(struct!.bindAsAdministrator),
    email_attribute: cdktf.stringToTerraform(struct!.emailAttribute),
    full_name_attribute: cdktf.stringToTerraform(struct!.fullNameAttribute),
    port: cdktf.stringToTerraform(struct!.port),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.server),
    settings: cdktf.listMapper(authprofileLdapSettingsToTerraform, true)(struct!.settings),
    user_bind: cdktf.listMapper(authprofileLdapUserBindToTerraform, true)(struct!.userBind),
  }
}


export function authprofileLdapToHclTerraform(struct?: AuthprofileLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_as_administrator: {
      value: cdktf.stringToHclTerraform(struct!.bindAsAdministrator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_attribute: {
      value: cdktf.stringToHclTerraform(struct!.emailAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.fullNameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.server),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    settings: {
      value: cdktf.listMapperHcl(authprofileLdapSettingsToHclTerraform, true)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "AuthprofileLdapSettingsList",
    },
    user_bind: {
      value: cdktf.listMapperHcl(authprofileLdapUserBindToHclTerraform, true)(struct!.userBind),
      isBlock: true,
      type: "set",
      storageClassType: "AuthprofileLdapUserBindList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileLdapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._bindAsAdministrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAsAdministrator = this._bindAsAdministrator;
    }
    if (this._emailAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAttribute = this._emailAttribute;
    }
    if (this._fullNameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullNameAttribute = this._fullNameAttribute;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._userBind?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBind = this._userBind?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._bindAsAdministrator = undefined;
      this._emailAttribute = undefined;
      this._fullNameAttribute = undefined;
      this._port = undefined;
      this._securityMode = undefined;
      this._server = undefined;
      this._settings.internalValue = undefined;
      this._userBind.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._bindAsAdministrator = value.bindAsAdministrator;
      this._emailAttribute = value.emailAttribute;
      this._fullNameAttribute = value.fullNameAttribute;
      this._port = value.port;
      this._securityMode = value.securityMode;
      this._server = value.server;
      this._settings.internalValue = value.settings;
      this._userBind.internalValue = value.userBind;
    }
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // bind_as_administrator - computed: false, optional: true, required: false
  private _bindAsAdministrator?: string; 
  public get bindAsAdministrator() {
    return this.getStringAttribute('bind_as_administrator');
  }
  public set bindAsAdministrator(value: string) {
    this._bindAsAdministrator = value;
  }
  public resetBindAsAdministrator() {
    this._bindAsAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAsAdministratorInput() {
    return this._bindAsAdministrator;
  }

  // email_attribute - computed: false, optional: true, required: false
  private _emailAttribute?: string; 
  public get emailAttribute() {
    return this.getStringAttribute('email_attribute');
  }
  public set emailAttribute(value: string) {
    this._emailAttribute = value;
  }
  public resetEmailAttribute() {
    this._emailAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributeInput() {
    return this._emailAttribute;
  }

  // full_name_attribute - computed: false, optional: true, required: false
  private _fullNameAttribute?: string; 
  public get fullNameAttribute() {
    return this.getStringAttribute('full_name_attribute');
  }
  public set fullNameAttribute(value: string) {
    this._fullNameAttribute = value;
  }
  public resetFullNameAttribute() {
    this._fullNameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameAttributeInput() {
    return this._fullNameAttribute;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string[]; 
  public get server() {
    return this.getListAttribute('server');
  }
  public set server(value: string[]) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new AuthprofileLdapSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: AuthprofileLdapSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // user_bind - computed: false, optional: true, required: false
  private _userBind = new AuthprofileLdapUserBindList(this, "user_bind", true);
  public get userBind() {
    return this._userBind;
  }
  public putUserBind(value: AuthprofileLdapUserBind[] | cdktf.IResolvable) {
    this._userBind.internalValue = value;
  }
  public resetUserBind() {
    this._userBind.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBindInput() {
    return this._userBind.internalValue;
  }
}

export class AuthprofileLdapList extends cdktf.ComplexList {
  public internalValue? : AuthprofileLdap[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileLdapOutputReference {
    return new AuthprofileLdapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#key Authprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#values Authprofile#values}
  */
  readonly values?: string[];
}

export function authprofileMarkersToTerraform(struct?: AuthprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function authprofileMarkersToHclTerraform(struct?: AuthprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AuthprofileMarkersList extends cdktf.ComplexList {
  public internalValue? : AuthprofileMarkers[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileMarkersOutputReference {
    return new AuthprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileOauthProfileOauthControllerSettingsOidcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#oidc_enable Authprofile#oidc_enable}
  */
  readonly oidcEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#profile Authprofile#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#userinfo Authprofile#userinfo}
  */
  readonly userinfo?: string;
}

export function authprofileOauthProfileOauthControllerSettingsOidcConfigToTerraform(struct?: AuthprofileOauthProfileOauthControllerSettingsOidcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_enable: cdktf.stringToTerraform(struct!.oidcEnable),
    profile: cdktf.stringToTerraform(struct!.profile),
    userinfo: cdktf.stringToTerraform(struct!.userinfo),
  }
}


export function authprofileOauthProfileOauthControllerSettingsOidcConfigToHclTerraform(struct?: AuthprofileOauthProfileOauthControllerSettingsOidcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_enable: {
      value: cdktf.stringToHclTerraform(struct!.oidcEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo: {
      value: cdktf.stringToHclTerraform(struct!.userinfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileOauthProfileOauthControllerSettingsOidcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileOauthProfileOauthControllerSettingsOidcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidcEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcEnable = this._oidcEnable;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._userinfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfo = this._userinfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileOauthProfileOauthControllerSettingsOidcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidcEnable = undefined;
      this._profile = undefined;
      this._userinfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidcEnable = value.oidcEnable;
      this._profile = value.profile;
      this._userinfo = value.userinfo;
    }
  }

  // oidc_enable - computed: true, optional: true, required: false
  private _oidcEnable?: string; 
  public get oidcEnable() {
    return this.getStringAttribute('oidc_enable');
  }
  public set oidcEnable(value: string) {
    this._oidcEnable = value;
  }
  public resetOidcEnable() {
    this._oidcEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEnableInput() {
    return this._oidcEnable;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // userinfo - computed: true, optional: true, required: false
  private _userinfo?: string; 
  public get userinfo() {
    return this.getStringAttribute('userinfo');
  }
  public set userinfo(value: string) {
    this._userinfo = value;
  }
  public resetUserinfo() {
    this._userinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoInput() {
    return this._userinfo;
  }
}

export class AuthprofileOauthProfileOauthControllerSettingsOidcConfigList extends cdktf.ComplexList {
  public internalValue? : AuthprofileOauthProfileOauthControllerSettingsOidcConfig[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileOauthProfileOauthControllerSettingsOidcConfigOutputReference {
    return new AuthprofileOauthProfileOauthControllerSettingsOidcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileOauthProfileOauthControllerSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#client_id Authprofile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#client_secret Authprofile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#scopes Authprofile#scopes}
  */
  readonly scopes?: string[];
  /**
  * oidc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#oidc_config Authprofile#oidc_config}
  */
  readonly oidcConfig?: AuthprofileOauthProfileOauthControllerSettingsOidcConfig[] | cdktf.IResolvable;
}

export function authprofileOauthProfileOauthControllerSettingsToTerraform(struct?: AuthprofileOauthProfileOauthControllerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    oidc_config: cdktf.listMapper(authprofileOauthProfileOauthControllerSettingsOidcConfigToTerraform, true)(struct!.oidcConfig),
  }
}


export function authprofileOauthProfileOauthControllerSettingsToHclTerraform(struct?: AuthprofileOauthProfileOauthControllerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oidc_config: {
      value: cdktf.listMapperHcl(authprofileOauthProfileOauthControllerSettingsOidcConfigToHclTerraform, true)(struct!.oidcConfig),
      isBlock: true,
      type: "set",
      storageClassType: "AuthprofileOauthProfileOauthControllerSettingsOidcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileOauthProfileOauthControllerSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileOauthProfileOauthControllerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._oidcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcConfig = this._oidcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileOauthProfileOauthControllerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scopes = undefined;
      this._oidcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scopes = value.scopes;
      this._oidcConfig.internalValue = value.oidcConfig;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // oidc_config - computed: false, optional: true, required: false
  private _oidcConfig = new AuthprofileOauthProfileOauthControllerSettingsOidcConfigList(this, "oidc_config", true);
  public get oidcConfig() {
    return this._oidcConfig;
  }
  public putOidcConfig(value: AuthprofileOauthProfileOauthControllerSettingsOidcConfig[] | cdktf.IResolvable) {
    this._oidcConfig.internalValue = value;
  }
  public resetOidcConfig() {
    this._oidcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig.internalValue;
  }
}

export class AuthprofileOauthProfileOauthControllerSettingsList extends cdktf.ComplexList {
  public internalValue? : AuthprofileOauthProfileOauthControllerSettings[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileOauthProfileOauthControllerSettingsOutputReference {
    return new AuthprofileOauthProfileOauthControllerSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileOauthProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#authorization_endpoint Authprofile#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#end_session_endpoint Authprofile#end_session_endpoint}
  */
  readonly endSessionEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#instance_id Authprofile#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#introspection_endpoint Authprofile#introspection_endpoint}
  */
  readonly introspectionEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#issuer Authprofile#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#jwks_timeout Authprofile#jwks_timeout}
  */
  readonly jwksTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#jwks_uri Authprofile#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#oauth_profile_type Authprofile#oauth_profile_type}
  */
  readonly oauthProfileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#oauth_provider Authprofile#oauth_provider}
  */
  readonly oauthProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#oauth_resp_buffer_sz Authprofile#oauth_resp_buffer_sz}
  */
  readonly oauthRespBufferSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#org_id Authprofile#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#pool_ref Authprofile#pool_ref}
  */
  readonly poolRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#redirect_uri Authprofile#redirect_uri}
  */
  readonly redirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#service_id Authprofile#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#service_name Authprofile#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#token_endpoint Authprofile#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#userinfo_endpoint Authprofile#userinfo_endpoint}
  */
  readonly userinfoEndpoint?: string;
  /**
  * oauth_controller_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#oauth_controller_settings Authprofile#oauth_controller_settings}
  */
  readonly oauthControllerSettings?: AuthprofileOauthProfileOauthControllerSettings[] | cdktf.IResolvable;
}

export function authprofileOauthProfileToTerraform(struct?: AuthprofileOauthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    end_session_endpoint: cdktf.stringToTerraform(struct!.endSessionEndpoint),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    introspection_endpoint: cdktf.stringToTerraform(struct!.introspectionEndpoint),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_timeout: cdktf.stringToTerraform(struct!.jwksTimeout),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    oauth_profile_type: cdktf.stringToTerraform(struct!.oauthProfileType),
    oauth_provider: cdktf.stringToTerraform(struct!.oauthProvider),
    oauth_resp_buffer_sz: cdktf.stringToTerraform(struct!.oauthRespBufferSz),
    org_id: cdktf.stringToTerraform(struct!.orgId),
    pool_ref: cdktf.stringToTerraform(struct!.poolRef),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    userinfo_endpoint: cdktf.stringToTerraform(struct!.userinfoEndpoint),
    oauth_controller_settings: cdktf.listMapper(authprofileOauthProfileOauthControllerSettingsToTerraform, true)(struct!.oauthControllerSettings),
  }
}


export function authprofileOauthProfileToHclTerraform(struct?: AuthprofileOauthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_session_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endSessionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    introspection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.introspectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_timeout: {
      value: cdktf.stringToHclTerraform(struct!.jwksTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_profile_type: {
      value: cdktf.stringToHclTerraform(struct!.oauthProfileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_provider: {
      value: cdktf.stringToHclTerraform(struct!.oauthProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_resp_buffer_sz: {
      value: cdktf.stringToHclTerraform(struct!.oauthRespBufferSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_ref: {
      value: cdktf.stringToHclTerraform(struct!.poolRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.userinfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_controller_settings: {
      value: cdktf.listMapperHcl(authprofileOauthProfileOauthControllerSettingsToHclTerraform, true)(struct!.oauthControllerSettings),
      isBlock: true,
      type: "set",
      storageClassType: "AuthprofileOauthProfileOauthControllerSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileOauthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileOauthProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._endSessionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSessionEndpoint = this._endSessionEndpoint;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._introspectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionEndpoint = this._introspectionEndpoint;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksTimeout = this._jwksTimeout;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._oauthProfileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthProfileType = this._oauthProfileType;
    }
    if (this._oauthProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthProvider = this._oauthProvider;
    }
    if (this._oauthRespBufferSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRespBufferSz = this._oauthRespBufferSz;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._poolRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolRef = this._poolRef;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._userinfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoEndpoint = this._userinfoEndpoint;
    }
    if (this._oauthControllerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthControllerSettings = this._oauthControllerSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileOauthProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = undefined;
      this._endSessionEndpoint = undefined;
      this._instanceId = undefined;
      this._introspectionEndpoint = undefined;
      this._issuer = undefined;
      this._jwksTimeout = undefined;
      this._jwksUri = undefined;
      this._oauthProfileType = undefined;
      this._oauthProvider = undefined;
      this._oauthRespBufferSz = undefined;
      this._orgId = undefined;
      this._poolRef = undefined;
      this._redirectUri = undefined;
      this._serviceId = undefined;
      this._serviceName = undefined;
      this._tokenEndpoint = undefined;
      this._userinfoEndpoint = undefined;
      this._oauthControllerSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._endSessionEndpoint = value.endSessionEndpoint;
      this._instanceId = value.instanceId;
      this._introspectionEndpoint = value.introspectionEndpoint;
      this._issuer = value.issuer;
      this._jwksTimeout = value.jwksTimeout;
      this._jwksUri = value.jwksUri;
      this._oauthProfileType = value.oauthProfileType;
      this._oauthProvider = value.oauthProvider;
      this._oauthRespBufferSz = value.oauthRespBufferSz;
      this._orgId = value.orgId;
      this._poolRef = value.poolRef;
      this._redirectUri = value.redirectUri;
      this._serviceId = value.serviceId;
      this._serviceName = value.serviceName;
      this._tokenEndpoint = value.tokenEndpoint;
      this._userinfoEndpoint = value.userinfoEndpoint;
      this._oauthControllerSettings.internalValue = value.oauthControllerSettings;
    }
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // end_session_endpoint - computed: true, optional: true, required: false
  private _endSessionEndpoint?: string; 
  public get endSessionEndpoint() {
    return this.getStringAttribute('end_session_endpoint');
  }
  public set endSessionEndpoint(value: string) {
    this._endSessionEndpoint = value;
  }
  public resetEndSessionEndpoint() {
    this._endSessionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSessionEndpointInput() {
    return this._endSessionEndpoint;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // introspection_endpoint - computed: true, optional: true, required: false
  private _introspectionEndpoint?: string; 
  public get introspectionEndpoint() {
    return this.getStringAttribute('introspection_endpoint');
  }
  public set introspectionEndpoint(value: string) {
    this._introspectionEndpoint = value;
  }
  public resetIntrospectionEndpoint() {
    this._introspectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionEndpointInput() {
    return this._introspectionEndpoint;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_timeout - computed: false, optional: true, required: false
  private _jwksTimeout?: string; 
  public get jwksTimeout() {
    return this.getStringAttribute('jwks_timeout');
  }
  public set jwksTimeout(value: string) {
    this._jwksTimeout = value;
  }
  public resetJwksTimeout() {
    this._jwksTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksTimeoutInput() {
    return this._jwksTimeout;
  }

  // jwks_uri - computed: true, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // oauth_profile_type - computed: false, optional: true, required: false
  private _oauthProfileType?: string; 
  public get oauthProfileType() {
    return this.getStringAttribute('oauth_profile_type');
  }
  public set oauthProfileType(value: string) {
    this._oauthProfileType = value;
  }
  public resetOauthProfileType() {
    this._oauthProfileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileTypeInput() {
    return this._oauthProfileType;
  }

  // oauth_provider - computed: true, optional: true, required: false
  private _oauthProvider?: string; 
  public get oauthProvider() {
    return this.getStringAttribute('oauth_provider');
  }
  public set oauthProvider(value: string) {
    this._oauthProvider = value;
  }
  public resetOauthProvider() {
    this._oauthProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProviderInput() {
    return this._oauthProvider;
  }

  // oauth_resp_buffer_sz - computed: false, optional: true, required: false
  private _oauthRespBufferSz?: string; 
  public get oauthRespBufferSz() {
    return this.getStringAttribute('oauth_resp_buffer_sz');
  }
  public set oauthRespBufferSz(value: string) {
    this._oauthRespBufferSz = value;
  }
  public resetOauthRespBufferSz() {
    this._oauthRespBufferSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRespBufferSzInput() {
    return this._oauthRespBufferSz;
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // pool_ref - computed: true, optional: true, required: false
  private _poolRef?: string; 
  public get poolRef() {
    return this.getStringAttribute('pool_ref');
  }
  public set poolRef(value: string) {
    this._poolRef = value;
  }
  public resetPoolRef() {
    this._poolRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRefInput() {
    return this._poolRef;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // token_endpoint - computed: true, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // userinfo_endpoint - computed: true, optional: true, required: false
  private _userinfoEndpoint?: string; 
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }
  public set userinfoEndpoint(value: string) {
    this._userinfoEndpoint = value;
  }
  public resetUserinfoEndpoint() {
    this._userinfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEndpointInput() {
    return this._userinfoEndpoint;
  }

  // oauth_controller_settings - computed: false, optional: true, required: false
  private _oauthControllerSettings = new AuthprofileOauthProfileOauthControllerSettingsList(this, "oauth_controller_settings", true);
  public get oauthControllerSettings() {
    return this._oauthControllerSettings;
  }
  public putOauthControllerSettings(value: AuthprofileOauthProfileOauthControllerSettings[] | cdktf.IResolvable) {
    this._oauthControllerSettings.internalValue = value;
  }
  public resetOauthControllerSettings() {
    this._oauthControllerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthControllerSettingsInput() {
    return this._oauthControllerSettings.internalValue;
  }
}

export class AuthprofileOauthProfileList extends cdktf.ComplexList {
  public internalValue? : AuthprofileOauthProfile[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileOauthProfileOutputReference {
    return new AuthprofileOauthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileSamlIdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#meta_data_download_interval Authprofile#meta_data_download_interval}
  */
  readonly metaDataDownloadInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#metadata Authprofile#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#metadata_url Authprofile#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#periodic_download Authprofile#periodic_download}
  */
  readonly periodicDownload?: string;
}

export function authprofileSamlIdpToTerraform(struct?: AuthprofileSamlIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    meta_data_download_interval: cdktf.stringToTerraform(struct!.metaDataDownloadInterval),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    metadata_url: cdktf.stringToTerraform(struct!.metadataUrl),
    periodic_download: cdktf.stringToTerraform(struct!.periodicDownload),
  }
}


export function authprofileSamlIdpToHclTerraform(struct?: AuthprofileSamlIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    meta_data_download_interval: {
      value: cdktf.stringToHclTerraform(struct!.metaDataDownloadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.metadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    periodic_download: {
      value: cdktf.stringToHclTerraform(struct!.periodicDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileSamlIdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileSamlIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metaDataDownloadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaDataDownloadInterval = this._metaDataDownloadInterval;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataUrl = this._metadataUrl;
    }
    if (this._periodicDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodicDownload = this._periodicDownload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileSamlIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metaDataDownloadInterval = undefined;
      this._metadata = undefined;
      this._metadataUrl = undefined;
      this._periodicDownload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metaDataDownloadInterval = value.metaDataDownloadInterval;
      this._metadata = value.metadata;
      this._metadataUrl = value.metadataUrl;
      this._periodicDownload = value.periodicDownload;
    }
  }

  // meta_data_download_interval - computed: false, optional: true, required: false
  private _metaDataDownloadInterval?: string; 
  public get metaDataDownloadInterval() {
    return this.getStringAttribute('meta_data_download_interval');
  }
  public set metaDataDownloadInterval(value: string) {
    this._metaDataDownloadInterval = value;
  }
  public resetMetaDataDownloadInterval() {
    this._metaDataDownloadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataDownloadIntervalInput() {
    return this._metaDataDownloadInterval;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_url - computed: true, optional: true, required: false
  private _metadataUrl?: string; 
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }
  public resetMetadataUrl() {
    this._metadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl;
  }

  // periodic_download - computed: false, optional: true, required: false
  private _periodicDownload?: string; 
  public get periodicDownload() {
    return this.getStringAttribute('periodic_download');
  }
  public set periodicDownload(value: string) {
    this._periodicDownload = value;
  }
  public resetPeriodicDownload() {
    this._periodicDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicDownloadInput() {
    return this._periodicDownload;
  }
}

export class AuthprofileSamlIdpList extends cdktf.ComplexList {
  public internalValue? : AuthprofileSamlIdp[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileSamlIdpOutputReference {
    return new AuthprofileSamlIdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileSamlSpSpNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#entity_id Authprofile#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#name Authprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#signing_ssl_key_and_certificate_ref Authprofile#signing_ssl_key_and_certificate_ref}
  */
  readonly signingSslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#single_signon_url Authprofile#single_signon_url}
  */
  readonly singleSignonUrl?: string;
}

export function authprofileSamlSpSpNodesToTerraform(struct?: AuthprofileSamlSpSpNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    name: cdktf.stringToTerraform(struct!.name),
    signing_ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.signingSslKeyAndCertificateRef),
    single_signon_url: cdktf.stringToTerraform(struct!.singleSignonUrl),
  }
}


export function authprofileSamlSpSpNodesToHclTerraform(struct?: AuthprofileSamlSpSpNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
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
    signing_ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.signingSslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_signon_url: {
      value: cdktf.stringToHclTerraform(struct!.singleSignonUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileSamlSpSpNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileSamlSpSpNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._signingSslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingSslKeyAndCertificateRef = this._signingSslKeyAndCertificateRef;
    }
    if (this._singleSignonUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSignonUrl = this._singleSignonUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileSamlSpSpNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityId = undefined;
      this._name = undefined;
      this._signingSslKeyAndCertificateRef = undefined;
      this._singleSignonUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityId = value.entityId;
      this._name = value.name;
      this._signingSslKeyAndCertificateRef = value.signingSslKeyAndCertificateRef;
      this._singleSignonUrl = value.singleSignonUrl;
    }
  }

  // entity_id - computed: true, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
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

  // signing_ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _signingSslKeyAndCertificateRef?: string; 
  public get signingSslKeyAndCertificateRef() {
    return this.getStringAttribute('signing_ssl_key_and_certificate_ref');
  }
  public set signingSslKeyAndCertificateRef(value: string) {
    this._signingSslKeyAndCertificateRef = value;
  }
  public resetSigningSslKeyAndCertificateRef() {
    this._signingSslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingSslKeyAndCertificateRefInput() {
    return this._signingSslKeyAndCertificateRef;
  }

  // single_signon_url - computed: true, optional: true, required: false
  private _singleSignonUrl?: string; 
  public get singleSignonUrl() {
    return this.getStringAttribute('single_signon_url');
  }
  public set singleSignonUrl(value: string) {
    this._singleSignonUrl = value;
  }
  public resetSingleSignonUrl() {
    this._singleSignonUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignonUrlInput() {
    return this._singleSignonUrl;
  }
}

export class AuthprofileSamlSpSpNodesList extends cdktf.ComplexList {
  public internalValue? : AuthprofileSamlSpSpNodes[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileSamlSpSpNodesOutputReference {
    return new AuthprofileSamlSpSpNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileSamlSp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#fqdn Authprofile#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#org_display_name Authprofile#org_display_name}
  */
  readonly orgDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#org_name Authprofile#org_name}
  */
  readonly orgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#org_url Authprofile#org_url}
  */
  readonly orgUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#saml_entity_type Authprofile#saml_entity_type}
  */
  readonly samlEntityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#tech_contact_email Authprofile#tech_contact_email}
  */
  readonly techContactEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#tech_contact_name Authprofile#tech_contact_name}
  */
  readonly techContactName?: string;
  /**
  * sp_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#sp_nodes Authprofile#sp_nodes}
  */
  readonly spNodes?: AuthprofileSamlSpSpNodes[] | cdktf.IResolvable;
}

export function authprofileSamlSpToTerraform(struct?: AuthprofileSamlSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    org_display_name: cdktf.stringToTerraform(struct!.orgDisplayName),
    org_name: cdktf.stringToTerraform(struct!.orgName),
    org_url: cdktf.stringToTerraform(struct!.orgUrl),
    saml_entity_type: cdktf.stringToTerraform(struct!.samlEntityType),
    tech_contact_email: cdktf.stringToTerraform(struct!.techContactEmail),
    tech_contact_name: cdktf.stringToTerraform(struct!.techContactName),
    sp_nodes: cdktf.listMapper(authprofileSamlSpSpNodesToTerraform, true)(struct!.spNodes),
  }
}


export function authprofileSamlSpToHclTerraform(struct?: AuthprofileSamlSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_display_name: {
      value: cdktf.stringToHclTerraform(struct!.orgDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_name: {
      value: cdktf.stringToHclTerraform(struct!.orgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_url: {
      value: cdktf.stringToHclTerraform(struct!.orgUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_entity_type: {
      value: cdktf.stringToHclTerraform(struct!.samlEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tech_contact_email: {
      value: cdktf.stringToHclTerraform(struct!.techContactEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tech_contact_name: {
      value: cdktf.stringToHclTerraform(struct!.techContactName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_nodes: {
      value: cdktf.listMapperHcl(authprofileSamlSpSpNodesToHclTerraform, true)(struct!.spNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AuthprofileSamlSpSpNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileSamlSpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileSamlSp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._orgDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgDisplayName = this._orgDisplayName;
    }
    if (this._orgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgName = this._orgName;
    }
    if (this._orgUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgUrl = this._orgUrl;
    }
    if (this._samlEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlEntityType = this._samlEntityType;
    }
    if (this._techContactEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.techContactEmail = this._techContactEmail;
    }
    if (this._techContactName !== undefined) {
      hasAnyValues = true;
      internalValueResult.techContactName = this._techContactName;
    }
    if (this._spNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spNodes = this._spNodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileSamlSp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._orgDisplayName = undefined;
      this._orgName = undefined;
      this._orgUrl = undefined;
      this._samlEntityType = undefined;
      this._techContactEmail = undefined;
      this._techContactName = undefined;
      this._spNodes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._orgDisplayName = value.orgDisplayName;
      this._orgName = value.orgName;
      this._orgUrl = value.orgUrl;
      this._samlEntityType = value.samlEntityType;
      this._techContactEmail = value.techContactEmail;
      this._techContactName = value.techContactName;
      this._spNodes.internalValue = value.spNodes;
    }
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // org_display_name - computed: true, optional: true, required: false
  private _orgDisplayName?: string; 
  public get orgDisplayName() {
    return this.getStringAttribute('org_display_name');
  }
  public set orgDisplayName(value: string) {
    this._orgDisplayName = value;
  }
  public resetOrgDisplayName() {
    this._orgDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgDisplayNameInput() {
    return this._orgDisplayName;
  }

  // org_name - computed: true, optional: true, required: false
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  public resetOrgName() {
    this._orgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }

  // org_url - computed: true, optional: true, required: false
  private _orgUrl?: string; 
  public get orgUrl() {
    return this.getStringAttribute('org_url');
  }
  public set orgUrl(value: string) {
    this._orgUrl = value;
  }
  public resetOrgUrl() {
    this._orgUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUrlInput() {
    return this._orgUrl;
  }

  // saml_entity_type - computed: true, optional: true, required: false
  private _samlEntityType?: string; 
  public get samlEntityType() {
    return this.getStringAttribute('saml_entity_type');
  }
  public set samlEntityType(value: string) {
    this._samlEntityType = value;
  }
  public resetSamlEntityType() {
    this._samlEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlEntityTypeInput() {
    return this._samlEntityType;
  }

  // tech_contact_email - computed: true, optional: true, required: false
  private _techContactEmail?: string; 
  public get techContactEmail() {
    return this.getStringAttribute('tech_contact_email');
  }
  public set techContactEmail(value: string) {
    this._techContactEmail = value;
  }
  public resetTechContactEmail() {
    this._techContactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techContactEmailInput() {
    return this._techContactEmail;
  }

  // tech_contact_name - computed: true, optional: true, required: false
  private _techContactName?: string; 
  public get techContactName() {
    return this.getStringAttribute('tech_contact_name');
  }
  public set techContactName(value: string) {
    this._techContactName = value;
  }
  public resetTechContactName() {
    this._techContactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techContactNameInput() {
    return this._techContactName;
  }

  // sp_nodes - computed: false, optional: true, required: false
  private _spNodes = new AuthprofileSamlSpSpNodesList(this, "sp_nodes", false);
  public get spNodes() {
    return this._spNodes;
  }
  public putSpNodes(value: AuthprofileSamlSpSpNodes[] | cdktf.IResolvable) {
    this._spNodes.internalValue = value;
  }
  public resetSpNodes() {
    this._spNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spNodesInput() {
    return this._spNodes.internalValue;
  }
}

export class AuthprofileSamlSpList extends cdktf.ComplexList {
  public internalValue? : AuthprofileSamlSp[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileSamlSpOutputReference {
    return new AuthprofileSamlSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileSaml {
  /**
  * idp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#idp Authprofile#idp}
  */
  readonly idp: AuthprofileSamlIdp[] | cdktf.IResolvable;
  /**
  * sp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#sp Authprofile#sp}
  */
  readonly sp: AuthprofileSamlSp[] | cdktf.IResolvable;
}

export function authprofileSamlToTerraform(struct?: AuthprofileSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp: cdktf.listMapper(authprofileSamlIdpToTerraform, true)(struct!.idp),
    sp: cdktf.listMapper(authprofileSamlSpToTerraform, true)(struct!.sp),
  }
}


export function authprofileSamlToHclTerraform(struct?: AuthprofileSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp: {
      value: cdktf.listMapperHcl(authprofileSamlIdpToHclTerraform, true)(struct!.idp),
      isBlock: true,
      type: "set",
      storageClassType: "AuthprofileSamlIdpList",
    },
    sp: {
      value: cdktf.listMapperHcl(authprofileSamlSpToHclTerraform, true)(struct!.sp),
      isBlock: true,
      type: "set",
      storageClassType: "AuthprofileSamlSpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp?.internalValue;
    }
    if (this._sp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idp.internalValue = undefined;
      this._sp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idp.internalValue = value.idp;
      this._sp.internalValue = value.sp;
    }
  }

  // idp - computed: false, optional: false, required: true
  private _idp = new AuthprofileSamlIdpList(this, "idp", true);
  public get idp() {
    return this._idp;
  }
  public putIdp(value: AuthprofileSamlIdp[] | cdktf.IResolvable) {
    this._idp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }

  // sp - computed: false, optional: false, required: true
  private _sp = new AuthprofileSamlSpList(this, "sp", true);
  public get sp() {
    return this._sp;
  }
  public putSp(value: AuthprofileSamlSp[] | cdktf.IResolvable) {
    this._sp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp.internalValue;
  }
}

export class AuthprofileSamlList extends cdktf.ComplexList {
  public internalValue? : AuthprofileSaml[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileSamlOutputReference {
    return new AuthprofileSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileTacacsPlusAuthorizationAttrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#mandatory Authprofile#mandatory}
  */
  readonly mandatory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#name Authprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#value Authprofile#value}
  */
  readonly value?: string;
}

export function authprofileTacacsPlusAuthorizationAttrsToTerraform(struct?: AuthprofileTacacsPlusAuthorizationAttrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mandatory: cdktf.stringToTerraform(struct!.mandatory),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function authprofileTacacsPlusAuthorizationAttrsToHclTerraform(struct?: AuthprofileTacacsPlusAuthorizationAttrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mandatory: {
      value: cdktf.stringToHclTerraform(struct!.mandatory),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileTacacsPlusAuthorizationAttrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileTacacsPlusAuthorizationAttrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileTacacsPlusAuthorizationAttrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mandatory = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mandatory = value.mandatory;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // mandatory - computed: true, optional: true, required: false
  private _mandatory?: string; 
  public get mandatory() {
    return this.getStringAttribute('mandatory');
  }
  public set mandatory(value: string) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AuthprofileTacacsPlusAuthorizationAttrsList extends cdktf.ComplexList {
  public internalValue? : AuthprofileTacacsPlusAuthorizationAttrs[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileTacacsPlusAuthorizationAttrsOutputReference {
    return new AuthprofileTacacsPlusAuthorizationAttrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthprofileTacacsPlus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#password Authprofile#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#port Authprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#server Authprofile#server}
  */
  readonly server: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#service Authprofile#service}
  */
  readonly service?: string;
  /**
  * authorization_attrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#authorization_attrs Authprofile#authorization_attrs}
  */
  readonly authorizationAttrs?: AuthprofileTacacsPlusAuthorizationAttrs[] | cdktf.IResolvable;
}

export function authprofileTacacsPlusToTerraform(struct?: AuthprofileTacacsPlus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.server),
    service: cdktf.stringToTerraform(struct!.service),
    authorization_attrs: cdktf.listMapper(authprofileTacacsPlusAuthorizationAttrsToTerraform, true)(struct!.authorizationAttrs),
  }
}


export function authprofileTacacsPlusToHclTerraform(struct?: AuthprofileTacacsPlus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.server),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_attrs: {
      value: cdktf.listMapperHcl(authprofileTacacsPlusAuthorizationAttrsToHclTerraform, true)(struct!.authorizationAttrs),
      isBlock: true,
      type: "list",
      storageClassType: "AuthprofileTacacsPlusAuthorizationAttrsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthprofileTacacsPlusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthprofileTacacsPlus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._authorizationAttrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationAttrs = this._authorizationAttrs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthprofileTacacsPlus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._port = undefined;
      this._server = undefined;
      this._service = undefined;
      this._authorizationAttrs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._port = value.port;
      this._server = value.server;
      this._service = value.service;
      this._authorizationAttrs.internalValue = value.authorizationAttrs;
    }
  }

  // password - computed: true, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string[]; 
  public get server() {
    return this.getListAttribute('server');
  }
  public set server(value: string[]) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // authorization_attrs - computed: false, optional: true, required: false
  private _authorizationAttrs = new AuthprofileTacacsPlusAuthorizationAttrsList(this, "authorization_attrs", false);
  public get authorizationAttrs() {
    return this._authorizationAttrs;
  }
  public putAuthorizationAttrs(value: AuthprofileTacacsPlusAuthorizationAttrs[] | cdktf.IResolvable) {
    this._authorizationAttrs.internalValue = value;
  }
  public resetAuthorizationAttrs() {
    this._authorizationAttrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationAttrsInput() {
    return this._authorizationAttrs.internalValue;
  }
}

export class AuthprofileTacacsPlusList extends cdktf.ComplexList {
  public internalValue? : AuthprofileTacacsPlus[] | cdktf.IResolvable

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
  public get(index: number): AuthprofileTacacsPlusOutputReference {
    return new AuthprofileTacacsPlusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile avi_authprofile}
*/
export class Authprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_authprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authprofile to import
  * @param importFromId The id of the existing Authprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_authprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/authprofile avi_authprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AuthprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_authprofile',
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
    this._description = config.description;
    this._id = config.id;
    this._jwtProfileRef = config.jwtProfileRef;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._http.internalValue = config.http;
    this._ldap.internalValue = config.ldap;
    this._markers.internalValue = config.markers;
    this._oauthProfile.internalValue = config.oauthProfile;
    this._saml.internalValue = config.saml;
    this._tacacsPlus.internalValue = config.tacacsPlus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // jwt_profile_ref - computed: true, optional: true, required: false
  private _jwtProfileRef?: string; 
  public get jwtProfileRef() {
    return this.getStringAttribute('jwt_profile_ref');
  }
  public set jwtProfileRef(value: string) {
    this._jwtProfileRef = value;
  }
  public resetJwtProfileRef() {
    this._jwtProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtProfileRefInput() {
    return this._jwtProfileRef;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new AuthprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AuthprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new AuthprofileHttpList(this, "http", true);
  public get http() {
    return this._http;
  }
  public putHttp(value: AuthprofileHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new AuthprofileLdapList(this, "ldap", true);
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: AuthprofileLdap[] | cdktf.IResolvable) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new AuthprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: AuthprofileMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // oauth_profile - computed: false, optional: true, required: false
  private _oauthProfile = new AuthprofileOauthProfileList(this, "oauth_profile", true);
  public get oauthProfile() {
    return this._oauthProfile;
  }
  public putOauthProfile(value: AuthprofileOauthProfile[] | cdktf.IResolvable) {
    this._oauthProfile.internalValue = value;
  }
  public resetOauthProfile() {
    this._oauthProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileInput() {
    return this._oauthProfile.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new AuthprofileSamlList(this, "saml", true);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AuthprofileSaml[] | cdktf.IResolvable) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // tacacs_plus - computed: false, optional: true, required: false
  private _tacacsPlus = new AuthprofileTacacsPlusList(this, "tacacs_plus", true);
  public get tacacsPlus() {
    return this._tacacsPlus;
  }
  public putTacacsPlus(value: AuthprofileTacacsPlus[] | cdktf.IResolvable) {
    this._tacacsPlus.internalValue = value;
  }
  public resetTacacsPlus() {
    this._tacacsPlus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsPlusInput() {
    return this._tacacsPlus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      jwt_profile_ref: cdktf.stringToTerraform(this._jwtProfileRef),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(authprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      http: cdktf.listMapper(authprofileHttpToTerraform, true)(this._http.internalValue),
      ldap: cdktf.listMapper(authprofileLdapToTerraform, true)(this._ldap.internalValue),
      markers: cdktf.listMapper(authprofileMarkersToTerraform, true)(this._markers.internalValue),
      oauth_profile: cdktf.listMapper(authprofileOauthProfileToTerraform, true)(this._oauthProfile.internalValue),
      saml: cdktf.listMapper(authprofileSamlToTerraform, true)(this._saml.internalValue),
      tacacs_plus: cdktf.listMapper(authprofileTacacsPlusToTerraform, true)(this._tacacsPlus.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      jwt_profile_ref: {
        value: cdktf.stringToHclTerraform(this._jwtProfileRef),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      configpb_attributes: {
        value: cdktf.listMapperHcl(authprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthprofileConfigpbAttributesList",
      },
      http: {
        value: cdktf.listMapperHcl(authprofileHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthprofileHttpList",
      },
      ldap: {
        value: cdktf.listMapperHcl(authprofileLdapToHclTerraform, true)(this._ldap.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthprofileLdapList",
      },
      markers: {
        value: cdktf.listMapperHcl(authprofileMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthprofileMarkersList",
      },
      oauth_profile: {
        value: cdktf.listMapperHcl(authprofileOauthProfileToHclTerraform, true)(this._oauthProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthprofileOauthProfileList",
      },
      saml: {
        value: cdktf.listMapperHcl(authprofileSamlToHclTerraform, true)(this._saml.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthprofileSamlList",
      },
      tacacs_plus: {
        value: cdktf.listMapperHcl(authprofileTacacsPlusToHclTerraform, true)(this._tacacsPlus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthprofileTacacsPlusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
