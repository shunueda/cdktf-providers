// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#___path___ FirewallFilter#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#___skip___ FirewallFilter#___skip___}
  */
  readonly skip?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#___unset___ FirewallFilter#___unset___}
  */
  readonly unset?: string;
  /**
  * Action to take if a packet is matched by the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#action FirewallFilter#action}
  */
  readonly action: string;
  /**
  * Name of the address list used in 'add-dst-to-address-list' and 'add-src-to-address-list' actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#address_list FirewallFilter#address_list}
  */
  readonly addressList?: string;
  /**
  * Time interval after which the address will be removed from the address list specified by address-list parameter. Used in conjunction with add-dst-to-address-list or add-src-to-address-list actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#address_list_timeout FirewallFilter#address_list_timeout}
  */
  readonly addressListTimeout?: string;
  /**
  * Specifies to which chain rule will be added. If the input does not match the name of an already defined chain, a new chain will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#chain FirewallFilter#chain}
  */
  readonly chain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#comment FirewallFilter#comment}
  */
  readonly comment?: string;
  /**
  * Matches packets only if a given amount of bytes has been transfered through the particular connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#connection_bytes FirewallFilter#connection_bytes}
  */
  readonly connectionBytes?: string;
  /**
  * Matches connections per address or address block after given value is reached. Should be used together with connection-state=new and/or with tcp-flags=syn because matcher is very resource intensive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#connection_limit FirewallFilter#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Matches packets marked via mangle facility with particular connection mark. If no-mark is set, rule will match any unmarked connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#connection_mark FirewallFilter#connection_mark}
  */
  readonly connectionMark?: string;
  /**
  * Can match connections that are srcnatted, dstnatted or both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#connection_nat_state FirewallFilter#connection_nat_state}
  */
  readonly connectionNatState?: string;
  /**
  * Connection Rate is a firewall matcher that allow to capture traffic based on present speed of the connection (0..4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#connection_rate FirewallFilter#connection_rate}
  */
  readonly connectionRate?: string;
  /**
  * Interprets the connection tracking analysis data for a particular packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#connection_state FirewallFilter#connection_state}
  */
  readonly connectionState?: string;
  /**
  * Matches packets from related connections based on information from their connection tracking helpers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#connection_type FirewallFilter#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Match packets that contain specified text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#content FirewallFilter#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#disabled FirewallFilter#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Matches DSCP IP header field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#dscp FirewallFilter#dscp}
  */
  readonly dscp?: number;
  /**
  * Matches packets which destination is equal to specified IP or falls into specified IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#dst_address FirewallFilter#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Matches destination address of a packet against user-defined address list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#dst_address_list FirewallFilter#dst_address_list}
  */
  readonly dstAddressList?: string;
  /**
  * Matches destination address type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#dst_address_type FirewallFilter#dst_address_type}
  */
  readonly dstAddressType?: string;
  /**
  * Matches packets until a given rate is exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#dst_limit FirewallFilter#dst_limit}
  */
  readonly dstLimit?: string;
  /**
  * List of destination port numbers or port number ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#dst_port FirewallFilter#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Matches fragmented packets. First (starting) fragment does not count. If connection tracking is enabled there will be no fragments as system automatically assembles every packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#fragment FirewallFilter#fragment}
  */
  readonly fragment?: boolean | cdktf.IResolvable;
  /**
  * Matches packets received from HotSpot clients against various HotSpot matchers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#hotspot FirewallFilter#hotspot}
  */
  readonly hotspot?: string;
  /**
  * Connection offloading for Fasttrack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#hw_offload FirewallFilter#hw_offload}
  */
  readonly hwOffload?: boolean | cdktf.IResolvable;
  /**
  * Matches ICMP type: code fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#icmp_options FirewallFilter#icmp_options}
  */
  readonly icmpOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#id FirewallFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Actual interface the packet has entered the router if the incoming interface is a bridge. Works only if use-ip-firewall is enabled in bridge settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#in_bridge_port FirewallFilter#in_bridge_port}
  */
  readonly inBridgePort?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as in-bridge-port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#in_bridge_port_list FirewallFilter#in_bridge_port_list}
  */
  readonly inBridgePortList?: string;
  /**
  * Interface the packet has entered the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#in_interface FirewallFilter#in_interface}
  */
  readonly inInterface?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as in-interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#in_interface_list FirewallFilter#in_interface_list}
  */
  readonly inInterfaceList?: string;
  /**
  * Matches the priority of an ingress packet. Priority may be derived from VLAN, WMM, DSCP, or MPLS EXP bit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#ingress_priority FirewallFilter#ingress_priority}
  */
  readonly ingressPriority?: number;
  /**
  * Matches the policy used by IPsec. Value is written in the following format: direction, policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#ipsec_policy FirewallFilter#ipsec_policy}
  */
  readonly ipsecPolicy?: string;
  /**
  * Matches IPv4 header options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#ipv4_options FirewallFilter#ipv4_options}
  */
  readonly ipv4Options?: string;
  /**
  * Name of the target chain to jump to. Applicable only if action=jump.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#jump_target FirewallFilter#jump_target}
  */
  readonly jumpTarget?: string;
  /**
  * Layer7 filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#layer7_protocol FirewallFilter#layer7_protocol}
  */
  readonly layer7Protocol?: string;
  /**
  * Matches packets up to a limited rate (packet rate or bit rate). A rule using this matcher will match until this limit is reached. Parameters are written in the following format: rate[/time],burst:mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#limit FirewallFilter#limit}
  */
  readonly limit?: string;
  /**
  * Add a message to the system log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#log FirewallFilter#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Adds specified text at the beginning of every log message. Applicable if action=log or log=yes configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#log_prefix FirewallFilter#log_prefix}
  */
  readonly logPrefix?: string;
  /**
  * Matches every nth packet: nth=2,1 rule will match every first packet of 2, hence, 50% of all the traffic that is matched by the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#nth FirewallFilter#nth}
  */
  readonly nth?: string;
  /**
  * Actual interface the packet is leaving the router if the outgoing interface is a bridge. Works only if use-ip-firewall is enabled in bridge settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#out_bridge_port FirewallFilter#out_bridge_port}
  */
  readonly outBridgePort?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as out-bridge-port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#out_bridge_port_list FirewallFilter#out_bridge_port_list}
  */
  readonly outBridgePortList?: string;
  /**
  * Interface the packet is leaving the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#out_interface FirewallFilter#out_interface}
  */
  readonly outInterface?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as out-interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#out_interface_list FirewallFilter#out_interface_list}
  */
  readonly outInterfaceList?: string;
  /**
  * Matches packets marked via mangle facility with particular packet mark. If no-mark is set, the rule will match any unmarked packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#packet_mark FirewallFilter#packet_mark}
  */
  readonly packetMark?: string;
  /**
  * Matches packets of specified size or size range in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#packet_size FirewallFilter#packet_size}
  */
  readonly packetSize?: string;
  /**
  * PCC matcher allows dividing traffic into equal streams with the ability to keep packets with a specific set of options in one particular stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#per_connection_classifier FirewallFilter#per_connection_classifier}
  */
  readonly perConnectionClassifier?: string;
  /**
  * Before which position the rule will be inserted.  
  * 	> Please check the effect of this option, as it does not work as you think!  
  * 	> Best way to use in conjunction with a data source. See [example](../data-sources/ip_firewall.md#example-usage).  
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#place_before FirewallFilter#place_before}
  */
  readonly placeBefore?: string;
  /**
  * Matches if any (source or destination) port matches the specified list of ports or port ranges. Applicable only if protocol is TCP or UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#port FirewallFilter#port}
  */
  readonly port?: string;
  /**
  * Matches the packet's priority after a new priority has been set. Priority may be derived from VLAN, WMM, DSCP, MPLS EXP bit, or from the priority that has been set using the set-priority action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#priority FirewallFilter#priority}
  */
  readonly priority?: number;
  /**
  * Matches particular IP protocol specified by protocol name or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#protocol FirewallFilter#protocol}
  */
  readonly protocol?: string;
  /**
  * Attempts to detect TCP and UDP scans. Parameters are in the following format WeightThreshold, DelayThreshold, LowPortWeight, HighPortWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#psd FirewallFilter#psd}
  */
  readonly psd?: string;
  /**
  * Matches packets randomly with a given probability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#random FirewallFilter#random}
  */
  readonly random?: number;
  /**
  * Specifies ICMP error to be sent back if the packet is rejected. Applicable if action=reject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#reject_with FirewallFilter#reject_with}
  */
  readonly rejectWith?: string;
  /**
  * Matches packets marked by mangle facility with particular routing mark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#routing_mark FirewallFilter#routing_mark}
  */
  readonly routingMark?: string;
  /**
  * Matches packets which destination address is resolved in specific a routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#routing_table FirewallFilter#routing_table}
  */
  readonly routingTable?: string;
  /**
  * Matches packets which source is equal to specified IP or falls into a specified IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#src_address FirewallFilter#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Matches source address of a packet against user-defined address list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#src_address_list FirewallFilter#src_address_list}
  */
  readonly srcAddressList?: string;
  /**
  * Matches source address type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#src_address_type FirewallFilter#src_address_type}
  */
  readonly srcAddressType?: string;
  /**
  * Matches source MAC address of the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#src_mac_address FirewallFilter#src_mac_address}
  */
  readonly srcMacAddress?: string;
  /**
  * List of source ports and ranges of source ports. Applicable only if a protocol is TCP or UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#src_port FirewallFilter#src_port}
  */
  readonly srcPort?: string;
  /**
  * Matches specified TCP flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#tcp_flags FirewallFilter#tcp_flags}
  */
  readonly tcpFlags?: string;
  /**
  * Matches TCP MSS value of an IP packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#tcp_mss FirewallFilter#tcp_mss}
  */
  readonly tcpMss?: string;
  /**
  * Allows to create a filter based on the packets' arrival time and date or, for locally generated packets, departure time and date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#time FirewallFilter#time}
  */
  readonly time?: string;
  /**
  * Allows matching HTTPS traffic based on TLS SNI hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#tls_host FirewallFilter#tls_host}
  */
  readonly tlsHost?: string;
  /**
  * Matches packets TTL value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#ttl FirewallFilter#ttl}
  */
  readonly ttl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter routeros_firewall_filter}
*/
export class FirewallFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_firewall_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallFilter to import
  * @param importFromId The id of the existing FirewallFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_firewall_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/firewall_filter routeros_firewall_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallFilterConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_firewall_filter',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
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
    this._addressList = config.addressList;
    this._addressListTimeout = config.addressListTimeout;
    this._chain = config.chain;
    this._comment = config.comment;
    this._connectionBytes = config.connectionBytes;
    this._connectionLimit = config.connectionLimit;
    this._connectionMark = config.connectionMark;
    this._connectionNatState = config.connectionNatState;
    this._connectionRate = config.connectionRate;
    this._connectionState = config.connectionState;
    this._connectionType = config.connectionType;
    this._content = config.content;
    this._disabled = config.disabled;
    this._dscp = config.dscp;
    this._dstAddress = config.dstAddress;
    this._dstAddressList = config.dstAddressList;
    this._dstAddressType = config.dstAddressType;
    this._dstLimit = config.dstLimit;
    this._dstPort = config.dstPort;
    this._fragment = config.fragment;
    this._hotspot = config.hotspot;
    this._hwOffload = config.hwOffload;
    this._icmpOptions = config.icmpOptions;
    this._id = config.id;
    this._inBridgePort = config.inBridgePort;
    this._inBridgePortList = config.inBridgePortList;
    this._inInterface = config.inInterface;
    this._inInterfaceList = config.inInterfaceList;
    this._ingressPriority = config.ingressPriority;
    this._ipsecPolicy = config.ipsecPolicy;
    this._ipv4Options = config.ipv4Options;
    this._jumpTarget = config.jumpTarget;
    this._layer7Protocol = config.layer7Protocol;
    this._limit = config.limit;
    this._log = config.log;
    this._logPrefix = config.logPrefix;
    this._nth = config.nth;
    this._outBridgePort = config.outBridgePort;
    this._outBridgePortList = config.outBridgePortList;
    this._outInterface = config.outInterface;
    this._outInterfaceList = config.outInterfaceList;
    this._packetMark = config.packetMark;
    this._packetSize = config.packetSize;
    this._perConnectionClassifier = config.perConnectionClassifier;
    this._placeBefore = config.placeBefore;
    this._port = config.port;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._psd = config.psd;
    this._random = config.random;
    this._rejectWith = config.rejectWith;
    this._routingMark = config.routingMark;
    this._routingTable = config.routingTable;
    this._srcAddress = config.srcAddress;
    this._srcAddressList = config.srcAddressList;
    this._srcAddressType = config.srcAddressType;
    this._srcMacAddress = config.srcMacAddress;
    this._srcPort = config.srcPort;
    this._tcpFlags = config.tcpFlags;
    this._tcpMss = config.tcpMss;
    this._time = config.time;
    this._tlsHost = config.tlsHost;
    this._ttl = config.ttl;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList?: string; 
  public get addressList() {
    return this.getStringAttribute('address_list');
  }
  public set addressList(value: string) {
    this._addressList = value;
  }
  public resetAddressList() {
    this._addressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList;
  }

  // address_list_timeout - computed: false, optional: true, required: false
  private _addressListTimeout?: string; 
  public get addressListTimeout() {
    return this.getStringAttribute('address_list_timeout');
  }
  public set addressListTimeout(value: string) {
    this._addressListTimeout = value;
  }
  public resetAddressListTimeout() {
    this._addressListTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListTimeoutInput() {
    return this._addressListTimeout;
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

  // connection_bytes - computed: false, optional: true, required: false
  private _connectionBytes?: string; 
  public get connectionBytes() {
    return this.getStringAttribute('connection_bytes');
  }
  public set connectionBytes(value: string) {
    this._connectionBytes = value;
  }
  public resetConnectionBytes() {
    this._connectionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBytesInput() {
    return this._connectionBytes;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: string; 
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }
  public set connectionLimit(value: string) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // connection_mark - computed: false, optional: true, required: false
  private _connectionMark?: string; 
  public get connectionMark() {
    return this.getStringAttribute('connection_mark');
  }
  public set connectionMark(value: string) {
    this._connectionMark = value;
  }
  public resetConnectionMark() {
    this._connectionMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMarkInput() {
    return this._connectionMark;
  }

  // connection_nat_state - computed: false, optional: true, required: false
  private _connectionNatState?: string; 
  public get connectionNatState() {
    return this.getStringAttribute('connection_nat_state');
  }
  public set connectionNatState(value: string) {
    this._connectionNatState = value;
  }
  public resetConnectionNatState() {
    this._connectionNatState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNatStateInput() {
    return this._connectionNatState;
  }

  // connection_rate - computed: false, optional: true, required: false
  private _connectionRate?: string; 
  public get connectionRate() {
    return this.getStringAttribute('connection_rate');
  }
  public set connectionRate(value: string) {
    this._connectionRate = value;
  }
  public resetConnectionRate() {
    this._connectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateInput() {
    return this._connectionRate;
  }

  // connection_state - computed: false, optional: true, required: false
  private _connectionState?: string; 
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }
  public set connectionState(value: string) {
    this._connectionState = value;
  }
  public resetConnectionState() {
    this._connectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStateInput() {
    return this._connectionState;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
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

  // dst_address_list - computed: false, optional: true, required: false
  private _dstAddressList?: string; 
  public get dstAddressList() {
    return this.getStringAttribute('dst_address_list');
  }
  public set dstAddressList(value: string) {
    this._dstAddressList = value;
  }
  public resetDstAddressList() {
    this._dstAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressListInput() {
    return this._dstAddressList;
  }

  // dst_address_type - computed: false, optional: true, required: false
  private _dstAddressType?: string; 
  public get dstAddressType() {
    return this.getStringAttribute('dst_address_type');
  }
  public set dstAddressType(value: string) {
    this._dstAddressType = value;
  }
  public resetDstAddressType() {
    this._dstAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddressTypeInput() {
    return this._dstAddressType;
  }

  // dst_limit - computed: false, optional: true, required: false
  private _dstLimit?: string; 
  public get dstLimit() {
    return this.getStringAttribute('dst_limit');
  }
  public set dstLimit(value: string) {
    this._dstLimit = value;
  }
  public resetDstLimit() {
    this._dstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstLimitInput() {
    return this._dstLimit;
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

  // fragment - computed: false, optional: true, required: false
  private _fragment?: boolean | cdktf.IResolvable; 
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }
  public set fragment(value: boolean | cdktf.IResolvable) {
    this._fragment = value;
  }
  public resetFragment() {
    this._fragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment;
  }

  // hotspot - computed: false, optional: true, required: false
  private _hotspot?: string; 
  public get hotspot() {
    return this.getStringAttribute('hotspot');
  }
  public set hotspot(value: string) {
    this._hotspot = value;
  }
  public resetHotspot() {
    this._hotspot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotspotInput() {
    return this._hotspot;
  }

  // hw_offload - computed: false, optional: true, required: false
  private _hwOffload?: boolean | cdktf.IResolvable; 
  public get hwOffload() {
    return this.getBooleanAttribute('hw_offload');
  }
  public set hwOffload(value: boolean | cdktf.IResolvable) {
    this._hwOffload = value;
  }
  public resetHwOffload() {
    this._hwOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwOffloadInput() {
    return this._hwOffload;
  }

  // icmp_options - computed: false, optional: true, required: false
  private _icmpOptions?: string; 
  public get icmpOptions() {
    return this.getStringAttribute('icmp_options');
  }
  public set icmpOptions(value: string) {
    this._icmpOptions = value;
  }
  public resetIcmpOptions() {
    this._icmpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpOptionsInput() {
    return this._icmpOptions;
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

  // in_bridge_port - computed: false, optional: true, required: false
  private _inBridgePort?: string; 
  public get inBridgePort() {
    return this.getStringAttribute('in_bridge_port');
  }
  public set inBridgePort(value: string) {
    this._inBridgePort = value;
  }
  public resetInBridgePort() {
    this._inBridgePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBridgePortInput() {
    return this._inBridgePort;
  }

  // in_bridge_port_list - computed: false, optional: true, required: false
  private _inBridgePortList?: string; 
  public get inBridgePortList() {
    return this.getStringAttribute('in_bridge_port_list');
  }
  public set inBridgePortList(value: string) {
    this._inBridgePortList = value;
  }
  public resetInBridgePortList() {
    this._inBridgePortList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBridgePortListInput() {
    return this._inBridgePortList;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // ipsec_policy - computed: false, optional: true, required: false
  private _ipsecPolicy?: string; 
  public get ipsecPolicy() {
    return this.getStringAttribute('ipsec_policy');
  }
  public set ipsecPolicy(value: string) {
    this._ipsecPolicy = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy;
  }

  // ipv4_options - computed: false, optional: true, required: false
  private _ipv4Options?: string; 
  public get ipv4Options() {
    return this.getStringAttribute('ipv4_options');
  }
  public set ipv4Options(value: string) {
    this._ipv4Options = value;
  }
  public resetIpv4Options() {
    this._ipv4Options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptionsInput() {
    return this._ipv4Options;
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

  // layer7_protocol - computed: false, optional: true, required: false
  private _layer7Protocol?: string; 
  public get layer7Protocol() {
    return this.getStringAttribute('layer7_protocol');
  }
  public set layer7Protocol(value: string) {
    this._layer7Protocol = value;
  }
  public resetLayer7Protocol() {
    this._layer7Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer7ProtocolInput() {
    return this._layer7Protocol;
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

  // nth - computed: false, optional: true, required: false
  private _nth?: string; 
  public get nth() {
    return this.getStringAttribute('nth');
  }
  public set nth(value: string) {
    this._nth = value;
  }
  public resetNth() {
    this._nth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nthInput() {
    return this._nth;
  }

  // out_bridge_port - computed: false, optional: true, required: false
  private _outBridgePort?: string; 
  public get outBridgePort() {
    return this.getStringAttribute('out_bridge_port');
  }
  public set outBridgePort(value: string) {
    this._outBridgePort = value;
  }
  public resetOutBridgePort() {
    this._outBridgePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outBridgePortInput() {
    return this._outBridgePort;
  }

  // out_bridge_port_list - computed: false, optional: true, required: false
  private _outBridgePortList?: string; 
  public get outBridgePortList() {
    return this.getStringAttribute('out_bridge_port_list');
  }
  public set outBridgePortList(value: string) {
    this._outBridgePortList = value;
  }
  public resetOutBridgePortList() {
    this._outBridgePortList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outBridgePortListInput() {
    return this._outBridgePortList;
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

  // packet_size - computed: false, optional: true, required: false
  private _packetSize?: string; 
  public get packetSize() {
    return this.getStringAttribute('packet_size');
  }
  public set packetSize(value: string) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }

  // per_connection_classifier - computed: false, optional: true, required: false
  private _perConnectionClassifier?: string; 
  public get perConnectionClassifier() {
    return this.getStringAttribute('per_connection_classifier');
  }
  public set perConnectionClassifier(value: string) {
    this._perConnectionClassifier = value;
  }
  public resetPerConnectionClassifier() {
    this._perConnectionClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnectionClassifierInput() {
    return this._perConnectionClassifier;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // psd - computed: false, optional: true, required: false
  private _psd?: string; 
  public get psd() {
    return this.getStringAttribute('psd');
  }
  public set psd(value: string) {
    this._psd = value;
  }
  public resetPsd() {
    this._psd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psdInput() {
    return this._psd;
  }

  // random - computed: false, optional: true, required: false
  private _random?: number; 
  public get random() {
    return this.getNumberAttribute('random');
  }
  public set random(value: number) {
    this._random = value;
  }
  public resetRandom() {
    this._random = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomInput() {
    return this._random;
  }

  // reject_with - computed: false, optional: true, required: false
  private _rejectWith?: string; 
  public get rejectWith() {
    return this.getStringAttribute('reject_with');
  }
  public set rejectWith(value: string) {
    this._rejectWith = value;
  }
  public resetRejectWith() {
    this._rejectWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectWithInput() {
    return this._rejectWith;
  }

  // routing_mark - computed: false, optional: true, required: false
  private _routingMark?: string; 
  public get routingMark() {
    return this.getStringAttribute('routing_mark');
  }
  public set routingMark(value: string) {
    this._routingMark = value;
  }
  public resetRoutingMark() {
    this._routingMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingMarkInput() {
    return this._routingMark;
  }

  // routing_table - computed: false, optional: true, required: false
  private _routingTable?: string; 
  public get routingTable() {
    return this.getStringAttribute('routing_table');
  }
  public set routingTable(value: string) {
    this._routingTable = value;
  }
  public resetRoutingTable() {
    this._routingTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableInput() {
    return this._routingTable;
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

  // src_address_list - computed: false, optional: true, required: false
  private _srcAddressList?: string; 
  public get srcAddressList() {
    return this.getStringAttribute('src_address_list');
  }
  public set srcAddressList(value: string) {
    this._srcAddressList = value;
  }
  public resetSrcAddressList() {
    this._srcAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressListInput() {
    return this._srcAddressList;
  }

  // src_address_type - computed: false, optional: true, required: false
  private _srcAddressType?: string; 
  public get srcAddressType() {
    return this.getStringAttribute('src_address_type');
  }
  public set srcAddressType(value: string) {
    this._srcAddressType = value;
  }
  public resetSrcAddressType() {
    this._srcAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressTypeInput() {
    return this._srcAddressType;
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

  // tcp_flags - computed: false, optional: true, required: false
  private _tcpFlags?: string; 
  public get tcpFlags() {
    return this.getStringAttribute('tcp_flags');
  }
  public set tcpFlags(value: string) {
    this._tcpFlags = value;
  }
  public resetTcpFlags() {
    this._tcpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagsInput() {
    return this._tcpFlags;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss?: string; 
  public get tcpMss() {
    return this.getStringAttribute('tcp_mss');
  }
  public set tcpMss(value: string) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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
      address_list: cdktf.stringToTerraform(this._addressList),
      address_list_timeout: cdktf.stringToTerraform(this._addressListTimeout),
      chain: cdktf.stringToTerraform(this._chain),
      comment: cdktf.stringToTerraform(this._comment),
      connection_bytes: cdktf.stringToTerraform(this._connectionBytes),
      connection_limit: cdktf.stringToTerraform(this._connectionLimit),
      connection_mark: cdktf.stringToTerraform(this._connectionMark),
      connection_nat_state: cdktf.stringToTerraform(this._connectionNatState),
      connection_rate: cdktf.stringToTerraform(this._connectionRate),
      connection_state: cdktf.stringToTerraform(this._connectionState),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      content: cdktf.stringToTerraform(this._content),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dscp: cdktf.numberToTerraform(this._dscp),
      dst_address: cdktf.stringToTerraform(this._dstAddress),
      dst_address_list: cdktf.stringToTerraform(this._dstAddressList),
      dst_address_type: cdktf.stringToTerraform(this._dstAddressType),
      dst_limit: cdktf.stringToTerraform(this._dstLimit),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      fragment: cdktf.booleanToTerraform(this._fragment),
      hotspot: cdktf.stringToTerraform(this._hotspot),
      hw_offload: cdktf.booleanToTerraform(this._hwOffload),
      icmp_options: cdktf.stringToTerraform(this._icmpOptions),
      id: cdktf.stringToTerraform(this._id),
      in_bridge_port: cdktf.stringToTerraform(this._inBridgePort),
      in_bridge_port_list: cdktf.stringToTerraform(this._inBridgePortList),
      in_interface: cdktf.stringToTerraform(this._inInterface),
      in_interface_list: cdktf.stringToTerraform(this._inInterfaceList),
      ingress_priority: cdktf.numberToTerraform(this._ingressPriority),
      ipsec_policy: cdktf.stringToTerraform(this._ipsecPolicy),
      ipv4_options: cdktf.stringToTerraform(this._ipv4Options),
      jump_target: cdktf.stringToTerraform(this._jumpTarget),
      layer7_protocol: cdktf.stringToTerraform(this._layer7Protocol),
      limit: cdktf.stringToTerraform(this._limit),
      log: cdktf.booleanToTerraform(this._log),
      log_prefix: cdktf.stringToTerraform(this._logPrefix),
      nth: cdktf.stringToTerraform(this._nth),
      out_bridge_port: cdktf.stringToTerraform(this._outBridgePort),
      out_bridge_port_list: cdktf.stringToTerraform(this._outBridgePortList),
      out_interface: cdktf.stringToTerraform(this._outInterface),
      out_interface_list: cdktf.stringToTerraform(this._outInterfaceList),
      packet_mark: cdktf.stringToTerraform(this._packetMark),
      packet_size: cdktf.stringToTerraform(this._packetSize),
      per_connection_classifier: cdktf.stringToTerraform(this._perConnectionClassifier),
      place_before: cdktf.stringToTerraform(this._placeBefore),
      port: cdktf.stringToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      psd: cdktf.stringToTerraform(this._psd),
      random: cdktf.numberToTerraform(this._random),
      reject_with: cdktf.stringToTerraform(this._rejectWith),
      routing_mark: cdktf.stringToTerraform(this._routingMark),
      routing_table: cdktf.stringToTerraform(this._routingTable),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      src_address_list: cdktf.stringToTerraform(this._srcAddressList),
      src_address_type: cdktf.stringToTerraform(this._srcAddressType),
      src_mac_address: cdktf.stringToTerraform(this._srcMacAddress),
      src_port: cdktf.stringToTerraform(this._srcPort),
      tcp_flags: cdktf.stringToTerraform(this._tcpFlags),
      tcp_mss: cdktf.stringToTerraform(this._tcpMss),
      time: cdktf.stringToTerraform(this._time),
      tls_host: cdktf.stringToTerraform(this._tlsHost),
      ttl: cdktf.stringToTerraform(this._ttl),
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
      address_list: {
        value: cdktf.stringToHclTerraform(this._addressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_list_timeout: {
        value: cdktf.stringToHclTerraform(this._addressListTimeout),
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
      connection_bytes: {
        value: cdktf.stringToHclTerraform(this._connectionBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_limit: {
        value: cdktf.stringToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_mark: {
        value: cdktf.stringToHclTerraform(this._connectionMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_nat_state: {
        value: cdktf.stringToHclTerraform(this._connectionNatState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_rate: {
        value: cdktf.stringToHclTerraform(this._connectionRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_state: {
        value: cdktf.stringToHclTerraform(this._connectionState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      dscp: {
        value: cdktf.numberToHclTerraform(this._dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_address: {
        value: cdktf.stringToHclTerraform(this._dstAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_address_list: {
        value: cdktf.stringToHclTerraform(this._dstAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_address_type: {
        value: cdktf.stringToHclTerraform(this._dstAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_limit: {
        value: cdktf.stringToHclTerraform(this._dstLimit),
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
      fragment: {
        value: cdktf.booleanToHclTerraform(this._fragment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hotspot: {
        value: cdktf.stringToHclTerraform(this._hotspot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_offload: {
        value: cdktf.booleanToHclTerraform(this._hwOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_options: {
        value: cdktf.stringToHclTerraform(this._icmpOptions),
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
      in_bridge_port: {
        value: cdktf.stringToHclTerraform(this._inBridgePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_bridge_port_list: {
        value: cdktf.stringToHclTerraform(this._inBridgePortList),
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
      ipsec_policy: {
        value: cdktf.stringToHclTerraform(this._ipsecPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_options: {
        value: cdktf.stringToHclTerraform(this._ipv4Options),
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
      layer7_protocol: {
        value: cdktf.stringToHclTerraform(this._layer7Protocol),
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
      nth: {
        value: cdktf.stringToHclTerraform(this._nth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_bridge_port: {
        value: cdktf.stringToHclTerraform(this._outBridgePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_bridge_port_list: {
        value: cdktf.stringToHclTerraform(this._outBridgePortList),
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
      packet_size: {
        value: cdktf.stringToHclTerraform(this._packetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_connection_classifier: {
        value: cdktf.stringToHclTerraform(this._perConnectionClassifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      place_before: {
        value: cdktf.stringToHclTerraform(this._placeBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psd: {
        value: cdktf.stringToHclTerraform(this._psd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      random: {
        value: cdktf.numberToHclTerraform(this._random),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reject_with: {
        value: cdktf.stringToHclTerraform(this._rejectWith),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_mark: {
        value: cdktf.stringToHclTerraform(this._routingMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_table: {
        value: cdktf.stringToHclTerraform(this._routingTable),
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
      src_address_list: {
        value: cdktf.stringToHclTerraform(this._srcAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address_type: {
        value: cdktf.stringToHclTerraform(this._srcAddressType),
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
      tcp_flags: {
        value: cdktf.stringToHclTerraform(this._tcpFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss: {
        value: cdktf.stringToHclTerraform(this._tcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
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
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
