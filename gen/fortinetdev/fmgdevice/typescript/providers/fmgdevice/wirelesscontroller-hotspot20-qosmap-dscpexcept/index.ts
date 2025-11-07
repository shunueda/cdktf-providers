// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerHotspot20QosmapDscpexceptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept#device_name WirelesscontrollerHotspot20QosmapDscpexcept#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept#device_vdom WirelesscontrollerHotspot20QosmapDscpexcept#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept#dscp WirelesscontrollerHotspot20QosmapDscpexcept#dscp}
  */
  readonly dscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept#id WirelesscontrollerHotspot20QosmapDscpexcept#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept#index WirelesscontrollerHotspot20QosmapDscpexcept#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept#qos_map WirelesscontrollerHotspot20QosmapDscpexcept#qos_map}
  */
  readonly qosMap: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept#up WirelesscontrollerHotspot20QosmapDscpexcept#up}
  */
  readonly up?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept fmgdevice_wirelesscontroller_hotspot20_qosmap_dscpexcept}
*/
export class WirelesscontrollerHotspot20QosmapDscpexcept extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_hotspot20_qosmap_dscpexcept";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerHotspot20QosmapDscpexcept resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerHotspot20QosmapDscpexcept to import
  * @param importFromId The id of the existing WirelesscontrollerHotspot20QosmapDscpexcept that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerHotspot20QosmapDscpexcept to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_hotspot20_qosmap_dscpexcept", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_qosmap_dscpexcept fmgdevice_wirelesscontroller_hotspot20_qosmap_dscpexcept} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerHotspot20QosmapDscpexceptConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerHotspot20QosmapDscpexceptConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_hotspot20_qosmap_dscpexcept',
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
    this._deviceVdom = config.deviceVdom;
    this._dscp = config.dscp;
    this._id = config.id;
    this._index = config.index;
    this._qosMap = config.qosMap;
    this._up = config.up;
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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
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

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // qos_map - computed: false, optional: false, required: true
  private _qosMap?: string; 
  public get qosMap() {
    return this.getStringAttribute('qos_map');
  }
  public set qosMap(value: string) {
    this._qosMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosMapInput() {
    return this._qosMap;
  }

  // up - computed: false, optional: true, required: false
  private _up?: number; 
  public get up() {
    return this.getNumberAttribute('up');
  }
  public set up(value: number) {
    this._up = value;
  }
  public resetUp() {
    this._up = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upInput() {
    return this._up;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dscp: cdktf.numberToTerraform(this._dscp),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      qos_map: cdktf.stringToTerraform(this._qosMap),
      up: cdktf.numberToTerraform(this._up),
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
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
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
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_map: {
        value: cdktf.stringToHclTerraform(this._qosMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      up: {
        value: cdktf.numberToHclTerraform(this._up),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
