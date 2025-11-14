// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#optimizer_statistics_collection_operation_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation#optimizer_statistics_collection_operation_id}
  */
  readonly optimizerStatisticsCollectionOperationId: number;
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabase | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks {
}

export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasks | undefined) {
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

export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation oci_database_management_managed_database_optimizer_statistics_collection_operation}
*/
export class DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_optimizer_statistics_collection_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_optimizer_statistics_collection_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_optimizer_statistics_collection_operation oci_database_management_managed_database_optimizer_statistics_collection_operation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_optimizer_statistics_collection_operation',
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
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._optimizerStatisticsCollectionOperationId = config.optimizerStatisticsCollectionOperationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // completed_count - computed: true, optional: false, required: false
  public get completedCount() {
    return this.getNumberAttribute('completed_count');
  }

  // database - computed: true, optional: false, required: false
  private _database = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationDatabaseList(this, "database", false);
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

  // in_progress_count - computed: true, optional: false, required: false
  public get inProgressCount() {
    return this.getNumberAttribute('in_progress_count');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
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

  // operation_name - computed: true, optional: false, required: false
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }

  // optimizer_statistics_collection_operation_id - computed: false, optional: false, required: true
  private _optimizerStatisticsCollectionOperationId?: number; 
  public get optimizerStatisticsCollectionOperationId() {
    return this.getNumberAttribute('optimizer_statistics_collection_operation_id');
  }
  public set optimizerStatisticsCollectionOperationId(value: number) {
    this._optimizerStatisticsCollectionOperationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerStatisticsCollectionOperationIdInput() {
    return this._optimizerStatisticsCollectionOperationId;
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
  private _tasks = new DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsCollectionOperationTasksList(this, "tasks", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      optimizer_statistics_collection_operation_id: cdktf.numberToTerraform(this._optimizerStatisticsCollectionOperationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      optimizer_statistics_collection_operation_id: {
        value: cdktf.numberToHclTerraform(this._optimizerStatisticsCollectionOperationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
