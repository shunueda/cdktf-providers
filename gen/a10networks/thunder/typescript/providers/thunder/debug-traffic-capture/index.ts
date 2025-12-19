// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugTrafficCaptureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Debug Traffic Capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture#enable DebugTrafficCapture#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture#id DebugTrafficCapture#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify pcapng filesize in MB (default 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture#maximum_file_size DebugTrafficCapture#maximum_file_size}
  */
  readonly maximumFileSize?: number;
  /**
  * Number of crashed samples (default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture#maximum_history_recordings DebugTrafficCapture#maximum_history_recordings}
  */
  readonly maximumHistoryRecordings?: number;
  /**
  * 'ingress-only': Record all ingress traffic; 'all-direction': Record all ingress and egress traffic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture#record_direction_type DebugTrafficCapture#record_direction_type}
  */
  readonly recordDirectionType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture#uuid DebugTrafficCapture#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture thunder_debug_traffic_capture}
*/
export class DebugTrafficCapture extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_traffic_capture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugTrafficCapture resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugTrafficCapture to import
  * @param importFromId The id of the existing DebugTrafficCapture that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugTrafficCapture to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_traffic_capture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_traffic_capture thunder_debug_traffic_capture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugTrafficCaptureConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugTrafficCaptureConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_traffic_capture',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._id = config.id;
    this._maximumFileSize = config.maximumFileSize;
    this._maximumHistoryRecordings = config.maximumHistoryRecordings;
    this._recordDirectionType = config.recordDirectionType;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // maximum_file_size - computed: false, optional: true, required: false
  private _maximumFileSize?: number; 
  public get maximumFileSize() {
    return this.getNumberAttribute('maximum_file_size');
  }
  public set maximumFileSize(value: number) {
    this._maximumFileSize = value;
  }
  public resetMaximumFileSize() {
    this._maximumFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumFileSizeInput() {
    return this._maximumFileSize;
  }

  // maximum_history_recordings - computed: false, optional: true, required: false
  private _maximumHistoryRecordings?: number; 
  public get maximumHistoryRecordings() {
    return this.getNumberAttribute('maximum_history_recordings');
  }
  public set maximumHistoryRecordings(value: number) {
    this._maximumHistoryRecordings = value;
  }
  public resetMaximumHistoryRecordings() {
    this._maximumHistoryRecordings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumHistoryRecordingsInput() {
    return this._maximumHistoryRecordings;
  }

  // record_direction_type - computed: false, optional: true, required: false
  private _recordDirectionType?: string; 
  public get recordDirectionType() {
    return this.getStringAttribute('record_direction_type');
  }
  public set recordDirectionType(value: string) {
    this._recordDirectionType = value;
  }
  public resetRecordDirectionType() {
    this._recordDirectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDirectionTypeInput() {
    return this._recordDirectionType;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      maximum_file_size: cdktf.numberToTerraform(this._maximumFileSize),
      maximum_history_recordings: cdktf.numberToTerraform(this._maximumHistoryRecordings),
      record_direction_type: cdktf.stringToTerraform(this._recordDirectionType),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      maximum_file_size: {
        value: cdktf.numberToHclTerraform(this._maximumFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_history_recordings: {
        value: cdktf.numberToHclTerraform(this._maximumHistoryRecordings),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_direction_type: {
        value: cdktf.stringToHclTerraform(this._recordDirectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
