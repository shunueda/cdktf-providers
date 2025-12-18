// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeMaskingPoliciesMaskingColumnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}
  */
  readonly columnName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}
  */
  readonly dataType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}
  */
  readonly isMaskingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}
  */
  readonly isSeedRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}
  */
  readonly maskingColumnGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}
  */
  readonly maskingColumnLifecycleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}
  */
  readonly maskingPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}
  */
  readonly object?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}
  */
  readonly objectType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}
  */
  readonly schemaName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}
  */
  readonly sensitiveTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}
  */
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}
  */
  readonly timeCreatedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}
  */
  readonly timeUpdatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}
  */
  readonly timeUpdatedLessThan?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#filter DataOciDataSafeMaskingPoliciesMaskingColumns#filter}
  */
  readonly filter?: DataOciDataSafeMaskingPoliciesMaskingColumnsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries {
}

export function dataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesToTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesToHclTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // end_length - computed: true, optional: false, required: false
  public get endLength() {
    return this.getNumberAttribute('end_length');
  }

  // end_value - computed: true, optional: false, required: false
  public get endValue() {
    return this.getNumberAttribute('end_value');
  }

  // fixed_number - computed: true, optional: false, required: false
  public get fixedNumber() {
    return this.getNumberAttribute('fixed_number');
  }

  // fixed_string - computed: true, optional: false, required: false
  public get fixedString() {
    return this.getStringAttribute('fixed_string');
  }

  // grouping_columns - computed: true, optional: false, required: false
  public get groupingColumns() {
    return this.getListAttribute('grouping_columns');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // library_masking_format_id - computed: true, optional: false, required: false
  public get libraryMaskingFormatId() {
    return this.getStringAttribute('library_masking_format_id');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // post_processing_function - computed: true, optional: false, required: false
  public get postProcessingFunction() {
    return this.getStringAttribute('post_processing_function');
  }

  // random_list - computed: true, optional: false, required: false
  public get randomList() {
    return this.getListAttribute('random_list');
  }

  // regular_expression - computed: true, optional: false, required: false
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }

  // replace_with - computed: true, optional: false, required: false
  public get replaceWith() {
    return this.getStringAttribute('replace_with');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sql_expression - computed: true, optional: false, required: false
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // start_length - computed: true, optional: false, required: false
  public get startLength() {
    return this.getNumberAttribute('start_length');
  }

  // start_position - computed: true, optional: false, required: false
  public get startPosition() {
    return this.getNumberAttribute('start_position');
  }

  // start_value - computed: true, optional: false, required: false
  public get startValue() {
    return this.getNumberAttribute('start_value');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_defined_function - computed: true, optional: false, required: false
  public get userDefinedFunction() {
    return this.getStringAttribute('user_defined_function');
  }
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference {
    return new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats {
}

export function dataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsToTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsToHclTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // format_entries - computed: true, optional: false, required: false
  private _formatEntries = new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList(this, "format_entries", false);
  public get formatEntries() {
    return this._formatEntries;
  }
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference {
    return new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems {
}

export function dataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsToTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsToHclTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_columns - computed: true, optional: false, required: false
  public get childColumns() {
    return this.getListAttribute('child_columns');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // is_masking_enabled - computed: true, optional: false, required: false
  public get isMaskingEnabled() {
    return this.getBooleanAttribute('is_masking_enabled');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // masking_column_group - computed: true, optional: false, required: false
  public get maskingColumnGroup() {
    return this.getStringAttribute('masking_column_group');
  }

  // masking_formats - computed: true, optional: false, required: false
  private _maskingFormats = new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList(this, "masking_formats", false);
  public get maskingFormats() {
    return this._maskingFormats;
  }

  // masking_policy_id - computed: true, optional: false, required: false
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference {
    return new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection {
}

export function dataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionToTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionToHclTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference {
    return new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPoliciesMaskingColumnsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#name DataOciDataSafeMaskingPoliciesMaskingColumns#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#regex DataOciDataSafeMaskingPoliciesMaskingColumns#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#values DataOciDataSafeMaskingPoliciesMaskingColumns#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeMaskingPoliciesMaskingColumnsFilterToTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeMaskingPoliciesMaskingColumnsFilterToHclTerraform(struct?: DataOciDataSafeMaskingPoliciesMaskingColumnsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPoliciesMaskingColumnsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeMaskingPoliciesMaskingColumnsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeMaskingPoliciesMaskingColumnsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference {
    return new DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns oci_data_safe_masking_policies_masking_columns}
*/
export class DataOciDataSafeMaskingPoliciesMaskingColumns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_policies_masking_columns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeMaskingPoliciesMaskingColumns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeMaskingPoliciesMaskingColumns to import
  * @param importFromId The id of the existing DataOciDataSafeMaskingPoliciesMaskingColumns that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeMaskingPoliciesMaskingColumns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_policies_masking_columns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policies_masking_columns oci_data_safe_masking_policies_masking_columns} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeMaskingPoliciesMaskingColumnsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeMaskingPoliciesMaskingColumnsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_policies_masking_columns',
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
    this._columnName = config.columnName;
    this._dataType = config.dataType;
    this._id = config.id;
    this._isMaskingEnabled = config.isMaskingEnabled;
    this._isSeedRequired = config.isSeedRequired;
    this._maskingColumnGroup = config.maskingColumnGroup;
    this._maskingColumnLifecycleState = config.maskingColumnLifecycleState;
    this._maskingPolicyId = config.maskingPolicyId;
    this._object = config.object;
    this._objectType = config.objectType;
    this._schemaName = config.schemaName;
    this._sensitiveTypeId = config.sensitiveTypeId;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._timeUpdatedGreaterThanOrEqualTo = config.timeUpdatedGreaterThanOrEqualTo;
    this._timeUpdatedLessThan = config.timeUpdatedLessThan;
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

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string[]; 
  public get dataType() {
    return this.getListAttribute('data_type');
  }
  public set dataType(value: string[]) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // is_masking_enabled - computed: false, optional: true, required: false
  private _isMaskingEnabled?: boolean | cdktf.IResolvable; 
  public get isMaskingEnabled() {
    return this.getBooleanAttribute('is_masking_enabled');
  }
  public set isMaskingEnabled(value: boolean | cdktf.IResolvable) {
    this._isMaskingEnabled = value;
  }
  public resetIsMaskingEnabled() {
    this._isMaskingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMaskingEnabledInput() {
    return this._isMaskingEnabled;
  }

  // is_seed_required - computed: false, optional: true, required: false
  private _isSeedRequired?: boolean | cdktf.IResolvable; 
  public get isSeedRequired() {
    return this.getBooleanAttribute('is_seed_required');
  }
  public set isSeedRequired(value: boolean | cdktf.IResolvable) {
    this._isSeedRequired = value;
  }
  public resetIsSeedRequired() {
    this._isSeedRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSeedRequiredInput() {
    return this._isSeedRequired;
  }

  // masking_column_collection - computed: true, optional: false, required: false
  private _maskingColumnCollection = new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList(this, "masking_column_collection", false);
  public get maskingColumnCollection() {
    return this._maskingColumnCollection;
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

  // masking_column_lifecycle_state - computed: false, optional: true, required: false
  private _maskingColumnLifecycleState?: string; 
  public get maskingColumnLifecycleState() {
    return this.getStringAttribute('masking_column_lifecycle_state');
  }
  public set maskingColumnLifecycleState(value: string) {
    this._maskingColumnLifecycleState = value;
  }
  public resetMaskingColumnLifecycleState() {
    this._maskingColumnLifecycleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingColumnLifecycleStateInput() {
    return this._maskingColumnLifecycleState;
  }

  // masking_policy_id - computed: false, optional: false, required: true
  private _maskingPolicyId?: string; 
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }
  public set maskingPolicyId(value: string) {
    this._maskingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyIdInput() {
    return this._maskingPolicyId;
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

  // time_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeCreatedGreaterThanOrEqualTo?: string; 
  public get timeCreatedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_created_greater_than_or_equal_to');
  }
  public set timeCreatedGreaterThanOrEqualTo(value: string) {
    this._timeCreatedGreaterThanOrEqualTo = value;
  }
  public resetTimeCreatedGreaterThanOrEqualTo() {
    this._timeCreatedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedGreaterThanOrEqualToInput() {
    return this._timeCreatedGreaterThanOrEqualTo;
  }

  // time_created_less_than - computed: false, optional: true, required: false
  private _timeCreatedLessThan?: string; 
  public get timeCreatedLessThan() {
    return this.getStringAttribute('time_created_less_than');
  }
  public set timeCreatedLessThan(value: string) {
    this._timeCreatedLessThan = value;
  }
  public resetTimeCreatedLessThan() {
    this._timeCreatedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedLessThanInput() {
    return this._timeCreatedLessThan;
  }

  // time_updated_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeUpdatedGreaterThanOrEqualTo?: string; 
  public get timeUpdatedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_updated_greater_than_or_equal_to');
  }
  public set timeUpdatedGreaterThanOrEqualTo(value: string) {
    this._timeUpdatedGreaterThanOrEqualTo = value;
  }
  public resetTimeUpdatedGreaterThanOrEqualTo() {
    this._timeUpdatedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUpdatedGreaterThanOrEqualToInput() {
    return this._timeUpdatedGreaterThanOrEqualTo;
  }

  // time_updated_less_than - computed: false, optional: true, required: false
  private _timeUpdatedLessThan?: string; 
  public get timeUpdatedLessThan() {
    return this.getStringAttribute('time_updated_less_than');
  }
  public set timeUpdatedLessThan(value: string) {
    this._timeUpdatedLessThan = value;
  }
  public resetTimeUpdatedLessThan() {
    this._timeUpdatedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUpdatedLessThanInput() {
    return this._timeUpdatedLessThan;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeMaskingPoliciesMaskingColumnsFilter[] | cdktf.IResolvable) {
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
      data_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataType),
      id: cdktf.stringToTerraform(this._id),
      is_masking_enabled: cdktf.booleanToTerraform(this._isMaskingEnabled),
      is_seed_required: cdktf.booleanToTerraform(this._isSeedRequired),
      masking_column_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._maskingColumnGroup),
      masking_column_lifecycle_state: cdktf.stringToTerraform(this._maskingColumnLifecycleState),
      masking_policy_id: cdktf.stringToTerraform(this._maskingPolicyId),
      object: cdktf.listMapper(cdktf.stringToTerraform, false)(this._object),
      object_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectType),
      schema_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaName),
      sensitive_type_id: cdktf.stringToTerraform(this._sensitiveTypeId),
      time_created_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeCreatedGreaterThanOrEqualTo),
      time_created_less_than: cdktf.stringToTerraform(this._timeCreatedLessThan),
      time_updated_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeUpdatedGreaterThanOrEqualTo),
      time_updated_less_than: cdktf.stringToTerraform(this._timeUpdatedLessThan),
      filter: cdktf.listMapper(dataOciDataSafeMaskingPoliciesMaskingColumnsFilterToTerraform, true)(this._filter.internalValue),
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
      data_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataType),
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
      is_masking_enabled: {
        value: cdktf.booleanToHclTerraform(this._isMaskingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_seed_required: {
        value: cdktf.booleanToHclTerraform(this._isSeedRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      masking_column_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._maskingColumnGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      masking_column_lifecycle_state: {
        value: cdktf.stringToHclTerraform(this._maskingColumnLifecycleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      masking_policy_id: {
        value: cdktf.stringToHclTerraform(this._maskingPolicyId),
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
      time_created_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeCreatedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_created_less_than: {
        value: cdktf.stringToHclTerraform(this._timeCreatedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_updated_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeUpdatedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_updated_less_than: {
        value: cdktf.stringToHclTerraform(this._timeUpdatedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeMaskingPoliciesMaskingColumnsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
