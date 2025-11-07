// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerTrafficsnifferTargetportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport#description SwitchcontrollerTrafficsnifferTargetport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport#device_name SwitchcontrollerTrafficsnifferTargetport#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport#device_vdom SwitchcontrollerTrafficsnifferTargetport#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport#id SwitchcontrollerTrafficsnifferTargetport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport#in_ports SwitchcontrollerTrafficsnifferTargetport#in_ports}
  */
  readonly inPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport#out_ports SwitchcontrollerTrafficsnifferTargetport#out_ports}
  */
  readonly outPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport#switch_id SwitchcontrollerTrafficsnifferTargetport#switch_id}
  */
  readonly switchId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport fmgdevice_switchcontroller_trafficsniffer_targetport}
*/
export class SwitchcontrollerTrafficsnifferTargetport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_trafficsniffer_targetport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerTrafficsnifferTargetport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerTrafficsnifferTargetport to import
  * @param importFromId The id of the existing SwitchcontrollerTrafficsnifferTargetport that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerTrafficsnifferTargetport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_trafficsniffer_targetport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer_targetport fmgdevice_switchcontroller_trafficsniffer_targetport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerTrafficsnifferTargetportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerTrafficsnifferTargetportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_trafficsniffer_targetport',
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
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._inPorts = config.inPorts;
    this._outPorts = config.outPorts;
    this._switchId = config.switchId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // in_ports - computed: true, optional: true, required: false
  private _inPorts?: string[]; 
  public get inPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('in_ports'));
  }
  public set inPorts(value: string[]) {
    this._inPorts = value;
  }
  public resetInPorts() {
    this._inPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inPortsInput() {
    return this._inPorts;
  }

  // out_ports - computed: true, optional: true, required: false
  private _outPorts?: string[]; 
  public get outPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('out_ports'));
  }
  public set outPorts(value: string[]) {
    this._outPorts = value;
  }
  public resetOutPorts() {
    this._outPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outPortsInput() {
    return this._outPorts;
  }

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      in_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inPorts),
      out_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outPorts),
      switch_id: cdktf.stringToTerraform(this._switchId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      out_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      switch_id: {
        value: cdktf.stringToHclTerraform(this._switchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
