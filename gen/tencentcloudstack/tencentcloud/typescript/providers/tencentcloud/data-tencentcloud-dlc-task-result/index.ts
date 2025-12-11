// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcTaskResultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result#id DataTencentcloudDlcTaskResult#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to convert the data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result#is_transform_data_type DataTencentcloudDlcTaskResult#is_transform_data_type}
  */
  readonly isTransformDataType?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of returned rows. Value range: 0-1,000. Default value: 1,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result#max_results DataTencentcloudDlcTaskResult#max_results}
  */
  readonly maxResults?: number;
  /**
  * The pagination information returned by the last response. This parameter can be omitted for the first response, where the data will be returned from the beginning. The data with a volume set by the `MaxResults` field is returned each time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result#next_token DataTencentcloudDlcTaskResult#next_token}
  */
  readonly nextToken?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result#result_output_file DataTencentcloudDlcTaskResult#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Unique task ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result#task_id DataTencentcloudDlcTaskResult#task_id}
  */
  readonly taskId: string;
}
export interface DataTencentcloudDlcTaskResultTaskInfoResultSchema {
}

export function dataTencentcloudDlcTaskResultTaskInfoResultSchemaToTerraform(struct?: DataTencentcloudDlcTaskResultTaskInfoResultSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcTaskResultTaskInfoResultSchemaToHclTerraform(struct?: DataTencentcloudDlcTaskResultTaskInfoResultSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcTaskResultTaskInfoResultSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcTaskResultTaskInfoResultSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcTaskResultTaskInfoResultSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // is_partition - computed: true, optional: false, required: false
  public get isPartition() {
    return this.getBooleanAttribute('is_partition');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nullable - computed: true, optional: false, required: false
  public get nullable() {
    return this.getStringAttribute('nullable');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudDlcTaskResultTaskInfoResultSchemaList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcTaskResultTaskInfoResultSchemaOutputReference {
    return new DataTencentcloudDlcTaskResultTaskInfoResultSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDlcTaskResultTaskInfo {
}

export function dataTencentcloudDlcTaskResultTaskInfoToTerraform(struct?: DataTencentcloudDlcTaskResultTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcTaskResultTaskInfoToHclTerraform(struct?: DataTencentcloudDlcTaskResultTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcTaskResultTaskInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcTaskResultTaskInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcTaskResultTaskInfo | undefined) {
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

  // data_amount - computed: true, optional: false, required: false
  public get dataAmount() {
    return this.getNumberAttribute('data_amount');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // datasource_connection_name - computed: true, optional: false, required: false
  public get datasourceConnectionName() {
    return this.getStringAttribute('datasource_connection_name');
  }

  // display_format - computed: true, optional: false, required: false
  public get displayFormat() {
    return this.getStringAttribute('display_format');
  }

  // next_token - computed: true, optional: false, required: false
  public get nextToken() {
    return this.getStringAttribute('next_token');
  }

  // output_message - computed: true, optional: false, required: false
  public get outputMessage() {
    return this.getStringAttribute('output_message');
  }

  // output_path - computed: true, optional: false, required: false
  public get outputPath() {
    return this.getStringAttribute('output_path');
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }

  // progress_detail - computed: true, optional: false, required: false
  public get progressDetail() {
    return this.getStringAttribute('progress_detail');
  }

  // query_result_time - computed: true, optional: false, required: false
  public get queryResultTime() {
    return this.getNumberAttribute('query_result_time');
  }

  // result_schema - computed: true, optional: false, required: false
  private _resultSchema = new DataTencentcloudDlcTaskResultTaskInfoResultSchemaList(this, "result_schema", false);
  public get resultSchema() {
    return this._resultSchema;
  }

  // result_set - computed: true, optional: false, required: false
  public get resultSet() {
    return this.getStringAttribute('result_set');
  }

  // row_affect_info - computed: true, optional: false, required: false
  public get rowAffectInfo() {
    return this.getStringAttribute('row_affect_info');
  }

  // sql - computed: true, optional: false, required: false
  public get sql() {
    return this.getStringAttribute('sql');
  }

  // sql_type - computed: true, optional: false, required: false
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // total_time - computed: true, optional: false, required: false
  public get totalTime() {
    return this.getNumberAttribute('total_time');
  }

  // used_time - computed: true, optional: false, required: false
  public get usedTime() {
    return this.getNumberAttribute('used_time');
  }
}

export class DataTencentcloudDlcTaskResultTaskInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcTaskResultTaskInfoOutputReference {
    return new DataTencentcloudDlcTaskResultTaskInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result tencentcloud_dlc_task_result}
*/
export class DataTencentcloudDlcTaskResult extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_task_result";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcTaskResult resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcTaskResult to import
  * @param importFromId The id of the existing DataTencentcloudDlcTaskResult that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcTaskResult to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_task_result", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/dlc_task_result tencentcloud_dlc_task_result} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcTaskResultConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcTaskResultConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_task_result',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._isTransformDataType = config.isTransformDataType;
    this._maxResults = config.maxResults;
    this._nextToken = config.nextToken;
    this._resultOutputFile = config.resultOutputFile;
    this._taskId = config.taskId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_transform_data_type - computed: false, optional: true, required: false
  private _isTransformDataType?: boolean | cdktf.IResolvable; 
  public get isTransformDataType() {
    return this.getBooleanAttribute('is_transform_data_type');
  }
  public set isTransformDataType(value: boolean | cdktf.IResolvable) {
    this._isTransformDataType = value;
  }
  public resetIsTransformDataType() {
    this._isTransformDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTransformDataTypeInput() {
    return this._isTransformDataType;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // next_token - computed: false, optional: true, required: false
  private _nextToken?: string; 
  public get nextToken() {
    return this.getStringAttribute('next_token');
  }
  public set nextToken(value: string) {
    this._nextToken = value;
  }
  public resetNextToken() {
    this._nextToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextTokenInput() {
    return this._nextToken;
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

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // task_info - computed: true, optional: false, required: false
  private _taskInfo = new DataTencentcloudDlcTaskResultTaskInfoList(this, "task_info", false);
  public get taskInfo() {
    return this._taskInfo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_transform_data_type: cdktf.booleanToTerraform(this._isTransformDataType),
      max_results: cdktf.numberToTerraform(this._maxResults),
      next_token: cdktf.stringToTerraform(this._nextToken),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      task_id: cdktf.stringToTerraform(this._taskId),
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
      is_transform_data_type: {
        value: cdktf.booleanToHclTerraform(this._isTransformDataType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_token: {
        value: cdktf.stringToHclTerraform(this._nextToken),
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
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
