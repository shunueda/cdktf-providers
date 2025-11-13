// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCosBatchsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Appid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs#appid DataTencentcloudCosBatchs#appid}
  */
  readonly appid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs#id DataTencentcloudCosBatchs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The task status information you need to query. If you do not specify a task status, COS returns the status of all tasks that have been executed, including those that are in progress. If you specify a task status, COS returns the task in the specified state. Optional task states include: Active, Cancelled, Cancelling, Complete, Completing, Failed, Failing, New, Paused, Pausing, Preparing, Ready, Suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs#job_statuses DataTencentcloudCosBatchs#job_statuses}
  */
  readonly jobStatuses?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs#result_output_file DataTencentcloudCosBatchs#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs#uin DataTencentcloudCosBatchs#uin}
  */
  readonly uin: string;
}
export interface DataTencentcloudCosBatchsJobsProgressSummary {
}

export function dataTencentcloudCosBatchsJobsProgressSummaryToTerraform(struct?: DataTencentcloudCosBatchsJobsProgressSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCosBatchsJobsProgressSummaryToHclTerraform(struct?: DataTencentcloudCosBatchsJobsProgressSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCosBatchsJobsProgressSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCosBatchsJobsProgressSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCosBatchsJobsProgressSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_of_tasks_failed - computed: true, optional: false, required: false
  public get numberOfTasksFailed() {
    return this.getNumberAttribute('number_of_tasks_failed');
  }

  // number_of_tasks_succeeded - computed: true, optional: false, required: false
  public get numberOfTasksSucceeded() {
    return this.getNumberAttribute('number_of_tasks_succeeded');
  }

  // total_number_of_tasks - computed: true, optional: false, required: false
  public get totalNumberOfTasks() {
    return this.getNumberAttribute('total_number_of_tasks');
  }
}

export class DataTencentcloudCosBatchsJobsProgressSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCosBatchsJobsProgressSummaryOutputReference {
    return new DataTencentcloudCosBatchsJobsProgressSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCosBatchsJobs {
}

export function dataTencentcloudCosBatchsJobsToTerraform(struct?: DataTencentcloudCosBatchsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCosBatchsJobsToHclTerraform(struct?: DataTencentcloudCosBatchsJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCosBatchsJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCosBatchsJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCosBatchsJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // progress_summary - computed: true, optional: false, required: false
  private _progressSummary = new DataTencentcloudCosBatchsJobsProgressSummaryList(this, "progress_summary", false);
  public get progressSummary() {
    return this._progressSummary;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // termination_date - computed: true, optional: false, required: false
  public get terminationDate() {
    return this.getStringAttribute('termination_date');
  }
}

export class DataTencentcloudCosBatchsJobsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCosBatchsJobsOutputReference {
    return new DataTencentcloudCosBatchsJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs tencentcloud_cos_batchs}
*/
export class DataTencentcloudCosBatchs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cos_batchs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCosBatchs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCosBatchs to import
  * @param importFromId The id of the existing DataTencentcloudCosBatchs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCosBatchs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cos_batchs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/cos_batchs tencentcloud_cos_batchs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCosBatchsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCosBatchsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cos_batchs',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appid = config.appid;
    this._id = config.id;
    this._jobStatuses = config.jobStatuses;
    this._resultOutputFile = config.resultOutputFile;
    this._uin = config.uin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appid - computed: false, optional: false, required: true
  private _appid?: number; 
  public get appid() {
    return this.getNumberAttribute('appid');
  }
  public set appid(value: number) {
    this._appid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appidInput() {
    return this._appid;
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

  // job_statuses - computed: false, optional: true, required: false
  private _jobStatuses?: string; 
  public get jobStatuses() {
    return this.getStringAttribute('job_statuses');
  }
  public set jobStatuses(value: string) {
    this._jobStatuses = value;
  }
  public resetJobStatuses() {
    this._jobStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStatusesInput() {
    return this._jobStatuses;
  }

  // jobs - computed: true, optional: false, required: false
  private _jobs = new DataTencentcloudCosBatchsJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
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

  // uin - computed: false, optional: false, required: true
  private _uin?: string; 
  public get uin() {
    return this.getStringAttribute('uin');
  }
  public set uin(value: string) {
    this._uin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uinInput() {
    return this._uin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appid: cdktf.numberToTerraform(this._appid),
      id: cdktf.stringToTerraform(this._id),
      job_statuses: cdktf.stringToTerraform(this._jobStatuses),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      uin: cdktf.stringToTerraform(this._uin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appid: {
        value: cdktf.numberToHclTerraform(this._appid),
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
      job_statuses: {
        value: cdktf.stringToHclTerraform(this._jobStatuses),
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
      uin: {
        value: cdktf.stringToHclTerraform(this._uin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
