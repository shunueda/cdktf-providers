// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataTaskInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Task cycle type * ONEOFF_CYCLE: One-time * YEAR_CYCLE: Year * MONTH_CYCLE: Month * WEEK_CYCLE: Week * DAY_CYCLE: Day * HOUR_CYCLE: Hour * MINUTE_CYCLE: Minute * CRONTAB_CYCLE: Crontab expression type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#cycle_type DataTencentcloudWedataTaskInstances#cycle_type}
  */
  readonly cycleType?: string;
  /**
  * Executor resource group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#executor_group_id DataTencentcloudWedataTaskInstances#executor_group_id}
  */
  readonly executorGroupId?: string;
  /**
  * Task folder ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#folder_id DataTencentcloudWedataTaskInstances#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#id DataTencentcloudWedataTaskInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance status - WAIT_EVENT: Waiting for event - WAIT_UPSTREAM: Waiting for upstream - WAIT_RUN: Waiting to run - RUNNING: Running - SKIP_RUNNING: Skipped running - FAILED_RETRY: Failed retry - EXPIRED: Failed - COMPLETED: Success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#instance_state DataTencentcloudWedataTaskInstances#instance_state}
  */
  readonly instanceState?: string;
  /**
  * Instance type - 0: Backfill type - 1: Periodic instance - 2: Non-periodic instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#instance_type DataTencentcloudWedataTaskInstances#instance_type}
  */
  readonly instanceType?: number;
  /**
  * Task name or Task ID. Supports fuzzy search filtering. Multiple values separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#keyword DataTencentcloudWedataTaskInstances#keyword}
  */
  readonly keyword?: string;
  /**
  * Instance last update time filter condition.Start time, format yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#last_update_time_from DataTencentcloudWedataTaskInstances#last_update_time_from}
  */
  readonly lastUpdateTimeFrom?: string;
  /**
  * Instance last update time filter condition.End time, format yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#last_update_time_to DataTencentcloudWedataTaskInstances#last_update_time_to}
  */
  readonly lastUpdateTimeTo?: string;
  /**
  * Task owner ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#owner_uin DataTencentcloudWedataTaskInstances#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#project_id DataTencentcloudWedataTaskInstances#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#result_output_file DataTencentcloudWedataTaskInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Instance scheduled time filter condition Start time, format yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#schedule_time_from DataTencentcloudWedataTaskInstances#schedule_time_from}
  */
  readonly scheduleTimeFrom?: string;
  /**
  * Instance scheduled time filter condition End time, format yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#schedule_time_to DataTencentcloudWedataTaskInstances#schedule_time_to}
  */
  readonly scheduleTimeTo?: string;
  /**
  * Result sorting field- SCHEDULE_DATE: Sort by scheduled time- START_TIME: Sort by execution start time- END_TIME: Sort by execution end time- COST_TIME: Sort by execution duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#sort_column DataTencentcloudWedataTaskInstances#sort_column}
  */
  readonly sortColumn?: string;
  /**
  * Sorting order: - ASC; - DESC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#sort_type DataTencentcloudWedataTaskInstances#sort_type}
  */
  readonly sortType?: string;
  /**
  * Instance execution start time filter condition Start time, format yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#start_time_from DataTencentcloudWedataTaskInstances#start_time_from}
  */
  readonly startTimeFrom?: string;
  /**
  * Instance execution start time filter condition.End time, format yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#start_time_to DataTencentcloudWedataTaskInstances#start_time_to}
  */
  readonly startTimeTo?: string;
  /**
  * Task type ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#task_type_id DataTencentcloudWedataTaskInstances#task_type_id}
  */
  readonly taskTypeId?: number;
  /**
  * Time zone. The time zone of the input time string, default UTC+8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#time_zone DataTencentcloudWedataTaskInstances#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Task workflow ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#workflow_id DataTencentcloudWedataTaskInstances#workflow_id}
  */
  readonly workflowId?: string;
}
export interface DataTencentcloudWedataTaskInstancesDataItems {
}

export function dataTencentcloudWedataTaskInstancesDataItemsToTerraform(struct?: DataTencentcloudWedataTaskInstancesDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskInstancesDataItemsToHclTerraform(struct?: DataTencentcloudWedataTaskInstancesDataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskInstancesDataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskInstancesDataItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskInstancesDataItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_time - computed: true, optional: false, required: false
  public get costTime() {
    return this.getNumberAttribute('cost_time');
  }

  // cur_run_date - computed: true, optional: false, required: false
  public get curRunDate() {
    return this.getStringAttribute('cur_run_date');
  }

  // cycle_type - computed: true, optional: false, required: false
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // executor_group_id - computed: true, optional: false, required: false
  public get executorGroupId() {
    return this.getStringAttribute('executor_group_id');
  }

  // executor_group_name - computed: true, optional: false, required: false
  public get executorGroupName() {
    return this.getStringAttribute('executor_group_name');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // folder_name - computed: true, optional: false, required: false
  public get folderName() {
    return this.getStringAttribute('folder_name');
  }

  // instance_key - computed: true, optional: false, required: false
  public get instanceKey() {
    return this.getStringAttribute('instance_key');
  }

  // instance_state - computed: true, optional: false, required: false
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // owner_uin_list - computed: true, optional: false, required: false
  public get ownerUinList() {
    return cdktf.Fn.tolist(this.getListAttribute('owner_uin_list'));
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // scheduler_time - computed: true, optional: false, required: false
  public get schedulerTime() {
    return this.getStringAttribute('scheduler_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }

  // task_type_id - computed: true, optional: false, required: false
  public get taskTypeId() {
    return this.getNumberAttribute('task_type_id');
  }

  // total_run_num - computed: true, optional: false, required: false
  public get totalRunNum() {
    return this.getNumberAttribute('total_run_num');
  }

  // tries - computed: true, optional: false, required: false
  public get tries() {
    return this.getNumberAttribute('tries');
  }

  // try_limit - computed: true, optional: false, required: false
  public get tryLimit() {
    return this.getNumberAttribute('try_limit');
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

export class DataTencentcloudWedataTaskInstancesDataItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskInstancesDataItemsOutputReference {
    return new DataTencentcloudWedataTaskInstancesDataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudWedataTaskInstancesData {
}

export function dataTencentcloudWedataTaskInstancesDataToTerraform(struct?: DataTencentcloudWedataTaskInstancesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskInstancesDataToHclTerraform(struct?: DataTencentcloudWedataTaskInstancesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskInstancesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskInstancesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskInstancesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudWedataTaskInstancesDataItemsList(this, "items", false);
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

export class DataTencentcloudWedataTaskInstancesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskInstancesDataOutputReference {
    return new DataTencentcloudWedataTaskInstancesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances tencentcloud_wedata_task_instances}
*/
export class DataTencentcloudWedataTaskInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_task_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataTaskInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataTaskInstances to import
  * @param importFromId The id of the existing DataTencentcloudWedataTaskInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataTaskInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_task_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instances tencentcloud_wedata_task_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataTaskInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataTaskInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_task_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._instanceState = config.instanceState;
    this._instanceType = config.instanceType;
    this._keyword = config.keyword;
    this._lastUpdateTimeFrom = config.lastUpdateTimeFrom;
    this._lastUpdateTimeTo = config.lastUpdateTimeTo;
    this._ownerUin = config.ownerUin;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._scheduleTimeFrom = config.scheduleTimeFrom;
    this._scheduleTimeTo = config.scheduleTimeTo;
    this._sortColumn = config.sortColumn;
    this._sortType = config.sortType;
    this._startTimeFrom = config.startTimeFrom;
    this._startTimeTo = config.startTimeTo;
    this._taskTypeId = config.taskTypeId;
    this._timeZone = config.timeZone;
    this._workflowId = config.workflowId;
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
  private _data = new DataTencentcloudWedataTaskInstancesDataList(this, "data", false);
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

  // instance_state - computed: false, optional: true, required: false
  private _instanceState?: string; 
  public get instanceState() {
    return this.getStringAttribute('instance_state');
  }
  public set instanceState(value: string) {
    this._instanceState = value;
  }
  public resetInstanceState() {
    this._instanceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStateInput() {
    return this._instanceState;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: number; 
  public get instanceType() {
    return this.getNumberAttribute('instance_type');
  }
  public set instanceType(value: number) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // last_update_time_from - computed: false, optional: true, required: false
  private _lastUpdateTimeFrom?: string; 
  public get lastUpdateTimeFrom() {
    return this.getStringAttribute('last_update_time_from');
  }
  public set lastUpdateTimeFrom(value: string) {
    this._lastUpdateTimeFrom = value;
  }
  public resetLastUpdateTimeFrom() {
    this._lastUpdateTimeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeFromInput() {
    return this._lastUpdateTimeFrom;
  }

  // last_update_time_to - computed: false, optional: true, required: false
  private _lastUpdateTimeTo?: string; 
  public get lastUpdateTimeTo() {
    return this.getStringAttribute('last_update_time_to');
  }
  public set lastUpdateTimeTo(value: string) {
    this._lastUpdateTimeTo = value;
  }
  public resetLastUpdateTimeTo() {
    this._lastUpdateTimeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeToInput() {
    return this._lastUpdateTimeTo;
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

  // schedule_time_from - computed: false, optional: true, required: false
  private _scheduleTimeFrom?: string; 
  public get scheduleTimeFrom() {
    return this.getStringAttribute('schedule_time_from');
  }
  public set scheduleTimeFrom(value: string) {
    this._scheduleTimeFrom = value;
  }
  public resetScheduleTimeFrom() {
    this._scheduleTimeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeFromInput() {
    return this._scheduleTimeFrom;
  }

  // schedule_time_to - computed: false, optional: true, required: false
  private _scheduleTimeTo?: string; 
  public get scheduleTimeTo() {
    return this.getStringAttribute('schedule_time_to');
  }
  public set scheduleTimeTo(value: string) {
    this._scheduleTimeTo = value;
  }
  public resetScheduleTimeTo() {
    this._scheduleTimeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeToInput() {
    return this._scheduleTimeTo;
  }

  // sort_column - computed: false, optional: true, required: false
  private _sortColumn?: string; 
  public get sortColumn() {
    return this.getStringAttribute('sort_column');
  }
  public set sortColumn(value: string) {
    this._sortColumn = value;
  }
  public resetSortColumn() {
    this._sortColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColumnInput() {
    return this._sortColumn;
  }

  // sort_type - computed: false, optional: true, required: false
  private _sortType?: string; 
  public get sortType() {
    return this.getStringAttribute('sort_type');
  }
  public set sortType(value: string) {
    this._sortType = value;
  }
  public resetSortType() {
    this._sortType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortTypeInput() {
    return this._sortType;
  }

  // start_time_from - computed: false, optional: true, required: false
  private _startTimeFrom?: string; 
  public get startTimeFrom() {
    return this.getStringAttribute('start_time_from');
  }
  public set startTimeFrom(value: string) {
    this._startTimeFrom = value;
  }
  public resetStartTimeFrom() {
    this._startTimeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeFromInput() {
    return this._startTimeFrom;
  }

  // start_time_to - computed: false, optional: true, required: false
  private _startTimeTo?: string; 
  public get startTimeTo() {
    return this.getStringAttribute('start_time_to');
  }
  public set startTimeTo(value: string) {
    this._startTimeTo = value;
  }
  public resetStartTimeTo() {
    this._startTimeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeToInput() {
    return this._startTimeTo;
  }

  // task_type_id - computed: false, optional: true, required: false
  private _taskTypeId?: number; 
  public get taskTypeId() {
    return this.getNumberAttribute('task_type_id');
  }
  public set taskTypeId(value: number) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cycle_type: cdktf.stringToTerraform(this._cycleType),
      executor_group_id: cdktf.stringToTerraform(this._executorGroupId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      instance_state: cdktf.stringToTerraform(this._instanceState),
      instance_type: cdktf.numberToTerraform(this._instanceType),
      keyword: cdktf.stringToTerraform(this._keyword),
      last_update_time_from: cdktf.stringToTerraform(this._lastUpdateTimeFrom),
      last_update_time_to: cdktf.stringToTerraform(this._lastUpdateTimeTo),
      owner_uin: cdktf.stringToTerraform(this._ownerUin),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      schedule_time_from: cdktf.stringToTerraform(this._scheduleTimeFrom),
      schedule_time_to: cdktf.stringToTerraform(this._scheduleTimeTo),
      sort_column: cdktf.stringToTerraform(this._sortColumn),
      sort_type: cdktf.stringToTerraform(this._sortType),
      start_time_from: cdktf.stringToTerraform(this._startTimeFrom),
      start_time_to: cdktf.stringToTerraform(this._startTimeTo),
      task_type_id: cdktf.numberToTerraform(this._taskTypeId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
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
      instance_state: {
        value: cdktf.stringToHclTerraform(this._instanceState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.numberToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_update_time_from: {
        value: cdktf.stringToHclTerraform(this._lastUpdateTimeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_update_time_to: {
        value: cdktf.stringToHclTerraform(this._lastUpdateTimeTo),
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
      schedule_time_from: {
        value: cdktf.stringToHclTerraform(this._scheduleTimeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_time_to: {
        value: cdktf.stringToHclTerraform(this._scheduleTimeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_column: {
        value: cdktf.stringToHclTerraform(this._sortColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_type: {
        value: cdktf.stringToHclTerraform(this._sortType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time_from: {
        value: cdktf.stringToHclTerraform(this._startTimeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time_to: {
        value: cdktf.stringToHclTerraform(this._startTimeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type_id: {
        value: cdktf.numberToHclTerraform(this._taskTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
