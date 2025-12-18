// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsMyRequestableGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#authorization DataOciIdentityDomainsMyRequestableGroups#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#compartment_id DataOciIdentityDomainsMyRequestableGroups#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#id DataOciIdentityDomainsMyRequestableGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#idcs_endpoint DataOciIdentityDomainsMyRequestableGroups#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_count DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_count}
  */
  readonly myRequestableGroupCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_filter DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_filter}
  */
  readonly myRequestableGroupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#resource_type_schema_version DataOciIdentityDomainsMyRequestableGroups#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#sort_by DataOciIdentityDomainsMyRequestableGroups#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#sort_order DataOciIdentityDomainsMyRequestableGroups#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#start_index DataOciIdentityDomainsMyRequestableGroups#start_index}
  */
  readonly startIndex?: number;
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date_added - computed: true, optional: false, required: false
  public get dateAdded() {
    return this.getStringAttribute('date_added');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // membership_ocid - computed: true, optional: false, required: false
  public get membershipOcid() {
    return this.getStringAttribute('membership_ocid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta | undefined) {
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags | undefined) {
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles | undefined) {
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // grant_mechanism - computed: true, optional: false, required: false
  public get grantMechanism() {
    return this.getStringAttribute('grant_mechanism');
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners | undefined) {
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
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy | undefined) {
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp | undefined) {
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
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_roles - computed: true, optional: false, required: false
  private _appRoles = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList(this, "app_roles", false);
  public get appRoles() {
    return this._appRoles;
  }

  // creation_mechanism - computed: true, optional: false, required: false
  public get creationMechanism() {
    return this.getStringAttribute('creation_mechanism');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // grants - computed: true, optional: false, required: false
  private _grants = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }

  // owners - computed: true, optional: false, required: false
  private _owners = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList(this, "owners", false);
  public get owners() {
    return this._owners;
  }

  // password_policy - computed: true, optional: false, required: false
  private _passwordPolicy = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList(this, "password_policy", false);
  public get passwordPolicy() {
    return this._passwordPolicy;
  }

  // synced_from_app - computed: true, optional: false, required: false
  private _syncedFromApp = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList(this, "synced_from_app", false);
  public get syncedFromApp() {
    return this._syncedFromApp;
  }
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup | undefined) {
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

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups {
}

export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsToTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsToHclTerraform(struct?: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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

  // members - computed: true, optional: false, required: false
  private _members = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // non_unique_display_name - computed: true, optional: false, required: false
  public get nonUniqueDisplayName() {
    return this.getStringAttribute('non_unique_display_name');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // urnietfparamsscimschemasoracleidcsextensiongroup_group - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiongroupGroup = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList(this, "urnietfparamsscimschemasoracleidcsextensiongroup_group", false);
  public get urnietfparamsscimschemasoracleidcsextensiongroupGroup() {
    return this._urnietfparamsscimschemasoracleidcsextensiongroupGroup;
  }

  // urnietfparamsscimschemasoracleidcsextensionrequestable_group - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionrequestableGroup = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList(this, "urnietfparamsscimschemasoracleidcsextensionrequestable_group", false);
  public get urnietfparamsscimschemasoracleidcsextensionrequestableGroup() {
    return this._urnietfparamsscimschemasoracleidcsextensionrequestableGroup;
  }
}

export class DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference {
    return new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups oci_identity_domains_my_requestable_groups}
*/
export class DataOciIdentityDomainsMyRequestableGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_my_requestable_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsMyRequestableGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsMyRequestableGroups to import
  * @param importFromId The id of the existing DataOciIdentityDomainsMyRequestableGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsMyRequestableGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_my_requestable_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_my_requestable_groups oci_identity_domains_my_requestable_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsMyRequestableGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsMyRequestableGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_my_requestable_groups',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorization = config.authorization;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._idcsEndpoint = config.idcsEndpoint;
    this._myRequestableGroupCount = config.myRequestableGroupCount;
    this._myRequestableGroupFilter = config.myRequestableGroupFilter;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._startIndex = config.startIndex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // my_requestable_group_count - computed: false, optional: true, required: false
  private _myRequestableGroupCount?: number; 
  public get myRequestableGroupCount() {
    return this.getNumberAttribute('my_requestable_group_count');
  }
  public set myRequestableGroupCount(value: number) {
    this._myRequestableGroupCount = value;
  }
  public resetMyRequestableGroupCount() {
    this._myRequestableGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myRequestableGroupCountInput() {
    return this._myRequestableGroupCount;
  }

  // my_requestable_group_filter - computed: false, optional: true, required: false
  private _myRequestableGroupFilter?: string; 
  public get myRequestableGroupFilter() {
    return this.getStringAttribute('my_requestable_group_filter');
  }
  public set myRequestableGroupFilter(value: string) {
    this._myRequestableGroupFilter = value;
  }
  public resetMyRequestableGroupFilter() {
    this._myRequestableGroupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myRequestableGroupFilterInput() {
    return this._myRequestableGroupFilter;
  }

  // my_requestable_groups - computed: true, optional: false, required: false
  private _myRequestableGroups = new DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList(this, "my_requestable_groups", false);
  public get myRequestableGroups() {
    return this._myRequestableGroups;
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
      authorization: cdktf.stringToTerraform(this._authorization),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      my_requestable_group_count: cdktf.numberToTerraform(this._myRequestableGroupCount),
      my_requestable_group_filter: cdktf.stringToTerraform(this._myRequestableGroupFilter),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      start_index: cdktf.numberToTerraform(this._startIndex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      my_requestable_group_count: {
        value: cdktf.numberToHclTerraform(this._myRequestableGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      my_requestable_group_filter: {
        value: cdktf.stringToHclTerraform(this._myRequestableGroupFilter),
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
