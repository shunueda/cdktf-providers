// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSpeedtestscheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#ctrl_port SystemSpeedtestschedule#ctrl_port}
  */
  readonly ctrlPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#device_name SystemSpeedtestschedule#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#device_vdom SystemSpeedtestschedule#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#diffserv SystemSpeedtestschedule#diffserv}
  */
  readonly diffserv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#dynamic_server SystemSpeedtestschedule#dynamic_server}
  */
  readonly dynamicServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#id SystemSpeedtestschedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#interface SystemSpeedtestschedule#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#mode SystemSpeedtestschedule#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#schedules SystemSpeedtestschedule#schedules}
  */
  readonly schedules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#server_name SystemSpeedtestschedule#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#server_port SystemSpeedtestschedule#server_port}
  */
  readonly serverPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#status SystemSpeedtestschedule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#update_inbandwidth SystemSpeedtestschedule#update_inbandwidth}
  */
  readonly updateInbandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#update_inbandwidth_maximum SystemSpeedtestschedule#update_inbandwidth_maximum}
  */
  readonly updateInbandwidthMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#update_inbandwidth_minimum SystemSpeedtestschedule#update_inbandwidth_minimum}
  */
  readonly updateInbandwidthMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#update_outbandwidth SystemSpeedtestschedule#update_outbandwidth}
  */
  readonly updateOutbandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#update_outbandwidth_maximum SystemSpeedtestschedule#update_outbandwidth_maximum}
  */
  readonly updateOutbandwidthMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#update_outbandwidth_minimum SystemSpeedtestschedule#update_outbandwidth_minimum}
  */
  readonly updateOutbandwidthMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#update_shaper SystemSpeedtestschedule#update_shaper}
  */
  readonly updateShaper?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule fmgdevice_system_speedtestschedule}
*/
export class SystemSpeedtestschedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_speedtestschedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSpeedtestschedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSpeedtestschedule to import
  * @param importFromId The id of the existing SystemSpeedtestschedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSpeedtestschedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_speedtestschedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_speedtestschedule fmgdevice_system_speedtestschedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSpeedtestscheduleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSpeedtestscheduleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_speedtestschedule',
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
    this._ctrlPort = config.ctrlPort;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._diffserv = config.diffserv;
    this._dynamicServer = config.dynamicServer;
    this._id = config.id;
    this._interface = config.interface;
    this._mode = config.mode;
    this._schedules = config.schedules;
    this._serverName = config.serverName;
    this._serverPort = config.serverPort;
    this._status = config.status;
    this._updateInbandwidth = config.updateInbandwidth;
    this._updateInbandwidthMaximum = config.updateInbandwidthMaximum;
    this._updateInbandwidthMinimum = config.updateInbandwidthMinimum;
    this._updateOutbandwidth = config.updateOutbandwidth;
    this._updateOutbandwidthMaximum = config.updateOutbandwidthMaximum;
    this._updateOutbandwidthMinimum = config.updateOutbandwidthMinimum;
    this._updateShaper = config.updateShaper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ctrl_port - computed: true, optional: true, required: false
  private _ctrlPort?: number; 
  public get ctrlPort() {
    return this.getNumberAttribute('ctrl_port');
  }
  public set ctrlPort(value: number) {
    this._ctrlPort = value;
  }
  public resetCtrlPort() {
    this._ctrlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlPortInput() {
    return this._ctrlPort;
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

  // diffserv - computed: true, optional: true, required: false
  private _diffserv?: string; 
  public get diffserv() {
    return this.getStringAttribute('diffserv');
  }
  public set diffserv(value: string) {
    this._diffserv = value;
  }
  public resetDiffserv() {
    this._diffserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservInput() {
    return this._diffserv;
  }

  // dynamic_server - computed: true, optional: true, required: false
  private _dynamicServer?: string; 
  public get dynamicServer() {
    return this.getStringAttribute('dynamic_server');
  }
  public set dynamicServer(value: string) {
    this._dynamicServer = value;
  }
  public resetDynamicServer() {
    this._dynamicServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicServerInput() {
    return this._dynamicServer;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // schedules - computed: true, optional: true, required: false
  private _schedules?: string[]; 
  public get schedules() {
    return cdktf.Fn.tolist(this.getListAttribute('schedules'));
  }
  public set schedules(value: string[]) {
    this._schedules = value;
  }
  public resetSchedules() {
    this._schedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // update_inbandwidth - computed: true, optional: true, required: false
  private _updateInbandwidth?: string; 
  public get updateInbandwidth() {
    return this.getStringAttribute('update_inbandwidth');
  }
  public set updateInbandwidth(value: string) {
    this._updateInbandwidth = value;
  }
  public resetUpdateInbandwidth() {
    this._updateInbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInbandwidthInput() {
    return this._updateInbandwidth;
  }

  // update_inbandwidth_maximum - computed: false, optional: true, required: false
  private _updateInbandwidthMaximum?: number; 
  public get updateInbandwidthMaximum() {
    return this.getNumberAttribute('update_inbandwidth_maximum');
  }
  public set updateInbandwidthMaximum(value: number) {
    this._updateInbandwidthMaximum = value;
  }
  public resetUpdateInbandwidthMaximum() {
    this._updateInbandwidthMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInbandwidthMaximumInput() {
    return this._updateInbandwidthMaximum;
  }

  // update_inbandwidth_minimum - computed: false, optional: true, required: false
  private _updateInbandwidthMinimum?: number; 
  public get updateInbandwidthMinimum() {
    return this.getNumberAttribute('update_inbandwidth_minimum');
  }
  public set updateInbandwidthMinimum(value: number) {
    this._updateInbandwidthMinimum = value;
  }
  public resetUpdateInbandwidthMinimum() {
    this._updateInbandwidthMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInbandwidthMinimumInput() {
    return this._updateInbandwidthMinimum;
  }

  // update_outbandwidth - computed: true, optional: true, required: false
  private _updateOutbandwidth?: string; 
  public get updateOutbandwidth() {
    return this.getStringAttribute('update_outbandwidth');
  }
  public set updateOutbandwidth(value: string) {
    this._updateOutbandwidth = value;
  }
  public resetUpdateOutbandwidth() {
    this._updateOutbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOutbandwidthInput() {
    return this._updateOutbandwidth;
  }

  // update_outbandwidth_maximum - computed: false, optional: true, required: false
  private _updateOutbandwidthMaximum?: number; 
  public get updateOutbandwidthMaximum() {
    return this.getNumberAttribute('update_outbandwidth_maximum');
  }
  public set updateOutbandwidthMaximum(value: number) {
    this._updateOutbandwidthMaximum = value;
  }
  public resetUpdateOutbandwidthMaximum() {
    this._updateOutbandwidthMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOutbandwidthMaximumInput() {
    return this._updateOutbandwidthMaximum;
  }

  // update_outbandwidth_minimum - computed: false, optional: true, required: false
  private _updateOutbandwidthMinimum?: number; 
  public get updateOutbandwidthMinimum() {
    return this.getNumberAttribute('update_outbandwidth_minimum');
  }
  public set updateOutbandwidthMinimum(value: number) {
    this._updateOutbandwidthMinimum = value;
  }
  public resetUpdateOutbandwidthMinimum() {
    this._updateOutbandwidthMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOutbandwidthMinimumInput() {
    return this._updateOutbandwidthMinimum;
  }

  // update_shaper - computed: true, optional: true, required: false
  private _updateShaper?: string; 
  public get updateShaper() {
    return this.getStringAttribute('update_shaper');
  }
  public set updateShaper(value: string) {
    this._updateShaper = value;
  }
  public resetUpdateShaper() {
    this._updateShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateShaperInput() {
    return this._updateShaper;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ctrl_port: cdktf.numberToTerraform(this._ctrlPort),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      diffserv: cdktf.stringToTerraform(this._diffserv),
      dynamic_server: cdktf.stringToTerraform(this._dynamicServer),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      mode: cdktf.stringToTerraform(this._mode),
      schedules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schedules),
      server_name: cdktf.stringToTerraform(this._serverName),
      server_port: cdktf.numberToTerraform(this._serverPort),
      status: cdktf.stringToTerraform(this._status),
      update_inbandwidth: cdktf.stringToTerraform(this._updateInbandwidth),
      update_inbandwidth_maximum: cdktf.numberToTerraform(this._updateInbandwidthMaximum),
      update_inbandwidth_minimum: cdktf.numberToTerraform(this._updateInbandwidthMinimum),
      update_outbandwidth: cdktf.stringToTerraform(this._updateOutbandwidth),
      update_outbandwidth_maximum: cdktf.numberToTerraform(this._updateOutbandwidthMaximum),
      update_outbandwidth_minimum: cdktf.numberToTerraform(this._updateOutbandwidthMinimum),
      update_shaper: cdktf.stringToTerraform(this._updateShaper),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ctrl_port: {
        value: cdktf.numberToHclTerraform(this._ctrlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      diffserv: {
        value: cdktf.stringToHclTerraform(this._diffserv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_server: {
        value: cdktf.stringToHclTerraform(this._dynamicServer),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schedules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_inbandwidth: {
        value: cdktf.stringToHclTerraform(this._updateInbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_inbandwidth_maximum: {
        value: cdktf.numberToHclTerraform(this._updateInbandwidthMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_inbandwidth_minimum: {
        value: cdktf.numberToHclTerraform(this._updateInbandwidthMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_outbandwidth: {
        value: cdktf.stringToHclTerraform(this._updateOutbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_outbandwidth_maximum: {
        value: cdktf.numberToHclTerraform(this._updateOutbandwidthMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_outbandwidth_minimum: {
        value: cdktf.numberToHclTerraform(this._updateOutbandwidthMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_shaper: {
        value: cdktf.stringToHclTerraform(this._updateShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
