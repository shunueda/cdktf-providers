// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSwitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mirror received packets from the `mirror_source_port` to the `mirror_monitor_port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#enable_mirror_rx NetworkSwitch#enable_mirror_rx}
  */
  readonly enableMirrorRx?: boolean | cdktf.IResolvable;
  /**
  * Mirror transmitted packets from the `mirror_source_port` to the `mirror_monitor_port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#enable_mirror_tx NetworkSwitch#enable_mirror_tx}
  */
  readonly enableMirrorTx?: boolean | cdktf.IResolvable;
  /**
  * Enables VLAN functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#enable_vlan NetworkSwitch#enable_vlan}
  */
  readonly enableVlan?: boolean | cdktf.IResolvable;
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#id NetworkSwitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Switch port to which packets are mirrored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#mirror_monitor_port NetworkSwitch#mirror_monitor_port}
  */
  readonly mirrorMonitorPort?: number;
  /**
  * Switch port from which packets are mirrored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#mirror_source_port NetworkSwitch#mirror_source_port}
  */
  readonly mirrorSourcePort?: number;
  /**
  * Name of the switch. This name is what is shown in LuCI or the `name` field in Terraform. This is not the UCI config name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#name NetworkSwitch#name}
  */
  readonly name: string;
  /**
  * Reset the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#reset NetworkSwitch#reset}
  */
  readonly reset?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch openwrt_network_switch}
*/
export class NetworkSwitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_network_switch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSwitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSwitch to import
  * @param importFromId The id of the existing NetworkSwitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSwitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_network_switch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/network_switch openwrt_network_switch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSwitchConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSwitchConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_network_switch',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20',
        providerVersionConstraint: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableMirrorRx = config.enableMirrorRx;
    this._enableMirrorTx = config.enableMirrorTx;
    this._enableVlan = config.enableVlan;
    this._id = config.id;
    this._mirrorMonitorPort = config.mirrorMonitorPort;
    this._mirrorSourcePort = config.mirrorSourcePort;
    this._name = config.name;
    this._reset = config.reset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_mirror_rx - computed: true, optional: true, required: false
  private _enableMirrorRx?: boolean | cdktf.IResolvable; 
  public get enableMirrorRx() {
    return this.getBooleanAttribute('enable_mirror_rx');
  }
  public set enableMirrorRx(value: boolean | cdktf.IResolvable) {
    this._enableMirrorRx = value;
  }
  public resetEnableMirrorRx() {
    this._enableMirrorRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMirrorRxInput() {
    return this._enableMirrorRx;
  }

  // enable_mirror_tx - computed: true, optional: true, required: false
  private _enableMirrorTx?: boolean | cdktf.IResolvable; 
  public get enableMirrorTx() {
    return this.getBooleanAttribute('enable_mirror_tx');
  }
  public set enableMirrorTx(value: boolean | cdktf.IResolvable) {
    this._enableMirrorTx = value;
  }
  public resetEnableMirrorTx() {
    this._enableMirrorTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMirrorTxInput() {
    return this._enableMirrorTx;
  }

  // enable_vlan - computed: true, optional: true, required: false
  private _enableVlan?: boolean | cdktf.IResolvable; 
  public get enableVlan() {
    return this.getBooleanAttribute('enable_vlan');
  }
  public set enableVlan(value: boolean | cdktf.IResolvable) {
    this._enableVlan = value;
  }
  public resetEnableVlan() {
    this._enableVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVlanInput() {
    return this._enableVlan;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mirror_monitor_port - computed: true, optional: true, required: false
  private _mirrorMonitorPort?: number; 
  public get mirrorMonitorPort() {
    return this.getNumberAttribute('mirror_monitor_port');
  }
  public set mirrorMonitorPort(value: number) {
    this._mirrorMonitorPort = value;
  }
  public resetMirrorMonitorPort() {
    this._mirrorMonitorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMonitorPortInput() {
    return this._mirrorMonitorPort;
  }

  // mirror_source_port - computed: true, optional: true, required: false
  private _mirrorSourcePort?: number; 
  public get mirrorSourcePort() {
    return this.getNumberAttribute('mirror_source_port');
  }
  public set mirrorSourcePort(value: number) {
    this._mirrorSourcePort = value;
  }
  public resetMirrorSourcePort() {
    this._mirrorSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorSourcePortInput() {
    return this._mirrorSourcePort;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // reset - computed: true, optional: true, required: false
  private _reset?: boolean | cdktf.IResolvable; 
  public get reset() {
    return this.getBooleanAttribute('reset');
  }
  public set reset(value: boolean | cdktf.IResolvable) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_mirror_rx: cdktf.booleanToTerraform(this._enableMirrorRx),
      enable_mirror_tx: cdktf.booleanToTerraform(this._enableMirrorTx),
      enable_vlan: cdktf.booleanToTerraform(this._enableVlan),
      id: cdktf.stringToTerraform(this._id),
      mirror_monitor_port: cdktf.numberToTerraform(this._mirrorMonitorPort),
      mirror_source_port: cdktf.numberToTerraform(this._mirrorSourcePort),
      name: cdktf.stringToTerraform(this._name),
      reset: cdktf.booleanToTerraform(this._reset),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_mirror_rx: {
        value: cdktf.booleanToHclTerraform(this._enableMirrorRx),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_mirror_tx: {
        value: cdktf.booleanToHclTerraform(this._enableMirrorTx),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vlan: {
        value: cdktf.booleanToHclTerraform(this._enableVlan),
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
      mirror_monitor_port: {
        value: cdktf.numberToHclTerraform(this._mirrorMonitorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mirror_source_port: {
        value: cdktf.numberToHclTerraform(this._mirrorSourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset: {
        value: cdktf.booleanToHclTerraform(this._reset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
