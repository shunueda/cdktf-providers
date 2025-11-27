// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#___path___ InterfaceBridge#___path___}
  */
  readonly path?: string;
  /**
  * Whether to add DHCP Option-82 information (Agent Remote ID and Agent Circuit ID) to DHCP packets. Can be used together with Option-82 capable DHCP server to assign IP addresses and implement policies. This property only has effect when dhcp-snooping is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#add_dhcp_option82 InterfaceBridge#add_dhcp_option82}
  */
  readonly addDhcpOption82?: boolean | cdktf.IResolvable;
  /**
  * Static MAC address of the bridge. This property only has effect when auto-mac is set to no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#admin_mac InterfaceBridge#admin_mac}
  */
  readonly adminMac?: string;
  /**
  * How long a host's information will be kept in the bridge database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#ageing_time InterfaceBridge#ageing_time}
  */
  readonly ageingTime?: string;
  /**
  * Address Resolution Protocol mode:
  *   * disabled - the interface will not use ARP
  *   * enabled - the interface will use ARP
  *   * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface
  *   * proxy-arp - the router performs proxy ARP on the interface and sends replies to other interfaces
  *   * reply-only - the interface will only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be successful, a valid static entry must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#arp InterfaceBridge#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#arp_timeout InterfaceBridge#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Automatically select one MAC address of bridge ports as a bridge MAC address, bridge MAC will be chosen from the first added bridge port. After a device reboot, the bridge MAC can change depending on the port-number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#auto_mac InterfaceBridge#auto_mac}
  */
  readonly autoMac?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#comment InterfaceBridge#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#dhcp_snooping InterfaceBridge#dhcp_snooping}
  */
  readonly dhcpSnooping?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#disabled InterfaceBridge#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * This property only has effect when vlan-filtering is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#ether_type InterfaceBridge#ether_type}
  */
  readonly etherType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#fast_forward InterfaceBridge#fast_forward}
  */
  readonly fastForward?: boolean | cdktf.IResolvable;
  /**
  * Time which is spent during the initialization phase of the bridge interface (i.e., after router startup or enabling the interface) in listening/learning state before the bridge will start functioning normally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#forward_delay InterfaceBridge#forward_delay}
  */
  readonly forwardDelay?: string;
  /**
  * An option whether to forward IEEE reserved multicast MAC addresses that are in the `01:80:C2:00:00:0x` range. This option is available in RouterOS starting from version 7.16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#forward_reserved_addresses InterfaceBridge#forward_reserved_addresses}
  */
  readonly forwardReservedAddresses?: boolean | cdktf.IResolvable;
  /**
  * Specifies allowed frame types on a bridge port. This property only has effect when vlan-filtering is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#frame_types InterfaceBridge#frame_types}
  */
  readonly frameTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#id InterfaceBridge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables multicast group and port learning to prevent multicast traffic from flooding all interfaces in a bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#igmp_snooping InterfaceBridge#igmp_snooping}
  */
  readonly igmpSnooping?: boolean | cdktf.IResolvable;
  /**
  * Selects the IGMP version in which IGMP general membership queries will be generated. This property only has effect when igmp-snooping is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#igmp_version InterfaceBridge#igmp_version}
  */
  readonly igmpVersion?: number;
  /**
  * Enables or disables VLAN ingress filtering, which checks if the ingress port is a member of the received VLAN ID in the bridge VLAN table. Should be used with frame-types to specify if the ingress traffic should be tagged or untagged. This property only has effect when vlan-filtering is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#ingress_filtering InterfaceBridge#ingress_filtering}
  */
  readonly ingressFiltering?: boolean | cdktf.IResolvable;
  /**
  * If a port has fast-leave set to no and a bridge port receives a IGMP Leave message, then a IGMP Snooping enabled bridge will send a IGMP query to make sure that no devices has subscribed to a certain multicast stream on a bridge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#last_member_interval InterfaceBridge#last_member_interval}
  */
  readonly lastMemberInterval?: string;
  /**
  * How many times should last-member-interval pass until a IGMP Snooping bridge will stop forwarding a certain multicast stream. This property only has effect when igmp-snooping is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#last_member_query_count InterfaceBridge#last_member_query_count}
  */
  readonly lastMemberQueryCount?: number;
  /**
  * Bridge count which BPDU can pass in a MSTP enabled network in the same region before BPDU is being ignored. This property only has effect when protocol-mode is set to mstp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#max_hops InterfaceBridge#max_hops}
  */
  readonly maxHops?: number;
  /**
  * An option to set the maximum number of learned hosts for the bridge interface. This option is available in RouterOS starting from version 7.16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#max_learned_entries InterfaceBridge#max_learned_entries}
  */
  readonly maxLearnedEntries?: string;
  /**
  * Changes the Max Age value in BPDU packets, which is transmitted by the root bridge. This property only has effect when protocol-mode is set to stp or rstp. Value: 6s..40s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#max_message_age InterfaceBridge#max_message_age}
  */
  readonly maxMessageAge?: string;
  /**
  * Amount of time after an entry in the Multicast Database (MDB) is removed if a IGMP membership report is not received on a certain port. This property only has effect when igmp-snooping is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#membership_interval InterfaceBridge#membership_interval}
  */
  readonly membershipInterval?: string;
  /**
  * Selects the MLD version. Version 2 adds support for source-specific multicast. This property only has effect when RouterOS IPv6 package is enabled and igmp-snooping is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#mld_version InterfaceBridge#mld_version}
  */
  readonly mldVersion?: number;
  /**
  * The default bridge MTU value without any bridge ports added is 1500. The MTU value can be set manually, but it cannot exceed the bridge L2MTU or the lowest bridge port L2MTU. If a new bridge port is added with L2MTU which is smaller than the actual-mtu of the bridge (set by the mtu property), then manually set value will be ignored and the bridge will act as if mtu=auto is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#mtu InterfaceBridge#mtu}
  */
  readonly mtu?: string;
  /**
  * Multicast querier generates IGMP general membership queries to which all IGMP capable devices respond with an IGMP membership report, usually a PIM (multicast) router or IGMP proxy generates these queries. This property only has an effect when igmp-snooping is set to yes. Additionally, the igmp-snooping should be disabled/enabled after changing multicast-querier property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#multicast_querier InterfaceBridge#multicast_querier}
  */
  readonly multicastQuerier?: boolean | cdktf.IResolvable;
  /**
  * A multicast router port is a port where a multicast router or querier is connected. On this port, unregistered multicast streams and IGMP/MLD membership reports will be sent. This setting changes the state of the multicast router for a bridge interface itself. This property can be used to send IGMP/MLD membership reports and multicast traffic to the bridge interface for further multicast routing or proxying. This property only has an effect when igmp-snooping is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#multicast_router InterfaceBridge#multicast_router}
  */
  readonly multicastRouter?: string;
  /**
  * Enables MVRP for bridge (available since RouterOS 7.15). It ensures that the MAC address 01:80:C2:00:00:21 is trapped and not forwarded, the vlan-filtering must be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#mvrp InterfaceBridge#mvrp}
  */
  readonly mvrp?: boolean | cdktf.IResolvable;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#name InterfaceBridge#name}
  */
  readonly name: string;
  /**
  * An option that changes the port path cost and internal path cost mode for bridged ports, utilizing automatic values based on interface speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#port_cost_mode InterfaceBridge#port_cost_mode}
  */
  readonly portCostMode?: string;
  /**
  * Bridge priority, used by STP to determine root bridge, used by MSTP to determine CIST and IST regional root bridge. This property has no effect when protocol-mode is set to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#priority InterfaceBridge#priority}
  */
  readonly priority?: string;
  /**
  * Select Spanning tree protocol (STP) or Rapid spanning tree protocol (RSTP) to ensure a loop-free topology for any bridged LAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#protocol_mode InterfaceBridge#protocol_mode}
  */
  readonly protocolMode?: string;
  /**
  * Port VLAN ID (pvid) specifies which VLAN the untagged ingress traffic is assigned to. It applies e.g. to frames sent from bridge IP and destined to a bridge port. This property only has effect when vlan-filtering is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#pvid InterfaceBridge#pvid}
  */
  readonly pvid?: number;
  /**
  * Used to change the interval how often a bridge checks if it is the active multicast querier. This property only has effect when igmp-snooping and multicast-querier is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#querier_interval InterfaceBridge#querier_interval}
  */
  readonly querierInterval?: string;
  /**
  * Used to change the interval how often IGMP general membership queries are sent out. This property only has effect when igmp-snooping and multicast-querier is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#query_interval InterfaceBridge#query_interval}
  */
  readonly queryInterval?: string;
  /**
  * Interval in which a IGMP capable device must reply to a IGMP query with a IGMP membership report. This property only has effect when igmp-snooping and multicast-querier is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#query_response_interval InterfaceBridge#query_response_interval}
  */
  readonly queryResponseInterval?: string;
  /**
  * MSTP region name. This property only has effect when protocol-mode is set to mstp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#region_name InterfaceBridge#region_name}
  */
  readonly regionName?: string;
  /**
  * MSTP configuration revision number. This property only has effect when protocol-mode is set to mstp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#region_revision InterfaceBridge#region_revision}
  */
  readonly regionRevision?: number;
  /**
  * Specifies how many times must startup-query-interval pass until the bridge starts sending out IGMP general membership queries periodically. This property only has effect when igmp-snooping and multicast-querier is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#startup_query_count InterfaceBridge#startup_query_count}
  */
  readonly startupQueryCount?: number;
  /**
  * Used to change the amount of time after a bridge starts sending out IGMP general membership queries after the bridge is enabled. This property only has effect when igmp-snooping and multicast-querier is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#startup_query_interval InterfaceBridge#startup_query_interval}
  */
  readonly startupQueryInterval?: string;
  /**
  * The Transmit Hold Count used by the Port Transmit state machine to limit transmission rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#transmit_hold_count InterfaceBridge#transmit_hold_count}
  */
  readonly transmitHoldCount?: number;
  /**
  * Globally enables or disables VLAN functionality for bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#vlan_filtering InterfaceBridge#vlan_filtering}
  */
  readonly vlanFiltering?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge routeros_interface_bridge}
*/
export class InterfaceBridge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceBridge to import
  * @param importFromId The id of the existing InterfaceBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge routeros_interface_bridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_bridge',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._addDhcpOption82 = config.addDhcpOption82;
    this._adminMac = config.adminMac;
    this._ageingTime = config.ageingTime;
    this._arp = config.arp;
    this._arpTimeout = config.arpTimeout;
    this._autoMac = config.autoMac;
    this._comment = config.comment;
    this._dhcpSnooping = config.dhcpSnooping;
    this._disabled = config.disabled;
    this._etherType = config.etherType;
    this._fastForward = config.fastForward;
    this._forwardDelay = config.forwardDelay;
    this._forwardReservedAddresses = config.forwardReservedAddresses;
    this._frameTypes = config.frameTypes;
    this._id = config.id;
    this._igmpSnooping = config.igmpSnooping;
    this._igmpVersion = config.igmpVersion;
    this._ingressFiltering = config.ingressFiltering;
    this._lastMemberInterval = config.lastMemberInterval;
    this._lastMemberQueryCount = config.lastMemberQueryCount;
    this._maxHops = config.maxHops;
    this._maxLearnedEntries = config.maxLearnedEntries;
    this._maxMessageAge = config.maxMessageAge;
    this._membershipInterval = config.membershipInterval;
    this._mldVersion = config.mldVersion;
    this._mtu = config.mtu;
    this._multicastQuerier = config.multicastQuerier;
    this._multicastRouter = config.multicastRouter;
    this._mvrp = config.mvrp;
    this._name = config.name;
    this._portCostMode = config.portCostMode;
    this._priority = config.priority;
    this._protocolMode = config.protocolMode;
    this._pvid = config.pvid;
    this._querierInterval = config.querierInterval;
    this._queryInterval = config.queryInterval;
    this._queryResponseInterval = config.queryResponseInterval;
    this._regionName = config.regionName;
    this._regionRevision = config.regionRevision;
    this._startupQueryCount = config.startupQueryCount;
    this._startupQueryInterval = config.startupQueryInterval;
    this._transmitHoldCount = config.transmitHoldCount;
    this._vlanFiltering = config.vlanFiltering;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // actual_mtu - computed: true, optional: false, required: false
  public get actualMtu() {
    return this.getNumberAttribute('actual_mtu');
  }

  // add_dhcp_option82 - computed: false, optional: true, required: false
  private _addDhcpOption82?: boolean | cdktf.IResolvable; 
  public get addDhcpOption82() {
    return this.getBooleanAttribute('add_dhcp_option82');
  }
  public set addDhcpOption82(value: boolean | cdktf.IResolvable) {
    this._addDhcpOption82 = value;
  }
  public resetAddDhcpOption82() {
    this._addDhcpOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDhcpOption82Input() {
    return this._addDhcpOption82;
  }

  // admin_mac - computed: true, optional: true, required: false
  private _adminMac?: string; 
  public get adminMac() {
    return this.getStringAttribute('admin_mac');
  }
  public set adminMac(value: string) {
    this._adminMac = value;
  }
  public resetAdminMac() {
    this._adminMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminMacInput() {
    return this._adminMac;
  }

  // ageing_time - computed: false, optional: true, required: false
  private _ageingTime?: string; 
  public get ageingTime() {
    return this.getStringAttribute('ageing_time');
  }
  public set ageingTime(value: string) {
    this._ageingTime = value;
  }
  public resetAgeingTime() {
    this._ageingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageingTimeInput() {
    return this._ageingTime;
  }

  // arp - computed: false, optional: true, required: false
  private _arp?: string; 
  public get arp() {
    return this.getStringAttribute('arp');
  }
  public set arp(value: string) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: string; 
  public get arpTimeout() {
    return this.getStringAttribute('arp_timeout');
  }
  public set arpTimeout(value: string) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // auto_mac - computed: false, optional: true, required: false
  private _autoMac?: boolean | cdktf.IResolvable; 
  public get autoMac() {
    return this.getBooleanAttribute('auto_mac');
  }
  public set autoMac(value: boolean | cdktf.IResolvable) {
    this._autoMac = value;
  }
  public resetAutoMac() {
    this._autoMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMacInput() {
    return this._autoMac;
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

  // dhcp_snooping - computed: false, optional: true, required: false
  private _dhcpSnooping?: boolean | cdktf.IResolvable; 
  public get dhcpSnooping() {
    return this.getBooleanAttribute('dhcp_snooping');
  }
  public set dhcpSnooping(value: boolean | cdktf.IResolvable) {
    this._dhcpSnooping = value;
  }
  public resetDhcpSnooping() {
    this._dhcpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingInput() {
    return this._dhcpSnooping;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // ether_type - computed: false, optional: true, required: false
  private _etherType?: string; 
  public get etherType() {
    return this.getStringAttribute('ether_type');
  }
  public set etherType(value: string) {
    this._etherType = value;
  }
  public resetEtherType() {
    this._etherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
  }

  // fast_forward - computed: true, optional: true, required: false
  private _fastForward?: boolean | cdktf.IResolvable; 
  public get fastForward() {
    return this.getBooleanAttribute('fast_forward');
  }
  public set fastForward(value: boolean | cdktf.IResolvable) {
    this._fastForward = value;
  }
  public resetFastForward() {
    this._fastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastForwardInput() {
    return this._fastForward;
  }

  // forward_delay - computed: false, optional: true, required: false
  private _forwardDelay?: string; 
  public get forwardDelay() {
    return this.getStringAttribute('forward_delay');
  }
  public set forwardDelay(value: string) {
    this._forwardDelay = value;
  }
  public resetForwardDelay() {
    this._forwardDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDelayInput() {
    return this._forwardDelay;
  }

  // forward_reserved_addresses - computed: false, optional: true, required: false
  private _forwardReservedAddresses?: boolean | cdktf.IResolvable; 
  public get forwardReservedAddresses() {
    return this.getBooleanAttribute('forward_reserved_addresses');
  }
  public set forwardReservedAddresses(value: boolean | cdktf.IResolvable) {
    this._forwardReservedAddresses = value;
  }
  public resetForwardReservedAddresses() {
    this._forwardReservedAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReservedAddressesInput() {
    return this._forwardReservedAddresses;
  }

  // frame_types - computed: false, optional: true, required: false
  private _frameTypes?: string; 
  public get frameTypes() {
    return this.getStringAttribute('frame_types');
  }
  public set frameTypes(value: string) {
    this._frameTypes = value;
  }
  public resetFrameTypes() {
    this._frameTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameTypesInput() {
    return this._frameTypes;
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

  // igmp_snooping - computed: false, optional: true, required: false
  private _igmpSnooping?: boolean | cdktf.IResolvable; 
  public get igmpSnooping() {
    return this.getBooleanAttribute('igmp_snooping');
  }
  public set igmpSnooping(value: boolean | cdktf.IResolvable) {
    this._igmpSnooping = value;
  }
  public resetIgmpSnooping() {
    this._igmpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingInput() {
    return this._igmpSnooping;
  }

  // igmp_version - computed: true, optional: true, required: false
  private _igmpVersion?: number; 
  public get igmpVersion() {
    return this.getNumberAttribute('igmp_version');
  }
  public set igmpVersion(value: number) {
    this._igmpVersion = value;
  }
  public resetIgmpVersion() {
    this._igmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpVersionInput() {
    return this._igmpVersion;
  }

  // ingress_filtering - computed: false, optional: true, required: false
  private _ingressFiltering?: boolean | cdktf.IResolvable; 
  public get ingressFiltering() {
    return this.getBooleanAttribute('ingress_filtering');
  }
  public set ingressFiltering(value: boolean | cdktf.IResolvable) {
    this._ingressFiltering = value;
  }
  public resetIngressFiltering() {
    this._ingressFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFilteringInput() {
    return this._ingressFiltering;
  }

  // l2mtu - computed: true, optional: false, required: false
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
  }

  // last_member_interval - computed: true, optional: true, required: false
  private _lastMemberInterval?: string; 
  public get lastMemberInterval() {
    return this.getStringAttribute('last_member_interval');
  }
  public set lastMemberInterval(value: string) {
    this._lastMemberInterval = value;
  }
  public resetLastMemberInterval() {
    this._lastMemberInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberIntervalInput() {
    return this._lastMemberInterval;
  }

  // last_member_query_count - computed: true, optional: true, required: false
  private _lastMemberQueryCount?: number; 
  public get lastMemberQueryCount() {
    return this.getNumberAttribute('last_member_query_count');
  }
  public set lastMemberQueryCount(value: number) {
    this._lastMemberQueryCount = value;
  }
  public resetLastMemberQueryCount() {
    this._lastMemberQueryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberQueryCountInput() {
    return this._lastMemberQueryCount;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // max_hops - computed: true, optional: true, required: false
  private _maxHops?: number; 
  public get maxHops() {
    return this.getNumberAttribute('max_hops');
  }
  public set maxHops(value: number) {
    this._maxHops = value;
  }
  public resetMaxHops() {
    this._maxHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopsInput() {
    return this._maxHops;
  }

  // max_learned_entries - computed: false, optional: true, required: false
  private _maxLearnedEntries?: string; 
  public get maxLearnedEntries() {
    return this.getStringAttribute('max_learned_entries');
  }
  public set maxLearnedEntries(value: string) {
    this._maxLearnedEntries = value;
  }
  public resetMaxLearnedEntries() {
    this._maxLearnedEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLearnedEntriesInput() {
    return this._maxLearnedEntries;
  }

  // max_message_age - computed: false, optional: true, required: false
  private _maxMessageAge?: string; 
  public get maxMessageAge() {
    return this.getStringAttribute('max_message_age');
  }
  public set maxMessageAge(value: string) {
    this._maxMessageAge = value;
  }
  public resetMaxMessageAge() {
    this._maxMessageAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageAgeInput() {
    return this._maxMessageAge;
  }

  // membership_interval - computed: true, optional: true, required: false
  private _membershipInterval?: string; 
  public get membershipInterval() {
    return this.getStringAttribute('membership_interval');
  }
  public set membershipInterval(value: string) {
    this._membershipInterval = value;
  }
  public resetMembershipInterval() {
    this._membershipInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIntervalInput() {
    return this._membershipInterval;
  }

  // mld_version - computed: true, optional: true, required: false
  private _mldVersion?: number; 
  public get mldVersion() {
    return this.getNumberAttribute('mld_version');
  }
  public set mldVersion(value: number) {
    this._mldVersion = value;
  }
  public resetMldVersion() {
    this._mldVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldVersionInput() {
    return this._mldVersion;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // multicast_querier - computed: false, optional: true, required: false
  private _multicastQuerier?: boolean | cdktf.IResolvable; 
  public get multicastQuerier() {
    return this.getBooleanAttribute('multicast_querier');
  }
  public set multicastQuerier(value: boolean | cdktf.IResolvable) {
    this._multicastQuerier = value;
  }
  public resetMulticastQuerier() {
    this._multicastQuerier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastQuerierInput() {
    return this._multicastQuerier;
  }

  // multicast_router - computed: true, optional: true, required: false
  private _multicastRouter?: string; 
  public get multicastRouter() {
    return this.getStringAttribute('multicast_router');
  }
  public set multicastRouter(value: string) {
    this._multicastRouter = value;
  }
  public resetMulticastRouter() {
    this._multicastRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRouterInput() {
    return this._multicastRouter;
  }

  // mvrp - computed: false, optional: true, required: false
  private _mvrp?: boolean | cdktf.IResolvable; 
  public get mvrp() {
    return this.getBooleanAttribute('mvrp');
  }
  public set mvrp(value: boolean | cdktf.IResolvable) {
    this._mvrp = value;
  }
  public resetMvrp() {
    this._mvrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mvrpInput() {
    return this._mvrp;
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

  // port_cost_mode - computed: false, optional: true, required: false
  private _portCostMode?: string; 
  public get portCostMode() {
    return this.getStringAttribute('port_cost_mode');
  }
  public set portCostMode(value: string) {
    this._portCostMode = value;
  }
  public resetPortCostMode() {
    this._portCostMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCostModeInput() {
    return this._portCostMode;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol_mode - computed: false, optional: true, required: false
  private _protocolMode?: string; 
  public get protocolMode() {
    return this.getStringAttribute('protocol_mode');
  }
  public set protocolMode(value: string) {
    this._protocolMode = value;
  }
  public resetProtocolMode() {
    this._protocolMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolModeInput() {
    return this._protocolMode;
  }

  // pvid - computed: false, optional: true, required: false
  private _pvid?: number; 
  public get pvid() {
    return this.getNumberAttribute('pvid');
  }
  public set pvid(value: number) {
    this._pvid = value;
  }
  public resetPvid() {
    this._pvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvidInput() {
    return this._pvid;
  }

  // querier_interval - computed: true, optional: true, required: false
  private _querierInterval?: string; 
  public get querierInterval() {
    return this.getStringAttribute('querier_interval');
  }
  public set querierInterval(value: string) {
    this._querierInterval = value;
  }
  public resetQuerierInterval() {
    this._querierInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierIntervalInput() {
    return this._querierInterval;
  }

  // query_interval - computed: true, optional: true, required: false
  private _queryInterval?: string; 
  public get queryInterval() {
    return this.getStringAttribute('query_interval');
  }
  public set queryInterval(value: string) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // query_response_interval - computed: true, optional: true, required: false
  private _queryResponseInterval?: string; 
  public get queryResponseInterval() {
    return this.getStringAttribute('query_response_interval');
  }
  public set queryResponseInterval(value: string) {
    this._queryResponseInterval = value;
  }
  public resetQueryResponseInterval() {
    this._queryResponseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryResponseIntervalInput() {
    return this._queryResponseInterval;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // region_revision - computed: false, optional: true, required: false
  private _regionRevision?: number; 
  public get regionRevision() {
    return this.getNumberAttribute('region_revision');
  }
  public set regionRevision(value: number) {
    this._regionRevision = value;
  }
  public resetRegionRevision() {
    this._regionRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionRevisionInput() {
    return this._regionRevision;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // startup_query_count - computed: true, optional: true, required: false
  private _startupQueryCount?: number; 
  public get startupQueryCount() {
    return this.getNumberAttribute('startup_query_count');
  }
  public set startupQueryCount(value: number) {
    this._startupQueryCount = value;
  }
  public resetStartupQueryCount() {
    this._startupQueryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupQueryCountInput() {
    return this._startupQueryCount;
  }

  // startup_query_interval - computed: true, optional: true, required: false
  private _startupQueryInterval?: string; 
  public get startupQueryInterval() {
    return this.getStringAttribute('startup_query_interval');
  }
  public set startupQueryInterval(value: string) {
    this._startupQueryInterval = value;
  }
  public resetStartupQueryInterval() {
    this._startupQueryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupQueryIntervalInput() {
    return this._startupQueryInterval;
  }

  // transmit_hold_count - computed: false, optional: true, required: false
  private _transmitHoldCount?: number; 
  public get transmitHoldCount() {
    return this.getNumberAttribute('transmit_hold_count');
  }
  public set transmitHoldCount(value: number) {
    this._transmitHoldCount = value;
  }
  public resetTransmitHoldCount() {
    this._transmitHoldCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitHoldCountInput() {
    return this._transmitHoldCount;
  }

  // vlan_filtering - computed: false, optional: true, required: false
  private _vlanFiltering?: boolean | cdktf.IResolvable; 
  public get vlanFiltering() {
    return this.getBooleanAttribute('vlan_filtering');
  }
  public set vlanFiltering(value: boolean | cdktf.IResolvable) {
    this._vlanFiltering = value;
  }
  public resetVlanFiltering() {
    this._vlanFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanFilteringInput() {
    return this._vlanFiltering;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      add_dhcp_option82: cdktf.booleanToTerraform(this._addDhcpOption82),
      admin_mac: cdktf.stringToTerraform(this._adminMac),
      ageing_time: cdktf.stringToTerraform(this._ageingTime),
      arp: cdktf.stringToTerraform(this._arp),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      auto_mac: cdktf.booleanToTerraform(this._autoMac),
      comment: cdktf.stringToTerraform(this._comment),
      dhcp_snooping: cdktf.booleanToTerraform(this._dhcpSnooping),
      disabled: cdktf.booleanToTerraform(this._disabled),
      ether_type: cdktf.stringToTerraform(this._etherType),
      fast_forward: cdktf.booleanToTerraform(this._fastForward),
      forward_delay: cdktf.stringToTerraform(this._forwardDelay),
      forward_reserved_addresses: cdktf.booleanToTerraform(this._forwardReservedAddresses),
      frame_types: cdktf.stringToTerraform(this._frameTypes),
      id: cdktf.stringToTerraform(this._id),
      igmp_snooping: cdktf.booleanToTerraform(this._igmpSnooping),
      igmp_version: cdktf.numberToTerraform(this._igmpVersion),
      ingress_filtering: cdktf.booleanToTerraform(this._ingressFiltering),
      last_member_interval: cdktf.stringToTerraform(this._lastMemberInterval),
      last_member_query_count: cdktf.numberToTerraform(this._lastMemberQueryCount),
      max_hops: cdktf.numberToTerraform(this._maxHops),
      max_learned_entries: cdktf.stringToTerraform(this._maxLearnedEntries),
      max_message_age: cdktf.stringToTerraform(this._maxMessageAge),
      membership_interval: cdktf.stringToTerraform(this._membershipInterval),
      mld_version: cdktf.numberToTerraform(this._mldVersion),
      mtu: cdktf.stringToTerraform(this._mtu),
      multicast_querier: cdktf.booleanToTerraform(this._multicastQuerier),
      multicast_router: cdktf.stringToTerraform(this._multicastRouter),
      mvrp: cdktf.booleanToTerraform(this._mvrp),
      name: cdktf.stringToTerraform(this._name),
      port_cost_mode: cdktf.stringToTerraform(this._portCostMode),
      priority: cdktf.stringToTerraform(this._priority),
      protocol_mode: cdktf.stringToTerraform(this._protocolMode),
      pvid: cdktf.numberToTerraform(this._pvid),
      querier_interval: cdktf.stringToTerraform(this._querierInterval),
      query_interval: cdktf.stringToTerraform(this._queryInterval),
      query_response_interval: cdktf.stringToTerraform(this._queryResponseInterval),
      region_name: cdktf.stringToTerraform(this._regionName),
      region_revision: cdktf.numberToTerraform(this._regionRevision),
      startup_query_count: cdktf.numberToTerraform(this._startupQueryCount),
      startup_query_interval: cdktf.stringToTerraform(this._startupQueryInterval),
      transmit_hold_count: cdktf.numberToTerraform(this._transmitHoldCount),
      vlan_filtering: cdktf.booleanToTerraform(this._vlanFiltering),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_dhcp_option82: {
        value: cdktf.booleanToHclTerraform(this._addDhcpOption82),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_mac: {
        value: cdktf.stringToHclTerraform(this._adminMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ageing_time: {
        value: cdktf.stringToHclTerraform(this._ageingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_timeout: {
        value: cdktf.stringToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_mac: {
        value: cdktf.booleanToHclTerraform(this._autoMac),
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
      dhcp_snooping: {
        value: cdktf.booleanToHclTerraform(this._dhcpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ether_type: {
        value: cdktf.stringToHclTerraform(this._etherType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_forward: {
        value: cdktf.booleanToHclTerraform(this._fastForward),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_delay: {
        value: cdktf.stringToHclTerraform(this._forwardDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_reserved_addresses: {
        value: cdktf.booleanToHclTerraform(this._forwardReservedAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frame_types: {
        value: cdktf.stringToHclTerraform(this._frameTypes),
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
      igmp_snooping: {
        value: cdktf.booleanToHclTerraform(this._igmpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      igmp_version: {
        value: cdktf.numberToHclTerraform(this._igmpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ingress_filtering: {
        value: cdktf.booleanToHclTerraform(this._ingressFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_member_interval: {
        value: cdktf.stringToHclTerraform(this._lastMemberInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_member_query_count: {
        value: cdktf.numberToHclTerraform(this._lastMemberQueryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_hops: {
        value: cdktf.numberToHclTerraform(this._maxHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_learned_entries: {
        value: cdktf.stringToHclTerraform(this._maxLearnedEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_age: {
        value: cdktf.stringToHclTerraform(this._maxMessageAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_interval: {
        value: cdktf.stringToHclTerraform(this._membershipInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mld_version: {
        value: cdktf.numberToHclTerraform(this._mldVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_querier: {
        value: cdktf.booleanToHclTerraform(this._multicastQuerier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multicast_router: {
        value: cdktf.stringToHclTerraform(this._multicastRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mvrp: {
        value: cdktf.booleanToHclTerraform(this._mvrp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_cost_mode: {
        value: cdktf.stringToHclTerraform(this._portCostMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_mode: {
        value: cdktf.stringToHclTerraform(this._protocolMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvid: {
        value: cdktf.numberToHclTerraform(this._pvid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      querier_interval: {
        value: cdktf.stringToHclTerraform(this._querierInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_interval: {
        value: cdktf.stringToHclTerraform(this._queryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_response_interval: {
        value: cdktf.stringToHclTerraform(this._queryResponseInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_revision: {
        value: cdktf.numberToHclTerraform(this._regionRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      startup_query_count: {
        value: cdktf.numberToHclTerraform(this._startupQueryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      startup_query_interval: {
        value: cdktf.stringToHclTerraform(this._startupQueryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transmit_hold_count: {
        value: cdktf.numberToHclTerraform(this._transmitHoldCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_filtering: {
        value: cdktf.booleanToHclTerraform(this._vlanFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
