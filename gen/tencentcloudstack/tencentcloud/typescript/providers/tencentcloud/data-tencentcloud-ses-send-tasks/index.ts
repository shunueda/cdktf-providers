// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSesSendTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks#id DataTencentcloudSesSendTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Recipient group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks#receiver_id DataTencentcloudSesSendTasks#receiver_id}
  */
  readonly receiverId?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks#result_output_file DataTencentcloudSesSendTasks#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Task status. `1`: to start; `5`: sending; `6`: sending suspended today; `7`: sending error; `10`: sent. To query tasks in all states, do not pass in this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks#status DataTencentcloudSesSendTasks#status}
  */
  readonly status?: number;
  /**
  * Task type. `1`: immediate; `2`: scheduled; `3`: recurring. To query tasks of all types, do not pass in this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks#task_type DataTencentcloudSesSendTasks#task_type}
  */
  readonly taskType?: number;
}
export interface DataTencentcloudSesSendTasksDataCycleParam {
}

export function dataTencentcloudSesSendTasksDataCycleParamToTerraform(struct?: DataTencentcloudSesSendTasksDataCycleParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSesSendTasksDataCycleParamToHclTerraform(struct?: DataTencentcloudSesSendTasksDataCycleParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSesSendTasksDataCycleParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSesSendTasksDataCycleParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSesSendTasksDataCycleParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin_time - computed: true, optional: false, required: false
  public get beginTime() {
    return this.getStringAttribute('begin_time');
  }

  // interval_time - computed: true, optional: false, required: false
  public get intervalTime() {
    return this.getNumberAttribute('interval_time');
  }

  // term_cycle - computed: true, optional: false, required: false
  public get termCycle() {
    return this.getNumberAttribute('term_cycle');
  }
}

export class DataTencentcloudSesSendTasksDataCycleParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSesSendTasksDataCycleParamOutputReference {
    return new DataTencentcloudSesSendTasksDataCycleParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSesSendTasksDataTemplate {
}

export function dataTencentcloudSesSendTasksDataTemplateToTerraform(struct?: DataTencentcloudSesSendTasksDataTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSesSendTasksDataTemplateToHclTerraform(struct?: DataTencentcloudSesSendTasksDataTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSesSendTasksDataTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSesSendTasksDataTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSesSendTasksDataTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template_data - computed: true, optional: false, required: false
  public get templateData() {
    return this.getStringAttribute('template_data');
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
}

export class DataTencentcloudSesSendTasksDataTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSesSendTasksDataTemplateOutputReference {
    return new DataTencentcloudSesSendTasksDataTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSesSendTasksDataTimedParam {
}

export function dataTencentcloudSesSendTasksDataTimedParamToTerraform(struct?: DataTencentcloudSesSendTasksDataTimedParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSesSendTasksDataTimedParamToHclTerraform(struct?: DataTencentcloudSesSendTasksDataTimedParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSesSendTasksDataTimedParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSesSendTasksDataTimedParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSesSendTasksDataTimedParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin_time - computed: true, optional: false, required: false
  public get beginTime() {
    return this.getStringAttribute('begin_time');
  }
}

export class DataTencentcloudSesSendTasksDataTimedParamList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSesSendTasksDataTimedParamOutputReference {
    return new DataTencentcloudSesSendTasksDataTimedParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudSesSendTasksData {
}

export function dataTencentcloudSesSendTasksDataToTerraform(struct?: DataTencentcloudSesSendTasksData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSesSendTasksDataToHclTerraform(struct?: DataTencentcloudSesSendTasksData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSesSendTasksDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSesSendTasksData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSesSendTasksData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_count - computed: true, optional: false, required: false
  public get cacheCount() {
    return this.getNumberAttribute('cache_count');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cycle_param - computed: true, optional: false, required: false
  private _cycleParam = new DataTencentcloudSesSendTasksDataCycleParamList(this, "cycle_param", false);
  public get cycleParam() {
    return this._cycleParam;
  }

  // err_msg - computed: true, optional: false, required: false
  public get errMsg() {
    return this.getStringAttribute('err_msg');
  }

  // from_email_address - computed: true, optional: false, required: false
  public get fromEmailAddress() {
    return this.getStringAttribute('from_email_address');
  }

  // receiver_id - computed: true, optional: false, required: false
  public get receiverId() {
    return this.getNumberAttribute('receiver_id');
  }

  // receivers_name - computed: true, optional: false, required: false
  public get receiversName() {
    return this.getStringAttribute('receivers_name');
  }

  // request_count - computed: true, optional: false, required: false
  public get requestCount() {
    return this.getNumberAttribute('request_count');
  }

  // send_count - computed: true, optional: false, required: false
  public get sendCount() {
    return this.getNumberAttribute('send_count');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getNumberAttribute('task_id');
  }

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getNumberAttribute('task_status');
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getNumberAttribute('task_type');
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataTencentcloudSesSendTasksDataTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }

  // timed_param - computed: true, optional: false, required: false
  private _timedParam = new DataTencentcloudSesSendTasksDataTimedParamList(this, "timed_param", false);
  public get timedParam() {
    return this._timedParam;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudSesSendTasksDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSesSendTasksDataOutputReference {
    return new DataTencentcloudSesSendTasksDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks tencentcloud_ses_send_tasks}
*/
export class DataTencentcloudSesSendTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ses_send_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSesSendTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSesSendTasks to import
  * @param importFromId The id of the existing DataTencentcloudSesSendTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSesSendTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ses_send_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/ses_send_tasks tencentcloud_ses_send_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSesSendTasksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSesSendTasksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ses_send_tasks',
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
    this._id = config.id;
    this._receiverId = config.receiverId;
    this._resultOutputFile = config.resultOutputFile;
    this._status = config.status;
    this._taskType = config.taskType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudSesSendTasksDataList(this, "data", false);
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

  // receiver_id - computed: false, optional: true, required: false
  private _receiverId?: number; 
  public get receiverId() {
    return this.getNumberAttribute('receiver_id');
  }
  public set receiverId(value: number) {
    this._receiverId = value;
  }
  public resetReceiverId() {
    this._receiverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIdInput() {
    return this._receiverId;
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
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: number; 
  public get taskType() {
    return this.getNumberAttribute('task_type');
  }
  public set taskType(value: number) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      receiver_id: cdktf.numberToTerraform(this._receiverId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      status: cdktf.numberToTerraform(this._status),
      task_type: cdktf.numberToTerraform(this._taskType),
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
      receiver_id: {
        value: cdktf.numberToHclTerraform(this._receiverId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_type: {
        value: cdktf.numberToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
