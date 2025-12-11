// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_data_count_filter DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_data_count_filter}
  */
  readonly columnDataCountFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}
  */
  readonly columnGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}
  */
  readonly columnName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#confidence_level DataOciDataSafeSensitiveDataModelsSensitiveColumns#confidence_level}
  */
  readonly confidenceLevel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}
  */
  readonly dataType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}
  */
  readonly isCaseInSensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}
  */
  readonly object?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}
  */
  readonly objectType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}
  */
  readonly parentColumnKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}
  */
  readonly relationType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}
  */
  readonly schemaName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}
  */
  readonly sensitiveColumnLifecycleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}
  */
  readonly sensitiveTypeId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}
  */
  readonly status?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}
  */
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}
  */
  readonly timeCreatedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}
  */
  readonly timeUpdatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}
  */
  readonly timeUpdatedLessThan?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#filter DataOciDataSafeSensitiveDataModelsSensitiveColumns#filter}
  */
  readonly filter?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetails {
}

export function dataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetailsToTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetailsToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // does_column_lead_to_pii_in_non_tables - computed: true, optional: false, required: false
  public get doesColumnLeadToPiiInNonTables() {
    return this.getBooleanAttribute('does_column_lead_to_pii_in_non_tables');
  }

  // does_column_lead_to_pii_in_same_related_tables - computed: true, optional: false, required: false
  public get doesColumnLeadToPiiInSameRelatedTables() {
    return this.getBooleanAttribute('does_column_lead_to_pii_in_same_related_tables');
  }

  // has_comment_pattern_matched - computed: true, optional: false, required: false
  public get hasCommentPatternMatched() {
    return this.getBooleanAttribute('has_comment_pattern_matched');
  }

  // has_data_pattern_matched - computed: true, optional: false, required: false
  public get hasDataPatternMatched() {
    return this.getBooleanAttribute('has_data_pattern_matched');
  }

  // has_name_pattern_matched - computed: true, optional: false, required: false
  public get hasNamePatternMatched() {
    return this.getBooleanAttribute('has_name_pattern_matched');
  }

  // is_sensitive_type_from_same_context_found_in_same_or_related_tables - computed: true, optional: false, required: false
  public get isSensitiveTypeFromSameContextFoundInSameOrRelatedTables() {
    return this.getBooleanAttribute('is_sensitive_type_from_same_context_found_in_same_or_related_tables');
  }
}

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetailsOutputReference {
    return new DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems {
}

export function dataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsToTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_defined_child_column_keys - computed: true, optional: false, required: false
  public get appDefinedChildColumnKeys() {
    return this.getListAttribute('app_defined_child_column_keys');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // column_groups - computed: true, optional: false, required: false
  public get columnGroups() {
    return this.getListAttribute('column_groups');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // confidence_level - computed: true, optional: false, required: false
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }

  // confidence_level_details - computed: true, optional: false, required: false
  private _confidenceLevelDetails = new DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsConfidenceLevelDetailsList(this, "confidence_level_details", false);
  public get confidenceLevelDetails() {
    return this._confidenceLevelDetails;
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // db_defined_child_column_keys - computed: true, optional: false, required: false
  public get dbDefinedChildColumnKeys() {
    return this.getListAttribute('db_defined_child_column_keys');
  }

  // estimated_data_value_count - computed: true, optional: false, required: false
  public get estimatedDataValueCount() {
    return this.getStringAttribute('estimated_data_value_count');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // parent_column_keys - computed: true, optional: false, required: false
  public get parentColumnKeys() {
    return this.getListAttribute('parent_column_keys');
  }

  // relation_type - computed: true, optional: false, required: false
  public get relationType() {
    return this.getStringAttribute('relation_type');
  }

  // sample_data_values - computed: true, optional: false, required: false
  public get sampleDataValues() {
    return this.getListAttribute('sample_data_values');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sensitive_data_model_id - computed: true, optional: false, required: false
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference {
    return new DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection {
}

export function dataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionToTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference {
    return new DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#name DataOciDataSafeSensitiveDataModelsSensitiveColumns#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#regex DataOciDataSafeSensitiveDataModelsSensitiveColumns#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#values DataOciDataSafeSensitiveDataModelsSensitiveColumns#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterToTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference {
    return new DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns oci_data_safe_sensitive_data_models_sensitive_columns}
*/
export class DataOciDataSafeSensitiveDataModelsSensitiveColumns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_data_models_sensitive_columns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelsSensitiveColumns to import
  * @param importFromId The id of the existing DataOciDataSafeSensitiveDataModelsSensitiveColumns that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelsSensitiveColumns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_data_models_sensitive_columns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns oci_data_safe_sensitive_data_models_sensitive_columns} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_data_models_sensitive_columns',
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
    this._columnDataCountFilter = config.columnDataCountFilter;
    this._columnGroup = config.columnGroup;
    this._columnName = config.columnName;
    this._confidenceLevel = config.confidenceLevel;
    this._dataType = config.dataType;
    this._id = config.id;
    this._isCaseInSensitive = config.isCaseInSensitive;
    this._object = config.object;
    this._objectType = config.objectType;
    this._parentColumnKey = config.parentColumnKey;
    this._relationType = config.relationType;
    this._schemaName = config.schemaName;
    this._sensitiveColumnLifecycleState = config.sensitiveColumnLifecycleState;
    this._sensitiveDataModelId = config.sensitiveDataModelId;
    this._sensitiveTypeId = config.sensitiveTypeId;
    this._status = config.status;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._timeUpdatedGreaterThanOrEqualTo = config.timeUpdatedGreaterThanOrEqualTo;
    this._timeUpdatedLessThan = config.timeUpdatedLessThan;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_data_count_filter - computed: false, optional: true, required: false
  private _columnDataCountFilter?: string; 
  public get columnDataCountFilter() {
    return this.getStringAttribute('column_data_count_filter');
  }
  public set columnDataCountFilter(value: string) {
    this._columnDataCountFilter = value;
  }
  public resetColumnDataCountFilter() {
    this._columnDataCountFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnDataCountFilterInput() {
    return this._columnDataCountFilter;
  }

  // column_group - computed: false, optional: true, required: false
  private _columnGroup?: string; 
  public get columnGroup() {
    return this.getStringAttribute('column_group');
  }
  public set columnGroup(value: string) {
    this._columnGroup = value;
  }
  public resetColumnGroup() {
    this._columnGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupInput() {
    return this._columnGroup;
  }

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

  // confidence_level - computed: false, optional: true, required: false
  private _confidenceLevel?: string[]; 
  public get confidenceLevel() {
    return this.getListAttribute('confidence_level');
  }
  public set confidenceLevel(value: string[]) {
    this._confidenceLevel = value;
  }
  public resetConfidenceLevel() {
    this._confidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
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

  // is_case_in_sensitive - computed: false, optional: true, required: false
  private _isCaseInSensitive?: boolean | cdktf.IResolvable; 
  public get isCaseInSensitive() {
    return this.getBooleanAttribute('is_case_in_sensitive');
  }
  public set isCaseInSensitive(value: boolean | cdktf.IResolvable) {
    this._isCaseInSensitive = value;
  }
  public resetIsCaseInSensitive() {
    this._isCaseInSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaseInSensitiveInput() {
    return this._isCaseInSensitive;
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

  // parent_column_key - computed: false, optional: true, required: false
  private _parentColumnKey?: string[]; 
  public get parentColumnKey() {
    return this.getListAttribute('parent_column_key');
  }
  public set parentColumnKey(value: string[]) {
    this._parentColumnKey = value;
  }
  public resetParentColumnKey() {
    this._parentColumnKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentColumnKeyInput() {
    return this._parentColumnKey;
  }

  // relation_type - computed: false, optional: true, required: false
  private _relationType?: string[]; 
  public get relationType() {
    return this.getListAttribute('relation_type');
  }
  public set relationType(value: string[]) {
    this._relationType = value;
  }
  public resetRelationType() {
    this._relationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationTypeInput() {
    return this._relationType;
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

  // sensitive_column_collection - computed: true, optional: false, required: false
  private _sensitiveColumnCollection = new DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList(this, "sensitive_column_collection", false);
  public get sensitiveColumnCollection() {
    return this._sensitiveColumnCollection;
  }

  // sensitive_column_lifecycle_state - computed: false, optional: true, required: false
  private _sensitiveColumnLifecycleState?: string; 
  public get sensitiveColumnLifecycleState() {
    return this.getStringAttribute('sensitive_column_lifecycle_state');
  }
  public set sensitiveColumnLifecycleState(value: string) {
    this._sensitiveColumnLifecycleState = value;
  }
  public resetSensitiveColumnLifecycleState() {
    this._sensitiveColumnLifecycleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveColumnLifecycleStateInput() {
    return this._sensitiveColumnLifecycleState;
  }

  // sensitive_data_model_id - computed: false, optional: false, required: true
  private _sensitiveDataModelId?: string; 
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }
  public set sensitiveDataModelId(value: string) {
    this._sensitiveDataModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataModelIdInput() {
    return this._sensitiveDataModelId;
  }

  // sensitive_type_id - computed: false, optional: true, required: false
  private _sensitiveTypeId?: string[]; 
  public get sensitiveTypeId() {
    return this.getListAttribute('sensitive_type_id');
  }
  public set sensitiveTypeId(value: string[]) {
    this._sensitiveTypeId = value;
  }
  public resetSensitiveTypeId() {
    this._sensitiveTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdInput() {
    return this._sensitiveTypeId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
  private _filter = new DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter[] | cdktf.IResolvable) {
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
      column_data_count_filter: cdktf.stringToTerraform(this._columnDataCountFilter),
      column_group: cdktf.stringToTerraform(this._columnGroup),
      column_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._columnName),
      confidence_level: cdktf.listMapper(cdktf.stringToTerraform, false)(this._confidenceLevel),
      data_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataType),
      id: cdktf.stringToTerraform(this._id),
      is_case_in_sensitive: cdktf.booleanToTerraform(this._isCaseInSensitive),
      object: cdktf.listMapper(cdktf.stringToTerraform, false)(this._object),
      object_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectType),
      parent_column_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._parentColumnKey),
      relation_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationType),
      schema_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaName),
      sensitive_column_lifecycle_state: cdktf.stringToTerraform(this._sensitiveColumnLifecycleState),
      sensitive_data_model_id: cdktf.stringToTerraform(this._sensitiveDataModelId),
      sensitive_type_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveTypeId),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      time_created_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeCreatedGreaterThanOrEqualTo),
      time_created_less_than: cdktf.stringToTerraform(this._timeCreatedLessThan),
      time_updated_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeUpdatedGreaterThanOrEqualTo),
      time_updated_less_than: cdktf.stringToTerraform(this._timeUpdatedLessThan),
      filter: cdktf.listMapper(dataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_data_count_filter: {
        value: cdktf.stringToHclTerraform(this._columnDataCountFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_group: {
        value: cdktf.stringToHclTerraform(this._columnGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._columnName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      confidence_level: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._confidenceLevel),
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
      is_case_in_sensitive: {
        value: cdktf.booleanToHclTerraform(this._isCaseInSensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      parent_column_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._parentColumnKey),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      relation_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationType),
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
      sensitive_column_lifecycle_state: {
        value: cdktf.stringToHclTerraform(this._sensitiveColumnLifecycleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_data_model_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveDataModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_type_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveTypeId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
        value: cdktf.listMapperHcl(dataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
