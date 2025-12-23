// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWedataTaskInstanceLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log#id DataTencentcloudWedataTaskInstanceLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique instance identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log#instance_key DataTencentcloudWedataTaskInstanceLog#instance_key}
  */
  readonly instanceKey: string;
  /**
  * Instance lifecycle number, identifying a specific execution of the instance. For example: the first run of a periodic instance is 0, if manually rerun the second execution is 1; defaults to the latest execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log#life_round_num DataTencentcloudWedataTaskInstanceLog#life_round_num}
  */
  readonly lifeRoundNum?: number;
  /**
  * Log level, default All - Info - Debug - Warn - Error - All.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log#log_level DataTencentcloudWedataTaskInstanceLog#log_level}
  */
  readonly logLevel?: string;
  /**
  * Pagination cursor for log queries, no business meaning. First query uses null, subsequent queries use NextCursor from previous response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log#next_cursor DataTencentcloudWedataTaskInstanceLog#next_cursor}
  */
  readonly nextCursor?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log#project_id DataTencentcloudWedataTaskInstanceLog#project_id}
  */
  readonly projectId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log#result_output_file DataTencentcloudWedataTaskInstanceLog#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudWedataTaskInstanceLogData {
}

export function dataTencentcloudWedataTaskInstanceLogDataToTerraform(struct?: DataTencentcloudWedataTaskInstanceLogData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudWedataTaskInstanceLogDataToHclTerraform(struct?: DataTencentcloudWedataTaskInstanceLogData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudWedataTaskInstanceLogDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudWedataTaskInstanceLogData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudWedataTaskInstanceLogData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_content - computed: true, optional: false, required: false
  public get codeContent() {
    return this.getStringAttribute('code_content');
  }

  // instance_key - computed: true, optional: false, required: false
  public get instanceKey() {
    return this.getStringAttribute('instance_key');
  }

  // log_info - computed: true, optional: false, required: false
  public get logInfo() {
    return this.getStringAttribute('log_info');
  }

  // next_cursor - computed: true, optional: false, required: false
  public get nextCursor() {
    return this.getStringAttribute('next_cursor');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

export class DataTencentcloudWedataTaskInstanceLogDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudWedataTaskInstanceLogDataOutputReference {
    return new DataTencentcloudWedataTaskInstanceLogDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log tencentcloud_wedata_task_instance_log}
*/
export class DataTencentcloudWedataTaskInstanceLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_task_instance_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWedataTaskInstanceLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWedataTaskInstanceLog to import
  * @param importFromId The id of the existing DataTencentcloudWedataTaskInstanceLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWedataTaskInstanceLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_task_instance_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/wedata_task_instance_log tencentcloud_wedata_task_instance_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWedataTaskInstanceLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWedataTaskInstanceLogConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_task_instance_log',
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
    this._id = config.id;
    this._instanceKey = config.instanceKey;
    this._lifeRoundNum = config.lifeRoundNum;
    this._logLevel = config.logLevel;
    this._nextCursor = config.nextCursor;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataTencentcloudWedataTaskInstanceLogDataList(this, "data", false);
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

  // instance_key - computed: false, optional: false, required: true
  private _instanceKey?: string; 
  public get instanceKey() {
    return this.getStringAttribute('instance_key');
  }
  public set instanceKey(value: string) {
    this._instanceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceKeyInput() {
    return this._instanceKey;
  }

  // life_round_num - computed: false, optional: true, required: false
  private _lifeRoundNum?: number; 
  public get lifeRoundNum() {
    return this.getNumberAttribute('life_round_num');
  }
  public set lifeRoundNum(value: number) {
    this._lifeRoundNum = value;
  }
  public resetLifeRoundNum() {
    this._lifeRoundNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeRoundNumInput() {
    return this._lifeRoundNum;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // next_cursor - computed: false, optional: true, required: false
  private _nextCursor?: string; 
  public get nextCursor() {
    return this.getStringAttribute('next_cursor');
  }
  public set nextCursor(value: string) {
    this._nextCursor = value;
  }
  public resetNextCursor() {
    this._nextCursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextCursorInput() {
    return this._nextCursor;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_key: cdktf.stringToTerraform(this._instanceKey),
      life_round_num: cdktf.numberToTerraform(this._lifeRoundNum),
      log_level: cdktf.stringToTerraform(this._logLevel),
      next_cursor: cdktf.stringToTerraform(this._nextCursor),
      project_id: cdktf.stringToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      instance_key: {
        value: cdktf.stringToHclTerraform(this._instanceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      life_round_num: {
        value: cdktf.numberToHclTerraform(this._lifeRoundNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_cursor: {
        value: cdktf.stringToHclTerraform(this._nextCursor),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
