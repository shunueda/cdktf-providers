// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}
  */
  readonly filterColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}
  */
  readonly managedMySqlDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}
  */
  readonly startTime: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avg_timer_wait - computed: true, optional: false, required: false
  public get avgTimerWait() {
    return this.getNumberAttribute('avg_timer_wait');
  }

  // count_star - computed: true, optional: false, required: false
  public get countStar() {
    return this.getNumberAttribute('count_star');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // digest_text - computed: true, optional: false, required: false
  public get digestText() {
    return this.getStringAttribute('digest_text');
  }

  // first_seen - computed: true, optional: false, required: false
  public get firstSeen() {
    return this.getStringAttribute('first_seen');
  }

  // heat_wave_offloaded - computed: true, optional: false, required: false
  public get heatWaveOffloaded() {
    return this.getNumberAttribute('heat_wave_offloaded');
  }

  // heat_wave_out_of_memory - computed: true, optional: false, required: false
  public get heatWaveOutOfMemory() {
    return this.getNumberAttribute('heat_wave_out_of_memory');
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }

  // max_controlled_memory - computed: true, optional: false, required: false
  public get maxControlledMemory() {
    return this.getStringAttribute('max_controlled_memory');
  }

  // max_timer_wait - computed: true, optional: false, required: false
  public get maxTimerWait() {
    return this.getNumberAttribute('max_timer_wait');
  }

  // max_total_memory - computed: true, optional: false, required: false
  public get maxTotalMemory() {
    return this.getStringAttribute('max_total_memory');
  }

  // min_timer_wait - computed: true, optional: false, required: false
  public get minTimerWait() {
    return this.getNumberAttribute('min_timer_wait');
  }

  // quantile95 - computed: true, optional: false, required: false
  public get quantile95() {
    return this.getNumberAttribute('quantile95');
  }

  // quantile99 - computed: true, optional: false, required: false
  public get quantile99() {
    return this.getNumberAttribute('quantile99');
  }

  // quantile999 - computed: true, optional: false, required: false
  public get quantile999() {
    return this.getNumberAttribute('quantile999');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sum_cpu_time - computed: true, optional: false, required: false
  public get sumCpuTime() {
    return this.getStringAttribute('sum_cpu_time');
  }

  // sum_created_temp_disk_tables - computed: true, optional: false, required: false
  public get sumCreatedTempDiskTables() {
    return this.getNumberAttribute('sum_created_temp_disk_tables');
  }

  // sum_created_temp_tables - computed: true, optional: false, required: false
  public get sumCreatedTempTables() {
    return this.getNumberAttribute('sum_created_temp_tables');
  }

  // sum_errors - computed: true, optional: false, required: false
  public get sumErrors() {
    return this.getNumberAttribute('sum_errors');
  }

  // sum_lock_time - computed: true, optional: false, required: false
  public get sumLockTime() {
    return this.getNumberAttribute('sum_lock_time');
  }

  // sum_no_good_index_used - computed: true, optional: false, required: false
  public get sumNoGoodIndexUsed() {
    return this.getNumberAttribute('sum_no_good_index_used');
  }

  // sum_no_index_used - computed: true, optional: false, required: false
  public get sumNoIndexUsed() {
    return this.getNumberAttribute('sum_no_index_used');
  }

  // sum_rows_affected - computed: true, optional: false, required: false
  public get sumRowsAffected() {
    return this.getNumberAttribute('sum_rows_affected');
  }

  // sum_rows_examined - computed: true, optional: false, required: false
  public get sumRowsExamined() {
    return this.getNumberAttribute('sum_rows_examined');
  }

  // sum_rows_sent - computed: true, optional: false, required: false
  public get sumRowsSent() {
    return this.getNumberAttribute('sum_rows_sent');
  }

  // sum_select_full_join - computed: true, optional: false, required: false
  public get sumSelectFullJoin() {
    return this.getNumberAttribute('sum_select_full_join');
  }

  // sum_select_full_range_join - computed: true, optional: false, required: false
  public get sumSelectFullRangeJoin() {
    return this.getNumberAttribute('sum_select_full_range_join');
  }

  // sum_select_range - computed: true, optional: false, required: false
  public get sumSelectRange() {
    return this.getNumberAttribute('sum_select_range');
  }

  // sum_select_range_check - computed: true, optional: false, required: false
  public get sumSelectRangeCheck() {
    return this.getNumberAttribute('sum_select_range_check');
  }

  // sum_select_scan - computed: true, optional: false, required: false
  public get sumSelectScan() {
    return this.getNumberAttribute('sum_select_scan');
  }

  // sum_sort_merge_passes - computed: true, optional: false, required: false
  public get sumSortMergePasses() {
    return this.getNumberAttribute('sum_sort_merge_passes');
  }

  // sum_sort_range - computed: true, optional: false, required: false
  public get sumSortRange() {
    return this.getNumberAttribute('sum_sort_range');
  }

  // sum_sort_rows - computed: true, optional: false, required: false
  public get sumSortRows() {
    return this.getNumberAttribute('sum_sort_rows');
  }

  // sum_sort_scan - computed: true, optional: false, required: false
  public get sumSortScan() {
    return this.getNumberAttribute('sum_sort_scan');
  }

  // sum_timer_wait - computed: true, optional: false, required: false
  public get sumTimerWait() {
    return this.getNumberAttribute('sum_timer_wait');
  }

  // sum_warnings - computed: true, optional: false, required: false
  public get sumWarnings() {
    return this.getNumberAttribute('sum_warnings');
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection {
}

export function dataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterToTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference {
    return new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data oci_database_management_managed_my_sql_database_sql_data}
*/
export class DataOciDatabaseManagementManagedMySqlDatabaseSqlData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_my_sql_database_sql_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseSqlData that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_my_sql_database_sql_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_my_sql_database_sql_data oci_database_management_managed_my_sql_database_sql_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_my_sql_database_sql_data',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endTime = config.endTime;
    this._filterColumn = config.filterColumn;
    this._id = config.id;
    this._managedMySqlDatabaseId = config.managedMySqlDatabaseId;
    this._startTime = config.startTime;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // filter_column - computed: false, optional: true, required: false
  private _filterColumn?: string; 
  public get filterColumn() {
    return this.getStringAttribute('filter_column');
  }
  public set filterColumn(value: string) {
    this._filterColumn = value;
  }
  public resetFilterColumn() {
    this._filterColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterColumnInput() {
    return this._filterColumn;
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

  // managed_my_sql_database_id - computed: false, optional: false, required: true
  private _managedMySqlDatabaseId?: string; 
  public get managedMySqlDatabaseId() {
    return this.getStringAttribute('managed_my_sql_database_id');
  }
  public set managedMySqlDatabaseId(value: string) {
    this._managedMySqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMySqlDatabaseIdInput() {
    return this._managedMySqlDatabaseId;
  }

  // my_sql_data_collection - computed: true, optional: false, required: false
  private _mySqlDataCollection = new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList(this, "my_sql_data_collection", false);
  public get mySqlDataCollection() {
    return this._mySqlDataCollection;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter[] | cdktf.IResolvable) {
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
      end_time: cdktf.stringToTerraform(this._endTime),
      filter_column: cdktf.stringToTerraform(this._filterColumn),
      id: cdktf.stringToTerraform(this._id),
      managed_my_sql_database_id: cdktf.stringToTerraform(this._managedMySqlDatabaseId),
      start_time: cdktf.stringToTerraform(this._startTime),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_column: {
        value: cdktf.stringToHclTerraform(this._filterColumn),
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
      managed_my_sql_database_id: {
        value: cdktf.stringToHclTerraform(this._managedMySqlDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
