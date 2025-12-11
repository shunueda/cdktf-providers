// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityDomainsResourceTypeSchemaAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}
  */
  readonly resourceTypeSchemaAttributeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}
  */
  readonly resourceTypeSchemaAttributeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}
  */
  readonly startIndex?: number;
}
export interface DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy {
}

export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByToTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByToHclTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy | undefined) {
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

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference {
    return new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy {
}

export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByToTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByToHclTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy | undefined) {
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

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference {
    return new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta {
}

export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaToTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaToHclTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta | undefined) {
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

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference {
    return new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags {
}

export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsToTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsToHclTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags | undefined) {
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

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference {
    return new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes {
}

export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesToTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesToHclTerraform(struct?: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical_values - computed: true, optional: false, required: false
  public get canonicalValues() {
    return this.getListAttribute('canonical_values');
  }

  // case_exact - computed: true, optional: false, required: false
  public get caseExact() {
    return this.getBooleanAttribute('case_exact');
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // end_user_mutability - computed: true, optional: false, required: false
  public get endUserMutability() {
    return this.getStringAttribute('end_user_mutability');
  }

  // end_user_mutability_allowed_values - computed: true, optional: false, required: false
  public get endUserMutabilityAllowedValues() {
    return this.getListAttribute('end_user_mutability_allowed_values');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_added_since_release_number - computed: true, optional: false, required: false
  public get idcsAddedSinceReleaseNumber() {
    return this.getStringAttribute('idcs_added_since_release_number');
  }

  // idcs_added_since_version - computed: true, optional: false, required: false
  public get idcsAddedSinceVersion() {
    return this.getNumberAttribute('idcs_added_since_version');
  }

  // idcs_attribute_cacheable - computed: true, optional: false, required: false
  public get idcsAttributeCacheable() {
    return this.getBooleanAttribute('idcs_attribute_cacheable');
  }

  // idcs_attribute_mappable - computed: true, optional: false, required: false
  public get idcsAttributeMappable() {
    return this.getBooleanAttribute('idcs_attribute_mappable');
  }

  // idcs_auditable - computed: true, optional: false, required: false
  public get idcsAuditable() {
    return this.getBooleanAttribute('idcs_auditable');
  }

  // idcs_auto_increment_seq_name - computed: true, optional: false, required: false
  public get idcsAutoIncrementSeqName() {
    return this.getStringAttribute('idcs_auto_increment_seq_name');
  }

  // idcs_canonical_value_source_filter - computed: true, optional: false, required: false
  public get idcsCanonicalValueSourceFilter() {
    return this.getStringAttribute('idcs_canonical_value_source_filter');
  }

  // idcs_canonical_value_source_resource_type - computed: true, optional: false, required: false
  public get idcsCanonicalValueSourceResourceType() {
    return this.getStringAttribute('idcs_canonical_value_source_resource_type');
  }

  // idcs_composite_key - computed: true, optional: false, required: false
  public get idcsCompositeKey() {
    return this.getListAttribute('idcs_composite_key');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_csv_column_header_name - computed: true, optional: false, required: false
  public get idcsCsvColumnHeaderName() {
    return this.getStringAttribute('idcs_csv_column_header_name');
  }

  // idcs_custom_attribute - computed: true, optional: false, required: false
  public get idcsCustomAttribute() {
    return this.getBooleanAttribute('idcs_custom_attribute');
  }

  // idcs_deprecated_since_release_number - computed: true, optional: false, required: false
  public get idcsDeprecatedSinceReleaseNumber() {
    return this.getStringAttribute('idcs_deprecated_since_release_number');
  }

  // idcs_deprecated_since_version - computed: true, optional: false, required: false
  public get idcsDeprecatedSinceVersion() {
    return this.getNumberAttribute('idcs_deprecated_since_version');
  }

  // idcs_display_name - computed: true, optional: false, required: false
  public get idcsDisplayName() {
    return this.getStringAttribute('idcs_display_name');
  }

  // idcs_display_name_message_id - computed: true, optional: false, required: false
  public get idcsDisplayNameMessageId() {
    return this.getStringAttribute('idcs_display_name_message_id');
  }

  // idcs_fetch_complex_attribute_values - computed: true, optional: false, required: false
  public get idcsFetchComplexAttributeValues() {
    return this.getBooleanAttribute('idcs_fetch_complex_attribute_values');
  }

  // idcs_from_target_mapper - computed: true, optional: false, required: false
  public get idcsFromTargetMapper() {
    return this.getStringAttribute('idcs_from_target_mapper');
  }

  // idcs_fully_qualified_name - computed: true, optional: false, required: false
  public get idcsFullyQualifiedName() {
    return this.getStringAttribute('idcs_fully_qualified_name');
  }

  // idcs_generated - computed: true, optional: false, required: false
  public get idcsGenerated() {
    return this.getBooleanAttribute('idcs_generated');
  }

  // idcs_icf_attribute_type - computed: true, optional: false, required: false
  public get idcsIcfAttributeType() {
    return this.getStringAttribute('idcs_icf_attribute_type');
  }

  // idcs_icf_bundle_attribute_name - computed: true, optional: false, required: false
  public get idcsIcfBundleAttributeName() {
    return this.getStringAttribute('idcs_icf_bundle_attribute_name');
  }

  // idcs_icf_required - computed: true, optional: false, required: false
  public get idcsIcfRequired() {
    return this.getBooleanAttribute('idcs_icf_required');
  }

  // idcs_indirect_ref_resource_attributes - computed: true, optional: false, required: false
  public get idcsIndirectRefResourceAttributes() {
    return this.getListAttribute('idcs_indirect_ref_resource_attributes');
  }

  // idcs_internal - computed: true, optional: false, required: false
  public get idcsInternal() {
    return this.getBooleanAttribute('idcs_internal');
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_max_length - computed: true, optional: false, required: false
  public get idcsMaxLength() {
    return this.getNumberAttribute('idcs_max_length');
  }

  // idcs_max_value - computed: true, optional: false, required: false
  public get idcsMaxValue() {
    return this.getNumberAttribute('idcs_max_value');
  }

  // idcs_min_length - computed: true, optional: false, required: false
  public get idcsMinLength() {
    return this.getNumberAttribute('idcs_min_length');
  }

  // idcs_min_value - computed: true, optional: false, required: false
  public get idcsMinValue() {
    return this.getNumberAttribute('idcs_min_value');
  }

  // idcs_multi_language - computed: true, optional: false, required: false
  public get idcsMultiLanguage() {
    return this.getBooleanAttribute('idcs_multi_language');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // idcs_ref_resource_attribute - computed: true, optional: false, required: false
  public get idcsRefResourceAttribute() {
    return this.getStringAttribute('idcs_ref_resource_attribute');
  }

  // idcs_ref_resource_attributes - computed: true, optional: false, required: false
  public get idcsRefResourceAttributes() {
    return this.getListAttribute('idcs_ref_resource_attributes');
  }

  // idcs_schema_urn - computed: true, optional: false, required: false
  public get idcsSchemaUrn() {
    return this.getStringAttribute('idcs_schema_urn');
  }

  // idcs_scim_compliant - computed: true, optional: false, required: false
  public get idcsScimCompliant() {
    return this.getBooleanAttribute('idcs_scim_compliant');
  }

  // idcs_searchable - computed: true, optional: false, required: false
  public get idcsSearchable() {
    return this.getBooleanAttribute('idcs_searchable');
  }

  // idcs_sensitive - computed: true, optional: false, required: false
  public get idcsSensitive() {
    return this.getStringAttribute('idcs_sensitive');
  }

  // idcs_target_attribute_name - computed: true, optional: false, required: false
  public get idcsTargetAttributeName() {
    return this.getStringAttribute('idcs_target_attribute_name');
  }

  // idcs_target_attribute_name_to_migrate_from - computed: true, optional: false, required: false
  public get idcsTargetAttributeNameToMigrateFrom() {
    return this.getStringAttribute('idcs_target_attribute_name_to_migrate_from');
  }

  // idcs_target_norm_attribute_name - computed: true, optional: false, required: false
  public get idcsTargetNormAttributeName() {
    return this.getStringAttribute('idcs_target_norm_attribute_name');
  }

  // idcs_target_unique_constraint_name - computed: true, optional: false, required: false
  public get idcsTargetUniqueConstraintName() {
    return this.getStringAttribute('idcs_target_unique_constraint_name');
  }

  // idcs_to_target_mapper - computed: true, optional: false, required: false
  public get idcsToTargetMapper() {
    return this.getStringAttribute('idcs_to_target_mapper');
  }

  // idcs_trim_string_value - computed: true, optional: false, required: false
  public get idcsTrimStringValue() {
    return this.getBooleanAttribute('idcs_trim_string_value');
  }

  // idcs_validate_reference - computed: true, optional: false, required: false
  public get idcsValidateReference() {
    return this.getBooleanAttribute('idcs_validate_reference');
  }

  // idcs_value_persisted - computed: true, optional: false, required: false
  public get idcsValuePersisted() {
    return this.getBooleanAttribute('idcs_value_persisted');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // multi_valued - computed: true, optional: false, required: false
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }

  // mutability - computed: true, optional: false, required: false
  public get mutability() {
    return this.getStringAttribute('mutability');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // reference_types - computed: true, optional: false, required: false
  public get referenceTypes() {
    return this.getListAttribute('reference_types');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // returned - computed: true, optional: false, required: false
  public get returned() {
    return this.getStringAttribute('returned');
  }

  // schemas - computed: true, optional: false, required: false
  public get schemas() {
    return this.getListAttribute('schemas');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uniqueness - computed: true, optional: false, required: false
  public get uniqueness() {
    return this.getStringAttribute('uniqueness');
  }
}

export class DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference {
    return new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes oci_identity_domains_resource_type_schema_attributes}
*/
export class DataOciIdentityDomainsResourceTypeSchemaAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_resource_type_schema_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityDomainsResourceTypeSchemaAttributes to import
  * @param importFromId The id of the existing DataOciIdentityDomainsResourceTypeSchemaAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityDomainsResourceTypeSchemaAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_resource_type_schema_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/identity_domains_resource_type_schema_attributes oci_identity_domains_resource_type_schema_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityDomainsResourceTypeSchemaAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityDomainsResourceTypeSchemaAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_resource_type_schema_attributes',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._id = config.id;
    this._idcsEndpoint = config.idcsEndpoint;
    this._resourceTypeSchemaAttributeCount = config.resourceTypeSchemaAttributeCount;
    this._resourceTypeSchemaAttributeFilter = config.resourceTypeSchemaAttributeFilter;
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

  // resource_type_schema_attribute_count - computed: false, optional: true, required: false
  private _resourceTypeSchemaAttributeCount?: number; 
  public get resourceTypeSchemaAttributeCount() {
    return this.getNumberAttribute('resource_type_schema_attribute_count');
  }
  public set resourceTypeSchemaAttributeCount(value: number) {
    this._resourceTypeSchemaAttributeCount = value;
  }
  public resetResourceTypeSchemaAttributeCount() {
    this._resourceTypeSchemaAttributeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaAttributeCountInput() {
    return this._resourceTypeSchemaAttributeCount;
  }

  // resource_type_schema_attribute_filter - computed: false, optional: true, required: false
  private _resourceTypeSchemaAttributeFilter?: string; 
  public get resourceTypeSchemaAttributeFilter() {
    return this.getStringAttribute('resource_type_schema_attribute_filter');
  }
  public set resourceTypeSchemaAttributeFilter(value: string) {
    this._resourceTypeSchemaAttributeFilter = value;
  }
  public resetResourceTypeSchemaAttributeFilter() {
    this._resourceTypeSchemaAttributeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaAttributeFilterInput() {
    return this._resourceTypeSchemaAttributeFilter;
  }

  // resource_type_schema_attributes - computed: true, optional: false, required: false
  private _resourceTypeSchemaAttributes = new DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList(this, "resource_type_schema_attributes", false);
  public get resourceTypeSchemaAttributes() {
    return this._resourceTypeSchemaAttributes;
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
      id: cdktf.stringToTerraform(this._id),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      resource_type_schema_attribute_count: cdktf.numberToTerraform(this._resourceTypeSchemaAttributeCount),
      resource_type_schema_attribute_filter: cdktf.stringToTerraform(this._resourceTypeSchemaAttributeFilter),
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
      resource_type_schema_attribute_count: {
        value: cdktf.numberToHclTerraform(this._resourceTypeSchemaAttributeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type_schema_attribute_filter: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaAttributeFilter),
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
