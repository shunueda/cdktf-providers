// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVdomnetflowCollectorsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#collector_ip SystemVdomnetflowCollectorsA#collector_ip}
  */
  readonly collectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#collector_port SystemVdomnetflowCollectorsA#collector_port}
  */
  readonly collectorPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#device_name SystemVdomnetflowCollectorsA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#device_vdom SystemVdomnetflowCollectorsA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#fosid SystemVdomnetflowCollectorsA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#id SystemVdomnetflowCollectorsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#interface SystemVdomnetflowCollectorsA#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#interface_select_method SystemVdomnetflowCollectorsA#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#source_ip SystemVdomnetflowCollectorsA#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#source_ip_interface SystemVdomnetflowCollectorsA#source_ip_interface}
  */
  readonly sourceIpInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#vrf_select SystemVdomnetflowCollectorsA#vrf_select}
  */
  readonly vrfSelect?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors fmgdevice_system_vdomnetflow_collectors}
*/
export class SystemVdomnetflowCollectorsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_vdomnetflow_collectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVdomnetflowCollectorsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVdomnetflowCollectorsA to import
  * @param importFromId The id of the existing SystemVdomnetflowCollectorsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVdomnetflowCollectorsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_vdomnetflow_collectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomnetflow_collectors fmgdevice_system_vdomnetflow_collectors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVdomnetflowCollectorsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVdomnetflowCollectorsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_vdomnetflow_collectors',
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
    this._collectorIp = config.collectorIp;
    this._collectorPort = config.collectorPort;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._sourceIp = config.sourceIp;
    this._sourceIpInterface = config.sourceIpInterface;
    this._vrfSelect = config.vrfSelect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector_ip - computed: false, optional: true, required: false
  private _collectorIp?: string; 
  public get collectorIp() {
    return this.getStringAttribute('collector_ip');
  }
  public set collectorIp(value: string) {
    this._collectorIp = value;
  }
  public resetCollectorIp() {
    this._collectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIpInput() {
    return this._collectorIp;
  }

  // collector_port - computed: true, optional: true, required: false
  private _collectorPort?: number; 
  public get collectorPort() {
    return this.getNumberAttribute('collector_port');
  }
  public set collectorPort(value: number) {
    this._collectorPort = value;
  }
  public resetCollectorPort() {
    this._collectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorPortInput() {
    return this._collectorPort;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_interface - computed: true, optional: true, required: false
  private _sourceIpInterface?: string[]; 
  public get sourceIpInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_interface'));
  }
  public set sourceIpInterface(value: string[]) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_ip: cdktf.stringToTerraform(this._collectorIp),
      collector_port: cdktf.numberToTerraform(this._collectorPort),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIpInterface),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collector_ip: {
        value: cdktf.stringToHclTerraform(this._collectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_port: {
        value: cdktf.numberToHclTerraform(this._collectorPort),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIpInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
