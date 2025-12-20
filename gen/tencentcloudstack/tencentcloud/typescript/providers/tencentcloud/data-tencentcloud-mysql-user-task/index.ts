// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMysqlUserTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Asynchronous task request ID, the AsyncRequestId returned by executing cloud database-related operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#async_request_id DataTencentcloudMysqlUserTask#async_request_id}
  */
  readonly asyncRequestId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#id DataTencentcloudMysqlUserTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, the format is: cdb-c1nl9rpv, which is the same as the instance ID displayed on the cloud database console page, and you can use the [query instance list] (https://cloud.tencent.com/document/api/236/15872) interface Gets the value of the field InstanceId in the output parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#instance_id DataTencentcloudMysqlUserTask#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#result_output_file DataTencentcloudMysqlUserTask#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The start time of the first task, used for range query, the time format is as follows: 2017-12-31 10:40:01.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#start_time_begin DataTencentcloudMysqlUserTask#start_time_begin}
  */
  readonly startTimeBegin?: string;
  /**
  * The start time of the last task, used for range query, the time format is as follows: 2017-12-31 10:40:01.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#start_time_end DataTencentcloudMysqlUserTask#start_time_end}
  */
  readonly startTimeEnd?: string;
  /**
  * Task status. If no value is passed, all task statuses will be queried. Supported values include: `UNDEFINED` - undefined; `INITIAL` - initialization; `RUNNING` - running; `SUCCEED` - the execution was successful; `FAILED` - execution failed; `KILLED` - terminated; `REMOVED` - removed; `PAUSED` - Paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#task_status DataTencentcloudMysqlUserTask#task_status}
  */
  readonly taskStatus?: string[];
  /**
  * Task type. If no value is passed, all task types will be queried. Supported values include: `ROLLBACK` - database rollback; `SQL OPERATION` - SQL operation; `IMPORT DATA` - data import; `MODIFY PARAM` - parameter setting; `INITIAL` - initialize the cloud database instance; `REBOOT` - restarts the cloud database instance; `OPEN GTID` - open the cloud database instance GTID; `UPGRADE RO` - read-only instance upgrade; `BATCH ROLLBACK` - database batch rollback; `UPGRADE MASTER` - master upgrade; `DROP TABLES` - delete cloud database tables; `SWITCH DR TO MASTER` - The disaster recovery instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#task_types DataTencentcloudMysqlUserTask#task_types}
  */
  readonly taskTypes?: string[];
}
export interface DataTencentcloudMysqlUserTaskItems {
}

export function dataTencentcloudMysqlUserTaskItemsToTerraform(struct?: DataTencentcloudMysqlUserTaskItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMysqlUserTaskItemsToHclTerraform(struct?: DataTencentcloudMysqlUserTaskItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMysqlUserTaskItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMysqlUserTaskItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMysqlUserTaskItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // async_request_id - computed: true, optional: false, required: false
  public get asyncRequestId() {
    return this.getStringAttribute('async_request_id');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getStringAttribute('task_status');
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export class DataTencentcloudMysqlUserTaskItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMysqlUserTaskItemsOutputReference {
    return new DataTencentcloudMysqlUserTaskItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task tencentcloud_mysql_user_task}
*/
export class DataTencentcloudMysqlUserTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_user_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMysqlUserTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMysqlUserTask to import
  * @param importFromId The id of the existing DataTencentcloudMysqlUserTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMysqlUserTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_user_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/mysql_user_task tencentcloud_mysql_user_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMysqlUserTaskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMysqlUserTaskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_user_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asyncRequestId = config.asyncRequestId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._resultOutputFile = config.resultOutputFile;
    this._startTimeBegin = config.startTimeBegin;
    this._startTimeEnd = config.startTimeEnd;
    this._taskStatus = config.taskStatus;
    this._taskTypes = config.taskTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_request_id - computed: false, optional: true, required: false
  private _asyncRequestId?: string; 
  public get asyncRequestId() {
    return this.getStringAttribute('async_request_id');
  }
  public set asyncRequestId(value: string) {
    this._asyncRequestId = value;
  }
  public resetAsyncRequestId() {
    this._asyncRequestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncRequestIdInput() {
    return this._asyncRequestId;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudMysqlUserTaskItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // start_time_begin - computed: false, optional: true, required: false
  private _startTimeBegin?: string; 
  public get startTimeBegin() {
    return this.getStringAttribute('start_time_begin');
  }
  public set startTimeBegin(value: string) {
    this._startTimeBegin = value;
  }
  public resetStartTimeBegin() {
    this._startTimeBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeBeginInput() {
    return this._startTimeBegin;
  }

  // start_time_end - computed: false, optional: true, required: false
  private _startTimeEnd?: string; 
  public get startTimeEnd() {
    return this.getStringAttribute('start_time_end');
  }
  public set startTimeEnd(value: string) {
    this._startTimeEnd = value;
  }
  public resetStartTimeEnd() {
    this._startTimeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeEndInput() {
    return this._startTimeEnd;
  }

  // task_status - computed: false, optional: true, required: false
  private _taskStatus?: string[]; 
  public get taskStatus() {
    return cdktf.Fn.tolist(this.getListAttribute('task_status'));
  }
  public set taskStatus(value: string[]) {
    this._taskStatus = value;
  }
  public resetTaskStatus() {
    this._taskStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskStatusInput() {
    return this._taskStatus;
  }

  // task_types - computed: false, optional: true, required: false
  private _taskTypes?: string[]; 
  public get taskTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('task_types'));
  }
  public set taskTypes(value: string[]) {
    this._taskTypes = value;
  }
  public resetTaskTypes() {
    this._taskTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypesInput() {
    return this._taskTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      async_request_id: cdktf.stringToTerraform(this._asyncRequestId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time_begin: cdktf.stringToTerraform(this._startTimeBegin),
      start_time_end: cdktf.stringToTerraform(this._startTimeEnd),
      task_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskStatus),
      task_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      async_request_id: {
        value: cdktf.stringToHclTerraform(this._asyncRequestId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      start_time_begin: {
        value: cdktf.stringToHclTerraform(this._startTimeBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time_end: {
        value: cdktf.stringToHclTerraform(this._startTimeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taskStatus),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      task_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taskTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
