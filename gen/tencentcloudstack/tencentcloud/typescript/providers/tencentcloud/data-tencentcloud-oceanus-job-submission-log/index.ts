// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudOceanusJobSubmissionLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cursor, default empty, first request does not need to pass in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#cursor DataTencentcloudOceanusJobSubmissionLog#cursor}
  */
  readonly cursor?: string;
  /**
  * End time, unix timestamp, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#end_time DataTencentcloudOceanusJobSubmissionLog#end_time}
  */
  readonly endTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#id DataTencentcloudOceanusJobSubmissionLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Job ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#job_id DataTencentcloudOceanusJobSubmissionLog#job_id}
  */
  readonly jobId: string;
  /**
  * Keyword, default empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#keyword DataTencentcloudOceanusJobSubmissionLog#keyword}
  */
  readonly keyword?: string;
  /**
  * Sorting method, default asc, asc: ascending, desc: descending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#order_type DataTencentcloudOceanusJobSubmissionLog#order_type}
  */
  readonly orderType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#result_output_file DataTencentcloudOceanusJobSubmissionLog#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Job instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#running_order_id DataTencentcloudOceanusJobSubmissionLog#running_order_id}
  */
  readonly runningOrderId?: number;
  /**
  * Start time, unix timestamp, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#start_time DataTencentcloudOceanusJobSubmissionLog#start_time}
  */
  readonly startTime: number;
}
export interface DataTencentcloudOceanusJobSubmissionLogJobInstanceListStruct {
}

export function dataTencentcloudOceanusJobSubmissionLogJobInstanceListStructToTerraform(struct?: DataTencentcloudOceanusJobSubmissionLogJobInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOceanusJobSubmissionLogJobInstanceListStructToHclTerraform(struct?: DataTencentcloudOceanusJobSubmissionLogJobInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOceanusJobSubmissionLogJobInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOceanusJobSubmissionLogJobInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOceanusJobSubmissionLogJobInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_instance_start_time - computed: true, optional: false, required: false
  public get jobInstanceStartTime() {
    return this.getStringAttribute('job_instance_start_time');
  }

  // running_order_id - computed: true, optional: false, required: false
  public get runningOrderId() {
    return this.getNumberAttribute('running_order_id');
  }

  // starting_millis - computed: true, optional: false, required: false
  public get startingMillis() {
    return this.getNumberAttribute('starting_millis');
  }
}

export class DataTencentcloudOceanusJobSubmissionLogJobInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOceanusJobSubmissionLogJobInstanceListStructOutputReference {
    return new DataTencentcloudOceanusJobSubmissionLogJobInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudOceanusJobSubmissionLogLogContentListStruct {
}

export function dataTencentcloudOceanusJobSubmissionLogLogContentListStructToTerraform(struct?: DataTencentcloudOceanusJobSubmissionLogLogContentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOceanusJobSubmissionLogLogContentListStructToHclTerraform(struct?: DataTencentcloudOceanusJobSubmissionLogLogContentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOceanusJobSubmissionLogLogContentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOceanusJobSubmissionLogLogContentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOceanusJobSubmissionLogLogContentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getStringAttribute('log');
  }

  // pkg_id - computed: true, optional: false, required: false
  public get pkgId() {
    return this.getStringAttribute('pkg_id');
  }

  // pkg_log_id - computed: true, optional: false, required: false
  public get pkgLogId() {
    return this.getNumberAttribute('pkg_log_id');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getNumberAttribute('time');
  }
}

export class DataTencentcloudOceanusJobSubmissionLogLogContentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOceanusJobSubmissionLogLogContentListStructOutputReference {
    return new DataTencentcloudOceanusJobSubmissionLogLogContentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log tencentcloud_oceanus_job_submission_log}
*/
export class DataTencentcloudOceanusJobSubmissionLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_job_submission_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudOceanusJobSubmissionLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudOceanusJobSubmissionLog to import
  * @param importFromId The id of the existing DataTencentcloudOceanusJobSubmissionLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudOceanusJobSubmissionLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_job_submission_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/oceanus_job_submission_log tencentcloud_oceanus_job_submission_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudOceanusJobSubmissionLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudOceanusJobSubmissionLogConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_job_submission_log',
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
    this._cursor = config.cursor;
    this._endTime = config.endTime;
    this._id = config.id;
    this._jobId = config.jobId;
    this._keyword = config.keyword;
    this._orderType = config.orderType;
    this._resultOutputFile = config.resultOutputFile;
    this._runningOrderId = config.runningOrderId;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cursor - computed: true, optional: true, required: false
  private _cursor?: string; 
  public get cursor() {
    return this.getStringAttribute('cursor');
  }
  public set cursor(value: string) {
    this._cursor = value;
  }
  public resetCursor() {
    this._cursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_instance_list - computed: true, optional: false, required: false
  private _jobInstanceList = new DataTencentcloudOceanusJobSubmissionLogJobInstanceListStructList(this, "job_instance_list", false);
  public get jobInstanceList() {
    return this._jobInstanceList;
  }

  // job_request_id - computed: true, optional: false, required: false
  public get jobRequestId() {
    return this.getStringAttribute('job_request_id');
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

  // list_over - computed: true, optional: false, required: false
  public get listOver() {
    return this.getBooleanAttribute('list_over');
  }

  // log_content_list - computed: true, optional: false, required: false
  private _logContentList = new DataTencentcloudOceanusJobSubmissionLogLogContentListStructList(this, "log_content_list", false);
  public get logContentList() {
    return this._logContentList;
  }

  // log_list - computed: true, optional: false, required: false
  public get logList() {
    return cdktf.Fn.tolist(this.getListAttribute('log_list'));
  }

  // order_type - computed: false, optional: true, required: false
  private _orderType?: string; 
  public get orderType() {
    return this.getStringAttribute('order_type');
  }
  public set orderType(value: string) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
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

  // running_order_id - computed: false, optional: true, required: false
  private _runningOrderId?: number; 
  public get runningOrderId() {
    return this.getNumberAttribute('running_order_id');
  }
  public set runningOrderId(value: number) {
    this._runningOrderId = value;
  }
  public resetRunningOrderId() {
    this._runningOrderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningOrderIdInput() {
    return this._runningOrderId;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cursor: cdktf.stringToTerraform(this._cursor),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      keyword: cdktf.stringToTerraform(this._keyword),
      order_type: cdktf.stringToTerraform(this._orderType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      running_order_id: cdktf.numberToTerraform(this._runningOrderId),
      start_time: cdktf.numberToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cursor: {
        value: cdktf.stringToHclTerraform(this._cursor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword: {
        value: cdktf.stringToHclTerraform(this._keyword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_type: {
        value: cdktf.stringToHclTerraform(this._orderType),
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
      running_order_id: {
        value: cdktf.numberToHclTerraform(this._runningOrderId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
