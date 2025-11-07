// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestsetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSpeedtestsettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestsetting#device_name SystemSpeedtestsetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestsetting#id SystemSpeedtestsetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestsetting#latency_threshold SystemSpeedtestsetting#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestsetting#multiple_tcp_stream SystemSpeedtestsetting#multiple_tcp_stream}
  */
  readonly multipleTcpStream?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestsetting fmgdevice_system_speedtestsetting}
*/
export class SystemSpeedtestsetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_speedtestsetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSpeedtestsetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSpeedtestsetting to import
  * @param importFromId The id of the existing SystemSpeedtestsetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestsetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSpeedtestsetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_speedtestsetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestsetting fmgdevice_system_speedtestsetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSpeedtestsettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSpeedtestsettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_speedtestsetting',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._latencyThreshold = config.latencyThreshold;
    this._multipleTcpStream = config.multipleTcpStream;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // latency_threshold - computed: true, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // multiple_tcp_stream - computed: true, optional: true, required: false
  private _multipleTcpStream?: number; 
  public get multipleTcpStream() {
    return this.getNumberAttribute('multiple_tcp_stream');
  }
  public set multipleTcpStream(value: number) {
    this._multipleTcpStream = value;
  }
  public resetMultipleTcpStream() {
    this._multipleTcpStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleTcpStreamInput() {
    return this._multipleTcpStream;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      latency_threshold: cdktf.numberToTerraform(this._latencyThreshold),
      multiple_tcp_stream: cdktf.numberToTerraform(this._multipleTcpStream),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      latency_threshold: {
        value: cdktf.numberToHclTerraform(this._latencyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiple_tcp_stream: {
        value: cdktf.numberToHclTerraform(this._multipleTcpStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
