// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Family where create this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#family FirewallFilter#family}
  */
  readonly family: string;
  /**
  * Defined counters are interface specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#interface_specific FirewallFilter#interface_specific}
  */
  readonly interfaceSpecific?: boolean | cdktf.IResolvable;
  /**
  * Filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#name FirewallFilter#name}
  */
  readonly name: string;
  /**
  * term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#term FirewallFilter#term}
  */
  readonly term?: FirewallFilterTerm[] | cdktf.IResolvable;
}
export interface FirewallFilterTermFrom {
  /**
  * Match IP source or destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#address FirewallFilter#address}
  */
  readonly address?: string[];
  /**
  * Match IP source or destination address not in this prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#address_except FirewallFilter#address_except}
  */
  readonly addressExcept?: string[];
  /**
  * Match IP destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#destination_address FirewallFilter#destination_address}
  */
  readonly destinationAddress?: string[];
  /**
  * Match IP destination address not in this prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#destination_address_except FirewallFilter#destination_address_except}
  */
  readonly destinationAddressExcept?: string[];
  /**
  * Destination MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#destination_mac_address FirewallFilter#destination_mac_address}
  */
  readonly destinationMacAddress?: string[];
  /**
  * Destination MAC address not in this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#destination_mac_address_except FirewallFilter#destination_mac_address_except}
  */
  readonly destinationMacAddressExcept?: string[];
  /**
  * Match TCP/UDP destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#destination_port FirewallFilter#destination_port}
  */
  readonly destinationPort?: string[];
  /**
  * Do not match TCP/UDP destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#destination_port_except FirewallFilter#destination_port_except}
  */
  readonly destinationPortExcept?: string[];
  /**
  * Match IP destination prefixes in named list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#destination_prefix_list FirewallFilter#destination_prefix_list}
  */
  readonly destinationPrefixList?: string[];
  /**
  * Match addresses not in this prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#destination_prefix_list_except FirewallFilter#destination_prefix_list_except}
  */
  readonly destinationPrefixListExcept?: string[];
  /**
  * Match forwarding class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#forwarding_class FirewallFilter#forwarding_class}
  */
  readonly forwardingClass?: string[];
  /**
  * Do not match forwarding class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#forwarding_class_except FirewallFilter#forwarding_class_except}
  */
  readonly forwardingClassExcept?: string[];
  /**
  * Match ICMP message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#icmp_code FirewallFilter#icmp_code}
  */
  readonly icmpCode?: string[];
  /**
  * Do not match ICMP message code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#icmp_code_except FirewallFilter#icmp_code_except}
  */
  readonly icmpCodeExcept?: string[];
  /**
  * Match ICMP message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#icmp_type FirewallFilter#icmp_type}
  */
  readonly icmpType?: string[];
  /**
  * Do not match ICMP message type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#icmp_type_except FirewallFilter#icmp_type_except}
  */
  readonly icmpTypeExcept?: string[];
  /**
  * Match interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#interface FirewallFilter#interface}
  */
  readonly interface?: string[];
  /**
  * Match if packet is a fragment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#is_fragment FirewallFilter#is_fragment}
  */
  readonly isFragment?: boolean | cdktf.IResolvable;
  /**
  * Match Loss Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#loss_priority FirewallFilter#loss_priority}
  */
  readonly lossPriority?: string[];
  /**
  * Do not match Loss Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#loss_priority_except FirewallFilter#loss_priority_except}
  */
  readonly lossPriorityExcept?: string[];
  /**
  * Match next header protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#next_header FirewallFilter#next_header}
  */
  readonly nextHeader?: string[];
  /**
  * Do not match next header protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#next_header_except FirewallFilter#next_header_except}
  */
  readonly nextHeaderExcept?: string[];
  /**
  * Match packet length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#packet_length FirewallFilter#packet_length}
  */
  readonly packetLength?: string[];
  /**
  * Do not match packet length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#packet_length_except FirewallFilter#packet_length_except}
  */
  readonly packetLengthExcept?: string[];
  /**
  * Match policy map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#policy_map FirewallFilter#policy_map}
  */
  readonly policyMap?: string[];
  /**
  * Do not match policy map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#policy_map_except FirewallFilter#policy_map_except}
  */
  readonly policyMapExcept?: string[];
  /**
  * Match TCP/UDP source or destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#port FirewallFilter#port}
  */
  readonly port?: string[];
  /**
  * Do not match TCP/UDP source or destination port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#port_except FirewallFilter#port_except}
  */
  readonly portExcept?: string[];
  /**
  * Match IP source or destination prefixes in named list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#prefix_list FirewallFilter#prefix_list}
  */
  readonly prefixList?: string[];
  /**
  * Match addresses not in this prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#prefix_list_except FirewallFilter#prefix_list_except}
  */
  readonly prefixListExcept?: string[];
  /**
  * Match IP protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#protocol FirewallFilter#protocol}
  */
  readonly protocol?: string[];
  /**
  * Do not match IP protocol type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#protocol_except FirewallFilter#protocol_except}
  */
  readonly protocolExcept?: string[];
  /**
  * Match IP source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#source_address FirewallFilter#source_address}
  */
  readonly sourceAddress?: string[];
  /**
  * Match IP source address not in this prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#source_address_except FirewallFilter#source_address_except}
  */
  readonly sourceAddressExcept?: string[];
  /**
  * Source MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#source_mac_address FirewallFilter#source_mac_address}
  */
  readonly sourceMacAddress?: string[];
  /**
  * Source MAC address not in this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#source_mac_address_except FirewallFilter#source_mac_address_except}
  */
  readonly sourceMacAddressExcept?: string[];
  /**
  * Match TCP/UDP source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#source_port FirewallFilter#source_port}
  */
  readonly sourcePort?: string[];
  /**
  * Do not match TCP/UDP source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#source_port_except FirewallFilter#source_port_except}
  */
  readonly sourcePortExcept?: string[];
  /**
  * Match IP source prefixes in named list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#source_prefix_list FirewallFilter#source_prefix_list}
  */
  readonly sourcePrefixList?: string[];
  /**
  * Match IP source prefixes not in this prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#source_prefix_list_except FirewallFilter#source_prefix_list_except}
  */
  readonly sourcePrefixListExcept?: string[];
  /**
  * Match packet of an established TCP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#tcp_established FirewallFilter#tcp_established}
  */
  readonly tcpEstablished?: boolean | cdktf.IResolvable;
  /**
  * Match TCP flags (in symbolic or hex formats).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#tcp_flags FirewallFilter#tcp_flags}
  */
  readonly tcpFlags?: string;
  /**
  * Match initial packet of a TCP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#tcp_initial FirewallFilter#tcp_initial}
  */
  readonly tcpInitial?: boolean | cdktf.IResolvable;
}

export function firewallFilterTermFromToTerraform(struct?: FirewallFilterTermFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressExcept),
    destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddress),
    destination_address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddressExcept),
    destination_mac_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationMacAddress),
    destination_mac_address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationMacAddressExcept),
    destination_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPort),
    destination_port_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPortExcept),
    destination_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPrefixList),
    destination_prefix_list_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPrefixListExcept),
    forwarding_class: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwardingClass),
    forwarding_class_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwardingClassExcept),
    icmp_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.icmpCode),
    icmp_code_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.icmpCodeExcept),
    icmp_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.icmpType),
    icmp_type_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.icmpTypeExcept),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    is_fragment: cdktf.booleanToTerraform(struct!.isFragment),
    loss_priority: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lossPriority),
    loss_priority_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lossPriorityExcept),
    next_header: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nextHeader),
    next_header_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nextHeaderExcept),
    packet_length: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packetLength),
    packet_length_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packetLengthExcept),
    policy_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyMap),
    policy_map_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyMapExcept),
    port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port),
    port_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portExcept),
    prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixList),
    prefix_list_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListExcept),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    protocol_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocolExcept),
    source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddress),
    source_address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddressExcept),
    source_mac_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceMacAddress),
    source_mac_address_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceMacAddressExcept),
    source_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePort),
    source_port_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePortExcept),
    source_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePrefixList),
    source_prefix_list_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePrefixListExcept),
    tcp_established: cdktf.booleanToTerraform(struct!.tcpEstablished),
    tcp_flags: cdktf.stringToTerraform(struct!.tcpFlags),
    tcp_initial: cdktf.booleanToTerraform(struct!.tcpInitial),
  }
}


export function firewallFilterTermFromToHclTerraform(struct?: FirewallFilterTermFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_mac_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationMacAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_mac_address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationMacAddressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPort),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_port_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPortExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPrefixList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_prefix_list_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPrefixListExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    forwarding_class: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forwardingClass),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    forwarding_class_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forwardingClassExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    icmp_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.icmpCode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    icmp_code_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.icmpCodeExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    icmp_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.icmpType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    icmp_type_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.icmpTypeExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_fragment: {
      value: cdktf.booleanToHclTerraform(struct!.isFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loss_priority: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lossPriority),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    loss_priority_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lossPriorityExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_header: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nextHeader),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_header_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nextHeaderExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    packet_length: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packetLength),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    packet_length_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packetLengthExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_map_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyMapExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocolExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_mac_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceMacAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_mac_address_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceMacAddressExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePort),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_port_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePortExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePrefixList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_prefix_list_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePrefixListExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tcp_established: {
      value: cdktf.booleanToHclTerraform(struct!.tcpEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_flags: {
      value: cdktf.stringToHclTerraform(struct!.tcpFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_initial: {
      value: cdktf.booleanToHclTerraform(struct!.tcpInitial),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterTermFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterTermFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressExcept = this._addressExcept;
    }
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._destinationAddressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddressExcept = this._destinationAddressExcept;
    }
    if (this._destinationMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMacAddress = this._destinationMacAddress;
    }
    if (this._destinationMacAddressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationMacAddressExcept = this._destinationMacAddressExcept;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._destinationPortExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortExcept = this._destinationPortExcept;
    }
    if (this._destinationPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixList = this._destinationPrefixList;
    }
    if (this._destinationPrefixListExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixListExcept = this._destinationPrefixListExcept;
    }
    if (this._forwardingClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClass = this._forwardingClass;
    }
    if (this._forwardingClassExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClassExcept = this._forwardingClassExcept;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpCodeExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCodeExcept = this._icmpCodeExcept;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._icmpTypeExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeExcept = this._icmpTypeExcept;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._isFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFragment = this._isFragment;
    }
    if (this._lossPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossPriority = this._lossPriority;
    }
    if (this._lossPriorityExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossPriorityExcept = this._lossPriorityExcept;
    }
    if (this._nextHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHeader = this._nextHeader;
    }
    if (this._nextHeaderExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHeaderExcept = this._nextHeaderExcept;
    }
    if (this._packetLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLength = this._packetLength;
    }
    if (this._packetLengthExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLengthExcept = this._packetLengthExcept;
    }
    if (this._policyMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyMap = this._policyMap;
    }
    if (this._policyMapExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyMapExcept = this._policyMapExcept;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.portExcept = this._portExcept;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    if (this._prefixListExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListExcept = this._prefixListExcept;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolExcept = this._protocolExcept;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceAddressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressExcept = this._sourceAddressExcept;
    }
    if (this._sourceMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMacAddress = this._sourceMacAddress;
    }
    if (this._sourceMacAddressExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceMacAddressExcept = this._sourceMacAddressExcept;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourcePortExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortExcept = this._sourcePortExcept;
    }
    if (this._sourcePrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixList = this._sourcePrefixList;
    }
    if (this._sourcePrefixListExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixListExcept = this._sourcePrefixListExcept;
    }
    if (this._tcpEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEstablished = this._tcpEstablished;
    }
    if (this._tcpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlags = this._tcpFlags;
    }
    if (this._tcpInitial !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInitial = this._tcpInitial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterTermFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressExcept = undefined;
      this._destinationAddress = undefined;
      this._destinationAddressExcept = undefined;
      this._destinationMacAddress = undefined;
      this._destinationMacAddressExcept = undefined;
      this._destinationPort = undefined;
      this._destinationPortExcept = undefined;
      this._destinationPrefixList = undefined;
      this._destinationPrefixListExcept = undefined;
      this._forwardingClass = undefined;
      this._forwardingClassExcept = undefined;
      this._icmpCode = undefined;
      this._icmpCodeExcept = undefined;
      this._icmpType = undefined;
      this._icmpTypeExcept = undefined;
      this._interface = undefined;
      this._isFragment = undefined;
      this._lossPriority = undefined;
      this._lossPriorityExcept = undefined;
      this._nextHeader = undefined;
      this._nextHeaderExcept = undefined;
      this._packetLength = undefined;
      this._packetLengthExcept = undefined;
      this._policyMap = undefined;
      this._policyMapExcept = undefined;
      this._port = undefined;
      this._portExcept = undefined;
      this._prefixList = undefined;
      this._prefixListExcept = undefined;
      this._protocol = undefined;
      this._protocolExcept = undefined;
      this._sourceAddress = undefined;
      this._sourceAddressExcept = undefined;
      this._sourceMacAddress = undefined;
      this._sourceMacAddressExcept = undefined;
      this._sourcePort = undefined;
      this._sourcePortExcept = undefined;
      this._sourcePrefixList = undefined;
      this._sourcePrefixListExcept = undefined;
      this._tcpEstablished = undefined;
      this._tcpFlags = undefined;
      this._tcpInitial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressExcept = value.addressExcept;
      this._destinationAddress = value.destinationAddress;
      this._destinationAddressExcept = value.destinationAddressExcept;
      this._destinationMacAddress = value.destinationMacAddress;
      this._destinationMacAddressExcept = value.destinationMacAddressExcept;
      this._destinationPort = value.destinationPort;
      this._destinationPortExcept = value.destinationPortExcept;
      this._destinationPrefixList = value.destinationPrefixList;
      this._destinationPrefixListExcept = value.destinationPrefixListExcept;
      this._forwardingClass = value.forwardingClass;
      this._forwardingClassExcept = value.forwardingClassExcept;
      this._icmpCode = value.icmpCode;
      this._icmpCodeExcept = value.icmpCodeExcept;
      this._icmpType = value.icmpType;
      this._icmpTypeExcept = value.icmpTypeExcept;
      this._interface = value.interface;
      this._isFragment = value.isFragment;
      this._lossPriority = value.lossPriority;
      this._lossPriorityExcept = value.lossPriorityExcept;
      this._nextHeader = value.nextHeader;
      this._nextHeaderExcept = value.nextHeaderExcept;
      this._packetLength = value.packetLength;
      this._packetLengthExcept = value.packetLengthExcept;
      this._policyMap = value.policyMap;
      this._policyMapExcept = value.policyMapExcept;
      this._port = value.port;
      this._portExcept = value.portExcept;
      this._prefixList = value.prefixList;
      this._prefixListExcept = value.prefixListExcept;
      this._protocol = value.protocol;
      this._protocolExcept = value.protocolExcept;
      this._sourceAddress = value.sourceAddress;
      this._sourceAddressExcept = value.sourceAddressExcept;
      this._sourceMacAddress = value.sourceMacAddress;
      this._sourceMacAddressExcept = value.sourceMacAddressExcept;
      this._sourcePort = value.sourcePort;
      this._sourcePortExcept = value.sourcePortExcept;
      this._sourcePrefixList = value.sourcePrefixList;
      this._sourcePrefixListExcept = value.sourcePrefixListExcept;
      this._tcpEstablished = value.tcpEstablished;
      this._tcpFlags = value.tcpFlags;
      this._tcpInitial = value.tcpInitial;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return cdktf.Fn.tolist(this.getListAttribute('address'));
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_except - computed: false, optional: true, required: false
  private _addressExcept?: string[]; 
  public get addressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('address_except'));
  }
  public set addressExcept(value: string[]) {
    this._addressExcept = value;
  }
  public resetAddressExcept() {
    this._addressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressExceptInput() {
    return this._addressExcept;
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string[]; 
  public get destinationAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address'));
  }
  public set destinationAddress(value: string[]) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_address_except - computed: false, optional: true, required: false
  private _destinationAddressExcept?: string[]; 
  public get destinationAddressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address_except'));
  }
  public set destinationAddressExcept(value: string[]) {
    this._destinationAddressExcept = value;
  }
  public resetDestinationAddressExcept() {
    this._destinationAddressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressExceptInput() {
    return this._destinationAddressExcept;
  }

  // destination_mac_address - computed: false, optional: true, required: false
  private _destinationMacAddress?: string[]; 
  public get destinationMacAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_mac_address'));
  }
  public set destinationMacAddress(value: string[]) {
    this._destinationMacAddress = value;
  }
  public resetDestinationMacAddress() {
    this._destinationMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMacAddressInput() {
    return this._destinationMacAddress;
  }

  // destination_mac_address_except - computed: false, optional: true, required: false
  private _destinationMacAddressExcept?: string[]; 
  public get destinationMacAddressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_mac_address_except'));
  }
  public set destinationMacAddressExcept(value: string[]) {
    this._destinationMacAddressExcept = value;
  }
  public resetDestinationMacAddressExcept() {
    this._destinationMacAddressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMacAddressExceptInput() {
    return this._destinationMacAddressExcept;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string[]; 
  public get destinationPort() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_port'));
  }
  public set destinationPort(value: string[]) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_port_except - computed: false, optional: true, required: false
  private _destinationPortExcept?: string[]; 
  public get destinationPortExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_port_except'));
  }
  public set destinationPortExcept(value: string[]) {
    this._destinationPortExcept = value;
  }
  public resetDestinationPortExcept() {
    this._destinationPortExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortExceptInput() {
    return this._destinationPortExcept;
  }

  // destination_prefix_list - computed: false, optional: true, required: false
  private _destinationPrefixList?: string[]; 
  public get destinationPrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_prefix_list'));
  }
  public set destinationPrefixList(value: string[]) {
    this._destinationPrefixList = value;
  }
  public resetDestinationPrefixList() {
    this._destinationPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListInput() {
    return this._destinationPrefixList;
  }

  // destination_prefix_list_except - computed: false, optional: true, required: false
  private _destinationPrefixListExcept?: string[]; 
  public get destinationPrefixListExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_prefix_list_except'));
  }
  public set destinationPrefixListExcept(value: string[]) {
    this._destinationPrefixListExcept = value;
  }
  public resetDestinationPrefixListExcept() {
    this._destinationPrefixListExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListExceptInput() {
    return this._destinationPrefixListExcept;
  }

  // forwarding_class - computed: false, optional: true, required: false
  private _forwardingClass?: string[]; 
  public get forwardingClass() {
    return cdktf.Fn.tolist(this.getListAttribute('forwarding_class'));
  }
  public set forwardingClass(value: string[]) {
    this._forwardingClass = value;
  }
  public resetForwardingClass() {
    this._forwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass;
  }

  // forwarding_class_except - computed: false, optional: true, required: false
  private _forwardingClassExcept?: string[]; 
  public get forwardingClassExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('forwarding_class_except'));
  }
  public set forwardingClassExcept(value: string[]) {
    this._forwardingClassExcept = value;
  }
  public resetForwardingClassExcept() {
    this._forwardingClassExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassExceptInput() {
    return this._forwardingClassExcept;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string[]; 
  public get icmpCode() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_code'));
  }
  public set icmpCode(value: string[]) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_code_except - computed: false, optional: true, required: false
  private _icmpCodeExcept?: string[]; 
  public get icmpCodeExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_code_except'));
  }
  public set icmpCodeExcept(value: string[]) {
    this._icmpCodeExcept = value;
  }
  public resetIcmpCodeExcept() {
    this._icmpCodeExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeExceptInput() {
    return this._icmpCodeExcept;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string[]; 
  public get icmpType() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_type'));
  }
  public set icmpType(value: string[]) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // icmp_type_except - computed: false, optional: true, required: false
  private _icmpTypeExcept?: string[]; 
  public get icmpTypeExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('icmp_type_except'));
  }
  public set icmpTypeExcept(value: string[]) {
    this._icmpTypeExcept = value;
  }
  public resetIcmpTypeExcept() {
    this._icmpTypeExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeExceptInput() {
    return this._icmpTypeExcept;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // is_fragment - computed: false, optional: true, required: false
  private _isFragment?: boolean | cdktf.IResolvable; 
  public get isFragment() {
    return this.getBooleanAttribute('is_fragment');
  }
  public set isFragment(value: boolean | cdktf.IResolvable) {
    this._isFragment = value;
  }
  public resetIsFragment() {
    this._isFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFragmentInput() {
    return this._isFragment;
  }

  // loss_priority - computed: false, optional: true, required: false
  private _lossPriority?: string[]; 
  public get lossPriority() {
    return cdktf.Fn.tolist(this.getListAttribute('loss_priority'));
  }
  public set lossPriority(value: string[]) {
    this._lossPriority = value;
  }
  public resetLossPriority() {
    this._lossPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossPriorityInput() {
    return this._lossPriority;
  }

  // loss_priority_except - computed: false, optional: true, required: false
  private _lossPriorityExcept?: string[]; 
  public get lossPriorityExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('loss_priority_except'));
  }
  public set lossPriorityExcept(value: string[]) {
    this._lossPriorityExcept = value;
  }
  public resetLossPriorityExcept() {
    this._lossPriorityExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossPriorityExceptInput() {
    return this._lossPriorityExcept;
  }

  // next_header - computed: false, optional: true, required: false
  private _nextHeader?: string[]; 
  public get nextHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('next_header'));
  }
  public set nextHeader(value: string[]) {
    this._nextHeader = value;
  }
  public resetNextHeader() {
    this._nextHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHeaderInput() {
    return this._nextHeader;
  }

  // next_header_except - computed: false, optional: true, required: false
  private _nextHeaderExcept?: string[]; 
  public get nextHeaderExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('next_header_except'));
  }
  public set nextHeaderExcept(value: string[]) {
    this._nextHeaderExcept = value;
  }
  public resetNextHeaderExcept() {
    this._nextHeaderExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHeaderExceptInput() {
    return this._nextHeaderExcept;
  }

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: string[]; 
  public get packetLength() {
    return cdktf.Fn.tolist(this.getListAttribute('packet_length'));
  }
  public set packetLength(value: string[]) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
  }

  // packet_length_except - computed: false, optional: true, required: false
  private _packetLengthExcept?: string[]; 
  public get packetLengthExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('packet_length_except'));
  }
  public set packetLengthExcept(value: string[]) {
    this._packetLengthExcept = value;
  }
  public resetPacketLengthExcept() {
    this._packetLengthExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthExceptInput() {
    return this._packetLengthExcept;
  }

  // policy_map - computed: false, optional: true, required: false
  private _policyMap?: string[]; 
  public get policyMap() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_map'));
  }
  public set policyMap(value: string[]) {
    this._policyMap = value;
  }
  public resetPolicyMap() {
    this._policyMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyMapInput() {
    return this._policyMap;
  }

  // policy_map_except - computed: false, optional: true, required: false
  private _policyMapExcept?: string[]; 
  public get policyMapExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_map_except'));
  }
  public set policyMapExcept(value: string[]) {
    this._policyMapExcept = value;
  }
  public resetPolicyMapExcept() {
    this._policyMapExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyMapExceptInput() {
    return this._policyMapExcept;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string[]; 
  public get port() {
    return cdktf.Fn.tolist(this.getListAttribute('port'));
  }
  public set port(value: string[]) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_except - computed: false, optional: true, required: false
  private _portExcept?: string[]; 
  public get portExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('port_except'));
  }
  public set portExcept(value: string[]) {
    this._portExcept = value;
  }
  public resetPortExcept() {
    this._portExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portExceptInput() {
    return this._portExcept;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string[]; 
  public get prefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list'));
  }
  public set prefixList(value: string[]) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }

  // prefix_list_except - computed: false, optional: true, required: false
  private _prefixListExcept?: string[]; 
  public get prefixListExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_except'));
  }
  public set prefixListExcept(value: string[]) {
    this._prefixListExcept = value;
  }
  public resetPrefixListExcept() {
    this._prefixListExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListExceptInput() {
    return this._prefixListExcept;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_except - computed: false, optional: true, required: false
  private _protocolExcept?: string[]; 
  public get protocolExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol_except'));
  }
  public set protocolExcept(value: string[]) {
    this._protocolExcept = value;
  }
  public resetProtocolExcept() {
    this._protocolExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolExceptInput() {
    return this._protocolExcept;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address'));
  }
  public set sourceAddress(value: string[]) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_except - computed: false, optional: true, required: false
  private _sourceAddressExcept?: string[]; 
  public get sourceAddressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address_except'));
  }
  public set sourceAddressExcept(value: string[]) {
    this._sourceAddressExcept = value;
  }
  public resetSourceAddressExcept() {
    this._sourceAddressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressExceptInput() {
    return this._sourceAddressExcept;
  }

  // source_mac_address - computed: false, optional: true, required: false
  private _sourceMacAddress?: string[]; 
  public get sourceMacAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('source_mac_address'));
  }
  public set sourceMacAddress(value: string[]) {
    this._sourceMacAddress = value;
  }
  public resetSourceMacAddress() {
    this._sourceMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMacAddressInput() {
    return this._sourceMacAddress;
  }

  // source_mac_address_except - computed: false, optional: true, required: false
  private _sourceMacAddressExcept?: string[]; 
  public get sourceMacAddressExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('source_mac_address_except'));
  }
  public set sourceMacAddressExcept(value: string[]) {
    this._sourceMacAddressExcept = value;
  }
  public resetSourceMacAddressExcept() {
    this._sourceMacAddressExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMacAddressExceptInput() {
    return this._sourceMacAddressExcept;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string[]; 
  public get sourcePort() {
    return cdktf.Fn.tolist(this.getListAttribute('source_port'));
  }
  public set sourcePort(value: string[]) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_port_except - computed: false, optional: true, required: false
  private _sourcePortExcept?: string[]; 
  public get sourcePortExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('source_port_except'));
  }
  public set sourcePortExcept(value: string[]) {
    this._sourcePortExcept = value;
  }
  public resetSourcePortExcept() {
    this._sourcePortExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortExceptInput() {
    return this._sourcePortExcept;
  }

  // source_prefix_list - computed: false, optional: true, required: false
  private _sourcePrefixList?: string[]; 
  public get sourcePrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('source_prefix_list'));
  }
  public set sourcePrefixList(value: string[]) {
    this._sourcePrefixList = value;
  }
  public resetSourcePrefixList() {
    this._sourcePrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListInput() {
    return this._sourcePrefixList;
  }

  // source_prefix_list_except - computed: false, optional: true, required: false
  private _sourcePrefixListExcept?: string[]; 
  public get sourcePrefixListExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('source_prefix_list_except'));
  }
  public set sourcePrefixListExcept(value: string[]) {
    this._sourcePrefixListExcept = value;
  }
  public resetSourcePrefixListExcept() {
    this._sourcePrefixListExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListExceptInput() {
    return this._sourcePrefixListExcept;
  }

  // tcp_established - computed: false, optional: true, required: false
  private _tcpEstablished?: boolean | cdktf.IResolvable; 
  public get tcpEstablished() {
    return this.getBooleanAttribute('tcp_established');
  }
  public set tcpEstablished(value: boolean | cdktf.IResolvable) {
    this._tcpEstablished = value;
  }
  public resetTcpEstablished() {
    this._tcpEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstablishedInput() {
    return this._tcpEstablished;
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

  // tcp_initial - computed: false, optional: true, required: false
  private _tcpInitial?: boolean | cdktf.IResolvable; 
  public get tcpInitial() {
    return this.getBooleanAttribute('tcp_initial');
  }
  public set tcpInitial(value: boolean | cdktf.IResolvable) {
    this._tcpInitial = value;
  }
  public resetTcpInitial() {
    this._tcpInitial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInitialInput() {
    return this._tcpInitial;
  }
}
export interface FirewallFilterTermThen {
  /**
  * Action for term if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#action FirewallFilter#action}
  */
  readonly action?: string;
  /**
  * Count the packet in the named counter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#count FirewallFilter#count}
  */
  readonly count?: string;
  /**
  * Classify packet to forwarding class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#forwarding_class FirewallFilter#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Log the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#log FirewallFilter#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Packet's loss priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#loss_priority FirewallFilter#loss_priority}
  */
  readonly lossPriority?: string;
  /**
  * Bypass flow mode for the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#packet_mode FirewallFilter#packet_mode}
  */
  readonly packetMode?: boolean | cdktf.IResolvable;
  /**
  * Name of policer to use to rate-limit traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#policer FirewallFilter#policer}
  */
  readonly policer?: string;
  /**
  * Port-mirror the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#port_mirror FirewallFilter#port_mirror}
  */
  readonly portMirror?: boolean | cdktf.IResolvable;
  /**
  * Packets are directed to specified routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#routing_instance FirewallFilter#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Sample the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#sample FirewallFilter#sample}
  */
  readonly sample?: boolean | cdktf.IResolvable;
  /**
  * Count the packets for service accounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#service_accounting FirewallFilter#service_accounting}
  */
  readonly serviceAccounting?: boolean | cdktf.IResolvable;
  /**
  * System log (syslog) information about the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#syslog FirewallFilter#syslog}
  */
  readonly syslog?: boolean | cdktf.IResolvable;
}

export function firewallFilterTermThenToTerraform(struct?: FirewallFilterTermThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    count: cdktf.stringToTerraform(struct!.count),
    forwarding_class: cdktf.stringToTerraform(struct!.forwardingClass),
    log: cdktf.booleanToTerraform(struct!.log),
    loss_priority: cdktf.stringToTerraform(struct!.lossPriority),
    packet_mode: cdktf.booleanToTerraform(struct!.packetMode),
    policer: cdktf.stringToTerraform(struct!.policer),
    port_mirror: cdktf.booleanToTerraform(struct!.portMirror),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    sample: cdktf.booleanToTerraform(struct!.sample),
    service_accounting: cdktf.booleanToTerraform(struct!.serviceAccounting),
    syslog: cdktf.booleanToTerraform(struct!.syslog),
  }
}


export function firewallFilterTermThenToHclTerraform(struct?: FirewallFilterTermThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_class: {
      value: cdktf.stringToHclTerraform(struct!.forwardingClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loss_priority: {
      value: cdktf.stringToHclTerraform(struct!.lossPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_mode: {
      value: cdktf.booleanToHclTerraform(struct!.packetMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policer: {
      value: cdktf.stringToHclTerraform(struct!.policer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_mirror: {
      value: cdktf.booleanToHclTerraform(struct!.portMirror),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample: {
      value: cdktf.booleanToHclTerraform(struct!.sample),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_accounting: {
      value: cdktf.booleanToHclTerraform(struct!.serviceAccounting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    syslog: {
      value: cdktf.booleanToHclTerraform(struct!.syslog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterTermThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallFilterTermThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._forwardingClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClass = this._forwardingClass;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._lossPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossPriority = this._lossPriority;
    }
    if (this._packetMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetMode = this._packetMode;
    }
    if (this._policer !== undefined) {
      hasAnyValues = true;
      internalValueResult.policer = this._policer;
    }
    if (this._portMirror !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMirror = this._portMirror;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._sample !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample;
    }
    if (this._serviceAccounting !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounting = this._serviceAccounting;
    }
    if (this._syslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterTermThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._count = undefined;
      this._forwardingClass = undefined;
      this._log = undefined;
      this._lossPriority = undefined;
      this._packetMode = undefined;
      this._policer = undefined;
      this._portMirror = undefined;
      this._routingInstance = undefined;
      this._sample = undefined;
      this._serviceAccounting = undefined;
      this._syslog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._count = value.count;
      this._forwardingClass = value.forwardingClass;
      this._log = value.log;
      this._lossPriority = value.lossPriority;
      this._packetMode = value.packetMode;
      this._policer = value.policer;
      this._portMirror = value.portMirror;
      this._routingInstance = value.routingInstance;
      this._sample = value.sample;
      this._serviceAccounting = value.serviceAccounting;
      this._syslog = value.syslog;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // forwarding_class - computed: false, optional: true, required: false
  private _forwardingClass?: string; 
  public get forwardingClass() {
    return this.getStringAttribute('forwarding_class');
  }
  public set forwardingClass(value: string) {
    this._forwardingClass = value;
  }
  public resetForwardingClass() {
    this._forwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass;
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

  // loss_priority - computed: false, optional: true, required: false
  private _lossPriority?: string; 
  public get lossPriority() {
    return this.getStringAttribute('loss_priority');
  }
  public set lossPriority(value: string) {
    this._lossPriority = value;
  }
  public resetLossPriority() {
    this._lossPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossPriorityInput() {
    return this._lossPriority;
  }

  // packet_mode - computed: false, optional: true, required: false
  private _packetMode?: boolean | cdktf.IResolvable; 
  public get packetMode() {
    return this.getBooleanAttribute('packet_mode');
  }
  public set packetMode(value: boolean | cdktf.IResolvable) {
    this._packetMode = value;
  }
  public resetPacketMode() {
    this._packetMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetModeInput() {
    return this._packetMode;
  }

  // policer - computed: false, optional: true, required: false
  private _policer?: string; 
  public get policer() {
    return this.getStringAttribute('policer');
  }
  public set policer(value: string) {
    this._policer = value;
  }
  public resetPolicer() {
    this._policer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerInput() {
    return this._policer;
  }

  // port_mirror - computed: false, optional: true, required: false
  private _portMirror?: boolean | cdktf.IResolvable; 
  public get portMirror() {
    return this.getBooleanAttribute('port_mirror');
  }
  public set portMirror(value: boolean | cdktf.IResolvable) {
    this._portMirror = value;
  }
  public resetPortMirror() {
    this._portMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMirrorInput() {
    return this._portMirror;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // sample - computed: false, optional: true, required: false
  private _sample?: boolean | cdktf.IResolvable; 
  public get sample() {
    return this.getBooleanAttribute('sample');
  }
  public set sample(value: boolean | cdktf.IResolvable) {
    this._sample = value;
  }
  public resetSample() {
    this._sample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample;
  }

  // service_accounting - computed: false, optional: true, required: false
  private _serviceAccounting?: boolean | cdktf.IResolvable; 
  public get serviceAccounting() {
    return this.getBooleanAttribute('service_accounting');
  }
  public set serviceAccounting(value: boolean | cdktf.IResolvable) {
    this._serviceAccounting = value;
  }
  public resetServiceAccounting() {
    this._serviceAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountingInput() {
    return this._serviceAccounting;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog?: boolean | cdktf.IResolvable; 
  public get syslog() {
    return this.getBooleanAttribute('syslog');
  }
  public set syslog(value: boolean | cdktf.IResolvable) {
    this._syslog = value;
  }
  public resetSyslog() {
    this._syslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog;
  }
}
export interface FirewallFilterTerm {
  /**
  * Filter to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#filter FirewallFilter#filter}
  */
  readonly filter?: string;
  /**
  * Term name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#name FirewallFilter#name}
  */
  readonly name: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#from FirewallFilter#from}
  */
  readonly from?: FirewallFilterTermFrom;
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#then FirewallFilter#then}
  */
  readonly then?: FirewallFilterTermThen;
}

export function firewallFilterTermToTerraform(struct?: FirewallFilterTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    from: firewallFilterTermFromToTerraform(struct!.from),
    then: firewallFilterTermThenToTerraform(struct!.then),
  }
}


export function firewallFilterTermToHclTerraform(struct?: FirewallFilterTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: firewallFilterTermFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallFilterTermFrom",
    },
    then: {
      value: firewallFilterTermThenToHclTerraform(struct!.then),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallFilterTermThen",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilterTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallFilterTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._then?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilterTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._name = undefined;
      this._from.internalValue = undefined;
      this._then.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._name = value.name;
      this._from.internalValue = value.from;
      this._then.internalValue = value.then;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // from - computed: false, optional: true, required: false
  private _from = new FirewallFilterTermFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: FirewallFilterTermFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then = new FirewallFilterTermThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: FirewallFilterTermThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }
}

export class FirewallFilterTermList extends cdktf.ComplexList {
  public internalValue? : FirewallFilterTerm[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallFilterTermOutputReference {
    return new FirewallFilterTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter junos_firewall_filter}
*/
export class FirewallFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_firewall_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallFilter to import
  * @param importFromId The id of the existing FirewallFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_firewall_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_filter junos_firewall_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallFilterConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_firewall_filter',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._family = config.family;
    this._interfaceSpecific = config.interfaceSpecific;
    this._name = config.name;
    this._term.internalValue = config.term;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_specific - computed: false, optional: true, required: false
  private _interfaceSpecific?: boolean | cdktf.IResolvable; 
  public get interfaceSpecific() {
    return this.getBooleanAttribute('interface_specific');
  }
  public set interfaceSpecific(value: boolean | cdktf.IResolvable) {
    this._interfaceSpecific = value;
  }
  public resetInterfaceSpecific() {
    this._interfaceSpecific = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSpecificInput() {
    return this._interfaceSpecific;
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

  // term - computed: false, optional: true, required: false
  private _term = new FirewallFilterTermList(this, "term", false);
  public get term() {
    return this._term;
  }
  public putTerm(value: FirewallFilterTerm[] | cdktf.IResolvable) {
    this._term.internalValue = value;
  }
  public resetTerm() {
    this._term.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termInput() {
    return this._term.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      family: cdktf.stringToTerraform(this._family),
      interface_specific: cdktf.booleanToTerraform(this._interfaceSpecific),
      name: cdktf.stringToTerraform(this._name),
      term: cdktf.listMapper(firewallFilterTermToTerraform, true)(this._term.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_specific: {
        value: cdktf.booleanToHclTerraform(this._interfaceSpecific),
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
      term: {
        value: cdktf.listMapperHcl(firewallFilterTermToHclTerraform, true)(this._term.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallFilterTermList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
