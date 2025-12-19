// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#id DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'icmp-v4': ip-proto icmp-v4; 'icmp-v6': ip-proto icmp-v6; 'other': ip-proto other; 'gre': ip-proto gre; 'ipv4-encap': ip-proto IPv4 Encapsulation; 'ipv6-encap': ip-proto IPv6 Encapsulation;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#protocol DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#protocol}
  */
  readonly protocol: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#zone_name DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#zone_name}
  */
  readonly zoneName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#stats DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#stats}
  */
  readonly stats?: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStats;
}
export interface DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmp {
  /**
  * Dst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#bl}
  */
  readonly bl?: number;
  /**
  * Current Escalation Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#current_es_level DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#current_es_level}
  */
  readonly currentEsLevel?: number;
  /**
  * Dst Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#dst_hw_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Dst Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#dst_hw_drop_inserted DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#dst_hw_drop_inserted}
  */
  readonly dstHwDropInserted?: number;
  /**
  * Dst Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#dst_hw_drop_removed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#dst_hw_drop_removed}
  */
  readonly dstHwDropRemoved?: number;
  /**
  * dynamic-entry-count warning send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#dynamic_count_warn DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#dynamic_count_warn}
  */
  readonly dynamicCountWarn?: number;
  /**
  * East-West Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_inbound_port_byte_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_inbound_port_byte_drop}
  */
  readonly ewInboundPortByteDrop?: number;
  /**
  * East-West Inbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_inbound_port_byte_rcv DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_inbound_port_byte_rcv}
  */
  readonly ewInboundPortByteRcv?: number;
  /**
  * East-West Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_inbound_port_byte_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_inbound_port_byte_sent}
  */
  readonly ewInboundPortByteSent?: number;
  /**
  * East-West Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_inbound_port_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_inbound_port_drop}
  */
  readonly ewInboundPortDrop?: number;
  /**
  * East-West Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_inbound_port_rcv DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_inbound_port_rcv}
  */
  readonly ewInboundPortRcv?: number;
  /**
  * East-West Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_inbound_port_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_inbound_port_sent}
  */
  readonly ewInboundPortSent?: number;
  /**
  * East-West Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_outbound_port_byte_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_outbound_port_byte_drop}
  */
  readonly ewOutboundPortByteDrop?: number;
  /**
  * East-West Outbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_outbound_port_byte_rcv DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_outbound_port_byte_rcv}
  */
  readonly ewOutboundPortByteRcv?: number;
  /**
  * East-West Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_outbound_port_byte_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_outbound_port_byte_sent}
  */
  readonly ewOutboundPortByteSent?: number;
  /**
  * East-West Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_outbound_port_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_outbound_port_drop}
  */
  readonly ewOutboundPortDrop?: number;
  /**
  * East-West Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_outbound_port_rcv DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_outbound_port_rcv}
  */
  readonly ewOutboundPortRcv?: number;
  /**
  * East-West Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ew_outbound_port_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ew_outbound_port_sent}
  */
  readonly ewOutboundPortSent?: number;
  /**
  * Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#exceed_action_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#exceed_action_drop}
  */
  readonly exceedActionDrop?: number;
  /**
  * Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#exceed_action_tunnel DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#exceed_action_tunnel}
  */
  readonly exceedActionTunnel?: number;
  /**
  * Src KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#exceed_drop_brate_src DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#exceed_drop_brate_src}
  */
  readonly exceedDropBrateSrc?: number;
  /**
  * Src KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#exceed_drop_brate_src_pkt DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#exceed_drop_brate_src_pkt}
  */
  readonly exceedDropBrateSrcPkt?: number;
  /**
  * Src Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#exceed_drop_prate_src DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#exceed_drop_prate_src}
  */
  readonly exceedDropPrateSrc?: number;
  /**
  * Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter1_match DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter1_match}
  */
  readonly filter1Match?: number;
  /**
  * Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter2_match DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter2_match}
  */
  readonly filter2Match?: number;
  /**
  * Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter3_match DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter3_match}
  */
  readonly filter3Match?: number;
  /**
  * Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter4_match DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter4_match}
  */
  readonly filter4Match?: number;
  /**
  * Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter5_match DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter5_match}
  */
  readonly filter5Match?: number;
  /**
  * Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter_action_blacklist DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter_action_blacklist}
  */
  readonly filterActionBlacklist?: number;
  /**
  * Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter_action_default_pass DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter_action_default_pass}
  */
  readonly filterActionDefaultPass?: number;
  /**
  * Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter_action_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter_action_drop}
  */
  readonly filterActionDrop?: number;
  /**
  * Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter_none_match DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter_none_match}
  */
  readonly filterNoneMatch?: number;
  /**
  * Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#filter_total_not_match DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#filter_total_not_match}
  */
  readonly filterTotalNotMatch?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#frag_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#frag_rcvd DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Fragmented Packets Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#frag_timeout DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#frag_timeout}
  */
  readonly fragTimeout?: number;
  /**
  * ICMPv4 RFC Undef Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#icmpv4_rfc_undef_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#icmpv4_rfc_undef_drop}
  */
  readonly icmpv4RfcUndefDrop?: number;
  /**
  * ICMPv6 RFC Undef Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#icmpv6_rfc_undef_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#icmpv6_rfc_undef_drop}
  */
  readonly icmpv6RfcUndefDrop?: number;
  /**
  * IP Filtering Policy: Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ip_filtering_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ip_filtering_bl}
  */
  readonly ipFilteringBl?: number;
  /**
  * IP Filtering Policy: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ip_filtering_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ip_filtering_drop}
  */
  readonly ipFilteringDrop?: number;
  /**
  * No Policy Class-list Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#no_policy_class_list_match DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#no_policy_class_list_match}
  */
  readonly noPolicyClassListMatch?: number;
  /**
  * No Route Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#no_route_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#no_route_drop}
  */
  readonly noRouteDrop?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#outbound_port_bytes DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#outbound_port_bytes}
  */
  readonly outboundPortBytes?: number;
  /**
  * Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#outbound_port_bytes_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#outbound_port_bytes_drop}
  */
  readonly outboundPortBytesDrop?: number;
  /**
  * Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#outbound_port_bytes_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#outbound_port_bytes_sent}
  */
  readonly outboundPortBytesSent?: number;
  /**
  * Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#outbound_port_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#outbound_port_drop}
  */
  readonly outboundPortDrop?: number;
  /**
  * Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#outbound_port_pkt_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#outbound_port_pkt_sent}
  */
  readonly outboundPortPktSent?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#outbound_port_rcvd DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#outbound_port_rcvd}
  */
  readonly outboundPortRcvd?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_bytes DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_bytes}
  */
  readonly portBytes?: number;
  /**
  * Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_bytes_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_bytes_drop}
  */
  readonly portBytesDrop?: number;
  /**
  * Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_bytes_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_bytes_sent}
  */
  readonly portBytesSent?: number;
  /**
  * Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_drop}
  */
  readonly portDrop?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_kbit_rate_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_kbit_rate_exceed}
  */
  readonly portKbitRateExceed?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_kbit_rate_exceed_pkt DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_kbit_rate_exceed_pkt}
  */
  readonly portKbitRateExceedPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_pkt_rate_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_pkt_rate_exceed}
  */
  readonly portPktRateExceed?: number;
  /**
  * Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_pkt_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_pkt_sent}
  */
  readonly portPktSent?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_rcvd DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_rcvd}
  */
  readonly portRcvd?: number;
  /**
  * Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_src_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_src_bl}
  */
  readonly portSrcBl?: number;
  /**
  * Src Escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#port_src_escalation DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#port_src_escalation}
  */
  readonly portSrcEscalation?: number;
  /**
  * ICMP Type Dst Rate 1 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type0_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type0_exceed}
  */
  readonly rateType0Exceed?: number;
  /**
  * ICMP Type Dst Rate 1 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type0_exceed_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type0_exceed_bl}
  */
  readonly rateType0ExceedBl?: number;
  /**
  * ICMP Type Dst Rate 1 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type0_exceed_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type0_exceed_drop}
  */
  readonly rateType0ExceedDrop?: number;
  /**
  * ICMP Type Dst Rate 2 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type1_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type1_exceed}
  */
  readonly rateType1Exceed?: number;
  /**
  * ICMP Type Dst Rate 2 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type1_exceed_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type1_exceed_bl}
  */
  readonly rateType1ExceedBl?: number;
  /**
  * ICMP Type Dst Rate 2 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type1_exceed_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type1_exceed_drop}
  */
  readonly rateType1ExceedDrop?: number;
  /**
  * ICMP Type Dst Rate 3 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type2_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type2_exceed}
  */
  readonly rateType2Exceed?: number;
  /**
  * ICMP Type Dst Rate 3 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type2_exceed_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type2_exceed_bl}
  */
  readonly rateType2ExceedBl?: number;
  /**
  * ICMP Type Dst Rate 3 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#rate_type2_exceed_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#rate_type2_exceed_drop}
  */
  readonly rateType2ExceedDrop?: number;
  /**
  * Same Source and Destination Port Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#same_sport_dport_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#same_sport_dport_drop}
  */
  readonly sameSportDportDrop?: number;
  /**
  * Per Addr-Port Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#secondary_port_hit DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#secondary_port_hit}
  */
  readonly secondaryPortHit?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#secondary_port_kbit_rate_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#secondary_port_kbit_rate_exceed}
  */
  readonly secondaryPortKbitRateExceed?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#secondary_port_kbit_rate_exceed_pkt DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#secondary_port_kbit_rate_exceed_pkt}
  */
  readonly secondaryPortKbitRateExceedPkt?: number;
  /**
  * Per Addr-Port Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#secondary_port_pkt_rate_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#secondary_port_pkt_rate_exceed}
  */
  readonly secondaryPortPktRateExceed?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#sflow_external_packets_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#sflow_external_samples_packed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#sflow_internal_packets_sent DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#sflow_internal_samples_packed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_drop}
  */
  readonly srcDrop?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_frag_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_hw_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_hw_drop}
  */
  readonly srcHwDrop?: number;
  /**
  * Src Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_hw_drop_inserted DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_hw_drop_inserted}
  */
  readonly srcHwDropInserted?: number;
  /**
  * Src Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_hw_drop_removed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_hw_drop_removed}
  */
  readonly srcHwDropRemoved?: number;
  /**
  * Source Dynamic Entry Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_learn_overflow DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_learn_overflow}
  */
  readonly srcLearnOverflow?: number;
  /**
  * ICMP Type Src Rate 1 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type0_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type0_exceed}
  */
  readonly srcRateType0Exceed?: number;
  /**
  * ICMP Type Src Rate 1 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type0_exceed_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type0_exceed_bl}
  */
  readonly srcRateType0ExceedBl?: number;
  /**
  * ICMP Type Src Rate 1 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type0_exceed_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type0_exceed_drop}
  */
  readonly srcRateType0ExceedDrop?: number;
  /**
  * ICMP Type Src Rate 2 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type1_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type1_exceed}
  */
  readonly srcRateType1Exceed?: number;
  /**
  * ICMP Type Src Rate 2 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type1_exceed_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type1_exceed_bl}
  */
  readonly srcRateType1ExceedBl?: number;
  /**
  * ICMP Type Src Rate 2 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type1_exceed_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type1_exceed_drop}
  */
  readonly srcRateType1ExceedDrop?: number;
  /**
  * ICMP Type Src Rate 3 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type2_exceed DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type2_exceed}
  */
  readonly srcRateType2Exceed?: number;
  /**
  * ICMP Type Src Rate 3 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type2_exceed_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type2_exceed_bl}
  */
  readonly srcRateType2ExceedBl?: number;
  /**
  * ICMP Type Src Rate 3 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_rate_type2_exceed_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_rate_type2_exceed_drop}
  */
  readonly srcRateType2ExceedDrop?: number;
  /**
  * SrcZoneService Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_zone_service_entry_aged DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_zone_service_entry_aged}
  */
  readonly srcZoneServiceEntryAged?: number;
  /**
  * SrcZoneService Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_zone_service_entry_hit DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_zone_service_entry_hit}
  */
  readonly srcZoneServiceEntryHit?: number;
  /**
  * SrcZoneService Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#src_zone_service_entry_learned DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#src_zone_service_entry_learned}
  */
  readonly srcZoneServiceEntryLearned?: number;
  /**
  * ICMP Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#type DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#type}
  */
  readonly type?: number;
  /**
  * ICMP Type Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#type_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#type_bl}
  */
  readonly typeBl?: number;
  /**
  * ICMP Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#type_deny_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#type_deny_drop}
  */
  readonly typeDenyDrop?: number;
  /**
  * ICMP Type Wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#wildcard DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#wildcard}
  */
  readonly wildcard?: number;
  /**
  * ICMP Type Wildcard Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#wildcard_bl DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#wildcard_bl}
  */
  readonly wildcardBl?: number;
  /**
  * ICMP Type Wildcard Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#wildcard_deny_drop DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#wildcard_deny_drop}
  */
  readonly wildcardDenyDrop?: number;
}

export function ddosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpToTerraform(struct?: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpOutputReference | DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bl: cdktf.numberToTerraform(struct!.bl),
    current_es_level: cdktf.numberToTerraform(struct!.currentEsLevel),
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
    dst_hw_drop_inserted: cdktf.numberToTerraform(struct!.dstHwDropInserted),
    dst_hw_drop_removed: cdktf.numberToTerraform(struct!.dstHwDropRemoved),
    dynamic_count_warn: cdktf.numberToTerraform(struct!.dynamicCountWarn),
    ew_inbound_port_byte_drop: cdktf.numberToTerraform(struct!.ewInboundPortByteDrop),
    ew_inbound_port_byte_rcv: cdktf.numberToTerraform(struct!.ewInboundPortByteRcv),
    ew_inbound_port_byte_sent: cdktf.numberToTerraform(struct!.ewInboundPortByteSent),
    ew_inbound_port_drop: cdktf.numberToTerraform(struct!.ewInboundPortDrop),
    ew_inbound_port_rcv: cdktf.numberToTerraform(struct!.ewInboundPortRcv),
    ew_inbound_port_sent: cdktf.numberToTerraform(struct!.ewInboundPortSent),
    ew_outbound_port_byte_drop: cdktf.numberToTerraform(struct!.ewOutboundPortByteDrop),
    ew_outbound_port_byte_rcv: cdktf.numberToTerraform(struct!.ewOutboundPortByteRcv),
    ew_outbound_port_byte_sent: cdktf.numberToTerraform(struct!.ewOutboundPortByteSent),
    ew_outbound_port_drop: cdktf.numberToTerraform(struct!.ewOutboundPortDrop),
    ew_outbound_port_rcv: cdktf.numberToTerraform(struct!.ewOutboundPortRcv),
    ew_outbound_port_sent: cdktf.numberToTerraform(struct!.ewOutboundPortSent),
    exceed_action_drop: cdktf.numberToTerraform(struct!.exceedActionDrop),
    exceed_action_tunnel: cdktf.numberToTerraform(struct!.exceedActionTunnel),
    exceed_drop_brate_src: cdktf.numberToTerraform(struct!.exceedDropBrateSrc),
    exceed_drop_brate_src_pkt: cdktf.numberToTerraform(struct!.exceedDropBrateSrcPkt),
    exceed_drop_prate_src: cdktf.numberToTerraform(struct!.exceedDropPrateSrc),
    filter1_match: cdktf.numberToTerraform(struct!.filter1Match),
    filter2_match: cdktf.numberToTerraform(struct!.filter2Match),
    filter3_match: cdktf.numberToTerraform(struct!.filter3Match),
    filter4_match: cdktf.numberToTerraform(struct!.filter4Match),
    filter5_match: cdktf.numberToTerraform(struct!.filter5Match),
    filter_action_blacklist: cdktf.numberToTerraform(struct!.filterActionBlacklist),
    filter_action_default_pass: cdktf.numberToTerraform(struct!.filterActionDefaultPass),
    filter_action_drop: cdktf.numberToTerraform(struct!.filterActionDrop),
    filter_none_match: cdktf.numberToTerraform(struct!.filterNoneMatch),
    filter_total_not_match: cdktf.numberToTerraform(struct!.filterTotalNotMatch),
    frag_drop: cdktf.numberToTerraform(struct!.fragDrop),
    frag_rcvd: cdktf.numberToTerraform(struct!.fragRcvd),
    frag_timeout: cdktf.numberToTerraform(struct!.fragTimeout),
    icmpv4_rfc_undef_drop: cdktf.numberToTerraform(struct!.icmpv4RfcUndefDrop),
    icmpv6_rfc_undef_drop: cdktf.numberToTerraform(struct!.icmpv6RfcUndefDrop),
    ip_filtering_bl: cdktf.numberToTerraform(struct!.ipFilteringBl),
    ip_filtering_drop: cdktf.numberToTerraform(struct!.ipFilteringDrop),
    no_policy_class_list_match: cdktf.numberToTerraform(struct!.noPolicyClassListMatch),
    no_route_drop: cdktf.numberToTerraform(struct!.noRouteDrop),
    outbound_port_bytes: cdktf.numberToTerraform(struct!.outboundPortBytes),
    outbound_port_bytes_drop: cdktf.numberToTerraform(struct!.outboundPortBytesDrop),
    outbound_port_bytes_sent: cdktf.numberToTerraform(struct!.outboundPortBytesSent),
    outbound_port_drop: cdktf.numberToTerraform(struct!.outboundPortDrop),
    outbound_port_pkt_sent: cdktf.numberToTerraform(struct!.outboundPortPktSent),
    outbound_port_rcvd: cdktf.numberToTerraform(struct!.outboundPortRcvd),
    port_bytes: cdktf.numberToTerraform(struct!.portBytes),
    port_bytes_drop: cdktf.numberToTerraform(struct!.portBytesDrop),
    port_bytes_sent: cdktf.numberToTerraform(struct!.portBytesSent),
    port_drop: cdktf.numberToTerraform(struct!.portDrop),
    port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.portKbitRateExceed),
    port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.portKbitRateExceedPkt),
    port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.portPktRateExceed),
    port_pkt_sent: cdktf.numberToTerraform(struct!.portPktSent),
    port_rcvd: cdktf.numberToTerraform(struct!.portRcvd),
    port_src_bl: cdktf.numberToTerraform(struct!.portSrcBl),
    port_src_escalation: cdktf.numberToTerraform(struct!.portSrcEscalation),
    rate_type0_exceed: cdktf.numberToTerraform(struct!.rateType0Exceed),
    rate_type0_exceed_bl: cdktf.numberToTerraform(struct!.rateType0ExceedBl),
    rate_type0_exceed_drop: cdktf.numberToTerraform(struct!.rateType0ExceedDrop),
    rate_type1_exceed: cdktf.numberToTerraform(struct!.rateType1Exceed),
    rate_type1_exceed_bl: cdktf.numberToTerraform(struct!.rateType1ExceedBl),
    rate_type1_exceed_drop: cdktf.numberToTerraform(struct!.rateType1ExceedDrop),
    rate_type2_exceed: cdktf.numberToTerraform(struct!.rateType2Exceed),
    rate_type2_exceed_bl: cdktf.numberToTerraform(struct!.rateType2ExceedBl),
    rate_type2_exceed_drop: cdktf.numberToTerraform(struct!.rateType2ExceedDrop),
    same_sport_dport_drop: cdktf.numberToTerraform(struct!.sameSportDportDrop),
    secondary_port_hit: cdktf.numberToTerraform(struct!.secondaryPortHit),
    secondary_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.secondaryPortKbitRateExceed),
    secondary_port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.secondaryPortKbitRateExceedPkt),
    secondary_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.secondaryPortPktRateExceed),
    sflow_external_packets_sent: cdktf.numberToTerraform(struct!.sflowExternalPacketsSent),
    sflow_external_samples_packed: cdktf.numberToTerraform(struct!.sflowExternalSamplesPacked),
    sflow_internal_packets_sent: cdktf.numberToTerraform(struct!.sflowInternalPacketsSent),
    sflow_internal_samples_packed: cdktf.numberToTerraform(struct!.sflowInternalSamplesPacked),
    src_drop: cdktf.numberToTerraform(struct!.srcDrop),
    src_frag_drop: cdktf.numberToTerraform(struct!.srcFragDrop),
    src_hw_drop: cdktf.numberToTerraform(struct!.srcHwDrop),
    src_hw_drop_inserted: cdktf.numberToTerraform(struct!.srcHwDropInserted),
    src_hw_drop_removed: cdktf.numberToTerraform(struct!.srcHwDropRemoved),
    src_learn_overflow: cdktf.numberToTerraform(struct!.srcLearnOverflow),
    src_rate_type0_exceed: cdktf.numberToTerraform(struct!.srcRateType0Exceed),
    src_rate_type0_exceed_bl: cdktf.numberToTerraform(struct!.srcRateType0ExceedBl),
    src_rate_type0_exceed_drop: cdktf.numberToTerraform(struct!.srcRateType0ExceedDrop),
    src_rate_type1_exceed: cdktf.numberToTerraform(struct!.srcRateType1Exceed),
    src_rate_type1_exceed_bl: cdktf.numberToTerraform(struct!.srcRateType1ExceedBl),
    src_rate_type1_exceed_drop: cdktf.numberToTerraform(struct!.srcRateType1ExceedDrop),
    src_rate_type2_exceed: cdktf.numberToTerraform(struct!.srcRateType2Exceed),
    src_rate_type2_exceed_bl: cdktf.numberToTerraform(struct!.srcRateType2ExceedBl),
    src_rate_type2_exceed_drop: cdktf.numberToTerraform(struct!.srcRateType2ExceedDrop),
    src_zone_service_entry_aged: cdktf.numberToTerraform(struct!.srcZoneServiceEntryAged),
    src_zone_service_entry_hit: cdktf.numberToTerraform(struct!.srcZoneServiceEntryHit),
    src_zone_service_entry_learned: cdktf.numberToTerraform(struct!.srcZoneServiceEntryLearned),
    type: cdktf.numberToTerraform(struct!.type),
    type_bl: cdktf.numberToTerraform(struct!.typeBl),
    type_deny_drop: cdktf.numberToTerraform(struct!.typeDenyDrop),
    wildcard: cdktf.numberToTerraform(struct!.wildcard),
    wildcard_bl: cdktf.numberToTerraform(struct!.wildcardBl),
    wildcard_deny_drop: cdktf.numberToTerraform(struct!.wildcardDenyDrop),
  }
}


export function ddosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpToHclTerraform(struct?: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpOutputReference | DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bl: {
      value: cdktf.numberToHclTerraform(struct!.bl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_es_level: {
      value: cdktf.numberToHclTerraform(struct!.currentEsLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop_inserted: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDropInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop_removed: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDropRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_count_warn: {
      value: cdktf.numberToHclTerraform(struct!.dynamicCountWarn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_byte_drop: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortByteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_byte_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortByteRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_byte_sent: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortByteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_inbound_port_sent: {
      value: cdktf.numberToHclTerraform(struct!.ewInboundPortSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_byte_drop: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortByteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_byte_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortByteRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_byte_sent: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortByteSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ew_outbound_port_sent: {
      value: cdktf.numberToHclTerraform(struct!.ewOutboundPortSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.exceedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action_tunnel: {
      value: cdktf.numberToHclTerraform(struct!.exceedActionTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_brate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropBrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_brate_src_pkt: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropBrateSrcPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_prate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropPrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.filter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.filter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.filter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.filter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.filter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.filterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.filterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.filterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.filterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_total_not_match: {
      value: cdktf.numberToHclTerraform(struct!.filterTotalNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.fragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.fragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_timeout: {
      value: cdktf.numberToHclTerraform(struct!.fragTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv4_rfc_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpv4RfcUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_rfc_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6RfcUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_filtering_bl: {
      value: cdktf.numberToHclTerraform(struct!.ipFilteringBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_filtering_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipFilteringDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_policy_class_list_match: {
      value: cdktf.numberToHclTerraform(struct!.noPolicyClassListMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_route_drop: {
      value: cdktf.numberToHclTerraform(struct!.noRouteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes: {
      value: cdktf.numberToHclTerraform(struct!.portBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.portBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_drop: {
      value: cdktf.numberToHclTerraform(struct!.portDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_kbit_rate_exceed_pkt: {
      value: cdktf.numberToHclTerraform(struct!.portKbitRateExceedPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.portPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.portRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_src_bl: {
      value: cdktf.numberToHclTerraform(struct!.portSrcBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_src_escalation: {
      value: cdktf.numberToHclTerraform(struct!.portSrcEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type0_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rateType0Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type0_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.rateType0ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type0_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.rateType0ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rateType1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type1_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.rateType1ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type1_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.rateType1ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rateType2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type2_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.rateType2ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type2_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.rateType2ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    same_sport_dport_drop: {
      value: cdktf.numberToHclTerraform(struct!.sameSportDportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_hit: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_kbit_rate_exceed_pkt: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortKbitRateExceedPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_external_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.sflowExternalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_external_samples_packed: {
      value: cdktf.numberToHclTerraform(struct!.sflowExternalSamplesPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_internal_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.sflowInternalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_internal_samples_packed: {
      value: cdktf.numberToHclTerraform(struct!.sflowInternalSamplesPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop_inserted: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDropInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop_removed: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDropRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_learn_overflow: {
      value: cdktf.numberToHclTerraform(struct!.srcLearnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type0_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType0Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type0_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType0ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type0_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType0ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type1_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType1ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type1_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType1ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type2_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType2ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_type2_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcRateType2ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_entry_hit: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceEntryHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_entry_learned: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceEntryLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_bl: {
      value: cdktf.numberToHclTerraform(struct!.typeBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_deny_drop: {
      value: cdktf.numberToHclTerraform(struct!.typeDenyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wildcard: {
      value: cdktf.numberToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wildcard_bl: {
      value: cdktf.numberToHclTerraform(struct!.wildcardBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wildcard_deny_drop: {
      value: cdktf.numberToHclTerraform(struct!.wildcardDenyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bl = this._bl;
    }
    if (this._currentEsLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentEsLevel = this._currentEsLevel;
    }
    if (this._dstHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDrop = this._dstHwDrop;
    }
    if (this._dstHwDropInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDropInserted = this._dstHwDropInserted;
    }
    if (this._dstHwDropRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDropRemoved = this._dstHwDropRemoved;
    }
    if (this._dynamicCountWarn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicCountWarn = this._dynamicCountWarn;
    }
    if (this._ewInboundPortByteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortByteDrop = this._ewInboundPortByteDrop;
    }
    if (this._ewInboundPortByteRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortByteRcv = this._ewInboundPortByteRcv;
    }
    if (this._ewInboundPortByteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortByteSent = this._ewInboundPortByteSent;
    }
    if (this._ewInboundPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortDrop = this._ewInboundPortDrop;
    }
    if (this._ewInboundPortRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortRcv = this._ewInboundPortRcv;
    }
    if (this._ewInboundPortSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewInboundPortSent = this._ewInboundPortSent;
    }
    if (this._ewOutboundPortByteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortByteDrop = this._ewOutboundPortByteDrop;
    }
    if (this._ewOutboundPortByteRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortByteRcv = this._ewOutboundPortByteRcv;
    }
    if (this._ewOutboundPortByteSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortByteSent = this._ewOutboundPortByteSent;
    }
    if (this._ewOutboundPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortDrop = this._ewOutboundPortDrop;
    }
    if (this._ewOutboundPortRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortRcv = this._ewOutboundPortRcv;
    }
    if (this._ewOutboundPortSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ewOutboundPortSent = this._ewOutboundPortSent;
    }
    if (this._exceedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedActionDrop = this._exceedActionDrop;
    }
    if (this._exceedActionTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedActionTunnel = this._exceedActionTunnel;
    }
    if (this._exceedDropBrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropBrateSrc = this._exceedDropBrateSrc;
    }
    if (this._exceedDropBrateSrcPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropBrateSrcPkt = this._exceedDropBrateSrcPkt;
    }
    if (this._exceedDropPrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropPrateSrc = this._exceedDropPrateSrc;
    }
    if (this._filter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter1Match = this._filter1Match;
    }
    if (this._filter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter2Match = this._filter2Match;
    }
    if (this._filter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter3Match = this._filter3Match;
    }
    if (this._filter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter4Match = this._filter4Match;
    }
    if (this._filter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter5Match = this._filter5Match;
    }
    if (this._filterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionBlacklist = this._filterActionBlacklist;
    }
    if (this._filterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionDefaultPass = this._filterActionDefaultPass;
    }
    if (this._filterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionDrop = this._filterActionDrop;
    }
    if (this._filterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterNoneMatch = this._filterNoneMatch;
    }
    if (this._filterTotalNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterTotalNotMatch = this._filterTotalNotMatch;
    }
    if (this._fragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragDrop = this._fragDrop;
    }
    if (this._fragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragRcvd = this._fragRcvd;
    }
    if (this._fragTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragTimeout = this._fragTimeout;
    }
    if (this._icmpv4RfcUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv4RfcUndefDrop = this._icmpv4RfcUndefDrop;
    }
    if (this._icmpv6RfcUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6RfcUndefDrop = this._icmpv6RfcUndefDrop;
    }
    if (this._ipFilteringBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringBl = this._ipFilteringBl;
    }
    if (this._ipFilteringDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringDrop = this._ipFilteringDrop;
    }
    if (this._noPolicyClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPolicyClassListMatch = this._noPolicyClassListMatch;
    }
    if (this._noRouteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRouteDrop = this._noRouteDrop;
    }
    if (this._outboundPortBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytes = this._outboundPortBytes;
    }
    if (this._outboundPortBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytesDrop = this._outboundPortBytesDrop;
    }
    if (this._outboundPortBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytesSent = this._outboundPortBytesSent;
    }
    if (this._outboundPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortDrop = this._outboundPortDrop;
    }
    if (this._outboundPortPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortPktSent = this._outboundPortPktSent;
    }
    if (this._outboundPortRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortRcvd = this._outboundPortRcvd;
    }
    if (this._portBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytes = this._portBytes;
    }
    if (this._portBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytesDrop = this._portBytesDrop;
    }
    if (this._portBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytesSent = this._portBytesSent;
    }
    if (this._portDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDrop = this._portDrop;
    }
    if (this._portKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKbitRateExceed = this._portKbitRateExceed;
    }
    if (this._portKbitRateExceedPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKbitRateExceedPkt = this._portKbitRateExceedPkt;
    }
    if (this._portPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPktRateExceed = this._portPktRateExceed;
    }
    if (this._portPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPktSent = this._portPktSent;
    }
    if (this._portRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRcvd = this._portRcvd;
    }
    if (this._portSrcBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSrcBl = this._portSrcBl;
    }
    if (this._portSrcEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSrcEscalation = this._portSrcEscalation;
    }
    if (this._rateType0Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType0Exceed = this._rateType0Exceed;
    }
    if (this._rateType0ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType0ExceedBl = this._rateType0ExceedBl;
    }
    if (this._rateType0ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType0ExceedDrop = this._rateType0ExceedDrop;
    }
    if (this._rateType1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType1Exceed = this._rateType1Exceed;
    }
    if (this._rateType1ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType1ExceedBl = this._rateType1ExceedBl;
    }
    if (this._rateType1ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType1ExceedDrop = this._rateType1ExceedDrop;
    }
    if (this._rateType2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType2Exceed = this._rateType2Exceed;
    }
    if (this._rateType2ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType2ExceedBl = this._rateType2ExceedBl;
    }
    if (this._rateType2ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType2ExceedDrop = this._rateType2ExceedDrop;
    }
    if (this._sameSportDportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSportDportDrop = this._sameSportDportDrop;
    }
    if (this._secondaryPortHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortHit = this._secondaryPortHit;
    }
    if (this._secondaryPortKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortKbitRateExceed = this._secondaryPortKbitRateExceed;
    }
    if (this._secondaryPortKbitRateExceedPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortKbitRateExceedPkt = this._secondaryPortKbitRateExceedPkt;
    }
    if (this._secondaryPortPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortPktRateExceed = this._secondaryPortPktRateExceed;
    }
    if (this._sflowExternalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowExternalPacketsSent = this._sflowExternalPacketsSent;
    }
    if (this._sflowExternalSamplesPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowExternalSamplesPacked = this._sflowExternalSamplesPacked;
    }
    if (this._sflowInternalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowInternalPacketsSent = this._sflowInternalPacketsSent;
    }
    if (this._sflowInternalSamplesPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowInternalSamplesPacked = this._sflowInternalSamplesPacked;
    }
    if (this._srcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDrop = this._srcDrop;
    }
    if (this._srcFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragDrop = this._srcFragDrop;
    }
    if (this._srcHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDrop = this._srcHwDrop;
    }
    if (this._srcHwDropInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDropInserted = this._srcHwDropInserted;
    }
    if (this._srcHwDropRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDropRemoved = this._srcHwDropRemoved;
    }
    if (this._srcLearnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcLearnOverflow = this._srcLearnOverflow;
    }
    if (this._srcRateType0Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType0Exceed = this._srcRateType0Exceed;
    }
    if (this._srcRateType0ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType0ExceedBl = this._srcRateType0ExceedBl;
    }
    if (this._srcRateType0ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType0ExceedDrop = this._srcRateType0ExceedDrop;
    }
    if (this._srcRateType1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType1Exceed = this._srcRateType1Exceed;
    }
    if (this._srcRateType1ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType1ExceedBl = this._srcRateType1ExceedBl;
    }
    if (this._srcRateType1ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType1ExceedDrop = this._srcRateType1ExceedDrop;
    }
    if (this._srcRateType2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType2Exceed = this._srcRateType2Exceed;
    }
    if (this._srcRateType2ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType2ExceedBl = this._srcRateType2ExceedBl;
    }
    if (this._srcRateType2ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateType2ExceedDrop = this._srcRateType2ExceedDrop;
    }
    if (this._srcZoneServiceEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceEntryAged = this._srcZoneServiceEntryAged;
    }
    if (this._srcZoneServiceEntryHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceEntryHit = this._srcZoneServiceEntryHit;
    }
    if (this._srcZoneServiceEntryLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceEntryLearned = this._srcZoneServiceEntryLearned;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeBl = this._typeBl;
    }
    if (this._typeDenyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeDenyDrop = this._typeDenyDrop;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    if (this._wildcardBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardBl = this._wildcardBl;
    }
    if (this._wildcardDenyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardDenyDrop = this._wildcardDenyDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bl = undefined;
      this._currentEsLevel = undefined;
      this._dstHwDrop = undefined;
      this._dstHwDropInserted = undefined;
      this._dstHwDropRemoved = undefined;
      this._dynamicCountWarn = undefined;
      this._ewInboundPortByteDrop = undefined;
      this._ewInboundPortByteRcv = undefined;
      this._ewInboundPortByteSent = undefined;
      this._ewInboundPortDrop = undefined;
      this._ewInboundPortRcv = undefined;
      this._ewInboundPortSent = undefined;
      this._ewOutboundPortByteDrop = undefined;
      this._ewOutboundPortByteRcv = undefined;
      this._ewOutboundPortByteSent = undefined;
      this._ewOutboundPortDrop = undefined;
      this._ewOutboundPortRcv = undefined;
      this._ewOutboundPortSent = undefined;
      this._exceedActionDrop = undefined;
      this._exceedActionTunnel = undefined;
      this._exceedDropBrateSrc = undefined;
      this._exceedDropBrateSrcPkt = undefined;
      this._exceedDropPrateSrc = undefined;
      this._filter1Match = undefined;
      this._filter2Match = undefined;
      this._filter3Match = undefined;
      this._filter4Match = undefined;
      this._filter5Match = undefined;
      this._filterActionBlacklist = undefined;
      this._filterActionDefaultPass = undefined;
      this._filterActionDrop = undefined;
      this._filterNoneMatch = undefined;
      this._filterTotalNotMatch = undefined;
      this._fragDrop = undefined;
      this._fragRcvd = undefined;
      this._fragTimeout = undefined;
      this._icmpv4RfcUndefDrop = undefined;
      this._icmpv6RfcUndefDrop = undefined;
      this._ipFilteringBl = undefined;
      this._ipFilteringDrop = undefined;
      this._noPolicyClassListMatch = undefined;
      this._noRouteDrop = undefined;
      this._outboundPortBytes = undefined;
      this._outboundPortBytesDrop = undefined;
      this._outboundPortBytesSent = undefined;
      this._outboundPortDrop = undefined;
      this._outboundPortPktSent = undefined;
      this._outboundPortRcvd = undefined;
      this._portBytes = undefined;
      this._portBytesDrop = undefined;
      this._portBytesSent = undefined;
      this._portDrop = undefined;
      this._portKbitRateExceed = undefined;
      this._portKbitRateExceedPkt = undefined;
      this._portPktRateExceed = undefined;
      this._portPktSent = undefined;
      this._portRcvd = undefined;
      this._portSrcBl = undefined;
      this._portSrcEscalation = undefined;
      this._rateType0Exceed = undefined;
      this._rateType0ExceedBl = undefined;
      this._rateType0ExceedDrop = undefined;
      this._rateType1Exceed = undefined;
      this._rateType1ExceedBl = undefined;
      this._rateType1ExceedDrop = undefined;
      this._rateType2Exceed = undefined;
      this._rateType2ExceedBl = undefined;
      this._rateType2ExceedDrop = undefined;
      this._sameSportDportDrop = undefined;
      this._secondaryPortHit = undefined;
      this._secondaryPortKbitRateExceed = undefined;
      this._secondaryPortKbitRateExceedPkt = undefined;
      this._secondaryPortPktRateExceed = undefined;
      this._sflowExternalPacketsSent = undefined;
      this._sflowExternalSamplesPacked = undefined;
      this._sflowInternalPacketsSent = undefined;
      this._sflowInternalSamplesPacked = undefined;
      this._srcDrop = undefined;
      this._srcFragDrop = undefined;
      this._srcHwDrop = undefined;
      this._srcHwDropInserted = undefined;
      this._srcHwDropRemoved = undefined;
      this._srcLearnOverflow = undefined;
      this._srcRateType0Exceed = undefined;
      this._srcRateType0ExceedBl = undefined;
      this._srcRateType0ExceedDrop = undefined;
      this._srcRateType1Exceed = undefined;
      this._srcRateType1ExceedBl = undefined;
      this._srcRateType1ExceedDrop = undefined;
      this._srcRateType2Exceed = undefined;
      this._srcRateType2ExceedBl = undefined;
      this._srcRateType2ExceedDrop = undefined;
      this._srcZoneServiceEntryAged = undefined;
      this._srcZoneServiceEntryHit = undefined;
      this._srcZoneServiceEntryLearned = undefined;
      this._type = undefined;
      this._typeBl = undefined;
      this._typeDenyDrop = undefined;
      this._wildcard = undefined;
      this._wildcardBl = undefined;
      this._wildcardDenyDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bl = value.bl;
      this._currentEsLevel = value.currentEsLevel;
      this._dstHwDrop = value.dstHwDrop;
      this._dstHwDropInserted = value.dstHwDropInserted;
      this._dstHwDropRemoved = value.dstHwDropRemoved;
      this._dynamicCountWarn = value.dynamicCountWarn;
      this._ewInboundPortByteDrop = value.ewInboundPortByteDrop;
      this._ewInboundPortByteRcv = value.ewInboundPortByteRcv;
      this._ewInboundPortByteSent = value.ewInboundPortByteSent;
      this._ewInboundPortDrop = value.ewInboundPortDrop;
      this._ewInboundPortRcv = value.ewInboundPortRcv;
      this._ewInboundPortSent = value.ewInboundPortSent;
      this._ewOutboundPortByteDrop = value.ewOutboundPortByteDrop;
      this._ewOutboundPortByteRcv = value.ewOutboundPortByteRcv;
      this._ewOutboundPortByteSent = value.ewOutboundPortByteSent;
      this._ewOutboundPortDrop = value.ewOutboundPortDrop;
      this._ewOutboundPortRcv = value.ewOutboundPortRcv;
      this._ewOutboundPortSent = value.ewOutboundPortSent;
      this._exceedActionDrop = value.exceedActionDrop;
      this._exceedActionTunnel = value.exceedActionTunnel;
      this._exceedDropBrateSrc = value.exceedDropBrateSrc;
      this._exceedDropBrateSrcPkt = value.exceedDropBrateSrcPkt;
      this._exceedDropPrateSrc = value.exceedDropPrateSrc;
      this._filter1Match = value.filter1Match;
      this._filter2Match = value.filter2Match;
      this._filter3Match = value.filter3Match;
      this._filter4Match = value.filter4Match;
      this._filter5Match = value.filter5Match;
      this._filterActionBlacklist = value.filterActionBlacklist;
      this._filterActionDefaultPass = value.filterActionDefaultPass;
      this._filterActionDrop = value.filterActionDrop;
      this._filterNoneMatch = value.filterNoneMatch;
      this._filterTotalNotMatch = value.filterTotalNotMatch;
      this._fragDrop = value.fragDrop;
      this._fragRcvd = value.fragRcvd;
      this._fragTimeout = value.fragTimeout;
      this._icmpv4RfcUndefDrop = value.icmpv4RfcUndefDrop;
      this._icmpv6RfcUndefDrop = value.icmpv6RfcUndefDrop;
      this._ipFilteringBl = value.ipFilteringBl;
      this._ipFilteringDrop = value.ipFilteringDrop;
      this._noPolicyClassListMatch = value.noPolicyClassListMatch;
      this._noRouteDrop = value.noRouteDrop;
      this._outboundPortBytes = value.outboundPortBytes;
      this._outboundPortBytesDrop = value.outboundPortBytesDrop;
      this._outboundPortBytesSent = value.outboundPortBytesSent;
      this._outboundPortDrop = value.outboundPortDrop;
      this._outboundPortPktSent = value.outboundPortPktSent;
      this._outboundPortRcvd = value.outboundPortRcvd;
      this._portBytes = value.portBytes;
      this._portBytesDrop = value.portBytesDrop;
      this._portBytesSent = value.portBytesSent;
      this._portDrop = value.portDrop;
      this._portKbitRateExceed = value.portKbitRateExceed;
      this._portKbitRateExceedPkt = value.portKbitRateExceedPkt;
      this._portPktRateExceed = value.portPktRateExceed;
      this._portPktSent = value.portPktSent;
      this._portRcvd = value.portRcvd;
      this._portSrcBl = value.portSrcBl;
      this._portSrcEscalation = value.portSrcEscalation;
      this._rateType0Exceed = value.rateType0Exceed;
      this._rateType0ExceedBl = value.rateType0ExceedBl;
      this._rateType0ExceedDrop = value.rateType0ExceedDrop;
      this._rateType1Exceed = value.rateType1Exceed;
      this._rateType1ExceedBl = value.rateType1ExceedBl;
      this._rateType1ExceedDrop = value.rateType1ExceedDrop;
      this._rateType2Exceed = value.rateType2Exceed;
      this._rateType2ExceedBl = value.rateType2ExceedBl;
      this._rateType2ExceedDrop = value.rateType2ExceedDrop;
      this._sameSportDportDrop = value.sameSportDportDrop;
      this._secondaryPortHit = value.secondaryPortHit;
      this._secondaryPortKbitRateExceed = value.secondaryPortKbitRateExceed;
      this._secondaryPortKbitRateExceedPkt = value.secondaryPortKbitRateExceedPkt;
      this._secondaryPortPktRateExceed = value.secondaryPortPktRateExceed;
      this._sflowExternalPacketsSent = value.sflowExternalPacketsSent;
      this._sflowExternalSamplesPacked = value.sflowExternalSamplesPacked;
      this._sflowInternalPacketsSent = value.sflowInternalPacketsSent;
      this._sflowInternalSamplesPacked = value.sflowInternalSamplesPacked;
      this._srcDrop = value.srcDrop;
      this._srcFragDrop = value.srcFragDrop;
      this._srcHwDrop = value.srcHwDrop;
      this._srcHwDropInserted = value.srcHwDropInserted;
      this._srcHwDropRemoved = value.srcHwDropRemoved;
      this._srcLearnOverflow = value.srcLearnOverflow;
      this._srcRateType0Exceed = value.srcRateType0Exceed;
      this._srcRateType0ExceedBl = value.srcRateType0ExceedBl;
      this._srcRateType0ExceedDrop = value.srcRateType0ExceedDrop;
      this._srcRateType1Exceed = value.srcRateType1Exceed;
      this._srcRateType1ExceedBl = value.srcRateType1ExceedBl;
      this._srcRateType1ExceedDrop = value.srcRateType1ExceedDrop;
      this._srcRateType2Exceed = value.srcRateType2Exceed;
      this._srcRateType2ExceedBl = value.srcRateType2ExceedBl;
      this._srcRateType2ExceedDrop = value.srcRateType2ExceedDrop;
      this._srcZoneServiceEntryAged = value.srcZoneServiceEntryAged;
      this._srcZoneServiceEntryHit = value.srcZoneServiceEntryHit;
      this._srcZoneServiceEntryLearned = value.srcZoneServiceEntryLearned;
      this._type = value.type;
      this._typeBl = value.typeBl;
      this._typeDenyDrop = value.typeDenyDrop;
      this._wildcard = value.wildcard;
      this._wildcardBl = value.wildcardBl;
      this._wildcardDenyDrop = value.wildcardDenyDrop;
    }
  }

  // bl - computed: false, optional: true, required: false
  private _bl?: number; 
  public get bl() {
    return this.getNumberAttribute('bl');
  }
  public set bl(value: number) {
    this._bl = value;
  }
  public resetBl() {
    this._bl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blInput() {
    return this._bl;
  }

  // current_es_level - computed: false, optional: true, required: false
  private _currentEsLevel?: number; 
  public get currentEsLevel() {
    return this.getNumberAttribute('current_es_level');
  }
  public set currentEsLevel(value: number) {
    this._currentEsLevel = value;
  }
  public resetCurrentEsLevel() {
    this._currentEsLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentEsLevelInput() {
    return this._currentEsLevel;
  }

  // dst_hw_drop - computed: false, optional: true, required: false
  private _dstHwDrop?: number; 
  public get dstHwDrop() {
    return this.getNumberAttribute('dst_hw_drop');
  }
  public set dstHwDrop(value: number) {
    this._dstHwDrop = value;
  }
  public resetDstHwDrop() {
    this._dstHwDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropInput() {
    return this._dstHwDrop;
  }

  // dst_hw_drop_inserted - computed: false, optional: true, required: false
  private _dstHwDropInserted?: number; 
  public get dstHwDropInserted() {
    return this.getNumberAttribute('dst_hw_drop_inserted');
  }
  public set dstHwDropInserted(value: number) {
    this._dstHwDropInserted = value;
  }
  public resetDstHwDropInserted() {
    this._dstHwDropInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropInsertedInput() {
    return this._dstHwDropInserted;
  }

  // dst_hw_drop_removed - computed: false, optional: true, required: false
  private _dstHwDropRemoved?: number; 
  public get dstHwDropRemoved() {
    return this.getNumberAttribute('dst_hw_drop_removed');
  }
  public set dstHwDropRemoved(value: number) {
    this._dstHwDropRemoved = value;
  }
  public resetDstHwDropRemoved() {
    this._dstHwDropRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropRemovedInput() {
    return this._dstHwDropRemoved;
  }

  // dynamic_count_warn - computed: false, optional: true, required: false
  private _dynamicCountWarn?: number; 
  public get dynamicCountWarn() {
    return this.getNumberAttribute('dynamic_count_warn');
  }
  public set dynamicCountWarn(value: number) {
    this._dynamicCountWarn = value;
  }
  public resetDynamicCountWarn() {
    this._dynamicCountWarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicCountWarnInput() {
    return this._dynamicCountWarn;
  }

  // ew_inbound_port_byte_drop - computed: false, optional: true, required: false
  private _ewInboundPortByteDrop?: number; 
  public get ewInboundPortByteDrop() {
    return this.getNumberAttribute('ew_inbound_port_byte_drop');
  }
  public set ewInboundPortByteDrop(value: number) {
    this._ewInboundPortByteDrop = value;
  }
  public resetEwInboundPortByteDrop() {
    this._ewInboundPortByteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortByteDropInput() {
    return this._ewInboundPortByteDrop;
  }

  // ew_inbound_port_byte_rcv - computed: false, optional: true, required: false
  private _ewInboundPortByteRcv?: number; 
  public get ewInboundPortByteRcv() {
    return this.getNumberAttribute('ew_inbound_port_byte_rcv');
  }
  public set ewInboundPortByteRcv(value: number) {
    this._ewInboundPortByteRcv = value;
  }
  public resetEwInboundPortByteRcv() {
    this._ewInboundPortByteRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortByteRcvInput() {
    return this._ewInboundPortByteRcv;
  }

  // ew_inbound_port_byte_sent - computed: false, optional: true, required: false
  private _ewInboundPortByteSent?: number; 
  public get ewInboundPortByteSent() {
    return this.getNumberAttribute('ew_inbound_port_byte_sent');
  }
  public set ewInboundPortByteSent(value: number) {
    this._ewInboundPortByteSent = value;
  }
  public resetEwInboundPortByteSent() {
    this._ewInboundPortByteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortByteSentInput() {
    return this._ewInboundPortByteSent;
  }

  // ew_inbound_port_drop - computed: false, optional: true, required: false
  private _ewInboundPortDrop?: number; 
  public get ewInboundPortDrop() {
    return this.getNumberAttribute('ew_inbound_port_drop');
  }
  public set ewInboundPortDrop(value: number) {
    this._ewInboundPortDrop = value;
  }
  public resetEwInboundPortDrop() {
    this._ewInboundPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortDropInput() {
    return this._ewInboundPortDrop;
  }

  // ew_inbound_port_rcv - computed: false, optional: true, required: false
  private _ewInboundPortRcv?: number; 
  public get ewInboundPortRcv() {
    return this.getNumberAttribute('ew_inbound_port_rcv');
  }
  public set ewInboundPortRcv(value: number) {
    this._ewInboundPortRcv = value;
  }
  public resetEwInboundPortRcv() {
    this._ewInboundPortRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortRcvInput() {
    return this._ewInboundPortRcv;
  }

  // ew_inbound_port_sent - computed: false, optional: true, required: false
  private _ewInboundPortSent?: number; 
  public get ewInboundPortSent() {
    return this.getNumberAttribute('ew_inbound_port_sent');
  }
  public set ewInboundPortSent(value: number) {
    this._ewInboundPortSent = value;
  }
  public resetEwInboundPortSent() {
    this._ewInboundPortSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewInboundPortSentInput() {
    return this._ewInboundPortSent;
  }

  // ew_outbound_port_byte_drop - computed: false, optional: true, required: false
  private _ewOutboundPortByteDrop?: number; 
  public get ewOutboundPortByteDrop() {
    return this.getNumberAttribute('ew_outbound_port_byte_drop');
  }
  public set ewOutboundPortByteDrop(value: number) {
    this._ewOutboundPortByteDrop = value;
  }
  public resetEwOutboundPortByteDrop() {
    this._ewOutboundPortByteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortByteDropInput() {
    return this._ewOutboundPortByteDrop;
  }

  // ew_outbound_port_byte_rcv - computed: false, optional: true, required: false
  private _ewOutboundPortByteRcv?: number; 
  public get ewOutboundPortByteRcv() {
    return this.getNumberAttribute('ew_outbound_port_byte_rcv');
  }
  public set ewOutboundPortByteRcv(value: number) {
    this._ewOutboundPortByteRcv = value;
  }
  public resetEwOutboundPortByteRcv() {
    this._ewOutboundPortByteRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortByteRcvInput() {
    return this._ewOutboundPortByteRcv;
  }

  // ew_outbound_port_byte_sent - computed: false, optional: true, required: false
  private _ewOutboundPortByteSent?: number; 
  public get ewOutboundPortByteSent() {
    return this.getNumberAttribute('ew_outbound_port_byte_sent');
  }
  public set ewOutboundPortByteSent(value: number) {
    this._ewOutboundPortByteSent = value;
  }
  public resetEwOutboundPortByteSent() {
    this._ewOutboundPortByteSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortByteSentInput() {
    return this._ewOutboundPortByteSent;
  }

  // ew_outbound_port_drop - computed: false, optional: true, required: false
  private _ewOutboundPortDrop?: number; 
  public get ewOutboundPortDrop() {
    return this.getNumberAttribute('ew_outbound_port_drop');
  }
  public set ewOutboundPortDrop(value: number) {
    this._ewOutboundPortDrop = value;
  }
  public resetEwOutboundPortDrop() {
    this._ewOutboundPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortDropInput() {
    return this._ewOutboundPortDrop;
  }

  // ew_outbound_port_rcv - computed: false, optional: true, required: false
  private _ewOutboundPortRcv?: number; 
  public get ewOutboundPortRcv() {
    return this.getNumberAttribute('ew_outbound_port_rcv');
  }
  public set ewOutboundPortRcv(value: number) {
    this._ewOutboundPortRcv = value;
  }
  public resetEwOutboundPortRcv() {
    this._ewOutboundPortRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortRcvInput() {
    return this._ewOutboundPortRcv;
  }

  // ew_outbound_port_sent - computed: false, optional: true, required: false
  private _ewOutboundPortSent?: number; 
  public get ewOutboundPortSent() {
    return this.getNumberAttribute('ew_outbound_port_sent');
  }
  public set ewOutboundPortSent(value: number) {
    this._ewOutboundPortSent = value;
  }
  public resetEwOutboundPortSent() {
    this._ewOutboundPortSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewOutboundPortSentInput() {
    return this._ewOutboundPortSent;
  }

  // exceed_action_drop - computed: false, optional: true, required: false
  private _exceedActionDrop?: number; 
  public get exceedActionDrop() {
    return this.getNumberAttribute('exceed_action_drop');
  }
  public set exceedActionDrop(value: number) {
    this._exceedActionDrop = value;
  }
  public resetExceedActionDrop() {
    this._exceedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionDropInput() {
    return this._exceedActionDrop;
  }

  // exceed_action_tunnel - computed: false, optional: true, required: false
  private _exceedActionTunnel?: number; 
  public get exceedActionTunnel() {
    return this.getNumberAttribute('exceed_action_tunnel');
  }
  public set exceedActionTunnel(value: number) {
    this._exceedActionTunnel = value;
  }
  public resetExceedActionTunnel() {
    this._exceedActionTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionTunnelInput() {
    return this._exceedActionTunnel;
  }

  // exceed_drop_brate_src - computed: false, optional: true, required: false
  private _exceedDropBrateSrc?: number; 
  public get exceedDropBrateSrc() {
    return this.getNumberAttribute('exceed_drop_brate_src');
  }
  public set exceedDropBrateSrc(value: number) {
    this._exceedDropBrateSrc = value;
  }
  public resetExceedDropBrateSrc() {
    this._exceedDropBrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropBrateSrcInput() {
    return this._exceedDropBrateSrc;
  }

  // exceed_drop_brate_src_pkt - computed: false, optional: true, required: false
  private _exceedDropBrateSrcPkt?: number; 
  public get exceedDropBrateSrcPkt() {
    return this.getNumberAttribute('exceed_drop_brate_src_pkt');
  }
  public set exceedDropBrateSrcPkt(value: number) {
    this._exceedDropBrateSrcPkt = value;
  }
  public resetExceedDropBrateSrcPkt() {
    this._exceedDropBrateSrcPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropBrateSrcPktInput() {
    return this._exceedDropBrateSrcPkt;
  }

  // exceed_drop_prate_src - computed: false, optional: true, required: false
  private _exceedDropPrateSrc?: number; 
  public get exceedDropPrateSrc() {
    return this.getNumberAttribute('exceed_drop_prate_src');
  }
  public set exceedDropPrateSrc(value: number) {
    this._exceedDropPrateSrc = value;
  }
  public resetExceedDropPrateSrc() {
    this._exceedDropPrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropPrateSrcInput() {
    return this._exceedDropPrateSrc;
  }

  // filter1_match - computed: false, optional: true, required: false
  private _filter1Match?: number; 
  public get filter1Match() {
    return this.getNumberAttribute('filter1_match');
  }
  public set filter1Match(value: number) {
    this._filter1Match = value;
  }
  public resetFilter1Match() {
    this._filter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter1MatchInput() {
    return this._filter1Match;
  }

  // filter2_match - computed: false, optional: true, required: false
  private _filter2Match?: number; 
  public get filter2Match() {
    return this.getNumberAttribute('filter2_match');
  }
  public set filter2Match(value: number) {
    this._filter2Match = value;
  }
  public resetFilter2Match() {
    this._filter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter2MatchInput() {
    return this._filter2Match;
  }

  // filter3_match - computed: false, optional: true, required: false
  private _filter3Match?: number; 
  public get filter3Match() {
    return this.getNumberAttribute('filter3_match');
  }
  public set filter3Match(value: number) {
    this._filter3Match = value;
  }
  public resetFilter3Match() {
    this._filter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter3MatchInput() {
    return this._filter3Match;
  }

  // filter4_match - computed: false, optional: true, required: false
  private _filter4Match?: number; 
  public get filter4Match() {
    return this.getNumberAttribute('filter4_match');
  }
  public set filter4Match(value: number) {
    this._filter4Match = value;
  }
  public resetFilter4Match() {
    this._filter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter4MatchInput() {
    return this._filter4Match;
  }

  // filter5_match - computed: false, optional: true, required: false
  private _filter5Match?: number; 
  public get filter5Match() {
    return this.getNumberAttribute('filter5_match');
  }
  public set filter5Match(value: number) {
    this._filter5Match = value;
  }
  public resetFilter5Match() {
    this._filter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filter5MatchInput() {
    return this._filter5Match;
  }

  // filter_action_blacklist - computed: false, optional: true, required: false
  private _filterActionBlacklist?: number; 
  public get filterActionBlacklist() {
    return this.getNumberAttribute('filter_action_blacklist');
  }
  public set filterActionBlacklist(value: number) {
    this._filterActionBlacklist = value;
  }
  public resetFilterActionBlacklist() {
    this._filterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionBlacklistInput() {
    return this._filterActionBlacklist;
  }

  // filter_action_default_pass - computed: false, optional: true, required: false
  private _filterActionDefaultPass?: number; 
  public get filterActionDefaultPass() {
    return this.getNumberAttribute('filter_action_default_pass');
  }
  public set filterActionDefaultPass(value: number) {
    this._filterActionDefaultPass = value;
  }
  public resetFilterActionDefaultPass() {
    this._filterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionDefaultPassInput() {
    return this._filterActionDefaultPass;
  }

  // filter_action_drop - computed: false, optional: true, required: false
  private _filterActionDrop?: number; 
  public get filterActionDrop() {
    return this.getNumberAttribute('filter_action_drop');
  }
  public set filterActionDrop(value: number) {
    this._filterActionDrop = value;
  }
  public resetFilterActionDrop() {
    this._filterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionDropInput() {
    return this._filterActionDrop;
  }

  // filter_none_match - computed: false, optional: true, required: false
  private _filterNoneMatch?: number; 
  public get filterNoneMatch() {
    return this.getNumberAttribute('filter_none_match');
  }
  public set filterNoneMatch(value: number) {
    this._filterNoneMatch = value;
  }
  public resetFilterNoneMatch() {
    this._filterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNoneMatchInput() {
    return this._filterNoneMatch;
  }

  // filter_total_not_match - computed: false, optional: true, required: false
  private _filterTotalNotMatch?: number; 
  public get filterTotalNotMatch() {
    return this.getNumberAttribute('filter_total_not_match');
  }
  public set filterTotalNotMatch(value: number) {
    this._filterTotalNotMatch = value;
  }
  public resetFilterTotalNotMatch() {
    this._filterTotalNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTotalNotMatchInput() {
    return this._filterTotalNotMatch;
  }

  // frag_drop - computed: false, optional: true, required: false
  private _fragDrop?: number; 
  public get fragDrop() {
    return this.getNumberAttribute('frag_drop');
  }
  public set fragDrop(value: number) {
    this._fragDrop = value;
  }
  public resetFragDrop() {
    this._fragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragDropInput() {
    return this._fragDrop;
  }

  // frag_rcvd - computed: false, optional: true, required: false
  private _fragRcvd?: number; 
  public get fragRcvd() {
    return this.getNumberAttribute('frag_rcvd');
  }
  public set fragRcvd(value: number) {
    this._fragRcvd = value;
  }
  public resetFragRcvd() {
    this._fragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragRcvdInput() {
    return this._fragRcvd;
  }

  // frag_timeout - computed: false, optional: true, required: false
  private _fragTimeout?: number; 
  public get fragTimeout() {
    return this.getNumberAttribute('frag_timeout');
  }
  public set fragTimeout(value: number) {
    this._fragTimeout = value;
  }
  public resetFragTimeout() {
    this._fragTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragTimeoutInput() {
    return this._fragTimeout;
  }

  // icmpv4_rfc_undef_drop - computed: false, optional: true, required: false
  private _icmpv4RfcUndefDrop?: number; 
  public get icmpv4RfcUndefDrop() {
    return this.getNumberAttribute('icmpv4_rfc_undef_drop');
  }
  public set icmpv4RfcUndefDrop(value: number) {
    this._icmpv4RfcUndefDrop = value;
  }
  public resetIcmpv4RfcUndefDrop() {
    this._icmpv4RfcUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4RfcUndefDropInput() {
    return this._icmpv4RfcUndefDrop;
  }

  // icmpv6_rfc_undef_drop - computed: false, optional: true, required: false
  private _icmpv6RfcUndefDrop?: number; 
  public get icmpv6RfcUndefDrop() {
    return this.getNumberAttribute('icmpv6_rfc_undef_drop');
  }
  public set icmpv6RfcUndefDrop(value: number) {
    this._icmpv6RfcUndefDrop = value;
  }
  public resetIcmpv6RfcUndefDrop() {
    this._icmpv6RfcUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RfcUndefDropInput() {
    return this._icmpv6RfcUndefDrop;
  }

  // ip_filtering_bl - computed: false, optional: true, required: false
  private _ipFilteringBl?: number; 
  public get ipFilteringBl() {
    return this.getNumberAttribute('ip_filtering_bl');
  }
  public set ipFilteringBl(value: number) {
    this._ipFilteringBl = value;
  }
  public resetIpFilteringBl() {
    this._ipFilteringBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringBlInput() {
    return this._ipFilteringBl;
  }

  // ip_filtering_drop - computed: false, optional: true, required: false
  private _ipFilteringDrop?: number; 
  public get ipFilteringDrop() {
    return this.getNumberAttribute('ip_filtering_drop');
  }
  public set ipFilteringDrop(value: number) {
    this._ipFilteringDrop = value;
  }
  public resetIpFilteringDrop() {
    this._ipFilteringDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilteringDropInput() {
    return this._ipFilteringDrop;
  }

  // no_policy_class_list_match - computed: false, optional: true, required: false
  private _noPolicyClassListMatch?: number; 
  public get noPolicyClassListMatch() {
    return this.getNumberAttribute('no_policy_class_list_match');
  }
  public set noPolicyClassListMatch(value: number) {
    this._noPolicyClassListMatch = value;
  }
  public resetNoPolicyClassListMatch() {
    this._noPolicyClassListMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPolicyClassListMatchInput() {
    return this._noPolicyClassListMatch;
  }

  // no_route_drop - computed: false, optional: true, required: false
  private _noRouteDrop?: number; 
  public get noRouteDrop() {
    return this.getNumberAttribute('no_route_drop');
  }
  public set noRouteDrop(value: number) {
    this._noRouteDrop = value;
  }
  public resetNoRouteDrop() {
    this._noRouteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteDropInput() {
    return this._noRouteDrop;
  }

  // outbound_port_bytes - computed: false, optional: true, required: false
  private _outboundPortBytes?: number; 
  public get outboundPortBytes() {
    return this.getNumberAttribute('outbound_port_bytes');
  }
  public set outboundPortBytes(value: number) {
    this._outboundPortBytes = value;
  }
  public resetOutboundPortBytes() {
    this._outboundPortBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesInput() {
    return this._outboundPortBytes;
  }

  // outbound_port_bytes_drop - computed: false, optional: true, required: false
  private _outboundPortBytesDrop?: number; 
  public get outboundPortBytesDrop() {
    return this.getNumberAttribute('outbound_port_bytes_drop');
  }
  public set outboundPortBytesDrop(value: number) {
    this._outboundPortBytesDrop = value;
  }
  public resetOutboundPortBytesDrop() {
    this._outboundPortBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesDropInput() {
    return this._outboundPortBytesDrop;
  }

  // outbound_port_bytes_sent - computed: false, optional: true, required: false
  private _outboundPortBytesSent?: number; 
  public get outboundPortBytesSent() {
    return this.getNumberAttribute('outbound_port_bytes_sent');
  }
  public set outboundPortBytesSent(value: number) {
    this._outboundPortBytesSent = value;
  }
  public resetOutboundPortBytesSent() {
    this._outboundPortBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesSentInput() {
    return this._outboundPortBytesSent;
  }

  // outbound_port_drop - computed: false, optional: true, required: false
  private _outboundPortDrop?: number; 
  public get outboundPortDrop() {
    return this.getNumberAttribute('outbound_port_drop');
  }
  public set outboundPortDrop(value: number) {
    this._outboundPortDrop = value;
  }
  public resetOutboundPortDrop() {
    this._outboundPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortDropInput() {
    return this._outboundPortDrop;
  }

  // outbound_port_pkt_sent - computed: false, optional: true, required: false
  private _outboundPortPktSent?: number; 
  public get outboundPortPktSent() {
    return this.getNumberAttribute('outbound_port_pkt_sent');
  }
  public set outboundPortPktSent(value: number) {
    this._outboundPortPktSent = value;
  }
  public resetOutboundPortPktSent() {
    this._outboundPortPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortPktSentInput() {
    return this._outboundPortPktSent;
  }

  // outbound_port_rcvd - computed: false, optional: true, required: false
  private _outboundPortRcvd?: number; 
  public get outboundPortRcvd() {
    return this.getNumberAttribute('outbound_port_rcvd');
  }
  public set outboundPortRcvd(value: number) {
    this._outboundPortRcvd = value;
  }
  public resetOutboundPortRcvd() {
    this._outboundPortRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortRcvdInput() {
    return this._outboundPortRcvd;
  }

  // port_bytes - computed: false, optional: true, required: false
  private _portBytes?: number; 
  public get portBytes() {
    return this.getNumberAttribute('port_bytes');
  }
  public set portBytes(value: number) {
    this._portBytes = value;
  }
  public resetPortBytes() {
    this._portBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesInput() {
    return this._portBytes;
  }

  // port_bytes_drop - computed: false, optional: true, required: false
  private _portBytesDrop?: number; 
  public get portBytesDrop() {
    return this.getNumberAttribute('port_bytes_drop');
  }
  public set portBytesDrop(value: number) {
    this._portBytesDrop = value;
  }
  public resetPortBytesDrop() {
    this._portBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesDropInput() {
    return this._portBytesDrop;
  }

  // port_bytes_sent - computed: false, optional: true, required: false
  private _portBytesSent?: number; 
  public get portBytesSent() {
    return this.getNumberAttribute('port_bytes_sent');
  }
  public set portBytesSent(value: number) {
    this._portBytesSent = value;
  }
  public resetPortBytesSent() {
    this._portBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesSentInput() {
    return this._portBytesSent;
  }

  // port_drop - computed: false, optional: true, required: false
  private _portDrop?: number; 
  public get portDrop() {
    return this.getNumberAttribute('port_drop');
  }
  public set portDrop(value: number) {
    this._portDrop = value;
  }
  public resetPortDrop() {
    this._portDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDropInput() {
    return this._portDrop;
  }

  // port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _portKbitRateExceed?: number; 
  public get portKbitRateExceed() {
    return this.getNumberAttribute('port_kbit_rate_exceed');
  }
  public set portKbitRateExceed(value: number) {
    this._portKbitRateExceed = value;
  }
  public resetPortKbitRateExceed() {
    this._portKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKbitRateExceedInput() {
    return this._portKbitRateExceed;
  }

  // port_kbit_rate_exceed_pkt - computed: false, optional: true, required: false
  private _portKbitRateExceedPkt?: number; 
  public get portKbitRateExceedPkt() {
    return this.getNumberAttribute('port_kbit_rate_exceed_pkt');
  }
  public set portKbitRateExceedPkt(value: number) {
    this._portKbitRateExceedPkt = value;
  }
  public resetPortKbitRateExceedPkt() {
    this._portKbitRateExceedPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKbitRateExceedPktInput() {
    return this._portKbitRateExceedPkt;
  }

  // port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _portPktRateExceed?: number; 
  public get portPktRateExceed() {
    return this.getNumberAttribute('port_pkt_rate_exceed');
  }
  public set portPktRateExceed(value: number) {
    this._portPktRateExceed = value;
  }
  public resetPortPktRateExceed() {
    this._portPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPktRateExceedInput() {
    return this._portPktRateExceed;
  }

  // port_pkt_sent - computed: false, optional: true, required: false
  private _portPktSent?: number; 
  public get portPktSent() {
    return this.getNumberAttribute('port_pkt_sent');
  }
  public set portPktSent(value: number) {
    this._portPktSent = value;
  }
  public resetPortPktSent() {
    this._portPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPktSentInput() {
    return this._portPktSent;
  }

  // port_rcvd - computed: false, optional: true, required: false
  private _portRcvd?: number; 
  public get portRcvd() {
    return this.getNumberAttribute('port_rcvd');
  }
  public set portRcvd(value: number) {
    this._portRcvd = value;
  }
  public resetPortRcvd() {
    this._portRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRcvdInput() {
    return this._portRcvd;
  }

  // port_src_bl - computed: false, optional: true, required: false
  private _portSrcBl?: number; 
  public get portSrcBl() {
    return this.getNumberAttribute('port_src_bl');
  }
  public set portSrcBl(value: number) {
    this._portSrcBl = value;
  }
  public resetPortSrcBl() {
    this._portSrcBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSrcBlInput() {
    return this._portSrcBl;
  }

  // port_src_escalation - computed: false, optional: true, required: false
  private _portSrcEscalation?: number; 
  public get portSrcEscalation() {
    return this.getNumberAttribute('port_src_escalation');
  }
  public set portSrcEscalation(value: number) {
    this._portSrcEscalation = value;
  }
  public resetPortSrcEscalation() {
    this._portSrcEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSrcEscalationInput() {
    return this._portSrcEscalation;
  }

  // rate_type0_exceed - computed: false, optional: true, required: false
  private _rateType0Exceed?: number; 
  public get rateType0Exceed() {
    return this.getNumberAttribute('rate_type0_exceed');
  }
  public set rateType0Exceed(value: number) {
    this._rateType0Exceed = value;
  }
  public resetRateType0Exceed() {
    this._rateType0Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType0ExceedInput() {
    return this._rateType0Exceed;
  }

  // rate_type0_exceed_bl - computed: false, optional: true, required: false
  private _rateType0ExceedBl?: number; 
  public get rateType0ExceedBl() {
    return this.getNumberAttribute('rate_type0_exceed_bl');
  }
  public set rateType0ExceedBl(value: number) {
    this._rateType0ExceedBl = value;
  }
  public resetRateType0ExceedBl() {
    this._rateType0ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType0ExceedBlInput() {
    return this._rateType0ExceedBl;
  }

  // rate_type0_exceed_drop - computed: false, optional: true, required: false
  private _rateType0ExceedDrop?: number; 
  public get rateType0ExceedDrop() {
    return this.getNumberAttribute('rate_type0_exceed_drop');
  }
  public set rateType0ExceedDrop(value: number) {
    this._rateType0ExceedDrop = value;
  }
  public resetRateType0ExceedDrop() {
    this._rateType0ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType0ExceedDropInput() {
    return this._rateType0ExceedDrop;
  }

  // rate_type1_exceed - computed: false, optional: true, required: false
  private _rateType1Exceed?: number; 
  public get rateType1Exceed() {
    return this.getNumberAttribute('rate_type1_exceed');
  }
  public set rateType1Exceed(value: number) {
    this._rateType1Exceed = value;
  }
  public resetRateType1Exceed() {
    this._rateType1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType1ExceedInput() {
    return this._rateType1Exceed;
  }

  // rate_type1_exceed_bl - computed: false, optional: true, required: false
  private _rateType1ExceedBl?: number; 
  public get rateType1ExceedBl() {
    return this.getNumberAttribute('rate_type1_exceed_bl');
  }
  public set rateType1ExceedBl(value: number) {
    this._rateType1ExceedBl = value;
  }
  public resetRateType1ExceedBl() {
    this._rateType1ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType1ExceedBlInput() {
    return this._rateType1ExceedBl;
  }

  // rate_type1_exceed_drop - computed: false, optional: true, required: false
  private _rateType1ExceedDrop?: number; 
  public get rateType1ExceedDrop() {
    return this.getNumberAttribute('rate_type1_exceed_drop');
  }
  public set rateType1ExceedDrop(value: number) {
    this._rateType1ExceedDrop = value;
  }
  public resetRateType1ExceedDrop() {
    this._rateType1ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType1ExceedDropInput() {
    return this._rateType1ExceedDrop;
  }

  // rate_type2_exceed - computed: false, optional: true, required: false
  private _rateType2Exceed?: number; 
  public get rateType2Exceed() {
    return this.getNumberAttribute('rate_type2_exceed');
  }
  public set rateType2Exceed(value: number) {
    this._rateType2Exceed = value;
  }
  public resetRateType2Exceed() {
    this._rateType2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType2ExceedInput() {
    return this._rateType2Exceed;
  }

  // rate_type2_exceed_bl - computed: false, optional: true, required: false
  private _rateType2ExceedBl?: number; 
  public get rateType2ExceedBl() {
    return this.getNumberAttribute('rate_type2_exceed_bl');
  }
  public set rateType2ExceedBl(value: number) {
    this._rateType2ExceedBl = value;
  }
  public resetRateType2ExceedBl() {
    this._rateType2ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType2ExceedBlInput() {
    return this._rateType2ExceedBl;
  }

  // rate_type2_exceed_drop - computed: false, optional: true, required: false
  private _rateType2ExceedDrop?: number; 
  public get rateType2ExceedDrop() {
    return this.getNumberAttribute('rate_type2_exceed_drop');
  }
  public set rateType2ExceedDrop(value: number) {
    this._rateType2ExceedDrop = value;
  }
  public resetRateType2ExceedDrop() {
    this._rateType2ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType2ExceedDropInput() {
    return this._rateType2ExceedDrop;
  }

  // same_sport_dport_drop - computed: false, optional: true, required: false
  private _sameSportDportDrop?: number; 
  public get sameSportDportDrop() {
    return this.getNumberAttribute('same_sport_dport_drop');
  }
  public set sameSportDportDrop(value: number) {
    this._sameSportDportDrop = value;
  }
  public resetSameSportDportDrop() {
    this._sameSportDportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSportDportDropInput() {
    return this._sameSportDportDrop;
  }

  // secondary_port_hit - computed: false, optional: true, required: false
  private _secondaryPortHit?: number; 
  public get secondaryPortHit() {
    return this.getNumberAttribute('secondary_port_hit');
  }
  public set secondaryPortHit(value: number) {
    this._secondaryPortHit = value;
  }
  public resetSecondaryPortHit() {
    this._secondaryPortHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortHitInput() {
    return this._secondaryPortHit;
  }

  // secondary_port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _secondaryPortKbitRateExceed?: number; 
  public get secondaryPortKbitRateExceed() {
    return this.getNumberAttribute('secondary_port_kbit_rate_exceed');
  }
  public set secondaryPortKbitRateExceed(value: number) {
    this._secondaryPortKbitRateExceed = value;
  }
  public resetSecondaryPortKbitRateExceed() {
    this._secondaryPortKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortKbitRateExceedInput() {
    return this._secondaryPortKbitRateExceed;
  }

  // secondary_port_kbit_rate_exceed_pkt - computed: false, optional: true, required: false
  private _secondaryPortKbitRateExceedPkt?: number; 
  public get secondaryPortKbitRateExceedPkt() {
    return this.getNumberAttribute('secondary_port_kbit_rate_exceed_pkt');
  }
  public set secondaryPortKbitRateExceedPkt(value: number) {
    this._secondaryPortKbitRateExceedPkt = value;
  }
  public resetSecondaryPortKbitRateExceedPkt() {
    this._secondaryPortKbitRateExceedPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortKbitRateExceedPktInput() {
    return this._secondaryPortKbitRateExceedPkt;
  }

  // secondary_port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _secondaryPortPktRateExceed?: number; 
  public get secondaryPortPktRateExceed() {
    return this.getNumberAttribute('secondary_port_pkt_rate_exceed');
  }
  public set secondaryPortPktRateExceed(value: number) {
    this._secondaryPortPktRateExceed = value;
  }
  public resetSecondaryPortPktRateExceed() {
    this._secondaryPortPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortPktRateExceedInput() {
    return this._secondaryPortPktRateExceed;
  }

  // sflow_external_packets_sent - computed: false, optional: true, required: false
  private _sflowExternalPacketsSent?: number; 
  public get sflowExternalPacketsSent() {
    return this.getNumberAttribute('sflow_external_packets_sent');
  }
  public set sflowExternalPacketsSent(value: number) {
    this._sflowExternalPacketsSent = value;
  }
  public resetSflowExternalPacketsSent() {
    this._sflowExternalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowExternalPacketsSentInput() {
    return this._sflowExternalPacketsSent;
  }

  // sflow_external_samples_packed - computed: false, optional: true, required: false
  private _sflowExternalSamplesPacked?: number; 
  public get sflowExternalSamplesPacked() {
    return this.getNumberAttribute('sflow_external_samples_packed');
  }
  public set sflowExternalSamplesPacked(value: number) {
    this._sflowExternalSamplesPacked = value;
  }
  public resetSflowExternalSamplesPacked() {
    this._sflowExternalSamplesPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowExternalSamplesPackedInput() {
    return this._sflowExternalSamplesPacked;
  }

  // sflow_internal_packets_sent - computed: false, optional: true, required: false
  private _sflowInternalPacketsSent?: number; 
  public get sflowInternalPacketsSent() {
    return this.getNumberAttribute('sflow_internal_packets_sent');
  }
  public set sflowInternalPacketsSent(value: number) {
    this._sflowInternalPacketsSent = value;
  }
  public resetSflowInternalPacketsSent() {
    this._sflowInternalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInternalPacketsSentInput() {
    return this._sflowInternalPacketsSent;
  }

  // sflow_internal_samples_packed - computed: false, optional: true, required: false
  private _sflowInternalSamplesPacked?: number; 
  public get sflowInternalSamplesPacked() {
    return this.getNumberAttribute('sflow_internal_samples_packed');
  }
  public set sflowInternalSamplesPacked(value: number) {
    this._sflowInternalSamplesPacked = value;
  }
  public resetSflowInternalSamplesPacked() {
    this._sflowInternalSamplesPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInternalSamplesPackedInput() {
    return this._sflowInternalSamplesPacked;
  }

  // src_drop - computed: false, optional: true, required: false
  private _srcDrop?: number; 
  public get srcDrop() {
    return this.getNumberAttribute('src_drop');
  }
  public set srcDrop(value: number) {
    this._srcDrop = value;
  }
  public resetSrcDrop() {
    this._srcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDropInput() {
    return this._srcDrop;
  }

  // src_frag_drop - computed: false, optional: true, required: false
  private _srcFragDrop?: number; 
  public get srcFragDrop() {
    return this.getNumberAttribute('src_frag_drop');
  }
  public set srcFragDrop(value: number) {
    this._srcFragDrop = value;
  }
  public resetSrcFragDrop() {
    this._srcFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragDropInput() {
    return this._srcFragDrop;
  }

  // src_hw_drop - computed: false, optional: true, required: false
  private _srcHwDrop?: number; 
  public get srcHwDrop() {
    return this.getNumberAttribute('src_hw_drop');
  }
  public set srcHwDrop(value: number) {
    this._srcHwDrop = value;
  }
  public resetSrcHwDrop() {
    this._srcHwDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropInput() {
    return this._srcHwDrop;
  }

  // src_hw_drop_inserted - computed: false, optional: true, required: false
  private _srcHwDropInserted?: number; 
  public get srcHwDropInserted() {
    return this.getNumberAttribute('src_hw_drop_inserted');
  }
  public set srcHwDropInserted(value: number) {
    this._srcHwDropInserted = value;
  }
  public resetSrcHwDropInserted() {
    this._srcHwDropInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropInsertedInput() {
    return this._srcHwDropInserted;
  }

  // src_hw_drop_removed - computed: false, optional: true, required: false
  private _srcHwDropRemoved?: number; 
  public get srcHwDropRemoved() {
    return this.getNumberAttribute('src_hw_drop_removed');
  }
  public set srcHwDropRemoved(value: number) {
    this._srcHwDropRemoved = value;
  }
  public resetSrcHwDropRemoved() {
    this._srcHwDropRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropRemovedInput() {
    return this._srcHwDropRemoved;
  }

  // src_learn_overflow - computed: false, optional: true, required: false
  private _srcLearnOverflow?: number; 
  public get srcLearnOverflow() {
    return this.getNumberAttribute('src_learn_overflow');
  }
  public set srcLearnOverflow(value: number) {
    this._srcLearnOverflow = value;
  }
  public resetSrcLearnOverflow() {
    this._srcLearnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcLearnOverflowInput() {
    return this._srcLearnOverflow;
  }

  // src_rate_type0_exceed - computed: false, optional: true, required: false
  private _srcRateType0Exceed?: number; 
  public get srcRateType0Exceed() {
    return this.getNumberAttribute('src_rate_type0_exceed');
  }
  public set srcRateType0Exceed(value: number) {
    this._srcRateType0Exceed = value;
  }
  public resetSrcRateType0Exceed() {
    this._srcRateType0Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType0ExceedInput() {
    return this._srcRateType0Exceed;
  }

  // src_rate_type0_exceed_bl - computed: false, optional: true, required: false
  private _srcRateType0ExceedBl?: number; 
  public get srcRateType0ExceedBl() {
    return this.getNumberAttribute('src_rate_type0_exceed_bl');
  }
  public set srcRateType0ExceedBl(value: number) {
    this._srcRateType0ExceedBl = value;
  }
  public resetSrcRateType0ExceedBl() {
    this._srcRateType0ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType0ExceedBlInput() {
    return this._srcRateType0ExceedBl;
  }

  // src_rate_type0_exceed_drop - computed: false, optional: true, required: false
  private _srcRateType0ExceedDrop?: number; 
  public get srcRateType0ExceedDrop() {
    return this.getNumberAttribute('src_rate_type0_exceed_drop');
  }
  public set srcRateType0ExceedDrop(value: number) {
    this._srcRateType0ExceedDrop = value;
  }
  public resetSrcRateType0ExceedDrop() {
    this._srcRateType0ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType0ExceedDropInput() {
    return this._srcRateType0ExceedDrop;
  }

  // src_rate_type1_exceed - computed: false, optional: true, required: false
  private _srcRateType1Exceed?: number; 
  public get srcRateType1Exceed() {
    return this.getNumberAttribute('src_rate_type1_exceed');
  }
  public set srcRateType1Exceed(value: number) {
    this._srcRateType1Exceed = value;
  }
  public resetSrcRateType1Exceed() {
    this._srcRateType1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType1ExceedInput() {
    return this._srcRateType1Exceed;
  }

  // src_rate_type1_exceed_bl - computed: false, optional: true, required: false
  private _srcRateType1ExceedBl?: number; 
  public get srcRateType1ExceedBl() {
    return this.getNumberAttribute('src_rate_type1_exceed_bl');
  }
  public set srcRateType1ExceedBl(value: number) {
    this._srcRateType1ExceedBl = value;
  }
  public resetSrcRateType1ExceedBl() {
    this._srcRateType1ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType1ExceedBlInput() {
    return this._srcRateType1ExceedBl;
  }

  // src_rate_type1_exceed_drop - computed: false, optional: true, required: false
  private _srcRateType1ExceedDrop?: number; 
  public get srcRateType1ExceedDrop() {
    return this.getNumberAttribute('src_rate_type1_exceed_drop');
  }
  public set srcRateType1ExceedDrop(value: number) {
    this._srcRateType1ExceedDrop = value;
  }
  public resetSrcRateType1ExceedDrop() {
    this._srcRateType1ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType1ExceedDropInput() {
    return this._srcRateType1ExceedDrop;
  }

  // src_rate_type2_exceed - computed: false, optional: true, required: false
  private _srcRateType2Exceed?: number; 
  public get srcRateType2Exceed() {
    return this.getNumberAttribute('src_rate_type2_exceed');
  }
  public set srcRateType2Exceed(value: number) {
    this._srcRateType2Exceed = value;
  }
  public resetSrcRateType2Exceed() {
    this._srcRateType2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType2ExceedInput() {
    return this._srcRateType2Exceed;
  }

  // src_rate_type2_exceed_bl - computed: false, optional: true, required: false
  private _srcRateType2ExceedBl?: number; 
  public get srcRateType2ExceedBl() {
    return this.getNumberAttribute('src_rate_type2_exceed_bl');
  }
  public set srcRateType2ExceedBl(value: number) {
    this._srcRateType2ExceedBl = value;
  }
  public resetSrcRateType2ExceedBl() {
    this._srcRateType2ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType2ExceedBlInput() {
    return this._srcRateType2ExceedBl;
  }

  // src_rate_type2_exceed_drop - computed: false, optional: true, required: false
  private _srcRateType2ExceedDrop?: number; 
  public get srcRateType2ExceedDrop() {
    return this.getNumberAttribute('src_rate_type2_exceed_drop');
  }
  public set srcRateType2ExceedDrop(value: number) {
    this._srcRateType2ExceedDrop = value;
  }
  public resetSrcRateType2ExceedDrop() {
    this._srcRateType2ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateType2ExceedDropInput() {
    return this._srcRateType2ExceedDrop;
  }

  // src_zone_service_entry_aged - computed: false, optional: true, required: false
  private _srcZoneServiceEntryAged?: number; 
  public get srcZoneServiceEntryAged() {
    return this.getNumberAttribute('src_zone_service_entry_aged');
  }
  public set srcZoneServiceEntryAged(value: number) {
    this._srcZoneServiceEntryAged = value;
  }
  public resetSrcZoneServiceEntryAged() {
    this._srcZoneServiceEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceEntryAgedInput() {
    return this._srcZoneServiceEntryAged;
  }

  // src_zone_service_entry_hit - computed: false, optional: true, required: false
  private _srcZoneServiceEntryHit?: number; 
  public get srcZoneServiceEntryHit() {
    return this.getNumberAttribute('src_zone_service_entry_hit');
  }
  public set srcZoneServiceEntryHit(value: number) {
    this._srcZoneServiceEntryHit = value;
  }
  public resetSrcZoneServiceEntryHit() {
    this._srcZoneServiceEntryHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceEntryHitInput() {
    return this._srcZoneServiceEntryHit;
  }

  // src_zone_service_entry_learned - computed: false, optional: true, required: false
  private _srcZoneServiceEntryLearned?: number; 
  public get srcZoneServiceEntryLearned() {
    return this.getNumberAttribute('src_zone_service_entry_learned');
  }
  public set srcZoneServiceEntryLearned(value: number) {
    this._srcZoneServiceEntryLearned = value;
  }
  public resetSrcZoneServiceEntryLearned() {
    this._srcZoneServiceEntryLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceEntryLearnedInput() {
    return this._srcZoneServiceEntryLearned;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_bl - computed: false, optional: true, required: false
  private _typeBl?: number; 
  public get typeBl() {
    return this.getNumberAttribute('type_bl');
  }
  public set typeBl(value: number) {
    this._typeBl = value;
  }
  public resetTypeBl() {
    this._typeBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeBlInput() {
    return this._typeBl;
  }

  // type_deny_drop - computed: false, optional: true, required: false
  private _typeDenyDrop?: number; 
  public get typeDenyDrop() {
    return this.getNumberAttribute('type_deny_drop');
  }
  public set typeDenyDrop(value: number) {
    this._typeDenyDrop = value;
  }
  public resetTypeDenyDrop() {
    this._typeDenyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDenyDropInput() {
    return this._typeDenyDrop;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: number; 
  public get wildcard() {
    return this.getNumberAttribute('wildcard');
  }
  public set wildcard(value: number) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // wildcard_bl - computed: false, optional: true, required: false
  private _wildcardBl?: number; 
  public get wildcardBl() {
    return this.getNumberAttribute('wildcard_bl');
  }
  public set wildcardBl(value: number) {
    this._wildcardBl = value;
  }
  public resetWildcardBl() {
    this._wildcardBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardBlInput() {
    return this._wildcardBl;
  }

  // wildcard_deny_drop - computed: false, optional: true, required: false
  private _wildcardDenyDrop?: number; 
  public get wildcardDenyDrop() {
    return this.getNumberAttribute('wildcard_deny_drop');
  }
  public set wildcardDenyDrop(value: number) {
    this._wildcardDenyDrop = value;
  }
  public resetWildcardDenyDrop() {
    this._wildcardDenyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardDenyDropInput() {
    return this._wildcardDenyDrop;
  }
}
export interface DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStats {
  /**
  * ipproto_icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#ipproto_icmp DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp#ipproto_icmp}
  */
  readonly ipprotoIcmp?: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmp;
}

export function ddosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsToTerraform(struct?: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsOutputReference | DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipproto_icmp: ddosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpToTerraform(struct!.ipprotoIcmp),
  }
}


export function ddosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsToHclTerraform(struct?: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsOutputReference | DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipproto_icmp: {
      value: ddosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpToHclTerraform(struct!.ipprotoIcmp),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipprotoIcmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipprotoIcmp = this._ipprotoIcmp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipprotoIcmp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipprotoIcmp.internalValue = value.ipprotoIcmp;
    }
  }

  // ipproto_icmp - computed: false, optional: true, required: false
  private _ipprotoIcmp = new DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmpOutputReference(this, "ipproto_icmp");
  public get ipprotoIcmp() {
    return this._ipprotoIcmp;
  }
  public putIpprotoIcmp(value: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsIpprotoIcmp) {
    this._ipprotoIcmp.internalValue = value;
  }
  public resetIpprotoIcmp() {
    this._ipprotoIcmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipprotoIcmpInput() {
    return this._ipprotoIcmp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp thunder_ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp}
*/
export class DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp to import
  * @param importFromId The id of the existing DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneIpProtoProtoNameStatsIpprotoIcmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp thunder_ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_ip_proto_proto_name_stats_ipproto_icmp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._protocol = config.protocol;
    this._zoneName = config.zoneName;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      stats: ddosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: ddosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneIpProtoProtoNameStatsIpprotoIcmpStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
