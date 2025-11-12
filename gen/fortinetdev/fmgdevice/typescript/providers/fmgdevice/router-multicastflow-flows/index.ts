// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastflowFlowsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows#device_name RouterMulticastflowFlowsA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows#device_vdom RouterMulticastflowFlowsA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows#fosid RouterMulticastflowFlowsA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows#group_addr RouterMulticastflowFlowsA#group_addr}
  */
  readonly groupAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows#id RouterMulticastflowFlowsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows#multicast_flow RouterMulticastflowFlowsA#multicast_flow}
  */
  readonly multicastFlow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows#source_addr RouterMulticastflowFlowsA#source_addr}
  */
  readonly sourceAddr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows fmgdevice_router_multicastflow_flows}
*/
export class RouterMulticastflowFlowsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_multicastflow_flows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticastflowFlowsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticastflowFlowsA to import
  * @param importFromId The id of the existing RouterMulticastflowFlowsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticastflowFlowsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_multicastflow_flows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicastflow_flows fmgdevice_router_multicastflow_flows} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastflowFlowsAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastflowFlowsAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_multicastflow_flows',
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
    this._fosid = config.fosid;
    this._groupAddr = config.groupAddr;
    this._id = config.id;
    this._multicastFlow = config.multicastFlow;
    this._sourceAddr = config.sourceAddr;
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

  // group_addr - computed: true, optional: true, required: false
  private _groupAddr?: string; 
  public get groupAddr() {
    return this.getStringAttribute('group_addr');
  }
  public set groupAddr(value: string) {
    this._groupAddr = value;
  }
  public resetGroupAddr() {
    this._groupAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddrInput() {
    return this._groupAddr;
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

  // multicast_flow - computed: false, optional: false, required: true
  private _multicastFlow?: string; 
  public get multicastFlow() {
    return this.getStringAttribute('multicast_flow');
  }
  public set multicastFlow(value: string) {
    this._multicastFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastFlowInput() {
    return this._multicastFlow;
  }

  // source_addr - computed: true, optional: true, required: false
  private _sourceAddr?: string; 
  public get sourceAddr() {
    return this.getStringAttribute('source_addr');
  }
  public set sourceAddr(value: string) {
    this._sourceAddr = value;
  }
  public resetSourceAddr() {
    this._sourceAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddrInput() {
    return this._sourceAddr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      group_addr: cdktf.stringToTerraform(this._groupAddr),
      id: cdktf.stringToTerraform(this._id),
      multicast_flow: cdktf.stringToTerraform(this._multicastFlow),
      source_addr: cdktf.stringToTerraform(this._sourceAddr),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_addr: {
        value: cdktf.stringToHclTerraform(this._groupAddr),
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
      multicast_flow: {
        value: cdktf.stringToHclTerraform(this._multicastFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_addr: {
        value: cdktf.stringToHclTerraform(this._sourceAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
