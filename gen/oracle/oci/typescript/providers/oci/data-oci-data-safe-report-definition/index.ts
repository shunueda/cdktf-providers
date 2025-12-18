// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_report_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeReportDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_report_definition#report_definition_id DataOciDataSafeReportDefinition#report_definition_id}
  */
  readonly reportDefinitionId: string;
}
export interface DataOciDataSafeReportDefinitionColumnFilters {
}

export function dataOciDataSafeReportDefinitionColumnFiltersToTerraform(struct?: DataOciDataSafeReportDefinitionColumnFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeReportDefinitionColumnFiltersToHclTerraform(struct?: DataOciDataSafeReportDefinitionColumnFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeReportDefinitionColumnFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeReportDefinitionColumnFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeReportDefinitionColumnFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expressions - computed: true, optional: false, required: false
  public get expressions() {
    return this.getListAttribute('expressions');
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_hidden - computed: true, optional: false, required: false
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}

export class DataOciDataSafeReportDefinitionColumnFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeReportDefinitionColumnFiltersOutputReference {
    return new DataOciDataSafeReportDefinitionColumnFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeReportDefinitionColumnInfo {
}

export function dataOciDataSafeReportDefinitionColumnInfoToTerraform(struct?: DataOciDataSafeReportDefinitionColumnInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeReportDefinitionColumnInfoToHclTerraform(struct?: DataOciDataSafeReportDefinitionColumnInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeReportDefinitionColumnInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeReportDefinitionColumnInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeReportDefinitionColumnInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applicable_operators - computed: true, optional: false, required: false
  public get applicableOperators() {
    return this.getListAttribute('applicable_operators');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // display_order - computed: true, optional: false, required: false
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // is_hidden - computed: true, optional: false, required: false
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }

  // is_virtual - computed: true, optional: false, required: false
  public get isVirtual() {
    return this.getBooleanAttribute('is_virtual');
  }
}

export class DataOciDataSafeReportDefinitionColumnInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeReportDefinitionColumnInfoOutputReference {
    return new DataOciDataSafeReportDefinitionColumnInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeReportDefinitionColumnSortings {
}

export function dataOciDataSafeReportDefinitionColumnSortingsToTerraform(struct?: DataOciDataSafeReportDefinitionColumnSortings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeReportDefinitionColumnSortingsToHclTerraform(struct?: DataOciDataSafeReportDefinitionColumnSortings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeReportDefinitionColumnSortingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeReportDefinitionColumnSortings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeReportDefinitionColumnSortings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // is_ascending - computed: true, optional: false, required: false
  public get isAscending() {
    return this.getBooleanAttribute('is_ascending');
  }

  // sorting_order - computed: true, optional: false, required: false
  public get sortingOrder() {
    return this.getNumberAttribute('sorting_order');
  }
}

export class DataOciDataSafeReportDefinitionColumnSortingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeReportDefinitionColumnSortingsOutputReference {
    return new DataOciDataSafeReportDefinitionColumnSortingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeReportDefinitionSummary {
}

export function dataOciDataSafeReportDefinitionSummaryToTerraform(struct?: DataOciDataSafeReportDefinitionSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeReportDefinitionSummaryToHclTerraform(struct?: DataOciDataSafeReportDefinitionSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeReportDefinitionSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeReportDefinitionSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeReportDefinitionSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count_of - computed: true, optional: false, required: false
  public get countOf() {
    return this.getStringAttribute('count_of');
  }

  // display_order - computed: true, optional: false, required: false
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
  }

  // group_by_field_name - computed: true, optional: false, required: false
  public get groupByFieldName() {
    return this.getStringAttribute('group_by_field_name');
  }

  // is_hidden - computed: true, optional: false, required: false
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scim_filter - computed: true, optional: false, required: false
  public get scimFilter() {
    return this.getStringAttribute('scim_filter');
  }
}

export class DataOciDataSafeReportDefinitionSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeReportDefinitionSummaryOutputReference {
    return new DataOciDataSafeReportDefinitionSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_report_definition oci_data_safe_report_definition}
*/
export class DataOciDataSafeReportDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_report_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeReportDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeReportDefinition to import
  * @param importFromId The id of the existing DataOciDataSafeReportDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_report_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeReportDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_report_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_report_definition oci_data_safe_report_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeReportDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeReportDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_report_definition',
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
    this._reportDefinitionId = config.reportDefinitionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // column_filters - computed: true, optional: false, required: false
  private _columnFilters = new DataOciDataSafeReportDefinitionColumnFiltersList(this, "column_filters", false);
  public get columnFilters() {
    return this._columnFilters;
  }

  // column_info - computed: true, optional: false, required: false
  private _columnInfo = new DataOciDataSafeReportDefinitionColumnInfoList(this, "column_info", false);
  public get columnInfo() {
    return this._columnInfo;
  }

  // column_sortings - computed: true, optional: false, required: false
  private _columnSortings = new DataOciDataSafeReportDefinitionColumnSortingsList(this, "column_sortings", false);
  public get columnSortings() {
    return this._columnSortings;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compliance_standards - computed: true, optional: false, required: false
  public get complianceStandards() {
    return this.getListAttribute('compliance_standards');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // display_order - computed: true, optional: false, required: false
  public get displayOrder() {
    return this.getNumberAttribute('display_order');
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

  // is_seeded - computed: true, optional: false, required: false
  public get isSeeded() {
    return this.getBooleanAttribute('is_seeded');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // record_time_span - computed: true, optional: false, required: false
  public get recordTimeSpan() {
    return this.getStringAttribute('record_time_span');
  }

  // report_definition_id - computed: false, optional: false, required: true
  private _reportDefinitionId?: string; 
  public get reportDefinitionId() {
    return this.getStringAttribute('report_definition_id');
  }
  public set reportDefinitionId(value: string) {
    this._reportDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportDefinitionIdInput() {
    return this._reportDefinitionId;
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // scheduled_report_compartment_id - computed: true, optional: false, required: false
  public get scheduledReportCompartmentId() {
    return this.getStringAttribute('scheduled_report_compartment_id');
  }

  // scheduled_report_mime_type - computed: true, optional: false, required: false
  public get scheduledReportMimeType() {
    return this.getStringAttribute('scheduled_report_mime_type');
  }

  // scheduled_report_name - computed: true, optional: false, required: false
  public get scheduledReportName() {
    return this.getStringAttribute('scheduled_report_name');
  }

  // scheduled_report_row_limit - computed: true, optional: false, required: false
  public get scheduledReportRowLimit() {
    return this.getNumberAttribute('scheduled_report_row_limit');
  }

  // scim_filter - computed: true, optional: false, required: false
  public get scimFilter() {
    return this.getStringAttribute('scim_filter');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new DataOciDataSafeReportDefinitionSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      report_definition_id: cdktf.stringToTerraform(this._reportDefinitionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      report_definition_id: {
        value: cdktf.stringToHclTerraform(this._reportDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
