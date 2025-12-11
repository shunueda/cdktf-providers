// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_restart_data_engine_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcRestartDataEngineOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_restart_data_engine_operation#data_engine_id DlcRestartDataEngineOperation#data_engine_id}
  */
  readonly dataEngineId: string;
  /**
  * Whether to restart by force and ignore tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_restart_data_engine_operation#forced_operation DlcRestartDataEngineOperation#forced_operation}
  */
  readonly forcedOperation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_restart_data_engine_operation#id DlcRestartDataEngineOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_restart_data_engine_operation tencentcloud_dlc_restart_data_engine_operation}
*/
export class DlcRestartDataEngineOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_restart_data_engine_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcRestartDataEngineOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcRestartDataEngineOperation to import
  * @param importFromId The id of the existing DlcRestartDataEngineOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_restart_data_engine_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcRestartDataEngineOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_restart_data_engine_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_restart_data_engine_operation tencentcloud_dlc_restart_data_engine_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcRestartDataEngineOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DlcRestartDataEngineOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_restart_data_engine_operation',
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
    this._dataEngineId = config.dataEngineId;
    this._forcedOperation = config.forcedOperation;
    this._id = config.id;
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

  // forced_operation - computed: false, optional: true, required: false
  private _forcedOperation?: boolean | cdktf.IResolvable; 
  public get forcedOperation() {
    return this.getBooleanAttribute('forced_operation');
  }
  public set forcedOperation(value: boolean | cdktf.IResolvable) {
    this._forcedOperation = value;
  }
  public resetForcedOperation() {
    this._forcedOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedOperationInput() {
    return this._forcedOperation;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_id: cdktf.stringToTerraform(this._dataEngineId),
      forced_operation: cdktf.booleanToTerraform(this._forcedOperation),
      id: cdktf.stringToTerraform(this._id),
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
      forced_operation: {
        value: cdktf.booleanToHclTerraform(this._forcedOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
