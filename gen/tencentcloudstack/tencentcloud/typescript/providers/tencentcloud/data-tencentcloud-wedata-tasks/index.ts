// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bundle id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#bundle_id DataTencentcloudWedataTasks#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * Creation time range (yyyy-MM-dd HH:MM:ss). Two time values must be provided in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#create_time DataTencentcloudWedataTasks#create_time}
  */
  readonly createTime?: string[];
  /**
  * Creator ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#create_user_uin DataTencentcloudWedataTasks#create_user_uin}
  */
  readonly createUserUin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#id DataTencentcloudWedataTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Modification time range (yyyy-MM-dd HH:mm:ss). Two time values must be provided in the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#modify_time DataTencentcloudWedataTasks#modify_time}
  */
  readonly modifyTime?: string[];
  /**
  * Owner ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#owner_uin DataTencentcloudWedataTasks#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#project_id DataTencentcloudWedataTasks#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#result_output_file DataTencentcloudWedataTasks#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Task Status:
  * * N: New
  * * Y: Scheduling
  * * F: Offline
  * * O: Paused
  * * T: Offlining
  * * INVALID: Invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#status DataTencentcloudWedataTasks#status}
  */
  readonly status?: string;
  /**
  * Submission status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#submit DataTencentcloudWedataTasks#submit}
  */
  readonly submit?: boolean | cdktf.IResolvable;
  /**
  * Task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#task_name DataTencentcloudWedataTasks#task_name}
  */
  readonly taskName?: string;
  /**
  * Task type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#task_type_id DataTencentcloudWedataTasks#task_type_id}
  */
  readonly taskTypeId?: number;
  /**
  * Workflow ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#workflow_id DataTencentcloudWedataTasks#workflow_id}
  */
  readonly workflowId?: string;
}
export interface DataTencentcloudWedataTasksData {
}

export function dataTencentcloudWedataTasksDataToTerraform(struct?: DataTencentcloudWedataTasksData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTasksDataToHclTerraform(struct?: DataTencentcloudWedataTasksData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTasksDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTasksData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTasksData | undefined) {
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

  // create_user_uin - computed: true, optional: false, required: false
  public get createUserUin() {
    return this.getStringAttribute('create_user_uin');
  }

  // last_ops_time - computed: true, optional: false, required: false
  public get lastOpsTime() {
    return this.getStringAttribute('last_ops_time');
  }

  // last_ops_user_name - computed: true, optional: false, required: false
  public get lastOpsUserName() {
    return this.getStringAttribute('last_ops_user_name');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // last_update_user_name - computed: true, optional: false, required: false
  public get lastUpdateUserName() {
    return this.getStringAttribute('last_update_user_name');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // submit - computed: true, optional: false, required: false
  public get submit() {
    return this.getBooleanAttribute('submit');
  }

  // task_description - computed: true, optional: false, required: false
  public get taskDescription() {
    return this.getStringAttribute('task_description');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_latest_submit_version_no - computed: true, optional: false, required: false
  public get taskLatestSubmitVersionNo() {
    return this.getStringAttribute('task_latest_submit_version_no');
  }

  // task_latest_version_no - computed: true, optional: false, required: false
  public get taskLatestVersionNo() {
    return this.getStringAttribute('task_latest_version_no');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
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

export class DataTencentcloudWedataTasksDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTasksDataOutputReference {
    return new DataTencentcloudWedataTasksDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks tencentcloud_wedata_tasks}
*/
export class DataTencentcloudWedataTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataTasks to import
  * @param importFromId The id of the existing DataTencentcloudWedataTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_tasks tencentcloud_wedata_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataTasksConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataTasksConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_tasks',
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
    this._bundleId = config.bundleId;
    this._createTime = config.createTime;
    this._createUserUin = config.createUserUin;
    this._id = config.id;
    this._modifyTime = config.modifyTime;
    this._ownerUin = config.ownerUin;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
    this._submit = config.submit;
    this._taskName = config.taskName;
    this._taskTypeId = config.taskTypeId;
    this._workflowId = config.workflowId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string[]; 
  public get createTime() {
    return cdktf.Fn.tolist(this.getListAttribute('create_time'));
  }
  public set createTime(value: string[]) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // create_user_uin - computed: false, optional: true, required: false
  private _createUserUin?: string; 
  public get createUserUin() {
    return this.getStringAttribute('create_user_uin');
  }
  public set createUserUin(value: string) {
    this._createUserUin = value;
  }
  public resetCreateUserUin() {
    this._createUserUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUserUinInput() {
    return this._createUserUin;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataTasksDataList(this, "data", false);
  public get data() {
    return this._data;
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

  // modify_time - computed: false, optional: true, required: false
  private _modifyTime?: string[]; 
  public get modifyTime() {
    return cdktf.Fn.tolist(this.getListAttribute('modify_time'));
  }
  public set modifyTime(value: string[]) {
    this._modifyTime = value;
  }
  public resetModifyTime() {
    this._modifyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTimeInput() {
    return this._modifyTime;
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

  // submit - computed: false, optional: true, required: false
  private _submit?: boolean | cdktf.IResolvable; 
  public get submit() {
    return this.getBooleanAttribute('submit');
  }
  public set submit(value: boolean | cdktf.IResolvable) {
    this._submit = value;
  }
  public resetSubmit() {
    this._submit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitInput() {
    return this._submit;
  }

  // task_name - computed: false, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
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
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      create_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._createTime),
      create_user_uin: cdktf.stringToTerraform(this._createUserUin),
      id: cdktf.stringToTerraform(this._id),
      modify_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._modifyTime),
      owner_uin: cdktf.stringToTerraform(this._ownerUin),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.stringToTerraform(this._status),
      submit: cdktf.booleanToTerraform(this._submit),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_type_id: cdktf.numberToTerraform(this._taskTypeId),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._createTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      create_user_uin: {
        value: cdktf.stringToHclTerraform(this._createUserUin),
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
      modify_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._modifyTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      submit: {
        value: cdktf.booleanToHclTerraform(this._submit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
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
