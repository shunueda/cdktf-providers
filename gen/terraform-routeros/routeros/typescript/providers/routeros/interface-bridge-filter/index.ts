// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceBridgeFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#___path___ InterfaceBridgeFilter#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#___skip___ InterfaceBridgeFilter#___skip___}
  */
  readonly skip?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#___unset___ InterfaceBridgeFilter#___unset___}
  */
  readonly unset?: string;
  /**
  * Action to take if a packet is matched by the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#action InterfaceBridgeFilter#action}
  */
  readonly action: string;
  /**
  * ARP destination MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#arp_dst_mac_address InterfaceBridgeFilter#arp_dst_mac_address}
  */
  readonly arpDstMacAddress?: string;
  /**
  * Matches ARP gratuitous packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#arp_gratuitous InterfaceBridgeFilter#arp_gratuitous}
  */
  readonly arpGratuitous?: boolean | cdktf.IResolvable;
  /**
  * ARP hardware type. This is normally Ethernet (Type 1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#arp_hardware_type InterfaceBridgeFilter#arp_hardware_type}
  */
  readonly arpHardwareType?: number;
  /**
  * Action to take if a packet is matched by the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#arp_opcode InterfaceBridgeFilter#arp_opcode}
  */
  readonly arpOpcode?: string;
  /**
  * ARP Packet Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#arp_packet_type InterfaceBridgeFilter#arp_packet_type}
  */
  readonly arpPacketType?: number;
  /**
  * ARP source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#arp_src_address InterfaceBridgeFilter#arp_src_address}
  */
  readonly arpSrcAddress?: string;
  /**
  * ARP source MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#arp_src_mac_address InterfaceBridgeFilter#arp_src_mac_address}
  */
  readonly arpSrcMacAddress?: string;
  /**
  * Specifies to which chain rule will be added. If the input does not match the name of an already defined chain, a new chain will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#chain InterfaceBridgeFilter#chain}
  */
  readonly chain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#comment InterfaceBridgeFilter#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#disabled InterfaceBridgeFilter#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Destination IP address (only if MAC protocol is set to IP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#dst_address InterfaceBridgeFilter#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Destination MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#dst_mac_address InterfaceBridgeFilter#dst_mac_address}
  */
  readonly dstMacAddress?: string;
  /**
  * List of destination port numbers or port number ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#dst_port InterfaceBridgeFilter#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#id InterfaceBridgeFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Bridge interface through which the packet is coming in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#in_bridge InterfaceBridgeFilter#in_bridge}
  */
  readonly inBridge?: string;
  /**
  * Set of bridge interfaces defined in interface list. Works the same as in-bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#in_bridge_list InterfaceBridgeFilter#in_bridge_list}
  */
  readonly inBridgeList?: string;
  /**
  * Physical interface (i.e., bridge port) through which the packet is coming in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#in_interface InterfaceBridgeFilter#in_interface}
  */
  readonly inInterface?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as in-interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#in_interface_list InterfaceBridgeFilter#in_interface_list}
  */
  readonly inInterfaceList?: string;
  /**
  * Integer. Matches the priority of an ingress packet. Priority may be derived from VLAN, WMM, DSCP,or MPLS EXP bit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#ingress_priority InterfaceBridgeFilter#ingress_priority}
  */
  readonly ingressPriority?: number;
  /**
  * IP protocol (only if MAC protocol is set to IPv4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#ip_protocol InterfaceBridgeFilter#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Name of the target chain to jump to. Applicable only if action=jump.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#jump_target InterfaceBridgeFilter#jump_target}
  */
  readonly jumpTarget?: string;
  /**
  * Matches packets up to a limited rate (packet rate or bit rate). A rule using this matcher will match until this limit is reached. Parameters are written in the following format: rate[/time],burst:mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#limit InterfaceBridgeFilter#limit}
  */
  readonly limit?: string;
  /**
  * Add a message to the system log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#log InterfaceBridgeFilter#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Adds specified text at the beginning of every log message. Applicable if action=log or log=yes configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#log_prefix InterfaceBridgeFilter#log_prefix}
  */
  readonly logPrefix?: string;
  /**
  * Ethernet payload type (MAC-level protocol). To match protocol type for VLAN encapsulated frames (0x8100 or 0x88a8), a vlan-encap property should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#mac_protocol InterfaceBridgeFilter#mac_protocol}
  */
  readonly macProtocol?: string;
  /**
  * Sets a new packet-mark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#new_packet_mark InterfaceBridgeFilter#new_packet_mark}
  */
  readonly newPacketMark?: string;
  /**
  * Sets a new priority for a packet. This can be the VLAN, WMM or MPLS EXP priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#new_priority InterfaceBridgeFilter#new_priority}
  */
  readonly newPriority?: number;
  /**
  * Bridge interface through which the packet going out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#out_bridge InterfaceBridgeFilter#out_bridge}
  */
  readonly outBridge?: string;
  /**
  * Set of bridge interfaces defined in interface list. Works the same as out-bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#out_bridge_list InterfaceBridgeFilter#out_bridge_list}
  */
  readonly outBridgeList?: string;
  /**
  * Interface the packet has entered the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#out_interface InterfaceBridgeFilter#out_interface}
  */
  readonly outInterface?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as out-interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#out_interface_list InterfaceBridgeFilter#out_interface_list}
  */
  readonly outInterfaceList?: string;
  /**
  * Match packets with a certain packet mark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#packet_mark InterfaceBridgeFilter#packet_mark}
  */
  readonly packetMark?: string;
  /**
  * Match packets with a certain packet mark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#packet_type InterfaceBridgeFilter#packet_type}
  */
  readonly packetType?: string;
  /**
  * Whether to let the packet to pass further (like action passthrough) into the filter or not (property only valid some actions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#passthrough InterfaceBridgeFilter#passthrough}
  */
  readonly passthrough?: boolean | cdktf.IResolvable;
  /**
  * Before which position the rule will be inserted.  
  * 	> Please check the effect of this option, as it does not work as you think!  
  * 	> Best way to use in conjunction with a data source. See [example](../data-sources/ip_firewall.md#example-usage).  
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#place_before InterfaceBridgeFilter#place_before}
  */
  readonly placeBefore?: string;
  /**
  * Source port number or range (only for TCP or UDP protocols).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#src_address InterfaceBridgeFilter#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Source MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#src_mac_address InterfaceBridgeFilter#src_mac_address}
  */
  readonly srcMacAddress?: string;
  /**
  * List of source port numbers or port number ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#src_port InterfaceBridgeFilter#src_port}
  */
  readonly srcPort?: string;
  /**
  * Match packets with a certain packet mark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_flags InterfaceBridgeFilter#stp_flags}
  */
  readonly stpFlags?: string;
  /**
  * Forward delay timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_forward_delay InterfaceBridgeFilter#stp_forward_delay}
  */
  readonly stpForwardDelay?: number;
  /**
  * STP hello packets time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_hello_time InterfaceBridgeFilter#stp_hello_time}
  */
  readonly stpHelloTime?: number;
  /**
  * Maximal STP message age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_max_age InterfaceBridgeFilter#stp_max_age}
  */
  readonly stpMaxAge?: number;
  /**
  * STP port identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_port InterfaceBridgeFilter#stp_port}
  */
  readonly stpPort?: number;
  /**
  * Root bridge MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_root_address InterfaceBridgeFilter#stp_root_address}
  */
  readonly stpRootAddress?: string;
  /**
  * Root bridge cost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_root_cost InterfaceBridgeFilter#stp_root_cost}
  */
  readonly stpRootCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_root_priority InterfaceBridgeFilter#stp_root_priority}
  */
  readonly stpRootPriority?: number;
  /**
  * STP message sender MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_sender_address InterfaceBridgeFilter#stp_sender_address}
  */
  readonly stpSenderAddress?: string;
  /**
  * STP sender priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_sender_priority InterfaceBridgeFilter#stp_sender_priority}
  */
  readonly stpSenderPriority?: number;
  /**
  * The BPDU type: config - configuration BPDU OR tcn - topology change notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#stp_type InterfaceBridgeFilter#stp_type}
  */
  readonly stpType?: string;
  /**
  * Allows matching https traffic based on TLS SNI hostname. Accepts GLOB syntax for wildcard matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#tls_host InterfaceBridgeFilter#tls_host}
  */
  readonly tlsHost?: string;
  /**
  * Matches the MAC protocol type encapsulated in the VLAN frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#vlan_encap InterfaceBridgeFilter#vlan_encap}
  */
  readonly vlanEncap?: number;
  /**
  * Matches the VLAN identifier field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#vlan_id InterfaceBridgeFilter#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Matches the VLAN identifier field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#vlan_priority InterfaceBridgeFilter#vlan_priority}
  */
  readonly vlanPriority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter routeros_interface_bridge_filter}
*/
export class InterfaceBridgeFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_bridge_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceBridgeFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceBridgeFilter to import
  * @param importFromId The id of the existing InterfaceBridgeFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceBridgeFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_bridge_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_bridge_filter routeros_interface_bridge_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceBridgeFilterConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceBridgeFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_bridge_filter',
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
    this._skip = config.skip;
    this._unset = config.unset;
    this._action = config.action;
    this._arpDstMacAddress = config.arpDstMacAddress;
    this._arpGratuitous = config.arpGratuitous;
    this._arpHardwareType = config.arpHardwareType;
    this._arpOpcode = config.arpOpcode;
    this._arpPacketType = config.arpPacketType;
    this._arpSrcAddress = config.arpSrcAddress;
    this._arpSrcMacAddress = config.arpSrcMacAddress;
    this._chain = config.chain;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._dstAddress = config.dstAddress;
    this._dstMacAddress = config.dstMacAddress;
    this._dstPort = config.dstPort;
    this._id = config.id;
    this._inBridge = config.inBridge;
    this._inBridgeList = config.inBridgeList;
    this._inInterface = config.inInterface;
    this._inInterfaceList = config.inInterfaceList;
    this._ingressPriority = config.ingressPriority;
    this._ipProtocol = config.ipProtocol;
    this._jumpTarget = config.jumpTarget;
    this._limit = config.limit;
    this._log = config.log;
    this._logPrefix = config.logPrefix;
    this._macProtocol = config.macProtocol;
    this._newPacketMark = config.newPacketMark;
    this._newPriority = config.newPriority;
    this._outBridge = config.outBridge;
    this._outBridgeList = config.outBridgeList;
    this._outInterface = config.outInterface;
    this._outInterfaceList = config.outInterfaceList;
    this._packetMark = config.packetMark;
    this._packetType = config.packetType;
    this._passthrough = config.passthrough;
    this._placeBefore = config.placeBefore;
    this._srcAddress = config.srcAddress;
    this._srcMacAddress = config.srcMacAddress;
    this._srcPort = config.srcPort;
    this._stpFlags = config.stpFlags;
    this._stpForwardDelay = config.stpForwardDelay;
    this._stpHelloTime = config.stpHelloTime;
    this._stpMaxAge = config.stpMaxAge;
    this._stpPort = config.stpPort;
    this._stpRootAddress = config.stpRootAddress;
    this._stpRootCost = config.stpRootCost;
    this._stpRootPriority = config.stpRootPriority;
    this._stpSenderAddress = config.stpSenderAddress;
    this._stpSenderPriority = config.stpSenderPriority;
    this._stpType = config.stpType;
    this._tlsHost = config.tlsHost;
    this._vlanEncap = config.vlanEncap;
    this._vlanId = config.vlanId;
    this._vlanPriority = config.vlanPriority;
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

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // ___unset___ - computed: false, optional: true, required: false
  private _unset?: string; 
  public get unset() {
    return this.getStringAttribute('___unset___');
  }
  public set unset(value: string) {
    this._unset = value;
  }
  public resetUnset() {
    this._unset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetInput() {
    return this._unset;
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // arp_dst_mac_address - computed: false, optional: true, required: false
  private _arpDstMacAddress?: string; 
  public get arpDstMacAddress() {
    return this.getStringAttribute('arp_dst_mac_address');
  }
  public set arpDstMacAddress(value: string) {
    this._arpDstMacAddress = value;
  }
  public resetArpDstMacAddress() {
    this._arpDstMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpDstMacAddressInput() {
    return this._arpDstMacAddress;
  }

  // arp_gratuitous - computed: false, optional: true, required: false
  private _arpGratuitous?: boolean | cdktf.IResolvable; 
  public get arpGratuitous() {
    return this.getBooleanAttribute('arp_gratuitous');
  }
  public set arpGratuitous(value: boolean | cdktf.IResolvable) {
    this._arpGratuitous = value;
  }
  public resetArpGratuitous() {
    this._arpGratuitous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpGratuitousInput() {
    return this._arpGratuitous;
  }

  // arp_hardware_type - computed: false, optional: true, required: false
  private _arpHardwareType?: number; 
  public get arpHardwareType() {
    return this.getNumberAttribute('arp_hardware_type');
  }
  public set arpHardwareType(value: number) {
    this._arpHardwareType = value;
  }
  public resetArpHardwareType() {
    this._arpHardwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpHardwareTypeInput() {
    return this._arpHardwareType;
  }

  // arp_opcode - computed: false, optional: true, required: false
  private _arpOpcode?: string; 
  public get arpOpcode() {
    return this.getStringAttribute('arp_opcode');
  }
  public set arpOpcode(value: string) {
    this._arpOpcode = value;
  }
  public resetArpOpcode() {
    this._arpOpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpOpcodeInput() {
    return this._arpOpcode;
  }

  // arp_packet_type - computed: false, optional: true, required: false
  private _arpPacketType?: number; 
  public get arpPacketType() {
    return this.getNumberAttribute('arp_packet_type');
  }
  public set arpPacketType(value: number) {
    this._arpPacketType = value;
  }
  public resetArpPacketType() {
    this._arpPacketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpPacketTypeInput() {
    return this._arpPacketType;
  }

  // arp_src_address - computed: false, optional: true, required: false
  private _arpSrcAddress?: string; 
  public get arpSrcAddress() {
    return this.getStringAttribute('arp_src_address');
  }
  public set arpSrcAddress(value: string) {
    this._arpSrcAddress = value;
  }
  public resetArpSrcAddress() {
    this._arpSrcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpSrcAddressInput() {
    return this._arpSrcAddress;
  }

  // arp_src_mac_address - computed: false, optional: true, required: false
  private _arpSrcMacAddress?: string; 
  public get arpSrcMacAddress() {
    return this.getStringAttribute('arp_src_mac_address');
  }
  public set arpSrcMacAddress(value: string) {
    this._arpSrcMacAddress = value;
  }
  public resetArpSrcMacAddress() {
    this._arpSrcMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpSrcMacAddressInput() {
    return this._arpSrcMacAddress;
  }

  // chain - computed: false, optional: false, required: true
  private _chain?: string; 
  public get chain() {
    return this.getStringAttribute('chain');
  }
  public set chain(value: string) {
    this._chain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain;
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

  // dst_address - computed: false, optional: true, required: false
  private _dstAddress?: string; 
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }
  public set dstAddress(value: string) {
    this._dstAddress = value;
  }
  public resetDstAddress() {
    this._dstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressInput() {
    return this._dstAddress;
  }

  // dst_mac_address - computed: false, optional: true, required: false
  private _dstMacAddress?: string; 
  public get dstMacAddress() {
    return this.getStringAttribute('dst_mac_address');
  }
  public set dstMacAddress(value: string) {
    this._dstMacAddress = value;
  }
  public resetDstMacAddress() {
    this._dstMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacAddressInput() {
    return this._dstMacAddress;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
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

  // in_bridge - computed: false, optional: true, required: false
  private _inBridge?: string; 
  public get inBridge() {
    return this.getStringAttribute('in_bridge');
  }
  public set inBridge(value: string) {
    this._inBridge = value;
  }
  public resetInBridge() {
    this._inBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBridgeInput() {
    return this._inBridge;
  }

  // in_bridge_list - computed: false, optional: true, required: false
  private _inBridgeList?: string; 
  public get inBridgeList() {
    return this.getStringAttribute('in_bridge_list');
  }
  public set inBridgeList(value: string) {
    this._inBridgeList = value;
  }
  public resetInBridgeList() {
    this._inBridgeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBridgeListInput() {
    return this._inBridgeList;
  }

  // in_interface - computed: false, optional: true, required: false
  private _inInterface?: string; 
  public get inInterface() {
    return this.getStringAttribute('in_interface');
  }
  public set inInterface(value: string) {
    this._inInterface = value;
  }
  public resetInInterface() {
    this._inInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInterfaceInput() {
    return this._inInterface;
  }

  // in_interface_list - computed: false, optional: true, required: false
  private _inInterfaceList?: string; 
  public get inInterfaceList() {
    return this.getStringAttribute('in_interface_list');
  }
  public set inInterfaceList(value: string) {
    this._inInterfaceList = value;
  }
  public resetInInterfaceList() {
    this._inInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInterfaceListInput() {
    return this._inInterfaceList;
  }

  // ingress_priority - computed: false, optional: true, required: false
  private _ingressPriority?: number; 
  public get ingressPriority() {
    return this.getNumberAttribute('ingress_priority');
  }
  public set ingressPriority(value: number) {
    this._ingressPriority = value;
  }
  public resetIngressPriority() {
    this._ingressPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPriorityInput() {
    return this._ingressPriority;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // jump_target - computed: false, optional: true, required: false
  private _jumpTarget?: string; 
  public get jumpTarget() {
    return this.getStringAttribute('jump_target');
  }
  public set jumpTarget(value: string) {
    this._jumpTarget = value;
  }
  public resetJumpTarget() {
    this._jumpTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumpTargetInput() {
    return this._jumpTarget;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_prefix - computed: false, optional: true, required: false
  private _logPrefix?: string; 
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }
  public set logPrefix(value: string) {
    this._logPrefix = value;
  }
  public resetLogPrefix() {
    this._logPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPrefixInput() {
    return this._logPrefix;
  }

  // mac_protocol - computed: false, optional: true, required: false
  private _macProtocol?: string; 
  public get macProtocol() {
    return this.getStringAttribute('mac_protocol');
  }
  public set macProtocol(value: string) {
    this._macProtocol = value;
  }
  public resetMacProtocol() {
    this._macProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macProtocolInput() {
    return this._macProtocol;
  }

  // new_packet_mark - computed: false, optional: true, required: false
  private _newPacketMark?: string; 
  public get newPacketMark() {
    return this.getStringAttribute('new_packet_mark');
  }
  public set newPacketMark(value: string) {
    this._newPacketMark = value;
  }
  public resetNewPacketMark() {
    this._newPacketMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPacketMarkInput() {
    return this._newPacketMark;
  }

  // new_priority - computed: false, optional: true, required: false
  private _newPriority?: number; 
  public get newPriority() {
    return this.getNumberAttribute('new_priority');
  }
  public set newPriority(value: number) {
    this._newPriority = value;
  }
  public resetNewPriority() {
    this._newPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPriorityInput() {
    return this._newPriority;
  }

  // out_bridge - computed: false, optional: true, required: false
  private _outBridge?: string; 
  public get outBridge() {
    return this.getStringAttribute('out_bridge');
  }
  public set outBridge(value: string) {
    this._outBridge = value;
  }
  public resetOutBridge() {
    this._outBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outBridgeInput() {
    return this._outBridge;
  }

  // out_bridge_list - computed: false, optional: true, required: false
  private _outBridgeList?: string; 
  public get outBridgeList() {
    return this.getStringAttribute('out_bridge_list');
  }
  public set outBridgeList(value: string) {
    this._outBridgeList = value;
  }
  public resetOutBridgeList() {
    this._outBridgeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outBridgeListInput() {
    return this._outBridgeList;
  }

  // out_interface - computed: false, optional: true, required: false
  private _outInterface?: string; 
  public get outInterface() {
    return this.getStringAttribute('out_interface');
  }
  public set outInterface(value: string) {
    this._outInterface = value;
  }
  public resetOutInterface() {
    this._outInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInterfaceInput() {
    return this._outInterface;
  }

  // out_interface_list - computed: false, optional: true, required: false
  private _outInterfaceList?: string; 
  public get outInterfaceList() {
    return this.getStringAttribute('out_interface_list');
  }
  public set outInterfaceList(value: string) {
    this._outInterfaceList = value;
  }
  public resetOutInterfaceList() {
    this._outInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInterfaceListInput() {
    return this._outInterfaceList;
  }

  // packet_mark - computed: false, optional: true, required: false
  private _packetMark?: string; 
  public get packetMark() {
    return this.getStringAttribute('packet_mark');
  }
  public set packetMark(value: string) {
    this._packetMark = value;
  }
  public resetPacketMark() {
    this._packetMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetMarkInput() {
    return this._packetMark;
  }

  // packet_type - computed: false, optional: true, required: false
  private _packetType?: string; 
  public get packetType() {
    return this.getStringAttribute('packet_type');
  }
  public set packetType(value: string) {
    this._packetType = value;
  }
  public resetPacketType() {
    this._packetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetTypeInput() {
    return this._packetType;
  }

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: boolean | cdktf.IResolvable; 
  public get passthrough() {
    return this.getBooleanAttribute('passthrough');
  }
  public set passthrough(value: boolean | cdktf.IResolvable) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }

  // place_before - computed: false, optional: true, required: false
  private _placeBefore?: string; 
  public get placeBefore() {
    return this.getStringAttribute('place_before');
  }
  public set placeBefore(value: string) {
    this._placeBefore = value;
  }
  public resetPlaceBefore() {
    this._placeBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeBeforeInput() {
    return this._placeBefore;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // src_mac_address - computed: false, optional: true, required: false
  private _srcMacAddress?: string; 
  public get srcMacAddress() {
    return this.getStringAttribute('src_mac_address');
  }
  public set srcMacAddress(value: string) {
    this._srcMacAddress = value;
  }
  public resetSrcMacAddress() {
    this._srcMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacAddressInput() {
    return this._srcMacAddress;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // stp_flags - computed: false, optional: true, required: false
  private _stpFlags?: string; 
  public get stpFlags() {
    return this.getStringAttribute('stp_flags');
  }
  public set stpFlags(value: string) {
    this._stpFlags = value;
  }
  public resetStpFlags() {
    this._stpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpFlagsInput() {
    return this._stpFlags;
  }

  // stp_forward_delay - computed: false, optional: true, required: false
  private _stpForwardDelay?: number; 
  public get stpForwardDelay() {
    return this.getNumberAttribute('stp_forward_delay');
  }
  public set stpForwardDelay(value: number) {
    this._stpForwardDelay = value;
  }
  public resetStpForwardDelay() {
    this._stpForwardDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpForwardDelayInput() {
    return this._stpForwardDelay;
  }

  // stp_hello_time - computed: false, optional: true, required: false
  private _stpHelloTime?: number; 
  public get stpHelloTime() {
    return this.getNumberAttribute('stp_hello_time');
  }
  public set stpHelloTime(value: number) {
    this._stpHelloTime = value;
  }
  public resetStpHelloTime() {
    this._stpHelloTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpHelloTimeInput() {
    return this._stpHelloTime;
  }

  // stp_max_age - computed: false, optional: true, required: false
  private _stpMaxAge?: number; 
  public get stpMaxAge() {
    return this.getNumberAttribute('stp_max_age');
  }
  public set stpMaxAge(value: number) {
    this._stpMaxAge = value;
  }
  public resetStpMaxAge() {
    this._stpMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpMaxAgeInput() {
    return this._stpMaxAge;
  }

  // stp_port - computed: false, optional: true, required: false
  private _stpPort?: number; 
  public get stpPort() {
    return this.getNumberAttribute('stp_port');
  }
  public set stpPort(value: number) {
    this._stpPort = value;
  }
  public resetStpPort() {
    this._stpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpPortInput() {
    return this._stpPort;
  }

  // stp_root_address - computed: false, optional: true, required: false
  private _stpRootAddress?: string; 
  public get stpRootAddress() {
    return this.getStringAttribute('stp_root_address');
  }
  public set stpRootAddress(value: string) {
    this._stpRootAddress = value;
  }
  public resetStpRootAddress() {
    this._stpRootAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpRootAddressInput() {
    return this._stpRootAddress;
  }

  // stp_root_cost - computed: false, optional: true, required: false
  private _stpRootCost?: number; 
  public get stpRootCost() {
    return this.getNumberAttribute('stp_root_cost');
  }
  public set stpRootCost(value: number) {
    this._stpRootCost = value;
  }
  public resetStpRootCost() {
    this._stpRootCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpRootCostInput() {
    return this._stpRootCost;
  }

  // stp_root_priority - computed: false, optional: true, required: false
  private _stpRootPriority?: number; 
  public get stpRootPriority() {
    return this.getNumberAttribute('stp_root_priority');
  }
  public set stpRootPriority(value: number) {
    this._stpRootPriority = value;
  }
  public resetStpRootPriority() {
    this._stpRootPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpRootPriorityInput() {
    return this._stpRootPriority;
  }

  // stp_sender_address - computed: false, optional: true, required: false
  private _stpSenderAddress?: string; 
  public get stpSenderAddress() {
    return this.getStringAttribute('stp_sender_address');
  }
  public set stpSenderAddress(value: string) {
    this._stpSenderAddress = value;
  }
  public resetStpSenderAddress() {
    this._stpSenderAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpSenderAddressInput() {
    return this._stpSenderAddress;
  }

  // stp_sender_priority - computed: false, optional: true, required: false
  private _stpSenderPriority?: number; 
  public get stpSenderPriority() {
    return this.getNumberAttribute('stp_sender_priority');
  }
  public set stpSenderPriority(value: number) {
    this._stpSenderPriority = value;
  }
  public resetStpSenderPriority() {
    this._stpSenderPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpSenderPriorityInput() {
    return this._stpSenderPriority;
  }

  // stp_type - computed: false, optional: true, required: false
  private _stpType?: string; 
  public get stpType() {
    return this.getStringAttribute('stp_type');
  }
  public set stpType(value: string) {
    this._stpType = value;
  }
  public resetStpType() {
    this._stpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpTypeInput() {
    return this._stpType;
  }

  // tls_host - computed: false, optional: true, required: false
  private _tlsHost?: string; 
  public get tlsHost() {
    return this.getStringAttribute('tls_host');
  }
  public set tlsHost(value: string) {
    this._tlsHost = value;
  }
  public resetTlsHost() {
    this._tlsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostInput() {
    return this._tlsHost;
  }

  // vlan_encap - computed: false, optional: true, required: false
  private _vlanEncap?: number; 
  public get vlanEncap() {
    return this.getNumberAttribute('vlan_encap');
  }
  public set vlanEncap(value: number) {
    this._vlanEncap = value;
  }
  public resetVlanEncap() {
    this._vlanEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEncapInput() {
    return this._vlanEncap;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_priority - computed: false, optional: true, required: false
  private _vlanPriority?: number; 
  public get vlanPriority() {
    return this.getNumberAttribute('vlan_priority');
  }
  public set vlanPriority(value: number) {
    this._vlanPriority = value;
  }
  public resetVlanPriority() {
    this._vlanPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPriorityInput() {
    return this._vlanPriority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      ___unset___: cdktf.stringToTerraform(this._unset),
      action: cdktf.stringToTerraform(this._action),
      arp_dst_mac_address: cdktf.stringToTerraform(this._arpDstMacAddress),
      arp_gratuitous: cdktf.booleanToTerraform(this._arpGratuitous),
      arp_hardware_type: cdktf.numberToTerraform(this._arpHardwareType),
      arp_opcode: cdktf.stringToTerraform(this._arpOpcode),
      arp_packet_type: cdktf.numberToTerraform(this._arpPacketType),
      arp_src_address: cdktf.stringToTerraform(this._arpSrcAddress),
      arp_src_mac_address: cdktf.stringToTerraform(this._arpSrcMacAddress),
      chain: cdktf.stringToTerraform(this._chain),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      dst_mac_address: cdktf.stringToTerraform(this._dstMacAddress),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      id: cdktf.stringToTerraform(this._id),
      in_bridge: cdktf.stringToTerraform(this._inBridge),
      in_bridge_list: cdktf.stringToTerraform(this._inBridgeList),
      in_interface: cdktf.stringToTerraform(this._inInterface),
      in_interface_list: cdktf.stringToTerraform(this._inInterfaceList),
      ingress_priority: cdktf.numberToTerraform(this._ingressPriority),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      jump_target: cdktf.stringToTerraform(this._jumpTarget),
      limit: cdktf.stringToTerraform(this._limit),
      log: cdktf.booleanToTerraform(this._log),
      log_prefix: cdktf.stringToTerraform(this._logPrefix),
      mac_protocol: cdktf.stringToTerraform(this._macProtocol),
      new_packet_mark: cdktf.stringToTerraform(this._newPacketMark),
      new_priority: cdktf.numberToTerraform(this._newPriority),
      out_bridge: cdktf.stringToTerraform(this._outBridge),
      out_bridge_list: cdktf.stringToTerraform(this._outBridgeList),
      out_interface: cdktf.stringToTerraform(this._outInterface),
      out_interface_list: cdktf.stringToTerraform(this._outInterfaceList),
      packet_mark: cdktf.stringToTerraform(this._packetMark),
      packet_type: cdktf.stringToTerraform(this._packetType),
      passthrough: cdktf.booleanToTerraform(this._passthrough),
      place_before: cdktf.stringToTerraform(this._placeBefore),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      src_mac_address: cdktf.stringToTerraform(this._srcMacAddress),
      src_port: cdktf.stringToTerraform(this._srcPort),
      stp_flags: cdktf.stringToTerraform(this._stpFlags),
      stp_forward_delay: cdktf.numberToTerraform(this._stpForwardDelay),
      stp_hello_time: cdktf.numberToTerraform(this._stpHelloTime),
      stp_max_age: cdktf.numberToTerraform(this._stpMaxAge),
      stp_port: cdktf.numberToTerraform(this._stpPort),
      stp_root_address: cdktf.stringToTerraform(this._stpRootAddress),
      stp_root_cost: cdktf.numberToTerraform(this._stpRootCost),
      stp_root_priority: cdktf.numberToTerraform(this._stpRootPriority),
      stp_sender_address: cdktf.stringToTerraform(this._stpSenderAddress),
      stp_sender_priority: cdktf.numberToTerraform(this._stpSenderPriority),
      stp_type: cdktf.stringToTerraform(this._stpType),
      tls_host: cdktf.stringToTerraform(this._tlsHost),
      vlan_encap: cdktf.numberToTerraform(this._vlanEncap),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_priority: cdktf.numberToTerraform(this._vlanPriority),
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
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___unset___: {
        value: cdktf.stringToHclTerraform(this._unset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_dst_mac_address: {
        value: cdktf.stringToHclTerraform(this._arpDstMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_gratuitous: {
        value: cdktf.booleanToHclTerraform(this._arpGratuitous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      arp_hardware_type: {
        value: cdktf.numberToHclTerraform(this._arpHardwareType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_opcode: {
        value: cdktf.stringToHclTerraform(this._arpOpcode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_packet_type: {
        value: cdktf.numberToHclTerraform(this._arpPacketType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_src_address: {
        value: cdktf.stringToHclTerraform(this._arpSrcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_src_mac_address: {
        value: cdktf.stringToHclTerraform(this._arpSrcMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chain: {
        value: cdktf.stringToHclTerraform(this._chain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_mac_address: {
        value: cdktf.stringToHclTerraform(this._dstMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.stringToHclTerraform(this._dstPort),
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
      in_bridge: {
        value: cdktf.stringToHclTerraform(this._inBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_bridge_list: {
        value: cdktf.stringToHclTerraform(this._inBridgeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_interface: {
        value: cdktf.stringToHclTerraform(this._inInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_interface_list: {
        value: cdktf.stringToHclTerraform(this._inInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_priority: {
        value: cdktf.numberToHclTerraform(this._ingressPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jump_target: {
        value: cdktf.stringToHclTerraform(this._jumpTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.stringToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log: {
        value: cdktf.booleanToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_prefix: {
        value: cdktf.stringToHclTerraform(this._logPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_protocol: {
        value: cdktf.stringToHclTerraform(this._macProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_packet_mark: {
        value: cdktf.stringToHclTerraform(this._newPacketMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_priority: {
        value: cdktf.numberToHclTerraform(this._newPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      out_bridge: {
        value: cdktf.stringToHclTerraform(this._outBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_bridge_list: {
        value: cdktf.stringToHclTerraform(this._outBridgeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_interface: {
        value: cdktf.stringToHclTerraform(this._outInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_interface_list: {
        value: cdktf.stringToHclTerraform(this._outInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_mark: {
        value: cdktf.stringToHclTerraform(this._packetMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_type: {
        value: cdktf.stringToHclTerraform(this._packetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passthrough: {
        value: cdktf.booleanToHclTerraform(this._passthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      place_before: {
        value: cdktf.stringToHclTerraform(this._placeBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_mac_address: {
        value: cdktf.stringToHclTerraform(this._srcMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port: {
        value: cdktf.stringToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_flags: {
        value: cdktf.stringToHclTerraform(this._stpFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_forward_delay: {
        value: cdktf.numberToHclTerraform(this._stpForwardDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_hello_time: {
        value: cdktf.numberToHclTerraform(this._stpHelloTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_max_age: {
        value: cdktf.numberToHclTerraform(this._stpMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_port: {
        value: cdktf.numberToHclTerraform(this._stpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_root_address: {
        value: cdktf.stringToHclTerraform(this._stpRootAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_root_cost: {
        value: cdktf.numberToHclTerraform(this._stpRootCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_root_priority: {
        value: cdktf.numberToHclTerraform(this._stpRootPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_sender_address: {
        value: cdktf.stringToHclTerraform(this._stpSenderAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stp_sender_priority: {
        value: cdktf.numberToHclTerraform(this._stpSenderPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stp_type: {
        value: cdktf.stringToHclTerraform(this._stpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_host: {
        value: cdktf.stringToHclTerraform(this._tlsHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_encap: {
        value: cdktf.numberToHclTerraform(this._vlanEncap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_priority: {
        value: cdktf.numberToHclTerraform(this._vlanPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
