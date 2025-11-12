// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerHotspot20Anqp3GppcellularMccmnclistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist#anqp_3gpp_cellular WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist#anqp_3gpp_cellular}
  */
  readonly anqp3GppCellular: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist#device_name WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist#device_vdom WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist#fosid WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist#id WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist#mcc WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist#mcc}
  */
  readonly mcc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist#mnc WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist#mnc}
  */
  readonly mnc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist fmgdevice_wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist}
*/
export class WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist to import
  * @param importFromId The id of the existing WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerHotspot20Anqp3GppcellularMccmnclist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist fmgdevice_wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerHotspot20Anqp3GppcellularMccmnclistConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerHotspot20Anqp3GppcellularMccmnclistConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_hotspot20_anqp3gppcellular_mccmnclist',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anqp3GppCellular = config.anqp3GppCellular;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._id = config.id;
    this._mcc = config.mcc;
    this._mnc = config.mnc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anqp_3gpp_cellular - computed: false, optional: false, required: true
  private _anqp3GppCellular?: string; 
  public get anqp3GppCellular() {
    return this.getStringAttribute('anqp_3gpp_cellular');
  }
  public set anqp3GppCellular(value: string) {
    this._anqp3GppCellular = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anqp3GppCellularInput() {
    return this._anqp3GppCellular;
  }

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

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // mcc - computed: false, optional: true, required: false
  private _mcc?: string; 
  public get mcc() {
    return this.getStringAttribute('mcc');
  }
  public set mcc(value: string) {
    this._mcc = value;
  }
  public resetMcc() {
    this._mcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mccInput() {
    return this._mcc;
  }

  // mnc - computed: false, optional: true, required: false
  private _mnc?: string; 
  public get mnc() {
    return this.getStringAttribute('mnc');
  }
  public set mnc(value: string) {
    this._mnc = value;
  }
  public resetMnc() {
    this._mnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mncInput() {
    return this._mnc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anqp_3gpp_cellular: cdktf.stringToTerraform(this._anqp3GppCellular),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      mcc: cdktf.stringToTerraform(this._mcc),
      mnc: cdktf.stringToTerraform(this._mnc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anqp_3gpp_cellular: {
        value: cdktf.stringToHclTerraform(this._anqp3GppCellular),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      mcc: {
        value: cdktf.stringToHclTerraform(this._mcc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mnc: {
        value: cdktf.stringToHclTerraform(this._mnc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
