// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_native_spark_sessions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcNativeSparkSessionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data engine id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_native_spark_sessions#data_engine_id DataTencentcloudDlcNativeSparkSessions#data_engine_id}
  */
  readonly dataEngineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_native_spark_sessions#id DataTencentcloudDlcNativeSparkSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_native_spark_sessions#resource_group_id DataTencentcloudDlcNativeSparkSessions#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_native_spark_sessions#result_output_file DataTencentcloudDlcNativeSparkSessions#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStruct {
}

export function dataTencentcloudDlcNativeSparkSessionsSparkSessionsListStructToTerraform(struct?: DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcNativeSparkSessionsSparkSessionsListStructToHclTerraform(struct?: DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver_spec - computed: true, optional: false, required: false
  public get driverSpec() {
    return this.getStringAttribute('driver_spec');
  }

  // engine_session_id - computed: true, optional: false, required: false
  public get engineSessionId() {
    return this.getStringAttribute('engine_session_id');
  }

  // engine_session_name - computed: true, optional: false, required: false
  public get engineSessionName() {
    return this.getStringAttribute('engine_session_name');
  }

  // executor_num_max - computed: true, optional: false, required: false
  public get executorNumMax() {
    return this.getNumberAttribute('executor_num_max');
  }

  // executor_num_min - computed: true, optional: false, required: false
  public get executorNumMin() {
    return this.getNumberAttribute('executor_num_min');
  }

  // executor_spec - computed: true, optional: false, required: false
  public get executorSpec() {
    return this.getStringAttribute('executor_spec');
  }

  // idle_timeout_min - computed: true, optional: false, required: false
  public get idleTimeoutMin() {
    return this.getNumberAttribute('idle_timeout_min');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // spark_session_id - computed: true, optional: false, required: false
  public get sparkSessionId() {
    return this.getStringAttribute('spark_session_id');
  }

  // spark_session_name - computed: true, optional: false, required: false
  public get sparkSessionName() {
    return this.getStringAttribute('spark_session_name');
  }

  // total_spec_max - computed: true, optional: false, required: false
  public get totalSpecMax() {
    return this.getNumberAttribute('total_spec_max');
  }

  // total_spec_min - computed: true, optional: false, required: false
  public get totalSpecMin() {
    return this.getNumberAttribute('total_spec_min');
  }
}

export class DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStructOutputReference {
    return new DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_native_spark_sessions tencentcloud_dlc_native_spark_sessions}
*/
export class DataTencentcloudDlcNativeSparkSessions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_native_spark_sessions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcNativeSparkSessions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcNativeSparkSessions to import
  * @param importFromId The id of the existing DataTencentcloudDlcNativeSparkSessions that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_native_spark_sessions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcNativeSparkSessions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_native_spark_sessions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_native_spark_sessions tencentcloud_dlc_native_spark_sessions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcNativeSparkSessionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcNativeSparkSessionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_native_spark_sessions',
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
    this._dataEngineId = config.dataEngineId;
    this._id = config.id;
    this._resourceGroupId = config.resourceGroupId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_engine_id - computed: false, optional: true, required: false
  private _dataEngineId?: string; 
  public get dataEngineId() {
    return this.getStringAttribute('data_engine_id');
  }
  public set dataEngineId(value: string) {
    this._dataEngineId = value;
  }
  public resetDataEngineId() {
    this._dataEngineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineIdInput() {
    return this._dataEngineId;
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

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
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

  // spark_sessions_list - computed: true, optional: false, required: false
  private _sparkSessionsList = new DataTencentcloudDlcNativeSparkSessionsSparkSessionsListStructList(this, "spark_sessions_list", false);
  public get sparkSessionsList() {
    return this._sparkSessionsList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_id: cdktf.stringToTerraform(this._dataEngineId),
      id: cdktf.stringToTerraform(this._id),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_engine_id: {
        value: cdktf.stringToHclTerraform(this._dataEngineId),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
