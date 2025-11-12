// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerWtpLanAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#device_name WirelesscontrollerWtpLanA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#device_vdom WirelesscontrollerWtpLanA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#id WirelesscontrollerWtpLanA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port1_mode WirelesscontrollerWtpLanA#port1_mode}
  */
  readonly port1Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port1_ssid WirelesscontrollerWtpLanA#port1_ssid}
  */
  readonly port1Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port2_mode WirelesscontrollerWtpLanA#port2_mode}
  */
  readonly port2Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port2_ssid WirelesscontrollerWtpLanA#port2_ssid}
  */
  readonly port2Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port3_mode WirelesscontrollerWtpLanA#port3_mode}
  */
  readonly port3Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port3_ssid WirelesscontrollerWtpLanA#port3_ssid}
  */
  readonly port3Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port4_mode WirelesscontrollerWtpLanA#port4_mode}
  */
  readonly port4Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port4_ssid WirelesscontrollerWtpLanA#port4_ssid}
  */
  readonly port4Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port5_mode WirelesscontrollerWtpLanA#port5_mode}
  */
  readonly port5Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port5_ssid WirelesscontrollerWtpLanA#port5_ssid}
  */
  readonly port5Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port6_mode WirelesscontrollerWtpLanA#port6_mode}
  */
  readonly port6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port6_ssid WirelesscontrollerWtpLanA#port6_ssid}
  */
  readonly port6Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port7_mode WirelesscontrollerWtpLanA#port7_mode}
  */
  readonly port7Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port7_ssid WirelesscontrollerWtpLanA#port7_ssid}
  */
  readonly port7Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port8_mode WirelesscontrollerWtpLanA#port8_mode}
  */
  readonly port8Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port8_ssid WirelesscontrollerWtpLanA#port8_ssid}
  */
  readonly port8Ssid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port_esl_mode WirelesscontrollerWtpLanA#port_esl_mode}
  */
  readonly portEslMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port_esl_ssid WirelesscontrollerWtpLanA#port_esl_ssid}
  */
  readonly portEslSsid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port_mode WirelesscontrollerWtpLanA#port_mode}
  */
  readonly portMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#port_ssid WirelesscontrollerWtpLanA#port_ssid}
  */
  readonly portSsid?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#wtp WirelesscontrollerWtpLanA#wtp}
  */
  readonly wtp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan fmgdevice_wirelesscontroller_wtp_lan}
*/
export class WirelesscontrollerWtpLanA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_wtp_lan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerWtpLanA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerWtpLanA to import
  * @param importFromId The id of the existing WirelesscontrollerWtpLanA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerWtpLanA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_wtp_lan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_wtp_lan fmgdevice_wirelesscontroller_wtp_lan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerWtpLanAConfig
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerWtpLanAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_wtp_lan',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._port1Mode = config.port1Mode;
    this._port1Ssid = config.port1Ssid;
    this._port2Mode = config.port2Mode;
    this._port2Ssid = config.port2Ssid;
    this._port3Mode = config.port3Mode;
    this._port3Ssid = config.port3Ssid;
    this._port4Mode = config.port4Mode;
    this._port4Ssid = config.port4Ssid;
    this._port5Mode = config.port5Mode;
    this._port5Ssid = config.port5Ssid;
    this._port6Mode = config.port6Mode;
    this._port6Ssid = config.port6Ssid;
    this._port7Mode = config.port7Mode;
    this._port7Ssid = config.port7Ssid;
    this._port8Mode = config.port8Mode;
    this._port8Ssid = config.port8Ssid;
    this._portEslMode = config.portEslMode;
    this._portEslSsid = config.portEslSsid;
    this._portMode = config.portMode;
    this._portSsid = config.portSsid;
    this._wtp = config.wtp;
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

  // port1_mode - computed: true, optional: true, required: false
  private _port1Mode?: string; 
  public get port1Mode() {
    return this.getStringAttribute('port1_mode');
  }
  public set port1Mode(value: string) {
    this._port1Mode = value;
  }
  public resetPort1Mode() {
    this._port1Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port1ModeInput() {
    return this._port1Mode;
  }

  // port1_ssid - computed: true, optional: true, required: false
  private _port1Ssid?: string[]; 
  public get port1Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port1_ssid'));
  }
  public set port1Ssid(value: string[]) {
    this._port1Ssid = value;
  }
  public resetPort1Ssid() {
    this._port1Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port1SsidInput() {
    return this._port1Ssid;
  }

  // port2_mode - computed: true, optional: true, required: false
  private _port2Mode?: string; 
  public get port2Mode() {
    return this.getStringAttribute('port2_mode');
  }
  public set port2Mode(value: string) {
    this._port2Mode = value;
  }
  public resetPort2Mode() {
    this._port2Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2ModeInput() {
    return this._port2Mode;
  }

  // port2_ssid - computed: true, optional: true, required: false
  private _port2Ssid?: string[]; 
  public get port2Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port2_ssid'));
  }
  public set port2Ssid(value: string[]) {
    this._port2Ssid = value;
  }
  public resetPort2Ssid() {
    this._port2Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2SsidInput() {
    return this._port2Ssid;
  }

  // port3_mode - computed: true, optional: true, required: false
  private _port3Mode?: string; 
  public get port3Mode() {
    return this.getStringAttribute('port3_mode');
  }
  public set port3Mode(value: string) {
    this._port3Mode = value;
  }
  public resetPort3Mode() {
    this._port3Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3ModeInput() {
    return this._port3Mode;
  }

  // port3_ssid - computed: true, optional: true, required: false
  private _port3Ssid?: string[]; 
  public get port3Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port3_ssid'));
  }
  public set port3Ssid(value: string[]) {
    this._port3Ssid = value;
  }
  public resetPort3Ssid() {
    this._port3Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3SsidInput() {
    return this._port3Ssid;
  }

  // port4_mode - computed: true, optional: true, required: false
  private _port4Mode?: string; 
  public get port4Mode() {
    return this.getStringAttribute('port4_mode');
  }
  public set port4Mode(value: string) {
    this._port4Mode = value;
  }
  public resetPort4Mode() {
    this._port4Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4ModeInput() {
    return this._port4Mode;
  }

  // port4_ssid - computed: true, optional: true, required: false
  private _port4Ssid?: string[]; 
  public get port4Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port4_ssid'));
  }
  public set port4Ssid(value: string[]) {
    this._port4Ssid = value;
  }
  public resetPort4Ssid() {
    this._port4Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4SsidInput() {
    return this._port4Ssid;
  }

  // port5_mode - computed: true, optional: true, required: false
  private _port5Mode?: string; 
  public get port5Mode() {
    return this.getStringAttribute('port5_mode');
  }
  public set port5Mode(value: string) {
    this._port5Mode = value;
  }
  public resetPort5Mode() {
    this._port5Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port5ModeInput() {
    return this._port5Mode;
  }

  // port5_ssid - computed: true, optional: true, required: false
  private _port5Ssid?: string[]; 
  public get port5Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port5_ssid'));
  }
  public set port5Ssid(value: string[]) {
    this._port5Ssid = value;
  }
  public resetPort5Ssid() {
    this._port5Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port5SsidInput() {
    return this._port5Ssid;
  }

  // port6_mode - computed: true, optional: true, required: false
  private _port6Mode?: string; 
  public get port6Mode() {
    return this.getStringAttribute('port6_mode');
  }
  public set port6Mode(value: string) {
    this._port6Mode = value;
  }
  public resetPort6Mode() {
    this._port6Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port6ModeInput() {
    return this._port6Mode;
  }

  // port6_ssid - computed: true, optional: true, required: false
  private _port6Ssid?: string[]; 
  public get port6Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port6_ssid'));
  }
  public set port6Ssid(value: string[]) {
    this._port6Ssid = value;
  }
  public resetPort6Ssid() {
    this._port6Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port6SsidInput() {
    return this._port6Ssid;
  }

  // port7_mode - computed: true, optional: true, required: false
  private _port7Mode?: string; 
  public get port7Mode() {
    return this.getStringAttribute('port7_mode');
  }
  public set port7Mode(value: string) {
    this._port7Mode = value;
  }
  public resetPort7Mode() {
    this._port7Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port7ModeInput() {
    return this._port7Mode;
  }

  // port7_ssid - computed: true, optional: true, required: false
  private _port7Ssid?: string[]; 
  public get port7Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port7_ssid'));
  }
  public set port7Ssid(value: string[]) {
    this._port7Ssid = value;
  }
  public resetPort7Ssid() {
    this._port7Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port7SsidInput() {
    return this._port7Ssid;
  }

  // port8_mode - computed: true, optional: true, required: false
  private _port8Mode?: string; 
  public get port8Mode() {
    return this.getStringAttribute('port8_mode');
  }
  public set port8Mode(value: string) {
    this._port8Mode = value;
  }
  public resetPort8Mode() {
    this._port8Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port8ModeInput() {
    return this._port8Mode;
  }

  // port8_ssid - computed: true, optional: true, required: false
  private _port8Ssid?: string[]; 
  public get port8Ssid() {
    return cdktf.Fn.tolist(this.getListAttribute('port8_ssid'));
  }
  public set port8Ssid(value: string[]) {
    this._port8Ssid = value;
  }
  public resetPort8Ssid() {
    this._port8Ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port8SsidInput() {
    return this._port8Ssid;
  }

  // port_esl_mode - computed: true, optional: true, required: false
  private _portEslMode?: string; 
  public get portEslMode() {
    return this.getStringAttribute('port_esl_mode');
  }
  public set portEslMode(value: string) {
    this._portEslMode = value;
  }
  public resetPortEslMode() {
    this._portEslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEslModeInput() {
    return this._portEslMode;
  }

  // port_esl_ssid - computed: true, optional: true, required: false
  private _portEslSsid?: string[]; 
  public get portEslSsid() {
    return cdktf.Fn.tolist(this.getListAttribute('port_esl_ssid'));
  }
  public set portEslSsid(value: string[]) {
    this._portEslSsid = value;
  }
  public resetPortEslSsid() {
    this._portEslSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEslSsidInput() {
    return this._portEslSsid;
  }

  // port_mode - computed: true, optional: true, required: false
  private _portMode?: string; 
  public get portMode() {
    return this.getStringAttribute('port_mode');
  }
  public set portMode(value: string) {
    this._portMode = value;
  }
  public resetPortMode() {
    this._portMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portModeInput() {
    return this._portMode;
  }

  // port_ssid - computed: true, optional: true, required: false
  private _portSsid?: string[]; 
  public get portSsid() {
    return cdktf.Fn.tolist(this.getListAttribute('port_ssid'));
  }
  public set portSsid(value: string[]) {
    this._portSsid = value;
  }
  public resetPortSsid() {
    this._portSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSsidInput() {
    return this._portSsid;
  }

  // wtp - computed: false, optional: false, required: true
  private _wtp?: string; 
  public get wtp() {
    return this.getStringAttribute('wtp');
  }
  public set wtp(value: string) {
    this._wtp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wtpInput() {
    return this._wtp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      port1_mode: cdktf.stringToTerraform(this._port1Mode),
      port1_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port1Ssid),
      port2_mode: cdktf.stringToTerraform(this._port2Mode),
      port2_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port2Ssid),
      port3_mode: cdktf.stringToTerraform(this._port3Mode),
      port3_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port3Ssid),
      port4_mode: cdktf.stringToTerraform(this._port4Mode),
      port4_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port4Ssid),
      port5_mode: cdktf.stringToTerraform(this._port5Mode),
      port5_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port5Ssid),
      port6_mode: cdktf.stringToTerraform(this._port6Mode),
      port6_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port6Ssid),
      port7_mode: cdktf.stringToTerraform(this._port7Mode),
      port7_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port7Ssid),
      port8_mode: cdktf.stringToTerraform(this._port8Mode),
      port8_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._port8Ssid),
      port_esl_mode: cdktf.stringToTerraform(this._portEslMode),
      port_esl_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portEslSsid),
      port_mode: cdktf.stringToTerraform(this._portMode),
      port_ssid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portSsid),
      wtp: cdktf.stringToTerraform(this._wtp),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port1_mode: {
        value: cdktf.stringToHclTerraform(this._port1Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port1_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port1Ssid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port2_mode: {
        value: cdktf.stringToHclTerraform(this._port2Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port2_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port2Ssid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port3_mode: {
        value: cdktf.stringToHclTerraform(this._port3Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port3_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port3Ssid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port4_mode: {
        value: cdktf.stringToHclTerraform(this._port4Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port4_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port4Ssid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port5_mode: {
        value: cdktf.stringToHclTerraform(this._port5Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port5_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port5Ssid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port6_mode: {
        value: cdktf.stringToHclTerraform(this._port6Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port6_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port6Ssid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port7_mode: {
        value: cdktf.stringToHclTerraform(this._port7Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port7_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port7Ssid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port8_mode: {
        value: cdktf.stringToHclTerraform(this._port8Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port8_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._port8Ssid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port_esl_mode: {
        value: cdktf.stringToHclTerraform(this._portEslMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_esl_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portEslSsid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port_mode: {
        value: cdktf.stringToHclTerraform(this._portMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_ssid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portSsid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wtp: {
        value: cdktf.stringToHclTerraform(this._wtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
