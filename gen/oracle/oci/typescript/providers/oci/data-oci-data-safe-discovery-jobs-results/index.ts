// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeDiscoveryJobsResultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}
  */
  readonly columnName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#confidence_level DataOciDataSafeDiscoveryJobsResults#confidence_level}
  */
  readonly confidenceLevel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}
  */
  readonly discoveryJobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}
  */
  readonly discoveryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}
  */
  readonly isResultApplied?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}
  */
  readonly object?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}
  */
  readonly plannedAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}
  */
  readonly schemaName?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#filter DataOciDataSafeDiscoveryJobsResults#filter}
  */
  readonly filter?: DataOciDataSafeDiscoveryJobsResultsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetails {
}

export function dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetailsToTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetailsToHclTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetails | undefined) {
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

export class DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetailsOutputReference {
    return new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes {
}

export function dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesToTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesToHclTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes | undefined) {
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

  // db_defined_child_column_keys - computed: true, optional: false, required: false
  public get dbDefinedChildColumnKeys() {
    return this.getListAttribute('db_defined_child_column_keys');
  }
}

export class DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference {
    return new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems {
}

export function dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsToTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsToHclTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems | undefined) {
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

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // confidence_level - computed: true, optional: false, required: false
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }

  // confidence_level_details - computed: true, optional: false, required: false
  private _confidenceLevelDetails = new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsConfidenceLevelDetailsList(this, "confidence_level_details", false);
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

  // discovery_job_id - computed: true, optional: false, required: false
  public get discoveryJobId() {
    return this.getStringAttribute('discovery_job_id');
  }

  // discovery_type - computed: true, optional: false, required: false
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }

  // estimated_data_value_count - computed: true, optional: false, required: false
  public get estimatedDataValueCount() {
    return this.getStringAttribute('estimated_data_value_count');
  }

  // is_result_applied - computed: true, optional: false, required: false
  public get isResultApplied() {
    return this.getBooleanAttribute('is_result_applied');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // modified_attributes - computed: true, optional: false, required: false
  private _modifiedAttributes = new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList(this, "modified_attributes", false);
  public get modifiedAttributes() {
    return this._modifiedAttributes;
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

  // planned_action - computed: true, optional: false, required: false
  public get plannedAction() {
    return this.getStringAttribute('planned_action');
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

  // sensitive_columnkey - computed: true, optional: false, required: false
  public get sensitiveColumnkey() {
    return this.getStringAttribute('sensitive_columnkey');
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }
}

export class DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference {
    return new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection {
}

export function dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionToTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionToHclTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference {
    return new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeDiscoveryJobsResultsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeDiscoveryJobsResultsFilterToTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeDiscoveryJobsResultsFilterToHclTerraform(struct?: DataOciDataSafeDiscoveryJobsResultsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeDiscoveryJobsResultsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeDiscoveryJobsResultsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeDiscoveryJobsResultsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeDiscoveryJobsResultsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeDiscoveryJobsResultsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeDiscoveryJobsResultsFilterOutputReference {
    return new DataOciDataSafeDiscoveryJobsResultsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results oci_data_safe_discovery_jobs_results}
*/
export class DataOciDataSafeDiscoveryJobsResults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_discovery_jobs_results";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeDiscoveryJobsResults to import
  * @param importFromId The id of the existing DataOciDataSafeDiscoveryJobsResults that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeDiscoveryJobsResults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_discovery_jobs_results", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_discovery_jobs_results oci_data_safe_discovery_jobs_results} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeDiscoveryJobsResultsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeDiscoveryJobsResultsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_discovery_jobs_results',
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
    this._columnName = config.columnName;
    this._confidenceLevel = config.confidenceLevel;
    this._discoveryJobId = config.discoveryJobId;
    this._discoveryType = config.discoveryType;
    this._id = config.id;
    this._isResultApplied = config.isResultApplied;
    this._object = config.object;
    this._plannedAction = config.plannedAction;
    this._schemaName = config.schemaName;
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

  // discovery_job_id - computed: false, optional: false, required: true
  private _discoveryJobId?: string; 
  public get discoveryJobId() {
    return this.getStringAttribute('discovery_job_id');
  }
  public set discoveryJobId(value: string) {
    this._discoveryJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryJobIdInput() {
    return this._discoveryJobId;
  }

  // discovery_job_result_collection - computed: true, optional: false, required: false
  private _discoveryJobResultCollection = new DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList(this, "discovery_job_result_collection", false);
  public get discoveryJobResultCollection() {
    return this._discoveryJobResultCollection;
  }

  // discovery_type - computed: false, optional: true, required: false
  private _discoveryType?: string; 
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }
  public set discoveryType(value: string) {
    this._discoveryType = value;
  }
  public resetDiscoveryType() {
    this._discoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTypeInput() {
    return this._discoveryType;
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

  // is_result_applied - computed: false, optional: true, required: false
  private _isResultApplied?: boolean | cdktf.IResolvable; 
  public get isResultApplied() {
    return this.getBooleanAttribute('is_result_applied');
  }
  public set isResultApplied(value: boolean | cdktf.IResolvable) {
    this._isResultApplied = value;
  }
  public resetIsResultApplied() {
    this._isResultApplied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResultAppliedInput() {
    return this._isResultApplied;
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

  // planned_action - computed: false, optional: true, required: false
  private _plannedAction?: string; 
  public get plannedAction() {
    return this.getStringAttribute('planned_action');
  }
  public set plannedAction(value: string) {
    this._plannedAction = value;
  }
  public resetPlannedAction() {
    this._plannedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedActionInput() {
    return this._plannedAction;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeDiscoveryJobsResultsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeDiscoveryJobsResultsFilter[] | cdktf.IResolvable) {
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
      confidence_level: cdktf.listMapper(cdktf.stringToTerraform, false)(this._confidenceLevel),
      discovery_job_id: cdktf.stringToTerraform(this._discoveryJobId),
      discovery_type: cdktf.stringToTerraform(this._discoveryType),
      id: cdktf.stringToTerraform(this._id),
      is_result_applied: cdktf.booleanToTerraform(this._isResultApplied),
      object: cdktf.listMapper(cdktf.stringToTerraform, false)(this._object),
      planned_action: cdktf.stringToTerraform(this._plannedAction),
      schema_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaName),
      filter: cdktf.listMapper(dataOciDataSafeDiscoveryJobsResultsFilterToTerraform, true)(this._filter.internalValue),
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
      confidence_level: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._confidenceLevel),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      discovery_job_id: {
        value: cdktf.stringToHclTerraform(this._discoveryJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_type: {
        value: cdktf.stringToHclTerraform(this._discoveryType),
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
      is_result_applied: {
        value: cdktf.booleanToHclTerraform(this._isResultApplied),
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
      planned_action: {
        value: cdktf.stringToHclTerraform(this._plannedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemaName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeDiscoveryJobsResultsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeDiscoveryJobsResultsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
