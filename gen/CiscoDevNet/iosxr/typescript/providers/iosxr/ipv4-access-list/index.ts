// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4AccessListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access list name - maximum 128 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#access_list_name Ipv4AccessList#access_list_name}
  */
  readonly accessListName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#device Ipv4AccessList#device}
  */
  readonly device?: string;
  /**
  * access list entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#sequences Ipv4AccessList#sequences}
  */
  readonly sequences?: Ipv4AccessListSequences[] | cdktf.IResolvable;
}
export interface Ipv4AccessListSequences {
  /**
  * Capture matched packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_capture Ipv4AccessList#deny_capture}
  */
  readonly denyCapture?: boolean | cdktf.IResolvable;
  /**
  * counter for this ACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_counter Ipv4AccessList#deny_counter}
  */
  readonly denyCounter?: string;
  /**
  * Use specified default nexthop on match against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_default Ipv4AccessList#deny_default}
  */
  readonly denyDefault?: boolean | cdktf.IResolvable;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_address Ipv4AccessList#deny_destination_address}
  */
  readonly denyDestinationAddress?: string;
  /**
  * Any destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_any Ipv4AccessList#deny_destination_any}
  */
  readonly denyDestinationAny?: boolean | cdktf.IResolvable;
  /**
  * A single destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_host Ipv4AccessList#deny_destination_host}
  */
  readonly denyDestinationHost?: string;
  /**
  * IPv4 destination network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_net_group Ipv4AccessList#deny_destination_net_group}
  */
  readonly denyDestinationNetGroup?: string;
  /**
  * Match only packets on a given port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_port_eq Ipv4AccessList#deny_destination_port_eq}
  */
  readonly denyDestinationPortEq?: string;
  /**
  * destination port object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_port_group Ipv4AccessList#deny_destination_port_group}
  */
  readonly denyDestinationPortGroup?: string;
  /**
  * Match only packet with a greater port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_port_gt Ipv4AccessList#deny_destination_port_gt}
  */
  readonly denyDestinationPortGt?: string;
  /**
  * Match only packets with a lower port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_port_lt Ipv4AccessList#deny_destination_port_lt}
  */
  readonly denyDestinationPortLt?: string;
  /**
  * Match only packets not on a given port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_port_neq Ipv4AccessList#deny_destination_port_neq}
  */
  readonly denyDestinationPortNeq?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_port_range_end Ipv4AccessList#deny_destination_port_range_end}
  */
  readonly denyDestinationPortRangeEnd?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_port_range_start Ipv4AccessList#deny_destination_port_range_start}
  */
  readonly denyDestinationPortRangeStart?: string;
  /**
  * Destination IP address prefix length. Either wildcard-mask or prefix-length can be used along with address.
  *   - Range: `0`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_prefix_length Ipv4AccessList#deny_destination_prefix_length}
  */
  readonly denyDestinationPrefixLength?: number;
  /**
  * Destination IP address wildcard mask. Either wildcard-mask or prefix-length can be used along with address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_destination_wildcard_mask Ipv4AccessList#deny_destination_wildcard_mask}
  */
  readonly denyDestinationWildcardMask?: string;
  /**
  * Match packets with given DSCP value(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_dscp Ipv4AccessList#deny_dscp}
  */
  readonly denyDscp?: string;
  /**
  * Match only packets on a given DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_dscp_eq Ipv4AccessList#deny_dscp_eq}
  */
  readonly denyDscpEq?: string;
  /**
  * Match only packet with a greater DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_dscp_gt Ipv4AccessList#deny_dscp_gt}
  */
  readonly denyDscpGt?: string;
  /**
  * Match only packets with a lower DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_dscp_lt Ipv4AccessList#deny_dscp_lt}
  */
  readonly denyDscpLt?: string;
  /**
  * Match only packets not on a given DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_dscp_neq Ipv4AccessList#deny_dscp_neq}
  */
  readonly denyDscpNeq?: string;
  /**
  * DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_dscp_range_end Ipv4AccessList#deny_dscp_range_end}
  */
  readonly denyDscpRangeEnd?: string;
  /**
  * DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_dscp_range_start Ipv4AccessList#deny_dscp_range_start}
  */
  readonly denyDscpRangeStart?: string;
  /**
  * Match only packets with exact protocol numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_eq Ipv4AccessList#deny_eq}
  */
  readonly denyEq?: string;
  /**
  * Match only packets with a given value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_fragment_offset_eq Ipv4AccessList#deny_fragment_offset_eq}
  */
  readonly denyFragmentOffsetEq?: number;
  /**
  * Match only packet with a greater value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_fragment_offset_gt Ipv4AccessList#deny_fragment_offset_gt}
  */
  readonly denyFragmentOffsetGt?: number;
  /**
  * Match only packets with a lower value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_fragment_offset_lt Ipv4AccessList#deny_fragment_offset_lt}
  */
  readonly denyFragmentOffsetLt?: number;
  /**
  * Match only packets not on a given value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_fragment_offset_neq Ipv4AccessList#deny_fragment_offset_neq}
  */
  readonly denyFragmentOffsetNeq?: number;
  /**
  * fragment-offset value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_fragment_offset_range_end Ipv4AccessList#deny_fragment_offset_range_end}
  */
  readonly denyFragmentOffsetRangeEnd?: number;
  /**
  * fragment-offset value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_fragment_offset_range_start Ipv4AccessList#deny_fragment_offset_range_start}
  */
  readonly denyFragmentOffsetRangeStart?: number;
  /**
  * Fragment type for a packet
  *   - Choices: `dont-fragment`, `dont-fragment first-fragment`, `dont-fragment is-fragment`, `dont-fragment last-fragment`, `first-fragment`, `is-fragment`, `last-fragment`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_fragment_type Ipv4AccessList#deny_fragment_type}
  */
  readonly denyFragmentType?: string;
  /**
  * Check non-initial fragments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_fragments Ipv4AccessList#deny_fragments}
  */
  readonly denyFragments?: boolean | cdktf.IResolvable;
  /**
  * ICMP message code
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_icmp_message_code Ipv4AccessList#deny_icmp_message_code}
  */
  readonly denyIcmpMessageCode?: number;
  /**
  * ICMP message type
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_icmp_message_type Ipv4AccessList#deny_icmp_message_type}
  */
  readonly denyIcmpMessageType?: number;
  /**
  * ICMP message type
  *   - Choices: `AdministrativelyProhibited`, `AlternateAddress`, `ConversionError`, `DODHostProhibited`, `DODNetProhibited`, `Echo`, `EchoReply`, `GeneralParameterProblem`, `HostIsolated`, `HostPrecedenceUnreachable`, `HostRedirect`, `HostTOSRedirect`, `HostTOSUnreachable`, `HostUnknown`, `HostUnreachable`, `InformationReply`, `InformationRequest`, `MaskReply`, `MaskRequest`, `MobileRedirect`, `NetTOSRedirect`, `NetTOSUnreachable`, `NetworkRedirect`, `NetworkUnknown`, `NetworkUnreachable`, `NoRoomForOption`, `OptionMissing`, `PacketTooBig`, `ParameterProblem`, `PortUnreachable`, `PrecedenceUnreachable`, `ProtocolUnreachable`, `ReassemblyTimeout`, `Redirect`, `RouterAdvertisement`, `RouterSolicitation`, `SourceQuench`, `SourceRouteFailed`, `TTLExceeded`, `TimeExceeded`, `TimestampReply`, `TimestampRequest`, `Traceroute`, `Unreachable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_icmp_message_type_name Ipv4AccessList#deny_icmp_message_type_name}
  */
  readonly denyIcmpMessageTypeName?: string;
  /**
  * Do not generate the ICMP message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_icmp_off Ipv4AccessList#deny_icmp_off}
  */
  readonly denyIcmpOff?: boolean | cdktf.IResolvable;
  /**
  * Generate the ICMP message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_icmp_on Ipv4AccessList#deny_icmp_on}
  */
  readonly denyIcmpOn?: boolean | cdktf.IResolvable;
  /**
  * Match on IGMP message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_igmp_type Ipv4AccessList#deny_igmp_type}
  */
  readonly denyIgmpType?: string;
  /**
  * Log matches against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_log Ipv4AccessList#deny_log}
  */
  readonly denyLog?: boolean | cdktf.IResolvable;
  /**
  * Log matches against this entry, including input interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_log_input Ipv4AccessList#deny_log_input}
  */
  readonly denyLogInput?: boolean | cdktf.IResolvable;
  /**
  * nexthop1 ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop1_ipv4 Ipv4AccessList#deny_nexthop1_ipv4}
  */
  readonly denyNexthop1Ipv4?: string;
  /**
  * specific TRACK Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop1_track Ipv4AccessList#deny_nexthop1_track}
  */
  readonly denyNexthop1Track?: string;
  /**
  * Specific VRF Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop1_vrf Ipv4AccessList#deny_nexthop1_vrf}
  */
  readonly denyNexthop1Vrf?: string;
  /**
  * nexthop2 ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop2_ipv4 Ipv4AccessList#deny_nexthop2_ipv4}
  */
  readonly denyNexthop2Ipv4?: string;
  /**
  * Specific TRACK Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop2_track Ipv4AccessList#deny_nexthop2_track}
  */
  readonly denyNexthop2Track?: string;
  /**
  * Specific VRF Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop2_vrf Ipv4AccessList#deny_nexthop2_vrf}
  */
  readonly denyNexthop2Vrf?: string;
  /**
  * nexthop3 ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop3_ipv4 Ipv4AccessList#deny_nexthop3_ipv4}
  */
  readonly denyNexthop3Ipv4?: string;
  /**
  * Specific TRACK Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop3_track Ipv4AccessList#deny_nexthop3_track}
  */
  readonly denyNexthop3Track?: string;
  /**
  * Specific VRF Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_nexthop3_vrf Ipv4AccessList#deny_nexthop3_vrf}
  */
  readonly denyNexthop3Vrf?: string;
  /**
  * Match only packets with a given value
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_packet_length_eq Ipv4AccessList#deny_packet_length_eq}
  */
  readonly denyPacketLengthEq?: number;
  /**
  * Match only packet with a greater value
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_packet_length_gt Ipv4AccessList#deny_packet_length_gt}
  */
  readonly denyPacketLengthGt?: number;
  /**
  * Match only packets with a lower value
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_packet_length_lt Ipv4AccessList#deny_packet_length_lt}
  */
  readonly denyPacketLengthLt?: number;
  /**
  * Match only packets not on a given value
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_packet_length_neq Ipv4AccessList#deny_packet_length_neq}
  */
  readonly denyPacketLengthNeq?: number;
  /**
  * Packet length end
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_packet_length_range_end Ipv4AccessList#deny_packet_length_range_end}
  */
  readonly denyPacketLengthRangeEnd?: number;
  /**
  * Packet length start
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_packet_length_range_start Ipv4AccessList#deny_packet_length_range_start}
  */
  readonly denyPacketLengthRangeStart?: number;
  /**
  * Police peak-rate value on this entry
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_police_peak_rate Ipv4AccessList#deny_police_peak_rate}
  */
  readonly denyPolicePeakRate?: number;
  /**
  * Unit for peak-rate value. Currently only pps (packets per second) is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_police_peak_unit Ipv4AccessList#deny_police_peak_unit}
  */
  readonly denyPolicePeakUnit?: string;
  /**
  * Set Priority option on this entry
  *   - Choices: `critical`, `high`, `low`, `medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_police_priority Ipv4AccessList#deny_police_priority}
  */
  readonly denyPolicePriority?: string;
  /**
  * Unit for police value. Currently only pps (packets per second) is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_police_unit Ipv4AccessList#deny_police_unit}
  */
  readonly denyPoliceUnit?: string;
  /**
  * Police value
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_police_value Ipv4AccessList#deny_police_value}
  */
  readonly denyPoliceValue?: number;
  /**
  * Match packets with given precedence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_precedence Ipv4AccessList#deny_precedence}
  */
  readonly denyPrecedence?: string;
  /**
  * An IPv4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_protocol Ipv4AccessList#deny_protocol}
  */
  readonly denyProtocol?: string;
  /**
  * An IPv4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_range_end_protocol Ipv4AccessList#deny_range_end_protocol}
  */
  readonly denyRangeEndProtocol?: string;
  /**
  * An IPv4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_range_start_protocol Ipv4AccessList#deny_range_start_protocol}
  */
  readonly denyRangeStartProtocol?: string;
  /**
  * qos-group number
  *   - Range: `0`-`512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_set_qos_group Ipv4AccessList#deny_set_qos_group}
  */
  readonly denySetQosGroup?: number;
  /**
  * Set ttl value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_set_ttl Ipv4AccessList#deny_set_ttl}
  */
  readonly denySetTtl?: number;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_address Ipv4AccessList#deny_source_address}
  */
  readonly denySourceAddress?: string;
  /**
  * Any source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_any Ipv4AccessList#deny_source_any}
  */
  readonly denySourceAny?: boolean | cdktf.IResolvable;
  /**
  * A single source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_host Ipv4AccessList#deny_source_host}
  */
  readonly denySourceHost?: string;
  /**
  * IPv4 source network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_net_group Ipv4AccessList#deny_source_net_group}
  */
  readonly denySourceNetGroup?: string;
  /**
  * Match only packets on a given port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_port_eq Ipv4AccessList#deny_source_port_eq}
  */
  readonly denySourcePortEq?: string;
  /**
  * Source port object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_port_group Ipv4AccessList#deny_source_port_group}
  */
  readonly denySourcePortGroup?: string;
  /**
  * Match only packet with a greater port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_port_gt Ipv4AccessList#deny_source_port_gt}
  */
  readonly denySourcePortGt?: string;
  /**
  * Match only packets with a lower port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_port_lt Ipv4AccessList#deny_source_port_lt}
  */
  readonly denySourcePortLt?: string;
  /**
  * Match only packets not on a given port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_port_neq Ipv4AccessList#deny_source_port_neq}
  */
  readonly denySourcePortNeq?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_port_range_end Ipv4AccessList#deny_source_port_range_end}
  */
  readonly denySourcePortRangeEnd?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_port_range_start Ipv4AccessList#deny_source_port_range_start}
  */
  readonly denySourcePortRangeStart?: string;
  /**
  * Source IP address prefix length. Either wildcard-mask or prefix-length can be used along with address.
  *   - Range: `0`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_prefix_length Ipv4AccessList#deny_source_prefix_length}
  */
  readonly denySourcePrefixLength?: number;
  /**
  * Source IP address wildcard mask. Either wildcard-mask or prefix-length can be used along with address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_source_wildcard_mask Ipv4AccessList#deny_source_wildcard_mask}
  */
  readonly denySourceWildcardMask?: string;
  /**
  * Match only packets with a given value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_ttl_eq Ipv4AccessList#deny_ttl_eq}
  */
  readonly denyTtlEq?: number;
  /**
  * Match only packet with a greater value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_ttl_gt Ipv4AccessList#deny_ttl_gt}
  */
  readonly denyTtlGt?: number;
  /**
  * Match only packets with a lower value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_ttl_lt Ipv4AccessList#deny_ttl_lt}
  */
  readonly denyTtlLt?: number;
  /**
  * Match only packets not on a given value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_ttl_neq Ipv4AccessList#deny_ttl_neq}
  */
  readonly denyTtlNeq?: number;
  /**
  * ttl range higher value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_ttl_range_end Ipv4AccessList#deny_ttl_range_end}
  */
  readonly denyTtlRangeEnd?: number;
  /**
  * ttl range lower value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#deny_ttl_range_start Ipv4AccessList#deny_ttl_range_start}
  */
  readonly denyTtlRangeStart?: number;
  /**
  * Capture matched packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_capture Ipv4AccessList#permit_capture}
  */
  readonly permitCapture?: boolean | cdktf.IResolvable;
  /**
  * counter for this ACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_counter Ipv4AccessList#permit_counter}
  */
  readonly permitCounter?: string;
  /**
  * Use specified default nexthop on match against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_default Ipv4AccessList#permit_default}
  */
  readonly permitDefault?: boolean | cdktf.IResolvable;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_address Ipv4AccessList#permit_destination_address}
  */
  readonly permitDestinationAddress?: string;
  /**
  * Any destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_any Ipv4AccessList#permit_destination_any}
  */
  readonly permitDestinationAny?: boolean | cdktf.IResolvable;
  /**
  * A single destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_host Ipv4AccessList#permit_destination_host}
  */
  readonly permitDestinationHost?: string;
  /**
  * IPv4 destination network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_net_group Ipv4AccessList#permit_destination_net_group}
  */
  readonly permitDestinationNetGroup?: string;
  /**
  * Match only packets on a given port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_port_eq Ipv4AccessList#permit_destination_port_eq}
  */
  readonly permitDestinationPortEq?: string;
  /**
  * destination port object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_port_group Ipv4AccessList#permit_destination_port_group}
  */
  readonly permitDestinationPortGroup?: string;
  /**
  * Match only packet with a greater port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_port_gt Ipv4AccessList#permit_destination_port_gt}
  */
  readonly permitDestinationPortGt?: string;
  /**
  * Match only packets with a lower port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_port_lt Ipv4AccessList#permit_destination_port_lt}
  */
  readonly permitDestinationPortLt?: string;
  /**
  * Match only packets not on a given port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_port_neq Ipv4AccessList#permit_destination_port_neq}
  */
  readonly permitDestinationPortNeq?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_port_range_end Ipv4AccessList#permit_destination_port_range_end}
  */
  readonly permitDestinationPortRangeEnd?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_port_range_start Ipv4AccessList#permit_destination_port_range_start}
  */
  readonly permitDestinationPortRangeStart?: string;
  /**
  * Destination IP address prefix length. Either wildcard-mask or prefix-length can be used along with address.
  *   - Range: `0`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_prefix_length Ipv4AccessList#permit_destination_prefix_length}
  */
  readonly permitDestinationPrefixLength?: number;
  /**
  * Destination IP address wildcard mask. Either wildcard-mask or prefix-length can be used along with address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_destination_wildcard_mask Ipv4AccessList#permit_destination_wildcard_mask}
  */
  readonly permitDestinationWildcardMask?: string;
  /**
  * Match packets with given DSCP value(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_dscp Ipv4AccessList#permit_dscp}
  */
  readonly permitDscp?: string;
  /**
  * Match only packets on a given DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_dscp_eq Ipv4AccessList#permit_dscp_eq}
  */
  readonly permitDscpEq?: string;
  /**
  * Match only packet with a greater DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_dscp_gt Ipv4AccessList#permit_dscp_gt}
  */
  readonly permitDscpGt?: string;
  /**
  * Match only packets with a lower DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_dscp_lt Ipv4AccessList#permit_dscp_lt}
  */
  readonly permitDscpLt?: string;
  /**
  * Match only packets not on a given DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_dscp_neq Ipv4AccessList#permit_dscp_neq}
  */
  readonly permitDscpNeq?: string;
  /**
  * DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_dscp_range_end Ipv4AccessList#permit_dscp_range_end}
  */
  readonly permitDscpRangeEnd?: string;
  /**
  * DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_dscp_range_start Ipv4AccessList#permit_dscp_range_start}
  */
  readonly permitDscpRangeStart?: string;
  /**
  * Match only packets with exact protocol numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_eq Ipv4AccessList#permit_eq}
  */
  readonly permitEq?: string;
  /**
  * Match only packets with a given value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_fragment_offset_eq Ipv4AccessList#permit_fragment_offset_eq}
  */
  readonly permitFragmentOffsetEq?: number;
  /**
  * Match only packet with a greater value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_fragment_offset_gt Ipv4AccessList#permit_fragment_offset_gt}
  */
  readonly permitFragmentOffsetGt?: number;
  /**
  * Match only packets with a lower value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_fragment_offset_lt Ipv4AccessList#permit_fragment_offset_lt}
  */
  readonly permitFragmentOffsetLt?: number;
  /**
  * Match only packets not on a given value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_fragment_offset_neq Ipv4AccessList#permit_fragment_offset_neq}
  */
  readonly permitFragmentOffsetNeq?: number;
  /**
  * fragment-offset value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_fragment_offset_range_end Ipv4AccessList#permit_fragment_offset_range_end}
  */
  readonly permitFragmentOffsetRangeEnd?: number;
  /**
  * fragment-offset value
  *   - Range: `0`-`8191`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_fragment_offset_range_start Ipv4AccessList#permit_fragment_offset_range_start}
  */
  readonly permitFragmentOffsetRangeStart?: number;
  /**
  * Fragment type for a packet
  *   - Choices: `dont-fragment`, `dont-fragment first-fragment`, `dont-fragment is-fragment`, `dont-fragment last-fragment`, `first-fragment`, `is-fragment`, `last-fragment`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_fragment_type Ipv4AccessList#permit_fragment_type}
  */
  readonly permitFragmentType?: string;
  /**
  * Check non-initial fragments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_fragments Ipv4AccessList#permit_fragments}
  */
  readonly permitFragments?: boolean | cdktf.IResolvable;
  /**
  * ICMP message code
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_icmp_message_code Ipv4AccessList#permit_icmp_message_code}
  */
  readonly permitIcmpMessageCode?: number;
  /**
  * ICMP message type
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_icmp_message_type Ipv4AccessList#permit_icmp_message_type}
  */
  readonly permitIcmpMessageType?: number;
  /**
  * ICMP message type
  *   - Choices: `AdministrativelyProhibited`, `AlternateAddress`, `ConversionError`, `DODHostProhibited`, `DODNetProhibited`, `Echo`, `EchoReply`, `GeneralParameterProblem`, `HostIsolated`, `HostPrecedenceUnreachable`, `HostRedirect`, `HostTOSRedirect`, `HostTOSUnreachable`, `HostUnknown`, `HostUnreachable`, `InformationReply`, `InformationRequest`, `MaskReply`, `MaskRequest`, `MobileRedirect`, `NetTOSRedirect`, `NetTOSUnreachable`, `NetworkRedirect`, `NetworkUnknown`, `NetworkUnreachable`, `NoRoomForOption`, `OptionMissing`, `PacketTooBig`, `ParameterProblem`, `PortUnreachable`, `PrecedenceUnreachable`, `ProtocolUnreachable`, `ReassemblyTimeout`, `Redirect`, `RouterAdvertisement`, `RouterSolicitation`, `SourceQuench`, `SourceRouteFailed`, `TTLExceeded`, `TimeExceeded`, `TimestampReply`, `TimestampRequest`, `Traceroute`, `Unreachable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_icmp_message_type_name Ipv4AccessList#permit_icmp_message_type_name}
  */
  readonly permitIcmpMessageTypeName?: string;
  /**
  * Match on IGMP message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_igmp_type Ipv4AccessList#permit_igmp_type}
  */
  readonly permitIgmpType?: string;
  /**
  * Log matches against this entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_log Ipv4AccessList#permit_log}
  */
  readonly permitLog?: boolean | cdktf.IResolvable;
  /**
  * Log matches against this entry, including input interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_log_input Ipv4AccessList#permit_log_input}
  */
  readonly permitLogInput?: boolean | cdktf.IResolvable;
  /**
  * nexthop1 ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop1_ipv4 Ipv4AccessList#permit_nexthop1_ipv4}
  */
  readonly permitNexthop1Ipv4?: string;
  /**
  * specific TRACK Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop1_track Ipv4AccessList#permit_nexthop1_track}
  */
  readonly permitNexthop1Track?: string;
  /**
  * Specific VRF Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop1_vrf Ipv4AccessList#permit_nexthop1_vrf}
  */
  readonly permitNexthop1Vrf?: string;
  /**
  * nexthop2 ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop2_ipv4 Ipv4AccessList#permit_nexthop2_ipv4}
  */
  readonly permitNexthop2Ipv4?: string;
  /**
  * Specific TRACK Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop2_track Ipv4AccessList#permit_nexthop2_track}
  */
  readonly permitNexthop2Track?: string;
  /**
  * Specific VRF Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop2_vrf Ipv4AccessList#permit_nexthop2_vrf}
  */
  readonly permitNexthop2Vrf?: string;
  /**
  * nexthop3 ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop3_ipv4 Ipv4AccessList#permit_nexthop3_ipv4}
  */
  readonly permitNexthop3Ipv4?: string;
  /**
  * Specific TRACK Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop3_track Ipv4AccessList#permit_nexthop3_track}
  */
  readonly permitNexthop3Track?: string;
  /**
  * Specific VRF Name for this nexthop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_nexthop3_vrf Ipv4AccessList#permit_nexthop3_vrf}
  */
  readonly permitNexthop3Vrf?: string;
  /**
  * Match only packets with a given value
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_packet_length_eq Ipv4AccessList#permit_packet_length_eq}
  */
  readonly permitPacketLengthEq?: number;
  /**
  * Match only packet with a greater value
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_packet_length_gt Ipv4AccessList#permit_packet_length_gt}
  */
  readonly permitPacketLengthGt?: number;
  /**
  * Match only packets with a lower value
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_packet_length_lt Ipv4AccessList#permit_packet_length_lt}
  */
  readonly permitPacketLengthLt?: number;
  /**
  * Match only packets not on a given value
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_packet_length_neq Ipv4AccessList#permit_packet_length_neq}
  */
  readonly permitPacketLengthNeq?: number;
  /**
  * Packet length end
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_packet_length_range_end Ipv4AccessList#permit_packet_length_range_end}
  */
  readonly permitPacketLengthRangeEnd?: number;
  /**
  * Packet length start
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_packet_length_range_start Ipv4AccessList#permit_packet_length_range_start}
  */
  readonly permitPacketLengthRangeStart?: number;
  /**
  * Police peak-rate value on this entry
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_police_peak_rate Ipv4AccessList#permit_police_peak_rate}
  */
  readonly permitPolicePeakRate?: number;
  /**
  * Unit for peak-rate value. Currently only pps (packets per second) is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_police_peak_unit Ipv4AccessList#permit_police_peak_unit}
  */
  readonly permitPolicePeakUnit?: string;
  /**
  * Set Priority option on this entry
  *   - Choices: `critical`, `high`, `low`, `medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_police_priority Ipv4AccessList#permit_police_priority}
  */
  readonly permitPolicePriority?: string;
  /**
  * Unit for police value. Currently only pps (packets per second) is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_police_unit Ipv4AccessList#permit_police_unit}
  */
  readonly permitPoliceUnit?: string;
  /**
  * Police value
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_police_value Ipv4AccessList#permit_police_value}
  */
  readonly permitPoliceValue?: number;
  /**
  * Match packets with given precedence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_precedence Ipv4AccessList#permit_precedence}
  */
  readonly permitPrecedence?: string;
  /**
  * An IPv4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_protocol Ipv4AccessList#permit_protocol}
  */
  readonly permitProtocol?: string;
  /**
  * An IPv4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_range_end_protocol Ipv4AccessList#permit_range_end_protocol}
  */
  readonly permitRangeEndProtocol?: string;
  /**
  * An IPv4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_range_start_protocol Ipv4AccessList#permit_range_start_protocol}
  */
  readonly permitRangeStartProtocol?: string;
  /**
  * qos-group number
  *   - Range: `0`-`512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_set_qos_group Ipv4AccessList#permit_set_qos_group}
  */
  readonly permitSetQosGroup?: number;
  /**
  * Set ttl value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_set_ttl Ipv4AccessList#permit_set_ttl}
  */
  readonly permitSetTtl?: number;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_address Ipv4AccessList#permit_source_address}
  */
  readonly permitSourceAddress?: string;
  /**
  * Any source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_any Ipv4AccessList#permit_source_any}
  */
  readonly permitSourceAny?: boolean | cdktf.IResolvable;
  /**
  * A single source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_host Ipv4AccessList#permit_source_host}
  */
  readonly permitSourceHost?: string;
  /**
  * IPv4 source network object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_net_group Ipv4AccessList#permit_source_net_group}
  */
  readonly permitSourceNetGroup?: string;
  /**
  * Match only packets on a given port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_port_eq Ipv4AccessList#permit_source_port_eq}
  */
  readonly permitSourcePortEq?: string;
  /**
  * Source port object group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_port_group Ipv4AccessList#permit_source_port_group}
  */
  readonly permitSourcePortGroup?: string;
  /**
  * Match only packet with a greater port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_port_gt Ipv4AccessList#permit_source_port_gt}
  */
  readonly permitSourcePortGt?: string;
  /**
  * Match only packets with a lower port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_port_lt Ipv4AccessList#permit_source_port_lt}
  */
  readonly permitSourcePortLt?: string;
  /**
  * Match only packets not on a given port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_port_neq Ipv4AccessList#permit_source_port_neq}
  */
  readonly permitSourcePortNeq?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_port_range_end Ipv4AccessList#permit_source_port_range_end}
  */
  readonly permitSourcePortRangeEnd?: string;
  /**
  * Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_port_range_start Ipv4AccessList#permit_source_port_range_start}
  */
  readonly permitSourcePortRangeStart?: string;
  /**
  * Source IP address prefix length. Either wildcard-mask or prefix-length can be used along with address.
  *   - Range: `0`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_prefix_length Ipv4AccessList#permit_source_prefix_length}
  */
  readonly permitSourcePrefixLength?: number;
  /**
  * Source IP address wildcard mask. Either wildcard-mask or prefix-length can be used along with address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_source_wildcard_mask Ipv4AccessList#permit_source_wildcard_mask}
  */
  readonly permitSourceWildcardMask?: string;
  /**
  * Match only packets with a given value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_ttl_eq Ipv4AccessList#permit_ttl_eq}
  */
  readonly permitTtlEq?: number;
  /**
  * Match only packet with a greater value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_ttl_gt Ipv4AccessList#permit_ttl_gt}
  */
  readonly permitTtlGt?: number;
  /**
  * Match only packets with a lower value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_ttl_lt Ipv4AccessList#permit_ttl_lt}
  */
  readonly permitTtlLt?: number;
  /**
  * Match only packets not on a given value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_ttl_neq Ipv4AccessList#permit_ttl_neq}
  */
  readonly permitTtlNeq?: number;
  /**
  * ttl range higher value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_ttl_range_end Ipv4AccessList#permit_ttl_range_end}
  */
  readonly permitTtlRangeEnd?: number;
  /**
  * ttl range lower value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#permit_ttl_range_start Ipv4AccessList#permit_ttl_range_start}
  */
  readonly permitTtlRangeStart?: number;
  /**
  * Comment for access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#remark Ipv4AccessList#remark}
  */
  readonly remark?: string;
  /**
  * Sequence number for this entry
  *   - Range: `1`-`2147483643`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#sequence_number Ipv4AccessList#sequence_number}
  */
  readonly sequenceNumber: number;
}

export function ipv4AccessListSequencesToTerraform(struct?: Ipv4AccessListSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_capture: cdktf.booleanToTerraform(struct!.denyCapture),
    deny_counter: cdktf.stringToTerraform(struct!.denyCounter),
    deny_default: cdktf.booleanToTerraform(struct!.denyDefault),
    deny_destination_address: cdktf.stringToTerraform(struct!.denyDestinationAddress),
    deny_destination_any: cdktf.booleanToTerraform(struct!.denyDestinationAny),
    deny_destination_host: cdktf.stringToTerraform(struct!.denyDestinationHost),
    deny_destination_net_group: cdktf.stringToTerraform(struct!.denyDestinationNetGroup),
    deny_destination_port_eq: cdktf.stringToTerraform(struct!.denyDestinationPortEq),
    deny_destination_port_group: cdktf.stringToTerraform(struct!.denyDestinationPortGroup),
    deny_destination_port_gt: cdktf.stringToTerraform(struct!.denyDestinationPortGt),
    deny_destination_port_lt: cdktf.stringToTerraform(struct!.denyDestinationPortLt),
    deny_destination_port_neq: cdktf.stringToTerraform(struct!.denyDestinationPortNeq),
    deny_destination_port_range_end: cdktf.stringToTerraform(struct!.denyDestinationPortRangeEnd),
    deny_destination_port_range_start: cdktf.stringToTerraform(struct!.denyDestinationPortRangeStart),
    deny_destination_prefix_length: cdktf.numberToTerraform(struct!.denyDestinationPrefixLength),
    deny_destination_wildcard_mask: cdktf.stringToTerraform(struct!.denyDestinationWildcardMask),
    deny_dscp: cdktf.stringToTerraform(struct!.denyDscp),
    deny_dscp_eq: cdktf.stringToTerraform(struct!.denyDscpEq),
    deny_dscp_gt: cdktf.stringToTerraform(struct!.denyDscpGt),
    deny_dscp_lt: cdktf.stringToTerraform(struct!.denyDscpLt),
    deny_dscp_neq: cdktf.stringToTerraform(struct!.denyDscpNeq),
    deny_dscp_range_end: cdktf.stringToTerraform(struct!.denyDscpRangeEnd),
    deny_dscp_range_start: cdktf.stringToTerraform(struct!.denyDscpRangeStart),
    deny_eq: cdktf.stringToTerraform(struct!.denyEq),
    deny_fragment_offset_eq: cdktf.numberToTerraform(struct!.denyFragmentOffsetEq),
    deny_fragment_offset_gt: cdktf.numberToTerraform(struct!.denyFragmentOffsetGt),
    deny_fragment_offset_lt: cdktf.numberToTerraform(struct!.denyFragmentOffsetLt),
    deny_fragment_offset_neq: cdktf.numberToTerraform(struct!.denyFragmentOffsetNeq),
    deny_fragment_offset_range_end: cdktf.numberToTerraform(struct!.denyFragmentOffsetRangeEnd),
    deny_fragment_offset_range_start: cdktf.numberToTerraform(struct!.denyFragmentOffsetRangeStart),
    deny_fragment_type: cdktf.stringToTerraform(struct!.denyFragmentType),
    deny_fragments: cdktf.booleanToTerraform(struct!.denyFragments),
    deny_icmp_message_code: cdktf.numberToTerraform(struct!.denyIcmpMessageCode),
    deny_icmp_message_type: cdktf.numberToTerraform(struct!.denyIcmpMessageType),
    deny_icmp_message_type_name: cdktf.stringToTerraform(struct!.denyIcmpMessageTypeName),
    deny_icmp_off: cdktf.booleanToTerraform(struct!.denyIcmpOff),
    deny_icmp_on: cdktf.booleanToTerraform(struct!.denyIcmpOn),
    deny_igmp_type: cdktf.stringToTerraform(struct!.denyIgmpType),
    deny_log: cdktf.booleanToTerraform(struct!.denyLog),
    deny_log_input: cdktf.booleanToTerraform(struct!.denyLogInput),
    deny_nexthop1_ipv4: cdktf.stringToTerraform(struct!.denyNexthop1Ipv4),
    deny_nexthop1_track: cdktf.stringToTerraform(struct!.denyNexthop1Track),
    deny_nexthop1_vrf: cdktf.stringToTerraform(struct!.denyNexthop1Vrf),
    deny_nexthop2_ipv4: cdktf.stringToTerraform(struct!.denyNexthop2Ipv4),
    deny_nexthop2_track: cdktf.stringToTerraform(struct!.denyNexthop2Track),
    deny_nexthop2_vrf: cdktf.stringToTerraform(struct!.denyNexthop2Vrf),
    deny_nexthop3_ipv4: cdktf.stringToTerraform(struct!.denyNexthop3Ipv4),
    deny_nexthop3_track: cdktf.stringToTerraform(struct!.denyNexthop3Track),
    deny_nexthop3_vrf: cdktf.stringToTerraform(struct!.denyNexthop3Vrf),
    deny_packet_length_eq: cdktf.numberToTerraform(struct!.denyPacketLengthEq),
    deny_packet_length_gt: cdktf.numberToTerraform(struct!.denyPacketLengthGt),
    deny_packet_length_lt: cdktf.numberToTerraform(struct!.denyPacketLengthLt),
    deny_packet_length_neq: cdktf.numberToTerraform(struct!.denyPacketLengthNeq),
    deny_packet_length_range_end: cdktf.numberToTerraform(struct!.denyPacketLengthRangeEnd),
    deny_packet_length_range_start: cdktf.numberToTerraform(struct!.denyPacketLengthRangeStart),
    deny_police_peak_rate: cdktf.numberToTerraform(struct!.denyPolicePeakRate),
    deny_police_peak_unit: cdktf.stringToTerraform(struct!.denyPolicePeakUnit),
    deny_police_priority: cdktf.stringToTerraform(struct!.denyPolicePriority),
    deny_police_unit: cdktf.stringToTerraform(struct!.denyPoliceUnit),
    deny_police_value: cdktf.numberToTerraform(struct!.denyPoliceValue),
    deny_precedence: cdktf.stringToTerraform(struct!.denyPrecedence),
    deny_protocol: cdktf.stringToTerraform(struct!.denyProtocol),
    deny_range_end_protocol: cdktf.stringToTerraform(struct!.denyRangeEndProtocol),
    deny_range_start_protocol: cdktf.stringToTerraform(struct!.denyRangeStartProtocol),
    deny_set_qos_group: cdktf.numberToTerraform(struct!.denySetQosGroup),
    deny_set_ttl: cdktf.numberToTerraform(struct!.denySetTtl),
    deny_source_address: cdktf.stringToTerraform(struct!.denySourceAddress),
    deny_source_any: cdktf.booleanToTerraform(struct!.denySourceAny),
    deny_source_host: cdktf.stringToTerraform(struct!.denySourceHost),
    deny_source_net_group: cdktf.stringToTerraform(struct!.denySourceNetGroup),
    deny_source_port_eq: cdktf.stringToTerraform(struct!.denySourcePortEq),
    deny_source_port_group: cdktf.stringToTerraform(struct!.denySourcePortGroup),
    deny_source_port_gt: cdktf.stringToTerraform(struct!.denySourcePortGt),
    deny_source_port_lt: cdktf.stringToTerraform(struct!.denySourcePortLt),
    deny_source_port_neq: cdktf.stringToTerraform(struct!.denySourcePortNeq),
    deny_source_port_range_end: cdktf.stringToTerraform(struct!.denySourcePortRangeEnd),
    deny_source_port_range_start: cdktf.stringToTerraform(struct!.denySourcePortRangeStart),
    deny_source_prefix_length: cdktf.numberToTerraform(struct!.denySourcePrefixLength),
    deny_source_wildcard_mask: cdktf.stringToTerraform(struct!.denySourceWildcardMask),
    deny_ttl_eq: cdktf.numberToTerraform(struct!.denyTtlEq),
    deny_ttl_gt: cdktf.numberToTerraform(struct!.denyTtlGt),
    deny_ttl_lt: cdktf.numberToTerraform(struct!.denyTtlLt),
    deny_ttl_neq: cdktf.numberToTerraform(struct!.denyTtlNeq),
    deny_ttl_range_end: cdktf.numberToTerraform(struct!.denyTtlRangeEnd),
    deny_ttl_range_start: cdktf.numberToTerraform(struct!.denyTtlRangeStart),
    permit_capture: cdktf.booleanToTerraform(struct!.permitCapture),
    permit_counter: cdktf.stringToTerraform(struct!.permitCounter),
    permit_default: cdktf.booleanToTerraform(struct!.permitDefault),
    permit_destination_address: cdktf.stringToTerraform(struct!.permitDestinationAddress),
    permit_destination_any: cdktf.booleanToTerraform(struct!.permitDestinationAny),
    permit_destination_host: cdktf.stringToTerraform(struct!.permitDestinationHost),
    permit_destination_net_group: cdktf.stringToTerraform(struct!.permitDestinationNetGroup),
    permit_destination_port_eq: cdktf.stringToTerraform(struct!.permitDestinationPortEq),
    permit_destination_port_group: cdktf.stringToTerraform(struct!.permitDestinationPortGroup),
    permit_destination_port_gt: cdktf.stringToTerraform(struct!.permitDestinationPortGt),
    permit_destination_port_lt: cdktf.stringToTerraform(struct!.permitDestinationPortLt),
    permit_destination_port_neq: cdktf.stringToTerraform(struct!.permitDestinationPortNeq),
    permit_destination_port_range_end: cdktf.stringToTerraform(struct!.permitDestinationPortRangeEnd),
    permit_destination_port_range_start: cdktf.stringToTerraform(struct!.permitDestinationPortRangeStart),
    permit_destination_prefix_length: cdktf.numberToTerraform(struct!.permitDestinationPrefixLength),
    permit_destination_wildcard_mask: cdktf.stringToTerraform(struct!.permitDestinationWildcardMask),
    permit_dscp: cdktf.stringToTerraform(struct!.permitDscp),
    permit_dscp_eq: cdktf.stringToTerraform(struct!.permitDscpEq),
    permit_dscp_gt: cdktf.stringToTerraform(struct!.permitDscpGt),
    permit_dscp_lt: cdktf.stringToTerraform(struct!.permitDscpLt),
    permit_dscp_neq: cdktf.stringToTerraform(struct!.permitDscpNeq),
    permit_dscp_range_end: cdktf.stringToTerraform(struct!.permitDscpRangeEnd),
    permit_dscp_range_start: cdktf.stringToTerraform(struct!.permitDscpRangeStart),
    permit_eq: cdktf.stringToTerraform(struct!.permitEq),
    permit_fragment_offset_eq: cdktf.numberToTerraform(struct!.permitFragmentOffsetEq),
    permit_fragment_offset_gt: cdktf.numberToTerraform(struct!.permitFragmentOffsetGt),
    permit_fragment_offset_lt: cdktf.numberToTerraform(struct!.permitFragmentOffsetLt),
    permit_fragment_offset_neq: cdktf.numberToTerraform(struct!.permitFragmentOffsetNeq),
    permit_fragment_offset_range_end: cdktf.numberToTerraform(struct!.permitFragmentOffsetRangeEnd),
    permit_fragment_offset_range_start: cdktf.numberToTerraform(struct!.permitFragmentOffsetRangeStart),
    permit_fragment_type: cdktf.stringToTerraform(struct!.permitFragmentType),
    permit_fragments: cdktf.booleanToTerraform(struct!.permitFragments),
    permit_icmp_message_code: cdktf.numberToTerraform(struct!.permitIcmpMessageCode),
    permit_icmp_message_type: cdktf.numberToTerraform(struct!.permitIcmpMessageType),
    permit_icmp_message_type_name: cdktf.stringToTerraform(struct!.permitIcmpMessageTypeName),
    permit_igmp_type: cdktf.stringToTerraform(struct!.permitIgmpType),
    permit_log: cdktf.booleanToTerraform(struct!.permitLog),
    permit_log_input: cdktf.booleanToTerraform(struct!.permitLogInput),
    permit_nexthop1_ipv4: cdktf.stringToTerraform(struct!.permitNexthop1Ipv4),
    permit_nexthop1_track: cdktf.stringToTerraform(struct!.permitNexthop1Track),
    permit_nexthop1_vrf: cdktf.stringToTerraform(struct!.permitNexthop1Vrf),
    permit_nexthop2_ipv4: cdktf.stringToTerraform(struct!.permitNexthop2Ipv4),
    permit_nexthop2_track: cdktf.stringToTerraform(struct!.permitNexthop2Track),
    permit_nexthop2_vrf: cdktf.stringToTerraform(struct!.permitNexthop2Vrf),
    permit_nexthop3_ipv4: cdktf.stringToTerraform(struct!.permitNexthop3Ipv4),
    permit_nexthop3_track: cdktf.stringToTerraform(struct!.permitNexthop3Track),
    permit_nexthop3_vrf: cdktf.stringToTerraform(struct!.permitNexthop3Vrf),
    permit_packet_length_eq: cdktf.numberToTerraform(struct!.permitPacketLengthEq),
    permit_packet_length_gt: cdktf.numberToTerraform(struct!.permitPacketLengthGt),
    permit_packet_length_lt: cdktf.numberToTerraform(struct!.permitPacketLengthLt),
    permit_packet_length_neq: cdktf.numberToTerraform(struct!.permitPacketLengthNeq),
    permit_packet_length_range_end: cdktf.numberToTerraform(struct!.permitPacketLengthRangeEnd),
    permit_packet_length_range_start: cdktf.numberToTerraform(struct!.permitPacketLengthRangeStart),
    permit_police_peak_rate: cdktf.numberToTerraform(struct!.permitPolicePeakRate),
    permit_police_peak_unit: cdktf.stringToTerraform(struct!.permitPolicePeakUnit),
    permit_police_priority: cdktf.stringToTerraform(struct!.permitPolicePriority),
    permit_police_unit: cdktf.stringToTerraform(struct!.permitPoliceUnit),
    permit_police_value: cdktf.numberToTerraform(struct!.permitPoliceValue),
    permit_precedence: cdktf.stringToTerraform(struct!.permitPrecedence),
    permit_protocol: cdktf.stringToTerraform(struct!.permitProtocol),
    permit_range_end_protocol: cdktf.stringToTerraform(struct!.permitRangeEndProtocol),
    permit_range_start_protocol: cdktf.stringToTerraform(struct!.permitRangeStartProtocol),
    permit_set_qos_group: cdktf.numberToTerraform(struct!.permitSetQosGroup),
    permit_set_ttl: cdktf.numberToTerraform(struct!.permitSetTtl),
    permit_source_address: cdktf.stringToTerraform(struct!.permitSourceAddress),
    permit_source_any: cdktf.booleanToTerraform(struct!.permitSourceAny),
    permit_source_host: cdktf.stringToTerraform(struct!.permitSourceHost),
    permit_source_net_group: cdktf.stringToTerraform(struct!.permitSourceNetGroup),
    permit_source_port_eq: cdktf.stringToTerraform(struct!.permitSourcePortEq),
    permit_source_port_group: cdktf.stringToTerraform(struct!.permitSourcePortGroup),
    permit_source_port_gt: cdktf.stringToTerraform(struct!.permitSourcePortGt),
    permit_source_port_lt: cdktf.stringToTerraform(struct!.permitSourcePortLt),
    permit_source_port_neq: cdktf.stringToTerraform(struct!.permitSourcePortNeq),
    permit_source_port_range_end: cdktf.stringToTerraform(struct!.permitSourcePortRangeEnd),
    permit_source_port_range_start: cdktf.stringToTerraform(struct!.permitSourcePortRangeStart),
    permit_source_prefix_length: cdktf.numberToTerraform(struct!.permitSourcePrefixLength),
    permit_source_wildcard_mask: cdktf.stringToTerraform(struct!.permitSourceWildcardMask),
    permit_ttl_eq: cdktf.numberToTerraform(struct!.permitTtlEq),
    permit_ttl_gt: cdktf.numberToTerraform(struct!.permitTtlGt),
    permit_ttl_lt: cdktf.numberToTerraform(struct!.permitTtlLt),
    permit_ttl_neq: cdktf.numberToTerraform(struct!.permitTtlNeq),
    permit_ttl_range_end: cdktf.numberToTerraform(struct!.permitTtlRangeEnd),
    permit_ttl_range_start: cdktf.numberToTerraform(struct!.permitTtlRangeStart),
    remark: cdktf.stringToTerraform(struct!.remark),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
  }
}


export function ipv4AccessListSequencesToHclTerraform(struct?: Ipv4AccessListSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_capture: {
      value: cdktf.booleanToHclTerraform(struct!.denyCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_counter: {
      value: cdktf.stringToHclTerraform(struct!.denyCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_default: {
      value: cdktf.booleanToHclTerraform(struct!.denyDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_destination_address: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_any: {
      value: cdktf.booleanToHclTerraform(struct!.denyDestinationAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_destination_host: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_net_group: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationNetGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_port_eq: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationPortEq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_port_group: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationPortGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_port_gt: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationPortGt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_port_lt: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationPortLt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_port_neq: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationPortNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_port_range_end: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_port_range_start: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationPortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_destination_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.denyDestinationPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_destination_wildcard_mask: {
      value: cdktf.stringToHclTerraform(struct!.denyDestinationWildcardMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_dscp: {
      value: cdktf.stringToHclTerraform(struct!.denyDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_dscp_eq: {
      value: cdktf.stringToHclTerraform(struct!.denyDscpEq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_dscp_gt: {
      value: cdktf.stringToHclTerraform(struct!.denyDscpGt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_dscp_lt: {
      value: cdktf.stringToHclTerraform(struct!.denyDscpLt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_dscp_neq: {
      value: cdktf.stringToHclTerraform(struct!.denyDscpNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_dscp_range_end: {
      value: cdktf.stringToHclTerraform(struct!.denyDscpRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_dscp_range_start: {
      value: cdktf.stringToHclTerraform(struct!.denyDscpRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_eq: {
      value: cdktf.stringToHclTerraform(struct!.denyEq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_fragment_offset_eq: {
      value: cdktf.numberToHclTerraform(struct!.denyFragmentOffsetEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_fragment_offset_gt: {
      value: cdktf.numberToHclTerraform(struct!.denyFragmentOffsetGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_fragment_offset_lt: {
      value: cdktf.numberToHclTerraform(struct!.denyFragmentOffsetLt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_fragment_offset_neq: {
      value: cdktf.numberToHclTerraform(struct!.denyFragmentOffsetNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_fragment_offset_range_end: {
      value: cdktf.numberToHclTerraform(struct!.denyFragmentOffsetRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_fragment_offset_range_start: {
      value: cdktf.numberToHclTerraform(struct!.denyFragmentOffsetRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_fragment_type: {
      value: cdktf.stringToHclTerraform(struct!.denyFragmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_fragments: {
      value: cdktf.booleanToHclTerraform(struct!.denyFragments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_icmp_message_code: {
      value: cdktf.numberToHclTerraform(struct!.denyIcmpMessageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_icmp_message_type: {
      value: cdktf.numberToHclTerraform(struct!.denyIcmpMessageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_icmp_message_type_name: {
      value: cdktf.stringToHclTerraform(struct!.denyIcmpMessageTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_icmp_off: {
      value: cdktf.booleanToHclTerraform(struct!.denyIcmpOff),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_icmp_on: {
      value: cdktf.booleanToHclTerraform(struct!.denyIcmpOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_igmp_type: {
      value: cdktf.stringToHclTerraform(struct!.denyIgmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_log: {
      value: cdktf.booleanToHclTerraform(struct!.denyLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_log_input: {
      value: cdktf.booleanToHclTerraform(struct!.denyLogInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_nexthop1_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop1Ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_nexthop1_track: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop1Track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_nexthop1_vrf: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop1Vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_nexthop2_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop2Ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_nexthop2_track: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop2Track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_nexthop2_vrf: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop2Vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_nexthop3_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop3Ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_nexthop3_track: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop3Track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_nexthop3_vrf: {
      value: cdktf.stringToHclTerraform(struct!.denyNexthop3Vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_packet_length_eq: {
      value: cdktf.numberToHclTerraform(struct!.denyPacketLengthEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_packet_length_gt: {
      value: cdktf.numberToHclTerraform(struct!.denyPacketLengthGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_packet_length_lt: {
      value: cdktf.numberToHclTerraform(struct!.denyPacketLengthLt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_packet_length_neq: {
      value: cdktf.numberToHclTerraform(struct!.denyPacketLengthNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_packet_length_range_end: {
      value: cdktf.numberToHclTerraform(struct!.denyPacketLengthRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_packet_length_range_start: {
      value: cdktf.numberToHclTerraform(struct!.denyPacketLengthRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_police_peak_rate: {
      value: cdktf.numberToHclTerraform(struct!.denyPolicePeakRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_police_peak_unit: {
      value: cdktf.stringToHclTerraform(struct!.denyPolicePeakUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_police_priority: {
      value: cdktf.stringToHclTerraform(struct!.denyPolicePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_police_unit: {
      value: cdktf.stringToHclTerraform(struct!.denyPoliceUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_police_value: {
      value: cdktf.numberToHclTerraform(struct!.denyPoliceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_precedence: {
      value: cdktf.stringToHclTerraform(struct!.denyPrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_protocol: {
      value: cdktf.stringToHclTerraform(struct!.denyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_range_end_protocol: {
      value: cdktf.stringToHclTerraform(struct!.denyRangeEndProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_range_start_protocol: {
      value: cdktf.stringToHclTerraform(struct!.denyRangeStartProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_set_qos_group: {
      value: cdktf.numberToHclTerraform(struct!.denySetQosGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_set_ttl: {
      value: cdktf.numberToHclTerraform(struct!.denySetTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_source_address: {
      value: cdktf.stringToHclTerraform(struct!.denySourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_any: {
      value: cdktf.booleanToHclTerraform(struct!.denySourceAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_source_host: {
      value: cdktf.stringToHclTerraform(struct!.denySourceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_net_group: {
      value: cdktf.stringToHclTerraform(struct!.denySourceNetGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_port_eq: {
      value: cdktf.stringToHclTerraform(struct!.denySourcePortEq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_port_group: {
      value: cdktf.stringToHclTerraform(struct!.denySourcePortGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_port_gt: {
      value: cdktf.stringToHclTerraform(struct!.denySourcePortGt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_port_lt: {
      value: cdktf.stringToHclTerraform(struct!.denySourcePortLt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_port_neq: {
      value: cdktf.stringToHclTerraform(struct!.denySourcePortNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_port_range_end: {
      value: cdktf.stringToHclTerraform(struct!.denySourcePortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_port_range_start: {
      value: cdktf.stringToHclTerraform(struct!.denySourcePortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_source_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.denySourcePrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_source_wildcard_mask: {
      value: cdktf.stringToHclTerraform(struct!.denySourceWildcardMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_ttl_eq: {
      value: cdktf.numberToHclTerraform(struct!.denyTtlEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_ttl_gt: {
      value: cdktf.numberToHclTerraform(struct!.denyTtlGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_ttl_lt: {
      value: cdktf.numberToHclTerraform(struct!.denyTtlLt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_ttl_neq: {
      value: cdktf.numberToHclTerraform(struct!.denyTtlNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_ttl_range_end: {
      value: cdktf.numberToHclTerraform(struct!.denyTtlRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_ttl_range_start: {
      value: cdktf.numberToHclTerraform(struct!.denyTtlRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_capture: {
      value: cdktf.booleanToHclTerraform(struct!.permitCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_counter: {
      value: cdktf.stringToHclTerraform(struct!.permitCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_default: {
      value: cdktf.booleanToHclTerraform(struct!.permitDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_destination_address: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_any: {
      value: cdktf.booleanToHclTerraform(struct!.permitDestinationAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_destination_host: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_net_group: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationNetGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_port_eq: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationPortEq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_port_group: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationPortGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_port_gt: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationPortGt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_port_lt: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationPortLt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_port_neq: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationPortNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_port_range_end: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationPortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_port_range_start: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationPortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_destination_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.permitDestinationPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_destination_wildcard_mask: {
      value: cdktf.stringToHclTerraform(struct!.permitDestinationWildcardMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_dscp: {
      value: cdktf.stringToHclTerraform(struct!.permitDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_dscp_eq: {
      value: cdktf.stringToHclTerraform(struct!.permitDscpEq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_dscp_gt: {
      value: cdktf.stringToHclTerraform(struct!.permitDscpGt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_dscp_lt: {
      value: cdktf.stringToHclTerraform(struct!.permitDscpLt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_dscp_neq: {
      value: cdktf.stringToHclTerraform(struct!.permitDscpNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_dscp_range_end: {
      value: cdktf.stringToHclTerraform(struct!.permitDscpRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_dscp_range_start: {
      value: cdktf.stringToHclTerraform(struct!.permitDscpRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_eq: {
      value: cdktf.stringToHclTerraform(struct!.permitEq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_fragment_offset_eq: {
      value: cdktf.numberToHclTerraform(struct!.permitFragmentOffsetEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_fragment_offset_gt: {
      value: cdktf.numberToHclTerraform(struct!.permitFragmentOffsetGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_fragment_offset_lt: {
      value: cdktf.numberToHclTerraform(struct!.permitFragmentOffsetLt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_fragment_offset_neq: {
      value: cdktf.numberToHclTerraform(struct!.permitFragmentOffsetNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_fragment_offset_range_end: {
      value: cdktf.numberToHclTerraform(struct!.permitFragmentOffsetRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_fragment_offset_range_start: {
      value: cdktf.numberToHclTerraform(struct!.permitFragmentOffsetRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_fragment_type: {
      value: cdktf.stringToHclTerraform(struct!.permitFragmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_fragments: {
      value: cdktf.booleanToHclTerraform(struct!.permitFragments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_icmp_message_code: {
      value: cdktf.numberToHclTerraform(struct!.permitIcmpMessageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_icmp_message_type: {
      value: cdktf.numberToHclTerraform(struct!.permitIcmpMessageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_icmp_message_type_name: {
      value: cdktf.stringToHclTerraform(struct!.permitIcmpMessageTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_igmp_type: {
      value: cdktf.stringToHclTerraform(struct!.permitIgmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_log: {
      value: cdktf.booleanToHclTerraform(struct!.permitLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_log_input: {
      value: cdktf.booleanToHclTerraform(struct!.permitLogInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_nexthop1_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop1Ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_nexthop1_track: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop1Track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_nexthop1_vrf: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop1Vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_nexthop2_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop2Ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_nexthop2_track: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop2Track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_nexthop2_vrf: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop2Vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_nexthop3_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop3Ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_nexthop3_track: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop3Track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_nexthop3_vrf: {
      value: cdktf.stringToHclTerraform(struct!.permitNexthop3Vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_packet_length_eq: {
      value: cdktf.numberToHclTerraform(struct!.permitPacketLengthEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_packet_length_gt: {
      value: cdktf.numberToHclTerraform(struct!.permitPacketLengthGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_packet_length_lt: {
      value: cdktf.numberToHclTerraform(struct!.permitPacketLengthLt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_packet_length_neq: {
      value: cdktf.numberToHclTerraform(struct!.permitPacketLengthNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_packet_length_range_end: {
      value: cdktf.numberToHclTerraform(struct!.permitPacketLengthRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_packet_length_range_start: {
      value: cdktf.numberToHclTerraform(struct!.permitPacketLengthRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_police_peak_rate: {
      value: cdktf.numberToHclTerraform(struct!.permitPolicePeakRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_police_peak_unit: {
      value: cdktf.stringToHclTerraform(struct!.permitPolicePeakUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_police_priority: {
      value: cdktf.stringToHclTerraform(struct!.permitPolicePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_police_unit: {
      value: cdktf.stringToHclTerraform(struct!.permitPoliceUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_police_value: {
      value: cdktf.numberToHclTerraform(struct!.permitPoliceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_precedence: {
      value: cdktf.stringToHclTerraform(struct!.permitPrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_protocol: {
      value: cdktf.stringToHclTerraform(struct!.permitProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_range_end_protocol: {
      value: cdktf.stringToHclTerraform(struct!.permitRangeEndProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_range_start_protocol: {
      value: cdktf.stringToHclTerraform(struct!.permitRangeStartProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_set_qos_group: {
      value: cdktf.numberToHclTerraform(struct!.permitSetQosGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_set_ttl: {
      value: cdktf.numberToHclTerraform(struct!.permitSetTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_source_address: {
      value: cdktf.stringToHclTerraform(struct!.permitSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_any: {
      value: cdktf.booleanToHclTerraform(struct!.permitSourceAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permit_source_host: {
      value: cdktf.stringToHclTerraform(struct!.permitSourceHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_net_group: {
      value: cdktf.stringToHclTerraform(struct!.permitSourceNetGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_port_eq: {
      value: cdktf.stringToHclTerraform(struct!.permitSourcePortEq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_port_group: {
      value: cdktf.stringToHclTerraform(struct!.permitSourcePortGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_port_gt: {
      value: cdktf.stringToHclTerraform(struct!.permitSourcePortGt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_port_lt: {
      value: cdktf.stringToHclTerraform(struct!.permitSourcePortLt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_port_neq: {
      value: cdktf.stringToHclTerraform(struct!.permitSourcePortNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_port_range_end: {
      value: cdktf.stringToHclTerraform(struct!.permitSourcePortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_port_range_start: {
      value: cdktf.stringToHclTerraform(struct!.permitSourcePortRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_source_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.permitSourcePrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_source_wildcard_mask: {
      value: cdktf.stringToHclTerraform(struct!.permitSourceWildcardMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_ttl_eq: {
      value: cdktf.numberToHclTerraform(struct!.permitTtlEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_ttl_gt: {
      value: cdktf.numberToHclTerraform(struct!.permitTtlGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_ttl_lt: {
      value: cdktf.numberToHclTerraform(struct!.permitTtlLt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_ttl_neq: {
      value: cdktf.numberToHclTerraform(struct!.permitTtlNeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_ttl_range_end: {
      value: cdktf.numberToHclTerraform(struct!.permitTtlRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permit_ttl_range_start: {
      value: cdktf.numberToHclTerraform(struct!.permitTtlRangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remark: {
      value: cdktf.stringToHclTerraform(struct!.remark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv4AccessListSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4AccessListSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyCapture = this._denyCapture;
    }
    if (this._denyCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyCounter = this._denyCounter;
    }
    if (this._denyDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDefault = this._denyDefault;
    }
    if (this._denyDestinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationAddress = this._denyDestinationAddress;
    }
    if (this._denyDestinationAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationAny = this._denyDestinationAny;
    }
    if (this._denyDestinationHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationHost = this._denyDestinationHost;
    }
    if (this._denyDestinationNetGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationNetGroup = this._denyDestinationNetGroup;
    }
    if (this._denyDestinationPortEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationPortEq = this._denyDestinationPortEq;
    }
    if (this._denyDestinationPortGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationPortGroup = this._denyDestinationPortGroup;
    }
    if (this._denyDestinationPortGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationPortGt = this._denyDestinationPortGt;
    }
    if (this._denyDestinationPortLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationPortLt = this._denyDestinationPortLt;
    }
    if (this._denyDestinationPortNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationPortNeq = this._denyDestinationPortNeq;
    }
    if (this._denyDestinationPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationPortRangeEnd = this._denyDestinationPortRangeEnd;
    }
    if (this._denyDestinationPortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationPortRangeStart = this._denyDestinationPortRangeStart;
    }
    if (this._denyDestinationPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationPrefixLength = this._denyDestinationPrefixLength;
    }
    if (this._denyDestinationWildcardMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDestinationWildcardMask = this._denyDestinationWildcardMask;
    }
    if (this._denyDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDscp = this._denyDscp;
    }
    if (this._denyDscpEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDscpEq = this._denyDscpEq;
    }
    if (this._denyDscpGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDscpGt = this._denyDscpGt;
    }
    if (this._denyDscpLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDscpLt = this._denyDscpLt;
    }
    if (this._denyDscpNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDscpNeq = this._denyDscpNeq;
    }
    if (this._denyDscpRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDscpRangeEnd = this._denyDscpRangeEnd;
    }
    if (this._denyDscpRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDscpRangeStart = this._denyDscpRangeStart;
    }
    if (this._denyEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyEq = this._denyEq;
    }
    if (this._denyFragmentOffsetEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFragmentOffsetEq = this._denyFragmentOffsetEq;
    }
    if (this._denyFragmentOffsetGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFragmentOffsetGt = this._denyFragmentOffsetGt;
    }
    if (this._denyFragmentOffsetLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFragmentOffsetLt = this._denyFragmentOffsetLt;
    }
    if (this._denyFragmentOffsetNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFragmentOffsetNeq = this._denyFragmentOffsetNeq;
    }
    if (this._denyFragmentOffsetRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFragmentOffsetRangeEnd = this._denyFragmentOffsetRangeEnd;
    }
    if (this._denyFragmentOffsetRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFragmentOffsetRangeStart = this._denyFragmentOffsetRangeStart;
    }
    if (this._denyFragmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFragmentType = this._denyFragmentType;
    }
    if (this._denyFragments !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFragments = this._denyFragments;
    }
    if (this._denyIcmpMessageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyIcmpMessageCode = this._denyIcmpMessageCode;
    }
    if (this._denyIcmpMessageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyIcmpMessageType = this._denyIcmpMessageType;
    }
    if (this._denyIcmpMessageTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyIcmpMessageTypeName = this._denyIcmpMessageTypeName;
    }
    if (this._denyIcmpOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyIcmpOff = this._denyIcmpOff;
    }
    if (this._denyIcmpOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyIcmpOn = this._denyIcmpOn;
    }
    if (this._denyIgmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyIgmpType = this._denyIgmpType;
    }
    if (this._denyLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyLog = this._denyLog;
    }
    if (this._denyLogInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyLogInput = this._denyLogInput;
    }
    if (this._denyNexthop1Ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop1Ipv4 = this._denyNexthop1Ipv4;
    }
    if (this._denyNexthop1Track !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop1Track = this._denyNexthop1Track;
    }
    if (this._denyNexthop1Vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop1Vrf = this._denyNexthop1Vrf;
    }
    if (this._denyNexthop2Ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop2Ipv4 = this._denyNexthop2Ipv4;
    }
    if (this._denyNexthop2Track !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop2Track = this._denyNexthop2Track;
    }
    if (this._denyNexthop2Vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop2Vrf = this._denyNexthop2Vrf;
    }
    if (this._denyNexthop3Ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop3Ipv4 = this._denyNexthop3Ipv4;
    }
    if (this._denyNexthop3Track !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop3Track = this._denyNexthop3Track;
    }
    if (this._denyNexthop3Vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyNexthop3Vrf = this._denyNexthop3Vrf;
    }
    if (this._denyPacketLengthEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPacketLengthEq = this._denyPacketLengthEq;
    }
    if (this._denyPacketLengthGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPacketLengthGt = this._denyPacketLengthGt;
    }
    if (this._denyPacketLengthLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPacketLengthLt = this._denyPacketLengthLt;
    }
    if (this._denyPacketLengthNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPacketLengthNeq = this._denyPacketLengthNeq;
    }
    if (this._denyPacketLengthRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPacketLengthRangeEnd = this._denyPacketLengthRangeEnd;
    }
    if (this._denyPacketLengthRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPacketLengthRangeStart = this._denyPacketLengthRangeStart;
    }
    if (this._denyPolicePeakRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPolicePeakRate = this._denyPolicePeakRate;
    }
    if (this._denyPolicePeakUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPolicePeakUnit = this._denyPolicePeakUnit;
    }
    if (this._denyPolicePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPolicePriority = this._denyPolicePriority;
    }
    if (this._denyPoliceUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPoliceUnit = this._denyPoliceUnit;
    }
    if (this._denyPoliceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPoliceValue = this._denyPoliceValue;
    }
    if (this._denyPrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPrecedence = this._denyPrecedence;
    }
    if (this._denyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyProtocol = this._denyProtocol;
    }
    if (this._denyRangeEndProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRangeEndProtocol = this._denyRangeEndProtocol;
    }
    if (this._denyRangeStartProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRangeStartProtocol = this._denyRangeStartProtocol;
    }
    if (this._denySetQosGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySetQosGroup = this._denySetQosGroup;
    }
    if (this._denySetTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySetTtl = this._denySetTtl;
    }
    if (this._denySourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourceAddress = this._denySourceAddress;
    }
    if (this._denySourceAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourceAny = this._denySourceAny;
    }
    if (this._denySourceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourceHost = this._denySourceHost;
    }
    if (this._denySourceNetGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourceNetGroup = this._denySourceNetGroup;
    }
    if (this._denySourcePortEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcePortEq = this._denySourcePortEq;
    }
    if (this._denySourcePortGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcePortGroup = this._denySourcePortGroup;
    }
    if (this._denySourcePortGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcePortGt = this._denySourcePortGt;
    }
    if (this._denySourcePortLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcePortLt = this._denySourcePortLt;
    }
    if (this._denySourcePortNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcePortNeq = this._denySourcePortNeq;
    }
    if (this._denySourcePortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcePortRangeEnd = this._denySourcePortRangeEnd;
    }
    if (this._denySourcePortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcePortRangeStart = this._denySourcePortRangeStart;
    }
    if (this._denySourcePrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourcePrefixLength = this._denySourcePrefixLength;
    }
    if (this._denySourceWildcardMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.denySourceWildcardMask = this._denySourceWildcardMask;
    }
    if (this._denyTtlEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyTtlEq = this._denyTtlEq;
    }
    if (this._denyTtlGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyTtlGt = this._denyTtlGt;
    }
    if (this._denyTtlLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyTtlLt = this._denyTtlLt;
    }
    if (this._denyTtlNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyTtlNeq = this._denyTtlNeq;
    }
    if (this._denyTtlRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyTtlRangeEnd = this._denyTtlRangeEnd;
    }
    if (this._denyTtlRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyTtlRangeStart = this._denyTtlRangeStart;
    }
    if (this._permitCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitCapture = this._permitCapture;
    }
    if (this._permitCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitCounter = this._permitCounter;
    }
    if (this._permitDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDefault = this._permitDefault;
    }
    if (this._permitDestinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationAddress = this._permitDestinationAddress;
    }
    if (this._permitDestinationAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationAny = this._permitDestinationAny;
    }
    if (this._permitDestinationHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationHost = this._permitDestinationHost;
    }
    if (this._permitDestinationNetGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationNetGroup = this._permitDestinationNetGroup;
    }
    if (this._permitDestinationPortEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationPortEq = this._permitDestinationPortEq;
    }
    if (this._permitDestinationPortGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationPortGroup = this._permitDestinationPortGroup;
    }
    if (this._permitDestinationPortGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationPortGt = this._permitDestinationPortGt;
    }
    if (this._permitDestinationPortLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationPortLt = this._permitDestinationPortLt;
    }
    if (this._permitDestinationPortNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationPortNeq = this._permitDestinationPortNeq;
    }
    if (this._permitDestinationPortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationPortRangeEnd = this._permitDestinationPortRangeEnd;
    }
    if (this._permitDestinationPortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationPortRangeStart = this._permitDestinationPortRangeStart;
    }
    if (this._permitDestinationPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationPrefixLength = this._permitDestinationPrefixLength;
    }
    if (this._permitDestinationWildcardMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDestinationWildcardMask = this._permitDestinationWildcardMask;
    }
    if (this._permitDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDscp = this._permitDscp;
    }
    if (this._permitDscpEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDscpEq = this._permitDscpEq;
    }
    if (this._permitDscpGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDscpGt = this._permitDscpGt;
    }
    if (this._permitDscpLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDscpLt = this._permitDscpLt;
    }
    if (this._permitDscpNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDscpNeq = this._permitDscpNeq;
    }
    if (this._permitDscpRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDscpRangeEnd = this._permitDscpRangeEnd;
    }
    if (this._permitDscpRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitDscpRangeStart = this._permitDscpRangeStart;
    }
    if (this._permitEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitEq = this._permitEq;
    }
    if (this._permitFragmentOffsetEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFragmentOffsetEq = this._permitFragmentOffsetEq;
    }
    if (this._permitFragmentOffsetGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFragmentOffsetGt = this._permitFragmentOffsetGt;
    }
    if (this._permitFragmentOffsetLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFragmentOffsetLt = this._permitFragmentOffsetLt;
    }
    if (this._permitFragmentOffsetNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFragmentOffsetNeq = this._permitFragmentOffsetNeq;
    }
    if (this._permitFragmentOffsetRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFragmentOffsetRangeEnd = this._permitFragmentOffsetRangeEnd;
    }
    if (this._permitFragmentOffsetRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFragmentOffsetRangeStart = this._permitFragmentOffsetRangeStart;
    }
    if (this._permitFragmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFragmentType = this._permitFragmentType;
    }
    if (this._permitFragments !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitFragments = this._permitFragments;
    }
    if (this._permitIcmpMessageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitIcmpMessageCode = this._permitIcmpMessageCode;
    }
    if (this._permitIcmpMessageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitIcmpMessageType = this._permitIcmpMessageType;
    }
    if (this._permitIcmpMessageTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitIcmpMessageTypeName = this._permitIcmpMessageTypeName;
    }
    if (this._permitIgmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitIgmpType = this._permitIgmpType;
    }
    if (this._permitLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitLog = this._permitLog;
    }
    if (this._permitLogInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitLogInput = this._permitLogInput;
    }
    if (this._permitNexthop1Ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop1Ipv4 = this._permitNexthop1Ipv4;
    }
    if (this._permitNexthop1Track !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop1Track = this._permitNexthop1Track;
    }
    if (this._permitNexthop1Vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop1Vrf = this._permitNexthop1Vrf;
    }
    if (this._permitNexthop2Ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop2Ipv4 = this._permitNexthop2Ipv4;
    }
    if (this._permitNexthop2Track !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop2Track = this._permitNexthop2Track;
    }
    if (this._permitNexthop2Vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop2Vrf = this._permitNexthop2Vrf;
    }
    if (this._permitNexthop3Ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop3Ipv4 = this._permitNexthop3Ipv4;
    }
    if (this._permitNexthop3Track !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop3Track = this._permitNexthop3Track;
    }
    if (this._permitNexthop3Vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitNexthop3Vrf = this._permitNexthop3Vrf;
    }
    if (this._permitPacketLengthEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPacketLengthEq = this._permitPacketLengthEq;
    }
    if (this._permitPacketLengthGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPacketLengthGt = this._permitPacketLengthGt;
    }
    if (this._permitPacketLengthLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPacketLengthLt = this._permitPacketLengthLt;
    }
    if (this._permitPacketLengthNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPacketLengthNeq = this._permitPacketLengthNeq;
    }
    if (this._permitPacketLengthRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPacketLengthRangeEnd = this._permitPacketLengthRangeEnd;
    }
    if (this._permitPacketLengthRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPacketLengthRangeStart = this._permitPacketLengthRangeStart;
    }
    if (this._permitPolicePeakRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPolicePeakRate = this._permitPolicePeakRate;
    }
    if (this._permitPolicePeakUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPolicePeakUnit = this._permitPolicePeakUnit;
    }
    if (this._permitPolicePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPolicePriority = this._permitPolicePriority;
    }
    if (this._permitPoliceUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPoliceUnit = this._permitPoliceUnit;
    }
    if (this._permitPoliceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPoliceValue = this._permitPoliceValue;
    }
    if (this._permitPrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitPrecedence = this._permitPrecedence;
    }
    if (this._permitProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitProtocol = this._permitProtocol;
    }
    if (this._permitRangeEndProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitRangeEndProtocol = this._permitRangeEndProtocol;
    }
    if (this._permitRangeStartProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitRangeStartProtocol = this._permitRangeStartProtocol;
    }
    if (this._permitSetQosGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSetQosGroup = this._permitSetQosGroup;
    }
    if (this._permitSetTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSetTtl = this._permitSetTtl;
    }
    if (this._permitSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourceAddress = this._permitSourceAddress;
    }
    if (this._permitSourceAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourceAny = this._permitSourceAny;
    }
    if (this._permitSourceHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourceHost = this._permitSourceHost;
    }
    if (this._permitSourceNetGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourceNetGroup = this._permitSourceNetGroup;
    }
    if (this._permitSourcePortEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourcePortEq = this._permitSourcePortEq;
    }
    if (this._permitSourcePortGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourcePortGroup = this._permitSourcePortGroup;
    }
    if (this._permitSourcePortGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourcePortGt = this._permitSourcePortGt;
    }
    if (this._permitSourcePortLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourcePortLt = this._permitSourcePortLt;
    }
    if (this._permitSourcePortNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourcePortNeq = this._permitSourcePortNeq;
    }
    if (this._permitSourcePortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourcePortRangeEnd = this._permitSourcePortRangeEnd;
    }
    if (this._permitSourcePortRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourcePortRangeStart = this._permitSourcePortRangeStart;
    }
    if (this._permitSourcePrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourcePrefixLength = this._permitSourcePrefixLength;
    }
    if (this._permitSourceWildcardMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitSourceWildcardMask = this._permitSourceWildcardMask;
    }
    if (this._permitTtlEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitTtlEq = this._permitTtlEq;
    }
    if (this._permitTtlGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitTtlGt = this._permitTtlGt;
    }
    if (this._permitTtlLt !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitTtlLt = this._permitTtlLt;
    }
    if (this._permitTtlNeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitTtlNeq = this._permitTtlNeq;
    }
    if (this._permitTtlRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitTtlRangeEnd = this._permitTtlRangeEnd;
    }
    if (this._permitTtlRangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitTtlRangeStart = this._permitTtlRangeStart;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    if (this._sequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumber = this._sequenceNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4AccessListSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyCapture = undefined;
      this._denyCounter = undefined;
      this._denyDefault = undefined;
      this._denyDestinationAddress = undefined;
      this._denyDestinationAny = undefined;
      this._denyDestinationHost = undefined;
      this._denyDestinationNetGroup = undefined;
      this._denyDestinationPortEq = undefined;
      this._denyDestinationPortGroup = undefined;
      this._denyDestinationPortGt = undefined;
      this._denyDestinationPortLt = undefined;
      this._denyDestinationPortNeq = undefined;
      this._denyDestinationPortRangeEnd = undefined;
      this._denyDestinationPortRangeStart = undefined;
      this._denyDestinationPrefixLength = undefined;
      this._denyDestinationWildcardMask = undefined;
      this._denyDscp = undefined;
      this._denyDscpEq = undefined;
      this._denyDscpGt = undefined;
      this._denyDscpLt = undefined;
      this._denyDscpNeq = undefined;
      this._denyDscpRangeEnd = undefined;
      this._denyDscpRangeStart = undefined;
      this._denyEq = undefined;
      this._denyFragmentOffsetEq = undefined;
      this._denyFragmentOffsetGt = undefined;
      this._denyFragmentOffsetLt = undefined;
      this._denyFragmentOffsetNeq = undefined;
      this._denyFragmentOffsetRangeEnd = undefined;
      this._denyFragmentOffsetRangeStart = undefined;
      this._denyFragmentType = undefined;
      this._denyFragments = undefined;
      this._denyIcmpMessageCode = undefined;
      this._denyIcmpMessageType = undefined;
      this._denyIcmpMessageTypeName = undefined;
      this._denyIcmpOff = undefined;
      this._denyIcmpOn = undefined;
      this._denyIgmpType = undefined;
      this._denyLog = undefined;
      this._denyLogInput = undefined;
      this._denyNexthop1Ipv4 = undefined;
      this._denyNexthop1Track = undefined;
      this._denyNexthop1Vrf = undefined;
      this._denyNexthop2Ipv4 = undefined;
      this._denyNexthop2Track = undefined;
      this._denyNexthop2Vrf = undefined;
      this._denyNexthop3Ipv4 = undefined;
      this._denyNexthop3Track = undefined;
      this._denyNexthop3Vrf = undefined;
      this._denyPacketLengthEq = undefined;
      this._denyPacketLengthGt = undefined;
      this._denyPacketLengthLt = undefined;
      this._denyPacketLengthNeq = undefined;
      this._denyPacketLengthRangeEnd = undefined;
      this._denyPacketLengthRangeStart = undefined;
      this._denyPolicePeakRate = undefined;
      this._denyPolicePeakUnit = undefined;
      this._denyPolicePriority = undefined;
      this._denyPoliceUnit = undefined;
      this._denyPoliceValue = undefined;
      this._denyPrecedence = undefined;
      this._denyProtocol = undefined;
      this._denyRangeEndProtocol = undefined;
      this._denyRangeStartProtocol = undefined;
      this._denySetQosGroup = undefined;
      this._denySetTtl = undefined;
      this._denySourceAddress = undefined;
      this._denySourceAny = undefined;
      this._denySourceHost = undefined;
      this._denySourceNetGroup = undefined;
      this._denySourcePortEq = undefined;
      this._denySourcePortGroup = undefined;
      this._denySourcePortGt = undefined;
      this._denySourcePortLt = undefined;
      this._denySourcePortNeq = undefined;
      this._denySourcePortRangeEnd = undefined;
      this._denySourcePortRangeStart = undefined;
      this._denySourcePrefixLength = undefined;
      this._denySourceWildcardMask = undefined;
      this._denyTtlEq = undefined;
      this._denyTtlGt = undefined;
      this._denyTtlLt = undefined;
      this._denyTtlNeq = undefined;
      this._denyTtlRangeEnd = undefined;
      this._denyTtlRangeStart = undefined;
      this._permitCapture = undefined;
      this._permitCounter = undefined;
      this._permitDefault = undefined;
      this._permitDestinationAddress = undefined;
      this._permitDestinationAny = undefined;
      this._permitDestinationHost = undefined;
      this._permitDestinationNetGroup = undefined;
      this._permitDestinationPortEq = undefined;
      this._permitDestinationPortGroup = undefined;
      this._permitDestinationPortGt = undefined;
      this._permitDestinationPortLt = undefined;
      this._permitDestinationPortNeq = undefined;
      this._permitDestinationPortRangeEnd = undefined;
      this._permitDestinationPortRangeStart = undefined;
      this._permitDestinationPrefixLength = undefined;
      this._permitDestinationWildcardMask = undefined;
      this._permitDscp = undefined;
      this._permitDscpEq = undefined;
      this._permitDscpGt = undefined;
      this._permitDscpLt = undefined;
      this._permitDscpNeq = undefined;
      this._permitDscpRangeEnd = undefined;
      this._permitDscpRangeStart = undefined;
      this._permitEq = undefined;
      this._permitFragmentOffsetEq = undefined;
      this._permitFragmentOffsetGt = undefined;
      this._permitFragmentOffsetLt = undefined;
      this._permitFragmentOffsetNeq = undefined;
      this._permitFragmentOffsetRangeEnd = undefined;
      this._permitFragmentOffsetRangeStart = undefined;
      this._permitFragmentType = undefined;
      this._permitFragments = undefined;
      this._permitIcmpMessageCode = undefined;
      this._permitIcmpMessageType = undefined;
      this._permitIcmpMessageTypeName = undefined;
      this._permitIgmpType = undefined;
      this._permitLog = undefined;
      this._permitLogInput = undefined;
      this._permitNexthop1Ipv4 = undefined;
      this._permitNexthop1Track = undefined;
      this._permitNexthop1Vrf = undefined;
      this._permitNexthop2Ipv4 = undefined;
      this._permitNexthop2Track = undefined;
      this._permitNexthop2Vrf = undefined;
      this._permitNexthop3Ipv4 = undefined;
      this._permitNexthop3Track = undefined;
      this._permitNexthop3Vrf = undefined;
      this._permitPacketLengthEq = undefined;
      this._permitPacketLengthGt = undefined;
      this._permitPacketLengthLt = undefined;
      this._permitPacketLengthNeq = undefined;
      this._permitPacketLengthRangeEnd = undefined;
      this._permitPacketLengthRangeStart = undefined;
      this._permitPolicePeakRate = undefined;
      this._permitPolicePeakUnit = undefined;
      this._permitPolicePriority = undefined;
      this._permitPoliceUnit = undefined;
      this._permitPoliceValue = undefined;
      this._permitPrecedence = undefined;
      this._permitProtocol = undefined;
      this._permitRangeEndProtocol = undefined;
      this._permitRangeStartProtocol = undefined;
      this._permitSetQosGroup = undefined;
      this._permitSetTtl = undefined;
      this._permitSourceAddress = undefined;
      this._permitSourceAny = undefined;
      this._permitSourceHost = undefined;
      this._permitSourceNetGroup = undefined;
      this._permitSourcePortEq = undefined;
      this._permitSourcePortGroup = undefined;
      this._permitSourcePortGt = undefined;
      this._permitSourcePortLt = undefined;
      this._permitSourcePortNeq = undefined;
      this._permitSourcePortRangeEnd = undefined;
      this._permitSourcePortRangeStart = undefined;
      this._permitSourcePrefixLength = undefined;
      this._permitSourceWildcardMask = undefined;
      this._permitTtlEq = undefined;
      this._permitTtlGt = undefined;
      this._permitTtlLt = undefined;
      this._permitTtlNeq = undefined;
      this._permitTtlRangeEnd = undefined;
      this._permitTtlRangeStart = undefined;
      this._remark = undefined;
      this._sequenceNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyCapture = value.denyCapture;
      this._denyCounter = value.denyCounter;
      this._denyDefault = value.denyDefault;
      this._denyDestinationAddress = value.denyDestinationAddress;
      this._denyDestinationAny = value.denyDestinationAny;
      this._denyDestinationHost = value.denyDestinationHost;
      this._denyDestinationNetGroup = value.denyDestinationNetGroup;
      this._denyDestinationPortEq = value.denyDestinationPortEq;
      this._denyDestinationPortGroup = value.denyDestinationPortGroup;
      this._denyDestinationPortGt = value.denyDestinationPortGt;
      this._denyDestinationPortLt = value.denyDestinationPortLt;
      this._denyDestinationPortNeq = value.denyDestinationPortNeq;
      this._denyDestinationPortRangeEnd = value.denyDestinationPortRangeEnd;
      this._denyDestinationPortRangeStart = value.denyDestinationPortRangeStart;
      this._denyDestinationPrefixLength = value.denyDestinationPrefixLength;
      this._denyDestinationWildcardMask = value.denyDestinationWildcardMask;
      this._denyDscp = value.denyDscp;
      this._denyDscpEq = value.denyDscpEq;
      this._denyDscpGt = value.denyDscpGt;
      this._denyDscpLt = value.denyDscpLt;
      this._denyDscpNeq = value.denyDscpNeq;
      this._denyDscpRangeEnd = value.denyDscpRangeEnd;
      this._denyDscpRangeStart = value.denyDscpRangeStart;
      this._denyEq = value.denyEq;
      this._denyFragmentOffsetEq = value.denyFragmentOffsetEq;
      this._denyFragmentOffsetGt = value.denyFragmentOffsetGt;
      this._denyFragmentOffsetLt = value.denyFragmentOffsetLt;
      this._denyFragmentOffsetNeq = value.denyFragmentOffsetNeq;
      this._denyFragmentOffsetRangeEnd = value.denyFragmentOffsetRangeEnd;
      this._denyFragmentOffsetRangeStart = value.denyFragmentOffsetRangeStart;
      this._denyFragmentType = value.denyFragmentType;
      this._denyFragments = value.denyFragments;
      this._denyIcmpMessageCode = value.denyIcmpMessageCode;
      this._denyIcmpMessageType = value.denyIcmpMessageType;
      this._denyIcmpMessageTypeName = value.denyIcmpMessageTypeName;
      this._denyIcmpOff = value.denyIcmpOff;
      this._denyIcmpOn = value.denyIcmpOn;
      this._denyIgmpType = value.denyIgmpType;
      this._denyLog = value.denyLog;
      this._denyLogInput = value.denyLogInput;
      this._denyNexthop1Ipv4 = value.denyNexthop1Ipv4;
      this._denyNexthop1Track = value.denyNexthop1Track;
      this._denyNexthop1Vrf = value.denyNexthop1Vrf;
      this._denyNexthop2Ipv4 = value.denyNexthop2Ipv4;
      this._denyNexthop2Track = value.denyNexthop2Track;
      this._denyNexthop2Vrf = value.denyNexthop2Vrf;
      this._denyNexthop3Ipv4 = value.denyNexthop3Ipv4;
      this._denyNexthop3Track = value.denyNexthop3Track;
      this._denyNexthop3Vrf = value.denyNexthop3Vrf;
      this._denyPacketLengthEq = value.denyPacketLengthEq;
      this._denyPacketLengthGt = value.denyPacketLengthGt;
      this._denyPacketLengthLt = value.denyPacketLengthLt;
      this._denyPacketLengthNeq = value.denyPacketLengthNeq;
      this._denyPacketLengthRangeEnd = value.denyPacketLengthRangeEnd;
      this._denyPacketLengthRangeStart = value.denyPacketLengthRangeStart;
      this._denyPolicePeakRate = value.denyPolicePeakRate;
      this._denyPolicePeakUnit = value.denyPolicePeakUnit;
      this._denyPolicePriority = value.denyPolicePriority;
      this._denyPoliceUnit = value.denyPoliceUnit;
      this._denyPoliceValue = value.denyPoliceValue;
      this._denyPrecedence = value.denyPrecedence;
      this._denyProtocol = value.denyProtocol;
      this._denyRangeEndProtocol = value.denyRangeEndProtocol;
      this._denyRangeStartProtocol = value.denyRangeStartProtocol;
      this._denySetQosGroup = value.denySetQosGroup;
      this._denySetTtl = value.denySetTtl;
      this._denySourceAddress = value.denySourceAddress;
      this._denySourceAny = value.denySourceAny;
      this._denySourceHost = value.denySourceHost;
      this._denySourceNetGroup = value.denySourceNetGroup;
      this._denySourcePortEq = value.denySourcePortEq;
      this._denySourcePortGroup = value.denySourcePortGroup;
      this._denySourcePortGt = value.denySourcePortGt;
      this._denySourcePortLt = value.denySourcePortLt;
      this._denySourcePortNeq = value.denySourcePortNeq;
      this._denySourcePortRangeEnd = value.denySourcePortRangeEnd;
      this._denySourcePortRangeStart = value.denySourcePortRangeStart;
      this._denySourcePrefixLength = value.denySourcePrefixLength;
      this._denySourceWildcardMask = value.denySourceWildcardMask;
      this._denyTtlEq = value.denyTtlEq;
      this._denyTtlGt = value.denyTtlGt;
      this._denyTtlLt = value.denyTtlLt;
      this._denyTtlNeq = value.denyTtlNeq;
      this._denyTtlRangeEnd = value.denyTtlRangeEnd;
      this._denyTtlRangeStart = value.denyTtlRangeStart;
      this._permitCapture = value.permitCapture;
      this._permitCounter = value.permitCounter;
      this._permitDefault = value.permitDefault;
      this._permitDestinationAddress = value.permitDestinationAddress;
      this._permitDestinationAny = value.permitDestinationAny;
      this._permitDestinationHost = value.permitDestinationHost;
      this._permitDestinationNetGroup = value.permitDestinationNetGroup;
      this._permitDestinationPortEq = value.permitDestinationPortEq;
      this._permitDestinationPortGroup = value.permitDestinationPortGroup;
      this._permitDestinationPortGt = value.permitDestinationPortGt;
      this._permitDestinationPortLt = value.permitDestinationPortLt;
      this._permitDestinationPortNeq = value.permitDestinationPortNeq;
      this._permitDestinationPortRangeEnd = value.permitDestinationPortRangeEnd;
      this._permitDestinationPortRangeStart = value.permitDestinationPortRangeStart;
      this._permitDestinationPrefixLength = value.permitDestinationPrefixLength;
      this._permitDestinationWildcardMask = value.permitDestinationWildcardMask;
      this._permitDscp = value.permitDscp;
      this._permitDscpEq = value.permitDscpEq;
      this._permitDscpGt = value.permitDscpGt;
      this._permitDscpLt = value.permitDscpLt;
      this._permitDscpNeq = value.permitDscpNeq;
      this._permitDscpRangeEnd = value.permitDscpRangeEnd;
      this._permitDscpRangeStart = value.permitDscpRangeStart;
      this._permitEq = value.permitEq;
      this._permitFragmentOffsetEq = value.permitFragmentOffsetEq;
      this._permitFragmentOffsetGt = value.permitFragmentOffsetGt;
      this._permitFragmentOffsetLt = value.permitFragmentOffsetLt;
      this._permitFragmentOffsetNeq = value.permitFragmentOffsetNeq;
      this._permitFragmentOffsetRangeEnd = value.permitFragmentOffsetRangeEnd;
      this._permitFragmentOffsetRangeStart = value.permitFragmentOffsetRangeStart;
      this._permitFragmentType = value.permitFragmentType;
      this._permitFragments = value.permitFragments;
      this._permitIcmpMessageCode = value.permitIcmpMessageCode;
      this._permitIcmpMessageType = value.permitIcmpMessageType;
      this._permitIcmpMessageTypeName = value.permitIcmpMessageTypeName;
      this._permitIgmpType = value.permitIgmpType;
      this._permitLog = value.permitLog;
      this._permitLogInput = value.permitLogInput;
      this._permitNexthop1Ipv4 = value.permitNexthop1Ipv4;
      this._permitNexthop1Track = value.permitNexthop1Track;
      this._permitNexthop1Vrf = value.permitNexthop1Vrf;
      this._permitNexthop2Ipv4 = value.permitNexthop2Ipv4;
      this._permitNexthop2Track = value.permitNexthop2Track;
      this._permitNexthop2Vrf = value.permitNexthop2Vrf;
      this._permitNexthop3Ipv4 = value.permitNexthop3Ipv4;
      this._permitNexthop3Track = value.permitNexthop3Track;
      this._permitNexthop3Vrf = value.permitNexthop3Vrf;
      this._permitPacketLengthEq = value.permitPacketLengthEq;
      this._permitPacketLengthGt = value.permitPacketLengthGt;
      this._permitPacketLengthLt = value.permitPacketLengthLt;
      this._permitPacketLengthNeq = value.permitPacketLengthNeq;
      this._permitPacketLengthRangeEnd = value.permitPacketLengthRangeEnd;
      this._permitPacketLengthRangeStart = value.permitPacketLengthRangeStart;
      this._permitPolicePeakRate = value.permitPolicePeakRate;
      this._permitPolicePeakUnit = value.permitPolicePeakUnit;
      this._permitPolicePriority = value.permitPolicePriority;
      this._permitPoliceUnit = value.permitPoliceUnit;
      this._permitPoliceValue = value.permitPoliceValue;
      this._permitPrecedence = value.permitPrecedence;
      this._permitProtocol = value.permitProtocol;
      this._permitRangeEndProtocol = value.permitRangeEndProtocol;
      this._permitRangeStartProtocol = value.permitRangeStartProtocol;
      this._permitSetQosGroup = value.permitSetQosGroup;
      this._permitSetTtl = value.permitSetTtl;
      this._permitSourceAddress = value.permitSourceAddress;
      this._permitSourceAny = value.permitSourceAny;
      this._permitSourceHost = value.permitSourceHost;
      this._permitSourceNetGroup = value.permitSourceNetGroup;
      this._permitSourcePortEq = value.permitSourcePortEq;
      this._permitSourcePortGroup = value.permitSourcePortGroup;
      this._permitSourcePortGt = value.permitSourcePortGt;
      this._permitSourcePortLt = value.permitSourcePortLt;
      this._permitSourcePortNeq = value.permitSourcePortNeq;
      this._permitSourcePortRangeEnd = value.permitSourcePortRangeEnd;
      this._permitSourcePortRangeStart = value.permitSourcePortRangeStart;
      this._permitSourcePrefixLength = value.permitSourcePrefixLength;
      this._permitSourceWildcardMask = value.permitSourceWildcardMask;
      this._permitTtlEq = value.permitTtlEq;
      this._permitTtlGt = value.permitTtlGt;
      this._permitTtlLt = value.permitTtlLt;
      this._permitTtlNeq = value.permitTtlNeq;
      this._permitTtlRangeEnd = value.permitTtlRangeEnd;
      this._permitTtlRangeStart = value.permitTtlRangeStart;
      this._remark = value.remark;
      this._sequenceNumber = value.sequenceNumber;
    }
  }

  // deny_capture - computed: false, optional: true, required: false
  private _denyCapture?: boolean | cdktf.IResolvable; 
  public get denyCapture() {
    return this.getBooleanAttribute('deny_capture');
  }
  public set denyCapture(value: boolean | cdktf.IResolvable) {
    this._denyCapture = value;
  }
  public resetDenyCapture() {
    this._denyCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyCaptureInput() {
    return this._denyCapture;
  }

  // deny_counter - computed: false, optional: true, required: false
  private _denyCounter?: string; 
  public get denyCounter() {
    return this.getStringAttribute('deny_counter');
  }
  public set denyCounter(value: string) {
    this._denyCounter = value;
  }
  public resetDenyCounter() {
    this._denyCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyCounterInput() {
    return this._denyCounter;
  }

  // deny_default - computed: false, optional: true, required: false
  private _denyDefault?: boolean | cdktf.IResolvable; 
  public get denyDefault() {
    return this.getBooleanAttribute('deny_default');
  }
  public set denyDefault(value: boolean | cdktf.IResolvable) {
    this._denyDefault = value;
  }
  public resetDenyDefault() {
    this._denyDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDefaultInput() {
    return this._denyDefault;
  }

  // deny_destination_address - computed: false, optional: true, required: false
  private _denyDestinationAddress?: string; 
  public get denyDestinationAddress() {
    return this.getStringAttribute('deny_destination_address');
  }
  public set denyDestinationAddress(value: string) {
    this._denyDestinationAddress = value;
  }
  public resetDenyDestinationAddress() {
    this._denyDestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationAddressInput() {
    return this._denyDestinationAddress;
  }

  // deny_destination_any - computed: false, optional: true, required: false
  private _denyDestinationAny?: boolean | cdktf.IResolvable; 
  public get denyDestinationAny() {
    return this.getBooleanAttribute('deny_destination_any');
  }
  public set denyDestinationAny(value: boolean | cdktf.IResolvable) {
    this._denyDestinationAny = value;
  }
  public resetDenyDestinationAny() {
    this._denyDestinationAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationAnyInput() {
    return this._denyDestinationAny;
  }

  // deny_destination_host - computed: false, optional: true, required: false
  private _denyDestinationHost?: string; 
  public get denyDestinationHost() {
    return this.getStringAttribute('deny_destination_host');
  }
  public set denyDestinationHost(value: string) {
    this._denyDestinationHost = value;
  }
  public resetDenyDestinationHost() {
    this._denyDestinationHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationHostInput() {
    return this._denyDestinationHost;
  }

  // deny_destination_net_group - computed: false, optional: true, required: false
  private _denyDestinationNetGroup?: string; 
  public get denyDestinationNetGroup() {
    return this.getStringAttribute('deny_destination_net_group');
  }
  public set denyDestinationNetGroup(value: string) {
    this._denyDestinationNetGroup = value;
  }
  public resetDenyDestinationNetGroup() {
    this._denyDestinationNetGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationNetGroupInput() {
    return this._denyDestinationNetGroup;
  }

  // deny_destination_port_eq - computed: false, optional: true, required: false
  private _denyDestinationPortEq?: string; 
  public get denyDestinationPortEq() {
    return this.getStringAttribute('deny_destination_port_eq');
  }
  public set denyDestinationPortEq(value: string) {
    this._denyDestinationPortEq = value;
  }
  public resetDenyDestinationPortEq() {
    this._denyDestinationPortEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationPortEqInput() {
    return this._denyDestinationPortEq;
  }

  // deny_destination_port_group - computed: false, optional: true, required: false
  private _denyDestinationPortGroup?: string; 
  public get denyDestinationPortGroup() {
    return this.getStringAttribute('deny_destination_port_group');
  }
  public set denyDestinationPortGroup(value: string) {
    this._denyDestinationPortGroup = value;
  }
  public resetDenyDestinationPortGroup() {
    this._denyDestinationPortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationPortGroupInput() {
    return this._denyDestinationPortGroup;
  }

  // deny_destination_port_gt - computed: false, optional: true, required: false
  private _denyDestinationPortGt?: string; 
  public get denyDestinationPortGt() {
    return this.getStringAttribute('deny_destination_port_gt');
  }
  public set denyDestinationPortGt(value: string) {
    this._denyDestinationPortGt = value;
  }
  public resetDenyDestinationPortGt() {
    this._denyDestinationPortGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationPortGtInput() {
    return this._denyDestinationPortGt;
  }

  // deny_destination_port_lt - computed: false, optional: true, required: false
  private _denyDestinationPortLt?: string; 
  public get denyDestinationPortLt() {
    return this.getStringAttribute('deny_destination_port_lt');
  }
  public set denyDestinationPortLt(value: string) {
    this._denyDestinationPortLt = value;
  }
  public resetDenyDestinationPortLt() {
    this._denyDestinationPortLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationPortLtInput() {
    return this._denyDestinationPortLt;
  }

  // deny_destination_port_neq - computed: false, optional: true, required: false
  private _denyDestinationPortNeq?: string; 
  public get denyDestinationPortNeq() {
    return this.getStringAttribute('deny_destination_port_neq');
  }
  public set denyDestinationPortNeq(value: string) {
    this._denyDestinationPortNeq = value;
  }
  public resetDenyDestinationPortNeq() {
    this._denyDestinationPortNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationPortNeqInput() {
    return this._denyDestinationPortNeq;
  }

  // deny_destination_port_range_end - computed: false, optional: true, required: false
  private _denyDestinationPortRangeEnd?: string; 
  public get denyDestinationPortRangeEnd() {
    return this.getStringAttribute('deny_destination_port_range_end');
  }
  public set denyDestinationPortRangeEnd(value: string) {
    this._denyDestinationPortRangeEnd = value;
  }
  public resetDenyDestinationPortRangeEnd() {
    this._denyDestinationPortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationPortRangeEndInput() {
    return this._denyDestinationPortRangeEnd;
  }

  // deny_destination_port_range_start - computed: false, optional: true, required: false
  private _denyDestinationPortRangeStart?: string; 
  public get denyDestinationPortRangeStart() {
    return this.getStringAttribute('deny_destination_port_range_start');
  }
  public set denyDestinationPortRangeStart(value: string) {
    this._denyDestinationPortRangeStart = value;
  }
  public resetDenyDestinationPortRangeStart() {
    this._denyDestinationPortRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationPortRangeStartInput() {
    return this._denyDestinationPortRangeStart;
  }

  // deny_destination_prefix_length - computed: false, optional: true, required: false
  private _denyDestinationPrefixLength?: number; 
  public get denyDestinationPrefixLength() {
    return this.getNumberAttribute('deny_destination_prefix_length');
  }
  public set denyDestinationPrefixLength(value: number) {
    this._denyDestinationPrefixLength = value;
  }
  public resetDenyDestinationPrefixLength() {
    this._denyDestinationPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationPrefixLengthInput() {
    return this._denyDestinationPrefixLength;
  }

  // deny_destination_wildcard_mask - computed: false, optional: true, required: false
  private _denyDestinationWildcardMask?: string; 
  public get denyDestinationWildcardMask() {
    return this.getStringAttribute('deny_destination_wildcard_mask');
  }
  public set denyDestinationWildcardMask(value: string) {
    this._denyDestinationWildcardMask = value;
  }
  public resetDenyDestinationWildcardMask() {
    this._denyDestinationWildcardMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDestinationWildcardMaskInput() {
    return this._denyDestinationWildcardMask;
  }

  // deny_dscp - computed: false, optional: true, required: false
  private _denyDscp?: string; 
  public get denyDscp() {
    return this.getStringAttribute('deny_dscp');
  }
  public set denyDscp(value: string) {
    this._denyDscp = value;
  }
  public resetDenyDscp() {
    this._denyDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDscpInput() {
    return this._denyDscp;
  }

  // deny_dscp_eq - computed: false, optional: true, required: false
  private _denyDscpEq?: string; 
  public get denyDscpEq() {
    return this.getStringAttribute('deny_dscp_eq');
  }
  public set denyDscpEq(value: string) {
    this._denyDscpEq = value;
  }
  public resetDenyDscpEq() {
    this._denyDscpEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDscpEqInput() {
    return this._denyDscpEq;
  }

  // deny_dscp_gt - computed: false, optional: true, required: false
  private _denyDscpGt?: string; 
  public get denyDscpGt() {
    return this.getStringAttribute('deny_dscp_gt');
  }
  public set denyDscpGt(value: string) {
    this._denyDscpGt = value;
  }
  public resetDenyDscpGt() {
    this._denyDscpGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDscpGtInput() {
    return this._denyDscpGt;
  }

  // deny_dscp_lt - computed: false, optional: true, required: false
  private _denyDscpLt?: string; 
  public get denyDscpLt() {
    return this.getStringAttribute('deny_dscp_lt');
  }
  public set denyDscpLt(value: string) {
    this._denyDscpLt = value;
  }
  public resetDenyDscpLt() {
    this._denyDscpLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDscpLtInput() {
    return this._denyDscpLt;
  }

  // deny_dscp_neq - computed: false, optional: true, required: false
  private _denyDscpNeq?: string; 
  public get denyDscpNeq() {
    return this.getStringAttribute('deny_dscp_neq');
  }
  public set denyDscpNeq(value: string) {
    this._denyDscpNeq = value;
  }
  public resetDenyDscpNeq() {
    this._denyDscpNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDscpNeqInput() {
    return this._denyDscpNeq;
  }

  // deny_dscp_range_end - computed: false, optional: true, required: false
  private _denyDscpRangeEnd?: string; 
  public get denyDscpRangeEnd() {
    return this.getStringAttribute('deny_dscp_range_end');
  }
  public set denyDscpRangeEnd(value: string) {
    this._denyDscpRangeEnd = value;
  }
  public resetDenyDscpRangeEnd() {
    this._denyDscpRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDscpRangeEndInput() {
    return this._denyDscpRangeEnd;
  }

  // deny_dscp_range_start - computed: false, optional: true, required: false
  private _denyDscpRangeStart?: string; 
  public get denyDscpRangeStart() {
    return this.getStringAttribute('deny_dscp_range_start');
  }
  public set denyDscpRangeStart(value: string) {
    this._denyDscpRangeStart = value;
  }
  public resetDenyDscpRangeStart() {
    this._denyDscpRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDscpRangeStartInput() {
    return this._denyDscpRangeStart;
  }

  // deny_eq - computed: false, optional: true, required: false
  private _denyEq?: string; 
  public get denyEq() {
    return this.getStringAttribute('deny_eq');
  }
  public set denyEq(value: string) {
    this._denyEq = value;
  }
  public resetDenyEq() {
    this._denyEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyEqInput() {
    return this._denyEq;
  }

  // deny_fragment_offset_eq - computed: false, optional: true, required: false
  private _denyFragmentOffsetEq?: number; 
  public get denyFragmentOffsetEq() {
    return this.getNumberAttribute('deny_fragment_offset_eq');
  }
  public set denyFragmentOffsetEq(value: number) {
    this._denyFragmentOffsetEq = value;
  }
  public resetDenyFragmentOffsetEq() {
    this._denyFragmentOffsetEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFragmentOffsetEqInput() {
    return this._denyFragmentOffsetEq;
  }

  // deny_fragment_offset_gt - computed: false, optional: true, required: false
  private _denyFragmentOffsetGt?: number; 
  public get denyFragmentOffsetGt() {
    return this.getNumberAttribute('deny_fragment_offset_gt');
  }
  public set denyFragmentOffsetGt(value: number) {
    this._denyFragmentOffsetGt = value;
  }
  public resetDenyFragmentOffsetGt() {
    this._denyFragmentOffsetGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFragmentOffsetGtInput() {
    return this._denyFragmentOffsetGt;
  }

  // deny_fragment_offset_lt - computed: false, optional: true, required: false
  private _denyFragmentOffsetLt?: number; 
  public get denyFragmentOffsetLt() {
    return this.getNumberAttribute('deny_fragment_offset_lt');
  }
  public set denyFragmentOffsetLt(value: number) {
    this._denyFragmentOffsetLt = value;
  }
  public resetDenyFragmentOffsetLt() {
    this._denyFragmentOffsetLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFragmentOffsetLtInput() {
    return this._denyFragmentOffsetLt;
  }

  // deny_fragment_offset_neq - computed: false, optional: true, required: false
  private _denyFragmentOffsetNeq?: number; 
  public get denyFragmentOffsetNeq() {
    return this.getNumberAttribute('deny_fragment_offset_neq');
  }
  public set denyFragmentOffsetNeq(value: number) {
    this._denyFragmentOffsetNeq = value;
  }
  public resetDenyFragmentOffsetNeq() {
    this._denyFragmentOffsetNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFragmentOffsetNeqInput() {
    return this._denyFragmentOffsetNeq;
  }

  // deny_fragment_offset_range_end - computed: false, optional: true, required: false
  private _denyFragmentOffsetRangeEnd?: number; 
  public get denyFragmentOffsetRangeEnd() {
    return this.getNumberAttribute('deny_fragment_offset_range_end');
  }
  public set denyFragmentOffsetRangeEnd(value: number) {
    this._denyFragmentOffsetRangeEnd = value;
  }
  public resetDenyFragmentOffsetRangeEnd() {
    this._denyFragmentOffsetRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFragmentOffsetRangeEndInput() {
    return this._denyFragmentOffsetRangeEnd;
  }

  // deny_fragment_offset_range_start - computed: false, optional: true, required: false
  private _denyFragmentOffsetRangeStart?: number; 
  public get denyFragmentOffsetRangeStart() {
    return this.getNumberAttribute('deny_fragment_offset_range_start');
  }
  public set denyFragmentOffsetRangeStart(value: number) {
    this._denyFragmentOffsetRangeStart = value;
  }
  public resetDenyFragmentOffsetRangeStart() {
    this._denyFragmentOffsetRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFragmentOffsetRangeStartInput() {
    return this._denyFragmentOffsetRangeStart;
  }

  // deny_fragment_type - computed: false, optional: true, required: false
  private _denyFragmentType?: string; 
  public get denyFragmentType() {
    return this.getStringAttribute('deny_fragment_type');
  }
  public set denyFragmentType(value: string) {
    this._denyFragmentType = value;
  }
  public resetDenyFragmentType() {
    this._denyFragmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFragmentTypeInput() {
    return this._denyFragmentType;
  }

  // deny_fragments - computed: false, optional: true, required: false
  private _denyFragments?: boolean | cdktf.IResolvable; 
  public get denyFragments() {
    return this.getBooleanAttribute('deny_fragments');
  }
  public set denyFragments(value: boolean | cdktf.IResolvable) {
    this._denyFragments = value;
  }
  public resetDenyFragments() {
    this._denyFragments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFragmentsInput() {
    return this._denyFragments;
  }

  // deny_icmp_message_code - computed: false, optional: true, required: false
  private _denyIcmpMessageCode?: number; 
  public get denyIcmpMessageCode() {
    return this.getNumberAttribute('deny_icmp_message_code');
  }
  public set denyIcmpMessageCode(value: number) {
    this._denyIcmpMessageCode = value;
  }
  public resetDenyIcmpMessageCode() {
    this._denyIcmpMessageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyIcmpMessageCodeInput() {
    return this._denyIcmpMessageCode;
  }

  // deny_icmp_message_type - computed: false, optional: true, required: false
  private _denyIcmpMessageType?: number; 
  public get denyIcmpMessageType() {
    return this.getNumberAttribute('deny_icmp_message_type');
  }
  public set denyIcmpMessageType(value: number) {
    this._denyIcmpMessageType = value;
  }
  public resetDenyIcmpMessageType() {
    this._denyIcmpMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyIcmpMessageTypeInput() {
    return this._denyIcmpMessageType;
  }

  // deny_icmp_message_type_name - computed: false, optional: true, required: false
  private _denyIcmpMessageTypeName?: string; 
  public get denyIcmpMessageTypeName() {
    return this.getStringAttribute('deny_icmp_message_type_name');
  }
  public set denyIcmpMessageTypeName(value: string) {
    this._denyIcmpMessageTypeName = value;
  }
  public resetDenyIcmpMessageTypeName() {
    this._denyIcmpMessageTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyIcmpMessageTypeNameInput() {
    return this._denyIcmpMessageTypeName;
  }

  // deny_icmp_off - computed: false, optional: true, required: false
  private _denyIcmpOff?: boolean | cdktf.IResolvable; 
  public get denyIcmpOff() {
    return this.getBooleanAttribute('deny_icmp_off');
  }
  public set denyIcmpOff(value: boolean | cdktf.IResolvable) {
    this._denyIcmpOff = value;
  }
  public resetDenyIcmpOff() {
    this._denyIcmpOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyIcmpOffInput() {
    return this._denyIcmpOff;
  }

  // deny_icmp_on - computed: false, optional: true, required: false
  private _denyIcmpOn?: boolean | cdktf.IResolvable; 
  public get denyIcmpOn() {
    return this.getBooleanAttribute('deny_icmp_on');
  }
  public set denyIcmpOn(value: boolean | cdktf.IResolvable) {
    this._denyIcmpOn = value;
  }
  public resetDenyIcmpOn() {
    this._denyIcmpOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyIcmpOnInput() {
    return this._denyIcmpOn;
  }

  // deny_igmp_type - computed: false, optional: true, required: false
  private _denyIgmpType?: string; 
  public get denyIgmpType() {
    return this.getStringAttribute('deny_igmp_type');
  }
  public set denyIgmpType(value: string) {
    this._denyIgmpType = value;
  }
  public resetDenyIgmpType() {
    this._denyIgmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyIgmpTypeInput() {
    return this._denyIgmpType;
  }

  // deny_log - computed: false, optional: true, required: false
  private _denyLog?: boolean | cdktf.IResolvable; 
  public get denyLog() {
    return this.getBooleanAttribute('deny_log');
  }
  public set denyLog(value: boolean | cdktf.IResolvable) {
    this._denyLog = value;
  }
  public resetDenyLog() {
    this._denyLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyLogTfInput() {
    return this._denyLog;
  }

  // deny_log_input - computed: false, optional: true, required: false
  private _denyLogInput?: boolean | cdktf.IResolvable; 
  public get denyLogInput() {
    return this.getBooleanAttribute('deny_log_input');
  }
  public set denyLogInput(value: boolean | cdktf.IResolvable) {
    this._denyLogInput = value;
  }
  public resetDenyLogInput() {
    this._denyLogInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyLogInputInput() {
    return this._denyLogInput;
  }

  // deny_nexthop1_ipv4 - computed: false, optional: true, required: false
  private _denyNexthop1Ipv4?: string; 
  public get denyNexthop1Ipv4() {
    return this.getStringAttribute('deny_nexthop1_ipv4');
  }
  public set denyNexthop1Ipv4(value: string) {
    this._denyNexthop1Ipv4 = value;
  }
  public resetDenyNexthop1Ipv4() {
    this._denyNexthop1Ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop1Ipv4Input() {
    return this._denyNexthop1Ipv4;
  }

  // deny_nexthop1_track - computed: false, optional: true, required: false
  private _denyNexthop1Track?: string; 
  public get denyNexthop1Track() {
    return this.getStringAttribute('deny_nexthop1_track');
  }
  public set denyNexthop1Track(value: string) {
    this._denyNexthop1Track = value;
  }
  public resetDenyNexthop1Track() {
    this._denyNexthop1Track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop1TrackInput() {
    return this._denyNexthop1Track;
  }

  // deny_nexthop1_vrf - computed: false, optional: true, required: false
  private _denyNexthop1Vrf?: string; 
  public get denyNexthop1Vrf() {
    return this.getStringAttribute('deny_nexthop1_vrf');
  }
  public set denyNexthop1Vrf(value: string) {
    this._denyNexthop1Vrf = value;
  }
  public resetDenyNexthop1Vrf() {
    this._denyNexthop1Vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop1VrfInput() {
    return this._denyNexthop1Vrf;
  }

  // deny_nexthop2_ipv4 - computed: false, optional: true, required: false
  private _denyNexthop2Ipv4?: string; 
  public get denyNexthop2Ipv4() {
    return this.getStringAttribute('deny_nexthop2_ipv4');
  }
  public set denyNexthop2Ipv4(value: string) {
    this._denyNexthop2Ipv4 = value;
  }
  public resetDenyNexthop2Ipv4() {
    this._denyNexthop2Ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop2Ipv4Input() {
    return this._denyNexthop2Ipv4;
  }

  // deny_nexthop2_track - computed: false, optional: true, required: false
  private _denyNexthop2Track?: string; 
  public get denyNexthop2Track() {
    return this.getStringAttribute('deny_nexthop2_track');
  }
  public set denyNexthop2Track(value: string) {
    this._denyNexthop2Track = value;
  }
  public resetDenyNexthop2Track() {
    this._denyNexthop2Track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop2TrackInput() {
    return this._denyNexthop2Track;
  }

  // deny_nexthop2_vrf - computed: false, optional: true, required: false
  private _denyNexthop2Vrf?: string; 
  public get denyNexthop2Vrf() {
    return this.getStringAttribute('deny_nexthop2_vrf');
  }
  public set denyNexthop2Vrf(value: string) {
    this._denyNexthop2Vrf = value;
  }
  public resetDenyNexthop2Vrf() {
    this._denyNexthop2Vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop2VrfInput() {
    return this._denyNexthop2Vrf;
  }

  // deny_nexthop3_ipv4 - computed: false, optional: true, required: false
  private _denyNexthop3Ipv4?: string; 
  public get denyNexthop3Ipv4() {
    return this.getStringAttribute('deny_nexthop3_ipv4');
  }
  public set denyNexthop3Ipv4(value: string) {
    this._denyNexthop3Ipv4 = value;
  }
  public resetDenyNexthop3Ipv4() {
    this._denyNexthop3Ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop3Ipv4Input() {
    return this._denyNexthop3Ipv4;
  }

  // deny_nexthop3_track - computed: false, optional: true, required: false
  private _denyNexthop3Track?: string; 
  public get denyNexthop3Track() {
    return this.getStringAttribute('deny_nexthop3_track');
  }
  public set denyNexthop3Track(value: string) {
    this._denyNexthop3Track = value;
  }
  public resetDenyNexthop3Track() {
    this._denyNexthop3Track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop3TrackInput() {
    return this._denyNexthop3Track;
  }

  // deny_nexthop3_vrf - computed: false, optional: true, required: false
  private _denyNexthop3Vrf?: string; 
  public get denyNexthop3Vrf() {
    return this.getStringAttribute('deny_nexthop3_vrf');
  }
  public set denyNexthop3Vrf(value: string) {
    this._denyNexthop3Vrf = value;
  }
  public resetDenyNexthop3Vrf() {
    this._denyNexthop3Vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNexthop3VrfInput() {
    return this._denyNexthop3Vrf;
  }

  // deny_packet_length_eq - computed: false, optional: true, required: false
  private _denyPacketLengthEq?: number; 
  public get denyPacketLengthEq() {
    return this.getNumberAttribute('deny_packet_length_eq');
  }
  public set denyPacketLengthEq(value: number) {
    this._denyPacketLengthEq = value;
  }
  public resetDenyPacketLengthEq() {
    this._denyPacketLengthEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPacketLengthEqInput() {
    return this._denyPacketLengthEq;
  }

  // deny_packet_length_gt - computed: false, optional: true, required: false
  private _denyPacketLengthGt?: number; 
  public get denyPacketLengthGt() {
    return this.getNumberAttribute('deny_packet_length_gt');
  }
  public set denyPacketLengthGt(value: number) {
    this._denyPacketLengthGt = value;
  }
  public resetDenyPacketLengthGt() {
    this._denyPacketLengthGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPacketLengthGtInput() {
    return this._denyPacketLengthGt;
  }

  // deny_packet_length_lt - computed: false, optional: true, required: false
  private _denyPacketLengthLt?: number; 
  public get denyPacketLengthLt() {
    return this.getNumberAttribute('deny_packet_length_lt');
  }
  public set denyPacketLengthLt(value: number) {
    this._denyPacketLengthLt = value;
  }
  public resetDenyPacketLengthLt() {
    this._denyPacketLengthLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPacketLengthLtInput() {
    return this._denyPacketLengthLt;
  }

  // deny_packet_length_neq - computed: false, optional: true, required: false
  private _denyPacketLengthNeq?: number; 
  public get denyPacketLengthNeq() {
    return this.getNumberAttribute('deny_packet_length_neq');
  }
  public set denyPacketLengthNeq(value: number) {
    this._denyPacketLengthNeq = value;
  }
  public resetDenyPacketLengthNeq() {
    this._denyPacketLengthNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPacketLengthNeqInput() {
    return this._denyPacketLengthNeq;
  }

  // deny_packet_length_range_end - computed: false, optional: true, required: false
  private _denyPacketLengthRangeEnd?: number; 
  public get denyPacketLengthRangeEnd() {
    return this.getNumberAttribute('deny_packet_length_range_end');
  }
  public set denyPacketLengthRangeEnd(value: number) {
    this._denyPacketLengthRangeEnd = value;
  }
  public resetDenyPacketLengthRangeEnd() {
    this._denyPacketLengthRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPacketLengthRangeEndInput() {
    return this._denyPacketLengthRangeEnd;
  }

  // deny_packet_length_range_start - computed: false, optional: true, required: false
  private _denyPacketLengthRangeStart?: number; 
  public get denyPacketLengthRangeStart() {
    return this.getNumberAttribute('deny_packet_length_range_start');
  }
  public set denyPacketLengthRangeStart(value: number) {
    this._denyPacketLengthRangeStart = value;
  }
  public resetDenyPacketLengthRangeStart() {
    this._denyPacketLengthRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPacketLengthRangeStartInput() {
    return this._denyPacketLengthRangeStart;
  }

  // deny_police_peak_rate - computed: false, optional: true, required: false
  private _denyPolicePeakRate?: number; 
  public get denyPolicePeakRate() {
    return this.getNumberAttribute('deny_police_peak_rate');
  }
  public set denyPolicePeakRate(value: number) {
    this._denyPolicePeakRate = value;
  }
  public resetDenyPolicePeakRate() {
    this._denyPolicePeakRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPolicePeakRateInput() {
    return this._denyPolicePeakRate;
  }

  // deny_police_peak_unit - computed: false, optional: true, required: false
  private _denyPolicePeakUnit?: string; 
  public get denyPolicePeakUnit() {
    return this.getStringAttribute('deny_police_peak_unit');
  }
  public set denyPolicePeakUnit(value: string) {
    this._denyPolicePeakUnit = value;
  }
  public resetDenyPolicePeakUnit() {
    this._denyPolicePeakUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPolicePeakUnitInput() {
    return this._denyPolicePeakUnit;
  }

  // deny_police_priority - computed: false, optional: true, required: false
  private _denyPolicePriority?: string; 
  public get denyPolicePriority() {
    return this.getStringAttribute('deny_police_priority');
  }
  public set denyPolicePriority(value: string) {
    this._denyPolicePriority = value;
  }
  public resetDenyPolicePriority() {
    this._denyPolicePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPolicePriorityInput() {
    return this._denyPolicePriority;
  }

  // deny_police_unit - computed: false, optional: true, required: false
  private _denyPoliceUnit?: string; 
  public get denyPoliceUnit() {
    return this.getStringAttribute('deny_police_unit');
  }
  public set denyPoliceUnit(value: string) {
    this._denyPoliceUnit = value;
  }
  public resetDenyPoliceUnit() {
    this._denyPoliceUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPoliceUnitInput() {
    return this._denyPoliceUnit;
  }

  // deny_police_value - computed: false, optional: true, required: false
  private _denyPoliceValue?: number; 
  public get denyPoliceValue() {
    return this.getNumberAttribute('deny_police_value');
  }
  public set denyPoliceValue(value: number) {
    this._denyPoliceValue = value;
  }
  public resetDenyPoliceValue() {
    this._denyPoliceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPoliceValueInput() {
    return this._denyPoliceValue;
  }

  // deny_precedence - computed: false, optional: true, required: false
  private _denyPrecedence?: string; 
  public get denyPrecedence() {
    return this.getStringAttribute('deny_precedence');
  }
  public set denyPrecedence(value: string) {
    this._denyPrecedence = value;
  }
  public resetDenyPrecedence() {
    this._denyPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPrecedenceInput() {
    return this._denyPrecedence;
  }

  // deny_protocol - computed: false, optional: true, required: false
  private _denyProtocol?: string; 
  public get denyProtocol() {
    return this.getStringAttribute('deny_protocol');
  }
  public set denyProtocol(value: string) {
    this._denyProtocol = value;
  }
  public resetDenyProtocol() {
    this._denyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyProtocolInput() {
    return this._denyProtocol;
  }

  // deny_range_end_protocol - computed: false, optional: true, required: false
  private _denyRangeEndProtocol?: string; 
  public get denyRangeEndProtocol() {
    return this.getStringAttribute('deny_range_end_protocol');
  }
  public set denyRangeEndProtocol(value: string) {
    this._denyRangeEndProtocol = value;
  }
  public resetDenyRangeEndProtocol() {
    this._denyRangeEndProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRangeEndProtocolInput() {
    return this._denyRangeEndProtocol;
  }

  // deny_range_start_protocol - computed: false, optional: true, required: false
  private _denyRangeStartProtocol?: string; 
  public get denyRangeStartProtocol() {
    return this.getStringAttribute('deny_range_start_protocol');
  }
  public set denyRangeStartProtocol(value: string) {
    this._denyRangeStartProtocol = value;
  }
  public resetDenyRangeStartProtocol() {
    this._denyRangeStartProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRangeStartProtocolInput() {
    return this._denyRangeStartProtocol;
  }

  // deny_set_qos_group - computed: false, optional: true, required: false
  private _denySetQosGroup?: number; 
  public get denySetQosGroup() {
    return this.getNumberAttribute('deny_set_qos_group');
  }
  public set denySetQosGroup(value: number) {
    this._denySetQosGroup = value;
  }
  public resetDenySetQosGroup() {
    this._denySetQosGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySetQosGroupInput() {
    return this._denySetQosGroup;
  }

  // deny_set_ttl - computed: false, optional: true, required: false
  private _denySetTtl?: number; 
  public get denySetTtl() {
    return this.getNumberAttribute('deny_set_ttl');
  }
  public set denySetTtl(value: number) {
    this._denySetTtl = value;
  }
  public resetDenySetTtl() {
    this._denySetTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySetTtlInput() {
    return this._denySetTtl;
  }

  // deny_source_address - computed: false, optional: true, required: false
  private _denySourceAddress?: string; 
  public get denySourceAddress() {
    return this.getStringAttribute('deny_source_address');
  }
  public set denySourceAddress(value: string) {
    this._denySourceAddress = value;
  }
  public resetDenySourceAddress() {
    this._denySourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourceAddressInput() {
    return this._denySourceAddress;
  }

  // deny_source_any - computed: false, optional: true, required: false
  private _denySourceAny?: boolean | cdktf.IResolvable; 
  public get denySourceAny() {
    return this.getBooleanAttribute('deny_source_any');
  }
  public set denySourceAny(value: boolean | cdktf.IResolvable) {
    this._denySourceAny = value;
  }
  public resetDenySourceAny() {
    this._denySourceAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourceAnyInput() {
    return this._denySourceAny;
  }

  // deny_source_host - computed: false, optional: true, required: false
  private _denySourceHost?: string; 
  public get denySourceHost() {
    return this.getStringAttribute('deny_source_host');
  }
  public set denySourceHost(value: string) {
    this._denySourceHost = value;
  }
  public resetDenySourceHost() {
    this._denySourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourceHostInput() {
    return this._denySourceHost;
  }

  // deny_source_net_group - computed: false, optional: true, required: false
  private _denySourceNetGroup?: string; 
  public get denySourceNetGroup() {
    return this.getStringAttribute('deny_source_net_group');
  }
  public set denySourceNetGroup(value: string) {
    this._denySourceNetGroup = value;
  }
  public resetDenySourceNetGroup() {
    this._denySourceNetGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourceNetGroupInput() {
    return this._denySourceNetGroup;
  }

  // deny_source_port_eq - computed: false, optional: true, required: false
  private _denySourcePortEq?: string; 
  public get denySourcePortEq() {
    return this.getStringAttribute('deny_source_port_eq');
  }
  public set denySourcePortEq(value: string) {
    this._denySourcePortEq = value;
  }
  public resetDenySourcePortEq() {
    this._denySourcePortEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcePortEqInput() {
    return this._denySourcePortEq;
  }

  // deny_source_port_group - computed: false, optional: true, required: false
  private _denySourcePortGroup?: string; 
  public get denySourcePortGroup() {
    return this.getStringAttribute('deny_source_port_group');
  }
  public set denySourcePortGroup(value: string) {
    this._denySourcePortGroup = value;
  }
  public resetDenySourcePortGroup() {
    this._denySourcePortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcePortGroupInput() {
    return this._denySourcePortGroup;
  }

  // deny_source_port_gt - computed: false, optional: true, required: false
  private _denySourcePortGt?: string; 
  public get denySourcePortGt() {
    return this.getStringAttribute('deny_source_port_gt');
  }
  public set denySourcePortGt(value: string) {
    this._denySourcePortGt = value;
  }
  public resetDenySourcePortGt() {
    this._denySourcePortGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcePortGtInput() {
    return this._denySourcePortGt;
  }

  // deny_source_port_lt - computed: false, optional: true, required: false
  private _denySourcePortLt?: string; 
  public get denySourcePortLt() {
    return this.getStringAttribute('deny_source_port_lt');
  }
  public set denySourcePortLt(value: string) {
    this._denySourcePortLt = value;
  }
  public resetDenySourcePortLt() {
    this._denySourcePortLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcePortLtInput() {
    return this._denySourcePortLt;
  }

  // deny_source_port_neq - computed: false, optional: true, required: false
  private _denySourcePortNeq?: string; 
  public get denySourcePortNeq() {
    return this.getStringAttribute('deny_source_port_neq');
  }
  public set denySourcePortNeq(value: string) {
    this._denySourcePortNeq = value;
  }
  public resetDenySourcePortNeq() {
    this._denySourcePortNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcePortNeqInput() {
    return this._denySourcePortNeq;
  }

  // deny_source_port_range_end - computed: false, optional: true, required: false
  private _denySourcePortRangeEnd?: string; 
  public get denySourcePortRangeEnd() {
    return this.getStringAttribute('deny_source_port_range_end');
  }
  public set denySourcePortRangeEnd(value: string) {
    this._denySourcePortRangeEnd = value;
  }
  public resetDenySourcePortRangeEnd() {
    this._denySourcePortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcePortRangeEndInput() {
    return this._denySourcePortRangeEnd;
  }

  // deny_source_port_range_start - computed: false, optional: true, required: false
  private _denySourcePortRangeStart?: string; 
  public get denySourcePortRangeStart() {
    return this.getStringAttribute('deny_source_port_range_start');
  }
  public set denySourcePortRangeStart(value: string) {
    this._denySourcePortRangeStart = value;
  }
  public resetDenySourcePortRangeStart() {
    this._denySourcePortRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcePortRangeStartInput() {
    return this._denySourcePortRangeStart;
  }

  // deny_source_prefix_length - computed: false, optional: true, required: false
  private _denySourcePrefixLength?: number; 
  public get denySourcePrefixLength() {
    return this.getNumberAttribute('deny_source_prefix_length');
  }
  public set denySourcePrefixLength(value: number) {
    this._denySourcePrefixLength = value;
  }
  public resetDenySourcePrefixLength() {
    this._denySourcePrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourcePrefixLengthInput() {
    return this._denySourcePrefixLength;
  }

  // deny_source_wildcard_mask - computed: false, optional: true, required: false
  private _denySourceWildcardMask?: string; 
  public get denySourceWildcardMask() {
    return this.getStringAttribute('deny_source_wildcard_mask');
  }
  public set denySourceWildcardMask(value: string) {
    this._denySourceWildcardMask = value;
  }
  public resetDenySourceWildcardMask() {
    this._denySourceWildcardMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denySourceWildcardMaskInput() {
    return this._denySourceWildcardMask;
  }

  // deny_ttl_eq - computed: false, optional: true, required: false
  private _denyTtlEq?: number; 
  public get denyTtlEq() {
    return this.getNumberAttribute('deny_ttl_eq');
  }
  public set denyTtlEq(value: number) {
    this._denyTtlEq = value;
  }
  public resetDenyTtlEq() {
    this._denyTtlEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyTtlEqInput() {
    return this._denyTtlEq;
  }

  // deny_ttl_gt - computed: false, optional: true, required: false
  private _denyTtlGt?: number; 
  public get denyTtlGt() {
    return this.getNumberAttribute('deny_ttl_gt');
  }
  public set denyTtlGt(value: number) {
    this._denyTtlGt = value;
  }
  public resetDenyTtlGt() {
    this._denyTtlGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyTtlGtInput() {
    return this._denyTtlGt;
  }

  // deny_ttl_lt - computed: false, optional: true, required: false
  private _denyTtlLt?: number; 
  public get denyTtlLt() {
    return this.getNumberAttribute('deny_ttl_lt');
  }
  public set denyTtlLt(value: number) {
    this._denyTtlLt = value;
  }
  public resetDenyTtlLt() {
    this._denyTtlLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyTtlLtInput() {
    return this._denyTtlLt;
  }

  // deny_ttl_neq - computed: false, optional: true, required: false
  private _denyTtlNeq?: number; 
  public get denyTtlNeq() {
    return this.getNumberAttribute('deny_ttl_neq');
  }
  public set denyTtlNeq(value: number) {
    this._denyTtlNeq = value;
  }
  public resetDenyTtlNeq() {
    this._denyTtlNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyTtlNeqInput() {
    return this._denyTtlNeq;
  }

  // deny_ttl_range_end - computed: false, optional: true, required: false
  private _denyTtlRangeEnd?: number; 
  public get denyTtlRangeEnd() {
    return this.getNumberAttribute('deny_ttl_range_end');
  }
  public set denyTtlRangeEnd(value: number) {
    this._denyTtlRangeEnd = value;
  }
  public resetDenyTtlRangeEnd() {
    this._denyTtlRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyTtlRangeEndInput() {
    return this._denyTtlRangeEnd;
  }

  // deny_ttl_range_start - computed: false, optional: true, required: false
  private _denyTtlRangeStart?: number; 
  public get denyTtlRangeStart() {
    return this.getNumberAttribute('deny_ttl_range_start');
  }
  public set denyTtlRangeStart(value: number) {
    this._denyTtlRangeStart = value;
  }
  public resetDenyTtlRangeStart() {
    this._denyTtlRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyTtlRangeStartInput() {
    return this._denyTtlRangeStart;
  }

  // permit_capture - computed: false, optional: true, required: false
  private _permitCapture?: boolean | cdktf.IResolvable; 
  public get permitCapture() {
    return this.getBooleanAttribute('permit_capture');
  }
  public set permitCapture(value: boolean | cdktf.IResolvable) {
    this._permitCapture = value;
  }
  public resetPermitCapture() {
    this._permitCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitCaptureInput() {
    return this._permitCapture;
  }

  // permit_counter - computed: false, optional: true, required: false
  private _permitCounter?: string; 
  public get permitCounter() {
    return this.getStringAttribute('permit_counter');
  }
  public set permitCounter(value: string) {
    this._permitCounter = value;
  }
  public resetPermitCounter() {
    this._permitCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitCounterInput() {
    return this._permitCounter;
  }

  // permit_default - computed: false, optional: true, required: false
  private _permitDefault?: boolean | cdktf.IResolvable; 
  public get permitDefault() {
    return this.getBooleanAttribute('permit_default');
  }
  public set permitDefault(value: boolean | cdktf.IResolvable) {
    this._permitDefault = value;
  }
  public resetPermitDefault() {
    this._permitDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDefaultInput() {
    return this._permitDefault;
  }

  // permit_destination_address - computed: false, optional: true, required: false
  private _permitDestinationAddress?: string; 
  public get permitDestinationAddress() {
    return this.getStringAttribute('permit_destination_address');
  }
  public set permitDestinationAddress(value: string) {
    this._permitDestinationAddress = value;
  }
  public resetPermitDestinationAddress() {
    this._permitDestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationAddressInput() {
    return this._permitDestinationAddress;
  }

  // permit_destination_any - computed: false, optional: true, required: false
  private _permitDestinationAny?: boolean | cdktf.IResolvable; 
  public get permitDestinationAny() {
    return this.getBooleanAttribute('permit_destination_any');
  }
  public set permitDestinationAny(value: boolean | cdktf.IResolvable) {
    this._permitDestinationAny = value;
  }
  public resetPermitDestinationAny() {
    this._permitDestinationAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationAnyInput() {
    return this._permitDestinationAny;
  }

  // permit_destination_host - computed: false, optional: true, required: false
  private _permitDestinationHost?: string; 
  public get permitDestinationHost() {
    return this.getStringAttribute('permit_destination_host');
  }
  public set permitDestinationHost(value: string) {
    this._permitDestinationHost = value;
  }
  public resetPermitDestinationHost() {
    this._permitDestinationHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationHostInput() {
    return this._permitDestinationHost;
  }

  // permit_destination_net_group - computed: false, optional: true, required: false
  private _permitDestinationNetGroup?: string; 
  public get permitDestinationNetGroup() {
    return this.getStringAttribute('permit_destination_net_group');
  }
  public set permitDestinationNetGroup(value: string) {
    this._permitDestinationNetGroup = value;
  }
  public resetPermitDestinationNetGroup() {
    this._permitDestinationNetGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationNetGroupInput() {
    return this._permitDestinationNetGroup;
  }

  // permit_destination_port_eq - computed: false, optional: true, required: false
  private _permitDestinationPortEq?: string; 
  public get permitDestinationPortEq() {
    return this.getStringAttribute('permit_destination_port_eq');
  }
  public set permitDestinationPortEq(value: string) {
    this._permitDestinationPortEq = value;
  }
  public resetPermitDestinationPortEq() {
    this._permitDestinationPortEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationPortEqInput() {
    return this._permitDestinationPortEq;
  }

  // permit_destination_port_group - computed: false, optional: true, required: false
  private _permitDestinationPortGroup?: string; 
  public get permitDestinationPortGroup() {
    return this.getStringAttribute('permit_destination_port_group');
  }
  public set permitDestinationPortGroup(value: string) {
    this._permitDestinationPortGroup = value;
  }
  public resetPermitDestinationPortGroup() {
    this._permitDestinationPortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationPortGroupInput() {
    return this._permitDestinationPortGroup;
  }

  // permit_destination_port_gt - computed: false, optional: true, required: false
  private _permitDestinationPortGt?: string; 
  public get permitDestinationPortGt() {
    return this.getStringAttribute('permit_destination_port_gt');
  }
  public set permitDestinationPortGt(value: string) {
    this._permitDestinationPortGt = value;
  }
  public resetPermitDestinationPortGt() {
    this._permitDestinationPortGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationPortGtInput() {
    return this._permitDestinationPortGt;
  }

  // permit_destination_port_lt - computed: false, optional: true, required: false
  private _permitDestinationPortLt?: string; 
  public get permitDestinationPortLt() {
    return this.getStringAttribute('permit_destination_port_lt');
  }
  public set permitDestinationPortLt(value: string) {
    this._permitDestinationPortLt = value;
  }
  public resetPermitDestinationPortLt() {
    this._permitDestinationPortLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationPortLtInput() {
    return this._permitDestinationPortLt;
  }

  // permit_destination_port_neq - computed: false, optional: true, required: false
  private _permitDestinationPortNeq?: string; 
  public get permitDestinationPortNeq() {
    return this.getStringAttribute('permit_destination_port_neq');
  }
  public set permitDestinationPortNeq(value: string) {
    this._permitDestinationPortNeq = value;
  }
  public resetPermitDestinationPortNeq() {
    this._permitDestinationPortNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationPortNeqInput() {
    return this._permitDestinationPortNeq;
  }

  // permit_destination_port_range_end - computed: false, optional: true, required: false
  private _permitDestinationPortRangeEnd?: string; 
  public get permitDestinationPortRangeEnd() {
    return this.getStringAttribute('permit_destination_port_range_end');
  }
  public set permitDestinationPortRangeEnd(value: string) {
    this._permitDestinationPortRangeEnd = value;
  }
  public resetPermitDestinationPortRangeEnd() {
    this._permitDestinationPortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationPortRangeEndInput() {
    return this._permitDestinationPortRangeEnd;
  }

  // permit_destination_port_range_start - computed: false, optional: true, required: false
  private _permitDestinationPortRangeStart?: string; 
  public get permitDestinationPortRangeStart() {
    return this.getStringAttribute('permit_destination_port_range_start');
  }
  public set permitDestinationPortRangeStart(value: string) {
    this._permitDestinationPortRangeStart = value;
  }
  public resetPermitDestinationPortRangeStart() {
    this._permitDestinationPortRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationPortRangeStartInput() {
    return this._permitDestinationPortRangeStart;
  }

  // permit_destination_prefix_length - computed: false, optional: true, required: false
  private _permitDestinationPrefixLength?: number; 
  public get permitDestinationPrefixLength() {
    return this.getNumberAttribute('permit_destination_prefix_length');
  }
  public set permitDestinationPrefixLength(value: number) {
    this._permitDestinationPrefixLength = value;
  }
  public resetPermitDestinationPrefixLength() {
    this._permitDestinationPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationPrefixLengthInput() {
    return this._permitDestinationPrefixLength;
  }

  // permit_destination_wildcard_mask - computed: false, optional: true, required: false
  private _permitDestinationWildcardMask?: string; 
  public get permitDestinationWildcardMask() {
    return this.getStringAttribute('permit_destination_wildcard_mask');
  }
  public set permitDestinationWildcardMask(value: string) {
    this._permitDestinationWildcardMask = value;
  }
  public resetPermitDestinationWildcardMask() {
    this._permitDestinationWildcardMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDestinationWildcardMaskInput() {
    return this._permitDestinationWildcardMask;
  }

  // permit_dscp - computed: false, optional: true, required: false
  private _permitDscp?: string; 
  public get permitDscp() {
    return this.getStringAttribute('permit_dscp');
  }
  public set permitDscp(value: string) {
    this._permitDscp = value;
  }
  public resetPermitDscp() {
    this._permitDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDscpInput() {
    return this._permitDscp;
  }

  // permit_dscp_eq - computed: false, optional: true, required: false
  private _permitDscpEq?: string; 
  public get permitDscpEq() {
    return this.getStringAttribute('permit_dscp_eq');
  }
  public set permitDscpEq(value: string) {
    this._permitDscpEq = value;
  }
  public resetPermitDscpEq() {
    this._permitDscpEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDscpEqInput() {
    return this._permitDscpEq;
  }

  // permit_dscp_gt - computed: false, optional: true, required: false
  private _permitDscpGt?: string; 
  public get permitDscpGt() {
    return this.getStringAttribute('permit_dscp_gt');
  }
  public set permitDscpGt(value: string) {
    this._permitDscpGt = value;
  }
  public resetPermitDscpGt() {
    this._permitDscpGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDscpGtInput() {
    return this._permitDscpGt;
  }

  // permit_dscp_lt - computed: false, optional: true, required: false
  private _permitDscpLt?: string; 
  public get permitDscpLt() {
    return this.getStringAttribute('permit_dscp_lt');
  }
  public set permitDscpLt(value: string) {
    this._permitDscpLt = value;
  }
  public resetPermitDscpLt() {
    this._permitDscpLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDscpLtInput() {
    return this._permitDscpLt;
  }

  // permit_dscp_neq - computed: false, optional: true, required: false
  private _permitDscpNeq?: string; 
  public get permitDscpNeq() {
    return this.getStringAttribute('permit_dscp_neq');
  }
  public set permitDscpNeq(value: string) {
    this._permitDscpNeq = value;
  }
  public resetPermitDscpNeq() {
    this._permitDscpNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDscpNeqInput() {
    return this._permitDscpNeq;
  }

  // permit_dscp_range_end - computed: false, optional: true, required: false
  private _permitDscpRangeEnd?: string; 
  public get permitDscpRangeEnd() {
    return this.getStringAttribute('permit_dscp_range_end');
  }
  public set permitDscpRangeEnd(value: string) {
    this._permitDscpRangeEnd = value;
  }
  public resetPermitDscpRangeEnd() {
    this._permitDscpRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDscpRangeEndInput() {
    return this._permitDscpRangeEnd;
  }

  // permit_dscp_range_start - computed: false, optional: true, required: false
  private _permitDscpRangeStart?: string; 
  public get permitDscpRangeStart() {
    return this.getStringAttribute('permit_dscp_range_start');
  }
  public set permitDscpRangeStart(value: string) {
    this._permitDscpRangeStart = value;
  }
  public resetPermitDscpRangeStart() {
    this._permitDscpRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitDscpRangeStartInput() {
    return this._permitDscpRangeStart;
  }

  // permit_eq - computed: false, optional: true, required: false
  private _permitEq?: string; 
  public get permitEq() {
    return this.getStringAttribute('permit_eq');
  }
  public set permitEq(value: string) {
    this._permitEq = value;
  }
  public resetPermitEq() {
    this._permitEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitEqInput() {
    return this._permitEq;
  }

  // permit_fragment_offset_eq - computed: false, optional: true, required: false
  private _permitFragmentOffsetEq?: number; 
  public get permitFragmentOffsetEq() {
    return this.getNumberAttribute('permit_fragment_offset_eq');
  }
  public set permitFragmentOffsetEq(value: number) {
    this._permitFragmentOffsetEq = value;
  }
  public resetPermitFragmentOffsetEq() {
    this._permitFragmentOffsetEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFragmentOffsetEqInput() {
    return this._permitFragmentOffsetEq;
  }

  // permit_fragment_offset_gt - computed: false, optional: true, required: false
  private _permitFragmentOffsetGt?: number; 
  public get permitFragmentOffsetGt() {
    return this.getNumberAttribute('permit_fragment_offset_gt');
  }
  public set permitFragmentOffsetGt(value: number) {
    this._permitFragmentOffsetGt = value;
  }
  public resetPermitFragmentOffsetGt() {
    this._permitFragmentOffsetGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFragmentOffsetGtInput() {
    return this._permitFragmentOffsetGt;
  }

  // permit_fragment_offset_lt - computed: false, optional: true, required: false
  private _permitFragmentOffsetLt?: number; 
  public get permitFragmentOffsetLt() {
    return this.getNumberAttribute('permit_fragment_offset_lt');
  }
  public set permitFragmentOffsetLt(value: number) {
    this._permitFragmentOffsetLt = value;
  }
  public resetPermitFragmentOffsetLt() {
    this._permitFragmentOffsetLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFragmentOffsetLtInput() {
    return this._permitFragmentOffsetLt;
  }

  // permit_fragment_offset_neq - computed: false, optional: true, required: false
  private _permitFragmentOffsetNeq?: number; 
  public get permitFragmentOffsetNeq() {
    return this.getNumberAttribute('permit_fragment_offset_neq');
  }
  public set permitFragmentOffsetNeq(value: number) {
    this._permitFragmentOffsetNeq = value;
  }
  public resetPermitFragmentOffsetNeq() {
    this._permitFragmentOffsetNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFragmentOffsetNeqInput() {
    return this._permitFragmentOffsetNeq;
  }

  // permit_fragment_offset_range_end - computed: false, optional: true, required: false
  private _permitFragmentOffsetRangeEnd?: number; 
  public get permitFragmentOffsetRangeEnd() {
    return this.getNumberAttribute('permit_fragment_offset_range_end');
  }
  public set permitFragmentOffsetRangeEnd(value: number) {
    this._permitFragmentOffsetRangeEnd = value;
  }
  public resetPermitFragmentOffsetRangeEnd() {
    this._permitFragmentOffsetRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFragmentOffsetRangeEndInput() {
    return this._permitFragmentOffsetRangeEnd;
  }

  // permit_fragment_offset_range_start - computed: false, optional: true, required: false
  private _permitFragmentOffsetRangeStart?: number; 
  public get permitFragmentOffsetRangeStart() {
    return this.getNumberAttribute('permit_fragment_offset_range_start');
  }
  public set permitFragmentOffsetRangeStart(value: number) {
    this._permitFragmentOffsetRangeStart = value;
  }
  public resetPermitFragmentOffsetRangeStart() {
    this._permitFragmentOffsetRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFragmentOffsetRangeStartInput() {
    return this._permitFragmentOffsetRangeStart;
  }

  // permit_fragment_type - computed: false, optional: true, required: false
  private _permitFragmentType?: string; 
  public get permitFragmentType() {
    return this.getStringAttribute('permit_fragment_type');
  }
  public set permitFragmentType(value: string) {
    this._permitFragmentType = value;
  }
  public resetPermitFragmentType() {
    this._permitFragmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFragmentTypeInput() {
    return this._permitFragmentType;
  }

  // permit_fragments - computed: false, optional: true, required: false
  private _permitFragments?: boolean | cdktf.IResolvable; 
  public get permitFragments() {
    return this.getBooleanAttribute('permit_fragments');
  }
  public set permitFragments(value: boolean | cdktf.IResolvable) {
    this._permitFragments = value;
  }
  public resetPermitFragments() {
    this._permitFragments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitFragmentsInput() {
    return this._permitFragments;
  }

  // permit_icmp_message_code - computed: false, optional: true, required: false
  private _permitIcmpMessageCode?: number; 
  public get permitIcmpMessageCode() {
    return this.getNumberAttribute('permit_icmp_message_code');
  }
  public set permitIcmpMessageCode(value: number) {
    this._permitIcmpMessageCode = value;
  }
  public resetPermitIcmpMessageCode() {
    this._permitIcmpMessageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitIcmpMessageCodeInput() {
    return this._permitIcmpMessageCode;
  }

  // permit_icmp_message_type - computed: false, optional: true, required: false
  private _permitIcmpMessageType?: number; 
  public get permitIcmpMessageType() {
    return this.getNumberAttribute('permit_icmp_message_type');
  }
  public set permitIcmpMessageType(value: number) {
    this._permitIcmpMessageType = value;
  }
  public resetPermitIcmpMessageType() {
    this._permitIcmpMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitIcmpMessageTypeInput() {
    return this._permitIcmpMessageType;
  }

  // permit_icmp_message_type_name - computed: false, optional: true, required: false
  private _permitIcmpMessageTypeName?: string; 
  public get permitIcmpMessageTypeName() {
    return this.getStringAttribute('permit_icmp_message_type_name');
  }
  public set permitIcmpMessageTypeName(value: string) {
    this._permitIcmpMessageTypeName = value;
  }
  public resetPermitIcmpMessageTypeName() {
    this._permitIcmpMessageTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitIcmpMessageTypeNameInput() {
    return this._permitIcmpMessageTypeName;
  }

  // permit_igmp_type - computed: false, optional: true, required: false
  private _permitIgmpType?: string; 
  public get permitIgmpType() {
    return this.getStringAttribute('permit_igmp_type');
  }
  public set permitIgmpType(value: string) {
    this._permitIgmpType = value;
  }
  public resetPermitIgmpType() {
    this._permitIgmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitIgmpTypeInput() {
    return this._permitIgmpType;
  }

  // permit_log - computed: false, optional: true, required: false
  private _permitLog?: boolean | cdktf.IResolvable; 
  public get permitLog() {
    return this.getBooleanAttribute('permit_log');
  }
  public set permitLog(value: boolean | cdktf.IResolvable) {
    this._permitLog = value;
  }
  public resetPermitLog() {
    this._permitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogTfInput() {
    return this._permitLog;
  }

  // permit_log_input - computed: false, optional: true, required: false
  private _permitLogInput?: boolean | cdktf.IResolvable; 
  public get permitLogInput() {
    return this.getBooleanAttribute('permit_log_input');
  }
  public set permitLogInput(value: boolean | cdktf.IResolvable) {
    this._permitLogInput = value;
  }
  public resetPermitLogInput() {
    this._permitLogInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogInputInput() {
    return this._permitLogInput;
  }

  // permit_nexthop1_ipv4 - computed: false, optional: true, required: false
  private _permitNexthop1Ipv4?: string; 
  public get permitNexthop1Ipv4() {
    return this.getStringAttribute('permit_nexthop1_ipv4');
  }
  public set permitNexthop1Ipv4(value: string) {
    this._permitNexthop1Ipv4 = value;
  }
  public resetPermitNexthop1Ipv4() {
    this._permitNexthop1Ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop1Ipv4Input() {
    return this._permitNexthop1Ipv4;
  }

  // permit_nexthop1_track - computed: false, optional: true, required: false
  private _permitNexthop1Track?: string; 
  public get permitNexthop1Track() {
    return this.getStringAttribute('permit_nexthop1_track');
  }
  public set permitNexthop1Track(value: string) {
    this._permitNexthop1Track = value;
  }
  public resetPermitNexthop1Track() {
    this._permitNexthop1Track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop1TrackInput() {
    return this._permitNexthop1Track;
  }

  // permit_nexthop1_vrf - computed: false, optional: true, required: false
  private _permitNexthop1Vrf?: string; 
  public get permitNexthop1Vrf() {
    return this.getStringAttribute('permit_nexthop1_vrf');
  }
  public set permitNexthop1Vrf(value: string) {
    this._permitNexthop1Vrf = value;
  }
  public resetPermitNexthop1Vrf() {
    this._permitNexthop1Vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop1VrfInput() {
    return this._permitNexthop1Vrf;
  }

  // permit_nexthop2_ipv4 - computed: false, optional: true, required: false
  private _permitNexthop2Ipv4?: string; 
  public get permitNexthop2Ipv4() {
    return this.getStringAttribute('permit_nexthop2_ipv4');
  }
  public set permitNexthop2Ipv4(value: string) {
    this._permitNexthop2Ipv4 = value;
  }
  public resetPermitNexthop2Ipv4() {
    this._permitNexthop2Ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop2Ipv4Input() {
    return this._permitNexthop2Ipv4;
  }

  // permit_nexthop2_track - computed: false, optional: true, required: false
  private _permitNexthop2Track?: string; 
  public get permitNexthop2Track() {
    return this.getStringAttribute('permit_nexthop2_track');
  }
  public set permitNexthop2Track(value: string) {
    this._permitNexthop2Track = value;
  }
  public resetPermitNexthop2Track() {
    this._permitNexthop2Track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop2TrackInput() {
    return this._permitNexthop2Track;
  }

  // permit_nexthop2_vrf - computed: false, optional: true, required: false
  private _permitNexthop2Vrf?: string; 
  public get permitNexthop2Vrf() {
    return this.getStringAttribute('permit_nexthop2_vrf');
  }
  public set permitNexthop2Vrf(value: string) {
    this._permitNexthop2Vrf = value;
  }
  public resetPermitNexthop2Vrf() {
    this._permitNexthop2Vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop2VrfInput() {
    return this._permitNexthop2Vrf;
  }

  // permit_nexthop3_ipv4 - computed: false, optional: true, required: false
  private _permitNexthop3Ipv4?: string; 
  public get permitNexthop3Ipv4() {
    return this.getStringAttribute('permit_nexthop3_ipv4');
  }
  public set permitNexthop3Ipv4(value: string) {
    this._permitNexthop3Ipv4 = value;
  }
  public resetPermitNexthop3Ipv4() {
    this._permitNexthop3Ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop3Ipv4Input() {
    return this._permitNexthop3Ipv4;
  }

  // permit_nexthop3_track - computed: false, optional: true, required: false
  private _permitNexthop3Track?: string; 
  public get permitNexthop3Track() {
    return this.getStringAttribute('permit_nexthop3_track');
  }
  public set permitNexthop3Track(value: string) {
    this._permitNexthop3Track = value;
  }
  public resetPermitNexthop3Track() {
    this._permitNexthop3Track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop3TrackInput() {
    return this._permitNexthop3Track;
  }

  // permit_nexthop3_vrf - computed: false, optional: true, required: false
  private _permitNexthop3Vrf?: string; 
  public get permitNexthop3Vrf() {
    return this.getStringAttribute('permit_nexthop3_vrf');
  }
  public set permitNexthop3Vrf(value: string) {
    this._permitNexthop3Vrf = value;
  }
  public resetPermitNexthop3Vrf() {
    this._permitNexthop3Vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNexthop3VrfInput() {
    return this._permitNexthop3Vrf;
  }

  // permit_packet_length_eq - computed: false, optional: true, required: false
  private _permitPacketLengthEq?: number; 
  public get permitPacketLengthEq() {
    return this.getNumberAttribute('permit_packet_length_eq');
  }
  public set permitPacketLengthEq(value: number) {
    this._permitPacketLengthEq = value;
  }
  public resetPermitPacketLengthEq() {
    this._permitPacketLengthEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPacketLengthEqInput() {
    return this._permitPacketLengthEq;
  }

  // permit_packet_length_gt - computed: false, optional: true, required: false
  private _permitPacketLengthGt?: number; 
  public get permitPacketLengthGt() {
    return this.getNumberAttribute('permit_packet_length_gt');
  }
  public set permitPacketLengthGt(value: number) {
    this._permitPacketLengthGt = value;
  }
  public resetPermitPacketLengthGt() {
    this._permitPacketLengthGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPacketLengthGtInput() {
    return this._permitPacketLengthGt;
  }

  // permit_packet_length_lt - computed: false, optional: true, required: false
  private _permitPacketLengthLt?: number; 
  public get permitPacketLengthLt() {
    return this.getNumberAttribute('permit_packet_length_lt');
  }
  public set permitPacketLengthLt(value: number) {
    this._permitPacketLengthLt = value;
  }
  public resetPermitPacketLengthLt() {
    this._permitPacketLengthLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPacketLengthLtInput() {
    return this._permitPacketLengthLt;
  }

  // permit_packet_length_neq - computed: false, optional: true, required: false
  private _permitPacketLengthNeq?: number; 
  public get permitPacketLengthNeq() {
    return this.getNumberAttribute('permit_packet_length_neq');
  }
  public set permitPacketLengthNeq(value: number) {
    this._permitPacketLengthNeq = value;
  }
  public resetPermitPacketLengthNeq() {
    this._permitPacketLengthNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPacketLengthNeqInput() {
    return this._permitPacketLengthNeq;
  }

  // permit_packet_length_range_end - computed: false, optional: true, required: false
  private _permitPacketLengthRangeEnd?: number; 
  public get permitPacketLengthRangeEnd() {
    return this.getNumberAttribute('permit_packet_length_range_end');
  }
  public set permitPacketLengthRangeEnd(value: number) {
    this._permitPacketLengthRangeEnd = value;
  }
  public resetPermitPacketLengthRangeEnd() {
    this._permitPacketLengthRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPacketLengthRangeEndInput() {
    return this._permitPacketLengthRangeEnd;
  }

  // permit_packet_length_range_start - computed: false, optional: true, required: false
  private _permitPacketLengthRangeStart?: number; 
  public get permitPacketLengthRangeStart() {
    return this.getNumberAttribute('permit_packet_length_range_start');
  }
  public set permitPacketLengthRangeStart(value: number) {
    this._permitPacketLengthRangeStart = value;
  }
  public resetPermitPacketLengthRangeStart() {
    this._permitPacketLengthRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPacketLengthRangeStartInput() {
    return this._permitPacketLengthRangeStart;
  }

  // permit_police_peak_rate - computed: false, optional: true, required: false
  private _permitPolicePeakRate?: number; 
  public get permitPolicePeakRate() {
    return this.getNumberAttribute('permit_police_peak_rate');
  }
  public set permitPolicePeakRate(value: number) {
    this._permitPolicePeakRate = value;
  }
  public resetPermitPolicePeakRate() {
    this._permitPolicePeakRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPolicePeakRateInput() {
    return this._permitPolicePeakRate;
  }

  // permit_police_peak_unit - computed: false, optional: true, required: false
  private _permitPolicePeakUnit?: string; 
  public get permitPolicePeakUnit() {
    return this.getStringAttribute('permit_police_peak_unit');
  }
  public set permitPolicePeakUnit(value: string) {
    this._permitPolicePeakUnit = value;
  }
  public resetPermitPolicePeakUnit() {
    this._permitPolicePeakUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPolicePeakUnitInput() {
    return this._permitPolicePeakUnit;
  }

  // permit_police_priority - computed: false, optional: true, required: false
  private _permitPolicePriority?: string; 
  public get permitPolicePriority() {
    return this.getStringAttribute('permit_police_priority');
  }
  public set permitPolicePriority(value: string) {
    this._permitPolicePriority = value;
  }
  public resetPermitPolicePriority() {
    this._permitPolicePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPolicePriorityInput() {
    return this._permitPolicePriority;
  }

  // permit_police_unit - computed: false, optional: true, required: false
  private _permitPoliceUnit?: string; 
  public get permitPoliceUnit() {
    return this.getStringAttribute('permit_police_unit');
  }
  public set permitPoliceUnit(value: string) {
    this._permitPoliceUnit = value;
  }
  public resetPermitPoliceUnit() {
    this._permitPoliceUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPoliceUnitInput() {
    return this._permitPoliceUnit;
  }

  // permit_police_value - computed: false, optional: true, required: false
  private _permitPoliceValue?: number; 
  public get permitPoliceValue() {
    return this.getNumberAttribute('permit_police_value');
  }
  public set permitPoliceValue(value: number) {
    this._permitPoliceValue = value;
  }
  public resetPermitPoliceValue() {
    this._permitPoliceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPoliceValueInput() {
    return this._permitPoliceValue;
  }

  // permit_precedence - computed: false, optional: true, required: false
  private _permitPrecedence?: string; 
  public get permitPrecedence() {
    return this.getStringAttribute('permit_precedence');
  }
  public set permitPrecedence(value: string) {
    this._permitPrecedence = value;
  }
  public resetPermitPrecedence() {
    this._permitPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPrecedenceInput() {
    return this._permitPrecedence;
  }

  // permit_protocol - computed: false, optional: true, required: false
  private _permitProtocol?: string; 
  public get permitProtocol() {
    return this.getStringAttribute('permit_protocol');
  }
  public set permitProtocol(value: string) {
    this._permitProtocol = value;
  }
  public resetPermitProtocol() {
    this._permitProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitProtocolInput() {
    return this._permitProtocol;
  }

  // permit_range_end_protocol - computed: false, optional: true, required: false
  private _permitRangeEndProtocol?: string; 
  public get permitRangeEndProtocol() {
    return this.getStringAttribute('permit_range_end_protocol');
  }
  public set permitRangeEndProtocol(value: string) {
    this._permitRangeEndProtocol = value;
  }
  public resetPermitRangeEndProtocol() {
    this._permitRangeEndProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitRangeEndProtocolInput() {
    return this._permitRangeEndProtocol;
  }

  // permit_range_start_protocol - computed: false, optional: true, required: false
  private _permitRangeStartProtocol?: string; 
  public get permitRangeStartProtocol() {
    return this.getStringAttribute('permit_range_start_protocol');
  }
  public set permitRangeStartProtocol(value: string) {
    this._permitRangeStartProtocol = value;
  }
  public resetPermitRangeStartProtocol() {
    this._permitRangeStartProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitRangeStartProtocolInput() {
    return this._permitRangeStartProtocol;
  }

  // permit_set_qos_group - computed: false, optional: true, required: false
  private _permitSetQosGroup?: number; 
  public get permitSetQosGroup() {
    return this.getNumberAttribute('permit_set_qos_group');
  }
  public set permitSetQosGroup(value: number) {
    this._permitSetQosGroup = value;
  }
  public resetPermitSetQosGroup() {
    this._permitSetQosGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSetQosGroupInput() {
    return this._permitSetQosGroup;
  }

  // permit_set_ttl - computed: false, optional: true, required: false
  private _permitSetTtl?: number; 
  public get permitSetTtl() {
    return this.getNumberAttribute('permit_set_ttl');
  }
  public set permitSetTtl(value: number) {
    this._permitSetTtl = value;
  }
  public resetPermitSetTtl() {
    this._permitSetTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSetTtlInput() {
    return this._permitSetTtl;
  }

  // permit_source_address - computed: false, optional: true, required: false
  private _permitSourceAddress?: string; 
  public get permitSourceAddress() {
    return this.getStringAttribute('permit_source_address');
  }
  public set permitSourceAddress(value: string) {
    this._permitSourceAddress = value;
  }
  public resetPermitSourceAddress() {
    this._permitSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourceAddressInput() {
    return this._permitSourceAddress;
  }

  // permit_source_any - computed: false, optional: true, required: false
  private _permitSourceAny?: boolean | cdktf.IResolvable; 
  public get permitSourceAny() {
    return this.getBooleanAttribute('permit_source_any');
  }
  public set permitSourceAny(value: boolean | cdktf.IResolvable) {
    this._permitSourceAny = value;
  }
  public resetPermitSourceAny() {
    this._permitSourceAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourceAnyInput() {
    return this._permitSourceAny;
  }

  // permit_source_host - computed: false, optional: true, required: false
  private _permitSourceHost?: string; 
  public get permitSourceHost() {
    return this.getStringAttribute('permit_source_host');
  }
  public set permitSourceHost(value: string) {
    this._permitSourceHost = value;
  }
  public resetPermitSourceHost() {
    this._permitSourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourceHostInput() {
    return this._permitSourceHost;
  }

  // permit_source_net_group - computed: false, optional: true, required: false
  private _permitSourceNetGroup?: string; 
  public get permitSourceNetGroup() {
    return this.getStringAttribute('permit_source_net_group');
  }
  public set permitSourceNetGroup(value: string) {
    this._permitSourceNetGroup = value;
  }
  public resetPermitSourceNetGroup() {
    this._permitSourceNetGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourceNetGroupInput() {
    return this._permitSourceNetGroup;
  }

  // permit_source_port_eq - computed: false, optional: true, required: false
  private _permitSourcePortEq?: string; 
  public get permitSourcePortEq() {
    return this.getStringAttribute('permit_source_port_eq');
  }
  public set permitSourcePortEq(value: string) {
    this._permitSourcePortEq = value;
  }
  public resetPermitSourcePortEq() {
    this._permitSourcePortEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourcePortEqInput() {
    return this._permitSourcePortEq;
  }

  // permit_source_port_group - computed: false, optional: true, required: false
  private _permitSourcePortGroup?: string; 
  public get permitSourcePortGroup() {
    return this.getStringAttribute('permit_source_port_group');
  }
  public set permitSourcePortGroup(value: string) {
    this._permitSourcePortGroup = value;
  }
  public resetPermitSourcePortGroup() {
    this._permitSourcePortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourcePortGroupInput() {
    return this._permitSourcePortGroup;
  }

  // permit_source_port_gt - computed: false, optional: true, required: false
  private _permitSourcePortGt?: string; 
  public get permitSourcePortGt() {
    return this.getStringAttribute('permit_source_port_gt');
  }
  public set permitSourcePortGt(value: string) {
    this._permitSourcePortGt = value;
  }
  public resetPermitSourcePortGt() {
    this._permitSourcePortGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourcePortGtInput() {
    return this._permitSourcePortGt;
  }

  // permit_source_port_lt - computed: false, optional: true, required: false
  private _permitSourcePortLt?: string; 
  public get permitSourcePortLt() {
    return this.getStringAttribute('permit_source_port_lt');
  }
  public set permitSourcePortLt(value: string) {
    this._permitSourcePortLt = value;
  }
  public resetPermitSourcePortLt() {
    this._permitSourcePortLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourcePortLtInput() {
    return this._permitSourcePortLt;
  }

  // permit_source_port_neq - computed: false, optional: true, required: false
  private _permitSourcePortNeq?: string; 
  public get permitSourcePortNeq() {
    return this.getStringAttribute('permit_source_port_neq');
  }
  public set permitSourcePortNeq(value: string) {
    this._permitSourcePortNeq = value;
  }
  public resetPermitSourcePortNeq() {
    this._permitSourcePortNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourcePortNeqInput() {
    return this._permitSourcePortNeq;
  }

  // permit_source_port_range_end - computed: false, optional: true, required: false
  private _permitSourcePortRangeEnd?: string; 
  public get permitSourcePortRangeEnd() {
    return this.getStringAttribute('permit_source_port_range_end');
  }
  public set permitSourcePortRangeEnd(value: string) {
    this._permitSourcePortRangeEnd = value;
  }
  public resetPermitSourcePortRangeEnd() {
    this._permitSourcePortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourcePortRangeEndInput() {
    return this._permitSourcePortRangeEnd;
  }

  // permit_source_port_range_start - computed: false, optional: true, required: false
  private _permitSourcePortRangeStart?: string; 
  public get permitSourcePortRangeStart() {
    return this.getStringAttribute('permit_source_port_range_start');
  }
  public set permitSourcePortRangeStart(value: string) {
    this._permitSourcePortRangeStart = value;
  }
  public resetPermitSourcePortRangeStart() {
    this._permitSourcePortRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourcePortRangeStartInput() {
    return this._permitSourcePortRangeStart;
  }

  // permit_source_prefix_length - computed: false, optional: true, required: false
  private _permitSourcePrefixLength?: number; 
  public get permitSourcePrefixLength() {
    return this.getNumberAttribute('permit_source_prefix_length');
  }
  public set permitSourcePrefixLength(value: number) {
    this._permitSourcePrefixLength = value;
  }
  public resetPermitSourcePrefixLength() {
    this._permitSourcePrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourcePrefixLengthInput() {
    return this._permitSourcePrefixLength;
  }

  // permit_source_wildcard_mask - computed: false, optional: true, required: false
  private _permitSourceWildcardMask?: string; 
  public get permitSourceWildcardMask() {
    return this.getStringAttribute('permit_source_wildcard_mask');
  }
  public set permitSourceWildcardMask(value: string) {
    this._permitSourceWildcardMask = value;
  }
  public resetPermitSourceWildcardMask() {
    this._permitSourceWildcardMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitSourceWildcardMaskInput() {
    return this._permitSourceWildcardMask;
  }

  // permit_ttl_eq - computed: false, optional: true, required: false
  private _permitTtlEq?: number; 
  public get permitTtlEq() {
    return this.getNumberAttribute('permit_ttl_eq');
  }
  public set permitTtlEq(value: number) {
    this._permitTtlEq = value;
  }
  public resetPermitTtlEq() {
    this._permitTtlEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitTtlEqInput() {
    return this._permitTtlEq;
  }

  // permit_ttl_gt - computed: false, optional: true, required: false
  private _permitTtlGt?: number; 
  public get permitTtlGt() {
    return this.getNumberAttribute('permit_ttl_gt');
  }
  public set permitTtlGt(value: number) {
    this._permitTtlGt = value;
  }
  public resetPermitTtlGt() {
    this._permitTtlGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitTtlGtInput() {
    return this._permitTtlGt;
  }

  // permit_ttl_lt - computed: false, optional: true, required: false
  private _permitTtlLt?: number; 
  public get permitTtlLt() {
    return this.getNumberAttribute('permit_ttl_lt');
  }
  public set permitTtlLt(value: number) {
    this._permitTtlLt = value;
  }
  public resetPermitTtlLt() {
    this._permitTtlLt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitTtlLtInput() {
    return this._permitTtlLt;
  }

  // permit_ttl_neq - computed: false, optional: true, required: false
  private _permitTtlNeq?: number; 
  public get permitTtlNeq() {
    return this.getNumberAttribute('permit_ttl_neq');
  }
  public set permitTtlNeq(value: number) {
    this._permitTtlNeq = value;
  }
  public resetPermitTtlNeq() {
    this._permitTtlNeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitTtlNeqInput() {
    return this._permitTtlNeq;
  }

  // permit_ttl_range_end - computed: false, optional: true, required: false
  private _permitTtlRangeEnd?: number; 
  public get permitTtlRangeEnd() {
    return this.getNumberAttribute('permit_ttl_range_end');
  }
  public set permitTtlRangeEnd(value: number) {
    this._permitTtlRangeEnd = value;
  }
  public resetPermitTtlRangeEnd() {
    this._permitTtlRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitTtlRangeEndInput() {
    return this._permitTtlRangeEnd;
  }

  // permit_ttl_range_start - computed: false, optional: true, required: false
  private _permitTtlRangeStart?: number; 
  public get permitTtlRangeStart() {
    return this.getNumberAttribute('permit_ttl_range_start');
  }
  public set permitTtlRangeStart(value: number) {
    this._permitTtlRangeStart = value;
  }
  public resetPermitTtlRangeStart() {
    this._permitTtlRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitTtlRangeStartInput() {
    return this._permitTtlRangeStart;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }
}

export class Ipv4AccessListSequencesList extends cdktf.ComplexList {
  public internalValue? : Ipv4AccessListSequences[] | cdktf.IResolvable

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
  public get(index: number): Ipv4AccessListSequencesOutputReference {
    return new Ipv4AccessListSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list iosxr_ipv4_access_list}
*/
export class Ipv4AccessList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ipv4_access_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4AccessList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4AccessList to import
  * @param importFromId The id of the existing Ipv4AccessList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4AccessList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ipv4_access_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list iosxr_ipv4_access_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4AccessListConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4AccessListConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ipv4_access_list',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessListName = config.accessListName;
    this._device = config.device;
    this._sequences.internalValue = config.sequences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_list_name - computed: false, optional: false, required: true
  private _accessListName?: string; 
  public get accessListName() {
    return this.getStringAttribute('access_list_name');
  }
  public set accessListName(value: string) {
    this._accessListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListNameInput() {
    return this._accessListName;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sequences - computed: false, optional: true, required: false
  private _sequences = new Ipv4AccessListSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: Ipv4AccessListSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  public resetSequences() {
    this._sequences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_list_name: cdktf.stringToTerraform(this._accessListName),
      device: cdktf.stringToTerraform(this._device),
      sequences: cdktf.listMapper(ipv4AccessListSequencesToTerraform, false)(this._sequences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_list_name: {
        value: cdktf.stringToHclTerraform(this._accessListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequences: {
        value: cdktf.listMapperHcl(ipv4AccessListSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv4AccessListSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
