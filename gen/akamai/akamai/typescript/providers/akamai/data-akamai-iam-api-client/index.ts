// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiIamApiClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_client#client_id DataAkamaiIamApiClient#client_id}
  */
  readonly clientId?: string;
}
export interface DataAkamaiIamApiClientActions {
}

export function dataAkamaiIamApiClientActionsToTerraform(struct?: DataAkamaiIamApiClientActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientActionsToHclTerraform(struct?: DataAkamaiIamApiClientActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiIamApiClientActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deactivate_all - computed: true, optional: false, required: false
  public get deactivateAll() {
    return this.getBooleanAttribute('deactivate_all');
  }

  // delete - computed: true, optional: false, required: false
  public get delete() {
    return this.getBooleanAttribute('delete');
  }

  // edit - computed: true, optional: false, required: false
  public get edit() {
    return this.getBooleanAttribute('edit');
  }

  // edit_apis - computed: true, optional: false, required: false
  public get editApis() {
    return this.getBooleanAttribute('edit_apis');
  }

  // edit_auth - computed: true, optional: false, required: false
  public get editAuth() {
    return this.getBooleanAttribute('edit_auth');
  }

  // edit_groups - computed: true, optional: false, required: false
  public get editGroups() {
    return this.getBooleanAttribute('edit_groups');
  }

  // edit_ip_acl - computed: true, optional: false, required: false
  public get editIpAcl() {
    return this.getBooleanAttribute('edit_ip_acl');
  }

  // edit_switch_account - computed: true, optional: false, required: false
  public get editSwitchAccount() {
    return this.getBooleanAttribute('edit_switch_account');
  }

  // lock - computed: true, optional: false, required: false
  public get lock() {
    return this.getBooleanAttribute('lock');
  }

  // transfer - computed: true, optional: false, required: false
  public get transfer() {
    return this.getBooleanAttribute('transfer');
  }

  // unlock - computed: true, optional: false, required: false
  public get unlock() {
    return this.getBooleanAttribute('unlock');
  }
}
export interface DataAkamaiIamApiClientApiAccessApis {
}

export function dataAkamaiIamApiClientApiAccessApisToTerraform(struct?: DataAkamaiIamApiClientApiAccessApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientApiAccessApisToHclTerraform(struct?: DataAkamaiIamApiClientApiAccessApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientApiAccessApisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiIamApiClientApiAccessApis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientApiAccessApis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level - computed: true, optional: false, required: false
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getNumberAttribute('api_id');
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // documentation_url - computed: true, optional: false, required: false
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export class DataAkamaiIamApiClientApiAccessApisList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiIamApiClientApiAccessApisOutputReference {
    return new DataAkamaiIamApiClientApiAccessApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiIamApiClientApiAccess {
}

export function dataAkamaiIamApiClientApiAccessToTerraform(struct?: DataAkamaiIamApiClientApiAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientApiAccessToHclTerraform(struct?: DataAkamaiIamApiClientApiAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientApiAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiIamApiClientApiAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientApiAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_accessible_apis - computed: true, optional: false, required: false
  public get allAccessibleApis() {
    return this.getBooleanAttribute('all_accessible_apis');
  }

  // apis - computed: true, optional: false, required: false
  private _apis = new DataAkamaiIamApiClientApiAccessApisList(this, "apis", true);
  public get apis() {
    return this._apis;
  }
}
export interface DataAkamaiIamApiClientCredentialsActions {
}

export function dataAkamaiIamApiClientCredentialsActionsToTerraform(struct?: DataAkamaiIamApiClientCredentialsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientCredentialsActionsToHclTerraform(struct?: DataAkamaiIamApiClientCredentialsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientCredentialsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiIamApiClientCredentialsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientCredentialsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate - computed: true, optional: false, required: false
  public get activate() {
    return this.getBooleanAttribute('activate');
  }

  // deactivate - computed: true, optional: false, required: false
  public get deactivate() {
    return this.getBooleanAttribute('deactivate');
  }

  // delete - computed: true, optional: false, required: false
  public get delete() {
    return this.getBooleanAttribute('delete');
  }

  // edit_description - computed: true, optional: false, required: false
  public get editDescription() {
    return this.getBooleanAttribute('edit_description');
  }

  // edit_expiration - computed: true, optional: false, required: false
  public get editExpiration() {
    return this.getBooleanAttribute('edit_expiration');
  }
}
export interface DataAkamaiIamApiClientCredentials {
}

export function dataAkamaiIamApiClientCredentialsToTerraform(struct?: DataAkamaiIamApiClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientCredentialsToHclTerraform(struct?: DataAkamaiIamApiClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiIamApiClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAkamaiIamApiClientCredentialsActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAkamaiIamApiClientCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiIamApiClientCredentialsOutputReference {
    return new DataAkamaiIamApiClientCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiIamApiClientGroupAccessGroupsSubGroups {
}

export function dataAkamaiIamApiClientGroupAccessGroupsSubGroupsToTerraform(struct?: DataAkamaiIamApiClientGroupAccessGroupsSubGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientGroupAccessGroupsSubGroupsToHclTerraform(struct?: DataAkamaiIamApiClientGroupAccessGroupsSubGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientGroupAccessGroupsSubGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiIamApiClientGroupAccessGroupsSubGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientGroupAccessGroupsSubGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // is_blocked - computed: true, optional: false, required: false
  public get isBlocked() {
    return this.getBooleanAttribute('is_blocked');
  }

  // parent_group_id - computed: true, optional: false, required: false
  public get parentGroupId() {
    return this.getNumberAttribute('parent_group_id');
  }

  // role_description - computed: true, optional: false, required: false
  public get roleDescription() {
    return this.getStringAttribute('role_description');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // sub_groups - computed: true, optional: false, required: false
  private _subGroups = new DataAkamaiIamApiClientGroupAccessGroupsSubGroupsList(this, "sub_groups", false);
  public get subGroups() {
    return this._subGroups;
  }
}

export class DataAkamaiIamApiClientGroupAccessGroupsSubGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiIamApiClientGroupAccessGroupsSubGroupsOutputReference {
    return new DataAkamaiIamApiClientGroupAccessGroupsSubGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiIamApiClientGroupAccessGroups {
}

export function dataAkamaiIamApiClientGroupAccessGroupsToTerraform(struct?: DataAkamaiIamApiClientGroupAccessGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientGroupAccessGroupsToHclTerraform(struct?: DataAkamaiIamApiClientGroupAccessGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientGroupAccessGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiIamApiClientGroupAccessGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientGroupAccessGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // is_blocked - computed: true, optional: false, required: false
  public get isBlocked() {
    return this.getBooleanAttribute('is_blocked');
  }

  // parent_group_id - computed: true, optional: false, required: false
  public get parentGroupId() {
    return this.getNumberAttribute('parent_group_id');
  }

  // role_description - computed: true, optional: false, required: false
  public get roleDescription() {
    return this.getStringAttribute('role_description');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // sub_groups - computed: true, optional: false, required: false
  private _subGroups = new DataAkamaiIamApiClientGroupAccessGroupsSubGroupsList(this, "sub_groups", false);
  public get subGroups() {
    return this._subGroups;
  }
}

export class DataAkamaiIamApiClientGroupAccessGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiIamApiClientGroupAccessGroupsOutputReference {
    return new DataAkamaiIamApiClientGroupAccessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiIamApiClientGroupAccess {
}

export function dataAkamaiIamApiClientGroupAccessToTerraform(struct?: DataAkamaiIamApiClientGroupAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientGroupAccessToHclTerraform(struct?: DataAkamaiIamApiClientGroupAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientGroupAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiIamApiClientGroupAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientGroupAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clone_authorized_user_groups - computed: true, optional: false, required: false
  public get cloneAuthorizedUserGroups() {
    return this.getBooleanAttribute('clone_authorized_user_groups');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAkamaiIamApiClientGroupAccessGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataAkamaiIamApiClientIpAcl {
}

export function dataAkamaiIamApiClientIpAclToTerraform(struct?: DataAkamaiIamApiClientIpAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientIpAclToHclTerraform(struct?: DataAkamaiIamApiClientIpAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientIpAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiIamApiClientIpAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientIpAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getListAttribute('cidr');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}
export interface DataAkamaiIamApiClientPurgeOptionsCpCodeAccess {
}

export function dataAkamaiIamApiClientPurgeOptionsCpCodeAccessToTerraform(struct?: DataAkamaiIamApiClientPurgeOptionsCpCodeAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientPurgeOptionsCpCodeAccessToHclTerraform(struct?: DataAkamaiIamApiClientPurgeOptionsCpCodeAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientPurgeOptionsCpCodeAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiIamApiClientPurgeOptionsCpCodeAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientPurgeOptionsCpCodeAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_current_and_new_cp_codes - computed: true, optional: false, required: false
  public get allCurrentAndNewCpCodes() {
    return this.getBooleanAttribute('all_current_and_new_cp_codes');
  }

  // cp_codes - computed: true, optional: false, required: false
  public get cpCodes() {
    return this.getNumberListAttribute('cp_codes');
  }
}
export interface DataAkamaiIamApiClientPurgeOptions {
}

export function dataAkamaiIamApiClientPurgeOptionsToTerraform(struct?: DataAkamaiIamApiClientPurgeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientPurgeOptionsToHclTerraform(struct?: DataAkamaiIamApiClientPurgeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientPurgeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiIamApiClientPurgeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientPurgeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_purge_by_cache_tag - computed: true, optional: false, required: false
  public get canPurgeByCacheTag() {
    return this.getBooleanAttribute('can_purge_by_cache_tag');
  }

  // can_purge_by_cp_code - computed: true, optional: false, required: false
  public get canPurgeByCpCode() {
    return this.getBooleanAttribute('can_purge_by_cp_code');
  }

  // cp_code_access - computed: true, optional: false, required: false
  private _cpCodeAccess = new DataAkamaiIamApiClientPurgeOptionsCpCodeAccessOutputReference(this, "cp_code_access");
  public get cpCodeAccess() {
    return this._cpCodeAccess;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_client akamai_iam_api_client}
*/
export class DataAkamaiIamApiClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_iam_api_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiIamApiClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiIamApiClient to import
  * @param importFromId The id of the existing DataAkamaiIamApiClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiIamApiClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_iam_api_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_client akamai_iam_api_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiIamApiClientConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiIamApiClientConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_iam_api_client',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAkamaiIamApiClientActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }

  // active_credential_count - computed: true, optional: false, required: false
  public get activeCredentialCount() {
    return this.getNumberAttribute('active_credential_count');
  }

  // allow_account_switch - computed: true, optional: false, required: false
  public get allowAccountSwitch() {
    return this.getBooleanAttribute('allow_account_switch');
  }

  // api_access - computed: true, optional: false, required: false
  private _apiAccess = new DataAkamaiIamApiClientApiAccessOutputReference(this, "api_access");
  public get apiAccess() {
    return this._apiAccess;
  }

  // authorized_users - computed: true, optional: false, required: false
  public get authorizedUsers() {
    return this.getListAttribute('authorized_users');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // can_auto_create_credential - computed: true, optional: false, required: false
  public get canAutoCreateCredential() {
    return this.getBooleanAttribute('can_auto_create_credential');
  }

  // client_description - computed: true, optional: false, required: false
  public get clientDescription() {
    return this.getStringAttribute('client_description');
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_type - computed: true, optional: false, required: false
  public get clientType() {
    return this.getStringAttribute('client_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataAkamaiIamApiClientCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }

  // group_access - computed: true, optional: false, required: false
  private _groupAccess = new DataAkamaiIamApiClientGroupAccessOutputReference(this, "group_access");
  public get groupAccess() {
    return this._groupAccess;
  }

  // ip_acl - computed: true, optional: false, required: false
  private _ipAcl = new DataAkamaiIamApiClientIpAclOutputReference(this, "ip_acl");
  public get ipAcl() {
    return this._ipAcl;
  }

  // is_locked - computed: true, optional: false, required: false
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }

  // notification_emails - computed: true, optional: false, required: false
  public get notificationEmails() {
    return this.getListAttribute('notification_emails');
  }

  // purge_options - computed: true, optional: false, required: false
  private _purgeOptions = new DataAkamaiIamApiClientPurgeOptionsOutputReference(this, "purge_options");
  public get purgeOptions() {
    return this._purgeOptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
