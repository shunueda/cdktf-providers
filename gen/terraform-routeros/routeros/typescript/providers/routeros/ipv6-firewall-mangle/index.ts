// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6FirewallMangleConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#___path___ Ipv6FirewallMangle#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#___skip___ Ipv6FirewallMangle#___skip___}
  */
  readonly skip?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#___unset___ Ipv6FirewallMangle#___unset___}
  */
  readonly unset?: string;
  /**
  * Action to take if a packet is matched by the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#action Ipv6FirewallMangle#action}
  */
  readonly action: string;
  /**
  * Name of the address list to be used. Applicable if action is add-dst-to-address-list or add-src-to-address-list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#address_list Ipv6FirewallMangle#address_list}
  */
  readonly addressList?: string;
  /**
  * Time interval after which the address will be removed from the address list specified by address-list parameter. Used in conjunction with add-dst-to-address-list or add-src-to-address-list actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#address_list_timeout Ipv6FirewallMangle#address_list_timeout}
  */
  readonly addressListTimeout?: string;
  /**
  * Specifies to which chain rule will be added. If the input does not match the name of an already defined chain, a new chain will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#chain Ipv6FirewallMangle#chain}
  */
  readonly chain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#comment Ipv6FirewallMangle#comment}
  */
  readonly comment?: string;
  /**
  * Matches packets only if a given amount of bytes has been transfered through the particular connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#connection_bytes Ipv6FirewallMangle#connection_bytes}
  */
  readonly connectionBytes?: string;
  /**
  * Matches connections per address or address block after given value is reached. Should be used together with connection-state=new and/or with tcp-flags=syn because matcher is very resource intensive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#connection_limit Ipv6FirewallMangle#connection_limit}
  */
  readonly connectionLimit?: string;
  /**
  * Matches packets marked via mangle facility with particular connection mark. If no-mark is set, rule will match any unmarked connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#connection_mark Ipv6FirewallMangle#connection_mark}
  */
  readonly connectionMark?: string;
  /**
  * Can match connections that are srcnatted, dstnatted or both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#connection_nat_state Ipv6FirewallMangle#connection_nat_state}
  */
  readonly connectionNatState?: string;
  /**
  * Connection Rate is a firewall matcher that allow to capture traffic based on present speed of the connection (0..4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#connection_rate Ipv6FirewallMangle#connection_rate}
  */
  readonly connectionRate?: string;
  /**
  * Interprets the connection tracking analysis data for a particular packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#connection_state Ipv6FirewallMangle#connection_state}
  */
  readonly connectionState?: string;
  /**
  * Matches packets from related connections based on information from their connection tracking helpers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#connection_type Ipv6FirewallMangle#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Match packets that contain specified text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#content Ipv6FirewallMangle#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#disabled Ipv6FirewallMangle#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Matches DSCP IP header field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#dscp Ipv6FirewallMangle#dscp}
  */
  readonly dscp?: number;
  /**
  * Matches packets which destination is equal to specified IP or falls into specified IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#dst_address Ipv6FirewallMangle#dst_address}
  */
  readonly dstAddress?: string;
  /**
  * Matches destination address of a packet against user-defined address list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#dst_address_list Ipv6FirewallMangle#dst_address_list}
  */
  readonly dstAddressList?: string;
  /**
  * Matches destination address type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#dst_address_type Ipv6FirewallMangle#dst_address_type}
  */
  readonly dstAddressType?: string;
  /**
  * Matches packets until a given rate is exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#dst_limit Ipv6FirewallMangle#dst_limit}
  */
  readonly dstLimit?: string;
  /**
  * List of destination port numbers or port number ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#dst_port Ipv6FirewallMangle#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Matches ICMP type: code fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#icmp_options Ipv6FirewallMangle#icmp_options}
  */
  readonly icmpOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#id Ipv6FirewallMangle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Actual interface the packet has entered the router if the incoming interface is a bridge. Works only if use-ip-firewall is enabled in bridge settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#in_bridge_port Ipv6FirewallMangle#in_bridge_port}
  */
  readonly inBridgePort?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as in-bridge-port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#in_bridge_port_list Ipv6FirewallMangle#in_bridge_port_list}
  */
  readonly inBridgePortList?: string;
  /**
  * Interface the packet has entered the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#in_interface Ipv6FirewallMangle#in_interface}
  */
  readonly inInterface?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as in-interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#in_interface_list Ipv6FirewallMangle#in_interface_list}
  */
  readonly inInterfaceList?: string;
  /**
  * Matches the priority of an ingress packet. Priority may be derived from VLAN, WMM, DSCP, or MPLS EXP bit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#ingress_priority Ipv6FirewallMangle#ingress_priority}
  */
  readonly ingressPriority?: number;
  /**
  * Matches the policy used by IPsec. Value is written in the following format: direction, policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#ipsec_policy Ipv6FirewallMangle#ipsec_policy}
  */
  readonly ipsecPolicy?: string;
  /**
  * Matches packets up to a limited rate (packet rate or bit rate). A rule using this matcher will match until this limit is reached. Parameters are written in the following format: rate[/time],burst:mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#limit Ipv6FirewallMangle#limit}
  */
  readonly limit?: string;
  /**
  * Add a message to the system log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#log Ipv6FirewallMangle#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Adds specified text at the beginning of every log message. Applicable if action=log or log=yes configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#log_prefix Ipv6FirewallMangle#log_prefix}
  */
  readonly logPrefix?: string;
  /**
  * Sets a new connection-mark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#new_connection_mark Ipv6FirewallMangle#new_connection_mark}
  */
  readonly newConnectionMark?: string;
  /**
  * Sets a new DSCP value for a packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#new_dscp Ipv6FirewallMangle#new_dscp}
  */
  readonly newDscp?: number;
  /**
  * Sets a new MSS for a packet.  
  * 	> clamp-to-pmtu feature sets (DF) bit in the IP header to dynamically discover the PMTU of a path.  
  * 	> Host sends all datagrams on that path with the DF bit set until receives ICMP.  
  * 	> Destination Unreachable messages with a code meaning "fragmentation needed and DF set".    
  * 	> Upon receipt of such a message, the source host reduces its assumed PMTU for the path.  
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#new_mss Ipv6FirewallMangle#new_mss}
  */
  readonly newMss?: string;
  /**
  * Sets a new packet-mark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#new_packet_mark Ipv6FirewallMangle#new_packet_mark}
  */
  readonly newPacketMark?: string;
  /**
  * Sets a new priority for a packet. This can be the VLAN, WMM, DSCP or MPLS EXP priority. This property can also be used to set an internal priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#new_priority Ipv6FirewallMangle#new_priority}
  */
  readonly newPriority?: string;
  /**
  * Sets a new routing-mark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#new_routing_mark Ipv6FirewallMangle#new_routing_mark}
  */
  readonly newRoutingMark?: string;
  /**
  * Sets a new TTL for a packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#new_ttl Ipv6FirewallMangle#new_ttl}
  */
  readonly newTtl?: string;
  /**
  * Matches every nth packet: nth=2,1 rule will match every first packet of 2, hence, 50% of all the traffic that is matched by the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#nth Ipv6FirewallMangle#nth}
  */
  readonly nth?: string;
  /**
  * Actual interface the packet is leaving the router if the outgoing interface is a bridge. Works only if use-ip-firewall is enabled in bridge settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#out_bridge_port Ipv6FirewallMangle#out_bridge_port}
  */
  readonly outBridgePort?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as out-bridge-port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#out_bridge_port_list Ipv6FirewallMangle#out_bridge_port_list}
  */
  readonly outBridgePortList?: string;
  /**
  * Interface the packet is leaving the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#out_interface Ipv6FirewallMangle#out_interface}
  */
  readonly outInterface?: string;
  /**
  * Set of interfaces defined in interface list. Works the same as out-interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#out_interface_list Ipv6FirewallMangle#out_interface_list}
  */
  readonly outInterfaceList?: string;
  /**
  * Matches packets marked via mangle facility with particular packet mark. If no-mark is set, the rule will match any unmarked packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#packet_mark Ipv6FirewallMangle#packet_mark}
  */
  readonly packetMark?: string;
  /**
  * Matches packets of specified size or size range in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#packet_size Ipv6FirewallMangle#packet_size}
  */
  readonly packetSize?: string;
  /**
  * Whether to let the packet to pass further (like action passthrough) into the firewall or not (property only valid some actions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#passthrough Ipv6FirewallMangle#passthrough}
  */
  readonly passthrough?: boolean | cdktf.IResolvable;
  /**
  * PCC matcher allows dividing traffic into equal streams with the ability to keep packets with a specific set of options in one particular stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#per_connection_classifier Ipv6FirewallMangle#per_connection_classifier}
  */
  readonly perConnectionClassifier?: string;
  /**
  * Before which position the rule will be inserted.  
  * 	> Please check the effect of this option, as it does not work as you think!  
  * 	> Best way to use in conjunction with a data source. See [example](../data-sources/ip_firewall.md#example-usage).  
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#place_before Ipv6FirewallMangle#place_before}
  */
  readonly placeBefore?: string;
  /**
  * Matches if any (source or destination) port matches the specified list of ports or port ranges. Applicable only if protocol is TCP or UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#port Ipv6FirewallMangle#port}
  */
  readonly port?: string;
  /**
  * Matches the packet's priority after a new priority has been set. Priority may be derived from VLAN, WMM, DSCP, MPLS EXP bit, or from the priority that has been set using the set-priority action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#priority Ipv6FirewallMangle#priority}
  */
  readonly priority?: number;
  /**
  * Matches particular IP protocol specified by protocol name or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#protocol Ipv6FirewallMangle#protocol}
  */
  readonly protocol?: string;
  /**
  * Matches packets randomly with a given probability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#random Ipv6FirewallMangle#random}
  */
  readonly random?: number;
  /**
  * Matches packets marked by mangle facility with particular routing mark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#routing_mark Ipv6FirewallMangle#routing_mark}
  */
  readonly routingMark?: string;
  /**
  * Matches packets which source is equal to specified IP or falls into a specified IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#src_address Ipv6FirewallMangle#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Matches source address of a packet against user-defined address list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#src_address_list Ipv6FirewallMangle#src_address_list}
  */
  readonly srcAddressList?: string;
  /**
  * Matches source address type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#src_address_type Ipv6FirewallMangle#src_address_type}
  */
  readonly srcAddressType?: string;
  /**
  * Matches source MAC address of the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#src_mac_address Ipv6FirewallMangle#src_mac_address}
  */
  readonly srcMacAddress?: string;
  /**
  * List of source ports and ranges of source ports. Applicable only if a protocol is TCP or UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#src_port Ipv6FirewallMangle#src_port}
  */
  readonly srcPort?: string;
  /**
  * Matches specified TCP flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#tcp_flags Ipv6FirewallMangle#tcp_flags}
  */
  readonly tcpFlags?: string;
  /**
  * Matches TCP MSS value of an IP packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#tcp_mss Ipv6FirewallMangle#tcp_mss}
  */
  readonly tcpMss?: string;
  /**
  * Allows to create a filter based on the packets' arrival time and date or, for locally generated packets, departure time and date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#time Ipv6FirewallMangle#time}
  */
  readonly time?: string;
  /**
  * Allows matching HTTPS traffic based on TLS SNI hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#tls_host Ipv6FirewallMangle#tls_host}
  */
  readonly tlsHost?: string;
  /**
  * Matches packets TTL value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#ttl Ipv6FirewallMangle#ttl}
  */
  readonly ttl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle routeros_ipv6_firewall_mangle}
*/
export class Ipv6FirewallMangle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_firewall_mangle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6FirewallMangle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6FirewallMangle to import
  * @param importFromId The id of the existing Ipv6FirewallMangle that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6FirewallMangle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_firewall_mangle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ipv6_firewall_mangle routeros_ipv6_firewall_mangle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6FirewallMangleConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6FirewallMangleConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_firewall_mangle',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
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
    this._icmpOptions = config.icmpOptions;
    this._id = config.id;
    this._inBridgePort = config.inBridgePort;
    this._inBridgePortList = config.inBridgePortList;
    this._inInterface = config.inInterface;
    this._inInterfaceList = config.inInterfaceList;
    this._ingressPriority = config.ingressPriority;
    this._ipsecPolicy = config.ipsecPolicy;
    this._limit = config.limit;
    this._log = config.log;
    this._logPrefix = config.logPrefix;
    this._newConnectionMark = config.newConnectionMark;
    this._newDscp = config.newDscp;
    this._newMss = config.newMss;
    this._newPacketMark = config.newPacketMark;
    this._newPriority = config.newPriority;
    this._newRoutingMark = config.newRoutingMark;
    this._newTtl = config.newTtl;
    this._nth = config.nth;
    this._outBridgePort = config.outBridgePort;
    this._outBridgePortList = config.outBridgePortList;
    this._outInterface = config.outInterface;
    this._outInterfaceList = config.outInterfaceList;
    this._packetMark = config.packetMark;
    this._packetSize = config.packetSize;
    this._passthrough = config.passthrough;
    this._perConnectionClassifier = config.perConnectionClassifier;
    this._placeBefore = config.placeBefore;
    this._port = config.port;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._random = config.random;
    this._routingMark = config.routingMark;
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

  // address_list_timeout - computed: true, optional: true, required: false
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

  // new_connection_mark - computed: false, optional: true, required: false
  private _newConnectionMark?: string; 
  public get newConnectionMark() {
    return this.getStringAttribute('new_connection_mark');
  }
  public set newConnectionMark(value: string) {
    this._newConnectionMark = value;
  }
  public resetNewConnectionMark() {
    this._newConnectionMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newConnectionMarkInput() {
    return this._newConnectionMark;
  }

  // new_dscp - computed: false, optional: true, required: false
  private _newDscp?: number; 
  public get newDscp() {
    return this.getNumberAttribute('new_dscp');
  }
  public set newDscp(value: number) {
    this._newDscp = value;
  }
  public resetNewDscp() {
    this._newDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newDscpInput() {
    return this._newDscp;
  }

  // new_mss - computed: false, optional: true, required: false
  private _newMss?: string; 
  public get newMss() {
    return this.getStringAttribute('new_mss');
  }
  public set newMss(value: string) {
    this._newMss = value;
  }
  public resetNewMss() {
    this._newMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newMssInput() {
    return this._newMss;
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
  private _newPriority?: string; 
  public get newPriority() {
    return this.getStringAttribute('new_priority');
  }
  public set newPriority(value: string) {
    this._newPriority = value;
  }
  public resetNewPriority() {
    this._newPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPriorityInput() {
    return this._newPriority;
  }

  // new_routing_mark - computed: false, optional: true, required: false
  private _newRoutingMark?: string; 
  public get newRoutingMark() {
    return this.getStringAttribute('new_routing_mark');
  }
  public set newRoutingMark(value: string) {
    this._newRoutingMark = value;
  }
  public resetNewRoutingMark() {
    this._newRoutingMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRoutingMarkInput() {
    return this._newRoutingMark;
  }

  // new_ttl - computed: false, optional: true, required: false
  private _newTtl?: string; 
  public get newTtl() {
    return this.getStringAttribute('new_ttl');
  }
  public set newTtl(value: string) {
    this._newTtl = value;
  }
  public resetNewTtl() {
    this._newTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTtlInput() {
    return this._newTtl;
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

  // passthrough - computed: true, optional: true, required: false
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
      icmp_options: cdktf.stringToTerraform(this._icmpOptions),
      id: cdktf.stringToTerraform(this._id),
      in_bridge_port: cdktf.stringToTerraform(this._inBridgePort),
      in_bridge_port_list: cdktf.stringToTerraform(this._inBridgePortList),
      in_interface: cdktf.stringToTerraform(this._inInterface),
      in_interface_list: cdktf.stringToTerraform(this._inInterfaceList),
      ingress_priority: cdktf.numberToTerraform(this._ingressPriority),
      ipsec_policy: cdktf.stringToTerraform(this._ipsecPolicy),
      limit: cdktf.stringToTerraform(this._limit),
      log: cdktf.booleanToTerraform(this._log),
      log_prefix: cdktf.stringToTerraform(this._logPrefix),
      new_connection_mark: cdktf.stringToTerraform(this._newConnectionMark),
      new_dscp: cdktf.numberToTerraform(this._newDscp),
      new_mss: cdktf.stringToTerraform(this._newMss),
      new_packet_mark: cdktf.stringToTerraform(this._newPacketMark),
      new_priority: cdktf.stringToTerraform(this._newPriority),
      new_routing_mark: cdktf.stringToTerraform(this._newRoutingMark),
      new_ttl: cdktf.stringToTerraform(this._newTtl),
      nth: cdktf.stringToTerraform(this._nth),
      out_bridge_port: cdktf.stringToTerraform(this._outBridgePort),
      out_bridge_port_list: cdktf.stringToTerraform(this._outBridgePortList),
      out_interface: cdktf.stringToTerraform(this._outInterface),
      out_interface_list: cdktf.stringToTerraform(this._outInterfaceList),
      packet_mark: cdktf.stringToTerraform(this._packetMark),
      packet_size: cdktf.stringToTerraform(this._packetSize),
      passthrough: cdktf.booleanToTerraform(this._passthrough),
      per_connection_classifier: cdktf.stringToTerraform(this._perConnectionClassifier),
      place_before: cdktf.stringToTerraform(this._placeBefore),
      port: cdktf.stringToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.stringToTerraform(this._protocol),
      random: cdktf.numberToTerraform(this._random),
      routing_mark: cdktf.stringToTerraform(this._routingMark),
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
      new_connection_mark: {
        value: cdktf.stringToHclTerraform(this._newConnectionMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_dscp: {
        value: cdktf.numberToHclTerraform(this._newDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      new_mss: {
        value: cdktf.stringToHclTerraform(this._newMss),
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
        value: cdktf.stringToHclTerraform(this._newPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_routing_mark: {
        value: cdktf.stringToHclTerraform(this._newRoutingMark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_ttl: {
        value: cdktf.stringToHclTerraform(this._newTtl),
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
      passthrough: {
        value: cdktf.booleanToHclTerraform(this._passthrough),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      random: {
        value: cdktf.numberToHclTerraform(this._random),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_mark: {
        value: cdktf.stringToHclTerraform(this._routingMark),
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
