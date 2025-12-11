// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#group_by}
  */
  readonly groupBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#id DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#is_regular_expression}
  */
  readonly isRegularExpression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#log_search_text}
  */
  readonly logSearchText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#time_greater_than_or_equal_to}
  */
  readonly timeGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#time_less_than_or_equal_to}
  */
  readonly timeLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#type_filter}
  */
  readonly typeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#urgency_filter}
  */
  readonly urgencyFilter?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#filter DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems {
}

export function dataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }
}

export class DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection {
}

export function dataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#name DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#regex DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#values DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts oci_database_management_managed_database_attention_log_counts}
*/
export class DataOciDatabaseManagementManagedDatabaseAttentionLogCounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_attention_log_counts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAttentionLogCounts to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseAttentionLogCounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAttentionLogCounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_attention_log_counts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_managed_database_attention_log_counts oci_database_management_managed_database_attention_log_counts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_attention_log_counts',
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
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._isRegularExpression = config.isRegularExpression;
    this._logSearchText = config.logSearchText;
    this._managedDatabaseId = config.managedDatabaseId;
    this._timeGreaterThanOrEqualTo = config.timeGreaterThanOrEqualTo;
    this._timeLessThanOrEqualTo = config.timeLessThanOrEqualTo;
    this._typeFilter = config.typeFilter;
    this._urgencyFilter = config.urgencyFilter;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attention_log_counts_collection - computed: true, optional: false, required: false
  private _attentionLogCountsCollection = new DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList(this, "attention_log_counts_collection", false);
  public get attentionLogCountsCollection() {
    return this._attentionLogCountsCollection;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // is_regular_expression - computed: false, optional: true, required: false
  private _isRegularExpression?: boolean | cdktf.IResolvable; 
  public get isRegularExpression() {
    return this.getBooleanAttribute('is_regular_expression');
  }
  public set isRegularExpression(value: boolean | cdktf.IResolvable) {
    this._isRegularExpression = value;
  }
  public resetIsRegularExpression() {
    this._isRegularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegularExpressionInput() {
    return this._isRegularExpression;
  }

  // log_search_text - computed: false, optional: true, required: false
  private _logSearchText?: string; 
  public get logSearchText() {
    return this.getStringAttribute('log_search_text');
  }
  public set logSearchText(value: string) {
    this._logSearchText = value;
  }
  public resetLogSearchText() {
    this._logSearchText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSearchTextInput() {
    return this._logSearchText;
  }

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
  }

  // time_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeGreaterThanOrEqualTo?: string; 
  public get timeGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_greater_than_or_equal_to');
  }
  public set timeGreaterThanOrEqualTo(value: string) {
    this._timeGreaterThanOrEqualTo = value;
  }
  public resetTimeGreaterThanOrEqualTo() {
    this._timeGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGreaterThanOrEqualToInput() {
    return this._timeGreaterThanOrEqualTo;
  }

  // time_less_than_or_equal_to - computed: false, optional: true, required: false
  private _timeLessThanOrEqualTo?: string; 
  public get timeLessThanOrEqualTo() {
    return this.getStringAttribute('time_less_than_or_equal_to');
  }
  public set timeLessThanOrEqualTo(value: string) {
    this._timeLessThanOrEqualTo = value;
  }
  public resetTimeLessThanOrEqualTo() {
    this._timeLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLessThanOrEqualToInput() {
    return this._timeLessThanOrEqualTo;
  }

  // type_filter - computed: false, optional: true, required: false
  private _typeFilter?: string; 
  public get typeFilter() {
    return this.getStringAttribute('type_filter');
  }
  public set typeFilter(value: string) {
    this._typeFilter = value;
  }
  public resetTypeFilter() {
    this._typeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeFilterInput() {
    return this._typeFilter;
  }

  // urgency_filter - computed: false, optional: true, required: false
  private _urgencyFilter?: string; 
  public get urgencyFilter() {
    return this.getStringAttribute('urgency_filter');
  }
  public set urgencyFilter(value: string) {
    this._urgencyFilter = value;
  }
  public resetUrgencyFilter() {
    this._urgencyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyFilterInput() {
    return this._urgencyFilter;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter[] | cdktf.IResolvable) {
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
      group_by: cdktf.stringToTerraform(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      is_regular_expression: cdktf.booleanToTerraform(this._isRegularExpression),
      log_search_text: cdktf.stringToTerraform(this._logSearchText),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      time_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeGreaterThanOrEqualTo),
      time_less_than_or_equal_to: cdktf.stringToTerraform(this._timeLessThanOrEqualTo),
      type_filter: cdktf.stringToTerraform(this._typeFilter),
      urgency_filter: cdktf.stringToTerraform(this._urgencyFilter),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_by: {
        value: cdktf.stringToHclTerraform(this._groupBy),
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
      is_regular_expression: {
        value: cdktf.booleanToHclTerraform(this._isRegularExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_search_text: {
        value: cdktf.stringToHclTerraform(this._logSearchText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_filter: {
        value: cdktf.stringToHclTerraform(this._typeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urgency_filter: {
        value: cdktf.stringToHclTerraform(this._urgencyFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
