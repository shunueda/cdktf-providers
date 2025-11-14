// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/log_analytics_namespace_lookup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsNamespaceLookupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/log_analytics_namespace_lookup#lookup_name DataOciLogAnalyticsNamespaceLookup#lookup_name}
  */
  readonly lookupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/log_analytics_namespace_lookup#namespace DataOciLogAnalyticsNamespaceLookup#namespace}
  */
  readonly namespace: string;
}
export interface DataOciLogAnalyticsNamespaceLookupCategories {
}

export function dataOciLogAnalyticsNamespaceLookupCategoriesToTerraform(struct?: DataOciLogAnalyticsNamespaceLookupCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsNamespaceLookupCategoriesToHclTerraform(struct?: DataOciLogAnalyticsNamespaceLookupCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsNamespaceLookupCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceLookupCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceLookupCategories | undefined) {
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

  // is_system - computed: true, optional: false, required: false
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciLogAnalyticsNamespaceLookupCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceLookupCategoriesOutputReference {
    return new DataOciLogAnalyticsNamespaceLookupCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespaceLookupFields {
}

export function dataOciLogAnalyticsNamespaceLookupFieldsToTerraform(struct?: DataOciLogAnalyticsNamespaceLookupFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsNamespaceLookupFieldsToHclTerraform(struct?: DataOciLogAnalyticsNamespaceLookupFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsNamespaceLookupFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceLookupFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceLookupFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_field_name - computed: true, optional: false, required: false
  public get commonFieldName() {
    return this.getStringAttribute('common_field_name');
  }

  // default_match_value - computed: true, optional: false, required: false
  public get defaultMatchValue() {
    return this.getStringAttribute('default_match_value');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_common_field - computed: true, optional: false, required: false
  public get isCommonField() {
    return this.getBooleanAttribute('is_common_field');
  }

  // match_operator - computed: true, optional: false, required: false
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }
}

export class DataOciLogAnalyticsNamespaceLookupFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceLookupFieldsOutputReference {
    return new DataOciLogAnalyticsNamespaceLookupFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespaceLookupReferringSources {
}

export function dataOciLogAnalyticsNamespaceLookupReferringSourcesToTerraform(struct?: DataOciLogAnalyticsNamespaceLookupReferringSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsNamespaceLookupReferringSourcesToHclTerraform(struct?: DataOciLogAnalyticsNamespaceLookupReferringSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsNamespaceLookupReferringSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceLookupReferringSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceLookupReferringSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical_link - computed: true, optional: false, required: false
  public get canonicalLink() {
    return this.getStringAttribute('canonical_link');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getStringAttribute('total_count');
  }
}

export class DataOciLogAnalyticsNamespaceLookupReferringSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceLookupReferringSourcesOutputReference {
    return new DataOciLogAnalyticsNamespaceLookupReferringSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsNamespaceLookupStatusSummary {
}

export function dataOciLogAnalyticsNamespaceLookupStatusSummaryToTerraform(struct?: DataOciLogAnalyticsNamespaceLookupStatusSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsNamespaceLookupStatusSummaryToHclTerraform(struct?: DataOciLogAnalyticsNamespaceLookupStatusSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsNamespaceLookupStatusSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsNamespaceLookupStatusSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsNamespaceLookupStatusSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunks_processed - computed: true, optional: false, required: false
  public get chunksProcessed() {
    return this.getStringAttribute('chunks_processed');
  }

  // failure_details - computed: true, optional: false, required: false
  public get failureDetails() {
    return this.getStringAttribute('failure_details');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_chunks - computed: true, optional: false, required: false
  public get totalChunks() {
    return this.getStringAttribute('total_chunks');
  }
}

export class DataOciLogAnalyticsNamespaceLookupStatusSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsNamespaceLookupStatusSummaryOutputReference {
    return new DataOciLogAnalyticsNamespaceLookupStatusSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/log_analytics_namespace_lookup oci_log_analytics_namespace_lookup}
*/
export class DataOciLogAnalyticsNamespaceLookup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_lookup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceLookup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLogAnalyticsNamespaceLookup to import
  * @param importFromId The id of the existing DataOciLogAnalyticsNamespaceLookup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/log_analytics_namespace_lookup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLogAnalyticsNamespaceLookup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_lookup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/log_analytics_namespace_lookup oci_log_analytics_namespace_lookup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsNamespaceLookupConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceLookupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_lookup',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._lookupName = config.lookupName;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_edit_version - computed: true, optional: false, required: false
  public get activeEditVersion() {
    return this.getStringAttribute('active_edit_version');
  }

  // canonical_link - computed: true, optional: false, required: false
  public get canonicalLink() {
    return this.getStringAttribute('canonical_link');
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataOciLogAnalyticsNamespaceLookupCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // char_encoding - computed: true, optional: false, required: false
  public get charEncoding() {
    return this.getStringAttribute('char_encoding');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // default_match_value - computed: true, optional: false, required: false
  public get defaultMatchValue() {
    return this.getStringAttribute('default_match_value');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edit_version - computed: true, optional: false, required: false
  public get editVersion() {
    return this.getStringAttribute('edit_version');
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataOciLogAnalyticsNamespaceLookupFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_built_in - computed: true, optional: false, required: false
  public get isBuiltIn() {
    return this.getStringAttribute('is_built_in');
  }

  // is_hidden - computed: true, optional: false, required: false
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }

  // lookup_display_name - computed: true, optional: false, required: false
  public get lookupDisplayName() {
    return this.getStringAttribute('lookup_display_name');
  }

  // lookup_id - computed: true, optional: false, required: false
  public get lookupId() {
    return this.getStringAttribute('lookup_id');
  }

  // lookup_name - computed: false, optional: false, required: true
  private _lookupName?: string; 
  public get lookupName() {
    return this.getStringAttribute('lookup_name');
  }
  public set lookupName(value: string) {
    this._lookupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNameInput() {
    return this._lookupName;
  }

  // lookup_reference - computed: true, optional: false, required: false
  public get lookupReference() {
    return this.getStringAttribute('lookup_reference');
  }

  // lookup_reference_string - computed: true, optional: false, required: false
  public get lookupReferenceString() {
    return this.getStringAttribute('lookup_reference_string');
  }

  // max_matches - computed: true, optional: false, required: false
  public get maxMatches() {
    return this.getStringAttribute('max_matches');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // referring_sources - computed: true, optional: false, required: false
  private _referringSources = new DataOciLogAnalyticsNamespaceLookupReferringSourcesList(this, "referring_sources", false);
  public get referringSources() {
    return this._referringSources;
  }

  // register_lookup_file - computed: true, optional: false, required: false
  public get registerLookupFile() {
    return this.getStringAttribute('register_lookup_file');
  }

  // status_summary - computed: true, optional: false, required: false
  private _statusSummary = new DataOciLogAnalyticsNamespaceLookupStatusSummaryList(this, "status_summary", false);
  public get statusSummary() {
    return this._statusSummary;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lookup_name: cdktf.stringToTerraform(this._lookupName),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lookup_name: {
        value: cdktf.stringToHclTerraform(this._lookupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
