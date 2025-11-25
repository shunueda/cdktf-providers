// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_check_data_engine_image_can_be_upgrade
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDlcCheckDataEngineImageCanBeUpgradeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_check_data_engine_image_can_be_upgrade#data_engine_id DataTencentcloudDlcCheckDataEngineImageCanBeUpgrade#data_engine_id}
  */
  readonly dataEngineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_check_data_engine_image_can_be_upgrade#id DataTencentcloudDlcCheckDataEngineImageCanBeUpgrade#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_check_data_engine_image_can_be_upgrade#result_output_file DataTencentcloudDlcCheckDataEngineImageCanBeUpgrade#result_output_file}
  */
  readonly resultOutputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_check_data_engine_image_can_be_upgrade tencentcloud_dlc_check_data_engine_image_can_be_upgrade}
*/
export class DataTencentcloudDlcCheckDataEngineImageCanBeUpgrade extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_check_data_engine_image_can_be_upgrade";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDlcCheckDataEngineImageCanBeUpgrade resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDlcCheckDataEngineImageCanBeUpgrade to import
  * @param importFromId The id of the existing DataTencentcloudDlcCheckDataEngineImageCanBeUpgrade that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_check_data_engine_image_can_be_upgrade#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDlcCheckDataEngineImageCanBeUpgrade to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_check_data_engine_image_can_be_upgrade", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/data-sources/dlc_check_data_engine_image_can_be_upgrade tencentcloud_dlc_check_data_engine_image_can_be_upgrade} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDlcCheckDataEngineImageCanBeUpgradeConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDlcCheckDataEngineImageCanBeUpgradeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_check_data_engine_image_can_be_upgrade',
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
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_image_version_id - computed: true, optional: false, required: false
  public get childImageVersionId() {
    return this.getStringAttribute('child_image_version_id');
  }

  // data_engine_id - computed: false, optional: false, required: true
  private _dataEngineId?: string; 
  public get dataEngineId() {
    return this.getStringAttribute('data_engine_id');
  }
  public set dataEngineId(value: string) {
    this._dataEngineId = value;
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

  // is_upgrade - computed: true, optional: false, required: false
  public get isUpgrade() {
    return this.getBooleanAttribute('is_upgrade');
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
      data_engine_id: cdktf.stringToTerraform(this._dataEngineId),
      id: cdktf.stringToTerraform(this._id),
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
