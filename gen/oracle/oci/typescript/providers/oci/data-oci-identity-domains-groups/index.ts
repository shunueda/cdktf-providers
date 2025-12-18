// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#attribute_sets DataOciIdentityDomainsGroups#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#attributes DataOciIdentityDomainsGroups#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#authorization DataOciIdentityDomainsGroups#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#compartment_id DataOciIdentityDomainsGroups#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#group_count DataOciIdentityDomainsGroups#group_count}
  */
  readonly groupCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#group_filter DataOciIdentityDomainsGroups#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#id DataOciIdentityDomainsGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#idcs_endpoint DataOciIdentityDomainsGroups#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#resource_type_schema_version DataOciIdentityDomainsGroups#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#sort_by DataOciIdentityDomainsGroups#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#sort_order DataOciIdentityDomainsGroups#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#start_index DataOciIdentityDomainsGroups#start_index}
  */
  readonly startIndex?: number;
}
export interface DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy {
}

export function dataOciIdentityDomainsGroupsGroupsIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsMembers {
}

export function dataOciIdentityDomainsGroupsGroupsMembersToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsMembersToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsMembers | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsMembersOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsMeta {
}

export function dataOciIdentityDomainsGroupsGroupsMetaToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsMetaToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsMeta | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsMetaOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsTags {
}

export function dataOciIdentityDomainsGroupsGroupsTagsToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsTagsToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsTags | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsTagsOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(this, "defined_tags", false);
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(this, "freeform_tags", false);
  public get freeformTags() {
    return this._freeformTags;
  }

  // tag_slug - computed: true, optional: false, required: false
  public get tagSlug() {
    return this.getStringAttribute('tag_slug');
  }
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_instance_id - computed: true, optional: false, required: false
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_level_schema - computed: true, optional: false, required: false
  public get domainLevelSchema() {
    return this.getStringAttribute('domain_level_schema');
  }

  // domain_level_schema_names - computed: true, optional: false, required: false
  private _domainLevelSchemaNames = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList(this, "domain_level_schema_names", false);
  public get domainLevelSchemaNames() {
    return this._domainLevelSchemaNames;
  }

  // instance_level_schema - computed: true, optional: false, required: false
  public get instanceLevelSchema() {
    return this.getStringAttribute('instance_level_schema');
  }

  // instance_level_schema_names - computed: true, optional: false, required: false
  private _instanceLevelSchemaNames = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList(this, "instance_level_schema_names", false);
  public get instanceLevelSchemaNames() {
    return this._instanceLevelSchemaNames;
  }
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // membership_rule - computed: true, optional: false, required: false
  public get membershipRule() {
    return this.getStringAttribute('membership_rule');
  }

  // membership_type - computed: true, optional: false, required: false
  public get membershipType() {
    return this.getStringAttribute('membership_type');
  }
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_roles - computed: true, optional: false, required: false
  private _appRoles = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList(this, "app_roles", false);
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
  private _grants = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }

  // owners - computed: true, optional: false, required: false
  private _owners = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList(this, "owners", false);
  public get owners() {
    return this._owners;
  }

  // password_policy - computed: true, optional: false, required: false
  private _passwordPolicy = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList(this, "password_policy", false);
  public get passwordPolicy() {
    return this._passwordPolicy;
  }

  // synced_from_app - computed: true, optional: false, required: false
  private _syncedFromApp = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList(this, "synced_from_app", false);
  public get syncedFromApp() {
    return this._syncedFromApp;
  }
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gid_number - computed: true, optional: false, required: false
  public get gidNumber() {
    return this.getNumberAttribute('gid_number');
  }
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup {
}

export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupToTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup | undefined) {
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

export class DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsGroupsGroups {
}

export function dataOciIdentityDomainsGroupsGroupsToTerraform(struct?: DataOciIdentityDomainsGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsGroupsGroupsToHclTerraform(struct?: DataOciIdentityDomainsGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsGroupsGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_sets - computed: true, optional: false, required: false
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
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

  // force_delete - computed: true, optional: false, required: false
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: true, optional: false, required: false
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
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
  private _members = new DataOciIdentityDomainsGroupsGroupsMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsGroupsGroupsMetaList(this, "meta", false);
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

  // resource_type_schema_version - computed: true, optional: false, required: false
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsGroupsGroupsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // urnietfparamsscimschemasoracleidcsextension_oci_tags - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionOciTags = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList(this, "urnietfparamsscimschemasoracleidcsextension_oci_tags", false);
  public get urnietfparamsscimschemasoracleidcsextensionOciTags() {
    return this._urnietfparamsscimschemasoracleidcsextensionOciTags;
  }

  // urnietfparamsscimschemasoracleidcsextensiondbcs_group - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbcsGroup = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList(this, "urnietfparamsscimschemasoracleidcsextensiondbcs_group", false);
  public get urnietfparamsscimschemasoracleidcsextensiondbcsGroup() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbcsGroup;
  }

  // urnietfparamsscimschemasoracleidcsextensiondynamic_group - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondynamicGroup = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList(this, "urnietfparamsscimschemasoracleidcsextensiondynamic_group", false);
  public get urnietfparamsscimschemasoracleidcsextensiondynamicGroup() {
    return this._urnietfparamsscimschemasoracleidcsextensiondynamicGroup;
  }

  // urnietfparamsscimschemasoracleidcsextensiongroup_group - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensiongroupGroup = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList(this, "urnietfparamsscimschemasoracleidcsextensiongroup_group", false);
  public get urnietfparamsscimschemasoracleidcsextensiongroupGroup() {
    return this._urnietfparamsscimschemasoracleidcsextensiongroupGroup;
  }

  // urnietfparamsscimschemasoracleidcsextensionposix_group - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionposixGroup = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList(this, "urnietfparamsscimschemasoracleidcsextensionposix_group", false);
  public get urnietfparamsscimschemasoracleidcsextensionposixGroup() {
    return this._urnietfparamsscimschemasoracleidcsextensionposixGroup;
  }

  // urnietfparamsscimschemasoracleidcsextensionrequestable_group - computed: true, optional: false, required: false
  private _urnietfparamsscimschemasoracleidcsextensionrequestableGroup = new DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList(this, "urnietfparamsscimschemasoracleidcsextensionrequestable_group", false);
  public get urnietfparamsscimschemasoracleidcsextensionrequestableGroup() {
    return this._urnietfparamsscimschemasoracleidcsextensionrequestableGroup;
  }
}

export class DataOciIdentityDomainsGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsGroupsGroupsOutputReference {
    return new DataOciIdentityDomainsGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups oci_identity_domains_groups}
*/
export class DataOciIdentityDomainsGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsGroups to import
  * @param importFromId The id of the existing DataOciIdentityDomainsGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_domains_groups oci_identity_domains_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_groups',
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
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._compartmentId = config.compartmentId;
    this._groupCount = config.groupCount;
    this._groupFilter = config.groupFilter;
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

  // group_count - computed: false, optional: true, required: false
  private _groupCount?: number; 
  public get groupCount() {
    return this.getNumberAttribute('group_count');
  }
  public set groupCount(value: number) {
    this._groupCount = value;
  }
  public resetGroupCount() {
    this._groupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCountInput() {
    return this._groupCount;
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

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOciIdentityDomainsGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      group_count: cdktf.numberToTerraform(this._groupCount),
      group_filter: cdktf.stringToTerraform(this._groupFilter),
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
      group_count: {
        value: cdktf.numberToHclTerraform(this._groupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_filter: {
        value: cdktf.stringToHclTerraform(this._groupFilter),
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
