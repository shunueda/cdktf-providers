// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudRedisInstanceTaskListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#begin_time DataTencentcloudRedisInstanceTaskList#begin_time}
  */
  readonly beginTime?: string;
  /**
  * Termination time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#end_time DataTencentcloudRedisInstanceTaskList#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#id DataTencentcloudRedisInstanceTaskList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#instance_id DataTencentcloudRedisInstanceTaskList#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#instance_name DataTencentcloudRedisInstanceTaskList#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Operator Uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#operate_uin DataTencentcloudRedisInstanceTaskList#operate_uin}
  */
  readonly operateUin?: string[];
  /**
  * Project Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#project_ids DataTencentcloudRedisInstanceTaskList#project_ids}
  */
  readonly projectIds?: number[];
  /**
  * Task status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#result DataTencentcloudRedisInstanceTaskList#result}
  */
  readonly result?: number[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#result_output_file DataTencentcloudRedisInstanceTaskList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Task status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#task_status DataTencentcloudRedisInstanceTaskList#task_status}
  */
  readonly taskStatus?: number[];
  /**
  * Task type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#task_types DataTencentcloudRedisInstanceTaskList#task_types}
  */
  readonly taskTypes?: string[];
}
export interface DataTencentcloudRedisInstanceTaskListTasks {
}

export function dataTencentcloudRedisInstanceTaskListTasksToTerraform(struct?: DataTencentcloudRedisInstanceTaskListTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudRedisInstanceTaskListTasksToHclTerraform(struct?: DataTencentcloudRedisInstanceTaskListTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudRedisInstanceTaskListTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudRedisInstanceTaskListTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudRedisInstanceTaskListTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getNumberAttribute('result');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getNumberAttribute('task_id');
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export class DataTencentcloudRedisInstanceTaskListTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudRedisInstanceTaskListTasksOutputReference {
    return new DataTencentcloudRedisInstanceTaskListTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list tencentcloud_redis_instance_task_list}
*/
export class DataTencentcloudRedisInstanceTaskList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_redis_instance_task_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudRedisInstanceTaskList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudRedisInstanceTaskList to import
  * @param importFromId The id of the existing DataTencentcloudRedisInstanceTaskList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudRedisInstanceTaskList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_redis_instance_task_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/redis_instance_task_list tencentcloud_redis_instance_task_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudRedisInstanceTaskListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudRedisInstanceTaskListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_redis_instance_task_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._beginTime = config.beginTime;
    this._endTime = config.endTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceName = config.instanceName;
    this._operateUin = config.operateUin;
    this._projectIds = config.projectIds;
    this._result = config.result;
    this._resultOutputFile = config.resultOutputFile;
    this._taskStatus = config.taskStatus;
    this._taskTypes = config.taskTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // begin_time - computed: false, optional: true, required: false
  private _beginTime?: string; 
  public get beginTime() {
    return this.getStringAttribute('begin_time');
  }
  public set beginTime(value: string) {
    this._beginTime = value;
  }
  public resetBeginTime() {
    this._beginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginTimeInput() {
    return this._beginTime;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // operate_uin - computed: false, optional: true, required: false
  private _operateUin?: string[]; 
  public get operateUin() {
    return cdktf.Fn.tolist(this.getListAttribute('operate_uin'));
  }
  public set operateUin(value: string[]) {
    this._operateUin = value;
  }
  public resetOperateUin() {
    this._operateUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operateUinInput() {
    return this._operateUin;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: number[]; 
  public get projectIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('project_ids')));
  }
  public set projectIds(value: number[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // result - computed: false, optional: true, required: false
  private _result?: number[]; 
  public get result() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('result')));
  }
  public set result(value: number[]) {
    this._result = value;
  }
  public resetResult() {
    this._result = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
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

  // task_status - computed: false, optional: true, required: false
  private _taskStatus?: number[]; 
  public get taskStatus() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('task_status')));
  }
  public set taskStatus(value: number[]) {
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

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataTencentcloudRedisInstanceTaskListTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      begin_time: cdktf.stringToTerraform(this._beginTime),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      operate_uin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operateUin),
      project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._projectIds),
      result: cdktf.listMapper(cdktf.numberToTerraform, false)(this._result),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      task_status: cdktf.listMapper(cdktf.numberToTerraform, false)(this._taskStatus),
      task_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taskTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      begin_time: {
        value: cdktf.stringToHclTerraform(this._beginTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operate_uin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operateUin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      result: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._result),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_status: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._taskStatus),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
