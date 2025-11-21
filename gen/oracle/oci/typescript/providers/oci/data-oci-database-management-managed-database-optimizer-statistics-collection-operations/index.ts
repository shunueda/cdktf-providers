// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#end_time_less_than_or_equal_to}
  */
  readonly endTimeLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#filter_by DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#filter_by}
  */
  readonly filterBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#limit DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#start_time_greater_than_or_equal_to}
  */
  readonly startTimeGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#task_type DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#task_type}
  */
  readonly taskType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#filter}
  */
  readonly filter?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_deployment_type - computed: true, optional: false, required: false
  public get dbDeploymentType() {
    return this.getStringAttribute('db_deployment_type');
  }

  // db_sub_type - computed: true, optional: false, required: false
  public get dbSubType() {
    return this.getStringAttribute('db_sub_type');
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completed_count - computed: true, optional: false, required: false
  public get completedCount() {
    return this.getNumberAttribute('completed_count');
  }

  // database - computed: true, optional: false, required: false
  private _database = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsDatabaseList(this, "database", false);
  public get database() {
    return this._database;
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // failed_count - computed: true, optional: false, required: false
  public get failedCount() {
    return this.getNumberAttribute('failed_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // in_progress_count - computed: true, optional: false, required: false
  public get inProgressCount() {
    return this.getNumberAttribute('in_progress_count');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
  }

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // timed_out_count - computed: true, optional: false, required: false
  public get timedOutCount() {
    return this.getNumberAttribute('timed_out_count');
  }

  // total_objects_count - computed: true, optional: false, required: false
  public get totalObjectsCount() {
    return this.getNumberAttribute('total_objects_count');
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations oci_database_management_managed_database_optimizer_statistics_collection_operations}
*/
export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_optimizer_statistics_collection_operations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_optimizer_statistics_collection_operations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operations oci_database_management_managed_database_optimizer_statistics_collection_operations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_optimizer_statistics_collection_operations',
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
    this._endTimeLessThanOrEqualTo = config.endTimeLessThanOrEqualTo;
    this._filterBy = config.filterBy;
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

  // filter_by - computed: false, optional: true, required: false
  private _filterBy?: string; 
  public get filterBy() {
    return this.getStringAttribute('filter_by');
  }
  public set filterBy(value: string) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
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

  // optimizer_statistics_collection_operations_collection - computed: true, optional: false, required: false
  private _optimizerStatisticsCollectionOperationsCollection = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsOptimizerStatisticsCollectionOperationsCollectionList(this, "optimizer_statistics_collection_operations_collection", false);
  public get optimizerStatisticsCollectionOperationsCollection() {
    return this._optimizerStatisticsCollectionOperationsCollection;
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
  private _filter = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilter[] | cdktf.IResolvable) {
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
      filter_by: cdktf.stringToTerraform(this._filterBy),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      start_time_greater_than_or_equal_to: cdktf.stringToTerraform(this._startTimeGreaterThanOrEqualTo),
      task_type: cdktf.stringToTerraform(this._taskType),
      filter: cdktf.listMapper(dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterToTerraform, true)(this._filter.internalValue),
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
      filter_by: {
        value: cdktf.stringToHclTerraform(this._filterBy),
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
        value: cdktf.listMapperHcl(dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
