// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeMaskingReportsMaskedColumnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#column_name DataOciDataSafeMaskingReportsMaskedColumns#column_name}
  */
  readonly columnName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#id DataOciDataSafeMaskingReportsMaskedColumns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_column_group DataOciDataSafeMaskingReportsMaskedColumns#masking_column_group}
  */
  readonly maskingColumnGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#masking_report_id DataOciDataSafeMaskingReportsMaskedColumns#masking_report_id}
  */
  readonly maskingReportId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#object DataOciDataSafeMaskingReportsMaskedColumns#object}
  */
  readonly object?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#object_type DataOciDataSafeMaskingReportsMaskedColumns#object_type}
  */
  readonly objectType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#schema_name DataOciDataSafeMaskingReportsMaskedColumns#schema_name}
  */
  readonly schemaName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#sensitive_type_id DataOciDataSafeMaskingReportsMaskedColumns#sensitive_type_id}
  */
  readonly sensitiveTypeId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#filter DataOciDataSafeMaskingReportsMaskedColumns#filter}
  */
  readonly filter?: DataOciDataSafeMaskingReportsMaskedColumnsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems {
}

export function dataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsToTerraform(struct?: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsToHclTerraform(struct?: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // masking_column_group - computed: true, optional: false, required: false
  public get maskingColumnGroup() {
    return this.getStringAttribute('masking_column_group');
  }

  // masking_format_used - computed: true, optional: false, required: false
  public get maskingFormatUsed() {
    return this.getStringAttribute('masking_format_used');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // parent_column_key - computed: true, optional: false, required: false
  public get parentColumnKey() {
    return this.getStringAttribute('parent_column_key');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }

  // total_masked_values - computed: true, optional: false, required: false
  public get totalMaskedValues() {
    return this.getStringAttribute('total_masked_values');
  }
}

export class DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference {
    return new DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection {
}

export function dataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionToTerraform(struct?: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionToHclTerraform(struct?: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference {
    return new DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingReportsMaskedColumnsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#name DataOciDataSafeMaskingReportsMaskedColumns#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#regex DataOciDataSafeMaskingReportsMaskedColumns#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#values DataOciDataSafeMaskingReportsMaskedColumns#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeMaskingReportsMaskedColumnsFilterToTerraform(struct?: DataOciDataSafeMaskingReportsMaskedColumnsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeMaskingReportsMaskedColumnsFilterToHclTerraform(struct?: DataOciDataSafeMaskingReportsMaskedColumnsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingReportsMaskedColumnsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingReportsMaskedColumnsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeMaskingReportsMaskedColumnsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeMaskingReportsMaskedColumnsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference {
    return new DataOciDataSafeMaskingReportsMaskedColumnsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns oci_data_safe_masking_reports_masked_columns}
*/
export class DataOciDataSafeMaskingReportsMaskedColumns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_reports_masked_columns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeMaskingReportsMaskedColumns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeMaskingReportsMaskedColumns to import
  * @param importFromId The id of the existing DataOciDataSafeMaskingReportsMaskedColumns that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeMaskingReportsMaskedColumns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_reports_masked_columns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_masking_reports_masked_columns oci_data_safe_masking_reports_masked_columns} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeMaskingReportsMaskedColumnsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeMaskingReportsMaskedColumnsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_reports_masked_columns',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._columnName = config.columnName;
    this._id = config.id;
    this._maskingColumnGroup = config.maskingColumnGroup;
    this._maskingReportId = config.maskingReportId;
    this._object = config.object;
    this._objectType = config.objectType;
    this._schemaName = config.schemaName;
    this._sensitiveTypeId = config.sensitiveTypeId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_name - computed: false, optional: true, required: false
  private _columnName?: string[]; 
  public get columnName() {
    return this.getListAttribute('column_name');
  }
  public set columnName(value: string[]) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
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

  // masked_column_collection - computed: true, optional: false, required: false
  private _maskedColumnCollection = new DataOciDataSafeMaskingReportsMaskedColumnsMaskedColumnCollectionList(this, "masked_column_collection", false);
  public get maskedColumnCollection() {
    return this._maskedColumnCollection;
  }

  // masking_column_group - computed: false, optional: true, required: false
  private _maskingColumnGroup?: string[]; 
  public get maskingColumnGroup() {
    return this.getListAttribute('masking_column_group');
  }
  public set maskingColumnGroup(value: string[]) {
    this._maskingColumnGroup = value;
  }
  public resetMaskingColumnGroup() {
    this._maskingColumnGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingColumnGroupInput() {
    return this._maskingColumnGroup;
  }

  // masking_report_id - computed: false, optional: false, required: true
  private _maskingReportId?: string; 
  public get maskingReportId() {
    return this.getStringAttribute('masking_report_id');
  }
  public set maskingReportId(value: string) {
    this._maskingReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingReportIdInput() {
    return this._maskingReportId;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string[]; 
  public get object() {
    return this.getListAttribute('object');
  }
  public set object(value: string[]) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string[]; 
  public get objectType() {
    return this.getListAttribute('object_type');
  }
  public set objectType(value: string[]) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string[]; 
  public get schemaName() {
    return this.getListAttribute('schema_name');
  }
  public set schemaName(value: string[]) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // sensitive_type_id - computed: false, optional: true, required: false
  private _sensitiveTypeId?: string; 
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }
  public set sensitiveTypeId(value: string) {
    this._sensitiveTypeId = value;
  }
  public resetSensitiveTypeId() {
    this._sensitiveTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdInput() {
    return this._sensitiveTypeId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeMaskingReportsMaskedColumnsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeMaskingReportsMaskedColumnsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._columnName),
      id: cdktf.stringToTerraform(this._id),
      masking_column_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maskingColumnGroup),
      masking_report_id: cdktf.stringToTerraform(this._maskingReportId),
      object: cdktf.listMapper(cdktf.stringToTerraform, false)(this._object),
      object_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectType),
      schema_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaName),
      sensitive_type_id: cdktf.stringToTerraform(this._sensitiveTypeId),
      filter: cdktf.listMapper(dataOciDataSafeMaskingReportsMaskedColumnsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._columnName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      masking_column_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maskingColumnGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      masking_report_id: {
        value: cdktf.stringToHclTerraform(this._maskingReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._object),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      object_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      schema_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemaName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sensitive_type_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeMaskingReportsMaskedColumnsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeMaskingReportsMaskedColumnsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
