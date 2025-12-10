// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dlc_describe_updatable_data_engines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcDescribeUpdatableDataEnginesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Operation commands of engine configuration. UpdateSparkSQLLakefsPath updates the path of managed tables, and UpdateSparkSQLResultPath updates the path of result buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dlc_describe_updatable_data_engines#data_engine_config_command DataTencentcloudDlcDescribeUpdatableDataEngines#data_engine_config_command}
  */
  readonly dataEngineConfigCommand: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dlc_describe_updatable_data_engines#id DataTencentcloudDlcDescribeUpdatableDataEngines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dlc_describe_updatable_data_engines#result_output_file DataTencentcloudDlcDescribeUpdatableDataEngines#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfos {
}

export function dataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfosToTerraform(struct?: DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfosToHclTerraform(struct?: DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // data_engine_id - computed: true, optional: false, required: false
  public get dataEngineId() {
    return this.getStringAttribute('data_engine_id');
  }

  // data_engine_name - computed: true, optional: false, required: false
  public get dataEngineName() {
    return this.getStringAttribute('data_engine_name');
  }

  // data_engine_type - computed: true, optional: false, required: false
  public get dataEngineType() {
    return this.getStringAttribute('data_engine_type');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // user_uin - computed: true, optional: false, required: false
  public get userUin() {
    return this.getStringAttribute('user_uin');
  }
}

export class DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfosOutputReference {
    return new DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dlc_describe_updatable_data_engines tencentcloud_dlc_describe_updatable_data_engines}
*/
export class DataTencentcloudDlcDescribeUpdatableDataEngines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_describe_updatable_data_engines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcDescribeUpdatableDataEngines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcDescribeUpdatableDataEngines to import
  * @param importFromId The id of the existing DataTencentcloudDlcDescribeUpdatableDataEngines that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dlc_describe_updatable_data_engines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcDescribeUpdatableDataEngines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_describe_updatable_data_engines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/data-sources/dlc_describe_updatable_data_engines tencentcloud_dlc_describe_updatable_data_engines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcDescribeUpdatableDataEnginesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcDescribeUpdatableDataEnginesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_describe_updatable_data_engines',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataEngineConfigCommand = config.dataEngineConfigCommand;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_engine_basic_infos - computed: true, optional: false, required: false
  private _dataEngineBasicInfos = new DataTencentcloudDlcDescribeUpdatableDataEnginesDataEngineBasicInfosList(this, "data_engine_basic_infos", false);
  public get dataEngineBasicInfos() {
    return this._dataEngineBasicInfos;
  }

  // data_engine_config_command - computed: false, optional: false, required: true
  private _dataEngineConfigCommand?: string; 
  public get dataEngineConfigCommand() {
    return this.getStringAttribute('data_engine_config_command');
  }
  public set dataEngineConfigCommand(value: string) {
    this._dataEngineConfigCommand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineConfigCommandInput() {
    return this._dataEngineConfigCommand;
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
      data_engine_config_command: cdktf.stringToTerraform(this._dataEngineConfigCommand),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_engine_config_command: {
        value: cdktf.stringToHclTerraform(this._dataEngineConfigCommand),
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
