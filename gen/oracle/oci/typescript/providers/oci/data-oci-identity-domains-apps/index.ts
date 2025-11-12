// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsAppsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#app_count DataOciIdentityDomainsApps#app_count}
  */
  readonly appCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#app_filter DataOciIdentityDomainsApps#app_filter}
  */
  readonly appFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#attribute_sets DataOciIdentityDomainsApps#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#attributes DataOciIdentityDomainsApps#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#authorization DataOciIdentityDomainsApps#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#compartment_id DataOciIdentityDomainsApps#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#id DataOciIdentityDomainsApps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#idcs_endpoint DataOciIdentityDomainsApps#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#resource_type_schema_version DataOciIdentityDomainsApps#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#sort_by DataOciIdentityDomainsApps#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#sort_order DataOciIdentityDomainsApps#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#start_index DataOciIdentityDomainsApps#start_index}
  */
  readonly startIndex?: number;
}
export interface DataOciIdentityDomainsAppsAppsAccounts {
}

export function dataOciIdentityDomainsAppsAppsAccountsToTerraform(struct?: DataOciIdentityDomainsAppsAppsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAccountsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAccountsOutputReference {
    return new DataOciIdentityDomainsAppsAppsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsAdminRoles {
}

export function dataOciIdentityDomainsAppsAppsAdminRolesToTerraform(struct?: DataOciIdentityDomainsAppsAppsAdminRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAdminRolesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAdminRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAdminRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAdminRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAdminRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsAdminRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAdminRolesOutputReference {
    return new DataOciIdentityDomainsAppsAppsAdminRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsAliasApps {
}

export function dataOciIdentityDomainsAppsAppsAliasAppsToTerraform(struct?: DataOciIdentityDomainsAppsAppsAliasApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAliasAppsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAliasApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAliasAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAliasApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAliasApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsAliasAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAliasAppsOutputReference {
    return new DataOciIdentityDomainsAppsAppsAliasAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsAllowedScopes {
}

export function dataOciIdentityDomainsAppsAppsAllowedScopesToTerraform(struct?: DataOciIdentityDomainsAppsAppsAllowedScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAllowedScopesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAllowedScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAllowedScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAllowedScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAllowedScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqs - computed: true, optional: false, required: false
  public get fqs() {
    return this.getStringAttribute('fqs');
  }

  // id_of_defining_app - computed: true, optional: false, required: false
  public get idOfDefiningApp() {
    return this.getStringAttribute('id_of_defining_app');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataOciIdentityDomainsAppsAppsAllowedScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAllowedScopesOutputReference {
    return new DataOciIdentityDomainsAppsAppsAllowedScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsAllowedTags {
}

export function dataOciIdentityDomainsAppsAppsAllowedTagsToTerraform(struct?: DataOciIdentityDomainsAppsAppsAllowedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAllowedTagsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAllowedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAllowedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAllowedTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAllowedTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsAllowedTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAllowedTagsOutputReference {
    return new DataOciIdentityDomainsAppsAppsAllowedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsAppSignonPolicy {
}

export function dataOciIdentityDomainsAppsAppsAppSignonPolicyToTerraform(struct?: DataOciIdentityDomainsAppsAppsAppSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAppSignonPolicyToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAppSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAppSignonPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAppSignonPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAppSignonPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsAppSignonPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAppSignonPolicyOutputReference {
    return new DataOciIdentityDomainsAppsAppsAppSignonPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsAppsNetworkPerimeters {
}

export function dataOciIdentityDomainsAppsAppsAppsNetworkPerimetersToTerraform(struct?: DataOciIdentityDomainsAppsAppsAppsNetworkPerimeters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAppsNetworkPerimetersToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAppsNetworkPerimeters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAppsNetworkPerimetersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAppsNetworkPerimeters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAppsNetworkPerimeters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsAppsNetworkPerimetersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAppsNetworkPerimetersOutputReference {
    return new DataOciIdentityDomainsAppsAppsAppsNetworkPerimetersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsAsOpcService {
}

export function dataOciIdentityDomainsAppsAppsAsOpcServiceToTerraform(struct?: DataOciIdentityDomainsAppsAppsAsOpcService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAsOpcServiceToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAsOpcService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAsOpcServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAsOpcService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAsOpcService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsAsOpcServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAsOpcServiceOutputReference {
    return new DataOciIdentityDomainsAppsAppsAsOpcServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsAttrRenderingMetadata {
}

export function dataOciIdentityDomainsAppsAppsAttrRenderingMetadataToTerraform(struct?: DataOciIdentityDomainsAppsAppsAttrRenderingMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsAttrRenderingMetadataToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsAttrRenderingMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsAttrRenderingMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsAttrRenderingMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsAttrRenderingMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datatype - computed: true, optional: false, required: false
  public get datatype() {
    return this.getStringAttribute('datatype');
  }

  // helptext - computed: true, optional: false, required: false
  public get helptext() {
    return this.getStringAttribute('helptext');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // regexp - computed: true, optional: false, required: false
  public get regexp() {
    return this.getStringAttribute('regexp');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // section - computed: true, optional: false, required: false
  public get section() {
    return this.getStringAttribute('section');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getBooleanAttribute('visible');
  }

  // widget - computed: true, optional: false, required: false
  public get widget() {
    return this.getStringAttribute('widget');
  }
}

export class DataOciIdentityDomainsAppsAppsAttrRenderingMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsAttrRenderingMetadataOutputReference {
    return new DataOciIdentityDomainsAppsAppsAttrRenderingMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsBasedOnTemplate {
}

export function dataOciIdentityDomainsAppsAppsBasedOnTemplateToTerraform(struct?: DataOciIdentityDomainsAppsAppsBasedOnTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsBasedOnTemplateToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsBasedOnTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsBasedOnTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsBasedOnTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsBasedOnTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // well_known_id - computed: true, optional: false, required: false
  public get wellKnownId() {
    return this.getStringAttribute('well_known_id');
  }
}

export class DataOciIdentityDomainsAppsAppsBasedOnTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsBasedOnTemplateOutputReference {
    return new DataOciIdentityDomainsAppsAppsBasedOnTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsCertificates {
}

export function dataOciIdentityDomainsAppsAppsCertificatesToTerraform(struct?: DataOciIdentityDomainsAppsAppsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsCertificatesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_alias - computed: true, optional: false, required: false
  public get certAlias() {
    return this.getStringAttribute('cert_alias');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // sha1thumbprint - computed: true, optional: false, required: false
  public get sha1Thumbprint() {
    return this.getStringAttribute('sha1thumbprint');
  }

  // x509base64certificate - computed: true, optional: false, required: false
  public get x509Base64Certificate() {
    return this.getStringAttribute('x509base64certificate');
  }

  // x5t - computed: true, optional: false, required: false
  public get x5T() {
    return this.getStringAttribute('x5t');
  }
}

export class DataOciIdentityDomainsAppsAppsCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsCertificatesOutputReference {
    return new DataOciIdentityDomainsAppsAppsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsCloudControlProperties {
}

export function dataOciIdentityDomainsAppsAppsCloudControlPropertiesToTerraform(struct?: DataOciIdentityDomainsAppsAppsCloudControlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsCloudControlPropertiesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsCloudControlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsCloudControlPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsCloudControlProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsCloudControlProperties | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciIdentityDomainsAppsAppsCloudControlPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsCloudControlPropertiesOutputReference {
    return new DataOciIdentityDomainsAppsAppsCloudControlPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsEditableAttributes {
}

export function dataOciIdentityDomainsAppsAppsEditableAttributesToTerraform(struct?: DataOciIdentityDomainsAppsAppsEditableAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsEditableAttributesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsEditableAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsEditableAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsEditableAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsEditableAttributes | undefined) {
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
}

export class DataOciIdentityDomainsAppsAppsEditableAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsEditableAttributesOutputReference {
    return new DataOciIdentityDomainsAppsAppsEditableAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsGrantedAppRoles {
}

export function dataOciIdentityDomainsAppsAppsGrantedAppRolesToTerraform(struct?: DataOciIdentityDomainsAppsAppsGrantedAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsGrantedAppRolesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsGrantedAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsGrantedAppRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsGrantedAppRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsGrantedAppRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_role - computed: true, optional: false, required: false
  public get adminRole() {
    return this.getBooleanAttribute('admin_role');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // legacy_group_name - computed: true, optional: false, required: false
  public get legacyGroupName() {
    return this.getStringAttribute('legacy_group_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsGrantedAppRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsGrantedAppRolesOutputReference {
    return new DataOciIdentityDomainsAppsAppsGrantedAppRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsGrants {
}

export function dataOciIdentityDomainsAppsAppsGrantsToTerraform(struct?: DataOciIdentityDomainsAppsAppsGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsGrantsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grant_mechanism - computed: true, optional: false, required: false
  public get grantMechanism() {
    return this.getStringAttribute('grant_mechanism');
  }

  // grantee_id - computed: true, optional: false, required: false
  public get granteeId() {
    return this.getStringAttribute('grantee_id');
  }

  // grantee_type - computed: true, optional: false, required: false
  public get granteeType() {
    return this.getStringAttribute('grantee_type');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsGrantsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsGrantsOutputReference {
    return new DataOciIdentityDomainsAppsAppsGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsIdcsCreatedBy {
}

export function dataOciIdentityDomainsAppsAppsIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsAppsAppsIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsAppsAppsIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsAppsAppsIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsAppsAppsIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsAppsAppsIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsIdentityProviders {
}

export function dataOciIdentityDomainsAppsAppsIdentityProvidersToTerraform(struct?: DataOciIdentityDomainsAppsAppsIdentityProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsIdentityProvidersToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsIdentityProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsIdentityProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsIdentityProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsIdentityProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsIdentityProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsIdentityProvidersOutputReference {
    return new DataOciIdentityDomainsAppsAppsIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsIdpPolicy {
}

export function dataOciIdentityDomainsAppsAppsIdpPolicyToTerraform(struct?: DataOciIdentityDomainsAppsAppsIdpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsIdpPolicyToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsIdpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsIdpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsIdpPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsIdpPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsIdpPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsIdpPolicyOutputReference {
    return new DataOciIdentityDomainsAppsAppsIdpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsMeta {
}

export function dataOciIdentityDomainsAppsAppsMetaToTerraform(struct?: DataOciIdentityDomainsAppsAppsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsMetaToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciIdentityDomainsAppsAppsMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsMetaOutputReference {
    return new DataOciIdentityDomainsAppsAppsMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiences {
}

export function dataOciIdentityDomainsAppsAppsProtectableSecondaryAudiencesToTerraform(struct?: DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsProtectableSecondaryAudiencesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiencesOutputReference {
    return new DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsRadiusPolicy {
}

export function dataOciIdentityDomainsAppsAppsRadiusPolicyToTerraform(struct?: DataOciIdentityDomainsAppsAppsRadiusPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsRadiusPolicyToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsRadiusPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsRadiusPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsRadiusPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsRadiusPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // _ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('_ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsRadiusPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsRadiusPolicyOutputReference {
    return new DataOciIdentityDomainsAppsAppsRadiusPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsSamlServiceProvider {
}

export function dataOciIdentityDomainsAppsAppsSamlServiceProviderToTerraform(struct?: DataOciIdentityDomainsAppsAppsSamlServiceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsSamlServiceProviderToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsSamlServiceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsSamlServiceProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsSamlServiceProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsSamlServiceProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsSamlServiceProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsSamlServiceProviderOutputReference {
    return new DataOciIdentityDomainsAppsAppsSamlServiceProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsScopes {
}

export function dataOciIdentityDomainsAppsAppsScopesToTerraform(struct?: DataOciIdentityDomainsAppsAppsScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsScopesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fqs - computed: true, optional: false, required: false
  public get fqs() {
    return this.getStringAttribute('fqs');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // requires_consent - computed: true, optional: false, required: false
  public get requiresConsent() {
    return this.getBooleanAttribute('requires_consent');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsScopesOutputReference {
    return new DataOciIdentityDomainsAppsAppsScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsServiceParams {
}

export function dataOciIdentityDomainsAppsAppsServiceParamsToTerraform(struct?: DataOciIdentityDomainsAppsAppsServiceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsServiceParamsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsServiceParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsServiceParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsServiceParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsServiceParams | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsServiceParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsServiceParamsOutputReference {
    return new DataOciIdentityDomainsAppsAppsServiceParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsSignonPolicy {
}

export function dataOciIdentityDomainsAppsAppsSignonPolicyToTerraform(struct?: DataOciIdentityDomainsAppsAppsSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsSignonPolicyToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsSignonPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsSignonPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsSignonPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsSignonPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsSignonPolicyOutputReference {
    return new DataOciIdentityDomainsAppsAppsSignonPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsTags {
}

export function dataOciIdentityDomainsAppsAppsTagsToTerraform(struct?: DataOciIdentityDomainsAppsAppsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsTagsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsTagsOutputReference {
    return new DataOciIdentityDomainsAppsAppsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsTermsOfUse {
}

export function dataOciIdentityDomainsAppsAppsTermsOfUseToTerraform(struct?: DataOciIdentityDomainsAppsAppsTermsOfUse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsTermsOfUseToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsTermsOfUse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsTermsOfUseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsTermsOfUse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsTermsOfUse | undefined) {
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsTermsOfUseList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsTermsOfUseOutputReference {
    return new DataOciIdentityDomainsAppsAppsTermsOfUseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsTrustPolicies {
}

export function dataOciIdentityDomainsAppsAppsTrustPoliciesToTerraform(struct?: DataOciIdentityDomainsAppsAppsTrustPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsTrustPoliciesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsTrustPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsTrustPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsTrustPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsTrustPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsTrustPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsTrustPoliciesOutputReference {
    return new DataOciIdentityDomainsAppsAppsTrustPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTags {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(this, "defined_tags", false);
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(this, "freeform_tags", false);
  public get freeformTags() {
    return this._freeformTags;
  }

  // tag_slug - computed: true, optional: false, required: false
  public get tagSlug() {
    return this.getStringAttribute('tag_slug');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_app - computed: true, optional: false, required: false
  private _domainApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppList(this, "domain_app", false);
  public get domainApp() {
    return this._domainApp;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_authz_decision_ttl - computed: true, optional: false, required: false
  public get allowAuthzDecisionTtl() {
    return this.getNumberAttribute('allow_authz_decision_ttl');
  }

  // allow_authz_policy - computed: true, optional: false, required: false
  private _allowAuthzPolicy = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyList(this, "allow_authz_policy", false);
  public get allowAuthzPolicy() {
    return this._allowAuthzPolicy;
  }

  // app_resources - computed: true, optional: false, required: false
  private _appResources = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesList(this, "app_resources", false);
  public get appResources() {
    return this._appResources;
  }

  // deny_authz_decision_ttl - computed: true, optional: false, required: false
  public get denyAuthzDecisionTtl() {
    return this.getNumberAttribute('deny_authz_decision_ttl');
  }

  // deny_authz_policy - computed: true, optional: false, required: false
  private _denyAuthzPolicy = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyList(this, "deny_authz_policy", false);
  public get denyAuthzPolicy() {
    return this._denyAuthzPolicy;
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // form_url - computed: true, optional: false, required: false
  public get formUrl() {
    return this.getStringAttribute('form_url');
  }

  // form_url_match_type - computed: true, optional: false, required: false
  public get formUrlMatchType() {
    return this.getStringAttribute('form_url_match_type');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // form_cred_method - computed: true, optional: false, required: false
  public get formCredMethod() {
    return this.getStringAttribute('form_cred_method');
  }

  // form_credential_sharing_group_id - computed: true, optional: false, required: false
  public get formCredentialSharingGroupId() {
    return this.getStringAttribute('form_credential_sharing_group_id');
  }

  // form_fill_url_match - computed: true, optional: false, required: false
  private _formFillUrlMatch = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchList(this, "form_fill_url_match", false);
  public get formFillUrlMatch() {
    return this._formFillUrlMatch;
  }

  // form_type - computed: true, optional: false, required: false
  public get formType() {
    return this.getStringAttribute('form_type');
  }

  // reveal_password_on_form - computed: true, optional: false, required: false
  public get revealPasswordOnForm() {
    return this.getBooleanAttribute('reveal_password_on_form');
  }

  // sync_from_template - computed: true, optional: false, required: false
  public get syncFromTemplate() {
    return this.getBooleanAttribute('sync_from_template');
  }

  // user_name_form_expression - computed: true, optional: false, required: false
  public get userNameFormExpression() {
    return this.getStringAttribute('user_name_form_expression');
  }

  // user_name_form_template - computed: true, optional: false, required: false
  public get userNameFormTemplate() {
    return this.getStringAttribute('user_name_form_template');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // form_url - computed: true, optional: false, required: false
  public get formUrl() {
    return this.getStringAttribute('form_url');
  }

  // form_url_match_type - computed: true, optional: false, required: false
  public get formUrlMatchType() {
    return this.getStringAttribute('form_url_match_type');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // form_cred_method - computed: true, optional: false, required: false
  public get formCredMethod() {
    return this.getStringAttribute('form_cred_method');
  }

  // form_credential_sharing_group_id - computed: true, optional: false, required: false
  public get formCredentialSharingGroupId() {
    return this.getStringAttribute('form_credential_sharing_group_id');
  }

  // form_fill_url_match - computed: true, optional: false, required: false
  private _formFillUrlMatch = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchList(this, "form_fill_url_match", false);
  public get formFillUrlMatch() {
    return this._formFillUrlMatch;
  }

  // form_type - computed: true, optional: false, required: false
  public get formType() {
    return this.getStringAttribute('form_type');
  }

  // reveal_password_on_form - computed: true, optional: false, required: false
  public get revealPasswordOnForm() {
    return this.getBooleanAttribute('reveal_password_on_form');
  }

  // sync_from_template - computed: true, optional: false, required: false
  public get syncFromTemplate() {
    return this.getBooleanAttribute('sync_from_template');
  }

  // user_name_form_expression - computed: true, optional: false, required: false
  public get userNameFormExpression() {
    return this.getStringAttribute('user_name_form_expression');
  }

  // user_name_form_template - computed: true, optional: false, required: false
  public get userNameFormTemplate() {
    return this.getStringAttribute('user_name_form_template');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_encryption_salt_type - computed: true, optional: false, required: false
  public get defaultEncryptionSaltType() {
    return this.getStringAttribute('default_encryption_salt_type');
  }

  // master_key - computed: true, optional: false, required: false
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }

  // max_renewable_age - computed: true, optional: false, required: false
  public get maxRenewableAge() {
    return this.getNumberAttribute('max_renewable_age');
  }

  // max_ticket_life - computed: true, optional: false, required: false
  public get maxTicketLife() {
    return this.getNumberAttribute('max_ticket_life');
  }

  // realm_name - computed: true, optional: false, required: false
  public get realmName() {
    return this.getStringAttribute('realm_name');
  }

  // supported_encryption_salt_types - computed: true, optional: false, required: false
  public get supportedEncryptionSaltTypes() {
    return this.getListAttribute('supported_encryption_salt_types');
  }

  // ticket_flags - computed: true, optional: false, required: false
  public get ticketFlags() {
    return this.getNumberAttribute('ticket_flags');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidential - computed: true, optional: false, required: false
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // help_message - computed: true, optional: false, required: false
  public get helpMessage() {
    return this.getStringAttribute('help_message');
  }

  // icf_type - computed: true, optional: false, required: false
  public get icfType() {
    return this.getStringAttribute('icf_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_idle - computed: true, optional: false, required: false
  public get maxIdle() {
    return this.getNumberAttribute('max_idle');
  }

  // max_objects - computed: true, optional: false, required: false
  public get maxObjects() {
    return this.getNumberAttribute('max_objects');
  }

  // max_wait - computed: true, optional: false, required: false
  public get maxWait() {
    return this.getNumberAttribute('max_wait');
  }

  // min_evictable_idle_time_millis - computed: true, optional: false, required: false
  public get minEvictableIdleTimeMillis() {
    return this.getNumberAttribute('min_evictable_idle_time_millis');
  }

  // min_idle - computed: true, optional: false, required: false
  public get minIdle() {
    return this.getNumberAttribute('min_idle');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // well_known_id - computed: true, optional: false, required: false
  public get wellKnownId() {
    return this.getStringAttribute('well_known_id');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidential - computed: true, optional: false, required: false
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // help_message - computed: true, optional: false, required: false
  public get helpMessage() {
    return this.getStringAttribute('help_message');
  }

  // icf_type - computed: true, optional: false, required: false
  public get icfType() {
    return this.getStringAttribute('icf_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // well_known_id - computed: true, optional: false, required: false
  public get wellKnownId() {
    return this.getStringAttribute('well_known_id');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges | undefined) {
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // is_account_object_class - computed: true, optional: false, required: false
  public get isAccountObjectClass() {
    return this.getBooleanAttribute('is_account_object_class');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // access_token_expiry - computed: true, optional: false, required: false
  public get accessTokenExpiry() {
    return this.getStringAttribute('access_token_expiry');
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_form_visible - computed: true, optional: false, required: false
  public get accountFormVisible() {
    return this.getBooleanAttribute('account_form_visible');
  }

  // admin_consent_granted - computed: true, optional: false, required: false
  public get adminConsentGranted() {
    return this.getBooleanAttribute('admin_consent_granted');
  }

  // bundle_configuration_properties - computed: true, optional: false, required: false
  private _bundleConfigurationProperties = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesList(this, "bundle_configuration_properties", false);
  public get bundleConfigurationProperties() {
    return this._bundleConfigurationProperties;
  }

  // bundle_pool_configuration - computed: true, optional: false, required: false
  private _bundlePoolConfiguration = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationList(this, "bundle_pool_configuration", false);
  public get bundlePoolConfiguration() {
    return this._bundlePoolConfiguration;
  }

  // can_be_authoritative - computed: true, optional: false, required: false
  public get canBeAuthoritative() {
    return this.getBooleanAttribute('can_be_authoritative');
  }

  // connected - computed: true, optional: false, required: false
  public get connected() {
    return this.getBooleanAttribute('connected');
  }

  // connector_bundle - computed: true, optional: false, required: false
  private _connectorBundle = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleList(this, "connector_bundle", false);
  public get connectorBundle() {
    return this._connectorBundle;
  }

  // enable_auth_sync_new_user_notification - computed: true, optional: false, required: false
  public get enableAuthSyncNewUserNotification() {
    return this.getBooleanAttribute('enable_auth_sync_new_user_notification');
  }

  // enable_sync - computed: true, optional: false, required: false
  public get enableSync() {
    return this.getBooleanAttribute('enable_sync');
  }

  // enable_sync_summary_report_notification - computed: true, optional: false, required: false
  public get enableSyncSummaryReportNotification() {
    return this.getBooleanAttribute('enable_sync_summary_report_notification');
  }

  // flat_file_bundle_configuration_properties - computed: true, optional: false, required: false
  private _flatFileBundleConfigurationProperties = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesList(this, "flat_file_bundle_configuration_properties", false);
  public get flatFileBundleConfigurationProperties() {
    return this._flatFileBundleConfigurationProperties;
  }

  // flat_file_connector_bundle - computed: true, optional: false, required: false
  private _flatFileConnectorBundle = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleList(this, "flat_file_connector_bundle", false);
  public get flatFileConnectorBundle() {
    return this._flatFileConnectorBundle;
  }

  // identity_bridges - computed: true, optional: false, required: false
  private _identityBridges = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesList(this, "identity_bridges", false);
  public get identityBridges() {
    return this._identityBridges;
  }

  // is_authoritative - computed: true, optional: false, required: false
  public get isAuthoritative() {
    return this.getBooleanAttribute('is_authoritative');
  }

  // is_directory - computed: true, optional: false, required: false
  public get isDirectory() {
    return this.getBooleanAttribute('is_directory');
  }

  // is_on_premise_app - computed: true, optional: false, required: false
  public get isOnPremiseApp() {
    return this.getBooleanAttribute('is_on_premise_app');
  }

  // is_schema_customization_supported - computed: true, optional: false, required: false
  public get isSchemaCustomizationSupported() {
    return this.getBooleanAttribute('is_schema_customization_supported');
  }

  // is_schema_discovery_supported - computed: true, optional: false, required: false
  public get isSchemaDiscoverySupported() {
    return this.getBooleanAttribute('is_schema_discovery_supported');
  }

  // is_three_legged_oauth_enabled - computed: true, optional: false, required: false
  public get isThreeLeggedOauthEnabled() {
    return this.getBooleanAttribute('is_three_legged_oauth_enabled');
  }

  // is_two_legged_oauth_enabled - computed: true, optional: false, required: false
  public get isTwoLeggedOauthEnabled() {
    return this.getBooleanAttribute('is_two_legged_oauth_enabled');
  }

  // object_classes - computed: true, optional: false, required: false
  private _objectClasses = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesList(this, "object_classes", false);
  public get objectClasses() {
    return this._objectClasses;
  }

  // sync_config_last_modified - computed: true, optional: false, required: false
  public get syncConfigLastModified() {
    return this.getStringAttribute('sync_config_last_modified');
  }

  // three_legged_oauth_credential - computed: true, optional: false, required: false
  private _threeLeggedOauthCredential = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialList(this, "three_legged_oauth_credential", false);
  public get threeLeggedOauthCredential() {
    return this._threeLeggedOauthCredential;
  }

  // three_legged_oauth_provider_name - computed: true, optional: false, required: false
  public get threeLeggedOauthProviderName() {
    return this.getStringAttribute('three_legged_oauth_provider_name');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multicloud_platform_url - computed: true, optional: false, required: false
  public get multicloudPlatformUrl() {
    return this.getStringAttribute('multicloud_platform_url');
  }

  // multicloud_service_type - computed: true, optional: false, required: false
  public get multicloudServiceType() {
    return this.getStringAttribute('multicloud_service_type');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_federation_mode - computed: true, optional: false, required: false
  public get currentFederationMode() {
    return this.getStringAttribute('current_federation_mode');
  }

  // current_synchronization_mode - computed: true, optional: false, required: false
  public get currentSynchronizationMode() {
    return this.getStringAttribute('current_synchronization_mode');
  }

  // enabling_next_fed_sync_modes - computed: true, optional: false, required: false
  public get enablingNextFedSyncModes() {
    return this.getBooleanAttribute('enabling_next_fed_sync_modes');
  }

  // next_federation_mode - computed: true, optional: false, required: false
  public get nextFederationMode() {
    return this.getStringAttribute('next_federation_mode');
  }

  // next_synchronization_mode - computed: true, optional: false, required: false
  public get nextSynchronizationMode() {
    return this.getStringAttribute('next_synchronization_mode');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_instance_identifier - computed: true, optional: false, required: false
  public get serviceInstanceIdentifier() {
    return this.getStringAttribute('service_instance_identifier');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capture_client_ip - computed: true, optional: false, required: false
  public get captureClientIp() {
    return this.getBooleanAttribute('capture_client_ip');
  }

  // client_ip - computed: true, optional: false, required: false
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }

  // country_code_response_attribute_id - computed: true, optional: false, required: false
  public get countryCodeResponseAttributeId() {
    return this.getStringAttribute('country_code_response_attribute_id');
  }

  // end_user_ip_attribute - computed: true, optional: false, required: false
  public get endUserIpAttribute() {
    return this.getStringAttribute('end_user_ip_attribute');
  }

  // group_membership_radius_attribute - computed: true, optional: false, required: false
  public get groupMembershipRadiusAttribute() {
    return this.getStringAttribute('group_membership_radius_attribute');
  }

  // group_membership_to_return - computed: true, optional: false, required: false
  private _groupMembershipToReturn = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnList(this, "group_membership_to_return", false);
  public get groupMembershipToReturn() {
    return this._groupMembershipToReturn;
  }

  // group_name_format - computed: true, optional: false, required: false
  public get groupNameFormat() {
    return this.getStringAttribute('group_name_format');
  }

  // include_group_in_response - computed: true, optional: false, required: false
  public get includeGroupInResponse() {
    return this.getBooleanAttribute('include_group_in_response');
  }

  // password_and_otp_together - computed: true, optional: false, required: false
  public get passwordAndOtpTogether() {
    return this.getBooleanAttribute('password_and_otp_together');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // radius_vendor_specific_id - computed: true, optional: false, required: false
  public get radiusVendorSpecificId() {
    return this.getStringAttribute('radius_vendor_specific_id');
  }

  // response_format - computed: true, optional: false, required: false
  public get responseFormat() {
    return this.getStringAttribute('response_format');
  }

  // response_format_delimiter - computed: true, optional: false, required: false
  public get responseFormatDelimiter() {
    return this.getStringAttribute('response_format_delimiter');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // type_of_radius_app - computed: true, optional: false, required: false
  public get typeOfRadiusApp() {
    return this.getStringAttribute('type_of_radius_app');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // requestable - computed: true, optional: false, required: false
  public get requestable() {
    return this.getBooleanAttribute('requestable');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // user_store_attribute_name - computed: true, optional: false, required: false
  public get userStoreAttributeName() {
    return this.getStringAttribute('user_store_attribute_name');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assertion_consumer_url - computed: true, optional: false, required: false
  public get assertionConsumerUrl() {
    return this.getStringAttribute('assertion_consumer_url');
  }

  // encrypt_assertion - computed: true, optional: false, required: false
  public get encryptAssertion() {
    return this.getBooleanAttribute('encrypt_assertion');
  }

  // encryption_algorithm - computed: true, optional: false, required: false
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }

  // encryption_certificate - computed: true, optional: false, required: false
  public get encryptionCertificate() {
    return this.getStringAttribute('encryption_certificate');
  }

  // federation_protocol - computed: true, optional: false, required: false
  public get federationProtocol() {
    return this.getStringAttribute('federation_protocol');
  }

  // group_assertion_attributes - computed: true, optional: false, required: false
  private _groupAssertionAttributes = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesList(this, "group_assertion_attributes", false);
  public get groupAssertionAttributes() {
    return this._groupAssertionAttributes;
  }

  // hok_acs_url - computed: true, optional: false, required: false
  public get hokAcsUrl() {
    return this.getStringAttribute('hok_acs_url');
  }

  // hok_required - computed: true, optional: false, required: false
  public get hokRequired() {
    return this.getBooleanAttribute('hok_required');
  }

  // include_signing_cert_in_signature - computed: true, optional: false, required: false
  public get includeSigningCertInSignature() {
    return this.getBooleanAttribute('include_signing_cert_in_signature');
  }

  // key_encryption_algorithm - computed: true, optional: false, required: false
  public get keyEncryptionAlgorithm() {
    return this.getStringAttribute('key_encryption_algorithm');
  }

  // last_notification_sent_time - computed: true, optional: false, required: false
  public get lastNotificationSentTime() {
    return this.getStringAttribute('last_notification_sent_time');
  }

  // logout_binding - computed: true, optional: false, required: false
  public get logoutBinding() {
    return this.getStringAttribute('logout_binding');
  }

  // logout_enabled - computed: true, optional: false, required: false
  public get logoutEnabled() {
    return this.getBooleanAttribute('logout_enabled');
  }

  // logout_request_url - computed: true, optional: false, required: false
  public get logoutRequestUrl() {
    return this.getStringAttribute('logout_request_url');
  }

  // logout_response_url - computed: true, optional: false, required: false
  public get logoutResponseUrl() {
    return this.getStringAttribute('logout_response_url');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // name_id_format - computed: true, optional: false, required: false
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }

  // name_id_userstore_attribute - computed: true, optional: false, required: false
  public get nameIdUserstoreAttribute() {
    return this.getStringAttribute('name_id_userstore_attribute');
  }

  // outbound_assertion_attributes - computed: true, optional: false, required: false
  private _outboundAssertionAttributes = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesList(this, "outbound_assertion_attributes", false);
  public get outboundAssertionAttributes() {
    return this._outboundAssertionAttributes;
  }

  // partner_provider_id - computed: true, optional: false, required: false
  public get partnerProviderId() {
    return this.getStringAttribute('partner_provider_id');
  }

  // partner_provider_pattern - computed: true, optional: false, required: false
  public get partnerProviderPattern() {
    return this.getStringAttribute('partner_provider_pattern');
  }

  // sign_response_or_assertion - computed: true, optional: false, required: false
  public get signResponseOrAssertion() {
    return this.getStringAttribute('sign_response_or_assertion');
  }

  // signature_hash_algorithm - computed: true, optional: false, required: false
  public get signatureHashAlgorithm() {
    return this.getStringAttribute('signature_hash_algorithm');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }

  // succinct_id - computed: true, optional: false, required: false
  public get succinctId() {
    return this.getStringAttribute('succinct_id');
  }

  // tenant_provider_id - computed: true, optional: false, required: false
  public get tenantProviderId() {
    return this.getStringAttribute('tenant_provider_id');
  }

  // user_assertion_attributes - computed: true, optional: false, required: false
  private _userAssertionAttributes = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesList(this, "user_assertion_attributes", false);
  public get userAssertionAttributes() {
    return this._userAssertionAttributes;
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp {
}

export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppToTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_ref - computed: true, optional: false, required: false
  public get resourceRef() {
    return this.getBooleanAttribute('resource_ref');
  }

  // web_tier_policy_az_control - computed: true, optional: false, required: false
  public get webTierPolicyAzControl() {
    return this.getStringAttribute('web_tier_policy_az_control');
  }

  // web_tier_policy_json - computed: true, optional: false, required: false
  public get webTierPolicyJson() {
    return this.getStringAttribute('web_tier_policy_json');
  }
}

export class DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppOutputReference {
    return new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsAppsUserRoles {
}

export function dataOciIdentityDomainsAppsAppsUserRolesToTerraform(struct?: DataOciIdentityDomainsAppsAppsUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsUserRolesToHclTerraform(struct?: DataOciIdentityDomainsAppsAppsUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsUserRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsAppsUserRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsAppsUserRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciIdentityDomainsAppsAppsUserRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsUserRolesOutputReference {
    return new DataOciIdentityDomainsAppsAppsUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsAppsApps {
}

export function dataOciIdentityDomainsAppsAppsToTerraform(struct?: DataOciIdentityDomainsAppsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsAppsAppsToHclTerraform(struct?: DataOciIdentityDomainsAppsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsAppsAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsAppsApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsAppsApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token_expiry - computed: true, optional: false, required: false
  public get accessTokenExpiry() {
    return this.getNumberAttribute('access_token_expiry');
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataOciIdentityDomainsAppsAppsAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // admin_roles - computed: true, optional: false, required: false
  private _adminRoles = new DataOciIdentityDomainsAppsAppsAdminRolesList(this, "admin_roles", false);
  public get adminRoles() {
    return this._adminRoles;
  }

  // alias_apps - computed: true, optional: false, required: false
  private _aliasApps = new DataOciIdentityDomainsAppsAppsAliasAppsList(this, "alias_apps", false);
  public get aliasApps() {
    return this._aliasApps;
  }

  // all_url_schemes_allowed - computed: true, optional: false, required: false
  public get allUrlSchemesAllowed() {
    return this.getBooleanAttribute('all_url_schemes_allowed');
  }

  // allow_access_control - computed: true, optional: false, required: false
  public get allowAccessControl() {
    return this.getBooleanAttribute('allow_access_control');
  }

  // allow_offline - computed: true, optional: false, required: false
  public get allowOffline() {
    return this.getBooleanAttribute('allow_offline');
  }

  // allowed_grants - computed: true, optional: false, required: false
  public get allowedGrants() {
    return this.getListAttribute('allowed_grants');
  }

  // allowed_operations - computed: true, optional: false, required: false
  public get allowedOperations() {
    return this.getListAttribute('allowed_operations');
  }

  // allowed_scopes - computed: true, optional: false, required: false
  private _allowedScopes = new DataOciIdentityDomainsAppsAppsAllowedScopesList(this, "allowed_scopes", false);
  public get allowedScopes() {
    return this._allowedScopes;
  }

  // allowed_tags - computed: true, optional: false, required: false
  private _allowedTags = new DataOciIdentityDomainsAppsAppsAllowedTagsList(this, "allowed_tags", false);
  public get allowedTags() {
    return this._allowedTags;
  }

  // app_icon - computed: true, optional: false, required: false
  public get appIcon() {
    return this.getStringAttribute('app_icon');
  }

  // app_signon_policy - computed: true, optional: false, required: false
  private _appSignonPolicy = new DataOciIdentityDomainsAppsAppsAppSignonPolicyList(this, "app_signon_policy", false);
  public get appSignonPolicy() {
    return this._appSignonPolicy;
  }

  // app_thumbnail - computed: true, optional: false, required: false
  public get appThumbnail() {
    return this.getStringAttribute('app_thumbnail');
  }

  // apps_network_perimeters - computed: true, optional: false, required: false
  private _appsNetworkPerimeters = new DataOciIdentityDomainsAppsAppsAppsNetworkPerimetersList(this, "apps_network_perimeters", false);
  public get appsNetworkPerimeters() {
    return this._appsNetworkPerimeters;
  }

  // as_opc_service - computed: true, optional: false, required: false
  private _asOpcService = new DataOciIdentityDomainsAppsAppsAsOpcServiceList(this, "as_opc_service", false);
  public get asOpcService() {
    return this._asOpcService;
  }

  // attr_rendering_metadata - computed: true, optional: false, required: false
  private _attrRenderingMetadata = new DataOciIdentityDomainsAppsAppsAttrRenderingMetadataList(this, "attr_rendering_metadata", false);
  public get attrRenderingMetadata() {
    return this._attrRenderingMetadata;
  }

  // attribute_sets - computed: true, optional: false, required: false
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }

  // based_on_template - computed: true, optional: false, required: false
  private _basedOnTemplate = new DataOciIdentityDomainsAppsAppsBasedOnTemplateList(this, "based_on_template", false);
  public get basedOnTemplate() {
    return this._basedOnTemplate;
  }

  // bypass_consent - computed: true, optional: false, required: false
  public get bypassConsent() {
    return this.getBooleanAttribute('bypass_consent');
  }

  // callback_service_url - computed: true, optional: false, required: false
  public get callbackServiceUrl() {
    return this.getStringAttribute('callback_service_url');
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataOciIdentityDomainsAppsAppsCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // client_ip_checking - computed: true, optional: false, required: false
  public get clientIpChecking() {
    return this.getStringAttribute('client_ip_checking');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_type - computed: true, optional: false, required: false
  public get clientType() {
    return this.getStringAttribute('client_type');
  }

  // cloud_control_properties - computed: true, optional: false, required: false
  private _cloudControlProperties = new DataOciIdentityDomainsAppsAppsCloudControlPropertiesList(this, "cloud_control_properties", false);
  public get cloudControlProperties() {
    return this._cloudControlProperties;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // contact_email_address - computed: true, optional: false, required: false
  public get contactEmailAddress() {
    return this.getStringAttribute('contact_email_address');
  }

  // delegated_service_names - computed: true, optional: false, required: false
  public get delegatedServiceNames() {
    return this.getListAttribute('delegated_service_names');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_kmsi_token_authentication - computed: true, optional: false, required: false
  public get disableKmsiTokenAuthentication() {
    return this.getBooleanAttribute('disable_kmsi_token_authentication');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // editable_attributes - computed: true, optional: false, required: false
  private _editableAttributes = new DataOciIdentityDomainsAppsAppsEditableAttributesList(this, "editable_attributes", false);
  public get editableAttributes() {
    return this._editableAttributes;
  }

  // error_page_url - computed: true, optional: false, required: false
  public get errorPageUrl() {
    return this.getStringAttribute('error_page_url');
  }

  // force_delete - computed: true, optional: false, required: false
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }

  // granted_app_roles - computed: true, optional: false, required: false
  private _grantedAppRoles = new DataOciIdentityDomainsAppsAppsGrantedAppRolesList(this, "granted_app_roles", false);
  public get grantedAppRoles() {
    return this._grantedAppRoles;
  }

  // grants - computed: true, optional: false, required: false
  private _grants = new DataOciIdentityDomainsAppsAppsGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }

  // hashed_client_secret - computed: true, optional: false, required: false
  public get hashedClientSecret() {
    return this.getStringAttribute('hashed_client_secret');
  }

  // home_page_url - computed: true, optional: false, required: false
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_enc_algo - computed: true, optional: false, required: false
  public get idTokenEncAlgo() {
    return this.getStringAttribute('id_token_enc_algo');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsAppsAppsIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: true, optional: false, required: false
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsAppsAppsIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // identity_providers - computed: true, optional: false, required: false
  private _identityProviders = new DataOciIdentityDomainsAppsAppsIdentityProvidersList(this, "identity_providers", false);
  public get identityProviders() {
    return this._identityProviders;
  }

  // idp_policy - computed: true, optional: false, required: false
  private _idpPolicy = new DataOciIdentityDomainsAppsAppsIdpPolicyList(this, "idp_policy", false);
  public get idpPolicy() {
    return this._idpPolicy;
  }

  // infrastructure - computed: true, optional: false, required: false
  public get infrastructure() {
    return this.getBooleanAttribute('infrastructure');
  }

  // is_alias_app - computed: true, optional: false, required: false
  public get isAliasApp() {
    return this.getBooleanAttribute('is_alias_app');
  }

  // is_database_service - computed: true, optional: false, required: false
  public get isDatabaseService() {
    return this.getBooleanAttribute('is_database_service');
  }

  // is_enterprise_app - computed: true, optional: false, required: false
  public get isEnterpriseApp() {
    return this.getBooleanAttribute('is_enterprise_app');
  }

  // is_form_fill - computed: true, optional: false, required: false
  public get isFormFill() {
    return this.getBooleanAttribute('is_form_fill');
  }

  // is_kerberos_realm - computed: true, optional: false, required: false
  public get isKerberosRealm() {
    return this.getBooleanAttribute('is_kerberos_realm');
  }

  // is_login_target - computed: true, optional: false, required: false
  public get isLoginTarget() {
    return this.getBooleanAttribute('is_login_target');
  }

  // is_managed_app - computed: true, optional: false, required: false
  public get isManagedApp() {
    return this.getBooleanAttribute('is_managed_app');
  }

  // is_mobile_target - computed: true, optional: false, required: false
  public get isMobileTarget() {
    return this.getBooleanAttribute('is_mobile_target');
  }

  // is_multicloud_service_app - computed: true, optional: false, required: false
  public get isMulticloudServiceApp() {
    return this.getBooleanAttribute('is_multicloud_service_app');
  }

  // is_oauth_client - computed: true, optional: false, required: false
  public get isOauthClient() {
    return this.getBooleanAttribute('is_oauth_client');
  }

  // is_oauth_resource - computed: true, optional: false, required: false
  public get isOauthResource() {
    return this.getBooleanAttribute('is_oauth_resource');
  }

  // is_obligation_capable - computed: true, optional: false, required: false
  public get isObligationCapable() {
    return this.getBooleanAttribute('is_obligation_capable');
  }

  // is_opc_service - computed: true, optional: false, required: false
  public get isOpcService() {
    return this.getBooleanAttribute('is_opc_service');
  }

  // is_radius_app - computed: true, optional: false, required: false
  public get isRadiusApp() {
    return this.getBooleanAttribute('is_radius_app');
  }

  // is_saml_service_provider - computed: true, optional: false, required: false
  public get isSamlServiceProvider() {
    return this.getBooleanAttribute('is_saml_service_provider');
  }

  // is_unmanaged_app - computed: true, optional: false, required: false
  public get isUnmanagedApp() {
    return this.getBooleanAttribute('is_unmanaged_app');
  }

  // is_web_tier_policy - computed: true, optional: false, required: false
  public get isWebTierPolicy() {
    return this.getBooleanAttribute('is_web_tier_policy');
  }

  // landing_page_url - computed: true, optional: false, required: false
  public get landingPageUrl() {
    return this.getStringAttribute('landing_page_url');
  }

  // linking_callback_url - computed: true, optional: false, required: false
  public get linkingCallbackUrl() {
    return this.getStringAttribute('linking_callback_url');
  }

  // login_mechanism - computed: true, optional: false, required: false
  public get loginMechanism() {
    return this.getStringAttribute('login_mechanism');
  }

  // login_page_url - computed: true, optional: false, required: false
  public get loginPageUrl() {
    return this.getStringAttribute('login_page_url');
  }

  // logout_page_url - computed: true, optional: false, required: false
  public get logoutPageUrl() {
    return this.getStringAttribute('logout_page_url');
  }

  // logout_uri - computed: true, optional: false, required: false
  public get logoutUri() {
    return this.getStringAttribute('logout_uri');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsAppsAppsMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // meter_as_opc_service - computed: true, optional: false, required: false
  public get meterAsOpcService() {
    return this.getBooleanAttribute('meter_as_opc_service');
  }

  // migrated - computed: true, optional: false, required: false
  public get migrated() {
    return this.getBooleanAttribute('migrated');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // post_logout_redirect_uris - computed: true, optional: false, required: false
  public get postLogoutRedirectUris() {
    return this.getListAttribute('post_logout_redirect_uris');
  }

  // privacy_policy_url - computed: true, optional: false, required: false
  public get privacyPolicyUrl() {
    return this.getStringAttribute('privacy_policy_url');
  }

  // product_logo_url - computed: true, optional: false, required: false
  public get productLogoUrl() {
    return this.getStringAttribute('product_logo_url');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // protectable_secondary_audiences - computed: true, optional: false, required: false
  private _protectableSecondaryAudiences = new DataOciIdentityDomainsAppsAppsProtectableSecondaryAudiencesList(this, "protectable_secondary_audiences", false);
  public get protectableSecondaryAudiences() {
    return this._protectableSecondaryAudiences;
  }

  // radius_policy - computed: true, optional: false, required: false
  private _radiusPolicy = new DataOciIdentityDomainsAppsAppsRadiusPolicyList(this, "radius_policy", false);
  public get radiusPolicy() {
    return this._radiusPolicy;
  }

  // ready_to_upgrade - computed: true, optional: false, required: false
  public get readyToUpgrade() {
    return this.getBooleanAttribute('ready_to_upgrade');
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }

  // refresh_token_expiry - computed: true, optional: false, required: false
  public get refreshTokenExpiry() {
    return this.getNumberAttribute('refresh_token_expiry');
  }

  // resource_type_schema_version - computed: true, optional: false, required: false
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }

  // saml_service_provider - computed: true, optional: false, required: false
  private _samlServiceProvider = new DataOciIdentityDomainsAppsAppsSamlServiceProviderList(this, "saml_service_provider", false);
  public get samlServiceProvider() {
    return this._samlServiceProvider;
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // scopes - computed: true, optional: false, required: false
  private _scopes = new DataOciIdentityDomainsAppsAppsScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
  }

  // secondary_audiences - computed: true, optional: false, required: false
  public get secondaryAudiences() {
    return this.getListAttribute('secondary_audiences');
  }

  // service_params - computed: true, optional: false, required: false
  private _serviceParams = new DataOciIdentityDomainsAppsAppsServiceParamsList(this, "service_params", false);
  public get serviceParams() {
    return this._serviceParams;
  }

  // service_type_urn - computed: true, optional: false, required: false
  public get serviceTypeUrn() {
    return this.getStringAttribute('service_type_urn');
  }

  // service_type_version - computed: true, optional: false, required: false
  public get serviceTypeVersion() {
    return this.getStringAttribute('service_type_version');
  }

  // show_in_my_apps - computed: true, optional: false, required: false
  public get showInMyApps() {
    return this.getBooleanAttribute('show_in_my_apps');
  }

  // signon_policy - computed: true, optional: false, required: false
  private _signonPolicy = new DataOciIdentityDomainsAppsAppsSignonPolicyList(this, "signon_policy", false);
  public get signonPolicy() {
    return this._signonPolicy;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsAppsAppsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // terms_of_service_url - computed: true, optional: false, required: false
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }

  // terms_of_use - computed: true, optional: false, required: false
  private _termsOfUse = new DataOciIdentityDomainsAppsAppsTermsOfUseList(this, "terms_of_use", false);
  public get termsOfUse() {
    return this._termsOfUse;
  }

  // trust_policies - computed: true, optional: false, required: false
  private _trustPolicies = new DataOciIdentityDomainsAppsAppsTrustPoliciesList(this, "trust_policies", false);
  public get trustPolicies() {
    return this._trustPolicies;
  }

  // trust_scope - computed: true, optional: false, required: false
  public get trustScope() {
    return this.getStringAttribute('trust_scope');
  }

  // urnietfparamsscimschemasoracleidcsextension_oci_tags - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionOciTags = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionOciTagsList(this, "urnietfparamsscimschemasoracleidcsextension_oci_tags", false);
  public get urnietfparamsscimschemasoracleidcsextensionOciTags() {
    return this._urnietfparamsscimschemasoracleidcsextensionOciTags;
  }

  // urnietfparamsscimschemasoracleidcsextensiondbcs_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbcsApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensiondbcsAppList(this, "urnietfparamsscimschemasoracleidcsextensiondbcs_app", false);
  public get urnietfparamsscimschemasoracleidcsextensiondbcsApp() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbcsApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionenterprise_app_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppList(this, "urnietfparamsscimschemasoracleidcsextensionenterprise_app_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionform_fill_app_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionformFillAppApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppAppList(this, "urnietfparamsscimschemasoracleidcsextensionform_fill_app_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionformFillAppApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionformFillAppApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateList(this, "urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template", false);
  public get urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate() {
    return this._urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate;
  }

  // urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppList(this, "urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionmanagedapp_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionmanagedappApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmanagedappAppList(this, "urnietfparamsscimschemasoracleidcsextensionmanagedapp_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionmanagedappApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionmanagedappApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppList(this, "urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionopc_service_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionopcServiceApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionopcServiceAppList(this, "urnietfparamsscimschemasoracleidcsextensionopc_service_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionopcServiceApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionopcServiceApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionradius_app_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionradiusAppApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionradiusAppAppList(this, "urnietfparamsscimschemasoracleidcsextensionradius_app_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionradiusAppApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionradiusAppApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionrequestable_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionrequestableApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionrequestableAppList(this, "urnietfparamsscimschemasoracleidcsextensionrequestable_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionrequestableApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionrequestableApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppList(this, "urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp;
  }

  // urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp = new DataOciIdentityDomainsAppsAppsUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppList(this, "urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app", false);
  public get urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp;
  }

  // user_roles - computed: true, optional: false, required: false
  private _userRoles = new DataOciIdentityDomainsAppsAppsUserRolesList(this, "user_roles", false);
  public get userRoles() {
    return this._userRoles;
  }
}

export class DataOciIdentityDomainsAppsAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsAppsAppsOutputReference {
    return new DataOciIdentityDomainsAppsAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps oci_identity_domains_apps}
*/
export class DataOciIdentityDomainsApps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_apps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsApps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsApps to import
  * @param importFromId The id of the existing DataOciIdentityDomainsApps that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsApps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_apps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/identity_domains_apps oci_identity_domains_apps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsAppsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsAppsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_apps',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appCount = config.appCount;
    this._appFilter = config.appFilter;
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._idcsEndpoint = config.idcsEndpoint;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._startIndex = config.startIndex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_count - computed: false, optional: true, required: false
  private _appCount?: number; 
  public get appCount() {
    return this.getNumberAttribute('app_count');
  }
  public set appCount(value: number) {
    this._appCount = value;
  }
  public resetAppCount() {
    this._appCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCountInput() {
    return this._appCount;
  }

  // app_filter - computed: false, optional: true, required: false
  private _appFilter?: string; 
  public get appFilter() {
    return this.getStringAttribute('app_filter');
  }
  public set appFilter(value: string) {
    this._appFilter = value;
  }
  public resetAppFilter() {
    this._appFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFilterInput() {
    return this._appFilter;
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new DataOciIdentityDomainsAppsAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // items_per_page - computed: true, optional: false, required: false
  public get itemsPerPage() {
    return this.getNumberAttribute('items_per_page');
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // start_index - computed: false, optional: true, required: false
  private _startIndex?: number; 
  public get startIndex() {
    return this.getNumberAttribute('start_index');
  }
  public set startIndex(value: number) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // total_results - computed: true, optional: false, required: false
  public get totalResults() {
    return this.getNumberAttribute('total_results');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_count: cdktf.numberToTerraform(this._appCount),
      app_filter: cdktf.stringToTerraform(this._appFilter),
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      start_index: cdktf.numberToTerraform(this._startIndex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_count: {
        value: cdktf.numberToHclTerraform(this._appCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      app_filter: {
        value: cdktf.stringToHclTerraform(this._appFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_index: {
        value: cdktf.numberToHclTerraform(this._startIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
