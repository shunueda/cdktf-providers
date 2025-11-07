// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRedfishDirectoryServiceAuthProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider#redfish_server DataRedfishDirectoryServiceAuthProvider#redfish_server}
  */
  readonly redfishServer?: DataRedfishDirectoryServiceAuthProviderRedfishServer[] | cdktf.IResolvable;
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthentication {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthenticationToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthenticationToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_role - computed: true, optional: false, required: false
  public get localRole() {
    return this.getStringAttribute('local_role');
  }

  // remote_group - computed: true, optional: false, required: false
  public get remoteGroup() {
    return this.getStringAttribute('remote_group');
  }
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingOutputReference {
    return new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectory {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_provider_type - computed: true, optional: false, required: false
  public get accountProviderType() {
    return this.getStringAttribute('account_provider_type');
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }

  // certificates - computed: true, optional: false, required: false
  public get certificates() {
    return this.getStringAttribute('certificates');
  }

  // remote_role_mapping - computed: true, optional: false, required: false
  private _remoteRoleMapping = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryRemoteRoleMappingList(this, "remote_role_mapping", false);
  public get remoteRoleMapping() {
    return this._remoteRoleMapping;
  }

  // service_addresses - computed: true, optional: false, required: false
  public get serviceAddresses() {
    return this.getListAttribute('service_addresses');
  }

  // service_enabled - computed: true, optional: false, required: false
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectory {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthentication {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthenticationToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthenticationToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_role - computed: true, optional: false, required: false
  public get localRole() {
    return this.getStringAttribute('local_role');
  }

  // remote_group - computed: true, optional: false, required: false
  public get remoteGroup() {
    return this.getStringAttribute('remote_group');
  }
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingList extends cdktf.ComplexList {

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
  public get(index: number): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingOutputReference {
    return new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectory {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_provider_type - computed: true, optional: false, required: false
  public get accountProviderType() {
    return this.getStringAttribute('account_provider_type');
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }

  // certificates - computed: true, optional: false, required: false
  public get certificates() {
    return this.getStringAttribute('certificates');
  }

  // remote_role_mapping - computed: true, optional: false, required: false
  private _remoteRoleMapping = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryRemoteRoleMappingList(this, "remote_role_mapping", false);
  public get remoteRoleMapping() {
    return this._remoteRoleMapping;
  }

  // service_addresses - computed: true, optional: false, required: false
  public get serviceAddresses() {
    return this.getListAttribute('service_addresses');
  }

  // service_enabled - computed: true, optional: false, required: false
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettings {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettingsToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettingsToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_distinguished_names - computed: true, optional: false, required: false
  public get baseDistinguishedNames() {
    return this.getListAttribute('base_distinguished_names');
  }

  // group_name_attribute - computed: true, optional: false, required: false
  public get groupNameAttribute() {
    return this.getStringAttribute('group_name_attribute');
  }

  // user_name_attribute - computed: true, optional: false, required: false
  public get userNameAttribute() {
    return this.getStringAttribute('user_name_attribute');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapService {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // search_settings - computed: true, optional: false, required: false
  private _searchSettings = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceSearchSettingsOutputReference(this, "search_settings");
  public get searchSettings() {
    return this._searchSettings;
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdap {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }

  // ldap_service - computed: true, optional: false, required: false
  private _ldapService = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapLdapServiceOutputReference(this, "ldap_service");
  public get ldapService() {
    return this._ldapService;
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatus {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatusToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatusToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_rollup - computed: true, optional: false, required: false
  public get healthRollup() {
    return this.getStringAttribute('health_rollup');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProvider {
}

export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_lockout_counter_reset_after - computed: true, optional: false, required: false
  public get accountLockoutCounterResetAfter() {
    return this.getNumberAttribute('account_lockout_counter_reset_after');
  }

  // account_lockout_duration - computed: true, optional: false, required: false
  public get accountLockoutDuration() {
    return this.getNumberAttribute('account_lockout_duration');
  }

  // account_lockout_threshold - computed: true, optional: false, required: false
  public get accountLockoutThreshold() {
    return this.getNumberAttribute('account_lockout_threshold');
  }

  // accounts - computed: true, optional: false, required: false
  public get accounts() {
    return this.getStringAttribute('accounts');
  }

  // active_directory - computed: true, optional: false, required: false
  private _activeDirectory = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }

  // additional_external_account_providers - computed: true, optional: false, required: false
  public get additionalExternalAccountProviders() {
    return this.getStringAttribute('additional_external_account_providers');
  }

  // auth_failure_logging_threshold - computed: true, optional: false, required: false
  public get authFailureLoggingThreshold() {
    return this.getNumberAttribute('auth_failure_logging_threshold');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap - computed: true, optional: false, required: false
  private _ldap = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }

  // local_account_auth - computed: true, optional: false, required: false
  public get localAccountAuth() {
    return this.getStringAttribute('local_account_auth');
  }

  // max_password_length - computed: true, optional: false, required: false
  public get maxPasswordLength() {
    return this.getNumberAttribute('max_password_length');
  }

  // min_password_length - computed: true, optional: false, required: false
  public get minPasswordLength() {
    return this.getNumberAttribute('min_password_length');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // password_expiration_days - computed: true, optional: false, required: false
  public get passwordExpirationDays() {
    return this.getNumberAttribute('password_expiration_days');
  }

  // privilege_map - computed: true, optional: false, required: false
  public get privilegeMap() {
    return this.getStringAttribute('privilege_map');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getStringAttribute('roles');
  }

  // service_enabled - computed: true, optional: false, required: false
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // supported_account_types - computed: true, optional: false, required: false
  public get supportedAccountTypes() {
    return this.getListAttribute('supported_account_types');
  }

  // supported_oem_account_types - computed: true, optional: false, required: false
  public get supportedOemAccountTypes() {
    return this.getListAttribute('supported_oem_account_types');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider#endpoint DataRedfishDirectoryServiceAuthProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider#password DataRedfishDirectoryServiceAuthProvider#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider#redfish_alias DataRedfishDirectoryServiceAuthProvider#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider#ssl_insecure DataRedfishDirectoryServiceAuthProvider#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider#user DataRedfishDirectoryServiceAuthProvider#user}
  */
  readonly user?: string;
}

export function dataRedfishDirectoryServiceAuthProviderRedfishServerToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataRedfishDirectoryServiceAuthProviderRedfishServerToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataRedfishDirectoryServiceAuthProviderRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
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

export class DataRedfishDirectoryServiceAuthProviderRedfishServerList extends cdktf.ComplexList {
  public internalValue? : DataRedfishDirectoryServiceAuthProviderRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishDirectoryServiceAuthProviderRedfishServerOutputReference {
    return new DataRedfishDirectoryServiceAuthProviderRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider redfish_directory_service_auth_provider}
*/
export class DataRedfishDirectoryServiceAuthProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_directory_service_auth_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRedfishDirectoryServiceAuthProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRedfishDirectoryServiceAuthProvider to import
  * @param importFromId The id of the existing DataRedfishDirectoryServiceAuthProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRedfishDirectoryServiceAuthProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_directory_service_auth_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider redfish_directory_service_auth_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRedfishDirectoryServiceAuthProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRedfishDirectoryServiceAuthProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'redfish_directory_service_auth_provider',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory_attributes - computed: true, optional: false, required: false
  private _activeDirectoryAttributes = new cdktf.StringMap(this, "active_directory_attributes");
  public get activeDirectoryAttributes() {
    return this._activeDirectoryAttributes;
  }

  // directory_service_auth_provider - computed: true, optional: false, required: false
  private _directoryServiceAuthProvider = new DataRedfishDirectoryServiceAuthProviderDirectoryServiceAuthProviderOutputReference(this, "directory_service_auth_provider");
  public get directoryServiceAuthProvider() {
    return this._directoryServiceAuthProvider;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_attributes - computed: true, optional: false, required: false
  private _ldapAttributes = new cdktf.StringMap(this, "ldap_attributes");
  public get ldapAttributes() {
    return this._ldapAttributes;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new DataRedfishDirectoryServiceAuthProviderRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: DataRedfishDirectoryServiceAuthProviderRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      redfish_server: cdktf.listMapper(dataRedfishDirectoryServiceAuthProviderRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      redfish_server: {
        value: cdktf.listMapperHcl(dataRedfishDirectoryServiceAuthProviderRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRedfishDirectoryServiceAuthProviderRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
