// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataOpsTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Task Cycle Type: ONEOFF_CYCLE: One-time, YEAR_CYCLE: Yearly, MONTH_CYCLE: Monthly, WEEK_CYCLE: Weekly, DAY_CYCLE: Daily, HOUR_CYCLE: Hourly, MINUTE_CYCLE: Minute-level, CRONTAB_CYCLE: Crontab expression-based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#cycle_type DataTencentcloudWedataOpsTasks#cycle_type}
  */
  readonly cycleType?: string;
  /**
  * Executor Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#executor_group_id DataTencentcloudWedataOpsTasks#executor_group_id}
  */
  readonly executorGroupId?: string;
  /**
  * Folder ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#folder_id DataTencentcloudWedataOpsTasks#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#id DataTencentcloudWedataOpsTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Owner id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#owner_uin DataTencentcloudWedataOpsTasks#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#project_id DataTencentcloudWedataOpsTasks#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#result_output_file DataTencentcloudWedataOpsTasks#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Data source ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#source_service_id DataTencentcloudWedataOpsTasks#source_service_id}
  */
  readonly sourceServiceId?: string;
  /**
  * Task Status: -Y: Running, -F: Stopped, -O: Frozen, -T: Stopping, -INVALID: Invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#status DataTencentcloudWedataOpsTasks#status}
  */
  readonly status?: string;
  /**
  * Target data source id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#target_service_id DataTencentcloudWedataOpsTasks#target_service_id}
  */
  readonly targetServiceId?: string;
  /**
  * Task type Id. -20: common data sync, - 25:ETLTaskType, - 26:ETLTaskType, - 30:python, - 31:pyspark, - 34:HiveSQLTaskType, - 35:shell, - 36:SparkSQLTaskType, - 21:JDBCSQLTaskType, - 32:DLCTaskType, - 33:ImpalaTaskType, - 40:CDWTaskType, - 41:kettle, - 46:DLCSparkTaskType, -47: TiOne machine learning, - 48:TrinoTaskType, - 50:DLCPyspark39:spark, - 92:mr, -38: shell script, -70: hivesql script, -1000: common custom business.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#task_type_id DataTencentcloudWedataOpsTasks#task_type_id}
  */
  readonly taskTypeId?: string;
  /**
  * Time zone. defaults to UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#time_zone DataTencentcloudWedataOpsTasks#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Workflow ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#workflow_id DataTencentcloudWedataOpsTasks#workflow_id}
  */
  readonly workflowId?: string;
  /**
  * Workflow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#workflow_name DataTencentcloudWedataOpsTasks#workflow_name}
  */
  readonly workflowName?: string;
}
export interface DataTencentcloudWedataOpsTasksDataItems {
}

export function dataTencentcloudWedataOpsTasksDataItemsToTerraform(struct?: DataTencentcloudWedataOpsTasksDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsTasksDataItemsToHclTerraform(struct?: DataTencentcloudWedataOpsTasksDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsTasksDataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsTasksDataItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsTasksDataItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cycle_type - computed: true, optional: false, required: false
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }

  // executor_group_id - computed: true, optional: false, required: false
  public get executorGroupId() {
    return this.getStringAttribute('executor_group_id');
  }

  // executor_group_name - computed: true, optional: false, required: false
  public get executorGroupName() {
    return this.getStringAttribute('executor_group_name');
  }

  // first_run_time - computed: true, optional: false, required: false
  public get firstRunTime() {
    return this.getStringAttribute('first_run_time');
  }

  // first_submit_time - computed: true, optional: false, required: false
  public get firstSubmitTime() {
    return this.getStringAttribute('first_submit_time');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // folder_name - computed: true, optional: false, required: false
  public get folderName() {
    return this.getStringAttribute('folder_name');
  }

  // last_scheduler_commit_time - computed: true, optional: false, required: false
  public get lastSchedulerCommitTime() {
    return this.getStringAttribute('last_scheduler_commit_time');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // schedule_desc - computed: true, optional: false, required: false
  public get scheduleDesc() {
    return this.getStringAttribute('schedule_desc');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_type_desc - computed: true, optional: false, required: false
  public get taskTypeDesc() {
    return this.getStringAttribute('task_type_desc');
  }

  // task_type_id - computed: true, optional: false, required: false
  public get taskTypeId() {
    return this.getNumberAttribute('task_type_id');
  }

  // update_user_uin - computed: true, optional: false, required: false
  public get updateUserUin() {
    return this.getStringAttribute('update_user_uin');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }

  // workflow_name - computed: true, optional: false, required: false
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
}

export class DataTencentcloudWedataOpsTasksDataItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsTasksDataItemsOutputReference {
    return new DataTencentcloudWedataOpsTasksDataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataOpsTasksData {
}

export function dataTencentcloudWedataOpsTasksDataToTerraform(struct?: DataTencentcloudWedataOpsTasksData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataOpsTasksDataToHclTerraform(struct?: DataTencentcloudWedataOpsTasksData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataOpsTasksDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataOpsTasksData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataOpsTasksData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudWedataOpsTasksDataItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // page_number - computed: true, optional: false, required: false
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // total_page_number - computed: true, optional: false, required: false
  public get totalPageNumber() {
    return this.getNumberAttribute('total_page_number');
  }
}

export class DataTencentcloudWedataOpsTasksDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataOpsTasksDataOutputReference {
    return new DataTencentcloudWedataOpsTasksDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks tencentcloud_wedata_ops_tasks}
*/
export class DataTencentcloudWedataOpsTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_ops_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataOpsTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataOpsTasks to import
  * @param importFromId The id of the existing DataTencentcloudWedataOpsTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataOpsTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_ops_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/wedata_ops_tasks tencentcloud_wedata_ops_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataOpsTasksConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataOpsTasksConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_ops_tasks',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cycleType = config.cycleType;
    this._executorGroupId = config.executorGroupId;
    this._folderId = config.folderId;
    this._id = config.id;
    this._ownerUin = config.ownerUin;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._sourceServiceId = config.sourceServiceId;
    this._status = config.status;
    this._targetServiceId = config.targetServiceId;
    this._taskTypeId = config.taskTypeId;
    this._timeZone = config.timeZone;
    this._workflowId = config.workflowId;
    this._workflowName = config.workflowName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cycle_type - computed: false, optional: true, required: false
  private _cycleType?: string; 
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }
  public set cycleType(value: string) {
    this._cycleType = value;
  }
  public resetCycleType() {
    this._cycleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleTypeInput() {
    return this._cycleType;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataOpsTasksDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // executor_group_id - computed: false, optional: true, required: false
  private _executorGroupId?: string; 
  public get executorGroupId() {
    return this.getStringAttribute('executor_group_id');
  }
  public set executorGroupId(value: string) {
    this._executorGroupId = value;
  }
  public resetExecutorGroupId() {
    this._executorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorGroupIdInput() {
    return this._executorGroupId;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // owner_uin - computed: false, optional: true, required: false
  private _ownerUin?: string; 
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }
  public set ownerUin(value: string) {
    this._ownerUin = value;
  }
  public resetOwnerUin() {
    this._ownerUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUinInput() {
    return this._ownerUin;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // source_service_id - computed: false, optional: true, required: false
  private _sourceServiceId?: string; 
  public get sourceServiceId() {
    return this.getStringAttribute('source_service_id');
  }
  public set sourceServiceId(value: string) {
    this._sourceServiceId = value;
  }
  public resetSourceServiceId() {
    this._sourceServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceIdInput() {
    return this._sourceServiceId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target_service_id - computed: false, optional: true, required: false
  private _targetServiceId?: string; 
  public get targetServiceId() {
    return this.getStringAttribute('target_service_id');
  }
  public set targetServiceId(value: string) {
    this._targetServiceId = value;
  }
  public resetTargetServiceId() {
    this._targetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceIdInput() {
    return this._targetServiceId;
  }

  // task_type_id - computed: false, optional: true, required: false
  private _taskTypeId?: string; 
  public get taskTypeId() {
    return this.getStringAttribute('task_type_id');
  }
  public set taskTypeId(value: string) {
    this._taskTypeId = value;
  }
  public resetTaskTypeId() {
    this._taskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeIdInput() {
    return this._taskTypeId;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // workflow_id - computed: false, optional: true, required: false
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  public resetWorkflowId() {
    this._workflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // workflow_name - computed: false, optional: true, required: false
  private _workflowName?: string; 
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string) {
    this._workflowName = value;
  }
  public resetWorkflowName() {
    this._workflowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cycle_type: cdktf.stringToTerraform(this._cycleType),
      executor_group_id: cdktf.stringToTerraform(this._executorGroupId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      owner_uin: cdktf.stringToTerraform(this._ownerUin),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      source_service_id: cdktf.stringToTerraform(this._sourceServiceId),
      status: cdktf.stringToTerraform(this._status),
      target_service_id: cdktf.stringToTerraform(this._targetServiceId),
      task_type_id: cdktf.stringToTerraform(this._taskTypeId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      workflow_name: cdktf.stringToTerraform(this._workflowName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cycle_type: {
        value: cdktf.stringToHclTerraform(this._cycleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executor_group_id: {
        value: cdktf.stringToHclTerraform(this._executorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      owner_uin: {
        value: cdktf.stringToHclTerraform(this._ownerUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_service_id: {
        value: cdktf.stringToHclTerraform(this._sourceServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_service_id: {
        value: cdktf.stringToHclTerraform(this._targetServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type_id: {
        value: cdktf.stringToHclTerraform(this._taskTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_name: {
        value: cdktf.stringToHclTerraform(this._workflowName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
