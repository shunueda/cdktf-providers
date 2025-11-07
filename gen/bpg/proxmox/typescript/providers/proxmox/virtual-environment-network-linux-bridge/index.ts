// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentNetworkLinuxBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The interface IPv4/CIDR address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#address VirtualEnvironmentNetworkLinuxBridge#address}
  */
  readonly address?: string;
  /**
  * The interface IPv6/CIDR address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#address6 VirtualEnvironmentNetworkLinuxBridge#address6}
  */
  readonly address6?: string;
  /**
  * Automatically start interface on boot (defaults to `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#autostart VirtualEnvironmentNetworkLinuxBridge#autostart}
  */
  readonly autostart?: boolean | cdktf.IResolvable;
  /**
  * Comment for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#comment VirtualEnvironmentNetworkLinuxBridge#comment}
  */
  readonly comment?: string;
  /**
  * Default gateway address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#gateway VirtualEnvironmentNetworkLinuxBridge#gateway}
  */
  readonly gateway?: string;
  /**
  * Default IPv6 gateway address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#gateway6 VirtualEnvironmentNetworkLinuxBridge#gateway6}
  */
  readonly gateway6?: string;
  /**
  * The interface MTU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#mtu VirtualEnvironmentNetworkLinuxBridge#mtu}
  */
  readonly mtu?: number;
  /**
  * The interface name. Commonly vmbr[N], where 0 ≤ N ≤ 4094 (vmbr0 - vmbr4094), but can be any alphanumeric string that starts with a character and is at most 10 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#name VirtualEnvironmentNetworkLinuxBridge#name}
  */
  readonly name: string;
  /**
  * The name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#node_name VirtualEnvironmentNetworkLinuxBridge#node_name}
  */
  readonly nodeName: string;
  /**
  * The interface bridge ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#ports VirtualEnvironmentNetworkLinuxBridge#ports}
  */
  readonly ports?: string[];
  /**
  * Whether the interface bridge is VLAN aware (defaults to `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#vlan_aware VirtualEnvironmentNetworkLinuxBridge#vlan_aware}
  */
  readonly vlanAware?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge proxmox_virtual_environment_network_linux_bridge}
*/
export class VirtualEnvironmentNetworkLinuxBridge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_network_linux_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentNetworkLinuxBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentNetworkLinuxBridge to import
  * @param importFromId The id of the existing VirtualEnvironmentNetworkLinuxBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentNetworkLinuxBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_network_linux_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_network_linux_bridge proxmox_virtual_environment_network_linux_bridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentNetworkLinuxBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentNetworkLinuxBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_network_linux_bridge',
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
    this._mtu = config.mtu;
    this._name = config.name;
    this._nodeName = config.nodeName;
    this._ports = config.ports;
    this._vlanAware = config.vlanAware;
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

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // vlan_aware - computed: true, optional: true, required: false
  private _vlanAware?: boolean | cdktf.IResolvable; 
  public get vlanAware() {
    return this.getBooleanAttribute('vlan_aware');
  }
  public set vlanAware(value: boolean | cdktf.IResolvable) {
    this._vlanAware = value;
  }
  public resetVlanAware() {
    this._vlanAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAwareInput() {
    return this._vlanAware;
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
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      node_name: cdktf.stringToTerraform(this._nodeName),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      vlan_aware: cdktf.booleanToTerraform(this._vlanAware),
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
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vlan_aware: {
        value: cdktf.booleanToHclTerraform(this._vlanAware),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
