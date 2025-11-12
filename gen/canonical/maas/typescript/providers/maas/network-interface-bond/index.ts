// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceBondConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accept router advertisements. (IPv6 only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#accept_ra NetworkInterfaceBond#accept_ra}
  */
  readonly acceptRa?: boolean | cdktf.IResolvable;
  /**
  * Specifies the time, in milliseconds, to wait before disabling a slave after a link failure has been detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#bond_downdelay NetworkInterfaceBond#bond_downdelay}
  */
  readonly bondDowndelay?: number;
  /**
  * Option specifying the rate at which to ask the link partner to transmit LACPDU packets in 802.3ad mode. Available options are ``fast`` or ``slow``. (Default: ``slow``).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#bond_lacp_rate NetworkInterfaceBond#bond_lacp_rate}
  */
  readonly bondLacpRate?: string;
  /**
  * The link monitoring frequency in milliseconds. (Default: 100).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#bond_miimon NetworkInterfaceBond#bond_miimon}
  */
  readonly bondMiimon?: number;
  /**
  * The operating mode of the bond. (Default: active-backup). Supported bonding modes: - ``balance-rr``: Transmit packets in sequential order from the first available slave through the last. This mode provides load balancing and fault tolerance. - ``active-backup``: Only one slave in the bond is active. A different slave becomes active if, and only if, the active slave fails. The bond's MAC address is externally visible on only one port (network adapter) to avoid confusing the switch. - ``balance-xor``: Transmit based on the selected transmit hash policy. The default policy is a simple [(source MAC address XOR'd with destination MAC address XOR packet type ID) modulo slave count]. - ``broadcast``: Transmits everything on all slave interfaces. This mode provides fault tolerance. - ``802.3ad``: IEEE 802.3ad dynamic link aggregation. Creates aggregation groups that share the same speed and duplex settings. Uses all slaves in the active aggregator according to the 802.3ad specification. - ``balance-tlb``: Adaptive transmit load balancing: channel bonding that does not require any special switch support. - ``balance-alb``: Adaptive load balancing: includes balance-tlb plus receive load balancing (rlb) for IPV4 traffic, and does not require any special switch support. The receive load balancing is achieved by ARP negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#bond_mode NetworkInterfaceBond#bond_mode}
  */
  readonly bondMode?: string;
  /**
  * The number of peer notifications (IPv4 ARP or IPv6 Neighbour Advertisements) to be issued after a failover. (Default: 1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#bond_num_grat_arp NetworkInterfaceBond#bond_num_grat_arp}
  */
  readonly bondNumGratArp?: number;
  /**
  * Specifies the time, in milliseconds, to wait before enabling a slave after a link recovery has been detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#bond_updelay NetworkInterfaceBond#bond_updelay}
  */
  readonly bondUpdelay?: number;
  /**
  * The transmit hash policy to use for slave selection in balance-xor, 802.3ad, and tlb modes. Possible values are: ``layer2``, ``layer2+3``, ``layer3+4``, ``encap2+3``, ``encap3+4``. (Default: ``layer2``).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#bond_xmit_hash_policy NetworkInterfaceBond#bond_xmit_hash_policy}
  */
  readonly bondXmitHashPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#id NetworkInterfaceBond#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The bond interface MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#mac_address NetworkInterfaceBond#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The identifier (system ID, hostname, or FQDN) of the machine with the bond interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#machine NetworkInterfaceBond#machine}
  */
  readonly machine: string;
  /**
  * The MTU of the bond interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#mtu NetworkInterfaceBond#mtu}
  */
  readonly mtu?: number;
  /**
  * The bond interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#name NetworkInterfaceBond#name}
  */
  readonly name: string;
  /**
  * Parent interface names for this bond interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#parents NetworkInterfaceBond#parents}
  */
  readonly parents: string[];
  /**
  * A set of tag names to be assigned to the bond interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#tags NetworkInterfaceBond#tags}
  */
  readonly tags?: string[];
  /**
  * Database ID of the VLAN the bond interface is connected to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#vlan NetworkInterfaceBond#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond maas_network_interface_bond}
*/
export class NetworkInterfaceBond extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_network_interface_bond";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkInterfaceBond resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkInterfaceBond to import
  * @param importFromId The id of the existing NetworkInterfaceBond that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkInterfaceBond to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_network_interface_bond", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_bond maas_network_interface_bond} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceBondConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceBondConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_network_interface_bond',
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
    this._bondDowndelay = config.bondDowndelay;
    this._bondLacpRate = config.bondLacpRate;
    this._bondMiimon = config.bondMiimon;
    this._bondMode = config.bondMode;
    this._bondNumGratArp = config.bondNumGratArp;
    this._bondUpdelay = config.bondUpdelay;
    this._bondXmitHashPolicy = config.bondXmitHashPolicy;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._machine = config.machine;
    this._mtu = config.mtu;
    this._name = config.name;
    this._parents = config.parents;
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

  // bond_downdelay - computed: true, optional: true, required: false
  private _bondDowndelay?: number; 
  public get bondDowndelay() {
    return this.getNumberAttribute('bond_downdelay');
  }
  public set bondDowndelay(value: number) {
    this._bondDowndelay = value;
  }
  public resetBondDowndelay() {
    this._bondDowndelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondDowndelayInput() {
    return this._bondDowndelay;
  }

  // bond_lacp_rate - computed: true, optional: true, required: false
  private _bondLacpRate?: string; 
  public get bondLacpRate() {
    return this.getStringAttribute('bond_lacp_rate');
  }
  public set bondLacpRate(value: string) {
    this._bondLacpRate = value;
  }
  public resetBondLacpRate() {
    this._bondLacpRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondLacpRateInput() {
    return this._bondLacpRate;
  }

  // bond_miimon - computed: true, optional: true, required: false
  private _bondMiimon?: number; 
  public get bondMiimon() {
    return this.getNumberAttribute('bond_miimon');
  }
  public set bondMiimon(value: number) {
    this._bondMiimon = value;
  }
  public resetBondMiimon() {
    this._bondMiimon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondMiimonInput() {
    return this._bondMiimon;
  }

  // bond_mode - computed: true, optional: true, required: false
  private _bondMode?: string; 
  public get bondMode() {
    return this.getStringAttribute('bond_mode');
  }
  public set bondMode(value: string) {
    this._bondMode = value;
  }
  public resetBondMode() {
    this._bondMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondModeInput() {
    return this._bondMode;
  }

  // bond_num_grat_arp - computed: true, optional: true, required: false
  private _bondNumGratArp?: number; 
  public get bondNumGratArp() {
    return this.getNumberAttribute('bond_num_grat_arp');
  }
  public set bondNumGratArp(value: number) {
    this._bondNumGratArp = value;
  }
  public resetBondNumGratArp() {
    this._bondNumGratArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondNumGratArpInput() {
    return this._bondNumGratArp;
  }

  // bond_updelay - computed: true, optional: true, required: false
  private _bondUpdelay?: number; 
  public get bondUpdelay() {
    return this.getNumberAttribute('bond_updelay');
  }
  public set bondUpdelay(value: number) {
    this._bondUpdelay = value;
  }
  public resetBondUpdelay() {
    this._bondUpdelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondUpdelayInput() {
    return this._bondUpdelay;
  }

  // bond_xmit_hash_policy - computed: true, optional: true, required: false
  private _bondXmitHashPolicy?: string; 
  public get bondXmitHashPolicy() {
    return this.getStringAttribute('bond_xmit_hash_policy');
  }
  public set bondXmitHashPolicy(value: string) {
    this._bondXmitHashPolicy = value;
  }
  public resetBondXmitHashPolicy() {
    this._bondXmitHashPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondXmitHashPolicyInput() {
    return this._bondXmitHashPolicy;
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

  // parents - computed: false, optional: false, required: true
  private _parents?: string[]; 
  public get parents() {
    return cdktf.Fn.tolist(this.getListAttribute('parents'));
  }
  public set parents(value: string[]) {
    this._parents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentsInput() {
    return this._parents;
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
      bond_downdelay: cdktf.numberToTerraform(this._bondDowndelay),
      bond_lacp_rate: cdktf.stringToTerraform(this._bondLacpRate),
      bond_miimon: cdktf.numberToTerraform(this._bondMiimon),
      bond_mode: cdktf.stringToTerraform(this._bondMode),
      bond_num_grat_arp: cdktf.numberToTerraform(this._bondNumGratArp),
      bond_updelay: cdktf.numberToTerraform(this._bondUpdelay),
      bond_xmit_hash_policy: cdktf.stringToTerraform(this._bondXmitHashPolicy),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      machine: cdktf.stringToTerraform(this._machine),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      parents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._parents),
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
      bond_downdelay: {
        value: cdktf.numberToHclTerraform(this._bondDowndelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bond_lacp_rate: {
        value: cdktf.stringToHclTerraform(this._bondLacpRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bond_miimon: {
        value: cdktf.numberToHclTerraform(this._bondMiimon),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bond_mode: {
        value: cdktf.stringToHclTerraform(this._bondMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bond_num_grat_arp: {
        value: cdktf.numberToHclTerraform(this._bondNumGratArp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bond_updelay: {
        value: cdktf.numberToHclTerraform(this._bondUpdelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bond_xmit_hash_policy: {
        value: cdktf.stringToHclTerraform(this._bondXmitHashPolicy),
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
      parents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._parents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
