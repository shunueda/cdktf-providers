// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accept router advertisements. (IPv6 only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#accept_ra NetworkInterfaceBridge#accept_ra}
  */
  readonly acceptRa?: boolean | cdktf.IResolvable;
  /**
  * Set bridge forward delay to time seconds. (Default: 15).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#bridge_fd NetworkInterfaceBridge#bridge_fd}
  */
  readonly bridgeFd?: number;
  /**
  * Turn spanning tree protocol on or off. (Default: False).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#bridge_stp NetworkInterfaceBridge#bridge_stp}
  */
  readonly bridgeStp?: boolean | cdktf.IResolvable;
  /**
  * The type of bridge to create. Possible values are: ``standard``, ``ovs``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#bridge_type NetworkInterfaceBridge#bridge_type}
  */
  readonly bridgeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#id NetworkInterfaceBridge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The bridge interface MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#mac_address NetworkInterfaceBridge#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The identifier (system ID, hostname, or FQDN) of the machine with the bridge interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#machine NetworkInterfaceBridge#machine}
  */
  readonly machine: string;
  /**
  * The MTU of the bridge interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#mtu NetworkInterfaceBridge#mtu}
  */
  readonly mtu?: number;
  /**
  * The bridge interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#name NetworkInterfaceBridge#name}
  */
  readonly name?: string;
  /**
  * Parent interface name for this bridge interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#parent NetworkInterfaceBridge#parent}
  */
  readonly parent?: string;
  /**
  * A set of tag names to be assigned to the bridge interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#tags NetworkInterfaceBridge#tags}
  */
  readonly tags?: string[];
  /**
  * Database ID of the VLAN the bridge interface is connected to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#vlan NetworkInterfaceBridge#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge maas_network_interface_bridge}
*/
export class NetworkInterfaceBridge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_network_interface_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkInterfaceBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkInterfaceBridge to import
  * @param importFromId The id of the existing NetworkInterfaceBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkInterfaceBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_network_interface_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bridge maas_network_interface_bridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_network_interface_bridge',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptRa = config.acceptRa;
    this._bridgeFd = config.bridgeFd;
    this._bridgeStp = config.bridgeStp;
    this._bridgeType = config.bridgeType;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._machine = config.machine;
    this._mtu = config.mtu;
    this._name = config.name;
    this._parent = config.parent;
    this._tags = config.tags;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_ra - computed: true, optional: true, required: false
  private _acceptRa?: boolean | cdktf.IResolvable; 
  public get acceptRa() {
    return this.getBooleanAttribute('accept_ra');
  }
  public set acceptRa(value: boolean | cdktf.IResolvable) {
    this._acceptRa = value;
  }
  public resetAcceptRa() {
    this._acceptRa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRaInput() {
    return this._acceptRa;
  }

  // bridge_fd - computed: true, optional: true, required: false
  private _bridgeFd?: number; 
  public get bridgeFd() {
    return this.getNumberAttribute('bridge_fd');
  }
  public set bridgeFd(value: number) {
    this._bridgeFd = value;
  }
  public resetBridgeFd() {
    this._bridgeFd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeFdInput() {
    return this._bridgeFd;
  }

  // bridge_stp - computed: false, optional: true, required: false
  private _bridgeStp?: boolean | cdktf.IResolvable; 
  public get bridgeStp() {
    return this.getBooleanAttribute('bridge_stp');
  }
  public set bridgeStp(value: boolean | cdktf.IResolvable) {
    this._bridgeStp = value;
  }
  public resetBridgeStp() {
    this._bridgeStp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeStpInput() {
    return this._bridgeStp;
  }

  // bridge_type - computed: true, optional: true, required: false
  private _bridgeType?: string; 
  public get bridgeType() {
    return this.getStringAttribute('bridge_type');
  }
  public set bridgeType(value: string) {
    this._bridgeType = value;
  }
  public resetBridgeType() {
    this._bridgeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeTypeInput() {
    return this._bridgeType;
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

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // machine - computed: false, optional: false, required: true
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
  }

  // mtu - computed: true, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
      accept_ra: cdktf.booleanToTerraform(this._acceptRa),
      bridge_fd: cdktf.numberToTerraform(this._bridgeFd),
      bridge_stp: cdktf.booleanToTerraform(this._bridgeStp),
      bridge_type: cdktf.stringToTerraform(this._bridgeType),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      machine: cdktf.stringToTerraform(this._machine),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_ra: {
        value: cdktf.booleanToHclTerraform(this._acceptRa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bridge_fd: {
        value: cdktf.numberToHclTerraform(this._bridgeFd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bridge_stp: {
        value: cdktf.booleanToHclTerraform(this._bridgeStp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bridge_type: {
        value: cdktf.stringToHclTerraform(this._bridgeType),
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
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
