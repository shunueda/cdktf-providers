// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentNetworkLinuxVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The interface IPv4/CIDR address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#address VirtualEnvironmentNetworkLinuxVlan#address}
  */
  readonly address?: string;
  /**
  * The interface IPv6/CIDR address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#address6 VirtualEnvironmentNetworkLinuxVlan#address6}
  */
  readonly address6?: string;
  /**
  * Automatically start interface on boot (defaults to `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#autostart VirtualEnvironmentNetworkLinuxVlan#autostart}
  */
  readonly autostart?: boolean | cdktf.IResolvable;
  /**
  * Comment for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#comment VirtualEnvironmentNetworkLinuxVlan#comment}
  */
  readonly comment?: string;
  /**
  * Default gateway address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#gateway VirtualEnvironmentNetworkLinuxVlan#gateway}
  */
  readonly gateway?: string;
  /**
  * Default IPv6 gateway address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#gateway6 VirtualEnvironmentNetworkLinuxVlan#gateway6}
  */
  readonly gateway6?: string;
  /**
  * The VLAN raw device. See also `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#interface VirtualEnvironmentNetworkLinuxVlan#interface}
  */
  readonly interface?: string;
  /**
  * The interface MTU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#mtu VirtualEnvironmentNetworkLinuxVlan#mtu}
  */
  readonly mtu?: number;
  /**
  * The interface name. Either add the VLAN tag number to an existing interface name, e.g. `ens18.21` (and do not set `interface` and `vlan`), or use custom name, e.g. `vlan_lab` (`interface` and `vlan` are then required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#name VirtualEnvironmentNetworkLinuxVlan#name}
  */
  readonly name: string;
  /**
  * The name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#node_name VirtualEnvironmentNetworkLinuxVlan#node_name}
  */
  readonly nodeName: string;
  /**
  * The VLAN tag. See also `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#vlan VirtualEnvironmentNetworkLinuxVlan#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan proxmox_virtual_environment_network_linux_vlan}
*/
export class VirtualEnvironmentNetworkLinuxVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_network_linux_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentNetworkLinuxVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentNetworkLinuxVlan to import
  * @param importFromId The id of the existing VirtualEnvironmentNetworkLinuxVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentNetworkLinuxVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_network_linux_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_vlan proxmox_virtual_environment_network_linux_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentNetworkLinuxVlanConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentNetworkLinuxVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_network_linux_vlan',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._address6 = config.address6;
    this._autostart = config.autostart;
    this._comment = config.comment;
    this._gateway = config.gateway;
    this._gateway6 = config.gateway6;
    this._interface = config.interface;
    this._mtu = config.mtu;
    this._name = config.name;
    this._nodeName = config.nodeName;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address6 - computed: false, optional: true, required: false
  private _address6?: string; 
  public get address6() {
    return this.getStringAttribute('address6');
  }
  public set address6(value: string) {
    this._address6 = value;
  }
  public resetAddress6() {
    this._address6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address6Input() {
    return this._address6;
  }

  // autostart - computed: true, optional: true, required: false
  private _autostart?: boolean | cdktf.IResolvable; 
  public get autostart() {
    return this.getBooleanAttribute('autostart');
  }
  public set autostart(value: boolean | cdktf.IResolvable) {
    this._autostart = value;
  }
  public resetAutostart() {
    this._autostart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autostartInput() {
    return this._autostart;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: true, optional: true, required: false
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      address6: cdktf.stringToTerraform(this._address6),
      autostart: cdktf.booleanToTerraform(this._autostart),
      comment: cdktf.stringToTerraform(this._comment),
      gateway: cdktf.stringToTerraform(this._gateway),
      gateway6: cdktf.stringToTerraform(this._gateway6),
      interface: cdktf.stringToTerraform(this._interface),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      node_name: cdktf.stringToTerraform(this._nodeName),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address6: {
        value: cdktf.stringToHclTerraform(this._address6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autostart: {
        value: cdktf.booleanToHclTerraform(this._autostart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway6: {
        value: cdktf.stringToHclTerraform(this._gateway6),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
