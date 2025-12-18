// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#end_time_less_than_or_equal_to}
  */
  readonly endTimeLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#group_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#group_type}
  */
  readonly groupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#start_time_greater_than_or_equal_to}
  */
  readonly startTimeGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#task_type}
  */
  readonly taskType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed - computed: true, optional: false, required: false
  public get completed() {
    return this.getNumberAttribute('completed');
  }

  // failed - computed: true, optional: false, required: false
  public get failed() {
    return this.getNumberAttribute('failed');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }

  // in_progress - computed: true, optional: false, required: false
  public get inProgress() {
    return this.getNumberAttribute('in_progress');
  }

  // pending - computed: true, optional: false, required: false
  public get pending() {
    return this.getNumberAttribute('pending');
  }

  // skipped - computed: true, optional: false, required: false
  public get skipped() {
    return this.getNumberAttribute('skipped');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // timed_out - computed: true, optional: false, required: false
  public get timedOut() {
    return this.getNumberAttribute('timed_out');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getNumberAttribute('unknown');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations oci_database_management_managed_database_optimizer_statistics_collection_aggregations}
*/
export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_optimizer_statistics_collection_aggregations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_optimizer_statistics_collection_aggregations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_aggregations oci_database_management_managed_database_optimizer_statistics_collection_aggregations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_optimizer_statistics_collection_aggregations',
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
    this._endTimeLessThanOrEqualTo = config.endTimeLessThanOrEqualTo;
    this._groupType = config.groupType;
    this._id = config.id;
    this._limit = config.limit;
    this._managedDatabaseId = config.managedDatabaseId;
    this._startTimeGreaterThanOrEqualTo = config.startTimeGreaterThanOrEqualTo;
    this._taskType = config.taskType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time_less_than_or_equal_to - computed: false, optional: true, required: false
  private _endTimeLessThanOrEqualTo?: string; 
  public get endTimeLessThanOrEqualTo() {
    return this.getStringAttribute('end_time_less_than_or_equal_to');
  }
  public set endTimeLessThanOrEqualTo(value: string) {
    this._endTimeLessThanOrEqualTo = value;
  }
  public resetEndTimeLessThanOrEqualTo() {
    this._endTimeLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeLessThanOrEqualToInput() {
    return this._endTimeLessThanOrEqualTo;
  }

  // group_type - computed: false, optional: false, required: true
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // optimizer_statistics_collection_aggregations_collection - computed: true, optional: false, required: false
  private _optimizerStatisticsCollectionAggregationsCollection = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsOptimizerStatisticsCollectionAggregationsCollectionList(this, "optimizer_statistics_collection_aggregations_collection", false);
  public get optimizerStatisticsCollectionAggregationsCollection() {
    return this._optimizerStatisticsCollectionAggregationsCollection;
  }

  // start_time_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _startTimeGreaterThanOrEqualTo?: string; 
  public get startTimeGreaterThanOrEqualTo() {
    return this.getStringAttribute('start_time_greater_than_or_equal_to');
  }
  public set startTimeGreaterThanOrEqualTo(value: string) {
    this._startTimeGreaterThanOrEqualTo = value;
  }
  public resetStartTimeGreaterThanOrEqualTo() {
    this._startTimeGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeGreaterThanOrEqualToInput() {
    return this._startTimeGreaterThanOrEqualTo;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilter[] | cdktf.IResolvable) {
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
      end_time_less_than_or_equal_to: cdktf.stringToTerraform(this._endTimeLessThanOrEqualTo),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      start_time_greater_than_or_equal_to: cdktf.stringToTerraform(this._startTimeGreaterThanOrEqualTo),
      task_type: cdktf.stringToTerraform(this._taskType),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._endTimeLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._startTimeGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionAggregationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
