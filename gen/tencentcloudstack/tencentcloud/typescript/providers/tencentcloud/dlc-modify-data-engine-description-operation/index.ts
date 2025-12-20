// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_modify_data_engine_description_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcModifyDataEngineDescriptionOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Engine description and its maximum length is 250 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_modify_data_engine_description_operation#data_engine_name DlcModifyDataEngineDescriptionOperation#data_engine_name}
  */
  readonly dataEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_modify_data_engine_description_operation#id DlcModifyDataEngineDescriptionOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Engine description and its maximum length is 250 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_modify_data_engine_description_operation#message DlcModifyDataEngineDescriptionOperation#message}
  */
  readonly message: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_modify_data_engine_description_operation tencentcloud_dlc_modify_data_engine_description_operation}
*/
export class DlcModifyDataEngineDescriptionOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_modify_data_engine_description_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcModifyDataEngineDescriptionOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcModifyDataEngineDescriptionOperation to import
  * @param importFromId The id of the existing DlcModifyDataEngineDescriptionOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_modify_data_engine_description_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcModifyDataEngineDescriptionOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_modify_data_engine_description_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_modify_data_engine_description_operation tencentcloud_dlc_modify_data_engine_description_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcModifyDataEngineDescriptionOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DlcModifyDataEngineDescriptionOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_modify_data_engine_description_operation',
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
    this._dataEngineName = config.dataEngineName;
    this._id = config.id;
    this._message = config.message;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_engine_name - computed: false, optional: false, required: true
  private _dataEngineName?: string; 
  public get dataEngineName() {
    return this.getStringAttribute('data_engine_name');
  }
  public set dataEngineName(value: string) {
    this._dataEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineNameInput() {
    return this._dataEngineName;
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

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_name: cdktf.stringToTerraform(this._dataEngineName),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_engine_name: {
        value: cdktf.stringToHclTerraform(this._dataEngineName),
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
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
