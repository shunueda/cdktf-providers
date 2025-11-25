// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_switch_data_engine_image_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcSwitchDataEngineImageOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_switch_data_engine_image_operation#data_engine_id DlcSwitchDataEngineImageOperation#data_engine_id}
  */
  readonly dataEngineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_switch_data_engine_image_operation#id DlcSwitchDataEngineImageOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * New image version ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_switch_data_engine_image_operation#new_image_version_id DlcSwitchDataEngineImageOperation#new_image_version_id}
  */
  readonly newImageVersionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_switch_data_engine_image_operation tencentcloud_dlc_switch_data_engine_image_operation}
*/
export class DlcSwitchDataEngineImageOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_switch_data_engine_image_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcSwitchDataEngineImageOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcSwitchDataEngineImageOperation to import
  * @param importFromId The id of the existing DlcSwitchDataEngineImageOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_switch_data_engine_image_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcSwitchDataEngineImageOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_switch_data_engine_image_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dlc_switch_data_engine_image_operation tencentcloud_dlc_switch_data_engine_image_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcSwitchDataEngineImageOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DlcSwitchDataEngineImageOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_switch_data_engine_image_operation',
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
    this._newImageVersionId = config.newImageVersionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // new_image_version_id - computed: false, optional: false, required: true
  private _newImageVersionId?: string; 
  public get newImageVersionId() {
    return this.getStringAttribute('new_image_version_id');
  }
  public set newImageVersionId(value: string) {
    this._newImageVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newImageVersionIdInput() {
    return this._newImageVersionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_id: cdktf.stringToTerraform(this._dataEngineId),
      id: cdktf.stringToTerraform(this._id),
      new_image_version_id: cdktf.stringToTerraform(this._newImageVersionId),
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
      new_image_version_id: {
        value: cdktf.stringToHclTerraform(this._newImageVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
